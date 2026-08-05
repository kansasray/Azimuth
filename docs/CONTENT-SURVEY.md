# 內容供給盤點——地圖學與軍用陸地導航

> 盤點日期：2026-08-05
> 方法：`yt-dlp ytsearch` 搜尋真實影片 ID（見規格：`docs/curation-brief.md` 的搜尋鐵則同樣適用於本課），
> 逐支以 YouTube oEmbed API（`https://www.youtube.com/oembed?url=...&format=json`）打過拿到 HTTP 200 才列入。
> **本文件所有連結皆已驗證存在且公開**，標題／頻道名照 oEmbed 回傳值抄錄。
> 搜尋紀錄與原始 oEmbed 回應存放於執行本次盤點時的暫存目錄，未收錄進本 repo。

## 一、總覽結論

這個主題**撐得起 10-11 章的架構，但撐不滿全部 44 個單元用中文當主軸**。內容供給明顯分兩層：

- **英文內容是深水區**：STOKERMATIC、The Map Reading Company 兩個頻道幾乎是為這門課量身打造的——各自有數十支涵蓋讀圖、座標、方位角、指北針、測距、陸地導航實作、夜間導航的專門影片，加上 Coalcracker Bushcraft、David Canterbury、Civilian Rifleman、REI、Army ROTC 系列官方訓練影片、EIB 任務示範影片等，10 個主題全部有對應內容，且大多數主題選擇很多（同一主題可挑 5-8 支不同角度的影片不成問題）。
- **中文內容是淺水區，且集中在少數頻道**：最大宗的可用內容其實不是「登山/軍事」頻道做的教學系列，而是**社團法人台灣民團協會課務組**——一個以美軍 SMCT（士兵共同任務手冊）071-COM 任務編號為架構、逐項拍攝的系統性中文教學系列，直接對應本課主題 2/3/4/6（座標、方位角、指北針操作、陸地導航實作）。其次是香港的山藝教育生態圈（寂靜的戶外活動大本營、山川、sunny leung、香港山藝協會、向晴Ckrystin）——內容切題但影片短（1-3 分鐘）、製作偏陽春、多半是頻道裡的一小部分（主頻道其實在拍騎車/行山 vlog 或繩結技術）。基礎地圖學（比例尺、圖例、等高線）在台灣有大量地理課綱教學影片可用，但那是「國高中地理課」語境，不是「陸地導航」語境，需要重新框架化。
- **主題 5（步幅計步/ranger beads）、7（夜間導航）、8（寫景圖/射界卡）、9（座標回報與目標指示/call for fire）在中文幾乎是空的**——這四個主題若要中文為主軸，內容量撐不起一個單元 5-8 支影片的配額。

**建議**：全課以**英文影片為主軸骨幹**、中文影片作為每單元優先插入的補充選項（找得到中文的單元中文優先，找不到的單元誠實地全英文）。10-11 章、40+ 單元的架構可以維持，但**不要承諾「中文為主」**——中文內容目前只能支撐 40% 上下的單元達到「這單元主要靠中文影片撐場」的程度，其餘單元必須以英文影片為主、頂多搭配 1-2 支中文背景/類比影片（例如用台灣地理課的等高線教學帶入而非直接對應軍用陸地導航語境）。

## 二、頻道盤點

### 中文頻道

