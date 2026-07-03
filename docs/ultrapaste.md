---
layout: doc
title: UltraPaste! Extension
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

@en # UltraPaste! Extension
@zh # 超级粘贴 UltraPaste! 扩展
@zh-hant # 超級貼上 UltraPaste! 擴充功能
@ja # UltraPaste! 拡張機能
@ko # UltraPaste! 확장
@de # UltraPaste!-Erweiterung
@fr # Extension UltraPaste!
@ru # Расширение UltraPaste!

@en <ImageOnDemand alt="Icon" src="ultrapaste/img001_ultrapaste_icon.png" />
@zh <ImageOnDemand alt="图标" src="ultrapaste/img001_ultrapaste_icon.png" />
@zh-hant <ImageOnDemand alt="圖示" src="ultrapaste/img001_ultrapaste_icon.png" />
@ja <ImageOnDemand alt="アイコン" src="ultrapaste/img001_ultrapaste_icon.png" />
@ko <ImageOnDemand alt="아이콘" src="ultrapaste/img001_ultrapaste_icon.png" />
@de <ImageOnDemand alt="Symbol" src="ultrapaste/img001_ultrapaste_icon.png" />
@fr <ImageOnDemand alt="Icône" src="ultrapaste/img001_ultrapaste_icon.png" />
@ru <ImageOnDemand button-text="Загрузить изображение" alt="Иконка" src="img/ultrapaste/img001_ultrapaste_icon.png" />

@en ## Overview
@zh ## 简述
@zh-hant ## 簡述
@ja ## 概要
@ko ## 개요
@de ## Übersicht
@fr ## Aperçu
@ru ## Обзор

@en This extension introduces a **<u>novel</u>** file import method for VEGAS Pro. With just one hotkey, you can import almost any type of file: regular media files, images from the clipboard, SRT subtitle files, and even REAPER clipboard data. You simply need to `Ctrl + C`, then `Ctrl + Shift + V` to quickly import these files into the VEGAS timeline.
@zh 本扩展为 VEGAS Pro 设计了一种 **<u>很新</u>** 的文件导入方式。仅仅通过一个快捷键，你可以导入几乎所有类型的文件：普通媒体文件、剪贴板里的图像文件、SRT 字幕文件，甚至是 REAPER 的剪贴板数据。你只需要 `Ctrl + C`，然后 `Ctrl + Shift + V`，即可快速导入这些文件到 VEGAS 时间轴中。
@zh-hant 本擴充功能為 VEGAS Pro 設計了一種 **<u>很新</u>** 的檔案匯入方式。僅需透過一個快速鍵，你可以匯入幾乎所有類型的檔案：普通媒體檔案、剪貼簿裡的圖像檔案、SRT 字幕檔案，甚至是 REAPER 的剪貼簿資料。你只需要 `Ctrl + C`，然後 `Ctrl + Shift + V`，即可快速將這些檔案匯入到 VEGAS 時間軸中。
@ja この拡張機能は、VEGAS Pro に**<u>画期的な</u>**ファイルインポート方法を導入します。たった一つのホットキーで、ほぼすべてのタイプのファイルをインポートできます：通常のメディアファイル、クリップボードからの画像、SRT 字幕ファイル、さらには REAPER のクリップボードデータまで。`Ctrl + C`、次に `Ctrl + Shift + V` を押すだけで、これらのファイルを VEGAS のタイムラインに素早くインポートできます。
@ko 이 확장은 VEGAS Pro에 대한 **<u>새로운</u>** 파일 가져오기 방법을 도입합니다. 단 하나의 핫키만으로 거의 모든 유형의 파일을 가져올 수 있습니다: 일반 미디어 파일, 클립보드의 이미지, SRT 자막 파일, 심지어 REAPER 클립보드 데이터까지. `Ctrl + C` 한 다음 `Ctrl + Shift + V`만 누르면 이 파일들을 VEGAS 타임라인으로 빠르게 가져올 수 있습니다.
@de Diese Erweiterung führt eine **<u>neuartige</u>** Dateiimportmethode für VEGAS Pro ein. Mit nur einer Tastenkombination können Sie fast jeden Dateityp importieren: reguläre Mediendateien, Bilder aus der Zwischenablage, SRT-Untertiteldateien und sogar REAPER-Zwischenablagedaten. Sie müssen lediglich `Strg + C` und dann `Strg + Umschalt + V` drücken, um diese Dateien schnell in die VEGAS-Zeitachse zu importieren.
@fr Cette extension introduit une méthode d'importation de fichiers **<u>novatrice</u>** pour VEGAS Pro. Avec une simple touche de raccourci, vous pouvez importer presque tous types de fichiers : fichiers multimédias classiques, images du presse-papiers, fichiers de sous-titres SRT, et même des données du presse-papiers de REAPER. Il vous suffit de faire `Ctrl + C`, puis `Ctrl + Maj + V` pour importer rapidement ces fichiers dans la timeline de VEGAS.
@ru Это расширение представляет **<u>новый</u>** метод импорта файлов для VEGAS Pro. Всего одной горячей клавишей вы можете импортировать почти любой тип файлов: обычные медиафайлы, изображения из буфера обмена, файлы субтитров SRT и даже данные буфера обмена REAPER. Вам просто нужно сделать `Ctrl + C`, затем `Ctrl + Shift + V`, чтобы быстро импортировать эти файлы на временную шкалу VEGAS.

@en Example of media file import method:
@zh 媒体文件导入方式示例：
@zh-hant 媒體檔案匯入方式範例：
@ja メディアファイルのインポート方法の例：
@ko 미디어 파일 가져오기 방법 예시:
@de Beispiel für die Medienimportmethode:
@fr Exemple de la méthode d'importation de fichiers multimédias :
@ru Пример метода импорта медиафайлов:

@en <ImageOnDemand alt="Media Import" src="ultrapaste/img015_ultrapaste_media_import.gif" />
@zh <ImageOnDemand alt="媒体导入" src="ultrapaste/img015_ultrapaste_media_import.gif" />
@zh-hant <ImageOnDemand alt="媒體匯入" src="ultrapaste/img015_ultrapaste_media_import.gif" />
@ja <ImageOnDemand alt="メディアインポート" src="ultrapaste/img015_ultrapaste_media_import.gif" />
@ko <ImageOnDemand alt="미디어 가져오기" src="ultrapaste/img015_ultrapaste_media_import.gif" />
@de <ImageOnDemand alt="Medienimport" src="ultrapaste/img015_ultrapaste_media_import.gif" />
@fr <ImageOnDemand alt="Importation Média" src="ultrapaste/img015_ultrapaste_media_import.gif" />
@ru <ImageOnDemand button-text="Загрузить изображение" alt="Импорт медиа" src="img/ultrapaste/img015_ultrapaste_media_import.gif" />

@en Interaction of the `Clipboard Image` feature with your screenshot tool:
@zh `剪贴板图像` 功能与你的截图工具的交互：
@zh-hant `剪貼簿圖像` 功能與你的截圖工具的互動：
@ja `クリップボード画像`機能とスクリーンショットツールとの連携：
@ko `클립보드 이미지` 기능과 스크린샷 도구의 상호작용:
@de Interaktion der Funktion `Zwischenablagebild` mit Ihrem Screenshot-Tool:
@fr Interaction de la fonction `Image du presse-papiers` avec votre outil de capture d'écran :
@ru Взаимодействие функции `Изображение из буфера обмена` с вашим инструментом для скриншотов:

@en <ImageOnDemand alt="Screenshot" src="ultrapaste/img016_ultrapaste_screenshot.gif" />
@zh <ImageOnDemand alt="截图" src="ultrapaste/img016_ultrapaste_screenshot.gif" />
@zh-hant <ImageOnDemand alt="截圖" src="ultrapaste/img016_ultrapaste_screenshot.gif" />
@ja <ImageOnDemand alt="スクリーンショット" src="ultrapaste/img016_ultrapaste_screenshot.gif" />
@ko <ImageOnDemand alt="스크린샷" src="ultrapaste/img016_ultrapaste_screenshot.gif" />
@de <ImageOnDemand alt="Screenshot" src="ultrapaste/img016_ultrapaste_screenshot.gif" />
@fr <ImageOnDemand alt="Capture d'écran" src="ultrapaste/img016_ultrapaste_screenshot.gif" />
@ru <ImageOnDemand button-text="Загрузить изображение" alt="Скриншот" src="img/ultrapaste/img016_ultrapaste_screenshot.gif" />

@en Interaction of the `Clipboard Image` feature with PowerPoint:
@zh `剪贴板图像` 功能与 PPT 的交互：
@zh-hant `剪貼簿圖像` 功能與 PPT 的互動：
@ja `クリップボード画像`機能と PowerPoint との連携：
@ko `클립보드 이미지` 기능과 PowerPoint의 상호작용:
@de Interaktion der Funktion `Zwischenablagebild` mit PowerPoint:
@fr Interaction de la fonction `Image du presse-papiers` avec PowerPoint :
@ru Взаимодействие функции `Изображение из буфера обмена` с PowerPoint:

@en <ImageOnDemand alt="PowerPoint" src="ultrapaste/img017_ultrapaste_ppt.gif" />
@zh <ImageOnDemand alt="PPT" src="ultrapaste/img017_ultrapaste_ppt.gif" />
@zh-hant <ImageOnDemand alt="PPT" src="ultrapaste/img017_ultrapaste_ppt.gif" />
@ja <ImageOnDemand alt="PowerPoint" src="ultrapaste/img017_ultrapaste_ppt.gif" />
@ko <ImageOnDemand alt="파워포인트" src="ultrapaste/img017_ultrapaste_ppt.gif" />
@de <ImageOnDemand alt="PowerPoint" src="ultrapaste/img017_ultrapaste_ppt.gif" />
@fr <ImageOnDemand alt="PowerPoint" src="ultrapaste/img017_ultrapaste_ppt.gif" />
@ru <ImageOnDemand button-text="Загрузить изображение" alt="PowerPoint" src="img/ultrapaste/img017_ultrapaste_ppt.gif" />

@en ## Installation
@zh ## 安装
@zh-hant ## 安裝
@ja ## インストール
@ko ## 설치
@de ## Installation
@fr ## Installation
@ru ## Установка

@en Current Extension Version: v1.03 beta
@zh 当前扩展版本号：v1.03 beta
@zh-hant 目前擴充功能版本號：v1.03 beta
@ja 現在の拡張機能バージョン：v1.03 beta
@ko 현재 확장 버전: v1.03 beta
@de Aktuelle Erweiterungsversion: v1.03 Beta
@fr Version actuelle de l'extension : v1.03 bêta
@ru Текущая версия расширения: v1.03 beta

@en Supported Versions: Sony Vegas Pro 13 - Magix Vegas Pro 22
@zh 支持版本：Sony Vegas Pro 13 - Magix Vegas Pro 22
@zh-hant 支援版本：Sony Vegas Pro 13 - Magix Vegas Pro 22
@ja 対応バージョン：Sony Vegas Pro 13 - Magix Vegas Pro 22
@ko 지원 버전: Sony Vegas Pro 13 - Magix Vegas Pro 22
@de Unterstützte Versionen: Sony Vegas Pro 13 – Magix Vegas Pro 22
@fr Versions supportées : Sony Vegas Pro 13 - Magix Vegas Pro 22
@ru Поддерживаемые версии: Sony Vegas Pro 13 - Magix Vegas Pro 22

