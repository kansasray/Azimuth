# curate-course 框架契約

> 這份文件是給**不會再讀原始碼**的模型/人看的完整參考，目的是照著它從零建一門新課程
> （例如「地圖學與軍用陸地導航」）。所有欄位、規則、判準都對照過原始碼；不確定或
> 有風險的地方在文中明講，不臆測。
>
> 讀取範圍：`.claude/skills/curate-course/`、`.claude/workflows/curate-chapter.js`、
> `Makefile`、`pyproject.toml`、`package.json`、`src/build/*.py`、`src/build/course.schema.json`、
> `courses/gym/`（範例課）、`docs/*.md`、`tests/*.test.js`。版本：框架 `pyproject.toml`
> `project.version = 2.0.0`（`frameworkVersion` 只認主版號）。

---

## 0. 全景與心智模型

這是一個 **topic-agnostic** 的「策展 YouTube 影片課程網站」框架。框架本身（`src/`）
不認識任何主題；一門課的全部內容住在 `courses/<名字>/`（或框架自帶的 `examples/<名字>/`）
底下，由三類東西組成：

```
courses/<你的課>/
  course.config.json   ← 站台設定：站台資訊、UI 文案、章節配額、稽核門檻、證據分級…
  data/                ← 策展資料：章節 JSON、多語言替代影片、實證查核 JSON、video-meta 快取
  assets/               ← 這門課專屬的 favicon、og.png、圖示 sprite（可覆寫框架同名檔）
  taxonomy/              ← 選用：肌群/詞彙等分面與分類模組（純 Python）
```

`src/build/` 是建置/稽核/驗證的 Python 腳本（零依賴，只用標準庫）；`src/web/` 是前端
（純 ES module，無 build step，也零依賴）。`dist/<課名>/` 是建置產物，`.gitignore` 掉。

**每個指令都要帶 `COURSE=<路徑>`**（只有一門課時可以省略，見 §1）。

---

## 1. Q1 — 新增一門課的完整步驟

### 1.1 建立骨架

```bash
make new-course NAME=nav-course              # → courses/nav-course/
make new-course NAME=nav-course DIR=courses/nav-course   # 同上，DIR 可省略
```

實作：`src/build/new_course.py`。行為：

- `NAME` 只能是小寫英數與連字號（`^[a-z0-9][a-z0-9-]*[a-z0-9]$`），因為它會直接變成
  `site.project`（餵給 Cloudflare Pages 專案名 + localStorage 前綴）。
- 把 `src/build/templates/new-course/` 整份 `copytree` 到 `courses/<NAME>/`，內容只有：
  `course.config.json`（只含**必填**欄位：`site`/`hero`/`ui`(部分)/`kinds`/`chapters`/`footer`）、
  `data/ch1.json`（`{"chapter":"CH1","units":[]}`）、`data/video-meta.json`（`{}`）、
  `assets/.gitkeep`。
- 樣板裡的 `__PROJECT__`/`__NAME__`/`__FRAMEWORK_VERSION__` 佔位符會被換成 `NAME` 與
  **當下框架的版號**（不是寫死 `2.0.0`，是讀 `pyproject.toml` 現值）。
- `$schema` 的相對路徑會依 `courses/<NAME>/` 的深度自動算好。
- **產出即可 `make build` 成功**（零單元也是合法的課）——這是骨架的驗收標準。

之後把 `courses/nav-course/course.config.json` 的內容依 §2 補齊，`data/ch1.json`
依 §3 填入真實策展資料。**沒有「produce 一門課」的一鍵指令**——`new-course` 只給殼，
內容永遠是人／agent 逐章策展寫進去的（見 §8 的半自動工作流程）。

### 1.2 COURSE 怎麼決定要建哪一門

唯一真相來源：`src/build/coursepath.py::resolve()`。規則只有三條：

1. 有設環境變數 `COURSE` → 用它（相對路徑相對於 repo 根目錄；也吃絕對路徑）。
2. 沒設，且 `courses/*/course.config.json` 或 `examples/*/course.config.json`
   剛好只找到一個 → 自動選它，並印出選到誰。
3. 沒設，找到兩個以上 → **直接報錯**並列出候選，要求明講。

一旦 `courses/gym/` 與 `courses/nav-course/` 同時存在，**每個指令都必須帶 `COURSE=`**：

```bash
COURSE=courses/nav-course make build
COURSE=courses/nav-course make audit
```

`make courses` 隨時可以看目前有哪些課、會建置哪一門（`→` 標記）。

`DIST` 預設 `dist/<courses 目錄的 basename>`，也可用環境變數 `DIST=` 覆寫；
不同課的 `DIST` 天生不同目錄，不會互相覆蓋。

### 1.3 各指令完整用法

全部定義在 `Makefile`（`PY := uv run python`；沒裝 `uv` 也可以直接用系統 `python3` 呼叫底下對應的
`src/build/*.py`，效果一樣）：

| 指令 | 實際執行 | 說明 |
|---|---|---|
| `make new-course NAME=x [DIR=...]` | `new_course.py` | 產生骨架 |
| `make courses` | `coursepath.py --list` | 列出所有課與目前選中的那門 |
| `COURSE=courses/x make build` | `build.py` | 合併 `data/*.json` → `$DIST/course.json`，含配額驗證，成功後**自動接著跑 `seo.py`**（JSON-LD／sitemap／robots.txt／llms.txt／og.html 全部一起產出） |
| `COURSE=courses/x make audit` | `audit.py` | 離線稽核（不打網路），見 §4 |
| `COURSE=courses/x make audit ARGS=--strict` | `audit.py --strict` | 警告也視為錯誤（Makefile 沒有內建 `ARGS` 變數，要跑就直接 `COURSE=courses/x uv run python src/build/audit.py --strict`） |
| `COURSE=courses/x make verify` | `verify_links.py && verify_refs.py` | 重打真實 API，見 §5、§6 |
| `COURSE=courses/x make icons` | `build_icons.py` | 重新打包 Lucide 圖示 sprite，需要網路 |
| `COURSE=courses/x make og` | 先 `build`，再用本機 headless Chrome 對 `$DIST/og.html` 截圖 → `courses/x/assets/og.png` | 需要本機裝 Chrome（`CHROME=` 可覆寫路徑）與 ImageMagick（`magick`） |
| `COURSE=courses/x PORT=8899 make serve` | `python3 -m http.server $PORT --directory $DIST` | 本機預覽，`PORT` 預設 8899 |
| `COURSE=courses/x make counter` | `setup_counter.py` | 選用：建 Cloudflare D1 瀏覽次數表，冪等 |
| `make test` | `node --test 'tests/*.test.js'` | 框架自己的前端邏輯測試（與課程內容無關） |
| `COURSE=courses/x make e2e` | build → 起本機 server → Playwright 跑 paywall 流程 | 需要 Chrome + Playwright |
| `make lint` / `make fmt` | `uv run ruff check .` / `format` | Python 程式碼風格（只影響 `src/`） |
| `COURSE=courses/x make check` | `lint build test audit`（依序） | 提交前建議跑這個 |
| `COURSE=courses/x make deploy` | 先 `build`，再 `npm exec --yes -- wrangler@4 pages deploy $DIST --project-name $PROJECT --branch main --commit-dirty=true` | 見 §7 |
| `make clean` | `rm -rf .tmp .wrangler .ruff_cache dist **/__pycache__` | 清暫存，**會清掉所有課的 `dist/`** |

