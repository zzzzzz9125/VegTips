---
layout: doc
title: Video FX List
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

# VEGAS Pro Video FX List

## Notes
1. This page summarizes all available **`Video FX`** in VEGAS Pro, including their **`Names`**, **`Groups`**, **`UIDs`**, and other information, making it easy to search and browse online.

2. By default, the FX are sorted in ascending order by **`Name`**. Using the filter, sort, and search functions at the top of the table, you can set conditions to filter and search for specific FX entries.

3. As shown in the table, video FX in VEGAS can be divided into four categories: **`Video FX`**, **`Transition FX`**, **`Media Generator FX`**, and **`Track Composite Mode FX`**. The **`Type`** column in the table indicates which category an FX can be added to in a project. An FX may belong to multiple FX categories and may exhibit different characteristics in each. For example, **`Transition FX`** from **`Sapphire`** can belong to **`Video FX`**, **`Transition FX`**, and **`Track Composite Mode FX`**. When added as a **`Video FX`**, it does not have animation by default but includes an additional progress parameter such as **`Dissolve Amount`** that can be keyframed. When used as a **`Transition FX`**, it has an automatic transition animation. This is an important distinction to note.

4. Depending on the version of VEGAS or the plugin, the same FX may have different **`UIDs`**. For instance, **`NewBlue`** has an older DXT version and a newer OFX version, distinguished in the table as **`NewBlue DXT`** and **`NewBlue OFX`**. Additionally, for VEGAS Pro 18 and later, the three built-in FX— **`Border`**, **`Test Pattern`**, and **`Channel Blend`** —were upgraded from the older DXT versions to OFX versions. The table aims to collect as many versions of FX as possible, using the **`UID`** as the unique key and inclusion criterion. Notably, for VEGAS Pro 16 and earlier versions, some built-in OFX **`UIDs`** follow the format **`{Svfx:com.sonycreativesoftware:xxx}`** instead of the newer **`{Svfx:com.vegascreativesoftware:xxx}`**. This is not elaborated further in the table; please adjust accordingly.

## Table

<VideoFxTable />

