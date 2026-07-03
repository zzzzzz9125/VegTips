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

@@@en
# VEGAS Pro Video FX List

## Notes

1. This page summarizes all available **`Video FX`** in VEGAS Pro, including their **`Names`**, **`Groups`**, **`UIDs`**, and other information, making it easy to search and browse online.

2. By default, the FX are sorted in ascending order by **`Name`**. Using the filter, sort, and search functions at the top of the table, you can set conditions to filter and search for specific FX entries.

3. As shown in the table, video FX in VEGAS can be divided into four categories: **`Video FX`**, **`Transition FX`**, **`Media Generator FX`**, and **`Track Composite Mode FX`**. The **`Type`** column in the table indicates which category an FX can be added to in a project. An FX may belong to multiple FX categories and may exhibit different characteristics in each. For example, **`Transition FX`** from **`Sapphire`** can belong to **`Video FX`**, **`Transition FX`**, and **`Track Composite Mode FX`**. When added as a **`Video FX`**, it does not have animation by default but includes an additional progress parameter such as **`Dissolve Amount`** that can be keyframed. When used as a **`Transition FX`**, it has an automatic transition animation. This is an important distinction to note.

4. Depending on the version of VEGAS or the plugin, the same FX may have different **`UIDs`**. For instance, **`NewBlue`** has an older DXT version and a newer OFX version, distinguished in the table as **`NewBlue DXT`** and **`NewBlue OFX`**. Additionally, for VEGAS Pro 18 and later, the three built-in FX— **`Border`**, **`Test Pattern`**, and **`Channel Blend`** —were upgraded from the older DXT versions to OFX versions. The table aims to collect as many versions of FX as possible, using the **`UID`** as the unique key and inclusion criterion. Notably, for VEGAS Pro 16 and earlier versions, some built-in OFX **`UIDs`** follow the format **`{Svfx:com.sonycreativesoftware:xxx}`** instead of the newer **`{Svfx:com.vegascreativesoftware:xxx}`**. This is not elaborated further in the table; please adjust accordingly.
@@@zh
# VEGAS Pro 视频 FX 效果列表

## 说明

1. 该页面归纳整理了 VEGAS Pro 中的所有可用的 **`视频 FX 效果`** 的 **`名称`**、**`分组`** 和 **`UID`** 等信息，便于在线查找阅览。

2. 效果默认是按照 **`名称`** 升序作为排序依据的。通过表格顶部的筛选、排序和搜索功能，可自行设定条件筛选和搜索特定效果条目。

3. 就如表格所展示的那样，VEGAS 中的视频效果一共可分为 4 类：**`视频 FX`**、**`转场 FX`**、**`媒体生成器 FX`**、**`轨道合成模式 FX`**。表格中的 **`类型`** 表示该效果可作为这一类 FX 添加到项目中。一个效果可能归属于多个 FX 类，且可能在不同类里展现出不同的特性。比如 **`蓝宝石`** 的 **`转场 FX`**，可归属于 **`视频 FX`**、**`转场 FX`**、**`轨道合成模式 FX`**，当该效果作为 **`视频 FX`** 添加时，本身不会有动画，但会额外有一个 **`溶解量`**（**`Dissolve Amount`**） 之类的进度参数，可以为其添加关键帧；而在 **`转场 FX`** 的效果则有自动的转场动画效果。这是需要注意的。

4. 由于 VEGAS 版本或者插件版本的不同，同一款效果可能有不同的 **`UID`**。比如 **`NewBlue`** 这款插件有旧的 DXT 版和新的 OFX 版，在表格中用了 **`NewBlue DXT`** 和 **`NewBlue OFX`** 来区分。再比如对于 VEGAS Pro 18 及以上，**`边框`**、**`测试图案`**、**`通道混合`** 这三个自带的效果从旧的 DXT 效果升级成了 OFX 效果。表格会尽可能多地收集不同版本的效果，以 **`UID`** 作为唯一的键和收录依据。特别地，对于 VEGAS Pro 16 及以下版本，VEGAS 自带的一些 OFX 的 **`UID`** 格式应该是 **`{Svfx:com.sonycreativesoftware:xxx}`**，而非新版的 **`{Svfx:com.vegascreativesoftware:xxx}`**，这在表格中不过多说明，请自行转换。
@@@zh-hant
# VEGAS Pro 影片 FX 效果列表