@en 1.  Go to [Releases](https://github.com/zzzzzz9125/UltraPaste/releases) to download the latest .zip file and extract it. Select `UltraPaste.dll` <small>(or `UltraPaste_13.dll` for `Sony VEGAS Pro 13`)</small> and `UltraPaste.png`, copy them, and paste into the extension folder:
@zh 1. 前往 [Releases](https://github.com/zzzzzz9125/UltraPaste/releases) 下载最新的压缩包并解压。选择 `UltraPaste.dll`<small>（如果是 `Sony VEGAS Pro 13` 的话就是 `UltraPaste_13.dll`）</small> 和 `UltraPaste.png` 并复制，粘贴到扩展文件夹：
@zh-hant 1. 前往 [Releases](https://github.com/zzzzzz9125/UltraPaste/releases) 下載最新的壓縮檔並解壓縮。選擇 `UltraPaste.dll`<small>（如果是 `Sony VEGAS Pro 13` 的話就是 `UltraPaste_13.dll`）</small> 和 `UltraPaste.png` 並複製，貼上到擴充功能資料夾：
@ja 1.  [Releases](https://github.com/zzzzzz9125/UltraPaste/releases) から最新の .zip ファイルをダウンロードし、解凍します。`UltraPaste.dll`<small>（`Sony VEGAS Pro 13` の場合は `UltraPaste_13.dll`）</small>と `UltraPaste.png` を選択し、コピーして拡張機能フォルダに貼り付けます：
@ko 1.  [릴리스](https://github.com/zzzzzz9125/UltraPaste/releases)에서 최신 .zip 파일을 다운로드하고 압축을 풉니다. `UltraPaste.dll`<small>(`Sony VEGAS Pro 13`의 경우 `UltraPaste_13.dll`)</small>과 `UltraPaste.png`를 선택하여 복사하고, 다음 확장 폴더에 붙여넣습니다:
@de 1.  Gehen Sie zu [Releases](https://github.com/zzzzzz9125/UltraPaste/releases), um die neueste .zip-Datei herunterzuladen und zu entpacken. Wählen Sie `UltraPaste.dll` <small>(oder `UltraPaste_13.dll` für `Sony VEGAS Pro 13`)</small> und `UltraPaste.png` aus, kopieren Sie sie und fügen Sie sie in den Erweiterungsordner ein:
@fr 1.  Rendez-vous sur [Releases](https://github.com/zzzzzz9125/UltraPaste/releases) pour télécharger le dernier fichier .zip et extrayez-le. Sélectionnez `UltraPaste.dll` <small>(ou `UltraPaste_13.dll` pour `Sony VEGAS Pro 13`)</small> et `UltraPaste.png`, copiez-les, et collez-les dans le dossier des extensions :
@ru 1.  Перейдите в [Releases](https://github.com/zzzzzz9125/UltraPaste/releases), чтобы скачать последний .zip-файл и распаковать его. Выберите `UltraPaste.dll` <small>(или `UltraPaste_13.dll` для `Sony VEGAS Pro 13`)</small> и `UltraPaste.png`, скопируйте их и вставьте в папку расширений:

@en   - `C:\ProgramData\Vegas Pro\Application Extensions\`
@zh   - `C:\ProgramData\Vegas Pro\Application Extensions\`  
@zh-hant   - `C:\ProgramData\Vegas Pro\Application Extensions\`  
@ja   - `C:\ProgramData\Vegas Pro\Application Extensions\`
@ko   - `C:\ProgramData\Vegas Pro\Application Extensions\`
@de   - `C:\ProgramData\Vegas Pro\Application Extensions\`
@fr   - `C:\ProgramData\Vegas Pro\Application Extensions\`
@ru   - `C:\ProgramData\Vegas Pro\Application Extensions\`

@en   - or for Sony: `C:\ProgramData\Sony\Vegas Pro\Application Extensions\`
@zh   - 或者 Sony 版的 `C:\ProgramData\Sony\Vegas Pro\Application Extensions\` 
@zh-hant   - 或是 Sony 版的 `C:\ProgramData\Sony\Vegas Pro\Application Extensions\`
@ja   - または Sony 版の場合：`C:\ProgramData\Sony\Vegas Pro\Application Extensions\`
@ko   - 또는 Sony 버전의 경우: `C:\ProgramData\Sony\Vegas Pro\Application Extensions\`
@de   - oder für Sony: `C:\ProgramData\Sony\Vegas Pro\Application Extensions\`
@fr   - ou pour Sony : `C:\ProgramData\Sony\Vegas Pro\Application Extensions\`
@ru   - или для Sony: `C:\ProgramData\Sony\Vegas Pro\Application Extensions\`

@en   - Click [here](/index#general-steps-to-install-a-script-or-extension) if you don't know how to install extensions.
@zh   - 如果你不知道如何安装扩展的话，点击[这里](/zh/#安装脚本或扩展时的一般步骤)。
@zh-hant   - 如果你不知道如何安裝擴充功能的話，點選[這裡](/zh-hant/#安裝腳本或擴充功能時的一般步驟)。
@ja   - 拡張機能のインストール方法がわからない場合は、[こちら](/ja/#スクリプトまたは拡張機能をインストールする一般的な手順)をクリックしてください。
@ko   - 확장을 설치하는 방법을 모르신다면 [여기](/ko/#스크립트-또는-확장-설치-일반-단계)를 클릭하세요.
@de   - Klicken Sie [hier](/de/#allgemeine-schritte-zur-installation-eines-skripts-oder-einer-erweiterung), wenn Sie nicht wissen, wie Erweiterungen installiert werden.
@fr   - Cliquez [ici](/fr/#étapes-générales-pour-installer-un-script-ou-une-extension) si vous ne savez pas comment installer les extensions.
@ru   - Нажмите [здесь](/ru/#общие-шаги-для-установки-скрипта-или-расширения), если вы не знаете, как установить расширения.

@en 2.  After installation, you can find the dockable extension window via `Tools -> UltraPaste!`.
@zh 2. 安装完毕后，可通过 `工具 -> 超级粘贴!` 中找到可停靠的扩展窗口。
@zh-hant 2. 安裝完畢後，可透過 `工具 -> 超級貼上!` 中找到可停駐的擴充功能視窗。
@ja 2.  インストール後、`ツール -> UltraPaste!` からドッキング可能な拡張機能ウィンドウを見つけることができます。
@ko 2.  설치 후, `도구 -> UltraPaste!`에서 도킹 가능한 확장 창을 찾을 수 있습니다.
@de 2.  Nach der Installation finden Sie das andockbare Erweiterungsfenster über `Extras -> UltraPaste!`.
@fr 2.  Après l'installation, vous pouvez trouver la fenêtre d'extension ancrable via `Outils -> UltraPaste!`.
@ru 2.  После установки вы можете найти докируемое окно расширения через `Инструменты -> UltraPaste!`.

@en <ImageOnDemand alt="Tools Menu" src="ultrapaste/img002_ultrapaste_tools_menu.png" />
@zh <ImageOnDemand alt="工具菜单" src="ultrapaste/img002_ultrapaste_tools_menu.png" />
@zh-hant <ImageOnDemand alt="工具選單" src="ultrapaste/img002_ultrapaste_tools_menu.png" />
@ja <ImageOnDemand alt="ツールメニュー" src="ultrapaste/img002_ultrapaste_tools_menu.png" />
@ko <ImageOnDemand alt="도구 메뉴" src="ultrapaste/img002_ultrapaste_tools_menu.png" />
@de <ImageOnDemand alt="Extras-Menü" src="ultrapaste/img002_ultrapaste_tools_menu.png" />
@fr <ImageOnDemand alt="Menu Outils" src="ultrapaste/img002_ultrapaste_tools_menu.png" />
@ru <ImageOnDemand button-text="Загрузить изображение" alt="Меню Инструменты" src="img/ultrapaste/img002_ultrapaste_tools_menu.png" />

@en ## Usage
@zh ## 使用
@zh-hant ## 使用
@ja ## 使用方法
@ko ## 사용법
@de ## Verwendung
@fr ## Utilisation
@ru ## Использование

@en First is the topmost `UltraPaste!`. This is the extension's primary feature; almost all operations can be completed using it. You can assign it a keyboard shortcut in `Options -> Customize Keyboard`:
@zh 首先是最顶上的 `超级粘贴!`。这个是扩展最主要的功能，几乎所有操作都可以依赖它来完成。可以为它绑定一个键盘快捷键，到上边的 `选项 -> 自定义键盘`：
@zh-hant 首先是最頂上的 `超級貼上!`。這個是擴充功能最主要的功能，幾乎所有操作都可以依賴它來完成。可以為它綁定一個鍵盤快速鍵，到上邊的 `選項 -> 自訂鍵盤`：
@ja まずは最上位の `UltraPaste!` です。これは拡張機能の主要な機能で、ほとんどすべての操作はこれを使用して完了できます。`オプション -> カスタマイズキーボード` でキーボードショートカットを割り当てることができます：
@ko 먼저 가장 상단의 `UltraPaste!`입니다. 이것은 확장의 주요 기능으로, 거의 모든 작업을 이를 통해 완료할 수 있습니다. `옵션 -> 사용자 지정 키보드`에서 키보드 단축키를 할당할 수 있습니다:
@de Zuerst das oberste `UltraPaste!`. Dies ist die Hauptfunktion der Erweiterung; fast alle Operationen können damit durchgeführt werden. Sie können ihr in `Optionen -> Tastatur anpassen` eine Tastenkombination zuweisen:
@fr Tout d'abord, l'élément principal `UltraPaste!`. C'est la fonction principale de l'extension ; presque toutes les opérations peuvent être réalisées avec celle-ci. Vous pouvez lui attribuer un raccourci clavier dans `Options -> Personnaliser le clavier` :
@ru Первым идет самый верхний пункт `UltraPaste!`. Это основная функция расширения; почти все операции могут быть выполнены с его помощью. Вы можете назначить ему сочетание клавиш в `Параметры -> Настроить клавиатуру`:

@en <ImageOnDemand alt="Customize Keyboard" src="ultrapaste/img003_ultrapaste_keyboard.png" />
@zh <ImageOnDemand alt="自定义键盘" src="ultrapaste/img003_ultrapaste_keyboard.png" />
@zh-hant <ImageOnDemand alt="自訂鍵盤" src="ultrapaste/img003_ultrapaste_keyboard.png" />
@ja <ImageOnDemand alt="カスタマイズキーボード" src="ultrapaste/img003_ultrapaste_keyboard.png" />
@ko <ImageOnDemand alt="키보드 사용자 지정" src="ultrapaste/img003_ultrapaste_keyboard.png" />
@de <ImageOnDemand alt="Tastatur anpassen" src="ultrapaste/img003_ultrapaste_keyboard.png" />
@fr <ImageOnDemand alt="Personnaliser le clavier" src="ultrapaste/img003_ultrapaste_keyboard.png" />
@ru <ImageOnDemand button-text="Загрузить изображение" alt="Настроить клавиатуру" src="img/ultrapaste/img003_ultrapaste_keyboard.png" />

@en `Ctrl + Shift + V` is my personal recommendation. You can bind another convenient shortcut as well. It's not recommended to bind `Ctrl + V`, as it would override VEGAS's native paste key.
@zh `Ctrl + Shift +V` 是我个人推荐的快捷键，绑个其他顺手的也可以。不建议绑 `Ctrl + V`，会覆盖掉 VEGAS 原生的粘贴键。
@zh-hant `Ctrl + Shift +V` 是我個人推薦的快速鍵，綁個其他順手的也可以。不建議綁 `Ctrl + V`，會覆蓋掉 VEGAS 原生的貼上鍵。
@ja `Ctrl + Shift + V` は私の個人的なおすすめです。他の便利なショートカットをバインドすることもできます。VEGAS のネイティブな貼り付けキーを上書きするため、`Ctrl + V` をバインドすることはお勧めしません。
@ko `Ctrl + Shift + V`는 개인적으로 추천하는 단축키입니다. 다른 편리한 단축키로 바인딩해도 됩니다. `Ctrl + V`를 바인딩하는 것은 권장하지 않습니다. VEGAS의 기본 붙여넣기 키를 덮어쓰게 됩니다.
@de `Strg + Umschalt + V` ist meine persönliche Empfehlung. Sie können auch eine andere bequeme Tastenkombination vergeben. Es wird nicht empfohlen, `Strg + V` zu vergeben, da dies die native VEGAS-Einfügetaste überschreiben würde.
@fr `Ctrl + Maj + V` est ma recommandation personnelle. Vous pouvez également lier un autre raccourci pratique. Il n'est pas recommandé de lier `Ctrl + V`, car cela écraserait la touche de collage native de VEGAS.
@ru `Ctrl + Shift + V` — это мое личное рекомендация. Вы можете назначить и другое удобное сочетание. Не рекомендуется назначать `Ctrl + V`, так как это переопределит нативную клавишу вставки VEGAS.

@en This binds the shortcut for our UltraPaste key. All one-click operation features that appear in the menu can also have shortcuts added this way.
@zh 这样就为我们的超级粘贴键绑好了快捷键。所有出现在选单里的一键操作功能，也可以这样子添加快捷键。
@zh-hant 這樣就為我們的超級貼上鍵綁好了快速鍵。所有出現在選單裡的一鍵操作功能，也可以這樣子新增快速鍵。
@ja これで UltraPaste キーのショートカットがバインドされました。メニューに表示されるすべてのワンクリック操作機能も、この方法でショートカットを追加できます。
@ko 이렇게 하면 UltraPaste 키에 대한 단축키가 설정됩니다. 메뉴에 나타나는 모든 원클릭 작업 기능도 이와 같은 방식으로 단축키를 추가할 수 있습니다.
@de Damit ist die Tastenkombination für unsere UltraPaste-Taste vergeben. Alle Ein-Klick-Operationen, die im Menü erscheinen, können auf dieselbe Weise mit Tastenkombinationen versehen werden.
@fr Ainsi, le raccourci pour notre touche UltraPaste est défini. Toutes les fonctionnalités d'opération en un clic apparaissant dans le menu peuvent également voir leur raccourci ajouté de cette manière.
@ru Таким образом назначается сочетание клавиш для нашей клавиши UltraPaste. Все функции одного клика, появляющиеся в меню, также могут иметь добавленные таким образом сочетания клавиш.

@en The file import logic is simple: for example, select any media file on your desktop, `Ctrl + C` it, run the `UltraPaste` shortcut in VEGAS, and it will be imported onto the currently selected VEGAS track. Furthermore, if you have defined a loop region in VEGAS, the file can be imported according to the length of that loop region.
@zh 文件的导入逻辑很简单：比如选中你桌面上的任意媒体文件，对它 `Ctrl + C`，在 VEGAS 里运行 `超级粘贴` 的快捷键，即可将其导入到当前所选择的 VEGAS 轨道上。在此基础上，如果你在 VEGAS 里划定了一个循环区域，那么也可以按照该循环区域的长度导入文件。
@zh-hant 檔案的匯入邏輯很簡單：比如選中你桌面上的任意媒體檔案，對它 `Ctrl + C`，在 VEGAS 裡執行 `超級貼上` 的快速鍵，即可將其匯入到目前所選擇的 VEGAS 軌道上。在此基礎上，如果你在 VEGAS 裡劃定了一個循環區域，那麼也可以按照該循環區域的長度匯入檔案。
@ja ファイルのインポートロジックは単純です：例えば、デスクトップ上の任意のメディアファイルを選択し、`Ctrl + C` でコピーし、VEGAS 内で `UltraPaste` ショートカットを実行すると、現在選択されている VEGAS トラックにインポートされます。さらに、VEGAS でループ領域を定義している場合、ファイルはそのループ領域の長さに従ってインポートできます。
@ko 파일 가져오기 로직은 간단합니다: 예를 들어, 데스크톱의 모든 미디어 파일을 선택하고 `Ctrl + C`를 누른 다음, VEGAS에서 `UltraPaste` 단축키를 실행하면 현재 선택된 VEGAS 트랙으로 가져옵니다. 더 나아가, VEGAS에서 루프 영역을 정의했다면 해당 루프 영역의 길이에 따라 파일을 가져올 수 있습니다.
@de Die Dateiimportlogik ist einfach: Wählen Sie beispielsweise eine beliebige Mediendatei auf Ihrem Desktop aus, drücken Sie `Strg + C`, führen Sie die `UltraPaste`-Tastenkombination in VEGAS aus, und sie wird auf den aktuell ausgewählten VEGAS-Spur importiert. Wenn Sie in VEGAS einen Loop-Bereich definiert haben, kann die Datei entsprechend der Länge dieses Loop-Bereichs importiert werden.
@fr La logique d'importation de fichiers est simple : par exemple, sélectionnez n'importe quel fichier média sur votre bureau, faites `Ctrl + C`, exécutez le raccourci `UltraPaste` dans VEGAS, et il sera importé sur la piste VEGAS actuellement sélectionnée. De plus, si vous avez défini une région de boucle dans VEGAS, le fichier peut être importé en fonction de la longueur de cette région de boucle.
@ru Логика импорта файлов проста: например, выберите любой медиафайл на рабочем столе, нажмите `Ctrl + C`, запустите сочетание клавиш `UltraPaste` в VEGAS, и он будет импортирован на текущую выбранную дорожку VEGAS. Более того, если вы определили область цикла в VEGAS, файл может быть импортирован в соответствии с длиной этой области цикла.

@en Beyond basic file import, the extension can also read these clipboard data types:
@zh 除了基本的文件导入以外，扩展还可以读取这些剪贴板数据：
@zh-hant 除了基本的檔案匯入以外，擴充功能還可以讀取這些剪貼簿資料：
@ja 基本的なファイルインポート以外にも、この拡張機能は以下のクリップボードデータタイプを読み取ることができます：
@ko 기본 파일 가져오기 외에도, 확장은 다음과 같은 클립보드 데이터 유형을 읽을 수 있습니다:
@de Neben dem grundlegenden Dateiimport kann die Erweiterung auch diese Zwischenablagedatentypen lesen:
@fr Au-delà de l'importation basique de fichiers, l'extension peut également lire ces types de données du presse-papiers :
@ru Помимо базового импорта файлов, расширение также может читать следующие типы данных из буфера обмена:

@en *   Clipboard images
@zh - 剪贴板图像
@zh-hant - 剪貼簿圖像
@ja *   クリップボード画像
@ko *   클립보드 이미지
@de *   Bilder in der Zwischenablage
@fr *   Images du presse-papiers
@ru *   Изображения из буфера обмена

@en *   Plain text and subtitle files
@zh - 纯文本和字幕文件
@zh-hant - 純文字和字幕檔案
@ja *   プレーンテキストと字幕ファイル
@ko *   일반 텍스트 및 자막 파일
@de *   Nur-Text- und Untertiteldateien
@fr *   Texte brut et fichiers de sous-titres
@ru *   Простой текст и файлы субтитров

@en *   REAPER clipboard data
@zh - REAPER 剪贴板数据
@zh-hant - REAPER 剪貼簿資料
@ja *   REAPER クリップボードデータ
@ko *   REAPER 클립보드 데이터
@de *   REAPER-Zwischenablagedaten
@fr *   Données du presse-papiers REAPER
@ru *   Данные буфера обмена REAPER

@en All this data can be correctly recognized and processed.
@zh 这些数据都可以被正确地识别和处理。
@zh-hant 這些資料都可以被正確地識別和處理。
@ja これらすべてのデータは正しく認識・処理されます。
@ko 이 모든 데이터는 올바르게 인식되고 처리됩니다.
@de Alle diese Daten können korrekt erkannt und verarbeitet werden.
@fr Toutes ces données peuvent être correctement reconnues et traitées.
@ru Все эти данные могут быть корректно распознаны и обработаны.

@en <br>
@zh <br>
@zh-hant <br>
@ja <br>
@ko <br>
@de <br>
@fr <br>
@ru <br>

@en `UltraPaste! - Window` is the extension's settings window, where you can adjust the behavior logic of `UltraPaste`.
@zh `超级粘贴! - 窗口` 是扩展的设置窗口，你可以在这里调整 `超级粘贴` 的行为逻辑。
@zh-hant `超級貼上! - 視窗` 是擴充功能的設定視窗，你可以在這裡調整 `超級貼上` 的行為邏輯。
@ja `UltraPaste! - ウィンドウ` は拡張機能の設定ウィンドウで、ここで `UltraPaste` の動作ロジックを調整できます。
@ko `UltraPaste! - 창`은 확장의 설정 창으로, 여기에서 `UltraPaste`의 동작 로직을 조정할 수 있습니다.
@de `UltraPaste! - Fenster` ist das Einstellungsfenster der Erweiterung, in dem Sie das Verhaltenslogik von `UltraPaste` anpassen können.
@fr `UltraPaste! - Fenêtre` est la fenêtre de paramètres de l'extension, où vous pouvez ajuster la logique de comportement d'`UltraPaste`.
@ru `UltraPaste! - Окно` — это окно настроек расширения, где вы можете настроить логику поведения `UltraPaste`.

@en ### General
@zh ### 常规
@zh-hant ### 一般
@ja ### 一般
@ko ### 일반
@de ### Allgemein
@fr ### Général
@ru ### Общие

@en <ImageOnDemand alt="General" src="ultrapaste/img004_ultrapaste_general.png" />
@zh <ImageOnDemand alt="常规" src="ultrapaste/img004_ultrapaste_general.png" />
@zh-hant <ImageOnDemand alt="一般" src="ultrapaste/img004_ultrapaste_general.png" />
@ja <ImageOnDemand alt="一般" src="ultrapaste/img004_ultrapaste_general.png" />
@ko <ImageOnDemand alt="일반" src="ultrapaste/img004_ultrapaste_general.png" />
@de <ImageOnDemand alt="Allgemein" src="ultrapaste/img004_ultrapaste_general.png" />
@fr <ImageOnDemand alt="Général" src="ultrapaste/img004_ultrapaste_general.png" />
@ru <ImageOnDemand button-text="Загрузить изображение" alt="Общие" src="img/ultrapaste/img004_ultrapaste_general.png" />

@en Exclude File Types: This option makes the extension exclude files matching specific name patterns. It uses basic DOS expressions. For example, the `*.sfvp0` and `*.sfap0` in the image are VEGAS Pro's video proxy files and audio proxy files, respectively. These proxy files can actually be imported directly into VEGAS, but they are excluded by default to prevent user error. If you don't need to import certain specific files, you can adjust this setting yourself.
@zh 排除文件类型：这个选项会使扩展排除特定名称规则的文件。使用的是基本的 DOS 表达式。比如图上的 `*.sfvp0` 和 `*.sfap0`，分别是 VEGAS Pro 的视频代理文件和音频代理文件。这些代理文件实际上是可以直接导入进 VEGAS 的，但是为了避免用户误操作，默认是排除掉的。如果你不需要导入某些特定的文件的话，可以自行调整这个设置。
@zh-hant 排除檔案類型：這個選項會使擴充功能排除特定名稱規則的檔案。使用的是基本的 DOS 表示式。比如圖上的 `*.sfvp0` 和 `*.sfap0`，分別是 VEGAS Pro 的影片代理檔案和音訊代理檔案。這些代理檔案實際上是可以直接匯入進 VEGAS 的，但是為了避免使用者誤操作，預設是排除掉的。如果你不需要匯入某些特定的檔案的話，可以自行調整這個設定。
@ja 除外ファイルタイプ：このオプションは、特定の名前パターンに一致するファイルを拡張機能が除外するようにします。基本的な DOS ワイルドカード式を使用します。例えば、画像内の `*.sfvp0` と `*.sfap0` は、それぞれ VEGAS Pro のビデオプロキシファイルとオーディオプロキシファイルです。これらのプロキシファイルは実際には VEGAS に直接インポートできますが、ユーザーの誤操作を防ぐためにデフォルトで除外されています。特定のファイルをインポートする必要がない場合は、この設定を自分で調整できます。
@ko 파일 유형 제외: 이 옵션은 확장이 특정 이름 패턴과 일치하는 파일을 제외하도록 합니다. 기본 DOS 표현식을 사용합니다. 예를 들어, 이미지의 `*.sfvp0` 및 `*.sfap0`는 각각 VEGAS Pro의 비디오 프록시 파일과 오디오 프록시 파일입니다. 이 프록시 파일은 실제로 VEGAS에 직접 가져올 수 있지만, 사용자 오작동을 방지하기 위해 기본적으로 제외됩니다. 특정 파일을 가져올 필요가 없다면 이 설정을 직접 조정할 수 있습니다.
@de Dateitypen ausschließen: Diese Option bewirkt, dass die Erweiterung Dateien ausschließt, die bestimmten Namensmustern entsprechen. Es werden einfache DOS-Ausdrücke verwendet. Beispielsweise sind `*.sfvp0` und `*.sfap0` im Bild die Video-Proxy-Dateien bzw. Audio-Proxy-Dateien von VEGAS Pro. Diese Proxy-Dateien können tatsächlich direkt in VEGAS importiert werden, sind jedoch standardmäßig ausgeschlossen, um Benutzerfehler zu vermeiden. Wenn Sie bestimmte Dateien nicht importieren müssen, können Sie diese Einstellung selbst anpassen.
@fr Exclure les types de fichiers : Cette option fait que l'extension exclut les fichiers correspondant à des modèles de noms spécifiques. Elle utilise des expressions DOS basiques. Par exemple, les `*.sfvp0` et `*.sfap0` sur l'image sont respectivement les fichiers proxy vidéo et audio de VEGAS Pro. Ces fichiers proxy peuvent en fait être importés directement dans VEGAS, mais ils sont exclus par défaut pour éviter les erreurs de l'utilisateur. Si vous n'avez pas besoin d'importer certains fichiers spécifiques, vous pouvez ajuster ce paramètre vous-même.
@ru Исключить типы файлов: Эта опция заставляет расширение исключать файлы, соответствующие определенным шаблонам имен. Используются базовые выражения DOS. Например, `*.sfvp0` и `*.sfap0` на изображении — это прокси-файлы видео и аудио VEGAS Pro соответственно. Эти прокси-файлы на самом деле можно импортировать напрямую в VEGAS, но они исключены по умолчанию, чтобы избежать ошибок пользователя. Если вам не нужно импортировать определенные файлы, вы можете самостоятельно настроить этот параметр.

@en <br>
@zh <br>
@zh-hant <br>
@ja <br>
@ko <br>
@de <br>
@fr <br>
@ru <br>

@en ### Clipboard Image
@zh ### 剪贴板图像
@zh-hant ### 剪貼簿圖像
@ja ### クリップボード画像
@ko ### 클립보드 이미지
@de ### Zwischenablagebild
@fr ### Image du presse-papiers
@ru ### Изображение из буфера обмена

@en <ImageOnDemand alt="Clipboard Image" src="ultrapaste/img005_ultrapaste_clipboard_image.png" />
@zh <ImageOnDemand alt="剪贴板图像" src="ultrapaste/img005_ultrapaste_clipboard_image.png" />
@zh-hant <ImageOnDemand alt="剪貼簿圖像" src="ultrapaste/img005_ultrapaste_clipboard_image.png" />
@ja <ImageOnDemand alt="クリップボード画像" src="ultrapaste/img005_ultrapaste_clipboard_image.png" />
@ko <ImageOnDemand alt="클립보드 이미지" src="ultrapaste/img005_ultrapaste_clipboard_image.png" />
@de <ImageOnDemand alt="Zwischenablagebild" src="ultrapaste/img005_ultrapaste_clipboard_image.png" />
@fr <ImageOnDemand alt="Image du presse-papiers" src="ultrapaste/img005_ultrapaste_clipboard_image.png" />
@ru <ImageOnDemand button-text="Загрузить изображение" alt="Изображение из буфера обмена" src="img/ultrapaste/img005_ultrapaste_clipboard_image.png" />

@en `Start Position`: The starting position for file import. Divided into three categories: `Cursor`, `Playback Cursor`, `Project Start`. The difference between `Cursor` and `Playback Cursor` is that when you play the timeline, the `Cursor` is just the starting point of playback, while the `Playback Cursor` is the real-time playback position of the timeline.
@zh `起始位置`：文件导入的起始位置。一共分为三类：`光标`、`播放光标`、`项目起始处`。`光标` 和 `播放光标` 的区别是，当你播放时间轴时， `光标` 只是播放的起始处，而 `播放光标` 是时间轴的实时播放位置。
@zh-hant `起始位置`：檔案匯入的起始位置。一共分為三類：`游標`、`播放游標`、`專案起始處`。`游標` 和 `播放游標` 的區別是，當你播放時間軸時， `游標` 只是播放的起始處，而 `播放游標` 是時間軸的即時播放位置。
@ja `開始位置`：ファイルインポートの開始位置。`カーソル`、`再生カーソル`、`プロジェクト開始位置`の3つのカテゴリに分けられます。`カーソル`と`再生カーソル`の違いは、タイムラインを再生するとき、`カーソル`は単なる再生開始点ですが、`再生カーソル`はタイムラインのリアルタイム再生位置です。
@ko `시작 위치`: 파일 가져오기의 시작 위치입니다. `커서`, `재생 커서`, `프로젝트 시작` 세 가지 범주로 나뉩니다. `커서`와 `재생 커서`의 차이는 타임라인을 재생할 때 `커서`는 재생의 시작점일 뿐이지만, `재생 커서`는 타임라인의 실시간 재생 위치라는 점입니다.
@de `Startposition`: Die Startposition für den Dateiimport. Unterteilt in drei Kategorien: `Cursor`, `Wiedergabecursor`, `Projektanfang`. Der Unterschied zwischen `Cursor` und `Wiedergabecursor` ist, dass beim Abspielen der Zeitachse der `Cursor` nur der Startpunkt der Wiedergabe ist, während der `Wiedergabecursor` die Echtzeit-Wiedergabeposition der Zeitachse ist.
@fr `Position de départ` : La position de départ pour l'importation de fichiers. Divisée en trois catégories : `Curseur`, `Curseur de lecture`, `Début du projet`. La différence entre `Curseur` et `Curseur de lecture` est que lorsque vous lisez la timeline, le `Curseur` est juste le point de départ de la lecture, tandis que le `Curseur de lecture` est la position de lecture en temps réel de la timeline.
@ru `Начальная позиция`: Начальная позиция для импорта файла. Разделена на три категории: `Курсор`, `Курсор воспроизведения`, `Начало проекта`. Разница между `Курсор` и `Курсор воспроизведения` в том, что при воспроизведении шкалы времени `Курсор` — это просто начальная точка воспроизведения, а `Курсор воспроизведения` — это реальная позиция воспроизведения на шкале времени.

@en `Move Cursor to End`: Mimics paste behavior, automatically moving the cursor to the very end of the new Event(s) after pasting.
@zh `将光标移至末尾`：模仿粘贴行为，粘贴完毕后自动将光标调整至新事件的最末尾处。
@zh-hant `將游標移至末尾`：模仿貼上行為，貼上完畢後自動將游標調整至新事件的最末尾處。
@ja `カーソルを末尾に移動`：貼り付け動作を模倣し、貼り付け後に自動的にカーソルを新規イベントの末尾に移動します。
@ko `커서를 끝으로 이동`: 붙여넣기 동작을 모방하여, 붙여넣기 후 자동으로 커서를 새 이벤트(들)의 가장 끝으로 이동시킵니다.
@de `Cursor an Ende bewegen`: Imitiert Einfügeverhalten und bewegt den Cursor nach dem Einfügen automatisch an das Ende der neuen Ereignisse.
@fr `Déplacer le curseur à la fin` : Imite le comportement de collage, en déplaçant automatiquement le curseur à la toute fin du ou des nouveaux événements après le collage.
@ru `Переместить курсор в конец`: Имитирует поведение вставки, автоматически перемещая курсор в самый конец нового события(ий) после вставки.

@en `Save Path`: VEGAS cannot embed files out of thin air; all media files must be saved to an actual location. We must set the path for clipboard images.
@zh `保存路径`：VEGAS 不可能凭空嵌入文件，所有的媒体文件都必须保存到实际的位置，我们必须设置剪贴板图像的路径。
@zh-hant `儲存路徑`：VEGAS 不可能憑空嵌入檔案，所有的媒體檔案都必須儲存到實際的位置，我們必須設定剪貼簿圖像的路徑。
@ja `保存パス`：VEGAS はファイルを空から埋め込むことはできません。すべてのメディアファイルは実際の場所に保存する必要があります。クリップボード画像の保存パスを設定する必要があります。
@ko `저장 경로`: VEGAS는 파일을 무에서 창조할 수 없으며, 모든 미디어 파일은 실제 위치에 저장되어야 합니다. 클립보드 이미지의 경로를 설정해야 합니다.
@de `Speicherpfad`: VEGAS kann Dateien nicht aus dem Nichts einbetten; alle Mediendateien müssen an einem tatsächlichen Speicherort gesichert werden. Wir müssen den Pfad für Zwischenablagebilder festlegen.
@fr `Chemin de sauvegarde` : VEGAS ne peut pas intégrer des fichiers à partir de rien ; tous les fichiers multimédias doivent être enregistrés à un emplacement réel. Nous devons définir le chemin pour les images du presse-papiers.
@ru `Путь сохранения`: VEGAS не может встраивать файлы из ниоткуда; все медиафайлы должны быть сохранены в фактическом месте. Мы должны указать путь для изображений из буфера обмена.

@en *   Default value: `Clipboard\<yyyyMMdd_HHmmss>.png`. This is equivalent to `%PROJECTFOLDER%\Clipboard\<yyyyMMdd_HHmmss>.png`, where `%PROJECTFOLDER%` refers to the folder path of the current project file. <small>(If the project hasn't been saved, it defaults to the desktop path.)</small>
@zh - 默认值是：`Clipboard\<yyyyMMdd_HHmmss>.png`。也就相当于是 `%PROJECTFOLDER%\Clipboard\<yyyyMMdd_HHmmss>.png`，这里的 `%PROJECTFOLDER%` 指的是该项目文件的文件夹路径。<small>（如果项目未被保存过，则为桌面路径。）</small>
@zh-hant - 預設值是：`Clipboard\<yyyyMMdd_HHmmss>.png`。也就相當於是 `%PROJECTFOLDER%\Clipboard\<yyyyMMdd_HHmmss>.png`，這裡的 `%PROJECTFOLDER%` 指的是該專案檔案的資料夾路徑。<small>（如果專案未被儲存過，則為桌面路徑。）</small>
@ja *   デフォルト値：`Clipboard\<yyyyMMdd_HHmmss>.png`。これは `%PROJECTFOLDER%\Clipboard\<yyyyMMdd_HHmmss>.png` に相当します。ここで、`%PROJECTFOLDER%` は現在のプロジェクトファイルのフォルダパスを指します。<small>（プロジェクトが保存されていない場合、デフォルトはデスクトップパスです。）</small>
@ko *   기본값: `Clipboard\<yyyyMMdd_HHmmss>.png`. 이것은 `%PROJECTFOLDER%\Clipboard\<yyyyMMdd_HHmmss>.png`와 동등합니다. 여기서 `%PROJECTFOLDER%`는 현재 프로젝트 파일의 폴더 경로를 나타냅니다. <small>(프로젝트가 저장되지 않은 경우 바탕 화면 경로가 기본값입니다.)</small>
@de *   Standardwert: `Clipboard\<yyyyMMdd_HHmmss>.png`. Dies entspricht `%PROJECTFOLDER%\Clipboard\<yyyyMMdd_HHmmss>.png`, wobei `%PROJECTFOLDER%` den Ordnerpfad der aktuellen Projektdatei bezeichnet. <small>(Wenn das Projekt noch nicht gespeichert wurde, wird standardmäßig der Desktop-Pfad verwendet.)</small>
@fr *   Valeur par défaut : `Clipboard\<yyyyMMdd_HHmmss>.png`. Ceci équivaut à `%PROJECTFOLDER%\Clipboard\<yyyyMMdd_HHmmss>.png`, où `%PROJECTFOLDER%` fait référence au chemin du dossier du projet actuel. <small>(Si le projet n'a pas été enregistré, il utilise par défaut le chemin du bureau.)</small>
@ru *   Значение по умолчанию: `Clipboard\<yyyyMMdd_HHmmss>.png`. Это эквивалентно `%PROJECTFOLDER%\Clipboard\<yyyyMMdd_HHmmss>.png`, где `%PROJECTFOLDER%` относится к пути к папке текущего файла проекта. <small>(Если проект не был сохранен, по умолчанию используется путь к рабочему столу.)</small>

@en *   `<yyyyMMdd_HHmmss>` refers to the timestamp format for saving files. Here we rigidly specify that parts of the path requiring conversion to timestamps must be enclosed in `<>`, otherwise the extension will not convert them.
@zh - `<yyyyMMdd_HHmmss>` 指的是保存文件的时间码格式。这里我们硬性规定，需要将对应字符转换为时间码的路径部分，必须用 `<>` 括起来，否则扩展将不会转换。
@zh-hant - `<yyyyMMdd_HHmmss>` 指的是儲存檔案的時間碼格式。這裡我們硬性規定，需要將對應字元轉換為時間碼的路徑部分，必須用 `<>` 括起來，否則擴充功能將不會轉換。
@ja *   `<yyyyMMdd_HHmmss>` はファイルを保存するタイムスタンプの形式を指します。ここでは、タイムスタンプに変換する必要があるパスの部分は `<>` で囲む必要があると厳密に指定しています。そうしないと、拡張機能は変換しません。
@ko *   `<yyyyMMdd_HHmmss>`는 파일 저장을 위한 타임스탬프 형식을 나타냅니다. 여기서는 타임스탬프로 변환해야 하는 경로 부분이 `<>`로 둘러싸여 있어야 한다고 엄격히 지정합니다. 그렇지 않으면 확장이 변환하지 않습니다.
@de *   `<yyyyMMdd_HHmmss>` bezieht sich auf das Zeitstempelformat für die Dateispeicherung. Hier legen wir fest, dass Teile des Pfads, die in Zeitstempel konvertiert werden müssen, in `<>` eingeschlossen sein müssen, andernfalls konvertiert die Erweiterung sie nicht.
@fr *   `<yyyyMMdd_HHmmss>` fait référence au format d'horodatage pour l'enregistrement des fichiers. Ici, nous imposons que les parties du chemin nécessitant une conversion en horodatage doivent être entourées de `<>`, sinon l'extension ne les convertira pas.
@ru *   `<yyyyMMdd_HHmmss>` относится к формату временной метки для сохранения файлов. Здесь мы строго указываем, что части пути, требующие преобразования в временные метки, должны быть заключены в `<>`, иначе расширение не будет их преобразовывать.

@en     *   For other timestamp formatting syntax, please refer to: https://learn.microsoft.com/dotnet/api/system.datetime.tostring
@zh   - 其他时间码写法详见：https://learn.microsoft.com/dotnet/api/system.datetime.tostring
@zh-hant   - 其他時間碼寫法詳見：https://learn.microsoft.com/dotnet/api/system.datetime.tostring
@ja     *   その他のタイムスタンプ書式設定の構文については、以下を参照してください：https://learn.microsoft.com/dotnet/api/system.datetime.tostring
@ko     *   다른 타임스탬프 형식화 구문은 다음을 참조하세요: https://learn.microsoft.com/dotnet/api/system.datetime.tostring
@de     *   Für andere Zeitstempel-Formatierungssyntax siehe: https://learn.microsoft.com/dotnet/api/system.datetime.tostring
@fr     *   Pour d'autres syntaxes de formatage d'horodatage, veuillez consulter : https://learn.microsoft.com/dotnet/api/system.datetime.tostring
@ru     *   Для другого синтаксиса форматирования временных меток обратитесь к: https://learn.microsoft.com/dotnet/api/system.datetime.tostring

@en <br>
@zh <br>
@zh-hant <br>
@ja <br>
@ko <br>
@de <br>
@fr <br>
@ru <br>

@en ### REAPER Data
@zh ### REAPER 数据
@zh-hant ### REAPER 資料
@ja ### REAPER データ
@ko ### REAPER 데이터
@de ### REAPER-Daten
@fr ### Données REAPER
@ru ### Данные REAPER

@en <ImageOnDemand alt="Reaper Data" src="ultrapaste/img006_ultrapaste_reaper_data.png" />
@zh <ImageOnDemand alt="Reaper 数据" src="ultrapaste/img006_ultrapaste_reaper_data.png" />
@zh-hant <ImageOnDemand alt="Reaper 資料" src="ultrapaste/img006_ultrapaste_reaper_data.png" />
@ja <ImageOnDemand alt="Reaper データ" src="ultrapaste/img006_ultrapaste_reaper_data.png" />
@ko <ImageOnDemand alt="Reaper 데이터" src="ultrapaste/img006_ultrapaste_reaper_data.png" />
@de <ImageOnDemand alt="Reaper-Daten" src="ultrapaste/img006_ultrapaste_reaper_data.png" />
@fr <ImageOnDemand alt="Données Reaper" src="ultrapaste/img006_ultrapaste_reaper_data.png" />
@ru <ImageOnDemand button-text="Загрузить изображение" alt="Данные Reaper" src="img/ultrapaste/img006_ultrapaste_reaper_data.png" />

@en This is one of the key features of this extension: complete implementation of REAPER clipboard data import and export. You can select various items or tracks in REAPER, `Ctrl + C`, then directly `Ctrl + Shift + V` paste them into the VEGAS timeline.
@zh 这个是本扩展的重点功能之一：完全实现了 REAPER 剪贴板数据的导入和导出。你可以在 REAPER 中选择各种物件或者轨道，`Ctrl + C` 以后，直接 `Ctrl + Shift + V` 粘贴到 VEGAS 时间轴里。
@zh-hant 這個是本擴充功能的重點功能之一：完全實現了 REAPER 剪貼簿資料的匯入和匯出。你可以在 REAPER 中選擇各種物件或者軌道，`Ctrl + C` 以後，直接 `Ctrl + Shift + V` 貼上到 VEGAS 時間軸裡。
@ja これはこの拡張機能の重要な機能の1つです：REAPER クリップボードデータのインポートとエクスポートを完全に実装しました。REAPER でさまざまなアイテムやトラックを選択し、`Ctrl + C` を押した後、直接 `Ctrl + Shift + V` で VEGAS タイムラインに貼り付けることができます。
@ko 이것은 이 확장의 주요 기능 중 하나입니다: REAPER 클립보드 데이터 가져오기 및 내보내기를 완전히 구현했습니다. REAPER에서 다양한 항목이나 트랙을 선택하고 `Ctrl + C`를 누른 다음, 바로 `Ctrl + Shift + V`로 VEGAS 타임라인에 붙여넣을 수 있습니다.
@de Dies ist eine der Schlüsselfunktionen dieser Erweiterung: Vollständige Implementierung des Imports und Exports von REAPER-Zwischenablagedaten. Sie können verschiedene Elemente oder Spuren in REAPER auswählen, `Strg + C` drücken und dann direkt mit `Strg + Umschalt + V` in die VEGAS-Zeitachse einfügen.
@fr C'est l'une des fonctionnalités clés de cette extension : une implémentation complète de l'importation et de l'exportation des données du presse-papiers REAPER. Vous pouvez sélectionner divers éléments ou pistes dans REAPER, faire `Ctrl + C`, puis directement `Ctrl + Maj + V` pour les coller dans la timeline VEGAS.
@ru Это одна из ключевых функций этого расширения: полная реализация импорта и экспорта данных буфера обмена REAPER. Вы можете выбрать различные элементы или дорожки в REAPER, нажать `Ctrl + C`, а затем сразу `Ctrl + Shift + V` вставить их на временную шкалу VEGAS.

@en The extension adapts various parameters between the two software:
@zh 扩展对两个软件的各种参数都进行了适配：
@zh-hant 擴充功能對兩個軟體的各種參數都進行了適應：
@ja 拡張機能は2つのソフトウェア間のさまざまなパラメータを適応させます：
@ko 확장은 두 소프트웨어 간의 다양한 매개변수를 적응시킵니다:
@de Die Erweiterung passt verschiedene Parameter zwischen den beiden Softwareprogrammen an:
@fr L'extension adapte divers paramètres entre les deux logiciels :
@ru Расширение адаптирует различные параметры между двумя программами:

@en *   `REAPER Item Properties` → `VEGAS Event Properties`
@zh - `REAPER 物件属性 -> VEGAS 事件属性`
@zh-hant - `REAPER 物件屬性 -> VEGAS 事件屬性`
@ja *   `REAPER アイテムプロパティ` → `VEGAS イベントプロパティ`
@ko *   `REAPER 항목 속성` → `VEGAS 이벤트 속성`
@de *   `REAPER Elementeigenschaften` → `VEGAS Ereigniseigenschaften`
@fr *   `Propriétés de l'élément REAPER` → `Propriétés de l'événement VEGAS`
@ru *   `Свойства элемента REAPER` → `Свойства события VEGAS`

@en *   `REAPER Item/Track Envelopes` → `VEGAS Track Envelopes`
@zh - `REAPER 物件/轨道包络 -> VEGAS 轨道包络`
@zh-hant - `REAPER 物件/軌道包絡 -> VEGAS 軌道包絡`
@ja *   `REAPER アイテム/トラックエンベロープ` → `VEGAS トラックエンベロープ`
@ko *   `REAPER 항목/트랙 엔벨로프` → `VEGAS 트랙 엔벨로프`
@de *   `REAPER Element-/Spuren-Hüllkurven` → `VEGAS Spuren-Hüllkurven`
@fr *   `Enveloppes d'élément/piste REAPER` → `Enveloppes de piste VEGAS`
@ru *   `Огибающие элемента/дорожки REAPER` → `Огибающие дорожки VEGAS`

@en *   `REAPER Item Stretch Markers` → `VEGAS Audio Event Stretch / Video Event Speed Envelopes`
@zh - `REAPER 物件拉伸标记 -> VEGAS 音频事件拉伸/视频事件速度包络`
@zh-hant - `REAPER 物件拉伸標記 -> VEGAS 音訊事件拉伸/影片事件速度包絡`
@ja *   `REAPER アイテムストレッチマーカー` → `VEGAS オーディオイベントストレッチ / ビデオイベント速度エンベロープ`
@ko *   `REAPER 항목 스트레치 마커` → `VEGAS 오디오 이벤트 스트레치 / 비디오 이벤트 속도 엔벨로프`
@de *   `REAPER Element-Stretch-Marker` → `VEGAS Audio-Ereignis-Stretch / Video-Ereignis-Geschwindigkeits-Hüllkurven`
@fr *   `Marqueurs d'étirement d'élément REAPER` → `Étirement d'événement audio VEGAS / Enveloppes de vitesse d'événement vidéo`
@ru *   `Маркеры растяжения элемента REAPER` → `Растяжение аудиособытия VEGAS / Огибающие скорости видеособытия`

@en *   `REAPER Track Properties` → `VEGAS Track Properties`
@zh - `REAPER 轨道属性 -> VEGAS 轨道属性`
@zh-hant - `REAPER 軌道屬性 -> VEGAS 軌道屬性`
@ja *   `REAPER トラックプロパティ` → `VEGAS トラックプロパティ`
@ko *   `REAPER 트랙 속성` → `VEGAS 트랙 속성`
@de *   `REAPER Spureneigenschaften` → `VEGAS Spureneigenschaften`
@fr *   `Propriétés de piste REAPER` → `Propriétés de piste VEGAS`
@ru *   `Свойства дорожки REAPER` → `Свойства дорожки VEGAS`

@en *   ...
@zh - ...
@zh-hant - ...
@ja *   ...
@ko *   ...
@de *   ...
@fr *   ...
@ru *   ...

@en In short, everything adaptable has been adapted. You can also select a REAPER project file, `Ctrl + C`, and import it as multiple tracks.
@zh 总之，能适配的基本都适配了个遍。你也可以选择一个 REAPER 工程文件后 `Ctrl + C`，作为多条轨道导入进来。
@zh-hant 總之，能適應的基本都適應了個遍。你也可以選擇一個 REAPER 工程檔案後 `Ctrl + C`，作為多條軌道匯入進來。
@ja 要するに、適応可能なものはすべて適応されています。REAPER プロジェクトファイルを選択し、`Ctrl + C` を押して、複数のトラックとしてインポートすることもできます。
@ko 요약하면, 적응 가능한 것은 거의 모두 적응시켰습니다. REAPER 프로젝트 파일을 선택하고 `Ctrl + C`를 눌러 여러 트랙으로 가져올 수도 있습니다.
@de Kurz gesagt, alles Anpassbare wurde angepasst. Sie können auch eine REAPER-Projektdatei auswählen, `Strg + C` drücken und sie als mehrere Spuren importieren.
@fr En bref, tout ce qui peut être adapté l'a été. Vous pouvez également sélectionner un fichier projet REAPER, faire `Ctrl + C`, et l'importer comme plusieurs pistes.
@ru Короче говоря, все, что можно адаптировать, было адаптировано. Вы также можете выбрать файл проекта REAPER, нажать `Ctrl + C` и импортировать его как несколько дорожек.

@en You can also export VEGAS events or tracks as REAPER clipboard data, then `Ctrl + V` in REAPER, achieving full interoperability between the software.
@zh 你还可以将 VEGAS 事件或轨道导出为 REAPER 剪贴板数据，然后在 REAPER 里 `Ctrl + V`，实现软件间的完全互通。
@zh-hant 你還可以將 VEGAS 事件或軌道匯出為 REAPER 剪貼簿資料，然後在 REAPER 裡 `Ctrl + V`，實現軟體間的完全互通。
@ja VEGAS イベントやトラックを REAPER クリップボードデータとしてエクスポートし、REAPER で `Ctrl + V` を押して、ソフトウェア間の完全な相互運用性を実現することもできます。
@ko VEGAS 이벤트나 트랙을 REAPER 클립보드 데이터로 내보낸 다음, REAPER에서 `Ctrl + V`를 눌러 소프트웨어 간 완전한 상호 운용성을 달성할 수도 있습니다.
@de Sie können auch VEGAS-Ereignisse oder Spuren als REAPER-Zwischenablagedaten exportieren und dann in REAPER `Strg + V` drücken, um vollständige Interoperabilität zwischen den Softwareprogrammen zu erreichen.
@fr Vous pouvez également exporter des événements ou des pistes VEGAS vers des données du presse-papiers REAPER, puis faire `Ctrl + V` dans REAPER, réalisant ainsi une interopérabilité totale entre les logiciels.
@ru Вы также можете экспортировать события или дорожки VEGAS как данные буфера обмена REAPER, а затем нажать `Ctrl + V` в REAPER, достигнув полной совместимости между программами.

@en <ImageOnDemand alt="Reaper Example 1" src="ultrapaste/img007_ultrapaste_reaper_1.png" />
@zh <ImageOnDemand alt="Reaper 图例 1" src="ultrapaste/img007_ultrapaste_reaper_1.png" />
@zh-hant <ImageOnDemand alt="Reaper 圖例 1" src="ultrapaste/img007_ultrapaste_reaper_1.png" />
@ja <ImageOnDemand alt="Reaper 例 1" src="ultrapaste/img007_ultrapaste_reaper_1.png" />
@ko <ImageOnDemand alt="Reaper 예제 1" src="ultrapaste/img007_ultrapaste_reaper_1.png" />
@de <ImageOnDemand alt="Reaper-Beispiel 1" src="ultrapaste/img007_ultrapaste_reaper_1.png" />
@fr <ImageOnDemand alt="Exemple Reaper 1" src="ultrapaste/img007_ultrapaste_reaper_1.png" />
@ru <ImageOnDemand button-text="Загрузить изображение" alt="Пример Reaper 1" src="img/ultrapaste/img007_ultrapaste_reaper_1.png" />

@en <ImageOnDemand alt="Reaper Example 2" src="ultrapaste/img008_ultrapaste_reaper_2.png" />
@zh <ImageOnDemand alt="Reaper 图例 2" src="ultrapaste/img008_ultrapaste_reaper_2.png" />
@zh-hant <ImageOnDemand alt="Reaper 圖例 2" src="ultrapaste/img008_ultrapaste_reaper_2.png" />
@ja <ImageOnDemand alt="Reaper 例 2" src="ultrapaste/img008_ultrapaste_reaper_2.png" />
@ko <ImageOnDemand alt="Reaper 예제 2" src="ultrapaste/img008_ultrapaste_reaper_2.png" />
@de <ImageOnDemand alt="Reaper-Beispiel 2" src="ultrapaste/img008_ultrapaste_reaper_2.png" />
@fr <ImageOnDemand alt="Exemple Reaper 2" src="ultrapaste/img008_ultrapaste_reaper_2.png" />
@ru <ImageOnDemand button-text="Загрузить изображение" alt="Пример Reaper 2" src="img/ultrapaste/img008_ultrapaste_reaper_2.png" />

@en Note: Due to scripting API limitations, when the VEGAS version is older than the final version of 15, `VP15B416`, all parameters related to audio event pitch cannot be transferred into VEGAS, nor can they be output to REAPER clipboard data.
@zh 注意，由于脚本 API 限制，当 VEGAS 版本低于 15 的最终版 `VP15B416` 时，与音频事件的音高有关的所有参数无法被转移进入 VEGAS 里，也无法输出到 REAPER 剪贴板数据。
@zh-hant 注意，由於腳本 API 限制，當 VEGAS 版本低於 15 的最終版 `VP15B416` 時，與音訊事件的音高有關的所有參數無法被轉移進入 VEGAS 裡，也無法輸出到 REAPER 剪貼簿資料。
@ja 注意：スクリプティング API の制限により、VEGAS のバージョンが 15 の最終版 `VP15B416` より古い場合、オーディオイベントのピッチに関連するすべてのパラメータは VEGAS に転送できず、REAPER クリップボードデータに出力することもできません。
@ko 참고: 스크립팅 API 제한으로 인해, VEGAS 버전이 15의 최종 버전 `VP15B416`보다 낮은 경우, 오디오 이벤트 피치와 관련된 모든 매개변수는 VEGAS로 전송될 수 없으며, REAPER 클립보드 데이터로도 출력할 수 없습니다.
@de Hinweis: Aufgrund von Skript-API-Beschränkungen können bei VEGAS-Versionen älter als die Endversion 15, `VP15B416`, alle parameterbezogenen Audio-Ereignis-Tonhöhen nicht in VEGAS übertragen werden und können auch nicht in REAPER-Zwischenablagedaten ausgegeben werden.
@fr Note : En raison des limitations de l'API de script, lorsque la version de VEGAS est antérieure à la version finale 15, `VP15B416`, tous les paramètres liés à la hauteur des événements audio ne peuvent pas être transférés dans VEGAS, ni être exportés vers les données du presse-papiers REAPER.
@ru Примечание: Из-за ограничений API скриптов, когда версия VEGAS старше финальной версии 15, `VP15B416`, все параметры, связанные с высотой тона аудиособытия, не могут быть перенесены в VEGAS, а также не могут быть выведены в данные буфера обмена REAPER.

@en `Close Start Gap`: REAPER clipboard data includes the absolute position of the original items within the REAPER project. When "Close Start Gap" is off, paste start position = REAPER project start position. When "Close Start Gap" is on, paste start position = first item's start position.
@zh `关闭开头间隙`：REAPER 剪贴板数据会带上原始物件在 REAPER 工程里的绝对位置。未关闭开头间隙时，粘贴起始位置 = REAPER 工程开头位置。关闭开头间隙后，粘贴起始位置 = 第一个物件的开头位置。
@zh-hant `關閉開頭間隙`：REAPER 剪貼簿資料會帶上原始物件在 REAPER 工程裡的絕對位置。未關閉開頭間隙時，貼上起始位置 = REAPER 工程開頭位置。關閉開頭間隙後，貼上起始位置 = 第一個物件的開頭位置。
@ja `先頭の間隔を詰める`：REAPER クリップボードデータには、元のアイテムの REAPER プロジェクト内での絶対位置が含まれます。「先頭の間隔を詰める」がオフの場合、貼り付け開始位置 = REAPER プロジェクト開始位置。「先頭の間隔を詰める」がオンの場合、貼り付け開始位置 = 最初のアイテムの開始位置。
@ko `시작 간격 닫기`: REAPER 클립보드 데이터에는 REAPER 프로젝트 내 원본 항목의 절대 위치가 포함됩니다. "시작 간격 닫기"가 꺼져 있으면, 붙여넣기 시작 위치 = REAPER 프로젝트 시작 위치입니다. "시작 간격 닫기"가 켜져 있으면, 붙여넣기 시작 위치 = 첫 번째 항목의 시작 위치입니다.
@de `Anfängliche Lücke schließen`: REAPER-Zwischenablagedaten enthalten die absolute Position der ursprünglichen Elemente innerhalb des REAPER-Projekts. Wenn "Anfängliche Lücke schließen" deaktiviert ist, ist die Startposition beim Einfügen = REAPER-Projektstartposition. Wenn "Anfängliche Lücke schließen" aktiviert ist, ist die Startposition beim Einfügen = Startposition des ersten Elements.
@fr `Fermer l'espace de début` : Les données du presse-papiers REAPER incluent la position absolue des éléments d'origine dans le projet REAPER. Lorsque "Fermer l'espace de début" est désactivé, la position de départ du collage = position de début du projet REAPER. Lorsque "Fermer l'espace de début" est activé, la position de départ du collage = position de départ du premier élément.
@ru `Закрыть начальный промежуток`: Данные буфера обмена REAPER включают абсолютную позицию исходных элементов в проекте REAPER. Когда "Закрыть начальный промежуток" выключено, начальная позиция вставки = начальная позиция проекта REAPER. Когда "Закрыть начальный промежуток" включено, начальная позиция вставки = начальная позиция первого элемента.

@en `Add Video Stream`: Adds a video stream to imported REAPER items.
@zh `添加视频流`：为导入的 REAPER 物件添加视频流。
@zh-hant `新增影片流`：為匯入的 REAPER 物件新增影片流。
@ja `ビデオストリームを追加`：インポートされた REAPER アイテムにビデオストリームを追加します。
@ko `비디오 스트림 추가`: 가져온 REAPER 항목에 비디오 스트림을 추가합니다.
@de `Videostream hinzufügen`: Fügt importierten REAPER-Elementen einen Videostream hinzu.
@fr `Ajouter un flux vidéo` : Ajoute un flux vidéo aux éléments REAPER importés.
@ru `Добавить видеопоток`: Добавляет видеопоток к импортированным элементам REAPER.

@en <br>
@zh <br>
@zh-hant <br>
@ja <br>
@ko <br>
@de <br>
@fr <br>
@ru <br>

@en ### PSD Images
@zh ### PSD 图像
@zh-hant ### PSD 圖像
@ja ### PSD 画像
@ko ### PSD 이미지
@de ### PSD-Bilder
@fr ### Images PSD
@ru ### Изображения PSD

@en <ImageOnDemand alt="PSD Images" src="ultrapaste/img009_ultrapaste_psd.png" />
@zh <ImageOnDemand alt="PSD 图像" src="ultrapaste/img009_ultrapaste_psd.png" />
@zh-hant <ImageOnDemand alt="PSD 圖像" src="ultrapaste/img009_ultrapaste_psd.png" />
@ja <ImageOnDemand alt="PSD 画像" src="ultrapaste/img009_ultrapaste_psd.png" />
@ko <ImageOnDemand alt="PSD 이미지" src="ultrapaste/img009_ultrapaste_psd.png" />
@de <ImageOnDemand alt="PSD-Bilder" src="ultrapaste/img009_ultrapaste_psd.png" />
@fr <ImageOnDemand alt="Images PSD" src="ultrapaste/img009_ultrapaste_psd.png" />
@ru <ImageOnDemand button-text="Загрузить изображение" alt="Изображения PSD" src="img/ultrapaste/img009_ultrapaste_psd.png" />

@en `Expand All Layers`: When importing a multi-layer PSD image, automatically expand it into separate VEGAS tracks.
@zh `展开所有图层`：当导入的 PSD 图像含有多个图层时，自动在 VEGAS 轨道中展开。
@zh-hant `展開所有圖層`：當匯入的 PSD 圖像含有多個圖層時，自動在 VEGAS 軌道中展開。
@ja `すべてのレイヤーを展開`：マルチレイヤーの PSD 画像をインポートするとき、自動的に別々の VEGAS トラックに展開します。
@ko `모든 레이어 확장`: 여러 레이어를 가진 PSD 이미지를 가져올 때, VEGAS 트랙에서 자동으로 별도로 확장합니다.
@de `Alle Ebenen entfalten`: Beim Import eines mehrschichtigen PSD-Bildes werden automatisch separate VEGAS-Spuren erstellt.
@fr `Développer tous les calques` : Lors de l'importation d'une image PSD multicouche, la développe automatiquement en pistes VEGAS séparées.
@ru `Развернуть все слои`: При импорте многослойного изображения PSD автоматически развернуть его на отдельные дорожки VEGAS.

@en `Add Other Layers`: For a selected single PSD layer, supplement with all other layers above and below it.
@zh `添加其他图层`：为选中的单个 PSD 图层的上方和下方补充其他所有图层。
@zh-hant `新增其他圖層`：為選中的單個 PSD 圖層的上方和下方補充其他所有圖層。
@ja `他のレイヤーを追加`：選択された単一の PSD レイヤーに対して、その上と下にある他のすべてのレイヤーを補完します。
@ko `다른 레이어 추가`: 선택된 단일 PSD 레이어에 대해, 그 위와 아래의 다른 모든 레이어를 보충합니다.
@de `Andere Ebenen hinzufügen`: Ergänzt für eine ausgewählte einzelne PSD-Ebene alle anderen Ebenen darüber und darunter.
@fr `Ajouter d'autres calques` : Pour un calque PSD unique sélectionné, ajoute tous les autres calques au-dessus et en dessous de celui-ci.
@ru `Добавить другие слои`: Для выбранного одиночного слоя PSD дополнить всеми другими слоями выше и ниже него.

@en <br>
@zh <br>
@zh-hant <br>
@ja <br>
@ko <br>
@de <br>
@fr <br>
@ru <br>

@en ### Subtitles
@zh ### 字幕
@zh-hant ### 字幕
@ja ### 字幕
@ko ### 자막
@de ### Untertitel
@fr ### Sous-titres
@ru ### Субтитры

@en <ImageOnDemand alt="Subtitles" src="ultrapaste/img010_ultrapaste_subtitles.png" />
@zh <ImageOnDemand alt="字幕" src="ultrapaste/img010_ultrapaste_subtitles.png" />
@zh-hant <ImageOnDemand alt="字幕" src="ultrapaste/img010_ultrapaste_subtitles.png" />
@ja <ImageOnDemand alt="字幕" src="ultrapaste/img010_ultrapaste_subtitles.png" />
@ko <ImageOnDemand alt="자막" src="ultrapaste/img010_ultrapaste_subtitles.png" />
@de <ImageOnDemand alt="Untertitel" src="ultrapaste/img010_ultrapaste_subtitles.png" />
@fr <ImageOnDemand alt="Sous-titres" src="ultrapaste/img010_ultrapaste_subtitles.png" />
@ru <ImageOnDemand button-text="Загрузить изображение" alt="Субтитры" src="img/ultrapaste/img010_ultrapaste_subtitles.png" />

@en Subtitles are another key feature of this extension. You can copy any `Plain Text` / `TXT` file / `SRT` subtitle file / `LRC` subtitle file and paste it into the VEGAS timeline.
@zh 字幕也是本扩展的重点功能之一。你可以复制任意 `纯文本` / `TXT` 文件 / `SRT` 字幕文件 / `LRC` 字幕文件，粘贴到 VEGAS 时间轴里。
@zh-hant 字幕也是本擴充功能的重點功能之一。你可以複製任意 `純文字` / `TXT` 檔案 / `SRT` 字幕檔案 / `LRC` 字幕檔案，貼上到 VEGAS 時間軸裡。
@ja 字幕はこの拡張機能のもう一つの重要な機能です。任意の `プレーンテキスト` / `TXT` ファイル / `SRT` 字幕ファイル / `LRC` 字幕ファイルをコピーして VEGAS タイムラインに貼り付けることができます。
@ko 자막은 이 확장의 또 다른 주요 기능입니다. 모든 `일반 텍스트` / `TXT` 파일 / `SRT` 자막 파일 / `LRC` 자막 파일을 복사하여 VEGAS 타임라인에 붙여넣을 수 있습니다.
@de Untertitel sind eine weitere Schlüsselfunktion dieser Erweiterung. Sie können beliebige `Nur-Text`- / `TXT`-Dateien / `SRT`-Untertiteldateien / `LRC`-Untertiteldateien kopieren und in die VEGAS-Zeitachse einfügen.
@fr Les sous-titres sont une autre fonctionnalité clé de cette extension. Vous pouvez copier n'importe quel fichier `Texte brut` / `TXT` / `SRT` / `LRC` et le coller dans la timeline VEGAS.
@ru Субтитры — еще одна ключевая функция этого расширения. Вы можете скопировать любой `Простой текст` / `TXT` файл / `SRT` файл субтитров / `LRC` файл субтитров и вставить его на временную шкалу VEGAS.

@en `Generator Type`: The type of subtitle generator.
@zh `生成器类型`：字幕的生成器类型。
@zh-hant `產生器類型`：字幕的產生器類型。
@ja `ジェネレータータイプ`：字幕ジェネレーターのタイプ。
@ko `생성기 유형`: 자막 생성기의 유형입니다.
@de `Generatortyp`: Der Typ des Untertitelgenerators.
@fr `Type de générateur` : Le type de générateur de sous-titres.
@ru `Тип генератора`: Тип генератора субтитров.

@en `Preset Name`: The preset name of the subtitle generator you want to use. You need to adjust and save the preset within the corresponding FX in advance.
@zh `预设名称`：你要使用的字幕生成器的预设名称，需要自己提前在对应 FX 内调整并保存预设。
@zh-hant `預設名稱`：你要使用的字幕產生器的預設名稱，需要自己提前在對應 FX 內調整並儲存預設。
@ja `プリセット名`：使用したい字幕ジェネレーターのプリセット名。対応する FX 内であらかじめプリセットを調整して保存しておく必要があります。
@ko `프리셋 이름`: 사용하려는 자막 생성기의 프리셋 이름입니다. 해당 FX 내에서 미리 프리셋을 조정하고 저장해야 합니다.
@de `Voreinstellungsname`: Der Name der Voreinstellung des Untertitelgenerators, den Sie verwenden möchten. Sie müssen die Voreinstellung vorab im entsprechenden FX anpassen und speichern.
@fr `Nom du préréglage` : Le nom du préréglage du générateur de sous-titres que vous souhaitez utiliser. Vous devez préalablement ajuster et enregistrer le préréglage dans le FX correspondant.
@ru `Имя предустановки`: Имя предустановки генератора субтитров, которую вы хотите использовать. Вам нужно заранее настроить и сохранить предустановку в соответствующем FX.

@en For the DXT-type plugins `ProType Titler` and `(Legacy) Text`, only user-saved presets are recognized; VEGAS's built-in presets are not supported. <small>(If you want to use them, just rename and resave them.)</small>
@zh 对于 `PTT 字幕` 和 `(自带) 文字` 这两个 DXT 类插件，只能识别到用户自己保存的预设，不支持 VEGAS 自带的那些预设。<small>（想用的话，自己改个名重新保存一遍就行。）</small>
@zh-hant 對於 `PTT 字幕` 和 `(內建) 文字` 這兩個 DXT 類外掛，只能識別到使用者自己儲存的預設，不支援 VEGAS 內建的那些預設。<small>（想用的話，自己改個名重新儲存一遍就行。）</small>
@ja DXT タイプのプラグインである `ProType Titler` と `(Legacy) Text` については、ユーザーが保存したプリセットのみ認識され、VEGAS に組み込まれているプリセットはサポートされていません。<small>（使用したい場合は、名前を変更して再保存するだけです。）</small>
@ko `ProType Titler` 및 `(레거시) 텍스트`와 같은 DXT 유형 플러그인의 경우, 사용자가 저장한 프리셋만 인식되며 VEGAS의 내장 프리셋은 지원되지 않습니다. <small>(사용하려면 이름을 바꾸고 다시 저장하면 됩니다.)</small>
@de Für die DXT-Typ-Plugins `ProType Titler` und `(Legacy) Text` werden nur benutzerdefinierte Voreinstellungen erkannt; die mit VEGAS gelieferten Voreinstellungen werden nicht unterstützt. <small>(Wenn Sie sie verwenden möchten, benennen Sie sie einfach um und speichern sie erneut.)</small>
@fr Pour les plugins de type DXT `ProType Titler` et `(Legacy) Text`, seuls les préréglages enregistrés par l'utilisateur sont reconnus ; les préréglages intégrés à VEGAS ne sont pas pris en charge. <small>(Si vous voulez les utiliser, renommez-les et réenregistrez-les simplement.)</small>
@ru Для плагинов DXT-типа `ProType Titler` и `(Legacy) Text` распознаются только предустановки, сохраненные пользователем; встроенные предустановки VEGAS не поддерживаются. <small>(Если вы хотите их использовать, просто переименуйте и сохраните заново.)</small>

@en `Region`: Import subtitles as VEGAS regions.
@zh `区域`：将字幕作为 VEGAS 区域导入。
@zh-hant `區域`：將字幕作為 VEGAS 區域匯入。
@ja `リージョン`：字幕を VEGAS リージョンとしてインポートします。
@ko `영역`: 자막을 VEGAS 영역으로 가져옵니다.
@de `Bereich`: Importiert Untertitel als VEGAS-Bereiche.
@fr `Région` : Importe les sous-titres sous forme de régions VEGAS.
@ru `Область`: Импортировать субтитры как области VEGAS.

@en `Max Characters`: Automatically wrap to a new line when the number of characters in one line exceeds the specified amount. 0 means no character limit.
@zh `最大字符数`：当一行内超过指定的字符数量时，自动换行。0 表示不对字符数进行限制。
@zh-hant `最大字元數`：當一行內超過指定的字元數量時，自動換行。0 表示不對字元數進行限制。
@ja `最大文字数`：一行の文字数が指定された数を超えた場合、自動的に改行します。0 は文字数の制限がないことを意味します。
@ko `최대 문자 수`: 한 줄의 문자 수가 지정된 양을 초과하면 자동으로 새 줄로 줄 바꿈합니다. 0은 문자 수 제한 없음을 의미합니다.
@de `Maximale Zeichen`: Automatischer Zeilenumbruch, wenn die Anzahl der Zeichen in einer Zeile den angegebenen Wert überschreitet. 0 bedeutet keine Zeichenbegrenzung.
@fr `Nombre maximum de caractères` : Retourne automatiquement à la ligne lorsque le nombre de caractères sur une ligne dépasse la valeur spécifiée. 0 signifie aucune limite de caractères.
@ru `Максимум символов`: Автоматически переносить на новую строку, когда количество символов в одной строке превышает указанное. 0 означает отсутствие ограничения на количество символов.

@en `Ignore Word`: When unchecked, the extension optimizes for word separation by spaces, meaning it won't forcefully split a whole word and will try to wrap at spaces. Of course, for languages like Chinese that don't typically use spaces, you can check this box directly, and it will split strictly according to character count.
@zh `忽略单词`：取消勾选时，扩展会对单词的空格分隔做优化，也就是不会强行拆分一整个单词，会尝试在空格处换行。当然，对于中文这种基本不使用空格的语言文字，可以直接勾选上，会严格按照字符数量来分割。
@zh-hant `忽略單詞`：取消勾選時，擴充功能會對單詞的空格分隔做最佳化，也就是不會強行拆分一整個單詞，會嘗試在空格處換行。當然，對於中文這種基本不使用空格的語言文字，可以直接勾選上，會嚴格按照字元數量來分割。
@ja `単語を無視`：チェックを外すと、拡張機能はスペースによる単語の区切りを最適化します。つまり、単語全体を強制的に分割せず、スペースの位置で改行を試みます。もちろん、スペースを通常使用しない中国語などの言語の場合は、このボックスを直接チェックすると、文字数に従って厳密に分割されます。
@ko `단어 무시`: 선택 해제 시, 확장은 단어의 공백 분리에 대해 최적화합니다. 즉, 전체 단어를 강제로 분리하지 않고 공백에서 줄 바꿈을 시도합니다. 물론, 중국어와 같이 일반적으로 공백을 사용하지 않는 언어의 경우, 이 상자를 직접 선택하면 문자 수에 따라 엄격하게 분할됩니다.
@de `Wort ignorieren`: Wenn nicht aktiviert, optimiert die Erweiterung die Worttrennung durch Leerzeichen, d.h., sie wird ein ganzes Wort nicht gewaltsam trennen und versuchen, bei Leerzeichen umzubrechen. Für Sprachen wie Chinesisch, die normalerweise keine Leerzeichen verwenden, können Sie dieses Kästchen direkt aktivieren, und die Trennung erfolgt streng nach Zeichenanzahl.
@fr `Ignorer les mots` : Lorsque décoché, l'extension optimise pour la séparation des mots par des espaces, ce qui signifie qu'elle ne forcera pas la séparation d'un mot entier et essaiera de revenir à la ligne aux espaces. Bien sûr, pour des langues comme le chinois qui n'utilisent généralement pas d'espaces, vous pouvez directement cocher cette case, et le texte sera divisé strictement selon le nombre de caractères.
@ru `Игнорировать слова`: Когда снято, расширение оптимизирует разделение слов по пробелам, то есть не будет принудительно разбивать целое слово и будет пытаться переносить по пробелам. Конечно, для таких языков, как китайский, где пробелы обычно не используются, вы можете просто установить этот флажок, и тогда разделение будет строго по количеству символов.

@en `Max Lines`: When the number of lines in a subtitle block exceeds a certain amount, automatically split it into new subtitle blocks. The split length is averaged from the original block.
@zh `最大行数`：当一个字幕块中的行数超过一定数量时，自动拆分为新的字幕块。拆分长度按照原始字幕块均分。
@zh-hant `最大行數`：當一個字幕區塊中的行數超過一定數量時，自動拆分為新的字幕區塊。拆分長度按照原始字幕區塊均分。
@ja `最大行数`：1つの字幕ブロックの行数が一定数を超えた場合、自動的に新しい字幕ブロックに分割します。分割後の長さは元のブロックから均等に分割されます。
@ko `최대 줄 수`: 자막 블록의 줄 수가 일정량을 초과하면 자동으로 새로운 자막 블록으로 분할합니다. 분할 길이는 원본 블록에서 평균을 냅니다.
@de `Maximale Zeilen`: Wenn die Anzahl der Zeilen in einem Untertitelblock einen bestimmten Wert überschreitet, wird er automatisch in neue Untertitelblöcke aufgeteilt. Die Aufteilungslänge wird aus dem Originalblock gemittelt.
@fr `Nombre maximum de lignes` : Lorsque le nombre de lignes dans un bloc de sous-titre dépasse un certain nombre, il est automatiquement divisé en nouveaux blocs de sous-titres. La longueur de division est moyenne à partir du bloc d'origine.
@ru `Максимум строк`: Когда количество строк в блоке субтитров превышает определенное количество, автоматически разделить его на новые блоки субтитров. Длина разделения усредняется из исходного блока.

@en `Multi-Track`: Split multiple lines within a single subtitle block into multiple tracks. Note: the extension does not apply any positional adjustments to these multiple tracks, so such subtitles will overlap in the preview window and require manual adjustment.
@zh `多轨道`：将单个字幕块中的多行拆成多个轨道。注意，扩展并不会对这些多个轨道进行任何的位移更改，所以这样的字幕在预览窗口中会重叠到一起，需要手动调整。
@zh-hant `多軌道`：將單個字幕區塊中的多行拆成多個軌道。注意，擴充功能並不會對這些多個軌道進行任何的位移更改，所以這樣的字幕在預覽視窗中會重疊到一起，需要手動調整。
@ja `マルチトラック`：1つの字幕ブロック内の複数行を複数のトラックに分割します。注意：拡張機能はこれらの複数のトラックに対して位置調整を一切適用しないため、そのような字幕はプレビューウィンドウで重なって表示され、手動での調整が必要です。
@ko `다중 트랙`: 단일 자막 블록 내의 여러 줄을 여러 트랙으로 분할합니다. 참고: 확장은 이러한 여러 트랙에 대해 어떤 위치 조정도 적용하지 않으므로, 이러한 자막은 미리보기 창에서 겹쳐 보이며 수동 조정이 필요합니다.
@de `Mehrspurig`: Teilt mehrere Zeilen innerhalb eines einzelnen Untertitelblocks in mehrere Spuren auf. Hinweis: Die Erweiterung wendet keine Positionsanpassungen auf diese mehreren Spuren an, sodass solche Untertitel im Vorschaufenster überlappen und manuell angepasst werden müssen.
@fr `Multi-piste` : Divise les lignes multiples d'un seul bloc de sous-titre en plusieurs pistes. Remarque : l'extension n'applique aucun ajustement de position à ces multiples pistes, donc de tels sous-titres se chevaucheront dans la fenêtre de prévisualisation et nécessiteront un ajustement manuel.
@ru `Многодорожечный`: Разделить несколько строк в одном блоке субтитров на несколько дорожек. Примечание: расширение не применяет никаких позиционных корректировок к этим нескольким дорожкам, поэтому такие субтитры будут перекрываться в окне предварительного просмотра и потребуют ручной настройки.

@en `Default Length`: The default length (in seconds) when importing clipboard plain text or TXT files without timestamps.
@zh `默认长度`：当导入剪贴板纯文本或者 TXT 文件这种不带时轴的字幕时的默认长度，单位为秒 (s)。
@zh-hant `預設長度`：當匯入剪貼簿純文字或者 TXT 檔案這種不帶時軸的字幕時的預設長度，單位為秒 (s)。
@ja `デフォルト長`：タイムスタンプのないクリップボードプレーンテキストや TXT ファイルをインポートするときのデフォルトの長さ（秒）。
@ko `기본 길이`: 타임스탬프가 없는 클립보드 일반 텍스트 또는 TXT 파일을 가져올 때의 기본 길이(초 단위)입니다.
@de `Standardlänge`: Die Standardlänge (in Sekunden) beim Import von Nur-Text oder TXT-Dateien ohne Zeitachse aus der Zwischenablage.
@fr `Longueur par défaut` : La longueur par défaut (en secondes) lors de l'importation de texte brut du presse-papiers ou de fichiers TXT sans horodatage.
@ru `Длина по умолчанию`: Длина по умолчанию (в секундах) при импорте простого текста из буфера обмена или TXT-файлов без временных меток.

@en <ImageOnDemand alt="Subtitle Region" src="ultrapaste/img011_ultrapaste_subtitles_region.png" />
@zh <ImageOnDemand alt="字幕区域" src="ultrapaste/img011_ultrapaste_subtitles_region.png" />
@zh-hant <ImageOnDemand alt="字幕區域" src="ultrapaste/img011_ultrapaste_subtitles_region.png" />
@ja <ImageOnDemand alt="字幕リージョン" src="ultrapaste/img011_ultrapaste_subtitles_region.png" />
@ko <ImageOnDemand alt="자막 영역" src="ultrapaste/img011_ultrapaste_subtitles_region.png" />
@de <ImageOnDemand alt="Untertitelbereich" src="ultrapaste/img011_ultrapaste_subtitles_region.png" />
@fr <ImageOnDemand alt="Région de sous-titres" src="ultrapaste/img011_ultrapaste_subtitles_region.png" />
@ru <ImageOnDemand button-text="Загрузить изображение" alt="Область субтитров" src="img/ultrapaste/img011_ultrapaste_subtitles_region.png" />

@en <p align="center">Tip: It's more convenient to define a region on the timeline first, then press the shortcut key.</p>
@zh <p align="center">小技巧：在时间轴上提前划好区域后直接按下快捷键，更方便。</p>
@zh-hant <p align="center">小技巧：在時間軸上提前劃好區域後直接按下快速鍵，更方便。</p>
@ja <p align="center">ヒント：タイムライン上であらかじめリージョンを定義してからショートカットキーを押すと、より便利です。</p>
@ko <p align="center">팁: 타임라인에 먼저 영역을 정의한 다음 단축키를 누르는 것이 더 편리합니다.</p>
@de <p align="center">Tipp: Es ist bequemer, zuerst einen Bereich auf der Zeitachse zu definieren und dann die Tastenkombination zu drücken.</p>
@fr <p align="center">Astuce : Il est plus pratique de définir d'abord une région sur la timeline, puis d'appuyer sur la touche de raccourci.</p>
@ru <p align="center">Подсказка: Удобнее сначала определить область на временной шкале, а затем нажать сочетание клавиш.</p>

@en `Apply Preset to Selected Events`: Apply the current preset to selected Events. Only supports OFX effects, i.e., does not support `ProType Titler` and `(Legacy) Text`.
@zh `预设应用到选中事件`：将当前预设应用到选中事件。只支持 OFX 效果，也就是不支持 `PTT字幕` 和 `(自带) 文字`。
@zh-hant `預設套用到選中事件`：將目前預設套用到選中事件。只支援 OFX 效果，也就是不支援 `PTT字幕` 和 `(內建) 文字`。
@ja `プリセットを選択したイベントに適用`：現在のプリセットを選択したイベントに適用します。OFX エフェクトのみサポートし、`ProType Titler` と `(Legacy) Text` はサポートしません。
@ko `선택된 이벤트에 프리셋 적용`: 현재 프리셋을 선택된 이벤트에 적용합니다. OFX 효과만 지원합니다. 즉, `ProType Titler` 및 `(레거시) 텍스트`는 지원되지 않습니다.
@de `Voreinstellung auf ausgewählte Ereignisse anwenden`: Wendet die aktuelle Voreinstellung auf ausgewählte Ereignisse an. Unterstützt nur OFX-Effekte, d.h. nicht `ProType Titler` und `(Legacy) Text`.
@fr `Appliquer le préréglage aux événements sélectionnés` : Applique le préréglage actuel aux événements sélectionnés. Prend uniquement en charge les effets OFX, c'est-à-dire ne prend pas en charge `ProType Titler` et `(Legacy) Text`.
@ru `Применить предустановку к выбранным событиям`: Применить текущую предустановку к выбранным событиям. Поддерживает только эффекты OFX, то есть не поддерживает `ProType Titler` и `(Legacy) Text`.

@en `T&T to ProType Titler`: Convert selected "Titles & Text" events into `ProType Titler` events with one click.
@zh `T&T 到 PTT 字幕`：将选中的“字幕和文字”事件一键转换为 `PTT 字幕` 事件。
@zh-hant `T&T 到 PTT 字幕`：將選中的「字幕和文字」事件一鍵轉換為 `PTT 字幕` 事件。
@ja `T&T を ProType Titler に変換`：選択した「タイトルとテキスト」イベントをワンクリックで `ProType Titler` イベントに変換します。
@ko `T&T를 ProType Titler로 변환`: 선택된 "타이틀 및 텍스트" 이벤트를 `ProType Titler` 이벤트로 원클릭 변환합니다.
@de `T&T zu ProType Titler`: Konvertiert ausgewählte "Titel & Text"-Ereignisse mit einem Klick in `ProType Titler`-Ereignisse.
@fr `Convertir T&T en ProType Titler` : Convertit en un clic les événements "Titles & Text" sélectionnés en événements `ProType Titler`.
@ru `T&T в ProType Titler`: Одним щелчком преобразовать выбранные события "Титры и текст" в события `ProType Titler`.

@en <br>
@zh <br>
@zh-hant <br>
@ja <br>
@ko <br>
@de <br>
@fr <br>
@ru <br>

@en ### Media
@zh ### 媒体
@zh-hant ### 媒體
@ja ### メディア
@ko ### 미디어
@de ### Medien
@fr ### Média
@ru ### Медиа

@en <ImageOnDemand alt="Media" src="ultrapaste/img012_ultrapaste_media.png" />
@zh <ImageOnDemand alt="媒体" src="ultrapaste/img012_ultrapaste_media.png" />
@zh-hant <ImageOnDemand alt="媒體" src="ultrapaste/img012_ultrapaste_media.png" />
@ja <ImageOnDemand alt="メディア" src="ultrapaste/img012_ultrapaste_media.png" />
@ko <ImageOnDemand alt="미디어" src="ultrapaste/img012_ultrapaste_media.png" />
@de <ImageOnDemand alt="Medien" src="ultrapaste/img012_ultrapaste_media.png" />
@fr <ImageOnDemand alt="Média" src="ultrapaste/img012_ultrapaste_media.png" />
@ru <ImageOnDemand button-text="Загрузить изображение" alt="Медиа" src="img/ultrapaste/img012_ultrapaste_media.png" />

@en `Add Method`: Divided into three types: `Across Time`, `Across Tracks`, `As Takes`. Completely consistent with the three file import methods in VEGAS's native right-click drag import menu.
@zh `添加方式`：一共分为 `跨时间`、`跨轨道`、`作为片段` 三种。与 VEGAS 自带的右键拖动导入选单中的三种文件导入方式完全一致。
@zh-hant `新增方式`：一共分為 `跨時間`、`跨軌道`、`作為片段` 三種。與 VEGAS 內建的右鍵拖動匯入選單中的三種檔案匯入方式完全一致。
@ja `追加方法`：`時間軸に沿って`、`トラックに沿って`、`テイクとして`の3種類に分けられます。VEGAS ネイティブの右クリックドラッグインポートメニューにある3つのファイルインポート方法と完全に一致します。
@ko `추가 방법`: `시간에 걸쳐`, `트랙에 걸쳐`, `테이크로서` 세 가지 유형으로 나뉩니다. VEGAS의 기본 오른쪽 클릭 드래그 가져오기 메뉴에 있는 세 가지 파일 가져오기 방법과 완전히 일치합니다.
@de `Hinzufügemethode`: Unterteilt in drei Typen: `Über Zeit`, `Über Spuren`, `Als Takes`. Vollständig konsistent mit den drei Dateiimportmethoden im nativen Rechtsklick-Zieh-Importmenü von VEGAS.
@fr `Méthode d'ajout` : Divisée en trois types : `Dans le temps`, `Sur les pistes`, `Comme prises`. Complètement cohérent avec les trois méthodes d'importation de fichiers dans le menu d'importation par glisser-déposer clic droit natif de VEGAS.
@ru `Метод добавления`: Разделен на три типа: `По времени`, `По дорожкам`, `Как дубли`. Полностью соответствует трем методам импорта файлов в нативном меню импорта VEGAS при перетаскивании правой кнопкой мыши.

@en `Stream Type`: Divided into `All`, `Video Only`, `Audio Only`.
@zh `流类型`：分为 `所有`、`仅视频`、`仅音频` 三种。
@zh-hant `流類型`：分為 `所有`、`僅影片`、`僅音訊` 三種。
@ja `ストリームタイプ`：`すべて`、`ビデオのみ`、`オーディオのみ`の3種類に分けられます。
@ko `스트림 유형`: `모두`, `비디오만`, `오디오만`으로 나뉩니다.
@de `Stream-Typ`: Unterteilt in `Alle`, `Nur Video`, `Nur Audio`.
@fr `Type de flux` : Divisée en `Tous`, `Vidéo uniquement`, `Audio uniquement`.
@ru `Тип потока`: Разделен на `Все`, `Только видео`, `Только аудио`.

@en `Event Length`: Divided into `Media Length`, `Loop`, `Loop Average`. `Loop Average` is only effective when the Add Method is `Across Time`.
@zh `事件长度`：分为 `媒体自身`、`循环`、`循环取平均` 三种。其中 `循环取平均` 只有添加方式为 `跨时间` 时才有效。
@zh-hant `事件長度`：分為 `媒體自身`、`循環`、`循環取平均` 三種。其中 `循環取平均` 只有新增方式為 `跨時間` 時才有效。
@ja `イベント長`：`メディア長`、`ループ`、`ループ平均`の3種類に分けられます。`ループ平均`は追加方法が`時間軸に沿って`のときのみ有効です。
@ko `이벤트 길이`: `미디어 길이`, `루프`, `루프 평균`으로 나뉩니다. `루프 평균`은 추가 방법이 `시간에 걸쳐`일 때만 유효합니다.
@de `Ereignislänge`: Unterteilt in `Medienlänge`, `Schleife`, `Schleifendurchschnitt`. `Schleifendurchschnitt` ist nur wirksam, wenn die Hinzufügemethode `Über Zeit` ist.
@fr `Longueur de l'événement` : Divisée en `Longueur du média`, `Boucle`, `Moyenne de boucle`. `Moyenne de boucle` n'est effective que lorsque la méthode d'ajout est `Dans le temps`.
@ru `Длина события`: Разделена на `Длина медиа`, `Цикл`, `Среднее по циклу`. `Среднее по циклу` эффективно только тогда, когда метод добавления — `По времени`.

@en `Auto-Import Image Sequences`: When the extension detects the user is importing an image sequence (e.g., all selected image files follow a naming logic like `000000.png - 114514.png`, and the image dimensions are identical), automatically import them as an image sequence.
@zh `自动导入图像序列`：当扩展识别到用户正在导入图像序列时（比如选中的所有图像文件的命名逻辑为 `000000.png - 114514.png`，且图像宽高均相同），自动将其作为图像序列导入。
@zh-hant `自動匯入圖像序列`：當擴充功能識別到使用者正在匯入圖像序列時（比如選中的所有圖像檔案的命名邏輯為 `000000.png - 114514.png`，且圖像寬高均相同），自動將其作為圖像序列匯入。
@ja `画像シーケンスを自動インポート`：拡張機能がユーザーが画像シーケンスをインポートしていると検出した場合（例えば、選択されたすべての画像ファイルの命名ロジックが `000000.png - 114514.png` のようで、画像の寸法が同一である場合）、自動的に画像シーケンスとしてインポートします。
@ko `이미지 시퀀스 자동 가져오기`: 확장이 사용자가 이미지 시퀀스를 가져오는 것으로 감지되면(예: 선택된 모든 이미지 파일의 명명 로직이 `000000.png - 114514.png`이고 이미지 크기가 동일한 경우), 자동으로 이미지 시퀀스로 가져옵니다.
@de `Bildsequenzen automatisch importieren`: Wenn die Erweiterung erkennt, dass der Benutzer eine Bildsequenz importiert (z.B. folgen alle ausgewählten Bilddateien einer Namenslogik wie `000000.png - 114514.png` und die Bildabmessungen sind identisch), importiert sie diese automatisch als Bildsequenz.
@fr `Importation automatique de séquences d'images` : Lorsque l'extension détecte que l'utilisateur importe une séquence d'images (par exemple, tous les fichiers image sélectionnés suivent une logique de nommage comme `000000.png - 114514.png`, et les dimensions des images sont identiques), les importe automatiquement comme une séquence d'images.
@ru `Автоимпорт последовательностей изображений`: Когда расширение обнаруживает, что пользователь импортирует последовательность изображений (например, все выбранные файлы изображений следуют логике именования типа `000000.png - 114514.png`, и размеры изображений идентичны), автоматически импортировать их как последовательность изображений.

@en `Add Missing Stream`: Add missing streams to selected events.
@zh `添加缺失流`：为选中的事件添加缺失流。
@zh-hant `新增缺失流`：為選中的事件新增缺失流。
@ja `不足ストリームを追加`：選択したイベントに不足しているストリームを追加します。
@ko `누락된 스트림 추가`: 선택된 이벤트에 누락된 스트림을 추가합니다.
@de `Fehlenden Stream hinzufügen`: Fügt ausgewählten Ereignissen fehlende Streams hinzu.
@fr `Ajouter le flux manquant` : Ajoute le flux manquant aux événements sélectionnés.
@ru `Добавить отсутствующий поток`: Добавить отсутствующие потоки к выбранным событиям.

@en <br>
@zh <br>
@zh-hant <br>
@ja <br>
@ko <br>
@de <br>
@fr <br>
@ru <br>

@en Media Custom Import:
@zh 媒体自定义导入：
@zh-hant 媒體自訂匯入：
@ja メディアカスタムインポート：
@ko 미디어 사용자 지정 가져오기:
@de Medienbenutzerdefinierter Import:
@fr Importation personnalisée des médias :
@ru Пользовательский импорт медиа:

@en <ImageOnDemand alt="Media Custom Import" src="ultrapaste/img013_ultrapaste_media_custom.png" />
@zh <ImageOnDemand alt="媒体自定义导入" src="ultrapaste/img013_ultrapaste_media_custom.png" />
@zh-hant <ImageOnDemand alt="媒體自訂匯入" src="ultrapaste/img013_ultrapaste_media_custom.png" />
@ja <ImageOnDemand alt="メディアカスタムインポート" src="ultrapaste/img013_ultrapaste_media_custom.png" />
@ko <ImageOnDemand alt="미디어 사용자 지정 가져오기" src="ultrapaste/img013_ultrapaste_media_custom.png" />
@de <ImageOnDemand alt="Medienbenutzerdefinierter Import" src="ultrapaste/img013_ultrapaste_media_custom.png" />
@fr <ImageOnDemand alt="Importation personnalisée des médias" src="ultrapaste/img013_ultrapaste_media_custom.png" />
@ru <ImageOnDemand button-text="Загрузить изображение" alt="Пользовательский импорт медиа" src="img/ultrapaste/img013_ultrapaste_media_custom.png" />

@en <p align="center">Set import rules for specific media file names</p>
@zh <p align="center">为特定的媒体文件名称设置导入规则</p>
@zh-hant <p align="center">為特定的媒體檔案名稱設定匯入規則</p>
@ja <p align="center">特定のメディアファイル名に対してインポートルールを設定</p>
@ko <p align="center">특정 미디어 파일 이름에 대한 가져오기 규칙 설정</p>
@de <p align="center">Importregeln für bestimmte Medien-Dateinamen festlegen</p>
@fr <p align="center">Définir des règles d'importation pour des noms de fichiers multimédias spécifiques</p>
@ru <p align="center">Установить правила импорта для определенных имен медиафайлов</p>

@en Customization allows you to set special import rules for specific media file names. After modifying, click `√` to save to settings. For settings you no longer need, press `×` to delete.
@zh 自定义可以使你为特定的媒体文件名称设置特殊的导入规则。修改完以后点击 `√`，就会保存到设置里。不需要的设置，可以按 `×` 删除。
@zh-hant 自訂可以使你為特定的媒體檔案名稱設定特殊的匯入規則。修改完以後點選 `√`，就會儲存到設定裡。不需要的設定，可以按 `×` 刪除。
@ja カスタマイズにより、特定のメディアファイル名に対して特別なインポートルールを設定できます。変更後、`√`をクリックすると設定に保存されます。不要になった設定は、`×`を押して削除できます。
@ko 사용자 지정을 통해 특정 미디어 파일 이름에 대한 특별한 가져오기 규칙을 설정할 수 있습니다. 수정 후 `√`를 클릭하면 설정에 저장됩니다. 더 이상 필요하지 않은 설정은 `×`를 눌러 삭제할 수 있습니다.
@de Die Anpassung ermöglicht es Ihnen, spezielle Importregeln für bestimmte Medien-Dateinamen festzulegen. Nach der Änderung klicken Sie auf `√`, um die Einstellungen zu speichern. Für Einstellungen, die Sie nicht mehr benötigen, drücken Sie `×`, um sie zu löschen.
@fr La personnalisation vous permet de définir des règles d'importation spéciales pour des noms de fichiers multimédias spécifiques. Après modification, cliquez sur `√` pour enregistrer dans les paramètres. Pour les paramètres dont vous n'avez plus besoin, appuyez sur `×` pour supprimer.
@ru Настройка позволяет вам устанавливать специальные правила импорта для определенных имен медиафайлов. После изменения нажмите `√`, чтобы сохранить в настройках. Для настроек, которые вам больше не нужны, нажмите `×`, чтобы удалить.

@en <small>The UI logic here is a bit rigid; the file rule string is used as the key name. Therefore, to modify a file name, you must first delete it, then re-enter and modify, otherwise the original one won't be removed.</small>
@zh <small>我这里的 UI 逻辑写得有些呆，将文件规则字符串作为了键名，所以要修改文件名称时，必须先删除，再重新输入重新改，否则原先的那个不会被删除。</small>
@zh-hant <small>我這裡的 UI 邏輯寫得有些呆，將檔案規則字串作為鍵名，所以要修改檔案名稱時，必須先刪除，再重新輸入重新改，否則原先的那個不會被刪除。</small>
@ja <small>ここの UI ロジックは少し融通が利きません。ファイルルール文字列がキー名として使用されているため、ファイル名を変更するには、まず削除し、再入力して変更する必要があります。そうしないと、元のものが削除されません。</small>
@ko <small>여기의 UI 로직은 다소 경직되어 있습니다. 파일 규칙 문자열이 키 이름으로 사용됩니다. 따라서 파일 이름을 수정하려면 먼저 삭제한 다음 다시 입력하고 수정해야 합니다. 그렇지 않으면 원본이 제거되지 않습니다.</small>
@de <small>Die UI-Logik hier ist etwas starr; die Dateiregelzeichenfolge wird als Schlüsselname verwendet. Um einen Dateinamen zu ändern, müssen Sie ihn daher zuerst löschen und dann neu eingeben und ändern, da das Original sonst nicht entfernt wird.</small>
@fr <small>La logique de l'interface utilisateur ici est un peu rigide ; la chaîne de règle de fichier est utilisée comme nom de clé. Par conséquent, pour modifier un nom de fichier, vous devez d'abord le supprimer, puis le ressaisir et le modifier, sinon l'original ne sera pas supprimé.</small>
@ru <small>Логика пользовательского интерфейса здесь несколько жесткая; строка правила файла используется в качестве ключевого имени. Поэтому, чтобы изменить имя файла, вы должны сначала удалить его, а затем повторно ввести и изменить, иначе исходный не будет удален.</small>

@en For example, my `1_*(*).wav;1_*(*).flac` here refers to the naming convention of stem files output by [UVR5](https://github.com/Anjok07/ultimatevocalremovergui). We require them to be imported as audio only, using the Across Tracks method. Then, in the folder, multi-select the stem files, `Ctrl + C`, and press the `UltraPaste!` shortcut key to directly import the [UVR5](https://github.com/Anjok07/ultimatevocalremovergui) stems.
@zh 比如我这里的 `1_*(*).wav;1_*(*).flac`，指的是 [UVR5](https://github.com/Anjok07/ultimatevocalremovergui) 输出的分轨文件的命名规则。我们这里要求它们以跨轨道的方式，仅导入音频。之后，在文件夹中对着分轨文件多选，`Ctrl + C`，再按下 `超级粘贴!` 快捷键，即可将 [UVR5](https://github.com/Anjok07/ultimatevocalremovergui) 分轨直接导入进来。
@zh-hant 比如我這裡的 `1_*(*).wav;1_*(*).flac`，指的是 [UVR5](https://github.com/Anjok07/ultimatevocalremovergui) 輸出的分軌檔案的命名規則。我們這裡要求它們以跨軌道的方式，僅匯入音訊。之後，在資料夾中對著分軌檔案多選，`Ctrl + C`，再按下 `超級貼上!` 快速鍵，即可將 [UVR5](https://github.com/Anjok07/ultimatevocalremovergui) 分軌直接匯入進來。
@ja 例えば、私の `1_*(*).wav;1_*(*).flac` は、[UVR5](https://github.com/Anjok07/ultimatevocalremovergui) が出力するステムファイルの命名規則を指します。ここでは、オーディオのみを「トラックに沿って」の方法でインポートするように要求します。その後、フォルダ内でステムファイルを複数選択し、`Ctrl + C` を押し、`UltraPaste!` ショートカットキーを押すと、[UVR5](https://github.com/Anjok07/ultimatevocalremovergui) ステムを直接インポートできます。
@ko 예를 들어, 여기서의 `1_*(*).wav;1_*(*).flac`은 [UVR5](https://github.com/Anjok07/ultimatevocalremovergui)가 출력하는 스템 파일의 명명 규칙을 나타냅니다. 여기서는 오디오만 가져오고 트랙에 걸쳐 방식으로 가져오도록 요구합니다. 그런 다음 폴더에서 스템 파일을 다중 선택하고 `Ctrl + C`를 누른 다음 `UltraPaste!` 단축키를 눌러 [UVR5](https://github.com/Anjok07/ultimatevocalremovergui) 스템을 직접 가져올 수 있습니다.
@de Beispielsweise bezieht sich mein `1_*(*).wav;1_*(*).flac` hier auf die Namenskonvention der Stemdaten-Ausgabe von [UVR5](https://github.com/Anjok07/ultimatevocalremovergui). Wir fordern, dass sie nur als Audio und mit der Methode "Über Spuren" importiert werden. Danach wählen Sie im Ordner die Stemdaten mehrfach aus, drücken `Strg + C` und dann die `UltraPaste!`-Tastenkombination, um die [UVR5](https://github.com/Anjok07/ultimatevocalremovergui)-Stems direkt zu importieren.
@fr Par exemple, mon `1_*(*).wav;1_*(*).flac` ici fait référence à la convention de nommage des fichiers stem (pistes séparées) générés par [UVR5](https://github.com/Anjok07/ultimatevocalremovergui). Nous exigeons qu'ils soient importés en audio uniquement, en utilisant la méthode Sur les pistes. Ensuite, dans le dossier, sélectionnez les fichiers stem, faites `Ctrl + C`, et appuyez sur la touche de raccourci `UltraPaste!` pour importer directement les stems [UVR5](https://github.com/Anjok07/ultimatevocalremovergui).
@ru Например, мой `1_*(*).wav;1_*(*).flac` здесь относится к соглашению об именовании стем-файлов, выводимых [UVR5](https://github.com/Anjok07/ultimatevocalremovergui). Мы требуем, чтобы они импортировались только как аудио, используя метод По дорожкам. Затем, в папке, выберите несколько стем-файлов, нажмите `Ctrl + C` и нажмите клавишу быстрого доступа `UltraPaste!`, чтобы напрямую импортировать стемы [UVR5](https://github.com/Anjok07/ultimatevocalremovergui).

@en <br>
@zh <br>
@zh-hant <br>
@ja <br>
@ko <br>
@de <br>
@fr <br>
@ru <br>

@en ### VEGAS Data
@zh ### VEGAS 数据
@zh-hant ### VEGAS 資料
@ja ### VEGAS データ
@ko ### VEGAS 데이터
@de ### VEGAS-Daten
@fr ### Données VEGAS
@ru ### Данные VEGAS

@en <ImageOnDemand alt="VEGAS Data" src="ultrapaste/img014_ultrapaste_vegas_data.png" />
@zh <ImageOnDemand alt="VEGAS 数据" src="ultrapaste/img014_ultrapaste_vegas_data.png" />
@zh-hant <ImageOnDemand alt="VEGAS 資料" src="ultrapaste/img014_ultrapaste_vegas_data.png" />
@ja <ImageOnDemand alt="VEGAS データ" src="ultrapaste/img014_ultrapaste_vegas_data.png" />
@ko <ImageOnDemand alt="VEGAS 데이터" src="ultrapaste/img014_ultrapaste_vegas_data.png" />
@de <ImageOnDemand alt="VEGAS-Daten" src="ultrapaste/img014_ultrapaste_vegas_data.png" />
@fr <ImageOnDemand alt="Données VEGAS" src="ultrapaste/img014_ultrapaste_vegas_data.png" />
@ru <ImageOnDemand button-text="Загрузить изображение" alt="Данные VEGAS" src="img/ultrapaste/img014_ultrapaste_vegas_data.png" />

@en `VEG Import Type`: Divided into three categories: `Open Project File`, `As Nested Project`, `Import Media from Project`.
@zh `VEG 导入类型`：一共分为 `打开项目文件`、`作为嵌套项目导入`、`导入项目中的媒体` 三类。
@zh-hant `VEG 匯入類型`：一共分為 `開啟專案檔案`、`作為巢狀專案匯入`、`匯入專案中的媒體` 三類。
@ja `VEG インポートタイプ`：`プロジェクトファイルを開く`、`ネストされたプロジェクトとしてインポート`、`プロジェクトからメディアをインポート`の3種類に分けられます。
@ko `VEG 가져오기 유형`: `프로젝트 파일 열기`, `중첩 프로젝트로 가져오기`, `프로젝트에서 미디어 가져오기` 세 가지 범주로 나뉩니다.
@de `VEG-Importtyp`: Unterteilt in drei Kategorien: `Projektdatei öffnen`, `Als verschachteltes Projekt importieren`, `Medien aus Projekt importieren`.
@fr `Type d'importation VEG` : Divisée en trois catégories : `Ouvrir le fichier projet`, `Comme projet imbriqué`, `Importer le média du projet`.
@ru `Тип импорта VEG`: Разделен на три категории: `Открыть файл проекта`, `Как вложенный проект`, `Импорт медиа из проекта`.

@en `Paste Event Attributes`: When clipboard data contains VEGAS Events, execute `Selective Paste Event Attributes`.
@zh `粘贴事件属性`：当剪贴板数据中含有 VEGAS 事件时，执行 `选择性粘贴事件属性` 操作。
@zh-hant `貼上事件屬性`：當剪貼簿資料中含有 VEGAS 事件時，執行 `選擇性貼上事件屬性` 操作。
@ja `イベント属性を貼り付け`：クリップボードデータに VEGAS イベントが含まれている場合、`選択的イベント属性貼り付け`を実行します。
@ko `이벤트 속성 붙여넣기`: 클립보드 데이터에 VEGAS 이벤트가 포함된 경우 `선택적 이벤트 속성 붙여넣기`를 실행합니다.
@de `Ereignisattribute einfügen`: Wenn Zwischenablagedaten VEGAS-Ereignisse enthalten, führt `Selektives Einfügen von Ereignisattributen` aus.
@fr `Coller les attributs des événements` : Lorsque les données du presse-papiers contiennent des événements VEGAS, exécute `Collage sélectif des attributs des événements`.
@ru `Вставить атрибуты события`: Когда данные буфера обмена содержат события VEGAS, выполнить `Выборочную вставку атрибутов события`.

@en (Due to version limitations, VEGAS Pro 14 and below cannot use `Selective Paste Event Attributes` and can only perform `Paste Event Attributes`.)
@zh （由于版本限制，VEGAS Pro 14 及以下无法使用 `选择性粘贴事件属性`，而只能执行 `粘贴事件属性`。）
@zh-hant （由於版本限制，VEGAS Pro 14 及以下無法使用 `選擇性貼上事件屬性`，而只能執行 `貼上事件屬性`。）
@ja （バージョン制限のため、VEGAS Pro 14 以下では `選択的イベント属性貼り付け` を使用できず、`イベント属性を貼り付け` のみ実行できます。）
@ko (버전 제한으로 인해 VEGAS Pro 14 및 이하 버전에서는 `선택적 이벤트 속성 붙여넣기`를 사용할 수 없으며 `이벤트 속성 붙여넣기`만 수행할 수 있습니다.)
@de (Aufgrund von Versionsbeschränkungen können VEGAS Pro 14 und niedriger `Selektives Einfügen von Ereignisattributen` nicht verwenden und können nur `Ereignisattribute einfügen` ausführen.)
@fr (En raison des limitations de version, VEGAS Pro 14 et versions antérieures ne peuvent pas utiliser `Collage sélectif des attributs des événements` et ne peuvent effectuer que `Coller les attributs des événements`.)
@ru (Из-за ограничений версии VEGAS Pro 14 и ниже не могут использовать `Выборочную вставку атрибутов события` и могут выполнять только `Вставку атрибутов события`.)

@en `Run Script`: When copied files contain `.cs` / `.js` / `.vb` / `.dll` files, attempt to run them as scripts. Running failures will directly report errors, so when enabling this option, try not to randomly copy and paste `.dll` files, etc.
@zh `运行脚本`：当复制的文件中含有 `.cs` / `.js` / `.vb` / `.dll` 文件时，尝试将其作为脚本运行。运行失败会直接报错，所以启用该选项时，尽量不要随便复制粘贴 `.dll` 啥的进来。
@zh-hant `執行腳本`：當複製的檔案中含有 `.cs` / `.js` / `.vb` / `.dll` 檔案時，嘗試將其作為腳本執行。執行失敗會直接報錯，所以啟用該選項時，盡量不要隨便複製貼上 `.dll` 啥的進來。
@ja `スクリプトを実行`：コピーしたファイルに `.cs` / `.js` / `.vb` / `.dll` ファイルが含まれている場合、それらをスクリプトとして実行しようとします。実行に失敗すると直接エラーが報告されるため、このオプションを有効にする場合は、`.dll` ファイルなどを無作為にコピーして貼り付けないようにしてください。
@ko `스크립트 실행`: 복사된 파일에 `.cs` / `.js` / `.vb` / `.dll` 파일이 포함된 경우 이를 스크립트로 실행하려고 시도합니다. 실행 실패는 직접 오류를 보고하므로, 이 옵션을 활성화할 때는 `.dll` 파일 등을 무작위로 복사하여 붙여넣지 않도록 하십시오.
@de `Skript ausführen`: Wenn kopierte Dateien `.cs`- / `.js`- / `.vb`- / `.dll`-Dateien enthalten, wird versucht, sie als Skripte auszuführen. Ausführungsfehler führen direkt zu Fehlermeldungen. Aktivieren Sie diese Option also nicht, wenn Sie nicht zufällig `.dll`-Dateien usw. kopieren und einfügen.
@fr `Exécuter le script` : Lorsque les fichiers copiés contiennent des fichiers `.cs` / `.js` / `.vb` / `.dll`, tente de les exécuter en tant que scripts. Les échecs d'exécution signaleront directement une erreur, donc lors de l'activation de cette option, essayez de ne pas copier-coller au hasard des fichiers `.dll`, etc.
@ru `Запустить скрипт`: Когда скопированные файлы содержат файлы `.cs` / `.js` / `.vb` / `.dll`, попытаться запустить их как скрипты. Сбои выполнения будут напрямую выдавать ошибки, поэтому при включении этой опции старайтесь не копировать и вставлять случайные файлы `.dll` и т.д.

@en `Generate Mixed VEGAS Clipboard Data`: Not very useful for general users. However, when using both the Sony version (Sony VEGAS Pro 13 and below) and higher versions, this one-click operation converts the VEGAS Events in the clipboard data into a version that can be pasted in both Sony and Magix versions. An experimental feature, not completely reliable.
@zh `生成混合 VEGAS 剪贴板数据`：对一般用户没有什么作用，不过当你同时使用 Sony 版（Sony VEGAS Pro 13 及以下）和高版本时，这个一键操作会将剪贴板数据中的 VEGAS 事件转换为 Sony 版和 Magix 版都能够粘贴的版本。属于实验性功能，并不完全可靠。
@zh-hant `產生混合 VEGAS 剪貼簿資料`：對一般使用者沒有什麼作用，不過當你同時使用 Sony 版（Sony VEGAS Pro 13 及以下）和高版本時，這個一鍵操作會將剪貼簿資料中的 VEGAS 事件轉換為 Sony 版和 Magix 版都能夠貼上的版本。屬於實驗性功能，並不完全可靠。
@ja `混合 VEGAS クリップボードデータを生成`：一般ユーザーにはあまり役に立ちません。ただし、Sony 版（Sony VEGAS Pro 13 以下）と高バージョンの両方を使用している場合、このワンクリック操作により、クリップボードデータ内の VEGAS イベントが Sony 版と Magix 版の両方で貼り付け可能なバージョンに変換されます。実験的な機能であり、完全に信頼できるものではありません。
@ko `혼합 VEGAS 클립보드 데이터 생성`: 일반 사용자에게는 별로 유용하지 않습니다. 그러나 Sony 버전(Sony VEGAS Pro 13 및 이하)과 상위 버전을 모두 사용할 때, 이 원클릭 작업은 클립보드 데이터의 VEGAS 이벤트를 Sony 버전과 Magix 버전 모두에서 붙여넣을 수 있는 버전으로 변환합니다. 실험적 기능으로 완전히 신뢰할 수는 없습니다.
@de `Gemischte VEGAS-Zwischenablagedaten generieren`: Für allgemeine Benutzer nicht sehr nützlich. Wenn Sie jedoch sowohl die Sony-Version (Sony VEGAS Pro 13 und niedriger) als auch höhere Versionen verwenden, konvertiert dieser Ein-Klick-Vorgang die VEGAS-Ereignisse in den Zwischenablagedaten in eine Version, die sowohl in Sony- als auch in Magix-Versionen eingefügt werden kann. Ein experimentelles Feature, nicht vollständig zuverlässig.
@fr `Générer des données de presse-papiers VEGAS mixtes` : Pas très utile pour les utilisateurs généraux. Cependant, lors de l'utilisation simultanée de la version Sony (Sony VEGAS Pro 13 et versions antérieures) et des versions supérieures, cette opération en un clic convertit les événements VEGAS dans les données du presse-papiers en une version pouvant être collée à la fois dans les versions Sony et Magix. Fonctionnalité expérimentale, pas complètement fiable.
@ru `Сгенерировать смешанные данные буфера обмена VEGAS`: Не очень полезно для обычных пользователей. Однако, при использовании как версии Sony (Sony VEGAS Pro 13 и ниже), так и более новых версий, эта операция в один клик преобразует события VEGAS в данных буфера обмена в версию, которую можно вставить как в версии Sony, так и Magix. Экспериментальная функция, не полностью надежна.
