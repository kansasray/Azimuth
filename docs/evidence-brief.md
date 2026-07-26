# 實證查核規格書

所有路徑都相對於 repo 根目錄。課程：《高效健身訓練系統》策展版。

這一層是這門課跟一般訓練影片清單最大的差別。**誠實比好看重要**——
如果查證結果顯示某個健身房共識證據薄弱，就照實寫，標成 `limited` 或 `contested`。
一門承認自己限制的課，比一門承諾一切的課可信得多。

## 鐵則

1. **PMID 一律來自 PubMed API，不可憑記憶填寫。**
   標題、期刊、年份一律用 API 回傳值，不可自己打。
2. **`takeaway` 必須反映該篇的實際結論**，不是你對這個主題的一般印象。
   拿不準就先抓摘要來看。有效果量（SMD／MD／%）就寫進去。
3. 查完發現證據比想像中弱，就寫弱。不要為了讓課程好看而美化。

## 查詢工具

```bash
# 搜尋（回傳 PMID / 年 / 期刊 / 類型 / 標題）
python3 src/build/pubmed.py search "<query>" 8

# 抓摘要（確認 takeaway 用）
python3 src/build/pubmed.py abs <PMID> <PMID> ...
```

原始 API 也可以直接打：

```bash
curl -s "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&retmode=json&id=<PMIDs>"
```

**優先挑 systematic review / meta-analysis / RCT**，其次是 EMG 或生物力學的比較研究。
盡量選近十年的；經典的機轉研究（例如腹內壓那幾篇 1999–2005）可以用舊的。

## 證據分級（`evidence_grade`，只能用這四個值）

| id | 什麼時候用 |
|---|---|
| `strong` | 多篇一致的 SR/MA 支持，效果量明確 |
| `moderate` | 有 SR/MA 或多篇 RCT 支持，但效果量中等或異質性高 |
| `limited` | 只有小型研究、EMG／生物力學推論，缺乏臨床終點證據 |
| `contested` | 文獻結論彼此矛盾，或主流說法被較新的高品質證據削弱 |

**大多數的「動作啟動」「筋膜放鬆」「動作矯正」類別應該落在 `limited` 或 `contested`。**
如果你把整份都標成 `strong`，那就是沒做好查證。

## 輸出格式

### 類別層級 → `course/data/drill-evidence-<N>.json`

個別動作沒有專屬文獻（「高腳杯深蹲」沒有自己的 RCT），但它的類別有。

```json
{
  "categories": [
    {
      "id": "foam-roll",
      "name": "滾筒放鬆",
      "evidence_grade": "contested",
      "summary": "兩到四句中文。講這個類別實際上有什麼效果、效果多大、限制在哪。要具體，帶數字更好。",
      "citations": [
        {
          "pmid": "35616852",
          "title": "API 回傳的完整標題",
          "journal": "API 回傳的期刊縮寫",
          "year": 2022,
          "design": "meta-analysis",
          "takeaway": "這篇的關鍵發現，一句中文，有效果量就寫出來"
        }
      ]
    }
  ]
}
```

- `id` / `name` 必須跟 `course/taxonomy/drills.py` 的 `CATEGORIES` 完全一致。
- **每個類別至少 2 筆 citations**（稽核門檻），3 筆更好。
- `design` 用英文小寫：`meta-analysis` / `systematic-review` / `rct` / `cross-sectional` /
  `emg-study` / `biomechanics` / `narrative-review`。

### 單元層級 → `course/data/oe-<字母>.json`

每個主題的整體證據強度、常見迷思、就醫警訊。

```json
{
  "conditions": [
    {
      "unit": "ch5-u1",
      "name": "核心肌群與腹內壓",
      "evidence_grade": "moderate",
      "summary": "整體結論，三到五句中文。",
      "mechanism": "機轉是什麼——生理上到底發生什麼事，以及這個機轉本身有多確定。",
      "performance_effect": "對運動表現的效果，有效果量就寫。",
      "hypertrophy_strength": "對肌肥大／肌力的效果。不適用就寫「不適用」並說明為什麼。",
      "injury_link": "與傷害或疼痛的關聯，因果關係講清楚。",
      "assessment_validity": "相關檢測的信效度。沒有檢測就寫「本單元不涉及標準化檢測」。",
      "red_flags": ["出現這些狀況要停止訓練並就醫，一條一句"],
      "caveats": "課程必須誠實告知讀者的部分——這個主題被高估或被過度簡化的地方。",
      "citations": [
        { "pmid": "16023475", "title": "API 回傳標題", "url": "https://pubmed.ncbi.nlm.nih.gov/16023475/", "year": 2005 }
      ]
    }
  ]
}
```

- `unit` 要對得上策展資料的單元 id，不然會被稽核判為幽靈單元。
- 每個 condition 至少 3 筆 citations。`url` 一律 `https://pubmed.ncbi.nlm.nih.gov/<pmid>/`。
- `red_flags` 給 2–4 條，要具體（「訓練後出現持續超過一週的關節腫脹」勝過「不舒服就就醫」）。
- `caveats` 是這個框架的靈魂，**一定要寫**，而且要真的講出對課程不利的事。

## 交付前

1. `python3 -c "import json; json.load(open('<你的檔>'))"` 確認 JSON 合法
2. 用 esummary 重打一次你寫進去的**所有** PMID，比對標題與年份是否相符，不符就修
3. 回報：類別／單元數、citations 總數、各分級的分佈、你認為最該被質疑的一條結論