| 頻道 | 主題 | 相關影片量 | 品質印象 |
|---|---|---|---|
| **社團法人台灣民團協會課務組** | 依美軍 SMCT 071-COM 任務編號逐項教學：讀懂軍用地圖、地形特徵辨識、網格座標判讀、方位角與反方位角、前方交會/後方交會、指北針定向地圖、辨向步行 | 至少 17 支直接相關（本次盤點找到的 071-COM 系列） | 本次盤點中文內容裡**唯一系統性、任務導向、與本課大綱高度對齊**的頻道；影片較短（2-7 分鐘）、講解扎實但畫面偏簡樸（PPT/示範為主）。是主題 2/3/4/6 中文內容的骨幹 |
| **寂靜的戶外活動大本營**（香港） | 地圖閱讀與指北針操作系列 | 約 9 支（地圖介紹、方格網座標、量度距離、等高線、圖例、統一橫墨卡托方格網、指南針正置地圖、單切法定位、前進方位應用） | 切題但影片很短（1-2 分鐘）、畫質偏舊（.wmv 年代）；頻道其餘內容是單車環中國/行山 vlog，與主題無關，需精準挑片 |
| **山川**（香港，一級/三級山藝訓練） | MGRS 軍用網格、Silva 1-2-3 指北針系統、Roamer/Romer 座標量度尺 | 約 5 支 | 粵語口白 + 繁中字幕，內容對，但頻道主力其實是繩結/露營裝備，導航只是「一級山藝」課程的一小塊 |
| **sunny leung**（香港山藝協會教練） | 指北針前視方位、摺疊地圖、MGRS 8 位坐標 | 約 3-4 支 | 個人教學頻道，畫質陽春但示範清楚；同頻道大量繩結教學，導航內容需挑選 |
| **香港山藝協會 Mountaineering Council of Hong Kong**（官方頻道） | MGRS 測量、營繩結等基礎技能 | 少量（本次確認 1 支 MGRS 相關） | 官方協會頻道，權威性夠，但陸地導航主題影片量不多 |
| **向 晴Ckrystin**（香港，「後生癡呆地圖閱讀系列」） | 八位座標讀圖法、山形辨識、前後視方位讀法 | 至少 3 支（有系列命名，可能還有更多集） | 系列化、標題明確好找，語氣輕鬆適合入門單元 |
| **光復中學 洪敏勝教師**（台灣，高中地理教師） | 地圖概說、後方交會法、TM2 二度分帶投影、圖網方格座標 | 4 支 | 課堂錄影風格，適合座標系統/交會定位這類偏學術的單元 |
| **黃柏欽的線上地理教室**（台灣，108課綱地理） | 地圖要素、等高線繪製原理、後方交會法、方向標、直角網格座標 | 大量（課綱逐條拍攝，本次盤點命中 10+ 支） | 台灣高中地理課綱教學，內容正確扎實，但語境是「考試會考」而非「陸地導航實作」，需重新框架化才好用在本課 |
| **臺北酷課雲**（台北市政府教育局官方平台） | 國中/高一地理：等高線地形圖判讀、地圖要素（比例尺/圖例/方位） | 多支 | 官方教育平台，畫質與講解穩定，適合基礎地圖學章節的入門單元 |
| **龍騰地理／洛威地理／翻轉地理教室／名師學院／Snapask Taiwan** 等補習班地理頻道 | 地圖要素、比例尺、等高線 | 各家數支 | 補習班風格，內容正確但同質性高，可作為基礎地圖學章節的候補 |
| **Hikingbook／Zoebitalk肉比頭／秘密基地戶外工作室／蘋果妹／Garmin Taiwan** | 離線地圖 App、GPS 定位求救、山難自救 | 各家數支 | 台灣戶外圈熱門頻道，適合主題 10（電子地圖 App 整合／GPS 失效備援）的中文骨幹，製作品質高、觀看數也高 |
| **軍武小尖兵 Military Vanguard**（台灣軍事教育頻道） | 指揮工具-指北針應用（EP51） | 本次確認 1 支，頻道其餘為軍事裝備介紹 | 台灣軍事科普頻道，這支影片框架貼近「軍用」語境，值得作為主題 4 的中文旗艦影片；建議後續再深挖此頻道找有無更多相關集數 |
| **NTR Region**（童軍教育頻道） | 童軍探索獎章：認識地圖及習用圖例、圖邊資料、正置地圖 | 3 支+ | 童軍語境，適合入門單元，內容基礎但正確 |
| **FOOTLAND／HOP Sports／運動部 Taiwan Sports** | 台灣定向越野賽事轉播與宣傳 | 多支，但多為賽事花絮/直播而非教學 | 適合作為章節開場的「動機影片」而非教學主片，教學密度低 |
| 莒光園地（國防部政治作戰局） | 本次搜尋未命中任何地圖判讀/陸地導航相關集數 | 0（本次盤點範圍內） | 該節目歷史悠久、集數龐大，不排除有相關集數但關鍵字搜不到；不建議列為預期供給來源 |

