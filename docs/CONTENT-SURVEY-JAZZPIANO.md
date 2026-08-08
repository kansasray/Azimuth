# 內容供給盤點——爵士鋼琴：從初學到職業

> 盤點日期：2026-08-08
> 方法：`yt-dlp ytsearch` 搜尋真實影片 ID（`--flat-playlist --print "%(id)s|%(duration)s|%(view_count)s|%(channel)s|%(title)s"`），
> 共執行 118 組英文／中文查詢（含 4 輪追加，鎖定缺口主題與大師逐一補搜）。
> 逐支候選以 YouTube oEmbed API（`https://www.youtube.com/oembed?url=...&format=json`）打過拿到 HTTP 200 才收錄。
> **本文件列出的 130 支種子影片全數驗證存在、公開、可嵌入**（130/130 通過，無失敗）。標題、頻道名照 oEmbed 回應的 `title` / `author_name` 抄錄，未憑記憶或搜尋標題臆測。
> 搜尋紀錄與原始回應存放於執行本次盤點時的暫存目錄，未收錄進本 repo。

## 一、總覽結論

這個主題**撐得起 11 章的架構，而且英文供給比爵士小號調查更深——爵士鋼琴的 YouTube 教學生態本身就比爵士小號龐大得多**（單「rootless voicing」一個關鍵詞就能挑出十幾支不同頻道的專門教學）。中文supply的分布也和爵士小號不同：**中文最大的驚喜集中在「大師研究」這個原本預期會是全課最弱一環的主題**，但「Voicings 進階」與「職業之路與健康」這兩章，中文供給比爵士小號調查更薄弱。

- **英文是深水區，且比爵士小號調查的英文供給更厚**：使用者已知的八個起點頻道（Open Studio、Aimee Nolte、Walk That Bass、Jazz Tutorial \| Julian Bradley、PianoPig、Jeff Schneider、Noah Kellman、Jeremy Siskind）全數確認存在且高度活躍，其中 Julian Bradley 與 Jeff Schneider 的單支影片觀看數達百萬等級。本次盤點另外挖出至少 15 個同等級的新頻道——PianoGroove、Piano With Jonny、MangoldProject、mDecks Music、Kent Hewitt、Josh Walsh、Stijn Wauters、Jazz Piano School、Ron Drotos KeyboardImprov、Michael Keithson 等——合力把 11 個主題面全部撐到「充足」，包括原本最可能出現缺口的「Voicings 進階」（爵士鋼琴獨有的大主題）與「大師研究」（四位指名大師 + Bud Powell/McCoy Tyner/Chick Corea/Keith Jarrett 合輯全部有多支風格拆解可用）。
- **中文最大的驚喜：啟彬與凱雅（chipinkaiyajazz）撐起了 Bill Evans 與 Chick Corea 兩個大師小節**。這個台灣資深爵士教育組合（謝啟彬／簡凱雅）經營著一個事實上的「什麼是爵士鋼琴家___的聲音？」系列，本次確認 Bill Evans 有 4 支直接分析（聲音特質、Voicing 重要性、《Autumn Leaves》前奏即興秘訣、Waltz for Debby 風格模仿引導），Chick Corea 有 1 支同系列 + MNA牛耳藝術頻道另外 3 支欣賞向影片可互補，McCoy Tyner 也有 1 支。這比爵士小號調查在中文圈找到的大師相關素材（僅魏廣晧非關四位大師的個人教學 + 1 支傳記科普）更有技術深度，是這次盤點最重要的正面發現。
- **但同一輪追加搜尋也確認了明確的負面結果：Oscar Peterson、Herbie Hancock、Thelonious Monk 三位在中文圈完全查無教學或分析內容**。針對這三位分別用「大師/技巧/分析/教學」等至少 4 種角度追加搜尋，結果不是英文頻道的影片被演算法帶進中文搜尋結果，就是完全不相關的內容（如「孟克」誤帶出哲學家維根斯坦傳記、動漫全集）。chipinkaiyajazz 的系列明確只做到 Bill Evans 與 Chick Corea，沒有延伸到這三位——這點透過直接搜尋該頻道站內關鍵字「什麼是爵士鋼琴家」二次確認過。
- **中文在「Voicings 進階」（主題 4）幾乎交白卷，是本次盤點供給最薄的一章**。這是爵士鋼琴區別於其他樂器爵士課程的核心賣點主題，但中文搜尋 rootless／quartal／block chords／upper structures 四個子題，只有 rootless 有 2-3 支堪用（hansunchan、chipinkaiyajazz、Dennis 爵士鋼琴），quartal（四度堆疊）、block chords、upper structures **三個子題完全查無中文專門教學**，多次改關鍵字後搜尋結果仍被英文頻道（Open Studio、Walk That Bass、PianoGroove）洗版。
- **中文在「職業之路與健康」（主題 11）同樣幾乎是空的，且比爵士小號調查更空**——爵士小號至少找到 Angus Trumpet 小號學長的職涯 vlog 2 支；爵士鋼琴這次搜尋「鋼琴家 局部性肌張力不全」「鋼琴家 職業傷害」等詞，結果被短劇、動漫、無關新聞淹沒，**鋼琴家 RSI／局部性肌張力不全的中文教學完全查無**。唯一堪用的三支是：NiceChord 的音樂工作經濟現實科普（非鋼琴專屬）、一位音樂家復健醫師的通用練習影片（非鋼琴/RSI專屬）、聽力公主的通用樂手聽力保護影片（非鋼琴專屬）。

**建議**：全課以**英文影片為骨幹**，主題 1-2（裝備、基礎技術）中文可以真正扛住主軸；主題 9（大師研究）建議**分開處理**——Bill Evans 與 Chick Corea 小節可以中英並重甚至中文優先展示 chipinkaiyajazz 的深度分析，Oscar Peterson / Herbie Hancock / Thelonious Monk 三個小節則誠實只用英文；主題 4（Voicings 進階）與主題 11（職業與健康）建議整章以英文骨幹、中文最多點綴 1-2 支，不要為了湊比例硬拿不對題的內容充數。

## 二、頻道盤點

### 中文頻道

