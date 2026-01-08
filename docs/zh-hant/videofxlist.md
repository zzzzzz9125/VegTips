---
layout: doc
title: 影片 FX 效果列表
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

# VEGAS Pro 影片 FX 效果列表

## 說明

1. 該頁面歸納整理了 VEGAS Pro 中的所有可用的 **`影片 FX 效果`** 的 **`名稱`**、**`分組`** 和 **`UID`** 等資訊，便於線上查找閱覽。

2. 效果預設是按照 **`名稱`** 升序作為排序依據的。透過表格頂部的篩選、排序和搜尋功能，可自行設定條件篩選和搜尋特定效果條目。

3. 就如表格所展示的那樣，VEGAS 中的影片效果一共可分為 4 類：**`影片 FX`**、**`轉場 FX`**、**`媒體產生器 FX`**、**`軌道合成模式 FX`**。表格中的 **`類型`** 表示該效果可作為這一類 FX 新增到專案中。一個效果可能歸屬於多個 FX 類，且可能在不同類裡展現出不同的特性。比如 **`藍寶石`** 的 **`轉場 FX`**，可歸屬於 **`影片 FX`**、**`轉場 FX`**、**`軌道合成模式 FX`**，當該效果作為 **`影片 FX`** 新增時，本身不會有動畫，但會額外有一個 **`溶解量`**（**`Dissolve Amount`**） 之類的進度參數，可以為其新增關鍵影格；而在 **`轉場 FX`** 的效果則有自動的轉場動畫效果。這是需要注意的。

4. 由於 VEGAS 版本或者外掛程式版本的不同，同一款效果可能有不同的 **`UID`**。比如 **`NewBlue`** 這款外掛程式有舊的 DXT 版和新的 OFX 版，在表格中用了 **`NewBlue DXT`** 和 **`NewBlue OFX`** 來區分。再比如對於 VEGAS Pro 18 及以上，**`邊框`**、**`測試圖案`**、**`通道混合`** 這三個內建的效果從舊的 DXT 效果升級成了 OFX 效果。表格會盡可能多地收集不同版本的效果，以 **`UID`** 作為唯一的鍵和收錄依據。特別地，對於 VEGAS Pro 16 及以下版本，VEGAS 內建的一些 OFX 的 **`UID`** 格式應該是 **`{Svfx:com.sonycreativesoftware:xxx}`**，而非新版的 **`{Svfx:com.vegascreativesoftware:xxx}`**，這在表格中不過多說明，請自行轉換。

## 表格

<VideoFxTable />
