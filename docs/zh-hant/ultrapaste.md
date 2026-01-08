---
layout: doc
title: 超級貼上 UltraPaste 擴充功能
---

<style scoped>
:deep(div[class*="language-"]) pre,
:deep(div[class*="language-"]) code {
  word-break: break-all !important;
  white-space: pre-wrap !important;
}

:deep(p) code,
:deep(li) code,
:deep(td) code {
  word-break: break-all;
  white-space: pre-wrap;
}

:deep(.vp-doc) {
  word-break: normal;
  overflow-wrap: break-word;
}
</style>

# 超級貼上 UltraPaste! 擴充功能

<ImageOnDemand alt="圖示" src="ultrapaste/img001_ultrapaste_icon.png" />

## 簡述

本擴充功能為 VEGAS Pro 設計了一種 **<u>很新</u>** 的檔案匯入方式。僅需透過一個快速鍵，你可以匯入幾乎所有類型的檔案：普通媒體檔案、剪貼簿裡的圖像檔案、SRT 字幕檔案，甚至是 REAPER 的剪貼簿資料。你只需要 `Ctrl + C`，然後 `Ctrl + Shift + V`，即可快速將這些檔案匯入到 VEGAS 時間軸中。

媒體檔案匯入方式範例：

<ImageOnDemand alt="媒體匯入" src="ultrapaste/img015_ultrapaste_media_import.gif" />

`剪貼簿圖像` 功能與你的截圖工具的互動：

<ImageOnDemand alt="截圖" src="ultrapaste/img016_ultrapaste_screenshot.gif" />

`剪貼簿圖像` 功能與 PPT 的互動：

<ImageOnDemand alt="PPT" src="ultrapaste/img017_ultrapaste_ppt.gif" />

## 安裝

目前擴充功能版本號：v1.03 beta

支援版本：Sony Vegas Pro 13 - Magix Vegas Pro 22