### 英文頻道

| 頻道 | 主題 | 相關影片量 | 品質印象 |
|---|---|---|---|
| **STOKERMATIC** | 陸地導航示範、8 位座標繪製、量角器使用、地形對照 vs 航位推算、夜間指北針操作、Ranger School/SFAS 準備 | 極多（本次盤點命中 10+ 支，頻道實際數量更多） | 本次盤點**英文內容的絕對旗艦頻道**，專攻軍規陸地導航，內容系統、示範清楚、觀看數普遍破 30 萬 |
| **The Map Reading Company** | UTM/座標系統入門、磁偏角、交會定位（resection/intersection）、夜間導航、稜鏡式指北針 | 多（本次命中 5+ 支） | 第二旗艦頻道，講解精簡、專注純教學無業配 |
| **Coalcracker Bushcraft** | 稜鏡式指北針入門、三角定位、In-and-Out 導航法 | 多支 | 高觀看數（40 萬+），示範清楚，偏 bushcraft/民間視角但軍規指北針操作講得很仔細 |
| **David Canterbury**（Self Reliance Outfitters） | 「10 Min to Better Land Navigation」系列：步幅計步、航位推算、座標繪製 | 系列化，多支 | 有明確系列命名好收錄，內容紮實 |
| **Civilian Rifleman** | Intermediate/Basic Land Navigation 系列：指北針方位、航位推算、地形對照 | 系列化，多支 | 觀看數不高但系列完整、貼近本課「陸地導航實作」章節架構 |
| **ITS Tactical / Imminent Threat Solutions** | 自製計步珠（ranger beads）教學 | 相關 1-2 支 | 高品質 prepper/tactical 頻道 |
| **Delta Company RSP, Iowa National Guard／Army ROTC 各校分隊（MIT、University of Iowa 等）** | EIB/SMCT 任務示範：交會定位、地形特徵判讀、格網座標判讀 | 多支（美軍後備軍官訓練團官方/半官方錄影） | 半官方訓練錄影，權威性高但畫質參差 |
| **REI／Ordnance Survey** | 讀圖入門、指北針使用、地圖定向 | 各數支 | 戶外零售商/英國官方測繪局頻道，製作精良、觀看數百萬等級，適合入門單元 |
| **Back Pack Hack** | 交會定位（resection/intersection）專門教學 | 2-3 支 | 小眾但切題 |
| **SILVA Global** | SILVA 1-2-3 指北針系統官方教學 | 1-2 支 | 指北針廠商官方頻道，示範標準 |
| **Raider Brigade** | Call For Fire 六要素、射界卡填寫 | 各 1-2 支 | 適合主題 8/9 的中低配額補充 |
| **Task & Purpose** | 前進觀測員如何協調砲兵 | 1 支高品質 | 軍事科普頻道，觀看數百萬，適合主題 9 開場影片 |
| **FNG ACADEMY（Former Green Beret）** | SFAS 陸地導航準備要點、夜間導航 | 多支 | 前綠扁帽退役軍人主持，內容偏「考試準備」視角 |
| **NSSF／InnerBark Outdoors／Vortex Optics／8541 Tactical** | Mil relation 公式、mil-dot 測距 | 多支 | 射擊/光學廠商視角，適合主題 5 的密位公式補充 |
| **MapTools** | 格網工具測繪、UTM 座標繪製 | 數支 | GIS 工具廠商頻道，實用示範 |
| **GIS & GPS Tips and Techniques／Spatial Monkey／Offshore Surveys** | UTM 投影原理 | 各數支 | 較學術/GIS 專業視角，適合座標系統章節的進階補充 |

