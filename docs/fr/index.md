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

# Guide de dépannage VEGAS Pro : Problèmes courants et solutions
<p align="right"><strong>Version : 2026.01&ensp;&ensp;Auteur : <a href="https://github.com/zzzzzz9125">zzzzzz9125</a></strong></p>

::: warning
Cette page est traduite automatiquement depuis [la version originale chinoise](/zh/) et n'a pas encore été entièrement relue par un humain. Si quelque chose semble ambigu, vous pouvez le signaler sur la page [Issues](https://github.com/zzzzzz9125/VegTips/issues) du projet, ou vous pouvez apporter les corrections et soumettre une pull request.

Pour le moment, je n'accepte pas de demandes privées directes concernant des problèmes spécifiques liés à VEGAS Pro. Si vous avez des questions, veuillez les publier sur [d'autres forums publics](#xvii-communautés-forums-vegas) pour obtenir de l'aide. Je pourrai collecter de bonnes solutions provenant d'autres forums et les résumer ici.
:::

## 0. Préface

- Cet article n'est pas un tutoriel de base pour débutants. C'est un guide pour résoudre divers problèmes dans VEGAS Pro et n'abordera donc pas extensivement les opérations logicielles de base. Cet article soutient l'utilisation de logiciels sous licence. Pour les informations sur l'achat d'une licence légitime, voir la section [Canaux d'achat du logiciel](#xvi-canaux-d-achat-du-logiciel) à la fin.

- Cet article fait plus de 10 000 mots et couvre les problèmes courants et leurs solutions pour VEGAS Pro. Il a été publié pour la première fois sur le site chinois Bilibili, puis résumé et traduit dans ce document pour une consultation en ligne. Si vous trouvez des omissions, vous pouvez les signaler [dans ce post](https://www.vegascreativesoftware.info/us/forum/posts--150586/).

- Lors de la consultation de ce guide, il est recommandé d'utiliser la table des matières pour trouver votre catégorie de problème et d'utiliser la fonction de recherche **`Ctrl + F`** pour rechercher des mots-clés ou des codes d'erreur pour une résolution plus rapide. Les chemins mentionnés dans cet article sont généralement exprimés à l'aide de variables d'environnement, par exemple **`%localappdata%\VEGAS Pro\`**. **Vous pouvez copier-coller le texte du chemin dans la barre d'adresse de l'Explorateur de fichiers Windows et appuyer sur `Entrée` pour naviguer rapidement.** Cet article mentionne parfois des numéros de build spécifiques pour certaines versions, par ex. `23 build 302`, où `302` est le numéro de build. Vous pouvez voir le numéro de build actuel sur l'écran de chargement au démarrage de VEGAS. Le contenu marqué d'un **<u>soulignement</u>** contient des hyperliens.

- Cet article est sous licence **CC BY-NC-SA 4.0**. Lors de la reproduction, l'adaptation ou l'utilisation de ce contenu sous quelque forme que ce soit, veuillez respecter les principes **Paternité, Pas d'Utilisation Commerciale et Partage dans les Mêmes Conditions**. Pour plus de détails, veuillez lire le [Texte intégral de la licence](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr).

<br>

## I. À propos de l'optimisation des préférences VEGAS

**Les "guides d'optimisation" ne sont plus listés ici car il n'y a aucune garantie qu'ils apportent une optimisation positive pour VEGAS Pro, et certaines informations peuvent être obsolètes et trompeuses.**

**Selon les responsables de MAGIX, il est préférable de conserver les paramètres par défaut, car ils sont considérés comme optimaux pour l'utilisateur moyen.**

**Il n'existe pas de paramètre de préférences unique qui convienne à tous. Même si vous trouvez ailleurs des soi-disant "guides d'optimisation", modifiez-les en fonction de votre situation spécifique.**

**De plus, je ne recommande pas d'utiliser directement des fichiers de registre ou des fichiers de préférences d'autres personnes prétendument "optimisés".**

<br>

## II. À propos des préférences VEGAS, du répertoire de cache, des préréglages, etc.

### Répertoire des préférences et du cache VEGAS

Note : Les chemins suivants utilisent la **notation de variable d'environnement `% %`**. Vous pouvez copier-coller le texte du chemin dans la barre d'adresse de l'Explorateur de fichiers Windows et appuyer sur `Entrée` pour naviguer rapidement. Les chemins réels sont également fournis pour référence.

- Répertoire de cache principal de VEGAS : **`%localappdata%\VEGAS Pro\`**
  - C'est-à-dire `C:\Users\<NomUtilisateur>\AppData\Local\VEGAS Pro\`
  - Différentes versions sont stockées dans des dossiers séparés pour l'indépendance, par ex. **`%localappdata%\VEGAS Pro\23.0\`**.

<br>

Pour les préférences VEGAS :
- Les anciennes versions (VP18 et antérieures) sont enregistrées dans le chemin de registre **`HKEY_CURRENT_USER\Software\Sony Creative Software\VEGAS Pro\<version>\Metrics\Application\`**, ce qui est difficile à éditer manuellement. Pour la sauvegarde, vous pouvez utiliser l'Éditeur du Registre (`regedit`) pour sauvegarder manuellement tout le contenu sous ce chemin de registre.

- Les nouvelles versions (VP19 et ultérieures) sont enregistrées dans le fichier du répertoire de cache **`%localappdata%\VEGAS Pro\<version>\persist.prefs`**. Le contenu du fichier est au format `XML`, ce qui le rend plus facile à éditer manuellement. Vous pouvez copier ce fichier pour sauvegarde.

<br>

Autres répertoires contenant des paramètres et des fichiers de préréglages VEGAS pour sauvegarde manuelle :

- Préréglages FX enregistrés, préréglages de chaînes de plugins, FX favoris, modèles de rendu, etc. : `%appdata%\VEGAS\`  
  C'est-à-dire `C:\Users\<NomUtilisateur>\AppData\Roaming\VEGAS\`

- Dispositions de fenêtres VEGAS, paramètres clavier, etc. : `%appdata%\VEGAS Pro\`  
  C'est-à-dire `C:\Users\<NomUtilisateur>\AppData\Roaming\VEGAS Pro\`

- Préréglages FX de plugins OFX enregistrés : `%userprofile%\Documents\OFX Presets\`  
  C'est-à-dire `C:\Users\<NomUtilisateur>\Documents\OFX Presets\`  
  ou chemin OneDrive : `C:\Users\<NomUtilisateur>\OneDrive\Documents\OFX Presets\`

VP13 et versions antérieures ont des répertoires de cache dans un dossier Sony, par ex. **`%localappdata%\Sony\VEGAS Pro\`**, etc.

**Pour d'autres chemins importants, référez-vous à : [https://www.vegascreativesoftware.info/us/tutorials/posts--139290/](https://www.vegascreativesoftware.info/us/tutorials/posts--139290/)**

<br>

### Utilisation, importation et exportation des préréglages de chaînes de plugins VEGAS

Installez et utilisez `Sony Preset Manager`.

  - Lien de téléchargement : https://web.archive.org/web/20160826164938/http://dspcdn.sonycreativesoftware.com/current/extras/presetmngr20k.exe

<!-- 2. As shown in the diagram:

<ImageOnDemand alt="Plugin Chain" src="vegtips/image001_plugin_chain.png" />

<p align="center">Illustration pour l'utilisation du VEGAS Preset Manager v0.2</p> -->

<br>

### Accéder aux préférences internes VEGAS

- VP18 et plus : Maintenez **`Maj`**, puis allez dans le menu supérieur **`Options -> Interne`**.

- VP18 et moins : Maintenez **`Maj`**, puis allez dans le menu supérieur **`Options -> Préférences`**, passez à l'onglet **`Interne`**.

<br>

## III. Solutions pour les plantages, blocages, fenêtres d'erreur causés par des bugs

(Les solutions fournies ici sont des étapes de dépannage générales. Elles ne résoudront pas nécessairement tous les problèmes.)

### 1. Désactiver l'accélération GPU

**`Préférences -> Vidéo`**, sous **`Accélération GPU du traitement vidéo`**, sélectionnez **`Désactivée`**. Cette option gère principalement si les FX vidéo utilisent l'accélération GPU. Bien que l'accélération GPU puisse rendre l'aperçu et le rendu des FX plus fluides, elle a **plus de bugs dans les versions VEGAS inférieures et est sujette à provoquer des plantages**. Lors du dépannage, essayez d'abord **de désactiver l'accélération GPU**. Pour les nouvelles versions VEGAS (par ex. `22 build 250`), il est toujours recommandé de l'activer si les performances de votre GPU sont bonnes et qu'il n'y a pas d'autres problèmes.

<br>

### 2. Désactiver la fenêtre contextuelle de rapport d'erreur VEGAS

Un scénario courant : Lors de l'exécution de VEGAS / **clic sur `Fichier -> Rendre sous`**, une fenêtre d'erreur apparaît immédiatement.

<ImageOnDemand alt="Problem Report" src="vegtips/image002_problem_report.png" />

**Dans ce cas, cochez toujours la case `Afficher les détails du problème` pour obtenir le contenu de l'erreur.**

Parfois, la fonctionnalité de rapport d'erreur elle-même peut être le problème. La désactiver complètement peut aider.

Deux façons de désactiver les fenêtres contextuelles de rapport d'erreur :

- **Localisez le fichier `ErrorReportClient.exe` dans le répertoire d'installation de VEGAS et renommez-le.**

- Localisez et exécutez **`PRSConfig.exe`** dans le répertoire d'installation de VEGAS, sélectionnez **`Désactivé`**.

Chaque méthode désactivera les fenêtres contextuelles de rapport d'erreur VEGAS.

Parfois, le problème peut persister. Si c'est le cas, réactivez-le et concentrez-vous sur l'analyse du contenu de l'erreur. **Le contenu de l'erreur peut parfois fournir des indices utiles. Voir [Idées de dépannage pour des erreurs spécifiques](#8-idées-de-dépannage-pour-des-erreurs-spécifiques).**

<br>

### 3. Réinstaller VEGAS

Réinstaller VEGAS ne traite que les problèmes où le logiciel lui-même n'a pas été entièrement installé ou les fichiers de programme sont corrompus, c'est donc rarement nécessaire. La réinstallation seule ne réinitialise pas les préférences.

<br>

### 4. Réinstaller les pilotes matériels

Les problèmes logiciels peuvent parfois être causés par des pilotes matériels. Pour les problèmes audio, essayez de réinstaller les pilotes de votre carte son. Pour les problèmes vidéo, essayez de réinstaller les pilotes de votre carte graphique.

<br>

### 5. Réinitialiser les préférences

Rencontrer des problèmes inexplicables, comme **l'audio importé étant complètement bruyant**, peut parfois être résolu en **réinitialisant les préférences**.

**La réinitialisation effacera : [Toutes les préférences et le cache pour la version VEGAS actuelle].**

La méthode standard : Maintenez `Ctrl + Maj` et exécutez VEGAS. Une invite "Réinitialiser ?" apparaîtra. Cochez `Supprimer toutes les données d'application mises en cache` et cliquez `Oui`.

<ImageOnDemand alt="Reset" src="vegtips/image003_reset.png" />

<p align="center">Réinitialiser ? (Oui/Non)</p>

Cependant, la réinitialisation de cette façon ne crée pas de sauvegarde de vos préférences précédentes. Les préférences originales seront complètement effacées, ce qui comporte un certain risque. Par conséquent, je recommande de sauvegarder vos préférences avant la réinitialisation. Voir [Répertoire des préférences et du cache VEGAS](#répertoire-des-préférences-et-du-cache-vegas).

<br>

### 6. Installer Microsoft Visual C++ et .NET Framework Runtimes

Microsoft Visual C++ Redistributables : https://learn.microsoft.com/cpp/windows/latest-supported-vc-redist

.NET Framework Repair Tool : https://support.microsoft.com/topic/942a01e3-5b8b-7abb-c166-c34a2f4b612a

<br>

### 7. Essayer une version différente

**Qu'une version VEGAS convienne à votre PC est quelque peu aléatoire.**

La version la plus stable est largement considérée comme étant VP13. Pour un équilibre stabilité-fonctionnalités, **VP18** est recommandée. Les versions plus récentes ne garantissent pas la stabilité. Depuis la mise à jour du moteur vidéo dans `21 build 300`, les problèmes de décodage et de rendu vidéo lents de VEGAS sont progressivement résolus. Cette amélioration se poursuit jusqu'à la version finale de VP22. **Actuellement, je recommande le plus la version finale VP22 (`22 build 250`), car elle présente des améliorations significatives.** La dernière VP23 n'est toujours pas très stable.

Historique des versions VEGAS Pro / VEGAS Post : https://www.vegascreativesoftware.info/us/forum/posts--104998/

<br>

### 8. Idées de dépannage pour des erreurs spécifiques

Si vous avez essayé presque toutes les méthodes de cet article (en particulier celles du chapitre [FAQ sur le fonctionnement du logiciel VEGAS](#iv-faq-sur-le-fonctionnement-du-logiciel-vegas)) et que l'erreur persiste, essayez l'approche de cette section. Certaines erreurs, comme `0xC0000005`, n'ont pas de cause fixe et définitive. Rencontrer de telles erreurs et constater que la plupart des solutions ici ne fonctionnent pas est parfaitement normal. Rechercher le code d'erreur en ligne donne de nombreuses solutions, mais en trouver une qui fonctionne réellement peut être comme chercher une aiguille dans une botte de foin. Cette section fournit une idée de dépannage générale :

1.  **Trouvez les détails de l'erreur.** Si le rapport d'erreur est [activé](#2-désactiver-la-fenêtre-contextuelle-de-rapport-d-erreur-vegas), cochez la case `Afficher les détails du problème` dans la fenêtre contextuelle. Même avec le rapport d'erreur désactivé, vous pourriez parfois obtenir des détails d'erreur. Ces deux sources pourraient fournir des informations différentes ou supplémentaires ; il est conseillé de vérifier les deux.

2.  **Analysez les détails de l'erreur.** Recherchez deux points clés : le module de défaut et le code d'erreur. Le module de défaut est sur la ligne `Fault Module`.

    - Si le module de défaut pointe vers un composant d'un autre logiciel, essayez de désinstaller ce logiciel.
    - S'il pointe vers un composant VEGAS, essayez de réinstaller VEGAS ou de changer de version.
    - S'il pointe vers un composant système, c'est moins certain.

    Le code d'erreur est le `0x` suivi d'un nombre hexadécimal à 8 chiffres. Par exemple :

    - `0xC06D007F` : Considérez les problèmes de plugins vidéo. Déplacez les plugins OFX hors du dossier OFX.
    - `0xE0434352` : Considérez les problèmes de composants .NET. Essayez de réparer .NET Framework, ou les problèmes de chargement d'extension. Déplacez les extensions hors du dossier d'extensions.

    Autres indices : Si le contenu de l'erreur mentionne explicitement un plugin spécifique ou le mot-clé `OFX`, considérez aussi les problèmes de plugins vidéo.

    Si rien de ce qui précède ne fonctionne, vous devrez rechercher en ligne le code d'erreur pour diverses solutions. Certains problèmes pourraient même nécessiter une réinstallation du système pour être résolus.

<br>

## IV. FAQ sur le fonctionnement du logiciel VEGAS

Q : Comment **localiser** l'interface logicielle VEGAS (en français par exemple) ?

R : Le programme VEGAS inclut en interne 9 langues : `Anglais, Allemand, Français, Portugais, Espagnol, Polonais, Chinois, Japonais, Coréen`. Cependant, le programme d'installation fourni sur le site officiel est la version Langue Internationale, contenant seulement les 5 premières langues listées, **excluant le Français**. Il existe trois voies de localisation :

1.  **Utiliser un programme d'installation français.** Avant [l'achat](#xvi-canaux-d-achat-du-logiciel), vérifiez la liste de support des langues pour voir si le français est inclus. Par exemple, la version sur le site officiel n'inclut actuellement pas le français, tandis que les versions fournies par l'agent français et l'édition Steam incluent le français. Sinon, vous devez essayer les deux dernières méthodes.

2.  **Utiliser un pack de localisation créé par d'autres utilisateurs.**

3.  **Modifier le registre.** Modifier le registre peut activer la langue française intégrée dans VEGAS, mais comparé aux deux premières méthodes, ce français intégré pourrait être incomplet ou imprécis.

**Étapes de modification manuelle du registre :**

**Avec VEGAS déjà installé**, appuyez sur `Win + R`, tapez `regedit` pour ouvrir l'Éditeur du Registre. Les paramètres de langue VEGAS se trouvent dans la valeur `ULangID` des clés de registre suivantes :

- VP20 et plus :

```text
HKEY_LOCAL_MACHINE\SOFTWARE\VEGAS Creative Software\VEGAS Pro\23.0\Lang
HKEY_LOCAL_MACHINE\SOFTWARE\VEGAS Creative Software\VEGAS Creative Software Video Plug-In Pack\1.0\Lang
HKEY_LOCAL_MACHINE\SOFTWARE\VEGAS Creative Software\VEGAS Creative Software OFX GPU Video Plug-in Pack\1.0\Lang
HKEY_LOCAL_MACHINE\SOFTWARE\VEGAS Creative Software\Error Reporting Client\1.0\Lang
```

- VP19 et moins :
```text
HKEY_LOCAL_MACHINE\SOFTWARE\Sony Creative Software\VEGAS Pro\19.0\Lang
HKEY_LOCAL_MACHINE\SOFTWARE\Sony Creative Software\Sony Vegas Video Plug-In Pack\1.0\Lang
HKEY_LOCAL_MACHINE\SOFTWARE\Sony Creative Software\Sony Vegas OFX GPU Video Plug-in Pack\1.0\Lang
HKEY_LOCAL_MACHINE\SOFTWARE\Sony Creative Software\Error Reporting Client\1.0\Lang
```

Ici, `23.0` et `19.0` représentent la version majeure VEGAS actuelle. La première ligne est le paramètre de langue de l'interface principale, mais il est recommandé de changer les quatre.

<ImageOnDemand alt="Language Registry" src="vegtips/image004_language_reg.png" />

Si vous avez installé la version anglaise, la valeur par défaut de `ULangID` est probablement la valeur hexadécimale `409` (décimal `1033`). Changez-la en **`40c` (décimal `1036`) pour le français**.

<small>
Pour d'autres identifiants de langue, voir la documentation Microsoft : <a href="https://learn.microsoft.com/openspecs/windows_protocols/ms-lcid">https://learn.microsoft.com/openspecs/windows_protocols/ms-lcid</a><br>
</small>

Si **après avoir changé le registre, VEGAS ne démarre pas avec `Code d'erreur : -1`**, naviguez vers le dossier `language` dans le répertoire d'installation de VEGAS (par défaut : `C:\Program Files\VEGAS\VEGAS Pro 23.0\language\`, où `23.0` est la version). **Renommez tout fichier `local_xx_XX.cfg`** (par ex. `local_en_US.cfg` pour l'anglais américain) **en `local_fr_FR.cfg`**.

<small>
Un autre outil utile : <code>Vegas Language Changer</code> : <a href="https://github.com/IZH318/Vegas-Language-Changer">https://github.com/IZH318/Vegas-Language-Changer</a>
</small>

Le même principe s'applique à d'autres logiciels MAGIX comme ACID Pro.

Après avoir démarré VEGAS avec succès, si les noms des FX vidéo intégrés sont toujours en anglais, vous pouvez essayer [d'effacer le cache des plugins](#faq-sur-les-plugins-vidéo).

<br>

Q : Erreur lors de l'installation : **PC doit redémarrer pour continuer l'installation** ?  
`Le programme d'installation a détecté que le système attend actuellement un redémarrage pour terminer une installation ou une mise à jour précédente. Pour éviter les problèmes, veuillez redémarrer votre système avant d'installer.`

<ImageOnDemand alt="Installation Reboot Issue" src="vegtips/image005_install_reboot.png" />

R : Tout d'abord, essayez de redémarrer votre PC. Si cela ne fonctionne pas, vous devez modifier le registre. Ouvrez l'Éditeur du Registre, naviguez vers **`HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session Manager`**, **supprimez la valeur `PendingFileRenameOperations`**, puis redémarrez votre PC.





<br>

Q : Erreur : **`Une erreur s'est produite lors de l'installation -2147163964. Impossible d'enregistrer le module xxxxx.dll`**.

<ImageOnDemand alt="Installation DLL Registration Issue" src="vegtips/image006_install_dll.png" />

R : **Redémarrer votre PC et réinstaller** résout généralement ce problème. Si cela persiste, essayez **d'installer une version différente**.

<br>

Q : VEGAS ne démarre pas quoi qu'il arrive, **n'affiche même pas la fenêtre de chargement** ?

R : C'est un vieux problème : **Les processus VEGAS sont bloqués en arrière-plan**. **Ouvrez le Gestionnaire des tâches, trouvez et terminez tous les processus liés à VEGAS, puis essayez de relancer VEGAS.**

<br>

Q : VEGAS **plante/se bloque** à l'étape "**Initialisation du traitement vidéo accéléré par GPU...**" pendant le démarrage ?

R : Tout d'abord, essayez de réinstaller vos pilotes graphiques. Si cela ne fonctionne pas, essayez cette correction de registre. Ouvrez l'Éditeur du Registre, trouvez la valeur : **`IntelOpenCL64.dll`** sous **`HKEY_LOCAL_MACHINE\SOFTWARE\Khronos\OpenCL\Vendors`** et la valeur **`IntelOpenCL32.dll`** sous **`HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Khronos\OpenCL\Vendors`**. Changez les données pour les deux valeurs **de `0` à `1`**, puis redémarrez VEGAS.





<br>

Q : VEGAS **plante/se bloque (Code d'erreur `0xC06D007F`)** à l'étape "**Usine de plugins vidéo...**" pendant le démarrage ?

R : Cette étape charge les plugins vidéo. C'est souvent un problème de scan des plugins vidéo OFX. Allez dans le chemin OFX : **`C:\Program Files\Common Files\OFX\Plugins\`**, déplacez les plugins potentiellement problématiques hors de ce dossier, puis essayez de démarrer VEGAS**. Une fois démarré normalement, vous pouvez essayer de remettre les fichiers ou de réinstaller le plugin. Si vous avez des détails d'erreur spécifiques, essayez de trouver des mots-clés liés au nom du plugin.  
**<small>(Vérifiez en priorité les plugins Red Giant Universe, car ils provoquent des plantages au démarrage pour de nombreux utilisateurs.)</small>**

<br>

Q : VEGAS **se bloque/plante/se fige** à l'étape "**Scan des plugins VST...**" pendant le démarrage ?

R : Essayez **de désactiver le scan VST au démarrage**. Faites un clic droit sur le **raccourci VEGAS -> Propriétés**. Dans le champ **`Cible`**, ajoutez **` /NOVSTGROVEL`** à la fin (**notez l'espace avant la barre oblique**). Puis exécutez VEGAS en utilisant ce raccourci. Une fois démarré normalement, vous pouvez déplacer les plugins problématiques des [chemins VST](#xi-faq-concernant-les-plugins-audio), les stocker séparément, etc.

<ImageOnDemand alt="NOVSTGROVEL" src="vegtips/image007_novstgrovel.png" />

<br>

Q : VEGAS **se bloque/plante/se fige** à l'étape "**Initialisation des plugins DirectX...**" pendant le démarrage ?

R : De même, essayez **de désactiver le scan des plugins DirectX au démarrage** en utilisant la commande **` /NODXGROVEL`**.

<br>

Q : VEGAS **plante/se bloque (Code d'erreur `0xE0434352`)** à l'étape "**Initialisation de l'interface utilisateur...**" pendant le démarrage, ou **immédiatement après l'apparition de la fenêtre principale** ?

R : Problème d'extension possible. Essayez **de supprimer les fichiers de `C:\ProgramData\VEGAS Pro\Application Extensions\`** et d'autres [dossiers d'extensions](#xii-faq-concernant-les-scripts-extensions). Vous pouvez tous les supprimer ou essayer d'isoler quelle extension est problématique.

<br>

Q : Erreur de démarrage VEGAS : **`Impossible d'initialiser l'hôte de script`** / autres erreurs courantes **.NET Framework** (par ex. **`0xE0434352`**) ?

R : Les scripts VEGAS dépendent de .NET Framework. Essayez d'exécuter l'outil de réparation .NET Framework : https://support.microsoft.com/topic/942a01e3-5b8b-7abb-c166-c34a2f4b612a

<br>

Q : VEGAS **plante/se bloque (Code d'erreur `0xC0000005`, module de défaut `C:\WINDOWS\SYSTEM32\ntdll.dll`)** à l'étape "**Création des fenêtres...**" pendant le démarrage ?

R : Allez dans **`Panneau de configuration -> Programmes -> Programmes et fonctionnalités`** et vérifiez si les **runtimes MSVC 1450** sont installés, c'est-à-dire la **version 14.50 de `Microsoft Visual C++ 2015-2022 Redistributable` pour x86 et x64**. Microsoft a distribué une version de ces runtimes qui fait planter VEGAS. Cette version est automatiquement installée avec **Visual Studio 2026** et peut être installée pour d'autres raisons. C'est un problème Microsoft, en attente d'une correction complète de leur part. Certains utilisateurs affectés ont constaté que simplement désinstaller les runtimes peut ne pas fonctionner. Voici une solution de contournement temporaire (**si vous ne voulez pas vous plonger dans les DLL, passez à la dernière étape et utilisez le `vcomp140.dll` `x64` que j'ai fourni**) :

1. Allez à la page de téléchargement de Visual Studio : [https://visualstudio.microsoft.com/downloads/](https://visualstudio.microsoft.com/downloads/), trouvez et téléchargez les Visual Studio 2022 Build Tools (nom de fichier `vs_BuildTools.exe`).

2. Pendant l'installation, lorsque vous êtes invité à des composants supplémentaires, allez dans `Composants individuels`, recherchez `MSVC`, cochez **`MSVC v143 - Outils de build C++ x64/x86 VS 2022 (dernière)`**, et poursuivez l'installation.

<ImageOnDemand alt="MSVC 143 Install" src="vegtips/image008_msvc143.png" />

3. Après l'installation, allez dans le chemin d'installation MSVC : `C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Redist\MSVC\`. Il y aura des dossiers comme `v143` et `14.44.35112` (selon la version que vous avez installée). Celui qui ressemble à `14.44.35112` est la cible.

4. Naviguez vers `14.44.35112\onecore\x64\Microsoft.VC143.OpenMP`, trouvez **`vcomp140.dll`**, copiez-le, et collez-le dans votre répertoire d'installation VEGAS. Redémarrez VEGAS.

<small>
Lien de téléchargement pour <code>vcomp140.dll</code> <code>x64</code> : <a href="/downloads/fixes/vcomp140.dll">vcomp140.dll</a><br>
Si vous utilisez Windows <code>ARM</code>, choisissez le dossier <code>ARM</code>, pas <code>x64</code>. Si vous ne savez pas ce qu'est <code>ARM</code>, vous êtes probablement un utilisateur <code>x64</code> ; utilisez la version <code>x64</code>.<br>
Référence : <a href="https://www.vegascreativesoftware.info/us/forum/posts--149890/#ca943290">https://www.vegascreativesoftware.info/us/forum/posts--149890/#ca943290</a><br>
</small>

<br>

Q : Après avoir ouvert VEGAS, il y a **du bruit/pas d'audio/...** ?

R : **Allez dans `Panneau de configuration -> Matériel et audio -> Son`, ouvrez `Propriétés` pour votre périphérique de lecture actuel. Sous l'onglet `Avancé`, sous `Mode exclusif`, décochez `Autoriser les applications à prendre le contrôle exclusif de ce périphérique`, OU changez le `Format par défaut` en `2 canaux, 24 bits, 44100 Hz`.** Si cela ne fonctionne pas, essayez **de réinstaller les pilotes de votre carte son**.

<ImageOnDemand alt="Audio Device" src="vegtips/image009_sound_device.png" />

<br>

Q : **Un fichier de projet spécifique plante/a une erreur à l'ouverture** ?

R : Essayez **de renommer n'importe quel fichier média utilisé dans le projet** pour que le projet ne puisse pas le trouver. Lors de la réouverture, **ignorez les invites "média hors ligne"**. Après avoir ouvert avec succès, **renommez le fichier ou remplacez-le**.





<br>

Q : **Ouvrir plusieurs instances VEGAS provoque des plantages** ?

R : Cela peut arriver dans toutes les versions VEGAS en raison d'une disposition de fenêtre spécifique. C'est plus probable lorsque la fenêtre Aperçu est **détachée (flottante)**. Un correctif temporaire : **Avant d'ouvrir une nouvelle instance VEGAS, fermez ou accrochez la fenêtre Aperçu de l'ancienne instance** pour éviter les plantages potentiels.

<small>
Référence : <a href="https://www.vegascreativesoftware.info/us/forum/posts--148817/">https://www.vegascreativesoftware.info/us/forum/posts--148817/</a><br>
</small>

<br>

Q : **Après le démarrage de VEGAS, il y a une erreur WebView (`msedgewebview2.exe`, ou `Échec de l'initialisation de WebView2`, etc.)** ?

R : La fonctionnalité VEGAS Hub utilise Microsoft Edge WebView. Si vous **n'avez pas besoin du Hub, fermez simplement sa fenêtre via le menu `Affichage -> Fenêtre`**. Vous pouvez aussi essayer de supprimer le dossier `WebView2` dans le [répertoire de cache VEGAS](#répertoire-des-préférences-et-du-cache-vegas) : **`%localappdata%\VEGAS Pro\23.0\WebView2`** (où `23.0` est votre version VEGAS).

<br>

Q : **[VP19]** Après avoir travaillé un moment, la fenêtre VEGAS **devient graphiquement corrompue, l'interface utilisateur bug, devient lente, impossible de continuer**, forçant un redémarrage ?

R : C'est un **problème spécifique à VP19 dans les anciens builds (par ex. `19 build 341`)**. **Mettez à jour vers `19 build 651`** pour le résoudre.

<small>
Référence : <a href="https://www.vegascreativesoftware.info/us/forum/posts--131391/">https://www.vegascreativesoftware.info/us/forum/posts--131391/</a><br>
</small>

<br>

Q : **[VP19, VP20]** VEGAS plante immédiatement après l'écran de chargement, **sans fenêtre d'erreur** ?

R : Vérifiez votre numéro de build VEGAS. Est-ce `19 build 648` ou antérieur, ou `20 build 402` ou antérieur ?

Les versions dans cette plage ont un bug critique provoquant un **plantage direct après chargement**, et peuvent **seulement être ouvertes en déconnectant d'Internet ou en changeant la date système**.

La solution est de **mettre à jour VP19 vers `19 build 651` ou plus, et VP20 vers `20 build 403` ou plus**. (Note : VP19 final est `19 build 651`, VP20 final est `20 build 411`.)

<br>

Q : **[`22 build 122` et plus]** VEGAS ne s'exécute pas, pas d'écran de chargement ?

R : Problème de mise à jour Windows. Téléchargez et exécutez vc_redist.x86.exe et vc_redist.x64.exe pour réparer les runtimes C++ : https://learn.microsoft.com/cpp/windows/latest-supported-vc-redist

Les retours suggèrent que la mise à jour d'autres logiciels (comme OBS) pourrait aussi être nécessaire.

<small>
Référence : <a href="https://www.vegascreativesoftware.info/us/forum/posts--147255/">https://www.vegascreativesoftware.info/us/forum/posts--147255/</a><br>
</small>

<br>

Q : <sup>**Version française**</sup> La version française de VEGAS Pro plante au démarrage ?

R : C'est un problème **spécifique à la version française**. La seule solution est de **désinstaller et réinstaller la version anglaise**. MAGIX avait l'intention de le corriger mais n'a pas de solution claire. Les utilisateurs qui peuvent reproduire ce problème sont encouragés à contacter le support MAGIX.

<small>
Référence : <a href="https://www.vegascreativesoftware.info/us/forum/posts--147150/#ca926950">https://www.vegascreativesoftware.info/us/forum/posts--147150/#ca926950</a><br>
</small>

<br>

## V. Importation de fichiers

### Dépannage général pour les fichiers qui n'importent pas/importent avec des bugs/clignotements verts :

#### 1. Activer/Désactiver le décodage AVC et HEVC Hérité

- VP18 et plus : **`Préférences -> E/S fichier`, activez/désactivez `Décodage AVC hérité` et `Décodage HEVC hérité`**.

- VP15-17 : Accédez aux [Préférences internes](#accéder-aux-préférences-internes-vegas), recherchez `Reader`, trouvez :
  - `Use So4 Audio Reader for Intermediate/HEVC`
  - `Enable So4 Compound Reader for AVC/M2TS`
  - `Enable Mx Compound Reader for HEVC/ProRes` <sup>VP17 seulement</sup>

  `TRUE` = `Utiliser le nouveau décodeur`, `FALSE` = `Utiliser l'ancien décodeur`. Par défaut est `TRUE`. Essayez de changer ceux-ci.

- VP14 et moins utilisent seulement l'ancien décodeur ; ne peut pas changer.

Depuis `21 build 300`, les significations de "hérité" et "nouveau" décodeurs ont été inversées. Les "anciens décodeurs AVC/HEVC hérités" sont maintenant les nouveaux décodeurs par défaut. L'ancien "nouveau décodeur AVC" est devenu le "décodeur AVC hérité", et l'ancien "nouveau décodeur HEVC" est devenu le "décodeur HEVC expérimental".

Pour les problèmes de décodage (par ex. média devient **complètement vert ou noir**, **pas de flux vidéo**, ou même **problèmes de décodage audio**), essayez **d'activer ou de désactiver ces deux décodeurs hérités**.

Si cela ne fonctionne pas, essayez de changer l'option **`Décodeur matériel`** ci-dessous (peut nécessiter de désactiver le décodage hérité).

<br>

#### 2. Désactiver le rééchantillonnage

`Fichier -> Propriétés`, sous `Rééchantillonnage`, sélectionnez **`Désactiver le rééchantillonnage`**.

Désactiver le rééchantillonnage traite les **problèmes liés aux trames**. Si le rééchantillonnage est activé (par ex. séquence 30ips dans un projet 60ips), **VEGAS génère un mélange de trames entre les trames originales** (visible comme un **fondu enchaîné entre deux trames** lors du défilement trame par trame). **Cela peut provoquer des erreurs de génération de trame, résultant en un clignotement (éclairs verts/noirs). Il est généralement recommandé de le désactiver.**

Dans VP13 et antérieur, vous **ne pouvez pas modifier le paramètre de rééchantillonnage du projet directement dans `Propriétés du projet`**. Au lieu de cela, sélectionnez un événement sur la timeline, **`Clic droit -> Commutateurs -> Désactiver le rééchantillonnage`**.

<br>

#### 3. Installer les codecs correspondants

Par exemple, les formats QuickTime nécessitent l'installation de QuickTime 7.7.9 avec le plugin QuickTime sélectionné pendant l'installation.

La question d'installer K-Lite Codec Pack est toujours débattue. Certains utilisateurs sur le forum officiel disent qu'il "pourrait entrer en conflit avec les codecs intégrés de VEGAS" et déconseillent son installation.

<br>

#### 4. Réencoder les fichiers multimédias

Si les méthodes ci-dessus ne résolvent pas **l'échec d'importation/les problèmes de décodage/une grande lenteur après l'importation**, essayez de réencoder le fichier. Paramètres recommandés : Codec vidéo AVC, codec audio AAC, conteneur mp4, taux de trame constant. Si seul l'audio pose problème, vous pouvez **extraire l'audio en fichier wav** et le réimporter, le grouper (G) avec la vidéo originale.

<br>

#### 5. Réinitialiser les préférences

Un scénario courant : **L'audio importé est complètement bruyant**. Dans ce cas, essayez **[Réinitialiser les préférences](#5-réinitialiser-les-préférences)**.

<br>

### FAQ sur l'importation de fichiers

Q : Impossible de **glisser-déposer des fichiers depuis des dossiers** dans VEGAS, seulement utiliser le bouton `Ouvrir` ?

R : Si VEGAS est exécuté **avec des privilèges d'administrateur**, le glisser-déposer est désactivé. La solution est **d'exécuter VEGAS sans privilèges d'administrateur**.

Note : Si vous utilisez une **version portable de VEGAS (marquée `Portable`)**, elle pourrait nécessiter des privilèges d'administrateur pour démarrer, empêchant le glisser-déposer. Certaines "solutions" impliquent de désactiver UAC via le registre, ce qui est **non recommandé**. **Il vaut mieux passer à une version régulière, pas la version portable.**

**Problèmes avec VEGAS Portable : Nécessite des privilèges d'administrateur ; ne peut pas exécuter plusieurs instances ; ne reconnaît pas les variables d'environnement système ; certains plugins (par ex. [Voukoder](#plugin-de-rendu-recommandé-voukoder)) nécessitent un placement manuel du connecteur. À éviter si possible.**

<br>

Q : Erreur lors de la tentative d'importation : **`Avertissement : Une erreur s'est produite lors de l'ouverture d'un ou plusieurs fichiers. Les fichiers n'ont pas pu être ouverts. Assurez-vous que les fichiers existent et que vous avez les autorisations d'accès au fichier/dossier.`**

R : Vérifiez si le **chemin d'installation** de VEGAS contient **uniquement [des caractères anglais demi-largeur (y compris des espaces demi-largeur)]**. S'il contient d'autres caractères comme du chinois, **désinstallez et réinstallez VEGAS dans un chemin avec uniquement des caractères anglais demi-largeur**.

<br>

Q : Veut **importer des fichiers mkv**, mais ne peut pas.

R : Dans VP17 et plus, vous pouvez **`Préférences -> E/S fichier`, `Activer le lecteur MKV`**, redémarrer VEGAS, et réessayer.

Cette fonctionnalité a beaucoup de bugs, donc l'importation peut encore échouer. Si c'est le cas, pré-convertissez avec un autre logiciel.

Note : `21 build 187` et plus supportent l'importation mkv par défaut ; pas besoin d'activer manuellement.

Aussi : À propos de la conversion de fichiers mkv

Un fichier vidéo a deux couches : le flux de codage interne et le conteneur externe. L'échec d'importation peut être dû soit à un flux non supporté, soit à un conteneur non supporté.

Pour un fichier avec un flux **AVC (H.264)** et un conteneur **mkv**, VEGAS ne peut pas l'importer en raison du **conteneur non supporté**, mais le **flux AVC interne est supporté**. Lors de la conversion, vous pouvez changer seulement le conteneur, pas le flux. En utilisant [FFmpeg](https://ffmpeg.org/), la commande `ffmpeg -i input.mkv -c:v copy output.mp4` fait cela. Dans les convertisseurs avec interface graphique (comme [`HandBrake`](https://handbrake.fr/)), cela est souvent appelé `Copier` ou `Remux`. C'est rapide et recommandé.

Pour un fichier avec un flux **VP9** et un conteneur **mkv**, le flux et le conteneur sont non supportés (VEGAS ne supporte pas VP9). Même la conversion du conteneur en mp4 ne fonctionnera pas. Vous devez **réencoder à la fois le flux et le conteneur**. Par exemple, les fichiers mkv téléchargés depuis YouTube pourraient avoir une vidéo VP9. Utilisez un outil comme [MediaInfo](https://mediaarea.net/en/MediaInfo) pour vérifier le codec.

<br>

Q : La vidéo enregistrée par **OBS** s'importe dans VEGAS avec une **longueur incorrecte, très courte** ?

R : Cela se produit lorsque OBS utilise MP4 fragmenté pour l'enregistrement, que VEGAS ne peut pas décoder correctement. **Changez le format de sortie dans les paramètres OBS**. Pour les séquences existantes, utilisez la méthode de copie de flux, par ex. `ffmpeg -i input.mp4 -c copy output.mp4`.

<small>
Référence : <a href="https://www.vegascreativesoftware.info/us/forum/posts--144992/">https://www.vegascreativesoftware.info/us/forum/posts--144992/</a><br>
</small>

<br>

Q : **Ne peut pas importer certains fichiers mov avec des codecs spécifiques** ?

R : Premièrement, assurez-vous d'avoir installé QT Lite ou QuickTime. **QT Lite 4.1.0** est généralement recommandé. Pour VP17 et plus, le nouveau décodeur supporte les fichiers mov ProRes, mais les autres codecs QuickTime ne sont plus supportés par défaut. Vous devez **`Préférences -> Fonctions dépréciées`, `Activer le plug-in QuickTime`** pour importer d'autres fichiers mov QuickTime.

Note : Si vous installez `QuickTime 7.7.9` d'Apple, assurez-vous que `QuickTime plug-in` est sélectionné pendant l'installation.

**Depuis VP23, VEGAS a effectivement abandonné la compatibilité QuickTime et ne peut plus importer ou rendre des fichiers mov encodés en QuickTime.**

<br>

Q : Après avoir importé des fichiers multimédias originellement **avec canal alpha (mov ou png)**, le **canal alpha de transparence n'est pas affiché correctement** dans VEGAS ?

R : Dans VEGAS, **clic droit sur le fichier média ou l'événement -> Propriétés**, passez à l'onglet `Média`, trouvez `Canal alpha`, changez-le en **`Direct (sans cache)`**.  
<small>
(Note : Pour <code>Canal alpha</code>, <b>tant que vous ne sélectionnez pas <code>Indéfini</code> ou <code>Aucun</code></b>, le canal alpha devrait s'afficher.)
</small>

Vous pouvez aussi modifier cette propriété pour plusieurs fichiers dans la fenêtre **`Médias du projet`**.

<br>

Q : Les vidéos téléchargées directement depuis **des plateformes web comme TikTok** avec des outils comme IDM (**codec audio `AAC LC SBR (HE-AAC)`**), lorsqu'elles sont importées dans VEGAS, ont **des bugs audio aléatoires, du bruit**, ou sont **incorrectement reconnues comme mono** ?

R : C'est **entièrement un bug du logiciel VEGAS**, et jusqu'à la dernière version (`23 build 302`), ce n'est pas corrigé. **Les tests montrent que toutes les méthodes précédentes échouent. La seule solution est d'extraire/réencoder l'audio et de l'importer séparément.** Les vidéos téléchargées via l'application TikTok ne sont pas affectées.

<small>
Référence : <a href="https://www.vegascreativesoftware.info/us/forum/posts--140457/#ca884682">https://www.vegascreativesoftware.info/us/forum/posts--140457/#ca884682</a><br>
</small>

<br>

Q : Les vidéos/images 4:3 importées sont **étirées horizontalement** en 16:9. Comment réparer ?

R : Cela se produit lorsque des médias `4:3` sont importés dans un projet `16:9` avec certaines configurations automatiques. Réparation : **Clic droit sur le média -> Propriétés -> Onglet Média**, trouvez `Ratio d'aspect des pixels`, changez de `1.3333` à `1`, puis cliquez sur le bouton de sauvegarde à côté de la section `Flux`<sup>(`Enregistrer les paramètres dans le profil vidéo pour la détection automatique future`)</sup>. Cela garantit que les futures importations `4:3` ne seront pas automatiquement étirées. Cela peut aussi être fait pour plusieurs fichiers dans la fenêtre **`Médias du projet`**.

<ImageOnDemand alt="Video Profile Button" src="vegtips/image010_profile_button.png" />



Si vous obtenez "**Une erreur inconnue s'est produite lors de la tentative d'enregistrement du profil vidéo**" :

1. Appuyez sur **`Win + R`** pour `Exécuter`.

2. Entrez (où `23.0` est votre version VEGAS ; incluez les guillemets anglais `""` autour du chemin) :
  - **`notepad "C:\ProgramData\VEGAS Pro\23.0\Vegas profiles.ini"`** <sup>VP17+</sup>
  - **`notepad "C:\ProgramData\VEGAS\VEGAS Pro\16.0\Vegas profiles.ini"`** <sup>VP14+</sup>
  - **`notepad "C:\ProgramData\Sony\Vegas Pro\13.0\Vegas profiles.ini"`** <sup>VP13-</sup>

3. Au lieu de cliquer `OK`, appuyez sur **`Ctrl + Maj + Entrée`** pour ouvrir le fichier avec les privilèges d'administrateur. Modifiez manuellement le profil d'importation par défaut pour `4:3`, changez toutes les valeurs `1.3333333333` en `1`, puis enregistrez.
  - Note : Ouvrir sans privilèges d'administrateur fera que le Bloc-notes demandera `Enregistrer sous` au lieu d'écrire dans le fichier original.

<ImageOnDemand alt="Video Profile Edit 1" src="vegtips/image011_profile_edit_1.png" />

<ImageOnDemand alt="Video Profile Edit 2" src="vegtips/image012_profile_edit_2.png" />

<small>
Référence : <a href="https://www.vegascreativesoftware.info/us/forum/posts--128760/">https://www.vegascreativesoftware.info/us/forum/posts--128760/</a><br>
</small>

<br>

## VI. FAQ sur le fonctionnement et l'affichage du logiciel

Q : **La fenêtre d'aperçu vidéo ne montre rien** ?

<ImageOnDemand alt="Trimmer or Preview?" src="vegtips/image013_trimmer_or_preview.png" />

R : Vérifiez si vous êtes passé à la fenêtre **`Rogneuse`**. Si oui, **rebasculer vers la fenêtre `Aperçu vidéo`**. Si vous préférez la disposition de fenêtre séparée `Rogneuse` et `Aperçu` des anciennes versions (VP14 et moins), allez dans le menu **`Affichage -> Disposition des fenêtres`** et sélectionnez **`Disposition de la fenêtre source`**.

<br>

Q : Accidentellement **fermé/glissé la fenêtre xxxx**. Comment **la récupérer/la réaccrocher** ?

R : Allez dans le menu **`Affichage -> Fenêtre`** et activez la fenêtre dont vous avez besoin. La disposition des fenêtres VEGAS est hautement personnalisable. Les fenêtres accrochées peuvent être glissées ; les fenêtres détachées peuvent être accrochées en glissant tout en maintenant **`Ctrl`**. Depuis VP23, les fenêtres peuvent être accrochées au-dessus, en dessous, à gauche ou à droite de la timeline. Les anciennes versions ne supportent que l'accrochage au-dessus de la timeline.

<br>

Q : Cliquer sur le **bouton Pan/Crop/bouton FX/bouton xxxx** **n'ouvre pas la fenêtre** ?/**La fenêtre xxxx a disparu** ?

R : Généralement, la fenêtre a été accidentellement glissée sous la barre des tâches Windows et ne peut pas être remontée.

Solution facile : **Cliquez sur le bouton correspondant, puis immédiatement appuyez sur `Alt + Espace`, choisissez `Déplacer`**, et glissez la fenêtre vers le haut. Alternativement, masquez temporairement la barre des tâches Windows, puis glissez. En dernier recours, essayez `Affichage -> Restaurer la disposition par défaut`.

<ImageOnDemand alt="Move Window" src="vegtips/image014_window_move.gif" />

<br>

Q : Ajouté un FX, mais dans la fenêtre Aperçu, le **FX n'est pas entièrement affiché, apparaissant divisé gauche/droite** ?

<ImageOnDemand alt="Split Screen View" src="vegtips/image015_split_screen.png" />

R : Comme montré, vérifiez si **`Vue écran partagé`** est activé.

<br>

Q : Cliqué sur quelque chose, et une piste vidéo unique **s'est divisée en pistes A/B**. Comment revenir en arrière ?

<ImageOnDemand alt="AB Track" src="vegtips/image016_ab_track.png" />

R : Généralement, cela se produit en double-cliquant sur le bord d'un événement. **Double-cliquez à nouveau sur le bord de l'événement** pour le réparer.

Si cela ne fonctionne pas, dans l'en-tête de piste (côté gauche avec `Niveau` et boutons), **Clic droit -> Développer les couches de piste**, et décochez cette option.

Pour éviter le déclenchement accidentel dans VP18+, allez dans **`Préférences -> Général`**, faites défiler vers le bas, et **désactivez `Double-cliquer sur le bord d'un événement pour basculer en mode d'édition étendu`**.

<br>

Q : Appuyer sur **Annuler (`Ctrl + Z`)** alors que la fenêtre **Générateur de média** est ouverte fait que l'effet du Générateur de média **disparaît de l'aperçu** ?

R : Lorsque le focus est sur la **fenêtre d'édition du Générateur de média**, appuyer sur **Annuler (`Ctrl + Z`)** peut faire que les paramètres **`Taille de l'image`** et **`Durée`** du Générateur de média changent en valeurs anormales. Appuyer plusieurs fois sur `Ctrl + Z` ne sera probablement pas utile dans ce cas.

Les deux paramètres sont situés dans le coin supérieur gauche de la fenêtre du Générateur de média. Vous devez manuellement **changer la `Taille de l'image` et la `Durée` du Générateur de média à leurs valeurs d'origine**. Par défaut, `Taille de l'image` correspond aux dimensions du projet (par ex. `1920*1080`), et `Durée` est par défaut de 5 secondes (ou `00:00:05.00` sur la règle `Temps & Images`).

- Un autre bug mineur lié : Après avoir modifié la `Taille de l'image` et la `Durée` d'un Générateur de média, si vous ouvrez immédiatement la fenêtre d'édition d'un second Générateur de média sur la timeline, le second générateur peut hériter des paramètres `Taille de l'image` et `Durée` du premier.

<br>

Q : **Certaines fenêtres FX** (par ex. Texte (hérité), FX Simulateur TV, autres plugins DXT) **s'affichent incomplètement** ?

R :

1. Installez la police **sserife.fon**.
    - Lien de téléchargement : https://github.com/taveevut/Windows-10-Fonts-Default/blob/master/sserife.fon

2. Si l'installation de la police n'aide pas, allez dans **`Panneau de configuration -> Région -> Administration -> Changer les paramètres régionaux du système`**. Assurez-vous que **`Bêta : Utiliser Unicode UTF-8 pour la prise en charge linguistique mondiale`** est **NON** coché, comme montré ci-dessous.

<ImageOnDemand alt="Windows Unicode Settings" src="vegtips/image017_unicode_settings.png" />

<small>
Référence : <a href="https://www.vegascreativesoftware.info/us/forum/posts--138828/">https://www.vegascreativesoftware.info/us/forum/posts--138828/</a><br>
</small>

<br>

Q : Les fenêtres Propriétés du projet / Modèle de rendu personnalisé / Préférences sont **trop grandes, ne peuvent pas s'afficher complètement, ne peuvent pas cliquer sur OK** ?

<ImageOnDemand alt="Window Too Large" src="vegtips/image018_window_too_large.png" />

R : La taille des fenêtres VEGAS s'adapte aux paramètres d'affichage Windows. Une mise à l'échelle DPI élevée peut rendre les fenêtres VEGAS très grandes, provoquant des affichages tronqués à des échelles extrêmes. Pour cliquer "OK", vous pouvez appuyer sur la **touche `Entrée`**. Si vous avez besoin que la fenêtre entière s'affiche, vous devez **changer la mise à l'échelle DPI de l'écran à 100%** dans les Paramètres Windows avant d'ouvrir la fenêtre, puis la remettre. Alternativement, **définir la mise à l'échelle DPI de VEGAS individuellement à 100%** : Clic droit sur l'exécutable ou le raccourci VEGAS -> `Propriétés -> Compatibilité -> Modifier les paramètres DPI élevés`. **Définissez `Mise à l'échelle effectuée par :` sur `Application`**.

<ImageOnDemand alt="High DPI - Application" src="vegtips/image019_high_dpi_application.png" />

<br>

Q : Après être **revenu à VEGAS** depuis un autre logiciel, il **prend beaucoup de temps à tamponner** avant de revenir à la normale ?

R : **`Préférences -> Général`**, décochez `Fermer les fichiers multimédias lorsque l'application est inactive`. Note : Lorsque cette option est désactivée, **VEGAS garde les fichiers multimédias en cours d'utilisation, vous empêchant de modifier/supprimer les fichiers originaux en dehors de VEGAS**. (N'affecte pas le remplacement/suppression dans VEGAS.)

<br>

Q : Essayant de **glisser une vidéo de la fenêtre `Médias du projet`** sur la timeline, mais elle **commence accidentellement à "rognner"** ?

R : Un vieux problème ennuyeux : Glisser sur l'image vidéo déclenche le "rogner".

Correction standard : **Appuyez sur `Ctrl + Z` pour annuler, puis glissez par le nom de fichier sous la miniature vidéo, pas sur l'image elle-même.**

VP21 a ajouté un bouton **`Contourner l'exploration au survol`**. L'activer empêche les erreurs de manipulation, mais vous perdez la capacité de prévisualiser la vidéo en survol (vous ne voyez que la miniature).

<ImageOnDemand alt="Bypass Hover Scrub" src="vegtips/image020_bypass_hover_scrub.png" />

<p align="center">En fait, ce bouton a été ajouté dans VP20, mais dans VP20 il n'avait aucun effet.</p>

<br>

Q : **Lors de la lecture dans VEGAS, appuyer sur la barre d'espace fait revenir le curseur au début. Je veux que la barre d'espace fasse une pause à la position actuelle.**

R : Dans VEGAS, "Pause" signifie "arrêter la lecture, le curseur reste", tandis que "Stop" signifie "arrêter la lecture, le curseur revient au début".

Dans VP22 et moins, par défaut, **`Entrée` est "Pause", `Espace` est "Stop"**. Dans `21 build 108` et antérieur, vous pouviez les échanger via **`Préférences -> Général -> Utiliser la barre d'espace et F12 pour lecture/pause au lieu de lecture/stop`**.

Depuis `21 build 187`, cette option a été déplacée vers la **barre de transport sous la fenêtre Aperçu**, à côté des boutons lecture/pause/stop. Si elle n'est pas visible, développez les trois points à droite.

<ImageOnDemand alt="Cursor Transport" src="vegtips/image021_cursor_transport.png" />

Après la mise à jour VP23, le comportement par défaut a changé : **`Entrée` est "Stop", `Espace` est "Pause"**. L'option est devenue `Utiliser la barre d'espace et F12 pour lecture/stop au lieu de lecture/pause`, disponible à la fois dans `Préférences -> Général` et la barre de transport.

<br>

Q : **Plantage lors de la copie des images clés Pan/Crop** ?

R : Problème de mise à jour Windows 11. **Mise à niveau vers `22 build 250`** le corrige.

- Correction temporaire pour les anciens VEGAS : **Clic droit sur l'exécutable/raccourci VEGAS -> `Propriétés -> Compatibilité`, sous `Mode de compatibilité` sélectionnez `Windows 8`**.

<small>
Référence : <a href="https://www.vegascreativesoftware.info/us/forum/posts--148746/">https://www.vegascreativesoftware.info/us/forum/posts--148746/</a><br>
</small>

<br>

Q : <sup>VP22+</sup> **Glisser à gauche sur la timeline sélectionne maintenant les événements, ne peut plus sélectionner une plage de temps** ?

R : Après VP22, glisser à gauche sur la timeline sélectionne les événements, tandis que glisser à droite sélectionne une plage de temps. Si vous êtes habitué à l'ancienne logique, vous pouvez **cocher `Préférences -> Édition -> Utiliser le bouton droit de la souris pour basculer vers l'outil d'édition de sélection`** pour échanger les fonctions des boutons gauche/droit, similaire à la logique par défaut de Reaper.  
<small>
Si cela se produit dans les anciennes versions, confirmez d'abord que votre outil d'édition est correctement sélectionné (appuyez sur la touche <code>D</code> deux fois).
</small>

Cette mise à jour a aussi introduit un problème mineur : la zone de sélection réelle des événements est légèrement plus petite que la zone dessinée par la souris en raison d'une nouvelle valeur de décalage. Allez dans les [Préférences internes](#accéder-aux-préférences-internes-vegas), recherchez **`Default SelectionMode Offset`**, changez-le en **`0`**.

<br>

## VII. Aperçu

### Dépannage général pour l'aperçu clignotant vert/noir, séquence buggée, etc.

1. Essayez d'abord **[Désactiver l'accélération GPU](#1-désactiver-l-accélération-gpu)**, **[Désactiver le rééchantillonnage](#2-désactiver-le-rééchantillonnage)**, **[Activer/Désactiver les décodeurs hérités](#1-activerdésactiver-le-décodage-avc-et-hevc-hérité)**.

2. Changez la qualité d'aperçu dans le coin supérieur gauche de la fenêtre Aperçu (par ex. `Meilleur (Plein)`) pour voir si elle se normalise.

3. **Bug de plugin spécifique** : Essayez de retirer les FX vidéo qui pourraient causer le problème.

4. Réencoder tous les fichiers multimédias originaux et les remplacer.

5. Les clignotements/bugs d'aperçu inexplicables sont frustrants. Si les méthodes ci-dessus échouent, vous pourriez être sans chance.

<br>

### FAQ sur l'aperçu

Q : Après **ajout de FX / modification de texte de sous-titre / édition de FX**, la **fenêtre Aperçu ne se met pas à jour**. Les changements n'apparaissent **qu'après fermeture de la fenêtre FX** ?

R : Ce problème apparaît avec **certaines versions de pilotes Nvidia**. Voici les solutions :

1. **[Désactiver l'accélération GPU](#1-désactiver-l-accélération-gpu)**. Simple et efficace. **(Utiliser l'accélération GPU intégrée fonctionne aussi.)**

2. Pour résoudre **tout en gardant l'accélération GPU activée**, modifiez les paramètres OpenGL.

    Allez dans [Préférences internes](#accéder-aux-préférences-internes-vegas), recherchez **`Enable OpenCL/GL Interop`**, définissez sur **`FALSE`**.

    Alternativement, changez les paramètres dans le **Panneau de configuration Nvidia** :

    Ouvrez **Panneau de configuration NVIDIA**, cliquez sur **`Gérer les paramètres 3D`** à gauche, passez à l'onglet **`Paramètres du programme`** à droite. Cliquez `Ajouter`, sélectionnez l'exécutable VEGAS, et changez **`Compatibilité OpenGL GDI`** de `Utiliser le paramètre global` à **`Préférer la compatibilité`**. Redémarrez VEGAS. (Si vous avez plusieurs versions VEGAS, définissez chacune séparément.)

<ImageOnDemand alt="NVIDIA OpenGL GDI Compatibility" src="vegtips/image022_nvidia_opengl.png" />

3. Revenir au pilote Nvidia `522.30` ou antérieur, ou mettre à jour vers le plus récent. Lors de la réinstallation, **choisissez l'installation "Personnalisée"** et cochez **`Effectuer une installation propre`**. Cela réinitialise tous les paramètres du pilote par défaut, donc **non recommandé**.

<small>
Référence : <a href="https://www.vegascreativesoftware.info/us/forum/posts--138196/">https://www.vegascreativesoftware.info/us/forum/posts--138196/</a><br>
</small>

<br>

## VIII. Rendu

### Plugin de rendu recommandé : Voukoder

Lors de l'utilisation des modèles de rendu intégrés de VEGAS, nous **devons souvent constamment ajuster la résolution, le taux de trame, le débit, etc.**, pour correspondre aux propriétés du projet et atteindre la qualité souhaitée. Cependant, il existe un plugin de rendu qui **correspond automatiquement la résolution/taux de trame aux propriétés du projet et supporte les paramètres CRF/CQP avancés pour le contrôle du débit**, permettant le rendu **avec moins d'ajustements manuels de paramètres**. Ce plugin est **Voukoder**.

<ImageOnDemand alt="Voukoder Classic" src="vegtips/image023_voukoder_classic.png" />

Deux versions : Voukoder Classic et Voukoder Pro.

- Voukoder Classic est gratuit, supporte VP12-VP22, mais a été retiré par l'auteur original Vouk.

  Sauvegardes utilisateur sur GitHub :
  - [https://github.com/FORARTfe/voukoderFREE](https://github.com/FORARTfe/voukoderFREE)
  - [https://github.com/FORARTfe/voukoder-connectorsFREE](https://github.com/FORARTfe/voukoder-connectorsFREE)  
  Nécessite d'installer à la fois le noyau Voukoder (par ex. `Voukoder 13.4.1`) et le connecteur (par ex. `connector-vegas22-1.0.0.msi`).
- Voukoder Pro est actuellement payant. Site officiel : [https://www.voukoder.org/](https://www.voukoder.org/).
  - Voukoder Pro 1 a été gratuit, mais Voukoder Pro 2 est devenu payant, chaque version majeure nécessitant un achat séparé.

D'autres plugins similaires incluent [DebugMode FrameServer](http://www.debugmode.com/frameserver.html) et [MagicYUV](https://www.magicyuv.com/). Je ne les utilise pas souvent ; ils pourraient convenir à des utilisateurs plus avancés.

<br>

### Dépannage général pour les plantages/blocages/erreurs de rendu

- Plantage de rendu : VEGAS **devient soudainement blanc et plante avec une erreur** pendant le rendu.

- Blocage de rendu : **La barre de progression s'arrête**, l'utilisation CPU/GPU dans le Gestionnaire des tâches est faible, **cliquer sur "Annuler" ne fonctionne pas**, vous forçant à tuer VEGAS via le Gestionnaire des tâches.

- Erreur de rendu : La vidéo rendue a **des images clignotantes/écrans verts**.

**Avant de rendre, assurez-vous :**

- Les Propriétés du projet et le Modèle de rendu n'ont pas de valeurs problématiques. Par ex. **L'ordre des champs est progressif**, **largeur/hauteur divisible par 4** (certains encodeurs utilisent des blocs 4x4), **taux de trame commun** (surtout les décimaux étranges, à part les standards `23.976`, `29.97`, `59.94`).

- **Le modèle de rendu correspond exactement aux Propriétés du projet**. Un désaccord peut causer des problèmes comme le décalage de position du plugin Sapphire.

- Lors de la modification du débit dans les modèles intégrés, assurez-vous que **le débit maximum est plus grand que la moyenne**, pas égal.

1.  Si le rendu plante avec une **fenêtre d'erreur**, voir [Désactiver la fenêtre contextuelle de rapport d'erreur VEGAS](#2-désactiver-la-fenêtre-contextuelle-de-rapport-d-erreur-vegas).

2.  **[Désactiver l'accélération GPU](#1-désactiver-l-accélération-gpu).**

3.  **Changer l'encodeur dans le modèle de rendu.**

<ImageOnDemand alt="Render Encoder" src="vegtips/image024_render_encoder.png" />

<p align="center">Les encodeurs disponibles dépendent de votre GPU.</p>

4.  Modifier la zone autour de l'image où il se bloque : supprimer des FX, couper des événements, etc.

5.  Utiliser un format de rendu différent (par ex. wmv).
  - Note : Le modèle wmv par défaut est : **résolution `1440*1080`, Ratio d'aspect des pixels `1.3333`**. Bien que le format d'image final soit 16:9, le rendu direct avec ces paramètres peut causer des problèmes. Changer manuellement en **résolution `1920*1080`, Ratio d'aspect des pixels `1`**.

6.  **<sup>Recommandé</sup> Rendre en utilisant [Voukoder](#plugin-de-rendu-recommandé-voukoder).**

7.  **<sup>Recommandé</sup> Imbriquer et Rendre.**
  - Créez un nouveau projet, **glissez directement le fichier .veg original dedans**. Après la création du proxy, rendez directement. Le rendu imbriqué est plus lent ; les PC bas de gamme peuvent avoir du mal.

8.  Rendu segmenté.
  - Pour les blocages, **divisez le projet en petits segments, rendez séparément**, puis créez un nouveau projet, **combinez tous les segments et rendez à nouveau**.
  - Pour les erreurs de rendu aléatoires (par ex. premier rendu a un problème dans la première moitié, second rendu a un problème dans la seconde moitié), vous pouvez combiner les bonnes moitiés des deux rendus.

9.  **Rendu séquence d'images**. Commencez le rendu là où il s'est bloqué. **Cela préserve au moins les fichiers rendus.** Finalement, **importez la séquence d'images dans VEGAS et rendez-la en vidéo**. Après chaque rendu de séquence, **sortez vers un nouveau dossier** pour éviter l'écrasement, car VEGAS commence toujours la numérotation à `000000`.

<ImageOnDemand alt="Import Image Sequence" src="vegtips/image025_import_image_sequence.png" />

<p align="center">Importation d'une séquence d'images. Elle se comporte comme un fichier vidéo ; vous pouvez définir le taux de trame.</p>

10. **Utilisez [Voukoder](#plugin-de-rendu-recommandé-voukoder), personnalisez le modèle, définissez le conteneur de sortie sur mkv**, et rendez à partir de là où il s'est bloqué.
  - Contrairement à d'autres formats, **les fichiers mkv restent lisibles et importables après un blocage/plantage de rendu**. **Note : Les versions VEGAS inférieures ne peuvent pas importer mkv directement.**

11. Demandez à quelqu'un d'autre de rendre.
  - Utilisez `Fichier -> Exporter -> .veg` pour collecter les médias du projet dans un nouveau dossier. Compressez et envoyez à un autre utilisateur VEGAS de confiance.

**Résumé :** Pour les problèmes de rendu, essayez d'abord **les méthodes 1, 2, 3**. Si elles échouent, priorisez **les méthodes 6 et 7**. Les autres méthodes sont des références. Les méthodes **8, 9, 10, 11** sont les derniers recours.

<br>

#### Réparation des fichiers de rendus échoués

Comme mentionné, seules les **séquences d'images** et le **conteneur mkv** préservent la progression rendue après un échec. Les autres formats (mp4, mov, avi, wmv) laissent un fichier cache, mais il n'est pas directement lisible/importable ; la lecture peut montrer de la corruption. Cependant, les logiciels de réparation vidéo peuvent parfois réparer ces fichiers cache échoués en utilisant **un échantillon vidéo de référence rendu avec succès avec le même modèle**. J'ai testé [Digital Video Repair](https://risingresearch.com/zh/dvr/) (gratuit) et [Wondershare Repairit](https://repairit.wondershare.com/) (payant, meilleurs résultats). Vous pouvez en essayer d'autres.

<br>

### FAQ sur le rendu

Q : Cliquer sur **`Rendre sous`** (appelé **`Rendre`** dans VP23+) pour ouvrir la liste des modèles provoque **erreur/plantage** ?

R : S'il y a une **fenêtre d'erreur**, essayez d'abord **[Désactiver le rapport d'erreur](#2-désactiver-la-fenêtre-contextuelle-de-rapport-d-erreur-vegas)**.

Si cela échoue, essayez de déplacer temporairement tous les dossiers du chemin des codecs **`...<Chemin d'installation VEGAS>\FileIO Plug-Ins\`**, redémarrez VEGAS, insérez un événement texte, et voyez si cliquer sur `Rendre sous` plante toujours. Sinon, déplacez progressivement les codecs, redémarrez VEGAS et testez `Rendre sous` après chaque déplacement pour **identifier le codec problématique**. Une fois trouvé, évitez d'utiliser ce codec en ne le remettant pas. Cela peut empêcher VEGAS d'importer/rendre certains formats. (Priorisez la vérification de `mxavcaacplug`.)

<br>

Q : Erreur de rendu immédiate : **`Une erreur s'est produite lors de la création du fichier média xxx.mp4. Impossible de déterminer la cause de l'erreur.`**

R : Dans le modèle de rendu personnalisé, **décochez `Activer le téléchargement progressif`**. Ou essayez **[Voukoder](#plugin-de-rendu-recommandé-voukoder)**.

<br>

Q : Erreur de rendu immédiate : **`Une erreur s'est produite lors de la création du fichier média xxx.mp4. Erreur 0x80660008 (Message manquant)`**

R : Si vous utilisez l'**encodeur NVIDIA NVENC** et votre **version de pilote graphique est > `590`**, alors **les modèles de rendu intégrés dans VP22 et moins ne peuvent pas appeler NVENC**, **vous forçant à choisir des modèles avec d'autres encodeurs**. Solutions actuelles : **revenir au pilote `581.57` ou moins**, ou **mettre à niveau VEGAS vers VP23 ou plus**. Vous pouvez aussi utiliser l'encodeur NVENC de **[Voukoder](#plugin-de-rendu-recommandé-voukoder)** sans erreur.

<small>
Référence : <a href="https://www.vegascreativesoftware.info/us/forum/posts--150382/">https://www.vegascreativesoftware.info/us/forum/posts--150382/</a><br>
</small>

<br>

Q : Erreur lors de la tentative de **rendre m2ts** : **`L'objet COM n'a pas pu être initialisé.`**

R : À partir de **Win11 24H2**, Microsoft a supprimé le **codec AC-3** dont dépendent VEGAS et d'autres logiciels. Sur une **installation neuve de Win11 24H2 ou plus**, ce codec est manquant, causant l'échec de VEGAS à **décoder l'audio AC-3 dans les fichiers m2ts** et à **rendre m2ts**. Référez-vous à [**ce tutoriel anglais**](https://www.elevenforum.com/t/ac-3-dolby-digital-codec-no-longer-included-with-windows-11-version-24h2.25597/post-459390) pour rajouter le codec AC-3, ou **mettre à niveau vers VP22 final (`22 build 250`) ou plus**, qui inclut un nouveau codec AC-3.

<small>
Référence : <a href="https://www.vegascreativesoftware.info/us/forum/posts--147963/">https://www.vegascreativesoftware.info/us/forum/posts--147963/</a><br>
</small>

<br>

Q : Veut **arrêter le rendu à mi-chemin** mais **garder la vidéo partiellement rendue**.

R : La fenêtre d'affichage de rendu de l'**extension SeMW** a cette fonctionnalité.

<ImageOnDemand alt="SeMW Render Prompt" src="vegtips/image026_render_semw.png" />

Site officiel de l'extension SeMW : https://www.semw-software.com/en/extensions/

Note : Les tests montrent que cette fonctionnalité **ne résout pas le problème "ne peut pas annuler le rendu" lors d'un blocage** ; vous devez tuer VEGAS via le Gestionnaire des tâches dans ce cas.

<br>

Q : Comment rendre **des fichiers mov avec canal alpha** ?

R :

- **Plugin QuickTime <small>(VP22 et moins. Bonne compression pour les images statiques, petite taille de fichier.)</small>**

  1.  Installez QT Lite ou QuickTime. **`QT Lite 4.1.0`** est recommandé. Pour les nouveaux VP, aussi **`Préférences -> Fonctions dépréciées -> Activer le plug-in QuickTime`**.

  2.  Dans la liste des modèles de rendu, sélectionnez `QuickTime` à gauche. Choisissez n'importe quel modèle à droite, cliquez `Personnaliser le modèle`, ajustez les paramètres comme montré :

<ImageOnDemand alt="Render Alpha QuickTime" src="vegtips/image027_render_alpha_quicktime.png" />

  3.  Sauvegardez le modèle et rendez.

  En raison de la mauvaise compatibilité, le format QuickTime est listé sous `Fonctions dépréciées`. Les tests montrent que l'importation de nombreux fichiers mov QuickTime dans VEGAS peut causer des problèmes (échecs de lecture, lenteur). Aussi, le canal alpha n'est pas affiché par défaut à l'importation ; nécessite un changement manuel. Pour la compatibilité, Apple ProRes est recommandé.

  **Depuis VP23, VEGAS a effectivement abandonné la compatibilité QuickTime et ne peut plus importer ou rendre des fichiers mov encodés en QuickTime.**

- **Modèle Apple ProRes <small>(VP18+. Si le modèle n'existe pas, cette méthode n'est pas disponible.)</small>**

  Comme montré :

<ImageOnDemand alt="Render Alpha ProRes" src="vegtips/image028_render_alpha_prores.png" />

- **[Voukoder](#plugin-de-rendu-recommandé-voukoder)<small>(VP18+, Voukoder Classic version 12.0+.)</small>**

  Dans les modèles Voukoder, trouvez ceux marqués **`4:4:4 10 bit avec canal alpha`** et rendez. Ou personnalisez : Conteneur de sortie `QuickTime (.mov)`, Encodeur vidéo `ProRes KS` ou `QuickTime Animation`.

<br>

Q : L'aperçu ou le fichier rendu a **une différence/incohérence de couleur** par rapport au média original ?

A1 : Dans VP17 et moins, les paramètres **d'espace colorimétrique** dans Propriétés du projet et Modèle de rendu peuvent causer des **décalages de couleur**.

Trois solutions :

1.  **Utilisez [Voukoder](#plugin-de-rendu-recommandé-voukoder), créez un modèle avec `Filtres` pour convertir l'espace colorimétrique.**

<ImageOnDemand alt="Voukoder Color Space" src="vegtips/image040_voukoder_color_space.png" />

2.  Mettez à niveau vers VP18+. Lors de l'ouverture d'un ancien projet dans le nouveau VP, changez `Format de pixel` dans `Fichier->Propriétés` de `8-bit hérité (niveaux vidéo)` à **`8-bit (gamme complète)`**, et **n'utilisez pas les modèles de rendu créés dans l'ancien VP**.

3.  Appliquez le préréglage FX **`Levels`** **`RGB ordinateur vers RGB studio`** aux fichiers multimédias.

<small>
Référence : <a href="https://www.vegascreativesoftware.info/us/forum/posts--142942/">https://www.vegascreativesoftware.info/us/forum/posts--142942/</a><br>
</small>

<br>

A2 : Si la source est une **séquence HDR**, changez **`Espace colorimétrique` des Propriétés du projet <sup>Fig 1</sup>** pour correspondre à la source <sup>Fig 2</sup>. Cela basculera l'ensemble du projet en profondeur de couleur 10 bits, rendant le rendu plus lent que 8 bits.

<ImageOnDemand alt="Project HDR Color Space" src="vegtips/image029_color_space_hdr_project.png" />

<ImageOnDemand alt="Footage HDR Color Space" src="vegtips/image030_color_space_hdr_footage.png" />

Alternativement, gardez l'espace colorimétrique du projet inchangé et appliquez une LUT de conversion d'espace colorimétrique à la séquence source. Utilisez le FX intégré `Filtre LUT` ou la fonctionnalité plus récente `Étalonnage couleur`. La clé est de trouver une LUT qui convertit l'espace colorimétrique source en standard `Rec.709`. Cela perd les détails HDR, donc si vous ne prévoyez pas de sortie HDR, évitez d'enregistrer des séquences HDR initialement.

<br>

Q : La vidéo rendue a **des décalages de couleur (rouge devient violet, bleu devient jaune, etc.)** ?

<ImageOnDemand alt="BGRA Color" src="vegtips/image031_bgra_color.png" />

R : Problème de pilote GPU AMD. Essayez :

- **[Désactiver l'accélération GPU](#1-désactiver-l-accélération-gpu).**
- Revenir au pilote AMD **23.7.2** ou antérieur, ou mettre à jour vers **23.11.1** ou plus.
- Mettre à niveau vers `21 build 187` ou plus corrige cela.
- **Avant le rendu**, ajoutez le FX intégré **`Mélange de canaux` au bus de sortie vidéo, sélectionnez le préréglage `RGBA -> BGRA`**.

<small>
Référence : <a href="https://www.vegascreativesoftware.info/us/forum/posts--142292/">https://www.vegascreativesoftware.info/us/forum/posts--142292/</a><br>
</small>

<br>

Q : **[VP18 et moins] Ne peut pas rendre des vidéos plus hautes que `2304` (par ex. 4K vertical)** ?

R : Dans les anciennes versions, essayer de définir une hauteur supérieure à `2304` dans la boîte de dialogue personnalisée d'un modèle natif la réinitialise automatiquement à `2304`. La solution la plus simple est d'**utiliser [Voukoder](#plugin-de-rendu-recommandé-voukoder)** après avoir défini vos propriétés de projet souhaitées.

Voici une méthode "exploitation de bug" utilisant des modèles natifs :

1.  Dans Rendre sous, choisissez un modèle permettant des dimensions personnalisées, comme **`MAGIX AVC` ou `MAGIX HEVC`**. À droite, choisissez un modèle proche, cliquez `Personnaliser le modèle`.

2.  Modifiez tous les paramètres sauf la hauteur à vos valeurs souhaitées, et **changez le nom du modèle en haut, mais NE CLIQUEZ PAS encore sur le bouton de sauvegarde**.

3.  Maintenant, changez la hauteur à votre valeur souhaitée > `2304`. Après avoir tapé, **N'APPUYEZ PAS sur `Entrée` ou `Tab`, ou cliquez ailleurs. Gardez le curseur clignotant dans le champ hauteur, puis cliquez sur le bouton de sauvegarde à côté du nom du modèle**.

4.  **Après sauvegarde, cliquez `Annuler`**. Vous remarquerez qu'il ne saute pas vers votre modèle sauvegardé, mais le modèle est ajouté à la liste.

5.  Utilisez ce nouveau modèle. Si vous avez cliqué `OK` après sauvegarde, il saute vers un modèle avec un `*`, ce qui est faux. Utilisez celui sans `*` de la liste.

- Note : Cette méthode ne peut pas dépasser la limite maximale de l'encodeur (par ex. `4096*4096` pour NVENC).

<small>
Référence : <a href="https://www.vegascreativesoftware.info/us/forum/posts--149413/#ca939692">https://www.vegascreativesoftware.info/us/forum/posts--149413/#ca939692</a><br>
</small>

<br>

Q : Après le rendu, essayer de lire le projet donne l'erreur : **`Une erreur s'est produite lors du démarrage de la lecture. Aucune demande n'est activée pour ce périphérique.`**

R : VEGAS demande l'autorisation du microphone après le rendu. Si un micro est connecté mais VEGAS n'a pas l'autorisation, il erre. Correction : **Activez l'autorisation du microphone pour VEGAS dans les Paramètres Windows**. Alternativement, essayez de changer de périphérique audio dans `Préférences -> Périphérique audio` ou cliquez `Tous par défaut`, puis rendez à nouveau pour voir si cela corrige définitivement. (Changer une fois est temporaire.) En dernier recours, réinstallez les pilotes de la carte son.

<br>

Q : Les vidéos rendues avec **[Voukoder](#plugin-de-rendu-recommandé-voukoder)** (ou modèles intégrés) semblent bien localement mais montrent **des rayures horizontales** lors du téléchargement sur YouTube/d'autres sites en pleine résolution ?

R : Voukoder correspond automatiquement aux propriétés du projet. Dans VP17 et moins, le modèle de projet par défaut a `Ordre des champs` défini sur `Champ supérieur d'abord` (entrelacé). Les lecteurs locaux supportent le désentrelacement, donc ça semble bien. Les sites comme YouTube peuvent ne pas le supporter, montrant des rayures d'entrelacement. Pour Voukoder, **changez `Ordre des champs` dans `Propriétés du projet` en `Progressif (pas de champs)`** avant le rendu. Pour les modèles intégrés, **évitez les modèles avec `i` dans le nom ; choisissez ceux avec `p`**.

<br>

Q : **Les modèles de rendu intégrés manquent d'options de séquence d'images** ?

R : Ce bug a été corrigé dans VP19. Pour les anciennes versions, essayez celles-ci (non garanties) :

1.  Installez/Réinstallez HEIF Image Extensions : [https://apps.microsoft.com/detail/9pmmsr1cgpwg](https://apps.microsoft.com/detail/9pmmsr1cgpwg).

2.  Utilisez le script de rendu de séquence d'images.
  - Lien de téléchargement : https://www.vegascreativesoftware.info/us/forum/posts--133068/?page=3#ca863786

3.  Rendez dans un autre format (`.mov`), puis convertissez en utilisant [FFmpeg](https://ffmpeg.org/).

<small>
Référence : <a href="https://www.vegascreativesoftware.info/us/forum/posts--133068/">https://www.vegascreativesoftware.info/us/forum/posts--133068/</a><br>
</small>

<br>

Q : Dans les modèles de rendu, **les modèles `wav` et `avi` ont changé les formats de sortie en `.wdp`** ?

R : La seule correction connue efficace est **de réinstaller Windows via l'Outil de mise à jour Windows**.

- Outil de mise à jour : https://www.microsoft.com/software-download

Il met à jour votre système vers la dernière version, prenant des heures. Cette méthode garde la plupart des logiciels installés, fichiers et paramètres.

Le principe exact de réparation n'est pas clair.

<small>
Référence : <a href="https://www.vegascreativesoftware.info/us/forum/posts--83436/">https://www.vegascreativesoftware.info/us/forum/posts--83436/</a><br>
</small>

<br>

Q : **[Win7 VP18+]** **Cliquer sur `Rendre sous` erreur immédiate** : **`Une erreur s'est produite lors de la création du fichier média. Erreur 0x80131501 (Message manquant)`**

<ImageOnDemand alt="Win7 Render" src="vegtips/image032_render_win7.png" />

R : Normalement, Win7 ne supporte que **jusqu'à VP17**. VP18+ sur Win7 donne cette erreur.

Il y a un contournement : remplacer le composant DLL de rendu dans le répertoire d'installation VP plus récent par un d'un ancien build VP18.

Cela peut affecter la stabilité, donc passer à Win10 est conseillé.

<small>
Référence : <a href="https://www.vegascreativesoftware.info/us/forum/posts--128221/">https://www.vegascreativesoftware.info/us/forum/posts--128221/</a><br>
</small>

Lien de téléchargement pour `RenderAsDialog.dll` de `18 build 284` : [RenderAsDialog.dll](/downloads/fixes/RenderAsDialog.dll)

<br>

## IX. FAQ Sous-titres

Q : Le fichier de sous-titre ne s'importe pas / s'importe en **texte illisible** ?

R : Ouvrez le fichier de sous-titre dans le Bloc-notes, **Enregistrer sous avec encodage UTF-8**, puis importez.

<br>

Q : Utilisation de "**Titres et texte**" pour éditer le texte. Police correcte sélectionnée, mais **la police dans la fenêtre Aperçu ne change pas, ne peut pas changer de police** ?

R : C'est un problème de "Titres et texte" ; sa compatibilité de police est faible.

Solutions :
- **Définissez le style de police dans un document Word d'abord, puis copiez-collez dans VEGAS Titres et texte.**
  - Vous pouvez utiliser n'importe quel éditeur de texte enrichi.

- Ou utilisez **Texte (hérité)** ou **Titrage ProType** ; ils sont moins sujets à cela.
  - Dans les nouveaux VP, activez-les dans `Préférences -> Fonctions dépréciées`.

- Dans certains cas, les paramètres Unicode Windows pourraient être la cause. Allez dans **`Panneau de configuration -> Région -> Administration -> Changer les paramètres régionaux du système`**, assurez-vous que **`Bêta : Utiliser Unicode UTF-8 pour la prise en charge linguistique mondiale`** est **NON** coché.

<ImageOnDemand alt="Windows Unicode Settings" src="vegtips/image017_unicode_settings.png" />

Dans VP20, la fonctionnalité "**Transfert des attributs de sous-titre**" de "Titres et texte" est aussi affectée, rendant certaines polices inutilisables avec cette fonction.

<br>

Q : Cliquer sur le menu **`Insertion -> Sous-titre depuis un fichier`** **n'ouvre pas la fenêtre d'insertion**, pas de réponse ?

R : Un bug relativement rare, apparemment non corrigé. Cela pourrait fonctionner un jour et s'arrêter le lendemain. Actuellement, la seule correction connue est **[réinitialiser les préférences](#5-réinitialiser-les-préférences)**.

<small>
Référence : <a href="https://www.vegascreativesoftware.info/us/forum/posts--137861/">https://www.vegascreativesoftware.info/us/forum/posts--137861/</a><br>
</small>

<br>

Q : Utilisation de "**Générique de fin**", l'édition de texte provoque un **blocage/plantage VEGAS** ?

R : Problème de méthode de saisie Microsoft. Dans **les paramètres de la méthode de saisie Microsoft Pinyin, trouvez `Compatibilité`, activez `Utiliser la version précédente de la méthode de saisie Microsoft Pinyin`**.

<br>

Q : Importer un fichier texte dans "**Générique de fin**" affiche **texte illisible** ?

R : Ouvrez le fichier texte dans le Bloc-notes, **Enregistrer sous avec encodage ANSI**, puis importez.

<br>

Q : Sur les écrans haute résolution, utiliser "**Titrage ProType**" provoque des **bugs d'interface/texte minuscule illisible** ?

<ImageOnDemand alt="PPT Titler UI Issue" src="vegtips/image033_protype_titler_ui_issue.png" />

R : Problème de mise à l'échelle DPI lorsque la mise à l'échelle système >= 150%. Clic droit sur l'exécutable/raccourci VEGAS -> `Propriétés -> Compatibilité -> Modifier les paramètres DPI élevés`. **Définissez `Mise à l'échelle effectuée par :` sur `Système (Amélioré)`**.

<ImageOnDemand alt="High DPI - System Enhanced" src="vegtips/image034_high_dpi_system_enhanced.png" />

<br>

Q : **[VP20, VP21]** **La fonction "Transfert des attributs de sous-titre" dans Titres et texte erreur (comme montré)** ?

<ImageOnDemand alt="Subtitle Attributes Transfer" src="vegtips/image035_subtitles_transfer.png" />

R : Le problème se produit lorsque la zone de texte contient **une mise en forme mixte (polices, tailles différentes, etc.)** qui ne peut pas être transférée. Essayez d'**unifier d'abord le format du texte** avant d'utiliser la fonction. **VP21 final build 315 a corrigé cela.** Les anciennes versions (y compris pré-VP20) peuvent utiliser un script que j'ai écrit avec une fonctionnalité similaire, pas d'erreur, mais ne supporte pas non plus le transfert de mise en forme mixte. Chemin d'installation du script voir [Scripts](#xii-faq-concernant-les-scripts-extensions).

- [Transfert des attributs de sous-titre] Téléchargement du script : https://github.com/zzzzzz9125/VegasScripts/blob/main/Transfer%20Subtitle%20Attributes.cs

  - Utilisation : Sélectionnez un seul événement "Titres et texte" sur une piste, exécutez le script pour faire correspondre les autres événements de sous-titre sur la même piste à ses attributs.

<small>
Référence : <a href="https://www.vegascreativesoftware.info/us/forum/posts--145461/">https://www.vegascreativesoftware.info/us/forum/posts--145461/</a><br>
</small>

<br>

**Note additionnelle :** (VP18+) Comment changer l'outil par défaut pour `Insérer un média texte` :

VEGAS a trois outils texte principaux : Titres et texte, Texte (hérité), Titrage ProType. `Clic droit sur piste -> Insérer un média texte` utilise par défaut "Titres et texte". Pour utiliser les deux autres, vous devez les glisser depuis "Générateurs de média", ce qui peut être fastidieux. Voici comment changer le défaut :

Accédez aux [Préférences internes](#accéder-aux-préférences-internes-vegas), recherchez `Text Media Generator GUID`. Changez sa valeur au GUID de votre outil préféré (le défaut est Titres et texte).

GUIDs :
- Titres et texte : `{Svfx:com.vegascreativesoftware:titlesandtext}`
- Texte (hérité) : `{0FE8789D-0C47-442A-AFB0-0DAF97669317}`
- Titrage ProType : `{53FC0B44-BD58-4716-A90F-3EB43168DE81}`

Connaissant le GUID, vous pouvez le définir au GUID de n'importe quel FX Générateur de média, faisant que "Insérer un média texte" crée directement ce générateur.

<br>

## X. FAQ concernant les plugins vidéo

Les plugins vidéo VEGAS se divisent en deux catégories : les plugins DirectX Transform (DXT), développés spécifiquement pour VEGAS, et les plugins OpenFX (OFX), une norme universelle. Les anciens plugins pourraient être DXT (par ex. NewBlue 2012, Neat Video 3.1.1). Les nouveaux plugins sont généralement OFX. Certains FX VEGAS hérités, comme le FX Contraste doux, Titrage ProType, sont aussi des plugins DXT.

La Liste des effets vidéo VEGAS Pro résume tous les **`FX Vidéo`** disponibles dans VEGAS Pro, y compris leurs **`Noms`**, **`Groupes`**, **`UIDs`**, et d'autres informations, facilitant la recherche et la consultation en ligne. **[Entrez ici.](./videofxlist)**

<br>

### Fichiers cache des plugins VEGAS

- Cache de scan : `%localappdata%\VEGAS Pro\23.0\svfx_plugin_cache.bin`
- Cache des noms : `%localappdata%\VEGAS Pro\23.0\plugin_manager_cache.bin`
- Cache des miniatures : `%localappdata%\VEGAS Pro\23.0\FX Thumbnails\fx_thumbnail_cache.bin`

Où `23.0` est votre version VEGAS. Le cache de plugin stocke les informations des plugins/FX scannés. VEGAS bloqué à "Création de l'usine de plugins vidéo..." **régénère le cache de plugin**, scannant pour de nouveaux plugins.

<br>

### Chemins OFX liés

- **Chemin OFX commun** : `C:\Program Files\Common Files\OFX\Plugins\`
- **Chemin OFX spécifique à VEGAS** : `...<Chemin d'installation VEGAS>\OFX Video Plug-Ins\`

Note : Un plugin OFX peut consister en le noyau du plugin et les fichiers interface OFX. Le chemin OFX est pour les fichiers interface. Sans eux, VEGAS **ne scannera pas** le plugin. Les plugins du chemin OFX commun sont aussi scannés par d'autres logiciels supportant OFX (Premiere Pro, DaVinci Resolve). Le chemin spécifique à VEGAS est scanné seulement par cette version VEGAS.

Structure des fichiers interface OFX :
```
<Chemin OFX>/
├── xxx.ofx.bundle/
│ └── Contents/
│ ├── Presets/
│ │ ├── PresetPackage.xml
│ │ ├── PresetPackage.fr-FR.xml
│ │ └── ...
│ ├── Resources/
│ │ ├── xxx.xml
│ │ ├── xxx.fr-FR.xml
│ │ └── ...
│ └── Win64/
│ └── xxx.ofx
└── yyy.ofx.bundle/
 └── ...
```

`Win64\xxx.ofx` est le fichier interface OFX. `Presets\PresetPackage.xml` contient les préréglages intégrés. `Resources\xxx.xml` est le fichier de traduction linguistique.

Note : L'édition des chemins OFX nécessite souvent des privilèges d'administrateur. Pour les fichiers `xml`, je recommande `Visual Studio Code`, qui demande les privilèges d'administrateur lors de la sauvegarde.

Après modification des fichiers de langue, supprimez le **cache des noms de plugin** mentionné précédemment et redémarrez VEGAS pour voir les changements.

Préréglages FX de plugins OFX enregistrés par l'utilisateur : `%userprofile%\Documents\OFX Presets\`

<br>

### Infos DXT liées

- **Chemin DXT intégré** : `...<Chemin d'installation VEGAS>\Video Plug-Ins\`

Strictement, les plugins DXT n'ont pas de dossier mandaté comme OFX. Ce sont des fichiers DLL nécessitant un enregistrement via `regsvr32 xxx.dll`. Cela permet de placer des plugins DXT externes n'importe où et de les enregistrer pour que VEGAS les reconnaisse. Utile pour les plugins à enregistrement manuel comme [Route Animation](https://www.vegascreativesoftware.info/us/forum/posts--105615/) (`RouteAnimationX64.dll`).

<br>

### FAQ sur les plugins vidéo

Q : Changé VEGAS en une autre langue via le registre, mais **les noms des plugins intégrés sont toujours en anglais**. Comment réparer ?

R : **Supprimez le cache des noms de plugin** mentionné ci-dessus, redémarrez VEGAS. Ou simplement **[réinitialisez les préférences](#5-réinitialiser-les-préférences)**.

<br>

Q : **Déjà désinstallé un plugin**, mais il **apparaît toujours dans la liste FX VEGAS**, et cliquer dessus plante ?

R : Vérifiez si **les fichiers correspondants dans les chemins OFX** sont nettoyés. Si nettoyés et apparaît toujours, essayez **de supprimer les fichiers cache de plugin VEGAS**.

<br>

Q : **Parcourir vers un FX spécifique dans les fenêtres FX Vidéo/FX Transition/FX Générateur de média provoque un plantage immédiat** ?

R : C'est généralement un **plantage de chargement de miniature**. Pas de correction directe ; vous pouvez seulement l'éviter. Si vous n'avez pas besoin de cette série de plugins, trouvez ses fichiers OFX (externes dans le chemin commun, intégrés à VEGAS dans le chemin spécifique) et supprimez-les. Si vous voulez toujours la série de plugins mais pas ce FX, **essayez d'éditer le fichier de traduction `xml`** pour le déplacer à la fin, évitant la sélection accidentelle.  
<small>Alternativement, utilisez **l'extension de recherche FX [VPConsole](https://www.ratinfx.com/vpconsole/)** comme remplacement.</small>

<br>

Q : **Utiliser la boîte de recherche de plugin provoque un écran blanc/blocage**, le rendant inutilisable ?

R : Avec de nombreux plugins installés, les anciennes versions VEGAS se bloquent souvent lors de l'utilisation de la recherche, prenant beaucoup de temps à récupérer. **VP18 a corrigé cela**, donc mettre à niveau vers VP18+ est recommandé pour une recherche fluide.  
<small>Alternativement, utilisez **l'extension de recherche FX [VPConsole](https://www.ratinfx.com/vpconsole/)** comme remplacement.</small>

<iframe width="560" height="315" src="https://www.youtube.com/embed/4ZZBfTb2Ubg?si=vkKTf8trYe8t6RR5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br>

Q : **Utilisation des FX IA intégrés demande d'installer le composant VEGAS Modèles d'Apprentissage Profond** ?  
`Ce module externe requiert des données supplémentaires. Veuillez vous connecter à votre compte Service Center et télécharger le composant Modèles d&apos;apprentissage profond dans la section Mes produits.`

R : Pour les nouveaux FX IA intégrés, **vous devez installer la version correspondante de Modèles d'Apprentissage Profond** séparément.

<small>
Téléchargement officiel des Modèles d'Apprentissage Profond IA : <a href="https://www.vegascreativesoftware.info/us/forum/posts--104782/">https://www.vegascreativesoftware.info/us/forum/posts--104782/<br></a>
</small>

<br>

Q : Le FX intégré **`Filtre LUT` ne peut pas reconnaître les fichiers `.cube` sélectionnés** ?

R : Vérifiez si le **chemin complet vers le fichier `.cube` contient uniquement [des caractères anglais demi-largeur]**. S'il contient d'autres caractères comme du chinois, **déplacez le fichier vers un chemin avec uniquement des caractères anglais demi-largeur**, puis resélectionnez-le.

<br>

Q : **Certains FX de plugin Sapphire ignorent le canal alpha, couvrant l'arrière-plan en dessous** ?

R : Comme montré, entrez dans `Aide` du FX et désactivez son accélération `GPU` individuellement.

<ImageOnDemand alt="Sapphire Alpha Issue" src="vegtips/image036_sapphire_alpha.png" />

Si cela ne fonctionne pas, **désactivez l'`Accélération GPU` propre à VEGAS**.

<br>

Q : Mocha autonome fonctionne, mais la **version plugin OFX Mocha appelée via VEGAS plante** ?

R : Essayez de **revenir/mettre à jour votre pilote graphique**.

<br>

Q : **[VP21]** Ajouter le plugin **`Créateur de LUT 3D`** provoque un **plantage/blocage** ?

R : Vous pouvez sauvegarder ce FX en tant que chaîne de plugin dans une ancienne version VEGAS, puis appliquer la chaîne dans VP21. Ce bug est corrigé dans VP22.

<small>
Référence : <a href="https://www.vegascreativesoftware.info/us/forum/posts--144354/">https://www.vegascreativesoftware.info/us/forum/posts--144354/</a><br>
</small>

<br>

## XI. FAQ concernant les plugins audio

Les plugins audio VEGAS se divisent en deux catégories : les plugins DirectX (anciens) et les plugins VST (norme actuelle). À part les FX audio "sans préfixe" et la série `ExpressFX` intégrés à VEGAS (qui sont DirectX), tous les autres plugins audio sont VST. La série `eFX` intégrée à VP16+ est aussi VST. Les anciennes VEGAS supportent VST2 ; VP20+ supporte aussi VST3. Aucune version VEGAS ne supporte VSTi.

<br>

### Chemins VST liés

- **Chemin VST commun** : `C:\Program Files\VSTPlugins\`

<small>
Si d'autres logiciels ont changé le chemin VST commun, VEGAS le suit. Vous pouvez vérifier la clé de registre <code>HKEY_LOCAL_MACHINE\SOFTWARE\VST</code>, valeur <code>VSTPluginsPath</code>.
</small>

- **Chemin VST spécifique à VEGAS (VP16+)** : `...<Chemin d'installation VEGAS>\MAGIX Plugins\`

<br>

Vous pouvez aussi définir manuellement les chemins VST dans `Préférences -> Effets VST`. Les anciennes VEGAS limitent à 3 chemins ; VP20+ n'a pas de limite.

<br>

Préréglages FX de plugins VST enregistrés par l'utilisateur :
- `%userprofile%\Documents\VST2 Presets\`
- `%userprofile%\Documents\VST3 Presets\`

<br>

Q : Comment éditer les chemins VST en externe, pas via les préférences VEGAS ?

R : Allez à la clé de registre :
- `HKEY_CURRENT_USER\Software\VEGAS Creative Software\VEGAS Pro\23\Metrics\x64\VstCache\SearchPaths` <sup>VP20+</sup>
- `HKEY_CURRENT_USER\Software\Sony Creative Software\VEGAS Pro\19.0\Metrics\VstCache\SearchPaths` <sup>VP19-</sup>
- Où `23`/`19.0` est votre version VEGAS.

Il y a `Path 1`, `Path 2`, etc., correspondant aux chemins VST dans les préférences.

<ImageOnDemand alt="VST Registry" src="vegtips/image037_vst_reg.png" />

`CheckSum` est pour que VEGAS vérifie si un rescan est nécessaire ; vous pouvez l'ignorer. Concentrez-vous sur `Path` (chaîne de chemin absolu) et `Flags` (`3` = scanner, `0` = ne pas scanner). Modifiez selon les besoins.

Si le scan VST a des problèmes et que le rescan via les préférences n'aide pas, vous pouvez supprimer la sous-clé `Mappings` sous `VstCache`, puis redémarrer VEGAS pour rescanner.

<br>

### FAQ sur les plugins audio

Q : Les versions plus récentes ne peuvent pas scanner **les plugins VST 32 bits** ?

R : **`Préférences -> Audio -> Activer la prise en charge des plug-ins VST 32 bits (expérimental)`**.

<br>

Q : Dans les versions plus récentes, certaines **interfaces de plugins VST s'affichent incomplètement** ?

R : Semblerait spécifique à VST2. Si le plugin a une version VST3, **utilisez la version VST3**.

<br>

Q : **Les plugins DirectX n'apparaissent pas dans la liste FX Audio**/**apparaissent mais invalides lorsqu'ajoutés**/**le plugin devient version Démo, l'ajout provoque des bips** ?

R : **Désinstallez VEGAS**, puis supprimez tous les fichiers dans **`C:\Program Files (x86)\VEGAS\Shared Plug-Ins\Audio_x64\`** (pour VP13- : `C:\Program Files (x86)\Sony\Shared Plug-Ins\Audio_x64\`), puis **réinstallez VEGAS**. (Si plusieurs versions VEGAS, désinstaller une suffit ; la désinstallation est juste pour permettre la réinstallation plus tard.)

<small>
Référence : <a href="https://www.vegascreativesoftware.info/us/forum/posts--143986/">https://www.vegascreativesoftware.info/us/forum/posts--143986/</a><br>
</small>

<br>

Q : Après avoir ajouté un **FX Limiteur (intégré `eFX_Limiter` ou autre limiteur VST)** au bus Master, **ajouter des enveloppes panoramiques et des points d'enveloppe** à n'importe quelle piste audio provoque des **craquements/bruits de fermeture éclair** ?

R : Un bug bizarre se produisant lorsque **le type de point d'enveloppe panoramique est `Lisse` ou `Brut`**. Correction : **Changez le type de point d'enveloppe en un autre**.

<br>

## XII. FAQ concernant les scripts/extensions

VEGAS supporte les scripts personnalisés en `C#` (ou `JScript`, `Visual Basic`) pour optimiser les flux de travail.

- **Script** : Doit être exécuté manuellement par l'utilisateur ; fonctionnalité relativement simple.

- **Extension** : Peut s'exécuter automatiquement au démarrage de VEGAS. Permet des fonctionnalités plus complexes, comme créer des fenêtres accrochables dans VEGAS.

<small>
Cette section ne couvre que les problèmes d'installation. Pour les tutoriels, voir : <a href="https://www.vegascreativesoftware.info/us/forum/posts--104563/">https://www.vegascreativesoftware.info/us/forum/posts--104563/</a><br>
</small>

<br>

**Chemins d'installation de script valides :**

```text{1}
C:\ProgramData\VEGAS Pro\Script Menu\
C:\ProgramData\VEGAS Pro\23.0\Script Menu\
%userprofile%\Documents\Vegas Script Menu\
%appdata%\VEGAS Pro\Script Menu\
%appdata%\VEGAS Pro\23.0\Script Menu\
%localappdata%\VEGAS Pro\Script Menu\
%localappdata%\VEGAS Pro\23.0\Script Menu\
...<Chemin d'installation VEGAS>\Script Menu\
```

<br>

**Chemins d'installation d'extension valides :**

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

Où `23.0` est votre version VEGAS. Le premier chemin (`C:\ProgramData\...`) est ma recommandation principale. Note : `ProgramData` est un dossier caché par défaut. Pour les chemins de l'ère Sony (VP13-), ajoutez un dossier **`Sony`** au-dessus de `VEGAS Pro`, par ex. `C:\ProgramData\Sony\VEGAS Pro\Script Menu\`.

<br>

En raison des changements d'API dans l'histoire, les scripts/extensions pour VEGAS de l'ère SonicFoundry, Sony (VP13-) et MAGIX (VP14+) ne sont pas directement compatibles. L'ère SonicFoundry très ancienne utilise l'espace de noms `SonicFoundry.Vegas` ; l'ère Sony relativement ancienne utilise `Sony.Vegas` ; l'ère moderne MAGIX utilise `ScriptPortal.Vegas`. Pour les fichiers de code source (`.cs`, `.js`, `.vb`), vous pouvez éditer manuellement l'espace de noms dans un éditeur de texte. Pour les fichiers précompilés `.dll`, vous devez modifier le projet source et recompiler.

<br>

### Étapes générales pour installer un script ou une extension

En utilisant les extensions comme exemple ; similaire pour les scripts. Pour d'autres chemins, voir les [listes ci-dessus](#xii-faq-concernant-les-scripts-extensions).

1.  Copiez `C:\ProgramData\VEGAS Pro\` et collez dans la barre d'adresse de l'Explorateur de fichiers pour naviguer.

2.  Vérifiez si le dossier `Application Extensions` existe. Sinon, créez-le avec le nom exact. Entrez dans le dossier.

3.  Copiez tous les fichiers `.dll` requis pour l'extension et collez-les directement ici. Par ex. `C:\ProgramData\VEGAS Pro\Application Extensions\UltraPaste.dll`.
    *   Certains scripts/extensions peuvent inclure des fichiers icône `.png` `16*16`. Vous pouvez optionnellement les placer. Les icônes apparaissent dans les menus/barres d'outils VEGAS pour l'identification.

4. Si certains scripts/extensions nécessitent des programmes d'installation supplémentaires, veuillez suivre les étapes d'installation qu'ils fournissent.

<br>

## XIII. Sauvegarde et récupération de fichiers de projet

**Le conseil le plus important d'abord :**

<p align="center"><big><b>Développez une bonne habitude d'appuyer fréquemment sur <code>Ctrl + S</code> !</b></big></p>

Cette section aide dans des situations comme **le fichier de projet enregistré disparaît/est corrompu**, **le logiciel plante avant la sauvegarde**, etc.

<br>

### 1. Le fichier `.veg.bak` à côté de votre projet

C'est une **sauvegarde de l'avant-dernière sauvegarde**. Pour récupérer, **renommez le fichier `.veg.bak` en `.veg`** et ouvrez dans VEGAS. Si vous sauvegardez rarement manuellement, cette sauvegarde pourrait être très ancienne.

<br>

### 2. Sauvegarde automatique par défaut de 5 minutes de VEGAS

VEGAS sauvegarde automatiquement toutes les 5 minutes pour la récupération après plantage.

Méthode de récupération standard : Après un plantage, **n'ouvrez pas directement le projet original**. **Exécutez VEGAS, démarrez un nouveau projet vide**. VEGAS devrait demander "**Récupération de projet disponible**". Récupérez à partir de là.

Cette méthode est un peu lourde. Si vous ouvrez le projet original directement, l'invite n'apparaîtra pas. Si vous modifiez ensuite le projet original, cela **pourrait écraser le fichier de sauvegarde automatique**, rendant la récupération via cette méthode impossible. Par conséquent, je recommande **de localiser manuellement les fichiers de sauvegarde automatique**.

Méthode simple : Allez dans le **[Répertoire de cache VEGAS](#répertoire-des-préférences-et-du-cache-vegas)** (**`%localappdata%\VEGAS Pro\`**) <small>(ou simplement **recherchez `autosave` sur `C:`**)</small>, triez par date, trouvez des fichiers `.veg` ou `.veg.bak`, copiez-les, **renommez** en `.veg` comme dans [1](#_1-le-fichier-veg-bak-à-côté-de-votre-projet), ouvrez, vérifiez, puis enregistrez ailleurs.

L'intervalle de sauvegarde automatique par défaut est de 5 minutes. Pour changer, allez dans [Préférences internes](#accéder-aux-préférences-internes-vegas), recherchez `msAutoSaveInterval`. La valeur par défaut est `300000` millisecondes. Changez comme souhaité.

<br>

### 3. Sauvegarde avancée (VP16+)

**Ma recommandation actuelle principale** pour la récupération de projet, mais nécessite une configuration préalable.

Avantages :

- Les fichiers de sauvegarde sont enregistrés dans le **même répertoire que le projet**, pas besoin de chercher dans le répertoire de cache.

- Ajustement facile des intervalles de sauvegarde.

<ImageOnDemand alt="Advanced Save" src="vegtips/image038_advanced_save.png" />

<p align="center">Menu : <b><code>Outils -> Sauvegarde avancée</code></b>.</p>

Deux fonctions : Sauvegarde en direct et Sauvegarde avancée.

- **`Sauvegarde en direct`** : **Sauvegarde après chaque opération unique**, assurant que le fichier de projet est **toujours à jour**.
  - Parce qu'il sauvegarde après chaque action, il **peut causer des ralentissements significatifs sur les grands projets, donc ce n'est PAS recommandé**.

- **`Sauvegarde avancée`** : Crée des fichiers de sauvegarde `.veg` supplémentaires.

  Plusieurs niveaux : **Minute/Heure/Quotidien/En direct**.

  - `Sauvegardes par minute` : Sauvegarde 1 fichier `.veg` **toutes les `x` minutes**, **ne gardant que les sauvegardes de la dernière heure**. Les sauvegardes plus anciennes sont supprimées automatiquement.

  - `Sauvegardes par heure` : Sauvegarde 1 fichier `.veg` **toutes les `x` heures**, **ne gardant que les sauvegardes des dernières 10 heures**. Les sauvegardes plus anciennes sont supprimées automatiquement.

  - `Sauvegardes quotidiennes` : Sauvegarde 1 fichier `.veg` **à l'ouverture/fermeture de VEGAS chaque jour**. Garde un maximum de `x` sauvegardes ; la plus ancienne est supprimée lorsque dépassé.

  - `Sauvegardes en direct` : **Sauvegarde après chaque opération** en tant que fichier `.veg` séparé. Garde un maximum de `x` sauvegardes ; la plus ancienne est supprimée lorsque dépassé. Comme la "Sauvegarde en direct", **peut causer des ralentissements sur les grands projets, NON recommandé**.

Note : Ces niveaux de sauvegarde sont **indépendants**.

- `Sauvegardes par minute` vont dans le dossier `MinorBackups` dans le répertoire spécifié.

- `Sauvegardes par heure` vont dans `MajorBackups`.

- `Sauvegardes quotidiennes` vont dans `CriticalBackups`.

- `Sauvegardes en direct` vont dans `RealtimeBackups`. Activer `Sauvegardes en direct` désactive les autres niveaux.

**Activer `Sauvegarde avancée` désactive la fonctionnalité de [sauvegarde automatique de 5 minutes](#_2-sauvegarde-automatique-par-défaut-de-5-minutes-de-vegas) par défaut.**

Pour d'autres questions, cliquez sur le **point d'interrogation en haut à droite de la fenêtre Sauvegarde avancée pour la documentation d'aide**.

<br>

### 4. Utiliser la sauvegarde incrémentielle (VP18+)

Sauvegarde incrémentielle, disponible depuis VP18, raccourci **`Ctrl + Alt + S`**. Similaire à "Enregistrer sous" mais plus pratique ; **sauvegarde automatiquement en tant que nouveau fichier avec un numéro incrémentiel**, n'écrasant pas l'original. Vous pouvez remapper le raccourci via `Options -> Personnaliser le clavier`.

<br>

### ~~5. Sauvegarder manuellement périodiquement les fichiers de projet~~

<br>

## XIV. Rétrogradation des versions de projet

Normalement, les nouvelles VEGAS peuvent ouvrir d'anciens fichiers de projet avec une bonne compatibilité. Les anciennes VEGAS ne peuvent pas ouvrir de nouveaux fichiers de projet. Cette section fournit des méthodes pour rétrograder les versions de projet.

<br>

### 1. Outil de rétrogradation de version de fichier de projet VEGAS

<ImageOnDemand alt="MSVPVF" src="vegtips/image039_msvpvf.png" />

Lien du projet original : https://sr.ht/~mrpapersonic/msvpvf/

Cet outil modifie l'identifiant de version à l'intérieur du fichier de projet pour le rétrograder. Cependant, il n'ajuste pas la structure du projet. Par conséquent, même si l'identifiant de version est abaissé, le fichier montrera souvent comme corrompu et échouera à l'ouverture. L'auteur introduit le concept de "générations", suggérant que la compatibilité de rétrogradation n'existe qu'au sein de la même génération : les projets VEGAS ne peuvent pas être rétrogradés à travers les générations, seulement au sein de la même génération. Basé sur le concept de l'auteur et mes tests, les limites de génération sont grossièrement : `8 - 11 | 12 - 14 | 15 - 16 | 17 | 18 | 19 - 21 build 208 | 21 build 300 - 22 | 23`. <small>(Les différences entre les numéros de build mineurs peuvent créer d'autres divisions, donc c'est approximatif.)</small> La plage du milieu est assez fragmentée, rendant cet outil d'utilité pratique limitée, bien qu'il fonctionne pour des paires de versions spécifiques.

**Outil de rétrogradation de version de fichier de projet VEGAS** compilé par moi lien de téléchargement : https://github.com/zzzzzz9125/msvpvf/releases/

Les méthodes suivantes ne sont pas de vraies rétrogradations de version mais transfèrent le contenu du projet.

<br>

### 2. Méthode copier-coller inter-versions

VEGAS supporte plusieurs instances. Vous pouvez copier-coller des événements entre projets dans différentes instances. Cela peut être utilisé pour copier-coller du contenu à travers des versions VEGAS en exécutant plusieurs versions.

Cette méthode fonctionne sur une plage plus large que l'outil ci-dessus mais ne copie que les **événements**, pas des pistes entières avec leurs propriétés.

<br>

### 3. Méthode chaîne de plugin inter-versions

Voir [Utilisation, importation et exportation des préréglages de chaînes de plugins VEGAS](#utilisation-importation-et-exportation-des-préréglages-de-chaînes-de-plugins-vegas) au chapitre II. En sauvegardant des chaînes de plugins, vous pouvez transférer des chaînes de FX audio/vidéo d'un projet/version à un autre. Les chaînes de plugins supportent des FX sur diverses positions mais ne peuvent pas être appliquées en lot ; doivent être sauvegardées/chargées individuellement par chaîne. Souvent utilisée avec la Méthode 2 : Méthode 2 transfère les événements, Méthode 3 transfère les FX de piste.

La rétrogradation de version cause inévitablement des problèmes de compatibilité, principalement dans deux domaines :

- **Nouvelles fonctionnalités.** Par exemple, les "Événements d'ajustement" de VP21 deviennent des événements vides dans les anciennes versions ; le moteur VST mis à jour de VP20 rend ses FX VST méconnaissables dans les anciennes versions, etc.

- **Changements d'API interne ou de GUID.** Par exemple, VP13 (Sony) et VP14 (MAGIX) sont une ligne de démarcation ; ils ne peuvent pas copier-coller à travers. VP17 a changé le préfixe GUID pour tous les OFX intégrés de `sonycreativesoftware` à `vegascreativesoftware`, rendant ces FX méconnaissables dans les anciennes versions.

Les mises à niveau de version n'ont généralement pas ces problèmes.

<br>

## XV. Autres FAQ

Q : VEGAS génère un fichier **`.sfk`** à côté du média importé. Un moyen de **le masquer** ?

R :

- **Anciennes versions** : Non. `.sfk` est le fichier de pic audio. VEGAS n'a **aucun paramètre** pour stocker les fichiers `.sfk` ailleurs ; ils doivent être à côté du fichier média. Supprimer manuellement provoque une régénération à la réouverture du projet.  
  <small><s>Même Sound Forge peut directement masquer les fichiers de pics, mais Vegas ne peut pas. N'est-ce pas un peu...</s></small>

- **Nouvelles versions (`21 build 300`+)** : `Préférences -> Général`, deux nouvelles options : **`Ne pas créer de fichiers .sfk pour stocker les données de pics`** et `Masquer les nouveaux fichiers .sfk`. Cocher seulement le second masque les nouveaux fichiers `.sfk` (visibles si "Afficher les fichiers cachés" est activé). Cocher le premier **empêche la génération de `.sfk` entièrement** (les données de pics recréées à l'ouverture du projet, généralement bien), **recommandé**.

<br>

Q : Après avoir importé de l'audio/vidéo, **la forme d'onde audio n'est pas visible, montre "Pics indisponibles"**, mais l'audio joue ?

R : Si **les fichiers multimédias sont dans un dossier nécessitant des autorisations d'administrateur**, VEGAS ne peut pas générer de fichiers `.sfk`, provoquant **`Pics indisponibles`**. Solution : **Déplacez les fichiers multimédias vers un dossier ne nécessitant pas de privilèges d'administrateur**.

<small>
Aussi, pour les infos sur les fichiers <code>.sfk</code>, <code>.sfl</code>, <code>.sfap0</code>, <code>.sfvp0</code>, voir : <a href="https://vegasaur.com/sweeper">https://vegasaur.com/sweeper</a><br>
</small>

<br>

## XVI. Canaux d'achat du logiciel

1.  Site web officiel VEGAS : https://www.vegascreativesoftware.com/us/

  - Ne vend que la dernière version. Deux éditions principales : Standard (pas de suffixe, anciennement `Edit`) et `Suite` (inclut des logiciels/plugins supplémentaires). Disponible en Licence Perpétuelle (achat unique) ou Abonnement (365 jours). Supporte aussi des réductions de mise à niveau si vous possédez une ancienne licence. Une licence active deux appareils ; vous pouvez désactiver des appareils dans votre compte MAGIX (avec un délai). L'installateur officiel ne contient généralement pas le français.

  - Liens des installateurs officiels : https://www.vegascreativesoftware.info/us/forum/posts--104782/





2.  Quelques agents régionaux, par ex. Japon : https://www.sourcenext.com/product/vegas/video/vegas-edit/
  - Moins cher que le site officiel, mais pourrait vous forcer à utiliser le japonais.

3. Édition Steam : https://store.steampowered.com/app/4006040/
  - VP23 prix à $199 aux USA. Cependant, l'édition Steam **ne permet pas plusieurs instances**, ne supporte pas les changements manuels de registre pour la langue, et manque de services cloud comme Synthèse vocale/Reconnaissance vocale et VEGAS Hub.

4.  Bundles à rabais profond occasionnels sur des sites comme [Humble Bundle](https://www.humblebundle.com/), [Fanatical](https://www.fanatical.com/).

  - Prix autour de $20-30. Inclut typiquement la version VEGAS Pro **deux versions derrière la dernière actuelle**, plus du contenu bundle. Qualifie aussi pour les réductions de mise à niveau officielles. Par exemple, quand la dernière est 21, ils vendent 19. Les ventes sont peu fréquentes et brèves, avec un contenu bundle variable.

Tous les canaux ont des réductions aléatoires. Pour les offres actuelles, suivez ce fil : https://www.vegascreativesoftware.info/us/forum/posts--109642/

<br>

## XVII. Communautés/Forums VEGAS



Forum officiel VEGAS Pro : [https://www.vegascreativesoftware.info/us/vegas-pro-forum/](https://www.vegascreativesoftware.info/us/vegas-pro-forum/)

Reddit VEGAS Pro : [https://www.reddit.com/r/VegasPro/](https://www.reddit.com/r/VegasPro/)