`PROJECT` 這個 Makefile 變數是從 `$(COURSE)/course.config.json` 的 `site.project` 讀出來的
（`make deploy` 用它當 Cloudflare Pages 專案名）。

### 1.4 建新課的最小可行順序（給地圖學課的建議路徑）

1. `make new-course NAME=map-nav`
2. 依 §2 把 `course.config.json` 的 `site`/`hero`/`ui`/`kinds`/`chapters`/`nav`/`footer` 填好；
   **先決定要不要 `grades`（證據分級維度）——見 §5 這是本課最關鍵的決定**。
3. 依 §3 把每一章的 `data/<source>.json` 填好（可用 §8 的 `/curate-chapter` 半自動工作流程，
   一章一次）。
4. `COURSE=courses/map-nav make build`（配額必須先對；不對會直接失敗並印出差在哪）。
5. `COURSE=courses/map-nav make audit`，改到 0 錯誤。
6. `COURSE=courses/map-nav make verify`，改到 100% 通過。
7. `COURSE=courses/map-nav make icons`（新增任何 icon 名稱都要重跑一次）。
8. `COURSE=courses/map-nav make og`，把 `assets/og.png` 加進版控。
9. `COURSE=courses/map-nav make deploy`（需要 `.env` 或 `wrangler login`，見 §7）。

---

## 2. Q2 — `course.config.json` 完整 schema

正式定義：`src/build/course.schema.json`（JSON Schema draft-07，`make audit` 用它擋拼字/型別錯誤；
`ui`/`footer`/`stance`/`llms`/`landing` 是 `additionalProperties:false`——**沒宣告的欄位一律報錯**，
不是靜靜忽略）。頂層 `required`：`["site", "ui", "kinds", "chapters"]`（`ui` 雖必填但其下
所有欄位皆為選填）。以下逐區塊列出，「必填／選填」是相對於**該物件自己的 schema**。

### 2.1 頂層總覽

| 欄位 | 必／選 | 型別 | 說明 |
|---|---|---|---|
| `$schema` | 選 | string | 給編輯器自動完成，路徑要對齊實際深度 |
| `frameworkVersion` | **實質必填** | string，`^\d+\.\d+\.\d+$` | 沒填視為 v1，`make audit` 會直接報錯並指向 `docs/MIGRATION.md`。**只有主版號有意義** |
| `site` | 必 | object | 見 2.2 |
| `hero` | 選 | object | 首頁大標，支援 7 個文案佔位符（見 2.7） |
| `og` | 選 | object | 社群預覽圖文案，不填會退回 `hero`/`site` |
| `ui` | 必（但內容可空） | object | **所有介面文案 + 主題名詞**，見 2.3 |
| `kinds` | 必，minItems 1 | array\<labelled\> | 項目類型（如「檢測／訓練」），見 2.4 |
| `grades` | 選 | array\<labelled\> | 證據分級；**整組不寫 = 這門課沒有實證維度** |
| `evidence` | 選 | object | 證據階梯定義，見 §5 |
| `languages` | 選 | object\<string,string\> | 語言代碼 → 顯示名，例如 `{"zh":"繁中","en":"English"}` |
| `icons` | 選 | array\<icon\> | 設定檔欄位以外想用圖示時的逃生門 |
| `taxonomy` | 選 | object | `{facets, categories}`，各是一個 Python module 路徑 |
| `nav` | 選 | array | 側欄分組，**必須不多不少涵蓋所有章節** |
| `chapters` | 必，minItems 1 | array | 見 2.5 |
| `evidenceAlias` | 選 | object\<string,string\> | unit id → 實證資料 key |
| `stance` | 選 | object | 立場聲明頁文案 |
| `landing` | 選 | object | 首頁各區塊文案 |
| `footer` | 選 | object | 頁尾兩行 |
| `llms` | 選 | object | `llms.txt` 整份模板（見 2.8） |
| `paywall` | 選 | object | 0 元解鎖流程（demo），見 §7.4 |
| `counter` | 選 | object | 瀏覽次數徽章 |
| `discussions` | 選 | object | giscus 討論串設定 |
| `audit` | 選 | object | 稽核門檻，見 §4.2 |

### 2.2 `site`（必填區塊）

必填子欄位：`project`（`^[a-z0-9-]+$`，Cloudflare Pages 專案名）、`name`、`url`（`^https://`）、
`title`、`description`。選填：`locale`（BCP-47，如 `zh-Hant`）、`ogLocale`（如 `zh_TW`）、
`brandIcon`、`ogDescription`、`keywords[]`、`educationalLevel`、`audience`、`about[]`、
`learningResourceType[]`、`legacyStorePrefix`（僅供沿用舊 localStorage 資料的遷移用）。

gym 範例：
```jsonc
"site": {
  "project": "gym-course", "name": "高效健身訓練系統",
  "url": "https://gym-course.pages.dev",
  "locale": "zh-Hant", "ogLocale": "zh_TW", "brandIcon": "dumbbell",
  "title": "…", "description": "…", "keywords": ["重量訓練", …]
}
```

**不設 `locale` 就不宣告語言**（不會猜一個錯的塞給搜尋引擎）；`site.locale` 是
`zh-*` 才會觸發 §4 的中文 AI 寫作痕跡檢查。

### 2.3 `ui`（所有介面文案與主題名詞，`additionalProperties:false`）

沒有任何欄位是 schema 意義上的必填，但下列幾組**實質上一定要填**才能讓網站正確運作：

- `stats[]`：`{icon?, field(必), label(必)}`，`field` 必須是 build 產出的 `meta.*` 欄位之一
  （見 §4.2「統計欄位」）。
- `unitTypes`：`{型別id: 顯示名}` 的自由字典，`chapters[].source` 資料裡每個 unit 的 `type`
  都要落在這裡面（見 §3）。
- `problemType`：指定 `unitTypes` 裡哪一個型別要被算進「主題單元數」（JSON-LD 的 `teaches`、
  首頁 `{problems}` 佔位符都靠它）。**沒設就不猜、不宣告**——`ui.problemType` 對不到
  `unitTypes` 是 `make audit` 的錯誤。
- `evidenceRows[]`：`{field(必), label(必), type?: "text"|"flags"}`，決定單元層級實證卡片
  要顯示哪些欄位、標題叫什麼。
- **主題名詞**（全部有預設中文值，換主題**強烈建議全部覆寫**，見 §9 換主題陷阱）：
  `unitNoun`（預設「個單元」）、`lessonNoun`（「堂主課」）、`drillNoun`（「支跟練影片」）、
  `drillNounShort`（「支跟練」）、`kindFilterLabel`、`missingTitle`、`missingHint`、
  `lessonLangLabel`、`watchLabel`、`facetFilterHint`（可用 `{name}`）、`facetIcon`、
  `evidenceSource`（預設「OpenEvidence」——**這是可換的字串，不是寫死的資料來源**，
  見 §5）、`evidenceSourceLink`、`facetPrefix`、`categoryNoun`、`filterAllLabel`（預設「全部」）。