| 頻道 | 主題 | 相關影片量 | 品質印象 |
|---|---|---|---|
| **chipinkaiyajazz（啟彬與凱雅）**（台灣） | 台灣資深爵士教育者謝啟彬／簡凱雅：事實上的「什麼是爵士鋼琴家___的聲音？」大師分析系列（Bill Evans 4 支、Chick Corea 1 支、McCoy Tyner 1 支）、guide tone line 旋律線條建構、3-note voicing 入門、《Days of Wine & Roses》和弦配置示範 | 本次盤點命中 20+ 支（含課程試看片段） | **本次中文盤點最重要的發現**——內容有真正的技術深度而非理論科普，是全中文圈唯一能撐起「大師風格分析」小節的頻道，觀看數不高（數百至數千）但含金量高，值得後續深挖頻道全部影片 |
| **NiceChord+（好和弦+）**（台灣） | 泛音樂理論／鋼琴視角：4 個爵士和弦配置、如何 Swing、Bossa Nova 彈法、**「我做過哪些音樂工作，好賺嗎？」職業經濟現實科普** | 本次盤點命中 8+ 支直接相關 | 高製作水準、觀看數大（數萬至數十萬），是主題 3/5/11 中文供給的重要來源，但**鋼琴視角非爵士鋼琴專門頻道**，選用需在文案說明 |
| **Blackflavour Jazz（黑味爵士）**（台灣） | 付費課程試看片段：Voice Leading 法則、如何利用爵士音階離開調性、藍調音階基本概念、和弦配置與鍵盤編曲、律動訓練、三個重要學習目標 | 本次盤點命中 8 支 | 主題精準對應課綱，但**全數是「-預覽」付費課程試看片**（1-5 分鐘），內容濃縮扎實，適合當作「概念導覽」而非完整教學 |
| **XinJazz法国爵士阿欣**（簡體，旅法教育者） | 「爵士专业课」編號系列：一次搞懂 Comping、大/小 II V I 怎麼 Solo、屬7alt分解怎麼練、爵士鋼琴課 12（Solo 怎麼練）、Spain（Chick Corea）Solo 思維分析 | 本次盤點命中 10+ 支 | 系統化、內容有深度，多器樂通用（非鋼琴專門），但**簡體字幕** |
| **Dennis 爵士鋼琴**（台灣，個人頻道） | 爵士樂視譜（Lead Sheet）常見錯誤、左手 Voicing 應用（Autumn Leaves shorts）、爵士即興必學基本功－音階、第一堂鋼琴課 | 本次盤點命中 8+ 支 | 短小精悍，多為 shorts 或 5-10 分鐘，講解直接但觀看數不高（數百至近萬） |
| **Héman Musique（希幔免費音樂教學）**（台灣） | 「爵士鋼琴入門」編號系列，本次確認至少 8 集（1、2、4、5、6、7、9、10） | 本次盤點命中 8 支 | 系列完整、免費教學定位明確，適合按進度收錄，觀看數落在數百至數千 |
| **UNI MUSIC 有意思音樂**（台灣，Andrew Page 葉祖安） | 「爵士鋼琴教學（一）～（六）」編號系列，圍繞單一改編曲目（Amazing Grace）教七和弦、古典編曲、即興、華爾滋等 6 大招式 | 本次盤點命中 8 支 | 美國爵士鋼琴家親自示範、中英文雙字幕，系列完整但觀看數低（數百） |
| **陳俊宇音樂工作室**（台灣） | 「爵士鋼琴指法的16個練習」編號系列（本次確認 1、5、8、12）、16 beat 爵士鋼琴伴奏手法、教你彈琶音 | 本次盤點命中 8+ 支 | 指法技巧編號系列完整，適合結構化收錄，觀看數數百至數千 |
| **重塑黑白鍵（古典鋼琴手的爵士養成計畫）**（香港，粵語） | 「7堂玩轉即興藍調」編號系列：第2課 Swing 律動與滑音技巧（Part A/B）、和弦改編、爵士體驗課 | 本次盤點命中 8 支 | 「古典鋼琴手轉爵士」的敘事角度對初學者友善，粵語教學，觀看數低（數十） |
| **ernesthighlife**（個人頻道） | 「爵士鋼琴觸鍵」對照短片：一般八分音符 vs Swing（搖擺）八分音符 | 本次盤點命中 2 支直接相關 | **中文圈少見的觸鍵/articulation 對照教學**，雖然頻道規模小（觀看數僅數百），但主題精準命中「swing 到底怎麼彈」這個常被忽略的技術細節 |
| **邱立婷-婷婷爵士 Li-Ting Chiu**（台灣） | 爵士人聲/鋼琴跨界教育：swing 八分音符兩種彈法解說、「26位經典推薦爵士鋼琴手」聽賞入門導覽 | 本次盤點命中 3 支 | 講解生動，「26位鋼琴手」適合當大師研究章節的開場導覽影片 |
| **MNA牛耳藝術**（台灣，藝術機構） | Chick Corea 欣賞向影片：絕世手藝、神妙的鋼琴即興、獲獎榮耀 | 本次盤點命中 3 支 | 機構製作水準穩定，可與 chipinkaiyajazz 的 Chick Corea 分析互補，但偏欣賞/介紹而非技法拆解 |
| **hansunchan**（個人頻道） | 左手 Rootless Voicing（Dm9/G13/Cmaj9）教學、12 個 keys 練習方法、1分鐘30秒完成12key即興 | 本次盤點命中 4+ 支 | 中文圈少數直接示範 rootless voicing 具體指法的頻道，值得留意 |
| **何俊秀**（台灣） | 鋼琴最常用三音固定和弦（shell voicing）教學活用，標榜「全國第一名爵士鋼琴」 | 本次確認 1 支 | 單支命中但主題精準對應 shell voicing 這個和聲基礎子題 |
| **張議中流行爵士鋼琴** | 「爵士鋼琴技巧系統教學」編號課程：第1課「和聲的運用」 | 本次確認 1 支 | 系統化課程開頭集，值得後續深挖是否有更多集數 |
| **中山大學音樂產製中心**（台灣，學術機構） | 「爵士即興概念」講座系列：Martijn 客座談調式 | 本次確認 1 支 | 大學機構製作，調式（modes）主題在中文圈罕見的學術講座切入 |
| **聽力公主・Hearing Action** | 音樂工作者聽力保護（音樂耳塞介紹） | 1 支直接相關 | 非鋼琴專門，但是全次盤點唯一命中的中文樂手聽力保護內容 |
| **Daniel su（蘇炯睿醫師）** | 音樂家復健：受傷後的練習 | 1 支直接相關 | **唯一命中的中文「音樂家職業傷害復健」內容**，但非鋼琴/RSI專屬，醫師視角泛用於各類樂器 |
| **科学钢琴 / 菲比钢琴 / Richard Piano Gym（黃光立）/ 檸檬卷 Janet / Tim Liu music / 河合鋼琴台灣總公司-KAWAI Taiwan / 意music鋼琴教室** | 古典鋼琴技術與器材選購通用內容：踏板操作、轉指技巧、坐姿手型、數位鋼琴選購比較、觸鍵重量 | 各 3-10+ 支 | **非爵士專門但直接可用於主題 1-2**——這批頻道合力讓「入門裝備」與「基礎技術」兩章中文供給達到充足等級，是中文供給的骨幹來源 |

### 英文頻道