## 說明

1. 該頁面歸納整理了 VEGAS Pro 中的所有可用的 **`影片 FX 效果`** 的 **`名稱`**、**`分組`** 和 **`UID`** 等資訊，便於線上查找閱覽。

2. 效果預設是按照 **`名稱`** 升序作為排序依據的。透過表格頂部的篩選、排序和搜尋功能，可自行設定條件篩選和搜尋特定效果條目。

3. 就如表格所展示的那樣，VEGAS 中的影片效果一共可分為 4 類：**`影片 FX`**、**`轉場 FX`**、**`媒體產生器 FX`**、**`軌道合成模式 FX`**。表格中的 **`類型`** 表示該效果可作為這一類 FX 新增到專案中。一個效果可能歸屬於多個 FX 類，且可能在不同類裡展現出不同的特性。比如 **`藍寶石`** 的 **`轉場 FX`**，可歸屬於 **`影片 FX`**、**`轉場 FX`**、**`軌道合成模式 FX`**，當該效果作為 **`影片 FX`** 新增時，本身不會有動畫，但會額外有一個 **`溶解量`**（**`Dissolve Amount`**） 之類的進度參數，可以為其新增關鍵影格；而在 **`轉場 FX`** 的效果則有自動的轉場動畫效果。這是需要注意的。

4. 由於 VEGAS 版本或者外掛程式版本的不同，同一款效果可能有不同的 **`UID`**。比如 **`NewBlue`** 這款外掛程式有舊的 DXT 版和新的 OFX 版，在表格中用了 **`NewBlue DXT`** 和 **`NewBlue OFX`** 來區分。再比如對於 VEGAS Pro 18 及以上，**`邊框`**、**`測試圖案`**、**`通道混合`** 這三個內建的效果從舊的 DXT 效果升級成了 OFX 效果。表格會盡可能多地收集不同版本的效果，以 **`UID`** 作為唯一的鍵和收錄依據。特別地，對於 VEGAS Pro 16 及以下版本，VEGAS 內建的一些 OFX 的 **`UID`** 格式應該是 **`{Svfx:com.sonycreativesoftware:xxx}`**，而非新版的 **`{Svfx:com.vegascreativesoftware:xxx}`**，這在表格中不過多說明，請自行轉換。
@@@ja
# VEGAS Pro ビデオ FX リスト

## 注記

1. このページは VEGAS Pro で利用可能なすべての **`ビデオ FX`** を要約し、それらの **`名前`**、**`グループ`**、**`UID`** およびその他の情報を含めており、オンラインで簡単に検索および閲覧できます。

2. FX はデフォルトで **`名前`** の昇順でソートされます。表の上部にあるフィルター、ソート、および検索機能を使用して、特定の FX エントリをフィルタリングおよび検索する条件を設定できます。

3. 表に示すように、VEGAS のビデオ FX は、**`ビデオ FX`**、**`トランジション FX`**、**`メディアジェネレーター FX`**、**`トラック合成モード FX`** の 4 つのカテゴリに分類できます。表の **`タイプ`** 列は、FX がプロジェクトのどの FX カテゴリに追加できるかを示します。FX は複数の FX カテゴリに属し、それぞれで異なる特性を示す場合があります。例えば、**`Sapphire`** の **`トランジション FX`** は、**`ビデオ FX`**、**`トランジション FX`**、**`トラック合成モード FX`** に属することができます。**`ビデオ FX`** として追加された場合、デフォルトではアニメーションはありませんが、キーフレーム化可能な **`ディゾルブ量`** などの追加の進行パラメータが含まれます。**`トランジション FX`** として使用される場合、自動トランジションアニメーションがあります。これは注意すべき重要な違いです。