## 三、逐主題供給缺口判定

| # | 主題 | 中文供給 | 英文供給 |
|---|---|---|---|
| 1 | 基礎地圖學（種類/比例尺/圖例/圖廓/等高線） | **充足**（台灣地理課綱內容量大，但需重新框架化為導航語境） | 充足 |
| 2 | 座標與網格系統（MGRS/UTM/經緯度/TWD97/二度分帶） | **充足**（071-COM 系列 + 香港山藝圈 MGRS 教學 + 台灣測量學/TWD97 專門影片） | 充足 |
| 3 | 方位角（三北關係/磁偏角/密位/方位角與反方位角） | 稀少（071-COM 有 2 支直接對應「量角器計算網格方位角」「轉換方位角計算後方位角」，但缺乏三北關係與磁偏角的中文陸地導航語境影片，僅有地理/物理課的磁偏角片段） | 充足 |
| 4 | 指南針操作（稜鏡式/透明底板式/定向/依方位角行進/繞障礙） | **充足**（071-COM 指北針定向地圖 + 軍武小尖兵 + 香港山藝圈多支 + 寂靜的戶外活動大本營前進方位應用） | 充足 |
| 5 | 距離判斷與測量（步幅計步/計步珠/測距儀/測距卡/密位公式） | **幾乎沒有**（僅找到「地圖上量測距離」這類地圖測距內容，步幅計步、ranger beads、密位公式在中文陸地導航語境下搜尋不到對應教學） | 充足（步幅計步、ranger beads、mil relation 公式皆有專門頻道） |
| 6 | 陸地導航實作（航點推進/地貌對照/航位推算/交會定位） | **充足**（071-COM 系列的辨向步行、前方交會、後方交會，加上洪敏勝、黃柏欽的後方交會法教學，是中文供給最強的主題之一） | 充足 |
| 7 | 夜間與惡劣天候導航 | **幾乎沒有**（搜尋結果幾乎全是車用導航機/船舶導航，無陸地夜間導航中文教學） | 充足（STOKERMATIC、The Map Reading Company、FNG ACADEMY 皆有夜間導航專門影片） |
| 8 | 寫景圖與射界卡調製 | **幾乎沒有**（搜尋無命中任何相關教學，中文結果被遊戲/撞球內容淹沒） | 稀少但堪用（Range Card/Sector Sketch 有明確對應影片，數量不算多但足以撐 1 個單元） |
| 9 | 座標回報與目標指示（含 call for fire 基礎） | **幾乎沒有**（「引導砲兵」搜尋零命中） | 稀少但堪用（Call For Fire 六要素、前進觀測員介紹等有對應影片） |
| 10 | 電子地圖 App 整合與 GPS 失效備援 | **充足**（台灣登山圈離線地圖 App 教學非常多，Hikingbook/Zoebitalk/秘密基地等） | 充足（wilderness navigation with GPS backup 相關影片存在，但數量比中文少，且較分散） |

## 四、種子影片（49 支，全數 oEmbed 200 已驗證）

驗證方法：對每一支影片打 `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=<ID>&format=json`，
確認 HTTP 200 且回傳的 `title`／`author_name` 與下表相符後才收錄。標題、頻道名皆照 oEmbed 回傳值抄錄。

### 英文（24 支）