- 其餘一次性介面字串（`searchPlaceholder`、`playlistSearch`、`progressLabel`、`facetLabel`、
  `facetClear`、`assessmentLabel`、`unitEvidenceLabel`、`drillEvidenceLabel`、`tightLabel`、
  `weakLabel`、`lessonLabel`、`doneLabel`、`prevLabel`、`nextLabel`、`moreLabel`、
  `openExternal`、`emptyTitle`、`emptyHint`、`discussLabel`、`discussNote`）。
- `tabs`、`text`：自由字典，`text` 是給多語言前端字串查表用的逃生門
  （`t("key","中文預設")`，見 `src/web/js` 呼叫點與 `tests/i18n.test.js`）。

### 2.4 `kinds` / `grades`（`$defs/labelled`）

```jsonc
{ "id": "test", "label": "檢測", "tone": "attention" }
```
`id` 必填，`^[a-z0-9-]+$`；`label` 必填；`tone` 選填，只能是
`accent|success|attention|danger|done|neutral`（對應 `src/web/css/tokens.css` 的
`.Label--<tone>`，用了沒定義的值會被 `make audit` 擋）。`kinds` 至少 1 個；`grades`
可以整組不寫（見 §5）。

### 2.5 `chapters[]`

```jsonc
{ "code": "CH1", "title": "…", "icon": "compass", "source": "ch1", "units": 4, "drills": 20 }
```

| 欄位 | 必／選 | 說明 |
|---|---|---|
| `code` | 必 | `^[A-Z]+[0-9]*$`，全課唯一 |
| `title` | 必 | 章節標題 |
| `icon` | 必 | Lucide 圖示名，須跑過 `make icons` |
| `source` | 必 | 對應 `data/<source>.json`（不含副檔名）；**多章可共用一檔** |
| `units` | 必 | 整數，配額，**建置時強制檢查，不符直接失敗** |
| `drills` | 選（缺省視為 0） | 整數，同上 |

### 2.6 `evidenceAlias` / `stance` / `nav` / `taxonomy`

- `evidenceAlias`：`{unit id: 實證資料的 key}`。用在「多個單元共用同一份查核」的情境。
- `stance`：`{title, intro, outroTitle, outro, keyPrefix(預設 "concept-"), verdicts: {unit id: 一句話}}`。
  `keyPrefix` 開頭的 `conditions[].unit` 值不屬於任何章節，會被抽出來當首頁「立場聲明」，
  **數量不設上限**。
- `nav`：`[{title, chapters: [章節碼,...]}]`，**必須不多不少涵蓋所有 `chapters[].code`**。
- `taxonomy`：`{facets?: "模組路徑", categories?: "模組路徑"}`，兩個都選用，見 §3.5。

### 2.7 文案系統與七個數字佔位符

**鐵則：所有文案欄位一律先 HTML 逸出，然後只認得 `**粗體**`。** 寫 `<strong>` 會被
`make audit` 的「文案」區段直接擋下（錯誤，不是警告）。短欄位／屬性（`site.title`、
`ui.searchPlaceholder`、各種 `title=`）塞不下 `<strong>`，`**` 記號會被拿掉只留文字。
兩個例外：`og.title`/`og.lede` 的真正換行字元會變 `<br>`；`llms` 整區塊原樣輸出（見 2.8）。

七個文案佔位符（可用在 `hero.lede`、`landing.ctaLede`、`llms.*` 等大部分文案欄位）：

| token | 意義 |
|---|---|
| `{units}` | 影片欄位合計（主課＋項目，**不是**章節單元數） |
| `{lessonUnits}` | 章節單元數 |
| `{drillUnits}` | 項目（drill）數 |
| `{slots}` | 影片欄位總數（含多語言版本） |
| `{videos}` | 去重後的實際影片支數 |
| `{problems}` | `ui.problemType` 那一類的單元數 |
| `{evidence}` | 單元層級的查核則數 |

打錯字（例如 `{unit}`）**不會被靜靜吞掉**：原樣保留在字串裡，`make audit` 會報錯。

### 2.8 `llms` 區塊（`llms.txt` 的整份模板）

框架只提供 `#`/`##`/`-`/空行結構，一個字都不寫；沒宣告的欄位整段不輸出。
**這裡的記號是 `[[值]]`，不是 `{值}`**（因為 `audit.py` 用 `{(\w+)}` 掃佔位符打錯字，
會把 `{{durationHours}}` 誤讀成打錯字的 `{durationHours}`）。可用值：
`[[course]]` `[[url]]` `[[durationHours]]` `[[durationMinutes]]`（每欄位皆可用）；
`stanceItem` 另有 `[[name]]` `[[grade]]` `[[summary]]` `[[summaryShort]]`；
`chapterItem` 另有 `[[code]]` `[[title]]` `[[units]]` `[[unitCount]]`。
**`llms` 是文案契約裡唯一「不逸出、不展開 `**粗體**`」的出口**——它是純文字檔，
`**` 在那裡本來就是 Markdown 語法本身。子欄位：`summary`、`stanceTitle/Intro/Item/Conclusion`、
`chaptersTitle/chapterItem/unitSeparator`、`disclaimerTitle/disclaimer`、`footer`。

### 2.9 `evidenceSource` 是否寫死

**不是寫死的。** `ui.evidenceSource`（預設「OpenEvidence」）與 `ui.evidenceSourceLink`
只是**顯示字串**，框架程式碼裡不出現任何具體查證服務的名字。真正決定「引用來源」的是
§5 描述的 `pmid`/`doi` 二選一機制，與 `ui.evidenceSource` 這個文案完全無關——
換句話說你可以把 `evidenceSource` 改成「地圖學課程編輯部查證」，但底層引用格式仍然
只認 PubMed 或 Crossref 的識別碼（見 §5，這是本課最需要決策的地方）。

---

## 3. Q3 — 章節資料檔與周邊檔案的 schema

**重要前提：這些資料檔沒有正式 JSON Schema**（不像 `course.config.json` 有
`course.schema.json` 把關）。`audit.py`／`build.py` 用**內容判斷用途**（看頂層鍵是
`conditions`/`categories`/`lessons`/`chapters`/`chapter`/`units` 之一，不看檔名），
但對物件內部欄位只做**局部**、**ad hoc** 的檢查（型別、列舉值、字數下限等），
**未列在下面表格中的多餘欄位不會被擋，會被靜靜忽略**（沒有 `additionalProperties:false`
這種全面保護）。

### 3.1 章節資料檔 `data/<source>.json`

兩種外層形狀皆可（`build.py::main()` / `audit.py::walk()` 都同時支援）：

```jsonc
// 單章
{ "chapter": "CH1", "title": "章節標題", "units": [ …unit… ] }
// 多章共用一檔
{ "chapters": [ { "chapter": "CH1", "units": [...] }, { "chapter": "CH2", "units": [...] } ] }
```

**unit 物件欄位**：

