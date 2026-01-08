---
layout: doc
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

# VEGAS Pro 各種疑難雜症及其解決方案的整理
<p align="right"><strong>版本號：2026.01&ensp;&ensp;作者：<a href="https://space.bilibili.com/12355745/">zzzzzz9125</a></strong></p>

<!-- ::: warning
This page is AI-translated from the [Chinese original](/zh/) and has not been fully human-reviewed yet. If anything seems ambiguous, you can point them out on the project's [Issues](https://github.com/zzzzzz9125/VegTips/issues) page, or you can make the corrections and submit a pull request to me.

For the time being, I do not accept direct private inquiries about specific issues related to VEGAS Pro. If you have any questions, please post them on [other public forums](#xvii-vegas-communities-forums) for help. I may collect some good solutions from other forums and summarize them here.
::: -->

## 零、前言

- 本文不是專門面向初學者的基礎教學，而是針對 Vegas 各種疑難雜症的問題處理指導，因此不會過多地介紹軟體的基礎操作。本文聲明支援正版軟體，[入正渠道](#十六、軟體入正渠道) 詳見本文文末。

- 本文總共超過兩萬字，涵蓋 Vegas Pro 軟體的各種常見疑難雜症及其解決方案。本文首發於 B 站專欄 [cv27004832](https://www.bilibili.com/read/cv27004832/)，後整理成文檔，供線上預覽。如有疏漏之處，可於此專欄的評論區中指出。

- 在查閱本文時，建議參考章節目錄分類查詢問題，並合理運用 **`Ctrl + F`** 查找功能，搜尋問題或報錯的關鍵字和報錯碼，以便於快速找到解決問題的辦法。本文所給出的路徑一般以環境變數的方式表示，比如 **`%localappdata%\VEGAS Pro\`**。**將路徑文字複製貼上到 Windows 檔案總管的位址列後按 `Enter` 鍵，即可實現快速跳轉。**本文有時會提及特定版本的特定小版本號，比如 `23 build 302`，此處 `302` 即為小版本號。在 Vegas 的讀條啟動介面，就可以看到目前版本的小版本號。本文標有 **<u>底線</u>** 的內容，可以進行超連結跳轉。

- 本文採用 **CC BY-NC-SA 4.0** 協定進行授權。轉載、演繹或進行任何形式的使用時，請務必遵守 **署名、非商業、相同方式共用** 的原則。詳情請閱讀 [許可協定全文](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hant)。

<br>

## 一、關於 Vegas 首選項優化

**這裡不再列出所謂的“優化方案”，因為這些“優化方案”是沒法保證一定對 VEGAS Pro 有正面優化的，並且有些資訊可能已經過時，具有誤導性。**

**根據 Magix 官方的說法，請盡量保持預設設定，預設設定是他們認為最適合普通使用者的。**

**不存在能夠適配所有電腦的首選項設定，所以即使你在其他地方找到了那些所謂的“優化方案”，也請根據你的具體情況更改。**

**同時，我也不建議直接使用別人已經改過的、那種所謂的“優化首選項”的登錄檔或者首選項設定檔案。**

<br>

## 二、關於 Vegas 首選項和快取目錄、預設等的說明

### Vegas 首選項和快取目錄

注意，以下路徑均使用了**環境變數表示法 `% %`**。將路徑文字複製貼上到 Windows 檔案總管的位址列後按 `Enter` 鍵，即可實現快速跳轉。也附上了實際路徑可供參考。

- Vegas 的主要快取目錄：**`%localappdata%\VEGAS Pro\`**
  - 即：`C:\Users\<使用者名稱>\AppData\Local\VEGAS Pro\`
  - 按不同版本會分不同資料夾儲存，實現各版本獨立，比如 **`%localappdata%\VEGAS Pro\23.0\`**。

<br>

對於 Vegas 首選項：
- 舊版（18 及以前）儲存在登錄檔路徑 **`HKEY_CURRENT_USER\Software\Sony Creative Software\VEGAS Pro\<版本號>\Metrics\Application\`** 內，比較難手動編輯。備份時，可以通過登錄檔編輯器 `regedit` 工具，手動備份該登錄檔路徑的所有內容。

- 新版（19 及以後）儲存在快取目錄 **`%localappdata%\VEGAS Pro\<版本號>\persist.prefs`** 檔案內，檔案內容格式為 `XML`，容易手動編輯。可以複製該檔案以備份。

<br>

其他的跟 Vegas 有關的一些設定和預設檔案目錄，可供自行備份：

- 自己儲存的 FX 預設、外掛程式鏈預設、FX 收藏夾、算繪範本等：`%appdata%\VEGAS\`  
  即：`C:\Users\<使用者名稱>\AppData\Roaming\VEGAS\`

- Vegas 的視窗佈局設定、鍵盤設定等：`%appdata%\VEGAS Pro\`  
  即：`C:\Users\<使用者名稱>\AppData\Roaming\VEGAS Pro\`

- 自己儲存的 OFX 外掛程式的 FX 預設：`%userprofile%\Documents\OFX Presets\`  
  即：`C:\Users\<使用者名稱>\Documents\OFX Presets\`  
  或者 OneDrive 路徑：`C:\Users\<使用者名稱>\OneDrive\Documents\OFX Presets\`

vv13 及以下的版本的快取目錄會帶 Sony 資料夾，如 **`%localappdata%\Sony\VEGAS Pro\`** 等。

**有關其他重要位置路徑，可參考：[https://www.vegascreativesoftware.info/us/tutorials/posts--139290/](https://www.vegascreativesoftware.info/us/tutorials/posts--139290/)**

<br>

### Vegas 外掛程式鏈預設的使用、匯入和匯出

1. 安裝 `索尼預設管理器`。（如果需要將外掛程式鏈匯入或匯出為 `.sfpreset` 檔案）

  - 下載連結：https://web.archive.org/web/20160826164938/http://dspcdn.sonycreativesoftware.com/current/extras/presetmngr20k.exe

2. 如圖所示：

<ImageOnDemand alt="外掛程式鏈" src="vegtips/image001_plugin_chain.png" />

<p align="center">vv 外掛程式預設管理器的使用圖解 0.2 版</p>

<br>

### Vegas 內部首選項的進入方法

- vv18 及以上：按住 **`Shift`**，進入上方選單列的 **`選項 -> 內部`**。

- vv17 及以下：按住 **`Shift`**，進入上方選單列的 **`選項 -> 首選項`**，切換到 **`內部`** 選項卡。

<br>

## 三、由某些 bug 導致的崩潰當機、彈報錯等問題的解決辦法

（本段提供的解決辦法屬於萬金油，遇到問題就可以試一下，並且不保證一定能解決問題。）

### 1. 關閉 GPU 加速

**`首選項 -> 影片`**，在 **`影片處理的 GPU 加速`** 這一欄中選擇 **`關閉`**。這個選項主要用來管理影片特效是否使用 GPU 加速，雖然在 GPU 加速的加持下，特效的預覽和算繪速度會流暢一些，但是在低版本的 Vegas 中的 **bug 比較多，容易造成崩潰**。一般解決問題的時候首先嘗試**關閉 GPU 加速**。對於高版本 Vegas（比如 `22 build 250`），在顯示卡效能比較好，並且沒有其他問題的情況下仍然建議開啟。

<br>

### 2. 關閉 Vegas 的報錯彈窗功能

比較常見的情況是：執行 Vegas 時 / **點選左上角 `檔案 -> 算繪為` 時，直接彈出報錯彈窗**。

<ImageOnDemand alt="問題報告" src="vegtips/image002_problem_report.png" />

**這時候請先務必勾選下方的 `顯示問題詳細資料`（`Show Problem Details`），獲取報錯內容。**

有時可能是報錯彈窗功能本身所造成的問題，將此功能完全關閉可以解決。

關閉報錯彈窗功能的兩種辦法：

- **在 Vegas 安裝目錄下找到 `ErrorReportClient.exe` 這個檔案，隨便重新命名一下**。

- 在 Vegas 安裝目錄下找到 **`PRSConfig.exe`** 這個程式並執行，選 **`禁用`**（`Disabled`）。

兩個辦法任選一個即可關閉 Vegas 的報錯彈窗功能。

有些時候問題可能仍然無法解決，請再次開啟它，並重點觀察和分析報錯內容。**報錯內容裡有時能推斷出一些有用的關鍵資訊，見下文 [某些報錯的問題排查思路](#8-某些報錯的問題排查思路)。**

<br>

### 3. 重裝 Vegas

重裝 Vegas 只針對 Vegas 軟體本體安裝不完全或者程式檔案損壞這類問題，所以一般不太會用得到。只進行重裝 Vegas 操作並不會重設首選項。

<br>

### 4. 重裝硬體驅動

軟體出問題也可能是硬體驅動造成的。音訊問題可以嘗試重裝音效卡驅動，影片問題可以嘗試重裝顯示卡驅動。

<br>

### 5. 重設首選項

遇到一些莫名其妙的問題，比如**音訊匯入進去以後完全是雜音**，這種情況可以嘗試**重設首選項**解決。

**重設後會清理掉：【當前 Vegas 版本的所有首選項和快取】。**

首選項的常規辦法：按住 `Ctrl + Shift` 並執行 Vegas，會彈出“是否重設”的選項，勾選 `刪除所有快取的應用程式資料`，點 `是`。

<ImageOnDemand alt="重設" src="vegtips/image003_reset.png" />

<p align="center">是否重設？(Y/N)</p>

不過依上述辦法這樣重設以後不會產生首選項設定的備份，原先的首選項設定將會完全清空，風險較大。所以我建議在重設前做好首選項的備份，見 [Vegas 首選項和快取目錄](#vegas-首選項和快取目錄)。

<br>

### 6. 安裝 Microsoft Visual C++ 和 .NET Framework 運行庫

Microsoft Visual C++ 運行庫：https://learn.microsoft.com/cpp/windows/latest-supported-vc-redist

.NET Framework 修復工具：https://support.microsoft.com/topic/942a01e3-5b8b-7abb-c166-c34a2f4b612a

<br>

### 7. 換版本

**Vegas 版本與你的電腦是否合適，這個問題很隨緣。**

公認最穩定的版本應該是 vv13，追求穩定性和功能性兼顧的建議用 **vv18**，新版不保證一定會很穩。自 `21 build 300` 的影片引擎更新以來，Vegas 的影片解碼和算繪慢的問題正在逐步得到解決，這一更新會一直持續到 22 最終版。**目前我最推薦用 22 最終版（`22 build 250`），有很大的改進。**最新版的 23 仍然不是很穩定。

VEGAS 版本更新歷史：https://www.vegascreativesoftware.info/us/forum/posts--104998/

<br>

### 8. 某些報錯的問題排查思路

在嘗試了本文中幾乎所有辦法（特別是 [Vegas 軟體執行相關的 Q&A](#四、vegas-軟體執行相關的-q-a) 這一章的辦法）以後，報錯仍然無法解決，可嘗試這一節的辦法。也有某些報錯，如 `0xC0000005`，是沒有固定確切的原因而引發的報錯，遇到這種報錯，使用本文中提到的大部分解決辦法，仍然沒有用，是再正常不過的了。這時想去找該報錯的常見解決方法，直接百度對應報錯碼，你會搜到很多解決方案，但找個能真正解決的，可謂是大海撈針。本節提供一個大致的報錯問題排查思路：

1. 找到報錯內容。如果開了 [報錯彈窗](#2-關閉-vegas-的報錯彈窗功能)，可以勾選報錯彈窗的`顯示問題詳細資料`（`Show Problem Details`），可以得到報錯內容。即使關閉了報錯彈窗功能，有時也可以得到一些報錯內容。這兩個報錯內容可能有所不同，會有額外的資訊，建議同時檢查一下。

2. 分析報錯內容。要找到兩個關鍵點：報錯源和報錯碼。報錯源可以看 `Fault Module` 這一行。

    - 比如報錯源指向某個軟體的元件，可以試著把這個軟體解除安裝了。
    - 報錯源指向 Vegas 自己的元件，可以試著重裝 Vegas 或者換 Vegas 版本。
    - 報錯源指向系統元件，就有些不確定了。

    報錯碼可以看 `0x` 開頭的一串 8 位的十六進位制數字。比如：

    - `0xC06D007F`，可以考慮是影片外掛程式的問題，把 OFX 外掛程式從 OFX 資料夾裡移出來。
    - `0xE0434352`，可以考慮是 .NET 元件的問題，試著修復一遍 .NET Framework，或者是擴充無法載入的問題，把擴充從擴充資料夾裡移出來。

    還有一些資訊，比如報錯內容中明確提及某個特定外掛程式或者 `OFX` 這個關鍵詞，也可以考慮是影片外掛程式的問題。  

    上述辦法均無效的情況下，只能在網上搜尋報錯碼找各種解決方案了，甚至有些問題可能只有重裝一遍系統才能解決。

<br>

## 四、Vegas 軟體執行相關的 Q&A

Q：Vegas 軟體本體**如何漢化**？

A：Vegas 軟體程式內部一共自帶 `英德法葡西波中日韓` 9 種語言，但是官網提供的 Vegas 本體安裝包，就只有國際語言版，即上述的前 5 種語言，**不含中文**。有以下三種漢化途徑：

1. **使用中文安裝包**。建議在 [入正](#十六軟體入正渠道) 前仔細檢視語言支援列表，看是否含有中文。比如目前官網提供的版本不包含中文，而國內代理思傑馬克丁提供的版本以及 Steam 版均含中文。否則，只能嘗試後兩種途徑。

2. **使用其他使用者製作的漢化包**。

3. **修改登錄檔**。修改登錄檔可以呼叫出 Vegas 軟體內部自帶的中文，但相較於前兩種途徑，這個自帶的中文可能會有不全、不準確的問題。

**手動修改登錄檔**的步驟：

在**確保已安裝 Vegas 本體**的前提下，按 `Win + R` 鍵開啟“執行”，輸入 `regedit` 開啟登錄檔編輯器。Vegas 的語言設定儲存在以下登錄檔項的 `ULangID` 值內：

- 20 及以上：

```text
HKEY_LOCAL_MACHINE\SOFTWARE\VEGAS Creative Software\VEGAS Pro\23.0\Lang
HKEY_LOCAL_MACHINE\SOFTWARE\VEGAS Creative Software\VEGAS Creative Software Video Plug-In Pack\1.0\Lang
HKEY_LOCAL_MACHINE\SOFTWARE\VEGAS Creative Software\VEGAS Creative Software OFX GPU Video Plug-in Pack\1.0\Lang
HKEY_LOCAL_MACHINE\SOFTWARE\VEGAS Creative Software\Error Reporting Client\1.0\Lang
```

- 19 及以下：
```text
HKEY_LOCAL_MACHINE\SOFTWARE\Sony Creative Software\VEGAS Pro\19.0\Lang
HKEY_LOCAL_MACHINE\SOFTWARE\Sony Creative Software\Sony Vegas Video Plug-In Pack\1.0\Lang
HKEY_LOCAL_MACHINE\SOFTWARE\Sony Creative Software\Sony Vegas OFX GPU Video Plug-in Pack\1.0\Lang
HKEY_LOCAL_MACHINE\SOFTWARE\Sony Creative Software\Error Reporting Client\1.0\Lang
```

其中 `23.0` 和 `19.0` 代表當前 Vegas 版本號。第一行是最主要的軟體介面語言設定，不過其他三個也建議同時改。

<ImageOnDemand alt="語言登錄檔" src="vegtips/image004_language_reg.png" />

若之前安裝的是英文版，則 `ULangID` 的預設值應該是十六進位制的 `409`（十進位制 `1033`）。將其**改成中文的十六進位制的 `804`（十進位制 `2052`）**即可。

<small>
其他語言編號詳見微軟的文件：<a href="https://learn.microsoft.com/openspecs/windows_protocols/ms-lcid">https://learn.microsoft.com/openspecs/windows_protocols/ms-lcid</a><br>
</small>

如果**改完語言登錄檔以後重新啟動 Vegas，顯示 `錯誤代碼: -1`，無法正常啟動**，可轉到 Vegas 的安裝目錄中的 `language` 資料夾（預設為 `C:\Program Files\VEGAS\VEGAS Pro 23.0\language\`，其中 `23.0` 是版本號），將其中任意一個 `local_xx_XX.cfg` 檔案（比如美式英語的 `local_en_US.cfg`）**重新命名成 `local_zh_CN.cfg`**。

<small>
另一個有用的工具 <code>Vegas Language Changer</code>：<a href="https://github.com/IZH318/Vegas-Language-Changer">https://github.com/IZH318/Vegas-Language-Changer</a>
</small>

Magix 旗下的 ACID Pro 等軟體也同理，此處不再贅述。

成功啟動 Vegas 後，若發現自帶影片外掛程式的效果名稱仍然為英文，可以嘗試 [清理外掛程式快取](#影片外掛程式相關的-q-a)。

<br>

Q：錯誤：安裝時提示**電腦需要重啟，才能繼續安裝**？  
`Setup has detected that the system is currently waiting for a reboot to complete a previous installation or update. To avoid problems, please reboot your system before installing.`

<ImageOnDemand alt="安裝時的重啟問題" src="vegtips/image005_install_reboot.png" />

A：先試試重啟電腦。若重啟後無法解決，則需要更改登錄檔。開啟登錄檔編輯器，找到 **`HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session Manager`** 項，**刪除 `PendingFileRenameOperations`** 這一值，之後重啟電腦。

<small>
參見：<a href="https://tieba.baidu.com/p/4339996851">https://tieba.baidu.com/p/4339996851</a><br>
</small>

<br>

Q：錯誤：**`安裝過程中發生 -2147163964。未能註冊模組 xxxxx.dll`**。

<ImageOnDemand alt="安裝時的 dll 註冊問題" src="vegtips/image006_install_dll.png" />

A：這種情況**重啟一遍電腦再安裝**一般就能解決。仍無法解決時可以**試試安裝其他版本**。

<br>

Q：Vegas 怎麼點都無法啟動，**連載入視窗都不顯示**？

A：這個是老問題，**Vegas 卡後臺程序了**。**開啟工作管理員，找到所有 Vegas 後臺程序並殺除，然後嘗試重新執行 Vegas。**

<br>

Q：Vegas 在啟動時，“**正在初始化 GPU 加速的影片處理...**”這一步**崩潰/閃退**？

A：可以先嘗試重裝顯示卡驅動。若重裝顯示卡驅動無法解決，也可以嘗試這個修改登錄檔辦法。開啟登錄檔編輯器，分別找到 **`HKEY_LOCAL_MACHINE\SOFTWARE\Khronos\OpenCL\Vendors`** 項的 **`IntelOpenCL64.dll`** 值和 **`HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Khronos\OpenCL\Vendors`** 項的 **`IntelOpenCL32.dll`** 值。將這兩個值的資料**從 `0` 改為 `1`**，重啟 Vegas 看能否解決。

<small>
參見：<a href="https://www.bilibili.com/video/BV11z411i74a/">https://www.bilibili.com/video/BV11z411i74a/</a><br>
</small>

<br>

Q：Vegas 在啟動時，“**正在影片外掛程式工廠...**”這一步**崩潰/閃退（報錯碼 `0xC06D007F`）**？

A：這一步是在載入影片外掛程式，一般可以考慮是 OFX 影片外掛程式的掃描問題，轉到 OFX 路徑：**`C:\Program Files\Common Files\OFX\Plugins\`，把可能出現問題的外掛程式從這個資料夾移出來，再嘗試啟動 Vegas**。確定能夠正常啟動後，可以再試著把檔案重新移回去，或者重裝這個外掛程式等。有具體報錯內容的話，可以試著從中找到對應外掛程式名稱的關鍵詞。  
**<small>（建議優先排查紅巨星宇宙外掛程式 `Red Giant Universe`，大部分人遇到的啟動時崩潰問題都由它導致。）</small>**

<br>

Q：Vegas 在啟動時，“**正在掃描 VST 外掛程式...**”這一步**卡住/崩潰/閃退**？

A：可以嘗試**在啟動 Vegas 時禁用 VST 掃描**，方法如下：對著 Vegas 的**捷徑 `右鍵 -> 內容`**，在 **`目標`** 這一欄的最後加上 **` /NOVSTGROVEL`** 命令（**注意要和前面隔開空格**），之後執行這個捷徑。確定能夠正常啟動後，可以將有問題的外掛程式從 [VST 路徑](#vst-相關路徑)裡挪開，單獨存放，等等。

<ImageOnDemand alt="NOVSTGROVEL" src="vegtips/image007_novstgrovel.png" />

<br>

Q：Vegas 在啟動時，“**正在初始化 DirectX 外掛程式...**”這一步**卡住/崩潰/閃退**？

A：同上，可以嘗試**在啟動 Vegas 時禁用 DirectX 外掛程式掃描**，命令為 **` /NODXGROVEL`**。

<br>

Q：Vegas 在啟動時，“**正在初始化 UI...**”這一步**崩潰/閃退（報錯碼 `0xE0434352`）**，或者**彈出 Vegas 主程式視窗以後立即閃退**？

A：有可能是擴充的問題，嘗試**刪除 `C:\ProgramData\VEGAS Pro\Application Extensions\`** 等 [擴充資料夾](#十二、腳本-擴充相關) 裡的檔案。可以全部刪除，也可自行排除是哪個擴充的問題。

<br>

Q：Vegas 在啟動時報錯：**`無法初始化腳本宿主`** / 其他 **.NET Framework** 常見報錯碼（比如 **`0xE0434352`**）？

A：Vegas 腳本基於 .NET Framework，可以試著執行 .NET Framework 修復工具：https://support.microsoft.com/topic/942a01e3-5b8b-7abb-c166-c34a2f4b612a

<br>

Q：Vegas 在啟動時，“**正在建立視窗...**”這一步**崩潰/閃退（報錯碼 `0xC0000005`，且報錯源是 `C:\WINDOWS\SYSTEM32\ntdll.dll`）**？

A：請到 **`控制台 -> 程式 -> 程式和功能`** 中確認是否安裝過 **MSVC 1450 運行庫**，即 **`Microsoft Visual C++ 2015-2022 Redistributable` 的 x86 以及 x64 的 14.50 版本**。微軟分發了會導致 Vegas 直接崩潰的 **MSVC 1450 運行庫**，該版本的運行庫在安裝程式設計軟體 **Visual Studio 2026** 時會自動安裝，也有使用者因為其他原因，安裝了該運行庫。這個問題是微軟導致的，需要等待微軟的更新才能完全修復。經過一些受影響使用者的測試，只解除安裝該運行庫可能並沒有用。以下是一種可行的臨時解決辦法（**不想研究 dll 檔案怎麼來的話，可以直接跳到最后一步，使用我提供的 `x64` 版 `vcomp140.dll`**）：

1. 轉到 Visual Studio 下載頁：[https://visualstudio.microsoft.com/downloads/](https://visualstudio.microsoft.com/downloads/)，找到並下載安裝 Visual Studio 2022 生成工具（檔案名是 `vs_BuildTools.exe`）。

2. 在安裝過程中，會提示你是否安裝額外的東西，此時轉到 `單個元件`，搜尋 `MSVC`，找到 `MSVC v143 - VS 2022 C++ x64/x86 生成工具(最新)` 並勾選，然後繼續安裝。

<ImageOnDemand alt="MSVC 143 安裝" src="vegtips/image008_msvc143.png" />

3. 安裝成功後，轉到 MSVC 的安裝路徑：`C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Redist\MSVC\`，其中會有兩個資料夾：`v143` 和 `14.44.35112`（具體取決於你安裝的版本號），形如後者 `14.44.35112` 的是要找的資料夾。

4. 進入 `14.44.35112\onecore\x64\Microsoft.VC143.OpenMP` 資料夾，找到 **`vcomp140.dll`** 並複製，貼上到你的 Vegas 安裝目錄中，之後重啟 Vegas，看問題是否解決。

<small>
<code>x64</code> 版 <code>vcomp140.dll</code> 下載連結：<a href="/downloads/fixes/vcomp140.dll">vcomp140.dll</a><br>
如果你正在使用 <code>ARM</code> 版 Windows，請選擇 <code>ARM</code> 資料夾，而不是 <code>x64</code> 資料夾。如果你不知道 <code>ARM</code> 是什麼，那你應該是 <code>x64</code> 使用者，請使用 <code>x64</code> 版。<br>
參見：<a href="https://www.vegascreativesoftware.info/us/forum/posts--149890/#ca943290">https://www.vegascreativesoftware.info/us/forum/posts--149890/#ca943290</a><br>
</small>

<br>

Q：開啟 Vegas 後**出現噪音/沒聲音了/…**？

A：**轉到 `控制台 -> 硬體和聲音 -> 聲音`，開啟當前播放裝置的 `內容`，在 `進階` 選項卡的 `獨佔模式` 中取消勾選 `允許應用程式獨佔控制該裝置`，或者將`預設格式`切換到 `2 通道，24 位，44100Hz`。**如果不行，可以試試**重裝音效卡驅動**。

<ImageOnDemand alt="音訊裝置" src="vegtips/image009_sound_device.png" />

<br>

Q：**某個工程檔案一開啟就報錯/崩潰/閃退**？

A：可以試著**將該工程用到的任意媒體檔案重新命名一下**，不讓工程掃描到。重新開啟工程檔案時，**提示找不到媒體檔案，這時不要管直接忽略，等成功開啟後，再重新命名回去/替換回去**。

<small>
參見：<a href="https://tieba.baidu.com/p/7511708251">https://tieba.baidu.com/p/7511708251</a><br>
</small>

<br>

Q：**Vegas 多開程序後會導致崩潰**？

A：這個問題會發生在所有的 Vegas 版本中，是特定的介面佈局導致的。當預覽視窗處於**未停靠（懸浮）狀態**時，容易發生這樣的情況。臨時的解決辦法是**在開啟新的 Vegas 程序前，把舊的 Vegas 程序的預覽視窗關閉或者停靠**，以避免可能的崩潰問題。

<small>
參見：<a href="https://www.vegascreativesoftware.info/us/forum/posts--148817/">https://www.vegascreativesoftware.info/us/forum/posts--148817/</a><br>
</small>

<br>

Q：**Vegas 啟動後，報 WebView 錯誤（`msedgewebview2.exe`，或 `WebView2 初始化失敗`等）**？

A：VEGAS Hub 相關功能是基於微軟的 Edge WebView 的。如果**不需要用 Hub 功能，只需到選單列的 `檢視 -> 視窗` 中把 VEGAS Hub 視窗關閉**即可。也可以嘗試刪除 [Vegas 快取目錄](#vegas-首選項和快取目錄)裡的 `WebView2` 資料夾，即 **`%localappdata%\VEGAS Pro\23.0\WebView2`** 這個路徑，其中 `23.0` 代表當前的 Vegas 版本號。

<br>

Q：<sup>**vv19**</sup> 工程做了一會兒，Vegas 視窗突然**隨機出現花屏，UI 呈現故障效果，軟體變得卡頓，無法繼續做工程**，只能重啟 Vegas？

A：這個是 **vv19 舊版（如 `19 build 341`）**特有的花屏問題，**更新到 `19 build 651`** 可解決。

<small>
參見：<a href="https://www.vegascreativesoftware.info/us/forum/posts--131391/">https://www.vegascreativesoftware.info/us/forum/posts--131391/</a><br>
</small>

<br>

Q：<sup>**vv19、vv20**</sup> Vegas 讀完載入框後直接閃退，【**沒有任何報錯彈窗**】？

A：檢查 Vegas 的小版本號，是否為 `19 build 648` 及以前版本或 `20 build 402` 及以前版本。

這個範圍內的 Vegas 版本會有【**讀條後直接閃退**】，【**斷網執行或者改系統日期後才能成功開啟**】的惡性 bug。

解決辦法是**19 更新到 `19 build 651`，20 更新到 `20 build 403` 及以上版本**。（注：19 最終版為 `19 build 651`，20 最終版為 `20 build 411`。）

<br>

Q：<sup>**`22 build 122` 及以上**</sup> Vegas 無法執行，也沒有載入框？

A：Windows 更新的問題，下載並執行 vc_redist.x86.exe 和 vc_redist.x64.exe，修復 C++ 運行庫：https://learn.microsoft.com/cpp/windows/latest-supported-vc-redist

據反饋，也可能需要更新其他軟體（如 OBS 等）。

<small>
參見：<a href="https://www.vegascreativesoftware.info/us/forum/posts--147255/">https://www.vegascreativesoftware.info/us/forum/posts--147255/</a><br>
</small>

<br>

Q：<sup>**法語版**</sup> 法語版本的 VEGAS Pro 在啟動時崩潰？

A：這是**法語版本特有**的問題，只能**解除安裝後重裝為英語版本**。Magix 打算修復它，但毫無頭緒。如果有其他能夠復現的使用者，可以聯絡 Magix。

<small>
參見：<a href="https://www.vegascreativesoftware.info/us/forum/posts--147150/#ca926950">https://www.vegascreativesoftware.info/us/forum/posts--147150/#ca926950</a><br>
</small>

<br>

## 五、檔案匯入相關

### 檔案無法正常匯入/匯入進去亂碼/閃綠色等情況的一般處理思路：

#### 1. 啟用/關閉舊版 AVC 和 HEVC 解碼

- vv18 及以上：**`首選項 -> 檔案 I/O`，啟用/關閉  `舊版 AVC 解碼` 和 `舊版 HEVC 解碼`**。

- vv15-17：進入 [內部首選項](#vegas-內部首選項的進入方法)，搜尋 `Reader`，分別找到：
  - `Use So4 Audio Reader for Intermaediate/HEVC`
  - `Enable So4 Compound Reader for AVC/M2TS`
  - `Enable Mx Compound Reader for HEVC/ProRes` <sup>僅 17</sup>

  `TRUE` = `使用新版解碼`，`FALSE` = `使用舊版解碼`。預設為 `TRUE`。可嘗試更改此選項。

- vv14 及以下完全使用的是舊版解碼，無法更換解碼器。

自 `21 build 300` 以來，“舊版解碼器”與“新版解碼器”的含義完全互換。原先的“舊版 AVC 和 HEVC 解碼器”已經變成了新版的預設解碼器，而原先的“新版 AVC 解碼器”變成了“舊版 AVC 解碼器”，原先的“新版 HEVC 解碼器”則變成了“實驗性 HEVC 解碼器”。

遇到解碼問題，比如媒體檔案扔進去，**整個變綠或者黑屏**了，或者**扔進去沒有影片流**等影片無法正常解碼的情況，甚至是**影片的音訊解碼問題**（也有人遇到過），可以嘗試**啟用或者關閉這兩個舊版解碼**。

如仍無法解決，可以嘗試切換下面的 **`硬體解碼器`** 選項（**可能需要關閉舊版解碼**），也有可能可以解決。

<br>

#### 2. 禁用重采樣

左上角 `檔案 -> 內容`，在 `重采樣` 這一欄中選擇 **`禁用重采樣`**。

禁用重采樣主要針對的是**和幀有關的問題**，如果啟用了重采樣功能，比如將 30fps 的素材扔進 60fps 的工程裡，**Vegas 就會自動在原素材的兩幀之間生成幀混合**（肉體上逐幀預覽，可以看見類似於**兩幀淡入淡出**的效果）。**此功能可能會造成幀的生成錯誤，造成閃幀（閃綠色/黑色）等情況，一般建議禁用。**

在 vv13 及以前的版本中，`專案內容` 裡**無法直接修改整個工程的重采樣設定，只能選中時間軸上的事件，`右鍵 -> 開關 -> 禁用重采樣`**。

<br>

#### 3. 安裝對應編解碼器

比如 QuickTime 相關格式要求安裝 QuickTime 7.7.9，並在安裝時勾選 QuickTime 外掛程式。

關於是否安裝 K-Lite 編解碼器包這個問題，仍然有爭議性。Vegas 官方論壇中的一些使用者說“有可能會和 Vegas 自帶的編解碼器衝突”，不建議安裝。

<br>

#### 4. 媒體檔案重新轉碼

**媒體檔案本身沒法匯入/匯入進去有解碼問題/匯入媒體檔案後很卡**等情況，如果上述幾種辦法都沒有解決，可以嘗試使用轉碼軟體進行重新轉碼。建議的轉碼設定：影片編碼為 AVC、音訊編碼為 AAC、封裝格式為 mp4，恆定幀率。如果只是音訊解碼有問題，也可以**直接轉出音訊 wav 檔案**，再扔回 Vegas 裡，與原影片按 G 打組。

<br>

#### 5. 重設首選項

比較常見的情況：**音訊匯入進去完全是雜音**。這種情況下可以嘗試 **[重設首選項](#5-重設首選項)**。

<br>

### 檔案匯入相關的 Q&A

Q：Vegas**沒辦法從資料夾裡拖放匯入檔案**，只能用 `開啟` 按鈕？

A：如果是用管理員許可權執行的 Vegas，那就會造成無法拖放檔案的情況。解決辦法是**不用管理員許可權執行 Vegas**。

注意，如果你使用的是**便攜版 Vegas（標有 `Portable` 字樣）**，就可能必須得用管理員許可權才能啟動 Vegas，會導致沒法拖放匯入檔案。某些人提供的“解決辦法”是通過修改登錄檔關閉 UAC 模式（Windows 使用者帳戶控制）這樣解決的，但此處不建議使用此辦法，**建議更換為常規版本，不要使用便攜版的 Vegas**。

**便攜版 Vegas 的幾個問題：必須用管理員許可權執行；程式不能多開；不識別系統環境變數；某些外掛程式（比如 [Voukoder 算繪外掛程式](#算繪外掛程式-voukoder-推薦) 等）需要手動放置連接器，不能自動安裝。能不用，儘量不用。**

<br>

Q：嘗試匯入檔案時報錯：“**警告：開啟一個或多個檔案時發生錯誤。檔案無法開啟。請確保檔案存在並且您對此檔案/資料夾有存取許可權。**”

A：請檢查 Vegas 軟體本體的**安裝路徑**中是否**只含有**【**半角英文字元（可以包含空格）**】。如果含有任何中文之類的其他字元，**解除安裝重裝 Vegas，更換到只含半角英文字元的路徑**。

<br>

Q：想**匯入 mkv 媒體檔案**，無法匯入。

A：vv17 及以上版本，可以在 **`首選項 -> 檔案 I/O` 中 `啟用 MKV 讀取器`**，重啟 Vegas 後再試試看能否成功匯入。

此功能 bug 較多，因此也有可能出現無法正常匯入的情況。無法正常匯入時，只能用其他軟體提前轉碼。

注：`21 build 187` 及以上版本已經預設支援 mkv 檔案匯入，無須手動啟用。

另：關於 mkv 檔案的轉碼

一個影片檔案可以看作是有兩層，裡邊那一層是編碼流，外邊那一層是容器。因此無法匯入檔案的情況也有兩種，一種是編碼流不支援，一種是容器不支援。

比如一個影片編碼流為 **AVC（H.264）**，容器為 **mkv** 的檔案，無法匯入進 Vegas，這個是**容器不支援**的情況，**裡面的 AVC 編碼流是支援**的，因此我們在轉換檔案時可以選擇只轉換外邊的容器，而不轉換裡邊的編碼流。如果是 [FFmpeg](https://ffmpeg.org/)，則可用 `ffmpeg -i input.mkv -c:v copy output.mp4` 這樣的命令實現此操作。如果是其他帶 GUI 的格式轉換軟體（比如 [`HandBrake`](https://handbrake.fr/)），則被稱作 `複製流`（`Copy`）。`複製流` 不涉及到影片編碼的轉換，轉換過程很快，因此非常推薦。

又比如一個影片編碼流為 **VP9**，容器為 **mkv** 的檔案，無法匯入進 Vegas，這個是編碼流和容器都不支援的情況，因為 Vegas 本來就不支援 VP9 編碼。即使通過上述“複製流”的辦法轉換成 mp4 檔案，也無法匯入進 Vegas。這種情況**只能同時轉換編碼流和容器**。比如下載 YouTube 上的影片得到的 mkv 檔案，其影片編碼流有可能是**VP9**，這樣的檔案就只能同時轉換編碼流和容器，這樣才能正常匯入進 Vegas 裡。如果不清楚影片檔案內具體是什麼編碼，可以用 [格式檢視工具 MediaInfo](https://mediaarea.net/en/MediaInfo) 檢視。

<br>

Q：由**OBS**錄製的影片匯入進 Vegas，**影片長度有問題，特別短**？

A：原因在於 OBS 中使用了分片 MP4 作為錄製儲存檔案，而 Vegas 無法正常解碼。可以**在 OBS 設定中改為其他輸出格式**。如果已經這樣錄製了素材，則可以使用上述的複製流辦法，比如 `ffmpeg -i input.mp4 -c copy output.mp4`，這樣也能正常匯入進 Vegas。

<small>
參見：<a href="https://www.vegascreativesoftware.info/us/forum/posts--144992/">https://www.vegascreativesoftware.info/us/forum/posts--144992/</a><br>
</small>

<br>

Q：**無法匯入某些編碼的 mov 檔案**？

A：首先你要確保已經安裝了 QT Lite 或者 QuickTime。一般推薦安裝 **QT Lite 4.1.0** 比較方便。對於 vv17 及以上的版本，由於新解碼器已支援 ProRes 編碼的 mov 檔案，而 QuickTime 的其他所有編碼不再被預設支援，需要在 **`首選項 -> 停止使用的功能`** 中 **`啟用 QuickTime 外掛程式`**，才可以正常匯入其他 QuickTime 格式的 mov 檔案。

注意，如果你安裝的是 Apple 官網的 `QuickTime 7.7.9`，請在安裝時勾選 `QuickTime 外掛程式`。

**自 23 大版本以來，Vegas 已經實質上地放棄了對 QuickTime 的相容，再也無法匯入和算繪 QuickTime 編碼的 mov 檔案。**

<br>

Q：匯入原本**帶 alpha 通道的 mov 或者 png 格式**的媒體檔案後，在 Vegas 中**無法正常顯示 alpha 透明通道**？

A：在 Vegas 中對著**媒體檔案或事件 `右鍵 -> 內容`，上面切換到 `媒體` 選項卡，找到 `alpha 通道` 這一欄，改為 `直接(無蒙版)`**。  
<small>
（注：<code>alpha 通道</code> 這一欄，<b>只要不選 <code>未定義</code> 或者 <code>無</code></b>，應該都能正常顯示 alpha 通道。）
</small>

另外，在 **`專案媒體`** 視窗中，是可以多選修改媒體屬性的，也可以利用這個辦法統一修改。

<br>

Q：在**網頁端抖音等平臺**，直接用 IDM 等下載工具下載得到的影片（**音訊編碼為 `AAC LC SBR (HE-AAC)`**），匯入進 Vegas，**音訊會隨機出現錯亂，有雜音**，或者**被錯誤識別成了單聲道**？

A：這個**完完全全是 Vegas 軟體的 bug**，並且截至目前的最新版（`23 build 302`）仍未修復。**經過測試，上述其他所有辦法均無效，只能通過轉碼出音訊檔案後再匯入進 Vegas 來解決。**通過抖音 APP 下載的影片不會受到影響。

<small>
參見：<a href="https://www.vegascreativesoftware.info/us/forum/posts--140457/#ca884682">https://www.vegascreativesoftware.info/us/forum/posts--140457/#ca884682</a><br>
</small>

<br>

Q：4:3 的影片/圖片媒體檔案匯入進去，**被左右拉伸**成 16:9 的了，怎麼改回去？

A：這是由於 `4:3` 的媒體檔案匯入進 `16:9` 的工程裡，可能會因一些特定配置參數而被自動拉伸至 `16:9`。解決辦法是**對著媒體檔案 `右鍵 -> 內容`，切換到 `媒體` 選項卡，找到 `像素高寬比` 這一欄，從 `1.3333` 改到 `1`，然後點選 `流` 一欄右邊的儲存按鈕<sup>（`將設定儲存到影片配置檔案以供將來進行自動檢測`）</sup>，這樣就可以保證之後匯入的 `4:3` 媒體檔案不再被自動拉伸**。同樣地，該屬性也能在 **`專案媒體`** 視窗中，多選媒體檔案後再修改。

<ImageOnDemand alt="影片配置檔案按鈕" src="vegtips/image010_profile_button.png" />

<p align="center">其實“像素高寬比”的翻譯是錯誤的，應該為“像素寬高比”，即“寬:高”。</p>

如果顯示“**嘗試儲存影片配置檔案時出現未知錯誤**”：

1. 按下 **`Win + R`** 進入 `執行`。

2. 輸入（`23.0` 等數字指 Vegas 版本號，檔案路徑外邊要帶英文半角引號 `""`）：
  - **`notepad "C:\ProgramData\VEGAS Pro\23.0\Vegas profiles.ini"`** <sup>17 及以上</sup>
  - **`notepad "C:\ProgramData\VEGAS\VEGAS Pro\16.0\Vegas profiles.ini"`** <sup>14 及以上</sup>
  - **`notepad "C:\ProgramData\Sony\Vegas Pro\13.0\Vegas profiles.ini"`** <sup>13 及以下</sup>

3. 輸入完後不要點選 `確認`，而是按下 **`Ctrl + Shift + Enter`**，這樣就能用管理員許可權開啟該檔案。手動修改 `4:3` 的預設匯入配置，將該檔案裡的 `1.3333333333` 值全改成 `1`，儲存。
  - 注意，不使用管理員許可權開啟檔案會導致記事本無法寫入原檔案，而彈出 `另存為` 視窗。

<ImageOnDemand alt="影片配置檔案編輯 1" src="vegtips/image011_profile_edit_1.png" />

<ImageOnDemand alt="影片配置檔案編輯 2" src="vegtips/image012_profile_edit_2.png" />

<small>
參見：<a href="https://www.vegascreativesoftware.info/us/forum/posts--128760/">https://www.vegascreativesoftware.info/us/forum/posts--128760/</a><br>
</small>

<br>

## 六、軟體操作和顯示相關的 Q&A

Q：**影片預覽視窗怎麼什麼都看不見了**？

<ImageOnDemand alt="修剪器還是預覽？" src="vegtips/image013_trimmer_or_preview.png" />

A：請檢查是否切換到了 **`修剪器`** 視窗，若是，請**自行切換回 `影片預覽` 視窗**。如果你想使用類似於舊版（14 及以下）的 `修剪器` 與 `預覽視窗` 分離的視窗佈局，可到選單列的 **`檢視 -> 視窗佈局`** 中選擇 **`源視窗佈局`**。

<br>

Q：不小心把**xxxx 視窗關閉了/拖拽下來了**，怎麼**找回來/停靠回去**？

A：請到選單列的 **`檢視 -> 視窗`** 中自行開啟你需要的視窗。Vegas 的視窗佈局是可以被高度自定義的，已停靠的視窗可以直接拖拽下來，未停靠的視窗在拖動時按住 **`Ctrl`** 也可以停靠回去。自 23 大版本更新後，任意視窗都可以停靠到時間軸的上下左右位置，而在舊版本中，只支援停靠到時間軸的上方。

<br>

Q：點選**平移裁切按鈕/FX 按鈕/xxxx 按鈕**，**無法彈出視窗？**/**xxxx 視窗不知道去哪了**？

A：這種情況一般是不小心把視窗拖到 Windows 工作列下方了，沒法再拖上來。

比較方便的解決辦法是**先點選一下對應的按鈕，之後馬上按 `Alt + 空格`，選擇 `移動`**，然後把視窗拖上來。或者也可以把 Windows 工作列隱藏了再拖上來。實在無法解決，可以試試選單列的 `檢視 -> 恢復預設佈局`。

<ImageOnDemand alt="移動視窗" src="vegtips/image014_window_move.gif" />

<br>

Q：加了 FX，為什麼在預覽視窗中，**FX 效果顯示不全，像左右分割了一樣**？

<ImageOnDemand alt="分割螢幕檢視" src="vegtips/image015_split_screen.png" />

A：如上圖所示，請檢查是否啟用了**`分割螢幕檢視`**功能。

<br>

Q：不知點到什麼了，單個影片軌道**被分成了 AB 兩軌**，如何恢復？

<ImageOnDemand alt="AB 軌道" src="vegtips/image016_ab_track.png" />

A：一般這種情況下是不小心雙擊了事件邊緣，再**雙擊一遍事件邊緣**就可以解決了。

如果雙擊事件邊緣不管用，可以在該軌道的左側（`軌道頭`，有 `級別` 和一大堆按鈕的那邊）**`右鍵 -> 展開軌道層`**，把這個選項去掉，應該也能解決。

為了避免誤觸，vv18 及以上，可以在 **`首選項 -> 常規`** 中滑到最低下，**將 `雙擊事件邊緣切換擴充編輯模式` 這個選項關閉**。

<br>

Q：開啟**媒體生成器**視窗時按下**撤銷（`Ctrl + Z`）**，這個媒體生成器效果**在預覽中消失**了？

A：當聚焦於**媒體生成器的編輯視窗**時，**撤銷（`Ctrl + Z`）可能會導致媒體生成器的 `幀大小` 和 `持續時間` 這兩個參數變為異常值**。這時候狂按 `Ctrl + Z` 可能也並沒有什麼用。

這兩個參數均位於媒體生成器視窗左上角，請自行**將媒體生成器的 `幀大小` 和 `持續時間` 改為原先的值**。`幀大小` 預設情況下是專案的寬高，比如 `1920*1080`；`持續時間` 預設是5秒，對於 `時間與幀數` 標尺來說就是 `00:00:05.00`。

- 另一個和它類似的小 bug：當你通過媒體生成器視窗更改完第一個媒體生成器的幀大小和持續時間後，立即在時間軸上開啟第二個媒體生成器的編輯視窗，會使第二個媒體生成器的幀大小和持續時間繼承自第一個媒體生成器的對應參數。

<br>

Q：**部分 FX 效果**（(自帶)文字、電視模擬器 FX 等 DXT 類外掛程式）的**視窗顯示不全**？

A：

1. 安裝 **sserife.fon** 字型。
    - 下載連結：https://github.com/taveevut/Windows-10-Fonts-Default/blob/master/sserife.fon

2. 若安裝該字型後不管用，請轉到 **`控制台 -> 區域 -> 管理 -> 變更系統區域設定`**，確保 **`Beta 版:使用 Unicode UTF-8 提供全球語言支援`** 這個選項保持未勾選狀態，如下圖所示。

<ImageOnDemand alt="Windows Unicode 設定" src="vegtips/image017_unicode_settings.png" />

<small>
參見：<a href="https://www.vegascreativesoftware.info/us/forum/posts--138828/">https://www.vegascreativesoftware.info/us/forum/posts--138828/</a><br>
</small>

<br>

Q：專案內容/自定義算繪範本/首選項設定等**視窗太大，沒法顯示完全**，**按不到確認鍵**？

<ImageOnDemand alt="視窗太大" src="vegtips/image018_window_too_large.png" />

A：Vegas 視窗大小會根據 Windows 螢幕設定自動縮放，如果 Windows 螢幕 DPI 縮放比例過大，也會導致 Vegas 的視窗變得很大，在特大縮放比例下部分設定視窗顯示不完全。如果只需按“確認”，可以直接按鍵盤上的 **`Enter` 鍵**進行代替。如果必須要完整顯示視窗，就只能提前修改螢幕的 DPI 縮放比例，**在 Windows 設定中將螢幕縮放比例調為 100%**，Vegas 內改完設定後再調回原來的值。或者也可以**單獨將 Vegas 程式的 DPI 縮放改為 100%**，對著 Vegas 主程式或者捷徑進入 `右鍵 -> 內容 -> 相容性 -> 變更高 DPI 設定`，**單獨設定 Vegas 的縮放選項，將 `縮放執行` 改為 `應用程式`。**

<ImageOnDemand alt="高 DPI - 應用程式" src="vegtips/image019_high_dpi_application.png" />

<br>

Q：從其他軟體**切屏**回 Vegas 後，**需要緩衝好久**，才能恢復正常？

A：**`首選項 -> 常規`，取消勾選 `在沒有活動應用程式時關閉媒體檔案`。**注意，未啟用這個選項時，**Vegas 會一直佔用著當前工程使用的媒體檔案，從而無法對媒體檔案本身進行修改刪除等操作**。（不影響 Vegas 程式內的替換和刪除等。）

<br>

Q：想從 **`專案媒體`** 視窗裡往時間軸上**拖放影片**，但是卻**誤操作成了“修剪”**了？

A：為人詬病的老問題了，只要是在影片畫面上拖動，就會被當成是“修剪”來處理。

常規的解決辦法：**按 `Ctrl + Z` 撤銷，然後拖動時拖影片畫面下方的檔名，不要在影片畫面上拖動。**

21 新增了一個 **`旁通懸停擦洗`**（`Bypass Hover Scrub`）的按鈕，啟用後就能保證不會誤操作，不過這樣就無法在游標懸停時預覽影片畫面，只能看到封面縮圖。

<ImageOnDemand alt="旁通懸停擦洗" src="vegtips/image020_bypass_hover_scrub.png" />

<p align="center">其實這個按鈕是 vv20 加的，但是 vv20 按了這個按鈕以後完全沒有效果。</p>

<br>

Q：**Vegas 播放時按空格，為什麼遊標會返回起始點？我想把空格鍵改成遊標停到目前位置。**

A：Vegas 的“暫停”代表“停止播放，遊標停留在目前位置”，“停止”代表“停止播放，遊標返回起始位置”。

在 22 及以下版本中，預設情況下，**`Enter` 鍵是“暫停”，`空格` 鍵是“停止”**。在 `21 build 108` 及以前的版本中，可以調整 **`首選項 -> 常規`** 中的 **`使用空格鍵和 F12 進行播放/暫停而不是播放/停止`** 設定來交換 `Enter` 鍵和 `空格` 鍵的功能。

自 `21 build 187` 更新後，這個選項被移到了**預覽視窗下方的傳輸欄內**，和播放、暫停、停止按鈕放在了一起。如果沒有，請展開右邊的三個點。

<ImageOnDemand alt="遊標傳輸欄" src="vegtips/image021_cursor_transport.png" />

在 23 大版本更新後，和舊版不同，Vegas 的預設行為已經變成了 **`Enter` 鍵是“停止”，`空格` 鍵是“暫停”**。這個選項也隨之變成了 `使用空格鍵和 F12 進行播放/停止而不是播放/暫停`，並且在 `首選項 -> 常規` 中以及傳輸欄內，都有這個設定選項可以調整。

<br>

Q：**複製平移/裁切關鍵影格後發生崩潰**？

A：Windows 11 更新的問題，**升級到 `22 build 250`** 可以解決。

- 舊版 Vegas 可以使用臨時解決辦法：**右鍵 Vegas 程式或者捷徑進入 `內容`，切換到 `相容性`，在 `相容模式` 這一欄選擇 `Windows 8`**。

<small>
參見：<a href="https://www.vegascreativesoftware.info/us/forum/posts--148746/">https://www.vegascreativesoftware.info/us/forum/posts--148746/</a><br>
</small>

<br>

Q：<sup>22 及以上</sup>**左鍵在時間軸上拖動，變成事件選擇了，不能在時間軸上選擇區域了**？

A：在 22 更新後，滑鼠左鍵在時間軸上拖動的操作變成了框選時間軸上的事件，而滑鼠右鍵才是時間軸上選擇區域。如果用舊版用慣了，不習慣這個新版邏輯，可以**勾選 `首選項 -> 編輯 -> 使用滑鼠右鍵切換到選擇編輯工具`，交換左右鍵**，變成類似於 Reaper 預設的操作邏輯。  
<small>
若是舊版遇到這個問題，你先確認一遍你滑鼠編輯工具選沒選對，敲兩下 `D` 鍵。
</small>

這次更新以後，還出現了一個新的小問題，也就是實際的事件選擇範圍，與你游標劃的區域稍有差異，實際的事件選擇範圍會略小於游標劃的區域。這是因為新版額外引入了一個選區偏移值。到 [內部首選項](#vegas-內部首選項的進入方法)，搜尋並找到 **`Default SelectionMode Offset`**，改成 **`0`** 即可。

<br>

## 七、預覽相關

### 預覽畫面閃綠色、閃黑、素材亂飄等問題的一般處理思路

1. **[關閉 GPU 加速](#1-關閉-gpu-加速)**、**[禁用重采樣](#2-禁用重采樣)**、**[啟用/關閉兩個舊版解碼](#1-啟用關閉-avc-和-hevc-舊版解碼)**，這三種辦法先試試看。

2. 切換預覽視窗左上角的預覽質量，比如 `最好(完整)` 等，看看是否變正常了。

3. **特定外掛程式的 bug**，請嘗試移除可能導致問題的影片效果。

4. 將原始媒體檔案全部重新轉碼，再替換。

5. 預覽莫名其妙閃幀、素材亂飄的問題是很糟心，如果上述幾種辦法都無法解決的話，那估計只能開擺了。

<br>

### 預覽相關的 Q&A

Q：**添加 FX/修改字幕文字/修改 FX 等操作**後，**預覽視窗中的內容無變化，只有把 FX 視窗關閉了**，才能在預覽視窗中看到更改後的結果？

A：一般此問題出現在**某些版本的 N 卡驅動**中，以下是幾種不同的解決辦法。

1. **[關閉 GPU 加速](#1-關閉-gpu-加速)**，此辦法簡單方便。**（有核顯也可用核顯的 GPU 加速，亦能解決。）**

2. 如果需要在**保證 GPU 加速功能正常啟用的情況下**解決此問題，則需要修改 OpenGL 設定。

    進入 [內部首選項](#vegas-內部首選項的進入方法)，搜尋並找到 **`Enable OpenCL/GL Interop`**，改成 **`FALSE`**。

    或者也可以在 **N 卡控制面板**中更改相關設定，具體操作如下：

    開啟 **NVIDIA 控制面板**，點選左側的 **`管理 3D 設定`**，在右側切換到 **`程式設定`** 選項卡。在 `自定義程式` 那一欄中點選 `添加`，選擇 Vegas 主程式並確定，將下方的 **`OpenGL GDI 相容性`** 功能設定，從 `使用全域設定` 更改到 **`優先相容性`**，然後重新執行 Vegas 程式，即可解決此問題。（如果電腦裡有多個 Vegas 版本，則需要分別設定。）

<ImageOnDemand alt="NVIDIA OpenGL GDI 相容性" src="vegtips/image022_nvidia_opengl.png" />

3. 將 N 卡驅動的版本回退至 `522.30` 及以前，或更新至最新版。重裝驅動時，**必須選擇“自訂”安裝**，並且勾選 **`執行清潔安裝`** 選項。此選項會將 N 卡驅動的所有配置選項全部恢復為預設值，因此**不建議使用此辦法**。

<small>
參見：<a href="https://www.vegascreativesoftware.info/us/forum/posts--138196/">https://www.vegascreativesoftware.info/us/forum/posts--138196/</a><br>
</small>

<br>

## 八、算繪相關

### 算繪外掛程式 Voukoder 推薦

在使用 Vegas 自帶的算繪範本時，我們**通常需要不斷地更改解析度、幀率、位元速率等參數**，使得算繪範本匹配原工程的專案屬性，並且達到預期的位元速率效果。但有這麼一個算繪外掛程式，可以使算繪範本的解析度、幀率等參數**自動匹配專案屬性，並且支援使用更高級的 CRF、CQP 等參數來控制位元速率**，在**不需要太操心算繪參數**的前提下完成算繪操作。這個算繪外掛程式就是 **Voukoder**。

<ImageOnDemand alt="Voukoder Classic" src="vegtips/image023_voukoder_classic.png" />

Voukoder 一共有兩個版本：Voukoder Classic 和 Voukoder Pro。

- Voukoder Classic 是免費的，支援 Vegas Pro 12 ~ 22，但是已經被原作者 Vouk 刪庫了。

  有其他使用者做了 GitHub 倉庫備份：
  - [https://github.com/FORARTfe/voukoderFREE](https://github.com/FORARTfe/voukoderFREE)
  - [https://github.com/FORARTfe/voukoder-connectorsFREE](https://github.com/FORARTfe/voukoder-connectorsFREE)  
  需要同時安裝 Voukoder 本體（比如 `Voukoder 13.4.1`）和 Voukoder 連接器（比如 `connector-vegas22-1.0.0.msi`）。
- Voukoder Pro 目前是付費的，官網連結為：[https://www.voukoder.org/](https://www.voukoder.org/)。
  - Voukoder Pro 1 曾經宣稱免費，但自 Voukoder Pro 2 開始轉為付費軟體，並且每一個大版本都需要額外付錢。

還有其他類似於 Voukoder 的算繪外掛程式，比如 [DebugMode FrameServer](http://www.debugmode.com/frameserver.html) 和 [MagicYUV](https://www.magicyuv.com/)。這兩款算繪外掛程式我不太用，可能會適用於更專業的使用者。

<br>

### 算繪時崩潰/假死/算繪錯誤，無法正常算繪出影片檔案，一般的處理思路

- 算繪崩潰：算繪途中軟體**突然發白，報錯崩潰**。

- 算繪假死：算繪途中**進度條突然不動**，工作管理員中 CPU 和 GPU 的利用率很低，**點選“取消”後無法正常取消算繪，只能通過工作管理員強行殺除 Vegas 程序**。

- 算繪錯誤：算繪後有**閃幀、閃綠屏**等情況。

算繪前應該做的事：

- 確保專案屬性和算繪範本中沒有會導致問題的值。比如**場順序是否是逐行掃描**、**寬高值是否能被 `4` 整除**（一些編碼器的最小單位是 `4*4`）、**幀率是否是常見幀率**（尤其是莫名其妙帶小數點的，除了那些常規的 `23.976`、`29.97`、`59.94` 以外）。

- **確保算繪範本和專案屬性完全一致**，比如算繪範本的寬高不與專案屬性一致，會導致藍寶石外掛程式的位置偏移問題。

- 在修改自帶算繪範本的位元速率時，一定要保證**位元速率最大值比平均值大一些**，不能設定成一樣的。

1. 算繪崩潰時，如有**報錯彈窗**，見上文 [關閉 Vegas 的報錯彈窗功能](#2-關閉-vegas-的報錯彈窗功能)。

2. **[關閉 GPU 加速](#1-關閉-gpu-加速)。**

3. **算繪範本換編碼器。**

<ImageOnDemand alt="算繪的編碼器" src="vegtips/image024_render_encoder.png" />

<p align="center">根據電腦的顯示卡配置，能使用的編碼器可能會有所不同。</p>

4. 修改卡住的那一幀附近，比如刪減 FX、刪減事件等。

5. 換其他算繪格式（wmv 格式等）。
  - 注意，wmv 格式的預設算繪範本是：**解析度 `1440*1080`，像素高寬比 `1.3333`**，雖然最後算繪出來的畫幅仍為 16:9，但依照此參數直接算繪容易出現問題，應手動改成**解析度 `1920*1080`，像素高寬比 `1`** 這樣的常規參數。

6. **<sup>推薦</sup>用 [Voukoder 算繪外掛程式](#算繪外掛程式-voukoder-推薦) 算繪。**

7. **<sup>推薦</sup>巢狀算繪法。**
  - 開一個新工程，**把原工程 veg 檔案直接扔進去，等建立好代理以後直接算繪**。巢狀算繪會比常規算繪慢一些，如果電腦配置不夠會很折磨。

8. 分段算繪法。
  - 算繪假死時，可以**將原工程“拆”成一小段一小段分別進行算繪**，再開一個新工程，把所有段落**拼接起來重新算繪一遍**。
  - 如果不是算繪假死，而是隨機的算繪錯誤，比如渲了兩次，一次是前一段有問題後一段沒有，一次是後一段有問題前一段沒有問題，也可以把這兩個段落拼起來重新算繪一遍。

9. **算繪影像序列**，哪裡卡住就從哪裡開始重新算繪，**這樣至少能保留已算繪檔案**，最後再**以影像序列的形式匯入進 Vegas 重新算繪一遍**。每算繪完一次影像序列，都記得**輸出到新的資料夾**，否則舊的影像序列會被新的覆蓋，因為 Vegas 總是從 `000000` 開始編號。

<ImageOnDemand alt="匯入影像序列" src="vegtips/image025_import_image_sequence.png" />

<p align="center">匯入影像序列的方法。匯入後相當於一個影片檔案，可自行設定幀率等參數。</p>

10. **用 [Voukoder 算繪外掛程式](#算繪外掛程式-voukoder-推薦)，自定義範本，修改輸出的封裝格式為 mkv**，哪裡卡住就從哪裡開始重新算繪。
  - mkv 不同於其他格式，**在算繪假死/崩潰以後，留下的檔案能夠正常播放和重新匯入**。**注意，低版本 Vegas 無法直接匯入 mkv。**

11. 找別人代算繪。
  - 可以使用 `檔案 -> 匯出 -> .veg`，整理當前工程使用的媒體檔案到新的資料夾內。之後將其打成壓縮包，並發送給你信任的其他 Vegas 使用者。

總結：遇到算繪問題，先試試看**辦法 1、2、3** 能不能解決，無法解決時優先推薦嘗試使用**辦法 6 和辦法 7**，其餘的辦法可作為參考，萬不得已時只能用**辦法 8、9、10、11**。

<br>

#### 算繪失敗時的檔案修復

如前所述，能夠在算繪失敗（假死/崩潰）後直接保留已算繪進度的格式，只有影像序列和 mkv 封裝格式這兩種，其餘格式（mp4、mov、avi、wmv 等），在算繪失敗後，會保留已算繪的快取檔案，但這種快取檔案是無法直接正常播放和重新匯入的，即使能夠播放，也會出現部分畫面損壞的問題。但是，也有這樣的影片修復軟體，可以將這些算繪失敗的快取檔案，通過**另一個同算繪範本的成功正常算繪的影片片段樣例**，修復成正常的影片片段。我試過能正常修復的軟體有 [Digital Video Repair](https://risingresearch.com/zh/dvr/)（免費）和 [萬興易修](https://repairit.wondershare.com/)（付費，效果更好一些）等。也可自行嘗試其他同類型軟體。

<br>

### 算繪相關的 Q&A

Q：點選**`算繪為`**（23 及以上稱為**`算繪`**）後，**開啟算繪範本列表視窗時，報錯/崩潰**？

A：有**報錯彈窗**時，先試試上文中的**[關閉報錯彈窗](#2-關閉-vegas-的報錯彈窗功能)**。

若仍然不行，可以嘗試暫時移除編解碼器路徑 **`...<Vegas 安裝路徑>\FileIO Plug-Ins\`** 裡的所有資料夾，再重新執行 Vegas，插入字幕事件，看點選 `算繪為` 時是否崩潰。若此時未崩潰，可以逐步把編解碼器移回去，重啟 Vegas，插入字幕，點選 `算繪為`，**看移入哪個編解碼器後會導致問題**。排查出來後，只能不使用該編解碼器，不把該資料夾放進去，但可能會使 Vegas 無法匯入或算繪某些格式的檔案，這個注意。（可以優先排查 `mxavcaacplug`。）

<br>

Q：算繪立即報錯：**`建立媒體檔案 xxx.mp4 時發生錯誤。無法確定錯誤的原因。`**

A：自定義算繪範本，**取消勾選 `啟用漸進式下載` 選項**。或者試試看 **[Voukoder 算繪外掛程式](#算繪外掛程式-voukoder-推薦)**。

<br>

Q：算繪立即報錯：**`建立媒體檔案 xxx.mp4 時發生錯誤。錯誤 0x80660008 (訊息缺失)`**

A：如果你正在使用 **N 卡的 NVENC 編碼器**，且你的**顯示卡驅動版本大於 `590`**，則 **22 及以下版本的 Vegas** 中自帶的算繪範本，**無法呼叫 NVENC 編碼器**，**只能選擇呼叫其他編碼器的算繪範本進行算繪**。目前的解決辦法只有**降級顯示卡驅動版本到 `581.57` 及以下**，或者**升級 Vegas 版本到 23 及以上**。也可以用 **[Voukoder 算繪外掛程式](#算繪外掛程式-voukoder-推薦)**的 NVENC 編碼器進行算繪，不會報錯。

<small>
參見：<a href="https://www.vegascreativesoftware.info/us/forum/posts--150382/">https://www.vegascreativesoftware.info/us/forum/posts--150382/</a><br>
</small>

<br>

Q：嘗試**算繪 m2ts 影片檔案**報錯：**`COM 物件無法初始化。`(`The COM object could not be initialized.`)**

A：從 **Win11 24H2 版**開始，微軟移除了 Vegas 及其他軟體所依賴的 **AC-3 編解碼器**。如果使用者正在**使用全新安裝的 Win11 24H2 或更高版本**，則系統中不會包含這個編解碼器，導致 Vegas **無法解碼 m2ts 影片檔案的 AC-3 音訊編碼音訊**，也導致**算繪 m2ts 影片檔案時報錯**。可以參考 [**這篇英文教學**](https://www.elevenforum.com/t/ac-3-dolby-digital-codec-no-longer-included-with-windows-11-version-24h2.25597/post-459390) 重新添加 AC-3 編解碼器，或者也可以**升級到 22 最終版（`22 build 250`）及以上版本**，已包含新的 AC-3 編解碼器。

<small>
參見：<a href="https://www.vegascreativesoftware.info/us/forum/posts--147963/">https://www.vegascreativesoftware.info/us/forum/posts--147963/</a><br>
</small>

<br>

Q：算繪到一半**打算停止算繪**，但是**想保留已算繪的影片檔案**。

A：**SeMW 擴充**的算繪顯示視窗中有此功能。

<ImageOnDemand alt="SeMW 算繪提示" src="vegtips/image026_render_semw.png" />

SeMW 擴充官網：https://www.semw-software.com/en/extensions/

注意：經過測試，該功能**不能解決算繪假死時無法取消算繪的問題**，遇到此問題時只能通過工作管理員強行殺除 Vegas 程序。

<br>

Q：如何算繪**帶 alpha 通道的 mov 檔案**？

A：

- **QuickTime 外掛程式 <small>（22 及以下版本通用。畫面靜態時，壓縮效果比其他格式好，檔案小。）</small>**

  1. 安裝 QT Lite 或者 QuickTime。一般推薦安裝 **`QT Lite 4.1.0`** 比較方便。高版本 vv 還需要在 `首選項 -> 停止使用的功能` 中 **`啟用 QuickTime 外掛程式`**。

  2. 在選擇算繪範本介面的左側中選擇 `QuickTime`，右邊隨便找一個範本，自定義範本，更改相關參數，如下圖所示：

<ImageOnDemand alt="算繪帶 alpha 通道的 QuickTime" src="vegtips/image027_render_alpha_quicktime.png" />

  3. 儲存範本。算繪。

  因為相容性比較差，QuickTime 格式已經被列入為 `停止使用的功能`。經測試，Vegas 自身如果匯入進超過一百多個 QuickTime 格式的 mov 檔案，會出現各種問題，如檔案無法讀取、介面異常卡頓等情況；且將其匯入進 Vegas 時，預設不會顯示 alpha 通道，需要手動改。從相容性的角度來看，建議使用 Apple ProRes 格式。

  **自 23 大版本以來，Vegas 已經實質上地放棄了對 QuickTime 的相容，再也無法匯入和算繪 QuickTime 編碼的 mov 檔案。**

- **Apple ProRes 範本 <small>（18 及以上版本。若不存在對應範本，則說明無法通過此辦法算繪。）</small>**

  如下圖所示：

<ImageOnDemand alt="算繪帶 alpha 通道的 ProRes" src="vegtips/image028_render_alpha_prores.png" />

- **[Voukoder 算繪外掛程式](#算繪外掛程式-voukoder-推薦) <small>（18 及以上版本，且 Voukoder Classic 版本需在 12.0 及以上。）</small>**

  在 Voukoder 算繪外掛程式的算繪範本中找到標註 **`4:4:4 10 bit 帶 alpha 透明通道`** 的範本，算繪。也可以自定義算繪範本，輸出容器選擇`QuickTime (.mov)`，影片編碼器選擇 `ProRes KS` 或者 `QuickTime Animation`。

<br>

Q：預覽時畫面或者算繪出來的檔案，與**原始媒體檔案的顏色不一致，有色差**？

A1：vv17 及以下版本中，由於專案屬性和算繪範本的**色彩空間**問題，在預覽和算繪時有可能會與原始媒體檔案**產生色差**。

解決辦法有以下三種：

1. **使用 [Voukoder 算繪外掛程式](#算繪外掛程式-voukoder-推薦)，用 `濾鏡` 製作能夠轉換色彩空間的範本。**

<ImageOnDemand alt="Voukoder 色彩空間" src="vegtips/image040_voukoder_color_space.png" />

2. 升 vv18 及以上版本。舊版的工程在新版 vv 中開啟後，需要在左上角 `檔案-內容` 中將 `像素格式` 這一欄從 `舊版 8 位(影片級別)` 改成 **`8 位(全範圍)`**”，並且算繪時**不要使用舊版 vv 所建立的算繪範本**。

3. 給媒體檔案套用 `色階` FX 的 **`計算機 RGB 到演播室級 RGB`** 預設。

<small>
參見：<a href="https://www.vegascreativesoftware.info/us/forum/posts--142942/">https://www.vegascreativesoftware.info/us/forum/posts--142942/</a><br>
</small>

<br>

A2：若原素材是 **HDR 素材**，請將**專案屬性的 `色彩空間` <sup>圖 1</sup>** 更改至與原素材 <sup>圖 2</sup> 一致。這會將整個專案更改為 10bit 色深，算繪也會比原先的 8bit 色深慢很多。

<ImageOnDemand alt="專案 HDR 色彩空間" src="vegtips/image029_color_space_hdr_project.png" />

<ImageOnDemand alt="素材 HDR 色彩空間" src="vegtips/image030_color_space_hdr_footage.png" />

或者，也可以不改專案的色彩空間，而是給原素材添加轉換色彩空間的 LUT。這裡用自帶的 `LUT 篩選器` FX 或者高版本的 `顏色分級` 功能都可以，重點在於你要找到能將原素材的色彩空間轉換成 `Rec.709` 標準的 LUT 檔案。這樣做會失去原素材的 HDR 細節，所以如果本來就沒打算最終輸出 HDR 影片，建議在一開始錄製素材時就不要錄製 HDR 素材。

<br>

Q：算繪出來的影片，**怎麼變色了（紅的變紫、藍的變黃等）**？

<ImageOnDemand alt="BGRA 顏色" src="vegtips/image031_bgra_color.png" />

A：A 卡驅動的問題。可以嘗試以下幾種方法：

- **[關閉 GPU 加速](#1-關閉-gpu-加速)**。
- 將 A 卡驅動版本回退至 **23.7.2** 及以前，或者升級到 **23.11.1** 及以後。
- 目前 `21 build 187` 及以上版本已修復此問題，因此也可以選擇升級 Vegas 版本。
- **在算繪前**，給影片輸出匯流排加一個自帶的 **`通道混合` FX，預設選 `RGBA -> BGRA`**。

<small>
參見：<a href="https://www.vegascreativesoftware.info/us/forum/posts--142292/">https://www.vegascreativesoftware.info/us/forum/posts--142292/</a><br>
</small>

<br>

Q：【**vv18 及以下**】**無法算繪高度大於 `2304` 的影片（想算繪豎屏 4K）**？

A：對於舊版，如果你嘗試自定義原生的算繪範本時，將高度更改為 `2304` 以上的值，會自動恢復為 `2304`，不讓修改，也就是無法算繪豎屏 4K。最方便的辦法還是**將專案屬性改為你想要的值以後，使用 [Voukoder 算繪外掛程式](#算繪外掛程式-voukoder-推薦)**，而不是用原生算繪範本。

這裡再介紹一個使用原生算繪範本的“卡 bug”辦法：

1. 在算繪介面的左側選擇能夠自定義寬高的算繪範本，比如 **`MAGIX AVC` 或 `MAGIX HEVC`** 這兩個格式。在右邊找個你想要的最貼近的範本，點選 `自定義範本`。

2. 先將除了高度值以外的其他所有參數修改為你想要的值，並**修改最上方的範本名稱，但不要點選右邊的儲存按鈕**。

3. 這時，修改高度值為所需的大於 `2304` 的值。輸入完以後，不要按 `Enter` 或者 `Tab` 鍵，也不要點選任何其他位置，**保證輸入遊標在高度值的輸入框上閃爍（即仍處於選中狀態）時，點選範本名稱右邊的儲存按鈕**。

4. **儲存完以後，點下方的 `取消`**。這樣，你會發現它沒有自動跳轉到你儲存的範本，但是範本確實被添加到了範本列表裡。

5. 使用這個新的範本算繪。如果在儲存範本後點了 `確定`，則會自動轉到一個額外帶 `*` 號的範本，這個範本是錯的，不要用，仍需要你在範本列表裡找到你儲存的不帶 `*` 號的範本。

- 注意：這個辦法無法超過編碼器的最大限制。比如對於 `NVENC` 編碼器來說，最大限制是 `4096*4096`。

<small>
參見：<a href="https://www.vegascreativesoftware.info/us/forum/posts--149413/#ca939692">https://www.vegascreativesoftware.info/us/forum/posts--149413/#ca939692</a><br>
</small>

<br>

Q：進行過算繪操作後，嘗試播放工程時報錯：**`開始播放時發生錯誤。沒有啟用對此裝置的請求。`**

A：Vegas 在算繪完畢後會請求一遍麥克風許可權，如果電腦插了麥克風，而 Vegas 沒有麥克風許可權，則報錯。解決辦法是**在 Windows 設定中開啟麥克風許可權**。也可以嘗試在 `首選項 -> 音訊裝置` 中切換其他音訊裝置，或者點右下角的 `全部預設`，再次算繪後，看能否永久解決。（切換一次可以臨時解決，但不是永久的。）實在不行，可以嘗試重裝音效卡驅動。

<br>

Q：**[Voukoder 算繪外掛程式](#算繪外掛程式-voukoder-推薦)**（或自帶的算繪範本）算繪出來的影片，在本地播放器上看沒問題，上傳到嗶哩嗶哩等影片網站上全解析度觀看，怎麼會出現**上下條紋**？

A：Voukoder 算繪外掛程式是自動匹配專案屬性的。在 vv17 及以下版本中，專案屬性的預設範本， `場順序` 一欄預設為 `上場優先`，屬於隔行掃描。本地播放器一般都支援隔行反交錯，所以看上去是沒問題的。而嗶哩嗶哩等影片網站則不支援，所以能直接看到明顯的隔行交錯條紋。如果是用 Voukoder 算繪，需**將 `專案內容` 的 `場順序` 改為 `逐行掃描`** 後重新算繪。如果是 Vegas 自帶的算繪範本，**也不要選擇範本名稱中帶 `i` 的，應選擇帶 `p` 的**。

<br>

Q：**自帶算繪範本沒有影像序列**？

A：該 bug 已于 vv19 修復。以下是可供低版本嘗試的幾種解決辦法，不保證一定有效：

1. 安裝（解除安裝重裝）HEIF 影像擴充：[https://apps.microsoft.com/detail/9pmmsr1cgpwg](https://apps.microsoft.com/detail/9pmmsr1cgpwg)。

2. 使用影像序列算繪腳本。
  - 下載連結：https://www.vegascreativesoftware.info/us/forum/posts--133068/?page=3#ca863786

3. 先算繪為其他格式（`.mov` 等），再用 [FFmpeg](https://ffmpeg.org/) 進行轉換。

<small>
參見：<a href="https://www.vegascreativesoftware.info/us/forum/posts--133068/">https://www.vegascreativesoftware.info/us/forum/posts--133068/</a><br>
</small>

<br>

Q：算繪範本中，**`wav` 和 `avi` 算繪範本的輸出格式變成了 `.wdp`**？

A：目前已知的有效解決辦法只有**通過 Windows 更新工具重裝一遍系統**。

- 更新工具下載連結：https://www.microsoft.com/software-download

會將當前系統更新至最新版。整個下載安裝過程需要好幾個小時。通過這個辦法重裝的系統可以保留原先已安裝的軟體、檔案和絕大部分設定等，不用過於擔心。

暫不清楚具體的修復原理。

<small>
參見：<a href="https://www.vegascreativesoftware.info/us/forum/posts--83436/">https://www.vegascreativesoftware.info/us/forum/posts--83436/</a><br>
</small>

<br>

Q：【**Win7 vv18 及以上**】**一點`算繪為`就報錯**：**`建立媒體檔案時發生錯誤。錯誤 0x80131501 (訊息缺失)`**

<ImageOnDemand alt="Win7 算繪" src="vegtips/image032_render_win7.png" />

A：正常情況下 Win7 最高**只支援到 vv17**，vv18 以後一點算繪就會彈出此報錯彈窗。

不過也有個偏門的辦法，可以將舊版 vv18 的算繪元件 dll **替換到新版 vv 的安裝目錄內**，這樣就可以正常算繪了。

但這種辦法不一定能保證軟體本身的穩定性，所以還是建議能升級 win10 的就升級吧。

<small>
參見：<a href="https://www.vegascreativesoftware.info/us/forum/posts--128221/">https://www.vegascreativesoftware.info/us/forum/posts--128221/</a><br>
</small>

`18 build 284` 版 `RenderAsDialog.dll` 下載連結：[RenderAsDialog.dll](/downloads/fixes/RenderAsDialog.dll)

<br>

## 九、字幕相關的 Q&A

Q：字幕檔案無法正常匯入/匯入進去是**亂碼**？

A：將字幕檔案用記事本開啟，**另存為 UTF-8 編碼**，再嘗試匯入。

<br>

Q：用“**字幕和文字**”編輯文字時，明明選擇了對應的字型，但**預覽視窗內的字型仍舊毫無變化，無法切換字型**？

A：這個是“字幕和文字”的問題，“字幕和文字”對各種字型的支援性不夠好，切換字型時可能就會發生這種情況。

解決辦法：
- **先在 Word 文檔裡把字型樣式改好，再複製貼上到 Vegas 字幕和文字裡。**
  - 沒有 Word 的話，也可以用其他能帶富文字格式的編輯工具。

- 或者也可以換用 **(自帶)文字** 或者 **PTT 字幕**，這兩個文字編輯工具不易發生這樣的情況。
  - 高版本需在 `首選項 -> 停止使用的功能` 中啟用這兩個功能。

- 在某些情況下，也可能是 Windows Unicode 設定導致的。轉到 **`控制台 -> 區域 -> 管理 -> 變更系統區域設定`**，確保 **`Beta 版: 使用 Unicode UTF-8 提供全球語言支援`** 這個選項保持未勾選狀態，如下圖所示。

<ImageOnDemand alt="Windows Unicode 設定" src="vegtips/image017_unicode_settings.png" />

vv20 裡的“字幕和文字”有個新功能是“**一鍵更改同軌道字幕的屬性**”，此新功能也會受到該 bug 的影響，導致部分字型無法正常使用此功能。

<br>

Q：點選選單列的 **`插入 -> 從檔案插入字幕`**，**不能彈出插入字幕的視窗**，點了沒有任何反應？

A：這個是比較少見的 bug，並且到目前為止似乎仍未修復。甚至可能之前一直能正常使用這個功能的，突然間就用不了了。目前已知能夠解決此問題的辦法只有**[重設首選項](#5-重設首選項)**。

<small>
參見：<a href="https://www.vegascreativesoftware.info/us/forum/posts--137861/">https://www.vegascreativesoftware.info/us/forum/posts--137861/</a><br>
</small>

<br>

Q：使用“**致謝字幕**”時，一編輯文字，**Vegas 就卡死崩潰**？

A：微軟輸入法的問題。在**微軟輸入法的設定中找到 `相容性` 一欄，啟用 `使用以前版本的微軟拼音輸入法` 選項**，即可解決。

<br>

Q：將文字檔案匯入進“**致謝字幕**”時，**文字內容顯示為亂碼**？

A：將文字檔案用記事本開啟，**另存為 ANSI 編碼**，再嘗試匯入。

<br>

Q：如圖所示，在高解析度螢幕上使用“**PTT 字幕**”時，**介面錯亂/介面字型小，看不清**？

<ImageOnDemand alt="PPT 字幕 UI 問題" src="vegtips/image033_protype_titler_ui_issue.png" />

A：DPI 縮放的問題，當系統縮放 DPI >= 150% 時就會出現。可參考下圖，對著 Vegas 主程式或者捷徑進入 `右鍵 -> 內容 -> 相容性 -> 變更高 DPI 設定`，**單獨設定 Vegas 的縮放選項，將 `縮放執行` 改為 `系統(增強)`。**

<ImageOnDemand alt="高 DPI - 系統增強" src="vegtips/image034_high_dpi_system_enhanced.png" />

<br>

Q：【**vv20、21**】**字幕和文字“一鍵更改同軌道字幕的屬性”功能報錯（如下圖）**？

<ImageOnDemand alt="字幕屬性傳輸" src="vegtips/image035_subtitles_transfer.png" />

A：問題在於當前文字框內的**富文字包含多種文字格式（如字型、字型大小不同等）**，文字格式無法正常轉移。可嘗試**先統一文字格式**後再使用該功能。**21 最終版 build 315 已修復此問題。**舊版（包括 20 以下，沒有這個功能但是想用的）可以用我寫的同類型腳本，沒有這個報錯，不過也不支援多種文字格式的轉移。腳本安裝路徑見 [腳本](#十二、腳本-擴充相關) 章節。

- 【單軌道匹配字幕屬性】腳本下載連結：https://github.com/zzzzzz9125/VegasScripts/blob/main/Transfer%20Subtitle%20Attributes.cs

  - 使用方法：選中軌道上的單個“字幕和文字”事件以後執行腳本，可以自動將該軌道其他字幕事件的屬性與該事件匹配。

<small>
參見：<a href="https://www.vegascreativesoftware.info/us/forum/posts--145461/">https://www.vegascreativesoftware.info/us/forum/posts--145461/</a><br>
</small>

<br>

另：（vv18 及以上）將 `插入文字媒體` 功能更換為其他文字工具的方法：

上面已經提到，Vegas 的常規文字工具一共有三種：字幕和文字、(自帶)文字和 PTT 字幕。如果你在影片軌道上 `右鍵 -> 插入文字媒體`，預設生成的是“字幕和文字”事件；如果要使用其他兩個文字工具，則必須從“媒體生成器”裡拖進時間軸才行，有時會有些麻煩。此處介紹一個將“插入文字媒體”功能更換為其他文字工具的方法。

進入 [內部首選項](#vegas-內部首選項的進入方法)，搜尋並找到 `Text Media Generator GUID` 這一欄，將該值修改為三個文字工具所對應的 GUID 值。（預設為“字幕和文字”的 GUID 值）

三個文字工具所對應的 GUID 值如下：
- 字幕和文字：`{Svfx:com.vegascreativesoftware:titlesandtext}`
- (自帶)文字：`{0FE8789D-0C47-442A-AFB0-0DAF97669317}`
- PTT 字幕：`{53FC0B44-BD58-4716-A90F-3EB43168DE81}`

當然，在已知對應 GUID 的情況下，也可以填寫任意一個媒體生成器 FX 的 GUID。這樣的話，點選“插入文字媒體”按鈕時，就能夠直接生成其對應的媒體生成器事件。

<br>

## 十、影片外掛程式相關

Vegas 的影片外掛程式一共分兩類。一類是 DirectX Transform（即 DXT）類外掛程式，是專門為 Vegas 開發的外掛程式形式。一類是 OFX 類外掛程式，是通用的外掛程式形式。有些舊外掛程式有可能會採用 DXT 類外掛程式形式，比如 NewBlue 2012 版、Neat Video 3.1.1 版等；而新版外掛程式一般都使用 OFX 外掛程式形式，比如新版 NewBlue 等。某些 Vegas 自帶的舊效果，比如軟對比 FX、PTT 字幕等，也屬於 DXT 類外掛程式。

VEGAS Pro 影片效果名稱速查表歸納整理了 VEGAS Pro 中的所有可用的 **`影片 FX 效果`** 的 **`名稱`**、**`分組`** 和 **`UID`** 等資訊，便於線上查找閱覽。**[點此進入。](./videofxlist)**

<br>

### Vegas 外掛程式快取檔案

- 掃描快取：`%localappdata%\VEGAS Pro\23.0\svfx_plugin_cache.bin`
- 名稱快取：`%localappdata%\VEGAS Pro\23.0\plugin_manager_cache.bin`
- 縮圖：`%localappdata%\VEGAS Pro\23.0\FX Thumbnails\fx_thumbnail_cache.bin`

其中 `23.0` 代表當前的 Vegas 版本號。外掛程式快取是 Vegas 用來儲存已掃描的外掛程式和 FX 效果的資訊的。Vegas 介面如果卡在 `正在建立影片外掛程式工廠…` 這一步，就表明是在**重新生成外掛程式快取**，會自動掃描新安裝的外掛程式。

<br>

### OFX 相關路徑

**公共 OFX 路徑**：`C:\Program Files\Common Files\OFX\Plugins\`
**獨立 OFX 路徑**：`...<Vegas 安裝路徑>\OFX Video Plug-Ins\`

注意，OFX 外掛程式本身可能會包括兩部分：外掛程式本體與 OFX 介面。OFX 路徑指的是 OFX 介面檔案所存放的路徑。如果裡面沒有對應檔案，Vegas 將**掃描不到**對應的外掛程式。公共 OFX 路徑裡的 OFX 效果，也會被 PR、達芬奇等其他支援 OFX 的軟體掃描到；而 Vegas 的獨立 OFX 路徑，只會被當前版本的 Vegas 掃描到。

OFX 介面檔案的路徑結構如下：
```
<OFX 路徑>/
├── xxx.ofx.bundle/
│ └── Contents/
│   ├── Presets/
│   │   ├── PresetPackage.xml
│   │   ├── PresetPackage.zh-CN.xml
│   │   └── ...
│   ├── Resources/
│   │   ├── xxx.xml
│   │   ├── xxx.zh-CN.xml
│   │   └── ...
│   └── Win64/
│       └── xxx.ofx
└── yyy.ofx.bundle/
    └── ...
```

其中，`Win64\xxx.ofx` 是 OFX 外掛程式的介面檔案。`Presets\PresetPackage.xml` 是外掛程式自帶的預設檔案，`Resources\xxx.xml` 是語言翻譯檔案（通常為英語，不過外掛程式漢化者一般會直接編輯這個檔案，來達到強制漢化的目的）。兩個 `.zh-CN.xml` 是漢化版 Vegas 優先讀取的檔案。

注意，OFX 路徑一般需要管理員許可權才能編輯，所以對於 `xml` 檔案，不建議直接使用沒有管理員許可權的記事本開啟。我個人比較推薦用 `Visual Studio Code`，儲存時會提醒使用管理員許可權儲存。

修改完語言翻譯檔案後，需要刪除之前提到的**外掛程式名稱快取**並重啟 Vegas，才能看到修改後的結果。

自己儲存的 OFX 外掛程式的 FX 預設：`%userprofile%\Documents\OFX Presets\`

<br>

### DXT 相關資訊

**自帶 DXT 路徑**：`...<Vegas 安裝路徑>\Video Plug-Ins\`

準確地說，DXT 外掛程式並沒有像 OFX 那樣強制規定了存放的資料夾。它們是單獨的 dll 檔案，需要依賴於 dll 註冊。所以，我們可以把其他外置的 DXT 外掛程式存放到任意資料夾，之後執行 `regsvr32 xxx.dll` 註冊，這樣 Vegas 就能識別到這個 DXT 外掛程式了。這對於一些需要手動註冊的 DXT 外掛程式很有用，比如 [Route Animation](https://www.vegascreativesoftware.info/us/forum/posts--105615/) (`RouteAnimationX64.dll`)。

<br>

### 影片外掛程式相關的 Q&A

Q：已經通過登錄檔將 Vegas 介面的英文改成中文了，但**自帶的外掛程式名稱仍然是全英文的**，怎麼改成中文？

A：**刪除上述 Vegas 外掛程式快取中的名稱快取**，重啟 Vegas。偷懶一點的話可以直接**[重設首選項](#5-重設首選項)**。

<br>

Q：**已經解除安裝了某個外掛程式**，但是 Vegas 的 FX 介面裡**還顯示著存在**這個外掛程式效果，並且一點就崩潰？

A：檢查**OFX 路徑裡的對應檔案**有沒有清理乾淨，如果清理了也仍舊存在，可以嘗試**刪除上述 Vegas 外掛程式快取檔案**。

<br>

Q：**在影片 FX/轉場 FX/媒體生成器 FX 視窗中，瀏覽到某個外掛程式效果時，直接崩潰？**

A：這個一般是**載入縮圖**時發生的崩潰。沒有直接解決崩潰的辦法，只能自己嘗試避免崩潰。如果不想用這個外掛程式系列，那就找到其對應的 OFX 檔案（外部外掛程式找公共 OFX 路徑，Vegas 自帶的找獨立 OFX 路徑），移除。如果仍然想用這個外掛程式系列，但不想使用這個效果，可以**嘗試修改 `xml` 翻譯檔案**，給它排到最后面，避免在瀏覽效果時點到它。  
<small>也可以使用<b>效果搜尋外掛程式 [VPConsole](https://www.ratinfx.com/vpconsole/)</b>，作為自帶效果搜尋功能的平替。</small>

<br>

Q：**外掛程式搜尋方塊一用就白屏卡死**，根本沒法用？

A：當安裝的外掛程式過多時，低版本 Vegas 一使用外掛程式搜尋方塊就容易白屏卡死，需要等好久才會恢復正常。**vv18 已修復此問題**，因此建議升級至 vv18 及以上版本，搜尋功能流暢可用。  
<small>也可以使用<b>效果搜尋外掛程式 [VPConsole](https://www.ratinfx.com/vpconsole/)</b>，作為自帶效果搜尋功能的平替。</small>

<p align="center"><iframe src="//player.bilibili.com/player.html?bvid=BV1U4XhYgEG5&autoplay=false" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe></p>

<br>

Q：**使用自帶的 AI 效果，提示要安裝 VEGAS 深度學習模型元件**？  
`此外掛程式需要其他資料。請登入您的服務中心帳戶並從“My Products”部分下載深度學習模型元件。`

A：對於高版本自帶的 AI 效果，**需要額外安裝對應版本的深度學習模型（Deep Learning Models）**才能使用。

<small>
官方 AI 深度學習模型下載連結：<a href="https://www.vegascreativesoftware.info/us/forum/posts--104782/">https://www.vegascreativesoftware.info/us/forum/posts--104782/<br></a>
</small>

<br>

Q：**自帶的 `LUT 篩選器` FX，無法識別到選定的 `.cube` 檔案**？

A：檢查該 `.cube` 檔案的完整路徑中是否**只含有【半角英文字元】**。如果含有任何中文之類的其他字元，請將其**放置到只含半角英文字元的路徑**，再重新選中它。

<br>

Q：**藍寶石外掛程式的某些效果會忽略 alpha 通道，覆蓋掉底下的背景？**

A：如圖所示，進入該效果的 `幫助`，單獨取消掉該效果的 `GPU`。

<ImageOnDemand alt="藍寶石 alpha 通道問題" src="vegtips/image036_sapphire_alpha.png" />

如果沒有用，那只能**關閉 Vegas 自己的 `GPU 加速`**了。

<br>

Q：獨立版 Mocha 是能夠正常執行的，但 **OFX 外掛程式版 Mocha 無法通過 Vegas 呼叫，會閃退**？

A：可以嘗試**回退/更新顯示卡驅動版本**。

<br>

Q：**vv21** 一添加 **`3D LUT Creator` 外掛程式**就**崩潰/閃退**？

A：可在舊版中通過外掛程式鏈儲存這個 FX，然後使用時應用該外掛程式鏈。此 bug 已在 22 中修復。

<small>
參見：<a href="https://www.vegascreativesoftware.info/us/forum/posts--144354/">https://www.vegascreativesoftware.info/us/forum/posts--144354/</a><br>
</small>

<br>

## 十一、音訊外掛程式相關

Vegas 的音訊外掛程式一共分兩類。一類是 DirectX 外掛程式，是比較舊的外掛程式形式。一類是 VST 外掛程式，是現在通用的外掛程式形式。除了 Vegas 自帶的“不帶任何首碼”和 `ExpressFX` 系列的音訊 FX 屬於 DirectX 外掛程式以外，其餘音訊外掛程式為 VST 外掛程式。vv16 及以上自帶的 `eFX` 系列，也屬於 VST 外掛程式。對於 VST 外掛程式，低版本的 Vegas 只支援 VST2 外掛程式，而 vv20 及以上版本可以支援 VST3。所有 Vegas 版本均不支援 VSTi。

<br>

### VST 相關路徑

- **公共 VST 路徑**：`C:\Program Files\VSTPlugins\`

<small>
如果其他軟體改了公共 VST 路徑，則會按照改過的來。可自行查詢登錄檔項 <code>HKEY_LOCAL_MACHINE\SOFTWARE\VST</code> 的 <code>VSTPluginsPath</code> 值所對應的路徑字串資料。
</small>

- **獨立 VST 路徑（16 及以上）**：`...<Vegas 安裝路徑>\MAGIX Plugins\`

<br>

也可以在 `首選項 -> VST 效果` 中手動設定 VST 路徑。在低版本 Vegas 中，VST 路徑最多只能設定 3 個；vv20 及以上的新版則無該限制。

<br>

自己儲存的 VST 外掛程式的 FX 預設：
- `%userprofile%\Documents\VST2 Presets\`
- `%userprofile%\Documents\VST3 Presets\`

<br>

Q：如何不通過 Vegas 首選項，在外部手動編輯 VST 路徑？

A：轉到登錄檔項：
- `HKEY_CURRENT_USER\Software\VEGAS Creative Software\VEGAS Pro\23\Metrics\x64\VstCache\SearchPaths` <sup>20 及以上</sup>
- `HKEY_CURRENT_USER\Software\Sony Creative Software\VEGAS Pro\19.0\Metrics\VstCache\SearchPaths`<sup>19 及以下</sup>
- 其中 `23` 和 `19.0` 均代表當前的 Vegas 版本號。

有 `Path 1`、`Path 2`、`Path 3`等項，分別對應 Vegas 首選項中的 VST 路徑。

<ImageOnDemand alt="VST 登錄檔" src="vegtips/image037_vst_reg.png" />

`CheckSum` 這個值是 Vegas 用來檢查是否需要重新掃描該路徑的校驗和值，可以忽略掉。重點關注的是 `Path` 值和 `Flags` 值。`Path` 值是該 VST 路徑設定所指向的絕對路徑字串，`Flags` 值則決定了是否掃描該路徑，值為 `3` 是掃描，值為 `0` 是不掃描。可自行修改這些值。

如果發現你的 VST 掃描出現了潛在的問題，通過 Vegas 首選項內的重新掃描按鈕沒法解決，你可以刪除登錄檔項 `VstCache` 中的 `Mappings` 項，之後重啟 Vegas 重新掃描，看能否解決。

<br>

### 音訊外掛程式相關的 Q&A

Q：高版本無法掃描 **32 位的 VST 外掛程式**？

A：**`首選項 -> 音訊 -> 啟用對 32 位 VST 外掛程式的支援（實驗）`**。

<br>

Q：高版本中某些 **VST 外掛程式介面顯示不全**？

A：似乎是 VST2 特有的問題，如果該外掛程式有 VST3 版的話，**建議使用 VST3 版**。

<br>

Q：**DirectX 外掛程式沒有在音訊 FX 列表中顯示**/**有但是添加時顯示無效**/**外掛程式變成 Demo 版了，添加後有滴滴聲**？

A：**解除安裝 Vegas**後，刪除 **`C:\Program Files (x86)\VEGAS\Shared Plug-Ins\Audio_x64\`**（vv13 及以下為 `C:\Program Files (x86)\Sony\Shared Plug-Ins\Audio_x64\`）裡的所有檔案，再**重裝 Vegas**。（如果有多個版本的 Vegas，只需解除安裝一個，提前解除安裝只是為了之後能夠安裝上。）

<small>
參見：<a href="https://www.vegascreativesoftware.info/us/forum/posts--143986/">https://www.vegascreativesoftware.info/us/forum/posts--143986/</a><br>
</small>

<br>

Q：在主控添加**限制器 FX（自帶的 `eFX_Limiter` 或其他限制器 VST）**後，給任意一個音訊軌道**添加聲像包絡和包絡點**，會導致**滋滋聲**？

A：這是一個很離譜的 bug，當**聲像包絡點類型為 `平滑淡化` 或 `急劇` 時就會出現問題**。解決辦法是**將包絡點類型修改為其他的**。

<br>

## 十二、腳本/擴充相關

Vegas 支援使用者以 `C#`（或 `JScript`、`Visual Basic`）語言編寫自定義腳本，以優化工作流程。

- 腳本（`Script`）：只能由使用者主動執行，功能較為簡單。

- 擴充（`Extention`）：可以在 Vegas 程式啟動時就一同執行。能實現更複雜的功能，比如在 Vegas 內建立可停靠視窗等。

<small>
本文只介紹腳本/擴充安裝時遇到的某些問題。如需基礎教學，可見：<a href="https://www.vegascreativesoftware.info/us/forum/posts--104563/">https://www.vegascreativesoftware.info/us/forum/posts--104563/</a><br>
</small>

<br>

**腳本可用安裝路徑列表：**

```text{1}
C:\ProgramData\VEGAS Pro\Script Menu\
C:\ProgramData\VEGAS Pro\23.0\Script Menu\
%userprofile%\Documents\Vegas Script Menu\
%appdata%\VEGAS Pro\Script Menu\
%appdata%\VEGAS Pro\23.0\Script Menu\
%localappdata%\VEGAS Pro\Script Menu\
%localappdata%\VEGAS Pro\23.0\Script Menu\
...<Vegas 安裝路徑>\Script Menu\
```

<br>

**擴充可用安裝路徑列表：**

```text{1}
C:\ProgramData\VEGAS Pro\Application Extensions\
C:\ProgramData\VEGAS Pro\23.0\Application Extensions\
%userprofile%\Documents\Vegas Application Extensions\
%appdata%\VEGAS Pro\Application Extensions\
%appdata%\VEGAS Pro\23.0\Application Extensions\
%localappdata%\VEGAS Pro\Application Extensions\
%localappdata%\VEGAS Pro\23.0\Application Extensions\
```

<br>

其中 `23.0` 指對應 Vegas 版本號。第一個路徑是我最推薦的路徑，不過 `ProgramData` 資料夾預設是隱藏資料夾，這個注意。Sony 版（13 及以下）的路徑需要在 `VEGAS Pro` 資料夾的上一層添加 **`Sony`** 資料夾，比如 `C:\ProgramData\Sony\VEGAS Pro\Script Menu\` 等。

<br>

由於對於腳本 API 的更改，SonicFoundry 版、Sony 版（13 以前）和 Magix 版（14 至今）的腳本和擴充是不直接相容的。十分遠古的 SonicFoundry 版使用 `SonicFoundry.Vegas` 命名空間，比較遠古的 Sony 版使用 `Sony.Vegas` 命名空間，現代的 Magix 版使用 `ScriptPortal.Vegas` 命名空間。對於現成的腳本程式碼檔案（`.cs`、`.js` 或 `.vb`），可以手動用記事本編輯其中的檔案內容，使其相容。對於已經編譯成 `.dll` 的腳本或擴充檔案，只能修改原項目以後重新編譯。

<br>

### 安裝腳本或擴充時的一般步驟

以擴充為例，腳本也同理。其他安裝路徑見 [上方列表](#十二、腳本-擴充相關)。

1. 先複製 `C:\ProgramData\VEGAS Pro\` 並貼上到你的檔案總管的位址列中，跳轉至該目錄。

2. 檢查 `Application Extensions` 資料夾是否存在。若不存在，手動建立一個，並保證名稱完全一致。進入該資料夾。

3. 複製該擴充所需的所有 `.dll` 檔案，直接貼上到這個資料夾內。比如：`C:\ProgramData\VEGAS Pro\Application Extensions\UltraPaste.dll`。
    * 有些腳本和擴充也可能有 `32*32` 的 `.png` 圖示檔案，通常情況下你可以選擇是否放入。圖示檔案可用於在 Vegas 選單列和工具列中區分不同的腳本和擴充。

4. 如果某些腳本/擴充需要額外的安裝包，請根據他們給出的安裝步驟來。

<br>

## 十三、工程檔案的備份和恢復

**最重要的放在開頭：**

<p align="center"><big><b>養成良好的隨手 <code>Ctrl + S</code> 的習慣！</b></big></p>

本段旨在幫助解決 **儲存後原工程檔案消失了或者無法正常開啟**、**軟體崩潰但沒來得及儲存** 等需要恢復工程檔案的情況。

<br>

### 1. 工程旁邊的 `.veg.bak` 檔案

此檔案是**倒數第二次**的工程儲存檔案，是工程檔案的小備份。需要恢復工程時，可以將 `.veg.bak` 檔案**重新命名**為 `.veg` 檔案，然後用 Vegas 開啟。如果沒有隨手 `Ctrl + S` 的習慣的話，這個備份可能會隔了很久很久。

<br>

### 2. Vegas 預設的 5 分鐘自動儲存檔案

Vegas 會每隔 5 分鐘進行一次自動儲存，以便於軟體崩潰後的工程恢復。

一般情況下直接恢復工程的辦法：軟體崩潰後**不要直接開啟原工程**，**重新執行 Vegas 開個新的工程**，Vegas 載入完後會提示“**有工程可以恢復**”，恢復即可。

不過像上面這樣子操作有些麻煩，如果直接開啟了原工程，就根本不會彈出這個“恢復工程”的提示，此時若直接在原工程上修改，則**可能會導致自動儲存檔案被覆蓋**，造成無法通過此辦法恢復的情況，因此我更建議**自己手動去資料夾裡找**。

比較簡單的辦法是，進入【**[Vegas 快取目錄]**(#vegas-首選項和快取目錄)】(**`%localappdata%\VEGAS Pro\`**)<small>（或者實在不想找目錄的話就在 **`C 盤` 搜尋 `autosave`**）</small>，按時間排序，看到有 `.veg` 檔案或者 `.veg.bak` 檔案，複製貼上出來，按照 [1](#_1-工程旁邊的-veg-bak-檔案) 的辦法**重新命名**為 `.veg`，開啟，確認無誤後再另存為到其他地方去。

自動儲存間隔預設是 5 分鐘，如需更改，可進入 [內部首選項](#vegas-內部首選項的進入方法)，搜尋並找到 `msAutoSaveInterval`，該選項的預設值是 `300000` 毫秒，可自行更改至想要的值。

<br>

### 3. 高級儲存（vv16 及以上）

我**目前最推薦**的工程恢復辦法，但需要提前設定好。

優點：

- 備份恢復檔案能直接設定在**工程同目錄**下，不需要再手動去 [Vegas 快取目錄](#vegas-首選項和快取目錄)裡找。

- 可以方便快捷地更改備份間隔。

<ImageOnDemand alt="高級儲存" src="vegtips/image038_advanced_save.png" />

<p align="center">選單列的 <b><code>工具 -> 高級儲存</code></b>。</p>

高級儲存功能共分為兩項功能：實時儲存和高級備份。

- **`實時儲存`**：**做一步操作自動按一步儲存**，完全保證工程檔案為**實時最新**狀態。
  - 因為是做一步就儲存一步，在做大工程時用此功能**可能會很卡**，因此**不建議啟用**。

- **`高級備份`**：為工程建立額外的 `.veg` 備份檔案。

  一共分好幾檔：**按分鐘/按小時/每日/實時**。

  - `按分鐘備份`：**每隔 `x` 分鐘**自動存 1 個 `.veg` 備份，**只保留 1 個小時以內**的備份檔案，1 個小時以外的備份檔案將自動清理。

  - `按小時備份`：**每隔 `x` 小時**自動存 1 個 `.veg` 備份，**只保留 10 個小時以內**的備份檔案，10 個小時以外的備份檔案將自動清理。

  - `每日備份`：**每天開啟/關閉 Vegas 時**自動存 1 個 `.veg` 備份，備份最大數量為 `x`，超過此數量時自動清理最舊的檔案。

  - `實時備份`：**每做一步就備份一步**，備份成單獨的 `.veg` 檔案，備份最大數量為 `x`，超過此數量時自動清理最舊的檔案。跟“實時儲存”相同，“實時備份”**可能會導致大工程很卡，不建議啟用**。

注意，高級備份的這幾個檔位的備份檔案是**相互獨立**的。

- **`按分鐘備份`** 會將檔案儲存在指定目錄的 `MinorBackups` 資料夾。

- `按小時備份` 會將檔案儲存在指定目錄下的 `MajorBackups` 資料夾。

- `每日備份` 會將檔案儲存在指定目錄下的 `CriticalBackups` 資料夾。

- `實時備份` 會將檔案儲存在指定目錄下的 `RealtimeBackups` 資料夾。啟用 `實時備份` 後無法再啟用其他檔位的功能。

**啟用 `高級備份` 後，會關閉 Vegas 預設的 [5min 自動儲存](#_2-vegas-預設的-5-分鐘自動儲存檔案)功能。**

如有其他問題，可以點選 **`高級儲存` 視窗右上角的問號，自己查幫助文件**。

<br>

### 4. 使用增量儲存（vv18 及以上）

增量儲存功能是從 vv18 開始有的，快捷鍵是**`Ctrl + Alt + S`**。有點類似於另存為，但是比另存為方便，會**自動按照序號另存為新的檔案**，而不覆蓋掉原始工程檔案。快捷鍵不習慣的話，也可以到上邊**選項-自定義鍵盤**，修改成你想要的快捷鍵。預設的快捷鍵和 QQ 自帶的錄屏衝突。

<br>

### ~~5. 自己時不時地手動備份工程檔案~~

<br>

## 十四、工程版本的降級

正常來說，高版本的 Vegas 是能直接開啟低版本的工程檔案的，並且相容性很好；而低版本卻沒法直接開啟高版本的工程檔案。本章將提供降級工程版本的幾種辦法。

<br>

### 1. Vegas 工程檔案版本降級工具

<ImageOnDemand alt="MSVPVF" src="vegtips/image039_msvpvf.png" />

該工具原項目連結：https://sr.ht/~mrpapersonic/msvpvf/

通過此工具，可以修改工程檔案內的版本標識，來達到降版本的目的。但是，此工具並沒有對工程檔案的結構做出任何調整更改，因此即使能夠把工程檔案的版本標識降下來，大多數情況下也會顯示檔案損壞，無法正常開啟。原作者在此處引入一個代的概念，認為只有同代之內的 Vegas 工程檔案版本才存在降級相容性：Vegas 工程檔案無法跨代降級，只能在同代版本之間進行降級。根據原作者提供的“代”的概念，結合我測試下來的結果，各代的分界線大概是這樣：`8 - 11 | 12 - 14 | 15 - 16 | 17 | 18 | 19 - 21 build 208 | 21 build 300 - 22 | 23`。<small>（由於各版本的不同小版本號仍有差別，甚至會出現斷點在某兩小版本號之間的情況，因此測試結果不一定準確。）</small>可以看到中間一大段實在是太散了，因此實用性較低，但針對某些特定版本確實能夠正常使用。

我自己漢化、編譯的【Vegas 工程檔案版本降級工具】下載連結：https://github.com/zzzzzz9125/msvpvf/releases/

下面兩種辦法就不是真正意義上的工程版本降級了，而是工程裡內容的轉移。

<br>

### 2. 跨版本複製貼上法

Vegas 本身是支援軟體多開的，軟體多開以後可以將事件跨工程複製貼上過去，因此甚至可以借用這個功能，多開幾個不同版本的 Vegas，達到跨版本複製貼上的效果。

該辦法的適用版本範圍比上面那個更廣泛一些，但是只支援事件的複製貼上，不支援軌道本身的複製貼上。

<br>

### 3. 跨版本外掛程式鏈法

外掛程式鏈功能介紹見第二章的 [Vegas 外掛程式鏈預設的使用、匯入和匯出](#vegas-外掛程式鏈預設的使用、匯入和匯出)。我們可以通過儲存外掛程式鏈的形式，實現工程內音影片 FX 的外掛程式鏈的遷移。外掛程式鏈支援各種位置的音影片 FX，但無法在工程內批次完成，只能逐條手動儲存再讀取。一般可以和辦法 2 結合著用，辦法 2 用於轉移事件，辦法 3 用於轉移軌道 FX。

版本降級肯定會帶來一些不可避免的相容性問題，一般有這兩個方面：

- 更新的新功能。比如 21 的調整事件，降級到低版本以後會變成空白事件；20 升級了 VST 引擎，20 及以後的工程內的所有 VST 效果，降級到低版本以後也無法正常識別，等等情況。

- 內部 API 或者 GUID 變化。比如 vv13 和 vv14 之間就是一個分界線，前者是 Sony 的，後者是 Magix 的，兩者無法跨工程複製貼上。又比如 vv17 將所有自帶的 OFX 效果的 GUID 從 `sonycreativesoftware` 改成了 `vegascreativesoftware`，因此涉及到改動的效果帶到低版本中也通通無法正常識別。

版本升級則基本不會發生上述情況。

<br>

## 十五、其他 Q&A

Q：Vegas 匯入媒體檔案後會在旁邊生成一個 **`.sfk` 檔案**，有沒有什麼辦法**隱藏掉**？

A：

- **舊版**：沒有。`.sfk` 是音訊峰值檔案，Vegas 內**沒有任何設定**可以使 `.sfk` 檔案隱藏到其他地方去，只能放媒體檔案旁邊。手動刪除後，重新開啟這個工程時，仍然會重新生成。  
  <small><s>連自家的 Sound Forge 都能直接隱藏峰值檔案，就 Vegas 不能，這是否有點...</s></small>

- **新版（`21 build 300` 及以上）**： `首選項 -> 常規`，新增 **`不要建立.sfk 檔案來儲存峰值資料`** 和 `隱藏新的 .sfk 檔案` 這兩個選項。若只勾選第二個選項，則會將新生成的 `.sfk` 檔案的屬性設為隱藏，電腦啟用過“隱藏檔案顯示”以後仍然可見。若勾選了第一個選項，則不再生成 `.sfk` 檔案，但每次重進工程時均需重新建立峰值，不過一般影響不大，因此**建議勾選**。

<br>

Q：匯入音訊/影片檔案後，檔案音訊流上**看不了音訊波形，顯示“峰值不可用”**，但播放後能聽見音訊？

A：如果**媒體檔案被放在了需要管理員許可權的資料夾**，會導致 Vegas 無法正常生成 `.sfk` 檔案，從而造成無法顯示音訊的波形，出現 **`峰值不可用`** 的情況。解決辦法是**把媒體檔案移到不需要管理員許可權的資料夾內**。

<small>
另：有關 <code>.sfk</code>、<code>.sfl</code>、<code>.sfap0</code>、<code>.sfvp0</code> 等檔案的相關介紹，可見：<a href="https://vegasaur.com/sweeper">https://vegasaur.com/sweeper</a><br>
</small>

<br>

## 十六、軟體入正渠道

1. Vegas 官網：https://www.vegascreativesoftware.com/us/

  - 官網只售賣最新版本的 Vegas，且不支援國內支付方式。目前官網在定價捆綁包上一共有兩個版本，即普通版（不含任何尾碼，舊稱 `Edit` 版）和套裝版（`Suite`）。其中普通版僅包含 Vegas Pro 軟體本體，套裝版則包含額外軟體和外掛程式。在此基礎上，還分買斷版（`Lifetime` / `Perpetual`）和 365 訂閱版（`Subscription`）。官網也支援以舊換新，擁有舊版序列號時購買最新版可以打折。官網提供的安裝包並不包含中文版，但可以手動修改登錄檔來改成中文介面。一個 Vegas 本體序列號能夠同時啟動兩臺裝置，並且裝置不用時，可以在 Magix 帳號內解綁，解綁有時間冷卻。

  - 官方各版安裝包連結：https://www.vegascreativesoftware.info/us/forum/posts--104782/

2. 國區代理：https://vegaschina.cn/
  - 注意，國內代理商思傑馬克丁有風評問題，建議自行考慮是否通過該渠道入正。
  - **國區代理的序列號只能啟動國區代理所提供的安裝包。啟動後可獲得能夠繫結在 Magix 帳號上的官網版序列號。官網版序列號支援啟動官網版安裝包，也支援官網的以舊換新優惠。**

3. 其他區代理，如日區：https://www.sourcenext.com/product/vegas/video/vegas-edit/
  - 不支援國內支付方式。日區代理相較於官網版更便宜，但似乎不支援改登錄檔來換成中文介面。

4. Steam 版：https://store.steampowered.com/app/4006040/
  - vv23 國區定價￥678，自帶官方中文（Steam 商店裡的語言列表有誤）。但 Steam 版有不允許軟體多開的問題，且不支援自行修改登錄檔，也不支援新版的文字轉語音/語音轉文字和 Vegas Hub 等雲服務功能。

5. [Humble Bundle](https://www.humblebundle.com/)、[Fanatical](https://www.fanatical.com/) 等優惠網站的不定期的骨折優惠捆綁包。

  - 價格在 20-30 美元不等，支援支付寶，可以買到比當前最新 Vegas 版本低兩個版本號的軟體本體以及捆綁的其他內容，同時也支援官網的以舊換新優惠。比如最新是 21，就會給 19 打骨折，然後在優惠網站上銷售。每年只有不定期的幾次短暫促銷，且每次促銷的連結和捆綁包內容也各不相同。

以上入正渠道均會隨機觸發打折優惠活動，詳情可實時關注該帖子：https://www.vegascreativesoftware.info/us/forum/posts--109642/

<br>

## 十七、Vegas 交流群/交流網站

夜__曉的 Vegas Pro 交流 QQ 群：[570497914](https://qm.qq.com/cgi-bin/qm/qr?k=vByv4vz64zLaygZW7AgX8-2QReEXjL0a) / [650370844](http://qm.qq.com/cgi-bin/qm/qr?k=ueSwAdOLZl7EvMaGXJu_U5o59fZQ_afi)

Vegas Pro 官方論壇：[https://www.vegascreativesoftware.info/us/vegas-pro-forum/](https://www.vegascreativesoftware.info/us/vegas-pro-forum/)

Vegas Pro Reddit 討論區：[https://www.reddit.com/r/VegasPro/](https://www.reddit.com/r/VegasPro/)