4. VEGAS またはプラグインのバージョンによって、同じ FX でも異なる **`UID`** を持つ場合があります。例えば、**`NewBlue`** には古い DXT バージョンと新しい OFX バージョンがあり、表では **`NewBlue DXT`** と **`NewBlue OFX`** として区別されています。さらに、VEGAS Pro 18 以降では、組み込みの 3 つの FX—**`ボーダー`**、**`テストパターン`**、**`チャンネルブレンド`** —は、古い DXT バージョンから OFX バージョンにアップグレードされました。表では、可能な限り多くのバージョンの FX を収集し、**`UID`** を一意のキーおよび収集基準としています。特に、VEGAS Pro 16 以前のバージョンでは、一部の組み込み OFX の **`UID`** は、新しい **`{Svfx:com.vegascreativesoftware:xxx}`** ではなく、**`{Svfx:com.sonycreativesoftware:xxx}`** 形式をとります。これは表では詳しく説明しませんので、適宜読み替えてください。
@@@ko
# VEGAS Pro 비디오 FX 목록

## 참고 사항

1. 이 페이지는 VEGAS Pro에서 사용 가능한 모든 **`비디오 FX`**를 요약하여 **`이름`**, **`그룹`**, **`UID`** 및 기타 정보를 제공하여 온라인에서 쉽게 검색하고 탐색할 수 있도록 합니다.

2. 기본적으로 FX는 **`이름`**을 기준으로 오름차순으로 정렬됩니다. 테이블 상단의 필터, 정렬 및 검색 기능을 사용하여 특정 FX 항목을 필터링하고 검색하는 조건을 설정할 수 있습니다.

3. 테이블에 표시된 것처럼, VEGAS의 비디오 효과는 4가지 범주로 나눌 수 있습니다: **`비디오 FX`**, **`전환 FX`**, **`미디어 생성기 FX`**, **`트랙 합성 모드 FX`**. 테이블의 **`유형`** 열은 FX가 프로젝트에 추가될 수 있는 범주를 나타냅니다. 하나의 FX가 여러 FX 범주에 속할 수 있으며 각각에서 다른 특성을 나타낼 수 있습니다. 예를 들어, **`사파이어`**의 **`전환 FX`**는 **`비디오 FX`**, **`전환 FX`**, **`트랙 합성 모드 FX`**에 속할 수 있습니다. **`비디오 FX`**로 추가될 때는 기본적으로 애니메이션이 없지만 키프레임을 지정할 수 있는 **`디졸브 양`**과 같은 추가 진행 매개변수가 포함됩니다. **`전환 FX`**로 사용될 때는 자동 전환 애니메이션을 갖습니다. 이것은 주의해야 할 중요한 차이점입니다.

4. VEGAS 또는 플러그인의 버전에 따라 동일한 FX가 다른 **`UID`**를 가질 수 있습니다. 예를 들어, **`뉴블루`**에는 이전 DXT 버전과 새로운 OFX 버전이 있으며, 테이블에서는 **`NewBlue DXT`**와 **`NewBlue OFX`**로 구분됩니다. 또한 VEGAS Pro 18 이상의 경우, 세 가지 내장 FX인 **`테두리`**, **`테스트 패턴`**, **`채널 혼합`**이 이전 DXT 버전에서 OFX 버전으로 업그레이드되었습니다. 테이블은 가능한 많은 버전의 FX를 수집하기 위해 **`UID`**를 고유 키 및 포함 기준으로 사용합니다. 특히, VEGAS Pro 16 및 이전 버전의 경우, 일부 내장 OFX **`UID`**는 새로운 **`{Svfx:com.vegascreativesoftware:xxx}`** 형식 대신 **`{Svfx:com.sonycreativesoftware:xxx}`** 형식을 따릅니다. 이것은 테이블에서 자세히 설명하지 않으니 적절히 변환하시기 바랍니다.
@@@de
# VEGAS Pro Video-FX-Liste

## Hinweise

