# 策展規格書

所有路徑都相對於 repo 根目錄。你負責**一個章節**的影片策展。

課程：《高效健身訓練系統》——策展版。大綱取材自知識衛星 Jimmy 楊浚泯的同名課程，
但所有內容都是 YouTube 上第三方頻道的公開影片，本站只做策展與連結。

受眾：練過一陣子但卡關的健身者、想把肌力轉成運動表現的人、健身教練。

## 鐵則

1. **video ID 一律取自實際搜尋結果，絕不可憑記憶拼湊。** 捏造一個看起來合理的 ID
   比留空更糟，而且交付前一定會被 `make verify` 抓到。
2. 找不到合格影片就把 `url` 設 `null`，並在該筆加 `"note"` 欄位寫清楚查過哪些關鍵字、
   為什麼都不合格。**留空而沒有 `note` 會被稽核判為錯誤。**
3. 標題、頻道名、長度、觀看數一律**照抄搜尋結果**，不要自己記憶或估算。

## 搜尋（唯一可靠管道）

```bash
yt-dlp "ytsearch20:<查詢字串>" --flat-playlist --no-update \
  --print "%(id)s|%(title)s|%(channel)s|%(duration)s|%(view_count)s"
```

`duration` 是秒數，`view_count` 是觀看數，直接換算後填入。
要鎖定頻道就把頻道名放進查詢字串：`ytsearch20:練健康 高腳杯深蹲`。

不要用 WebFetch 打 `youtube.com/watch`——會被導到 captcha 頁。

## 驗證（必做，覆蓋率 100%）

```bash
curl -s "https://www.youtube.com/oembed?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D<ID>&format=json"
```

HTTP 200 且標題／頻道相符 = 存在且公開。401/404 = 已刪除或設為私人，換掉重找。

## 品質門檻

**優先頻道（中文）**：練健康 LKK Wellness、山姆伯伯工作坊、Peeta 葛格、健人蓋伊、
女力健身 Nuli、卓叔增重、ALEX健身频道、太肯運動科技 Taken、A.T.O 亞洲運動治療、
Hunter Fitness、原力復健科、KFCS 康富、筋肉家族、大H健身

**優先頻道（英文）**：Jeff Nippard、Squat University、Renaissance Periodization、
Barbell Medicine、E3 Rehab、Physiotutors、Precision Movement、Functional Bodybuilding、
StrongFirst、Kabuki Strength、Juggernaut Training Systems、Data Driven Strength、
Stronger by Science、Prehab Guys

**排除**：內容農場、標題殺人（「7 天練出腹肌」「一招解決」）、觀看數 < 5,000、
純業配、已下架、畫面看不清楚動作的。

**長度**：主課 `lesson` 4:00–24:00；動作影片 `drill` 0:30–10:00。超出區間會被稽核警告。

**語言**：繁中／簡中優先，同等品質下中文勝出；找不到合格中文影片才用英文。

**去重**：同一單元內不可重複；跨單元共用要克制（全課共用上限 50 支）。

## 輸出檔案（只有你能寫這兩個檔，絕對不要碰別人的）

### 1. `course/data/<SOURCE>.json`

```json
{
  "chapter": "<CODE>",
  "title": "<章節標題>",
  "units": [
    {
      "id": "<unit id>",
      "name": "<單元名稱>",
      "type": "<unitType>",
      "assessment": "讀者可以自己做的檢核方法，至少 80 字…",
      "tight": ["上斜方肌", "胸小肌"],
      "weak": ["下斜方肌", "前鋸肌"],
      "lesson": {
        "title": "影片標題（照抄）",
        "channel": "頻道名（照抄）",
        "url": "https://www.youtube.com/watch?v=<ID>",
        "duration": "12:34",
        "why": "為什麼選這支，一到兩句，講它比別支好在哪"
      },
      "drills": [
        {
          "name": "高腳杯深蹲",
          "en": "Goblet Squat",
          "kind": "lift",
          "target": "股四頭肌、臀大肌、豎脊肌",
          "dose": "3 組 × 8–10 下",
          "title": "影片標題（照抄）",
          "channel": "頻道名（照抄）",
          "url": "https://www.youtube.com/watch?v=<ID>",
          "duration": "1:21"
        }
      ]
    }
  ]
}
```

- **`assessment` 要是可操作的檢核方法**，不是問題描述。寫「側面錄影，看肋廓下緣有沒有掀起來；
  手放在下腹，做到第幾下開始感覺不到出力就是超過你的控制範圍」，不要寫「核心穩定很重要」。
  至少 80 個字。`movement` 與 `assessment` 型別的單元一定要有。
- **`tight` / `weak` 一定要寫肌肉名稱**（「上斜方肌」「臀大肌」），不要寫句子。
  框架拿它們建立肌群篩選索引，寫成句子會整個失效。
  `tight` = 容易搶著出力／代償的肌群，`weak` = 應該主導發力的肌群。
- **`target` 同理**，用頓號分隔的肌肉名。
- `concept` / `guide` / `program` 型別的單元可以沒有 `drills`（給 `[]`），
  但仍需要 `lesson` 與 `lesson.why`。

### 2. `course/data/alt-lessons-en-<SOURCE>.json`

每個單元另外配一支**英文版主課**（同主題，讓讀者可以對照）：

```json
{
  "lessons": [
    { "unit": "<unit id>", "lang": "en", "title": "", "channel": "",
      "url": "https://www.youtube.com/watch?v=<ID>", "why": "選它的理由" }
  ]
}
```

英文版**不計入課程總時長**，長度可放寬到 30 分鐘，但一樣要通過 oEmbed 驗證。

## 值域（用了沒定義的值會被稽核擋下）

`kind`：
- `test` 檢測——用來判斷自己現在的狀態
- `release` 放鬆／活動度——滾筒、按摩球、伸展、動態熱身、關節活動度
- `activate` 啟動／控制——呼吸、肩胛控制、臀肌啟動、核心控制、動作模式建立
- `lift` 訓練動作——真正帶負荷的訓練

`type`：`movement` 動作主題｜`assessment` 檢測｜`concept` 觀念｜`program` 課表｜`guide` 說明

## 交付前自己做完這三件事

1. `python3 -c "import json; json.load(open('course/data/<SOURCE>.json'))"` 確認 JSON 合法
2. 逐一 oEmbed 驗證你寫進去的**每一支** URL（含英文版），失敗的換掉再驗一次
3. 回報：單元數、drill 數、oEmbed 通過率、留空的格子與理由

**配額是硬性的。** 單元數與 drill 數必須剛好等於指派給你的數字——多一支少一支建置都會失敗。
