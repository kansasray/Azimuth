# 內容供給盤點——爵士小號：從初學到職業樂手

> 盤點日期：2026-08-08
> 方法：`yt-dlp ytsearch` 搜尋真實影片 ID（`--flat-playlist --print "%(id)s|%(duration)s|%(view_count)s|%(channel)s|%(title)s"`），
> 共執行 63 組英文／中文查詢，逐支候選以 YouTube oEmbed API（`https://www.youtube.com/oembed?url=...&format=json`）打過拿到 HTTP 200 才列入。
> **本文件列出的 99 支種子影片全數驗證存在、公開、可嵌入**（99/99 通過，無失敗）。標題、頻道名照 oEmbed 對應的 yt-dlp 中繼資料抄錄。
> 搜尋紀錄與原始回應存放於執行本次盤點時的暫存目錄，未收錄進本 repo。

## 一、總覽結論

這個主題**撐得起 11 章的架構，英文是絕對主力，中文只能在少數章節扛住主軸，其餘章節中文最多當配菜**。與地圖學課不同的是，這裡的中英供給差距更懸殊——地圖學好歹有 071-COM 系列撐起半壁江山，爵士小號的中文供給集中在**樂器技術層（口型、長音、吐音、保養）**，一旦進入**爵士語彙、和聲、即興、大師研究**這些真正定義「爵士」而非「小號」的主題，中文供給幾乎斷崖式下降。

- **英文是深水區，且分兩層**：第一層是「小號技術」通用頻道（Charlie Porter、The Black Trumpeter、Ridgewood School of Music、Ryan Beach、Trumpet Headquarters、Chris Davis/TRUMPET LESSONS HQ）——這些頻道對主題 1-4（裝備、發聲、音色、技巧）供給極為充沛，同一子題常能挑到 8-12 支不同角度的教學。第二層是「爵士教育」頻道（Jazz at Lincoln Center's JAZZ ACADEMY、Open Studio、Jazz Lesson Videos、Ridgewood 的爵士即興系列、Aimee Nolte、Walk That Bass、Jazzduets），這些頻道扛住主題 5-8（swing、語彙、和聲、即興）——雖然多數不是小號專門頻道（薩克斯風、鋼琴、貝斯視角居多），但爵士理論本身跨樂器通用，講解可直接借用。
- **中文是淺水區，但比預期更集中**：中文最大的驚喜是台灣有一批**真正的小號專門教學頻道**——喇叭小姐 Ms. Trumpet、下班後練小號、飛常人觀察日記——三家合計覆蓋了口型、呼吸、長音、吐音、雙吐三吐、高音、保養、吹嘴選擇，是主題 1-4 中文供給的骨幹。中國大陸也有 Chuan Gao 的「铜管乐器小号吹奏教学教程」01-09 numbered 系列，體系完整但簡體。**一旦進入主題 5 以後，中文供給主力就從「小號頻道」切換成「泛爵士教育頻道」**（NiceChord+ 好和弦、chipinkaiyajazz 啟彬與凱雅、XinJazz法国爵士阿欣、威廉音樂Dr. Sax、B3 Johnson）——這些是鋼琴/薩克斯風/人聲視角，不是小號視角，量也明顯變少，通常一個子題只能挑到 2-3 支。
- **主題 9（大師研究）是全課的中心關切，也是中英落差最大的主題**：Miles Davis、Clifford Brown、Roy Hargrove 三位在英文圈都有直接的「風格拆解／採譜／lick breakdown」教學可用，且 Roy Hargrove 的《Strasbourg St. Denis》甚至有兩位不同 YouTuber 各自做了一支完整拆解影片。**但 Chris Botti 是四人中唯一「幾乎沒有教學向內容」的一位**——中英文都一樣，能找到的只有演出片段、訪談、一支高中大師班剪輯，沒有任何「如何吹出 Botti 音色/風格」的拆解教學。中文圈在這個主題整體只找到 3 支堪用影片，且沒有一支是真正的「風格拆解」——分別是台灣本土爵士小號家魏廣晧的個人教學系列（不是關於四位指名大師）、一支 Miles Davis 傳記科普影片、一支業餘小號手練習 Hargrove 名曲的過程紀錄。
- **主題 11（職業之路與樂手健康）中文幾乎是空的**：搜尋「職業小號手練習」「音樂家聽力保護」等關鍵詞，中文結果被短劇、動漫、駕照補習班淹沒。唯一堪用的中文素材是一位古典/管弦樂團背景小號手（Angus Trumpet 小號學長）的職涯 vlog，以及一支泛用的「音樂人聽力保護」影片——都不是爵士語境，且完全找不到中文的 embouchure 傷害/嘴唇疲勞教學。

**建議**：全課以**英文影片為骨幹**，中文影片在主題 1-4（裝備、發聲、音色、技巧建構）可以真正扛起單元主力，主題 5-11 中文只能當補充選項，且找到的中文內容經常是「泛爵士」而非「小號專門」——選用時文案需要註明「這支是薩克斯風/鋼琴視角的爵士理論講解，原理相通」以示誠實。主題 9 的 Chris Botti 子節與主題 11 整章建議明確標註供給侷限，不要硬湊。

## 二、頻道盤點

### 中文頻道