1. Diese Seite fasst alle verfügbaren **`Video-FX`** in VEGAS Pro zusammen, einschließlich ihrer **`Namen`**, **`Gruppen`**, **`UIDs`** und anderer Informationen, um die Online-Suche und das Durchsuchen zu erleichtern.

2. Standardmäßig sind die FX nach **`Name`** aufsteigend sortiert. Mit den Filter-, Sortier- und Suchfunktionen oben in der Tabelle können Sie Bedingungen festlegen, um spezifische FX-Einträge zu filtern und zu suchen.

3. Wie in der Tabelle gezeigt, können Video-FX in VEGAS in vier Kategorien eingeteilt werden: **`Video-FX`**, **`Übergangs-FX`**, **`Mediengenerator-FX`** und **`Spurkompositionsmodus-FX`**. Die Spalte **`Typ`** in der Tabelle gibt an, zu welcher Kategorie ein FX in einem Projekt hinzugefügt werden kann. Ein FX kann zu mehreren FX-Kategorien gehören und in jeder unterschiedliche Eigenschaften aufweisen. Beispielsweise können **`Übergangs-FX`** von **`Sapphire`** zu **`Video-FX`**, **`Übergangs-FX`** und **`Spurkompositionsmodus-FX`** gehören. Wenn sie als **`Video-FX`** hinzugefügt werden, haben sie standardmäßig keine Animation, enthalten jedoch einen zusätzlichen Fortschrittsparameter wie **`Dissolve Amount`**, der mit Keyframes versehen werden kann. Bei Verwendung als **`Übergangs-FX`** haben sie eine automatische Übergangsanimation. Dies ist ein wichtiger Unterschied.

4. Je nach VEGAS-Version oder Plugin kann derselbe FX unterschiedliche **`UIDs`** haben. Beispielsweise hat **`NewBlue`** eine ältere DXT-Version und eine neuere OFX-Version, die in der Tabelle als **`NewBlue DXT`** und **`NewBlue OFX`** unterschieden werden. Zusätzlich wurden für VEGAS Pro 18 und höher die drei mitgelieferten FX – **`Border`**, **`Test Pattern`** und **`Channel Blend`** – von den älteren DXT-Versionen auf OFX-Versionen aktualisiert. Die Tabelle zielt darauf ab, so viele Versionen von FX wie möglich zu sammeln, wobei die **`UID`** als eindeutiger Schlüssel und Aufnahmekriterium dient. Insbesondere für VEGAS Pro 16 und frühere Versionen folgen einige mitgelieferte OFX-**`UIDs`** dem Format **`{Svfx:com.sonycreativesoftware:xxx}`** anstelle des neueren **`{Svfx:com.vegascreativesoftware:xxx}`**. Dies wird in der Tabelle nicht weiter erläutert; bitte passen Sie dies entsprechend an.
@@@fr
# Liste des effets vidéo FX VEGAS Pro

## Notes

1. Cette page récapitule tous les **`effets vidéo FX`** disponibles dans VEGAS Pro, y compris leurs **`Noms`**, **`Groupes`**, **`UIDs`** et autres informations, facilitant la recherche et la consultation en ligne.

2. Par défaut, les effets FX sont triés par ordre croissant selon le **`Nom`**. En utilisant les fonctions de filtre, de tri et de recherche en haut du tableau, vous pouvez définir des conditions pour filtrer et rechercher des entrées d'effets spécifiques.

3. Comme indiqué dans le tableau, les effets vidéo dans VEGAS peuvent être divisés en quatre catégories : **`Effets vidéo FX`**, **`Effets de transition FX`**, **`Effets de générateur de média FX`** et **`Effets de mode de composition de piste FX`**. La colonne **`Type`** dans le tableau indique à quelle catégorie un effet peut être ajouté dans un projet. Un effet peut appartenir à plusieurs catégories d'effets FX et présenter des caractéristiques différentes dans chacune. Par exemple, les **`effets de transition FX`** de **`Sapphire`** peuvent appartenir à **`Effets vidéo FX`**, **`Effets de transition FX`** et **`Effets de mode de composition de piste FX`**. Lorsqu'il est ajouté en tant qu' **`Effet vidéo FX`**, il n'a pas d'animation par défaut mais inclut un paramètre de progression supplémentaire tel que **`Quantité de dissolution`** qui peut être animé avec des images clés. Lorsqu'il est utilisé comme **`Effet de transition FX`**, il a une animation de transition automatique. C'est une distinction importante à noter.