| 頻道 | 主題 | 相關影片量 | 品質印象 |
|---|---|---|---|
| **Open Studio**（Peter Martin / Adam Maness） | 「2 Minute Jazz」微課程系列 + 完整課程：Bill Evans/Oscar Peterson/Herbie Hancock/Monk 分析、Crunchy Quartals、Block Chords、Swing、Transcribing、Solo Piano Basics | 本次命中 15+ 支 | 使用者已知起點，橫跨主題 1/4/5/6/9/10，是英文供給的旗艦頻道之一 |
| **Aimee Nolte Music** | Bill Evans（Discovering 系列）、Monk（What Makes Monk Sound Like Monk）、Keith Jarrett、Swing 入門 | 本次命中 5+ 支 | 使用者已知起點，講解生動易懂，適合主題 5/9 入門影片 |
| **Walk That Bass** | Guide Tones、Voice Leading（含 Tensions）、Rootless/Quartal/Upper Structures/Herbie Hancock/Monk/Bud Powell Voicings、Comping | 本次命中 12+ 支 | 使用者已知起點，理論講解扎實，橫跨主題 3/4/8/9/10 |
| **Jazz Tutorial \| Julian Bradley** | A-Z 全指南（477 萬觀看）、Shell/Rootless/Upper Structure Voicings、ii-V-I、Block Chords、Jazz Theory in 20 Minutes（400 萬+觀看） | 本次命中 12+ 支 | 使用者已知起點，觀看數常破百萬，是英文供給最大量級的單一頻道 |
| **PianoPig** | Comping Rhythms、Rootless Voicings、Bebop Approach Patterns、Blues Licks、Modes 入門 | 本次命中 12+ 支 | 使用者已知起點，橫跨主題 3/4/6/7 |
| **Jeff Schneider** | Chord Stack System、10 Easy Licks、Voice Leading、Minor ii-V-i Voicings、**Dark Side of Being a Cruise Ship Musician**（職業現實） | 本次命中 11+ 支 | 使用者已知起點，觀看數常達數十萬至五十萬+，涵蓋主題 3/6/11 |
| **Noah Kellman** | 極度多產：Voicings、Comping、Stride、大師風格（Bill Evans/Oscar Peterson/McCoy Tyner/Monk）、**Hand Independence**、**7 Steps to Fixing & Preventing Pain, Tendonitis & Injury For Pianists** | 本次命中 15+ 支 | 使用者已知起點，是唯一同時橫跨技術層（主題 2/4/5）與大師研究（主題 9）與樂手健康（主題 11）的頻道 |
| **Jeremy Siskind** | Solo Piano 專門：9 Levels of Comping、Reharmonization Exercises、Accompanying Vocalists、Motivic Development、Monk's Chord Voicings | 本次命中 12+ 支 | 使用者已知起點，solo piano 與 vocal accompaniment 的權威來源，橫跨主題 8/9/10 |
| **PianoGroove** | Rootless/Upper Structure Voicings、Reading Lead Sheets、Herbie Hancock Chord Voicing、Vocal Accompaniment Tips | 本次命中 6+ 支 | 新發現，理論系統化程度高，是主題 3/4/9/10 的重要補充 |
| **Piano With Jonny** | 綜合大型頻道：Bebop Guide、Block Chords、Voice Leading、1-Year Practice Plan、Oscar Peterson | 本次命中 10+ 支 | 新發現，觀看數常達數十萬，內容廣度大 |
| **MangoldProject** | 編號初學者系列：Shell Voicings（Lesson 4）、Quartal Voicings（Lesson 10）、Voice Leading 入門、Bill Evans Chords 專門教學 | 本次命中 6+ 支 | 新發現，適合結構化收錄的編號課程 |
| **mDecks Music – Piano & Harmony Tutorials** | Comping Workout（56 Rhythmic Words）、Quartal/Bebop/Dorian/Mixolydian 完整練習、Motivic Development、Chick Corea Chords | 本次命中 8+ 支 | 新發現，練習導向（Workout）系列扎實，適合進階練習素材 |
| **Kent Hewitt** | 左手技巧（Moanin'）、Bill Evans（My Foolish Heart）、Herbie Hancock（Maiden Voyage）、Monk（Ruby, My Dear）、Block Chords 入門 | 本次命中 6+ 支 | 新發現，橫跨主題 5/9，涵蓋多位大師 |
| **Josh Walsh** | Quartal Voicings、Oscar Peterson 技巧與 Licks、Bill Evans、McCoy Tyner、George Shearing Block Chords | 本次命中 6+ 支 | 新發現，大師風格拆解角度細緻 |
| **Stijn Wauters** | Shell Voicings、ii-V-I & Turnaround Licks、Blues Licks、Guide Tones、Voice Leading | 本次命中 6+ 支 | 新發現，練習環節（Practice Session）系列適合初中階 |
| **Jazz Piano School** | "Lick/Line of the Week" 編號系列：McCoy Tyner 4th Voicings、Bud Powell 多支、Bill Evans（Motivic Development 示範）、Keith Jarrett | 本次命中 6+ 支 | 新發現，是本次盤點在「Bud Powell/McCoy Tyner」子題的主要來源 |
| **Ron Drotos KeyboardImprov** | Monk（Jump Monk / Blue Monk 逐首解析）、「Art of Keith Jarrett」逐日挑戰系列、Rootless Voicing 迷思破解 | 本次命中 6+ 支 | 新發現，Keith Jarrett 逐日練習日誌形式罕見 |
| **Michael Keithson / InsidePiano Tutorials / mDecks / Charles Cornell / Rick Beato / Adam Neely** | 各自 1-3 支：Modes、Bebop Scale、Oscar Peterson（Charles Cornell「被低估的最偉大鋼琴家」）、Bud Powell 影響力分析（Rick Beato）、Monk 25 Tips（Adam Neely） | 各 1-3 支 | 音樂科普/理論類大型頻道跨界命中，適合單元開場影片 |
| **焦點肌張力不全／RSI 專門創作者群**（Dr. Farias' Dystonia Recovery Program、The Mindful Pianist、Piano Somatics、Denis Zhdanov、PianoCareer） | 鋼琴家 Focal Dystonia 與 RSI 專門內容 | 各頻道 3-10+ 支 | **英文供給的一大亮點**——這是一整個以鋼琴家職業傷害為主題的創作者聚落，中文完全沒有對應（見一、總覽結論） |
| **Patrick Bartley / Jazz Video Guy / Travis D. Artist** | 職業爵士樂手生活現實：What It ACTUALLY Takes To Be a Jazz Musician、A Day in the Life of a Jazz Musician | 各 1-2 支 | 主題 11 職業現實層的直接命中 |
| **通用鋼琴器材/技術頻道**（Merriam Music、Pianote、Piano From Scratch、The Piano Priestess、Bay Area Piano Masters、Dave Frank、London Contemporary School of Piano） | 數位鋼琴選購比較、鍵盤重量差異、坐姿手型、音階指法、觸鍵控制、Lead Sheet 閱讀 | 各 2-6 支 | 非爵士專門但直接支撐主題 1/2/3 |

## 三、逐主題供給缺口判定