| 頻道 | 主題 | 相關影片量 | 品質印象 |
|---|---|---|---|
| **喇叭小姐 Ms. Trumpet**（台灣） | 小號專門頻道：吹奏入門、Buzzing 發聲原理討論、C 大調音階、「Trumpet Daily Routine」編號系列（長音／點舌／起音／基礎泛音）、清潔保養、吹嘴選購 | 本次盤點命中 15+ 支 | **本次中文盤點最重要的發現之一**——CarolBrass 贊助的專門小號教學頻道，內容從入門到日常練習系統化，觀看數中等（數千至 7 萬+），是主題 1-3 中文骨幹 |
| **下班後練小號**（台灣，個人頻道） | 小號專門頻道：吹嘴差異、呼吸/吐氣、音色一致性、雙吐三吐、高音訓練、節奏感、音階訓練 | 本次盤點命中 12+ 支 | 短小精悍（多為 5-10 分鐘）、標題直接對應常見痛點，講解扎實但觀看數不高（數百至數千），是主題 2-4 中文骨幹的另一支柱 |
| **飛常人觀察日記**（台灣） | 「Trumpet🎺小號教學【聽我曼曼說-00~11】」編號系列：小號的傳說、號嘴發聲、正確拿法、呼吸練習、長音練習、指法、點舌練習；另有平行的長笛教學系列 | 本次盤點命中 11 支（00-11 集） | 編號系列完整、適合按進度收錄，畫面樸素但講解有條理，觀看數落在數千 |
| **Chuan Gao**（簡體，疑似中國大陸） | 「铜管乐器小号吹奏教学教程 01-09」編號系列：初識小號、姿勢、呼吸、口型與唇振、吹嘴與長音、吐音奏法、吐音練習、高音奏法、科林練習 | 本次盤點命中 9 支完整系列 | 體系最完整的中文小號入門系列，但**簡體字幕**，若課程堅持繁中呈現需要 OpenCC 轉換（比照書法帖 app 專案的既有做法）；製作偏樸素教學錄影 |
| **林育興**（台灣） | 個人小號教學：嘴型、吹嘴練習、點音（吐音）、熱嘴（Warm-Up） | 本次盤點命中 4 支 | 個別教學影片，講解直接，觀看數數千至一萬多 |
| **Edmond哥哥**（香港，粵語） | 「小號初階」系列：坐姿與呼吸 | 本次確認 1 支，可能有更多集數未搜到 | 粵語教學，適合香港受眾，值得後續深挖該系列有無更多集 |
| **魏廣晧 / Kuo (Trio Music)**（台灣） | 台灣代表性爵士小號家（Yamaha 爵士小號代言人）「一分鐘爵士小學堂」迷你系列；另有大量訪談、講座、專輯發表會片段散落在多個頻道（飛碟聯播網、知識衛星SAT.KNOWLEDGE、巨禮音響、國家兩廳院NTCH、METAVERSE 藝次元宇宙） | 教學系列僅確認 1 支，訪談/講座類另有 8-10 支散落各頻道 | **本次盤點最值得後續深挖的中文人物**——他是全中文圈唯一「本人是職業爵士小號家且有教學內容」的存在，可作為主題 9/11 的「在地連結」角色，但要注意教學系列本身量少，多數素材是訪談而非拆解教學 |
| **NiceChord+（好和弦+）**（台灣） | 泛音樂理論／鋼琴視角：Swing 節奏解說、12 小節藍調、爵士鋼琴和弦配置 | 本次盤點命中 3-4 支直接相關 | 高製作水準、觀看數大（數萬至數十萬），是主題 5/7 中文供給的重要來源，但**鋼琴視角非小號**，選用需在文案說明 |
| **chipinkaiyajazz（啟彬與凱雅）**（台灣） | 台灣資深爵士教育者謝啟彬/簡凱雅：Blues vs Jazz 示範、國際客座樂手工作坊示範片段（含小號手參與的合奏示範） | 本次盤點命中 6+ 支 | 內容扎實、業界地位高，工作坊示範片段中偶有小號手同場演出，適合主題 6/8/10 |
| **XinJazz法国爵士阿欣**（簡體，旅法教育者） | 「爵士专业课」編號系列：為何要學 Blues、扒譜（採譜）方法論 | 本次盤點命中 3-4 支 | 系統化、內容有深度，但**簡體字幕**，視角是泛爵士（原始樂器不明確） |
| **威廉音樂Dr. Sax**（台灣） | 薩克斯風視角：爵士 251 和弦、節拍器練習法 | 本次盤點命中 3-4 支 | 講解精簡（3 分鐘小教室系列），觀看數中等，薩克斯風視角但和聲/節奏概念可轉用 |
| **Major Huang（黃盟傑）**（台灣） | 爵士鋼琴家：爵士合奏教學（Comping 示範、鼓手 Swing 示範）、**「小號爵士即興1」**（罕見的小號視角中文即興教學） | 本次盤點命中 8+ 支 | 鋼琴視角為主，但「小號爵士即興」這支是本次中文盤點中少數直接對應「小號＋即興」的內容，值得留意頻道其餘影片是否還有更多小號系列 |
| **B3 Johnson**（台灣） | 「從零開始學 Jazz」系列：即興入門、Jam Session 五樣事前準備 | 本次盤點命中 4-5 支 | 泛爵士入門视角，適合主題 8/10 補充 |
| **邱立婷-婷婷爵士 Li-Ting Chiu**（台灣） | 爵士人聲教育：swing 八分音符兩種彈法解說、採譜教學（鋼琴挑戰薩克斯風譜） | 本次盤點命中 2-3 支 | 人聲/鋼琴視角，講解生動，適合主題 5/6 補充 |
| **Angus Trumpet 小號學長**（台灣） | 古典/管弦樂團背景小號手的職涯 vlog：演奏員週六日常、兩岸職業樂團工作優缺點比較 | 本次盤點命中 2-3 支 | **唯一涉及「職業小號手生活」的中文素材**，但背景是管弦樂團非爵士，選用需註明語境落差 |
| **聽力公主・Hearing Action** | 音樂工作者聽力保護（音樂耳塞介紹） | 1 支直接相關 | 非小號/爵士專門，但是全次盤點唯一命中的中文聽力保護內容，值得收 |
| **Wilson Sax / HK Victoria Music Centre 銅管樂研習社**（香港） | 銅管樂器保養：閥門油、吹嘴清潔、導管保養 | 各 3-5 支 | 器材維修行視角，內容正確但偏零碎短片（多在 1 分鐘內），適合主題 1 保養子題 |
| **達藝娛樂DartEntertainment**（台灣） | 「小號狂想曲」迷你系列：發聲原理、弱音器與爵士樂的應用 | 2 支 | 系列化，發聲原理+弱音器應用直接對應主題 2/9（弱音器可連結到 Miles Davis 的招牌用法） |
| **好小吹 / 音樂藝術中西樂器教學（Line ID:npopboy）** | 好小吹：單支高觀看數的發聲原理科普；npopboy：台北小號教學工作室的流行/爵士改編小號翻奏教學 | 各 1 支 + 多支翻奏 | 好小吹單支影片觀看數達 5.9 萬，適合開場影片；npopboy 走「用流行曲學小號」路線，理論深度較淺 |
| **董舜文的頻道**（個人小號手） | 個人練習日誌：演練 Roy Hargrove《Strasbourg St. Denis》、節拍器練習 | 2 支 | 練習過程紀錄而非教學拆解，可作為「職業樂手怎麼練這首歌」的側寫素材 |

### 英文頻道