| 欄位 | 必／選 | 型別 | 說明 |
|---|---|---|---|
| `id` | 實質必填 | string | 全課唯一；缺了會被 `audit_structure` 判錯（`make build` 會自動補一個 `<code小寫>-u<序>`，但不建議依賴這個 fallback） |
| `name` | 必 | string | 單元名稱 |
| `type` | 選 | string | 必須落在 `ui.unitTypes` 的 key 集合裡，否則 `make audit` 報錯 |
| `assessment` | 條件必填 | string | **讀者可自己做的判斷方法**，不是問題描述。`type` 落在 `audit.requireAssessment` 清單裡時，字數須 ≥ `audit.minAssessmentChars`（gym 用 80） |
| `tight` / `weak` | 選 | string[] | 兩欄對照（gym 用「容易代償的肌群／應主導發力的肌群」）；框架拿它們餵 `taxonomy.facets.extract()` 建分面索引，也可整個不用 |
| `lesson` | 選（無則整單元沒有主課） | object | `{title, channel, url, duration, why, lang?, note?}`。`url` 為 `null` 時**必須**有 `note` 說明查過什麼、為什麼不合格，否則 `make audit` 判為錯誤 |
| `drills` | 選（`concept`/`guide`/`program` 型別常給 `[]`） | array\<drill\> | 見下表 |

**drill 物件欄位**：

| 欄位 | 必／選 | 說明 |
|---|---|---|
| `name` | 必 | 項目名稱（同單元內不可重名） |
| `en` | 選 | 英文名稱 |
| `kind` | 必 | 必須是 `kinds[].id` 之一 |
| `target` | 選但強烈建議 | 用**頓號分隔的名詞**（不是句子！）——`taxonomy.categories.classify()` 與分面索引都靠比對這個欄位 |
| `dose` | 選 | 劑量/建議（gym 用「3 組 × 8–10 下」） |
| `title`/`channel`/`url`/`duration` | 同 lesson | `url` 為 `null` 時同樣要有 `note` |

`build.py` 執行時會**就地附加**這些欄位（策展資料不需要寫，寫了也會被覆蓋）：
`facets`（由 `taxonomy.facets.extract()` 算出）、`cat`/`catName`（由
`taxonomy.categories.classify()` 算出）、`evidence`（由 `evidenceAlias` 或 unit id 對照
`conditions` 得出）、`lessons[]`（`lesson` + 該單元所有 `alt-lessons-*` 條目）、以及
`duration`/`channel`/`views`（若 `video-meta.json` 有命中，會覆蓋策展資料裡手寫的值）。

### 3.2 `alt-lessons-<lang>-<source>.json`（多語言替代主課）

```jsonc
{ "lessons": [
  { "unit": "ch2-u1", "lang": "en", "title": "…", "channel": "…", "url": "https://…", "why": "…" }
] }
```

頂層鍵必須是 `lessons`（`build.py` 靠這個鍵抓，**不看檔名**）；`unit` 欄位是連接主資料檔的
key，值必須等於某個 unit 的 `id`，否則這筆資料就是孤兒（不報錯，但也不會出現在任何頁面）。
**這些影片會被 `make verify` 驗證、也會被 `fetch_meta.py` 補中繼資料，但不計入課程總時長**
（`build.py` 用 `id(v) in primary` 判斷是否為主要版本）。

檔名慣例是 `alt-lessons-<語言碼>-<章節 source>.json`（gym 範例：`alt-lessons-en-ch2.json`）。
**這個慣例對 `build.py`不重要**（它只看 `lessons` 鍵），**但 `audit.py::audit_videos()`
的影片欄位稽核會硬掃 `DATA.glob("alt-lessons-*.json")`**——不用這個前綴命名，
替代語言影片仍會被 build 收進課程，但不會被算進 `audit.py` 的影片統計/長度稽核。
**建議照慣例命名。**

### 3.3 `oe-<字母>.json`（單元層級實證）

頂層鍵 `conditions`（陣列）。每筆：

| 欄位 | 必／選 | 說明 |
|---|---|---|
| `unit` | 必 | 對到某個 unit `id`，**或**以 `stance.keyPrefix`（預設 `concept-`）開頭 → 變成首頁立場聲明。兩者皆非會被 `make audit` 判為「幽靈單元」（錯誤） |
| `name` | 必 | 主題名稱 |
| `evidence_grade` | 必（有設 `grades` 時） | 必須是 `grades[].id` 之一 |
| `summary` | 建議 | 整體結論 |
| 任意欄位（`mechanism`/`performance_effect`/`hypertrophy_strength`/`injury_link`/`assessment_validity`/…） | 選 | **由 `ui.evidenceRows[].field` 決定要不要顯示、顯示什麼標題**——這些欄位名不是框架寫死的，是 gym 課自己定義的；地圖學課可以完全換一組（例如 `terrainType`／`reliability`） |
| `red_flags` | 選 | string[]，`ui.evidenceRows` 若有一列 `type:"flags"` 對應這個欄位就會渲染成清單 |
| `caveats` | 有 `evidence.requireCaveats` 時條件必填 | 誠實寫出這個分級的爭議在哪 |
| `citations` | 必（有 `grades` 時） | 見 §5，每筆至少 `audit.minCitations` 篇 |

### 3.4 `drill-evidence-<N>.json`（類別層級實證）

頂層鍵 `categories`（陣列）。每筆：`id`（必，需與 `taxonomy.categories` 模組定義的類別 id
完全一致）、`name`（必）、`evidence_grade`（必，同上）、`summary`（建議）、`citations`（同 §5）。

### 3.5 `video-meta.json`（YouTube 中繼資料快取，非策展內容）

```jsonc
{ "<11碼videoId>": { "status": "OK", "seconds": 92, "views": 6737,
                      "channel": "頻道名", "title": "標題" } }
```

`status` 非 `"OK"` 時該影片在 `audit.py::audit_videos()` 會被列進 `dead`（錯誤）。
由 `src/build/fetch_meta.py --refresh`（或策展時用 `yt-dlp --batch-file`，見
`reference/curating.md`）產生，`build.py` 建置時用它**覆寫**策展資料裡手寫的
`duration`/`channel`/`views`（策展資料只是後備）。連接鍵是從 `url` 用正則
`(?:v=|youtu\.be/)([\w-]{11})` 抽出來的 video id，**不是**檔案路徑或 unit id。

### 3.6 `taxonomy/` 模組（選用，純 Python，不是 JSON）

`facets` 模組需提供 `extract(*texts) -> list[str]`、`GROUPS`、`GROUP_OF`；
`categories` 模組需提供 `classify(item: dict) -> str | None`、`NAMES`（`id -> 顯示名`）。
`classify()` 的 `item` 就是 drill 物件本身，**patterns 只能比對動作名/標題/target
這類「動作特徵」，不能用會出現在 `target` 裡的部位詞當 pattern**（否則會把所有以它為
目標的項目都吃進同一類——`quality.md` 記過這個坑，`audit.py::audit_taxonomy()` 用
`maxCategoryShare` 統計特徵去抓，但無法完全預防）。

---

## 4. Q4 — 配額與 audit 規則

### 4.1 `make build` 時哪些條件不符會直接失敗（`exit 1`）

- 任一章節的 `units`/`drills` 實際數量與 `course.config.json` 的配額對不上。
- `chapters[].source` 指到的資料檔不存在，或裡面找不到對應 `code` 的章節。
- 資料檔本身不是合法 JSON（`json.JSONDecodeError`，整片被跳過並算進 `problems`）。
- 同一單元內重複用同一支影片（`within_unit` 計數 > 1）。
- JSON-LD 的章節單元數合計與 `meta.lesson_units` 對不上（`seo.py::build_schema` 的自我一致性檢查）。
- `og.html` 模板用了設定裡沒有的欄位，或分級/統計計數對不上 `meta.evidence_checked`。
- `llms.txt` 的 `[[值]]` 用了未定義的值。
- （URL 格式不正確只印警告不會讓 `main()` 回傳非 0——**只有配額類 `problems` 才會讓
  `build.py` 的 `return 1`**；URL 格式問題會被列印但流程繼續。）

