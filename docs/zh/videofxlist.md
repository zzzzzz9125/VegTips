---
layout: doc
title: 视频 FX 效果列表
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

# VEGAS Pro 视频 FX 效果列表

## 说明

1. 该页面归纳整理了 VEGAS Pro 中的所有可用的 **`视频 FX 效果`** 的 **`名称`**、**`分组`** 和 **`UID`** 等信息，便于在线查找阅览。

2. 效果默认是按照 **`名称`** 升序作为排序依据的。通过表格顶部的筛选、排序和搜索功能，可自行设定条件筛选和搜索特定效果条目。

3. 就如表格所展示的那样，VEGAS 中的视频效果一共可分为 4 类：**`视频 FX`**、**`转场 FX`**、**`媒体生成器 FX`**、**`轨道合成模式 FX`**。表格中的 **`类型`** 表示该效果可作为这一类 FX 添加到项目中。一个效果可能归属于多个 FX 类，且可能在不同类里展现出不同的特性。比如 **`蓝宝石`** 的 **`转场 FX`**，可归属于 **`视频 FX`**、**`转场 FX`**、**`轨道合成模式 FX`**，当该效果作为 **`视频 FX`** 添加时，本身不会有动画，但会额外有一个 **`溶解量`**（**`Dissolve Amount`**） 之类的进度参数，可以为其添加关键帧；而在 **`转场 FX`** 的效果则有自动的转场动画效果。这是需要注意的。

4. 由于 VEGAS 版本或者插件版本的不同，同一款效果可能有不同的 **`UID`**。比如 **`NewBlue`** 这款插件有旧的 DXT 版和新的 OFX 版，在表格中用了 **`NewBlue DXT`** 和 **`NewBlue OFX`** 来区分。再比如对于 VEGAS Pro 18 及以上，**`边框`**、**`测试图案`**、**`通道混合`** 这三个自带的效果从旧的 DXT 效果升级成了 OFX 效果。表格会尽可能多地收集不同版本的效果，以 **`UID`** 作为唯一的键和收录依据。特别地，对于 VEGAS Pro 16 及以下版本，VEGAS 自带的一些 OFX 的 **`UID`** 格式应该是 **`{Svfx:com.sonycreativesoftware:xxx}`**，而非新版的 **`{Svfx:com.vegascreativesoftware:xxx}`**，这在表格中不过多说明，请自行转换。

## 表格

<VideoFxTable />