| 頻道 | 主題 | 相關影片量 | 品質印象 |
|---|---|---|---|
| **Charlie Porter** | 小號旗艦頻道：口型四步驟、器材比較（$200/$2000/$20000）、練習routine建立 | 極多（本次命中 5+ 支，頻道實際數量更多） | 使用者已知起點，驗證存在且活躍，是主題 1/2/11 的預設優先頻道 |
| **The Black Trumpeter** | 口型、Lip Buzzing、音色三招速修、F Blues Soloing、Roy Hargrove ii-V-I lick、Lee Morgan lick breakdown、Range 建立 | 極多（本次命中 6+ 支） | **本次盤點英文供給的第二旗艦**，橫跨技術層（主題 2-4）與爵士語彙/大師研究層（主題 6/9），是少數真正橫跨全課的頻道 |
| **Ridgewood School of Music** | 長音練習法、Tonguing 技巧、Transcribe Jazz Solos、How Does Jazz Improvisation Work、Motivic Development 編號系列 | 多（本次命中 6+ 支） | 從小號技術到爵士即興理論都有涵蓋，是主題 3/4/6/8 的重要來源 |
| **Jazz at Lincoln Center's JAZZ ACADEMY** | Swing Fundamentals、Air Stream 呼吸練習、節拍器使用、Rhythm Section 配合、Jam Session 入門 | 多（本次命中 5+ 支） | 使用者已知起點，機構背景權威（與 Wynton Marsalis 淵源），是主題 5/10 的骨幹頻道 |
| **Ryan Beach** | 呼吸、articulation 加速、雙吐三吐、練習routine、音準、專業試奏準備 | 多（本次命中 5+ 支） | 個人小號教育者，內容扎實、涵蓋技術與職業層面 |
| **Trumpet Headquarters / Chris Davis (TRUMPET LESSONS HQ)** | Mouthpiece Buzzing Routine、Warm-Up、Finger Dexterity、Endurance | 兩個高度重疊的頻道，合計多支 | 使用者已知起點（Trumpet Headquarters）驗證存在，內容覆蓋主題 1/2/4 |
| **Open Studio** | Sean Jones「2 Minute Jazz」系列（Tonguing Secrets、Brass Projection）、3 Scales Every Jazz Musician Should Know、Playing Fast Over Giant Steps | 多（本次命中 5+ 支） | 使用者已知起點，驗證存在，職業爵士小號家 Sean Jones 親自授課，是主題 4/7 的高品質來源 |
| **Jazz Lesson Videos** | Bruce Harris / Kellin Hanas 客座：ii-V-I Phrases、Jazz Vocabulary、Building Solos on Standards | 多（本次命中 5+ 支） | 職業爵士小號家 Bruce Harris 直接授課，是主題 6/7/8 的高權威來源 |
| **Jazzduets** | Miles Davis "So What" Solo Analysis、Bebop/Blues Licks（原為薩克斯風/吉他教材但通用）、Tritone Substitution | 多（本次命中 4+ 支） | 使用者已知起點，驗證存在，主題 9（Miles Davis）與 7（和聲）皆有直接命中 |
| **Aimee Nolte Music** | 「10 Things That Made Miles Davis, Miles Davis」、How To Really Start Swinging | 2 支直接相關 | 使用者已知起點，鋼琴視角但講解生動易懂，適合主題 5/9 入門影片 |
| **Walk That Bass** | Guide Tones、4 Stages of Improvisation | 2 支直接相關 | 使用者已知起點，貝斯視角但 guide tones 概念完全通用，適合主題 8 |
| **Jazz Language Lab / Eric Jacobson Jazz Trumpeter and Jazz Instructor** | Clifford Brown Lick 拆解與內化方法、Bebop Vocabulary | 各 2-3 支 | 兩者皆為職業爵士小號家自營頻道，是主題 6/9（Clifford Brown）的關鍵補充 |
| **Shawn Bell / John Nathan Cordy** | 各自獨立製作《Strasbourg St. Denis》(Roy Hargrove) 完整拆解教學 | 各 1 支 | **同一首歌兩個獨立視角**，可作對照教材，是主題 9（Roy Hargrove）的亮點 |
| **DeMarius Jackson** | Miles Davis Licks 拆解、Motivic Development、爵士語彙連接技巧 | 多（本次命中 3+ 支） | 薩克斯風視角但拆解方法論通用，適合主題 6/9 |
| **Wynton Marsalis（官方頻道）/ OLD SCHOOL-Wynton Marsalis TV** | 官方：Marciac 大師班系列（Improvising on Happy Birthday/Embraceable You）；剪輯頻道：訪談金句短片（Improving Improvisation Skills 等） | 官方頻道多支長版大師班 + 剪輯頻道多支短片 | **英文供給中唯一「四位指名大師」裡量最大的一位**，官方大師班原始長片 + 第三方剪輯短片形成完整覆蓋 |
| **Rick Beato / Learn Jazz Standards** | Miles Davis 生涯與影響力分析、"So What" Modal Soloing 教學 | 各 1-2 支 | 高觀看數音樂科普頻道，適合主題 9 開場影片 |
| **Chase Sanborn** | 「How To Play Like Clifford Brown」、Dizzy Gillespie/Bebop 誕生歷史 | 2 支直接相關 | 加拿大資深小號教育者自營頻道，主題 9（Clifford Brown、Dizzy Gillespie）的直接命中 |
| **Kent Hewitt / The Music Stand** | Freddie Hubbard "Little Sunflower" Modal Jazz 教學、"Joy Spring" solo 採譜 | 各 1 支 | 主題 9（Freddie Hubbard）僅有的教學向內容，量不大但切題 |
| **Benny Benack III** | Jam Session Etiquette（Tips To Not Get Vibed） | 1 支高品質 | 年輕職業爵士小號家親自講解 jam session 禮儀，是主題 10 的旗艦影片 |
| **Pierre Piscitelli / Instructor Student Resources / Rufftips trumpet stuff** | 音樂人聽力保護、Embouchure 六大問題、小號相關傷害與復健 | 各 1 支 | 主題 11（樂手健康）的核心命中，英文圈在這個主題供給明顯優於中文圈 |

## 三、逐主題供給缺口判定