### 4.2 `make audit` 檢查什麼、門檻在哪、error 還是 warn

門檻讀 `course.config.json` 的 `audit` 區塊，沒寫的欄位落到 `audit.py::DEFAULTS`：

```jsonc
"audit": {
  "duration": { "lesson": {"min":"4:00","max":"22:00"}, "drill": {"min":"0:30","max":"10:00"} },
  "driftSeconds": 30, "minViews": 5000, "metaCoverage": 1,
  "drillsPerUnit": {"min":5,"max":18}, "maxSharedVideos": 50,
  "requireAssessment": ["movement","assessment"], "minAssessmentChars": 80,
  "minCitations": 2, "allowMissingUrls": 4,
  "copyStyle": {"maxDashRatio": 0.05}, "maxCategoryShare": 0.25,
  "maxChannelShare": 0.25, "minChapterLessonRatio": 0.6, "ignoreDataFiles": []
}
```
（以上是 gym 的實際設定值 + 框架 `DEFAULTS` 的補漏欄位；框架 `DEFAULTS` 本身略寬鬆，例如
`minViews:1000`、`metaCoverage:0.95`。）

六大稽核區段（`SECTIONS`），逐項列出判準與等級：

| 區段 | 檢查項 | 等級 |
|---|---|---|
| **設定檔** | `frameworkVersion` 主版號對不對 | 錯誤 |
| | schema 驗證（拼字/型別/`tone` 值） | 錯誤 |
| | 章節碼重複／來源檔不存在 | 錯誤 |
| | `nav` 沒涵蓋所有章節／指向幽靈章節/重複 | 錯誤 |
| | 圖示未打包進 sprite | 錯誤 |
| | `tone` 沒有對應 CSS 樣式 | 錯誤 |
| | `kinds`/`grades` id 重複 | 錯誤 |
| | taxonomy 模組匯入失敗或缺方法 | 錯誤 |
| | `ui.stats[].field` 對不到 build 產出的 meta 欄位 | 錯誤 |
| | `site.url` 與 `site.project` 對不起來 | 錯誤 |
| | `discussions.repo` 不是這個 checkout 的 origin（且非佔位符） | 錯誤 |
| | `discussions` 欄位仍是佔位值 `REPLACE_ME` | 警告 |
| | 資料檔頂層鍵打錯、沒人讀到 | 錯誤 |
| | 章節檔沒被任何 `chapters[].source` 指到 | 警告 |
| **文案** | 佔位符打錯字（`{unit}` 之類） | 錯誤 |
| | `index.html` 用到但設定檔缺的 `{{a.b}}` | 錯誤 |
| | 已建置產物裡殘留未替換的 `{{…}}` | 錯誤 |
| | 文案欄位寫了 HTML 標籤 | 錯誤 |
| | AI 寫作痕跡（否定式排比／宣傳語／模糊歸因／填充詞…） | **警告**（只在 `site.locale` 為 `zh-*` 時啟用） |
| | 破折號密度超過 `copyStyle.maxDashRatio` | 警告 |
| **主題耦合** | 前端寫死 `kind` id（不是靠 `renderFilterBar()` 生成） | 錯誤 |
| | 建置腳本寫死課程詞彙的 id | 警告 |
| | `ui.problemType` 不在 `ui.unitTypes` 裡 | 錯誤 |
| **結構與配額** | 各章 `units`/`drills` 配額不符 | 錯誤 |
| | 單元 id 重複／缺失 | 錯誤 |
| | drill 的 `kind` 不在 `kinds` 裡；unit 的 `type` 不在 `unitTypes` 裡 | 錯誤 |
| | 單元項目數超出 `drillsPerUnit` 區間 | 警告 |
| | 同單元內項目重名 | 錯誤 |
| | `evidenceAlias` 指向不存在的單元 | 錯誤 |
| | 單一分類佔比超過 `maxCategoryShare` | 警告 |
| **影片** | `video-meta.json` 覆蓋率低於 `metaCoverage` | 錯誤 |
| | 留空沒寫 `note` | 錯誤 |
| | 留空但有 `note`，數量超過 `allowMissingUrls` | 錯誤（未超過則警告） |
| | URL 格式不是合法 YouTube watch 網址 | 錯誤 |
| | 中繼資料標記為不可用狀態（非 `OK`） | 錯誤 |
| | 同單元內重複影片 | 錯誤 |
| | 跨單元共用超過 `maxSharedVideos` | 警告 |
| | 宣稱長度與實際誤差超過 `driftSeconds` | 警告 |
| | 長度超出 `duration.lesson`/`duration.drill` 區間 | 警告 |
| | 觀看數低於 `minViews` | 警告 |
| | 某章主課長度中位數遠低於全課中位（`minChapterLessonRatio`） | 警告 |
| | 單一頻道佔比超過 `maxChannelShare` | 警告 |
| **內容深度** | 指定 `unitType` 的單元缺可操作 `assessment`（< `minAssessmentChars`） | 錯誤 |
| | 主課沒寫 `why` | 警告 |
| | `evidence_grade` 不在 `grades` 裡 | 錯誤 |
| | 實證 `unit` 對不到單元也不是立場聲明 | 錯誤 |
| | 類別文獻篇數 < `minCitations` | 警告 |
| | 引用沒有合法 `pmid` 或 `doi`（格式檢查） | 錯誤 |
| | **證據分級撐不住引用**（`evidence.gradeRequires`，見 §5） | 錯誤 |
| | 引用完全沒標 `design` | 警告 |
| | `design` 值不在 `evidence.designTiers` 裡 | 警告 |
| | 高分級文獻偏舊（`evidence.maxAgeYears`） | 警告 |
| | 需要 caveats 的分級沒寫夠字（`evidence.requireCaveats`/`minCaveatChars`） | 錯誤 |
| | build 產物的統計數字與稽核自己數出來的對不上 | 錯誤 |

`evidence` 區塊（§5 詳述）**整組不寫就整組不檢查**，但 audit 會明講「沒檢查」而不是靜靜通過。
`grades` 整組不寫，內容深度區段的證據相關檢查全部自動跳過（不是假警報）。

### 4.3 `--strict` 與 `--json`

```bash
COURSE=courses/x uv run python src/build/audit.py            # 人看的報告，有錯誤 exit 1
COURSE=courses/x uv run python src/build/audit.py --strict    # 警告也算錯誤（exit 1）
COURSE=courses/x uv run python src/build/audit.py --json      # {errors[], warnings[], stats{}, ok}
```
`--json` 的每筆 `{section, message, detail[]}`，設計給 agent 逐條修、修完重跑到 `ok:true`。

---

## 5. Q5 — Evidence 機制能不能換掉 PubMed（本課最關鍵的問題）

### 5.1 `evidence_grade` 合法值

**完全由課程自訂**，不是框架寫死的列舉。合法值 = `course.config.json` 的 `grades[].id`
集合（gym 用 `strong`/`moderate`/`limited`/`contested`，但這只是慣例，可以換成任何字串）。
`grades` 整組不寫 = 宣告「這門課沒有實證維度」，framework 完全不檢查任何 evidence 欄位。

