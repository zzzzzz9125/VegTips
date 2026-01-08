---
layout: doc
title: Extension UltraPaste!
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

# Extension UltraPaste!

<ImageOnDemand button-text="Charger l'image" alt="Icône" src="ultrapaste/img001_ultrapaste_icon.png" />

## Aperçu

Cette extension introduit une méthode d'importation de fichiers **<u>novatrice</u>** pour VEGAS Pro. Avec une simple touche de raccourci, vous pouvez importer presque tous types de fichiers : fichiers multimédias classiques, images du presse-papiers, fichiers de sous-titres SRT, et même des données du presse-papiers de REAPER. Il vous suffit de faire `Ctrl + C`, puis `Ctrl + Maj + V` pour importer rapidement ces fichiers dans la timeline de VEGAS.

Exemple de la méthode d'importation de fichiers multimédias :

<ImageOnDemand button-text="Charger l'image" alt="Importation Média" src="ultrapaste/img015_ultrapaste_media_import.gif" />

Interaction de la fonction `Image du presse-papiers` avec votre outil de capture d'écran :

<ImageOnDemand button-text="Charger l'image" alt="Capture d'écran" src="ultrapaste/img016_ultrapaste_screenshot.gif" />

Interaction de la fonction `Image du presse-papiers` avec PowerPoint :

<ImageOnDemand button-text="Charger l'image" alt="PowerPoint" src="ultrapaste/img017_ultrapaste_ppt.gif" />

## Installation

Version actuelle de l'extension : v1.03 bêta

Versions supportées : Sony Vegas Pro 13 - Magix Vegas Pro 22