| # | 主題 | 中文供給 | 英文供給 |
|---|---|---|---|
| 1 | 入門與裝備（選琴/吹嘴/保養/拿法） | **充足**（喇叭小姐/下班後練小號/HK 保養行頻道覆蓋吹嘴選擇與保養；「學生琴 vs 專業琴」比較影片較少，需要以英文補） | 充足 |
| 2 | 發聲基礎（口型/lip buzzing/呼吸/第一個音） | **充足**（下班後練小號/飛常人觀察日記/Chuan Gao/林育興/Edmond哥哥皆有直接對應；buzzing 爭議角度中文只有喇叭小姐一支「Buzzing or Not?」，深度不及英文） | 充足（含正反爭議視角：Wayne Bergeron 的「迷思」觀點） |
| 3 | 音色養成（長音/音準/音色概念） | **稀少但堪用**（喇叭小姐/下班後練小號/飛常人觀察日記各 1 支直接對應，量不算大） | 充足 |
| 4 | 技巧建構（吐音/唇滑音/音域擴展） | **稀少但堪用**（雙吐三吐、高音訓練有下班後練小號/飛常人觀察日記可用；**唇滑音〔lip slur〕中文搜尋幾乎全部混入薩克斯風滑音/vibrato 內容，小號專門的 lip slur 教學查無**，需以英文補） | 充足 |
| 5 | 節奏與 swing（時間感/swing 八分音符/節拍器） | **稀少**（NiceChord+/邱立婷/威廉音樂皆為鋼琴/人聲/薩克斯風視角，非小號專門；小號頻道本身沒有找到 swing 專門教學） | 充足（Jazz at Lincoln Center's JAZZ ACADEMY 系統性教學） |
| 6 | 爵士語彙（藍調/licks/採譜方法） | **稀少**（chipinkaiyajazz/XinJazz 有 blues 與採譜方法論，但泛爵士視角非小號；小號 blues licks 中文教學查無） | 充足（含小號專門：The Black Trumpeter F Blues Soloing） |
| 7 | 音階與和聲（調式/和弦內音/ii-V-I） | **稀少**（威廉音樂/NiceChord+ 提供 251 和弦與和聲配置，鋼琴/薩克斯風視角；小號專門的音階/和弦內音中文教學查無） | 充足 |
| 8 | 即興實作（standards/guide tones/backing track） | **稀少但有亮點**（Major Huang「小號爵士即興1」是罕見的小號視角中文即興教學；chipinkaiyajazz 有客座樂手工作坊示範） | 充足 |
| 9 | 大師研究（Miles/Clifford/Hargrove/Botti + Dizzy/Hubbard/Morgan/Marsalis） | **幾乎沒有直接對應四位指名大師的風格拆解**——僅 3 支堪用：魏廣晧個人教學系列（非關四位大師）、Miles Davis 傳記科普 1 支、董舜文練習 Hargrove 名曲的過程紀錄 1 支 | **Miles Davis / Clifford Brown / Roy Hargrove 充足**（各有多支風格拆解/採譜/lick breakdown，Hargrove 甚至有兩支獨立《Strasbourg St. Denis》拆解可對照）；**Wynton Marsalis 充足**（官方大師班+剪輯頻道）；**Dizzy Gillespie / Freddie Hubbard / Lee Morgan 稀少但堪用**（各 1-2 支）；**Chris Botti 幾乎沒有教學向內容**（僅演出片段、訪談、一支高中大師班，中英文皆然，是四位指名大師中供給最弱的一位） |
| 10 | 合奏與登台（combo 互動/jam session 規矩/與節奏組配合） | **稀少**（Major Huang/B3 Johnson/chipinkaiyajazz 皆為泛爵士或非小號視角；小號專門的合奏/登台教學中文查無） | 充足（Jazz at Lincoln Center's JAZZ ACADEMY + Benny Benack III 職業小號家親自講解 jam session 禮儀） |
| 11 | 職業之路與樂手健康（練習 routine/audition/聽力保護/embouchure 問題） | **幾乎沒有**（僅 Angus Trumpet 小號學長的管弦樂團職涯 vlog 2 支 + 聽力公主的泛用音樂人聽力保護 1 支；**embouchure 傷害/嘴唇疲勞的中文教學完全查無**） | 充足（Charlie Porter 練習routine、Ryan Beach 試奏準備、Pierre Piscitelli 聽力保護、Instructor Student Resources 六大 embouchure 問題、Rufftips 小號相關傷害與復健） |

## 四、種子影片（99 支，全數 oEmbed 200 已驗證）

驗證方法：對每一支影片打 `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=<ID>&format=json`，
確認 HTTP 200 後才收錄。標題、頻道名皆照 yt-dlp 搜尋結果抄錄（與選片同一次 API 回應，未憑記憶）。

### 英文（64 支）