### 5.2 引用來源：**不是寫死 PubMed，但也不是任意來源**——只支援兩種識別碼

`reference/evidence.md`（第 89–150 行）與 `verify_refs.py` 明確支援兩條路：

| 領域 | 識別碼 | 查詢/驗證端點 | 需要金鑰 |
|---|---|---|---|
| 生醫、運動科學、復健、營養 | `pmid`（純數字，6–9 位） | PubMed E-utilities（`esearch`/`esummary`） | 不需要 |
| 人文社科、邏輯、哲學、論證理論 | `doi`（`10.` 開頭含 `/`） | Crossref REST API（`api.crossref.org/works`） | 不需要（但 User-Agent 要帶 `mailto:` 聯絡信箱，走 polite pool，見 `CROSSREF_MAILTO` 環境變數） |

**這是我逐行讀過原始碼後的判準，不是文件宣稱**：

- `audit.py::audit_depth()` 第 1436–1446 行——每筆 citation 檢查
  `ok_pmid = pmid.isdigit() and 6<=len(pmid)<=9`、`ok_doi = doi.startswith("10.") and "/" in doi`，
  `not (ok_pmid or ok_doi)` → **錯誤**（`bad_ref`）。
- `audit.py::audit_evidence_backing()` 第 1531–1535 行——同樣的 `pmid`/`doi` 格式檢查，
  兩者皆無 → 進 `unverifiable` 清單 → **錯誤**（「沒有識別碼就沒有人能覆核，在稽核上
  跟捏造的沒有分別」）。
- `verify_refs.py::collect()` 第 216–225 行——`LAYERS = (("categories","id"), ("conditions","unit"))`，
  每筆 citation 只認 `pmid`（`isdigit()`）或 `doi`（`startswith("10.")`），兩者皆無時
  `ident` 是空字串，進 `main()` 的 `bad_pmid` 清單（第 232 行）→ 印為錯誤 →
  第 355 行 `return 1 if (missing or bad_pmid or BROKEN or retracted) else 0`。

**`verify_refs.py --fix` 只會用 API 回傳值覆寫 `title`/`journal`/`year`；`design`
（研究設計層級）的自動填值 `design_of()`（第 62–79 行）只解析 PubMed 的 `pubtype`，
DOI／Crossref 這條路完全沒有這個自動填值**——`design` 對 DOI 引用來說永遠是手寫值，
框架不會替你覆核它。

### 5.3 結論：**框架目前沒有「manual/文件類」引用的容納方式**

沒有第三種識別碼、沒有「跳過線上驗證」的欄位、沒有 `unverified: true` 這類逃生門——
我在 `course.schema.json`（citation 形狀根本不在這份 schema 裡，因為它管的是
`course.config.json` 不是資料檔）、`audit.py`、`verify_refs.py`、`verify_changed.py`
四個檔案裡都沒找到任何 `isbn`/`manual`/`doc`/`url-only` 之類的第三條路。

軍用準則文件（如 **US Army TC 3-25.26**）這種既不在 PubMed、也不在 Crossref 的來源，
**用現有的 `citations[]` 結構寫進去會被 `make audit` 判錯，`make verify` 也會失敗
（exit 1）**——因為它既沒有 PMID 也沒有 DOI。

### 5.4 給你三個選項（都不是我替你決定，是需要你選一個）

1. **對這類主題整組不用 `grades`／`citations` 結構**（框架自己在 `evidence.md` 建議：
   「技藝、樂器、語言……多半不要用這一層，把 `grades` 整組拿掉比硬掛文獻誠實」）。
   軍用陸圖導航的程序性知識（怎麼用指北針、怎麼判讀等高線）本質上更接近「準則規範」
   而非「可實證的經驗命題」——這正是 `evidence.md` 說「不該硬掛文獻」的那一類。
   準則文件的出處可以寫進 `lesson.why`、`drill.note`、`assessment` 等自由文字欄位
   （不受 audit/verify 的引用格式檢查），只是不會出現在「實證查核」的結構化 UI 區塊裡。
2. **只對真的有學術文獻可查的子題保留 `grades`**（例如認知科學裡「地圖判讀能力」
   「空間定向訓練成效」這類確實可能上 PubMed 或被 Crossref 收錄的研究），
   其餘準則性內容（磁偏角換算公式、圖例判讀規則）走選項 1。這是**混合策略**，
   `evidence.md` 允許「兩個層級都可以只做一個或都不做」，沒有規定整門課只能二選一。
3. **修改框架本身**，在 `audit.py`（`bad_ref`／`audit_evidence_backing` 兩處）與
   `verify_refs.py`（`collect()`／`main()`）加第三種識別碼類型（例如 `"doc"` +
   一個可信的 URL/DOI-like 編號，`verify` 時只檢查 URL 是否可達而非查證內容）。
   **這是動到 `src/` 的真框架改動**——`SKILL.md` 第 49–50 行明講「改到 `src/` 底下
   任何一個檔案就是踩線了……真的非改不可，那是框架的 bug，開 issue」。這條路可行，
   但代表你會維護一份框架的分支，不再是單純套用上游更新。

**這件事直接影響 §1.4 步驟 2 的 `grades` 決策**，建議在寫 `course.config.json` 之前先定案。

---

## 6. Q6 — verify 階段

### 6.1 YouTube 連結驗證（`verify_links.py`）

用 oEmbed（**不是** yt-dlp、**不是** innertube——那兩個只回答「能不能播」，不回答
「能不能嵌入」，`reference/curating.md` 第 85–102 行明講這是最容易踩的坑）：

```
GET https://www.youtube.com/oembed?url=<url-encoded watch url>&format=json
```
`ThreadPoolExecutor(max_workers=12)` 併發打；帶一個桌面 Chrome 的 `User-Agent` 字串
（避免被當成爬蟲擋）。判定：

| HTTP | 判定 | 說明 |
|---|---|---|
| 200 | 存在且公開（`ok=True`） | 回傳的 `author_name`/`title` 供人工核對 |
| 401 | 失敗 | 已設私人／不公開，或上傳者禁止嵌入（兩種成因，處置不同） |
| 403 | 失敗 | 受限制 |
| 404 | 失敗 | 已刪除或網址錯誤 |
| 逾時/DNS/TLS 失敗 | 失敗 | 顯示例外類型 |

**不需要 API key**（oEmbed 是公開端點）。`--prune` 旗標會把失效連結的 `url` 改 `null`
並補上 `note`，直接寫回 `dist/course.json`（**不是**寫回 `courses/x/data/*.json` 原始
策展資料——這是產物層級的補救，原始資料要人工回頭改）。

### 6.2 PubMed／Crossref 引用驗證（`verify_refs.py`）

- PubMed：批次打 `esummary.fcgi`（每批最多 180 個 PMID），比對回傳標題與 citation 宣稱的
  標題（正規化後前 60 字元須相符），並讀 `pubtype` 判斷**是否已撤稿**
  （`retracted publication` / `update-to.type == retraction`）——撤稿論文比沒有引用更糟，
  一律讓交付失敗。**不需要 API key**（NCBI 無金鑰限流 3 req/s，程式已內建重試與節流）。