4. Selon la version de VEGAS ou du plugin, le même effet peut avoir des **`UIDs`** différents. Par exemple, **`NewBlue`** a une ancienne version DXT et une nouvelle version OFX, distinguées dans le tableau comme **`NewBlue DXT`** et **`NewBlue OFX`**. De plus, pour VEGAS Pro 18 et versions ultérieures, les trois effets intégrés — **`Bordure`**, **`Motif de test`** et **`Mélange de canaux`** — ont été mis à niveau des anciennes versions DXT vers les versions OFX. Le tableau vise à collecter autant de versions d'effets que possible, en utilisant l' **`UID`** comme clé unique et critère d'inclusion. Notamment, pour VEGAS Pro 16 et versions antérieures, certains **`UIDs`** OFX intégrés suivent le format **`{Svfx:com.sonycreativesoftware:xxx}`** au lieu du plus récent **`{Svfx:com.vegascreativesoftware:xxx}`**. Ceci n'est pas davantage détaillé dans le tableau ; veuillez ajuster en conséquence.
@@@ru
# Список видеоэффектов VEGAS Pro

## Примечания

1. На этой странице суммированы все доступные **`Видеоэффекты`** в VEGAS Pro, включая их **`Названия`**, **`Группы`**, **`UID`** и другую информацию, что облегчает поиск и просмотр в Интернете.

2. По умолчанию эффекты отсортированы в порядке возрастания по **`Названию`**. Используя функции фильтрации, сортировки и поиска в верхней части таблицы, вы можете задавать условия для фильтрации и поиска конкретных записей об эффектах.

3. Как показано в таблице, видеоэффекты в VEGAS можно разделить на четыре категории: **`Видеоэффекты`**, **`Эффекты перехода`**, **`Эффекты медиагенератора`** и **`Эффекты режима композиции дорожки`**. Столбец **`Тип`** в таблице указывает, в какую категорию эффектов можно добавить данный эффект в проекте. Эффект может принадлежать к нескольким категориям FX и может проявлять разные характеристики в каждой. Например, **`Эффекты перехода`** от **`Sapphire`** могут принадлежать к **`Видеоэффектам`**, **`Эффектам перехода`** и **`Эффектам режима композиции дорожки`**. При добавлении в качестве **`Видеоэффекта`** он по умолчанию не имеет анимации, но включает дополнительный параметр прогресса, такой как **`Количество растворения`**, для которого можно задавать ключевые кадры. При использовании в качестве **`Эффекта перехода`** у него есть автоматическая анимация перехода. Это важное различие, которое следует отметить.

4. В зависимости от версии VEGAS или плагина один и тот же эффект может иметь разные **`UID`**. Например, у **`NewBlue`** есть старая версия DXT и новая версия OFX, которые в таблице обозначены как **`NewBlue DXT`** и **`NewBlue OFX`**. Кроме того, для VEGAS Pro 18 и более поздних версий три встроенных эффекта — **`Рамка`**, **`Тестовый образец`** и **`Смешивание каналов`** — были обновлены со старых версий DXT до версий OFX. Таблица стремится собрать как можно больше версий эффектов, используя **`UID`** в качестве уникального ключа и критерия включения. В частности, для VEGAS Pro 16 и более ранних версий некоторые встроенные OFX **`UID`** имеют формат **`{Svfx:com.sonycreativesoftware:xxx}`** вместо нового **`{Svfx:com.vegascreativesoftware:xxx}`**. Это не подробно описано в таблице; пожалуйста, учитывайте это.
@@@

## Table

<VideoFxTable />