1.  Rendez-vous sur [Releases](https://github.com/zzzzzz9125/UltraPaste/releases) pour télécharger le dernier fichier .zip et extrayez-le. Sélectionnez `UltraPaste.dll` <small>(ou `UltraPaste_13.dll` pour `Sony VEGAS Pro 13`)</small> et `UltraPaste.png`, copiez-les, et collez-les dans le dossier des extensions :
  - `C:\ProgramData\Vegas Pro\Application Extensions\`
  - ou pour Sony : `C:\ProgramData\Sony\Vegas Pro\Application Extensions\`
  - Cliquez [ici](/fr/#étapes-générales-pour-installer-un-script-ou-une-extension) si vous ne savez pas comment installer les extensions

2.  Après l'installation, vous pouvez trouver la fenêtre d'extension ancrable via `Outils -> UltraPaste!`.

<ImageOnDemand button-text="Charger l'image" alt="Menu Outils" src="ultrapaste/img002_ultrapaste_tools_menu.png" />

## Utilisation

Tout d'abord, l'élément principal `UltraPaste!`. C'est la fonction principale de l'extension ; presque toutes les opérations peuvent être réalisées avec celle-ci. Vous pouvez lui attribuer un raccourci clavier dans `Options -> Personnaliser le clavier` :

<ImageOnDemand button-text="Charger l'image" alt="Personnaliser le clavier" src="ultrapaste/img003_ultrapaste_keyboard.png" />

`Ctrl + Maj + V` est ma recommandation personnelle. Vous pouvez également lier un autre raccourci pratique. Il n'est pas recommandé de lier `Ctrl + V`, car cela écraserait la touche de collage native de VEGAS.

Ainsi, le raccourci pour notre touche UltraPaste est défini. Toutes les fonctionnalités d'opération en un clic apparaissant dans le menu peuvent également voir leur raccourci ajouté de cette manière.

La logique d'importation de fichiers est simple : par exemple, sélectionnez n'importe quel fichier média sur votre bureau, faites `Ctrl + C`, exécutez le raccourci `UltraPaste` dans VEGAS, et il sera importé sur la piste VEGAS actuellement sélectionnée. De plus, si vous avez défini une région de boucle dans VEGAS, le fichier peut être importé en fonction de la longueur de cette région de boucle.

Au-delà de l'importation basique de fichiers, l'extension peut également lire ces types de données du presse-papiers :
*   Images du presse-papiers
*   Texte brut et fichiers de sous-titres
*   Données du presse-papiers REAPER

Toutes ces données peuvent être correctement reconnues et traitées.

<br>

`UltraPaste! - Fenêtre` est la fenêtre de paramètres de l'extension, où vous pouvez ajuster la logique de comportement d'`UltraPaste`.

### Général

<ImageOnDemand button-text="Charger l'image" alt="Général" src="ultrapaste/img004_ultrapaste_general.png" />

Exclure les types de fichiers : Cette option fait que l'extension exclut les fichiers correspondant à des modèles de noms spécifiques. Elle utilise des expressions DOS basiques. Par exemple, les `*.sfvp0` et `*.sfap0` sur l'image sont respectivement les fichiers proxy vidéo et audio de VEGAS Pro. Ces fichiers proxy peuvent en fait être importés directement dans VEGAS, mais ils sont exclus par défaut pour éviter les erreurs de l'utilisateur. Si vous n'avez pas besoin d'importer certains fichiers spécifiques, vous pouvez ajuster ce paramètre vous-même.

<br>

### Image du presse-papiers

<ImageOnDemand button-text="Charger l'image" alt="Image du presse-papiers" src="ultrapaste/img005_ultrapaste_clipboard_image.png" />

`Position de départ` : La position de départ pour l'importation de fichiers. Divisée en trois catégories : `Curseur`, `Curseur de lecture`, `Début du projet`. La différence entre `Curseur` et `Curseur de lecture` est que lorsque vous lisez la timeline, le `Curseur` est juste le point de départ de la lecture, tandis que le `Curseur de lecture` est la position de lecture en temps réel de la timeline.

`Déplacer le curseur à la fin` : Imite le comportement de collage, en déplaçant automatiquement le curseur à la toute fin du ou des nouveaux événements après le collage.

`Chemin de sauvegarde` : VEGAS ne peut pas intégrer des fichiers à partir de rien ; tous les fichiers multimédias doivent être enregistrés à un emplacement réel. Nous devons définir le chemin pour les images du presse-papiers.

*   Valeur par défaut : `Clipboard\<yyyyMMdd_HHmmss>.png`. Ceci équivaut à `%PROJECTFOLDER%\Clipboard\<yyyyMMdd_HHmmss>.png`, où `%PROJECTFOLDER%` fait référence au chemin du dossier du projet actuel. <small>(Si le projet n'a pas été enregistré, il utilise par défaut le chemin du bureau.)</small>
*   `<yyyyMMdd_HHmmss>` fait référence au format d'horodatage pour l'enregistrement des fichiers. Ici, nous imposons que les parties du chemin nécessitant une conversion en horodatage doivent être entourées de `<>`, sinon l'extension ne les convertira pas.
    *   Pour d'autres syntaxes de formatage d'horodatage, veuillez consulter : https://learn.microsoft.com/dotnet/api/system.datetime.tostring

<br>

### Données REAPER

<ImageOnDemand button-text="Charger l'image" alt="Données Reaper" src="ultrapaste/img006_ultrapaste_reaper_data.png" />

C'est l'une des fonctionnalités clés de cette extension : une implémentation complète de l'importation et de l'exportation des données du presse-papiers REAPER. Vous pouvez sélectionner divers éléments ou pistes dans REAPER, faire `Ctrl + C`, puis directement `Ctrl + Maj + V` pour les coller dans la timeline VEGAS.

L'extension adapte divers paramètres entre les deux logiciels :
*   `Propriétés de l'élément REAPER` → `Propriétés de l'événement VEGAS`
*   `Enveloppes d'élément/piste REAPER` → `Enveloppes de piste VEGAS`
*   `Marqueurs d'étirement d'élément REAPER` → `Étirement d'événement audio VEGAS / Enveloppes de vitesse d'événement vidéo`
*   `Propriétés de piste REAPER` → `Propriétés de piste VEGAS`
*   ...

En bref, tout ce qui peut être adapté l'a été. Vous pouvez également sélectionner un fichier projet REAPER, faire `Ctrl + C`, et l'importer comme plusieurs pistes.

Vous pouvez également exporter des événements ou des pistes VEGAS vers des données du presse-papiers REAPER, puis faire `Ctrl + V` dans REAPER, réalisant ainsi une interopérabilité totale entre les logiciels.

<ImageOnDemand button-text="Charger l'image" alt="Exemple Reaper 1" src="ultrapaste/img007_ultrapaste_reaper_1.png" />

<ImageOnDemand button-text="Charger l'image" alt="Exemple Reaper 2" src="ultrapaste/img008_ultrapaste_reaper_2.png" />

Note : En raison des limitations de l'API de script, lorsque la version de VEGAS est antérieure à la version finale 15, `VP15B416`, tous les paramètres liés à la hauteur des événements audio ne peuvent pas être transférés dans VEGAS, ni être exportés vers les données du presse-papiers REAPER.

`Fermer l'espace de début` : Les données du presse-papiers REAPER incluent la position absolue des éléments d'origine dans le projet REAPER. Lorsque "Fermer l'espace de début" est désactivé, la position de départ du collage = position de début du projet REAPER. Lorsque "Fermer l'espace de début" est activé, la position de départ du collage = position de départ du premier élément.

`Ajouter un flux vidéo` : Ajoute un flux vidéo aux éléments REAPER importés.

<br>

### Images PSD

<ImageOnDemand button-text="Charger l'image" alt="Images PSD" src="ultrapaste/img009_ultrapaste_psd.png" />

`Développer tous les calques` : Lors de l'importation d'une image PSD multicouche, la développe automatiquement en pistes VEGAS séparées.

`Ajouter d'autres calques` : Pour un calque PSD unique sélectionné, ajoute tous les autres calques au-dessus et en dessous de celui-ci.

<br>

### Sous-titres

<ImageOnDemand button-text="Charger l'image" alt="Sous-titres" src="ultrapaste/img010_ultrapaste_subtitles.png" />

Les sous-titres sont une autre fonctionnalité clé de cette extension. Vous pouvez copier n'importe quel fichier `Texte brut` / `TXT` / `SRT` / `LRC` et le coller dans la timeline VEGAS.

`Type de générateur` : Le type de générateur de sous-titres.

`Nom du préréglage` : Le nom du préréglage du générateur de sous-titres que vous souhaitez utiliser. Vous devez préalablement ajuster et enregistrer le préréglage dans le FX correspondant.

Pour les plugins de type DXT `ProType Titler` et `(Legacy) Text`, seuls les préréglages enregistrés par l'utilisateur sont reconnus ; les préréglages intégrés à VEGAS ne sont pas pris en charge. <small>(Si vous voulez les utiliser, renommez-les et réenregistrez-les simplement.)</small>

`Région` : Importe les sous-titres sous forme de régions VEGAS.

`Nombre maximum de caractères` : Retourne automatiquement à la ligne lorsque le nombre de caractères sur une ligne dépasse la valeur spécifiée. 0 signifie aucune limite de caractères.

`Ignorer les mots` : Lorsque décoché, l'extension optimise pour la séparation des mots par des espaces, ce qui signifie qu'elle ne forcera pas la séparation d'un mot entier et essaiera de revenir à la ligne aux espaces. Bien sûr, pour des langues comme le chinois qui n'utilisent généralement pas d'espaces, vous pouvez directement cocher cette case, et le texte sera divisé strictement selon le nombre de caractères.

`Nombre maximum de lignes` : Lorsque le nombre de lignes dans un bloc de sous-titre dépasse un certain nombre, il est automatiquement divisé en nouveaux blocs de sous-titres. La longueur de division est moyenne à partir du bloc d'origine.

`Multi-piste` : Divise les lignes multiples d'un seul bloc de sous-titre en plusieurs pistes. Remarque : l'extension n'applique aucun ajustement de position à ces multiples pistes, donc de tels sous-titres se chevaucheront dans la fenêtre de prévisualisation et nécessiteront un ajustement manuel.

`Longueur par défaut` : La longueur par défaut (en secondes) lors de l'importation de texte brut du presse-papiers ou de fichiers TXT sans horodatage.

<ImageOnDemand button-text="Charger l'image" alt="Région de sous-titres" src="ultrapaste/img011_ultrapaste_subtitles_region.png" />

<p align="center">Astuce : Il est plus pratique de définir d'abord une région sur la timeline, puis d'appuyer sur la touche de raccourci.</p>

`Appliquer le préréglage aux événements sélectionnés` : Applique le préréglage actuel aux événements sélectionnés. Prend uniquement en charge les effets OFX, c'est-à-dire ne prend pas en charge `ProType Titler` et `(Legacy) Text`.

`Convertir T&T en ProType Titler` : Convertit en un clic les événements "Titles & Text" sélectionnés en événements `ProType Titler`.

<br>

### Média

<ImageOnDemand button-text="Charger l'image" alt="Média" src="ultrapaste/img012_ultrapaste_media.png" />

`Méthode d'ajout` : Divisée en trois types : `Dans le temps`, `Sur les pistes`, `Comme prises`. Complètement cohérent avec les trois méthodes d'importation de fichiers dans le menu d'importation par glisser-déposer clic droit natif de VEGAS.

`Type de flux` : Divisée en `Tous`, `Vidéo uniquement`, `Audio uniquement`.

`Longueur de l'événement` : Divisée en `Longueur du média`, `Boucle`, `Moyenne de boucle`. `Moyenne de boucle` n'est effective que lorsque la méthode d'ajout est `Dans le temps`.

`Importation automatique de séquences d'images` : Lorsque l'extension détecte que l'utilisateur importe une séquence d'images (par exemple, tous les fichiers image sélectionnés suivent une logique de nommage comme `000000.png - 114514.png`, et les dimensions des images sont identiques), les importe automatiquement comme une séquence d'images.

`Ajouter le flux manquant` : Ajoute le flux manquant aux événements sélectionnés.

<br>

Importation personnalisée des médias :

<ImageOnDemand button-text="Charger l'image" alt="Importation personnalisée des médias" src="ultrapaste/img013_ultrapaste_media_custom.png" />

<p align="center">Définir des règles d'importation pour des noms de fichiers multimédias spécifiques</p>

La personnalisation vous permet de définir des règles d'importation spéciales pour des noms de fichiers multimédias spécifiques. Après modification, cliquez sur `√` pour enregistrer dans les paramètres. Pour les paramètres dont vous n'avez plus besoin, appuyez sur `×` pour supprimer.

<small>La logique de l'interface utilisateur ici est un peu rigide ; la chaîne de règle de fichier est utilisée comme nom de clé. Par conséquent, pour modifier un nom de fichier, vous devez d'abord le supprimer, puis le ressaisir et le modifier, sinon l'original ne sera pas supprimé.</small>

Par exemple, mon `1_*(*).wav;1_*(*).flac` ici fait référence à la convention de nommage des fichiers stem (pistes séparées) générés par [UVR5](https://github.com/Anjok07/ultimatevocalremovergui). Nous exigeons qu'ils soient importés en audio uniquement, en utilisant la méthode Sur les pistes. Ensuite, dans le dossier, sélectionnez les fichiers stem, faites `Ctrl + C`, et appuyez sur la touche de raccourci `UltraPaste!` pour importer directement les stems [UVR5](https://github.com/Anjok07/ultimatevocalremovergui).

<br>

### Données VEGAS

<ImageOnDemand button-text="Charger l'image" alt="Données VEGAS" src="ultrapaste/img014_ultrapaste_vegas_data.png" />

`Type d'importation VEG` : Divisée en trois catégories : `Ouvrir le fichier projet`, `Comme projet imbriqué`, `Importer le média du projet`.

`Coller les attributs des événements` : Lorsque les données du presse-papiers contiennent des événements VEGAS, exécute `Collage sélectif des attributs des événements`.

(En raison des limitations de version, VEGAS Pro 14 et versions antérieures ne peuvent pas utiliser `Collage sélectif des attributs des événements` et ne peuvent effectuer que `Coller les attributs des événements`.)

`Exécuter le script` : Lorsque les fichiers copiés contiennent des fichiers `.cs` / `.js` / `.vb` / `.dll`, tente de les exécuter en tant que scripts. Les échecs d'exécution signaleront directement une erreur, donc lors de l'activation de cette option, essayez de ne pas copier-coller au hasard des fichiers `.dll`, etc.

`Générer des données de presse-papiers VEGAS mixtes` : Pas très utile pour les utilisateurs généraux. Cependant, lors de l'utilisation simultanée de la version Sony (Sony VEGAS Pro 13 et versions antérieures) et des versions supérieures, cette opération en un clic convertit les événements VEGAS dans les données du presse-papiers en une version pouvant être collée à la fois dans les versions Sony et Magix. Fonctionnalité expérimentale, pas complètement fiable.
