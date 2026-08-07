# 策展規格——爵士小號:從新手到職業(jazztrumpet)

> 所有策展 subagent 共用。動手前整份讀完。
> 課程路徑:`/Users/kansasray/claude/Azimuth/courses/jazztrumpet/`

## 0. 這門課是什麼

繁體中文的爵士小號課程,受眾從完全新手到想走職業的人,精神座標是 Miles Davis、Clifford Brown、Roy Hargrove、Chris Botti。內容**全部策展自 YouTube 第三方公開影片**,本站只做選片、驗證與連結,不擁有任何影片。

語言政策:第 1–4 章(裝備/發聲/音色/技巧)台灣有真正的小號專門教學頻道(喇叭小姐 Ms. Trumpet、下班後練小號、飛常人觀察日記、魏廣晧),**中文優先**;第 5 章之後中文供給明顯變薄且多為鋼琴/薩克斯風視角,**以品質為準,不為湊中文選非小號視角的泛爵士影片充數**(除非該單元主題本來就樂器無關,例如 jam session 規矩、聽力保護)。簡體來源(Chuan Gao、XinJazz 等)內容好就收,`lang` 仍標 `zh`。

## 1. 檔案輸出位置

- 章節資料:`courses/jazztrumpet/data/<source>.json`(如 `ch1.json`)
- 不要動 `course.config.json`(主對話管)、不要動其他章的檔

## 2. 章節資料檔 schema

```jsonc
{
  "chapter": "CH1",
  "title": "章節標題",
  "units": [
    {
      "id": "ch1-u1",              // 必填,全課唯一,格式 ch<章號>-u<序號>
      "name": "單元名稱",           // 必填,繁中
      "type": "skill",             // 必填,只能是 skill / concept / master(見 §3)
      "assessment": "……",          // type 為 skill 或 master 時必填,≥80 字(見 §4)
      "lesson": {
        "title": "影片原標題(照 oEmbed 回傳照抄,不翻譯)",
        "channel": "頻道名(照抄)",
        "url": "https://www.youtube.com/watch?v=XXXXXXXXXXX",
        "lang": "zh",              // zh 或 en
        "why": "為何選這支(繁中 1-2 句,講清楚它解決什麼、比別支好在哪)"
      },
      "drills": [
        {
          "name": "項目名稱(繁中)",
          "en": "English name",     // 選填
          "kind": "walkthrough",    // 必填,見 §3
          "target": "長音、音準",    // 頓號分隔的名詞,不是句子
          "title": "影片原標題",
          "channel": "頻道名",
          "url": "https://www.youtube.com/watch?v=XXXXXXXXXXX",
          "note": "……"             // 僅在 url 為 null 時必填
        }
      ]
    }
  ]
}
```

**找不到合格影片**:`url: null` + `note` 寫清楚查過哪些中英文關鍵字、為什麼不合格。留白是誠實,捏造連結是最嚴重的失敗。不要寫 `duration`/`views`,build 會自動補。

## 3. 列舉值(只能用這些)

**`type`(單元型別)**
| 值 | 意義 | assessment | drills 慣例 |
|---|---|---|---|
| `skill` | 技巧單元:學會一個可操作、可自我檢驗的能力 | 必填 | 照派工指定 |
| `concept` | 觀念單元:原理、樂理、選購知識 | 不寫 | 照派工指定 |
| `master` | 大師研究單元:風格拆解與聆聽 | 必填(聽辨式,見 §4) | 照派工指定 |

**`kind`(影片角色)**
| 值 | 意義 |
|---|---|
| `theory` | 原理與樂理講解 |
| `walkthrough` | 操作示範(吹給你看、帶你練) |
| `practice` | 可跟著練的練習(exercise、play-along、backing track) |
| `pitfall` | 常見錯誤、壞習慣、爭議做法 |
| `listen` | 聆聽素材:名演、採譜視覺化、風格對照 |

技巧章以 walkthrough/practice 為主;大師章以 listen 為主、拆解影片當 lesson 或 theory。

## 4. `assessment` 怎麼寫

讀者**可以自己執行、有具體判準**的檢驗方法,不是內容摘要。≥80 字,要有數字或可觀察現象,禁用「適當」「正確地」「良好」「必要時」「確保」。**破折號(——)整段最多 1 個,能用句號就用句號**(框架稽核抓 AI 文風,上一門課因此重潤一輪)。

- 技巧單元範例:「含住吹嘴只用氣吹出 G(第二線),用調音器看:能穩住 10 秒且指針漂移不超過 ±10 音分才算過。若音頭第一秒總是偏高再落下,是用嘴唇擠而不是用氣撐,回去做只吹氣不出聲的練習。」
- 大師單元寫**聽辨式判準**:「隨機播三段 50 年代小號獨奏,你要能在 30 秒內指出哪段是 Clifford Brown,並說出兩個依據(例如連續八分音符的長樂句、每拍都落在和弦內音)。說不出依據就回去把〈Joy Spring〉的採譜再跟唱一次。」

## 5. 影片驗證(硬規則)

**每一支寫進 JSON 的影片都必須先經 oEmbed 實打回 200:**
```bash
curl -s "https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=VIDEO_ID&format=json"
```
- 200 → `title`/`channel` **照回傳照抄**(不翻譯不改寫);401/403/404 → 不能用,換一支
- 搜尋用 `yt-dlp "ytsearch15:關鍵字" --flat-playlist --print "%(id)s|%(duration)s|%(view_count)s|%(channel)s|%(title)s"`,一次拿到中繼資料再逐支 oEmbed 驗證。WebSearch 額度可能已耗盡,直接用 yt-dlp
- **絕不憑記憶寫 video ID**
- zsh 陷阱:未加引號的變數不做 word splitting,批次驗證迴圈改用 Python 腳本
- 影片長度:主課 1:00–45:00、drill 0:30–25:00 之外會被稽核警告,盡量避開;觀看數 <300 會被警告,除非內容獨一無二

## 6. 種子影片與去重

`docs/CONTENT-SURVEY-JAZZTRUMPET.md` §種子影片有 99 支已驗證影片,**優先取用**(用前重驗一次)。頻道盤點在同檔 §頻道盤點。
動手前先掃已存在的章節檔避免跨章重複:
```bash
grep -ho '"url": "[^"]*"' courses/jazztrumpet/data/ch*.json 2>/dev/null | sort -u
```
同章內絕不重複;跨章盡量不重複。

## 7. 大師章特別規定(只有負責 CH9 的 agent 要讀)

- Miles Davis / Clifford Brown / Roy Hargrove:lesson 用「風格拆解/教學分析」類影片,drills 混搭採譜視覺化(kind: listen)、名演(listen)、模仿練習(practice)
- **Chris Botti 單元定調為演出賞析**:全網查無技法拆解教學(盤點已確認),lesson 用最高品質的演出或訪談/大師班,`why` 裡誠實寫明「教學拆解素材不存在,本單元以賞析與訪談為主」,不要硬找爛片充當拆解
- 魏廣晧(台灣職業爵士小號家)的「一分鐘爵士小學堂」若切題可放進任何單元當中文 drill,是全課「在地連結」的亮點