| 主題分類 | 影片標題 | 頻道 | URL | 語言 | 為何值得收 |
|---|---|---|---|---|---|
| 1 基礎地圖學 | Land Navigation Demonstration Video | STOKERMATIC | https://www.youtube.com/watch?v=xSNohNPqWlU | EN | 全流程總覽，適合章節開場定調 |
| 1 基礎地圖學 | How To Do Land Navigation At Basic Training \| Everything You NEED To Know To Pass | Matt Ward | https://www.youtube.com/watch?v=boiQ-XGv-Yg | EN | 新兵視角完整走一遍陸軍基本訓練的陸地導航科目 |
| 1 基礎地圖學 | How to Read a Topo Map | REI | https://www.youtube.com/watch?v=CoVcRxza8nI | EN | 戶外零售商官方製作，等高線與地形圖入門講得清楚，觀看數百萬 |
| 1 基礎地圖學 | Contour Map / Topographic Map Reading | Rene Quibodeaux-Kidder | https://www.youtube.com/watch?v=bFP4rCJcKd8 | EN | 補充等高線判讀的第二視角，適合作為對照教材 |
| 2 座標與網格系統 | How to Plot 8 Digit Grid Coordinates | STOKERMATIC | https://www.youtube.com/watch?v=OWTd0StOur0 | EN | 8 位格網座標實作示範，軍規標準 |
| 2 座標與網格系統 | Introduction to UTM, Universal Transverse Mercator | GIS & GPS Tips and Techniques | https://www.youtube.com/watch?v=LcVlx4Gur7I | EN | UTM 原理的 GIS 專業視角，補足軍規教學未講的投影原理 |
| 2 座標與網格系統 | Introduction to UTM coordinates and Grid References (simple) | The Map Reading Company | https://www.youtube.com/watch?v=P0EcAuKLS-0 | EN | 精簡版 UTM/格網入門，適合初學單元 |
| 3 方位角 | True North, Magnetic North, Grid North; Magnetic Declination | Fish | https://www.youtube.com/watch?v=UtmwAw30Xjc | EN | 三北關係與磁偏角一次講清楚，是這個主題最直接對應的影片 |
| 4 指南針操作 | Land Nav 101: How to Use a Lensatic Compass the Right Way. A Beginners Guide! | Coalcracker Bushcraft | https://www.youtube.com/watch?v=cEHsySgwEzo | EN | 稜鏡式指北針操作最受歡迎的教學之一（40 萬+ 觀看） |
| 4 指南針操作 | Compass 101 - How to Use a Baseplate Compass | MRCAParks | https://www.youtube.com/watch?v=7MQUIYsmQhc | EN | 透明底板式指北針入門，公園管理處官方製作 |
| 4 指南針操作 | How to Use a Compass \|\| REI | REI | https://www.youtube.com/watch?v=0cF0ovA3FtY | EN | 高觀看數（300 萬+）通俗版指北針教學，適合入門單元 |
| 5 距離判斷與測量 | How To Make Your Own Pace Count Beads for Land Navigation | ITS Tactical / Imminent Threat Solutions | https://www.youtube.com/watch?v=4MEynCUua-0 | EN | 計步珠（ranger beads）自製與使用，中文完全缺這塊 |
| 5 距離判斷與測量 | Pace Counting Basics | David Canterbury | https://www.youtube.com/watch?v=NnVNNgyOUCU | EN | 步幅計步基礎，系列化頻道的其中一集 |
| 5 距離判斷與測量 | Plotting UTM Coordinates with a Grid Tool | MapTools | https://www.youtube.com/watch?v=mv7ZnNFsgsQ | EN | 測距卡／格網工具實際操作示範 |
| 5 距離判斷與測量 | Mil Dot Range Estimation Formula: Learn how to Calculate Distance with MILs \| Ryan Cleckner | NSSF—The Firearm Industry Trade Association | https://www.youtube.com/watch?v=LeG1JanVmEE | EN | 密位公式（mil relation）由前狙擊教官講解，權威性高 |
| 5 距離判斷與測量 | Mil relation Formula | DoubleTapLLC | https://www.youtube.com/watch?v=D4WBR7hc8zQ | EN | 密位公式的第二視角，可與上一支對照 |
| 6 陸地導航實作 | An Intro to Terrain Association vs Dead Reckoning - Land Navigation Essentials | STOKERMATIC | https://www.youtube.com/watch?v=Xw7qxEUZjGw | EN | 地貌對照 vs 航位推算兩大技法的核心對比，本主題關鍵影片 |
| 6 陸地導航實作 | Resection vs Intersection navigation, what's the difference? | The Map Reading Company | https://www.youtube.com/watch?v=VSbyY4jMGfY | EN | 交會定位兩種手法的差異講解 |
| 7 夜間與惡劣天候導航 | Night navigation with map and compass | The Map Reading Company | https://www.youtube.com/watch?v=2hI9Hqqc1Uc | EN | 夜間導航专門教學，中文完全缺這塊，此為主力影片 |
| 8 寫景圖與射界卡 | How To: Fill Out a Range Card | Military.com | https://www.youtube.com/watch?v=XCpT7-AD3gk | EN | 射界卡填寫官方媒體版教學 |
| 8 寫景圖與射界卡 | Range Cards and Sector Sketches | Silver Beaty - Army ROTC | https://www.youtube.com/watch?v=FddlMu0j-A4 | EN | 射界卡與寫景圖（sector sketch）合併講解，直接對應主題名稱 |
| 9 座標回報與目標指示 | 6 Elements of Call For Fire | Raider Brigade | https://www.youtube.com/watch?v=SoHZ467hNEI | EN | Call for fire 六要素標準流程 |
| 9 座標回報與目標指示 | How Forward Observers Operate in the Military to Coordinate Artillery | Task & Purpose | https://www.youtube.com/watch?v=ekhQTYEXd0o | EN | 軍事科普頻道，適合主題開場，觀看數百萬 |
| 10 電子地圖/GPS備援 | Wilderness Navigation: Finding Your Way Using Map, Compass, Altimeter & GPS | Secret Stuff | https://www.youtube.com/watch?v=7tuoKeo2Hi0 | EN | 地圖+指北針+高度計+GPS 綜合運用，適合備援導航單元 |

