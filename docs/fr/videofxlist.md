---
layout: doc
title: Liste des effets vidéo FX
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

# Liste des effets vidéo FX VEGAS Pro

## Notes

1. Cette page récapitule tous les **`effets vidéo FX`** disponibles dans VEGAS Pro, y compris leurs **`Noms`**, **`Groupes`**, **`UIDs`** et autres informations, facilitant la recherche et la consultation en ligne.

2. Par défaut, les effets FX sont triés par ordre croissant selon le **`Nom`**. En utilisant les fonctions de filtre, de tri et de recherche en haut du tableau, vous pouvez définir des conditions pour filtrer et rechercher des entrées d'effets spécifiques.

3. Comme indiqué dans le tableau, les effets vidéo dans VEGAS peuvent être divisés en quatre catégories : **`Effets vidéo FX`**, **`Effets de transition FX`**, **`Effets de générateur de média FX`** et **`Effets de mode de composition de piste FX`**. La colonne **`Type`** dans le tableau indique à quelle catégorie un effet peut être ajouté dans un projet. Un effet peut appartenir à plusieurs catégories d'effets FX et présenter des caractéristiques différentes dans chacune. Par exemple, les **`effets de transition FX`** de **`Sapphire`** peuvent appartenir à **`Effets vidéo FX`**, **`Effets de transition FX`** et **`Effets de mode de composition de piste FX`**. Lorsqu'il est ajouté en tant qu' **`Effet vidéo FX`**, il n'a pas d'animation par défaut mais inclut un paramètre de progression supplémentaire tel que **`Quantité de dissolution`** qui peut être animé avec des images clés. Lorsqu'il est utilisé comme **`Effet de transition FX`**, il a une animation de transition automatique. C'est une distinction importante à noter.

4. Selon la version de VEGAS ou du plugin, le même effet peut avoir des **`UIDs`** différents. Par exemple, **`NewBlue`** a une ancienne version DXT et une nouvelle version OFX, distinguées dans le tableau comme **`NewBlue DXT`** et **`NewBlue OFX`**. De plus, pour VEGAS Pro 18 et versions ultérieures, les trois effets intégrés — **`Bordure`**, **`Motif de test`** et **`Mélange de canaux`** — ont été mis à niveau des anciennes versions DXT vers les versions OFX. Le tableau vise à collecter autant de versions d'effets que possible, en utilisant l' **`UID`** comme clé unique et critère d'inclusion. Notamment, pour VEGAS Pro 16 et versions antérieures, certains **`UIDs`** OFX intégrés suivent le format **`{Svfx:com.sonycreativesoftware:xxx}`** au lieu du plus récent **`{Svfx:com.vegascreativesoftware:xxx}`**. Ceci n'est pas davantage détaillé dans le tableau ; veuillez ajuster en conséquence.

## Tableau

<VideoFxTable />