1. 前往 [Releases](https://github.com/zzzzzz9125/UltraPaste/releases) 下載最新的壓縮檔並解壓縮。選擇 `UltraPaste.dll`<small>（如果是 `Sony VEGAS Pro 13` 的話就是 `UltraPaste_13.dll`）</small> 和 `UltraPaste.png` 並複製，貼上到擴充功能資料夾：
  - `C:\ProgramData\Vegas Pro\Application Extensions\`  
  - 或是 Sony 版的 `C:\ProgramData\Sony\Vegas Pro\Application Extensions\`
  - 如果你不知道如何安裝擴充功能的話，點選[這裡](/index#安裝腳本或擴充功能時的一般步驟)

2. 安裝完畢後，可透過 `工具 -> 超級貼上!` 中找到可停駐的擴充功能視窗。

<ImageOnDemand alt="工具選單" src="ultrapaste/img002_ultrapaste_tools_menu.png" />

## 使用

首先是最頂上的 `超級貼上!`。這個是擴充功能最主要的功能，幾乎所有操作都可以依賴它來完成。可以為它綁定一個鍵盤快速鍵，到上邊的 `選項 -> 自訂鍵盤`：

<ImageOnDemand alt="自訂鍵盤" src="ultrapaste/img003_ultrapaste_keyboard.png" />

`Ctrl + Shift +V` 是我個人推薦的快速鍵，綁個其他順手的也可以。不建議綁 `Ctrl + V`，會覆蓋掉 VEGAS 原生的貼上鍵。

這樣就為我們的超級貼上鍵綁好了快速鍵。所有出現在選單裡的一鍵操作功能，也可以這樣子新增快速鍵。

檔案的匯入邏輯很簡單：比如選中你桌面上的任意媒體檔案，對它 `Ctrl + C`，在 VEGAS 裡執行 `超級貼上` 的快速鍵，即可將其匯入到目前所選擇的 VEGAS 軌道上。在此基礎上，如果你在 VEGAS 裡劃定了一個循環區域，那麼也可以按照該循環區域的長度匯入檔案。

除了基本的檔案匯入以外，擴充功能還可以讀取這些剪貼簿資料：
- 剪貼簿圖像
- 純文字和字幕檔案
- REAPER 剪貼簿資料

這些資料都可以被正確地識別和處理。

<br>

`超級貼上! - 視窗` 是擴充功能的設定視窗，你可以在這裡調整 `超級貼上` 的行為邏輯。

### 一般

<ImageOnDemand alt="一般" src="ultrapaste/img004_ultrapaste_general.png" />

排除檔案類型：這個選項會使擴充功能排除特定名稱規則的檔案。使用的是基本的 DOS 表示式。比如圖上的 `*.sfvp0` 和 `*.sfap0`，分別是 VEGAS Pro 的影片代理檔案和音訊代理檔案。這些代理檔案實際上是可以直接匯入進 VEGAS 的，但是為了避免使用者誤操作，預設是排除掉的。如果你不需要匯入某些特定的檔案的話，可以自行調整這個設定。

<br>

### 剪貼簿圖像

<ImageOnDemand alt="剪貼簿圖像" src="ultrapaste/img005_ultrapaste_clipboard_image.png" />

`起始位置`：檔案匯入的起始位置。一共分為三類：`游標`、`播放游標`、`專案起始處`。`游標` 和 `播放游標` 的區別是，當你播放時間軸時， `游標` 只是播放的起始處，而 `播放游標` 是時間軸的即時播放位置。

`將游標移至末尾`：模仿貼上行為，貼上完畢後自動將游標調整至新事件的最末尾處。

`儲存路徑`：VEGAS 不可能憑空嵌入檔案，所有的媒體檔案都必須儲存到實際的位置，我們必須設定剪貼簿圖像的路徑。

- 預設值是：`Clipboard\<yyyyMMdd_HHmmss>.png`。也就相當於是 `%PROJECTFOLDER%\Clipboard\<yyyyMMdd_HHmmss>.png`，這裡的 `%PROJECTFOLDER%` 指的是該專案檔案的資料夾路徑。<small>（如果專案未被儲存過，則為桌面路徑。）</small>
- `<yyyyMMdd_HHmmss>` 指的是儲存檔案的時間碼格式。這裡我們硬性規定，需要將對應字元轉換為時間碼的路徑部分，必須用 `<>` 括起來，否則擴充功能將不會轉換。
  - 其他時間碼寫法詳見：https://learn.microsoft.com/dotnet/api/system.datetime.tostring

<br>

### REAPER 資料

<ImageOnDemand alt="Reaper 資料" src="ultrapaste/img006_ultrapaste_reaper_data.png" />

這個是本擴充功能的重點功能之一：完全實現了 REAPER 剪貼簿資料的匯入和匯出。你可以在 REAPER 中選擇各種物件或者軌道，`Ctrl + C` 以後，直接 `Ctrl + Shift + V` 貼上到 VEGAS 時間軸裡。

擴充功能對兩個軟體的各種參數都進行了適應：
- `REAPER 物件屬性 -> VEGAS 事件屬性`
- `REAPER 物件/軌道包絡 -> VEGAS 軌道包絡`
- `REAPER 物件拉伸標記 -> VEGAS 音訊事件拉伸/影片事件速度包絡`
- `REAPER 軌道屬性 -> VEGAS 軌道屬性`
- ...

總之，能適應的基本都適應了個遍。你也可以選擇一個 REAPER 工程檔案後 `Ctrl + C`，作為多條軌道匯入進來。

你還可以將 VEGAS 事件或軌道匯出為 REAPER 剪貼簿資料，然後在 REAPER 裡 `Ctrl + V`，實現軟體間的完全互通。

<ImageOnDemand alt="Reaper 圖例 1" src="ultrapaste/img007_ultrapaste_reaper_1.png" />

<ImageOnDemand alt="Reaper 圖例 2" src="ultrapaste/img008_ultrapaste_reaper_2.png" />

注意，由於腳本 API 限制，當 VEGAS 版本低於 15 的最終版 `VP15B416` 時，與音訊事件的音高有關的所有參數無法被轉移進入 VEGAS 裡，也無法輸出到 REAPER 剪貼簿資料。

`關閉開頭間隙`：REAPER 剪貼簿資料會帶上原始物件在 REAPER 工程裡的絕對位置。未關閉開頭間隙時，貼上起始位置 = REAPER 工程開頭位置。關閉開頭間隙後，貼上起始位置 = 第一個物件的開頭位置。

`新增影片流`：為匯入的 REAPER 物件新增影片流。

<br>

### PSD 圖像

<ImageOnDemand alt="PSD 圖像" src="ultrapaste/img009_ultrapaste_psd.png" />

`展開所有圖層`：當匯入的 PSD 圖像含有多個圖層時，自動在 VEGAS 軌道中展開。

`新增其他圖層`：為選中的單個 PSD 圖層的上方和下方補充其他所有圖層。

<br>

### 字幕

<ImageOnDemand alt="字幕" src="ultrapaste/img010_ultrapaste_subtitles.png" />

字幕也是本擴充功能的重點功能之一。你可以複製任意 `純文字` / `TXT` 檔案 / `SRT` 字幕檔案 / `LRC` 字幕檔案，貼上到 VEGAS 時間軸裡。

`產生器類型`：字幕的產生器類型。

`預設名稱`：你要使用的字幕產生器的預設名稱，需要自己提前在對應 FX 內調整並儲存預設。

對於 `PTT 字幕` 和 `(內建) 文字` 這兩個 DXT 類外掛，只能識別到使用者自己儲存的預設，不支援 VEGAS 內建的那些預設。<small>（想用的話，自己改個名重新儲存一遍就行。）</small>

`區域`：將字幕作為 VEGAS 區域匯入。

`最大字元數`：當一行內超過指定的字元數量時，自動換行。0 表示不對字元數進行限制。

`忽略單詞`：取消勾選時，擴充功能會對單詞的空格分隔做最佳化，也就是不會強行拆分一整個單詞，會嘗試在空格處換行。當然，對於中文這種基本不使用空格的語言文字，可以直接勾選上，會嚴格按照字元數量來分割。

`最大行數`：當一個字幕區塊中的行數超過一定數量時，自動拆分為新的字幕區塊。拆分長度按照原始字幕區塊均分。

`多軌道`：將單個字幕區塊中的多行拆成多個軌道。注意，擴充功能並不會對這些多個軌道進行任何的位移更改，所以這樣的字幕在預覽視窗中會重疊到一起，需要手動調整。

`預設長度`：當匯入剪貼簿純文字或者 TXT 檔案這種不帶時軸的字幕時的預設長度，單位為秒 (s)。

<ImageOnDemand alt="字幕區域" src="ultrapaste/img011_ultrapaste_subtitles_region.png" />

<p align="center">小技巧：在時間軸上提前劃好區域後直接按下快速鍵，更方便。</p>

`預設套用到選中事件`：將目前預設套用到選中事件。只支援 OFX 效果，也就是不支援 `PTT字幕` 和 `(內建) 文字`。

`T&T 到 PTT 字幕`：將選中的「字幕和文字」事件一鍵轉換為 `PTT 字幕` 事件。

<br>

### 媒體

<ImageOnDemand alt="媒體" src="ultrapaste/img012_ultrapaste_media.png" />

`新增方式`：一共分為 `跨時間`、`跨軌道`、`作為片段` 三種。與 VEGAS 內建的右鍵拖動匯入選單中的三種檔案匯入方式完全一致。

`流類型`：分為 `所有`、`僅影片`、`僅音訊` 三種。

`事件長度`：分為 `媒體自身`、`循環`、`循環取平均` 三種。其中 `循環取平均` 只有新增方式為 `跨時間` 時才有效。

`自動匯入圖像序列`：當擴充功能識別到使用者正在匯入圖像序列時（比如選中的所有圖像檔案的命名邏輯為 `000000.png - 114514.png`，且圖像寬高均相同），自動將其作為圖像序列匯入。

`新增缺失流`：為選中的事件新增缺失流。

<br>

媒體自訂匯入：

<ImageOnDemand alt="媒體自訂匯入" src="ultrapaste/img013_ultrapaste_media_custom.png" />

<p align="center">為特定的媒體檔案名稱設定匯入規則</p>

自訂可以使你為特定的媒體檔案名稱設定特殊的匯入規則。修改完以後點選 `√`，就會儲存到設定裡。不需要的設定，可以按 `×` 刪除。

<small>我這裡的 UI 邏輯寫得有些呆，將檔案規則字串作為鍵名，所以要修改檔案名稱時，必須先刪除，再重新輸入重新改，否則原先的那個不會被刪除。</small>

比如我這裡的 `1_*(*).wav;1_*(*).flac`，指的是 [UVR5](https://github.com/Anjok07/ultimatevocalremovergui) 輸出的分軌檔案的命名規則。我們這裡要求它們以跨軌道的方式，僅匯入音訊。之後，在資料夾中對著分軌檔案多選，`Ctrl + C`，再按下 `超級貼上!` 快速鍵，即可將 [UVR5](https://github.com/Anjok07/ultimatevocalremovergui) 分軌直接匯入進來。

<br>

### VEGAS 資料

<ImageOnDemand alt="VEGAS 資料" src="ultrapaste/img014_ultrapaste_vegas_data.png" />

`VEG 匯入類型`：一共分為 `開啟專案檔案`、`作為巢狀專案匯入`、`匯入專案中的媒體` 三類。

`貼上事件屬性`：當剪貼簿資料中含有 VEGAS 事件時，執行 `選擇性貼上事件屬性` 操作。

（由於版本限制，VEGAS Pro 14 及以下無法使用 `選擇性貼上事件屬性`，而只能執行 `貼上事件屬性`。）

`執行腳本`：當複製的檔案中含有 `.cs` / `.js` / `.vb` / `.dll` 檔案時，嘗試將其作為腳本執行。執行失敗會直接報錯，所以啟用該選項時，盡量不要隨便複製貼上 `.dll` 啥的進來。

`產生混合 VEGAS 剪貼簿資料`：對一般使用者沒有什麼作用，不過當你同時使用 Sony 版（Sony VEGAS Pro 13 及以下）和高版本時，這個一鍵操作會將剪貼簿資料中的 VEGAS 事件轉換為 Sony 版和 Magix 版都能夠貼上的版本。屬於實驗性功能，並不完全可靠。