| # | 主題 | 中文供給 | 英文供給 |
|---|---|---|---|
| 1 | 入門與裝備（傳統/數位/stage piano、鍵盤重量觸鍵、坐姿手型、練習環境耳機） | **充足**（檸檬卷 Janet/Tim Liu music/KAWAI/CASIO 官方頻道構成成熟的數位鋼琴選購類型；Richard Piano Gym 坐姿手型系列完整；意music鋼琴教室有練習音量/耳機子題） | 充足 |
| 2 | 基礎技術（音階指法、手指獨立性、觸鍵音色、延音踏板） | **充足**（科学钢琴/菲比钢琴/黃光立等古典鋼琴技術頻道直接可用；ernesthighlife 甚至有爵士專屬 swing 觸鍵對照） | 充足 |
| 3 | 和聲基礎（讀 lead sheet、三和弦到七和弦、shell voicings、voice leading 入門） | **稀少但堪用**（chipinkaiyajazz 3-note voicing、Blackflavour voice leading 預覽片、Dennis lead sheet 錯誤解析、何俊秀 shell chord 各 1 支，NiceChord 和弦配置 1 支——每個子題都有命中，但每頻道僅 1 支，深度不足） | 充足 |
| 4 | Voicings 進階（rootless、quartal/四度堆疊、block chords、upper structures） | **幾乎沒有，是本次盤點供給最薄的一章**（僅 rootless 有 hansunchan/chipinkaiyajazz/Dennis 3 支；quartal、block chords、upper structures **三個子題完全查無中文專門教學**，多輪不同關鍵字搜尋結果均被英文頻道洗版） | 充足（這是爵士鋼琴獨有大主題，英文 supply 最厚，Open Studio/Walk That Bass/PianoGroove/Josh Walsh 等多頻道皆有專門教學） |
| 5 | 節奏與 swing（comping 節奏、swing feel、左手 stride 到現代） | **稀少但堪用**（NiceChord swing 入門、邱立婷 swing 八分音符對比、重塑黑白鍵 swing 律動課程、XinJazz comping 解說——量不大但涵蓋子題完整） | 充足 |
| 6 | 爵士語彙（blues、licks、採譜） | **稀少**（僅 Blackflavour 3 支預覽片觸及藍調音階與離調技巧；**中文的爵士鋼琴專門「採譜方法」教學完全查無**） | 充足（含小號視角外溢：Noah Kellman/PianoPig blues licks、AT Jazz Piano Transcription 逐首採譜） |
| 7 | 音階與和聲進階（調式、bebop scales、ii-V-I lines、代理和弦/reharmonization） | **稀少但堪用**（hansunchan 12-key 練習、XinJazz 大小 II V I Solo、中山大學調式講座——但 **reharmonization 中文完全查無鋼琴專門教學**） | 充足 |
| 8 | 即興實作（右手 lines + 左手 comping 協調、guide tones、動機發展、standards） | **稀少但有亮點**（chipinkaiyajazz 的 Guide Tone Line 教學是本次中文盤點的高品質命中；XinJazz Solo 練習法、Dennis 即興基本功——但 **motivic development 中文完全查無**） | 充足 |
| 9 | 大師研究（Bill Evans/Oscar Peterson/Herbie Hancock/Monk 各撐一單元 + Bud Powell/McCoy Tyner/Chick Corea/Keith Jarrett 合輯） | **兩極分化，本次盤點最關鍵的發現**：**Bill Evans 與 Chick Corea 中文供給良好**（chipinkaiyajazz 系列 5 支 + MNA牛耳藝術 3 支，深度不輸英文）；**McCoy Tyner 僅 1 支**（chipinkaiyajazz）；**Oscar Peterson、Herbie Hancock、Thelonious Monk、Bud Powell、Keith Jarrett 五位在中文圈完全查無教學或分析內容**，多輪不同角度追加搜尋均確認 | **充足**（四位指名大師與合輯四人皆有多支風格拆解／voicing 分析／transcription，Noah Kellman/Open Studio/Aimee Nolte/Jazz Piano School 等頻道合力覆蓋） |
| 10 | 合奏與伴奏（trio 角色、幫歌手/管樂手伴奏、solo piano） | **稀少**（Blackflavour 和弦編曲技巧預覽、陳俊宇 16-beat 伴奏手法各 1 支；**三重奏中鋼琴角色、幫歌手伴奏的中文專門教學查無**） | 充足（PianoGroove/Jeremy Siskind/Noah Kellman/Walk That Bass 皆有 vocal accompaniment 或 trio 角色專門教學） |
| 11 | 職業之路與健康（職業實況、audition、手部傷害/RSI/focal dystonia、聽力） | **幾乎沒有，比爵士小號調查更空**（僅 NiceChord 音樂工作經濟現實 1 支[非鋼琴專屬]、Daniel su 音樂家復健 1 支[非鋼琴/RSI專屬]、聽力公主聽力保護 1 支[非鋼琴專屬]；**鋼琴家 focal dystonia／RSI／audition 準備的中文教學完全查無**） | 充足（且有整群 focal dystonia／RSI 專門創作者：Dr. Farias' Dystonia Recovery Program、The Mindful Pianist、Piano Somatics、Denis Zhdanov、PianoCareer；Patrick Bartley/Jazz Video Guy 職業現實內容） |

## 四、種子影片（130 支，全數 oEmbed 200 已驗證）

驗證方法：對每一支影片打 `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=<ID>&format=json`，
確認 HTTP 200 後才收錄。標題、頻道名皆照 oEmbed 回應的 `title` / `author_name` 抄錄（與選片同一次驗證動作，未憑記憶）。

### 英文（81 支）

