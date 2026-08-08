# 策展規格——爵士鋼琴:從新手到職業(jazzpiano)

> 所有策展 subagent 共用。動手前整份讀完。
> 課程路徑:`/Users/kansasray/claude/Azimuth/courses/jazzpiano/`

## 0. 這門課是什麼

繁體中文的爵士鋼琴課程,受眾從完全新手到想走職業的人,精神座標是 Bill Evans、Oscar Peterson、Herbie Hancock、Thelonious Monk。內容**全部策展自 YouTube 第三方公開影片**,本站只做選片、驗證與連結,不擁有任何影片。

語言政策:第 1–2 章(裝備/基礎技術)中文充足可當主軸(好和弦 NiceChord、台灣鋼琴教學頻道);第 3 章之後中文變薄——**第 4 章 voicings 進階與第 11 章職業健康中文幾乎是空的**,以英文為骨幹,誠實留英文。啟彬與凱雅(chipinkaiyajazz)是中文爵士鋼琴內容的最大供給者,Bill Evans 與 Chick Corea 有他們的專門拆解。簡體來源內容好就收,`lang` 仍標 `zh`。

## 1. 檔案輸出位置

- 章節資料:`courses/jazzpiano/data/<source>.json`(如 `ch1.json`)
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

- 技巧單元範例:「閉譜彈 C 大調與 F 大調音階各兩個八度,上行下行,節拍器 80 BPM 十六分音符,連續三次不錯音、不停頓才算過。錯音集中在換指位置(C 大調的 3-1 換指、F 大調右手第四指)就把該小段獨立抽出來慢練,速度砍半。」
- 大師單元寫**聽辨式判準**:「隨機播三段鋼琴 trio 錄音(一段 Evans、一段 Peterson、一段 Monk),你要能在 30 秒內全部指認,並各說出一個依據(Evans 的 rootless voicing 與內聲部移動、Peterson 的藍調語彙與炫技線條、Monk 的不和諧音程與空拍)。說不出依據就回去重聽對應單元的拆解影片。」

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

`docs/CONTENT-SURVEY-JAZZPIANO.md` §種子影片有 130 支已驗證影片,**優先取用**(用前重驗一次)。頻道盤點在同檔 §頻道盤點。
動手前先掃已存在的章節檔避免跨章重複:
```bash
grep -ho '"url": "[^"]*"' courses/jazzpiano/data/ch*.json 2>/dev/null | sort -u
```
同章內絕不重複;跨章盡量不重複。

## 7. 大師章特別規定(只有負責 CH9 的 agent 要讀)

- Bill Evans:中文有 chipinkaiyajazz 的多支專門拆解(盤點確認),lesson 可考慮中文;Oscar Peterson / Herbie Hancock / Monk **中文完全查無**(盤點窮盡確認),這三個單元全英文是誠實的結果,不必硬找
- lesson 用「風格拆解/voicing 分析」類,drills 混搭採譜視覺化(listen)、名演(listen)、模仿練習(practice)
- 合輯單元(Bud Powell/McCoy Tyner/Chick Corea/Keith Jarrett):Chick Corea 有中文素材(chipinkaiyajazz、MNA牛耳藝術)可用