| 主題 | 影片標題 | 頻道 | URL | 為何值得收 |
|---|---|---|---|---|
| 1 入門與裝備 | $200, $2,000 and $20,000 Trumpet Comparison! Can you hear the difference? | Charlie Porter | https://www.youtube.com/watch?v=9sB8iFIIyXc | 學生琴/專業琴差異最直觀的示範，觀看數 90 萬+ |
| 1 入門與裝備 | How To CHOOSE a TRUMPET MOUTHPIECE (Should you, or shouldn't you?) | Chase Sanborn | https://www.youtube.com/watch?v=v_BZFYPPVHI | 吹嘴選擇的核心邏輯，資深教育者講解 |
| 1 入門與裝備 | How to Clean a Trumpet | AmroMusic | https://www.youtube.com/watch?v=5AyPIfb13hQ | 樂器行官方清潔教學，觀看數 52 萬+ |
| 1 入門與裝備 | How To Oil Trumpet Valves | Student Brass | https://www.youtube.com/watch?v=OK-12lHJIsM | 上油示範精簡清楚 |
| 1 入門與裝備 | (10/35) Beginning Trumpet - How to Hold the Trumpet | MusicProfessor | https://www.youtube.com/watch?v=BzlFZ1VplSA | 拿法姿勢的系統化教學系列之一 |
| 2 發聲基礎 | How To Form a Trumpet (brasswind) Embouchure in Four Steps, by Charlie Porter | Charlie Porter | https://www.youtube.com/watch?v=lLE_-ly8hrQ | 口型建立的旗艦教學，觀看數 78 萬+ |
| 2 發聲基礎 | How to Buzz Your Lips for Trumpet Playing | The Black Trumpeter | https://www.youtube.com/watch?v=jzFQHGN6vm4 | Lip Buzzing 入門，觀看數 45 萬+ |
| 2 發聲基礎 | Why Trumpeters Should Practice Lip Buzzing | tonebase Brass | https://www.youtube.com/watch?v=BvWaxlvesQQ | 支持 lip buzzing 的正方論述 |
| 2 發聲基礎 | Producing Sounds & the Misconceptions of Buzzing | Wayne Bergeron | https://www.youtube.com/watch?v=fzB7r9C_LrU | Buzzing 爭議的反方/修正觀點，好萊塢錄音室名家講解 |
| 2 發聲基礎 | Playing on the Air Stream for Trumpet | Jazz at Lincoln Center's JAZZ ACADEMY | https://www.youtube.com/watch?v=IJXitiVI4k8 | 呼吸與氣的支撐，機構級教學 |
| 2 發聲基礎 | How to Play the Trumpet - First Five Notes | Adam Meckler | https://www.youtube.com/watch?v=j5hZ5ombwns | 第一個音到前五個音，適合入門單元 |
| 3 音色養成 | The Best Ways to Practice Long Tones on Trumpet | Ridgewood School of Music | https://www.youtube.com/watch?v=WMRoZFdM_pM | 長音練習法系統整理 |
| 3 音色養成 | Improve Your Tone on the Trumpet INSTANTLY \| 3 Quick Fixes | The Black Trumpeter | https://www.youtube.com/watch?v=wMLirei98Yo | 音色三招速修，觀看數 24 萬+ |
| 3 音色養成 | How To Play In Tune On The Trumpet | Ryan Beach | https://www.youtube.com/watch?v=j4F2uy2f0_k | 音準訓練方法 |
| 4 技巧建構 | The Best Trumpet Tonguing Technique | Ridgewood School of Music | https://www.youtube.com/watch?v=q5YQ_5TluWU | 單吐技巧核心整理 |
| 4 技巧建構 | The Secret To Successful Double (and Triple) Tonguing On Trumpet | Ryan Beach | https://www.youtube.com/watch?v=QJL1yWYP3Us | 雙吐三吐一次講清楚 |
| 4 技巧建構 | Trumpet Lesson: Triple-Tonguing | Interlochen Center for the Arts | https://www.youtube.com/watch?v=BqrBK_GUHxw | 知名音樂夏令營機構的三吐教學 |
| 4 技巧建構 | Trumpet: Flexibility (Lip Slurs)- David Dash | UNCSA School of Music | https://www.youtube.com/watch?v=AkL74s7_qcM | 唇滑音（lip slurs）音樂院等級教學，補中文缺口 |
| 4 技巧建構 | How to Play High on the Trumpet (Range Building) \| Part 1/3 | Trumpet Guy | https://www.youtube.com/watch?v=q-zMF4B7Mdk | 音域擴展系列化教學 |
| 5 節奏與swing | Jazz Fundamentals: What Is Swing? | Jazz at Lincoln Center's JAZZ ACADEMY | https://www.youtube.com/watch?v=31JgwfP15kw | Swing 概念權威講解，觀看數 40 萬+ |
| 5 節奏與swing | How To Really Start Swinging | Aimee Nolte Music | https://www.youtube.com/watch?v=AToPlzdqvtw | Swing 八分音符實作練習 |
| 5 節奏與swing | How to Better Use a Metronome in Your Practice Routines | Jazz at Lincoln Center's JAZZ ACADEMY | https://www.youtube.com/watch?v=Ab1Zg4ibe30 | 節拍器爵士式練法 |
| 6 爵士語彙 | F Blues Soloing: Using a Blues Melody \| Jazz Trumpet Lesson | The Black Trumpeter | https://www.youtube.com/watch?v=ThpchVDDrbc | 小號專門的藍調即興教學，觀看數 30 萬+ |
| 6 爵士語彙 | How to Transcribe Jazz Solos | Ridgewood School of Music | https://www.youtube.com/watch?v=JuaEWI2x6Wc | 採譜方法完整流程 |
| 6 爵士語彙 | How to Learn AUTHENTIC Jazz Vocabulary (feat. Bruce Harris) | Jazz Lesson Videos | https://www.youtube.com/watch?v=iNgtPSlhe6A | 職業爵士小號家 Bruce Harris 親授語彙學習法 |
| 7 音階與和聲 | 3 Scales Every Jazz Musician Should Know | Open Studio | https://www.youtube.com/watch?v=hG--y7My6Hc | 音階入門精簡整理，觀看數 12 萬+ |
| 7 音階與和聲 | The RIGHT Way to Improvise with CHORD TONES for Better Solos | Jeff Schneider | https://www.youtube.com/watch?v=Z-KzfB7vfFA | 和弦內音即興法，觀看數 48 萬+ |
| 7 音階與和聲 | The Secret to Effortless ii–V–I Phrases (feat. Kellin Hanas) | Jazz Lesson Videos | https://www.youtube.com/watch?v=liBTBAufjRo | ii-V-I 樂句建構 |
| 8 即興實作 | How Does Jazz Improvisation Work? | Ridgewood School of Music | https://www.youtube.com/watch?v=Ate-6DO_lVA | 即興整體概念，觀看數 44 萬+ |
| 8 即興實作 | Jazz Improvisation - Guide Tones | Walk That Bass | https://www.youtube.com/watch?v=zuXhDQNohlE | Guide tones 概念教學 |
| 8 即興實作 | Motivic Development In Jazz - 10 Exercises For More Musical Solos | Magnus Bakken | https://www.youtube.com/watch?v=ByOqfC0jntc | 動機發展的具體練習法 |
| 8 即興實作 | Take the A train (140 bpm) : Backing track | Guitare Improvisation | https://www.youtube.com/watch?v=msjD-ZivCEM | 標準曲 backing track 練習素材，觀看數 130 萬+ |
| 9 大師研究(Miles Davis) | 10 Things That Made Miles Davis, Miles Davis | Aimee Nolte Music | https://www.youtube.com/watch?v=DSmU7r9sfbo | Miles Davis 風格總覽，適合單元開場 |
| 9 大師研究(Miles Davis) | Modal Soloing: "So What" Solo In the Style of Miles Davis | Learn Jazz Standards | https://www.youtube.com/watch?v=VVF5EvL2h8U | 模態爵士代表作的仿作教學 |
| 9 大師研究(Miles Davis) | Miles Davis - Solo analysis - "SO WHAT" | Jazzduets | https://www.youtube.com/watch?v=s5fc7gEh5r0 | So What 獨奏的正式分析 |
| 9 大師研究(Miles Davis) | 7 Miles Davis Licks \| Miles Davis Transcription | DeMarius Jackson | https://www.youtube.com/watch?v=GeVz0b4aRYE | Licks 拆解，可跨樂器套用到小號 |
| 9 大師研究(Miles Davis) | Miles Davis: The Man Who Changed MODERN Music | Rick Beato | https://www.youtube.com/watch?v=7tz0fSMmrUM | 高權威音樂科普視角的生涯與影響力分析，觀看數 53 萬+ |
| 9 大師研究(Clifford Brown) | How To Play Like CLIFFORD BROWN (Kinda', sort of...) | Chase Sanborn | https://www.youtube.com/watch?v=crFzwtknbh4 | 直接對應「風格分析」的教學片名 |
| 9 大師研究(Clifford Brown) | This Is How Clifford Brown Built His Solos | Jazz Language Lab | https://www.youtube.com/watch?v=AA0--EtTPTg | 獨奏構築邏輯的專門分析 |
| 9 大師研究(Clifford Brown) | I Analyzed Clifford Brown's Jazz Lick: Here's How to Internalize it | Eric Jacobson Jazz Trumpeter and Jazz Instructor | https://www.youtube.com/watch?v=bGPErKFoatE | 職業爵士小號家親自拆解 lick |
| 9 大師研究(Clifford Brown) | Joy Spring - Clifford Brown Trumpet Solo Transcription (in C) | My Favorite Lines | https://www.youtube.com/watch?v=gc2nrk77oaM | 招牌曲目的正式採譜 |
| 9 大師研究(Clifford Brown) | Who Was Clifford Brown? The Trumpet that Charmed Jazz | BigOnBebop | https://www.youtube.com/watch?v=3FAU31F_pJw | 生平與風格背景介紹，適合單元開場 |
| 9 大師研究(Roy Hargrove) | How Roy Hargrove Improvised over a Major ii V I [Jazz Trumpet Lick #1] | The Black Trumpeter | https://www.youtube.com/watch?v=ZRxz4RIECE4 | 小號視角的 Hargrove lick 拆解 |
| 9 大師研究(Roy Hargrove) | Breaking Down Roy Hargrove's Strasbourg St Denis | John Nathan Cordy | https://www.youtube.com/watch?v=UONt6_5bngM | 招牌曲完整拆解版本 A |
| 9 大師研究(Roy Hargrove) | How To Play Strasbourg St. Denis-Roy Hargrove Transcription Breakdown | Shawn Bell | https://www.youtube.com/watch?v=NsPgmirHTcM | 招牌曲完整拆解版本 B，可與上一支對照互補 |
| 9 大師研究(Roy Hargrove) | Roy Hargrove's "Hard Groove" Started a Jazz Revolution | You'll Hear It and Open Studio | https://www.youtube.com/watch?v=RVkri-HFgWk | Hargrove 對爵士樂壇影響力的專題分析 |
| 9 大師研究(Chris Botti) | Chris Botti - CHS Masterclass | Cedarburg Performing Arts Center (CPAC) | https://www.youtube.com/watch?v=y8A3XQgl_h0 | 本人唯一確認存在的大師班片段（非風格拆解教學） |
| 9 大師研究(Chris Botti) | Bone2Pick: Chris Botti Interview, Part 1 | HipBoneMusic | https://www.youtube.com/watch?v=DWOdrRvcLP0 | 深度專訪，可用作認識其音樂觀的素材 |
| 9 大師研究(Dizzy Gillespie) | Dizzy Gillespie explaining jazz articulation etc. | TrumpetPlayerOnline | https://www.youtube.com/watch?v=G6fZicJ1P5M | 本人親自講解articulation，罕見一手資料 |
| 9 大師研究(Dizzy Gillespie) | THE BIRTH OF BEBOP (And modern jazz) Jazz History #45 | Chase Sanborn | https://www.youtube.com/watch?v=evNqUz_d3HU | Bebop 誕生史，Dizzy 的歷史定位 |
| 9 大師研究(Freddie Hubbard) | MODAL JAZZ: "Little Sunflower" (Freddie Hubbard)- A Jazz Tutorial | Kent Hewitt | https://www.youtube.com/watch?v=AYdPqsxNUn8 | 招牌曲的模態爵士教學拆解 |
| 9 大師研究(Freddie Hubbard) | Freddie Hubbard's solo on 'Joy Spring' (Transcription) | The Music Stand | https://www.youtube.com/watch?v=KEFRc7GbUyI | 正式採譜 |
| 9 大師研究(Lee Morgan) | How Lee Morgan Improvises over Major ii V I Chord Progression \| Lick Breakdown | The Black Trumpeter | https://www.youtube.com/watch?v=zDtLYu3oBAM | 小號視角的 Lee Morgan lick 拆解 |
| 9 大師研究(Wynton Marsalis) | Wynton Marsalis Trumpet Master Class University of Arizona 1992 | Bobby Roubal | https://www.youtube.com/watch?v=nVQCF3TCd_o | 完整大師班錄影，歷史資料價值高 |
| 9 大師研究(Wynton Marsalis) | Wynton Marsalis improvising on Happy Birthday - Masterclass in Marciac 2007 (Part III) | Wynton Marsalis | https://www.youtube.com/watch?v=xaaZog50Srg | 本人官方頻道，即興示範教學 |
| 9 大師研究(Wynton Marsalis) | Wynton On Improving Improvisation Skills | OLD SCHOOL-Wynton Marsalis TV | https://www.youtube.com/watch?v=dzcAVW5c4gI | 短版金句剪輯，適合單元穿插 |
| 10 合奏與登台 | How to Approach a Jam Session | Jazz at Lincoln Center's JAZZ ACADEMY | https://www.youtube.com/watch?v=EwIHg8nBIX8 | Jam session 入門態度與準備 |
| 10 合奏與登台 | BB3 Presents: Jam Session Etiquette (Tips To Not Get Vibed) | Benny Benack III | https://www.youtube.com/watch?v=Gm92F-ea5aY | 年輕職業爵士小號家親授禮儀規矩 |
| 10 合奏與登台 | Tips for Playing in a Jazz Rhythm Section | Jazz at Lincoln Center's JAZZ ACADEMY | https://www.youtube.com/watch?v=LRQu_bclmPs | 與節奏組配合的具體建議，觀看數 12 萬+ |
| 11 職業之路與健康 | How To Practice: Building A Routine That Works by Charlie Porter | Charlie Porter | https://www.youtube.com/watch?v=9nlmw3u6H6o | 職業級練習 routine 建立，觀看數 22 萬+ |
| 11 職業之路與健康 | What Does It Take To Win A Professional Trumpet Audition? | Ryan Beach | https://www.youtube.com/watch?v=kWcAzkn5FZo | 職業試奏準備 |
| 11 職業之路與健康 | How I Protect My Hearing as a Musician | Pierre Piscitelli | https://www.youtube.com/watch?v=ubYsl1-c9n0 | 樂手聽力保護第一手經驗 |
| 11 職業之路與健康 | Trumpet 6 Embouchure Problems | Instructor Student Resources | https://www.youtube.com/watch?v=oLRiPV5CMTA | Embouchure 常見問題整理 |
| 11 職業之路與健康 | Trumpet tip, trumpet related injuries, conditions and recovery | Rufftips trumpet stuff | https://www.youtube.com/watch?v=t3-oonauf48 | 小號相關傷害與復健的專門討論 |

### 中文（35 支）

| 主題 | 影片標題 | 頻道 | URL | 語言 | 為何值得收 |
|---|---|---|---|---|---|
| 1 入門與裝備 | 【小號的清潔保養/維修】｜居家就可以做的簡易保養絕對要學起來｜feat. 安邦樂器工作室 | 喇叭小姐 Ms. Trumpet | https://www.youtube.com/watch?v=8DyQVkvXMj8 | 繁中 | 居家保養實作示範，與樂器行合作內容可信度高 |
| 1 入門與裝備 | 每個小號手都該知道的吹嘴差異｜過來人分享 | 下班後練小號 | https://www.youtube.com/watch?v=nzO6wGsM3qE | 繁中 | 吹嘴選擇的過來人經驗分享 |
| 1 入門與裝備 | 上油保養小號的方法 | Murphy Chen | https://www.youtube.com/watch?v=wj-VBbd7W90 | 繁中 | 上油保養實作示範 |
| 1 入門與裝備 | 一分鐘教你吹出聲音?!!｜小號吹奏超入門｜CarolBrass | 喇叭小姐 Ms. Trumpet | https://www.youtube.com/watch?v=q9nR7Lpu5Sw | 繁中 | 入門單元開場首選，短小直接 |
| 2 發聲基礎 | 吹奏教學之吹奏小號時的嘴型 | 林育興 | https://www.youtube.com/watch?v=DQbxZ64M4C8 | 繁中 | 口型教學核心內容 |
| 2 發聲基礎 | Buzzing or Not? 你真的了解小號是如何發聲的嗎?! | 喇叭小姐 Ms. Trumpet | https://www.youtube.com/watch?v=oXvuelmi804 | 繁中 | 中文圈少數觸及 buzzing 爭議角度的影片 |
| 2 發聲基礎 | 呼吸如何影響小號的演奏｜小號吸氣技巧全解析｜這一步做錯耐力一定不好 | 下班後練小號 | https://www.youtube.com/watch?v=9nrxmuioMn0 | 繁中 | 呼吸與氣的支撐專門教學 |
| 2 發聲基礎 | 小號初階 第一課 坐姿＆呼吸 Trumpet Lesson for Beginners in Cantonese Part 1 | Edmond哥哥 | https://www.youtube.com/watch?v=X1vsT1ooqXc | 粵語 | 粵語入門教學，適合香港受眾的第一課 |
| 3 音色養成 | # 01 Lone Tones｜Trumpet Daily Routine｜Play - Along｜基本練習一起吹系列【長音】 | 喇叭小姐 Ms. Trumpet | https://www.youtube.com/watch?v=-Z_tqs1aH3c | 繁中 | 可跟練的長音 play-along 影片 |
| 3 音色養成 | 【小號教學】讓小號更好聽的秘密！提升音色與穩定度的實用技巧｜小號練習方法與觀念分享 | 下班後練小號 | https://www.youtube.com/watch?v=EuvREqVypa4 | 繁中 | 音色概念與穩定度並重的教學 |
| 3 音色養成 | Trumpet🎺小號教學【聽我曼曼說-05】/小號長音練習 | 飛常人觀察日記 | https://www.youtube.com/watch?v=q-aD7FeAAqM | 繁中 | 編號系列中的長音練習集數 |
| 4 技巧建構 | 小號吐音技巧｜雙吐、三吐（Multiple Tonguing）完整解析 | 下班後練小號 | https://www.youtube.com/watch?v=3R2uDLrVlDM | 繁中 | 雙吐三吐的完整中文解析，中文供給稀少主題的關鍵影片 |
| 4 技巧建構 | Trumpet🎺小號教學&Flute🎼長笛教學-08【點舌練習】 | 飛常人觀察日記 | https://www.youtube.com/watch?v=GNcLCwPn8Zo | 繁中 | 吐音基礎練習 |
| 4 技巧建構 | 吹高音超吃力？高音訓練方法｜你可能忽略的關鍵技巧！ | 下班後練小號 | https://www.youtube.com/watch?v=d1CuMFQcm0E | 繁中 | 高音訓練的中文專門教學 |
| 5 節奏與swing | 好和弦教你如何 Swing！ | NiceChord+ (好和弦+) | https://www.youtube.com/watch?v=vIGoV2XRPI0 | 繁中 | 高製作水準的 swing 概念講解，觀看數 14 萬+（鋼琴視角） |
| 5 節奏與swing | 爵士初學與大師的一線之隔，搖擺swing八分音符的兩種不同彈法 | 邱立婷-婷婷爵士 Li-Ting Chiu | https://www.youtube.com/watch?v=gitSJw3zoaQ | 繁中 | Swing 八分音符的初學者/大師對比講解 |
| 5 節奏與swing | 節拍器練習法 - 正拍篇 | 威廉音樂Dr. Sax | https://www.youtube.com/watch?v=9HAh-_Bk-aI | 繁中 | 節拍器爵士式練法（薩克斯風視角） |
| 6 爵士語彙 | Blues v.s. Jazz - 用熟悉的爵士經典曲來示範藍調即興與爵士即興的差異 | chipinkaiyajazz | https://www.youtube.com/watch?v=HMUr4CCSOWk | 繁中 | 資深爵士教育者示範藍調與爵士即興的差異 |
| 6 爵士語彙 | 学爵士为什么要学Blues？全器乐适用 | XinJazz法国爵士阿欣 | https://www.youtube.com/watch?v=466ZTyzcm_A | 簡中 | Blues 之於爵士語彙的必要性論述 |
| 6 爵士語彙 | 爵士专业课16：扒谱学爵士真的有用吗？ | XinJazz法国爵士阿欣 | https://www.youtube.com/watch?v=5OMnZA0CvIE | 簡中 | 採譜方法論的中文討論，較少見 |
| 7 音階與和聲 | 簡單上手爵士251和弦 / 3分鐘小教室 #4 | 威廉音樂Dr. Sax | https://www.youtube.com/watch?v=tFHzoAw0dmc | 繁中 | ii-V-I 和弦概念精簡教學 |
| 7 音階與和聲 | 4 個不可不知的爵士鋼琴和弦配置，馬上學起來用吧！ | NiceChord+ (好和弦+) | https://www.youtube.com/watch?v=15hlC_PCqjw | 繁中 | 和弦配置概念（鋼琴視角），觀看數 6.7 萬+ |
| 7 音階與和聲 | 如何練習D Blues Scale 兼練埋耳仔（Ear Training)-爵士鋼琴入門系列 | Pro Music Jazz Studio by Thomas Cheng | https://www.youtube.com/watch?v=dsJ0VcH1s10 | 繁中 | 藍調音階練習法（鋼琴視角） |
| 8 即興實作 | 國際級爵士樂手教你如何有效地即興與合奏《On Green Dolphin Street》 | chipinkaiyajazz | https://www.youtube.com/watch?v=MOw0VYJXLO0 | 繁中 | 客座樂手工作坊示範，含合奏與即興技巧 |
| 8 即興實作 | 什么是爵士音阶？如何开始你的第一次即兴？ | 爵士-没有派对 | https://www.youtube.com/watch?v=VjFwM0vAVkg | 簡中 | 爵士音階與即興入門的中文解說 |
| 8 即興實作 | 小號爵士即興1 | Major Huang | https://www.youtube.com/watch?v=URToRxVoOsA | 繁中 | **中文圈罕見的小號視角即興教學**，即使觀看數不高也值得收 |
| 9 大師研究 | Trio Music 微講堂 Yamaha爵士小號代言人 魏廣晧的一分鐘爵士小學堂 | Kuo | https://www.youtube.com/watch?v=p5pRaimnmMk | 繁中 | 台灣本土職業爵士小號家的教學片段，可作為「在地連結」角色（非關四位指名大師本人） |
| 9 大師研究 | 爵士音樂家 Miles Davis 邁爾斯·戴維斯 The Evolution of a Jazz Legend | Bruce Hsu (阿乾) | https://www.youtube.com/watch?v=LZqaf6uZc5Q | 繁中 | 長版中文 Miles Davis 生涯演進科普，屬歷史背景介紹非技術拆解 |
| 9 大師研究 | 董舜文今天吹什麼？今天吹 Roy Hargrove 的 Strasbourg St. Denis | 董舜文的頻道 | https://www.youtube.com/watch?v=jwKhOm_lH_4 | 繁中 | 中文圈唯一與 Roy Hargrove 招牌曲直接相關的影片，屬練習過程紀錄非教學拆解 |
| 10 合奏與登台 | 黃盟傑爵士合奏教學之Comping 示範彈奏 1 - Major Huang's Jazz Lessons | Major Huang | https://www.youtube.com/watch?v=Pinuw03iJ3A | 繁中 | 合奏中 comping 概念示範（鋼琴視角） |
| 10 合奏與登台 | 黃盟傑爵士合奏教學之鼓手老師Swing示範 | Major Huang | https://www.youtube.com/watch?v=jWWGffhYnHw | 繁中 | 與節奏組（鼓手）配合的示範 |
| 10 合奏與登台 | [爵士教學] Jazz Jam Session 5樣事前準備 | B3 Johnson | https://www.youtube.com/watch?v=fOqKwMV3-JM | 繁中 | Jam session 事前準備清單 |
| 11 職業之路與健康 | 【Vlog】小號演奏員的週六日常 | Angus Trumpet 小號學長 | https://www.youtube.com/watch?v=FtKZJwDIfsE | 繁中 | 職業小號演奏員的日常側寫（管弦樂團背景，非爵士） |
| 11 職業之路與健康 | 閒聊系列丨台灣人在大陸職業樂團工作的5個優、缺點丨個人經歷分享 | Angus Trumpet 小號學長 | https://www.youtube.com/watch?v=CfpPd444TOw | 繁中 | 職業樂團工作的第一手經驗分享 |
| 11 職業之路與健康 | 聽力學家超驚訝｜音樂工作者都沒在保護聽力？快接住這個音樂耳塞 | 聽力公主・Hearing Action | https://www.youtube.com/watch?v=HSz_4aQxabc | 繁中 | 中文圈唯一命中的音樂人聽力保護專門內容 |

## 五、對課程規劃的具體建議

1. **主題 1-4（裝備、發聲、音色、技巧）可以中文為主軸，其餘章節不行。** 喇叭小姐、下班後練小號、飛常人觀察日記三家台灣小號專門頻道加上林育興、Edmond哥哥，足以讓這四個單元的中文影片達到「主要靠中文撐場」的程度；但唇滑音（lip slurs）這個子題例外——中文搜尋結果幾乎全部混入薩克斯風的滑音/vibrato 內容，這裡務必用英文（如 UNCSA School of Music 的 lip slurs 教學）補上。
2. **主題 5 開始，選片時要主動避開「小號頻道搜不到就默認留白」的陷阱，改成向泛爵士教育頻道借用。** NiceChord+、chipinkaiyajazz、威廉音樂Dr. Sax、Major Huang、B3 Johnson 這些頻道的視角是鋼琴/薩克斯風/人聲，但 swing 節奏感、藍調音階、251 和弦、guide tones 這些概念本質上是「爵士理論」不是「小號技巧」，原理完全通用——文案務必註明「這支影片示範樂器不是小號，但原理直接適用」，不要讓學生誤以為找錯內容。
3. **主題 9 是全課精神座標所在，也是最需要誠實面對供給落差的章節。** Miles Davis / Clifford Brown / Roy Hargrove 三位在英文圈supply充沛，可以做到「風格總覽 → 一手採譜 → lick 拆解」的完整三層次；Roy Hargrove 的《Strasbourg St. Denis》甚至有兩支獨立拆解可以對照著看，是這個章節的亮點單元。但 **Chris Botti 這位使用者指名的四人之一，中英文圈都找不到任何「如何吹出他的音色/風格」的教學內容**——這不是搜尋不夠力，是這位小號家本身的公開教學素材就是稀缺（他的職業重心在跨界流行/古典演出而非爵士教育社群），建議這個子節誠實定調為「演出賞析＋訪談側寫」單元而非「技法拆解」單元，並在文案向學生說明這個侷限，而不是硬湊幾支演出片段冒充教學。
4. **魏廣晧是這門課在地化的關鍵人物，值得後續深挖。** 他是全中文圈唯一「本人是職業爵士小號家、且有教學內容」的存在，本次盤點只搜到他「一分鐘爵士小學堂」系列的 1 支和多支散落各頻道的訪談/講座片段。建議後續派工直接把 Trio Music（Kuo 頻道）與魏廣晧本人相關的所有影片列出來比對，很可能還有更多教學集數本次關鍵字沒搜到——這個系列如果集數夠多，可以成為主題 9 的「在地連結」小節，銜接學生從「聽外國大師的分析」到「看台灣本土爵士小號家怎麼教」。
5. **主題 11 中文供給的空白要誠實留白，不要用管弦樂團內容硬湊爵士語境。** Angus Trumpet 小號學長的職涯 vlog 是古典/管弦樂團背景，與「爵士樂手」的職業路徑（酒吧駐唱、錄音室 session、巡演、jam session 人脈經營）性質不同，選用時文案需要註明「這是管弦樂團職涯的參考視角，爵士樂手的職業路徑會不太一樣」；embouchure 傷害/嘴唇疲勞這個子題中文完全查無，直接用英文（Instructor Student Resources、Rufftips trumpet stuff）撐滿，不勉強湊中文。
6. **簡體字幕的中文候選（Chuan Gao、XinJazz法国爵士阿欣、爵士-没有派对）如果最終採用，需要 OpenCC 簡轉繁**——這與書法帖 app 專案處理 shufazidian 簡體來源的既有做法一致，可以直接沿用那套轉換流程，不需要重新摸索。
7. **英文骨幹頻道建議鎖定 The Black Trumpeter + Ridgewood School of Music + Jazz at Lincoln Center's JAZZ ACADEMY 三家為預設優先**，這三家合計橫跨主題 1-10 且風格互補（The Black Trumpeter 偏小號技術+爵士語彙、Ridgewood 偏理論系統化、JALC Jazz Academy 偏機構級權威+swing/合奏）。Charlie Porter、Open Studio、Jazz Lesson Videos 作為第二梯隊，覆蓋主題 2/11、4/7、6/7/8 的深化內容。