### 中文（25 支）

| 主題分類 | 影片標題 | 頻道 | URL | 語言 | 為何值得收 |
|---|---|---|---|---|---|
| 1 基礎地圖學 | 國中地理 等高線地形圖的判讀_2636 | 臺北酷課雲 | https://www.youtube.com/watch?v=RnYg7qqWfa8 | 繁中 | 台北市官方教育平台製作，等高線判讀入門 |
| 1 基礎地圖學 | 等高線判讀：判讀陡坡與緩坡、判讀河谷與山脊/國一地理：地形篇/五分鐘地理教室 | Yvonne | https://www.youtube.com/watch?v=juEnzFoVz3M | 繁中 | 精簡版陡坡緩坡/河谷山脊判讀，適合快速複習 |
| 1 基礎地圖學 | 高一地理｜1-2｜地圖要素—比例尺、圖例、方位 | 臺北酷課雲 | https://www.youtube.com/watch?v=q3fBy0bhfsY | 繁中 | 比例尺、圖例、方位三要素一次教完 |
| 1 基礎地圖學 | 地圖閱讀等高線 | 寂靜的戶外活動大本營 | https://www.youtube.com/watch?v=8GrSwqO90L4 | 繁中 | 戶外／登山語境下的等高線教學，比地理課影片更貼近本課定位 |
| 2 座標與網格系統 | 071-COM-1000 讀懂軍用地圖 | 社團法人台灣民團協會課務組 | https://www.youtube.com/watch?v=VX-3CKkyx08 | 繁中 | 中文陸地導航系列的入口影片，任務導向框架與本課高度吻合 |
| 2 座標與網格系統 | 071-COM-1002 在軍用地圖上判斷網格座標 | 社團法人台灣民團協會課務組 | https://www.youtube.com/watch?v=OarXcxgUGzY | 繁中 | 網格座標判讀，SMCT 任務式教學 |
| 2 座標與網格系統 | 測量五十講 V2.地圖投影、UTM帶區、TWD97二度分帶坐標 | HC | https://www.youtube.com/watch?v=F-MdQDMjgJ4 | 繁中 | 台灣本地測量學視角的 TWD97/二度分帶專門教學，直接對應課綱主題 2 的台灣在地化需求 |
| 2 座標與網格系統 | 如何量度 軍用方格網 Military Grid Reference System (MGRS) | Mountaineering Council of Hong Kong 香港山藝協會 | https://www.youtube.com/watch?v=SS54P6iV0-U | 繁中 | 香港官方山藝協會製作，MGRS 量測示範 |
| 2 座標與網格系統 | 量度 軍用方格網(MGRS) 8 位坐標 | sunny leung | https://www.youtube.com/watch?v=fS3gsACu1-g | 繁中 | 個人教練視角，8 位座標實測示範 |
| 2 座標與網格系統 | 地圖閱讀-方格網座標 | 寂靜的戶外活動大本營 | https://www.youtube.com/watch?v=mkGYeMqR7X8 | 繁中 | 方格網座標基礎入門，短小精悍 |
| 2 座標與網格系統 | 點讀圖「先直後橫？」八位座標讀圖法【後生癡呆地圖閱讀系列】 | 向 晴Ckrystin | https://www.youtube.com/watch?v=CozCR5SKvEc | 繁中 | 「先讀橫（東距）後讀縱（北距）」口訣講解，初學者友善 |
| 3 方位角 | 071-COM-0018 使用量角器計算網格方位角 | 社團法人台灣民團協會課務組 | https://www.youtube.com/watch?v=F64h4yhB0QY | 繁中 | 量角器計算方位角實作，中文供給最稀少主題的關鍵影片 |
| 3 方位角 | 071-COM-1016/7 轉換方位角，計算後方位角 | 社團法人台灣民團協會課務組 | https://www.youtube.com/watch?v=_QbGfyH_BlQ | 繁中 | 方位角與反方位角換算，直接對應課綱主題 3 |
| 4 指南針操作 | 071-COM-1011 用透鏡式指南針確定地圖方向 | 社團法人台灣民團協會課務組 | https://www.youtube.com/watch?v=BXOeGrVa4ww | 繁中 | 稜鏡式指北針定向地圖，任務式教學framework完整 |
| 4 指南針操作 | 【軍武小尖兵EP51】- 指揮工具-指北針應用 | 軍武小尖兵Military Vanguard | https://www.youtube.com/watch?v=oK3cRZCXIvc | 繁中 | 台灣軍事科普頻道，軍用語境包裝，適合章節旗艦影片 |
| 4 指南針操作 | How to use a compass指南針運用(Direct Bearing) 前視方位 | sunny leung | https://www.youtube.com/watch?v=bzDaufnYJVo | 繁中 | 前視方位角實測操作 |
| 4 指南針操作 | 指南針正置地圖 | 寂靜的戶外活動大本營 | https://www.youtube.com/watch?v=rA1tpbnoh_A | 繁中 | 用指南針定向地圖的基礎操作 |
| 5 距離判斷與測量 | 地圖閱讀量度距離 | 寂靜的戶外活動大本營 | https://www.youtube.com/watch?v=VI3vZdHBEcw | 繁中 | 中文供給最弱主題裡少數堪用的影片，講地圖上的距離測量（非步幅計步，需明確定位為「地圖測距」子題） |
| 6 陸地導航實作 | 071-COM-1006 辨識方向，從一點步行至另一點 | 社團法人台灣民團協會課務組 | https://www.youtube.com/watch?v=gpUBsX8E3RM | 繁中 | 對應「航點推進」的中文任務式教學 |
| 6 陸地導航實作 | 071-COM-1015 以後方交會法，定位出地圖上的未知點 | 社團法人台灣民團協會課務組 | https://www.youtube.com/watch?v=an_ZLB623A8 | 繁中 | 後方交會法（resection）標準教學 |
| 6 陸地導航實作 | 071-COM-1014 以前方交會法，定位地面上的未知點 | 社團法人台灣民團協會課務組 | https://www.youtube.com/watch?v=2yqp4JvwCo8 | 繁中 | 前方交會法（intersection）標準教學，與上一支成對 |
| 6 陸地導航實作 | 地圖量測與判讀-後方交會法 | 光復中學 洪敏勝教師 | https://www.youtube.com/watch?v=Nn7XE_G17DI | 繁中 | 學術課堂視角的後方交會法，可與 071-COM 版本對照互補 |
| 6 陸地導航實作 | 指南針前進方位應用 | 寂靜的戶外活動大本營 | https://www.youtube.com/watch?v=YMDPJAY_EnE | 繁中 | 依方位角行進的實地應用示範 |
| 10 電子地圖/GPS備援 | 離線地圖使用教學、必學救命知識｜登山必備 APP，完整支援 iOS & Android | Hikingbook | https://www.youtube.com/watch?v=czblrqbK_x0 | 繁中 | 台灣登山圈最熱門的離線地圖 App 教學之一（31 萬+ 觀看） |
| 10 電子地圖/GPS備援 | IOS登山必備 APP \| 離線地圖\| 軌跡圖\| 座標定位\| 行程分析 | Zoebitalk肉比頭 | https://www.youtube.com/watch?v=HcXUYYqgrR4 | 繁中 | 涵蓋離線地圖、軌跡、座標定位多項功能，適合作為 App 整合單元主片 |

