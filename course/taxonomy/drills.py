#!/usr/bin/env python3
"""動作類別定義與比對。

三百多支示範影片其實只有數十種動作原型。單一動作（例如「高腳杯深蹲」）沒有專屬文獻，
但它所屬的類別（「深蹲系列」）有。文獻掛在類別上才站得住腳。

比對規則：patterns 內任一關鍵字出現在 動作中文名 / 英文名 / 目標肌群 / 影片標題 即命中。
由上而下比對，先命中者勝——所以特異的類別要排在通用類別前面。
"""

from __future__ import annotations

import re

# (id, 顯示名稱, kind, 比對關鍵字)
CATEGORIES: list[tuple[str, str, str, list[str]]] = [
    # ---------------- 檢測 ----------------
    (
        "core-endurance-test",
        "核心耐力檢測",
        "test",
        ["核心耐力", "McGill", "Plank Test", "棒式測試", "Biering", "軀幹耐力"],
    ),
    (
        "movement-screen",
        "動作篩檢",
        "test",
        [
            "過頭深蹲檢測",
            "過頭深蹲測試",
            "Overhead Squat",
            "FMS",
            "動作篩檢",
            "Movement Screen",
            "單腳站立測試",
            "分腿蹲檢測",
        ],
    ),
    (
        "spine-rom-test",
        "脊椎與胸廓活動度檢測",
        "test",
        [
            "胸椎旋轉檢測",
            "胸椎活動度檢測",
            "脊椎活動度",
            "Thoracic Rotation Test",
            "Spine Mobility Test",
            "腰椎活動度檢測",
            "Schober",
            "肋廓",
        ],
    ),
    (
        "limb-rom-test",
        "四肢關節活動度檢測",
        "test",
        [
            "Thomas Test",
            "湯瑪士",
            "FABER",
            "Knee to Wall",
            "貼牆檢測",
            "背後互扣",
            "Apley",
            "肩關節活動度檢測",
            "髖關節活動度檢測",
            "踝關節活動度檢測",
            "足背屈檢測",
            "90/90 檢測",
            "Navicular",
            "舟狀骨",
            "足弓塌陷檢測",
            "闊背肌長度",
            "背闊肌長度",
            "Latissimus Dorsi Length",
        ],
    ),
    (
        "posture-screen",
        "站姿與體態篩檢",
        "test",
        ["站姿", "體態評估", "體態篩檢", "對位", "Posture", "Alignment", "側面照", "骨盆前傾", "骨盆後傾", "Pelvic Tilt"],
    ),
    # ---------------- 呼吸／放鬆／活動度：特異者優先 ----------------
    (
        "breathing-iap",
        "呼吸重整與腹內壓",
        "activate",
        [
            "呼吸",
            "Breathing",
            "腹內壓",
            "IAP",
            "Bracing",
            "鱷魚式",
            "Crocodile",
            "90/90 呼吸",
            "橫膈",
            "Diaphragm",
            "凱格爾",
            "Kegel",
        ],
    ),
    (
        "thoracic-mobility",
        "胸椎活動度訓練",
        "release",
        ["胸椎", "Thoracic", "開書式", "Open Book", "上背延展", "T-Spine", "上背活動度", "貓牛", "Cat[- ]?Cow", "脊椎分節", "分節控制"],
    ),
    (
        "shoulder-mobility",
        "肩關節活動度訓練",
        "release",
        [
            "Arm Bar",
            "十字固定",
            "肩關節活動度",
            "Shoulder Mobility",
            "Dislocate",
            "繞肩",
            "Sleeper Stretch",
            "闊背伸展",
            "背闊肌伸展",
            "胸小肌放鬆",
            "胸小肌伸展",
        ],
    ),
    (
        "hip-ankle-mobility",
        "髖與踝活動度訓練",
        "release",
        [
            "髖關節活動度",
            "Hip Mobility",
            "90/90",
            "蛙式",
            "Frog",
            "鴿式",
            "Pigeon",
            "踝關節活動度",
            "Ankle Mobility",
            "髖關節繞環",
            "髖繞環",
            "Hip Circle",
            "足背屈",
            "小腿伸展",
            "足底放鬆",
            "Plantar",
        ],
    ),
    (
        "foam-roll",
        "滾筒放鬆",
        "release",
        ["滾筒", "Foam Roll", "泡棉軸", "Roller"],
    ),
    (
        "ball-release",
        "按摩球軟組織放鬆",
        "release",
        ["按摩球", "花生球", "網球", "Lacrosse Ball", "Ball Release", "激痛點", "Trigger Point", "腹部筋膜", "Fascial Release"],
    ),
    (
        "dynamic-warmup",
        "動態熱身",
        "release",
        [
            "動態熱身",
            "Dynamic Warm",
            "熱身",
            "Warm[- ]?up",
            "World's Greatest",
            "熊爬",
            "Bear Crawl",
            "抬腿走",
        ],
    ),
    (
        "static-stretch",
        "靜態伸展",
        "release",
        ["靜態伸展", "Static Stretch", "伸展", "Stretch", "拉筋", "PNF", "收縮放鬆"],
    ),
    # ---------------- 啟動／控制 ----------------
    (
        "scapular-control",
        "肩胛控制訓練",
        "activate",
        [
            "肩胛",
            "Scapula",
            "Scapular",
            "前鋸肌",
            "Serratus",
            "Wall Slide",
            "貼牆滑行",
            "Roll Out",
            "Push[- ]?up Plus",
            "聳肩下壓",
        ],
    ),
    (
        "rotator-cuff",
        "旋轉肌群訓練",
        "activate",
        [
            "旋轉肌",
            "Rotator Cuff",
            "外轉",
            "External Rotation",
            "內轉",
            "Face Pull",
            "臉拉",
            "棘下肌",
            "Y[- ]?T[- ]?W",
        ],
    ),
    (
        "glute-activation",
        "臀肌啟動",
        "activate",
        [
            "臀橋",
            "Glute Bridge",
            "蚌殼",
            "Clam",
            "臀肌啟動",
            "Glute Activation",
            "怪獸走",
            "Monster Walk",
            "彈力帶側移",
            "驢子踢腿",
            "Donkey Kick",
            "側躺外展",
            "側躺髖外展",
        ],
    ),
    (
        "core-antirotation",
        "抗旋轉與抗側屈核心訓練",
        "activate",
        [
            "抗旋轉",
            "Anti[- ]?Rotation",
            "Pallof",
            "側棒式",
            "Side Plank",
            "抗側屈",
            "Anti[- ]?Lateral",
            "Renegade",
        ],
    ),
    (
        "core-antiextension",
        "抗伸展核心訓練",
        "activate",
        [
            "死蟲",
            "Dead ?bug",
            "棒式",
            "Plank",
            "鳥狗",
            "Bird ?dog",
            "抗伸展",
            "Anti[- ]?Extension",
            "Ab Wheel",
            "腹輪",
            "Hollow",
            "空心",
            "TRX Roll",
        ],
    ),
    (
        "loaded-carry",
        "負重行走",
        "activate",
        ["農夫走路", "Farmer", "Carry", "負重行走", "行李箱", "Suitcase", "過頭行走", "Waiter"],
    ),
    (
        "hip-hinge-pattern",
        "髖鉸鏈動作模式",
        "activate",
        [
            "髖鉸鏈",
            "Hip Hinge",
            "髖屈鉸鏈",
            "木棍",
            "Dowel",
            "Hinge Pattern",
            "Good Morning",
            "早安",
        ],
    ),
    (
        "core-flexion-rotation",
        "屈曲與旋轉核心訓練",
        "activate",
        [
            "捲腹",
            "Crunch",
            "仰臥起坐",
            "Sit[- ]?up",
            "轉體",
            "Russian Twist",
            "登山者",
            "Mountain Climber",
            "抬腿",
        ],
    ),
    # ---------------- 訓練動作：特異者優先 ----------------
    (
        "kb-swing",
        "壺鈴擺盪",
        "lift",
        ["壺鈴擺盪", "KB Swing", "Kettlebell Swing", "Swing", "擺盪", "壺鈴上膊", "壺鈴抓舉", "Kettlebell Clean", "Kettlebell Snatch"],
    ),
    (
        "plyo-rotational",
        "增強式與旋轉爆發力",
        "lift",
        [
            "跳",
            "Jump",
            "Plyo",
            "增強式",
            "Ice Skater",
            "側移",
            "Lateral Bound",
            "藥球",
            "Med ?ball",
            "Chop",
            "Twist",
            "旋轉爆發",
            "Counter Rotation",
            "變向",
            "多方向",
            "Cutting",
            "Change of Direction",
        ],
    ),
    (
        "pullover",
        "直臂下拉",
        "lift",
        ["直臂下拉", "Pullover", "Pull[- ]?over", "Straight Arm"],
    ),
    (
        "vertical-pull",
        "垂直拉",
        "lift",
        ["滑輪下拉", "下拉", "Pulldown", "Lat Pull", "引體向上", "Pull[- ]?up", "Chin[- ]?up", "Dead ?Hang", "懸吊"],
    ),
    (
        "horizontal-row",
        "水平拉／划船",
        "lift",
        ["划船", "Row", "反向划船", "Inverted", "Seal Row", "T[- ]?Bar"],
    ),
    (
        "chest-fly",
        "夾胸與飛鳥",
        "lift",
        ["夾胸", "飛鳥", "Fly", "Flye", "Crossover", "Pec Deck"],
    ),
    (
        "vertical-press",
        "垂直推",
        "lift",
        [
            "肩推",
            "過頭推",
            "Overhead Press",
            "Shoulder Press",
            "Military",
            "地雷管",
            "Landmine",
            "Push Press",
            "Thruster",
            "推舉",
        ],
    ),
    (
        "horizontal-press",
        "水平推",
        "lift",
        [
            "臥推",
            "Bench Press",
            "伏地挺身",
            "Push[- ]?up",
            "Push Up",
            "胸推",
            "Chest Press",
            "Dip",
            "雙槓",
        ],
    ),
    (
        "deadlift",
        "硬舉與髖鉸鏈負重",
        "lift",
        ["硬舉", "Deadlift", "RDL", "羅馬尼亞", "Romanian", "Hip Thrust", "臀推"],
    ),
    (
        "split-squat",
        "分腿蹲與弓步",
        "lift",
        ["弓步", "Lunge", "分腿蹲", "Split Squat", "保加利亞", "Bulgarian", "Step[- ]?up", "登階"],
    ),
    (
        "squat",
        "深蹲系列",
        "lift",
        ["深蹲", "Squat", "高腳杯", "Goblet", "腿推", "Leg Press", "坐站", "Sit[- ]?to[- ]?Stand"],
    ),
    (
        "single-leg-stability",
        "單腳穩定訓練",
        "lift",
        ["單腳", "單腿", "Single[- ]?Leg", "One[- ]?Leg", "單側", "Unilateral", "Skater Squat"],
    ),
    (
        "accessory-isolation",
        "單關節輔助訓練",
        "lift",
        [
            "二頭",
            "三頭",
            "Curl",
            "Triceps",
            "Biceps",
            "側平舉",
            "Lateral Raise",
            "Raise",
            "Extension",
            "腿彎舉",
            "提踵",
            "Calf Raise",
            "孤立",
            "彈力帶",
        ],
    ),
]


def _match(cat_patterns: list[str], haystack: str) -> bool:
    for p in cat_patterns:
        if (
            re.search(p, haystack, re.I)
            if any(c in p for c in ".*+?[]")
            else p.lower() in haystack.lower()
        ):
            return True
    return False


def classify(drill: dict) -> str | None:
    """回傳動作所屬的類別 id。"""
    hay = " ".join(str(drill.get(k) or "") for k in ("name", "en", "target", "title"))
    kind = drill.get("kind")
    # 先在同 kind 內找，避免「伸展」類關鍵字誤抓訓練動作
    for cid, _, ck, pats in CATEGORIES:
        if ck == kind and _match(pats, hay):
            return cid
    for cid, _, ck, pats in CATEGORIES:
        if ck != kind and _match(pats, hay):
            return cid
    return None


NAMES = {cid: name for cid, name, _, _ in CATEGORIES}
KINDS = {cid: kind for cid, _, kind, _ in CATEGORIES}