| 主題 | 影片標題 | 頻道 | URL |
|---|---|---|---|
| 1 入門與裝備 | 🎹﻿ Weighted vs Unweighted Piano Keys \| A Comprehensive Comparison ﻿🎹 | Merriam Music | https://www.youtube.com/watch?v=zaQuKVl-Yck |
| 1 入門與裝備 | What's a Stage Piano? Yamaha CP73 & Kawai MP7SE | Alamo Music Center - Pianos and Keyboards | https://www.youtube.com/watch?v=ZhT-tqY7gEU |
| 1 入門與裝備 | 🎹Digital vs Acoustic Pianos - What Should You Buy? What are the Differences?🎹 | Merriam Music | https://www.youtube.com/watch?v=hqyx7Hrs9C0 |
| 1 入門與裝備 | Proper Hand Posture At The Piano | Pianote | https://www.youtube.com/watch?v=rZznie6UU_o |
| 1 入門與裝備 | 🎹﻿Best Headphones For Digital Pianos \| Shure SRH840 vs Meze 99 vs AKG K171 vs Roland RH300﻿🎹 | Merriam Music | https://www.youtube.com/watch?v=TekSM52IX8M |
| 1 入門與裝備 | How To Choose A Beginner Digital Piano/Keyboard | Piano From Scratch | https://www.youtube.com/watch?v=9vvXeAtwGL0 |
| 2 基礎技術 | All 12 Major Scales \| Just the Fingerings | Piano From Scratch | https://www.youtube.com/watch?v=bm9fgq9COgI |
| 2 基礎技術 | Hand Independence Exercises For Beginners | Pianote | https://www.youtube.com/watch?v=aUbDQEPh_5g |
| 2 基礎技術 | Hand Independence Exercises for Jazz Piano | Noah Kellman | https://www.youtube.com/watch?v=jEdEcaLDnt0 |
| 2 基礎技術 | The Science of Touch - 5 Ways to Control Your Piano Sound w/Dave Frank | Dave Frank | https://www.youtube.com/watch?v=QL5Ze64Wo2I |
| 2 基礎技術 | How To Use A Sustain Pedal - Piano Lesson (Pianote) | Pianote | https://www.youtube.com/watch?v=koJVelJdnZE |
| 2 基礎技術 | How to use the SUSTAIN PEDAL when improvising JAZZ | NewJazz | https://www.youtube.com/watch?v=1KTmp-mNvzk |
| 3 和聲基礎 | How To Read Lead Sheets On Piano | London Contemporary School of Piano | https://www.youtube.com/watch?v=tN0ZHQxaUhs |
| 3 和聲基礎 | Shell Voicings Explained Clearly (Beginner Jazz Piano) | Jazz Tutorial \| Julian Bradley | https://www.youtube.com/watch?v=_ldxtscmCpo |
| 3 和聲基礎 | Jazz Piano for Beginners: Shell Voicings (Lesson 4) | MangoldProject | https://www.youtube.com/watch?v=WJd5xh7eAQo |
| 3 和聲基礎 | Voice Leading - A Beginner Piano Lesson in Smooth Chord Progressions | MangoldProject | https://www.youtube.com/watch?v=ZKM8FtLgvRk |
| 3 和聲基礎 | Jazz Piano Tutorial - Voice Leading | Walk That Bass | https://www.youtube.com/watch?v=SzZqwETn0Lw |
| 4 Voicings 進階 | Rootless Voicings Finally Explained - Jazz Piano Lesson | PianoGroove | https://www.youtube.com/watch?v=gvntLSXK_Wc |
| 4 Voicings 進階 | Rootless Voicings: EVERYTHING You Need To Know | PianoPig | https://www.youtube.com/watch?v=w2V_1NkiK3c |
| 4 Voicings 進階 | Jazz Piano Chord Voicings - Quartal Chords | Walk That Bass | https://www.youtube.com/watch?v=BmoN6v-4h7U |
| 4 Voicings 進階 | What Are Crunchy Quartals? | Open Studio | https://www.youtube.com/watch?v=MQtiT6syGmc |
| 4 Voicings 進階 | What Are Block Chords? | Open Studio | https://www.youtube.com/watch?v=EQJj3hgzTkQ |
| 4 Voicings 進階 | How Jazz Works: George Shearing Block Chords | Josh Walsh | https://www.youtube.com/watch?v=AjOD-sC3sI8 |
| 4 Voicings 進階 | Upper Structure Triads For Jazz Piano | PianoGroove | https://www.youtube.com/watch?v=K7y1Bssd0f4 |
| 5 節奏與swing | Playing the Ones: Comping on the Piano | Jazz at Lincoln Center's JAZZ ACADEMY | https://www.youtube.com/watch?v=zJ4__lIpOcI |
| 5 節奏與swing | The 7 Comping Rhythms That Really Matter - Jazz Chords | Jens Larsen | https://www.youtube.com/watch?v=-450hfJp0I4 |
| 5 節奏與swing | 7 Ways to Swing on the Piano with Peter Martin | Open Studio | https://www.youtube.com/watch?v=FnwSlJgK1fM |
| 5 節奏與swing | How To Really Start Swinging | Aimee Nolte Music | https://www.youtube.com/watch?v=AToPlzdqvtw |
| 5 節奏與swing | Play Stride Piano — The CLASSIC Left Hand Jazz/Blues Piano Technique | Bill Hilton | https://www.youtube.com/watch?v=RjlikROdVg0 |
| 6 爵士語彙 | The BEST Blues Riffs and Licks for Jazz Piano | Noah Kellman | https://www.youtube.com/watch?v=e9I5BpBXQlo |
| 6 爵士語彙 | 2 Easy Blues Licks You Can Learn In 5 Minutes | PianoPig | https://www.youtube.com/watch?v=ZhGOOabCuPc |
| 6 爵士語彙 | How to Get Started Transcribing - Peter Martin & Adam Maness \| You'll Hear It S4E59 | Open Studio | https://www.youtube.com/watch?v=GFCDLt4qgCw |
| 6 爵士語彙 | Tommy Flanagan "All The Things You Are" Piano Transcription | AT Jazz Piano Transcription | https://www.youtube.com/watch?v=MGZx0gxcTKc |
| 6 爵士語彙 | 10 Easy Licks Every Jazz Musician Should Know | Jeff Schneider | https://www.youtube.com/watch?v=DqWyncmN4Ko |
| 7 音階與和聲進階 | How to improvise Jazz Piano. Part 1. The Bebop Scale. | InsidePiano Tutorials | https://www.youtube.com/watch?v=KWAFNQ_8nvU |
| 7 音階與和聲進階 | Jazz Piano II–V–I in All 12 Keys (How to Practice + Voice It on Piano) | Jazz Tutorial \| Julian Bradley | https://www.youtube.com/watch?v=ipkMKbb1C1c |
| 7 音階與和聲進階 | Best Exercises for Jazz Piano Reharmonization | Jeremy Siskind | https://www.youtube.com/watch?v=3QzlW4RUXIk |
| 7 音階與和聲進階 | INTRODUCTION TO MODES: Dorian, Lydian, Mixolydian, Locrian & more | PianoPig | https://www.youtube.com/watch?v=o6FVtZ-bkyU |
| 7 音階與和聲進階 | Major II V I & Turn Around Licks | Stijn Wauters | https://www.youtube.com/watch?v=57r-M-oXpsc |
| 8 即興實作 | Jazz Improvisation - Guide Tones | Walk That Bass | https://www.youtube.com/watch?v=zuXhDQNohlE |
| 8 即興實作 | Motivic Development In Jazz - 10 Exercises For More Musical Solos | Magnus Bakken | https://www.youtube.com/watch?v=ByOqfC0jntc |
| 8 即興實作 | 5 Jazz Standards Every Jazz Piano Beginner Should Know! | Jazzmentl | https://www.youtube.com/watch?v=YwD2X3CAajQ |
| 8 即興實作 | RHYTHMIC JAZZ EXERCISES - Coordinate Left & Right Hand | NewJazz | https://www.youtube.com/watch?v=SE27Uy1jAg8 |
| 8 即興實作 | Solo Jazz Piano: What Do I Do with my Left Hand??? | Jeremy Siskind | https://www.youtube.com/watch?v=jtvVaPy7_4c |
| 9 大師研究(Bill Evans) | How to Sound Like Bill Evans | 지민도로시Jimindorothy | https://www.youtube.com/watch?v=FjhcFfYZAcA |
| 9 大師研究(Bill Evans) | Bill Evans Chords: A Tutorial on their Voicing | MangoldProject | https://www.youtube.com/watch?v=tgriLghwiFY |
| 9 大師研究(Bill Evans) | Bill Evans, My Foolish Heart, Art  of the Rootless Voicing, chord analysis | Kent Hewitt | https://www.youtube.com/watch?v=BgItQOto_5g |
| 9 大師研究(Bill Evans) | Discovering Bill Evans (Part One: The Minimalist) | Aimee Nolte Music | https://www.youtube.com/watch?v=IImQRQmQVxY |
| 9 大師研究(Bill Evans) | Bill Evans Chords \| Guided Practice Session™ with Adam Maness | Open Studio | https://www.youtube.com/watch?v=KSocqJrAKxQ |
| 9 大師研究(Oscar Peterson) | Oscar Peterson's Signature Sound | Open Studio | https://www.youtube.com/watch?v=s5y_ABjdx-4 |
| 9 大師研究(Oscar Peterson) | Oscar Peterson's Signature Sound Ft. Jacob Dupre (Piano Lesson) | Pianote | https://www.youtube.com/watch?v=M232KsQmyuo |
| 9 大師研究(Oscar Peterson) | How to Play Piano Like Oscar Peterson [2021] | Noah Kellman | https://www.youtube.com/watch?v=vVJx2xqza8o |
| 9 大師研究(Oscar Peterson) | The GREATEST Pianist Ever Isn't Talked About In Jazz School | Charles Cornell | https://www.youtube.com/watch?v=hd-d5djqFcc |
| 9 大師研究(Herbie Hancock) | The 3 Principles Of Herbie Hancock | Open Studio | https://www.youtube.com/watch?v=NJIIno_kxrw |
| 9 大師研究(Herbie Hancock) | Herbie Hancock Chord Voicing - Minor 11th Chord Piano | PianoGroove | https://www.youtube.com/watch?v=z-UcHpG3Fxs |
| 9 大師研究(Herbie Hancock) | Maiden Voyage, Herbie Hancock's Iconic Song, A Jazz Tutorial and Analysis.. | Kent Hewitt | https://www.youtube.com/watch?v=vec22UbV4GM |
| 9 大師研究(Herbie Hancock) | Herbie Hancock - This is What Modal Jazz Really is | Jens Larsen | https://www.youtube.com/watch?v=0kXTlccb3jc |
| 9 大師研究(Thelonious Monk) | How to Sound Like Thelonious Monk | Noah Kellman | https://www.youtube.com/watch?v=D3thK-ZFoJ4 |
| 9 大師研究(Thelonious Monk) | What Makes Monk Sound Like Monk | Aimee Nolte Music | https://www.youtube.com/watch?v=oEqWxgFGi_Q |
| 9 大師研究(Thelonious Monk) | The Secrets of Monk's Chord Voicings...Revealed! | Jeremy Siskind | https://www.youtube.com/watch?v=BxZbjPTXE9k |
| 9 大師研究(Thelonious Monk) | Advice From a Master: Thelonious Monk (Part 1) - Peter Martin & Adam Maness \| You'll Hear It S4E36 | Open Studio | https://www.youtube.com/watch?v=ALhA_HlBgoU |
| 9 大師研究(Thelonious Monk) | Thelonious Monk's 25 Tips for Musicians | Adam Neely | https://www.youtube.com/watch?v=tBxjacxRshE |
| 9 大師研究(合輯) | The Pianist That Influenced A Generation | Rick Beato | https://www.youtube.com/watch?v=U5oVWVH43Dc |
| 9 大師研究(合輯) | How to play McCoy Tyner 4th Voicings | Jazz Piano School | https://www.youtube.com/watch?v=SUsayXMBOhM |
| 9 大師研究(合輯) | How to Sound Like McCoy Tyner: Pentatonics & Melodic Cells for Sick Lines [Jazz Piano Tutorial] | Noah Kellman | https://www.youtube.com/watch?v=BnCl0UkKftM |
| 9 大師研究(合輯) | Chick Corea Plays "Spain" (Tutorial with Overhead Camera and Transcription) | Chick Corea | https://www.youtube.com/watch?v=XD0Pb7MNWzc |
| 9 大師研究(合輯) | The "Secret" to Improving Your Rhythm and Time by Chick Corea | Chick Corea | https://www.youtube.com/watch?v=ED7liSX7zvY |
| 9 大師研究(合輯) | Keith Jarrett's Most Groundbreaking Voicings Explained | Noah Kellman | https://www.youtube.com/watch?v=bM7IURRDwtI |
| 9 大師研究(合輯) | Why Keith Jarrett Blows My Mind | Aimee Nolte Music | https://www.youtube.com/watch?v=44u65eusazM |
| 10 合奏與伴奏 | Jazz piano tutorial. The piano role in the rhythm section. How to practice comping. Kay Benyarko | Kay Benyarko | https://www.youtube.com/watch?v=Ex1yp6RTt5s |
| 10 合奏與伴奏 | How To Accompany Singers \| Vocal Accompaniment Tips For Jazz Piano | PianoGroove | https://www.youtube.com/watch?v=PlIwat9JCxI |
| 10 合奏與伴奏 | Solo Piano BASICS \| You'll Hear It | Open Studio | https://www.youtube.com/watch?v=sqzoeBNYhZI |
| 10 合奏與伴奏 | Playing Duo Like a Pro - Jazz Piano Accompaniment Lesson (feat. Chad LB) | Noah Kellman | https://www.youtube.com/watch?v=jTp8k_AhEqk |
| 10 合奏與伴奏 | How to Comp for a Vocalist | Walk That Bass | https://www.youtube.com/watch?v=kPykSoT-wDA |
| 11 職業之路與健康 | What It ACTUALLY Takes To Be a Jazz Musician in 2022... | Patrick Bartley | https://www.youtube.com/watch?v=OekOEw8vbUU |
| 11 職業之路與健康 | A Day in the Life of a Jazz Musician | Travis D. Artist | https://www.youtube.com/watch?v=Dz0S_zo2E7g |
| 11 職業之路與健康 | 7 Steps to Fixing & Preventing Pain, Tendonitis & Injury For Pianists | Noah Kellman | https://www.youtube.com/watch?v=bMW6hBvZ2eo |
| 11 職業之路與健康 | Focal Dystonia in a pianist | Dr. Farias' Dystonia Recovery Program | https://www.youtube.com/watch?v=v17_VrvhmVE |
| 11 職業之路與健康 | How I resolved focal dystonia and how can you too! | The Mindful Pianist | https://www.youtube.com/watch?v=8T03h3eGi5o |
| 11 職業之路與健康 | Tinnitus: The Musicians Demon (and mine) | Rick Beato | https://www.youtube.com/watch?v=WdINYxLWGXs |
| 11 職業之路與健康 | The Dark Side of Being a Cruise Ship Musician | Jeff Schneider | https://www.youtube.com/watch?v=PnBGTFKUkK8 |

