# Azimuth — 策展課程 repo

這個 repo 源自 `htlin222/gym-course`(現在 `upstream` 指向我們自己 fork 的 `kansasray/gym-course`),底層是 **curate-course**:一個主題無關的框架,把 YouTube 公開影片組裝成連結全數驗證、實證主張可覆核的靜態課程網站。上游附的 `courses/gym/`(健身課)保留不動當參考範例。

**我們自己的課(皆繁中、皆已上線)**:
- `courses/landnav/` 「地圖學與軍用陸地導航」→ https://landnav.pages.dev (11 章 45 單元)
- `courses/jazztrumpet/` 「爵士小號之路」→ https://jazz-trumpet.pages.dev (11 章 43 單元,精神座標 Miles/Clifford Brown/Hargrove/Botti)

策展自第三方 YouTube 公開影片,不擁有任何影片。

## 每次開工先知道的三件事

1. **所有 make 指令都要帶 `COURSE=`**——repo 裡有兩門課,不帶會報錯:
   `COURSE=courses/landnav make build` / `audit` / `verify` / `serve`(serve 用 **port 8899**)/ `icons` / `og`
2. **不要改 `src/` 底下任何檔案**。那是框架,上游 SKILL.md 明講改了就是踩線;真的是框架 bug 就開 issue。課程要改的東西全在 `courses/landnav/`。
3. **驗證是這個框架的賣點,不是形式**。`make audit` 離線查配額與格式(確定性),`make verify` 對每個 YouTube 連結重打 oEmbed、每個 PMID/DOI 重打 PubMed/Crossref。**不信任何上游宣稱,包括 AI 自稱驗證過的。**

## 陷阱(踩過的,按嚴重度排)

**實證引用只認 PMID 或 DOI,沒有第三條路。** `audit.py` 與 `verify_refs.py` 都硬性檢查 `pmid`(6-9 位純數字)或 `doi`(`10.` 開頭含 `/`),兩者皆無就是錯誤。軍用準則(US Army TC 3-25.26 等)、DTIC 技術報告、政府白皮書**都不能寫進 `citations[]`**——準則出處寫在 `lesson.why` / `assessment` / `drill.note` 這些自由文字欄位。這門課因此採混合策略:**準則管程序,實證層只收可經驗檢驗的主張**(步幅誤差、磁偏角漂移、GPS 遮蔽、空間能力可訓練性)。

**帶實證的單元數必須恰好等於 conditions 總數(含立場聲明),否則 build 直接失敗。** 判準在 `src/build/seo.py:628`。立場聲明(`concept-` 開頭)算進 `meta.evidence_checked` 卻不掛在任何單元上,所以**每多一條立場聲明,就要多一筆 `evidenceAlias`** 讓某個單元共用既有 condition 來補平。目前:16 條 conditions(12 掛單元 + 4 立場)+ 4 筆 alias = 16 個帶實證的單元。gym 課也是這樣湊的(31 = 28 + 3 alias)。改動實證層後務必重算。

**`course.config.json` 的 `ui` / `footer` / `stance` / `llms` / `landing` 是 `additionalProperties: false`**——欄位名打錯不會被靜靜忽略,是直接報錯。合法欄位以 `src/build/course.schema.json` 為準。反過來,**資料檔(`data/*.json`)完全沒有 schema 保護**,多餘或打錯的欄位會被靜靜吞掉,不會有人告訴你。

**文案只認 `**粗體**`,寫 `<strong>` 會被 audit 擋下。** 例外:`og.title`/`og.lede` 的換行字元會變 `<br>`;`llms` 區塊原樣輸出且用 `[[值]]` 而非 `{值}` 當佔位符。

**`fetch_meta.py` 不支援 `--help`**——傳任何參數它都直接開跑,對全部影片打 API,會跑好幾分鐘。要重抓才用 `--refresh`。

**改了任何 `icon` 欄位就要重跑 `make icons`**(需要網路,會下載 Lucide 圖示重打包)。

## 內容供給的現實(策展前先看)

`docs/CONTENT-SURVEY.md` 是實際盤點結果:**英文是深水區**(STOKERMATIC、The Map Reading Company 兩個頻道幾乎為這門課量身打造);**中文是淺水區**,骨幹是「社團法人台灣民團協會課務組」以美軍 SMCT 071-COM 任務編號拍的系列,加上香港山藝教育圈。**步幅計步、夜間導航、寫景圖/射界卡、call for fire 這四個主題中文幾乎是空的**——別為了湊中文比例去拿高中地理課影片充數,留白並寫 `note` 比較誠實(框架支援 `url: null` + `note`,`allowMissingUrls` 目前設 4)。

## 關鍵文件

- `docs/FRAMEWORK-CONTRACT.md` — 框架契約:完整 schema、配額規則、audit 判準、verify 機制。**要動 config 或資料檔先讀這份**,不要去讀 `src/`
- `docs/CURATION-SPEC.md` — 策展規格:派 subagent 策展新章節時,prompt 裡叫它讀這份
- `docs/CONTENT-SURVEY.md` — 內容供給盤點與 49 支已驗證種子影片
- `.claude/skills/curate-course/` — 上游附的策展 skill(已用 skillspector 掃過,2 個 HIGH 是 YARA 對中文散文與設定欄位表格的誤報,無可執行腳本)

上游自己的 `docs/curation-brief.md`、`docs/evidence-brief.md`、`docs/VIDEO_SPEC.md` 是**健身課殘留的規格書**,不是通用框架文件,別照著做。

## 狀態

- **landnav**(2026-08-05):45 單元/176 延伸,verify 連結 207/207、引用 52/52;5 格留白;實證 16 條僅 1 strong(磁偏角漂移)
- **jazztrumpet**(2026-08-08):43 單元/160 延伸,verify 連結 200/200、引用 45/45;1 格留白(唇滑音中文查無);實證 16 條僅 1 strong(樂手聽損與耳塞),Botti 單元定調演出賞析(全網無技法拆解);地基篇中文主軸(台灣小號頻道),爵士篇英文主軸
- 兩門課的 Cloudflare Pages 專案名:`landnav` / `jazz-trumpet`(production branch `main`,wrangler 手動部署)
- **GitHub**:`kansasray/Azimuth`(public,Discussions 已開,giscus 設定已填但 App 待安裝)。`upstream` 指向 `kansasray/gym-course`——**那是我們自己 fork 的框架副本,不再直接依賴 htlin222 的 repo**
- 部署坑:`make deploy` 前必須先手動 `npx wrangler@4 pages project create <名字> --production-branch main`,Makefile 不會代建專案