- Crossref：逐筆打 `api.crossref.org/works/<doi>`（沒有批次端點），User-Agent 帶
  `curate-course/1.0 (mailto:<CROSSREF_MAILTO 環境變數，預設 curate-course@example.com>)`。
  **不需要 API key**，但**建議設定 `CROSSREF_MAILTO` 環境變數**指向真實信箱，
  否則會被降速（非 polite pool）。
- `--resolve`：用標題反查缺失的識別碼（先看 `url` 欄位裡有沒有現成的 pmid/doi，
  再打 PubMed `esearch`，最後試 Crossref）。`--fix`：用 API 回傳值覆寫
  `title`/`journal`/`year`（+ PubMed 專屬的 `design` 自動填值）。

### 6.3 `.env.example` 內容

```
CLOUDFLARE_API_TOKEN=
CLOUDFLARE_ACCOUNT_ID=
CF_PAGES_PROJECT=gym-course
CF_PAGES_DIR=dist
```
**只有 Cloudflare 部署相關的憑證**——YouTube oEmbed、PubMed E-utilities、Crossref
三個都不需要任何金鑰，`.env.example` 裡完全沒有它們的欄位，這是本框架刻意的設計
（`pyproject.toml`：「建置腳本刻意只用標準庫，沒有相依就沒有供應鏈風險」）。

---

## 7. Q7 — 前端與部署

### 7.1 圖示系統（`icon` / `xxxIcon` 欄位）

**值域**：Lucide 圖示名（`^[a-z0-9-]+$`），到 <https://lucide.dev/icons/> 查名字直接寫進
設定檔即可，**不必改任何框架檔案**。`build_icons.py::course_icons()` 用遞迴 `walk()`
自動掃出設定檔裡**所有 key 叫 `icon` 或以 `Icon` 結尾**的字串值（`site.brandIcon`、
`chapters[].icon`、`ui.stats[].icon`、`landing.steps[].icon`……），外加選用的頂層
`icons[]` 陣列當逃生門（給 `courses/x/assets/` 自訂樣板用）。

**兩份 sprite，不是一份**：

| 檔案 | 內容 | 誰產生 |
|---|---|---|
| `src/web/js/icons.js` | 只有 `FRAMEWORK_ICONS`（介面固定用的圖示，如 `search`/`play`/`lock`），與課程無關 | `build_icons.py`，每次都重產但內容不變 |
| `courses/<x>/assets/js/icons.js` | 框架圖示 ∪ 這門課的圖示 | `build_icons.py`，只在課程有框架以外的圖示時才產出/更新；`build.py::sync_web()` 建置時會用它**整檔覆蓋** `dist/js/icons.js` |

**新增/改動任何圖示名稱之後必須重跑 `COURSE=courses/x make icons`**（需要網路，
從 `unpkg.com/lucide-static@0.469.0` 抓 SVG）；沒跑的話線上會是空白方塊，
`make audit` 的「設定檔」區段能抓到（比對 sprite 是否已含所有用到的圖示名）。

### 7.2 部署到 Cloudflare Pages

```bash
COURSE=courses/x make deploy
```
等同 `make build` 後執行：
```bash
npm exec --yes -- wrangler@4 pages deploy $DIST --project-name $PROJECT --branch main --commit-dirty=true
```
`$PROJECT` 讀自 `course.config.json` 的 `site.project`。需要下列其中一種登入方式：

- `.env`（複製 `.env.example`）填 `CLOUDFLARE_API_TOKEN` + `CLOUDFLARE_ACCOUNT_ID`
  （token 到 <https://dash.cloudflare.com/profile/api-tokens> 用「Cloudflare Pages」範本建立），
  或
- 本機先跑過 `wrangler login`（OAuth）。

`package.json` 本身沒有任何 npm 依賴（`npm exec --yes -- wrangler@4` 是即用即丟，
不寫進 `node_modules`）。

### 7.3 `make og`（社群預覽圖，非部署必須但建議）

需要本機安裝 **Google Chrome**（`CHROME=` 可覆寫路徑，預設
`/Applications/Google Chrome.app/…`）與 **ImageMagick**（`magick` 指令）。流程：
`make build` → headless Chrome 對 `$DIST/og.html` 截圖 1200×630 →
`courses/<x>/assets/og.png`（**這個檔要 `git add`**，`dist/` 被 gitignore，
重新 clone 後 `/og.png` 若沒進版控會是 404）。

### 7.4 選用功能的部署前提

- **`counter`**（瀏覽次數徽章）：`make counter` 需要 wrangler 帳號有 `D1:Edit` 權限
  （「Cloudflare Pages」範本 token **不含** D1 權限，要手動到 token 設定加一列）。
  冪等，重跑不清數字。產出 `wrangler.jsonc`（已 gitignore，含 `database_id`）。
- **`paywall`**（0 元結帳 demo）：純前端 `localStorage` 邏輯，**不需要**任何後端或部署設定；
  `mode` 只能是 `"demo"`，填別的值會整組 fail closed（`docs/PAYWALL.md`）。
- **`discussions`**（giscus 留言）：需要在你自己的 GitHub repo 啟用 Discussions
  並安裝 giscus app（<https://github.com/apps/giscus/installations/new>），
  再用 `gh api graphql` 取 `repoId`/`categoryId` 填入設定檔。**`make audit` 會比對
  `discussions.repo` 是否等於這個 checkout 的 git remote origin**，換主題時忘記換
  會被判錯（除非顯式設 `allowExternalRepo: true`）。

---

## 8. Q8 — `.claude/workflows/curate-chapter.js`（一章一次的半自動工作流程）

### 8.1 這是什麼

一份**動態工作流程**（Claude Code 的 Workflow 機制，不是 subagent 派工），把「策展一章」
拆成確定性可重跑的階段。**不是必要工具**——散文式 subagent 派工也能達成同樣結果，
差別在工作流程會強制每個 agent 回傳 schema 驗證過的結構，讓配額/去重/留空 note 這類
檢查變成**程式算術**而不是「相信 agent 自稱驗過了」。

### 8.2 怎麼呼叫

```
Run /curate-chapter with {"chapter":"CH5","title":"呼吸與核心","units":4,"drills":44,
  "kinds":["test","release","activate","lift"],"unitType":"posture",
  "out":"courses/x/data/ch5.json","minViews":5000,
  "channels":["優先頻道A","優先頻道B"],"goal":"這一章要涵蓋的重點"}
```

必填參數（缺一個直接拋錯，**不接受自由文字，只接受 JSON 物件**）：
`chapter`、`title`、`units`、`drills`、`kinds`、`unitType`、`out`。
選填：`goal`、`languages`（預設 `["繁中","簡中","英文"]`）、`channels`、
`minViews`（預設 5000）、`lessonSeconds`（預設 `[240,1440]`）、
`drillSeconds`（預設 `[30,600]`）、`config`（顯式指定 `course.config.json` 路徑，
預設從 `out` 路徑往上推兩層猜）、`resumeFromRunId`（中斷後接續）。

**所有值都要照抄 `course.config.json` 裡的實際值**（`kinds` 一字不差、配額數字一致），
不要自己編——第 0 階段「對帳」會拿參數比對設定檔，對不上就在 0 秒失敗，
不會浪費十幾分鐘跑完才發現。

### 8.3 六個階段