### 中文（49 支）

| 主題 | 影片標題 | 頻道 | URL | 語言 |
|---|---|---|---|---|
| 1 入門與裝備 | [評測系列] FP30 PXS1000 ES110 P125 入門電鋼琴推薦 選購指南 How to Choose Digital Piano for beginners Buying guide | Tim Liu music | https://www.youtube.com/watch?v=qkbTccNZGCs | 繁中 |
| 1 入門與裝備 | 到底要叫它「數位鋼琴」、「電鋼琴」還是「電子鋼琴」？哪一個才對？ | 檸檬卷 Janet | https://www.youtube.com/watch?v=DQzOWTVoy6M | 繁中 |
| 1 入門與裝備 | 初學能不能用「電鋼琴」？！觸鍵太輕怎麼辦？我推薦的3款入門電鋼琴 | 檸檬卷 Janet | https://www.youtube.com/watch?v=hfyD0YcU9Us | 繁中 |
| 1 入門與裝備 | "數位鋼琴鍵盤觸鍵(touch)的重要性" #數位鋼琴 #kawai #觸鍵 #touch #數位鋼琴觸鍵 | 河合鋼琴台灣總公司-KAWAI Taiwan | https://www.youtube.com/watch?v=MxDcKDsD1o0 | 繁中 |
| 1 入門與裝備 | OP.1 基本姿勢–坐姿｜《彈奏鋼琴的基本運動系列》 | Richard Piano, Color-mirrored music | https://www.youtube.com/watch?v=uxp5-6oO2L4 | 繁中 |
| 1 入門與裝備 | OP.2 基本姿勢–手型｜《彈奏鋼琴的基本運動系列》 | Richard Piano, Color-mirrored music | https://www.youtube.com/watch?v=y-9javIThSU | 繁中 |
| 1 入門與裝備 | 彈琴好吵？/如何降低鋼琴音量安心練琴的幾大方法 | 意music鋼琴教室 | https://www.youtube.com/watch?v=UZ140Mf2fZA | 繁中 |
| 2 基礎技術 | 钢琴踏板操作指南！一次性解决新手踏板糊成一片的问题 | 科学钢琴 | https://www.youtube.com/watch?v=WTHjDpCkQ7A | 簡中 |
| 2 基礎技術 | 彈琴手忙腳更亂/延音踏板基本踩法與練習——踏板系列下集 | 意music鋼琴教室 | https://www.youtube.com/watch?v=Lwfp0zoNKLU | 繁中 |
| 2 基礎技術 | 弹钢琴手指跑动不流畅？4个超硬核转指技巧让你实现快速跑动！ | 科学钢琴 | https://www.youtube.com/watch?v=ScmPIiOhvaQ | 簡中 |
| 2 基礎技術 | 建立独立的手指: 抬指练习 (building independent fingers: lifting fingers) | 黃光立 | https://www.youtube.com/watch?v=iYErUPqV33k | 繁中 |
| 2 基礎技術 | 钢琴教学第一课\| 正确坐姿 手型 触键 \|初学者必看 | 菲比钢琴 | https://www.youtube.com/watch?v=fnXUSeJERgc | 簡中 |
| 2 基礎技術 | 爵士鋼琴觸鍵 一般八分音符 | ernesthighlife | https://www.youtube.com/watch?v=h0mseXFtmZM | 繁中 |
| 2 基礎技術 | 爵士鋼琴觸鍵 Swing(搖擺) 八分音符 | ernesthighlife | https://www.youtube.com/watch?v=zHnqx5_12k0 | 繁中 |
| 3 和聲基礎 | 4 個不可不知的爵士鋼琴和弦配置，馬上學起來用吧！ | NiceChord+ (好和弦+) | https://www.youtube.com/watch?v=15hlC_PCqjw | 繁中 |
| 3 和聲基礎 | 【爵士鋼琴技巧系統教學】『第1課』「和聲的運用」(Harmony)實用演奏篇 | 張議中流行爵士鋼琴 | https://www.youtube.com/watch?v=gJpAQAKKPmk | 繁中 |
| 3 和聲基礎 | 爵士鋼琴_重要的Voice Leading法則與實用祕訣 -預覽 | Blackflavour Jazz | https://www.youtube.com/watch?v=QDluNCZg-Vs | 繁中 |
| 3 和聲基礎 | 快速找到爵士聲響的方法 - 爵士樂中的簡易三音和絃配置（3-note Jazz Voicing）一點通 | chipinkaiyajazz | https://www.youtube.com/watch?v=ErTzxUehTsY | 繁中 |
| 3 和聲基礎 | 爵士樂的視譜(Lead Sheet)：最常見的三個錯誤 | Dennis 爵士鋼琴 | https://www.youtube.com/watch?v=_lO6LLfElFo | 繁中 |
| 3 和聲基礎 | 鋼琴最常用三音固定和弦教學活用全國第一名爵士鋼琴何俊秀 | 何俊秀 | https://www.youtube.com/watch?v=krKdsD-Z0j0 | 繁中 |
| 4 Voicings 進階 | [爵士鋼琴教學] 如何用左手彈Dm9, G13, Cmaj9 Rootless Voicing? | hansunchan | https://www.youtube.com/watch?v=iaMKKaWNRSw | 繁中 |
| 4 Voicings 進階 | 《Days of Wine & Roses》基本Jazz Piano Chord Voicing示範 - 先照著移動手指就能找到正確聲音 | chipinkaiyajazz | https://www.youtube.com/watch?v=7gXuTkK9Q9A | 繁中 |
| 4 Voicings 進階 | [鋼琴手視角]  左手Voicing應用 - Autumn Leaves #shorts | Dennis 爵士鋼琴 | https://www.youtube.com/watch?v=3XJo9Bk5Wm8 | 繁中 |
| 5 節奏與swing | 好和弦教你如何 Swing！ | NiceChord+ (好和弦+) | https://www.youtube.com/watch?v=vIGoV2XRPI0 | 繁中 |
| 5 節奏與swing | 爵士初學與大師的一線之隔，搖擺swing八分音符的兩種不同彈法 | 邱立婷-婷婷爵士 Li-Ting Chiu | https://www.youtube.com/watch?v=gitSJw3zoaQ | 繁中 |
| 5 節奏與swing | (第 2課 Part A)彈藍調好呆板？4個層次教你玩轉 Swing 搖擺律動！必學靈魂「滑音 Slides」教學 (7堂玩轉即興藍調-第 2 課) | 重塑黑白鍵 古典鋼琴手的爵士養成計畫 | https://www.youtube.com/watch?v=hxuUmuLJ9xs | 粵語 |
| 5 節奏與swing | 爵士专业课7：一次搞懂爵士Comping怎么回事！ | XinJazz法国爵士阿欣 | https://www.youtube.com/watch?v=asqu_If9INg | 簡中 |
| 6 爵士語彙 | 爵士鋼琴_如何利用爵士音階離開調性-預覽 | Blackflavour Jazz | https://www.youtube.com/watch?v=N9hXb5WVq6w | 繁中 |
| 6 爵士語彙 | 爵士鋼琴_解析藍調鄉村音的使用技巧-How Deep Is Your Love-預覽 | Blackflavour Jazz | https://www.youtube.com/watch?v=kr4CB4ny6yY | 繁中 |
| 6 爵士語彙 | 爵士鋼琴_藍調音階的基本使用概念-預覽 | Blackflavour Jazz | https://www.youtube.com/watch?v=vPcFpTDlAY8 | 繁中 |
| 7 音階與和聲進階 | [爵士鋼琴教學] 怎樣練習爵士鋼琴的 12 個 keys ?? | hansunchan | https://www.youtube.com/watch?v=cilU1fggecI | 繁中 |
| 7 音階與和聲進階 | 爵士专业课13：大/小 II V I怎么Solo？（多器乐通用） | XinJazz法国爵士阿欣 | https://www.youtube.com/watch?v=bi7-HpnbD9o | 簡中 |
| 7 音階與和聲進階 | 【爵士即興概念】 Martijn ▸ 調式 | 中山大學音樂產製中心 | https://www.youtube.com/watch?v=1QzkfEegRHw | 繁中 |
| 8 即興實作 | 爵士樂的旋律線條就這麼變出來！ - 從Guide Tone Line出發掌握音符的節奏性與和聲性 | chipinkaiyajazz | https://www.youtube.com/watch?v=QovJSZU5Sa8 | 繁中 |
| 8 即興實作 | 爵士钢琴课12：爵士Solo怎么练？（多器乐通用） | XinJazz法国爵士阿欣 | https://www.youtube.com/watch?v=Y1No4lGLuoo | 簡中 |
| 8 即興實作 | 爵士即興必學基本功- 音階(上) | Dennis 爵士鋼琴 | https://www.youtube.com/watch?v=-n0V_YjFxaI | 繁中 |
| 9 大師研究(Bill Evans) | 什麼是爵士鋼琴家Bill Evans的聲音？爵士樂就是隨意即興亂彈就好嗎？ | chipinkaiyajazz | https://www.youtube.com/watch?v=sbMLBpyFepM | 繁中 |
| 9 大師研究(Bill Evans) | 凱雅老師與啟彬老師在講堂現場，為各位示範解析了爵士鋼琴大師Bill Evans的傳世演奏風格，以及Voicing的重要 | chipinkaiyajazz | https://www.youtube.com/watch?v=fQaJK4uxPlg | 繁中 |
| 9 大師研究(Bill Evans) | 分析爵士鋼琴大師Bill Evans知名的《Autumn Leaves》前奏與即興秘訣 | chipinkaiyajazz | https://www.youtube.com/watch?v=gfhSfSnfkBk | 繁中 |
| 9 大師研究(Bill Evans) | 想彈出像Bill Evans般的爵士鋼琴樂音嗎？凱雅老師不但會彈，而且還會把你教會喔！ | chipinkaiyajazz | https://www.youtube.com/watch?v=IuvOt_Rri5A | 繁中 |
| 9 大師研究(合輯) | 什麼是爵士鋼琴家Chick Corea的聲音？認識他的音樂，只要知道《Spain》就夠了嗎？ | chipinkaiyajazz | https://www.youtube.com/watch?v=kOnrsBX4fHI | 繁中 |
| 9 大師研究(合輯) | 三大爵士鋼琴家之一　老爹Chick Corea的絕世手藝 | MNA牛耳藝術 | https://www.youtube.com/watch?v=3HCDQbNl9HI | 繁中 |
| 9 大師研究(合輯) | 啟彬與凱雅的當代音樂教育，以現在流行的名詞來比喻，就叫「超前部署」 - 以爵士鋼琴大師McCoy Tyner為例 | chipinkaiyajazz | https://www.youtube.com/watch?v=B5tACxxj5XU | 繁中 |
| 9 大師研究(導覽) | 想聽爵士樂，卻又不知道該從哪些樂手開始聽嗎？26位經典推薦爵士鋼琴手，讓你輕鬆入門，想知道爵士鋼琴女神究竟多美？片尾彩蛋別錯過喔！ | 邱立婷-婷婷爵士 Li-Ting Chiu | https://www.youtube.com/watch?v=F7OrPBzWMfI | 繁中 |
| 10 合奏與伴奏 | 和弦配置與鍵盤編曲技巧 - 課程預覽 - 黑味爵士 | Blackflavour Jazz | https://www.youtube.com/watch?v=iHgN9Pbc1bs | 繁中 |
| 10 合奏與伴奏 | 陳俊宇_爵士鋼琴 16 beat爵士鋼琴伴奏手法 | 陳俊宇音樂工作室 | https://www.youtube.com/watch?v=YzQhDswrKjQ | 繁中 |
| 11 職業之路與健康 | 我做過哪些音樂工作，好賺嗎？學音樂如何不餓死的完全指南！ | NiceChord+ (好和弦+) | https://www.youtube.com/watch?v=tNt8yMwSZ8Y | 繁中 |
| 11 職業之路與健康 | 音樂家復健: 受傷後的練習  by 蘇炯睿醫師 | Daniel su | https://www.youtube.com/watch?v=Qzv4Ngis_FA | 繁中 |
| 11 職業之路與健康 | 聽力學家超驚訝｜音樂工作者都沒在保護聽力？快接住這個音樂耳塞｜Musician's hearing is at risk, catch this musician earplug here EnSub | 聽力公主・Hearing Action | https://www.youtube.com/watch?v=HSz_4aQxabc | 繁中 |

