# gym-course — 高效健身訓練系統

把 YouTube 上散落的好內容，變成一門**結構完整、連結全數驗證、來源可查**的課程網站。

這個 repo 裝的是一門健身訓練課：十一個章節，從訓練力學、活動度限制、呼吸與腹內壓，
一路帶到推、拉、下肢與全身動力鏈整合，最後收在族群課表設計。
大綱取材自知識衛星 [Jimmy 楊浚泯《高效健身訓練系統》](https://sat.cool/course/200) 的課程架構，
但**內容完全是 YouTube 上第三方頻道的公開影片**，本站只做策展、驗證與連結。

底層是 `curate-course` 框架，本身主題無關——`course/` 整組換掉就變成吉他課、統計課、電銲課。

**線上版**：<https://gym-course.pages.dev>

---

## 為什麼不是又一個播放清單

播放清單解決「收藏」，這個框架解決另外三件事：

**一、結構。** 章節 → 單元 → 項目三層，配額寫進設定檔，數量不對就建置失敗。
不會出現「這章塞了 40 支、那章只有 3 支」的失衡。

**二、連結真的活著。** 幾百個格子最大的風險是連結是捏造的。所以有兩層關卡：
`make audit` 離線把設定檔、配額、影片長度、實證欄位全查一遍（確定性，不打網路）；
`make verify` 再對每個 YouTube 連結重打 oEmbed、對每個 PMID 重打 PubMed API。
**不信任任何上游宣稱**，包括 AI agent 自稱驗證過的。

**三、可查證的深度。** 每個單元與每個動作類別都掛著證據強度與原始文獻。這門課做了 65 條
實證判定、280 筆 PubMed 引用，其中只有 **2 條**拿到「證據充分」，15 條被判為 `contested`——
結果照實寫進網站，包含對課程自己不利的部分。

---

## 快速開始

需要 [uv](https://docs.astral.sh/uv/)。建置腳本只用 Python 標準庫，沒有執行期相依。

```bash
git clone https://github.com/<you>/gym-course.git
cd gym-course

make build     # course/ → dist/
make serve     # http://localhost:8899
```

看到的是這門健身課。想換主題就整組替換 `course/`——底下的框架不認識「健身」。

---

## 換成你的主題

**你只需要動 `course/`**，其他都是框架。

```
course/
├── course.config.json   站台設定、章節、配額、所有 UI 文案
├── data/                策展資料（影片、實證、中繼資料）
└── taxonomy/            選用：主題專屬的詞彙模組
```

### 1. 設定

`course.config.json` 裡沒有一個字是寫死在程式裡的——分頁名稱、篩選標籤、
統計欄位、證據分級的顯示文字，全部從這裡讀。

```jsonc
{
  "site":  { "name": "…", "title": "…", "url": "https://…" },
  "kinds": [                       // 每個單元底下的項目分幾類
    { "id": "demo",     "label": "示範",   "tone": "accent"  },
    { "id": "slow",     "label": "慢速",   "tone": "success" },
    { "id": "practice", "label": "練習曲", "tone": "danger"  }
  ],
  "chapters": [
    { "code": "CH1", "title": "…", "icon": "guitar", "source": "ch1",
      "units": 4, "drills": 20 }   // 配額：建置時強制檢查
  ]
}
```

### 2. 資料

`course/data/<source>.json`，一章一檔：

```jsonc
{
  "chapter": "CH1",
  "units": [{
    "id": "ch1-u1",
    "name": "單元名稱",
    "assessment": "讀者可以自己做的判斷方法",
    "lesson": { "title": "…", "channel": "…", "url": "https://youtube.com/watch?v=…",
                "why": "為何選這支" },
    "drills": [{ "name": "…", "kind": "demo", "url": "…", "dose": "…" }]
  }]
}
```

### 3. 建置與稽核

```bash
make build && make audit && make serve
```

配額不符、URL 格式錯誤、同單元重複影片會讓建置直接失敗。
`make audit` 再往下查一層——而且**不打網路**，同樣的輸入永遠得到同樣的報告：

```
設定檔    schema 拼字與型別、圖示有沒有打包、nav 有沒有漏章、佔位符會不會被替換
結構      各章配額、id 唯一、kind/type 是否已定義、每單元項目數是否失衡
影片      中繼資料覆蓋率、長度是否落在設定區間、宣稱長度與實際的誤差、觀看數低標、
          留空的格子有沒有寫清楚原因
內容深度  自我評估夠不夠具體、evidence_grade 是否合法、PMID 格式、每類文獻篇數
```

門檻寫在 `course.config.json` 的 `audit` 區塊（影片長度區間、最低觀看數、每單元項目數
上下限…），不是寫死在程式裡。`--json` 給 agent 讀、`--strict` 讓警告也變成錯誤。

---

## 讓 AI 幫你策展

repo 內附一個 Claude Code skill。在 Claude Code 裡開這個專案，輸入：

```
/curate-course 幫我用這個框架做一門古典吉他入門課
```

或直接用自己的話說「幫我用這個框架做一門 X 的課程」，agent 會照著 skill 走完整流程：
談結構 → 定配額 → 並行策展 → 驗證連結 → 補中繼資料 → 加引用 → 稽核 → 建置部署。

Skill 本身採漸進揭露，主檔只有流程骨架，細節按需載入：

```
.claude/skills/curate-course/
  SKILL.md              鐵則、七步流程、驗收清單
  reference/config.md   設定檔欄位、schema、圖示、tone、詞彙模組
  reference/curating.md 策展 agent 指示範本、oEmbed 驗證、資料格式、多語言
  reference/evidence.md 單元／類別兩層實證、PubMed E-utilities 用法
  reference/quality.md  audit 與 verify 的分工、門檻怎麼調、踩過的坑
```

裡頭寫死了幾條不可退讓的規則，最重要的是：**video ID 必須取自實際搜尋結果，
不可憑記憶拼湊；找不到合格影片就留空並在 `note` 說明原因**——留空而不說明會被稽核擋下。

---

## 指令

```
make build     course/ → dist/，含配額驗證與 SEO 產出
make meta      用 yt-dlp 補齊 video-meta.json（真實長度、觀看數、頻道）
make audit     離線稽核設定檔、配額、影片長度與實證深度（不打網路，可放 CI）
make verify    重驗每個影片連結與每個 PMID（打真實 API）
make serve     本機預覽
make icons     重新下載 Lucide 圖示並打包成內嵌 sprite
make og        重新產生社群預覽圖
make lint      ruff 檢查
make check     lint + build + audit，提交前跑這個
make deploy    部署到 Cloudflare Pages
```

多課程並存：`COURSE=courses/guitar DIST=dist-guitar make build`

---

## 網站有什麼

四個檢視：

- **首頁** — 用法三步驟、立場摘要、章節總覽
- **課程內容** — 章節樹、自我評估、分面標籤、項目清單、證據註記
- **上課模式** — 左側嵌入播放（走 `youtube-nocookie.com`）、右側播放清單，
  滿版高度、欄寬可拖曳、`?tab=player&play=12` 深連結
- **立場** — 課程對自身限制的說明與原始文獻

外加：分面篩選、全文搜尋、localStorage 進度追蹤、深淺色主題、
YouTube IFrame API 快捷鍵（按 `?` 看清單）。

**每支影片一串討論**：上課模式的動作列有「討論」按鈕，用
[giscus](https://giscus.app) 把留言存進 repo 的 GitHub Discussions，
`data-term` 綁 video id，所以同一支影片在不同單元共用同一串。
啟用方式：到 <https://github.com/apps/giscus> 安裝到你的 repo，
再把 `repoId` / `categoryId` 填進 `course.config.json` 的 `discussions`。
面板只在點開時才載入 giscus，不影響首屏。

**SEO**：`Course` JSON-LD（含 syllabus 與 citation）、OG/Twitter 卡、sitemap、
robots、`llms.txt`。文案在建置時就注入 HTML，不等 JS 執行，首屏就有真實內容。

**首屏零外部請求**：Primer 設計語彙用 CSS 變數自行實作，Lucide 圖示打包成內嵌 sprite。
只有按下播放時才連 YouTube、點開討論時才連 giscus。

---

## 架構

```
src/
  build/
    build.py          合併、配額驗證、中繼資料套用
    seo.py            JSON-LD / sitemap / robots / llms.txt / 模板注入
    build_icons.py    Lucide sprite 打包
    audit.py          離線品質稽核（設定檔／配額／長度／實證）
    course.schema.json  設定檔結構，編輯器自動完成 + 稽核擋拼字
    verify_links.py   YouTube oEmbed 驗證
    verify_refs.py    PubMed 引用驗證
  web/
    index.html        模板，{{token}} 於建置時替換
    css/  js/         前端
course/               ← 你的課程
dist/                 ← 建置產物（gitignored）
```

框架不 import 任何主題詞彙。`course/taxonomy/` 是可插拔的：
提供 `extract()` 就有分面篩選，提供 `classify()` 就能把引用掛在類別上，
兩個都不給也能跑。

---

## 這門課的數字

| | |
|---|---|
| 章節 | 11（原理篇 5 + 動作篇 5 + 應用篇 1） |
| 單元 | 44（其中 24 個是動作主題、4 個檢測、10 個觀念、5 個課表、1 個說明） |
| 影片 | 316 支動作示範 + 44 堂主課 + 44 支英文對照＝404 個欄位、378 支不重複 |
| 課程時長 | **31 小時 43 分**（主課 7:50 + 動作影片 23:53；英文對照版不計入） |
| 實證查核 | 31 個單元層級 + 34 個動作類別＝65 條判定 |
| 文獻 | 280 筆引用、190 個不重複 PMID |
| 證據分級 | 證據充分 2 · 中等 18 · 有限 30 · 互斥 15（**97% 達不到「證據充分」**） |
| 驗證 | 稽核零錯誤、連結 378/378 有效、PMID 280/280 存在且標題相符 |

> 原本設定的目標是 ~20 小時。實際策展下來，動作示範影片平均 4.5 分鐘（不是預估的 2.5 分），
> 所以總長來到 31 小時 43 分。我們選擇**保留全部內容並誠實標示時長**，而不是砍掉四成
> 已驗證的影片來湊數字。想走短版的話，每個單元的前 5 支就是核心。

查證結果沒有很好看，而這正是重點：

- 動作類別 34 類裡**沒有任何一類拿到「證據充分」**——14 類 `limited`、7 類 `contested`。
  全課只有兩條拿到「證據充分」：高齡者阻力訓練、跳躍類增強式訓練
- 「代償導致受傷」的因果鏈站不住腳：Cochrane 涵蓋 20,101 名勞工的 RCT 顯示
  搬運技巧訓練**預防下背痛的效果是零**，而下背痛者反而搬得更接近教科書姿勢
- 訓練前的滾筒與伸展能增加活動度，但相對**任何其他升溫方式都沒有優勢**（ROM ES=0.01, p=0.88），
  傷害預防效果為零（RR 0.963）
- 「臀肌失憶」「gluteal amnesia」在 PubMed **檢索不到任何一篇研究**
- 「膝蓋不能超過腳尖」限制後膝力矩降 22%，但髖力矩從 28.2 暴增到 302.7 N·m

這些全部寫在網站上，`contested` 標籤直接顯示在單元標題列。

---

## 授權

程式碼採 MIT，見 [LICENSE](LICENSE)。

**影片著作權屬原 YouTube 頻道**，本專案只存連結與公開中繼資料，不重製也不代管。
Lucide 圖示為 ISC。範例課程的內容為衛教與運動指引，不構成醫療建議。
