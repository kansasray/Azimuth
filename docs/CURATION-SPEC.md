# 策展規格——地圖學與軍用陸地導航(landnav)

> 所有策展 subagent 共用。動手前整份讀完。
> 課程路徑:`/Users/kansasray/claude/Azimuth/courses/landnav/`

## 0. 這門課是什麼

繁體中文的「地圖學與軍用陸地導航」課程,內容**全部策展自 YouTube 第三方公開影片**,本站只做選片、驗證與連結,不擁有任何影片。定位橫跨登山野外與軍事應用;核心論點是:**GPS 會失效,失效時傳統技能是保命與遂行任務的關鍵**。

課程文案一律**繁體中文**。影片本身中英文皆可——英文內容是這個主題的深水區,中文在部分主題幾乎是空的(見 `CONTENT-SURVEY.md`),所以**選片以品質為準,不為了湊中文而選爛片**。

## 1. 檔案輸出位置

- 章節資料:`courses/landnav/data/<source>.json`(如 `ch1.json`)
- 英文替代主課:`courses/landnav/data/alt-lessons-en-<source>.json`
- 中文替代主課:`courses/landnav/data/alt-lessons-zh-<source>.json`

## 2. 章節資料檔 schema

```jsonc
{
  "chapter": "CH1",
  "title": "章節標題",
  "units": [
    {
      "id": "ch1-u1",              // 必填,全課唯一,格式 ch<章號>-u<序號>
      "name": "單元名稱",           // 必填,繁中
      "type": "skill",             // 必填,只能是 skill / concept / field(見 §3)
      "assessment": "……",          // type 為 skill 或 field 時必填,且 ≥80 字(見 §4)
      "lesson": {                  // 主課影片
        "title": "影片原標題(照抄,不要翻譯)",
        "channel": "頻道名(照抄)",
        "url": "https://www.youtube.com/watch?v=XXXXXXXXXXX",
        "lang": "en",              // en 或 zh
        "why": "為何選這支(繁中,1-2 句,講清楚它解決什麼、比別支好在哪)"
      },
      "drills": [                  // 支援影片
        {
          "name": "項目名稱(繁中)",
          "en": "English name",     // 選填
          "kind": "demo",           // 必填,見 §3
          "target": "稜鏡式指北針、方位角",  // 頓號分隔的名詞,不是句子
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

**找不到合格影片時**:`url` 填 `null`,並**必須**寫 `note` 說明你查過什麼關鍵字、為什麼現有的都不合格。留空而不寫 note 會被 `make audit` 判為錯誤。**留空是誠實,捏造連結是這個任務最嚴重的失敗。**

不要寫 `duration` / `views` / `facets` / `cat`——build 階段會自動從 `video-meta.json` 補上,手寫會被覆蓋。

## 3. 列舉值(只能用這些)

**`type`(單元型別)**
| 值 | 意義 | 需要 assessment? | drills 慣例 |
|---|---|---|---|
| `skill` | 技能單元:讀者要學會一個可操作的技能 | 是 | 3-5 支 |
| `concept` | 觀念單元:原理、系統、為什麼這樣設計 | 否 | 2-4 支 |
| `field` | 野外實作單元:必須到戶外才能練 | 是 | 3-5 支 |

**`kind`(影片在單元裡的角色)**
| 值 | 意義 |
|---|---|
| `theory` | 原理講解 |
| `demo` | 實地操作示範 |
| `practice` | 讀者可自己動手做的練習 |
| `pitfall` | 常見錯誤、失敗案例、極端狀況 |

## 4. `assessment` 怎麼寫(最容易寫壞的欄位)

它是**讀者可以自己做的判斷方法**,不是單元內容摘要,也不是問題描述。寫成「你可以怎麼自我檢查有沒有學會」。

- ❌「本單元介紹稜鏡式指北針的構造與操作方式。」(這是摘要)
- ✅「拿你的指北針,在已知方位的直線道路上取方位角,連取五次。五次讀數的最大差若超過 3 度,握持姿勢或視線對齊有問題——多半是沒把指北針貼齊臉頰、或讀數時晃動。再與地圖上該路段的圖上方位角(記得加磁偏角)比對,差超過 5 度表示磁偏角方向加錯了。」(可自己執行、有判準、指出常見failure mode)

≥80 字。要有**具體判準**(數字、可觀察的現象),不要出現「適當」「正確地」「良好」這種沒有判準的詞。

## 5. 影片驗證(不可跳過的硬規則)

**每一支要寫進 JSON 的影片,都必須先用 YouTube oEmbed API 實際打過並拿到 HTTP 200。**

```bash
curl -s "https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=VIDEO_ID&format=json"
```

- 回應 200 → 拿回傳 JSON 裡的 `title` 與 `author_name`,**照抄進 `title` / `channel` 欄位**(不要自己翻譯或改寫標題)
- 回應 401/403/404 → 這支不能用(不可嵌入或已下架),換一支
- **絕對不要憑記憶或推測寫 video ID**。一律先用 WebSearch / WebFetch 找到真實 URL,再驗證。捏造連結是最嚴重的失敗——框架的 `make verify` 會抓到,但那時已經浪費一輪。

選片品質門檻:優先系統性教學頻道(見 `CONTENT-SURVEY.md` 的頻道盤點),避免純 vlog、業配開箱、賽事花絮。同一單元內不可重複同一支影片;跨單元盡量不重複(重複會被稽核警告)。

## 6. 已驗證的種子影片

`docs/CONTENT-SURVEY.md` §四 有 49 支已通過 oEmbed 驗證的種子影片,依主題分類。**優先從那裡取用**(已驗證過,省一輪),不夠再自己搜。取用時仍請重新驗證一次確認仍然存活。

## 7. 準則出處寫哪裡

軍用準則(US Army **TC 3-25.26** *Map Reading and Land Navigation*、**ATP 3-25.26**、國軍準則等)是這門課程序性內容的權威來源,但框架的結構化引用只認 PMID/DOI,準則兩者皆無。**準則出處寫進 `lesson.why` / `assessment` / `drill.note` 這些自由文字欄位**(例:「本單元的五大地貌分類依 TC 3-25.26 第 10 章」),不要試圖塞進 `citations[]`——會被稽核判錯。