## 五、對課程規劃的具體建議

1. **章節配額不要平均分配。** 主題 5、7、8、9 若安排到跟主題 1/2/4/6 一樣的中文影片配額，會直接開天窗。這四個主題建議明確標註「本章以英文影片為骨幹」，中文最多放 1 支背景/類比影片（例如主題 5 可以放「地圖閱讀量度距離」當引子，但實際的步幅計步/ranger beads 教學一定要上英文）。
2. **071-COM 系列是這門課中文內容的地基，值得整批深挖。** 本次盤點只用零星關鍵字搜到 17 支，但該頻道用任務編號系統化命名（071-COM-XXXX），建議後續派工直接把該頻道全部影片列表抓出來比對美軍 SMCT 071-COM 任務清單，很可能還有本次未搜到但存在的集數（例如量測距離、地貌辨識等任務編號）。
3. **香港山藝生態圈（寂靜的戶外活動大本營、山川、sunny leung、香港山藝協會、向晴Ckrystin）内容分散在各頻道的一小部分**，不是專門的陸地導航頻道——策展時要注意這些頻道其餘內容（單車環中國、繩結、露營裝備）完全不相關，不能整頻道信任，要逐支挑。
4. **基礎地圖學章節可以用台灣地理課綱內容打底，但要重新包裝語境。** 黃柏欽/龍騰/洛威等地理教學頻道的等高線、比例尺、圖例內容是正確的，但學生會覺得「這是在上地理課」而非「在學陸地導航」，單元文案需要主動把「考試會考」的框架換成「野外會用到」的框架。
5. **英文骨幹頻道鎖定 STOKERMATIC + The Map Reading Company 兩家即可覆蓋大部分主題**，兩家風格互補（STOKERMATIC 偏美軍實務示範、The Map Reading Company 偏原理精簡講解），建議作為英文影片選片時的預設優先頻道，類似健身課程策展規格書裡「優先頻道」的角色。
6. **主題 9（call for fire）在中文完全空白，且概念上偏「引導砲兵開火」——編寫課程文案時要注意這是軍事專業技能，不是一般登山者需要的內容**，建議確認這個主題在課程受眾定位裡的必要性，若受眾是一般山友/後備軍人教育召集對象而非現役砲兵觀測手，可考慮把這章改名為「座標回報與目標指示（含 call for fire 概念導覽）」，降低配額到 5 支以下、以英文科普影片（如 Task & Purpose）帶過原理即可，不必湊滿 8 支專業教學影片。
