---
layout: doc
title: Video-FX-Liste
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

# VEGAS Pro Video-FX-Liste

## Hinweise

1. Diese Seite fasst alle verfügbaren **`Video-FX`** in VEGAS Pro zusammen, einschließlich ihrer **`Namen`**, **`Gruppen`**, **`UIDs`** und anderer Informationen, um die Online-Suche und das Durchsuchen zu erleichtern.

2. Standardmäßig sind die FX nach **`Name`** aufsteigend sortiert. Mit den Filter-, Sortier- und Suchfunktionen oben in der Tabelle können Sie Bedingungen festlegen, um spezifische FX-Einträge zu filtern und zu suchen.

3. Wie in der Tabelle gezeigt, können Video-FX in VEGAS in vier Kategorien eingeteilt werden: **`Video-FX`**, **`Übergangs-FX`**, **`Mediengenerator-FX`** und **`Spurkompositionsmodus-FX`**. Die Spalte **`Typ`** in der Tabelle gibt an, zu welcher Kategorie ein FX in einem Projekt hinzugefügt werden kann. Ein FX kann zu mehreren FX-Kategorien gehören und in jeder unterschiedliche Eigenschaften aufweisen. Beispielsweise können **`Übergangs-FX`** von **`Sapphire`** zu **`Video-FX`**, **`Übergangs-FX`** und **`Spurkompositionsmodus-FX`** gehören. Wenn sie als **`Video-FX`** hinzugefügt werden, haben sie standardmäßig keine Animation, enthalten jedoch einen zusätzlichen Fortschrittsparameter wie **`Dissolve Amount`**, der mit Keyframes versehen werden kann. Bei Verwendung als **`Übergangs-FX`** haben sie eine automatische Übergangsanimation. Dies ist ein wichtiger Unterschied.

4. Je nach VEGAS-Version oder Plugin kann derselbe FX unterschiedliche **`UIDs`** haben. Beispielsweise hat **`NewBlue`** eine ältere DXT-Version und eine neuere OFX-Version, die in der Tabelle als **`NewBlue DXT`** und **`NewBlue OFX`** unterschieden werden. Zusätzlich wurden für VEGAS Pro 18 und höher die drei mitgelieferten FX – **`Border`**, **`Test Pattern`** und **`Channel Blend`** – von den älteren DXT-Versionen auf OFX-Versionen aktualisiert. Die Tabelle zielt darauf ab, so viele Versionen von FX wie möglich zu sammeln, wobei die **`UID`** als eindeutiger Schlüssel und Aufnahmekriterium dient. Insbesondere für VEGAS Pro 16 und frühere Versionen folgen einige mitgelieferte OFX-**`UIDs`** dem Format **`{Svfx:com.sonycreativesoftware:xxx}`** anstelle des neueren **`{Svfx:com.vegascreativesoftware:xxx}`**. Dies wird in der Tabelle nicht weiter erläutert; bitte passen Sie dies entsprechend an.

## Tabelle

<VideoFxTable />