1. **對帳**：讀 `course.config.json`，比對 `kinds`/章節配額/`unitType` 是否與參數一致。
2. **拆單元**：agent 把章節目標拆成剛好 `units` 個單元、動作名稱總數剛好 `drills`
   個（只有名字，還沒有影片）；配額不符會自動要求 agent 重分配一次。
3. **搜尋**：每單元一個 agent，用 `yt-dlp` 批次搜尋（見 `reference/curating.md`
   的批次寫法）找候選並抄下真實中繼資料（id/秒數/觀看數/頻道/標題）。
4. **驗證**（與搜尋 pipeline 而非等全部搜完）：每單元一個 agent，逐支打 oEmbed，
   只有 HTTP 200 且**頻道**相符才算 `ok:true`（標題不同不算失敗——YouTube 有多語言
   標題）。
5. **潤稿**：把 `assessment`/`why`/`note` 的 AI 寫作痕跡去掉，**只送純散文字串**，
   事實類欄位（`title`/`channel`/`name`/`target`/`dose`）完全不經過這一步。
6. **寫檔**：通過下面 8.4 的確定性稽核才會寫進 `args.out`；沒通過就不寫檔，
   印出具體卡在哪，可用 `resumeFromRunId` 保留已完成的搜尋結果重跑。

### 8.4 確定性稽核（`auditCuration()`，寫檔前的唯一品質關卡）

**擋交付（blocking）的條件**：單元數/項目數配額不符、有失效連結（`dead`）、
指錯片（`wrongVideo`——HTTP 200 但頻道與策展資料不符，通常是抄錯 id）、
留空沒寫 note（`blanksWithoutNote`）、同單元內重複用同一支影片、
單元 id 對不到規劃清單（`unknownUnitIds`）、單元 id 重複（`duplicateUnitIds`）、
單元沒有名稱（`unitsWithoutName`）。

**只提醒、不擋（non-blocking）**：跨單元共用影片、觀看數偏低、標題與 oEmbed 不符
（`mismatched`，因為 oEmbed 的標題才是權威值，策展時記的可能已過期）。

### 8.5 輸出與後續

寫檔的 payload 使用 **oEmbed 回傳的標題覆蓋策展時記的標題**（過期值一律讓位給即時查證值）。
寫完後工作流程會提醒兩件**它沒做**的事：(1) 這批新影片還不在 `video-meta.json` 裡，
要另外跑 `yt-dlp --batch-file` 補中繼資料，否則 `make audit` 的覆蓋率會不足；
(2) 只寫這一章的主資料檔，**不處理多語言 `alt-lessons-*`**——需要的話另外處理。

### 8.6 為什麼一次只做一章

執行環境有並行上限（16）與單次執行 1000 個 agent 的上限；更重要的是**階段之間需要
人看一眼**——第一章的選片品質會決定後面章節要不要調整搜尋策略。

---

## 9. 換主題時最容易踩的坑（跨 8 題的補充清單）

1. **§5 的 evidence 識別碼二選一是最大的坑**——地圖學課引用軍用準則文件時，
   `citations[]` 結構完全無法容納，必須在寫 `course.config.json` 前就決定 §5.4
   的三選一策略，不要等策展一半才發現 `make verify` 全紅。
2. **`docs/curation-brief.md`、`docs/evidence-brief.md`、`docs/VIDEO_SPEC.md` 是舊課程
   （健身/體態矯正）殘留的策展規格書，不是框架文件**——它們具體寫著「課程：《高效健身
   訓練系統》」「頻道品質門檻」等健身房專屬內容。開新課時**不要照抄或誤讀成框架規範**，
   應該依 §1.4 用自己的內容重寫一份等價文件（或直接不寫，改用 `/curate-chapter` 的
   `args.goal`/`args.channels` 內嵌同等資訊）。這正是 `reference/quality.md` 提醒的
   「`docs/plans/` 留著範例課程的設計文件」同一類坑。
3. **`LICENSE` 著作權人**要換成自己的（`Copyright (c) 2026 curate-course contributors`
   是框架的）。
4. **`discussions.repo`/`repoId`/`categoryId`** 沒換會讓留言安靜地送進上一個主題的
   GitHub repo（`make audit` 會在「這是你自己的 checkout」時擋下不符者，但下載
   tarball 沒有 git remote 時只能退化成警告）。
5. **`assets/og.png` 要重新產生並 `git add`**——`make og` 的截圖來源是 build 注入好
   數值的 `og.html`，換主題或改完統計沒重跑，社群卡片會停在舊數字或整個破圖。
6. **`taxonomy` 是選用的**——地圖學課可能不需要「肌群」這種分面，但可以定義自己的
   分面模組（例如「地形類型」）或整個拿掉（`config.taxonomy` 刪掉，篩選面板自動消失）。
7. **`ui` 底下的主題名詞**（`unitNoun`/`drillNoun`/`missingHint`/`evidenceSource` 等）
   全部有健身課的中文預設值——全部有預設不代表「不填也行」，`quality.md` 明講「全部有
   預設值，不填不會壞，但會講出上一個主題的話」。
8. **資料檔沒有完整 schema 保護**（§3 開頭已述）——unit/drill/citation 物件裡拼錯的
   欄位名不會被任何工具擋下，只有 `audit.py` 明確檢查的那幾個欄位（`kind`/`type`/
   `evidence_grade`/`pmid`/`doi`/字數下限）才會被抓到。

---

## 附錄：關鍵原始碼位置速查

| 主題 | 檔案 | 備註 |
|---|---|---|
| 課程路徑解析（`COURSE` 環境變數） | `src/build/coursepath.py` | `resolve()` 三條規則 |
| 建置（配額驗證 + 合併） | `src/build/build.py` | 失敗時 `main()` 回傳 1 |
| 稽核（六大區段） | `src/build/audit.py` | `DEFAULTS`、`SECTIONS`、`main()` |
| 影片連結驗證（oEmbed） | `src/build/verify_links.py` | `check()`、`--prune` |
| 引用驗證（PubMed/Crossref） | `src/build/verify_refs.py` | `collect()`/`LAYERS`、`design_of()`、`--fix`/`--resolve` |
| PubMed 查詢小工具 | `src/build/pubmed.py` | `search`/`abs` 子指令 |
| SEO / JSON-LD / llms.txt / og.html | `src/build/seo.py` | `TOKEN_FIELDS`、`LLMS_VALUE` |
| 圖示打包 | `src/build/build_icons.py` | `FRAMEWORK_ICONS`、`course_icons()` |
| 新課骨架 | `src/build/new_course.py` + `src/build/templates/new-course/` | |
| YouTube 中繼資料補值 | `src/build/fetch_meta.py` | `--refresh` |
| D1 瀏覽次數建置 | `src/build/setup_counter.py` | 冪等 |
| 設定檔 schema | `src/build/course.schema.json` | `additionalProperties:false` 的區塊 |
| 一章一次工作流程 | `.claude/workflows/curate-chapter.js` | `auditCuration()` 是唯一品質關卡 |
| 版號遷移指南 | `docs/MIGRATION.md` | v1→v2 目前唯一一段 |
| Paywall 設計 | `docs/PAYWALL.md` | |
| 決耦回歸測試 | `tests/decoupling.test.js` | `#22`/`#34`/`#38`/`#14` 各類主題洩漏測試 |
| 版號自我一致性測試 | `tests/framework-version.test.js` | |