## 五、對課程規劃的具體建議

1. **主題 1-2（裝備、基礎技術）可以中文為主軸。** 檸檬卷 Janet／Tim Liu music／KAWAI／CASIO 官方頻道構成成熟的「數位鋼琴選購」類型內容，科学钢琴／菲比钢琴／黃光立等古典鋼琴技術頻道直接可用於音階指法、手指獨立性、踏板；ernesthighlife 甚至補上了中文圈罕見的「swing 觸鍵」對照教學。這兩章是全課中文供給最紮實的部分。
2. **主題 4（Voicings 進階）建議整章以英文骨幹，中文最多點綴 rootless 子題的 2-3 支，quartal/block chords/upper structures 三個子題誠實不放中文選項。** 這是本次盤點供給最薄的一章——多輪不同角度搜尋（含「四度堆疊」「三和弦」等中文慣用語）都無法找到中文圈的 quartal 或 upper structure 專門教學，搜尋結果反覆被英文頻道洗版，說明這不是關鍵字沒挑對，而是這塊技術本身在中文教學圈確實罕見。
3. **主題 9（大師研究）是全課精神座標，也是本次盤點最需要「分節處理」的章節。** Bill Evans 與 Chick Corea 兩節可以中英並重，甚至優先展示 chipinkaiyajazz 的分析（含《Autumn Leaves》前奏即興秘訣、Voicing 重要性等具體技術內容，深度不輸英文圈同主題影片）；Oscar Peterson、Herbie Hancock、Thelonious Monk 三節則建議完全用英文骨幹，中文文案需誠實註明「這位大師目前查無中文教學或分析內容」，不要用邱立婷「26位鋼琴手」聽賞導覽或 MNA牛耳藝術的欣賞向影片硬套成「風格拆解」。
4. **chipinkaiyajazz（啟彬與凱雅）值得後續深挖。** 本次盤點只是關鍵字搜尋命中的部分，該頻道明顯經營著一個系統性的「大師風格分析」內容線（已確認 Bill Evans、Chick Corea、McCoy Tyner），很可能還有更多集數（例如其他大師、更多技法主題）沒有被本次關鍵字搜到。建議後續派工把該頻道全部影片列出來比對，這是全中文圈唯一具備這種深度的爵士鋼琴教育者。
5. **主題 11（職業之路與健康）中文供給的空白要誠實留白，不要拿泛用內容硬套鋼琴/爵士語境。** NiceChord 的音樂工作經濟現實科普、Daniel su 的音樂家復健、聽力公主的聽力保護，三支都不是鋼琴或爵士專屬，選用時文案需要註明「這是泛音樂人視角的參考，鋼琴家的職業傷害型態會不太一樣」；**鋼琴家 focal dystonia／RSI 的中文教學完全查無**，直接用英文（Dr. Farias' Dystonia Recovery Program、The Mindful Pianist、Noah Kellman 的 7 Steps 系列）撐滿，不勉強湊中文。
6. **主題 6（採譜）與主題 7/8 的特定子題（reharmonization、motivic development）中文完全查無對應內容**，這些子題若要中文選項，需要另外派工用更多角度搜尋（例如搜特定爵士鋼琴教育者的完整頻道，而非泛用關鍵字），本次盤點的關鍵字組合沒有找到。
7. **編號系列頻道值得作為結構化單元候選。** Héman Musique「爵士鋼琴入門」（≥8 集）、UNI MUSIC「爵士鋼琴教學（一）～（六）」（6 集圍繞同一首改編曲）、陳俊宇「爵士鋼琴指法的16個練習」（16 集）、重塑黑白鍵「7堂玩轉即興藍調」——這四個系列若學生想按進度學習，比單支影片更適合安排成連續單元，建議後續深挖每個系列的完整集數（本次搜尋只確認了部分集數存在）。
8. **英文骨幹頻道建議鎖定 Open Studio + Walk That Bass + Noah Kellman + Jeremy Siskind 四家為預設優先**，這四家合計橫跨主題 1/3/4/5/6/8/9/10/11，且風格互補（Open Studio 偏機構級系統化＋大師研究、Walk That Bass 偏理論講解、Noah Kellman 偏大師風格＋樂手健康、Jeremy Siskind 偏 solo piano 與 vocal accompaniment）。Julian Bradley、PianoPig、Jeff Schneider、Piano With Jonny、PianoGroove 作為第二梯隊，覆蓋主題 3/4/6/7 的深化內容與觀看數觸及率。
