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

@en # VEGAS Pro Troubleshooting Guide: Common Issues and Solutions
@zh # VEGAS Pro 各种疑难杂症及其解决方案的整理
@zh-hant # VEGAS Pro 各種疑難雜症及其解決方案的整理
@ja # VEGAS Pro トラブルシューティングガイド：よくある問題と解決策
@ko # VEGAS Pro 문제 해결 가이드: 일반적인 문제 및 해결책
@de # VEGAS Pro Fehlerbehebungsleitfaden: Häufige Probleme und Lösungen
@fr # Guide de dépannage VEGAS Pro : Problèmes courants et solutions
@ru # Руководство по устранению неполадок VEGAS Pro: Распространенные проблемы и решения

@en <p align="right"><strong>Version: 2026.07&ensp;&ensp;Author: <a href="https://github.com/zzzzzz9125">zzzzzz9125</a></strong></p>
@zh <p align="right"><strong>版本号：2026.07&ensp;&ensp;作者：<a href="https://space.bilibili.com/12355745/">zzzzzz9125</a></strong></p>
@zh-hant <p align="right"><strong>版本號：2026.07&ensp;&ensp;作者：<a href="https://space.bilibili.com/12355745/">zzzzzz9125</a></strong></p>
@ja <p align="right"><strong>バージョン：2026.07&ensp;&ensp;作者：<a href="https://github.com/zzzzzz9125">zzzzzz9125</a></strong></p>
@ko <p align="right"><strong>버전: 2026.07&ensp;&ensp;저자: <a href="https://github.com/zzzzzz9125">zzzzzz9125</a></strong></p>
@de <p align="right"><strong>Version: 2026.07&ensp;&ensp;Autor: <a href="https://github.com/zzzzzz9125">zzzzzz9125</a></strong></p>
@fr <p align="right"><strong>Version : 2026.07&ensp;&ensp;Auteur : <a href="https://github.com/zzzzzz9125">zzzzzz9125</a></strong></p>
@ru <p align="right"><strong>Версия: 2026.07&ensp;&ensp;Автор: <a href="https://github.com/zzzzzz9125">zzzzzz9125</a></strong></p>

@@@en
<!-- ::: warning
This page is AI-translated from the [Chinese original](/zh/) and has not been fully human-reviewed yet. If anything seems ambiguous, you can point them out on the project's [Issues](https://github.com/zzzzzz9125/VegTips/issues) page, or you can make the corrections and submit a pull request to me.

For the time being, I do not accept direct private inquiries about specific issues related to VEGAS Pro. If you have any questions, please post them on [other public forums](#xvii-vegas-communities-forums) for help. I may collect some good solutions from other forums and summarize them here.
::: -->
@@@zh
<!-- ::: warning
This page is AI-translated from the [Chinese original](/zh/) and has not been fully human-reviewed yet. If anything seems ambiguous, you can point them out on the project's [Issues](https://github.com/zzzzzz9125/VegTips/issues) page, or you can make the corrections and submit a pull request to me.

For the time being, I do not accept direct private inquiries about specific issues related to VEGAS Pro. If you have any questions, please post them on [other public forums](#xvii-vegas-communities-forums) for help. I may collect some good solutions from other forums and summarize them here.
::: -->
@@@zh-hant
<!-- ::: warning
This page is AI-translated from the [Chinese original](/zh/) and has not been fully human-reviewed yet. If anything seems ambiguous, you can point them out on the project's [Issues](https://github.com/zzzzzz9125/VegTips/issues) page, or you can make the corrections and submit a pull request to me.

For the time being, I do not accept direct private inquiries about specific issues related to VEGAS Pro. If you have any questions, please post them on [other public forums](#xvii-vegas-communities-forums) for help. I may collect some good solutions from other forums and summarize them here.
::: -->
@@@ja
::: warning
このページは[中国語原文](/zh/)からAI翻訳されたもので、人の校正が完全には行われていません。不明瞭な点があれば、プロジェクトの[Issues](https://github.com/zzzzzz9125/VegTips/issues)ページで指摘するか、修正してプルリクエストを送ってください。

当面の間、VEGAS Pro に関する具体的な問題についての直接的な私的問い合わせは受け付けていません。質問がある場合は、[他の公開フォーラム](#十七、vegas-コミュニティ-フォーラム)に投稿して助けを求めてください。他のフォーラムからの優れた解決策を収集し、ここにまとめることがあります。
:::
@@@ko
::: warning
이 페이지는 [중국어 원본](/zh/)을 AI 번역한 것이며 아직 완전한 인간 검토를 거치지 않았습니다. 모호한 부분이 있다면 프로젝트의 [Issues](https://github.com/zzzzzz9125/VegTips/issues) 페이지에 지적하거나, 직접 수정하여 Pull Request를 보낼 수 있습니다.

당분간 VEGAS Pro 관련 구체적인 문제에 대한 직접적인 개인 문의는 받지 않습니다. 질문이 있으면 [다른 공개 포럼](#xvii-vegas-커뮤니티-및-포럼)에 올려 도움을 받으십시오. 다른 포럼의 좋은 해결책을 수집하여 여기에 정리할 수도 있습니다.
:::
@@@de
::: warning
Diese Seite wurde automatisch aus dem [chinesischen Original](/zh/) übersetzt und noch nicht vollständig von Menschen überprüft. Wenn etwas unklar erscheint, können Sie dies auf der [Issues](https://github.com/zzzzzz9125/VegTips/issues)-Seite des Projekts melden oder Korrekturen vornehmen und mir einen Pull Request senden.

Vorübergehend nehme ich keine direkten privaten Anfragen zu spezifischen Problemen mit VEGAS Pro entgegen. Wenn Sie Fragen haben, posten Sie diese bitte in [anderen öffentlichen Foren](#xvii-vegas-communities-foren), um Hilfe zu erhalten. Ich sammle möglicherweise gute Lösungen aus anderen Foren und fasse sie hier zusammen.
:::
@@@fr
::: warning
Cette page est traduite automatiquement depuis [la version originale chinoise](/zh/) et n'a pas encore été entièrement relue par un humain. Si quelque chose semble ambigu, vous pouvez le signaler sur la page [Issues](https://github.com/zzzzzz9125/VegTips/issues) du projet, ou vous pouvez apporter les corrections et soumettre une pull request.

Pour le moment, je n'accepte pas de demandes privées directes concernant des problèmes spécifiques liés à VEGAS Pro. Si vous avez des questions, veuillez les publier sur [d'autres forums publics](#xvii-communautés-forums-vegas) pour obtenir de l'aide. Je pourrai collecter de bonnes solutions provenant d'autres forums et les résumer ici.
:::
@@@ru
::: warning
Эта страница переведена с помощью ИИ с [китайского оригинала](/zh/) и еще не прошла полную проверку человеком. Если что-то кажется неясным, вы можете указать на это на странице [Issues](https://github.com/zzzzzz9125/VegTips/issues) проекта или внести исправления и отправить мне pull request.

В настоящее время я не принимаю прямые личные запросы по конкретным проблемам, связанным с VEGAS Pro. Если у вас есть вопросы, пожалуйста, публикуйте их на [других публичных форумах](#xvii-vegas-сообщества-форумы) для получения помощи. Я могу собирать некоторые хорошие решения с других форумов и обобщать их здесь.
:::
@@@

@en ## N. Preface
@zh ## 零、前言
@zh-hant ## 零、前言
@ja ## 零、はじめに
@ko ## N. 머리말
@de ## N. Vorwort
@fr ## N. Préface
@ru ## N. Предисловие

@en - This article is not a basic tutorial for beginners. It is a guide for troubleshooting various issues in VEGAS Pro and therefore will not extensively cover basic software operations. This article supports the use of licensed software. For information on purchasing a legitimate license, see the [Software Purchase Channels](#xvi-software-purchase-channels) section at the end.
@zh - 本文不是专门面向初学者的基础教程，而是针对 Vegas 各种疑难杂症的问题处理的指导，因此不会过多地介绍软件的基础操作。本文声明支持正版软件，[入正渠道](#十六、软件入正渠道) 详见本文文末。
@zh-hant - 本文不是專門面向初學者的基礎教學，而是針對 Vegas 各種疑難雜症的問題處理指導，因此不會過多地介紹軟體的基礎操作。本文聲明支援正版軟體，[入正渠道](#十六、軟體入正渠道) 詳見本文文末。
@ja - この記事は初心者向けの基礎チュートリアルではありません。VEGAS Pro のさまざまな問題をトラブルシューティングするためのガイドであり、基本的なソフトウェア操作については詳しく説明しません。この記事は正規ライセンスソフトウェアの使用を支持します。正規ライセンスの購入については、末尾の[ソフトウェア購入チャネル](#十六、ソフトウェア購入チャネル)を参照してください。
@ko - 이 글은 초보자를 위한 기본 튜토리얼이 아닙니다. VEGAS Pro의 다양한 문제를 해결하기 위한 안내서이므로 기본적인 소프트웨어 조작법을 광범위하게 다루지 않습니다. 이 글은 정식 라이선스 소프트웨어 사용을 지지합니다. 합법적 라이선스 구매 정보는 문서 끝의 [소프트웨어 구매 경로](#xvi-소프트웨어-구매-경로) 섹션을 참조하십시오.
@de - Dieser Artikel ist kein Basistutorial für Anfänger. Es ist ein Leitfaden zur Fehlerbehebung bei verschiedenen Problemen in VEGAS Pro und behandelt daher nicht ausführlich die Grundfunktionen der Software. Dieser Artikel unterstützt die Nutzung lizenzierter Software. Informationen zum Kauf einer legalen Lizenz finden Sie im Abschnitt [Software-Kaufkanäle](#xvi-software-kaufkanäle) am Ende.
@fr - Cet article n'est pas un tutoriel de base pour débutants. C'est un guide pour résoudre divers problèmes dans VEGAS Pro et n'abordera donc pas extensivement les opérations logicielles de base. Cet article soutient l'utilisation de logiciels sous licence. Pour les informations sur l'achat d'une licence légitime, voir la section [Canaux d'achat du logiciel](#xvi-canaux-d-achat-du-logiciel) à la fin.
@ru - Эта статья не является базовым руководством для начинающих. Это руководство по устранению различных проблем в VEGAS Pro, поэтому она не будет подробно освещать базовые операции с программным обеспечением. Данная статья поддерживает использование лицензионного ПО. Информацию о покупке легальной лицензии см. в разделе [Каналы приобретения ПО](#xvi-каналы-приобретения-по) в конце.

@en - This article is over 10,000 words and covers common issues and solutions for VEGAS Pro. It was first published on Chinese website Bilibili and later summarized and translated into this document for online viewing. If you find any omissions, you can point them out [in this post](https://forum.borisfx.com/t/vegas-pro-troubleshooting-guide-common-issues-and-solutions/21231).
@zh - 本文总共超过两万字，涵盖 Vegas Pro 软件的各种常见疑难杂症及其解决方案。本文首发于 B 站专栏 [cv27004832](https://www.bilibili.com/read/cv27004832/)，后整理成文档，供在线预览。如有疏漏之处，可于此专栏的评论区中指出。
@zh-hant - 本文總共超過兩萬字，涵蓋 Vegas Pro 軟體的各種常見疑難雜症及其解決方案。本文首發於 B 站專欄 [cv27004832](https://www.bilibili.com/read/cv27004832/)，後整理成文檔，供線上預覽。如有疏漏之處，可於此專欄的評論區中指出。
@ja - この記事は 20,000 語以上に及び、VEGAS Pro のよくある問題と解決策を網羅しています。中国のウェブサイト Bilibili で初公開され、後にまとめられ、オンライン閲覧用にこのドキュメントに翻訳されました。抜け漏れがあれば、[この投稿](https://forum.borisfx.com/t/vegas-pro-troubleshooting-guide-common-issues-and-solutions/21231)で指摘してください。
@ko - 이 글은 20,000단어가 넘으며 VEGAS Pro의 일반적인 문제와 해결책을 다룹니다. 처음 중국 웹사이트 Bilibili에 게시된 후 요약 번역되어 온라인으로 볼 수 있는 이 문서로 정리되었습니다. 누락된 부분이 있으면 [이 게시물](https://forum.borisfx.com/t/vegas-pro-troubleshooting-guide-common-issues-and-solutions/21231)에 지적할 수 있습니다.
@de - Dieser Artikel umfasst über 10.000 Wörter und behandelt häufige Probleme und Lösungen für VEGAS Pro. Er wurde zuerst auf der chinesischen Website Bilibili veröffentlicht und später zu diesem Dokument zusammengefasst und übersetzt, um online betrachtet zu werden. Wenn Sie Fehler oder Auslassungen finden, können Sie diese [in diesem Beitrag](https://forum.borisfx.com/t/vegas-pro-troubleshooting-guide-common-issues-and-solutions/21231) melden.
@fr - Cet article fait plus de 10 000 mots et couvre les problèmes courants et leurs solutions pour VEGAS Pro. Il a été publié pour la première fois sur le site chinois Bilibili, puis résumé et traduit dans ce document pour une consultation en ligne. Si vous trouvez des omissions, vous pouvez les signaler [dans ce post](https://forum.borisfx.com/t/vegas-pro-troubleshooting-guide-common-issues-and-solutions/21231).
@ru - Эта статья объемом более 20 000 слов охватывает распространенные проблемы и решения для VEGAS Pro. Она была впервые опубликована на китайском сайте Bilibili, а затем обобщена и переведена в этот документ для онлайн-просмотра. Если вы обнаружите какие-либо упущения, вы можете указать на них [в этом посте](https://forum.borisfx.com/t/vegas-pro-troubleshooting-guide-common-issues-and-solutions/21231).

@en - When consulting this guide, it is recommended to use the table of contents to find your issue category and utilize the **`Ctrl + F`** search function to search for keywords or error codes for faster resolution. Paths mentioned in this article are generally expressed using environment variables, e.g., **`%localappdata%\VEGAS Pro\`**. **You can copy and paste the path text into the address bar of Windows File Explorer and press `Enter` to quickly navigate.** This article sometimes mentions specific build numbers for certain versions, e.g., `23 build 302`, where `302` is the build number. You can see the current build number on the loading screen when VEGAS starts. Content marked with **<u>underline</u>** contains hyperlinks.
@zh - 在查阅本文时，建议参考章节目录分类查询问题，并合理运用 **`Ctrl + F`** 查找功能，搜索问题或报错的关键字和报错码，以便于快速找到解决问题的办法。本文所给出的路径一般以环境变量的方式表示，比如 **`%localappdata%\VEGAS Pro\`**。**将路径文本复制粘贴到 Windows 文件资源管理器的地址栏后按 `Enter` 键，即可实现快速跳转。**本文有时会提及特定版本的特定小版本号，比如 `23 build 302`，此处 `302` 即为小版本号。在 Vegas 的读条启动界面，就可以看到当前版本的小版本号。本文标有 **<u>下划线</u>** 的内容，可以进行超链接跳转。
@zh-hant - 在查閱本文時，建議參考章節目錄分類查詢問題，並合理運用 **`Ctrl + F`** 查找功能，搜尋問題或報錯的關鍵字和報錯碼，以便於快速找到解決問題的辦法。本文所給出的路徑一般以環境變數的方式表示，比如 **`%localappdata%\VEGAS Pro\`**。**將路徑文字複製貼上到 Windows 檔案總管的位址列後按 `Enter` 鍵，即可實現快速跳轉。**本文有時會提及特定版本的特定小版本號，比如 `23 build 302`，此處 `302` 即為小版本號。在 Vegas 的讀條啟動介面，就可以看到目前版本的小版本號。本文標有 **<u>底線</u>** 的內容，可以進行超連結跳轉。
@ja - このガイドを参照する際は、目次を使用して問題カテゴリを探し、**`Ctrl + F`** 検索機能を利用してキーワードやエラーコードを検索し、より速く解決することをお勧めします。この記事で言及されるパスは通常、環境変数を使用して表現されます（例：**`%localappdata%\VEGAS Pro\`**）。**パステキストを Windows エクスプローラーのアドレスバーにコピー＆ペーストし、`Enter` を押すと、すばやく移動できます。**この記事では、特定のバージョンの特定のビルド番号（例：`23 build 302`、`302` がビルド番号）に言及することがあります。VEGAS 起動時の読み込み画面で現在のビルド番号を確認できます。**<u>下線</u>** でマークされたコンテンツにはハイパーリンクが含まれています。
@ko - 이 가이드를 참조할 때는 목차를 사용하여 문제 카테고리를 찾고, **`Ctrl + F`** 검색 기능을 활용하여 키워드나 오류 코드를 검색하여 더 빠르게 해결하십시오. 이 글에서 언급된 경로는 일반적으로 환경 변수를 사용하여 표현됩니다(예: **`%localappdata%\VEGAS Pro\`**). **경로 텍스트를 Windows 파일 탐색기의 주소 표시줄에 복사하여 붙여넣고 `Enter`를 누르면 빠르게 이동할 수 있습니다.** 이 글에서는 특정 버전의 특정 빌드 번호를 언급할 때가 있습니다(예: `23 build 302`, 여기서 `302`는 빌드 번호). VEGAS 시작 시 로딩 화면에서 현재 빌드 번호를 볼 수 있습니다. **<u>밑줄</u>**로 표시된 내용에는 하이퍼링크가 포함되어 있습니다.
@de - Bei der Nutzung dieses Leitfadens wird empfohlen, das Inhaltsverzeichnis zu verwenden, um Ihre Problemkategorie zu finden, und die **`Strg + F`**-Suchfunktion zu nutzen, um nach Schlüsselwörtern oder Fehlercodes zu suchen, um Probleme schneller zu lösen. In diesem Artikel erwähnte Pfade werden im Allgemeinen mit Umgebungsvariablen ausgedrückt, z. B. **`%localappdata%\VEGAS Pro\`**. **Sie können den Pfadtext in die Adressleiste des Windows-Explorers kopieren, einfügen und `Enter` drücken, um schnell dorthin zu navigieren.** Dieser Artikel erwähnt manchmal bestimmte Build-Nummern für bestimmte Versionen, z. B. `23 Build 302`, wobei `302` die Build-Nummer ist. Die aktuelle Build-Nummer können Sie auf dem Ladebildschirm sehen, wenn VEGAS startet. Inhalte, die mit **<u>Unterstreichung</u>** markiert sind, enthalten Hyperlinks.
@fr - Lors de la consultation de ce guide, il est recommandé d'utiliser la table des matières pour trouver votre catégorie de problème et d'utiliser la fonction de recherche **`Ctrl + F`** pour rechercher des mots-clés ou des codes d'erreur pour une résolution plus rapide. Les chemins mentionnés dans cet article sont généralement exprimés à l'aide de variables d'environnement, par exemple **`%localappdata%\VEGAS Pro\`**. **Vous pouvez copier-coller le texte du chemin dans la barre d'adresse de l'Explorateur de fichiers Windows et appuyer sur `Entrée` pour naviguer rapidement.** Cet article mentionne parfois des numéros de build spécifiques pour certaines versions, par ex. `23 build 302`, où `302` est le numéro de build. Vous pouvez voir le numéro de build actuel sur l'écran de chargement au démarrage de VEGAS. Le contenu marqué d'un **<u>soulignement</u>** contient des hyperliens.
@ru - При использовании данного руководства рекомендуется использовать оглавление для поиска категории вашей проблемы и использовать функцию поиска **`Ctrl + F`** для поиска ключевых слов или кодов ошибок для более быстрого решения. Пути, упомянутые в этой статье, обычно выражены с использованием переменных окружения, например, **`%localappdata%\VEGAS Pro\`**. **Вы можете скопировать и вставить текст пути в адресную строку проводника Windows и нажать `Enter` для быстрой навигации.** В статье иногда упоминаются конкретные номера сборок для определенных версий, например, `23 build 302`, где `302` — это номер сборки. Вы можете увидеть текущий номер сборки на экране загрузки при запуске VEGAS. Содержимое, помеченное **<u>подчеркиванием</u>**, содержит гиперссылки.

@en - This article is licensed under the **CC BY-NC-SA 4.0** license. When reproducing, adapting, or using this content in any form, please adhere to the principles of **Attribution, NonCommercial, and ShareAlike**. For details, please read the [Full License Text](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en).
@zh - 本文采用 **CC BY-NC-SA 4.0** 协议进行授权。转载、演绎或进行任何形式的使用时，请务必遵守 **署名、非商业、相同方式共享** 的原则。详情请阅读 [许可协议全文](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans)。
@zh-hant - 本文採用 **CC BY-NC-SA 4.0** 協定進行授權。轉載、演繹或進行任何形式的使用時，請務必遵守 **署名、非商業、相同方式共用** 的原則。詳情請閱讀 [許可協定全文](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hant)。
@ja - この記事は **CC BY-NC-SA 4.0** ライセンスの下でライセンスされています。このコンテンツをいかなる形式で複製、改変、または使用する場合も、**表示、非営利、継承**の原則を遵守してください。詳細については、[ライセンス全文](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.ja)をお読みください。
@ko - 이 글은 **CC BY-NC-SA 4.0** 라이선스에 따라 사용이 허가됩니다. 이 내용을 어떠한 형태로든 복제, 개작 또는 사용할 때는 **저작자 표시, 비영리, 동일조건변경허락** 원칙을 준수해 주십시오. 자세한 내용은 [전체 라이선스 텍스트](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.ko)를 읽어보십시오.
@de - Dieser Artikel ist unter der **CC BY-NC-SA 4.0**-Lizenz lizenziert. Wenn Sie diesen Inhalt in irgendeiner Form reproduzieren, anpassen oder verwenden, beachten Sie bitte die Grundsätze **Namensnennung, Nicht kommerziell, Weitergabe unter gleichen Bedingungen**. Details finden Sie im [vollen Lizenztext](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de).
@fr - Cet article est sous licence **CC BY-NC-SA 4.0**. Lors de la reproduction, l'adaptation ou l'utilisation de ce contenu sous quelque forme que ce soit, veuillez respecter les principes **Paternité, Pas d'Utilisation Commerciale et Partage dans les Mêmes Conditions**. Pour plus de détails, veuillez lire le [Texte intégral de la licence](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr).
@ru - Эта статья распространяется под лицензией **CC BY-NC-SA 4.0**. При воспроизведении, адаптации или использовании этого контента в любой форме, пожалуйста, соблюдайте принципы **Указания авторства, Некоммерческого использования и Сохранения условий**. Подробнее читайте в [полном тексте лицензии](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.ru).

<br>

@en ## I. About VEGAS Preferences Optimization
@zh ## 一、关于 Vegas 首选项优化
@zh-hant ## 一、關於 Vegas 首選項優化
@ja ## 一、VEGAS プリファレンス最適化について
@ko ## I. VEGAS 환경 설정 최적화에 관하여
@de ## I. Über die Optimierung der VEGAS-Einstellungen
@fr ## I. À propos de l'optimisation des préférences VEGAS
@ru ## I. Об оптимизации настроек VEGAS

@en **"Optimization guides" are no longer listed here because there is no guarantee they provide positive optimization for VEGAS Pro, and some information may be outdated and misleading.**
@zh **这里不再列出所谓的“优化方案”，因为这些“优化方案”是没法保证一定对 VEGAS Pro 有正面优化的，并且有些信息可能已经过时，具有误导性。**
@zh-hant **這裡不再列出所謂的“優化方案”，因為這些“優化方案”是沒法保證一定對 VEGAS Pro 有正面優化的，並且有些資訊可能已經過時，具有誤導性。**
@ja **「最適化ガイド」は、VEGAS Pro に必ずしも正の最適化をもたらす保証がなく、一部の情報が古く、誤解を招く可能性があるため、ここには掲載しません。**
@ko **"최적화 가이드"는 더 이상 여기에 나열되지 않습니다. VEGAS Pro에 긍정적인 최적화를 제공한다는 보장이 없으며, 일부 정보는 오래되어 오해의 소지가 있을 수 있기 때문입니다.**
@de **"Optimierungsleitfäden" werden hier nicht mehr aufgelistet, da nicht garantiert werden kann, dass sie eine positive Optimierung für VEGAS Pro bieten, und einige Informationen möglicherweise veraltet und irreführend sind.**
@fr **Les "guides d'optimisation" ne sont plus listés ici car il n'y a aucune garantie qu'ils apportent une optimisation positive pour VEGAS Pro, et certaines informations peuvent être obsolètes et trompeuses.**
@ru **«Руководства по оптимизации» больше не перечислены здесь, потому что нет гарантии, что они обеспечивают положительную оптимизацию для VEGAS Pro, и некоторая информация может быть устаревшей и вводящей в заблуждение.**

@en **According to official guidance, it is best to keep the default settings, as they are considered optimal for the average user.**
@zh **根据官方的说法，请尽量保持默认设置，默认设置是他们认为最适合普通用户的。**
@zh-hant **根據官方的說法，請盡量保持預設設定，預設設定是他們認為最適合普通使用者的。**
@ja **公式の案内によると、デフォルト設定を維持することが、一般ユーザーにとって最適とみなされています。**
@ko **공식 안내에 따르면, 평균 사용자에게 가장 적합하다고 간주되는 기본 설정을 유지하는 것이 가장 좋습니다.**
@de **Laut offiziellen Angaben ist es am besten, die Standardeinstellungen beizubehalten, da diese für den durchschnittlichen Benutzer als optimal angesehen werden.**
@fr **Selon les indications officielles, il est préférable de conserver les paramètres par défaut, car ils sont considérés comme optimaux pour l'utilisateur moyen.**
@ru **Согласно официальным рекомендациям, лучше всего сохранять настройки по умолчанию, так как они считаются оптимальными для среднего пользователя.**

@en **There is no one-size-fits-all preference setting. Even if you find so-called "optimization guides" elsewhere, modify them according to your specific situation.**
@zh **不存在能够适配所有电脑的首选项设置，所以即使你在其他地方找到了那些所谓的“优化方案”，也请根据你的具体情况更改。**
@zh-hant **不存在能夠適配所有電腦的首選項設定，所以即使你在其他地方找到了那些所謂的“優化方案”，也請根據你的具體情況更改。**
@ja **万能なプリファレンス設定はありません。他の場所でいわゆる「最適化ガイド」を見つけても、あなたの特定の状況に応じて変更してください。**
@ko **모든 경우에 적합한 환경 설정은 없습니다. 다른 곳에서 소위 "최적화 가이드"를 찾더라도 특정 상황에 맞게 수정하십시오.**
@de **Es gibt keine Einstellung, die für alle passt. Selbst wenn Sie anderswo sogenannte "Optimierungsleitfäden" finden, passen Sie diese an Ihre spezifische Situation an.**
@fr **Il n'existe pas de paramètre de préférences unique qui convienne à tous. Même si vous trouvez ailleurs des soi-disant "guides d'optimisation", modifiez-les en fonction de votre situation spécifique.**
@ru **Не существует универсальных настроек. Даже если вы найдете так называемые «руководства по оптимизации» в других местах, изменяйте их в соответствии с вашей конкретной ситуацией.**

@en **Additionally, I do not recommend directly using registry files or preference files from others that claim to be "optimized preferences."**
@zh **同时，我也不建议直接使用别人已经改过的、那种所谓的“优化首选项”的注册表或者首选项设置文件。**
@zh-hant **同時，我也不建議直接使用別人已經改過的、那種所謂的“優化首選項”的登錄檔或者首選項設定檔案。**
@ja **さらに、他の人が「最適化されたプリファレンス」と称するレジストリファイルやプリファレンスファイルを直接使用することはお勧めしません。**
@ko **또한, 직접적으로 타인이 "최적화된 환경설정"이라고 주장하는 레지스트리 파일이나 환경설정 파일을 사용하는 것은 권장하지 않습니다.**
@de **Außerdem empfehle ich nicht, direkt Registrierungsdateien oder Einstellungsdateien von anderen zu verwenden, die als "optimierte Einstellungen" bezeichnet werden.**
@fr **De plus, je ne recommande pas d'utiliser directement des fichiers de registre ou des fichiers de préférences d'autres personnes prétendument "optimisés".**
@ru **Кроме того, я не рекомендую напрямую использовать файлы реестра или файлы настроек от других лиц, которые претендуют на звание «оптимизированных настроек».**

<br>

@en ## II. About VEGAS Preferences, Cache Directory, Presets, etc.
@zh ## 二、关于 Vegas 首选项和缓存目录、预设等的说明
@zh-hant ## 二、關於 Vegas 首選項和快取目錄、預設等的說明
@ja ## 二、VEGAS プリファレンス、キャッシュディレクトリ、プリセットなどについて
@ko ## II. VEGAS 환경설정, 캐시 디렉토리, 프리셋 등에 관하여
@de ## II. Über VEGAS-Einstellungen, Cache-Verzeichnis, Voreinstellungen usw.
@fr ## II. À propos des préférences VEGAS, du répertoire de cache, des préréglages, etc.
@ru ## II. О настройках VEGAS, кэш-директории, пресетах и т.д.

@en ### VEGAS Preferences and Cache Directory
@zh ### Vegas 首选项和缓存目录
@zh-hant ### Vegas 首選項和快取目錄
@ja ### VEGAS プリファレンスとキャッシュディレクトリ
@ko ### VEGAS 환경설정 및 캐시 디렉토리
@de ### VEGAS-Einstellungen und Cache-Verzeichnis
@fr ### Répertoire des préférences et du cache VEGAS
@ru ### Настройки VEGAS и кэш-директория

@en Note: The following paths use **environment variable notation `% %`**. You can copy and paste the path text into the address bar of Windows File Explorer and press `Enter` to quickly navigate. Actual paths are also provided for reference.
@zh 注意，以下路径均使用了**环境变量表示法 `% %`**。将路径文本复制粘贴到 Windows 文件资源管理器的地址栏后按 `Enter` 键，即可实现快速跳转。也附上了实际路径可供参考。
@zh-hant 注意，以下路徑均使用了**環境變數表示法 `% %`**。將路徑文字複製貼上到 Windows 檔案總管的位址列後按 `Enter` 鍵，即可實現快速跳轉。也附上了實際路徑可供參考。
@ja 注：以下のパスは**環境変数表記 `% %`** を使用しています。パステキストを Windows エクスプローラーのアドレスバーにコピー＆ペーストし、`Enter` を押すと、すばやく移動できます。参考までに実際のパスも記載します。
@ko 참고: 다음 경로는 **환경 변수 표기법 `% %`** 을 사용합니다. 경로 텍스트를 Windows 파일 탐색기의 주소 표시줄에 복사하여 붙여넣고 `Enter`를 누르면 빠르게 이동할 수 있습니다. 실제 경로도 참고용으로 제공됩니다.
@de Hinweis: Die folgenden Pfade verwenden **die Umgebungsvariablen-Schreibweise `% %`**. Sie können den Pfadtext in die Adressleiste des Windows-Explorers kopieren, einfügen und `Enter` drücken, um schnell dorthin zu navigieren. Tatsächliche Pfade werden ebenfalls als Referenz angegeben.
@fr Note : Les chemins suivants utilisent la **notation de variable d'environnement `% %`**. Vous pouvez copier-coller le texte du chemin dans la barre d'adresse de l'Explorateur de fichiers Windows et appuyer sur `Entrée` pour naviguer rapidement. Les chemins réels sont également fournis pour référence.
@ru Примечание: В следующих путях используется **нотация переменных окружения `% %`**. Вы можете скопировать и вставить текст пути в адресную строку проводника Windows и нажать `Enter` для быстрой навигации. Также предоставлены фактические пути для справки.

@en - Main VEGAS cache directory: **`%localappdata%\VEGAS Pro\`**
@zh - Vegas 的主要缓存目录：**`%localappdata%\VEGAS Pro\`**
@zh-hant - Vegas 的主要快取目錄：**`%localappdata%\VEGAS Pro\`**
@ja - メイン VEGAS キャッシュディレクトリ： **`%localappdata%\VEGAS Pro\`**
@ko - 주요 VEGAS 캐시 디렉토리: **`%localappdata%\VEGAS Pro\`**
@de - Haupt-Cache-Verzeichnis von VEGAS: **`%localappdata%\VEGAS Pro\`**
@fr - Répertoire de cache principal de VEGAS : **`%localappdata%\VEGAS Pro\`**
@ru - Основная кэш-директория VEGAS: **`%localappdata%\VEGAS Pro\`**

@en   - i.e., `C:\Users\<Username>\AppData\Local\VEGAS Pro\`
@zh   - 即：`C:\Users\<用户名>\AppData\Local\VEGAS Pro\`
@zh-hant   - 即：`C:\Users\<使用者名稱>\AppData\Local\VEGAS Pro\`
@ja   - 例： `C:\Users\<ユーザー名>\AppData\Local\VEGAS Pro\`
@ko   - 즉, `C:\Users\<사용자 이름>\AppData\Local\VEGAS Pro\`
@de   - D. h. `C:\Users\<Benutzername>\AppData\Local\VEGAS Pro\`
@fr   - C'est-à-dire `C:\Users\<NomUtilisateur>\AppData\Local\VEGAS Pro\`
@ru   - т.е. `C:\Users\<Имя_пользователя>\AppData\Local\VEGAS Pro\`

@en   - Different versions are stored in separate folders for independence, e.g., **`%localappdata%\VEGAS Pro\23.0\`**.
@zh   - 按不同版本会分不同文件夹存储，实现各版本独立，比如 **`%localappdata%\VEGAS Pro\23.0\`**。
@zh-hant   - 按不同版本會分不同資料夾儲存，實現各版本獨立，比如 **`%localappdata%\VEGAS Pro\23.0\`**。
@ja   - 異なるバージョンは独立するために別々のフォルダに保存されます（例： **`%localappdata%\VEGAS Pro\23.0\`**）。
@ko   - 다른 버전은 독립성을 위해 별도의 폴더에 저장됩니다(예: **`%localappdata%\VEGAS Pro\23.0\`**).
@de   - Unterschiedliche Versionen werden in separaten Ordnern für Unabhängigkeit gespeichert, z. B. **`%localappdata%\VEGAS Pro\23.0\`**.
@fr   - Différentes versions sont stockées dans des dossiers séparés pour l'indépendance, par ex. **`%localappdata%\VEGAS Pro\23.0\`**.
@ru   - Разные версии хранятся в отдельных папках для независимости, например, **`%localappdata%\VEGAS Pro\23.0\`**.

<br>

@en For VEGAS preferences:
@zh 对于 Vegas 首选项：
@zh-hant 對於 Vegas 首選項：
@ja VEGAS プリファレンスについて：
@ko VEGAS 환경설정의 경우:
@de Für VEGAS-Einstellungen:
@fr Pour les préférences VEGAS :
@ru Для настроек VEGAS:

@en - Older versions (VP18 and earlier) are saved in the registry path **`HKEY_CURRENT_USER\Software\Sony Creative Software\VEGAS Pro\<version>\Metrics\Application\`**, which is difficult to edit manually. For backup, you can use the Registry Editor (`regedit`) to manually back up all contents under that registry path.
@zh - 旧版（18 及以前）保存在注册表路径 **`HKEY_CURRENT_USER\Software\Sony Creative Software\VEGAS Pro\<版本号>\Metrics\Application\`** 内，比较难手动编辑。备份时，可以通过注册表编辑器 `regedit` 工具，手动备份该注册表路径的所有内容。
@zh-hant - 舊版（18 及以前）儲存在登錄檔路徑 **`HKEY_CURRENT_USER\Software\Sony Creative Software\VEGAS Pro\<版本號>\Metrics\Application\`** 內，比較難手動編輯。備份時，可以通過登錄檔編輯器 `regedit` 工具，手動備份該登錄檔路徑的所有內容。
@ja - 旧バージョン（VP18 以前）はレジストリパス **`HKEY_CURRENT_USER\Software\Sony Creative Software\VEGAS Pro\<バージョン>\Metrics\Application\`** に保存されており、手動編集は困難です。バックアップには、レジストリエディター（`regedit`）を使用してそのレジストリパス下のすべての内容を手動でバックアップできます。
@ko - 구버전(VP18 및 이전)은 레지스트리 경로 **`HKEY_CURRENT_USER\Software\Sony Creative Software\VEGAS Pro\<버전>\Metrics\Application\`** 에 저장되며, 수동 편집이 어렵습니다. 백업을 위해 레지스트리 편집기(`regedit`)를 사용하여 해당 레지스트리 경로 아래의 모든 내용을 수동으로 백업할 수 있습니다.
@de - Ältere Versionen (VP18 und früher) werden im Registrierungspfad **`HKEY_CURRENT_USER\Software\Sony Creative Software\VEGAS Pro\<Version>\Metrics\Application\`** gespeichert, was manuell schwer zu bearbeiten ist. Für ein Backup können Sie den Registrierungs-Editor (`regedit`) verwenden, um alle Inhalte unter diesem Registrierungspfad manuell zu sichern.
@fr - Les anciennes versions (VP18 et antérieures) sont enregistrées dans le chemin de registre **`HKEY_CURRENT_USER\Software\Sony Creative Software\VEGAS Pro\<version>\Metrics\Application\`**, ce qui est difficile à éditer manuellement. Pour la sauvegarde, vous pouvez utiliser l'Éditeur du Registre (`regedit`) pour sauvegarder manuellement tout le contenu sous ce chemin de registre.
@ru - Старые версии (VP18 и ранее) сохраняются в пути реестра **`HKEY_CURRENT_USER\Software\Sony Creative Software\VEGAS Pro\<версия>\Metrics\Application\`**, что затрудняет ручное редактирование. Для резервного копирования вы можете использовать редактор реестра (`regedit`), чтобы вручную создать резервную копию всего содержимого по этому пути реестра.

@en - Newer versions (VP19 and later) are saved in the cache directory file **`%localappdata%\VEGAS Pro\<version>\persist.prefs`**. The file content is in `XML` format, making it easier to edit manually. You can copy this file for backup.
@zh - 新版（19 及以后）保存在缓存目录 **`%localappdata%\VEGAS Pro\<版本号>\persist.prefs`** 文件内，文件内容格式为 `XML`，容易手动编辑。可以复制该文件以备份。
@zh-hant - 新版（19 及以後）儲存在快取目錄 **`%localappdata%\VEGAS Pro\<版本號>\persist.prefs`** 檔案內，檔案內容格式為 `XML`，容易手動編輯。可以複製該檔案以備份。
@ja - 新バージョン（VP19 以降）はキャッシュディレクトリファイル **`%localappdata%\VEGAS Pro\<バージョン>\persist.prefs`** に保存されます。ファイル内容は `XML` 形式で、手動編集が容易です。このファイルをコピーしてバックアップできます。
@ko - 신버전(VP19 이후)은 캐시 디렉토리 파일 **`%localappdata%\VEGAS Pro\<버전>\persist.prefs`** 에 저장됩니다. 파일 내용은 `XML` 형식으로, 수동 편집이 더 쉽습니다. 이 파일을 복사하여 백업할 수 있습니다.
@de - Neuere Versionen (VP19 und später) werden in der Cache-Verzeichnisdatei **`%localappdata%\VEGAS Pro\<Version>\persist.prefs`** gespeichert. Der Dateiinhalt ist im `XML`-Format, was die manuelle Bearbeitung erleichtert. Sie können diese Datei zur Sicherung kopieren.
@fr - Les nouvelles versions (VP19 et ultérieures) sont enregistrées dans le fichier du répertoire de cache **`%localappdata%\VEGAS Pro\<version>\persist.prefs`**. Le contenu du fichier est au format `XML`, ce qui le rend plus facile à éditer manuellement. Vous pouvez copier ce fichier pour sauvegarde.
@ru - Новые версии (VP19 и позже) сохраняются в файле кэш-директории **`%localappdata%\VEGAS Pro\<версия>\persist.prefs`**. Содержимое файла в формате `XML`, что облегчает ручное редактирование. Вы можете скопировать этот файл для резервного копирования.

<br>

@en Other directories containing VEGAS-related settings and preset files for manual backup:
@zh 其他的跟 Vegas 有关的一些设置和预设文件目录，可供自行备份：
@zh-hant 其他的跟 Vegas 有關的一些設定和預設檔案目錄，可供自行備份：
@ja 手動バックアップ用の VEGAS 関連設定およびプリセットファイルを含むその他のディレクトリ：
@ko VEGAS 관련 설정 및 수동 백업을 위한 프리셋 파일이 포함된 다른 디렉토리:
@de Andere Verzeichnisse mit VEGAS-bezogenen Einstellungen und Voreinstellungsdateien für manuelle Sicherungen:
@fr Autres répertoires contenant des paramètres et des fichiers de préréglages VEGAS pour sauvegarde manuelle :
@ru Другие каталоги, содержащие связанные с VEGAS настройки и файлы пресетов для ручного резервного копирования:

@en - Saved FX presets, plugin chain presets, FX favorites, render templates, etc.: `%appdata%\VEGAS\`
@zh - 自己保存的 FX 预设、插件链预设、FX 收藏夹、渲染模板等：`%appdata%\VEGAS\`
@zh-hant - 自己儲存的 FX 預設、外掛程式鏈預設、FX 收藏夾、算繪範本等：`%appdata%\VEGAS\`
@ja - 保存した FX プリセット、プラグインチェーンプリセット、FX お気に入り、レンダーテンプレートなど： `%appdata%\VEGAS\`
@ko - 저장된 FX 프리셋, 플러그인 체인 프리셋, FX 즐겨찾기, 렌더링 템플릿 등: `%appdata%\VEGAS\`
@de - Gespeicherte FX-Voreinstellungen, Plugin-Ketten-Voreinstellungen, FX-Favoriten, Rendervorlagen usw.: `%appdata%\VEGAS\`
@fr - Préréglages FX enregistrés, préréglages de chaînes de plugins, FX favoris, modèles de rendu, etc. : `%appdata%\VEGAS\`
@ru - Сохраненные пресеты FX, пресеты цепочек плагинов, избранные FX, шаблоны рендеринга и т.д.: `%appdata%\VEGAS\`

@en   - i.e., `C:\Users\<Username>\AppData\Roaming\VEGAS\`
@zh   - 即：`C:\Users\<用户名>\AppData\Roaming\VEGAS\`
@zh-hant   - 即：`C:\Users\<使用者名稱>\AppData\Roaming\VEGAS\`
@ja   - 例： `C:\Users\<ユーザー名>\AppData\Roaming\VEGAS\`
@ko   - 즉, `C:\Users\<사용자 이름>\AppData\Roaming\VEGAS\`
@de   - D. h. `C:\Users\<Benutzername>\AppData\Roaming\VEGAS\`
@fr   - C'est-à-dire `C:\Users\<NomUtilisateur>\AppData\Roaming\VEGAS\`
@ru   - т.е. `C:\Users\<Имя_пользователя>\AppData\Roaming\VEGAS\`

@en - VEGAS window layouts, keyboard settings, etc.: `%appdata%\VEGAS Pro\`
@zh - Vegas 的窗口布局设置、键盘设置等：`%appdata%\VEGAS Pro\`
@zh-hant - Vegas 的視窗佈局設定、鍵盤設定等：`%appdata%\VEGAS Pro\`
@ja - VEGAS ウィンドウレイアウト、キーボード設定など： `%appdata%\VEGAS Pro\`
@ko - VEGAS 창 레이아웃, 키보드 설정 등: `%appdata%\VEGAS Pro\`
@de - VEGAS-Fensterlayouts, Tastatureinstellungen usw.: `%appdata%\VEGAS Pro\`
@fr - Dispositions de fenêtres VEGAS, paramètres clavier, etc. : `%appdata%\VEGAS Pro\`
@ru - Расположение окон VEGAS, настройки клавиатуры и т.д.: `%appdata%\VEGAS Pro\`

@en   - i.e., `C:\Users\<Username>\AppData\Roaming\VEGAS Pro\`
@zh   - 即：`C:\Users\<用户名>\AppData\Roaming\VEGAS Pro\`
@zh-hant   - 即：`C:\Users\<使用者名稱>\AppData\Roaming\VEGAS Pro\`
@ja   - 例： `C:\Users\<ユーザー名>\AppData\Roaming\VEGAS Pro\`
@ko   - 즉, `C:\Users\<사용자 이름>\AppData\Roaming\VEGAS Pro\`
@de   - D. h. `C:\Users\<Benutzername>\AppData\Roaming\VEGAS Pro\`
@fr   - C'est-à-dire `C:\Users\<NomUtilisateur>\AppData\Roaming\VEGAS Pro\`
@ru   - т.е. `C:\Users\<Имя_пользователя>\AppData\Roaming\VEGAS Pro\`

@en - Saved OFX plugin FX presets: `%userprofile%\Documents\OFX Presets\`
@zh - 自己保存的 OFX 插件的 FX 预设：`%userprofile%\Documents\OFX Presets\`
@zh-hant - 自己儲存的 OFX 外掛程式的 FX 預設：`%userprofile%\Documents\OFX Presets\`
@ja - 保存した OFX プラグイン FX プリセット： `%userprofile%\Documents\OFX Presets\`
@ko - 저장된 OFX 플러그인 FX 프리셋: `%userprofile%\Documents\OFX Presets\`
@de - Gespeicherte OFX-Plugin-FX-Voreinstellungen: `%userprofile%\Documents\OFX Presets\`
@fr - Préréglages FX de plugins OFX enregistrés : `%userprofile%\Documents\OFX Presets\`
@ru - Сохраненные пресеты FX для плагинов OFX: `%userprofile%\Documents\OFX Presets\`

@en   - i.e., `C:\Users\<Username>\Documents\OFX Presets\`
@zh   - 即：`C:\Users\<用户名>\Documents\OFX Presets\`
@zh-hant   - 即：`C:\Users\<使用者名稱>\Documents\OFX Presets\`
@ja   - 例： `C:\Users\<ユーザー名>\Documents\OFX Presets\`
@ko   - 즉, `C:\Users\<사용자 이름>\Documents\OFX Presets\`
@de   - D. h. `C:\Users\<Benutzername>\Documents\OFX Presets\`
@fr   - C'est-à-dire `C:\Users\<NomUtilisateur>\Documents\OFX Presets\`
@ru   - т.е. `C:\Users\<Имя_пользователя>\Documents\OFX Presets\`

@en   - or OneDrive path: `C:\Users\<Username>\OneDrive\Documents\OFX Presets\`
@zh   - 或者 OneDrive 路径：`C:\Users\<用户名>\OneDrive\Documents\OFX Presets\`
@zh-hant   - 或者 OneDrive 路徑：`C:\Users\<使用者名稱>\OneDrive\Documents\OFX Presets\`
@ja   - または OneDrive パス： `C:\Users\<ユーザー名>\OneDrive\Documents\OFX Presets\`
@ko   - 또는 OneDrive 경로: `C:\Users\<사용자 이름>\OneDrive\Documents\OFX Presets\`
@de   - oder OneDrive-Pfad: `C:\Users\<Benutzername>\OneDrive\Documents\OFX Presets\`
@fr   - ou chemin OneDrive : `C:\Users\<NomUtilisateur>\OneDrive\Documents\OFX Presets\`
@ru   - или путь OneDrive: `C:\Users\<Имя_пользователя>\OneDrive\Documents\OFX Presets\`

@en - Additionally, if your Vegas frequently crashes, it is recommended to check: `%localappdata%\CrashDumps\`
@zh - 另外，如果你的 Vegas 时常发生崩溃，建议检查：`%localappdata%\CrashDumps\`
@zh-hant - 另外，如果你的 Vegas 經常發生崩潰，建議檢查：`%localappdata%\CrashDumps\`
@ja - また、VEGASが頻繁にクラッシュする場合は、以下を確認することをお勧めします：`%localappdata%\CrashDumps\`
@ko - 또한 VEGAS가 자주 충돌하는 경우 다음을 확인하는 것이 좋습니다: `%localappdata%\CrashDumps\`
@de - Wenn Ihr VEGAS außerdem häufig abstürzt, wird empfohlen, Folgendes zu überprüfen: `%localappdata%\CrashDumps\`
@fr - De plus, si votre VEGAS plante fréquemment, il est recommandé de vérifier : `%localappdata%\CrashDumps\`
@ru - Кроме того, если ваш Vegas часто аварийно завершает работу, рекомендуется проверить: `%localappdata%\CrashDumps\`

@en   - i.e., `C:\Users\<Username>\AppData\Local\CrashDumps\`
@zh   - 即：`C:\Users\<用户名>\AppData\Local\CrashDumps\`
@zh-hant   - 即：`C:\Users\<使用者名稱>\AppData\Local\CrashDumps\`
@ja   - 例：`C:\Users\<ユーザー名>\AppData\Local\CrashDumps\`
@ko   - 즉, `C:\Users\<사용자 이름>\AppData\Local\CrashDumps\`
@de   - D.h.: `C:\Users\<Benutzername>\AppData\Local\CrashDumps\`
@fr   - C'est-à-dire : `C:\Users\<Nom d'utilisateur>\AppData\Local\CrashDumps\`
@ru   - т.е. `C:\Users\<Имя_пользователя>\AppData\Local\CrashDumps\`

@en   - Windows saves crash information `.dmp` files here. These crash information files take up a lot of space and are not useful for ordinary users, so they can be deleted directly.
@zh   - Windows 会在这里保存崩溃信息 `.dmp` 文件。这种崩溃信息文件占用比较大，并且对普通用户来说没有什么用，可以直接删除。
@zh-hant   - Windows 會在這裡儲存崩潰資訊 `.dmp` 檔案。這種崩潰資訊檔案佔用空間比較大，並且對一般使用者來說沒有什麼用，可以直接刪除。
@ja   - Windowsはここにクラッシュ情報 `.dmp` ファイルを保存します。この種のクラッシュ情報ファイルは容量が大きく、一般ユーザーにはほとんど役に立ちませんので、直接削除してもかまいません。
@ko   - Windows는 여기에 크래시 정보 `.dmp` 파일을 저장합니다. 이러한 크래시 정보 파일은 용량이 크며 일반 사용자에게는 거의 쓸모가 없으므로 직접 삭제할 수 있습니다.
@de   - Windows speichert hier Absturzinformationen in `.dmp`-Dateien. Diese Absturzinformationsdateien belegen viel Speicherplatz und sind für normale Benutzer nicht nützlich, daher können sie direkt gelöscht werden.
@fr   - Windows enregistre ici les fichiers d'informations de plantage `.dmp`. Ces fichiers d'informations de plantage prennent beaucoup de place et ne sont pas utiles pour les utilisateurs ordinaires, ils peuvent donc être supprimés directement.
@ru   - Windows сохраняет здесь файлы с информацией о сбоях `.dmp`. Эти файлы занимают много места и бесполезны для обычных пользователей, поэтому их можно удалить напрямую.

@en VP13 and earlier versions have cache directories within a Sony folder, e.g., **`%localappdata%\Sony\VEGAS Pro\`**, etc.
@zh vv13 及以下的版本的缓存目录会带 Sony 文件夹，如 **`%localappdata%\Sony\VEGAS Pro\`** 等。
@zh-hant vv13 及以下的版本的快取目錄會帶 Sony 資料夾，如 **`%localappdata%\Sony\VEGAS Pro\`** 等。
@ja VP13 以前のバージョンは、Sony フォルダ内にキャッシュディレクトリがあります（例： **`%localappdata%\Sony\VEGAS Pro\`** など）。
@ko VP13 및 이전 버전은 Sony 폴더 내에 캐시 디렉토리가 있습니다(예: **`%localappdata%\Sony\VEGAS Pro\`** 등).
@de VP13 und frühere Versionen haben Cache-Verzeichnisse innerhalb eines Sony-Ordners, z. B. **`%localappdata%\Sony\VEGAS Pro\`**, usw.
@fr VP13 et versions antérieures ont des répertoires de cache dans un dossier Sony, par ex. **`%localappdata%\Sony\VEGAS Pro\`**, etc.
@ru Версии VP13 и ранее имеют кэш-директории в папке Sony, например, **`%localappdata%\Sony\VEGAS Pro\`** и т.д.

@en **For other important paths, refer to: [https://web.archive.org/web/https://www.vegascreativesoftware.info/us/tutorials/backup-locations-for-all-vegas-pro-templates-presets-and-settings--139290/](https://web.archive.org/web/https://www.vegascreativesoftware.info/us/tutorials/backup-locations-for-all-vegas-pro-templates-presets-and-settings--139290/)**
@zh **有关其他重要位置路径，可参考：[https://web.archive.org/web/https://www.vegascreativesoftware.info/us/tutorials/backup-locations-for-all-vegas-pro-templates-presets-and-settings--139290/](https://web.archive.org/web/https://www.vegascreativesoftware.info/us/tutorials/backup-locations-for-all-vegas-pro-templates-presets-and-settings--139290/)**
@zh-hant **有關其他重要位置路徑，可參考：[https://web.archive.org/web/https://www.vegascreativesoftware.info/us/tutorials/backup-locations-for-all-vegas-pro-templates-presets-and-settings--139290/](https://web.archive.org/web/https://www.vegascreativesoftware.info/us/tutorials/backup-locations-for-all-vegas-pro-templates-presets-and-settings--139290/)**
@ja **その他の重要なパスについては、以下を参照してください： [https://web.archive.org/web/https://www.vegascreativesoftware.info/us/tutorials/backup-locations-for-all-vegas-pro-templates-presets-and-settings--139290/](https://web.archive.org/web/https://www.vegascreativesoftware.info/us/tutorials/backup-locations-for-all-vegas-pro-templates-presets-and-settings--139290/)**
@ko **기타 중요 경로는 다음을 참조하십시오: [https://web.archive.org/web/https://www.vegascreativesoftware.info/us/tutorials/backup-locations-for-all-vegas-pro-templates-presets-and-settings--139290/](https://web.archive.org/web/https://www.vegascreativesoftware.info/us/tutorials/backup-locations-for-all-vegas-pro-templates-presets-and-settings--139290/)**
@de **Für andere wichtige Pfade siehe: [https://web.archive.org/web/https://www.vegascreativesoftware.info/us/tutorials/backup-locations-for-all-vegas-pro-templates-presets-and-settings--139290/](https://web.archive.org/web/https://www.vegascreativesoftware.info/us/tutorials/backup-locations-for-all-vegas-pro-templates-presets-and-settings--139290/)**
@fr **Pour d'autres chemins importants, référez-vous à : [https://web.archive.org/web/https://www.vegascreativesoftware.info/us/tutorials/backup-locations-for-all-vegas-pro-templates-presets-and-settings--139290/](https://web.archive.org/web/https://www.vegascreativesoftware.info/us/tutorials/backup-locations-for-all-vegas-pro-templates-presets-and-settings--139290/)**
@ru **Для других важных путей см.: [https://web.archive.org/web/https://www.vegascreativesoftware.info/us/tutorials/backup-locations-for-all-vegas-pro-templates-presets-and-settings--139290/](https://web.archive.org/web/https://www.vegascreativesoftware.info/us/tutorials/backup-locations-for-all-vegas-pro-templates-presets-and-settings--139290/)**

<br>

@en ### Using, Importing, and Exporting VEGAS Plugin Chain Presets
@zh ### Vegas 插件链预设的使用、导入和导出
@zh-hant ### Vegas 外掛程式鏈預設的使用、匯入和匯出
@ja ### VEGAS プラグインチェーンプリセットの使用、インポート、エクスポート
@ko ### VEGAS 플러그인 체인 프리셋 사용, 가져오기 및 내보내기
@de ### Verwenden, Importieren und Exportieren von VEGAS-Plugin-Ketten-Voreinstellungen
@fr ### Utilisation, importation et exportation des préréglages de chaînes de plugins VEGAS
@ru ### Использование, импорт и экспорт пресетов цепочек плагинов VEGAS

@en Install and use  `Sony Preset Manager`.
@zh 安装 `索尼预设管理器`。
@zh-hant 安裝 `索尼預設管理器`。
@ja `Sony Preset Manager` をインストールして使用します。
@ko `Sony Preset Manager`를 설치하고 사용하십시오.
@de Installieren und verwenden Sie den `Sony Preset Manager`.
@fr Installez et utilisez `Sony Preset Manager`.
@ru Установите и используйте `Sony Preset Manager`.

@en   - Download link: https://web.archive.org/web/20160826164938/http://dspcdn.sonycreativesoftware.com/current/extras/presetmngr20k.exe
@zh   - 下载链接：https://web.archive.org/web/20160826164938/http://dspcdn.sonycreativesoftware.com/current/extras/presetmngr20k.exe
@zh-hant   - 下載連結：https://web.archive.org/web/20160826164938/http://dspcdn.sonycreativesoftware.com/current/extras/presetmngr20k.exe
@ja   - ダウンロードリンク： https://web.archive.org/web/20160826164938/http://dspcdn.sonycreativesoftware.com/current/extras/presetmngr20k.exe
@ko   - 다운로드 링크: https://web.archive.org/web/20160826164938/http://dspcdn.sonycreativesoftware.com/current/extras/presetmngr20k.exe
@de   - Download-Link: https://web.archive.org/web/20160826164938/http://dspcdn.sonycreativesoftware.com/current/extras/presetmngr20k.exe
@fr   - Lien de téléchargement : https://web.archive.org/web/20160826164938/http://dspcdn.sonycreativesoftware.com/current/extras/presetmngr20k.exe
@ru   - Ссылка для скачивания: https://web.archive.org/web/20160826164938/http://dspcdn.sonycreativesoftware.com/current/extras/presetmngr20k.exe

<br>

@en ### Accessing VEGAS Internal Preferences
@zh ### Vegas 内部首选项的进入方法
@zh-hant ### Vegas 內部首選項的進入方法
@ja ### VEGAS 内部プリファレンスへのアクセス
@ko ### VEGAS 내부 환경설정 접근
@de ### Auf die internen VEGAS-Einstellungen zugreifen
@fr ### Accéder aux préférences internes VEGAS
@ru ### Доступ к внутренним настройкам VEGAS

@en - VP18+: Hold **`Shift`**, then go to the top menu **`Options -> Internal`**.
@zh - vv18 及以上：按住 **`Shift`**，进入上方菜单栏的 **`选项 -> 内部`**。
@zh-hant - vv18 及以上：按住 **`Shift`**，進入上方選單列的 **`選項 -> 內部`**。
@ja - VP18+： **`Shift`** を押しながら、上部メニューの **`オプション -> 内部`** を選択。
@ko - VP18+: **`Shift`** 키를 누른 상태로 상단 메뉴 **`옵션 -> 내부`** 로 이동합니다.
@de - VP18+: Halten Sie **`Umschalt`** gedrückt, dann gehen Sie zum oberen Menü **`Optionen -> Intern`**.
@fr - VP18+ : Maintenez **`Maj`**, puis allez dans le menu supérieur **`Options -> Interne`**.
@ru - VP18+: Удерживайте **`Shift`**, затем перейдите в верхнее меню **`Опции (Options) -> Внутренние (Internal)`**.

@en - VP17-: Hold **`Shift`**, then go to the top menu **`Options -> Preferences`**, switch to the **`Internal`** tab.
@zh - vv17 及以下：按住 **`Shift`**，进入上方菜单栏的 **`选项 -> 首选项`**，切换到 **`内部`** 选项卡。
@zh-hant - vv17 及以下：按住 **`Shift`**，進入上方選單列的 **`選項 -> 首選項`**，切換到 **`內部`** 選項卡。
@ja - VP17-： **`Shift`** を押しながら、上部メニューの **`オプション -> プリファレンス`** を選択し、 **`内部`** タブに切り替えます。
@ko - VP17-: **`Shift`** 키를 누른 상태로 상단 메뉴 **`옵션 -> 환경설정`** 으로 이동한 후 **`내부`** 탭으로 전환합니다.
@de - VP17-: Halten Sie **`Umschalt`** gedrückt, dann gehen Sie zum oberen Menü **`Optionen -> Einstellungen`**, wechseln Sie zum Tab **`Intern`**.
@fr - VP17- : Maintenez **`Maj`**, puis allez dans le menu supérieur **`Options -> Préférences`**, passez à l'onglet **`Interne`**.
@ru - VP17-: Удерживайте **`Shift`**, затем перейдите в верхнее меню **`Опции (Options) -> Настройки (Preferences)`**, переключитесь на вкладку **`Внутренние (Internal)`**.

<br>

@en ## III. Solutions for Crashes, Freezes, Error Pop-ups Caused by Bugs
@zh ## 三、由某些 bug 导致的崩溃卡死、弹报错等问题的解决办法
@zh-hant ## 三、由某些 bug 導致的崩潰當機、彈報錯等問題的解決辦法
@ja ## 三、バグによるクラッシュ、フリーズ、エラーポップアップの解決策
@ko ## III. 버그로 인한 크래시, 정지, 오류 팝업에 대한 해결책
@de ## III. Lösungen für Abstürze, Einfrieren, Fehlermeldungen durch Bugs
@fr ## III. Solutions pour les plantages, blocages, fenêtres d'erreur causés par des bugs
@ru ## III. Решения для сбоев, зависаний, всплывающих окон с ошибками, вызванных ошибками

@en (The solutions provided here are general troubleshooting steps. They may not solve every problem.)
@zh （本段提供的解决办法属于万金油，遇到问题就可以试一下，并且不保证一定能解决问题。）
@zh-hant （本段提供的解決辦法屬於萬金油，遇到問題就可以試一下，並且不保證一定能解決問題。）
@ja （ここで提供される解決策は一般的なトラブルシューティング手順です。すべての問題を解決するわけではありません。）
@ko (여기 제공된 해결책은 일반적인 문제 해결 단계입니다. 모든 문제를 해결하지는 않을 수 있습니다.)
@de (Die hier bereitgestellten Lösungen sind allgemeine Fehlerbehandlungsschritte. Sie lösen möglicherweise nicht jedes Problem.)
@fr (Les solutions fournies ici sont des étapes de dépannage générales. Elles ne résoudront pas nécessairement tous les problèmes.)
@ru (Представленные здесь решения являются общими шагами по устранению неполадок. Они могут не решить каждую проблему.)

@en ### 1. Disable GPU Acceleration
@zh ### 1. 关闭 GPU 加速
@zh-hant ### 1. 關閉 GPU 加速
@ja ### 1. GPU アクセラレーションを無効にする
@ko ### 1. GPU 가속 비활성화
@de ### 1. GPU-Beschleunigung deaktivieren
@fr ### 1. Désactiver l'accélération GPU
@ru ### 1. Отключить аппаратное ускорение GPU

@en **`Preferences -> Video`**, under **`GPU acceleration of video processing`**, select **`Off`**. This option primarily manages whether video FX use GPU acceleration. While GPU acceleration can make FX preview and rendering smoother, it has **more bugs in lower VEGAS versions and is prone to causing crashes**. When troubleshooting, first try **disabling GPU acceleration**. For newer VEGAS versions (e.g., `22 build 250`), it's still recommended to enable it if your GPU performance is good and there are no other issues.
@zh **`首选项 -> 视频`**，在 **`视频处理的 GPU 加速`** 这一栏中选择 **`关闭`**。这个选项主要用来管理视频特效是否使用 GPU 加速，虽然在 GPU 加速的加持下，特效的预览和渲染速度会流畅一些，但是在低版本的 Vegas 中的 **bug 比较多，容易造成崩溃**。一般解决问题的时候首先尝试**关闭 GPU 加速**。对于高版本 Vegas（比如 `22 build 250`），在显卡性能比较好，并且没有其他问题的情况下仍然建议开启。
@zh-hant **`首選項 -> 影片`**，在 **`影片處理的 GPU 加速`** 這一欄中選擇 **`關閉`**。這個選項主要用來管理影片特效是否使用 GPU 加速，雖然在 GPU 加速的加持下，特效的預覽和算繪速度會流暢一些，但是在低版本的 Vegas 中的 **bug 比較多，容易造成崩潰**。一般解決問題的時候首先嘗試**關閉 GPU 加速**。對於高版本 Vegas（比如 `22 build 250`），在顯示卡效能比較好，並且沒有其他問題的情況下仍然建議開啟。
@ja **`プリファレンス -> ビデオ`**、 **`ビデオ処理の GPU アクセラレーション`** で、 **`オフ`** を選択。このオプションは主にビデオ FX が GPU アクセラレーションを使用するかどうかを管理します。GPU アクセラレーションは FX のプレビューとレンダリングをよりスムーズにしますが、**低い VEGAS バージョンではバグが多く、クラッシュを引き起こしやすい**。トラブルシューティング時は、まず **GPU アクセラレーションを無効にする** ことを試みてください。新しい VEGAS バージョン（例： `22 build 250`）では、GPU パフォーマンスが良く、他の問題がなければ、有効にすることをお勧めします。
@ko **`환경설정 -> 비디오`** 에서 **`비디오 처리의 GPU 가속`** 아래에 있는 **`끄기`** 를 선택합니다. 이 옵션은 주로 비디오 FX가 GPU 가속을 사용할지 여부를 관리합니다. GPU 가속은 FX 미리보기 및 렌더링을 더 부드럽게 만들 수 있지만, **낮은 VEGAS 버전에서는 버그가 더 많고 크래시를 유발하기 쉽습니다**. 문제 해결 시 먼저 **GPU 가속을 비활성화**해 보십시오. 최신 VEGAS 버전(예: `22 build 250`)의 경우 GPU 성능이 좋고 다른 문제가 없다면 여전히 활성화하는 것이 좋습니다.
@de **`Einstellungen -> Video`**, unter **`GPU-Beschleunigung der Videoverarbeitung`** wählen Sie **`Aus`**. Diese Option verwaltet hauptsächlich, ob Video-FX GPU-Beschleunigung verwenden. Während GPU-Beschleunigung die FX-Vorschau und das Rendern flüssiger machen kann, hat sie **mehr Bugs in niedrigeren VEGAS-Versionen und verursacht häufiger Abstürze**. Bei der Fehlerbehebung sollten Sie zuerst versuchen, **die GPU-Beschleunigung zu deaktivieren**. Für neuere VEGAS-Versionen (z. B. `22 Build 250`) wird sie dennoch empfohlen, wenn Ihre GPU-Leistung gut ist und keine anderen Probleme auftreten.
@fr **`Préférences -> Vidéo`**, sous **`Accélération GPU du traitement vidéo`**, sélectionnez **`Désactivée`**. Cette option gère principalement si les FX vidéo utilisent l'accélération GPU. Bien que l'accélération GPU puisse rendre l'aperçu et le rendu des FX plus fluides, elle a **plus de bugs dans les versions VEGAS inférieures et est sujette à provoquer des plantages**. Lors du dépannage, essayez d'abord **de désactiver l'accélération GPU**. Pour les nouvelles versions VEGAS (par ex. `22 build 250`), il est toujours recommandé de l'activer si les performances de votre GPU sont bonnes et qu'il n'y a pas d'autres problèmes.
@ru **`Настройки (Preferences) -> Видео (Video)`**, в разделе **`Аппаратное ускорение обработки видео (GPU acceleration of video processing)`** выберите **`Выкл. (Off)`**. Эта опция в основном управляет тем, используют ли видеоэффекты аппаратное ускорение GPU. Хотя ускорение GPU может сделать предварительный просмотр и рендеринг FX более плавным, в **более низких версиях VEGAS в нем больше ошибок, и оно часто вызывает сбои**. При устранении неполадок сначала попробуйте **отключить ускорение GPU**. Для новых версий VEGAS (например, `22 build 250`) все же рекомендуется включить его, если производительность вашего GPU хорошая и нет других проблем.

<br>

@en ### 2. Disable VEGAS Error Reporting Pop-up
@zh ### 2. 关闭 Vegas 的报错弹窗功能
@zh-hant ### 2. 關閉 Vegas 的報錯彈窗功能
@ja ### 2. VEGAS エラー報告ポップアップを無効にする
@ko ### 2. VEGAS 오류 보고 팝업 비활성화
@de ### 2. VEGAS-Fehlerbericht-Pop-up deaktivieren
@fr ### 2. Désactiver la fenêtre contextuelle de rapport d'erreur VEGAS
@ru ### 2. Отключить всплывающее окно отчетов об ошибках VEGAS

@en A common scenario: When running VEGAS / **clicking `File -> Render As`**, an error pop-up appears immediately.
@zh 比较常见的情况是：运行 Vegas 时 / **点击左上角 `文件 -> 渲染为` 时，直接弹出报错弹窗**。
@zh-hant 比較常見的情況是：執行 Vegas 時 / **點選左上角 `檔案 -> 算繪為` 時，直接彈出報錯彈窗**。
@ja 一般的なシナリオ：VEGAS を実行中 / **`ファイル -> 別名でレンダリング`** をクリックすると、すぐにエラーポップアップが表示される。
@ko 일반적인 시나리오: VEGAS 실행 시 / **`파일 -> 렌더링`** 클릭 시 즉시 오류 팝업이 나타납니다.
@de Ein häufiges Szenario: Beim Ausführen von VEGAS / **Klicken auf `Datei -> Rendern als`** erscheint sofort ein Fehler-Pop-up.
@fr Un scénario courant : Lors de l'exécution de VEGAS / **clic sur `Fichier -> Rendre sous`**, une fenêtre d'erreur apparaît immédiatement.
@ru Распространенный сценарий: При запуске VEGAS / **нажатии `Файл (File) -> Рендерить как (Render As)`** немедленно появляется всплывающее окно с ошибкой.

<ImageOnDemand src="vegtips/image002_problem_report.png" />

@en **In this case, always check the box for `Show Problem Details` first to get the error content.**
@zh **这时候请先务必勾选下方的 `顯示問題詳細資料`（`Show Problem Details`），获取报错内容。**
@zh-hant **這時候請先務必勾選下方的 `顯示問題詳細資料`（`Show Problem Details`），獲取報錯內容。**
@ja **この場合、まず必ず `問題の詳細を表示` にチェックを入れ、エラー内容を取得してください。**
@ko **이 경우 항상 먼저 `문제 세부 정보 표시`를 선택하여 오류 내용을 확인하십시오.**
@de **Überprüfen Sie in diesem Fall immer zuerst das Kontrollkästchen für `Problemdetails anzeigen`, um den Fehlerinhalt zu erhalten.**
@fr **Dans ce cas, cochez toujours la case `Afficher les détails du problème` pour obtenir le contenu de l'erreur.**
@ru **В этом случае всегда сначала устанавливайте флажок `Показать детали проблемы (Show Problem Details)`, чтобы получить содержимое ошибки.**

@en Sometimes the error reporting feature itself might be the problem. Completely disabling it can help.
@zh 有时可能是报错弹窗功能本身所造成的问题，将此功能完全关闭可以解决。
@zh-hant 有時可能是報錯彈窗功能本身所造成的問題，將此功能完全關閉可以解決。
@ja 時には、エラー報告機能自体が問題である可能性があります。完全に無効にすると役立つ場合があります。
@ko 때로는 오류 보고 기능 자체가 문제일 수 있습니다. 완전히 비활성화하면 도움이 될 수 있습니다.
@de Manchmal kann die Fehlerberichterstattungsfunktion selbst das Problem sein. Das vollständige Deaktivieren kann helfen.
@fr Parfois, la fonctionnalité de rapport d'erreur elle-même peut être le problème. La désactiver complètement peut aider.
@ru Иногда сама функция отчетов об ошибках может быть проблемой. Полное ее отключение может помочь.

@en Two ways to disable error reporting pop-ups:
@zh 关闭报错弹窗功能的两种办法：
@zh-hant 關閉報錯彈窗功能的兩種辦法：
@ja エラー報告ポップアップを無効にする 2 つの方法：
@ko 오류 보고 팝업을 비활성화하는 두 가지 방법:
@de Zwei Wege, um Fehlerbericht-Pop-ups zu deaktivieren:
@fr Deux façons de désactiver les fenêtres contextuelles de rapport d'erreur :
@ru Два способа отключить всплывающие окна отчетов об ошибках:

@en - **Locate the `ErrorReportClient.exe` file in the VEGAS installation directory and rename it.**
@zh - **在 Vegas 安装目录下找到 `ErrorReportClient.exe` 这个文件，随便重命名一下**。
@zh-hant - **在 Vegas 安裝目錄下找到 `ErrorReportClient.exe` 這個檔案，隨便重新命名一下**。
@ja - **VEGAS インストールディレクトリ内の `ErrorReportClient.exe` ファイルを見つけて、名前を変更します。**
@ko - **VEGAS 설치 디렉토리에서 `ErrorReportClient.exe` 파일을 찾아 이름을 바꿉니다.**
@de - **Suchen Sie die Datei `ErrorReportClient.exe` im VEGAS-Installationsverzeichnis und benennen Sie sie um.**
@fr - **Localisez le fichier `ErrorReportClient.exe` dans le répertoire d'installation de VEGAS et renommez-le.**
@ru - **Найдите файл `ErrorReportClient.exe` в каталоге установки VEGAS и переименуйте его.**

@en - Locate and run **`PRSConfig.exe`** in the VEGAS installation directory, select **`Disabled`**.
@zh - 在 Vegas 安装目录下找到 **`PRSConfig.exe`** 这个程序并运行，选 **`禁用`**（`Disabled`）。
@zh-hant - 在 Vegas 安裝目錄下找到 **`PRSConfig.exe`** 這個程式並執行，選 **`禁用`**（`Disabled`）。
@ja - VEGAS インストールディレクトリ内で **`PRSConfig.exe`** を見つけて実行し、 **`無効`** を選択。
@ko - VEGAS 설치 디렉토리에서 **`PRSConfig.exe`** 를 찾아 실행하고 **`비활성화됨`** 을 선택합니다.
@de - Suchen Sie und führen Sie **`PRSConfig.exe`** im VEGAS-Installationsverzeichnis aus, wählen Sie **`Deaktiviert`**.
@fr - Localisez et exécutez **`PRSConfig.exe`** dans le répertoire d'installation de VEGAS, sélectionnez **`Désactivé`**.
@ru - Найдите и запустите **`PRSConfig.exe`** в каталоге установки VEGAS, выберите **`Отключено (Disabled)`**.

@en Either method will disable VEGAS error reporting pop-ups.
@zh 两个办法任选一个即可关闭 Vegas 的报错弹窗功能。
@zh-hant 兩個辦法任選一個即可關閉 Vegas 的報錯彈窗功能。
@ja どちらの方法でも VEGAS のエラー報告ポップアップは無効になります。
@ko 두 방법 중 하나를 사용하면 VEGAS 오류 보고 팝업이 비활성화됩니다.
@de Jede der Methoden deaktiviert VEGAS-Fehlerbericht-Pop-ups.
@fr Chaque méthode désactivera les fenêtres contextuelles de rapport d'erreur VEGAS.
@ru Любой из методов отключит всплывающие окна отчетов об ошибках VEGAS.

@en Sometimes the issue may persist. If so, re-enable it and focus on analyzing the error content. **The error content can sometimes provide useful clues. See [Troubleshooting Ideas for Specific Errors](#8-troubleshooting-ideas-for-specific-errors).**
@zh 有些时候问题可能仍然无法解决，请再次开启它，并重点观察和分析报错内容。**报错内容里有时能推断出一些有用的关键信息，见下文 [某些报错的问题排查思路](#8-某些报错的问题排查思路)。**
@zh-hant 有些時候問題可能仍然無法解決，請再次開啟它，並重點觀察和分析報錯內容。**報錯內容裡有時能推斷出一些有用的關鍵資訊，見下文 [某些報錯的問題排查思路](#8-某些報錯的問題排查思路)。**
@ja 問題が解決しない場合もあります。その場合は再度有効にし、エラー内容の分析に集中してください。**エラー内容は有用な手がかりを提供することがあります。 [特定のエラーのトラブルシューティングアイデア](#8-特定のエラーのトラブルシューティングアイデア) を参照してください。**
@ko 때로는 문제가 지속될 수 있습니다. 그렇다면 다시 활성화하고 오류 내용 분석에 집중하십시오. **오류 내용은 때로 유용한 단서를 제공할 수 있습니다. [특정 오류에 대한 문제 해결 아이디어](#8-특정-오류에-대한-문제-해결-아이디어)를 참조하십시오.**
@de Manchmal kann das Problem bestehen bleiben. Wenn ja, aktivieren Sie es wieder und konzentrieren Sie sich auf die Analyse des Fehlerinhalts. **Der Fehlerinhalt kann manchmal nützliche Hinweise liefern. Siehe [Fehlerbehandlungs-Ideen für spezifische Fehler](#8-fehlerbehandlungs-ideen-für-spezifische-fehler).**
@fr Parfois, le problème peut persister. Si c'est le cas, réactivez-le et concentrez-vous sur l'analyse du contenu de l'erreur. **Le contenu de l'erreur peut parfois fournir des indices utiles. Voir [Idées de dépannage pour des erreurs spécifiques](#8-idées-de-dépannage-pour-des-erreurs-spécifiques).**
@ru Иногда проблема может сохраняться. Если да, снова включите ее и сосредоточьтесь на анализе содержимого ошибки. **Содержимое ошибки иногда может дать полезные подсказки. См. [Идеи по устранению неполадок для конкретных ошибок](#8-идеи-по-устранению-неполадок-для-конкретных-ошибок).**

<br>

@en ### 3. Reinstall VEGAS
@zh ### 3. 重装 Vegas
@zh-hant ### 3. 重裝 Vegas
@ja ### 3. VEGAS を再インストールする
@ko ### 3. VEGAS 재설치
@de ### 3. VEGAS neu installieren
@fr ### 3. Réinstaller VEGAS
@ru ### 3. Переустановить VEGAS

@en Reinstalling VEGAS only addresses problems where the software itself was not fully installed or program files are corrupted, so it's rarely needed. Reinstalling alone does not reset preferences.
@zh 重装 Vegas 只针对 Vegas 软件本体安装不完全或者程序文件损坏这类问题，所以一般不太会用得到。只进行重装 Vegas 操作并不会重置首选项。
@zh-hant 重裝 Vegas 只針對 Vegas 軟體本體安裝不完全或者程式檔案損壞這類問題，所以一般不太會用得到。只進行重裝 Vegas 操作並不會重設首選項。
@ja VEGAS の再インストールは、ソフトウェア自体が完全にインストールされていないか、プログラムファイルが破損している問題のみに対処するため、ほとんど必要ありません。再インストールだけではプリファレンスはリセットされません。
@ko VEGAS 재설치는 소프트웨어 자체가 완전히 설치되지 않았거나 프로그램 파일이 손상된 문제만 해결하므로 거의 필요하지 않습니다. 재설치만으로는 환경설정이 재설정되지 않습니다.
@de Das Neuinstallieren von VEGAS behebt nur Probleme, bei denen die Software selbst nicht vollständig installiert wurde oder Programmdateien beschädigt sind, daher wird es selten benötigt. Das Neuinstallieren allein setzt die Einstellungen nicht zurück.
@fr Réinstaller VEGAS ne traite que les problèmes où le logiciel lui-même n'a pas été entièrement installé ou les fichiers de programme sont corrompus, c'est donc rarement nécessaire. La réinstallation seule ne réinitialise pas les préférences.
@ru Переустановка VEGAS решает только проблемы, когда само программное обеспечение было установлено не полностью или файлы программы повреждены, поэтому она редко нужна. Одна только переустановка не сбрасывает настройки.

<br>

@en ### 4. Reinstall Hardware Drivers
@zh ### 4. 重装硬件驱动
@zh-hant ### 4. 重裝硬體驅動
@ja ### 4. ハードウェアドライバーを再インストールする
@ko ### 4. 하드웨어 드라이버 재설치
@de ### 4. Hardware-Treiber neu installieren
@fr ### 4. Réinstaller les pilotes matériels
@ru ### 4. Переустановить драйверы оборудования

@en Software issues can sometimes be caused by hardware drivers. For audio problems, try reinstalling your sound card drivers. For video problems, try reinstalling your graphics card drivers.
@zh 软件出问题也可能是硬件驱动造成的。音频问题可以尝试重装声卡驱动，视频问题可以尝试重装显卡驱动。
@zh-hant 軟體出問題也可能是硬體驅動造成的。音訊問題可以嘗試重裝音效卡驅動，影片問題可以嘗試重裝顯示卡驅動。
@ja ソフトウェアの問題は、ハードウェアドライバーによって引き起こされることがあります。オーディオ問題にはサウンドカードドライバーの再インストールを、ビデオ問題にはグラフィックスカードドライバーの再インストールを試みてください。
@ko 소프트웨어 문제는 때로 하드웨어 드라이버로 인해 발생할 수 있습니다. 오디오 문제의 경우 사운드 카드 드라이버를 재설치해 보십시오. 비디오 문제의 경우 그래픽 카드 드라이버를 재설치해 보십시오.
@de Softwareprobleme können manchmal durch Hardwaretreiber verursacht werden. Bei Audio-Problemen versuchen Sie, Ihre Soundkartentreiber neu zu installieren. Bei Video-Problemen versuchen Sie, Ihre Grafikkartentreiber neu zu installieren.
@fr Les problèmes logiciels peuvent parfois être causés par des pilotes matériels. Pour les problèmes audio, essayez de réinstaller les pilotes de votre carte son. Pour les problèmes vidéo, essayez de réinstaller les pilotes de votre carte graphique.
@ru Проблемы с программным обеспечением иногда могут быть вызваны драйверами оборудования. При проблемах со звуком попробуйте переустановить драйверы звуковой карты. При проблемах с видео попробуйте переустановить драйверы видеокарты.

<br>

@en ### 5. Reset Preferences
@zh ### 5. 重置首选项
@zh-hant ### 5. 重設首選項
@ja ### 5. プリファレンスをリセットする
@ko ### 5. 환경설정 재설정
@de ### 5. Einstellungen zurücksetzen
@fr ### 5. Réinitialiser les préférences
@ru ### 5. Сбросить настройки

@en Encountering inexplicable issues, like **imported audio being completely noisy**, can sometimes be resolved by **resetting preferences**.
@zh 遇到一些莫名其妙的问题，比如**音频导入进去以后完全是杂音**，这种情况可以尝试**重置首选项**解决。
@zh-hant 遇到一些莫名其妙的問題，比如**音訊匯入進去以後完全是雜音**，這種情況可以嘗試**重設首選項**解決。
@ja **インポートしたオーディオが完全にノイズになる**など、説明のつかない問題に遭遇した場合、**プリファレンスをリセット**することで解決することがあります。
@ko 이해할 수 없는 문제를 겪을 때, 예를 들어 **가져온 오디오가 완전히 잡음인 경우**, 때로는 **환경설정 재설정**으로 해결할 수 있습니다.
@de Wenn Sie auf unerklärliche Probleme stoßen, wie **importierten Audio, der komplett verrauscht ist**, kann dies manchmal durch **Zurücksetzen der Einstellungen** gelöst werden.
@fr Rencontrer des problèmes inexplicables, comme **l'audio importé étant complètement bruyant**, peut parfois être résolu en **réinitialisant les préférences**.
@ru Столкнувшись с необъяснимыми проблемами, такими как **импортированный аудио полностью зашумлен**, иногда можно решить, **сбросив настройки**.

@en **Resetting will clear: [All preferences and cache for the current VEGAS version].**
@zh **重置后会清理掉：【当前 Vegas 版本的所有首选项和缓存】。**
@zh-hant **重設後會清理掉：【當前 Vegas 版本的所有首選項和快取】。**
@ja **リセットすると次のものがクリアされます： [現在の VEGAS バージョンのすべてのプリファレンスとキャッシュ]。**
@ko **재설정하면 다음과 같은 내용이 지워집니다: [현재 VEGAS 버전의 모든 환경설정 및 캐시].**
@de **Das Zurücksetzen wird löschen: [Alle Einstellungen und den Cache für die aktuelle VEGAS-Version].**
@fr **La réinitialisation effacera : [Toutes les préférences et le cache pour la version VEGAS actuelle].**
@ru **Сброс очистит: [Все настройки и кэш для текущей версии VEGAS].**

@en The standard method: Hold `Ctrl + Shift` and run VEGAS. A "Reset?" prompt will appear. Check `Delete all cached application data` and click `Yes`.
@zh 首选项的常规办法：按住 `Ctrl + Shift` 并运行 Vegas，会弹出“是否重置”的选项，勾选 `删除所有缓存的应用程序数据`，点 `是`。
@zh-hant 首選項的常規辦法：按住 `Ctrl + Shift` 並執行 Vegas，會彈出“是否重設”的選項，勾選 `刪除所有快取的應用程式資料`，點 `是`。
@ja 標準的な方法： `Ctrl + Shift` を押しながら VEGAS を実行します。「リセット？」プロンプトが表示されます。 `キャッシュされたすべてのアプリケーションデータを削除` にチェックを入れ、 `はい` をクリックします。
@ko 표준 방법: `Ctrl + Shift`를 누른 상태로 VEGAS를 실행합니다. "재설정하시겠습니까?" 프롬프트가 나타납니다. `모든 캐시된 애플리케이션 데이터 삭제`를 선택하고 `예`를 클릭합니다.
@de Die Standardmethode: Halten Sie `Strg + Umschalt` gedrückt und führen Sie VEGAS aus. Eine "Zurücksetzen?"-Eingabeaufforderung erscheint. Aktivieren Sie `Alle zwischengespeicherten Anwendungsdaten löschen` und klicken Sie auf `Ja`.
@fr La méthode standard : Maintenez `Ctrl + Maj` et exécutez VEGAS. Une invite "Réinitialiser ?" apparaîtra. Cochez `Supprimer toutes les données d'application mises en cache` et cliquez `Oui`.
@ru Стандартный метод: Удерживайте `Ctrl + Shift` и запустите VEGAS. Появится запрос «Сбросить? (Reset?)». Установите флажок `Удалить все кэшированные данные приложения (Delete all cached application data)` и нажмите `Да (Yes)`.

<ImageOnDemand src="vegtips/image003_reset.png" />

@en <p align="center">Reset? (Y/N)</p>
@zh <p align="center">是否重置？(Y/N)</p>
@zh-hant <p align="center">是否重設？(Y/N)</p>
@ja <p align="center">リセット？ (Y/N)</p>
@ko <p align="center">재설정하시겠습니까? (Y/N)</p>
@de <p align="center">Zurücksetzen? (J/N)</p>
@fr <p align="center">Réinitialiser ? (Oui/Non)</p>
@ru <p align="center">Сбросить? (Reset? (Y/N))</p>

@en However, resetting this way does not create a backup of your previous preferences. The original preferences will be completely cleared, which carries some risk. Therefore, I recommend backing up your preferences before resetting. See [VEGAS Preferences and Cache Directory](#vegas-preferences-and-cache-directory).
@zh 不过依上述办法这样重置以后不会产生首选项设置的备份，原先的首选项设置将会完全清空，风险较大。所以我建议在重置前做好首选项的备份，见 [Vegas 首选项和缓存目录](#vegas-首选项和缓存目录)。
@zh-hant 不過依上述辦法這樣重設以後不會產生首選項設定的備份，原先的首選項設定將會完全清空，風險較大。所以我建議在重設前做好首選項的備份，見 [Vegas 首選項和快取目錄](#vegas-首選項和快取目錄)。
@ja ただし、この方法でリセットしても、以前のプリファレンスのバックアップは作成されません。元のプリファレンスは完全にクリアされ、リスクが伴います。したがって、リセット前にプリファレンスをバックアップすることをお勧めします。 [VEGAS プリファレンスとキャッシュディレクトリ](#vegas-プリファレンスとキャッシュディレクトリ) を参照してください。
@ko 그러나 이렇게 재설정하면 이전 환경설정의 백업이 생성되지 않습니다. 원래 환경설정이 완전히 지워지므로 약간의 위험이 있습니다. 따라서 재설정 전에 환경설정을 백업하는 것을 권장합니다. [VEGAS 환경설정 및 캐시 디렉토리](#vegas-환경설정-및-캐시-디렉토리)를 참조하십시오.
@de Allerdings erstellt das Zurücksetzen auf diese Weise kein Backup Ihrer vorherigen Einstellungen. Die ursprünglichen Einstellungen werden vollständig gelöscht, was ein gewisses Risiko birgt. Daher empfehle ich, vor dem Zurücksetzen Ihre Einstellungen zu sichern. Siehe [VEGAS-Einstellungen und Cache-Verzeichnis](#vegas-einstellungen-und-cache-verzeichnis).
@fr Cependant, la réinitialisation de cette façon ne crée pas de sauvegarde de vos préférences précédentes. Les préférences originales seront complètement effacées, ce qui comporte un certain risque. Par conséquent, je recommande de sauvegarder vos préférences avant la réinitialisation. Voir [Répertoire des préférences et du cache VEGAS](#répertoire-des-préférences-et-du-cache-vegas).
@ru Однако сброс таким образом не создает резервную копию ваших предыдущих настроек. Исходные настройки будут полностью очищены, что несет некоторый риск. Поэтому я рекомендую сделать резервную копию ваших настроек перед сбросом. См. [Настройки VEGAS и кэш-директория](#настройки-vegas-и-кэш-директория).

<br>

@en ### 6. Install Microsoft Visual C++ and .NET Framework Runtimes
@zh ### 6. 安装 Microsoft Visual C++ 和 .NET Framework 运行库
@zh-hant ### 6. 安裝 Microsoft Visual C++ 和 .NET Framework 運行庫
@ja ### 6. Microsoft Visual C++ と .NET Framework ランタイムをインストールする
@ko ### 6. Microsoft Visual C++ 및 .NET Framework 런타임 설치
@de ### 6. Microsoft Visual C++ und .NET Framework Laufzeiten installieren
@fr ### 6. Installer Microsoft Visual C++ et .NET Framework Runtimes
@ru ### 6. Установить среды выполнения Microsoft Visual C++ и .NET Framework

@en Microsoft Visual C++ Redistributables: https://learn.microsoft.com/cpp/windows/latest-supported-vc-redist
@zh Microsoft Visual C++ 运行库：https://learn.microsoft.com/cpp/windows/latest-supported-vc-redist
@zh-hant Microsoft Visual C++ 運行庫：https://learn.microsoft.com/cpp/windows/latest-supported-vc-redist
@ja Microsoft Visual C++ 再頒布可能パッケージ： https://learn.microsoft.com/cpp/windows/latest-supported-vc-redist
@ko Microsoft Visual C++ 재배포 가능 패키지: https://learn.microsoft.com/cpp/windows/latest-supported-vc-redist
@de Microsoft Visual C++ Redistributables: https://learn.microsoft.com/cpp/windows/latest-supported-vc-redist
@fr Microsoft Visual C++ Redistributables : https://learn.microsoft.com/cpp/windows/latest-supported-vc-redist
@ru Распространяемые пакеты Microsoft Visual C++: https://learn.microsoft.com/cpp/windows/latest-supported-vc-redist

@en .NET Framework Repair Tool: https://support.microsoft.com/topic/942a01e3-5b8b-7abb-c166-c34a2f4b612a
@zh .NET Framework 修复工具：https://support.microsoft.com/topic/942a01e3-5b8b-7abb-c166-c34a2f4b612a
@zh-hant .NET Framework 修復工具：https://support.microsoft.com/topic/942a01e3-5b8b-7abb-c166-c34a2f4b612a
@ja .NET Framework 修復ツール： https://support.microsoft.com/topic/942a01e3-5b8b-7abb-c166-c34a2f4b612a
@ko .NET Framework 복구 도구: https://support.microsoft.com/topic/942a01e3-5b8b-7abb-c166-c34a2f4b612a
@de .NET Framework-Reparatur-Tool: https://support.microsoft.com/topic/942a01e3-5b8b-7abb-c166-c34a2f4b612a
@fr .NET Framework Repair Tool : https://support.microsoft.com/topic/942a01e3-5b8b-7abb-c166-c34a2f4b612a
@ru Инструмент восстановления .NET Framework: https://support.microsoft.com/topic/942a01e3-5b8b-7abb-c166-c34a2f4b612a

<br>

@en ### 7. Try a Different Version
@zh ### 7. 换版本
@zh-hant ### 7. 換版本
@ja ### 7. 別のバージョンを試す
@ko ### 7. 다른 버전 사용해 보기
@de ### 7. Eine andere Version ausprobieren
@fr ### 7. Essayer une version différente
@ru ### 7. Попробовать другую версию

@en **Whether a VEGAS version suits your PC is somewhat random.**
@zh **Vegas 版本与你的电脑是否合适，这个问题很随缘。**
@zh-hant **Vegas 版本與你的電腦是否合適，這個問題很隨緣。**
@ja **VEGAS バージョンがあなたの PC に適しているかどうかは、ある程度ランダムです。**
@ko **VEGAS 버전이 귀하의 PC에 적합한지는 다소 무작위적입니다.**
@de **Ob eine VEGAS-Version für Ihren PC geeignet ist, ist etwas zufällig.**
@fr **Qu'une version VEGAS convienne à votre PC est quelque peu aléatoire.**
@ru **В некоторой степени случайно, подходит ли версия VEGAS для вашего ПК.**

@en The most stable version is widely considered to be VP13. For a balance of stability and features, **VP18** is recommended. Newer versions are not guaranteed to be stable. Since the video engine update in `21 build 300`, VEGAS's slow video decoding and rendering issues are being gradually addressed. This improvement continues through VP22's final version. **Currently, I most recommend the VP22 final version (`22 build 250`), as it has significant improvements.** The latest VP2026 is still not very stable.
@zh 公认最稳定的版本应该是 vv13，追求稳定性和功能性兼顾的建议用 **vv18**，新版不保证一定会很稳。自 `21 build 300` 的视频引擎更新以来，Vegas 的视频解码和渲染慢的问题正在逐步得到解决，这一更新会一直持续到 22 最终版。**目前我最推荐用 22 最终版（`22 build 250`），有很大的改进。**最新版的 2026 仍然不是很稳定。
@zh-hant 公認最穩定的版本應該是 vv13，追求穩定性和功能性兼顧的建議用 **vv18**，新版不保證一定會很穩。自 `21 build 300` 的影片引擎更新以來，Vegas 的影片解碼和算繪慢的問題正在逐步得到解決，這一更新會一直持續到 22 最終版。**目前我最推薦用 22 最終版（`22 build 250`），有很大的改進。**最新版的 2026 仍然不是很穩定。
@ja 最も安定しているバージョンは広く VP13 と考えられています。安定性と機能性のバランスを求めるなら、 **VP18** をお勧めします。新しいバージョンは安定している保証はありません。 `21 build 300` でのビデオエンジンの更新以来、VEGAS の遅いビデオデコードとレンダリングの問題は徐々に解決されつつあります。この改善は VP22 の最終版まで続いています。 **現在、私は VP22 最終版（`22 build 250`）を最もお勧めします。大幅な改善があります。** 最新の VP2026 はまだあまり安定していません。
@ko 가장 안정적인 버전은 일반적으로 VP13으로 간주됩니다. 안정성과 기능성의 균형을 원한다면 **VP18**을 권장합니다. 최신 버전이 안정적이라고 보장되지 않습니다. `21 build 300`의 비디오 엔진 업데이트 이후 VEGAS의 느린 비디오 디코딩 및 렌더링 문제가 점차 해결되고 있습니다. 이 개선은 VP22 최종 버전까지 계속됩니다. **현재 가장 권장하는 것은 VP22 최종 버전(`22 build 250`)으로, 상당한 개선이 이루어졌습니다.** 최신 VP2026은 여전히 매우 안정적이지 않습니다.
@de Die stabilste Version wird allgemein als VP13 angesehen. Für einen Ausgleich zwischen Stabilität und Funktionen wird **VP18** empfohlen. Neuere Versionen sind nicht garantiert stabil. Seit dem Video-Engine-Update in `21 Build 300` werden VEGAS' Probleme mit langsamer Videodekodierung und -wiedergabe schrittweise behoben. Diese Verbesserung setzt sich bis zur endgültigen Version von VP22 fort. **Derzeit empfehle ich am meisten die VP22-Endversion (`22 Build 250`), da sie erhebliche Verbesserungen aufweist.** Die neueste VP2026 ist immer noch nicht sehr stabil.
@fr La version la plus stable est largement considérée comme étant VP13. Pour un équilibre stabilité-fonctionnalités, **VP18** est recommandée. Les versions plus récentes ne garantissent pas la stabilité. Depuis la mise à jour du moteur vidéo dans `21 build 300`, les problèmes de décodage et de rendu vidéo lents de VEGAS sont progressivement résolus. Cette amélioration se poursuit jusqu'à la version finale de VP22. **Actuellement, je recommande le plus la version finale VP22 (`22 build 250`), car elle présente des améliorations significatives.** La dernière VP2026 n'est toujours pas très stable.
@ru Наиболее стабильной версией широко считается VP13. Для баланса стабильности и функций рекомендуется **VP18**. Более новые версии не гарантируют стабильность. С момента обновления видео-движка в `21 build 300`, проблемы медленного декодирования и рендеринга видео в VEGAS постепенно решаются. Это улучшение продолжается до финальной версии VP22. **В настоящее время я больше всего рекомендую финальную версию VP22 (`22 build 250`), так как в ней есть значительные улучшения.** Последняя VP2026 все еще не очень стабильна.

@en VEGAS Pro / VEGAS Post Release History: https://forum.borisfx.com/t/vegas-pro-release-history/24284
@zh VEGAS 版本更新历史：https://forum.borisfx.com/t/vegas-pro-release-history/24284
@zh-hant VEGAS 版本更新歷史：https://forum.borisfx.com/t/vegas-pro-release-history/24284
@ja VEGAS Pro / VEGAS Post リリース履歴： https://forum.borisfx.com/t/vegas-pro-release-history/24284
@ko VEGAS Pro / VEGAS Post 출시 기록: https://forum.borisfx.com/t/vegas-pro-release-history/24284
@de VEGAS Pro / VEGAS Post Veröffentlichungsgeschichte: https://forum.borisfx.com/t/vegas-pro-release-history/24284
@fr Historique des versions VEGAS Pro / VEGAS Post : https://forum.borisfx.com/t/vegas-pro-release-history/24284
@ru История выпусков VEGAS Pro / VEGAS Post: https://forum.borisfx.com/t/vegas-pro-release-history/24284

<br>

@en ### 8. Troubleshooting Ideas for Specific Errors
@zh ### 8. 某些报错的问题排查思路
@zh-hant ### 8. 某些報錯的問題排查思路
@ja ### 8. 特定のエラーのトラブルシューティングアイデア
@ko ### 8. 특정 오류에 대한 문제 해결 아이디어
@de ### 8. Fehlerbehandlungs-Ideen für spezifische Fehler
@fr ### 8. Idées de dépannage pour des erreurs spécifiques
@ru ### 8. Идеи по устранению неполадок для конкретных ошибок

@en If you've tried almost all methods in this article (especially those in the [VEGAS Software Operation Q&A](#iv-vegas-software-operation-q-a) chapter) and the error persists, try this section's approach. Some errors, like `0xC0000005`, have no fixed, definite cause. Encountering such errors and finding that most solutions here don't work is perfectly normal. Searching online for the error code yields many solutions, but finding one that actually works can be like finding a needle in a haystack. This section provides a general troubleshooting idea:
@zh 在尝试了本文中几乎所有办法（特别是 [Vegas 软件运行相关的 Q&A](#四、vegas-软件运行相关的-q-a) 这一章的办法）以后，报错仍然无法解决，可尝试这一节的办法。也有某些报错，如 `0xC0000005`，是没有固定确切的原因而引发的报错，遇到这种报错，使用本文中提到的大部分解决办法，仍然没有用，是再正常不过的了。这时想去找该报错的常见解决方法，直接百度对应报错码，你会搜到很多解决方案，但想找个能真正解决的，可谓是大海捞针。本节提供一个大致的报错问题排查思路：
@zh-hant 在嘗試了本文中幾乎所有辦法（特別是 [Vegas 軟體執行相關的 Q&A](#四、vegas-軟體執行相關的-q-a) 這一章的辦法）以後，報錯仍然無法解決，可嘗試這一節的辦法。也有某些報錯，如 `0xC0000005`，是沒有固定確切的原因而引發的報錯，遇到這種報錯，使用本文中提到的大部分解決辦法，仍然沒有用，是再正常不過的了。這時想去找該報錯的常見解決方法，直接百度對應報錯碼，你會搜到很多解決方案，但找個能真正解決的，可謂是大海撈針。本節提供一個大致的報錯問題排查思路：
@ja この記事のほとんどの方法（特に [VEGAS ソフトウェア操作 Q&A](#四、vegas-ソフトウェア操作-q-a) 章の方法）を試し、エラーが解決しない場合は、このセクションのアプローチを試みてください。 `0xC0000005` などの一部のエラーには固定された明確な原因がありません。そのようなエラーに遭遇し、ここでのほとんどの解決策が機能しないことはまったく正常です。オンラインでエラーコードを検索すると多くの解決策が得られますが、実際に機能するものを見つけるのは大海原で針を見つけるようなものです。このセクションでは、一般的なトラブルシューティングのアイデアを提供します：
@ko 이 글의 거의 모든 방법(특히 [VEGAS 소프트웨어 작동 Q&A](#iv-vegas-소프트웨어-작동-q-a) 장의 방법)을 시도했는데도 오류가 지속되면 이 섹션의 접근 방식을 시도해 보십시오. `0xC0000005`와 같은 일부 오류는 고정된 명확한 원인이 없습니다. 이러한 오류를 만나서 여기에 있는 대부분의 해결책이 효과가 없는 것은 완전히 정상입니다. 온라인에서 오류 코드를 검색하면 많은 해결책이 나오지만, 실제로 효과가 있는 것을 찾는 것은 바늘 찾기와 같을 수 있습니다. 이 섹션은 일반적인 문제 해결 아이디어를 제공합니다:
@de Wenn Sie fast alle Methoden in diesem Artikel (insbesondere die im Kapitel [VEGAS Software-Betrieb Q&A](#iv-vegas-software-betrieb-q-a)) ausprobiert haben und der Fehler bestehen bleibt, versuchen Sie den Ansatz in diesem Abschnitt. Einige Fehler, wie `0xC0000005`, haben keine feste, eindeutige Ursache. Auf solche Fehler zu stoßen und festzustellen, dass die meisten Lösungen hier nicht funktionieren, ist völlig normal. Die Online-Suche nach dem Fehlercode liefert viele Lösungen, aber eine tatsächlich funktionierende zu finden, kann wie die Suche nach einer Nadel im Heuhaufen sein. Dieser Abschnitt bietet eine allgemeine Fehlerbehandlungs-Idee:
@fr Si vous avez essayé presque toutes les méthodes de cet article (en particulier celles du chapitre [FAQ sur le fonctionnement du logiciel VEGAS](#iv-faq-sur-le-fonctionnement-du-logiciel-vegas)) et que l'erreur persiste, essayez l'approche de cette section. Certaines erreurs, comme `0xC0000005`, n'ont pas de cause fixe et définitive. Rencontrer de telles erreurs et constater que la plupart des solutions ici ne fonctionnent pas est parfaitement normal. Rechercher le code d'erreur en ligne donne de nombreuses solutions, mais en trouver une qui fonctionne réellement peut être comme chercher une aiguille dans une botte de foin. Cette section fournit une idée de dépannage générale :
@ru Если вы перепробовали почти все методы в этой статье (особенно в главе [Вопросы и ответы по работе с ПО VEGAS](#iv-вопросы-и-ответы-по-работе-с-по-vegas)), а ошибка сохраняется, попробуйте подход из этого раздела. Некоторые ошибки, такие как `0xC0000005`, не имеют фиксированной, определенной причины. Столкнуться с такими ошибками и обнаружить, что большинство решений здесь не работают, совершенно нормально. Поиск кода ошибки в Интернете дает много решений, но найти то, которое действительно работает, может быть как найти иголку в стоге сена. В этом разделе представлена общая идея по устранению неполадок:

@en 1.  **Find the error details.** If error reporting is [enabled](#2-disable-vegas-error-reporting-pop-up), check the `Show Problem Details` box in the pop-up. Even with error reporting disabled, you might sometimes get error details. These two sources might provide different or additional information; it's advisable to check both.
@zh 1.  **找到报错内容。** 如果开了 [报错弹窗](#2-关闭-Vegas-的报错弹窗功能)，可以勾选报错弹窗的`顯示問題詳細資料`（`Show Problem Details`），可以得到报错内容。即使关闭了报错弹窗功能，有时也可以得到一些报错内容。这两个报错内容可能有所不同，会有额外的信息，建议同时检查一下。
@zh-hant 1.  **找到報錯內容。** 如果開了 [報錯彈窗](#2-關閉-vegas-的報錯彈窗功能)，可以勾選報錯彈窗的`顯示問題詳細資料`（`Show Problem Details`），可以得到報錯內容。即使關閉了報錯彈窗功能，有時也可以得到一些報錯內容。這兩個報錯內容可能有所不同，會有額外的資訊，建議同時檢查一下。
@ja 1.  **エラーの詳細を見つける。** エラー報告が [有効](#2-vegas-エラー報告ポップアップを無効にする) になっている場合、ポップアップの `問題の詳細を表示` ボックスにチェックを入れます。エラー報告が無効になっていても、時々エラーの詳細が得られることがあります。これら 2 つの情報源は異なるまたは追加の情報を提供する可能性があるため、両方を確認することをお勧めします。
@ko 1.  **오류 세부 정보 찾기.** 오류 보고가 [활성화](#2-vegas-오류-보고-팝업-비활성화)된 경우 팝업에서 `문제 세부 정보 표시`를 선택하십시오. 오류 보고가 비활성화된 경우에도 때로는 오류 세부 정보를 얻을 수 있습니다. 이 두 출처는 다른 또는 추가 정보를 제공할 수 있으므로 둘 다 확인하는 것이 좋습니다.
@de 1.  **Finden Sie die Fehlerdetails.** Wenn die Fehlerberichterstattung [aktiviert](#2-vegas-fehlerbericht-pop-up-deaktivieren) ist, aktivieren Sie das Kontrollkästchen `Problemdetails anzeigen` im Pop-up. Selbst wenn die Fehlerberichterstattung deaktiviert ist, erhalten Sie manchmal Fehlerdetails. Diese beiden Quellen können unterschiedliche oder zusätzliche Informationen liefern; es ist ratsam, beide zu überprüfen.
@fr 1.  **Trouvez les détails de l'erreur.** Si le rapport d'erreur est [activé](#2-désactiver-la-fenêtre-contextuelle-de-rapport-d-erreur-vegas), cochez la case `Afficher les détails du problème` dans la fenêtre contextuelle. Même avec le rapport d'erreur désactivé, vous pourriez parfois obtenir des détails d'erreur. Ces deux sources pourraient fournir des informations différentes ou supplémentaires ; il est conseillé de vérifier les deux.
@ru 1.  **Найдите детали ошибки.** Если отчеты об ошибках [включены](#2-отключить-всплывающее-окно-отчетов-об-ошибках-vegas), установите флажок `Показать детали проблемы (Show Problem Details)` во всплывающем окне. Даже при отключенных отчетах об ошибках вы иногда можете получить детали ошибки. Эти два источника могут предоставить разную или дополнительную информацию; желательно проверить оба.

@en 2.  **Analyze the error details.** Look for two key points: the fault module and the error code. The fault module is on the `Fault Module` line.
@zh 2.  **分析报错内容。** 要找到两个关键点：报错源和报错码。报错源可以看 `Fault Module` 这一行。
@zh-hant 2.  **分析報錯內容。** 要找到兩個關鍵點：報錯源和報錯碼。報錯源可以看 `Fault Module` 這一行。
@ja 2.  **エラーの詳細を分析する。** 2 つの重要な点、つまり障害モジュールとエラーコードを探します。障害モジュールは `Fault Module` 行にあります。
@ko 2.  **오류 세부 정보 분석.** 두 가지 핵심 포인트를 찾으십시오: 오류 모듈과 오류 코드. 오류 모듈은 `Fault Module` 줄에 있습니다.
@de 2.  **Analysieren Sie die Fehlerdetails.** Suchen Sie nach zwei Hauptpunkten: das Fehlermodul und der Fehlercode. Das Fehlermodul steht in der Zeile `Fehlermodul` (`Fault Module`).
@fr 2.  **Analysez les détails de l'erreur.** Recherchez deux points clés : le module de défaut et le code d'erreur. Le module de défaut est sur la ligne `Fault Module`.
@ru 2.  **Проанализируйте детали ошибки.** Ищите два ключевых момента: модуль сбоя и код ошибки. Модуль сбоя указан в строке `Fault Module`.

@en     - If the fault module points to a component of another software, try uninstalling that software.
@zh     - 比如报错源指向某个软件的组件，可以试着把这个软件卸载了。
@zh-hant     - 比如報錯源指向某個軟體的元件，可以試著把這個軟體解除安裝了。
@ja     - 障害モジュールが他のソフトウェアのコンポーネントを指している場合、そのソフトウェアのアンインストールを試みてください。
@ko     - 오류 모듈이 다른 소프트웨어의 구성 요소를 가리키면 해당 소프트웨어를 제거해 보십시오.
@de     - Wenn das Fehlermodul auf eine Komponente einer anderen Software hinweist, versuchen Sie, diese Software zu deinstallieren.
@fr     - Si le module de défaut pointe vers un composant d'un autre logiciel, essayez de désinstaller ce logiciel.
@ru     - Если модуль сбоя указывает на компонент другого ПО, попробуйте удалить это ПО.

@en     - If it points to a VEGAS component, try reinstalling VEGAS or switching versions.
@zh     - 报错源指向 Vegas 自己的组件，可以试着重装 Vegas 或者换 Vegas 版本。
@zh-hant     - 報錯源指向 Vegas 自己的元件，可以試著重裝 Vegas 或者換 Vegas 版本。
@ja     - VEGAS コンポーネントを指している場合、VEGAS の再インストールまたはバージョン切り替えを試みてください。
@ko     - VEGAS 구성 요소를 가리키면 VEGAS를 재설치하거나 버전을 전환해 보십시오.
@de     - Wenn es auf eine VEGAS-Komponente hinweist, versuchen Sie, VEGAS neu zu installieren oder die Version zu wechseln.
@fr     - S'il pointe vers un composant VEGAS, essayez de réinstaller VEGAS ou de changer de version.
@ru     - Если он указывает на компонент VEGAS, попробуйте переустановить VEGAS или сменить версию.

@en     - If it points to a system component, it's less certain.
@zh     - 报错源指向系统组件，就有些不确定了。
@zh-hant     - 報錯源指向系統元件，就有些不確定了。
@ja     - システムコンポーネントを指している場合、確実性は低いです。
@ko     - 시스템 구성 요소를 가리키면 확실하지 않습니다.
@de     - Wenn es auf eine Systemkomponente hinweist, ist es weniger sicher.
@fr     - S'il pointe vers un composant système, c'est moins certain.
@ru     - Если он указывает на системный компонент, это менее определенно.

@en     The error code is the `0x` followed by an 8-digit hexadecimal number. For example:
@zh     报错码可以看 `0x` 开头的一串 8 位的十六进制数字。比如：
@zh-hant     報錯碼可以看 `0x` 開頭的一串 8 位的十六進位制數字。比如：
@ja     エラーコードは `0x` に続く 8 桁の 16 進数です。例：
@ko     오류 코드는 `0x` 다음에 오는 8자리 16진수 숫자입니다. 예를 들어:
@de     Der Fehlercode ist das `0x` gefolgt von einer 8-stelligen Hexadezimalzahl. Zum Beispiel:
@fr     Le code d'erreur est le `0x` suivi d'un nombre hexadécimal à 8 chiffres. Par exemple :
@ru     Код ошибки — это `0x`, за которым следует 8-значное шестнадцатеричное число. Например:

@en     - `0xC06D007F`: Consider video plugin issues. Move OFX plugins out of the OFX folder.
@zh     - `0xC06D007F`，可以考虑是视频插件的问题，把 OFX 插件从 OFX 文件夹里移出来。
@zh-hant     - `0xC06D007F`，可以考慮是影片外掛程式的問題，把 OFX 外掛程式從 OFX 資料夾裡移出來。
@ja     - `0xC06D007F`：ビデオプラグインの問題を考えます。OFX プラグインを OFX フォルダから移動します。
@ko     - `0xC06D007F`: 비디오 플러그인 문제를 고려하십시오. OFX 플러그인을 OFX 폴더에서 이동하십시오.
@de     - `0xC06D007F`: Betrachten Sie Video-Plugin-Probleme. Entfernen Sie OFX-Plugins aus dem OFX-Ordner.
@fr     - `0xC06D007F` : Considérez les problèmes de plugins vidéo. Déplacez les plugins OFX hors du dossier OFX.
@ru     - `0xC06D007F`: Рассмотрите проблемы с видео-плагинами. Переместите OFX-плагины из папки OFX.

@en     - `0xE0434352`: Consider .NET component issues. Try repairing .NET Framework, or extension loading issues. Move extensions out of the extensions folder.
@zh     - `0xE0434352`，可以考虑是 .NET 组件的问题，试着修复一遍 .NET Framework，或者是扩展无法加载的问题，把扩展从扩展文件夹里移出来。
@zh-hant     - `0xE0434352`，可以考慮是 .NET 元件的問題，試著修復一遍 .NET Framework，或者是擴充無法載入的問題，把擴充從擴充資料夾裡移出來。
@ja     - `0xE0434352`：.NET コンポーネントの問題を考えます。.NET Framework の修復を試みるか、または拡張機能の読み込みの問題を考えます。拡張機能フォルダから拡張機能を移動します。
@ko     - `0xE0434352`: .NET 구성 요소 문제를 고려하십시오. .NET Framework 복구를 시도하거나, 확장 로딩 문제를 고려하십시오. 확장을 확장 폴더에서 이동하십시오.
@de     - `0xE0434352`: Betrachten Sie .NET-Komponentenprobleme. Versuchen Sie, .NET Framework zu reparieren, oder Erweiterungsladeprobleme. Entfernen Sie Erweiterungen aus dem Erweiterungsordner.
@fr     - `0xE0434352` : Considérez les problèmes de composants .NET. Essayez de réparer .NET Framework, ou les problèmes de chargement d'extension. Déplacez les extensions hors du dossier d'extensions.
@ru     - `0xE0434352`: Рассмотрите проблемы с компонентами .NET. Попробуйте восстановить .NET Framework или проблемы с загрузкой расширений. Переместите расширения из папки расширений.

@en     Other clues: If the error content explicitly mentions a specific plugin or the keyword `OFX`, also consider video plugin issues.  
@zh     还有一些信息，比如报错内容中明确提及某个特定插件或者 `OFX` 这个关键词，也可以考虑是视频插件的问题。  
@zh-hant     還有一些資訊，比如報錯內容中明確提及某個特定外掛程式或者 `OFX` 這個關鍵詞，也可以考慮是影片外掛程式的問題。  
@ja     その他の手がかり：エラー内容に特定のプラグインまたはキーワード `OFX` が明示的に言及されている場合も、ビデオプラグインの問題を考えます。  
@ko     기타 단서: 오류 내용에서 특정 플러그인 또는 `OFX` 키워드를 명시적으로 언급하면 비디오 플러그인 문제도 고려하십시오.
@de     Andere Hinweise: Wenn der Fehlerinhalt ausdrücklich ein bestimmtes Plugin oder das Schlüsselwort `OFX` erwähnt, betrachten Sie ebenfalls Video-Plugin-Probleme.  
@fr     Autres indices : Si le contenu de l'erreur mentionne explicitement un plugin spécifique ou le mot-clé `OFX`, considérez aussi les problèmes de plugins vidéo.
@ru     Другие подсказки: Если содержимое ошибки явно упоминает конкретный плагин или ключевое слово `OFX`, также рассмотрите проблемы с видео-плагинами.

@en     If none of the above works, you'll have to search online for the error code for various solutions. Some issues might even require a system reinstall to resolve.
@zh     上述办法均无效的情况下，只能在网上搜索报错码找各种解决方案了，甚至有些问题可能只有重装一遍系统才能解决。
@zh-hant     上述辦法均無效的情況下，只能在網上搜尋報錯碼找各種解決方案了，甚至有些問題可能只有重裝一遍系統才能解決。
@ja     上記のいずれも機能しない場合は、オンラインでエラーコードを検索してさまざまな解決策を探すしかありません。一部の問題は、システムの再インストールが必要になることもあります。
@ko     위의 방법 중 어느 것도 효과가 없다면, 온라인에서 오류 코드를 검색하여 다양한 해결책을 찾아야 합니다. 일부 문제는 심지어 시스템 재설치를 해야만 해결될 수 있습니다.
@de     Wenn nichts davon funktioniert, müssen Sie online nach dem Fehlercode für verschiedene Lösungen suchen. Einige Probleme erfordern möglicherweise sogar eine Systemneuinstallation, um sie zu lösen.
@fr     Si rien de ce qui précède ne fonctionne, vous devrez rechercher en ligne le code d'erreur pour diverses solutions. Certains problèmes pourraient même nécessiter une réinstallation du système pour être résolus.
@ru     Если ни одно из вышеперечисленного не работает, вам придется искать код ошибки в Интернете для различных решений. Некоторые проблемы могут даже потребовать переустановки системы для решения.

<br>

@en ## IV. VEGAS Software Operation Q&A
@zh ## 四、Vegas 软件运行相关的 Q&A
@zh-hant ## 四、Vegas 軟體執行相關的 Q&A
@ja ## 四、VEGAS ソフトウェア操作 Q&A
@ko ## IV. VEGAS 소프트웨어 작동 Q&A
@de ## IV. VEGAS Software-Betrieb Q&A
@fr ## IV. FAQ sur le fonctionnement du logiciel VEGAS
@ru ## IV. Вопросы и ответы по работе с ПО VEGAS

@en Q: How to **localize** the VEGAS software interface (Chinese for example)?
@zh Q：Vegas 软件本体**如何汉化**？
@zh-hant Q：Vegas 軟體本體**如何漢化**？
@ja Q: VEGAS ソフトウェアインターフェースを**ローカライズ**する方法（例：日本語化）は？
@ko Q: VEGAS 소프트웨어 인터페이스를 어떻게 **한국어로 현지화**합니까?
@de F: Wie **lokalisieren** Sie die VEGAS-Softwareoberfläche (zum Beispiel auf Chinesisch)?
@fr Q : Comment **localiser** l'interface logicielle VEGAS (en Chinois par exemple) ?
@ru В: Как **локализовать** интерфейс программного обеспечения VEGAS (например, на русский)?

@en A: The VEGAS program internally includes 9 languages: `English, German, French, Portuguese, Spanish, Polish, Chinese, Japanese, Korean`. However, the installer provided on the official website is the International Language version, containing only the first 5 languages listed, **excluding Chinese**.
@zh A：Vegas 软件程序内部一共自带 `英德法葡西波中日韩` 9 种语言，但是官网提供的 Vegas 本体安装包，就只有国际语言版，即上述的前 5 种语言，**不含中文**。
@zh-hant A：Vegas 軟體程式內部一共自帶 `英德法葡西波中日韓` 9 種語言，但是官網提供的 Vegas 本體安裝包，就只有國際語言版，即上述的前 5 種語言，**不含中文**。
@ja A: VEGAS プログラム内部には `英語、ドイツ語、フランス語、ポルトガル語、スペイン語、ポーランド語、中国語、日本語、韓国語` の 9 言語が含まれています。ただし、公式ウェブサイトで提供されるインストーラーは国際言語版で、上記の最初の 5 言語のみを含み、**日本語は含まれていません**。
@ko A: VEGAS 프로그램 내부에는 `영어, 독일어, 프랑스어, 포르투갈어, 스페인어, 폴란드어, 중국어, 일본어, 한국어` 9가지 언어가 포함되어 있습니다. 그러나 공식 웹사이트에서 제공하는 설치 프로그램은 국제 언어 버전으로, 나열된 처음 5가지 언어만 포함하며 **한국어는 포함되지 않습니다**.
@de A: Das VEGAS-Programm enthält intern 9 Sprachen: `Englisch, Deutsch, Französisch, Portugiesisch, Spanisch, Polnisch, Chinesisch, Japanisch, Koreanisch`. Das auf der offiziellen Website bereitgestellte Installationsprogramm ist jedoch die internationale Sprachversion, die nur die ersten 5 aufgeführten Sprachen enthält, **Chinesisch ausgeschlossen**.
@fr R : Le programme VEGAS inclut en interne 9 langues : `Anglais, Allemand, Français, Portugais, Espagnol, Polonais, Chinois, Japonais, Coréen`. Cependant, le programme d'installation fourni sur le site officiel est la version Langue Internationale, contenant seulement les 5 premières langues listées, **excluant le Chinois**.
@ru О: Программа VEGAS внутренне включает 9 языков: `Английский, Немецкий, Французский, Португальский, Испанский, Польский, Китайский, Японский, Корейский`. **Обратите внимание, что русский язык был удален из встроенных языков, начиная с VP17+. Следующий метод изменения реестра, описанный ниже, может не работать для активации русского интерфейса, так как языковые файлы могут отсутствовать.** Однако установщик, предоставляемый на официальном сайте, является международной языковой версией, содержащей только первые 5 языков из списка, **исключая русский**.

@en There are three localization paths:
@zh 有以下三种汉化途径：
@zh-hant 有以下三種漢化途徑：
@ja ローカライズには 3 つの方法があります：
@ko 현지화 경로는 세 가지입니다:
@de Es gibt drei Lokalisierungswege:
@fr Il existe trois voies de localisation :
@ru Существует три пути локализации:

@en 1. **Use a Chinese installer.** Before [purchasing](#xvi-software-purchase-channels), check the language support list to see if Chinese is included. For example, the version on the official website currently does not include Chinese, while versions provided by the Chinese agent and the Steam edition include Chinese. Otherwise, you must try the latter two methods.
@zh 1. **使用中文安装包**。建议在 [入正](#十六、软件入正渠道) 前仔细查看语言支持列表，看是否含有中文。比如目前官网提供的版本不包含中文，而国内代理思杰马克丁提供的版本以及 Steam 版均含中文。否则，只能尝试后两种途径。
@zh-hant 1. **使用中文安裝包**。建議在 [入正](#十六、軟體入正渠道) 前仔細檢視語言支援列表，看是否含有中文。比如目前官網提供的版本不包含中文，而國內代理思傑馬克丁提供的版本以及 Steam 版均含中文。否則，只能嘗試後兩種途徑。
@ja 1. **日本語インストーラーを使用する。** [購入](#十六、ソフトウェア購入チャネル)前に言語サポートリストを確認し、日本語が含まれているかどうかを確認してください。例えば、公式ウェブサイトのバージョンには現在日本語が含まれていませんが、日本の代理店や Steam 版が提供するバージョンには日本語が含まれています。それ以外の場合は、後者の 2 つの方法を試す必要があります。
@ko 1. **한국어 설치 프로그램 사용.** [구매](#xvi-소프트웨어-구매-경로) 전에 언어 지원 목록을 확인하여 한국어가 포함되어 있는지 확인하십시오. 예를 들어, 현재 공식 웹사이트 버전에는 한국어가 포함되어 있지 않지만, 한국 대리점 및 Steam 버전에는 한국어가 포함되어 있습니다. 그렇지 않으면 후자의 두 가지 방법을 시도해야 합니다.
@de 1. **Verwenden Sie ein chinesisches Installationsprogramm.** Vor dem [Kauf](#xvi-software-kaufkanäle) überprüfen Sie die Sprachunterstützungsliste, um zu sehen, ob Chinesisch enthalten ist. Zum Beispiel enthält die Version auf der offiziellen Website derzeit kein Chinesisch, während Versionen, die von chinesischen Vertretern bereitgestellt werden, und die Steam-Edition Chinesisch enthalten. Andernfalls müssen Sie die letzteren zwei Methoden versuchen.
@fr 1. **Utiliser un programme d'installation Chinois.** Avant [l'achat](#xvi-canaux-d-achat-du-logiciel), vérifiez la liste de support des langues pour voir si le Chinois est inclus. Par exemple, la version sur le site officiel n'inclut actuellement pas le Chinois, tandis que les versions fournies par l'agent Chinois et l'édition Steam incluent le Chinois. Sinon, vous devez essayer les deux dernières méthodes.
@ru 1. **Использовать русский установщик.** Перед [покупкой](#xvi-каналы-покупки-по) проверьте список поддерживаемых языков, чтобы узнать, включен ли русский. Например, версия на официальном сайте в настоящее время не включает русский, тогда как версии, предоставляемые некоторыми региональными дистрибьюторами, или издание Steam могут включать русский. В противном случае вы должны попробовать два последних метода.

@en 2. **Use a localization pack created by other users.**
@zh 2. **使用其他用户制作的汉化包**。
@zh-hant 2. **使用其他使用者製作的漢化包**。
@ja 2. **他のユーザーが作成したローカライズパックを使用する。**
@ko 2. **다른 사용자가 만든 현지화 팩 사용.**
@de 2. **Verwenden Sie ein von anderen Benutzern erstelltes Lokalisierungspaket.**
@fr 2. **Utiliser un pack de localisation créé par d'autres utilisateurs.**
@ru 2. **Использовать языковой пакет, созданный другими пользователями.**

@en 3. **Modify the registry.** Modifying the registry can activate the Chinese language built into VEGAS, but compared to the first two methods, this built-in Chinese might be incomplete or inaccurate.
@zh 3. **修改注册表**。修改注册表可以调用出 Vegas 软件内部自带的中文，但相较于前两种途径，这个自带的中文可能会有不全、不准确的问题。
@zh-hant 3. **修改登錄檔**。修改登錄檔可以呼叫出 Vegas 軟體內部自帶的中文，但相較於前兩種途徑，這個自帶的中文可能會有不全、不準確的問題。
@ja 3. **レジストリを変更する。** レジストリを変更することで VEGAS に組み込まれた日本語を有効にできますが、最初の 2 つの方法と比較すると、この組み込み日本語は不完全または不正確である可能性があります。
@ko 3. **레지스트리 수정.** 레지스트리 수정은 VEGAS에 내장된 한국어를 활성화할 수 있지만, 처음 두 가지 방법에 비해 이 내장 한국어는 불완전하거나 부정확할 수 있습니다.
@de 3. **Ändern Sie die Registrierung.** Das Ändern der Registrierung kann die in VEGAS eingebaute deutsche Sprache aktivieren, aber im Vergleich zu den ersten beiden Methoden könnte diese eingebaute deutsche Sprache unvollständig oder ungenau sein.
@fr 3. **Modifier le registre.** Modifier le registre peut activer la langue française intégrée dans VEGAS, mais comparé aux deux premières méthodes, ce français intégré pourrait être incomplet ou imprécis.
@ru 3. **Изменить реестр.** Изменение реестра может попытаться активировать русский язык, встроенный в VEGAS, но по сравнению с первыми двумя методами, этот встроенный русский может быть неполным, неточным или вовсе отсутствовать, особенно в версиях VP17 и выше.

@en **Manual Registry Modification Steps:**
@zh **手动修改注册表**的步骤：
@zh-hant **手動修改登錄檔**的步驟：
@ja **手動レジストリ変更手順：**
@ko **수동 레지스트리 수정 단계:**
@de **Manuelle Registrierungsänderungsschritte:**
@fr **Étapes de modification manuelle du registre :**
@ru **Шаги для ручного изменения реестра:**

@en **With VEGAS already installed**, press `Win + R`, type `regedit` to open Registry Editor. VEGAS language settings are in the `ULangID` value of the following registry keys:
@zh 在**确保已安装 Vegas 本体**的前提下，按 `Win + R` 键打开“运行”，输入 `regedit` 打开注册表编辑器。Vegas 的语言设置保存在以下注册表项的 `ULangID` 值内：
@zh-hant 在**確保已安裝 Vegas 本體**的前提下，按 `Win + R` 鍵開啟“執行”，輸入 `regedit` 開啟登錄檔編輯器。Vegas 的語言設定儲存在以下登錄檔項的 `ULangID` 值內：
@ja **VEGAS がすでにインストールされている**状態で、`Win + R` を押し、`regedit` と入力してレジストリエディターを開きます。VEGAS の言語設定は以下のレジストリキーの `ULangID` 値にあります：
@ko **VEGAS가 이미 설치된 상태에서** `Win + R`을 눌러 `regedit`를 입력하여 레지스트리 편집기를 엽니다. VEGAS 언어 설정은 다음 레지스트리 키의 `ULangID` 값에 있습니다:
@de **Nachdem VEGAS bereits installiert ist**, drücken Sie `Win + R`, geben Sie `regedit` ein, um den Registrierungs-Editor zu öffnen. VEGAS-Spracheinstellungen befinden sich im `ULangID`-Wert der folgenden Registrierungsschlüssel:
@fr **Avec VEGAS déjà installé**, appuyez sur `Win + R`, tapez `regedit` pour ouvrir l'Éditeur du Registre. Les paramètres de langue VEGAS se trouvent dans la valeur `ULangID` des clés de registre suivantes :
@ru **При уже установленном VEGAS**, нажмите `Win + R`, введите `regedit`, чтобы открыть редактор реестра. Настройки языка VEGAS находятся в значении `ULangID` следующих ключей реестра:

@en - Boris FX VEGAS Pro 2026+:
@zh - Boris FX Vegas Pro 2026 及以上：
@zh-hant - Boris FX Vegas Pro 2026 及以上：
@ja - Boris FX Vegas Pro 2026+:
@ko - Boris FX Vegas Pro 2026+:
@de - Boris FX VEGAS Pro 2026+:
@fr - Boris FX VEGAS Pro 2026+:
@ru - Boris FX Vegas Pro 2026+:

```text
HKEY_CURRENT_USER\Software\VEGAS Creative Software\VEGAS Pro\2026.0\Lang
HKEY_LOCAL_MACHINE\SOFTWARE\VEGAS Creative Software\VEGAS Creative Software Video Plug-In Pack\1.0\Lang
HKEY_LOCAL_MACHINE\SOFTWARE\VEGAS Creative Software\VEGAS Creative Software OFX GPU Video Plug-in Pack\1.0\Lang
HKEY_LOCAL_MACHINE\SOFTWARE\VEGAS Creative Software\Error Reporting Client\1.0\Lang
```

@en - Magix VEGAS Pro 20 ~ 23:
@zh - Magix VEGAS Pro 20 ~ 23：
@zh-hant - Magix VEGAS Pro 20 ~ 23：
@ja - Magix VEGAS Pro 20 ~ 23：
@ko - Magix VEGAS Pro 20 ~ 23:
@de - Magix VEGAS Pro 20 ~ 23:
@fr - Magix VEGAS Pro 20 ~ 23 :
@ru - Magix VEGAS Pro 20 ~ 23:

```text
HKEY_LOCAL_MACHINE\SOFTWARE\VEGAS Creative Software\VEGAS Pro\23.0\Lang
HKEY_LOCAL_MACHINE\SOFTWARE\VEGAS Creative Software\VEGAS Creative Software Video Plug-In Pack\1.0\Lang
HKEY_LOCAL_MACHINE\SOFTWARE\VEGAS Creative Software\VEGAS Creative Software OFX GPU Video Plug-in Pack\1.0\Lang
HKEY_LOCAL_MACHINE\SOFTWARE\VEGAS Creative Software\Error Reporting Client\1.0\Lang
```

@en - Magix VEGAS Pro 19 and below:
@zh - Magix VEGAS Pro 19 及以下：
@zh-hant - Magix VEGAS Pro 19 及以下：
@ja - Magix VEGAS Pro 19 以下：
@ko - Magix VEGAS Pro 19 이하:
@de - Magix VEGAS Pro 19 und niedriger:
@fr - Magix VEGAS Pro 19 et moins :
@ru - Magix VEGAS Pro 19 и ниже:

```text
HKEY_LOCAL_MACHINE\SOFTWARE\Sony Creative Software\VEGAS Pro\19.0\Lang
HKEY_LOCAL_MACHINE\SOFTWARE\Sony Creative Software\Sony Vegas Video Plug-In Pack\1.0\Lang
HKEY_LOCAL_MACHINE\SOFTWARE\Sony Creative Software\Sony Vegas OFX GPU Video Plug-in Pack\1.0\Lang
HKEY_LOCAL_MACHINE\SOFTWARE\Sony Creative Software\Error Reporting Client\1.0\Lang
```

@en Here, `2026.0`, `23.0` and `19.0` represent the current VEGAS major version. The first line is the main interface language setting, but it's recommended to change all four.
@zh 其中 `2026.0` 、`23.0` 和 `19.0` 均代表当前 Vegas 版本号。第一行是最主要的软件界面语言设置，不过其他三个也建议同时改。
@zh-hant 其中 `2026.0` 、`23.0` 和 `19.0` 代表當前 Vegas 版本號。第一行是最主要的軟體介面語言設定，不過其他三個也建議同時改。
@ja ここで、`2026.0` 、`23.0` と `19.0` は現在の VEGAS メジャーバージョンを表します。最初の行がメインインターフェースの言語設定ですが、4 つすべてを変更することをお勧めします。
@ko 여기서 `2026.0` 、`23.0` 및 `19.0`은 현재 VEGAS 메이저 버전을 나타냅니다. 첫 번째 줄이 주 인터페이스 언어 설정이지만 네 가지 모두 변경하는 것이 좋습니다.
@de Hier repräsentieren `2026.0` 、`23.0` und `19.0` die aktuelle VEGAS-Hauptversion. Die erste Zeile ist die Haupteinstellung für die Oberflächensprache, aber es wird empfohlen, alle vier zu ändern.
@fr Ici, `2026.0` 、`23.0` et `19.0` représentent la version majeure VEGAS actuelle. La première ligne est le paramètre de langue de l'interface principale, mais il est recommandé de changer les quatre.
@ru Здесь `2026.0` 、`23.0` и `19.0` представляют текущую основную версию VEGAS. Первая строка — это настройка языка основного интерфейса, но рекомендуется изменить все четыре.

<ImageOnDemand src="vegtips/image004_language_reg.png" />

@en If you installed the English version, the default value for `ULangID` is likely the hexadecimal value `409` (decimal `1033`). Change it to **`804` (decimal `2052`) for Chinese**.
@zh 若之前安装的是英文版，则 `ULangID` 的默认值应该是十六进制的 `409`（十进制 `1033`）。将其**改成中文的十六进制的 `804`（十进制 `2052`）**即可。
@zh-hant 若之前安裝的是英文版，則 `ULangID` 的預設值應該是十六進位制的 `409`（十進位制 `1033`）。將其**改成中文的十六進位制的 `804`（十進位制 `2052`）**即可。
@ja 英語版をインストールした場合、`ULangID` のデフォルト値はおそらく16進数で `409`（10進数で `1033`）です。日本語に変更するには、**`411`（10進数で `1041`）に変更してください**。
@ko 영어 버전을 설치한 경우, `ULangID`의 기본값은 16진수 `409`(10진수 `1033`)일 가능성이 높습니다. 한국어로 변경하려면 **16진수 `412`(10진수 `1042`)**로 변경하십시오.
@de Wenn Sie die englische Version installiert haben, ist der Standardwert für `ULangID` wahrscheinlich der hexadezimale Wert `409` (dezimal `1033`). Ändern Sie ihn zu **`407` (dezimal `1031`) für Deutsch**.
@fr Si vous avez installé la version anglaise, la valeur par défaut de `ULangID` est probablement la valeur hexadécimale `409` (décimal `1033`). Changez-la en **`40c` (décimal `1036`) pour le français**.
@ru Если вы установили английскую версию, значение по умолчанию для `ULangID`, скорее всего, будет шестнадцатеричным значением `409` (десятичное `1033`). Измените его на **`419` (шестнадцатеричное, десятичное `1049`) для русского**.

@en <small>For other language IDs, see Microsoft's documentation: https://learn.microsoft.com/openspecs/windows_protocols/ms-lcid<br></small>
@zh <small>其他语言编号详见微软的文档：https://learn.microsoft.com/openspecs/windows_protocols/ms-lcid<br></small>
@zh-hant <small>其他語言編號詳見微軟的文件：https://learn.microsoft.com/openspecs/windows_protocols/ms-lcid<br></small>
@ja <small>他の言語 ID については、Microsoft のドキュメントを参照： https://learn.microsoft.com/openspecs/windows_protocols/ms-lcid<br></small>
@ko <small>다른 언어 ID는 Microsoft 문서를 참조하십시오: https://learn.microsoft.com/openspecs/windows_protocols/ms-lcid<br></small>
@de <small>Für andere Sprach-IDs siehe die Microsoft-Dokumentation: https://learn.microsoft.com/openspecs/windows_protocols/ms-lcid<br></small>
@fr <small>Pour d'autres identifiants de langue, voir la documentation Microsoft : https://learn.microsoft.com/openspecs/windows_protocols/ms-lcid<br></small>
@ru <small>Для других идентификаторов языков см. документацию Microsoft: https://learn.microsoft.com/openspecs/windows_protocols/ms-lcid<br></small>

@en For newer MAGIX VEGAS Pro versions, if **after changing the registry, VEGAS fails to start with `Error code: -1`**, navigate to the `language` folder in VEGAS's installation directory (default: `C:\Program Files\VEGAS\VEGAS Pro 23.0\language\`, where `23.0` is the version). **Rename any `local_xx_XX.cfg` file** (e.g., `local_en_US.cfg` for US English) **to `local_zh_CN.cfg`**.
@zh 对于 Magix VEGAS Pro 的较高版本，如果**改完语言注册表以后重新启动 Vegas，显示 `错误代码: -1`，无法正常启动**，可转到 Vegas 的安装目录中的 `language` 文件夹（默认为 `C:\Program Files\VEGAS\VEGAS Pro 23.0\language\`，其中 `23.0` 是版本号），将其中任意一个 `local_xx_XX.cfg` 文件（比如美式英语的 `local_en_US.cfg`）**重命名成 `local_zh_CN.cfg`**。
@zh-hant 對於 Magix VEGAS Pro 的較高版本，如果**改完語言登錄檔以後重新啟動 Vegas，顯示 `錯誤代碼: -1`，無法正常啟動**，可轉到 Vegas 的安裝目錄中的 `language` 資料夾（預設為 `C:\Program Files\VEGAS\VEGAS Pro 23.0\language\`，其中 `23.0` 是版本號），將其中任意一個 `local_xx_XX.cfg` 檔案（比如美式英語的 `local_en_US.cfg`）**重新命名成 `local_zh_CN.cfg`**。
@ja MAGIX VEGAS Pro の比較的新しいバージョンでは、**レジストリを変更した後、VEGAS が `エラーコード: -1` で起動に失敗する**場合、VEGAS のインストールディレクトリ内の `language` フォルダ（デフォルト： `C:\Program Files\VEGAS\VEGAS Pro 23.0\language\`、`23.0` はバージョン）に移動します。任意の `local_xx_XX.cfg` ファイル（例：米国英語の `local_en_US.cfg`）を **`local_ja_JP.cfg` に名前変更**します。
@ko 비교적 최신 MAGIX VEGAS Pro 버전의 경우, **레지스트리를 변경한 후 VEGAS가 `오류 코드: -1`로 시작되지 않으면**, VEGAS 설치 디렉토리의 `language` 폴더로 이동합니다(기본값: `C:\Program Files\VEGAS\VEGAS Pro 23.0\language\`, 여기서 `23.0`은 버전). **`local_xx_XX.cfg` 파일**(예: 미국 영어의 경우 `local_en_US.cfg`) **을 `local_ko_KR.cfg`로 이름을 바꿉니다**.
@de Für höhere MAGIX VEGAS Pro-Versionen, wenn **nach dem Ändern der Registrierung VEGAS mit `Fehlercode: -1` nicht startet**, navigieren Sie zum `language`-Ordner im VEGAS-Installationsverzeichnis (Standard: `C:\Programme\VEGAS\VEGAS Pro 23.0\language\`, wobei `23.0` die Version ist). **Benennen Sie jede `local_xx_XX.cfg`-Datei** (z. B. `local_en_US.cfg` für US-Englisch) **in `local_de_DE.cfg` um**.
@fr Pour les versions plus récentes de MAGIX VEGAS Pro, si **après avoir changé le registre, VEGAS ne démarre pas avec `Code d'erreur : -1`**, naviguez vers le dossier `language` dans le répertoire d'installation de VEGAS (par défaut : `C:\Program Files\VEGAS\VEGAS Pro 23.0\language\`, où `23.0` est la version). **Renommez tout fichier `local_xx_XX.cfg`** (par ex. `local_en_US.cfg` pour l'anglais américain) **en `local_fr_FR.cfg`**.
@ru Для более новых версий MAGIX VEGAS Pro, если **после изменения реестра VEGAS не запускается с `Код ошибки: -1`**, перейдите в папку `language` в каталоге установки VEGAS (по умолчанию: `C:\Program Files\VEGAS\VEGAS Pro 23.0\language\`, где `23.0` — версия). **Переименуйте любой файл `local_xx_XX.cfg`** (например, `local_en_US.cfg` для американского английского) **в `local_ru_RU.cfg`**. **Учтите, что файл `local_ru_RU.cfg` может отсутствовать в версиях VP17 и выше, так как русская локализация была удалена.**

@en <small>Another useful tool: <code>Vegas Language Changer</code>: https://github.com/IZH318/Vegas-Language-Changer</small>
@zh <small>另一个有用的工具 <code>Vegas Language Changer</code>：https://github.com/IZH318/Vegas-Language-Changer</small>
@zh-hant <small>另一個有用的工具 <code>Vegas Language Changer</code>：https://github.com/IZH318/Vegas-Language-Changer</small>
@ja <small>別の便利なツール： <code>Vegas Language Changer</code>: https://github.com/IZH318/Vegas-Language-Changer</small>
@ko <small>또 다른 유용한 도구: <code>Vegas Language Changer</code>: https://github.com/IZH318/Vegas-Language-Changer</small>
@de <small>Ein weiteres nützliches Tool: <code>Vegas Language Changer</code>: https://github.com/IZH318/Vegas-Language-Changer</small>
@fr <small>Un autre outil utile : <code>Vegas Language Changer</code> : https://github.com/IZH318/Vegas-Language-Changer</small>
@ru <small>Еще один полезный инструмент: <code>Vegas Language Changer</code>: https://github.com/IZH318/Vegas-Language-Changer</small>

@en After successfully starting VEGAS, if the names of built-in video FX are still in English, you can try [clearing the plugin cache](#video-plugin-q-a).
@zh 成功启动 Vegas 后，若发现自带视频插件的效果名称仍然为英文，可以尝试 [清理插件缓存](#视频插件相关的-q-a)。
@zh-hant 成功啟動 Vegas 後，若發現自帶影片外掛程式的效果名稱仍然為英文，可以嘗試 [清理外掛程式快取](#影片外掛程式相關的-q-a)。
@ja VEGAS の起動に成功した後、組み込みビデオ FX の名前がまだ英語のままの場合は、[プラグインキャッシュのクリア](#ビデオプラグイン-q-a) を試みることができます。
@ko VEGAS를 성공적으로 시작한 후 내장 비디오 FX의 이름이 여전히 영어로 표시되면 [플러그인 캐시 지우기](#비디오-플러그인-q-a)를 시도해 볼 수 있습니다.
@de Nachdem VEGAS erfolgreich gestartet wurde, wenn die Namen der eingebauten Video-FX immer noch auf Englisch sind, können Sie versuchen, den [Plugin-Cache zu löschen](#video-plugin-q-a).
@fr Après avoir démarré VEGAS avec succès, si les noms des FX vidéo intégrés sont toujours en anglais, vous pouvez essayer [d'effacer le cache des plugins](#faq-sur-les-plugins-vidéo).
@ru После успешного запуска VEGAS, если названия встроенных видеоэффектов все еще на английском, вы можете попробовать [очистить кэш плагинов](#вопросы-и-ответы-по-видео-плагинам).

<br>

@en Q: Error during installation: **PC needs to restart to continue installation**?<br>`Setup has detected that the system is currently waiting for a reboot to complete a previous installation or update. To avoid problems, please reboot your system before installing.`
@zh Q：错误：安装时提示**电脑需要重启，才能继续安装**？<br>`Setup has detected that the system is currently waiting for a reboot to complete a previous installation or update. To avoid problems, please reboot your system before installing.`
@zh-hant Q：錯誤：安裝時提示**電腦需要重啟，才能繼續安裝**？<br>`Setup has detected that the system is currently waiting for a reboot to complete a previous installation or update. To avoid problems, please reboot your system before installing.`
@ja Q: インストール中にエラー：**PC を再起動してインストールを続行する必要があります**？<br>`Setup has detected that the system is currently waiting for a reboot to complete a previous installation or update. To avoid problems, please reboot your system before installing.`
@ko Q: 설치 중 오류: **설치를 계속하려면 PC를 다시 시작해야 합니까**?<br>`Setup has detected that the system is currently waiting for a reboot to complete a previous installation or update. To avoid problems, please reboot your system before installing.`
@de F: Fehler während der Installation: **PC muss neu starten, um die Installation fortzusetzen**?<br>`Setup hat festgestellt, dass das System derzeit auf einen Neustart wartet, um eine vorherige Installation oder ein vorheriges Update abzuschließen. Um Probleme zu vermeiden, starten Sie Ihr System bitte neu, bevor Sie installieren.`
@fr Q : Erreur lors de l'installation : **PC doit redémarrer pour continuer l'installation** ?<br>`Le programme d'installation a détecté que le système attend actuellement un redémarrage pour terminer une installation ou une mise à jour précédente. Pour éviter les problèmes, veuillez redémarrer votre système avant d'installer.`
@ru В: Ошибка при установке: **ПК необходимо перезагрузить для продолжения установки**?<br>`Setup has detected that the system is currently waiting for a reboot to complete a previous installation or update. To avoid problems, please reboot your system before installing.`

<ImageOnDemand src="vegtips/image005_install_reboot.png" />

@en A: First, try restarting your PC. If that doesn't work, you need to modify the registry. Open Registry Editor, navigate to **`HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session Manager`**, **delete the value `PendingFileRenameOperations`**, then restart your PC.
@zh A：先试试重启电脑。若重启后无法解决，则需要更改注册表。打开注册表编辑器，找到 **`HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session Manager`** 项，**删除 `PendingFileRenameOperations`** 这一值，之后重启电脑。
@zh-hant A：先試試重啟電腦。若重啟後無法解決，則需要更改登錄檔。開啟登錄檔編輯器，找到 **`HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session Manager`** 項，**刪除 `PendingFileRenameOperations`** 這一值，之後重啟電腦。
@ja A: まず、PC を再起動してみてください。それでもダメな場合は、レジストリを変更する必要があります。レジストリエディターを開き、 **`HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session Manager`** に移動し、 **`PendingFileRenameOperations`** の値を削除してから、PC を再起動します。
@ko A: 먼저 PC를 다시 시작해 보십시오. 작동하지 않으면 레지스트리를 수정해야 합니다. 레지스트리 편집기를 열고 **`HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session Manager`** 로 이동하여 **`PendingFileRenameOperations`** 값을 **삭제**한 후 PC를 다시 시작하십시오.
@de A: Versuchen Sie zuerst, Ihren PC neu zu starten. Wenn das nicht funktioniert, müssen Sie die Registrierung ändern. Öffnen Sie den Registrierungs-Editor, navigieren Sie zu **`HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session Manager`**, **löschen Sie den Wert `PendingFileRenameOperations`**, dann starten Sie Ihren PC neu.
@fr R : Tout d'abord, essayez de redémarrer votre PC. Si cela ne fonctionne pas, vous devez modifier le registre. Ouvrez l'Éditeur du Registre, naviguez vers **`HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session Manager`**, **supprimez la valeur `PendingFileRenameOperations`**, puis redémarrez votre PC.
@ru О: Сначала попробуйте перезагрузить ПК. Если это не помогло, вам нужно изменить реестр. Откройте редактор реестра, перейдите к **`HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session Manager`**, **удалите значение `PendingFileRenameOperations`**, затем перезагрузите ПК.

@en <!-- -->
@zh <small>参见：https://tieba.baidu.com/p/4339996851<br></small>
@zh-hant <small>參見：https://tieba.baidu.com/p/4339996851<br></small>

<br>

@en Q: Error: **`An error occurred during the installation -2147163964. Unable to register module xxxxx.dll`**.
@zh Q：错误：**`安装过程中发生 -2147163964。未能注册模块 xxxxx.dll`**。
@zh-hant Q：錯誤：**`安裝過程中發生 -2147163964。未能註冊模組 xxxxx.dll`**。
@ja Q: エラー：**`インストール中にエラーが発生しました -2147163964。モジュール xxxxx.dll を登録できません`**。
@ko Q: 오류: **`설치 중 오류 발생 -2147163964. 모듈 xxxxx.dll을 등록할 수 없음`**.
@de F: Fehler: **`Während der Installation ist ein Fehler aufgetreten -2147163964. Modul xxxxx.dll konnte nicht registriert werden`**.
@fr Q : Erreur : **`Une erreur s'est produite lors de l'installation -2147163964. Impossible d'enregistrer le module xxxxx.dll`**.
@ru В: Ошибка: **`Произошла ошибка во время установки -2147163964. Не удалось зарегистрировать модуль xxxxx.dll`**.

<ImageOnDemand src="vegtips/image006_install_dll.png" />

@en A: **Restarting your PC and reinstalling** usually fixes this. If it persists, try **installing a different version**.
@zh A：这种情况**重启一遍电脑再安装**一般就能解决。仍无法解决时可以**试试安装其他版本**。
@zh-hant A：這種情況**重啟一遍電腦再安裝**一般就能解決。仍無法解決時可以**試試安裝其他版本**。
@ja A: **PC を再起動して再インストール**するだけで通常は修正されます。それでも続く場合は、**別のバージョンをインストール**してみてください。
@ko A: **PC를 다시 시작하고 다시 설치**하면 일반적으로 해결됩니다. 지속되면 **다른 버전을 설치**해 보십시오.
@de A: **Neustarten Ihres PCs und Neuinstallation** behebt dies normalerweise. Wenn es bestehen bleibt, versuchen Sie **eine andere Version zu installieren**.
@fr R : **Redémarrer votre PC et réinstaller** résout généralement ce problème. Si cela persiste, essayez **d'installer une version différente**.
@ru О: **Перезагрузка ПК и переустановка** обычно это исправляет. Если проблема сохраняется, попробуйте **установить другую версию**.

<br>

@en Q: VEGAS won't start no matter what, **not even showing the loading window**?
@zh Q：Vegas 怎么点都无法启动，**连加载窗口都不显示**？
@zh-hant Q：Vegas 怎麼點都無法啟動，**連載入視窗都不顯示**？
@ja Q: VEGAS がどうしても起動しない、**ローディングウィンドウすら表示されない**？
@ko Q: VEGAS가 아무리 해도 시작되지 않고, **로딩 창도 표시되지 않음**?
@de F: VEGAS startet überhaupt nicht, **zeigt nicht einmal das Ladefenster**?
@fr Q : VEGAS ne démarre pas quoi qu'il arrive, **n'affiche même pas la fenêtre de chargement** ?
@ru В: VEGAS никак не запускается, **даже окно загрузки не появляется**?

@en A: This is an old issue: **VEGAS processes are stuck in the background**. **Open Task Manager, find and end all VEGAS-related processes, then try running VEGAS again.**
@zh A：这个是老问题，**Vegas 卡后台进程了**。**打开任务管理器，找到所有 Vegas 后台进程并杀除，然后尝试重新运行 Vegas。**
@zh-hant A：這個是老問題，**Vegas 卡後臺程序了**。**開啟工作管理員，找到所有 Vegas 後臺程序並殺除，然後嘗試重新執行 Vegas。**
@ja A: これは古い問題：**VEGAS プロセスがバックグラウドで停止しています**。**タスクマネージャーを開き、すべての VEGAS 関連プロセスを見つけて終了し、VEGAS をもう一度実行してみてください。**
@ko A: 이전 문제: **VEGAS 프로세스가 백그라운드에서 멈춰 있습니다**. **작업 관리자를 열고 모든 VEGAS 관련 프로세스를 찾아 종료한 후 VEGAS를 다시 실행해 보십시오.**
@de A: Dies ist ein altes Problem: **VEGAS-Prozesse stecken im Hintergrund fest**. **Öffnen Sie den Task-Manager, finden und beenden Sie alle VEGAS-bezogenen Prozesse, dann versuchen Sie, VEGAS erneut auszuführen.**
@fr R : C'est un vieux problème : **Les processus VEGAS sont bloqués en arrière-plan**. **Ouvrez le Gestionnaire des tâches, trouvez et terminez tous les processus liés à VEGAS, puis essayez de relancer VEGAS.**
@ru О: Это старая проблема: **Процессы VEGAS зависли в фоне**. **Откройте Диспетчер задач, найдите и завершите все процессы, связанные с VEGAS, затем попробуйте снова запустить VEGAS.**

<br>

@en Q: VEGAS **crashes/freezes** at the "**Initializing GPU-accelerated video processing...**" step during startup?
@zh Q：Vegas 在启动时，“**正在初始化 GPU 加速的视频处理...**”这一步**崩溃/闪退**？
@zh-hant Q：Vegas 在啟動時，“**正在初始化 GPU 加速的影片處理...**”這一步**崩潰/閃退**？
@ja Q: VEGAS が起動時の「**GPU アクセラレーションされたビデオ処理を初期化しています...**」ステップで**クラッシュ/フリーズ**する？
@ko Q: VEGAS 시작 시 "**GPU 가속 비디오 처리 초기화 중...**" 단계에서 **크래시/정지**됩니까?
@de F: VEGAS **stürzt ab/friert ein** beim Schritt "**GPU-beschleunigte Videoverarbeitung wird initialisiert...**" während des Starts?
@fr Q : VEGAS **plante/se bloque** à l'étape "**Initialisation du traitement vidéo accéléré par GPU...**" pendant le démarrage ?
@ru В: VEGAS **аварийно завершает работу/зависает** на шаге "**Инициализация GPU-ускоренной обработки видео...**" во время запуска?

@en A: First, try reinstalling your graphics card drivers. If that doesn't work, try this registry fix. Open Registry Editor, find the value:**`IntelOpenCL64.dll`** under **`HKEY_LOCAL_MACHINE\SOFTWARE\Khronos\OpenCL\Vendors`** and the value **`IntelOpenCL32.dll`** under **`HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Khronos\OpenCL\Vendors`**. Change the data for both values **from `0` to `1`**, then restart VEGAS.
@zh A：可以先尝试重装显卡驱动。若重装显卡驱动无法解决，也可以尝试这个修改注册表办法。打开注册表编辑器，分别找到 **`HKEY_LOCAL_MACHINE\SOFTWARE\Khronos\OpenCL\Vendors`** 项的 **`IntelOpenCL64.dll`** 值和 **`HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Khronos\OpenCL\Vendors`** 项的 **`IntelOpenCL32.dll`** 值。将这两个值的数据**从 `0` 改为 `1`**，重启 Vegas 看能否解决。
@zh-hant A：可以先嘗試重裝顯示卡驅動。若重裝顯示卡驅動無法解決，也可以嘗試這個修改登錄檔辦法。開啟登錄檔編輯器，分別找到 **`HKEY_LOCAL_MACHINE\SOFTWARE\Khronos\OpenCL\Vendors`** 項的 **`IntelOpenCL64.dll`** 值和 **`HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Khronos\OpenCL\Vendors`** 項的 **`IntelOpenCL32.dll`** 值。將這兩個值的資料**從 `0` 改為 `1`**，重啟 Vegas 看能否解決。
@ja A: まず、グラフィックスカードドライバーを再インストールしてみてください。それでもダメな場合は、このレジストリ修正を試みてください。レジストリエディターを開き、 **`HKEY_LOCAL_MACHINE\SOFTWARE\Khronos\OpenCL\Vendors`** の下の値 **`IntelOpenCL64.dll`** と **`HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Khronos\OpenCL\Vendors`** の下の値 **`IntelOpenCL32.dll`** を見つけます。両方の値のデータを **`0` から `1`** に変更し、VEGAS を再起動します。
@ko A: 먼저 그래픽 카드 드라이버를 다시 설치해 보십시오. 작동하지 않으면 이 레지스트리 수정을 시도해 보십시오. 레지스트리 편집기를 열고 **`HKEY_LOCAL_MACHINE\SOFTWARE\Khronos\OpenCL\Vendors`** 아래의 **`IntelOpenCL64.dll`** 값과 **`HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Khronos\OpenCL\Vendors`** 아래의 **`IntelOpenCL32.dll`** 값을 찾습니다. 두 값의 데이터를 **`0`에서 `1`로 변경**한 후 VEGAS를 다시 시작하십시오.
@de A: Versuchen Sie zuerst, Ihre Grafikkartentreiber neu zu installieren. Wenn das nicht funktioniert, versuchen Sie diese Registrierungsänderung. Öffnen Sie den Registrierungs-Editor, finden Sie den Wert:**`IntelOpenCL64.dll`** unter **`HKEY_LOCAL_MACHINE\SOFTWARE\Khronos\OpenCL\Vendors`** und den Wert **`IntelOpenCL32.dll`** unter **`HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Khronos\OpenCL\Vendors`**. Ändern Sie die Daten für beide Werte **von `0` auf `1`**, dann starten Sie VEGAS neu.
@fr R : Tout d'abord, essayez de réinstaller vos pilotes graphiques. Si cela ne fonctionne pas, essayez cette correction de registre. Ouvrez l'Éditeur du Registre, trouvez la valeur : **`IntelOpenCL64.dll`** sous **`HKEY_LOCAL_MACHINE\SOFTWARE\Khronos\OpenCL\Vendors`** et la valeur **`IntelOpenCL32.dll`** sous **`HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Khronos\OpenCL\Vendors`**. Changez les données pour les deux valeurs **de `0` à `1`**, puis redémarrez VEGAS.
@ru О: Сначала попробуйте переустановить драйверы видеокарты. Если это не помогло, попробуйте это исправление реестра. Откройте редактор реестра, найдите значение: **`IntelOpenCL64.dll`** в разделе **`HKEY_LOCAL_MACHINE\SOFTWARE\Khronos\OpenCL\Vendors`** и значение **`IntelOpenCL32.dll`** в разделе **`HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Khronos\OpenCL\Vendors`**. Измените данные для обоих значений **с `0` на `1`**, затем перезапустите VEGAS.

@en <!-- -->
@zh <small>参见：https://www.bilibili.com/video/BV11z411i74a/<br></small>
@zh-hant <small>參見：https://www.bilibili.com/video/BV11z411i74a/<br></small>

<br>

@en Q: VEGAS **crashes/freezes (Error code `0xC06D007F`)** at the "**Video plugin factory...**" step during startup?
@zh Q：Vegas 在启动时，“**正在视频插件工厂...**”这一步**崩溃/闪退（报错码 `0xC06D007F`）**？
@zh-hant Q：Vegas 在啟動時，“**正在影片外掛程式工廠...**”這一步**崩潰/閃退（報錯碼 `0xC06D007F`）**？
@ja Q: VEGAS が起動時の「**ビデオプラグインファクトリー...**」ステップで**クラッシュ/フリーズ（エラーコード `0xC06D007F`）** する？
@ko Q: VEGAS 시작 시 "**비디오 플러그인 팩토리...**" 단계에서 **크래시/정지 (오류 코드 `0xC06D007F`)** 됩니까?
@de F: VEGAS **stürzt ab/friert ein (Fehlercode `0xC06D007F`)** beim Schritt "**Video-Plugin-Fabrik...**" während des Starts?
@fr Q : VEGAS **plante/se bloque (Code d'erreur `0xC06D007F`)** à l'étape "**Usine de plugins vidéo...**" pendant le démarrage ?
@ru В: VEGAS **аварийно завершает работу/зависает (Код ошибки `0xC06D007F`)** на шаге "**Фабрика видео-плагинов...**" во время запуска?

@en A: This step loads video plugins. It's often an issue with OFX video plugin scanning. Go to the OFX path: **`C:\Program Files\Common Files\OFX\Plugins\`, move out potentially problematic plugins from this folder, then try starting VEGAS**. Once it starts normally, you can try moving the files back or reinstalling the plugin. If you have specific error details, try to find keywords related to the plugin name.<br>**<small>(Prioritize checking Red Giant Universe plugins, as they cause startup crashes for many users.)</small>**
@zh A：这一步是在加载视频插件，一般可以考虑是 OFX 视频插件的扫描问题，转到 OFX 路径：**`C:\Program Files\Common Files\OFX\Plugins\`，把可能出现问题的插件从这个文件夹移出来，再尝试启动 Vegas**。确定能够正常启动后，可以再试着把文件重新移回去，或者重装这个插件等。有具体报错内容的话，可以试着从中找到对应插件名称的关键词。<br>**<small>（建议优先排查红巨星宇宙插件 `Red Giant Universe`，大部分人遇到的启动时崩溃问题都由它导致。）</small>**
@zh-hant A：這一步是在載入影片外掛程式，一般可以考慮是 OFX 影片外掛程式的掃描問題，轉到 OFX 路徑：**`C:\Program Files\Common Files\OFX\Plugins\`，把可能出現問題的外掛程式從這個資料夾移出來，再嘗試啟動 Vegas**。確定能夠正常啟動後，可以再試著把檔案重新移回去，或者重裝這個外掛程式等。有具體報錯內容的話，可以試著從中找到對應外掛程式名稱的關鍵詞。<br>**<small>（建議優先排查紅巨星宇宙外掛程式 `Red Giant Universe`，大部分人遇到的啟動時崩潰問題都由它導致。）</small>**
@ja A: このステップはビデオプラグインをロードします。多くの場合、OFX ビデオプラグインのスキャンに関する問題です。OFX パス： **`C:\Program Files\Common Files\OFX\Plugins\`** に移動し、問題のある可能性のあるプラグインをこのフォルダから移動し、VEGAS の起動を試みてください。正常に起動したら、ファイルを戻したり、プラグインを再インストールしたりできます。特定のエラーの詳細がある場合は、プラグイン名に関連するキーワードを見つけてみてください。<br>**<small>（優先的に Red Giant Universe プラグインを確認してください。多くのユーザーで起動クラッシュを引き起こします。）</small>**
@ko A: 이 단계에서는 비디오 플러그인을 로드합니다. 종종 OFX 비디오 플러그인 스캔 문제입니다. OFX 경로로 이동: **`C:\Program Files\Common Files\OFX\Plugins\`, 이 폴더에서 잠재적으로 문제가 있는 플러그인을 이동한 후 VEGAS 시작을 시도해 보십시오**. 정상적으로 시작되면 파일을 다시 이동하거나 플러그인을 재설치할 수 있습니다. 특정 오류 세부 정보가 있으면 플러그인 이름과 관련된 키워드를 찾아보십시오.<br>**<small>(Red Giant Universe 플러그인을 우선 확인하십시오. 많은 사용자의 시작 시 크래시를 유발합니다.)</small>**
@de A: Dieser Schritt lädt Video-Plugins. Es ist oft ein Problem mit dem OFX-Video-Plugin-Scan. Gehen Sie zum OFX-Pfad: **`C:\Programme\Gemeinsame Dateien\OFX\Plugins\`**, **entfernen Sie potenziell problematische Plugins aus diesem Ordner**, dann versuchen Sie, VEGAS zu starten. Sobald es normal startet, können Sie versuchen, die Dateien zurückzubewegen oder das Plugin neu zu installieren. Wenn Sie spezifische Fehlerdetails haben, versuchen Sie, Schlüsselwörter im Zusammenhang mit dem Plugin-Namen zu finden.<br>**<small>(Überprüfen Sie zuerst Red Giant Universe-Plugins, da sie bei vielen Benutzern Startabstürze verursachen.)</small>**
@fr R : Cette étape charge les plugins vidéo. C'est souvent un problème de scan des plugins vidéo OFX. Allez dans le chemin OFX : **`C:\Program Files\Common Files\OFX\Plugins\`**, déplacez les plugins potentiellement problématiques hors de ce dossier, puis essayez de démarrer VEGAS**. Une fois démarré normalement, vous pouvez essayer de remettre les fichiers ou de réinstaller le plugin. Si vous avez des détails d'erreur spécifiques, essayez de trouver des mots-clés liés au nom du plugin.<br>**<small>(Vérifiez en priorité les plugins Red Giant Universe, car ils provoquent des plantages au démarrage pour de nombreux utilisateurs.)</small>**
@ru О: Этот шаг загружает видео-плагины. Часто это проблема со сканированием OFX видео-плагинов. Перейдите по пути OFX: **`C:\Program Files\Common Files\OFX\Plugins\`, переместите потенциально проблемные плагины из этой папки, затем попробуйте запустить VEGAS**. После нормального запуска вы можете попробовать вернуть файлы обратно или переустановить плагин. Если у вас есть конкретные детали ошибки, попробуйте найти ключевые слова, связанные с именем плагина.<br>**<small>(В первую очередь проверьте плагины Red Giant Universe, так как они вызывают сбои при запуске у многих пользователей.)</small>**

<br>

@en Q: VEGAS **hangs/crashes/freezes** at the "**Scanning VST plug-ins...**" step during startup?
@zh Q：Vegas 在启动时，“**正在扫描 VST 插件...**”这一步**卡住/崩溃/闪退**？
@zh-hant Q：Vegas 在啟動時，“**正在掃描 VST 外掛程式...**”這一步**卡住/崩潰/閃退**？
@ja Q: VEGAS が起動時の「**VST プラグインをスキャンしています...**」ステップで**停止/クラッシュ/フリーズ**する？
@ko Q: VEGAS 시작 시 "**VST 플러그인 스캔 중...**" 단계에서 **정지/크래시/정지**됩니까?
@de F: VEGAS **hängt/ stürzt ab/ friert ein** beim Schritt "**VST-Plugins werden gescannt...**" während des Starts?
@fr Q : VEGAS **se bloque/plante/se fige** à l'étape "**Scan des plugins VST...**" pendant le démarrage ?
@ru В: VEGAS **зависает/аварийно завершает работу** на шаге "**Сканирование VST плагинов...**" во время запуска?

@en A: Try **disabling VST scanning on startup**. Right-click the VEGAS **shortcut -> Properties**. In the **`Target`** field, add **` /NOVSTGROVEL`** at the end (**note the space before the slash**). Then run VEGAS using this shortcut. Once it starts normally, you can move problematic plugins from the [VST paths](#xi-audio-plugin-related), store them separately, etc.
@zh A：可以尝试**在启动 Vegas 时禁用 VST 扫描**，方法如下：对着 Vegas 的**快捷方式 `右键 -> 属性`**，在 **`目标`** 这一栏的最后加上 **` /NOVSTGROVEL`** 命令（**注意要和前面隔开空格**），之后运行这个快捷方式。确定能够正常启动后，可以将有问题的插件从 [VST 路径](#vst-相关路径)里挪开，单独存放，等等。
@zh-hant A：可以嘗試**在啟動 Vegas 時禁用 VST 掃描**，方法如下：對著 Vegas 的**捷徑 `右鍵 -> 內容`**，在 **`目標`** 這一欄的最後加上 **` /NOVSTGROVEL`** 命令（**注意要和前面隔開空格**），之後執行這個捷徑。確定能夠正常啟動後，可以將有問題的外掛程式從 [VST 路徑](#vst-相關路徑)裡挪開，單獨存放，等等。
@ja A: **起動時の VST スキャンを無効にする**ことを試みてください。VEGAS の**ショートカットを右クリック -> プロパティ**。 **`ターゲット`** フィールドの末尾に **` /NOVSTGROVEL`** を追加します（**スラッシュの前のスペースに注意**）。その後、このショートカットを使用して VEGAS を実行します。正常に起動したら、[VST パス](#十一、オーディオプラグイン関連)から問題のあるプラグインを移動し、別途保存するなどできます。
@ko A: **시작 시 VST 스캔 비활성화**를 시도해 보십시오. VEGAS **바로가기 -> 속성**을 마우스 오른쪽 버튼으로 클릭합니다. **`대상`** 필드 끝에 **` /NOVSTGROVEL`** 을 추가합니다(**슬래시 앞 공백에 주의**). 그런 다음 이 바로가기를 사용하여 VEGAS를 실행합니다. 정상적으로 시작되면 [VST 경로](#xi-오디오-플러그인-관련)에서 문제가 있는 플러그인을 이동하고 별도로 저장할 수 있습니다.
@de A: Versuchen Sie, **das VST-Scannen beim Start zu deaktivieren**. Klicken Sie mit der rechten Maustaste auf die VEGAS-**Verknüpfung -> Eigenschaften**. Im Feld **`Ziel`** fügen Sie am Ende **` /NOVSTGROVEL`** hinzu (**beachten Sie das Leerzeichen vor dem Schrägstrich**). Führen Sie dann VEGAS über diese Verknüpfung aus. Sobald es normal startet, können Sie problematische Plugins von den [VST-Pfaden](#xi-audio-plugin-bezogene) entfernen, separat speichern usw.
@fr R : Essayez **de désactiver le scan VST au démarrage**. Faites un clic droit sur le **raccourci VEGAS -> Propriétés**. Dans le champ **`Cible`**, ajoutez **` /NOVSTGROVEL`** à la fin (**notez l'espace avant la barre oblique**). Puis exécutez VEGAS en utilisant ce raccourci. Une fois démarré normalement, vous pouvez déplacer les plugins problématiques des [chemins VST](#xi-faq-concernant-les-plugins-audio), les stocker séparément, etc.
@ru О: Попробуйте **отключить сканирование VST при запуске**. Щелкните правой кнопкой мыши на **ярлыке VEGAS -> Свойства**. В поле **`Цель`** добавьте **` /NOVSTGROVEL`** в конце (**обратите внимание на пробел перед косой чертой**). Затем запустите VEGAS с помощью этого ярлыка. После нормального запуска вы можете переместить проблемные плагины из [путей VST](#xi-вопросы-и-ответы-по-аудио-плагинам), сохранить их отдельно и т.д.

<ImageOnDemand src="vegtips/image007_novstgrovel.png" />

<br>

@en Q: VEGAS **hangs/crashes/freezes** at the "**Initializing DirectX plug-ins...**" step during startup?
@zh Q：Vegas 在启动时，“**正在初始化 DirectX 插件...**”这一步**卡住/崩溃/闪退**？
@zh-hant Q：Vegas 在啟動時，“**正在初始化 DirectX 外掛程式...**”這一步**卡住/崩潰/閃退**？
@ja Q: VEGAS が起動時の「**DirectX プラグインを初期化しています...**」ステップで**停止/クラッシュ/フリーズ**する？
@ko Q: VEGAS 시작 시 "**DirectX 플러그인 초기화 중...**" 단계에서 **정지/크래시/정지**됩니까?
@de F: VEGAS **hängt/ stürzt ab/ friert ein** beim Schritt "**DirectX-Plugins werden initialisiert...**" während des Starts?
@fr Q : VEGAS **se bloque/plante/se fige** à l'étape "**Initialisation des plugins DirectX...**" pendant le démarrage ?
@ru В: VEGAS **зависает/аварийно завершает работу** на шаге "**Инициализация DirectX плагинов...**" во время запуска?

@en A: Similarly, try **disabling DirectX plugin scanning on startup** using the command **` /NODXGROVEL`**.
@zh A：同上，可以尝试**在启动 Vegas 时禁用 DirectX 插件扫描**，命令为 **` /NODXGROVEL`**。
@zh-hant A：同上，可以嘗試**在啟動 Vegas 時禁用 DirectX 外掛程式掃描**，命令為 **` /NODXGROVEL`**。
@ja A: 同様に、コマンド **` /NODXGROVEL`** を使用して**起動時の DirectX プラグインスキャンを無効にする**ことを試みてください。
@ko A: 마찬가지로, **시작 시 DirectX 플러그인 스캔 비활성화**를 시도해 보십시오. 명령은 **` /NODXGROVEL`** 입니다.
@de A: Ähnlich, versuchen Sie, **das DirectX-Plugin-Scannen beim Start zu deaktivieren**, mit dem Befehl **` /NODXGROVEL`**.
@fr R : De même, essayez **de désactiver le scan des plugins DirectX au démarrage** en utilisant la commande **` /NODXGROVEL`**.
@ru О: Аналогично, попробуйте **отключить сканирование плагинов DirectX при запуске** с помощью команды **` /NODXGROVEL`**.

<br>

@en Q: VEGAS **crashes/freezes (Error code `0xE0434352`)** at the "**Initializing UI...**" step during startup, or **immediately after the main window appears**?
@zh Q：Vegas 在启动时，“**正在初始化 UI...**”这一步**崩溃/闪退（报错码 `0xE0434352`）**，或者**弹出 Vegas 主程序窗口以后立即闪退**？
@zh-hant Q：Vegas 在啟動時，“**正在初始化 UI...**”這一步**崩潰/閃退（報錯碼 `0xE0434352`）**，或者**彈出 Vegas 主程式視窗以後立即閃退**？
@ja Q: VEGAS が起動時の「**UI を初期化しています...**」ステップで**クラッシュ/フリーズ（エラーコード `0xE0434352`）** する、または**メインウィンドウが表示された直後**にクラッシュする？
@ko Q: VEGAS 시작 시 "**UI 초기화 중...**" 단계에서 **크래시/정지 (오류 코드 `0xE0434352`)** 되거나, **주 창이 나타난 직후** 즉시 됩니까?
@de F: VEGAS **stürzt ab/friert ein (Fehlercode `0xE0434352`)** beim Schritt "**UI wird initialisiert...**" während des Starts, oder **sofort nachdem das Hauptfenster erscheint**?
@fr Q : VEGAS **plante/se bloque (Code d'erreur `0xE0434352`)** à l'étape "**Initialisation de l'interface utilisateur...**" pendant le démarrage, ou **immédiatement après l'apparition de la fenêtre principale** ?
@ru В: VEGAS **аварийно завершает работу/зависает (Код ошибки `0xE0434352`)** на шаге "**Инициализация UI...**" во время запуска или **сразу после появления главного окна**?

@en A: Possibly an extension issue. Try **deleting files from `C:\ProgramData\VEGAS Pro\Application Extensions\`** and other [extension folders](#xii-scripts-extensions-related). You can delete them all or try to isolate which extension is problematic.
@zh A：有可能是扩展的问题，尝试**删除 `C:\ProgramData\VEGAS Pro\Application Extensions\`** 等 [扩展文件夹](#十二、脚本-扩展相关) 里的文件。可以全部删除，也可自行排除是哪个扩展的问题。
@zh-hant A：有可能是擴充的問題，嘗試**刪除 `C:\ProgramData\VEGAS Pro\Application Extensions\`** 等 [擴充資料夾](#十二、腳本-擴充相關) 裡的檔案。可以全部刪除，也可自行排除是哪個擴充的問題。
@ja A: 拡張機能の問題の可能性があります。 **`C:\ProgramData\VEGAS Pro\Application Extensions\`** および他の[拡張機能フォルダ](#十二、スクリプト-拡張機能関連)からファイルを削除してみてください。すべて削除するか、どの拡張機能が問題か分離を試みることができます。
@ko A: 확장 문제일 가능성이 있습니다. **`C:\ProgramData\VEGAS Pro\Application Extensions\`** 및 기타 [확장 폴더](#xii-스크립트-확장-관련)에서 파일을 삭제해 보십시오. 모두 삭제하거나 어떤 확장이 문제인지 격리해 볼 수 있습니다.
@de A: Möglicherweise ein Erweiterungsproblem. Versuchen Sie, **Dateien aus `C:\ProgramData\VEGAS Pro\Application Extensions\`** und anderen [Erweiterungsordnern](#xii-scripts-erweiterungen-bezogene) zu löschen. Sie können alle löschen oder versuchen, zu isolieren, welche Erweiterung problematisch ist.
@fr R : Problème d'extension possible. Essayez **de supprimer les fichiers de `C:\ProgramData\VEGAS Pro\Application Extensions\`** et d'autres [dossiers d'extensions](#xii-faq-concernant-les-scripts-extensions). Vous pouvez tous les supprimer ou essayer d'isoler quelle extension est problématique.
@ru О: Возможно, проблема с расширением. Попробуйте **удалить файлы из `C:\ProgramData\VEGAS Pro\Application Extensions\`** и других [папок расширений](#xii-скрипты-расширения-связанные). Вы можете удалить их все или попытаться изолировать, какое расширение является проблемным.

<br>

@en Q: VEGAS startup error: **`Unable to initialize scripting host`** / other **.NET Framework** common errors (e.g., **`0xE0434352`**)?
@zh Q：Vegas 在启动时报错：**`无法初始化脚本宿主`** / 其他 **.NET Framework** 常见报错码（比如 **`0xE0434352`**）？
@zh-hant Q：Vegas 在啟動時報錯：**`無法初始化腳本宿主`** / 其他 **.NET Framework** 常見報錯碼（比如 **`0xE0434352`**）？
@ja Q: VEGAS 起動エラー：**`スクリプティングホストを初期化できません`** / その他の **.NET Framework** 共通エラー（例： **`0xE0434352`**）？
@ko Q: VEGAS 시작 오류: **`스크립팅 호스트를 초기화할 수 없음`** / 기타 **.NET Framework** 일반 오류 (예: **`0xE0434352`**)?
@de F: VEGAS-Startfehler: **`Skripthost kann nicht initialisiert werden`** / andere **.NET Framework** häufige Fehler (z. B. **`0xE0434352`**)?
@fr Q : Erreur de démarrage VEGAS : **`Impossible d'initialiser l'hôte de script`** / autres erreurs courantes **.NET Framework** (par ex. **`0xE0434352`**) ?
@ru В: Ошибка запуска VEGAS: **`Не удалось инициализировать хост сценариев (Unable to initialize scripting host)`** / другие распространенные ошибки **.NET Framework** (например, **`0xE0434352`**)?

@en A: VEGAS scripts rely on .NET Framework. Try running the .NET Framework Repair Tool: https://support.microsoft.com/topic/942a01e3-5b8b-7abb-c166-c34a2f4b612a
@zh A：Vegas 脚本基于 .NET Framework，可以试着运行 .NET Framework 修复工具：https://support.microsoft.com/topic/942a01e3-5b8b-7abb-c166-c34a2f4b612a
@zh-hant A：Vegas 腳本基於 .NET Framework，可以試著執行 .NET Framework 修復工具：https://support.microsoft.com/topic/942a01e3-5b8b-7abb-c166-c34a2f4b612a
@ja A: VEGAS スクリプトは .NET Framework に依存しています。.NET Framework 修復ツールを実行してみてください： https://support.microsoft.com/topic/942a01e3-5b8b-7abb-c166-c34a2f4b612a
@ko A: VEGAS 스크립트는 .NET Framework에 의존합니다. .NET Framework 복구 도구를 실행해 보십시오: https://support.microsoft.com/topic/942a01e3-5b8b-7abb-c166-c34a2f4b612a
@de A: VEGAS-Skripte basieren auf .NET Framework. Versuchen Sie, das .NET Framework-Reparatur-Tool auszuführen: https://support.microsoft.com/topic/942a01e3-5b8b-7abb-c166-c34a2f4b612a
@fr R : Les scripts VEGAS dépendent de .NET Framework. Essayez d'exécuter l'outil de réparation .NET Framework : https://support.microsoft.com/topic/942a01e3-5b8b-7abb-c166-c34a2f4b612a
@ru О: Сценарии VEGAS зависят от .NET Framework. Попробуйте запустить инструмент восстановления .NET Framework: https://support.microsoft.com/topic/942a01e3-5b8b-7abb-c166-c34a2f4b612a

<br>

@en Q: VEGAS **crashes/freezes (Error code `0xC0000005`, fault module `C:\WINDOWS\SYSTEM32\ntdll.dll`)** at the "**Creating windows...**" step during startup?
@zh Q：Vegas 在启动时，“**正在创建窗口...**”这一步**崩溃/闪退（报错码 `0xC0000005`，且报错源是 `C:\WINDOWS\SYSTEM32\ntdll.dll`）**？
@zh-hant Q：Vegas 在啟動時，“**正在建立視窗...**”這一步**崩潰/閃退（報錯碼 `0xC0000005`，且報錯源是 `C:\WINDOWS\SYSTEM32\ntdll.dll`）**？
@ja Q: VEGAS が起動時の「**ウィンドウを作成しています...**」ステップで**クラッシュ/フリーズ（エラーコード `0xC0000005`、障害モジュール `C:\WINDOWS\SYSTEM32\ntdll.dll`）** する？
@ko Q: VEGAS 시작 시 "**창 생성 중...**" 단계에서 **크래시/정지 (오류 코드 `0xC0000005`, 오류 모듈 `C:\WINDOWS\SYSTEM32\ntdll.dll`)** 됩니까?
@de F: VEGAS **stürzt ab/friert ein (Fehlercode `0xC0000005`, Fehlermodul `C:\WINDOWS\SYSTEM32\ntdll.dll`)** beim Schritt "**Fenster werden erstellt...**" während des Starts?
@fr Q : VEGAS **plante/se bloque (Code d'erreur `0xC0000005`, module de défaut `C:\WINDOWS\SYSTEM32\ntdll.dll`)** à l'étape "**Création des fenêtres...**" pendant le démarrage ?
@ru В: VEGAS **аварийно завершает работу/зависает (Код ошибки `0xC0000005`, модуль сбоя `C:\WINDOWS\SYSTEM32\ntdll.dll`)** на шаге "**Создание окон...**" во время запуска?

@en A: Download and run vc_redist.x86.exe and vc_redist.x64.exe to repair C++ runtimes: https://learn.microsoft.com/cpp/windows/latest-supported-vc-redist
@zh A：下载并运行 vc_redist.x86.exe 和 vc_redist.x64.exe，修复 C++ 运行库：https://learn.microsoft.com/cpp/windows/latest-supported-vc-redist
@zh-hant A：下載並執行 vc_redist.x86.exe 和 vc_redist.x64.exe，修復 C++ 運行庫：https://learn.microsoft.com/cpp/windows/latest-supported-vc-redist
@ja A: vc_redist.x86.exe と vc_redist.x64.exe をダウンロードして実行し、C++ ランタイムを修復してください： https://learn.microsoft.com/cpp/windows/latest-supported-vc-redist
@ko A: vc_redist.x86.exe 및 vc_redist.x64.exe를 다운로드하여 실행하여 C++ 런타임을 복구하십시오: https://learn.microsoft.com/cpp/windows/latest-supported-vc-redist
@de A: Laden Sie und führen Sie vc_redist.x86.exe und vc_redist.x64.exe aus, um C++-Laufzeitbibliotheken zu reparieren: https://learn.microsoft.com/cpp/windows/latest-supported-vc-redist
@fr R : Téléchargez et exécutez vc_redist.x86.exe et vc_redist.x64.exe pour réparer les runtimes C++ : https://learn.microsoft.com/cpp/windows/latest-supported-vc-redist
@ru О: Скачайте и запустите vc_redist.x86.exe и vc_redist.x64.exe для восстановления сред выполнения C++: https://learn.microsoft.com/cpp/windows/latest-supported-vc-redist

<small>

@en Below is the old solution. It is currently not recommended for use and is kept for archival purposes only.
@zh 以下是旧解决方案，目前不建议使用，仅作为留档记录。
@zh-hant 以下是舊解決方案，目前不建議使用，僅作為留檔記錄。
@ja 以下は旧ソリューションです。現在は使用を推奨しておらず、アーカイブ記録としてのみ残されています。
@ko 아래는 이전 솔루션입니다. 현재 사용을 권장하지 않으며, 기록 보관용으로만 남겨져 있습니다.
@de Im Folgenden handelt es sich um die alte Lösung. Sie wird derzeit nicht zur Verwendung empfohlen und dient nur als Archivaufzeichnung.
@fr Voici l’ancienne solution. Elle n’est actuellement pas recommandée et est conservée uniquement à titre d’archive.
@ru Ниже представлено старое решение. В настоящее время оно не рекомендуется к использованию и сохранено лишь в качестве архивной записи.

@en Go to **`Control Panel -> Programs -> Programs and Features`** and check if **MSVC 1450 runtimes** are installed, i.e., the **14.50 version of `Microsoft Visual C++ 2015-2022 Redistributable` for both x86 and x64**. Microsoft distributed a version of these runtimes that causes VEGAS to crash. This version is automatically installed with **Visual Studio 2026** and may be installed for other reasons. This is a Microsoft issue, awaiting a complete fix from them. Some affected users found that just uninstalling the runtimes may not work. Here's a temporary workaround (**if you don't want to delve into DLLs, skip to the last step and use the `x64` `vcomp140.dll` I provided**):
@zh 请到 **`控制面板 -> 程序 -> 程序和功能`** 中确认是否安装过 **MSVC 1450 运行库**，即 **`Microsoft Visual C++ 2015-2022 Redistributable` 的 x86 以及 x64 的 14.50 版本**。微软分发了会导致 Vegas 直接崩溃的 **MSVC 1450 运行库**，该版本的运行库在安装编程软件 **Visual Studio 2026** 时会自动安装，也有用户因为其他原因，安装了该运行库。这个问题是微软导致的，需要等待微软的更新才能完全修复。经过一些受影响用户的测试，只卸载该运行库可能并没有用。以下是一种可行的临时解决办法（**不想研究 dll 文件怎么来的话，可以直接跳到最后一步，使用我提供的 `x64` 版 `vcomp140.dll`**）：
@zh-hant 請到 **`控制台 -> 程式 -> 程式和功能`** 中確認是否安裝過 **MSVC 1450 運行庫**，即 **`Microsoft Visual C++ 2015-2022 Redistributable` 的 x86 以及 x64 的 14.50 版本**。微軟分發了會導致 Vegas 直接崩潰的 **MSVC 1450 運行庫**，該版本的運行庫在安裝程式設計軟體 **Visual Studio 2026** 時會自動安裝，也有使用者因為其他原因，安裝了該運行庫。這個問題是微軟導致的，需要等待微軟的更新才能完全修復。經過一些受影響使用者的測試，只解除安裝該運行庫可能並沒有用。以下是一種可行的臨時解決辦法（**不想研究 dll 檔案怎麼來的話，可以直接跳到最后一步，使用我提供的 `x64` 版 `vcomp140.dll`**）：
@ja **`コントロール パネル -> プログラム -> プログラムと機能`** に移動し、 **MSVC 1450 ランタイム**、つまり **`Microsoft Visual C++ 2015-2022 再頒布可能パッケージ` の x86 および x64 の 14.50 バージョン**がインストールされているか確認してください。Microsoft は VEGAS をクラッシュさせるこのランタイムのバージョンを配布しました。このバージョンは **Visual Studio 2026** と共に自動的にインストールされ、他の理由でもインストールされる可能性があります。これは Microsoft の問題で、彼らからの完全な修正を待っています。影響を受けた一部のユーザーは、ランタイムをアンインストールするだけでは機能しない可能性があることを発見しました。以下は一時的な回避策です（**DLL を深く掘り下げたくない場合は、最後のステップに進み、私が提供する `x64` 版 `vcomp140.dll` を使用してください**）：
@ko **`제어판 -> 프로그램 -> 프로그램 및 기능`** 으로 이동하여 **MSVC 1450 런타임**이 설치되어 있는지 확인하십시오. 즉, **x86 및 x64용 `Microsoft Visual C++ 2015-2022 Redistributable`의 14.50 버전**입니다. Microsoft는 VEGAS를 크래시시키는 버전의 이러한 런타임을 배포했습니다. 이 버전은 **Visual Studio 2026**과 함께 자동으로 설치되며 다른 이유로 설치될 수도 있습니다. 이는 Microsoft 문제이며 Microsoft의 완전한 수정을 기다리고 있습니다. 일부 영향을 받은 사용자는 런타임만 제거하는 것이 효과가 없을 수 있음을 발견했습니다. 다음은 임시 해결 방법입니다 (**DLL을 깊이 파고들고 싶지 않다면 마지막 단계로 건너뛰고 제가 제공한 `x64` `vcomp140.dll`을 사용하십시오**):
@de Gehen Sie zu **`Systemsteuerung -> Programme -> Programme und Funktionen`** und überprüfen Sie, ob **MSVC 1450 Laufzeitbibliotheken** installiert sind, d. h. die **14.50 Version von `Microsoft Visual C++ 2015-2022 Redistributable` für sowohl x86 als auch x64**. Microsoft hat eine Version dieser Laufzeitbibliotheken verteilt, die VEGAS zum Absturz bringt. Diese Version wird automatisch mit **Visual Studio 2026** installiert und kann aus anderen Gründen installiert werden. Dies ist ein Microsoft-Problem, auf eine vollständige Lösung von ihnen wartend. Einige betroffene Benutzer fanden heraus, dass das Deinstallieren der Laufzeitbibliotheken allein möglicherweise nicht funktioniert. Hier ist eine vorübergehende Problemumgehung (**wenn Sie sich nicht mit DLLs befassen möchten, springen Sie zum letzten Schritt und verwenden Sie die von mir bereitgestellte `x64` `vcomp140.dll`**):
@fr Allez dans **`Panneau de configuration -> Programmes -> Programmes et fonctionnalités`** et vérifiez si les **runtimes MSVC 1450** sont installés, c'est-à-dire la **version 14.50 de `Microsoft Visual C++ 2015-2022 Redistributable` pour x86 et x64**. Microsoft a distribué une version de ces runtimes qui fait planter VEGAS. Cette version est automatiquement installée avec **Visual Studio 2026** et peut être installée pour d'autres raisons. C'est un problème Microsoft, en attente d'une correction complète de leur part. Certains utilisateurs affectés ont constaté que simplement désinstaller les runtimes peut ne pas fonctionner. Voici une solution de contournement temporaire (**si vous ne voulez pas vous plonger dans les DLL, passez à la dernière étape et utilisez le `vcomp140.dll` `x64` que j'ai fourni**) :
@ru Перейдите в **`Панель управления -> Программы -> Программы и компоненты`** и проверьте, установлены ли **среды выполнения MSVC 1450**, то есть **версия 14.50 `Microsoft Visual C++ 2015-2022 Redistributable` для x86 и x64**. Microsoft распространила версию этих сред выполнения, которая вызывает сбой VEGAS. Эта версия автоматически устанавливается с **Visual Studio 2026** и может быть установлена по другим причинам. Это проблема Microsoft, ожидающая полного исправления от них. Некоторые пострадавшие пользователи обнаружили, что простое удаление сред выполнения может не сработать. Вот временное решение (**если вы не хотите вникать в DLL, перейдите к последнему шагу и используйте предоставленный мной `x64` `vcomp140.dll`**):

@en 1. Go to the Visual Studio download page: [https://visualstudio.microsoft.com/downloads/](https://visualstudio.microsoft.com/downloads/), find and download the Visual Studio 2022 Build Tools (filename `vs_BuildTools.exe`).
@zh 1. 转到 Visual Studio 下载页：[https://visualstudio.microsoft.com/downloads/](https://visualstudio.microsoft.com/downloads/)，找到并下载安装 Visual Studio 2022 生成工具（文件名是 `vs_BuildTools.exe`）。
@zh-hant 1. 轉到 Visual Studio 下載頁：[https://visualstudio.microsoft.com/downloads/](https://visualstudio.microsoft.com/downloads/)，找到並下載安裝 Visual Studio 2022 生成工具（檔案名是 `vs_BuildTools.exe`）。
@ja 1. Visual Studio ダウンロードページに移動： [https://visualstudio.microsoft.com/downloads/](https://visualstudio.microsoft.com/downloads/)、Visual Studio 2022 ビルドツール（ファイル名 `vs_BuildTools.exe`）を探してダウンロードします。
@ko 1. Visual Studio 다운로드 페이지로 이동합니다: [https://visualstudio.microsoft.com/downloads/](https://visualstudio.microsoft.com/downloads/), Visual Studio 2022 빌드 도구를 찾아 다운로드합니다(파일 이름 `vs_BuildTools.exe`).
@de 1. Gehen Sie zur Visual Studio Download-Seite: [https://visualstudio.microsoft.com/downloads/](https://visualstudio.microsoft.com/downloads/), finden und laden Sie die Visual Studio 2022 Build Tools herunter (Dateiname `vs_BuildTools.exe`).
@fr 1. Allez à la page de téléchargement de Visual Studio : [https://visualstudio.microsoft.com/downloads/](https://visualstudio.microsoft.com/downloads/), trouvez et téléchargez les Visual Studio 2022 Build Tools (nom de fichier `vs_BuildTools.exe`).
@ru 1. Перейдите на страницу загрузки Visual Studio: [https://visualstudio.microsoft.com/downloads/](https://visualstudio.microsoft.com/downloads/), найдите и загрузите Visual Studio 2022 Build Tools (имя файла `vs_BuildTools.exe`).

@en 2. During installation, when prompted for additional components, go to `Individual components`, search for `MSVC`, check **`MSVC v143 - VS 2022 C++ x64/x86 build tools (latest)`**, and continue installation.
@zh 2. 在安装过程中，会提示你是否安装额外的东西，此时转到 `单个组件`，搜索 `MSVC`，找到 `MSVC v143 - VS 2022 C++ x64/x86 生成工具(最新)` 并勾选，然后继续安装。
@zh-hant 2. 在安裝過程中，會提示你是否安裝額外的東西，此時轉到 `單個元件`，搜尋 `MSVC`，找到 `MSVC v143 - VS 2022 C++ x64/x86 生成工具(最新)` 並勾選，然後繼續安裝。
@ja 2. インストール中、追加コンポーネントを求めるプロンプトが表示されたら、 `個々のコンポーネント` に移動し、`MSVC` を検索し、 **`MSVC v143 - VS 2022 C++ x64/x86 ビルドツール（最新）`** をチェックし、インストールを続行します。
@ko 2. 설치 중에 추가 구성 요소에 대한 프롬프트가 표시되면 `개별 구성 요소`로 이동하고 `MSVC`를 검색하여 **`MSVC v143 - VS 2022 C++ x64/x86 빌드 도구(최신)`** 을 선택하고 계속 설치합니다.
@de 2. Während der Installation, wenn Sie nach zusätzlichen Komponenten gefragt werden, gehen Sie zu `Einzelne Komponenten`, suchen Sie nach `MSVC`, aktivieren Sie **`MSVC v143 - VS 2022 C++ x64/x86 Build-Tools (neueste)`**, und setzen Sie die Installation fort.
@fr 2. Pendant l'installation, lorsque vous êtes invité à des composants supplémentaires, allez dans `Composants individuels`, recherchez `MSVC`, cochez **`MSVC v143 - Outils de build C++ x64/x86 VS 2022 (dernière)`**, et poursuivez l'installation.
@ru 2. Во время установки, когда будет предложено выбрать дополнительные компоненты, перейдите в `Отдельные компоненты`, найдите `MSVC`, установите флажок **`MSVC v143 - VS 2022 C++ x64/x86 build tools (latest)`** и продолжите установку.

<ImageOnDemand src="vegtips/image008_msvc143.png" />

@en 3. After installation, go to the MSVC installation path: `C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Redist\MSVC\`. There will be folders like `v143` and `14.44.35112` (depending on the version you installed). The one resembling `14.44.35112` is the target.
@zh 3. 安装成功后，转到 MSVC 的安装路径：`C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Redist\MSVC\`，其中会有两个文件夹：`v143` 和 `14.44.35112`（具体取决于你安装的版本号），形如后者 `14.44.35112` 的是要找的文件夹。
@zh-hant 3. 安裝成功後，轉到 MSVC 的安裝路徑：`C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Redist\MSVC\`，其中會有兩個資料夾：`v143` 和 `14.44.35112`（具體取決於你安裝的版本號），形如後者 `14.44.35112` 的是要找的資料夾。
@ja 3. インストール後、MSVC インストールパスに移動： `C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Redist\MSVC\`。 `v143` や `14.44.35112`（インストールしたバージョンによる）のようなフォルダがあるでしょう。 `14.44.35112` のようなものがターゲットです。
@ko 3. 설치 후 MSVC 설치 경로로 이동합니다: `C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Redist\MSVC\`. `v143` 및 `14.44.35112`와 같은 폴더가 있을 것입니다(설치한 버전에 따라 다름). `14.44.35112`와 비슷한 것이 대상입니다.
@de 3. Nach der Installation gehen Sie zum MSVC-Installationspfad: `C:\Programme\Microsoft Visual Studio\2022\Community\VC\Redist\MSVC\`. Es werden Ordner wie `v143` und `14.44.35112` (abhängig von der installierten Version) vorhanden sein. Derjenige, der `14.44.35112` ähnelt, ist das Ziel.
@fr 3. Après l'installation, allez dans le chemin d'installation MSVC : `C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Redist\MSVC\`. Il y aura des dossiers comme `v143` et `14.44.35112` (selon la version que vous avez installée). Celui qui ressemble à `14.44.35112` est la cible.
@ru 3. После установки перейдите по пути установки MSVC: `C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Redist\MSVC\`. Там будут папки, такие как `v143` и `14.44.35112` (в зависимости от установленной версии). Та, что похожа на `14.44.35112`, является целью.

@en 4. Navigate to `14.44.35112\onecore\x64\Microsoft.VC143.OpenMP`, find **`vcomp140.dll`**, copy it, and paste it into your VEGAS installation directory. Restart VEGAS.
@zh 4. 进入 `14.44.35112\onecore\x64\Microsoft.VC143.OpenMP` 文件夹，找到 **`vcomp140.dll`** 并复制，粘贴到你的 Vegas 安装目录中，之后重启 Vegas，看问题是否解决。
@zh-hant 4. 進入 `14.44.35112\onecore\x64\Microsoft.VC143.OpenMP` 資料夾，找到 **`vcomp140.dll`** 並複製，貼上到你的 Vegas 安裝目錄中，之後重啟 Vegas，看問題是否解決。
@ja 4. `14.44.35112\onecore\x64\Microsoft.VC143.OpenMP` に移動し、 **`vcomp140.dll`** を見つけ、コピーし、VEGAS インストールディレクトリに貼り付けます。VEGAS を再起動します。
@ko 4. `14.44.35112\onecore\x64\Microsoft.VC143.OpenMP`로 이동하여 **`vcomp140.dll`** 을 찾아 복사하고 VEGAS 설치 디렉토리에 붙여넣습니다. VEGAS를 다시 시작합니다.
@de 4. Navigieren Sie zu `14.44.35112\onecore\x64\Microsoft.VC143.OpenMP`, finden Sie **`vcomp140.dll`**, kopieren Sie es und fügen Sie es in Ihr VEGAS-Installationsverzeichnis ein. Starten Sie VEGAS neu.
@fr 4. Naviguez vers `14.44.35112\onecore\x64\Microsoft.VC143.OpenMP`, trouvez **`vcomp140.dll`**, copiez-le, et collez-le dans votre répertoire d'installation VEGAS. Redémarrez VEGAS.
@ru 4. Перейдите в `14.44.35112\onecore\x64\Microsoft.VC143.OpenMP`, найдите **`vcomp140.dll`**, скопируйте его и вставьте в каталог установки VEGAS. Перезапустите VEGAS.

@en <small>Download link for <code>x64</code> <code>vcomp140.dll</code>: </small>[vcomp140.dll](/downloads/fixes/vcomp140.dll.zip)<small><br>If you are using <code>ARM</code> Windows, choose the <code>ARM</code> folder, not <code>x64</code>. If you don't know what <code>ARM</code> is, you are likely an <code>x64</code> user; use the <code>x64</code> version.<br>Reference: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/crashing-trying-to-launch-22-and-23-windows-11--149890/#ca943290<br></small>
@zh <small><code>x64</code> 版 <code>vcomp140.dll</code> 下载链接：</small>[vcomp140.dll](/downloads/fixes/vcomp140.dll.zip)<small><br>如果你正在使用 <code>ARM</code> 版 Windows，请选择 <code>ARM</code> 文件夹，而不是 <code>x64</code> 文件夹。如果你不知道 <code>ARM</code> 是什么，那你应该是 <code>x64</code> 用户，请使用 <code>x64</code> 版。<br>参见：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/crashing-trying-to-launch-22-and-23-windows-11--149890/#ca943290<br></small>
@zh-hant <small><code>x64</code> 版 <code>vcomp140.dll</code> 下載連結：</small>[vcomp140.dll](/downloads/fixes/vcomp140.dll.zip)<small><br>如果你正在使用 <code>ARM</code> 版 Windows，請選擇 <code>ARM</code> 資料夾，而不是 <code>x64</code> 資料夾。如果你不知道 <code>ARM</code> 是什麼，那你應該是 <code>x64</code> 使用者，請使用 <code>x64</code> 版。<br>參見：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/crashing-trying-to-launch-22-and-23-windows-11--149890/#ca943290<br></small>
@ja <small><code>x64</code> 版 <code>vcomp140.dll</code> ダウンロードリンク： </small>[vcomp140.dll](/downloads/fixes/vcomp140.dll.zip)<small><br><code>ARM</code> Windows を使用している場合は、<code>x64</code> ではなく <code>ARM</code> フォルダを選択してください。<code>ARM</code> が何かわからない場合、おそらく <code>x64</code> ユーザーです。<code>x64</code> 版を使用してください。<br>参照： https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/crashing-trying-to-launch-22-and-23-windows-11--149890/#ca943290<br></small>
@ko <small><code>x64</code> <code>vcomp140.dll</code> 다운로드 링크: </small>[vcomp140.dll](/downloads/fixes/vcomp140.dll.zip)<small><br><code>ARM</code> Windows를 사용하는 경우 <code>x64</code>가 아닌 <code>ARM</code> 폴더를 선택하십시오. <code>ARM</code>이 무엇인지 모른다면 아마도 <code>x64</code> 사용자일 것입니다. <code>x64</code> 버전을 사용하십시오.<br>참조: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/crashing-trying-to-launch-22-and-23-windows-11--149890/#ca943290<br></small>
@de <small>Download-Link für <code>x64</code> <code>vcomp140.dll</code>: </small>[vcomp140.dll](/downloads/fixes/vcomp140.dll.zip)<small><br>Wenn Sie <code>ARM</code> Windows verwenden, wählen Sie den <code>ARM</code>-Ordner, nicht <code>x64</code>. Wenn Sie nicht wissen, was <code>ARM</code> ist, sind Sie wahrscheinlich ein <code>x64</code>-Benutzer; verwenden Sie die <code>x64</code>-Version.<br>Referenz: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/crashing-trying-to-launch-22-and-23-windows-11--149890/#ca943290<br></small>
@fr <small>Lien de téléchargement pour <code>vcomp140.dll</code> <code>x64</code> : </small>[vcomp140.dll](/downloads/fixes/vcomp140.dll.zip)<small><br>Si vous utilisez Windows <code>ARM</code>, choisissez le dossier <code>ARM</code>, pas <code>x64</code>. Si vous ne savez pas ce qu'est <code>ARM</code>, vous êtes probablement un utilisateur <code>x64</code> ; utilisez la version <code>x64</code>.<br>Référence : https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/crashing-trying-to-launch-22-and-23-windows-11--149890/#ca943290<br></small>
@ru <small>Ссылка для скачивания <code>x64</code> <code>vcomp140.dll</code>: </small>[vcomp140.dll](/downloads/fixes/vcomp140.dll.zip)<small><br>Если вы используете Windows на <code>ARM</code>, выберите папку <code>ARM</code>, а не <code>x64</code>. Если вы не знаете, что такое <code>ARM</code>, вы, вероятно, пользователь <code>x64</code>; используйте версию <code>x64</code>.<br>Ссылка: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/crashing-trying-to-launch-22-and-23-windows-11--149890/#ca943290<br></small>

</small>

<br>

@en Q: After opening VEGAS, there's **noise/no audio/...**?
@zh Q：打开 Vegas 后**出现噪音/没声音了/…**？
@zh-hant Q：開啟 Vegas 後**出現噪音/沒聲音了/…**？
@ja Q: VEGAS を開いた後、**ノイズ/音声なし/...** がある？
@ko Q: VEGAS를 연 후 **잡음/소리 없음/...** 이 있습니까?
@de F: Nach dem Öffnen von VEGAS gibt es **Rauschen/kein Audio/...**?
@fr Q : Après avoir ouvert VEGAS, il y a **du bruit/pas d'audio/...** ?
@ru В: После открытия VEGAS есть **шум/нет звука/...**?

@en A: **Go to `Control Panel -> Hardware and Sound -> Sound`, open `Properties` for your current playback device. On the `Advanced` tab, under `Exclusive Mode`, uncheck `Allow applications to take exclusive control of this device`, OR change the `Default Format` to `2 channel, 24 bit, 44100 Hz`.** If that doesn't work, try **reinstalling your sound card drivers**.
@zh A：**转到 `控制面板 -> 硬件和声音 -> 声音`，打开当前播放设备的 `属性`，在 `高级` 选项卡的 `独占模式` 中取消勾选 `允许应用程序独占控制该设备`，或者将`默认格式`切换到 `2 通道，24 位，44100 Hz`。**如果不行，可以试试**重装声卡驱动**。
@zh-hant A：**轉到 `控制台 -> 硬體和聲音 -> 聲音`，開啟當前播放裝置的 `內容`，在 `進階` 選項卡的 `獨佔模式` 中取消勾選 `允許應用程式獨佔控制該裝置`，或者將`預設格式`切換到 `2 通道，24 位，44100 Hz`。**如果不行，可以試試**重裝音效卡驅動**。
@ja A: **`コントロール パネル -> ハードウェアとサウンド -> サウンド`** に移動し、現在の再生デバイスの `プロパティ` を開きます。 `詳細設定` タブで、 `排他モード` の下の `アプリケーションがこのデバイスを排他的に制御できるようにする` のチェックを外す、 **または** `既定の形式` を `2 チャンネル、24 ビット、44100 Hz` に変更します。それでもダメな場合は、**サウンドカードドライバーを再インストール**してみてください。
@ko A: **`제어판 -> 하드웨어 및 소리 -> 소리`** 로 이동하여 현재 재생 장치에 대한 `속성`을 엽니다. `고급` 탭의 `독점 모드` 아래에서 `응용 프로그램이 이 장치를 독점적으로 제어할 수 있도록 허용`을 선택 취소하거나, `기본 형식`을 `2 채널, 24비트, 44100 Hz`로 변경하십시오. 작동하지 않으면 **사운드 카드 드라이버를 다시 설치**해 보십시오.
@de A: **Gehen Sie zu `Systemsteuerung -> Hardware und Sound -> Sound`, öffnen Sie `Eigenschaften` für Ihr aktuelles Wiedergabegerät. Auf der Registerkarte `Erweitert`, unter `Exklusivmodus`, deaktivieren Sie `Anwendungen erlauben, exklusive Kontrolle über dieses Gerät zu übernehmen`, ODER ändern Sie das `Standardformat` zu `2 Kanal, 24 Bit, 44100 Hz`.** Wenn das nicht funktioniert, versuchen Sie **Ihre Soundkartentreiber neu zu installieren**.
@fr R : **Allez dans `Panneau de configuration -> Matériel et audio -> Son`, ouvrez `Propriétés` pour votre périphérique de lecture actuel. Sous l'onglet `Avancé`, sous `Mode exclusif`, décochez `Autoriser les applications à prendre le contrôle exclusif de ce périphérique`, OU changez le `Format par défaut` en `2 canaux, 24 bits, 44100 Hz`.** Si cela ne fonctionne pas, essayez **de réinstaller les pilotes de votre carte son**.
@ru О: **Перейдите в `Панель управления -> Оборудование и звук -> Звук`, откройте `Свойства` для текущего устройства воспроизведения. На вкладке `Дополнительно` в разделе `Эксклюзивный режим` снимите флажок `Разрешить приложениям использовать устройство в монопольном режиме`, ИЛИ измените `Формат по умолчанию` на `2 канала, 24 бит, 44100 Гц`.** Если это не поможет, попробуйте **переустановить драйверы звуковой карты**.

<ImageOnDemand src="vegtips/image009_sound_device.png" />

<br>

@en Q: **A specific project file crashes/errors on opening**?
@zh Q：**某个工程文件一打开就报错/崩溃/闪退**？
@zh-hant Q：**某個工程檔案一開啟就報錯/崩潰/閃退**？
@ja Q: **特定のプロジェクトファイルを開くときにクラッシュ/エラーが発生する**？
@ko Q: **특정 프로젝트 파일을 열면 크래시/오류**가 발생합니까?
@de F: **Eine spezifische Projektdatei stürzt ab/hat Fehler beim Öffnen**?
@fr Q : **Un fichier de projet spécifique plante/a une erreur à l'ouverture** ?
@ru В: **Конкретный файл проекта вызывает сбои/ошибки при открытии**?

@en A: Try **renaming any media file used in the project** so the project can't find it. When reopening, **ignore the "media offline" prompts**. After successfully opening, **rename the file back or replace it**.
@zh A：可以试着**将该工程用到的任意媒体文件重命名一下**，不让工程扫描到。重新打开工程文件时，**提示找不到媒体文件，这时不要管直接忽略，等成功打开后，再重命名回去/替换回去**。
@zh-hant A：可以試著**將該工程用到的任意媒體檔案重新命名一下**，不讓工程掃描到。重新開啟工程檔案時，**提示找不到媒體檔案，這時不要管直接忽略，等成功開啟後，再重新命名回去/替換回去**。
@ja A: **プロジェクトで使用されている任意のメディアファイルの名前を変更**し、プロジェクトが見つけられないようにします。再度開くとき、 **「メディアオフライン」プロンプトを無視します**。正常に開いた後、 **ファイル名を戻すか、置き換えます**。
@ko A: 프로젝트에서 사용되는 **임의의 미디어 파일 이름을 변경**하여 프로젝트가 찾을 수 없도록 해 보십시오. 다시 열 때 **"미디어 오프라인" 프롬프트를 무시**하십시오. 성공적으로 연 후 **파일 이름을 다시 변경하거나 교체**하십시오.
@de A: Versuchen Sie, **eine beliebige im Projekt verwendete Mediendatei umzubenennen**, damit das Projekt sie nicht finden kann. Wenn Sie sie erneut öffnen, **ignorieren Sie die "Medien offline" Eingabeaufforderungen**. Nachdem Sie erfolgreich geöffnet haben, **benennen Sie die Datei zurück oder ersetzen Sie sie**.
@fr R : Essayez **de renommer n'importe quel fichier média utilisé dans le projet** pour que le projet ne puisse pas le trouver. Lors de la réouverture, **ignorez les invites "média hors ligne"**. Après avoir ouvert avec succès, **renommez le fichier ou remplacez-le**.
@ru О: Попробуйте **переименовать любой медиафайл, используемый в проекте**, чтобы проект не мог его найти. При повторном открытии **игнорируйте предупреждения «медиафайл недоступен»**. После успешного открытия **переименуйте файл обратно или замените его**.

@en <!-- -->
@zh <small>参见：https://tieba.baidu.com/p/7511708251<br></small>
@zh-hant <small>參見：https://tieba.baidu.com/p/7511708251<br></small>

<br>

@en Q: **Opening multiple VEGAS instances causes crashes**?
@zh Q：**Vegas 多开进程后会导致崩溃**？
@zh-hant Q：**Vegas 多開程序後會導致崩潰**？
@ja Q: **複数の VEGAS インスタンスを開くとクラッシュする**？
@ko Q: **여러 VEGAS 인스턴스를 열면 크래시**가 발생합니까?
@de F: **Das Öffnen mehrerer VEGAS-Instanzen verursacht Abstürze**?
@fr Q : **Ouvrir plusieurs instances VEGAS provoque des plantages** ?
@ru В: **Открытие нескольких экземпляров VEGAS вызывает сбои**?

@en A: This can happen in all VEGAS versions due to a specific window layout. It's more likely when the Preview window is **undocked (floating)**. A temporary fix: **Before opening a new VEGAS instance, close or dock the Preview window of the old instance** to avoid potential crashes.
@zh A：这个问题会发生在所有的 Vegas 版本中，是特定的界面布局导致的。当预览窗口处于**未停靠（悬浮）状态**时，容易发生这样的情况。临时的解决办法是**在打开新的 Vegas 进程前，把旧的 Vegas 进程的预览窗口关闭或者停靠**，以避免可能的崩溃问题。
@zh-hant A：這個問題會發生在所有的 Vegas 版本中，是特定的介面佈局導致的。當預覽視窗處於**未停靠（懸浮）狀態**時，容易發生這樣的情況。臨時的解決辦法是**在開啟新的 Vegas 程序前，把舊的 Vegas 程序的預覽視窗關閉或者停靠**，以避免可能的崩潰問題。
@ja A: これは特定のウィンドウレイアウトが原因で、すべての VEGAS バージョンで発生する可能性があります。プレビューウィンドウが **ドック解除（フローティング）** されているときに起こりやすいです。一時的な修正： **新しい VEGAS インスタンスを開く前に、古いインスタンスのプレビューウィンドウを閉じるかドックして**、潜在的なクラッシュを回避します。
@ko A: 특정 창 레이아웃으로 인해 모든 VEGAS 버전에서 발생할 수 있습니다. 미리보기 창이 **도킹 해제된(부동)** 상태일 때 발생할 가능성이 더 큽니다. 임시 해결 방법: **새 VEGAS 인스턴스를 열기 전에 이전 인스턴스의 미리보기 창을 닫거나 도킹**하여 잠재적인 크래시를 피하십시오.
@de A: Dies kann in allen VEGAS-Versionen aufgrund eines spezifischen Fensterlayouts auftreten. Es ist wahrscheinlicher, wenn das Vorschaufenster **ausgekoppelt (schwebend)** ist. Eine vorübergehende Lösung: **Bevor Sie eine neue VEGAS-Instanz öffnen, schließen oder docken Sie das Vorschaufenster der alten Instanz an**, um potenzielle Abstürze zu vermeiden.
@fr R : Cela peut arriver dans toutes les versions VEGAS en raison d'une disposition de fenêtre spécifique. C'est plus probable lorsque la fenêtre Aperçu est **détachée (flottante)**. Un correctif temporaire : **Avant d'ouvrir une nouvelle instance VEGAS, fermez ou accrochez la fenêtre Aperçu de l'ancienne instance** pour éviter les plantages potentiels.
@ru О: Это может произойти во всех версиях VEGAS из-за определенного макета окон. Это более вероятно, когда окно предварительного просмотра **не закреплено (плавающее)**. Временное исправление: **Перед открытием нового экземпляра VEGAS закройте или закрепите окно предварительного просмотра старого экземпляра**, чтобы избежать потенциальных сбоев.

@en <small>Reference: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/problem-to-open-more-instances-of-vegas-pro-22--148817/<br></small>
@zh <small>参见：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/problem-to-open-more-instances-of-vegas-pro-22--148817/<br></small>
@zh-hant <small>參見：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/problem-to-open-more-instances-of-vegas-pro-22--148817/<br></small>
@ja <small>参照： https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/problem-to-open-more-instances-of-vegas-pro-22--148817/<br></small>
@ko <small>참조: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/problem-to-open-more-instances-of-vegas-pro-22--148817/<br></small>
@de <small>Referenz: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/problem-to-open-more-instances-of-vegas-pro-22--148817/<br></small>
@fr <small>Référence : https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/problem-to-open-more-instances-of-vegas-pro-22--148817/<br></small>
@ru <small>Ссылка: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/problem-to-open-more-instances-of-vegas-pro-22--148817/<br></small>

<br>

@en Q: **After VEGAS starts, there's a WebView error (`msedgewebview2.exe`, or `WebView2 initialization failed`, etc.)**?
@zh Q：**Vegas 启动后，报 WebView 错误（`msedgewebview2.exe`，或 `WebView2 初始化失败`等）**？
@zh-hant Q：**Vegas 啟動後，報 WebView 錯誤（`msedgewebview2.exe`，或 `WebView2 初始化失敗`等）**？
@ja Q: **VEGAS 起動後、WebView エラー（`msedgewebview2.exe`、または `WebView2 初期化に失敗しました`など）** が表示される？
@ko Q: **VEGAS 시작 후 WebView 오류 (`msedgewebview2.exe`, 또는 `WebView2 초기화 실패` 등)** 가 발생합니까?
@de F: **Nachdem VEGAS startet, gibt es einen WebView-Fehler (`msedgewebview2.exe`, oder `WebView2-Initialisierung fehlgeschlagen`, usw.)**?
@fr Q : **Après le démarrage de VEGAS, il y a une erreur WebView (`msedgewebview2.exe`, ou `Échec de l'initialisation de WebView2`, etc.)** ?
@ru В: **После запуска VEGAS возникает ошибка WebView (`msedgewebview2.exe`, или `Сбой инициализации WebView2` и т.д.)**?

@en A: The MAGIX VEGAS Hub feature uses Microsoft Edge WebView. If you **don't need the Hub, simply close its window via the menu `View -> Window`**. You can also try deleting the `WebView2` folder in the [VEGAS cache directory](#vegas-preferences-and-cache-directory): **`%localappdata%\VEGAS Pro\23.0\WebView2`** (where `23.0` is your VEGAS version).
@zh A：Magix VEGAS Hub 相关功能是基于微软的 Edge WebView 的。如果**不需要用 Hub 功能，只需到菜单栏的 `视图 -> 窗口` 中把 VEGAS Hub 窗口关闭**即可。也可以尝试删除 [Vegas 缓存目录](#vegas-首选项和缓存目录)里的 `WebView2` 文件夹，即 **`%localappdata%\VEGAS Pro\23.0\WebView2`** 这个路径，其中 `23.0` 代表当前的 Vegas 版本号。
@zh-hant A：Magix VEGAS Hub 相關功能是基於微軟的 Edge WebView 的。如果**不需要用 Hub 功能，只需到選單列的 `檢視 -> 視窗` 中把 VEGAS Hub 視窗關閉**即可。也可以嘗試刪除 [Vegas 快取目錄](#vegas-首選項和快取目錄)裡的 `WebView2` 資料夾，即 **`%localappdata%\VEGAS Pro\23.0\WebView2`** 這個路徑，其中 `23.0` 代表當前的 Vegas 版本號。
@ja A: MAGIX VEGAS Hub 機能は Microsoft Edge WebView を使用します。 **Hub が不要な場合は、メニュー `表示 -> ウィンドウ` からそのウィンドウを閉じて**ください。また、[VEGAS キャッシュディレクトリ](#vegas-プリファレンスとキャッシュディレクトリ)内の `WebView2` フォルダを削除することも試みてください： **`%localappdata%\VEGAS Pro\23.0\WebView2`** （`23.0` はあなたの VEGAS バージョン）。
@ko A: MAGIX VEGAS Hub 기능은 Microsoft Edge WebView를 사용합니다. **Hub가 필요하지 않으면 메뉴 `보기 -> 창`을 통해 해당 창을 닫기만 하면 됩니다**. [VEGAS 캐시 디렉토리](#vegas-환경설정-및-캐시-디렉토리)의 `WebView2` 폴더를 삭제해 볼 수도 있습니다: **`%localappdata%\VEGAS Pro\23.0\WebView2`** (여기서 `23.0`은 VEGAS 버전).
@de A: Die MAGIX VEGAS Hub-Funktion verwendet Microsoft Edge WebView. Wenn Sie **den Hub nicht benötigen, schließen Sie einfach sein Fenster über das Menü `Ansicht -> Fenster`**. Sie können auch versuchen, den `WebView2`-Ordner im [VEGAS-Cache-Verzeichnis](#vegas-einstellungen-und-cache-verzeichnis) zu löschen: **`%localappdata%\VEGAS Pro\23.0\WebView2`** (wobei `23.0` Ihre VEGAS-Version ist).
@fr R : La fonctionnalité MAGIX VEGAS Hub utilise Microsoft Edge WebView. Si vous **n'avez pas besoin du Hub, fermez simplement sa fenêtre via le menu `Affichage -> Fenêtre`**. Vous pouvez aussi essayer de supprimer le dossier `WebView2` dans le [répertoire de cache VEGAS](#répertoire-des-préférences-et-du-cache-vegas) : **`%localappdata%\VEGAS Pro\23.0\WebView2`** (où `23.0` est votre version VEGAS).
@ru О: Функция MAGIX VEGAS Hub использует Microsoft Edge WebView. Если вы **не нуждаетесь в Hub, просто закройте его окно через меню `Вид -> Окно`**. Вы также можете попробовать удалить папку `WebView2` в [кэш-директории VEGAS](#настройки-vegas-и-кэш-директория): **`%localappdata%\VEGAS Pro\23.0\WebView2`** (где `23.0` — ваша версия VEGAS).

<br>

@en Q: <sup>**VP19**</sup> After working for a while, VEGAS window suddenly **gets graphical corruption, UI glitches, becomes laggy, unable to continue**, forcing a restart?
@zh Q：<sup>**vv19**</sup> 工程做了一会儿，Vegas 窗口突然**随机出现花屏，UI 呈现故障效果，软件变得卡顿，无法继续做工程**，只能重启 Vegas？
@zh-hant Q：<sup>**vv19**</sup> 工程做了一會兒，Vegas 視窗突然**隨機出現花屏，UI 呈現故障效果，軟體變得卡頓，無法繼續做工程**，只能重啟 Vegas？
@ja Q: <sup>**VP19**</sup> しばらく作業した後、VEGAS ウィンドウが突然**グラフィック破損、UI グリッチ、重くなり、続行不能**になり、強制再起動が必要になる？
@ko Q: **[VP19]** 잠시 작업한 후 VEGAS 창이 갑자기 **그래픽 손상, UI 오류, 느려지고 계속할 수 없게 되어** 재시작을 강요합니까?
@de F: **[VP19]** Nachdem eine Weile gearbeitet wurde, wird das VEGAS-Fenster plötzlich **grafisch beschädigt, UI verzerrt, wird langsam, kann nicht fortgesetzt werden**, erfordert einen Neustart?
@fr Q : **[VP19]** Après avoir travaillé un moment, la fenêtre VEGAS **devient graphiquement corrompue, l'interface utilisateur bug, devient lente, impossible de continuer**, forçant un redémarrage ?
@ru В: **[VP19]** После некоторого времени работы окно VEGAS внезапно **получает графические искажения, глюки UI, становится медленным, невозможно продолжать**, вынуждая перезапуск?

@en A: This is a **VP19-specific issue in older builds (e.g., `19 build 341`)**. **Update to `19 build 651`** to resolve it.
@zh A：这个是 **vv19 旧版（如 `19 build 341`）**特有的花屏问题，**更新到 `19 build 651`** 可解决。
@zh-hant A：這個是 **vv19 舊版（如 `19 build 341`）**特有的花屏問題，**更新到 `19 build 651`** 可解決。
@ja A: これは **VP19 の古いビルド（例： `19 build 341`）** 特有の問題です。 **`19 build 651` に更新**すると解決します。
@ko A: 이는 **구빌드(예: `19 build 341`)의 VP19 특정 문제**입니다. **`19 build 651`로 업데이트**하여 해결하십시오.
@de A: Dies ist ein **VP19-spezifisches Problem in älteren Builds (z. B. `19 Build 341`)**. **Aktualisieren Sie auf `19 Build 651`**, um es zu beheben.
@fr R : C'est un **problème spécifique à VP19 dans les anciens builds (par ex. `19 build 341`)**. **Mettez à jour vers `19 build 651`** pour le résoudre.
@ru О: Это **специфичная для VP19 проблема в старых сборках (например, `19 build 341`)**. **Обновитесь до `19 build 651`**, чтобы решить ее.

@en <small>Reference: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/ui-issues-with-vegas-pro-19-0--131391/<br></small>
@zh <small>参见：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/ui-issues-with-vegas-pro-19-0--131391/<br></small>
@zh-hant <small>參見：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/ui-issues-with-vegas-pro-19-0--131391/<br></small>
@ja <small>参照： https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/ui-issues-with-vegas-pro-19-0--131391/<br></small>
@ko <small>참조: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/ui-issues-with-vegas-pro-19-0--131391/<br></small>
@de <small>Referenz: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/ui-issues-with-vegas-pro-19-0--131391/<br></small>
@fr <small>Référence : https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/ui-issues-with-vegas-pro-19-0--131391/<br></small>
@ru <small>Ссылка: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/ui-issues-with-vegas-pro-19-0--131391/<br></small>

<br>

@en Q: <sup>**VP19, VP20**</sup> VEGAS crashes immediately after the loading screen, **with no error pop-up**?
@zh Q：<sup>**vv19、vv20**</sup> Vegas 读完加载框后直接闪退，【**没有任何报错弹窗**】？
@zh-hant Q：<sup>**vv19、vv20**</sup> Vegas 讀完載入框後直接閃退，【**沒有任何報錯彈窗**】？
@ja Q: <sup>**VP19、VP20**</sup> VEGAS が読み込み画面の直後にクラッシュし、**【エラーポップアップなし】**？
@ko Q: **[VP19, VP20]** VEGAS가 로딩 화면 직후 즉시 크래시되고, **오류 팝업 없음**?
@de F: **[VP19, VP20]** VEGAS stürzt sofort nach dem Ladebildschirm ab, **ohne Fehlermeldungs-Pop-up**?
@fr Q : **[VP19, VP20]** VEGAS plante immédiatement après l'écran de chargement, **sans fenêtre d'erreur** ?
@ru В: **[VP19, VP20]** VEGAS аварийно завершает работу сразу после экрана загрузки, **без всплывающего окна с ошибкой**?

@en A: Check your VEGAS build number. Is it `19 build 648` or earlier, or `20 build 402` or earlier?<br>Versions in this range have a critical bug causing a **direct crash after loading**, and can **only be opened by disconnecting from the internet or changing the system date**.<br>The fix is to **update VP19 to `19 build 651` or later, and VP20 to `20 build 403` or later**. (Note: VP19 final is `19 build 651`, VP20 final is `20 build 411`.)
@zh A：检查 Vegas 的小版本号，是否为 `19 build 648` 及以前版本或 `20 build 402` 及以前版本。<br>这个范围内的 Vegas 版本会有【**读条后直接闪退**】，【**断网运行或者改系统日期后才能成功打开**】的恶性 bug。<br>解决办法是**19 更新到 `19 build 651`，20 更新到 `20 build 403` 及以上版本**。（注：19 最终版为 `19 build 651`，20 最终版为 `20 build 411`。）
@zh-hant A：檢查 Vegas 的小版本號，是否為 `19 build 648` 及以前版本或 `20 build 402` 及以前版本。<br>這個範圍內的 Vegas 版本會有【**讀條後直接閃退**】，【**斷網執行或者改系統日期後才能成功開啟**】的惡性 bug。<br>解決辦法是**19 更新到 `19 build 651`，20 更新到 `20 build 403` 及以上版本**。（注：19 最終版為 `19 build 651`，20 最終版為 `20 build 411`。）
@ja A: VEGAS のビルド番号を確認してください。 `19 build 648` 以前、または `20 build 402` 以前ですか？<br>この範囲のバージョンには、**読み込み後に直接クラッシュする**重大なバグがあり、 **インターネットから切断するかシステム日付を変更しないと開けない** ことがあります。<br>修正は、**VP19 を `19 build 651` 以降に、VP20 を `20 build 403` 以降に更新**することです。（注：VP19 最終版は `19 build 651`、VP20 最終版は `20 build 411`。）
@ko A: VEGAS 빌드 번호를 확인하십시오. `19 build 648` 이하 또는 `20 build 402` 이하입니까?<br>이 범위의 버전에는 **로딩 후 직접 크래시**를 유발하는 치명적인 버그가 있으며, **인터넷 연결을 끊거나 시스템 날짜를 변경해야만 열 수 있습니다**.<br>해결책은 **VP19를 `19 build 651` 이상으로, VP20을 `20 build 403` 이상으로 업데이트**하는 것입니다. (참고: VP19 최종은 `19 build 651`, VP20 최종은 `20 build 411`.)
@de A: Überprüfen Sie Ihre VEGAS-Build-Nummer. Ist es `19 Build 648` oder früher, oder `20 Build 402` oder früher?<br>Versionen in diesem Bereich haben einen kritischen Bug, der einen **direkten Absturz nach dem Laden** verursacht, und können **nur durch Trennen vom Internet oder Ändern des Systemdatums geöffnet werden**.<br>Die Lösung ist, **VP19 auf `19 Build 651` oder höher, und VP20 auf `20 Build 403` oder höher zu aktualisieren**. (Hinweis: VP19 final ist `19 Build 651`, VP20 final ist `20 Build 411`.)
@fr R : Vérifiez votre numéro de build VEGAS. Est-ce `19 build 648` ou antérieur, ou `20 build 402` ou antérieur ?<br>Les versions dans cette plage ont un bug critique provoquant un **plantage direct après chargement**, et peuvent **seulement être ouvertes en déconnectant d'Internet ou en changeant la date système**.<br>La solution est de **mettre à jour VP19 vers `19 build 651` ou plus, et VP20 vers `20 build 403` ou plus**. (Note : VP19 final est `19 build 651`, VP20 final est `20 build 411`.)
@ru О: Проверьте номер сборки вашего VEGAS. Это `19 build 648` или ранее, или `20 build 402` или ранее?<br>Версии в этом диапазоне имеют критическую ошибку, вызывающую **прямой сбой после загрузки**, и могут **быть открыты только при отключении от Интернета или изменении системной даты**.<br>Исправление — **обновить VP19 до `19 build 651` или позже, а VP20 до `20 build 403` или позже**. (Примечание: Финальная версия VP19 — `19 build 651`, финальная VP20 — `20 build 411`.)

<br>

@en Q: <sup>**`22 build 122` and above**</sup> VEGAS won't run, no loading screen?
@zh Q：<sup>**`22 build 122` 及以上**</sup> Vegas 无法运行，也没有加载框？
@zh-hant Q：<sup>**`22 build 122` 及以上**</sup> Vegas 無法執行，也沒有載入框？
@ja Q: <sup>**`22 build 122` 以上**</sup> VEGAS が実行されず、読み込み画面も表示されない？
@ko Q: **[`22 build 122` 이상]** VEGAS가 실행되지 않고 로딩 화면도 없습니까?
@de F: **[`22 Build 122` und höher]** VEGAS läuft nicht, kein Ladebildschirm?
@fr Q : **[`22 build 122` et plus]** VEGAS ne s'exécute pas, pas d'écran de chargement ?
@ru В: **[`22 build 122` и выше]** VEGAS не запускается, нет экрана загрузки?

@en A: A Windows update issue. Download and run vc_redist.x86.exe and vc_redist.x64.exe to repair C++ runtimes: https://learn.microsoft.com/cpp/windows/latest-supported-vc-redist<br>Feedback suggests updating other software (like OBS) might also be needed.
@zh A：Windows 更新的问题，下载并运行 vc_redist.x86.exe 和 vc_redist.x64.exe，修复 C++ 运行库：https://learn.microsoft.com/cpp/windows/latest-supported-vc-redist<br>据反馈，也可能需要更新其他软件（如 OBS 等）。
@zh-hant A：Windows 更新的問題，下載並執行 vc_redist.x86.exe 和 vc_redist.x64.exe，修復 C++ 運行庫：https://learn.microsoft.com/cpp/windows/latest-supported-vc-redist<br>據反饋，也可能需要更新其他軟體（如 OBS 等）。
@ja A: Windows 更新の問題です。vc_redist.x86.exe と vc_redist.x64.exe をダウンロードして実行し、C++ ランタイムを修復してください： https://learn.microsoft.com/cpp/windows/latest-supported-vc-redist<br>フィードバックによると、他のソフトウェア（OBS など）の更新も必要になる可能性があります。
@ko A: Windows 업데이트 문제입니다. vc_redist.x86.exe 및 vc_redist.x64.exe를 다운로드하여 실행하여 C++ 런타임을 복구하십시오: https://learn.microsoft.com/cpp/windows/latest-supported-vc-redist<br>피드백에 따르면 OBS와 같은 다른 소프트웨어를 업데이트해야 할 수도 있습니다.
@de A: Ein Windows-Update-Problem. Laden Sie und führen Sie vc_redist.x86.exe und vc_redist.x64.exe aus, um C++-Laufzeitbibliotheken zu reparieren: https://learn.microsoft.com/cpp/windows/latest-supported-vc-redist<br>Feedback deutet darauf hin, dass möglicherweise auch andere Software (wie OBS) aktualisiert werden muss.
@fr R : Problème de mise à jour Windows. Téléchargez et exécutez vc_redist.x86.exe et vc_redist.x64.exe pour réparer les runtimes C++ : https://learn.microsoft.com/cpp/windows/latest-supported-vc-redist<br>Les retours suggèrent que la mise à jour d'autres logiciels (comme OBS) pourrait aussi être nécessaire.
@ru О: Проблема с обновлением Windows. Скачайте и запустите vc_redist.x86.exe и vc_redist.x64.exe для восстановления сред выполнения C++: https://learn.microsoft.com/cpp/windows/latest-supported-vc-redist<br>Отзывы предполагают, что может потребоваться обновление другого ПО (например, OBS).

@en <small>Reference: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/vegas-pro-22-won-t-run-after-sept-2024-windows-update--147255/<br></small>
@zh <small>参见：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/vegas-pro-22-won-t-run-after-sept-2024-windows-update--147255/<br></small>
@zh-hant <small>參見：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/vegas-pro-22-won-t-run-after-sept-2024-windows-update--147255/<br></small>
@ja <small>参照： https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/vegas-pro-22-won-t-run-after-sept-2024-windows-update--147255/<br></small>
@ko <small>참조: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/vegas-pro-22-won-t-run-after-sept-2024-windows-update--147255/<br></small>
@de <small>Referenz: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/vegas-pro-22-won-t-run-after-sept-2024-windows-update--147255/<br></small>
@fr <small>Référence : https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/vegas-pro-22-won-t-run-after-sept-2024-windows-update--147255/<br></small>
@ru <small>Ссылка: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/vegas-pro-22-won-t-run-after-sept-2024-windows-update--147255/<br></small>

<br>

@en Q: <sup>**French Version**</sup> The French version of VEGAS Pro crashes on startup?
@zh Q：<sup>**法语版**</sup> 法语版本的 VEGAS Pro 在启动时崩溃？
@zh-hant Q：<sup>**法語版**</sup> 法語版本的 VEGAS Pro 在啟動時崩潰？
@ja Q: <sup>**フランス語版**</sup> フランス語版の VEGAS Pro が起動時にクラッシュする？
@ko Q: <sup>**프랑스어 버전**</sup> 프랑스어 버전 VEGAS Pro가 시작 시 크래시됩니까?
@de F: <sup>**Französische Version**</sup> Die französische Version von VEGAS Pro stürzt beim Start ab?
@fr Q : <sup>**Version française**</sup> La version française de VEGAS Pro plante au démarrage ?
@ru В: <sup>**Французская версия**</sup> Французская версия VEGAS Pro аварийно завершает работу при запуске?

@en A: This is an issue **specific to the French version**. The only solution is to **uninstall and reinstall the English version**. VEGAS officials intended to fix it but have no clear solution. Users who can reproduce this issue are encouraged to contact VEGAS officials.
@zh A：这是**法语版本特有**的问题，只能**卸载后重装为英语版本**。Vegas 官方打算修复它，但毫无头绪。如果有其他能够复现的用户，可以联系 Vegas 官方。
@zh-hant A：這是**法語版本特有**的問題，只能**解除安裝後重裝為英語版本**。Vegas 官方打算修復它，但毫無頭緒。如果有其他能夠復現的使用者，可以聯絡 Vegas 官方。
@ja A: これは**フランス語版特有**の問題です。唯一の解決策は、**アンインストールして英語版を再インストール**することです。VEGAS 公式は修正を意図しましたが、明確な解決策はありません。この問題を再現できるユーザーは、VEGAS 公式に連絡することをお勧めします。
@ko A: 이는 **프랑스어 버전에 특정된 문제**입니다. 유일한 해결책은 **제거하고 영어 버전을 다시 설치**하는 것입니다. VEGAS 공식은 이를 수정하려 했지만 명확한 해결책이 없습니다. 이 문제를 재현할 수 있는 사용자는 VEGAS 공식에 연락하는 것이 좋습니다.
@de A: Dies ist ein Problem, **spezifisch für die französische Version**. Die einzige Lösung ist **Deinstallation und Neuinstallation der englischen Version**. Die VEGAS-Offiziellen beabsichtigten, es zu beheben, haben aber keine klare Lösung. Benutzer, die dieses Problem reproduzieren können, werden ermutigt, die VEGAS-Offiziellen zu kontaktieren.
@fr R : C'est un problème **spécifique à la version française**. La seule solution est de **désinstaller et réinstaller la version anglaise**. Les officiels VEGAS avaient l'intention de le corriger mais n'ont pas de solution claire. Les utilisateurs qui peuvent reproduire ce problème sont encouragés à contacter les officiels VEGAS.
@ru О: Это проблема, **специфичная для французской версии**. Единственное решение — **удалить и переустановить английскую версию**. Официальная команда VEGAS намеревалась исправить это, но четкого решения нет. Пользователям, которые могут воспроизвести эту проблему, рекомендуется обратиться к официальной команде VEGAS.

@en <small>Reference: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/vegas-22-build-93-crash-at-start-when-he-say-window-creation--147150/#ca926950<br></small>
@zh <small>参见：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/vegas-22-build-93-crash-at-start-when-he-say-window-creation--147150/#ca926950<br></small>
@zh-hant <small>參見：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/vegas-22-build-93-crash-at-start-when-he-say-window-creation--147150/#ca926950<br></small>
@ja <small>参照： https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/vegas-22-build-93-crash-at-start-when-he-say-window-creation--147150/#ca926950<br></small>
@ko <small>참조: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/vegas-22-build-93-crash-at-start-when-he-say-window-creation--147150/#ca926950<br></small>
@de <small>Referenz: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/vegas-22-build-93-crash-at-start-when-he-say-window-creation--147150/#ca926950<br></small>
@fr <small>Référence : https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/vegas-22-build-93-crash-at-start-when-he-say-window-creation--147150/#ca926950<br></small>
@ru <small>Ссылка: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/vegas-22-build-93-crash-at-start-when-he-say-window-creation--147150/#ca926950<br></small>

<br>

@en ## V. File Import Related
@zh ## 五、文件导入相关
@zh-hant ## 五、檔案匯入相關
@ja ## 五、ファイルインポート関連
@ko ## V. 파일 가져오기 관련
@de ## V. Dateiimport bezogen
@fr ## V. Importation de fichiers
@ru ## V. Связанное с импортом файлов

@en ### General Troubleshooting for Files Not Importing/Importing with Glitches/Green Flashes:
@zh ### 文件无法正常导入/导入进去乱码/闪绿色等情况的一般处理思路：
@zh-hant ### 檔案無法正常匯入/匯入進去亂碼/閃綠色等情況的一般處理思路：
@ja ### ファイルがインポートできない/グリッチ/緑フラッシュが発生する場合の一般的なトラブルシューティング：
@ko ### 파일 가져오기 실패/오류 가져오기/녹색 깜박임에 대한 일반적인 문제 해결:
@de ### Allgemeine Fehlerbehandlung für Dateien, die nicht importiert werden/importiert werden mit Störungen/grüne Blitze:
@fr ### Dépannage général pour les fichiers qui n'importent pas/importent avec des bugs/clignotements verts :
@ru ### Общие методы устранения неполадок: файлы не импортируются/импортируются с глюками/зелеными вспышками:

@en #### 1. Enable/Disable Legacy AVC and HEVC Decoding
@zh #### 1. 启用/关闭旧版 AVC 和 HEVC 解码
@zh-hant #### 1. 啟用/關閉舊版 AVC 和 HEVC 解碼
@ja #### 1. レガシー AVC および HEVC デコードの有効化/無効化
@ko #### 1. 레거시 AVC 및 HEVC 디코딩 활성화/비활성화
@de #### 1. Legacy AVC und HEVC Decodierung aktivieren/deaktivieren
@fr #### 1. Activer/Désactiver le décodage AVC et HEVC Hérité
@ru #### 1. Включить/Отключить устаревшее декодирование AVC и HEVC

@en - VP18 and above: **`Preferences -> File I/O`, enable/disable `Legacy AVC decoding` and `Legacy HEVC decoding`**.
@zh - vv18 及以上：**`首选项 -> 文件 I/O`，启用/关闭  `旧版 AVC 解码` 和 `旧版 HEVC 解码`**。
@zh-hant - vv18 及以上：**`首選項 -> 檔案 I/O`，啟用/關閉  `舊版 AVC 解碼` 和 `舊版 HEVC 解碼`**。
@ja - VP18 以上： **`プリファレンス -> ファイル I/O`、 `レガシー AVC デコード` および `レガシー HEVC デコード` を有効/無効にします。**
@ko - VP18 이상: **`환경설정 -> 파일 I/O`, `레거시 AVC 디코딩` 및 `레거시 HEVC 디코딩` 활성화/비활성화**.
@de - VP18 und höher: **`Einstellungen -> Datei-E/A`, aktivieren/deaktivieren Sie `Legacy AVC-Decodierung` und `Legacy HEVC-Decodierung`**.
@fr - VP18 et plus : **`Préférences -> E/S fichier`, activez/désactivez `Décodage AVC hérité` et `Décodage HEVC hérité`**.
@ru - VP18 и выше: **`Настройки -> Ввод-вывод файлов (Preferences -> File I/O)`, включите/отключите `Устаревшее декодирование AVC (Legacy AVC decoding)` и `Устаревшее декодирование HEVC (Legacy HEVC decoding)`**.

@en - VP15-17: Access [Internal Preferences](#accessing-vegas-internal-preferences), search for `Reader`, find:
@zh - vv15-17：进入 [内部首选项](#vegas-内部首选项的进入方法)，搜索 `Reader`，分别找到：
@zh-hant - vv15-17：進入 [內部首選項](#vegas-內部首選項的進入方法)，搜尋 `Reader`，分別找到：
@ja - VP15-17： [内部プリファレンス](#vegas-内部プリファレンスへのアクセス)にアクセスし、 `Reader` を検索、以下を見つけます：
@ko - VP15-17: [내부 환경설정 접근](#vegas-내부-환경설정-접근)으로 이동하여 `Reader` 검색, 찾기:
@de - VP15-17: Greifen Sie auf [Interne Einstellungen](#auf-die-internen-vegas-einstellungen-zugreifen) zu, suchen Sie nach `Reader`, finden Sie:
@fr - VP15-17 : Accédez aux [Préférences internes](#accéder-aux-préférences-internes-vegas), recherchez `Reader`, trouvez :
@ru - VP15-17: Перейдите в [Внутренние настройки](#доступ-к-внутренним-настройкам-vegas), найдите `Reader`, найдите:
  - `Use So4 Audio Reader for Intermediate/HEVC`
  - `Enable So4 Compound Reader for AVC/M2TS`
  - `Enable Mx Compound Reader for HEVC/ProRes`
@en <sup>VP17 only</sup>
@zh <sup>仅 17</sup>
@zh-hant <sup>僅 17</sup>
@ja <sup>VP17 のみ</sup>
@ko <sup>VP17 전용</sup>
@de <sup>nur VP17</sup>
@fr <sup>VP17 seulement</sup>
@ru <sup>только VP17</sup>

@en `TRUE` = `Use new decoder`, `FALSE` = `Use old decoder`. Default is `TRUE`. Try changing these.
@zh `TRUE` = `使用新版解码`，`FALSE` = `使用旧版解码`。默认为 `TRUE`。可尝试更改此选项。
@zh-hant `TRUE` = `使用新版解碼`，`FALSE` = `使用舊版解碼`。預設為 `TRUE`。可嘗試更改此選項。
@ja `TRUE` = `新デコーダー使用`、`FALSE` = `旧デコーダー使用`。デフォルトは `TRUE` です。これらを変更してみてください。
@ko `TRUE` = `새 디코더 사용`, `FALSE` = `이전 디코더 사용`. 기본값은 `TRUE`입니다. 이를 변경해 보십시오.
@de `TRUE` = `Neuen Decoder verwenden`, `FALSE` = `Alten Decoder verwenden`. Standard ist `TRUE`. Versuchen Sie, diese zu ändern.
@fr `TRUE` = `Utiliser le nouveau décodeur`, `FALSE` = `Utiliser l'ancien décodeur`. Par défaut est `TRUE`. Essayez de changer ceux-ci.
@ru `TRUE` = `Использовать новый декодер`, `FALSE` = `Использовать старый декодер`. По умолчанию `TRUE`. Попробуйте изменить эти параметры.

@en - VP14 and below use only the old decoder; cannot switch.
@zh - vv14 及以下完全使用的是旧版解码，无法更换解码器。
@zh-hant - vv14 及以下完全使用的是舊版解碼，無法更換解碼器。
@ja - VP14 以下は旧デコーダーのみを使用します。切り替え不可。
@ko - VP14 이하는 이전 디코더만 사용하며 전환할 수 없습니다.
@de - VP14 und darunter verwenden nur den alten Decoder; können nicht wechseln.
@fr - VP14 et moins utilisent seulement l'ancien décodeur ; ne peut pas changer.
@ru - VP14 и ниже используют только старый декодер; переключение невозможно.

@en Since `21 build 300`, the meanings of "legacy" and "new" decoders have swapped.
@zh 自 `21 build 300` 以来，“旧版解码器”与“新版解码器”的含义完全互换。
@zh-hant 自 `21 build 300` 以來，“舊版解碼器”與“新版解碼器”的含義完全互換。
@ja `21 build 300` 以来、「レガシー」と「新」デコーダーの意味が入れ替わりました。
@ko `21 build 300` 이후 "레거시"와 "새" 디코더의 의미가 바뀌었습니다.
@de Seit `21 Build 300` haben sich die Bedeutungen von "Legacy" und "neu" Decodern vertauscht.
@fr Depuis `21 build 300`, les significations de "hérité" et "nouveau" décodeurs ont été inversées.
@ru Начиная с `21 build 300`, значения «устаревший» и «новый» декодеры поменялись местами.

@en The original "legacy AVC/HEVC decoders" are now the default new decoders.
@zh 原先的“旧版 AVC 和 HEVC 解码器”已经变成了新版的默认解码器。
@zh-hant 原先的“舊版 AVC 和 HEVC 解碼器”已經變成了新版的預設解碼器。
@ja 元の「レガシー AVC/HEVC デコーダー」が新しいデフォルトデコーダーになりました。
@ko 원래 "레거시 AVC/HEVC 디코더"는 이제 새로운 기본 디코더가 되었습니다.
@de Die ursprünglichen "Legacy AVC/HEVC-Decoder" sind jetzt die standardmäßigen neuen Decoder.
@fr Les "anciens décodeurs AVC/HEVC hérités" sont maintenant les nouveaux décodeurs par défaut.
@ru Исходные «устаревшие декодеры AVC/HEVC» теперь являются новыми декодерами по умолчанию.

@en The original "new AVC decoder" became the "legacy AVC decoder", and the original "new HEVC decoder" became the "experimental HEVC decoder".
@zh 原先的“新版 AVC 解码器”变成了“旧版 AVC 解码器”，原先的“新版 HEVC 解码器”则变成了“实验性 HEVC 解码器”。
@zh-hant 原先的“新版 AVC 解碼器”變成了“舊版 AVC 解碼器”，原先的“新版 HEVC 解碼器”則變成了“實驗性 HEVC 解碼器”。
@ja 元の「新 AVC デコーダー」は「レガシー AVC デコーダー」に、元の「新 HEVC デコーダー」は「実験的 HEVC デコーダー」になりました。
@ko 원래 "새 AVC 디코더"는 "레거시 AVC 디코더"가 되었고, 원래 "새 HEVC 디코더"는 "실험적 HEVC 디코더"가 되었습니다.
@de Der ursprüngliche "neue AVC-Decoder" wurde zum "Legacy AVC-Decoder", und der ursprüngliche "neue HEVC-Decoder" wurde zum "experimentellen HEVC-Decoder".
@fr L'ancien "nouveau décodeur AVC" est devenu le "décodeur AVC hérité", et l'ancien "nouveau décodeur HEVC" est devenu le "décodeur HEVC expérimental".
@ru Исходный «новый декодер AVC» стал «устаревшим декодером AVC», а исходный «новый декодер HEVC» стал «экспериментальным декодером HEVC».

@en For decoding issues (e.g., media turns **completely green or black**, **no video stream**, or even **audio decoding problems**), try **enabling or disabling these two legacy decoders**.
@zh 遇到解码问题，比如媒体文件扔进去，**整个变绿或者黑屏**了，或者**扔进去没有视频流**等视频无法正常解码的情况，甚至是**视频的音频解码问题**（也有人遇到过），可以尝试**启用或者关闭这两个旧版解码**。
@zh-hant 遇到解碼問題，比如媒體檔案扔進去，**整個變綠或者黑屏**了，或者**扔進去沒有影片流**等影片無法正常解碼的情況，甚至是**影片的音訊解碼問題**（也有人遇到過），可以嘗試**啟用或者關閉這兩個舊版解碼**。
@ja デコードの問題（メディアが**完全に緑または黒くなる**、**ビデオストリームなし**、または**オーディオデコード問題**）が発生した場合、**これら 2 つのレガシーデコーダーを有効または無効にしてみてください**。
@ko 디코딩 문제(예: 미디어가 **완전히 녹색 또는 검은색으로 변함**, **비디오 스트림 없음**, 심지어 **오디오 디코딩 문제**)의 경우 **이 두 레거시 디코더를 활성화 또는 비활성화**해 보십시오.
@de Bei Decodierungsproblemen (z. B. Medien werden **komplett grün oder schwarz**, **kein Videostream**, oder sogar **Audio-Decodierungsprobleme**) versuchen Sie, **diese beiden Legacy-Decoder zu aktivieren oder zu deaktivieren**.
@fr Pour les problèmes de décodage (par ex. média devient **complètement vert ou noir**, **pas de flux vidéo**, ou même **problèmes de décodage audio**), essayez **d'activer ou de désactiver ces deux décodeurs hérités**.
@ru При проблемах с декодированием (например, медиа становится **полностью зеленым или черным**, **нет видеопотока**, или даже **проблемы с декодированием аудио**) попробуйте **включить или отключить эти два устаревших декодера**.

@en If that doesn't work, try switching the **`Hardware decoder`** option below (may require disabling legacy decoding).
@zh 如仍无法解决，可以尝试切换下面的 **`硬件解码器`** 选项（**可能需要关闭旧版解码**），也有可能可以解决。
@zh-hant 如仍無法解決，可以嘗試切換下面的 **`硬體解碼器`** 選項（**可能需要關閉舊版解碼**），也有可能可以解決。
@ja それでもダメな場合は、以下の **`ハードウェアデコーダー`** オプションを切り替えてみてください（レガシーデコードを無効にする必要があるかもしれません）。
@ko 작동하지 않으면 아래의 **`하드웨어 디코더`** 옵션을 전환해 보십시오(레거시 디코딩 비활성화가 필요할 수 있음).
@de Wenn das nicht funktioniert, versuchen Sie, die **`Hardware-Decoder`**-Option darunter umzuschalten (erfordert möglicherweise das Deaktivieren der Legacy-Decodierung).
@fr Si cela ne fonctionne pas, essayez de changer l'option **`Décodeur matériel`** ci-dessous (peut nécessiter de désactiver le décodage hérité).
@ru Если это не поможет, попробуйте переключить опцию **`Аппаратный декодер (Hardware decoder)`** ниже (может потребоваться отключить устаревшее декодирование).

<br>

@en #### 2. Disable Resample
@zh #### 2. 禁用重采样
@zh-hant #### 2. 禁用重采樣
@ja #### 2. リサンプルを無効にする
@ko #### 2. 리샘플 비활성화
@de #### 2. Resample deaktivieren
@fr #### 2. Désactiver le rééchantillonnage
@ru #### 2. Отключить повторную дискретизацию (Resample)

@en `File -> Properties`, under `Resample`, select **`Disable resample`**.
@zh 左上角 `文件 -> 属性`，在 `重采样` 这一栏中选择 **`禁用重采样`**。
@zh-hant 左上角 `檔案 -> 內容`，在 `重采樣` 這一欄中選擇 **`禁用重采樣`**。
@ja `ファイル -> プロパティ`、 `リサンプル` で **`リサンプルを無効にする`** を選択。
@ko `파일 -> 속성`, `리샘플` 아래에서 **`리샘플 사용 안 함`** 을 선택합니다.
@de `Datei -> Eigenschaften`, unter `Resample`, wählen Sie **`Resample deaktivieren`**.
@fr `Fichier -> Propriétés`, sous `Rééchantillonnage`, sélectionnez **`Désactiver le rééchantillonnage`**.
@ru `Файл -> Свойства (File -> Properties)`, в разделе `Повторная дискретизация (Resample)` выберите **`Отключить повторную дискретизацию (Disable resample)`**.

@en Disabling resample addresses **frame-related issues**. If resample is enabled (e.g., 30fps footage in a 60fps project), **VEGAS generates frame blending between original frames** (visible as a **crossfade between two frames** when scrubbing frame by frame).
@zh 禁用重采样主要针对的是**和帧有关的问题**，如果启用了重采样功能，比如将 30fps 的素材扔进 60fps 的工程里，**Vegas 就会自动在原素材的两帧之间生成帧混合**（肉體上逐幀預覽，可以看見類似於**兩幀淡入淡出**的效果）。
@zh-hant 禁用重采樣主要針對的是**和幀有關的問題**，如果啟用了重采樣功能，比如將 30fps 的素材扔進 60fps 的工程裡，**Vegas 就會自動在原素材的兩幀之間生成幀混合**（肉體上逐幀預覽，可以看見類似於**兩幀淡入淡出**的效果）。
@ja リサンプルを無効にすると、**フレーム関連の問題**に対処します。リサンプルが有効な場合（例：30fps 素材を 60fps プロジェクトに）、**VEGAS は元のフレーム間でフレームブレンディングを生成**します（フレームごとにスクラブすると、**2 フレーム間のクロスフェード**のように見えます）。
@ko 리샘플 비활성화는 **프레임 관련 문제**를 해결합니다. 리샘플이 활성화된 경우(예: 60fps 프로젝트의 30fps 영상), **VEGAS는 원본 프레임 사이에 프레임 블렌딩을 생성**합니다(프레임별로 스크러빙할 때 **두 프레임 간의 크로스페이드**로 표시됨).
@de Das Deaktivieren von Resample behandelt **rahmenbezogene Probleme**. Wenn Resample aktiviert ist (z. B. 30fps-Material in einem 60fps-Projekt), **erzeugt VEGAS Frame-Blending zwischen Originalrahmen** (sichtbar als **Überblendung zwischen zwei Frames** beim Frame-für-Frame-Scrolling).
@fr Désactiver le rééchantillonnage traite les **problèmes liés aux trames**. Si le rééchantillonnage est activé (par ex. séquence 30ips dans un projet 60ips), **VEGAS génère un mélange de trames entre les trames originales** (visible comme un **fondu enchaîné entre deux trames** lors du défilement trame par trame).
@ru Отключение повторной дискретизации решает **проблемы, связанные с кадрами**. Если повторная дискретизация включена (например, материал 30 кадров/с в проекте 60 кадров/с), **VEGAS генерирует смешивание кадров между исходными кадрами** (видимое как **перекрестное затухание между двумя кадрами** при покадровой прокрутке).

@en **This can cause frame generation errors, resulting in flickering (green/black flashes). It's generally recommended to disable it.**
@zh **此功能可能会造成帧的生成错误，造成闪帧（闪绿色/黑色）等情况，一般建议禁用。**
@zh-hant **此功能可能會造成幀的生成錯誤，造成閃幀（閃綠色/黑色）等情況，一般建議禁用。**
@ja **これはフレーム生成エラーを引き起こし、フリッカー（緑/黒フラッシュ）を引き起こす可能性があります。一般的に無効にすることをお勧めします。**
@ko **이는 프레임 생성 오류를 일으켜 깜박임(녹색/검은색 깜박임)을 유발할 수 있습니다. 일반적으로 비활성화하는 것이 좋습니다.**
@de **Dies kann zu Frame-Generierungsfehlern führen, die zu Flackern (grüne/schwarze Blitze) führen. Es wird im Allgemeinen empfohlen, es zu deaktivieren.**
@fr **Cela peut provoquer des erreurs de génération de trame, résultant en un clignotement (éclairs verts/noirs). Il est généralement recommandé de le désactiver.**
@ru **Это может вызвать ошибки генерации кадров, приводящие к мерцанию (зеленые/черные вспышки). Обычно рекомендуется отключать его.**

@en In VP13 and earlier, you **cannot modify the project's resample setting directly in `Project Properties`**. Instead, select an event on the timeline, **`Right-click -> Switches -> Disable resample`**.
@zh 在 vv13 及以前的版本中，`项目属性` 里**无法直接修改整个工程的重采样设置，只能选中时间轴上的事件，`右键 -> 开关 -> 禁用重采样`**。
@zh-hant 在 vv13 及以前的版本中，`專案內容` 裡**無法直接修改整個工程的重采樣設定，只能選中時間軸上的事件，`右鍵 -> 開關 -> 禁用重采樣`**。
@ja VP13 以前では、 **`プロジェクトプロパティ` で直接プロジェクトのリサンプル設定を変更できません**。代わりに、タイムライン上のイベントを選択し、 **`右クリック -> スイッチ -> リサンプルを無効にする`** します。
@ko VP13 이전 버전에서는 **`프로젝트 속성`에서 직접 프로젝트의 리샘플 설정을 수정할 수 없습니다**. 대신 타임라인에서 이벤트를 선택하고 **`마우스 오른쪽 버튼 클릭 -> 스위치 -> 리샘플 사용 안 함`** 을 선택합니다.
@de In VP13 und früher können Sie **die Resample-Einstellung des Projekts nicht direkt in `Projekteigenschaften` ändern**. Wählen Sie stattdessen ein Event auf der Timeline, **`Rechtsklick -> Schalter -> Resample deaktivieren`**.
@fr Dans VP13 et antérieur, vous **ne pouvez pas modifier le paramètre de rééchantillonnage du projet directement dans `Propriétés du projet`**. Au lieu de cela, sélectionnez un événement sur la timeline, **`Clic droit -> Commutateurs -> Désactiver le rééchantillonnage`**.
@ru В VP13 и ранее вы **не можете изменить настройку повторной дискретизации проекта непосредственно в `Свойствах проекта (Project Properties)`**. Вместо этого выберите событие на временной шкале, **`Щелкните правой кнопкой мыши -> Переключатели (Switches) -> Отключить повторную дискретизацию (Disable resample)`**.

<br>

@en #### 3. Install Corresponding Codecs
@zh #### 3. 安装对应编解码器
@zh-hant #### 3. 安裝對應編解碼器
@ja #### 3. 対応するコーデックをインストールする
@ko #### 3. 해당 코덱 설치
@de #### 3. Entsprechende Codecs installieren
@fr #### 3. Installer les codecs correspondants
@ru #### 3. Установить соответствующие кодеки

@en For example, QuickTime formats require QuickTime 7.7.9 installed with the QuickTime plugin selected during installation.
@zh 比如 QuickTime 相关格式要求安装 QuickTime 7.7.9，并在安装时勾选 QuickTime 插件。
@zh-hant 比如 QuickTime 相關格式要求安裝 QuickTime 7.7.9，並在安裝時勾選 QuickTime 外掛程式。
@ja 例：QuickTime 形式には、インストール時に QuickTime プラグインを選択してインストールした QuickTime 7.7.9 が必要です。
@ko 예를 들어 QuickTime 형식에는 설치 시 QuickTime 플러그인을 선택하여 QuickTime 7.7.9를 설치해야 합니다.
@de Zum Beispiel erfordern QuickTime-Formate die Installation von QuickTime 7.7.9 mit ausgewähltem QuickTime-Plugin während der Installation.
@fr Par exemple, les formats QuickTime nécessitent l'installation de QuickTime 7.7.9 avec le plugin QuickTime sélectionné pendant l'installation.
@ru Например, форматы QuickTime требуют установки QuickTime 7.7.9 с выбранным плагином QuickTime во время установки.

@en The question of installing K-Lite Codec Pack is still debated. Some users on the official forum say it "might conflict with VEGAS's built-in codecs" and advise against it.
@zh 关于是否安装 K-Lite 编解码器包这个问题，仍然有争议性。Vegas 官方论坛中的一些用户说“有可能会和 Vegas 自带的编解码器冲突”，不建议安装。
@zh-hant 關於是否安裝 K-Lite 編解碼器包這個問題，仍然有爭議性。Vegas 官方論壇中的一些使用者說“有可能會和 Vegas 自帶的編解碼器衝突”，不建議安裝。
@ja K-Lite Codec Pack のインストールの是非はまだ議論されています。公式フォーラムの一部のユーザーは「VEGAS の組み込みコーデックと競合する可能性がある」として推奨していません。
@ko K-Lite 코덱 팩 설치 여부는 여전히 논쟁 중입니다. 공식 포럼의 일부 사용자는 "VEGAS의 내장 코덱과 충돌할 수 있다"고 말하며 설치하지 말 것을 권고합니다.
@de Die Frage der Installation des K-Lite Codec Pack wird immer noch diskutiert. Einige Benutzer im offiziellen Forum sagen, dass es "mit VEGAS' eingebauten Codecs kollidieren könnte" und raten davon ab.
@fr La question d'installer K-Lite Codec Pack est toujours débattue. Certains utilisateurs sur le forum officiel disent qu'il "pourrait entrer en conflit avec les codecs intégrés de VEGAS" et déconseillent son installation.
@ru Вопрос об установке K-Lite Codec Pack все еще обсуждается. Некоторые пользователи на официальном форуме говорят, что он «может конфликтовать со встроенными кодеками VEGAS» и советуют против него.

<br>

@en #### 4. Re-encode Media Files
@zh #### 4. 媒体文件重新转码
@zh-hant #### 4. 媒體檔案重新轉碼
@ja #### 4. メディアファイルを再エンコードする
@ko #### 4. 미디어 파일 재인코딩
@de #### 4. Mediendateien neu enkodieren
@fr #### 4. Réencoder les fichiers multimédias
@ru #### 4. Перекодировать медиафайлы

@en If the above methods don't solve **import failure/decoding issues/severe lag after import**, try re-encoding the file. Recommended settings: Video codec AVC, audio codec AAC, container mp4, constant frame rate.
@zh **媒体文件本身没法导入/导入进去有解码问题/导入媒体文件后很卡**等情况，如果上述几种办法都没有解决，可以尝试使用转码软件进行重新转码。建议的转码设置：视频编码为 AVC、音频编码为 AAC、封装格式为 mp4，恒定帧率。
@zh-hant **媒體檔案本身沒法匯入/匯入進去有解碼問題/匯入媒體檔案後很卡**等情況，如果上述幾種辦法都沒有解決，可以嘗試使用轉碼軟體進行重新轉碼。建議的轉碼設定：影片編碼為 AVC、音訊編碼為 AAC、封裝格式為 mp4，恆定幀率。
@ja 上記の方法で**インポート失敗/デコード問題/インポート後の重いラグ**が解決しない場合は、ファイルを再エンコードしてみてください。推奨設定：ビデオコーデック AVC、オーディオコーデック AAC、コンテナ mp4、固定フレームレート。
@ko 위의 방법으로 **가져오기 실패/디코딩 문제/가져온 후 심각한 지연**이 해결되지 않으면 파일을 재인코딩해 보십시오. 권장 설정: 비디오 코덱 AVC, 오디오 코덱 AAC, 컨테이너 mp4, 고정 프레임 속도.
@de Wenn die oben genannten Methoden **Importfehler/Decodierungsprobleme/ schwere Verzögerung nach dem Import** nicht lösen, versuchen Sie, die Datei neu zu enkodieren. Empfohlene Einstellungen: Video-Codec AVC, Audio-Codec AAC, Container mp4, konstante Framerate.
@fr Si les méthodes ci-dessus ne résolvent pas **l'échec d'importation/les problèmes de décodage/une grande lenteur après l'importation**, essayez de réencoder le fichier. Paramètres recommandés : Codec vidéo AVC, codec audio AAC, conteneur mp4, taux de trame constant.
@ru Если вышеуказанные методы не решают **сбой импорта/проблемы декодирования/сильные задержки после импорта**, попробуйте перекодировать файл. Рекомендуемые настройки: Видеокодек AVC, аудиокодек AAC, контейнер mp4, постоянная частота кадров.

@en If only audio has issues, you can **extract the audio as a wav file** and import it back, grouping it (G) with the original video.
@zh 如果只是音频解码有问题，也可以**直接转出音频 wav 文件**，再扔回 Vegas 里，与原视频按 G 打组。
@zh-hant 如果只是音訊解碼有問題，也可以**直接轉出音訊 wav 檔案**，再扔回 Vegas 裡，與原影片按 G 打組。
@ja オーディオのみに問題がある場合は、 **オーディオを wav ファイルとして抽出**し、元のビデオとグループ化（G）して再インポートできます。
@ko 오디오에만 문제가 있는 경우 **오디오를 wav 파일로 추출**한 후 다시 가져와 원본 비디오와 그룹화(G)할 수 있습니다.
@de Wenn nur Audio Probleme hat, können Sie **das Audio als WAV-Datei extrahieren** und separat importieren, gruppieren Sie es (G) mit dem Originalvideo.
@fr Si seul l'audio pose problème, vous pouvez **extraire l'audio en fichier wav** et le réimporter, le grouper (G) avec la vidéo originale.
@ru Если проблемы только со звуком, вы можете **извлечь аудио как wav-файл** и импортировать его обратно, сгруппировав его (G) с исходным видео.

<br>

@en #### 5. Reset Preferences
@zh #### 5. 重置首选项
@zh-hant #### 5. 重設首選項
@ja #### 5. プリファレンスをリセットする
@ko #### 5. 환경설정 재설정
@de #### 5. Einstellungen zurücksetzen
@fr #### 5. Réinitialiser les préférences
@ru #### 5. Сбросить настройки

@en A common scenario: **Imported audio is completely noisy**. In this case, try **[Resetting Preferences](#5-reset-preferences)**.
@zh 比较常见的情况：**音频导入进去完全是杂音**。这种情况下可以尝试 **[重置首选项](#5-重置首选项)**。
@zh-hant 比較常見的情況：**音訊匯入進去完全是雜音**。這種情況下可以嘗試 **[重設首選項](#5-重設首選項)**。
@ja 一般的なシナリオ：**インポートしたオーディオが完全にノイズになる**。この場合は、 **[プリファレンスのリセット](#5-プリファレンスをリセットする)** を試みてください。
@ko 일반적인 시나리오: **가져온 오디오가 완전히 잡음**. 이 경우 **[환경설정 재설정](#5-환경설정-재설정)** 을 시도해 보십시오.
@de Ein häufiges Szenario: **Importierter Audio ist komplett verrauscht**. In diesem Fall versuchen Sie **[Einstellungen zurücksetzen](#5-einstellungen-zurücksetzen)**.
@fr Un scénario courant : **L'audio importé est complètement bruyant**. Dans ce cas, essayez **[Réinitialiser les préférences](#5-réinitialiser-les-préférences)**.
@ru Распространенный сценарий: **Импортированный аудио полностью зашумлен**. В этом случае попробуйте **[Сбросить настройки](#5-сбросить-настройки)**.

<br>

@en ### File Import Q&A
@zh ### 文件导入相关的 Q&A
@zh-hant ### 檔案匯入相關的 Q&A
@ja ### ファイルインポート Q&A
@ko ### 파일 가져오기 Q&A
@de ### Dateiimport Q&A
@fr ### FAQ sur l'importation de fichiers
@ru ### Вопросы и ответы по импорту файлов

@en Q: Can't **drag and drop files from folders** into VEGAS, only use the `Open` button?
@zh Q：Vegas**没办法从文件夹里拖放导入文件**，只能用 `打开` 按钮？
@zh-hant Q：Vegas**沒辦法從資料夾裡拖放匯入檔案**，只能用 `開啟` 按鈕？
@ja Q: **フォルダからのファイルのドラッグ＆ドロップ**が VEGAS にできない、 `開く` ボタンのみ使用できる？
@ko Q: **폴더에서 파일을 VEGAS로 끌어다 놓을 수 없고**, `열기` 버튼만 사용할 수 있습니까?
@de F: Kann nicht **Dateien aus Ordnern per Drag & Drop** in VEGAS importieren, nur die `Öffnen`-Schaltfläche verwenden?
@fr Q : Impossible de **glisser-déposer des fichiers depuis des dossiers** dans VEGAS, seulement utiliser le bouton `Ouvrir` ?
@ru В: Нельзя **перетаскивать файлы из папок** в VEGAS, только использовать кнопку `Открыть`?

@en A: If VEGAS is running **with administrator privileges**, drag-and-drop is disabled. The fix is to **run VEGAS without administrator privileges**.
@zh A：如果是用管理员权限运行的 Vegas，那就会造成无法拖放文件的情况。解决办法是**不用管理员权限运行 Vegas**。
@zh-hant A：如果是用管理員許可權執行的 Vegas，那就會造成無法拖放檔案的情況。解決辦法是**不用管理員許可權執行 Vegas**。
@ja A: VEGAS が**管理者権限で実行されている**場合、ドラッグ＆ドロップは無効になります。修正は、 **管理者権限なしで VEGAS を実行する**ことです。
@ko A: VEGAS가 **관리자 권한으로 실행 중**이면 끌어다 놓기가 비활성화됩니다. 해결 방법은 **관리자 권한 없이 VEGAS를 실행**하는 것입니다.
@de A: Wenn VEGAS **mit Administratorrechten** ausgeführt wird, ist Drag & Drop deaktiviert. Die Lösung ist, **VEGAS ohne Administratorrechte auszuführen**.
@fr R : Si VEGAS est exécuté **avec des privilèges d'administrateur**, le glisser-déposer est désactivé. La solution est **d'exécuter VEGAS sans privilèges d'administrateur**.
@ru О: Если VEGAS запущен **с правами администратора**, перетаскивание отключено. Исправление — **запускать VEGAS без прав администратора**.

@en Note: If you're using a **portable version of VEGAS (marked `Portable`)**, it might require administrator privileges to start, preventing drag-and-drop. Some "solutions" involve disabling UAC via registry, which is **not recommended**. **It's better to switch to a regular version, not the portable one.**
@zh 注意，如果你使用的是**便携版 Vegas（标有 `Portable` 字样）**，就可能必须得用管理员权限才能启动 Vegas，会导致没法拖放导入文件。某些人提供的“解决办法”是通过修改注册表关闭 UAC 模式（Windows 用户帐户控制）这样解决的，但此处不建议使用此办法，**建议更换为常规版本，不要使用便携版的 Vegas**。
@zh-hant 注意，如果你使用的是**便攜版 Vegas（標有 `Portable` 字樣）**，就可能必須得用管理員許可權才能啟動 Vegas，會導致沒法拖放匯入檔案。某些人提供的“解決辦法”是通過修改登錄檔關閉 UAC 模式（Windows 使用者帳戶控制）這樣解決的，但此處不建議使用此辦法，**建議更換為常規版本，不要使用便攜版的 Vegas**。
@ja 注：**ポータブル版 VEGAS（`Portable` と表示）** を使用している場合、起動に管理者権限が必要で、ドラッグ＆ドロップができなくなる可能性があります。レジストリ経由で UAC を無効にする「解決策」もありますが、**推奨しません**。 **通常版に切り替え、ポータブル版を使用しないことをお勧めします。**
@ko 참고: **VEGAS 포터블 버전(표시됨 `Portable`)을 사용하는 경우** 관리자 권한으로 시작해야 할 수 있으며, 끌어다 놓기를 방지합니다. 일부 "해결책"은 레지스트리를 통해 UAC를 비활성화하는 것을 포함하지만 **권장되지 않습니다**. **일반 버전으로 전환하고 포터블 버전을 사용하지 않는 것이 좋습니다.**
@de Hinweis: Wenn Sie eine **portable Version von VEGAS (markiert mit `Portable`)** verwenden, muss sie möglicherweise mit Administratorrechten starten, was Drag & Drop verhindert. Einige "Lösungen" beinhalten das Deaktivieren von UAC über die Registrierung, was **nicht empfohlen** wird. **Es ist besser, auf eine reguläre Version umzusteigen, nicht die portable.**
@fr Note : Si vous utilisez une **version portable de VEGAS (marquée `Portable`)**, elle pourrait nécessiter des privilèges d'administrateur pour démarrer, empêchant le glisser-déposer. Certaines "solutions" impliquent de désactiver UAC via le registre, ce qui est **non recommandé**. **Il vaut mieux passer à une version régulière, pas la version portable.**
@ru Примечание: Если вы используете **портативную версию VEGAS (помеченную `Portable`)**, она может требовать прав администратора для запуска, что предотвращает перетаскивание. Некоторые «решения» предполагают отключение UAC через реестр, что **не рекомендуется**. **Лучше перейти на обычную версию, а не портативную.**

@en **Issues with Portable VEGAS: Requires administrator privileges; cannot run multiple instances; doesn't recognize system environment variables; some plugins (e.g., [Voukoder](#recommended-render-plugin-voukoder)) need manual connector placement. Avoid if possible.**
@zh **便携版 Vegas 的几个问题：必须用管理员权限运行；程序不能多开；不识别系统环境变量；某些插件（比如 [Voukoder 渲染插件](#渲染插件-voukoder-推荐) 等）需要手动放置连接器，不能自动安装。能不用，尽量不用。**
@zh-hant **便攜版 Vegas 的幾個問題：必須用管理員許可權執行；程式不能多開；不識別系統環境變數；某些外掛程式（比如 [Voukoder 算繪外掛程式](#算繪外掛程式-voukoder-推薦) 等）需要手動放置連接器，不能自動安裝。能不用，儘量不用。**
@ja **ポータブル VEGAS の問題点：管理者権限が必要、複数インスタンスを実行できない、システム環境変数を認識しない、一部のプラグイン（例：[Voukoder](#推奨レンダープラグイン-voukoder)）は手動でコネクタを配置する必要がある。可能であれば避けてください。**
@ko **포터블 VEGAS의 문제: 관리자 권한 필요; 여러 인스턴스 실행 불가; 시스템 환경 변수 인식 안 됨; 일부 플러그인(예: [Voukoder](#권장-렌더링-플러그인-voukoder))은 수동 커넥터 배치 필요. 가능하면 피하십시오.**
@de **Probleme mit portabler VEGAS: Erfordert Administratorrechte; kann nicht mehrere Instanzen ausführen; erkennt System-Umgebungsvariablen nicht; einige Plugins (z. B. [Voukoder](#empfohlenes-render-plugin-voukoder)) benötigen manuelle Platzierung des Konnektors. Vermeiden Sie es, wenn möglich.**
@fr **Problèmes avec VEGAS Portable : Nécessite des privilèges d'administrateur ; ne peut pas exécuter plusieurs instances ; ne reconnaît pas les variables d'environnement système ; certains plugins (par ex. [Voukoder](#plugin-de-rendu-recommandé-voukoder)) nécessitent un placement manuel du connecteur. À éviter si possible.**
@ru **Проблемы с портативной версией VEGAS: Требует прав администратора; нельзя запускать несколько экземпляров; не распознает переменные окружения системы; некоторым плагинам (например, [Voukoder](#рекомендуемый-плагин-рендеринга-voukoder)) требуется ручное размещение коннектора. По возможности избегайте.**

<br>

@en Q: Error when trying to import: **`Warning: An error occurred opening one or more files. The files could not be opened. Ensure the files exist and that you have access permissions to the file/folder.`**
@zh Q：尝试导入文件时报错：“**警告：打开一个或多个文件时发生错误。文件无法打开。请确保文件存在并且您对此文件/文件夹有访问权限。**”
@zh-hant Q：嘗試匯入檔案時報錯：“**警告：開啟一個或多個檔案時發生錯誤。檔案無法開啟。請確保檔案存在並且您對此檔案/資料夾有存取許可權。**”
@ja Q: インポートしようとするとエラー：**`警告：1 つ以上のファイルを開く際にエラーが発生しました。ファイルを開くことができませんでした。ファイルが存在し、ファイル/フォルダへのアクセス権限があることを確認してください。`**
@ko Q: 가져오기 시도 시 오류: **`경고: 하나 이상의 파일을 여는 중 오류가 발생했습니다. 파일을 열 수 없습니다. 파일이 존재하고 파일/폴더에 대한 액세스 권한이 있는지 확인하십시오.`**
@de F: Fehler beim Versuch zu importieren: **`Warnung: Beim Öffnen einer oder mehrerer Dateien ist ein Fehler aufgetreten. Die Dateien konnten nicht geöffnet werden. Stellen Sie sicher, dass die Dateien existieren und Sie Zugriffsberechtigungen für die Datei/den Ordner haben.`**
@fr Q : Erreur lors de la tentative d'importation : **`Avertissement : Une erreur s'est produite lors de l'ouverture d'un ou plusieurs fichiers. Les fichiers n'ont pas pu être ouverts. Assurez-vous que les fichiers existent et que vous avez les autorisations d'accès au fichier/dossier.`**
@ru В: Ошибка при попытке импорта: **`Предупреждение: Произошла ошибка при открытии одного или нескольких файлов. Файлы не могут быть открыты. Убедитесь, что файлы существуют и у вас есть права доступа к файлу/папке.`**

@en A: Check if the VEGAS **installation path** contains **only [half-width English characters (including half-width spaces)]**. If it contains any other characters like Chinese, **uninstall and reinstall VEGAS to a path with only half-width English characters**.
@zh A：请检查 Vegas 软件本体的**安装路径**中是否**只含有**【**半角英文字符（可以包含空格）**】。如果含有任何中文之类的其他字符，**卸载重装 Vegas，更换到只含半角英文字符的路径**。
@zh-hant A：請檢查 Vegas 軟體本體的**安裝路徑**中是否**只含有**【**半角英文字元（可以包含空格）**】。如果含有任何中文之類的其他字元，**解除安裝重裝 Vegas，更換到只含半角英文字元的路徑**。
@ja A: VEGAS の**インストールパス**に**半角英数字のみ（半角スペースを含む）** が含まれているか確認してください。中国語などの他の文字が含まれている場合、**VEGAS をアンインストールし、半角英数字のみのパスに再インストールします**。
@ko A: VEGAS **설치 경로**가 **오직 [반각 영문자(반각 공백 포함)]만 포함하는지** 확인하십시오. 중국어와 같은 다른 문자가 포함되어 있으면 **VEGAS를 제거하고 반각 영문자만 포함하는 경로에 다시 설치**하십시오.
@de A: Überprüfen Sie, ob der **Installationspfad** von VEGAS **nur [halbe Breite englische Zeichen (einschließlich halbbreiter Leerzeichen)]** enthält. Wenn er andere Zeichen wie Chinesisch enthält, **deinstallieren und neu installieren Sie VEGAS in einen Pfad, der nur halbbreite englische Zeichen enthält**.
@fr R : Vérifiez si le **chemin d'installation** de VEGAS contient **uniquement [des caractères anglais demi-largeur (y compris des espaces demi-largeur)]**. S'il contient d'autres caractères comme du chinois, **désinstallez et réinstallez VEGAS dans un chemin avec uniquement des caractères anglais demi-largeur**.
@ru О: Проверьте, содержит ли **путь установки VEGAS** **только [полуширинные английские символы (включая полуширинные пробелы)]**. Если он содержит любые другие символы, такие как китайские, **удалите и переустановите VEGAS в путь, содержащий только полуширинные английские символы**.

<br>

@en Q: Want to **import mkv files**, but can't.
@zh Q：想**导入 mkv 媒体文件**，无法导入。
@zh-hant Q：想**匯入 mkv 媒體檔案**，無法匯入。
@ja Q: **mkv ファイルをインポート**したいが、できない。
@ko Q: **mkv 파일을 가져오고 싶지만** 할 수 없습니다.
@de F: Möchte **mkv-Dateien importieren**, kann aber nicht.
@fr Q : Veut **importer des fichiers mkv**, mais ne peut pas.
@ru В: Хочу **импортировать файлы mkv**, но не получается.

@en A: In VP17 and above, you can **`Preferences -> File I/O`, `Enable MKV reader`**, restart VEGAS, and try again.
@zh A：vv17 及以上版本，可以在 **`首选项 -> 文件 I/O` 中 `启用 MKV 读取器`**，重启 Vegas 后再试试看能否成功导入。
@zh-hant A：vv17 及以上版本，可以在 **`首選項 -> 檔案 I/O` 中 `啟用 MKV 讀取器`**，重啟 Vegas 後再試試看能否成功匯入。
@ja A: VP17 以上では、 **`プリファレンス -> ファイル I/O`、 `MKV リーダーを有効にする`**、VEGAS を再起動し、再度試みることができます。
@ko A: VP17 이상에서는 **`환경설정 -> 파일 I/O`, `MKV 리더 활성화`**, VEGAS를 다시 시작하고 다시 시도할 수 있습니다.
@de A: In VP17 und höher können Sie **`Einstellungen -> Datei-E/A`, `MKV-Reader aktivieren`**, VEGAS neu starten und erneut versuchen.
@fr R : Dans VP17 et plus, vous pouvez **`Préférences -> E/S fichier`, `Activer le lecteur MKV`**, redémarrer VEGAS, et réessayer.
@ru О: В VP17 и выше вы можете **`Настройки -> Ввод-вывод файлов (Preferences -> File I/O)`, `Включить MKV ридер (Enable MKV reader)`**, перезапустить VEGAS и попробовать снова.

@en This feature has many bugs, so import might still fail. If so, pre-convert with other software.
@zh 此功能 bug 较多，因此也有可能出现无法正常导入的情况。无法正常导入时，只能用其他软件提前转码。
@zh-hant 此功能 bug 較多，因此也有可能出現無法正常匯入的情況。無法正常匯入時，只能用其他軟體提前轉碼。
@ja この機能には多くのバグがあるため、インポートが失敗する可能性があります。その場合は、他のソフトウェアで事前変換してください。
@ko 이 기능에는 버그가 많으므로 가져오기가 여전히 실패할 수 있습니다. 그렇다면 다른 소프트웨어로 미리 변환하십시오.
@de Diese Funktion hat viele Bugs, daher könnte der Import immer noch fehlschlagen. Wenn ja, vorher mit anderer Software konvertieren.
@fr Cette fonctionnalité a beaucoup de bugs, donc l'importation peut encore échouer. Si c'est le cas, pré-convertissez avec un autre logiciel.
@ru В этой функции много ошибок, поэтому импорт все равно может завершиться неудачей. Если да, предварительно конвертируйте с помощью другого ПО.

@en Note: `21 build 187` and above support mkv import by default; no need to enable manually.
@zh 注：`21 build 187` 及以上版本已经默认支持 mkv 文件导入，无须手动启用。
@zh-hant 注：`21 build 187` 及以上版本已經預設支援 mkv 檔案匯入，無須手動啟用。
@ja 注：`21 build 187` 以上はデフォルトで mkv インポートをサポートしており、手動で有効にする必要はありません。
@ko 참고: `21 build 187` 이상은 기본적으로 mkv 가져오기를 지원하며 수동 활성화가 필요하지 않습니다.
@de Hinweis: `21 Build 187` und höher unterstützen mkv-Import standardmäßig; keine manuelle Aktivierung erforderlich.
@fr Note : `21 build 187` et plus supportent l'importation mkv par défaut ; pas besoin d'activer manuellement.
@ru Примечание: `21 build 187` и выше поддерживают импорт mkv по умолчанию; не нужно включать вручную.

@en Also: About converting mkv files
@zh 另：关于 mkv 文件的转码
@zh-hant 另：關於 mkv 檔案的轉碼
@ja また：mkv ファイルの変換について
@ko 또한: mkv 파일 변환에 관하여
@de Auch: Über das Konvertieren von mkv-Dateien
@fr Aussi : À propos de la conversion de fichiers mkv
@ru Также: О конвертации файлов mkv

@en A video file has two layers: the inner encoding stream and the outer container. Import failure can be due to either unsupported stream or container.
@zh 一个视频文件可以看作是有两层，里边那一层是编码流，外边那一层是容器。因此无法导入文件的情况也有两种，一种是编码流不支持，一种是容器不支持。
@zh-hant 一個影片檔案可以看作是有兩層，裡邊那一層是編碼流，外邊那一層是容器。因此無法匯入檔案的情況也有兩種，一種是編碼流不支援，一種是容器不支援。
@ja ビデオファイルには 2 つのレイヤー、内部のエンコードストリームと外部のコンテナがあります。インポート失敗は、サポートされていないストリームまたはコンテナが原因の場合があります。
@ko 비디오 파일에는 두 가지 레이어, 내부 인코딩 스트림과 외부 컨테이너가 있습니다. 가져오기 실패는 지원되지 않는 스트림 또는 컨테이너로 인한 것일 수 있습니다.
@de Eine Videodatei hat zwei Schichten: den inneren Enkodierungsstrom und den äußeren Container. Importfehler können entweder durch nicht unterstützten Strom oder Container verursacht werden.
@fr Un fichier vidéo a deux couches : le flux de codage interne et le conteneur externe. L'échec d'importation peut être dû soit à un flux non supporté, soit à un conteneur non supporté.
@ru Видеофайл имеет два слоя: внутренний поток кодирования и внешний контейнер. Сбой импорта может быть связан либо с неподдерживаемым потоком, либо с контейнером.

@en For a file with **AVC (H.264)** stream and **mkv** container, VEGAS cannot import it due to **unsupported container**, but the **inner AVC stream is supported**. When converting, you can change only the container, not the stream. Using [FFmpeg](https://ffmpeg.org/), the command `ffmpeg -i input.mkv -c:v copy output.mp4` does this. In GUI converters (such as [`HandBrake`](https://handbrake.fr/)), this is often called `Copy` or `Remux`. It's fast and recommended.
@zh 比如一个视频编码流为 **AVC（H.264）**，容器为 **mkv** 的文件，无法导入进 Vegas，这个是**容器不支持**的情况，**里面的 AVC 编码流是支持**的，因此我们在转换文件时可以选择只转换外边的容器，而不转换里边的编码流。如果是 [FFmpeg](https://ffmpeg.org/)，则可用 `ffmpeg -i input.mkv -c:v copy output.mp4` 这样的命令实现此操作。如果是其他带 GUI 的格式转换软件（比如 [`HandBrake`](https://handbrake.fr/)），则被称作 `复制流`（`Copy`）。`复制流` 不涉及到视频编码的转换，转换过程很快，因此非常推荐。
@zh-hant 比如一個影片編碼流為 **AVC（H.264）**，容器為 **mkv** 的檔案，無法匯入進 Vegas，這個是**容器不支援**的情況，**裡面的 AVC 編碼流是支援**的，因此我們在轉換檔案時可以選擇只轉換外邊的容器，而不轉換裡邊的編碼流。如果是 [FFmpeg](https://ffmpeg.org/)，則可用 `ffmpeg -i input.mkv -c:v copy output.mp4` 這樣的命令實現此操作。如果是其他帶 GUI 的格式轉換軟體（比如 [`HandBrake`](https://handbrake.fr/)），則被稱作 `複製流`（`Copy`）。`複製流` 不涉及到影片編碼的轉換，轉換過程很快，因此非常推薦。
@ja **AVC（H.264）** ストリームと **mkv** コンテナのファイルの場合、VEGAS は**コンテナがサポートされていない**ためインポートできませんが、**内部の AVC ストリームはサポートされています**。変換時には、ストリームを変換せずにコンテナのみ変更できます。 [FFmpeg](https://ffmpeg.org/) を使用すると、`ffmpeg -i input.mkv -c:v copy output.mp4` コマンドでこれを行います。GUI コンバーター（[`HandBrake`](https://handbrake.fr/)など）では、これは `コピー` または `リマックス` と呼ばれることが多いです。高速でお勧めです。
@ko **AVC(H.264)** 스트림과 **mkv** 컨테이너가 있는 파일의 경우 VEGAS는 **지원되지 않는 컨테이너**로 인해 가져올 수 없지만 **내부 AVC 스트림은 지원됩니다**. 변환할 때 스트림이 아닌 컨테이너만 변경할 수 있습니다. [FFmpeg](https://ffmpeg.org/)을 사용하면 `ffmpeg -i input.mkv -c:v copy output.mp4` 명령이 이를 수행합니다. GUI 변환기(예: [`HandBrake`](https://handbrake.fr/))에서는 이를 종종 `복사` 또는 `리먹스`라고 합니다. 빠르며 권장됩니다.
@de Für eine Datei mit **AVC (H.264)**-Strom und **mkv**-Container kann VEGAS sie nicht importieren aufgrund von **nicht unterstütztem Container**, aber der **innere AVC-Strom wird unterstützt**. Beim Konvertieren können Sie nur den Container ändern, nicht den Strom. Mit [FFmpeg](https://ffmpeg.org/) macht der Befehl `ffmpeg -i input.mkv -c:v copy output.mp4` dies. In GUI-Konvertern (wie [`HandBrake`](https://handbrake.fr/)) wird dies oft `Kopieren` oder `Remuxen` genannt. Es ist schnell und empfohlen.
@fr Pour un fichier avec un flux **AVC (H.264)** et un conteneur **mkv**, VEGAS ne peut pas l'importer en raison du **conteneur non supporté**, mais le **flux AVC interne est supporté**. Lors de la conversion, vous pouvez changer seulement le conteneur, pas le flux. En utilisant [FFmpeg](https://ffmpeg.org/), la commande `ffmpeg -i input.mkv -c:v copy output.mp4` fait cela. Dans les convertisseurs avec interface graphique (comme [`HandBrake`](https://handbrake.fr/)), cela est souvent appelé `Copier` ou `Remux`. C'est rapide et recommandé.
@ru Для файла с потоком **AVC (H.264)** и контейнером **mkv** VEGAS не может импортировать его из-за **неподдерживаемого контейнера**, но **внутренний поток AVC поддерживается**. При конвертации вы можете изменить только контейнер, а не поток. Используя [FFmpeg](https://ffmpeg.org/), команда `ffmpeg -i input.mkv -c:v copy output.mp4` делает это. В конвертерах с графическим интерфейсом (таких как [`HandBrake`](https://handbrake.fr/)) это часто называется `Копировать (Copy)` или `Перепаковка (Remux)`. Это быстро и рекомендуется.

@en For a file with **VP9** stream and **mkv** container, both stream and container are unsupported (VEGAS doesn't support VP9). Even converting container to mp4 won't work. You must **re-encode both stream and container**. For example, mkv files downloaded from YouTube might have VP9 video. Use a tool like [MediaInfo](https://mediaarea.net/en/MediaInfo) to check the codec.
@zh 又比如一个视频编码流为 **VP9**，容器为 **mkv** 的文件，无法导入进 Vegas，这个是编码流和容器都不支持的情况，因为 Vegas 本来就不支持 VP9 编码。即使通过上述“复制流”的办法转换成 mp4 文件，也无法导入进 Vegas。这种情况**只能同时转换编码流和容器**。比如下载 YouTube 上的视频得到的 mkv 文件，其视频编码流有可能是**VP9**，这样的文件就只能同时转换编码流和容器，这样才能正常导入进 Vegas 里。如果不清楚视频文件内具体是什么编码，可以用 [格式查看工具 MediaInfo](https://mediaarea.net/en/MediaInfo) 查看。
@zh-hant 又比如一個影片編碼流為 **VP9**，容器為 **mkv** 的檔案，無法匯入進 Vegas，這個是編碼流和容器都不支援的情況，因為 Vegas 本來就不支援 VP9 編碼。即使通過上述“複製流”的辦法轉換成 mp4 檔案，也無法匯入進 Vegas。這種情況**只能同時轉換編碼流和容器**。比如下載 YouTube 上的影片得到的 mkv 檔案，其影片編碼流有可能是**VP9**，這樣的檔案就只能同時轉換編碼流和容器，這樣才能正常匯入進 Vegas 裡。如果不清楚影片檔案內具體是什麼編碼，可以用 [格式檢視工具 MediaInfo](https://mediaarea.net/en/MediaInfo) 檢視。
@ja **VP9** ストリームと **mkv** コンテナのファイルの場合、ストリームとコンテナの両方がサポートされていません（VEGAS は VP9 をサポートしていません）。コンテナを mp4 に変換しても機能しません。**ストリームとコンテナの両方を再エンコードする必要があります**。例：YouTube からダウンロードした mkv ファイルは VP9 ビデオを含む可能性があります。 [MediaInfo](https://mediaarea.net/en/MediaInfo) などのツールを使用してコーデックを確認します。
@ko **VP9** 스트림과 **mkv** 컨테이너가 있는 파일의 경우 스트림과 컨테이너 모두 지원되지 않습니다(VEGAS는 VP9를 지원하지 않음). 컨테이너를 mp4로 변환해도 작동하지 않습니다. **스트림과 컨테이너를 모두 재인코딩**해야 합니다. 예를 들어 YouTube에서 다운로드한 mkv 파일은 VP9 비디오를 가질 수 있습니다. [MediaInfo](https://mediaarea.net/en/MediaInfo)와 같은 도구를 사용하여 코덱을 확인하십시오.
@de Für eine Datei mit **VP9**-Strom und **mkv**-Container sind sowohl Strom als auch Container nicht unterstützt (VEGAS unterstützt VP9 nicht). Selbst das Konvertieren des Containers zu mp4 wird nicht funktionieren. Sie müssen **sowohl Strom als auch Container neu enkodieren**. Beispiel: Von YouTube heruntergeladene mkv-Dateien könnten VP9-Video haben. Verwenden Sie ein Tool wie [MediaInfo](https://mediaarea.net/en/MediaInfo), um den Codec zu überprüfen.
@fr Pour un fichier avec un flux **VP9** et un conteneur **mkv**, le flux et le conteneur sont non supportés (VEGAS ne supporte pas VP9). Même la conversion du conteneur en mp4 ne fonctionnera pas. Vous devez **réencoder à la fois le flux et le conteneur**. Par exemple, les fichiers mkv téléchargés depuis YouTube pourraient avoir une vidéo VP9. Utilisez un outil comme [MediaInfo](https://mediaarea.net/en/MediaInfo) pour vérifier le codec.
@ru Для файла с потоком **VP9** и контейнером **mkv** и поток, и контейнер не поддерживаются (VEGAS не поддерживает VP9). Даже конвертация контейнера в mp4 не поможет. Вы должны **перекодировать и поток, и контейнер**. Например, файлы mkv, загруженные с YouTube, могут иметь видео VP9. Используйте такой инструмент, как [MediaInfo](https://mediaarea.net/en/MediaInfo), чтобы проверить кодек.

<br>

@en Q: Video recorded by **OBS** imports into VEGAS with **incorrect, very short length**?
@zh Q：由**OBS**录制的视频导入进 Vegas，**视频长度有问题，特别短**？
@zh-hant Q：由**OBS**錄製的影片匯入進 Vegas，**影片長度有問題，特別短**？
@ja Q: **OBS** で録画したビデオを VEGAS にインポートすると、**長さが正しくなく、非常に短く**なる？
@ko Q: **OBS**로 녹화된 비디오를 VEGAS로 가져오면 **길이가 잘못되고 매우 짧음**?
@de F: Von **OBS** aufgenommenes Video wird in VEGAS importiert mit **falscher, sehr kurzer Länge**?
@fr Q : La vidéo enregistrée par **OBS** s'importe dans VEGAS avec une **longueur incorrecte, très courte** ?
@ru В: Видео, записанное **OBS**, импортируется в VEGAS с **неправильной, очень короткой длиной**?

@en A: This happens when OBS uses fragmented MP4 for recording, which VEGAS can't decode properly. **Change the output format in OBS settings**. For existing footage, use the copy stream method, e.g., `ffmpeg -i input.mp4 -c copy output.mp4`.
@zh A：原因在于 OBS 中使用了分片 MP4 作为录制保存文件，而 Vegas 无法正常解码。可以**在 OBS 设置中改为其他输出格式**。如果已经这样录制了素材，则可以使用上述的复制流办法，比如 `ffmpeg -i input.mp4 -c copy output.mp4`，这样也能正常导入进 Vegas。
@zh-hant A：原因在於 OBS 中使用了分片 MP4 作為錄製儲存檔案，而 Vegas 無法正常解碼。可以**在 OBS 設定中改為其他輸出格式**。如果已經這樣錄製了素材，則可以使用上述的複製流辦法，比如 `ffmpeg -i input.mp4 -c copy output.mp4`，這樣也能正常匯入進 Vegas。
@ja A: OBS がフラグメント MP4 を使用して録画する場合に発生し、VEGAS が正常にデコードできません。 **OBS 設定で出力形式を変更します**。既存の素材には、コピーストリーム法を使用します（例：`ffmpeg -i input.mp4 -c copy output.mp4`）。
@ko A: OBS가 조각난 MP4를 녹화에 사용할 때 발생하며 VEGAS가 제대로 디코딩할 수 없습니다. **OBS 설정에서 출력 형식을 변경하십시오**. 기존 영상의 경우 스트림 복사 방법을 사용하십시오. 예: `ffmpeg -i input.mp4 -c copy output.mp4`.
@de A: Dies passiert, wenn OBS fragmentiertes MP4 für die Aufnahme verwendet, das VEGAS nicht richtig decodieren kann. **Ändern Sie das Ausgabeformat in den OBS-Einstellungen**. Für bestehendes Material verwenden Sie die Kopierstrommethode, z. B. `ffmpeg -i input.mp4 -c copy output.mp4`.
@fr R : Cela se produit lorsque OBS utilise MP4 fragmenté pour l'enregistrement, que VEGAS ne peut pas décoder correctement. **Changez le format de sortie dans les paramètres OBS**. Pour les séquences existantes, utilisez la méthode de copie de flux, par ex. `ffmpeg -i input.mp4 -c copy output.mp4`.
@ru О: Это происходит, когда OBS использует фрагментированный MP4 для записи, который VEGAS не может правильно декодировать. **Измените формат вывода в настройках OBS**. Для существующих материалов используйте метод копирования потока, например, `ffmpeg -i input.mp4 -c copy output.mp4`.

@en <small>Reference: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/solved-3-hour-video-only-1ms-of-video--144992/<br></small>
@zh <small>参见：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/solved-3-hour-video-only-1ms-of-video--144992/<br></small>
@zh-hant <small>參見：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/solved-3-hour-video-only-1ms-of-video--144992/<br></small>
@ja <small>参照： https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/solved-3-hour-video-only-1ms-of-video--144992/<br></small>
@ko <small>참조: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/solved-3-hour-video-only-1ms-of-video--144992/<br></small>
@de <small>Referenz: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/solved-3-hour-video-only-1ms-of-video--144992/<br></small>
@fr <small>Référence : https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/solved-3-hour-video-only-1ms-of-video--144992/<br></small>
@ru <small>Ссылка: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/solved-3-hour-video-only-1ms-of-video--144992/<br></small>

<br>

@en Q: **Cannot import some mov files with certain codecs**?
@zh Q：**无法导入某些编码的 mov 文件**？
@zh-hant Q：**無法匯入某些編碼的 mov 檔案**？
@ja Q: **一部のコーデックの mov ファイルをインポートできない**？
@ko Q: **특정 코덱이 있는 일부 mov 파일을 가져올 수 없음**?
@de F: **Kann einige mov-Dateien mit bestimmten Codecs nicht importieren**?
@fr Q : **Ne peut pas importer certains fichiers mov avec des codecs spécifiques** ?
@ru В: **Не удается импортировать некоторые файлы mov с определенными кодеками**?

@en A: First, ensure you have QT Lite or QuickTime installed. **QT Lite 4.1.0** is generally recommended. For VP17 and above, the new decoder supports ProRes mov files, but other QuickTime codecs are no longer supported by default. You need to **`Preferences -> Deprecated Features`, `Enable QuickTime plug-in`** to import other QuickTime mov files.
@zh A：首先你要确保已经安装了 QT Lite 或者 QuickTime。一般推荐安装 **QT Lite 4.1.0** 比较方便。对于 vv17 及以上的版本，由于新解码器已支持 ProRes 编码的 mov 文件，而 QuickTime 的其他所有编码不再被默认支持，需要在 **`首选项 -> 停止使用的功能`** 中 **`启用 QuickTime 插件`**，才可以正常导入其他 QuickTime 格式的 mov 文件。
@zh-hant A：首先你要確保已經安裝了 QT Lite 或者 QuickTime。一般推薦安裝 **QT Lite 4.1.0** 比較方便。對於 vv17 及以上的版本，由於新解碼器已支援 ProRes 編碼的 mov 檔案，而 QuickTime 的其他所有編碼不再被預設支援，需要在 **`首選項 -> 停止使用的功能`** 中 **`啟用 QuickTime 外掛程式`**，才可以正常匯入其他 QuickTime 格式的 mov 檔案。
@ja A: まず、QT Lite または QuickTime がインストールされていることを確認してください。一般的に **QT Lite 4.1.0** が推奨されます。VP17 以上では、新しいデコーダーが ProRes mov ファイルをサポートしますが、他の QuickTime コーデックはデフォルトではサポートされなくなりました。他の QuickTime mov ファイルをインポートするには、 **`プリファレンス -> 非推奨機能`、 `QuickTime プラグインを有効にする`** が必要です。
@ko A: 먼저 QT Lite 또는 QuickTime이 설치되어 있는지 확인하십시오. 일반적으로 **QT Lite 4.1.0**을 권장합니다. VP17 이상의 경우 새 디코더는 ProRes mov 파일을 지원하지만 다른 QuickTime 코덱은 기본적으로 더 이상 지원되지 않습니다. 다른 QuickTime mov 파일을 가져오려면 **`환경설정 -> 사용 중단된 기능`, `QuickTime 플러그인 활성화`** 가 필요합니다.
@de A: Stellen Sie zuerst sicher, dass QT Lite oder QuickTime installiert ist. **QT Lite 4.1.0** wird im Allgemeinen empfohlen. Für VP17 und höher unterstützt der neue Decoder ProRes mov-Dateien, aber andere QuickTime-Codecs werden standardmäßig nicht mehr unterstützt. Sie müssen **`Einstellungen -> Eingestellte Funktionen`, `QuickTime-Plugin aktivieren`**, um andere QuickTime mov-Dateien zu importieren.
@fr R : Premièrement, assurez-vous d'avoir installé QT Lite ou QuickTime. **QT Lite 4.1.0** est généralement recommandé. Pour VP17 et plus, le nouveau décodeur supporte les fichiers mov ProRes, mais les autres codecs QuickTime ne sont plus supportés par défaut. Vous devez **`Préférences -> Fonctions dépréciées`, `Activer le plug-in QuickTime`** pour importer d'autres fichiers mov QuickTime.
@ru О: Во-первых, убедитесь, что у вас установлен QT Lite или QuickTime. **QT Lite 4.1.0** обычно рекомендуется. Для VP17 и выше новый декодер поддерживает файлы mov с ProRes, но другие кодеки QuickTime больше не поддерживаются по умолчанию. Вам нужно **`Настройки -> Устаревшие функции (Preferences -> Deprecated Features)`, `Включить плагин QuickTime (Enable QuickTime plug-in)`**, чтобы импортировать другие файлы mov QuickTime.

@en Note: If installing Apple's `QuickTime 7.7.9`, ensure `QuickTime plug-in` is selected during installation.
@zh 注意，如果你安装的是 Apple 官网的 `QuickTime 7.7.9`，请在安装时勾选 `QuickTime 插件`。
@zh-hant 注意，如果你安裝的是 Apple 官網的 `QuickTime 7.7.9`，請在安裝時勾選 `QuickTime 外掛程式`。
@ja 注：Apple の `QuickTime 7.7.9` をインストールする場合は、インストール時に `QuickTime プラグイン` が選択されていることを確認してください。
@ko 참고: Apple의 `QuickTime 7.7.9`를 설치하는 경우 설치 중 `QuickTime 플러그인`이 선택되었는지 확인하십시오.
@de Hinweis: Wenn Sie Apples `QuickTime 7.7.9` installieren, stellen Sie sicher, dass `QuickTime-Plugin` während der Installation ausgewählt ist.
@fr Note : Si vous installez `QuickTime 7.7.9` d'Apple, assurez-vous que `QuickTime plug-in` est sélectionné pendant l'installation.
@ru Примечание: Если устанавливаете `QuickTime 7.7.9` от Apple, убедитесь, что `Плагин QuickTime (QuickTime plug-in)` выбран во время установки.

@en   **The VP23 update broke QuickTime compatibility, preventing the import and rendering of QuickTime-encoded MOV files. The 2026 build 143 fixed the inability to import QuickTime-encoded files, but rendering QuickTime MOV files is still not supported. For compatibility, it's recommended to use MOV files encoded with ProRes.**
@zh   **23 大版本更新破坏了对 QuickTime 的兼容，无法导入和渲染 QuickTime 编码的 MOV 文件。2026 build 143 版本，修复了 QuickTime 编码无法导入的问题，但仍然不支持渲染 QuickTime MOV 文件。为了兼容性，建议使用 ProRes 编码的 MOV 文件。**
@zh-hant   **23 大版本更新破壞了對 QuickTime 的相容，無法匯入和算繪 QuickTime 編碼的 MOV 檔案。2026 build 143 版本修復了無法匯入 QuickTime 編碼檔案的問題，但仍然不支援算繪 QuickTime MOV 檔案。為了相容性，建議使用 ProRes 編碼的 MOV 檔案。**
@ja   **VP23 のメジャーアップデートにより QuickTime 互換性が破壊され、QuickTime エンコードの MOV ファイルのインポートおよびレンダリングができなくなりました。2026 年のビルド 143 では QuickTime エンコードのファイルがインポートできない問題が修正されましたが、QuickTime MOV ファイルのレンダリングは引き続きサポートされていません。互換性のために、ProRes コーデックでエンコードされた MOV ファイルを使用することをお勧めします。**
@ko   **VP23 주요 업데이트로 QuickTime 호환성이 손상되어 QuickTime 인코딩된 MOV 파일을 가져오거나 렌더링할 수 없게 되었습니다. 2026 빌드 143에서 QuickTime 인코딩 파일을 가져올 수 없는 문제가 해결되었지만 QuickTime MOV 파일 렌더링은 여전히 지원되지 않습니다. 호환성을 위해 ProRes 코덱으로 인코딩된 MOV 파일을 사용하는 것이 좋습니다.**
@de   **Das VP23-Update hat die QuickTime-Kompatibilität zerstört, sodass QuickTime-kodierte MOV-Dateien nicht mehr importiert oder gerendert werden können. Mit Build 143 von 2026 wurde das Problem des Imports von QuickTime-kodierten Dateien behoben, das Rendern von QuickTime-MOV-Dateien wird jedoch weiterhin nicht unterstützt. Aus Kompatibilitätsgründen wird empfohlen, MOV-Dateien mit ProRes-Codec zu verwenden.**
@fr   **La mise à jour VP23 a cassé la compatibilité QuickTime, rendant impossible l'importation et le rendu des fichiers MOV encodés en QuickTime. La version build 143 de 2026 a corrigé le problème d'importation des fichiers encodés en QuickTime, mais le rendu des fichiers MOV QuickTime n'est toujours pas pris en charge. Pour des raisons de compatibilité, il est recommandé d'utiliser des fichiers MOV encodés avec le codec ProRes.**
@ru   **Обновление VP23 нарушило совместимость с QuickTime, из-за чего импорт и рендеринг файлов MOV, закодированных QuickTime, стали невозможны. В сборке 143 2026 года исправлена проблема с невозможностью импорта файлов QuickTime, но рендеринг QuickTime MOV-файлов по-прежнему не поддерживается. Для совместимости рекомендуется использовать MOV-файлы с кодировкой ProRes.**

<br>

@en Q: After importing media files originally **with alpha channel (mov or png)**, the **alpha transparency is not displayed correctly** in VEGAS?
@zh Q：导入原本**带 alpha 通道的 mov 或者 png 格式**的媒体文件后，在 Vegas 中**无法正常显示 alpha 透明通道**？
@zh-hant Q：匯入原本**帶 alpha 通道的 mov 或者 png 格式**的媒體檔案後，在 Vegas 中**無法正常顯示 alpha 透明通道**？
@ja Q: **アルファチャンネル付き（mov または png）** のメディアファイルをインポートした後、VEGAS で**アルファ透明が正しく表示されない**？
@ko Q: 원래 **알파 채널(mov 또는 png)이 있는 미디어 파일**을 가져온 후 VEGAS에서 **알파 투명도가 올바르게 표시되지 않음**?
@de F: Nach dem Import von Mediendateien, die ursprünglich **mit Alphakanal (mov oder png)** waren, wird der **Alpha-Transparenzkanal in VEGAS nicht korrekt angezeigt**?
@fr Q : Après avoir importé des fichiers multimédias originellement **avec canal alpha (mov ou png)**, le **canal alpha de transparence n'est pas affiché correctement** dans VEGAS ?
@ru В: После импорта медиафайлов, изначально **с альфа-каналом (mov или png)**, **альфа-прозрачность не отображается правильно** в VEGAS?

@en A: In VEGAS, **right-click the media file or event -> Properties**, switch to the `Media` tab, find `Alpha channel`, change it to **`Straight (unmatted)`**.
@zh A：在 Vegas 中对着**媒体文件或事件 `右键 -> 属性`，上面切换到 `媒体` 选项卡，找到 `alpha 通道` 这一栏，改为 `直接(无蒙版)`**。
@zh-hant A：在 Vegas 中對著**媒體檔案或事件 `右鍵 -> 內容`，上面切換到 `媒體` 選項卡，找到 `alpha 通道` 這一欄，改為 `直接(無蒙版)`**。
@ja A: VEGAS で、**メディアファイルまたはイベントを右クリック -> プロパティ**、 `メディア` タブに切り替え、 `アルファチャンネル` を見つけ、 **`ストレート（マットなし）`** に変更します。
@ko A: VEGAS에서 **미디어 파일 또는 이벤트 마우스 오른쪽 버튼 클릭 -> 속성**, `미디어` 탭으로 전환, `알파 채널` 찾기, **`직접(매트 없음)`** 으로 변경.
@de A: In VEGAS, **Rechtsklick auf die Mediendatei oder das Event -> Eigenschaften**, wechseln Sie zur Registerkarte `Medien`, finden Sie `Alpha-Kanal`, ändern Sie ihn zu **`Direkt (ohne Mattierung)`**.
@fr R : Dans VEGAS, **clic droit sur le fichier média ou l'événement -> Propriétés**, passez à l'onglet `Média`, trouvez `Canal alpha`, changez-le en **`Direct (sans cache)`**.
@ru О: В VEGAS **щелкните правой кнопкой мыши на медиафайле или событии -> Свойства**, переключитесь на вкладку `Медиа (Media)`, найдите `Альфа-канал (Alpha channel)`, измените его на **`Прямой (без матирования) (Straight (unmatted))`**.

@en <small>(Note: For <code>Alpha channel</code>, <b>as long as you don't select <code>Undefined</code> or <code>None</code></b>, the alpha channel should display.)</small>
@zh <small>（注：<code>alpha 通道</code> 这一栏，<b>只要不选 <code>未定义</code> 或者 <code>无</code></b>，应该都能正常显示 alpha 通道。）</small>
@zh-hant <small>（注：<code>alpha 通道</code> 這一欄，<b>只要不選 <code>未定義</code> 或者 <code>無</code></b>，應該都能正常顯示 alpha 通道。）</small>
@ja <small>（注： <code>アルファチャンネル</code> については、 <b><code>未定義</code> または <code>なし</code> を選択しない限り</b>、アルファチャンネルが表示されるはずです。）</small>
@ko <small>(참고: <code>알파 채널</code>의 경우, <b><code>정의되지 않음</code> 또는 <code>없음</code>을 선택하지 않는 한</b> 알파 채널이 표시되어야 합니다.)</small>
@de <small>(Hinweis: Für <code>Alpha-Kanal</code>, <b>solange Sie nicht <code>Undefiniert</code> oder <code>Kein</code> wählen</b>, sollte der Alphakanal angezeigt werden.)</small>
@fr <small>(Note : Pour <code>Canal alpha</code>, <b>tant que vous ne sélectionnez pas <code>Indéfini</code> ou <code>Aucun</code></b>, le canal alpha devrait s'afficher.)</small>
@ru <small>(Примечание: Для <code>Альфа-канала (Alpha channel)</code>, <b>пока вы не выберете <code>Неопределенный (Undefined)</code> или <code>Нет (None)</code></b>, альфа-канал должен отображаться.)</small>

@en You can also modify this property for multiple files in the **`Project Media`** window.
@zh 另外，在 **`项目媒体`** 窗口中，是可以多选修改媒体属性的，也可以利用这个办法统一修改。
@zh-hant 另外，在 **`專案媒體`** 視窗中，是可以多選修改媒體屬性的，也可以利用這個辦法統一修改。
@ja **`プロジェクトメディア`** ウィンドウで複数ファイルのこのプロパティを変更することもできます。
@ko **`프로젝트 미디어`** 창에서 여러 파일에 대해 이 속성을 수정할 수도 있습니다.
@de Sie können diese Eigenschaft auch für mehrere Dateien im **`Projektmedien`**-Fenster ändern.
@fr Vous pouvez aussi modifier cette propriété pour plusieurs fichiers dans la fenêtre **`Médias du projet`**.
@ru Вы также можете изменить это свойство для нескольких файлов в окне **`Медиа проекта (Project Media)`**.

<br>

@en Q: Videos downloaded directly from **web platforms like TikTok** using tools like IDM (**audio codec `AAC LC SBR (HE-AAC)`**), when imported into VEGAS, have **random audio glitches, noise**, or are **incorrectly recognized as mono**?
@zh Q：在**网页端抖音等平台**，直接用 IDM 等下载工具下载得到的视频（**音频编码为 `AAC LC SBR (HE-AAC)`**），导入进 Vegas，**音频会随机出现错乱，有杂音**，或者**被错误识别成了单声道**？
@zh-hant Q：在**網頁端抖音等平臺**，直接用 IDM 等下載工具下載得到的影片（**音訊編碼為 `AAC LC SBR (HE-AAC)`**），匯入進 Vegas，**音訊會隨機出現錯亂，有雜音**，或者**被錯誤識別成了單聲道**？
@ja Q: IDM などのツールを使用して直接**ウェブプラットフォーム（TikTok など）** からダウンロードしたビデオ（**オーディオコーデック `AAC LC SBR (HE-AAC)`**）を VEGAS にインポートすると、**ランダムなオーディオグリッチ、ノイズ**、または**誤ってモノラルと認識される**？
@ko Q: **TikTok과 같은 웹 플랫폼**에서 IDM과 같은 도구를 사용하여 직접 다운로드한 비디오(**오디오 코덱 `AAC LC SBR (HE-AAC)`**), VEGAS로 가져올 때 **무작위 오디오 오류, 잡음** 또는 **잘못된 모노로 인식됨**?
@de F: Direkt von **Webplattformen wie TikTok** mit Tools wie IDM heruntergeladene Videos (**Audio-Codec `AAC LC SBR (HE-AAC)`**), wenn in VEGAS importiert, haben **zufällige Audio-Störungen, Rauschen**, oder werden **falsch als Mono erkannt**?
@fr Q : Les vidéos téléchargées directement depuis **des plateformes web comme TikTok** avec des outils comme IDM (**codec audio `AAC LC SBR (HE-AAC)`**), lorsqu'elles sont importées dans VEGAS, ont **des bugs audio aléatoires, du bruit**, ou sont **incorrectement reconnues comme mono** ?
@ru В: Видео, загруженные непосредственно с **веб-платформ, таких как TikTok**, с помощью таких инструментов, как IDM (**аудиокодек `AAC LC SBR (HE-AAC)`**), при импорте в VEGAS имеют **случайные аудиоглюки, шум** или **неправильно распознаются как моно**?

@en A: This is **entirely a VEGAS software bug**, and as of the latest version (`23 build 302`), it's not fixed. **Testing shows all previous methods fail. The only solution is to extract/re-encode the audio and import it separately.** Videos downloaded via TikTok app are not affected.
@zh A：这个**完完全全是 Vegas 软件的 bug**，并且截至目前的最新版（`23 build 302`）仍未修复。**经过测试，上述其他所有办法均无效，只能通过转码出音频文件后再导入进 Vegas 来解决。**通过抖音 APP 下载的视频不会受到影响。
@zh-hant A：這個**完完全全是 Vegas 軟體的 bug**，並且截至目前的最新版（`23 build 302`）仍未修復。**經過測試，上述其他所有辦法均無效，只能通過轉碼出音訊檔案後再匯入進 Vegas 來解決。**通過抖音 APP 下載的影片不會受到影響。
@ja A: これは**完全に VEGAS ソフトウェアのバグ**であり、最新版（`23 build 302`）でも修正されていません。**テストでは、以前のすべての方法が失敗しました。唯一の解決策は、オーディオを抽出/再エンコードして個別にインポートすることです。** TikTok アプリ経由でダウンロードされたビデオは影響を受けません。
@ko A: 이는 **완전히 VEGAS 소프트웨어 버그**이며 최신 버전(`23 build 302`)까지 수정되지 않았습니다. **테스트 결과 이전의 모든 방법이 실패했습니다. 유일한 해결책은 오디오를 추출/재인코딩하여 별도로 가져오는 것입니다.** TikTok 앱을 통해 다운로드한 비디오는 영향을 받지 않습니다.
@de A: Dies ist **vollständig ein VEGAS-Software-Bug**, und bis zur neuesten Version (`23 Build 302`) nicht behoben. **Tests zeigen, dass alle vorherigen Methoden scheitern. Die einzige Lösung ist, das Audio zu extrahieren/neu zu enkodieren und separat zu importieren.** Über die TikTok-App heruntergeladene Videos sind nicht betroffen.
@fr R : C'est **entièrement un bug du logiciel VEGAS**, et jusqu'à la dernière version (`23 build 302`), ce n'est pas corrigé. **Les tests montrent que toutes les méthodes précédentes échouent. La seule solution est d'extraire/réencoder l'audio et de l'importer séparément.** Les vidéos téléchargées via l'application TikTok ne sont pas affectées.
@ru О: Это **полностью ошибка программного обеспечения VEGAS**, и по состоянию на последнюю версию (`23 build 302`) не исправлена. **Тестирование показывает, что все предыдущие методы не работают. Единственное решение — извлечь/перекодировать аудио и импортировать его отдельно.** Видео, загруженные через приложение TikTok, не затрагиваются.

@en <small>Reference: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/noise-at-the-end-of-a-clip--140457/#ca884682<br></small>
@zh <small>参见：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/noise-at-the-end-of-a-clip--140457/#ca884682<br></small>
@zh-hant <small>參見：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/noise-at-the-end-of-a-clip--140457/#ca884682<br></small>
@ja <small>参照： https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/noise-at-the-end-of-a-clip--140457/#ca884682<br></small>
@ko <small>참조: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/noise-at-the-end-of-a-clip--140457/#ca884682<br></small>
@de <small>Referenz: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/noise-at-the-end-of-a-clip--140457/#ca884682<br></small>
@fr <small>Référence : https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/noise-at-the-end-of-a-clip--140457/#ca884682<br></small>
@ru <small>Ссылка: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/noise-at-the-end-of-a-clip--140457/#ca884682<br></small>

<br>

@en Q: 4:3 videos/images import **stretched horizontally** to 16:9. How to fix?
@zh Q：4:3 的视频/图片媒体文件导入进去，**被左右拉伸**成 16:9 的了，怎么改回去？
@zh-hant Q：4:3 的影片/圖片媒體檔案匯入進去，**被左右拉伸**成 16:9 的了，怎麼改回去？
@ja Q: 4:3 のビデオ/画像がインポートされると、**水平に引き伸ばされ**て 16:9 になる。修正方法は？
@ko Q: 4:3 비디오/이미지 가져오기 **가로로 늘어남** 16:9. 수정 방법?
@de F: 4:3 Videos/Bilder werden importiert und **horizontal gestreckt** auf 16:9. Wie zu beheben?
@fr Q : Les vidéos/images 4:3 importées sont **étirées horizontalement** en 16:9. Comment réparer ?
@ru В: Видео/изображения 4:3 импортируются **растянутыми по горизонтали** до 16:9. Как исправить?

@en A: This happens when `4:3` media is imported into a `16:9` project with certain auto-configuration. Fix: **Right-click the media -> Properties -> Media tab**, find `Pixel aspect ratio`, change from `1.3333` to `1`, then click the save button next to the `Stream` section<sup>(`Save settings to video profile for future auto-detection`)</sup>. This ensures future `4:3` imports aren't auto-stretched. This can also be done for multiple files in the **`Project Media`** window.
@zh A：这是由于 `4:3` 的媒体文件导入进 `16:9` 的工程里，可能会因一些特定配置参数而被自动拉伸至 `16:9`。解决办法是**对着媒体文件 `右键 -> 属性`，切换到 `媒体` 选项卡，找到 `像素高宽比` 这一栏，从 `1.3333` 改到 `1`，然后点击 `流` 一栏右边的保存按钮<sup>（`将设置保存到视频配置文件以供将来进行自动检测`）</sup>，这样就可以保证之后导入的 `4:3` 媒体文件不再被自动拉伸**。同样地，该属性也能在 **`项目媒体`** 窗口中，多选媒体文件后再修改。
@zh-hant A：這是由於 `4:3` 的媒體檔案匯入進 `16:9` 的工程裡，可能會因一些特定配置參數而被自動拉伸至 `16:9`。解決辦法是**對著媒體檔案 `右鍵 -> 內容`，切換到 `媒體` 選項卡，找到 `像素高寬比` 這一欄，從 `1.3333` 改到 `1`，然後點選 `流` 一欄右邊的儲存按鈕<sup>（`將設定儲存到影片配置檔案以供將來進行自動檢測`）</sup>，這樣就可以保證之後匯入的 `4:3` 媒體檔案不再被自動拉伸**。同樣地，該屬性也能在 **`專案媒體`** 視窗中，多選媒體檔案後再修改。
@ja A: `4:3` メディアが特定の自動設定を持つ `16:9` プロジェクトにインポートされるときに発生します。修正： **メディアを右クリック -> プロパティ -> メディアタブ**、 `ピクセルアスペクト比` を見つけ、`1.3333` から `1` に変更し、 `ストリーム` セクションの横にある保存ボタンをクリックします<sup>（`設定をビデオプロファイルに保存して将来の自動検出に使用する`）</sup>。これにより、将来の `4:3` インポートが自動的に引き伸ばされなくなります。これは **`プロジェクトメディア`** ウィンドウの複数ファイルに対しても行うことができます。
@ko A: `4:3` 미디어가 특정 자동 구성으로 `16:9` 프로젝트로 가져올 때 발생합니다. 수정: **미디어 마우스 오른쪽 버튼 클릭 -> 속성 -> 미디어 탭**, `픽셀 종횡비` 찾기, `1.3333`에서 `1`로 변경한 후 `스트림` 섹션 옆의 저장 버튼<sup>(`향후 자동 감지를 위해 비디오 프로필에 설정 저장`)</sup>을 클릭합니다. 이렇게 하면 향후 `4:3` 가져오기가 자동으로 늘어나지 않습니다. **`프로젝트 미디어`** 창에서 여러 파일에 대해 수행할 수도 있습니다.
@de A: Dies passiert, wenn `4:3`-Medien in ein `16:9`-Projekt mit bestimmter Autokonfiguration importiert werden. Behebung: **Rechtsklick auf das Medium -> Eigenschaften -> Medien-Tab**, finden Sie `Pixel-Seitenverhältnis`, ändern Sie von `1.3333` zu `1`, dann klicken Sie auf die Speichern-Schaltfläche neben dem `Stream`-Abschnitt<sup>(`Einstellungen im Videoprofil für zukünftige automatische Erkennung speichern`)</sup>. Dies stellt sicher, dass zukünftige `4:3`-Importe nicht automatisch gestreckt werden. Dies kann auch für mehrere Dateien im **`Projektmedien`**-Fenster durchgeführt werden.
@fr R : Cela se produit lorsque des médias `4:3` sont importés dans un projet `16:9` avec certaines configurations automatiques. Réparation : **Clic droit sur le média -> Propriétés -> Onglet Média**, trouvez `Ratio d'aspect des pixels`, changez de `1.3333` à `1`, puis cliquez sur le bouton de sauvegarde à côté de la section `Flux`<sup>(`Enregistrer les paramètres dans le profil vidéo pour la détection automatique future`)</sup>. Cela garantit que les futures importations `4:3` ne seront pas automatiquement étirées. Cela peut aussi être fait pour plusieurs fichiers dans la fenêtre **`Médias du projet`**.
@ru О: Это происходит, когда медиафайлы `4:3` импортируются в проект `16:9` с определенной автоконфигурацией. Исправление: **Щелкните правой кнопкой мыши на медиафайле -> Свойства -> Вкладка Медиа**, найдите `Соотношение сторон пикселей (Pixel aspect ratio)`, измените с `1.3333` на `1`, затем нажмите кнопку сохранения рядом с разделом `Поток (Stream)`<sup>(`Сохранить настройки в видеопрофиль для будущего автоопределения (Save settings to video profile for future auto-detection)`)</sup>. Это гарантирует, что будущие импорты `4:3` не будут автоматически растягиваться. Это также можно сделать для нескольких файлов в окне **`Медиа проекта (Project Media)`**.

<ImageOnDemand src="vegtips/image010_profile_button.png" />

@en <!-- -->
@zh <p align="center">其实“像素高宽比”的翻译是错误的，应该为“像素宽高比”，即“宽:高”。</p>
@zh-hant <p align="center">其實“像素高寬比”的翻譯是錯誤的，應該為“像素寬高比”，即“寬:高”。</p>

@en If you get "**Unknown error occurred while trying to save video profile**":
@zh 如果显示“**尝试保存视频配置文件时出现未知错误**”：
@zh-hant 如果顯示“**嘗試儲存影片配置檔案時出現未知錯誤**”：
@ja 「**ビデオプロファイルを保存しようとしたときに不明なエラーが発生しました**」と表示される場合：
@ko "**비디오 프로필 저장 시 알 수 없는 오류 발생**"이 표시되는 경우:
@de Wenn Sie "**Unbekannter Fehler beim Versuch, Videoprofil zu speichern**" erhalten:
@fr Si vous obtenez "**Une erreur inconnue s'est produite lors de la tentative d'enregistrement du profil vidéo**" :
@ru Если вы получаете "**При попытке сохранения видеопрофиля произошла неизвестная ошибка**":

@en 1. Press **`Win + R`** for `Run`.
@zh 1. 按下 **`Win + R`** 进入 `运行`。
@zh-hant 1. 按下 **`Win + R`** 進入 `執行`。
@ja 1. **`Win + R`** を押して `ファイル名を指定して実行` を開きます。
@ko 1. **`Win + R`** 을 눌러 `실행`을 엽니다.
@de 1. Drücken Sie **`Win + R`** für `Ausführen`.
@fr 1. Appuyez sur **`Win + R`** pour `Exécuter`.
@ru 1. Нажмите **`Win + R`** для `Выполнить (Run)`.

@en 2. Enter (where `23.0` is your VEGAS version; include English quotes `""` around the path):
@zh 2. 输入（`23.0` 等数字指 Vegas 版本号，文件路径外边要带英文半角引号 `""`）：
@zh-hant 2. 輸入（`23.0` 等數字指 Vegas 版本號，檔案路徑外邊要帶英文半角引號 `""`）：
@ja 2. 入力（`23.0` は VEGAS バージョン、パスの周りに英字の引用符 `""` を含める）：
@ko 2. 입력(`23.0`은 VEGAS 버전, 경로 주위에 영문 따옴표 `""` 포함):
@de 2. Geben Sie ein (wobei `23.0` Ihre VEGAS-Version ist; schließen Sie den Pfad in englische Anführungszeichen `""` ein):
@fr 2. Entrez (où `23.0` est votre version VEGAS ; incluez les guillemets anglais `""` autour du chemin) :
@ru 2. Введите (где `23.0` — ваша версия VEGAS; включайте английские кавычки `""` вокруг пути):

  @en - **`notepad "C:\ProgramData\BorisFX\Vegas Pro 2026\Vegas profiles.ini"`** <sup>2026+</sup>
  @zh - **`notepad "C:\ProgramData\BorisFX\Vegas Pro 2026\Vegas profiles.ini"`** <sup>2026 及以上</sup>
  @zh-hant - **`notepad "C:\ProgramData\BorisFX\Vegas Pro 2026\Vegas profiles.ini"`** <sup>2026 及以上</sup>
  @ja - **`notepad "C:\ProgramData\BorisFX\Vegas Pro 2026\Vegas profiles.ini"`** <sup>2026+</sup>
  @ko - **`notepad "C:\ProgramData\BorisFX\Vegas Pro 2026\Vegas profiles.ini"`** <sup>2026+</sup>
  @de - **`notepad "C:\ProgramData\BorisFX\Vegas Pro 2026\Vegas profiles.ini"`** <sup>2026+</sup>
  @fr - **`notepad "C:\ProgramData\BorisFX\Vegas Pro 2026\Vegas profiles.ini"`** <sup>2026+</sup>
  @ru - **`notepad "C:\ProgramData\BorisFX\Vegas Pro 2026\Vegas profiles.ini"`** <sup>2026+</sup>

  @en - **`notepad "C:\ProgramData\VEGAS Pro\23.0\Vegas profiles.ini"`** <sup>VP17+</sup>
  @zh - **`notepad "C:\ProgramData\VEGAS Pro\23.0\Vegas profiles.ini"`** <sup>17 及以上</sup>
  @zh-hant - **`notepad "C:\ProgramData\VEGAS Pro\23.0\Vegas profiles.ini"`** <sup>17 及以上</sup>
  @ja - **`notepad "C:\ProgramData\VEGAS Pro\23.0\Vegas profiles.ini"`** <sup>VP17+</sup>
  @ko - **`notepad "C:\ProgramData\VEGAS Pro\23.0\Vegas profiles.ini"`** <sup>VP17+</sup>
  @de - **`notepad "C:\ProgramData\VEGAS Pro\23.0\Vegas profiles.ini"`** <sup>VP17+</sup>
  @fr - **`notepad "C:\ProgramData\VEGAS Pro\23.0\Vegas profiles.ini"`** <sup>VP17+</sup>
  @ru - **`notepad "C:\ProgramData\VEGAS Pro\23.0\Vegas profiles.ini"`** <sup>VP17+</sup>

  @en - **`notepad "C:\ProgramData\VEGAS\VEGAS Pro\16.0\Vegas profiles.ini"`** <sup>VP14+</sup>
  @zh - **`notepad "C:\ProgramData\VEGAS\VEGAS Pro\16.0\Vegas profiles.ini"`** <sup>14 及以上</sup>
  @zh-hant - **`notepad "C:\ProgramData\VEGAS\VEGAS Pro\16.0\Vegas profiles.ini"`** <sup>14 及以上</sup>
  @ja - **`notepad "C:\ProgramData\VEGAS\VEGAS Pro\16.0\Vegas profiles.ini"`** <sup>VP14+</sup>
  @ko - **`notepad "C:\ProgramData\VEGAS\VEGAS Pro\16.0\Vegas profiles.ini"`** <sup>VP14+</sup>
  @de - **`notepad "C:\ProgramData\VEGAS\VEGAS Pro\16.0\Vegas profiles.ini"`** <sup>VP14+</sup>
  @fr - **`notepad "C:\ProgramData\VEGAS\VEGAS Pro\16.0\Vegas profiles.ini"`** <sup>VP14+</sup>
  @ru - **`notepad "C:\ProgramData\VEGAS\VEGAS Pro\16.0\Vegas profiles.ini"`** <sup>VP14+</sup>

  @en - **`notepad "C:\ProgramData\Sony\Vegas Pro\13.0\Vegas profiles.ini"`** <sup>VP13-</sup>
  @zh - **`notepad "C:\ProgramData\Sony\Vegas Pro\13.0\Vegas profiles.ini"`** <sup>13 及以下</sup>
  @zh-hant - **`notepad "C:\ProgramData\Sony\Vegas Pro\13.0\Vegas profiles.ini"`** <sup>13 及以下</sup>
  @ja - **`notepad "C:\ProgramData\Sony\Vegas Pro\13.0\Vegas profiles.ini"`** <sup>VP13-</sup>
  @ko - **`notepad "C:\ProgramData\Sony\Vegas Pro\13.0\Vegas profiles.ini"`** <sup>VP13-</sup>
  @de - **`notepad "C:\ProgramData\Sony\Vegas Pro\13.0\Vegas profiles.ini"`** <sup>VP13-</sup>
  @fr - **`notepad "C:\ProgramData\Sony\Vegas Pro\13.0\Vegas profiles.ini"`** <sup>VP13-</sup>
  @ru - **`notepad "C:\ProgramData\Sony\Vegas Pro\13.0\Vegas profiles.ini"`** <sup>VP13-</sup>

@en 3. Instead of clicking `OK`, press **`Ctrl + Shift + Enter`** to open the file with administrator privileges. Manually edit the default import profile for `4:3`, changing all `1.3333333333` values to `1`, then save.
@zh 3. 输入完后不要点击 `确认`，而是按下 **`Ctrl + Shift + Enter`**，这样就能用管理员权限打开该文件。手动修改 `4:3` 的默认导入配置，将该文件里的 `1.3333333333` 值全改成 `1`，保存。
@zh-hant 3. 輸入完後不要點選 `確認`，而是按下 **`Ctrl + Shift + Enter`**，這樣就能用管理員許可權開啟該檔案。手動修改 `4:3` 的預設匯入配置，將該檔案裡的 `1.3333333333` 值全改成 `1`，儲存。
@ja 3. `OK` をクリックせずに、 **`Ctrl + Shift + Enter`** を押して管理者権限でファイルを開きます。 `4:3` のデフォルトインポートプロファイルを手動で編集し、すべての `1.3333333333` 値を `1` に変更し、保存します。
@ko 3. `확인`을 클릭하지 말고 **`Ctrl + Shift + Enter`** 를 눌러 관리자 권한으로 파일을 엽니다. `4:3`의 기본 가져오기 프로필을 수동으로 편집하여 모든 `1.3333333333` 값을 `1`로 변경한 후 저장합니다.
@de 3. Anstatt auf `OK` zu klicken, drücken Sie **`Strg + Umschalt + Eingabe`**, um die Datei mit Administratorrechten zu öffnen. Bearbeiten Sie manuell das Standardimportprofil für `4:3`, ändern Sie alle `1.3333333333`-Werte zu `1`, dann speichern.
@fr 3. Au lieu de cliquer `OK`, appuyez sur **`Ctrl + Maj + Entrée`** pour ouvrir le fichier avec les privilèges d'administrateur. Modifiez manuellement le profil d'importation par défaut pour `4:3`, changez toutes les valeurs `1.3333333333` en `1`, puis enregistrez.
@ru 3. Вместо нажатия `OK` нажмите **`Ctrl + Shift + Enter`**, чтобы открыть файл с правами администратора. Вручную отредактируйте профиль импорта по умолчанию для `4:3`, изменив все значения `1.3333333333` на `1`, затем сохраните.

@en - Note: Opening without administrator privileges will cause Notepad to prompt `Save As` instead of writing to the original file.
@zh - 注意，不使用管理员权限打开文件会导致记事本无法写入原文件，而弹出 `另存为` 窗口。
@zh-hant - 注意，不使用管理員許可權開啟檔案會導致記事本無法寫入原檔案，而彈出 `另存為` 視窗。
@ja - 注：管理者権限なしで開くと、メモ帳が元のファイルに書き込まず `名前を付けて保存` を促します。
@ko - 참고: 관리자 권한 없이 열면 메모장이 원본 파일에 쓰는 대신 `다른 이름으로 저장`을 프롬프트합니다.
@de - Hinweis: Das Öffnen ohne Administratorrechte führt dazu, dass Notepad `Speichern unter` anzeigt, anstatt in die Originaldatei zu schreiben.
@fr - Note : Ouvrir sans privilèges d'administrateur fera que le Bloc-notes demandera `Enregistrer sous` au lieu d'écrire dans le fichier original.
@ru - Примечание: Открытие без прав администратора приведет к тому, что Блокнот предложит `Сохранить как (Save As)`, а не запишет в исходный файл.

<ImageOnDemand src="vegtips/image011_profile_edit_1.png" />

<ImageOnDemand src="vegtips/image012_profile_edit_2.png" />

@en <small>Reference: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/4-3-video-clip-in-16-9-project--128760/#ca800773<br></small>
@zh <small>参见：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/4-3-video-clip-in-16-9-project--128760/#ca800773<br></small>
@zh-hant <small>參見：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/4-3-video-clip-in-16-9-project--128760/#ca800773<br></small>
@ja <small>参照： https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/4-3-video-clip-in-16-9-project--128760/#ca800773<br></small>
@ko <small>참조: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/4-3-video-clip-in-16-9-project--128760/#ca800773<br></small>
@de <small>Referenz: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/4-3-video-clip-in-16-9-project--128760/#ca800773<br></small>
@fr <small>Référence : https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/4-3-video-clip-in-16-9-project--128760/#ca800773<br></small>
@ru <small>Ссылка: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/4-3-video-clip-in-16-9-project--128760/#ca800773<br></small>

<br>

@en ## VI. Software Operation and Display Q&A
@zh ## 六、软件操作和显示相关的 Q&A
@zh-hant ## 六、軟體操作和顯示相關的 Q&A
@ja ## 六、ソフトウェア操作および表示 Q&A
@ko ## VI. 소프트웨어 작동 및 표시 Q&A
@de ## VI. Software-Betrieb und Anzeige Q&A
@fr ## VI. FAQ sur le fonctionnement et l'affichage du logiciel
@ru ## VI. Вопросы и ответы по работе с ПО и отображению

@en Q: **Video Preview window shows nothing**?
@zh Q：**视频预览窗口怎么什么都看不见了**？
@zh-hant Q：**影片預覽視窗怎麼什麼都看不見了**？
@ja Q: **ビデオプレビューウィンドウに何も表示されない**？
@ko Q: **비디오 미리보기 창에 아무것도 표시되지 않음**?
@de F: **Video-Vorschaufenster zeigt nichts**?
@fr Q : **La fenêtre d'aperçu vidéo ne montre rien** ?
@ru В: **Окно предварительного просмотра видео ничего не показывает**?

<ImageOnDemand src="vegtips/image013_trimmer_or_preview.png" />

@en A: Check if you've switched to the **`Trimmer`** window. If so, **switch back to the `Video Preview` window**. If you prefer the separated `Trimmer` and `Preview` window layout from older versions (VP14 and below), go to the menu **`View -> Window Layout`** and select **`Source Window Layout`**.
@zh A：请检查是否切换到了 **`修剪器`** 窗口，若是，请**自行切换回 `视频预览` 窗口**。如果你想使用类似于旧版（14 及以下）的 `修剪器` 与 `预览窗口` 分离的窗口布局，可到菜单栏的 **`视图 -> 窗口布局`** 中选择 **`源窗口布局`**。
@zh-hant A：請檢查是否切換到了 **`修剪器`** 視窗，若是，請**自行切換回 `影片預覽` 視窗**。如果你想使用類似於舊版（14 及以下）的 `修剪器` 與 `預覽視窗` 分離的視窗佈局，可到選單列的 **`檢視 -> 視窗佈局`** 中選擇 **`源視窗佈局`**。
@ja A: **`トリマー`** ウィンドウに切り替わっていないか確認してください。もしそうなら、 **`ビデオプレビュー` ウィンドウに切り替えてください**。古いバージョン（VP14 以下）のような分離された `トリマー` と `プレビュー` ウィンドウレイアウトを好む場合は、メニュー **`表示 -> ウィンドウレイアウト`** から **`ソースウィンドウレイアウト`** を選択します。
@ko A: **`트리머`** 창으로 전환했는지 확인하십시오. 그렇다면 **`비디오 미리보기` 창으로 다시 전환하십시오**. 이전 버전(VP14 이하)의 분리된 `트리머` 및 `미리보기` 창 레이아웃을 선호하는 경우 메뉴 **`보기 -> 창 레이아웃`** 으로 이동하여 **`소스 창 레이아웃`** 을 선택하십시오.
@de A: Überprüfen Sie, ob Sie zum **`Trimmer`**-Fenster gewechselt haben. Wenn ja, **wechseln Sie zurück zum `Video-Vorschau`-Fenster**. Wenn Sie das getrennte `Trimmer`- und `Vorschau`-Fensterlayout von älteren Versionen (VP14 und darunter) bevorzugen, gehen Sie zum Menü **`Ansicht -> Fensterlayout`** und wählen Sie **`Quellfensterlayout`**.
@fr R : Vérifiez si vous êtes passé à la fenêtre **`Rogneuse`**. Si oui, **rebasculer vers la fenêtre `Aperçu vidéo`**. Si vous préférez la disposition de fenêtre séparée `Rogneuse` et `Aperçu` des anciennes versions (VP14 et moins), allez dans le menu **`Affichage -> Disposition des fenêtres`** et sélectionnez **`Disposition de la fenêtre source`**.
@ru О: Проверьте, не переключились ли вы на окно **`Триммер (Trimmer)`**. Если да, **переключитесь обратно на окно `Предварительного просмотра видео (Video Preview)`**. Если вы предпочитаете отдельный макет окон `Триммер` и `Предварительный просмотр` из старых версий (VP14 и ниже), перейдите в меню **`Вид -> Макет окон (View -> Window Layout)`** и выберите **`Макет исходного окна (Source Window Layout)`**.

<br>

@en Q: Accidentally **closed/dragged out the xxxx window**. How to **get it back/dock it**?
@zh Q：不小心把**xxxx 窗口关闭了/拖拽下来了**，怎么**找回来/停靠回去**？
@zh-hant Q：不小心把**xxxx 視窗關閉了/拖拽下來了**，怎麼**找回來/停靠回去**？
@ja Q: 誤って **xxxx ウィンドウを閉じた/ドラッグアウトした**。 **戻す/ドックする**方法は？
@ko Q: 실수로 **xxxx 창을 닫음/드래그 아웃**. 어떻게 **되찾음/도킹합니까**?
@de F: Aus Versehen **xxxx-Fenster geschlossen/herausgezogen**. Wie **bekomme ich es zurück/docke es an**?
@fr Q : Accidentellement **fermé/glissé la fenêtre xxxx**. Comment **la récupérer/la réaccrocher** ?
@ru В: Случайно **закрыл/вытащил окно xxxx**. Как **вернуть его/закрепить обратно**?

@en A: Go to the menu **`View -> Window`** and enable the window you need. VEGAS window layout is highly customizable. Docked windows can be dragged out; undocked windows can be docked by dragging while holding **`Ctrl`**. Since VP23, windows can be docked above, below, left, or right of the timeline. Older versions only support docking above the timeline.
@zh A：请到菜单栏的 **`视图 -> 窗口`** 中自行开启你需要的窗口。Vegas 的窗口布局是可以被高度自定义的，已停靠的窗口可以直接拖拽下来，未停靠的窗口在拖动时按住 **`Ctrl`** 也可以停靠回去。自 23 大版本更新后，任意窗口都可以停靠到时间轴的上下左右位置，而在旧版本中，只支持停靠到时间轴的上方。
@zh-hant A：請到選單列的 **`檢視 -> 視窗`** 中自行開啟你需要的視窗。Vegas 的視窗佈局是可以被高度自定義的，已停靠的視窗可以直接拖拽下來，未停靠的視窗在拖動時按住 **`Ctrl`** 也可以停靠回去。自 23 大版本更新後，任意視窗都可以停靠到時間軸的上下左右位置，而在舊版本中，只支援停靠到時間軸的上方。
@ja A: メニュー **`表示 -> ウィンドウ`** に移動し、必要なウィンドウを有効にします。VEGAS ウィンドウレイアウトは高度にカスタマイズ可能です。ドックされたウィンドウはドラッグで外せます。ドックされていないウィンドウは **`Ctrl`** を押しながらドラッグするとドックできます。VP23 以降、ウィンドウはタイムラインの上、下、左、右にドックできます。古いバージョンではタイムラインの上にのみドック可能でした。
@ko A: 메뉴 **`보기 -> 창`** 으로 이동하여 필요한 창을 활성화하십시오. VEGAS 창 레이아웃은 높은 수준으로 사용자 정의 가능합니다. 도킹된 창은 드래그하여 뺄 수 있습니다. 도킹 해제된 창은 **`Ctrl`** 을 누른 상태로 드래그하여 도킹할 수 있습니다. VP23 이후 창은 타임라인의 위, 아래, 왼쪽, 오른쪽에 도킹할 수 있습니다. 이전 버전은 타임라인 위에만 도킹을 지원합니다.
@de A: Gehen Sie zum Menü **`Ansicht -> Fenster`** und aktivieren Sie das Fenster, das Sie benötigen. Das VEGAS-Fensterlayout ist hochgradig anpassbar. Angedockte Fenster können herausgezogen werden; nicht angedockte Fenster können angedockt werden, indem Sie beim Ziehen **`Strg`** gedrückt halten. Seit VP23 können Fenster über, unter, links oder rechts der Timeline angedockt werden. Ältere Versionen unterstützen nur das Andocken über der Timeline.
@fr R : Allez dans le menu **`Affichage -> Fenêtre`** et activez la fenêtre dont vous avez besoin. La disposition des fenêtres VEGAS est hautement personnalisable. Les fenêtres accrochées peuvent être glissées ; les fenêtres détachées peuvent être accrochées en glissant tout en maintenant **`Ctrl`**. Depuis VP23, les fenêtres peuvent être accrochées au-dessus, en dessous, à gauche ou à droite de la timeline. Les anciennes versions ne supportent que l'accrochage au-dessus de la timeline.
@ru О: Перейдите в меню **`Вид -> Окно (View -> Window)`** и включите нужное вам окно. Макет окон VEGAS можно сильно настраивать. Закрепленные окна можно вытащить; незакрепленные окна можно закрепить, перетаскивая при удерживании **`Ctrl`**. С VP23 окна можно закреплять над, под, слева или справа от временной шкалы. В старых версиях поддерживается закрепление только над временной шкалой.

<br>

@en Q: Clicking **Pan/Crop button/FX button/xxxx button** **doesn't open the window**?/**xxxx window disappeared**?
@zh Q：点击**平移裁切按钮/FX 按钮/xxxx 按钮**，**无法弹出窗口？**/**xxxx 窗口不知道去哪了**？
@zh-hant Q：點選**平移裁切按鈕/FX 按鈕/xxxx 按鈕**，**無法彈出視窗？**/**xxxx 視窗不知道去哪了**？
@ja Q: **Pan/Crop ボタン/FX ボタン/xxxx ボタン** をクリックしても**ウィンドウが開かない**？/**xxxx ウィンドウが消えた**？
@ko Q: **팬/자르기 버튼/FX 버튼/xxxx 버튼** 클릭 **창이 열리지 않음**?/**xxxx 창 사라짐**?
@de F: Klicken auf die **Pan/Crop-Schaltfläche/FX-Schaltfläche/xxxx-Schaltfläche** **öffnet das Fenster nicht**?/**xxxx-Fenster verschwunden**?
@fr Q : Cliquer sur le **bouton Pan/Crop/bouton FX/bouton xxxx** **n'ouvre pas la fenêtre** ?/**La fenêtre xxxx a disparu** ?
@ru В: Нажатие **кнопки Pan/Crop/кнопки FX/кнопки xxxx** **не открывает окно?**/**окно xxxx исчезло**?

@en A: Usually, the window was accidentally dragged below the Windows taskbar and can't be pulled up.
@zh A：这种情况一般是不小心把窗口拖到 Windows 任务栏下方了，没法再拖上来。
@zh-hant A：這種情況一般是不小心把視窗拖到 Windows 工作列下方了，沒法再拖上來。
@ja A: 通常、ウィンドウが誤って Windows タスクバーの下にドラッグされ、引き上げられない状態です。
@ko A: 일반적으로 창이 실수로 Windows 작업 표시줄 아래로 드래그되어 다시 올릴 수 없습니다.
@de A: Normalerweise wurde das Fenster versehentlich unter die Windows-Taskleiste gezogen und kann nicht hochgezogen werden.
@fr R : Généralement, la fenêtre a été accidentellement glissée sous la barre des tâches Windows et ne peut pas être remontée.
@ru О: Обычно окно было случайно перетащено под панель задач Windows, и его нельзя поднять.

@en Easy fix: **Click the corresponding button, then immediately press `Alt + Space`, choose `Move`**, and drag the window up. Alternatively, hide the Windows taskbar temporarily, then drag. As a last resort, try `View -> Restore Default Layout`.
@zh 比较方便的解决办法是**先点击一下对应的按钮，之后马上按 `Alt + 空格`，选择 `移动`**，然后把窗口拖上来。或者也可以把 Windows 任务栏隐藏了再拖上来。实在无法解决，可以试试菜单栏的 `视图 -> 恢复默认布局`。
@zh-hant 比較方便的解決辦法是**先點選一下對應的按鈕，之後馬上按 `Alt + 空格`，選擇 `移動`**，然後把視窗拖上來。或者也可以把 Windows 工作列隱藏了再拖上來。實在無法解決，可以試試選單列的 `檢視 -> 恢復預設佈局`。
@ja 簡単な修正： **対応するボタンをクリックし、すぐに `Alt + Space` を押し、 `移動` を選択**し、ウィンドウを上にドラッグします。または、一時的に Windows タスクバーを非表示にしてからドラッグします。最後の手段として、 `表示 -> デフォルトレイアウトを復元` を試みてください。
@ko 쉬운 수정: **해당 버튼을 클릭한 후 즉시 `Alt + 스페이스바`를 누르고 `이동`을 선택한 후 창을 위로 드래그하십시오**. 또는 Windows 작업 표시줄을 일시적으로 숨긴 후 드래그하십시오. 마지막 수단으로 `보기 -> 기본 레이아웃 복원`을 시도해 보십시오.
@de Einfache Lösung: **Klicken Sie auf die entsprechende Schaltfläche, dann sofort `Alt + Leertaste` drücken, wählen Sie `Verschieben`**, und ziehen Sie das Fenster hoch. Alternativ verstecken Sie vorübergehend die Windows-Taskleiste, dann ziehen. Als letzten Ausweg versuchen Sie `Ansicht -> Standardlayout wiederherstellen`.
@fr Solution facile : **Cliquez sur le bouton correspondant, puis immédiatement appuyez sur `Alt + Espace`, choisissez `Déplacer`**, et glissez la fenêtre vers le haut. Alternativement, masquez temporairement la barre des tâches Windows, puis glissez. En dernier recours, essayez `Affichage -> Restaurer la disposition par défaut`.
@ru Простое исправление: **Нажмите соответствующую кнопку, затем сразу же нажмите `Alt + Пробел`, выберите `Переместить (Move)`** и перетащите окно вверх. Или временно скройте панель задач Windows, затем перетащите. В крайнем случае попробуйте `Вид -> Восстановить макет по умолчанию (View -> Restore Default Layout)`.

<ImageOnDemand src="vegtips/image014_window_move.gif" />

<br>

@en Q: Added an FX, but in the Preview window, the **FX is not fully displayed, appearing split left/right**?
@zh Q：加了 FX，为什么在预览窗口中，**FX 效果显示不全，像左右分割了一样**？
@zh-hant Q：加了 FX，為什麼在預覽視窗中，**FX 效果顯示不全，像左右分割了一樣**？
@ja Q: FX を追加したが、プレビューウィンドウで**FX が完全に表示されず、左右に分割されて表示される**？
@ko Q: FX를 추가했지만 미리보기 창에서 **FX가 완전히 표시되지 않고 왼쪽/오른쪽으로 분할되어 나타남**?
@de F: FX hinzugefügt, aber im Vorschaufenster wird das **FX nicht vollständig angezeigt, erscheint links/rechts geteilt**?
@fr Q : Ajouté un FX, mais dans la fenêtre Aperçu, le **FX n'est pas entièrement affiché, apparaissant divisé gauche/droite** ?
@ru В: Добавлен FX, но в окне предварительного просмотра **FX отображается не полностью, разделен слева/справа**?

<ImageOnDemand src="vegtips/image015_split_screen.png" />

@en A: As shown, check if **`Split Screen View`** is enabled.
@zh A：如上图所示，请检查是否启用了**`分割屏幕视图`**功能。
@zh-hant A：如上圖所示，請檢查是否啟用了**`分割螢幕檢視`**功能。
@ja A: 図のように、 **`分割画面ビュー`** が有効になっていないか確認してください。
@ko A: 그림과 같이 **`분할 화면 보기`** 가 활성화되었는지 확인하십시오.
@de A: Wie gezeigt, überprüfen Sie, ob **`Geteilte Bildschirmansicht`** aktiviert ist.
@fr R : Comme montré, vérifiez si **`Vue écran partagé`** est activé.
@ru О: Как показано, проверьте, включен ли **`Режим разделенного экрана (Split Screen View)`**.

<br>

@en Q: Clicked something, and a single video track **split into A/B tracks**. How to revert?
@zh Q：不知点到什么了，单个视频轨道**被分成了 AB 两轨**，如何恢复？
@zh-hant Q：不知點到什麼了，單個影片軌道**被分成了 AB 兩軌**，如何恢復？
@ja Q: 何かをクリックしたら、単一のビデオトラックが **A/B トラックに分割された**。元に戻す方法は？
@ko Q: 무언가를 클릭했고 단일 비디오 트랙이 **A/B 트랙으로 분할됨**. 어떻게 복원합니까?
@de F: Etwas angeklickt, und eine einzelne Videospur **teilt sich in A/B-Spuren**. Wie rückgängig machen?
@fr Q : Cliqué sur quelque chose, et une piste vidéo unique **s'est divisée en pistes A/B**. Comment revenir en arrière ?
@ru В: Нажал на что-то, и одна видеодорожка **разделилась на дорожки A/B**. Как вернуть обратно?

<ImageOnDemand src="vegtips/image016_ab_track.png" />

@en A: Usually, this happens by double-clicking the edge of an event. **Double-click the event edge again** to fix it.
@zh A：一般这种情况下是不小心双击了事件边缘，再**双击一遍事件边缘**就可以解决了。
@zh-hant A：一般這種情況下是不小心雙擊了事件邊緣，再**雙擊一遍事件邊緣**就可以解決了。
@ja A: 通常、これはイベントの端をダブルクリックしたときに発生します。 **イベントの端をもう一度ダブルクリック**すると修正されます。
@ko A: 일반적으로 이는 이벤트 가장자리를 두 번 클릭할 때 발생합니다. **이벤트 가장자리를 다시 두 번 클릭**하여 수정하십시오.
@de A: Normalerweise passiert dies durch Doppelklicken auf den Rand eines Events. **Doppelklicken Sie erneut auf den Event-Rand**, um es zu beheben.
@fr R : Généralement, cela se produit en double-cliquant sur le bord d'un événement. **Double-cliquez à nouveau sur le bord de l'événement** pour le réparer.
@ru О: Обычно это происходит при двойном щелчке по краю события. **Снова дважды щелкните по краю события**, чтобы исправить.

@en If that doesn't work, in the track header (left side with `Level` and buttons), **Right-click -> Expand Track Layers**, and uncheck this option.
@zh 如果双击事件边缘不管用，可以在该轨道的左侧（`轨道头`，有 `级别` 和一大堆按钮的那边）**`右键 -> 展开轨道层`**，把这个选项去掉，应该也能解决。
@zh-hant 如果雙擊事件邊緣不管用，可以在該軌道的左側（`軌道頭`，有 `級別` 和一大堆按鈕的那邊）**`右鍵 -> 展開軌道層`**，把這個選項去掉，應該也能解決。
@ja それでもダメな場合、トラックヘッダー（`レベル` とボタンがある左側）で、 **右クリック -> トラックレイヤーを展開**、このオプションのチェックを外します。
@ko 작동하지 않으면 트랙 헤더(왼쪽에 `레벨` 및 버튼이 있음)에서 **마우스 오른쪽 버튼 클릭 -> 트랙 레이어 확장**을 선택하고 이 옵션을 선택 취소하십시오.
@de Wenn das nicht funktioniert, in der Spurüberschrift (linke Seite mit `Pegel` und Schaltflächen), **Rechtsklick -> Spurebenen erweitern**, und deaktivieren Sie diese Option.
@fr Si cela ne fonctionne pas, dans l'en-tête de piste (côté gauche avec `Niveau` et boutons), **Clic droit -> Développer les couches de piste**, et décochez cette option.
@ru Если это не поможет, в заголовке дорожки (слева, где `Уровень (Level)` и кнопки) **Щелкните правой кнопкой мыши -> Развернуть слои дорожки (Expand Track Layers)** и снимите этот флажок.

@en To prevent accidental triggering in VP18+, go to **`Preferences -> General`**, scroll to the bottom, and **disable `Double-click event edge to toggle expanded edit mode`**.
@zh 为了避免误触，vv18 及以上，可以在 **`首选项 -> 常规`** 中滑到最低下，**将 `双击事件边缘切换扩展编辑模式` 这个选项关闭**。
@zh-hant 為了避免誤觸，vv18 及以上，可以在 **`首選項 -> 常規`** 中滑到最低下，**將 `雙擊事件邊緣切換擴充編輯模式` 這個選項關閉**。
@ja VP18 以上で誤作動を防ぐには、 **`プリファレンス -> 全般`** に移動し、一番下までスクロールし、 **`ダブルクリックでイベント端の編集モードを切り替える`** を無効にします。
@ko VP18+에서 우발적 트리거를 방지하려면 **`환경설정 -> 일반`** 으로 이동하여 맨 아래로 스크롤하고 **`이벤트 가장자리 더블클릭으로 확장 편집 모드 전환`** 을 비활성화하십시오.
@de Um versehentliches Auslösen in VP18+ zu verhindern, gehen Sie zu **`Einstellungen -> Allgemein`**, scrollen Sie nach unten und **deaktivieren Sie `Doppelklick auf Event-Rand um erweiterten Bearbeitungsmodus umzuschalten`**.
@fr Pour éviter le déclenchement accidentel dans VP18+, allez dans **`Préférences -> Général`**, faites défiler vers le bas, et **désactivez `Double-cliquer sur le bord d'un événement pour basculer en mode d'édition étendu`**.
@ru Чтобы предотвратить случайное срабатывание в VP18+, перейдите в **`Настройки -> Общие (Preferences -> General)`**, прокрутите вниз и **отключите `Двойной щелчок по краю события для переключения в режим расширенного редактирования (Double-click event edge to toggle expanded edit mode)`**.

<br>

@en Q: Pressing **Undo (`Ctrl + Z`)** while the **Media Generator** window is open causes the Media Generator effect to **disappear from the preview**?
@zh Q：打开**媒体生成器**窗口时按下**撤销（`Ctrl + Z`）**，这个媒体生成器效果**在预览中消失**了？
@zh-hant Q：開啟**媒體生成器**視窗時按下**撤銷（`Ctrl + Z`）**，這個媒體生成器效果**在預覽中消失**了？
@ja Q: **メディアジェネレーター**ウィンドウが開いているときに **元に戻す（`Ctrl + Z`）** を押すと、メディアジェネレーター効果が**プレビューから消える**？
@ko Q: **미디어 생성기** 창이 열려 있는 상태에서 **실행 취소(`Ctrl + Z`)** 를 누르면 미디어 생성기 효과가 **미리보기에서 사라짐**?
@de F: Drücken von **Rückgängig (`Strg + Z`)** während das **Media Generator**-Fenster geöffnet ist, lässt den Media Generator-Effekt **aus der Vorschau verschwinden**?
@fr Q : Appuyer sur **Annuler (`Ctrl + Z`)** alors que la fenêtre **Générateur de média** est ouverte fait que l'effet du Générateur de média **disparaît de l'aperçu** ?
@ru В: Нажатие **Отменить (`Ctrl + Z`)** при открытом окне **Медиа генератора (Media Generator)** вызывает **исчезновение эффекта медиа-генератора из предварительного просмотра**?

@en A: When focus is on the **Media Generator's edit window**, pressing **Undo (`Ctrl + Z`)** may cause the Media Generator's **`Frame size`** and **`Duration`** parameters to change to abnormal values. Repeatedly pressing `Ctrl + Z` likely won't help in this case.
@zh A：当聚焦于**媒体生成器的编辑窗口**时，**撤销（`Ctrl + Z`）可能会导致媒体生成器的 `帧大小` 和 `持续时间` 这两个参数变为异常值**。这时候狂按 `Ctrl + Z` 可能也并没有什么用。
@zh-hant A：當聚焦於**媒體生成器的編輯視窗**時，**撤銷（`Ctrl + Z`）可能會導致媒體生成器的 `幀大小` 和 `持續時間` 這兩個參數變為異常值**。這時候狂按 `Ctrl + Z` 可能也並沒有什麼用。
@ja A: **メディアジェネレーターの編集ウィンドウ**にフォーカスがあるときに **元に戻す（`Ctrl + Z`）** を押すと、メディアジェネレーターの **`フレームサイズ`** および **`継続時間`** パラメーターが異常値に変更される可能性があります。この場合、`Ctrl + Z` を繰り返し押しても役に立たない可能性があります。
@ko A: **미디어 생성기의 편집 창**에 포커스가 있을 때 **실행 취소(`Ctrl + Z`)** 를 누르면 미디어 생성기의 **`프레임 크기`** 및 **`지속 시간`** 매개변수가 비정상적인 값으로 변경될 수 있습니다. 이 경우 `Ctrl + Z`를 반복해서 눌러도 도움이 되지 않을 수 있습니다.
@de A: Wenn der Fokus auf dem **Bearbeitungsfenster des Media Generators** liegt, kann das Drücken von **Rückgängig (`Strg + Z`)** dazu führen, dass die **`Bildgröße`** und **`Dauer`**-Parameter des Media Generators auf abnormale Werte ändern. Wiederholtes Drücken von `Strg + Z` hilft in diesem Fall wahrscheinlich nicht.
@fr R : Lorsque le focus est sur la **fenêtre d'édition du Générateur de média**, appuyer sur **Annuler (`Ctrl + Z`)** peut faire que les paramètres **`Taille de l'image`** et **`Durée`** du Générateur de média changent en valeurs anormales. Appuyer plusieurs fois sur `Ctrl + Z` ne sera probablement pas utile dans ce cas.
@ru О: Когда фокус находится в **окне редактирования Медиа генератора**, нажатие **Отменить (`Ctrl + Z`)** может привести к изменению параметров **`Размер кадра (Frame size)`** и **`Длительность (Duration)`** Медиа генератора на ненормальные значения. В этом случае многократное нажатие `Ctrl + Z`, вероятно, не поможет.

@en Both parameters are located in the top-left corner of the Media Generator window. You need to manually **change the Media Generator's `Frame size` and `Duration` back to their original values**. By default, `Frame size` matches the project dimensions (e.g., `1920*1080`), and `Duration` defaults to 5 seconds (or `00:00:05.00` on the `Time & Frames` ruler).
@zh 这两个参数均位于媒体生成器窗口左上角，请自行**将媒体生成器的 `帧大小` 和 `持续时间` 改为原先的值**。`帧大小` 默认情况下是项目的宽高，比如 `1920*1080`；`持续时间` 默认是5秒，对于 `时间与帧数` 标尺来说就是 `00:00:05.00`。
@zh-hant 這兩個參數均位於媒體生成器視窗左上角，請自行**將媒體生成器的 `幀大小` 和 `持續時間` 改為原先的值**。`幀大小` 預設情況下是專案的寬高，比如 `1920*1080`；`持續時間` 預設是5秒，對於 `時間與幀數` 標尺來說就是 `00:00:05.00`。
@ja 両パラメーターはメディアジェネレーターウィンドウの左上にあります。メディアジェネレーターの **`フレームサイズ` と `継続時間` を元の値に手動で変更する**必要があります。デフォルトでは、`フレームサイズ` はプロジェクトの寸法（例：`1920*1080`）に一致し、`継続時間` はデフォルトで 5 秒（`時間とフレーム` ルーラーでは `00:00:05.00`）です。
@ko 두 매개변수 모두 미디어 생성기 창의 왼쪽 상단에 있습니다. 수동으로 **미디어 생성기의 `프레임 크기`와 `지속 시간`을 원래 값으로 변경**해야 합니다. 기본적으로 `프레임 크기`는 프로젝트 크기와 일치하고(예: `1920*1080`), `지속 시간`은 기본적으로 5초입니다(또는 `시간 및 프레임` 눈금에서 `00:00:05.00`).
@de Beide Parameter befinden sich in der oberen linken Ecke des Media Generator-Fensters. Sie müssen manuell **die `Bildgröße` und `Dauer` des Media Generators auf ihre ursprünglichen Werte zurücksetzen**. Standardmäßig entspricht `Bildgröße` den Projektabmessungen (z. B. `1920*1080`), und `Dauer` ist standardmäßig 5 Sekunden (oder `00:00:05.00` auf dem `Zeit & Frames`-Lineal).
@fr Les deux paramètres sont situés dans le coin supérieur gauche de la fenêtre du Générateur de média. Vous devez manuellement **changer la `Taille de l'image` et la `Durée` du Générateur de média à leurs valeurs d'origine**. Par défaut, `Taille de l'image` correspond aux dimensions du projet (par ex. `1920*1080`), et `Durée` est par défaut de 5 secondes (ou `00:00:05.00` sur la règle `Temps & Images`).
@ru Оба параметра расположены в левом верхнем углу окна Медиа генератора. Вам нужно вручную **изменить `Размер кадра` и `Длительность` Медиа генератора обратно на исходные значения**. По умолчанию `Размер кадра` соответствует размерам проекта (например, `1920*1080`), а `Длительность` по умолчанию составляет 5 секунд (или `00:00:05.00` на линейке `Время и кадры (Time & Frames)`).

@en - Another related minor bug: After modifying the `Frame size` and `Duration` of a Media Generator, if you immediately open a second Media Generator's edit window on the timeline, the second generator may inherit the `Frame size` and `Duration` parameters from the first one.
@zh - 另一个和它类似的小 bug：当你通过媒体生成器窗口更改完第一个媒体生成器的帧大小和持续时间后，立即在时间轴上打开第二个媒体生成器的编辑窗口，会使第二个媒体生成器的帧大小和持续时间继承自第一个媒体生成器的对应参数。
@zh-hant - 另一個和它類似的小 bug：當你通過媒體生成器視窗更改完第一個媒體生成器的幀大小和持續時間後，立即在時間軸上開啟第二個媒體生成器的編輯視窗，會使第二個媒體生成器的幀大小和持續時間繼承自第一個媒體生成器的對應參數。
@ja - 関連するマイナーバグ：メディアジェネレーターの `フレームサイズ` と `継続時間` を変更した直後に、タイムライン上の 2 番目のメディアジェネレーターの編集ウィンドウを開くと、2 番目のジェネレーターが最初のジェネレーターの `フレームサイズ` と `継続時間` パラメーターを継承する可能性があります。
@ko - 또 다른 관련 사소한 버그: 미디어 생성기의 `프레임 크기`와 `지속 시간`을 수정한 후 타임라인에서 두 번째 미디어 생성기의 편집 창을 즉시 열면 두 번째 생성기가 첫 번째 생성기의 `프레임 크기`와 `지속 시간` 매개변수를 상속할 수 있습니다.
@de - Ein weiterer verwandter kleiner Bug: Nachdem Sie die `Bildgröße` und `Dauer` eines Media Generators geändert haben, wenn Sie sofort das Bearbeitungsfenster eines zweiten Media Generators auf der Timeline öffnen, kann der zweite Generator die `Bildgröße` und `Dauer`-Parameter vom ersten übernehmen.
@fr - Un autre bug mineur lié : Après avoir modifié la `Taille de l'image` et la `Durée` d'un Générateur de média, si vous ouvrez immédiatement la fenêtre d'édition d'un second Générateur de média sur la timeline, le second générateur peut hériter des paramètres `Taille de l'image` et `Durée` du premier.
@ru - Другой связанный мелкий баг: После изменения `Размера кадра` и `Длительности` одного Медиа генератора, если вы сразу откроете окно редактирования второго Медиа генератора на временной шкале, второй генератор может унаследовать параметры `Размера кадра` и `Длительности` от первого.

<br>

@en Q: **Some FX windows** (e.g., (legacy) Text, TV Simulator FX, other DXT plugins) **display incompletely**?
@zh Q：**部分 FX 效果**（(自带)文字、电视模拟器 FX 等 DXT 类插件）的**窗口显示不全**？
@zh-hant Q：**部分 FX 效果**（(自帶)文字、電視模擬器 FX 等 DXT 類外掛程式）的**視窗顯示不全**？
@ja Q: **一部の FX ウィンドウ**（例：(レガシー) テキスト、TV シミュレーター FX、その他の DXT プラグイン）が**不完全に表示される**？
@ko Q: **일부 FX 창** (예: (레거시) 텍스트, TV 시뮬레이터 FX, 기타 DXT 플러그인) **불완전하게 표시됨**?
@de F: **Einige FX-Fenster** (z. B. (Legacy) Text, TV Simulator FX, andere DXT-Plugins) **werden unvollständig angezeigt**?
@fr Q : **Certaines fenêtres FX** (par ex. Texte (hérité), FX Simulateur TV, autres plugins DXT) **s'affichent incomplètement** ?
@ru В: **Некоторые окна FX** (например, (устаревший) Текст, FX TV Simulator, другие плагины DXT) **отображаются не полностью**?

@en A:
@zh A：
@zh-hant A：
@ja A:
@ko A:
@de A:
@fr R :
@ru О:

@en 1. Install the **sserife.fon** font.
@zh 1. 安装 **sserife.fon** 字体。
@zh-hant 1. 安裝 **sserife.fon** 字型。
@ja 1. **sserife.fon** フォントをインストールします。
@ko 1. **sserife.fon** 글꼴을 설치하십시오.
@de 1. Installieren Sie die **sserife.fon**-Schriftart.
@fr 1. Installez la police **sserife.fon**.
@ru 1. Установите шрифт **sserife.fon**.

    @en - Download link: https://github.com/taveevut/Windows-10-Fonts-Default/blob/master/sserife.fon
    @zh - 下载链接：https://github.com/taveevut/Windows-10-Fonts-Default/blob/master/sserife.fon
    @zh-hant - 下載連結：https://github.com/taveevut/Windows-10-Fonts-Default/blob/master/sserife.fon
    @ja - ダウンロードリンク： https://github.com/taveevut/Windows-10-Fonts-Default/blob/master/sserife.fon
    @ko - 다운로드 링크: https://github.com/taveevut/Windows-10-Fonts-Default/blob/master/sserife.fon
    @de - Download-Link: https://github.com/taveevut/Windows-10-Fonts-Default/blob/master/sserife.fon
    @fr - Lien de téléchargement : https://github.com/taveevut/Windows-10-Fonts-Default/blob/master/sserife.fon
    @ru - Ссылка для скачивания: https://github.com/taveevut/Windows-10-Fonts-Default/blob/master/sserife.fon

@en 2. If installing the font doesn't help, go to **`Control Panel -> Region -> Administrative -> Change system locale`**. Ensure **`Beta: Use Unicode UTF-8 for worldwide language support`** is **NOT** checked, as shown below.
@zh 2. 若安装该字体后不管用，请转到 **`控制面板 -> 区域 -> 管理 -> 更改系统区域设置`**，确保 **`Beta 版:使用 Unicode UTF-8 提供全球语言支持`** 这个选项保持未勾选状态，如下图所示。
@zh-hant 2. 若安裝該字型後不管用，請轉到 **`控制台 -> 區域 -> 管理 -> 變更系統區域設定`**，確保 **`Beta 版:使用 Unicode UTF-8 提供全球語言支援`** 這個選項保持未勾選狀態，如下圖所示。
@ja 2. フォントインストールで解決しない場合、 **`コントロール パネル -> 地域 -> 管理 -> システムロケールの変更`** に移動します。 **`ベータ：Unicode UTF-8 を使用して、世界中の言語サポートを提供する`** が**チェックされていない**ことを確認します。下図参照。
@ko 2. 글꼴 설치가 도움이 되지 않으면 **`제어판 -> 지역 -> 관리 -> 시스템 로캘 변경`** 으로 이동하십시오. **`베타: 전 세계 언어 지원을 위해 Unicode UTF-8 사용`** 이 **선택되지 않았는지** 확인하십시오. 아래 그림과 같이.
@de 2. Wenn das Installieren der Schriftart nicht hilft, gehen Sie zu **`Systemsteuerung -> Region -> Verwaltung -> Systemgebietsschema ändern`**. Stellen Sie sicher, dass **`Beta: Unicode UTF-8 für weltweite Sprachunterstützung verwenden`** **NICHT** aktiviert ist, wie unten gezeigt.
@fr 2. Si l'installation de la police n'aide pas, allez dans **`Panneau de configuration -> Région -> Administration -> Changer les paramètres régionaux du système`**. Assurez-vous que **`Bêta : Utiliser Unicode UTF-8 pour la prise en charge linguistique mondiale`** est **NON** coché, comme montré ci-dessous.
@ru 2. Если установка шрифта не помогает, перейдите в **`Панель управления -> Регион -> Дополнительно -> Изменить язык системы (Control Panel -> Region -> Administrative -> Change system locale)`**. Убедитесь, что **`Бета: Использовать Юникод UTF-8 для поддержки языков по всему миру (Beta: Use Unicode UTF-8 for worldwide language support)`** **НЕ** отмечена, как показано ниже.

<ImageOnDemand src="vegtips/image017_unicode_settings.png" />

@en <small>Reference: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/credit-roll-window-not-displaying-in-full--138828/<br></small>
@zh <small>参见：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/credit-roll-window-not-displaying-in-full--138828/<br></small>
@zh-hant <small>參見：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/credit-roll-window-not-displaying-in-full--138828/<br></small>
@ja <small>参照： https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/credit-roll-window-not-displaying-in-full--138828/<br></small>
@ko <small>참조: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/credit-roll-window-not-displaying-in-full--138828/<br></small>
@de <small>Referenz: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/credit-roll-window-not-displaying-in-full--138828/<br></small>
@fr <small>Référence : https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/credit-roll-window-not-displaying-in-full--138828/<br></small>
@ru <small>Ссылка: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/credit-roll-window-not-displaying-in-full--138828/<br></small>

<br>

@en Q: Project Properties / Custom Render Template / Preferences windows are **too large, can't display fully, can't click OK**?
@zh Q：项目属性/自定义渲染模板/首选项设置等**窗口太大，没法显示完全**，**按不到确认键**？
@zh-hant Q：專案內容/自定義算繪範本/首選項設定等**視窗太大，沒法顯示完全**，**按不到確認鍵**？
@ja Q: プロジェクトプロパティ / カスタムレンダーテンプレート / プリファレンスウィンドウが **大きすぎて完全に表示できず、OK をクリックできない**？
@ko Q: 프로젝트 속성 / 사용자 정의 렌더링 템플릿 / 환경설정 창이 **너무 커서 완전히 표시되지 않고 확인을 클릭할 수 없음**?
@de F: Projekteigenschaften / Benutzerdefinierte Render-Vorlage / Einstellungsfenster sind **zu groß, können nicht vollständig angezeigt werden, OK kann nicht geklickt werden**?
@fr Q : Les fenêtres Propriétés du projet / Modèle de rendu personnalisé / Préférences sont **trop grandes, ne peuvent pas s'afficher complètement, ne peuvent pas cliquer sur OK** ?
@ru В: Окна свойств проекта / пользовательского шаблона рендеринга / настроек **слишком велики, не отображаются полностью, нельзя нажать OK**?

<ImageOnDemand src="vegtips/image018_window_too_large.png" />

@en A: VEGAS window size scales with Windows display settings. High DPI scaling can make VEGAS windows very large, causing cut-off displays at extreme scales. To click "OK", you can press the **`Enter` key**. If you need the full window displayed, you must **change the screen DPI scaling to 100%** in Windows Settings before opening the window, then change it back. Alternatively, **set VEGAS's DPI scaling individually to 100%**: Right-click the VEGAS executable or shortcut -> `Properties -> Compatibility -> Change high DPI settings`. **Set `Scaling performed by:` to `Application`**.
@zh A：Vegas 窗口大小会根据 Windows 屏幕设置自动缩放，如果 Windows 屏幕 DPI 缩放比例过大，也会导致 Vegas 的窗口变得很大，在特大缩放比例下部分设置窗口显示不完全。如果只需按“确认”，可以直接按键盘上的 **`Enter` 键**进行代替。如果必须要完整显示窗口，就只能提前修改屏幕的 DPI 缩放比例，**在 Windows 设置中将屏幕缩放比例调为 100%**，Vegas 内改完设置后再调回原来的值。或者也可以**单独将 Vegas 程序的 DPI 缩放改为 100%**，对着 Vegas 主程序或者快捷方式进入 `右键 -> 属性 -> 兼容性 -> 更改高 DPI 设置`，**单独设置 Vegas 的缩放选项，将 `缩放执行` 改为 `应用程序`。**
@zh-hant A：Vegas 視窗大小會根據 Windows 螢幕設定自動縮放，如果 Windows 螢幕 DPI 縮放比例過大，也會導致 Vegas 的視窗變得很大，在特大縮放比例下部分設定視窗顯示不完全。如果只需按“確認”，可以直接按鍵盤上的 **`Enter` 鍵**進行代替。如果必須要完整顯示視窗，就只能提前修改螢幕的 DPI 縮放比例，**在 Windows 設定中將螢幕縮放比例調為 100%**，Vegas 內改完設定後再調回原來的值。或者也可以**單獨將 Vegas 程式的 DPI 縮放改為 100%**，對著 Vegas 主程式或者捷徑進入 `右鍵 -> 內容 -> 相容性 -> 變更高 DPI 設定`，**單獨設定 Vegas 的縮放選項，將 `縮放執行` 改為 `應用程式`。**
@ja A: VEGAS ウィンドウサイズは Windows 表示設定に合わせてスケーリングされます。高 DPI スケーリングにより VEGAS ウィンドウが非常に大きくなり、極端なスケールでは表示が切れることがあります。「OK」をクリックするには、 **`Enter` キーを押せます**。ウィンドウ全体を表示する必要がある場合は、ウィンドウを開く前に Windows 設定で **画面の DPI スケーリングを 100% に変更**し、元に戻す必要があります。または、 **VEGAS の DPI スケーリングを個別に 100% に設定**： VEGAS 実行可能ファイルまたはショートカットを右クリック -> `プロパティ -> 互換性 -> 高 DPI 設定の変更`。 **`スケーリングの実行元:` を `アプリケーション` に設定**します。
@ko A: VEGAS 창 크기는 Windows 표시 설정에 따라 확대/축소됩니다. 높은 DPI 확대/축소는 VEGAS 창을 매우 크게 만들어 극단적인 확대/축소에서 잘려 나간 표시를 유발할 수 있습니다. "확인"을 클릭하려면 **`Enter` 키**를 누를 수 있습니다. 전체 창을 표시해야 하는 경우 창을 열기 전에 Windows 설정에서 **화면 DPI 확대/축소를 100%로 변경**한 후 다시 변경해야 합니다. 또는 **VEGAS의 DPI 확대/축소를 개별적으로 100%로 설정**: VEGAS 실행 파일 또는 바로가기 마우스 오른쪽 버튼 클릭 -> `속성 -> 호환성 -> 높은 DPI 설정 변경`. **`확대/축소 수행:`을 `응용 프로그램`으로 설정**.
@de A: VEGAS-Fenstergröße skaliert mit Windows-Anzeigeeinstellungen. Hohe DPI-Skalierung kann VEGAS-Fenster sehr groß machen, was bei extremen Skalierungen zu abgeschnittenen Anzeigen führt. Um "OK" zu klicken, können Sie die **`Eingabe`-Taste** drücken. Wenn Sie das vollständige Fenster angezeigt benötigen, müssen Sie **die Bildschirm-DPI-Skalierung in Windows-Einstellungen auf 100% ändern**, bevor Sie das Fenster öffnen, dann wieder zurückändern. Alternativ **setzen Sie die DPI-Skalierung von VEGAS einzeln auf 100%**: Rechtsklick auf die VEGAS ausführbare Datei oder Verknüpfung -> `Eigenschaften -> Kompatibilität -> Hohe DPI-Einstellungen ändern`. **Setzen Sie `Skalierung durch:` auf `Anwendung`**.
@fr R : La taille des fenêtres VEGAS s'adapte aux paramètres d'affichage Windows. Une mise à l'échelle DPI élevée peut rendre les fenêtres VEGAS très grandes, provoquant des affichages tronqués à des échelles extrêmes. Pour cliquer "OK", vous pouvez appuyer sur la **touche `Entrée`**. Si vous avez besoin que la fenêtre entière s'affiche, vous devez **changer la mise à l'échelle DPI de l'écran à 100%** dans les Paramètres Windows avant d'ouvrir la fenêtre, puis la remettre. Alternativement, **définir la mise à l'échelle DPI de VEGAS individuellement à 100%** : Clic droit sur l'exécutable ou le raccourci VEGAS -> `Propriétés -> Compatibilité -> Modifier les paramètres DPI élevés`. **Définissez `Mise à l'échelle effectuée par :` sur `Application`**.
@ru О: Размер окон VEGAS масштабируется в соответствии с настройками дисплея Windows. Высокое масштабирование DPI может сделать окна VEGAS очень большими, вызывая обрезание отображения при экстремальных масштабах. Чтобы нажать «OK», вы можете нажать клавишу **`Enter`**. Если вам нужно полное отображение окна, вы должны **изменить масштабирование DPI экрана на 100%** в настройках Windows перед открытием окна, затем изменить обратно. Или **установить масштабирование DPI для VEGAS отдельно на 100%**: Щелкните правой кнопкой мыши на исполняемом файле VEGAS или ярлыке -> `Свойства -> Совместимость -> Изменить параметры высокого DPI`. **Установите `Выполнение масштабирования: (Scaling performed by:)` на `Приложение (Application)`**.

<ImageOnDemand src="vegtips/image019_high_dpi_application.png" />

<br>

@en Q: After **switching back to VEGAS** from another software, it **takes a long time to buffer** before returning to normal?
@zh Q：从其他软件**切屏**回 Vegas 后，**需要缓冲好久**，才能恢复正常？
@zh-hant Q：從其他軟體**切屏**回 Vegas 後，**需要緩衝好久**，才能恢復正常？
@ja Q: 他のソフトウェアから**VEGAS に切り替えた**後、**バッファリングに長時間かかり**、正常に戻る？
@ko Q: 다른 소프트웨어에서 **VEGAS로 다시 전환**한 후 정상으로 돌아가기 전에 **버퍼링이 오래 걸림**?
@de F: Nach dem **Zurückwechseln zu VEGAS** von einer anderen Software, **dauert es lange zu puffern**, bevor es normal zurückkehrt?
@fr Q : Après être **revenu à VEGAS** depuis un autre logiciel, il **prend beaucoup de temps à tamponner** avant de revenir à la normale ?
@ru В: После **переключения обратно в VEGAS** из другого ПО **требуется много времени на буферизацию**, прежде чем вернуться к нормальной работе?

@en A: **`Preferences -> General`**, uncheck `Close media files when application is inactive`. Note: When this option is disabled, **VEGAS keeps media files in use, preventing you from modifying/deleting the original files outside VEGAS**. (Doesn't affect replace/delete within VEGAS.)
@zh A：**`首选项 -> 常规`，取消勾选 `在没有活动应用程序时关闭媒体文件`。**注意，未启用这个选项时，**Vegas 会一直占用着当前工程使用的媒体文件，从而无法对媒体文件本身进行修改删除等操作**。（不影响 Vegas 程序内的替换和删除等。）
@zh-hant A：**`首選項 -> 常規`，取消勾選 `在沒有活動應用程式時關閉媒體檔案`。**注意，未啟用這個選項時，**Vegas 會一直佔用著當前工程使用的媒體檔案，從而無法對媒體檔案本身進行修改刪除等操作**。（不影響 Vegas 程式內的替換和刪除等。）
@ja A: **`プリファレンス -> 全般`**、 `アプリケーションが非アクティブなときはメディアファイルを閉じる` のチェックを外します。注：このオプションが無効の場合、 **VEGAS はメディアファイルを使用し続け、外部で元のファイルを変更/削除できなくします**。（VEGAS 内での置換/削除には影響しません。）
@ko A: **`환경설정 -> 일반`**, `애플리케이션이 비활성 상태일 때 미디어 파일 닫기` 선택 취소. 참고: 이 옵션이 비활성화된 경우 **VEGAS는 미디어 파일을 계속 사용하여 VEGAS 외부에서 원본 파일을 수정/삭제할 수 없게 합니다**. (VEGAS 내에서 교체/삭제에는 영향을 미치지 않습니다.)
@de A: **`Einstellungen -> Allgemein`**, deaktivieren Sie `Mediendateien schließen, wenn Anwendung inaktiv ist`. Hinweis: Wenn diese Option deaktiviert ist, **hält VEGAS Mediendateien in Verwendung, was Sie daran hindert, die Originaldateien außerhalb von VEGAS zu ändern/löschen**. (Beeinflusst nicht Ersetzen/Löschen innerhalb VEGAS.)
@fr R : **`Préférences -> Général`**, décochez `Fermer les fichiers multimédias lorsque l'application est inactive`. Note : Lorsque cette option est désactivée, **VEGAS garde les fichiers multimédias en cours d'utilisation, vous empêchant de modifier/supprimer les fichiers originaux en dehors de VEGAS**. (N'affecte pas le remplacement/suppression dans VEGAS.)
@ru О: **`Настройки -> Общие (Preferences -> General)`**, снимите флажок `Закрывать медиафайлы, когда приложение неактивно (Close media files when application is inactive)`. Примечание: Когда эта опция отключена, **VEGAS продолжает использовать медиафайлы, не позволяя вам изменять/удалять исходные файлы вне VEGAS**. (Не влияет на замену/удаление внутри VEGAS.)

<br>

@en Q: Trying to **drag a video from the `Project Media` window** to the timeline, but it **accidentally starts "trimming"**?
@zh Q：想从 **`项目媒体`** 窗口里往时间轴上**拖放视频**，但是却**误操作成了“修剪”**了？
@zh-hant Q：想從 **`專案媒體`** 視窗裡往時間軸上**拖放影片**，但是卻**誤操作成了“修剪”**了？
@ja Q: **`プロジェクトメディア`ウィンドウ**からタイムラインに**ビデオをドラッグ**しようとしたが、誤って **「トリミング」が始まった**？
@ko Q: **`프로젝트 미디어` 창**에서 비디오를 타임라인으로 **드래그하려고 하는데 실수로 "트리밍"이 시작됨**?
@de F: Versucht, **ein Video aus dem `Projektmedien`-Fenster** auf die Timeline zu ziehen, aber es **beginnt versehentlich "Trimming"**?
@fr Q : Essayant de **glisser une vidéo de la fenêtre `Médias du projet`** sur la timeline, mais elle **commence accidentellement à "rognner"** ?
@ru В: Пытаюсь **перетащить видео из окна `Медиа проекта (Project Media)`** на временную шкалу, но оно **случайно начинает «обрезку»**?

@en A: An old, annoying issue: Dragging on the video image triggers "trimming".
@zh A：为人诟病的老问题了，只要是在视频画面上拖动，就会被当成是“修剪”来处理。
@zh-hant A：為人詬病的老問題了，只要是在影片畫面上拖動，就會被當成是“修剪”來處理。
@ja A: 古い、煩わしい問題：ビデオ画像上でのドラッグが「トリミング」をトリガーします。
@ko A: 오래된 성가신 문제: 비디오 이미지에서 드래그하면 "트리밍"이 트리거됩니다.
@de A: Ein altes, ärgerliches Problem: Ziehen auf dem Videobild löst "Trimming" aus.
@fr R : Un vieux problème ennuyeux : Glisser sur l'image vidéo déclenche le "rogner".
@ru О: Старая, раздражающая проблема: Перетаскивание на изображении видео запускает «обрезку».

@en Standard fix: **Press `Ctrl + Z` to undo, then drag by the filename below the video thumbnail, not on the image itself.**
@zh 常规的解决办法：**按 `Ctrl + Z` 撤销，然后拖动时拖视频画面下方的文件名，不要在视频画面上拖动。**
@zh-hant 常規的解決辦法：**按 `Ctrl + Z` 撤銷，然後拖動時拖影片畫面下方的檔名，不要在影片畫面上拖動。**
@ja 標準的な修正： **`Ctrl + Z` で元に戻し、ビデオサムネイルの下のファイル名でドラッグします。画像自体ではドラッグしないでください。**
@ko 표준 수정: **`Ctrl + Z`를 눌러 실행 취소한 후 비디오 썸네일 아래의 파일 이름으로 드래그하고 이미지 자체가 아닙니다.**
@de Standardlösung: **Drücken Sie `Strg + Z`, um rückgängig zu machen, dann ziehen Sie am Dateinamen unter dem Video-Miniaturbild, nicht auf dem Bild selbst.**
@fr Correction standard : **Appuyez sur `Ctrl + Z` pour annuler, puis glissez par le nom de fichier sous la miniature vidéo, pas sur l'image elle-même.**
@ru Стандартное исправление: **Нажмите `Ctrl + Z`, чтобы отменить, затем перетаскивайте за имя файла под миниатюрой видео, а не на самом изображении.**

@en VP21 added a **`Bypass Hover Scrub`** button. Enabling it prevents misoperation, but you lose the ability to preview video by hovering (only see thumbnail).
@zh 21 新增了一个 **`旁通悬停擦洗`**（`Bypass Hover Scrub`）的按钮，启用后就能保证不会误操作，不过这样就无法在鼠标悬停时预览视频画面，只能看到封面缩略图。
@zh-hant 21 新增了一個 **`旁通懸停擦洗`**（`Bypass Hover Scrub`）的按鈕，啟用後就能保證不會誤操作，不過這樣就無法在游標懸停時預覽影片畫面，只能看到封面縮圖。
@ja VP21 には **`ホバースクラブをバイパス`** ボタンが追加されました。有効にすると誤操作を防げますが、ホバーでビデオをプレビューする機能（サムネイルのみ表示）が失われます。
@ko VP21에 **`호버 스크럽 우회`** 버튼이 추가되었습니다. 활성화하면 오작동을 방지할 수 있지만 호버로 비디오를 미리 보는 기능(썸네일만 보기)을 잃게 됩니다.
@de VP21 fügte eine **`Hover-Scrub umgehen`**-Schaltfläche hinzu. Aktivieren verhindert Fehlbedienung, aber Sie verlieren die Fähigkeit, Video durch Schweben zu vorschauen (nur Miniaturbild sehen).
@fr VP21 a ajouté un bouton **`Contourner l'exploration au survol`**. L'activer empêche les erreurs de manipulation, mais vous perdez la capacité de prévisualiser la vidéo en survol (vous ne voyez que la miniature).
@ru В VP21 добавлена кнопка **`Обход при наведении (Bypass Hover Scrub)`**. Ее включение предотвращает ошибочные операции, но вы теряете возможность предварительного просмотра видео при наведении (видите только миниатюру).

<ImageOnDemand src="vegtips/image020_bypass_hover_scrub.png" />

@en <p align="center">Actually, this button was added in VP20, but in VP20 it had no effect.</p>
@zh <p align="center">其实这个按钮是 vv20 加的，但是 vv20 按了这个按钮以后完全没有效果。</p>
@zh-hant <p align="center">其實這個按鈕是 vv20 加的，但是 vv20 按了這個按鈕以後完全沒有效果。</p>
@ja <p align="center">実際、このボタンは VP20 で追加されましたが、VP20 では効果がありませんでした。</p>
@ko <p align="center">사실 이 버튼은 VP20에 추가되었지만 VP20에서는 효과가 없었습니다.</p>
@de <p align="center">Eigentlich wurde diese Schaltfläche in VP20 hinzugefügt, aber in VP20 hatte sie keine Wirkung.</p>
@fr <p align="center">En fait, ce bouton a été ajouté dans VP20, mais dans VP20 il n'avait aucun effet.</p>
@ru <p align="center">На самом деле эта кнопка была добавлена в VP20, но в VP20 она не имела эффекта.</p>

<br>

@en Q: **When playing in VEGAS, pressing the spacebar makes the cursor return to the start. I want space to pause at the current position.**
@zh Q：**Vegas 播放时按空格，为什么光标会返回起始点？我想把空格键改成光标停到当前位置。**
@zh-hant Q：**Vegas 播放時按空格，為什麼遊標會返回起始點？我想把空格鍵改成遊標停到目前位置。**
@ja Q: **VEGAS で再生中、スペースバーを押すとカーソルが開始位置に戻る。現在位置で一時停止させたい。**
@ko Q: **VEGAS에서 재생할 때 스페이스바를 누르면 커서가 시작점으로 돌아갑니다. 현재 위치에서 일시 정지하도록 스페이스를 원합니다.**
@de F: **Wenn in VEGAS abgespielt wird, bringt die Leertaste den Cursor zum Start zurück. Ich möchte, dass die Leertaste an der aktuellen Position pausiert.**
@fr Q : **Lors de la lecture dans VEGAS, appuyer sur la barre d'espace fait revenir le curseur au début. Je veux que la barre d'espace fasse une pause à la position actuelle.**
@ru В: **При воспроизведении в VEGAS нажатие пробела возвращает курсор к началу. Я хочу, чтобы пробел приостанавливал воспроизведение в текущей позиции.**

@en A: In VEGAS, "Pause" means "stop playback, cursor stays", while "Stop" means "stop playback, cursor returns to start".
@zh A：Vegas 的“暂停”代表“停止播放，光标停留在当前位置”，“停止”代表“停止播放，光标返回起始位置”。
@zh-hant A：Vegas 的“暫停”代表“停止播放，遊標停留在目前位置”，“停止”代表“停止播放，遊標返回起始位置”。
@ja A: VEGAS では、「一時停止」は「再生停止、カーソルはそのまま」、「停止」は「再生停止、カーソルは開始位置に戻る」を意味します。
@ko A: VEGAS에서 "일시 정지"는 "재생 중지, 커서 유지"를 의미하고 "중지"는 "재생 중지, 커서 시작점으로 돌아감"을 의미합니다.
@de A: In VEGAS bedeutet "Pause" "Wiedergabe stoppen, Cursor bleibt", während "Stopp" "Wiedergabe stoppen, Cursor kehrt zum Start zurück".
@fr R : Dans VEGAS, "Pause" signifie "arrêter la lecture, le curseur reste", tandis que "Stop" signifie "arrêter la lecture, le curseur revient au début".
@ru О: В VEGAS «Пауза» означает «остановить воспроизведение, курсор остается», а «Стоп» означает «остановить воспроизведение, курсор возвращается к началу».

@en In VP22 and below, by default, **`Enter` is "Pause", `Space` is "Stop"**. In `21 build 108` and earlier, you could swap them via **`Preferences -> General -> Use spacebar and F12 for play/pause instead of play/stop`**.
@zh 在 22 及以下版本中，默认情况下，**`Enter` 键是“暂停”，`空格` 键是“停止”**。在 `21 build 108` 及以前的版本中，可以调整 **`首选项 -> 常规`** 中的 **`使用空格键和 F12 进行播放/暂停而不是播放/停止`** 设置来交换 `Enter` 键和 `空格` 键的功能。
@zh-hant 在 22 及以下版本中，預設情況下，**`Enter` 鍵是“暫停”，`空格` 鍵是“停止”**。在 `21 build 108` 及以前的版本中，可以調整 **`首選項 -> 常規`** 中的 **`使用空格鍵和 F12 進行播放/暫停而不是播放/停止`** 設定來交換 `Enter` 鍵和 `空格` 鍵的功能。
@ja VP22 以下では、デフォルトで **`Enter` が「一時停止」、`Space` が「停止」** です。`21 build 108` 以前では、 **`プリファレンス -> 全般 -> スペースバーと F12 を再生/停止ではなく再生/一時停止に使用する`** で交換できました。
@ko VP22 이하에서는 기본적으로 **`Enter`는 "일시 정지", `스페이스바`는 "중지"** 입니다. `21 build 108` 이하에서는 **`환경설정 -> 일반 -> 재생/일시 정지 대신 재생/중지에 스페이스바 및 F12 사용`** 을 통해 교환할 수 있었습니다.
@de In VP22 und darunter ist standardmäßig **`Eingabe` "Pause", `Leertaste` "Stopp"**. In `21 Build 108` und früher konnten Sie sie über **`Einstellungen -> Allgemein -> Leertaste und F12 für Wiedergabe/Pause anstelle von Wiedergabe/Stopp verwenden`** tauschen.
@fr Dans VP22 et moins, par défaut, **`Entrée` est "Pause", `Espace` est "Stop"**. Dans `21 build 108` et antérieur, vous pouviez les échanger via **`Préférences -> Général -> Utiliser la barre d'espace et F12 pour lecture/pause au lieu de lecture/stop`**.
@ru В VP22 и ниже по умолчанию **`Enter` — это «Пауза», `Пробел` — «Стоп»**. В `21 build 108` и ранее вы могли поменять их местами через **`Настройки -> Общие -> Использовать пробел и F12 для воспроизведения/паузы вместо воспроизведения/остановки (Preferences -> General -> Use spacebar and F12 for play/pause instead of play/stop)`**.

@en Since `21 build 187`, this option moved to the **transport bar below the Preview window**, alongside play/pause/stop buttons. If not visible, expand the three dots on the right.
@zh 自 `21 build 187` 更新后，这个选项被移到了**预览窗口下方的传输栏内**，和播放、暂停、停止按钮放在了一起。如果没有，请展开右边的三个点。
@zh-hant 自 `21 build 187` 更新後，這個選項被移到了**預覽視窗下方的傳輸欄內**，和播放、暫停、停止按鈕放在了一起。如果沒有，請展開右邊的三個點。
@ja `21 build 187` 以降、このオプションは**プレビューウィンドウ下のトランスポートバー**に移動しました。再生/一時停止/停止ボタンと並んでいます。表示されていない場合は、右の三点リーダーを展開します。
@ko `21 build 187` 이후 이 옵션은 미리보기 창 아래의 **전송 표시줄**로 이동했으며 재생/일시 정지/중지 버튼과 함께 있습니다. 표시되지 않으면 오른쪽의 세 점을 확장하십시오.
@de Seit `21 Build 187` wurde diese Option zur **Transportleiste unter dem Vorschaufenster** verschoben, neben Wiedergabe/Pause/Stopp-Schaltflächen. Wenn nicht sichtbar, erweitern Sie die drei Punkte rechts.
@fr Depuis `21 build 187`, cette option a été déplacée vers la **barre de transport sous la fenêtre Aperçu**, à côté des boutons lecture/pause/stop. Si elle n'est pas visible, développez les trois points à droite.
@ru Начиная с `21 build 187`, эта опция переместилась на **панель транспорта под окном предварительного просмотра**, рядом с кнопками воспроизведения/паузы/остановки. Если не видна, разверните три точки справа.

<ImageOnDemand src="vegtips/image021_cursor_transport.png" />

@en After the VP23 update, the default behavior changed: **`Enter` is "Stop", `Space` is "Pause"**. The option became `Use spacebar and F12 for play/stop instead of play/pause`, available in both `Preferences -> General` and the transport bar.
@zh 在 23 大版本更新后，和旧版不同，Vegas 的默认行为已经变成了 **`Enter` 键是“停止”，`空格` 键是“暂停”**。这个选项也随之变成了 `使用空格键和 F12 进行播放/停止而不是播放/暂停`，并且在 `首选项 -> 常规` 中以及传输栏内，都有这个设置选项可以调整。
@zh-hant 在 23 大版本更新後，和舊版不同，Vegas 的預設行為已經變成了 **`Enter` 鍵是“停止”，`空格` 鍵是“暫停”**。這個選項也隨之變成了 `使用空格鍵和 F12 進行播放/停止而不是播放/暫停`，並且在 `首選項 -> 常規` 中以及傳輸欄內，都有這個設定選項可以調整。
@ja VP23 更新後、デフォルト動作が変更されました： **`Enter` が「停止」、`Space` が「一時停止」**。オプションは `スペースバーと F12 を再生/一時停止ではなく再生/停止に使用する` になり、 `プリファレンス -> 全般` とトランスポートバーの両方で利用可能です。
@ko VP23 업데이트 이후 기본 동작이 변경되었습니다: **`Enter`는 "중지", `스페이스바`는 "일시 정지"** 입니다. 옵션은 `재생/일시 정지 대신 재생/중지에 스페이스바 및 F12 사용`이 되었으며 `환경설정 -> 일반` 및 전송 표시줄 모두에서 사용할 수 있습니다.
@de Nach dem VP23-Update änderte sich das Standardverhalten: **`Eingabe` ist "Stopp", `Leertaste` ist "Pause"**. Die Option wurde zu `Leertaste und F12 für Wiedergabe/Stopp anstelle von Wiedergabe/Pause verwenden`, verfügbar in beiden `Einstellungen -> Allgemein` und der Transportleiste.
@fr Après la mise à jour VP23, le comportement par défaut a changé : **`Entrée` est "Stop", `Espace` est "Pause"**. L'option est devenue `Utiliser la barre d'espace et F12 pour lecture/stop au lieu de lecture/pause`, disponible à la fois dans `Préférences -> Général` et la barre de transport.
@ru После обновления VP23 поведение по умолчанию изменилось: **`Enter` — это «Стоп», `Пробел` — «Пауза»**. Опция стала `Использовать пробел и F12 для воспроизведения/остановки вместо воспроизведения/паузы (Use spacebar and F12 for play/stop instead of play/pause)`, доступна как в `Настройки -> Общие`, так и на панели транспорта.

<br>

@en Q: **Crash when copying Pan/Crop keyframes**?
@zh Q：**复制平移/裁切关键帧后发生崩溃**？
@zh-hant Q：**複製平移/裁切關鍵影格後發生崩潰**？
@ja Q: **Pan/Crop キーフレームをコピーするとクラッシュ**する？
@ko Q: **팬/자르기 키프레임 복사 시 크래시**?
@de F: **Absturz beim Kopieren von Pan/Crop-Keyframes**?
@fr Q : **Plantage lors de la copie des images clés Pan/Crop** ?
@ru В: **Сбой при копировании ключевых кадров Pan/Crop**?

@en A: A Windows 11 update issue. **Upgrading to `22 build 250`** fixes it.
@zh A：Windows 11 更新的问题，**升级到 `22 build 250`** 可以解决。
@zh-hant A：Windows 11 更新的問題，**升級到 `22 build 250`** 可以解決。
@ja A: Windows 11 更新の問題です。 **`22 build 250` にアップグレード**すると修正されます。
@ko A: Windows 11 업데이트 문제입니다. **`22 build 250`로 업그레이드**하면 해결됩니다.
@de A: Ein Windows 11-Update-Problem. **Upgrade auf `22 Build 250`** behebt es.
@fr R : Problème de mise à jour Windows 11. **Mise à niveau vers `22 build 250`** le corrige.
@ru О: Проблема с обновлением Windows 11. **Обновление до `22 build 250`** исправляет это.

@en - Temporary fix for older VEGAS: **Right-click VEGAS executable/shortcut -> `Properties -> Compatibility`, under `Compatibility mode` select `Windows 8`**.
@zh - 旧版 Vegas 可以使用临时解决办法：**右键 Vegas 程序或者快捷方式进入 `属性`，切换到 `兼容性`，在 `兼容模式` 这一栏选择 `Windows 8`**。
@zh-hant - 舊版 Vegas 可以使用臨時解決辦法：**右鍵 Vegas 程式或者捷徑進入 `內容`，切換到 `相容性`，在 `相容模式` 這一欄選擇 `Windows 8`**。
@ja - 古い VEGAS の一時的な修正： **VEGAS 実行可能ファイル/ショートカットを右クリック -> `プロパティ -> 互換性`、 `互換性モード` で `Windows 8` を選択**。
@ko - 이전 VEGAS의 임시 해결 방법: **VEGAS 실행 파일/바로가기 마우스 오른쪽 버튼 클릭 -> `속성 -> 호환성`, `호환 모드` 아래에서 `Windows 8` 선택**.
@de - Vorübergehende Lösung für älteres VEGAS: **Rechtsklick auf VEGAS ausführbare Datei/Verknüpfung -> `Eigenschaften -> Kompatibilität`, unter `Kompatibilitätsmodus` wählen Sie `Windows 8`**.
@fr - Correction temporaire pour les anciens VEGAS : **Clic droit sur l'exécutable/raccourci VEGAS -> `Propriétés -> Compatibilité`, sous `Mode de compatibilité` sélectionnez `Windows 8`**.
@ru - Временное исправление для старых версий VEGAS: **Щелкните правой кнопкой мыши на исполняемом файле/ярлыке VEGAS -> `Свойства -> Совместимость`, в разделе `Режим совместимости (Compatibility mode)` выберите `Windows 8`**.

@en <small>Reference: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/vegas-pro-22-consistent-crashing-when-copying-keyframes--148746/<br></small>
@zh <small>参见：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/vegas-pro-22-consistent-crashing-when-copying-keyframes--148746/<br></small>
@zh-hant <small>參見：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/vegas-pro-22-consistent-crashing-when-copying-keyframes--148746/<br></small>
@ja <small>参照： https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/vegas-pro-22-consistent-crashing-when-copying-keyframes--148746/<br></small>
@ko <small>참조: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/vegas-pro-22-consistent-crashing-when-copying-keyframes--148746/<br></small>
@de <small>Referenz: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/vegas-pro-22-consistent-crashing-when-copying-keyframes--148746/<br></small>
@fr <small>Référence : https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/vegas-pro-22-consistent-crashing-when-copying-keyframes--148746/<br></small>
@ru <small>Ссылка: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/vegas-pro-22-consistent-crashing-when-copying-keyframes--148746/<br></small>

<br>

@en Q: <sup>VP22+</sup> **Left-dragging on the timeline now selects events, can't select a time range anymore**?
@zh Q：<sup>22 及以上</sup>**左键在时间轴上拖动，变成事件选择了，不能在时间轴上选择区域了**？
@zh-hant Q：<sup>22 及以上</sup>**左鍵在時間軸上拖動，變成事件選擇了，不能在時間軸上選擇區域了**？
@ja Q: <sup>VP22+</sup> **タイムライン上での左ドラッグがイベント選択になり、時間範囲を選択できなくなった**？
@ko Q: <sup>VP22+</sup> **타임라인에서 왼쪽 드래그가 이제 이벤트를 선택하고 시간 범위를 선택할 수 없음**?
@de F: <sup>VP22+</sup> **Linksziehen auf der Timeline wählt jetzt Events aus, kann keinen Zeitbereich mehr auswählen**?
@fr Q : <sup>VP22+</sup> **Glisser à gauche sur la timeline sélectionne maintenant les événements, ne peut plus sélectionner une plage de temps** ?
@ru В: <sup>VP22+</sup> **Перетаскивание левой кнопкой мыши на временной шкале теперь выбирает события, нельзя выбрать диапазон времени**?

@en A: After VP22, left-drag on the timeline selects events, while right-drag selects a time range. If you're used to the old logic, you can **check `Preferences -> Editing -> Use right mouse button to switch to selection edit tool`** to swap left/right button functions, similar to Reaper's default logic.  
@zh A：在 22 更新后，鼠标左键在时间轴上拖动的操作变成了框选时间轴上的事件，而鼠标右键才是时间轴上选择区域。如果用旧版用惯了，不习惯这个新版逻辑，可以**勾选 `首选项 -> 编辑 -> 使用鼠标右键切换到选择编辑工具`，交换左右键**，变成类似于 Reaper 默认的操作逻辑。  
@zh-hant A：在 22 更新後，滑鼠左鍵在時間軸上拖動的操作變成了框選時間軸上的事件，而滑鼠右鍵才是時間軸上選擇區域。如果用舊版用慣了，不習慣這個新版邏輯，可以**勾選 `首選項 -> 編輯 -> 使用滑鼠右鍵切換到選擇編輯工具`，交換左右鍵**，變成類似於 Reaper 預設的操作邏輯。  
@ja A: VP22 以降、タイムライン上での左ドラッグはイベントの選択、右ドラッグは時間範囲の選択です。旧ロジックに慣れている場合は、**`プリファレンス -> 編集 -> マウスの右ボタンで選択編集ツールに切り替える`** をチェックして左右ボタンの機能を交換できます。Reaper のデフォルトロジックに似ています。  
@ko A: VP22 이후 왼쪽 드래그는 타임라인에서 이벤트를 선택하고 오른쪽 드래그는 시간 범위를 선택합니다. 이전 논리에 익숙하다면 **`환경설정 -> 편집 -> 선택 편집 도구로 전환하려면 마우스 오른쪽 버튼 사용`** 을 선택하여 왼쪽/오른쪽 버튼 기능을 교환할 수 있습니다. Reaper의 기본 논리와 유사합니다.  
@de A: Nach VP22 wählt Linksziehen auf der Timeline Events aus, während Rechtsziehen einen Zeitbereich auswählt. Wenn Sie an die alte Logik gewöhnt sind, können Sie **`Einstellungen -> Bearbeitung -> Rechte Maustaste zum Wechseln zum Auswahlbearbeitungswerkzeug verwenden`** aktivieren, um Links-/Rechtsfunktionen zu tauschen, ähnlich der Reaper-Standardlogik.  
@fr R : Après VP22, glisser à gauche sur la timeline sélectionne les événements, tandis que glisser à droite sélectionne une plage de temps. Si vous êtes habitué à l'ancienne logique, vous pouvez **cocher `Préférences -> Édition -> Utiliser le bouton droit de la souris pour basculer vers l'outil d'édition de sélection`** pour échanger les fonctions des boutons gauche/droit, similaire à la logique par défaut de Reaper.  
@ru О: После VP22 перетаскивание левой кнопкой мыши на временной шкале выбирает события, а правой — выбирает диапазон времени. Если вы привыкли к старой логике, вы можете **установить флажок `Настройки -> Редактирование -> Использовать правую кнопку мыши для переключения на инструмент выбора редактирования (Preferences -> Editing -> Use right mouse button to switch to selection edit tool)`**, чтобы поменять функции левой/правой кнопок, аналогично логике по умолчанию в Reaper.  

@en <small>If this happens in older versions, first confirm your edit tool is selected correctly (press <code>D</code> key twice).</small>
@zh <small>若是旧版遇到这个问题，你先确认一遍你鼠标编辑工具选没选对，敲两下 `D` 键。</small>
@zh-hant <small>若是舊版遇到這個問題，你先確認一遍你滑鼠編輯工具選沒選對，敲兩下 `D` 鍵。</small>
@ja <small>古いバージョンでこれが発生する場合は、まず編集ツールが正しく選択されているか確認します（<code>D</code> キーを 2 回押す）。</small>
@ko <small>이전 버전에서 발생하는 경우 먼저 편집 도구가 올바르게 선택되었는지 확인하십시오(<code>D</code> 키 두 번 누르기).</small>
@de <small>Wenn dies in älteren Versionen passiert, bestätigen Sie zuerst, dass Ihr Bearbeitungswerkzeug korrekt ausgewählt ist (drücken Sie <code>D</code>-Taste zweimal).</small>
@fr <small>Si cela se produit dans les anciennes versions, confirmez d'abord que votre outil d'édition est correctement sélectionné (appuyez sur la touche <code>D</code> deux fois).</small>
@ru <small>Если это происходит в старых версиях, сначала убедитесь, что ваш инструмент редактирования выбран правильно (дважды нажмите клавишу <code>D</code>).</small>

@en This update also introduced a minor issue: the actual event selection area is slightly smaller than the mouse-drawn area due to a new offset value. Go to [Internal Preferences](#accessing-vegas-internal-preferences), search for **`Default SelectionMode Offset`**, change it to **`0`**.
@zh 这次更新以后，还出现了一个新的小问题，也就是实际的事件选择范围，与你鼠标划的区域稍有差异，实际的事件选择范围会略小于鼠标划的区域。这是因为新版额外引入了一个选区偏移值。到 [内部首选项](#vegas-内部首选项的进入方法)，搜索并找到 **`Default SelectionMode Offset`**，改成 **`0`** 即可。
@zh-hant 這次更新以後，還出現了一個新的小問題，也就是實際的事件選擇範圍，與你游標劃的區域稍有差異，實際的事件選擇範圍會略小於游標劃的區域。這是因為新版額外引入了一個選區偏移值。到 [內部首選項](#vegas-內部首選項的進入方法)，搜尋並找到 **`Default SelectionMode Offset`**，改成 **`0`** 即可。
@ja この更新により、実際のイベント選択領域がマウスで描画した領域よりわずかに小さくなるというマイナーな問題も導入されました。新しいオフセット値のためです。 [内部プリファレンス](#vegas-内部プリファレンスへのアクセス) に移動し、 **`Default SelectionMode Offset`** を検索し、 **`0`** に変更します。
@ko 이 업데이트는 또한 새로운 오프셋 값으로 인해 실제 이벤트 선택 영역이 마우스로 그린 영역보다 약간 작은 사소한 문제를 도입했습니다. [내부 환경설정 접근](#vegas-내부-환경설정-접근)으로 이동하여 **`Default SelectionMode Offset`** 을 검색하고 **`0`** 으로 변경하십시오.
@de Dieses Update führte auch ein kleines Problem ein: Der tatsächliche Event-Auswahlbereich ist aufgrund eines neuen Versatzwertes etwas kleiner als der mit der Maus gezeichnete Bereich. Gehen Sie zu [Interne Einstellungen](#auf-die-internen-vegas-einstellungen-zugreifen), suchen Sie nach **`Default SelectionMode Offset`**, ändern Sie es zu **`0`**.
@fr Cette mise à jour a aussi introduit un problème mineur : la zone de sélection réelle des événements est légèrement plus petite que la zone dessinée par la souris en raison d'une nouvelle valeur de décalage. Allez dans les [Préférences internes](#accéder-aux-préférences-internes-vegas), recherchez **`Default SelectionMode Offset`**, changez-le en **`0`**.
@ru Это обновление также привело к небольшой проблеме: фактическая область выбора события немного меньше области, нарисованной мышью, из-за нового значения смещения. Перейдите в [Внутренние настройки](#доступ-к-внутренним-настройкам-vegas), найдите **`Default SelectionMode Offset`**, измените его на **`0`**.

<br>

@en ## VII. Preview Related
@zh ## 七、预览相关
@zh-hant ## 七、預覽相關
@ja ## 七、プレビュー関連
@ko ## VII. 미리보기 관련
@de ## VII. Vorschau bezogen
@fr ## VII. Aperçu
@ru ## VII. Связанное с предварительным просмотром

@en ### General Troubleshooting for Preview Flickering Green/Black, Footage Glitching, etc.
@zh ### 预览画面闪绿色、闪黑、素材乱飘等问题的一般处理思路
@zh-hant ### 預覽畫面閃綠色、閃黑、素材亂飄等問題的一般處理思路
@ja ### プレビューが緑/黒に点滅、素材がグリッチするなどの一般的なトラブルシューティング
@ko ### 미리보기 깜박임 녹색/검정, 영상 오류 등에 대한 일반적인 문제 해결
@de ### Allgemeine Fehlerbehandlung für Vorschau-Flackern Grün/Schwarz, Materialstörungen usw.
@fr ### Dépannage général pour l'aperçu clignotant vert/noir, séquence buggée, etc.
@ru ### Общие методы устранения неполадок: мерцание зеленого/черного в предпросмотре, глюки материала и т.д.

@en 1. First try **[Disable GPU Acceleration](#1-disable-gpu-acceleration)**, **[Disable Resample](#2-disable-resample)**, **[Enable/Disable Legacy Decoders](#1-enabledisable-legacy-avc-and-hevc-decoding)**.
@zh 1. **[关闭 GPU 加速](#1-关闭-gpu-加速)**、**[禁用重采样](#2-禁用重采样)**、**[启用/关闭两个旧版解码](#1-启用关闭-avc-和-hevc-旧版解码)**，这三种办法先试试看。
@zh-hant 1. **[關閉 GPU 加速](#1-關閉-gpu-加速)**、**[禁用重采樣](#2-禁用重采樣)**、**[啟用/關閉兩個舊版解碼](#1-啟用關閉-avc-和-hevc-舊版解碼)**，這三種辦法先試試看。
@ja 1. まず **[GPU アクセラレーションを無効](#1-gpu-アクセラレーションを無効にする)**、 **[リサンプルを無効](#2-リサンプルを無効にする)**、 **[レガシーデコーダーの有効/無効](#1-レガシー-avc-および-hevc-デコードを有効化無効化)** を試みます。
@ko 1. 먼저 **[GPU 가속 비활성화](#1-gpu-가속-비활성화)**, **[리샘플 비활성화](#2-리샘플-비활성화)**, **[레거시 디코더 활성화/비활성화](#1-레거시-avc-및-hevc-디코딩-활성화비활성화)** 를 시도해 보십시오.
@de 1. Zuerst versuchen **[GPU-Beschleunigung deaktivieren](#1-gpu-beschleunigung-deaktivieren)**, **[Resample deaktivieren](#2-resample-deaktivieren)**, **[Legacy-Decoder aktivieren/deaktivieren](#1-legacy-avc-und-hevc-decodierung-aktivierendekativieren)**.
@fr 1. Essayez d'abord **[Désactiver l'accélération GPU](#1-désactiver-l-accélération-gpu)**, **[Désactiver le rééchantillonnage](#2-désactiver-le-rééchantillonnage)**, **[Activer/Désactiver les décodeurs hérités](#1-activerdésactiver-le-décodage-avc-et-hevc-hérité)**.
@ru 1. Сначала попробуйте **[Отключить ускорение GPU](#1-отключить-аппаратное-ускорение-gpu)**, **[Отключить повторную дискретизацию](#2-отключить-повторную-дискретизацию-resample)**, **[Включить/Отключить устаревшие декодеры](#1-включитьотключить-устаревшее-декодирование-avc-и-hevc)**.

@en 2. Switch the preview quality in the top-left of the Preview window (e.g., `Best (Full)`) to see if it normalizes.
@zh 2. 切换预览窗口左上角的预览质量，比如 `最好(完整)` 等，看看是否变正常了。
@zh-hant 2. 切換預覽視窗左上角的預覽質量，比如 `最好(完整)` 等，看看是否變正常了。
@ja 2. プレビューウィンドウ左上のプレビュー品質（例：`ベスト（フル）`）を切り替え、正常化するか確認します。
@ko 2. 미리보기 창의 왼쪽 상단에서 미리보기 품질을 전환하여 정상화되는지 확인하십시오(예: `최고(전체)`).
@de 2. Wechseln Sie die Vorschaugualität oben links im Vorschaufenster (z. B. `Beste (Voll)`), um zu sehen, ob es normalisiert.
@fr 2. Changez la qualité d'aperçu dans le coin supérieur gauche de la fenêtre Aperçu (par ex. `Meilleur (Plein)`) pour voir si elle se normalise.
@ru 2. Переключите качество предварительного просмотра в левом верхнем углу окна предпросмотра (например, `Лучшее (полное) (Best (Full))`), чтобы увидеть, нормализуется ли оно.

@en 3. **Specific plugin bug**: Try removing video FX that might cause the issue.
@zh 3. **特定插件的 bug**，请尝试移除可能导致问题的视频效果。
@zh-hant 3. **特定外掛程式的 bug**，請嘗試移除可能導致問題的影片效果。
@ja 3. **特定のプラグインバグ**：問題を引き起こす可能性のあるビデオ FX を削除してみます。
@ko 3. **특정 플러그인 버그**: 문제를 일으킬 수 있는 비디오 FX를 제거해 보십시오.
@de 3. **Spezifischer Plugin-Bug**: Versuchen Sie, Video-FX zu entfernen, die das Problem verursachen könnten.
@fr 3. **Bug de plugin spécifique** : Essayez de retirer les FX vidéo qui pourraient causer le problème.
@ru 3. **Специфическая ошибка плагина**: Попробуйте удалить видеоэффекты, которые могут вызывать проблему.

@en 4. Re-encode all original media files and replace them.
@zh 4. 将原始媒体文件全部重新转码，再替换。
@zh-hant 4. 將原始媒體檔案全部重新轉碼，再替換。
@ja 4. 元のメディアファイルをすべて再エンコードして置き換えます。
@ko 4. 모든 원본 미디어 파일을 재인코딩하고 교체하십시오.
@de 4. Alle originalen Mediendateien neu enkodieren und ersetzen.
@fr 4. Réencoder tous les fichiers multimédias originaux et les remplacer.
@ru 4. Перекодировать все исходные медиафайлы и заменить их.

@en 5. Inexplicable preview flickering/glitching is frustrating. If the above methods fail, you might be out of luck.
@zh 5. 预览莫名其妙闪帧、素材乱飘的问题是很糟心，如果上述几种办法都无法解决的话，那估计只能开摆了。
@zh-hant 5. 預覽莫名其妙閃幀、素材亂飄的問題是很糟心，如果上述幾種辦法都無法解決的話，那估計只能開擺了。
@ja 5. 説明のつかないプレビューの点滅/グリッチは苛立たしいものです。上記の方法が失敗した場合、運が尽きたかもしれません。
@ko 5. 설명할 수 없는 미리보기 깜박임/오류는 실망스럽습니다. 위의 방법이 실패하면 운이 없을 수 있습니다.
@de 5. Unerklärliches Vorschau-Flackern/Störungen sind frustrierend. Wenn die obigen Methoden scheitern, haben Sie möglicherweise Pech.
@fr 5. Les clignotements/bugs d'aperçu inexplicables sont frustrants. Si les méthodes ci-dessus échouent, vous pourriez être sans chance.
@ru 5. Необъяснимое мерцание/глюки предпросмотра расстраивают. Если вышеуказанные методы не помогут, вам, возможно, не повезло.

<br>

@en ### Preview Q&A
@zh ### 预览相关的 Q&A
@zh-hant ### 預覽相關的 Q&A
@ja ### プレビュー Q&A
@ko ### 미리보기 Q&A
@de ### Vorschau Q&A
@fr ### FAQ sur l'aperçu
@ru ### Вопросы и ответы по предварительному просмотру

@en Q: After **adding FX / modifying subtitle text / editing FX**, the **Preview window doesn't update**. Changes only appear **after closing the FX window**?
@zh Q：**添加 FX/修改字幕文本/修改 FX 等操作**后，**预览窗口中的内容无变化，只有把 FX 窗口关闭了**，才能在预览窗口中看到更改后的结果？
@zh-hant Q：**添加 FX/修改字幕文字/修改 FX 等操作**後，**預覽視窗中的內容無變化，只有把 FX 視窗關閉了**，才能在預覽視窗中看到更改後的結果？
@ja Q: **FX 追加 / 字幕テキスト変更 / FX 編集**後、**プレビューウィンドウが更新されない**。変更は **FX ウィンドウを閉じた後**にのみ表示される？
@ko Q: **FX 추가 / 자막 텍스트 수정 / FX 편집** 후 **미리보기 창이 업데이트되지 않음**. 변경 사항은 **FX 창을 닫은 후에만 나타남**?
@de F: Nach **Hinzufügen von FX / Ändern von Untertiteltext / Bearbeiten von FX** aktualisiert sich das **Vorschaufenster nicht**. Änderungen erscheinen nur **nach Schließen des FX-Fensters**?
@fr Q : Après **ajout de FX / modification de texte de sous-titre / édition de FX**, la **fenêtre Aperçu ne se met pas à jour**. Les changements n'apparaissent **qu'après fermeture de la fenêtre FX** ?
@ru В: После **добавления FX / изменения текста субтитров / редактирования FX** **окно предпросмотра не обновляется**. Изменения появляются только **после закрытия окна FX**?

@en A: This issue appears with **certain Nvidia driver versions**. Here are solutions:
@zh A：一般此问题出现在**某些版本的 N 卡驱动**中，以下是几种不同的解决办法。
@zh-hant A：一般此問題出現在**某些版本的 N 卡驅動**中，以下是幾種不同的解決辦法。
@ja A: この問題は**特定の Nvidia ドライバーバージョン**で発生します。解決策は以下の通りです：
@ko A: 이 문제는 **특정 Nvidia 드라이버 버전**에서 나타납니다. 해결책은 다음과 같습니다:
@de A: Dieses Problem erscheint mit **bestimmten Nvidia-Treiberversionen**. Hier sind Lösungen:
@fr R : Ce problème apparaît avec **certaines versions de pilotes Nvidia**. Voici les solutions :
@ru О: Эта проблема появляется с **определенными версиями драйверов Nvidia**. Вот решения:

@en 1. **[Disable GPU Acceleration](#1-disable-gpu-acceleration)**. Simple and effective. **(Using integrated GPU acceleration also works.)**
@zh 1. **[关闭 GPU 加速](#1-关闭-gpu-加速)**，此办法简单方便。**（有核显也可用核显的 GPU 加速，亦能解决。）**
@zh-hant 1. **[關閉 GPU 加速](#1-關閉-gpu-加速)**，此辦法簡單方便。**（有核顯也可用核顯的 GPU 加速，亦能解決。）**
@ja 1. **[GPU アクセラレーションを無効](#1-gpu-アクセラレーションを無効にする)**。簡単で効果的です。 **（内蔵 GPU アクセラレーションを使用しても機能します。）**
@ko 1. **[GPU 가속 비활성화](#1-gpu-가속-비활성화)**. 간단하고 효과적입니다. **(내장 GPU 가속 사용도 작동합니다.)**
@de 1. **[GPU-Beschleunigung deaktivieren](#1-gpu-beschleunigung-deaktivieren)**. Einfach und effektiv. **(Verwendung von integrierter GPU-Beschleunigung funktioniert auch.)**
@fr 1. **[Désactiver l'accélération GPU](#1-désactiver-l-accélération-gpu)**. Simple et efficace. **(Utiliser l'accélération GPU intégrée fonctionne aussi.)**
@ru 1. **[Отключить ускорение GPU](#1-отключить-аппаратное-ускорение-gpu)**. Просто и эффективно. **(Использование ускорения встроенного GPU также работает.)**

@en 2. To solve **while keeping GPU acceleration enabled**, modify OpenGL settings.
@zh 2. 如果需要在**保证 GPU 加速功能正常启用的情况下**解决此问题，则需要修改 OpenGL 设置。
@zh-hant 2. 如果需要在**保證 GPU 加速功能正常啟用的情況下**解決此問題，則需要修改 OpenGL 設定。
@ja 2. **GPU アクセラレーションを有効にしたまま**解決するには、OpenGL 設定を変更します。
@ko 2. **GPU 가속을 활성화한 상태로 유지하면서** 해결하려면 OpenGL 설정을 수정하십시오.
@de 2. Um **mit aktivierter GPU-Beschleunigung** zu lösen, OpenGL-Einstellungen ändern.
@fr 2. Pour résoudre **tout en gardant l'accélération GPU activée**, modifiez les paramètres OpenGL.
@ru 2. Чтобы решить **при сохранении включенного ускорения GPU**, измените настройки OpenGL.

@en     Go to [Internal Preferences](#accessing-vegas-internal-preferences), search for **`Enable OpenCL/GL Interop`**, set to **`FALSE`**.
@zh     进入 [内部首选项](#vegas-内部首选项的进入方法)，搜索并找到 **`Enable OpenCL/GL Interop`**，改成 **`FALSE`**。
@zh-hant     進入 [內部首選項](#vegas-內部首選項的進入方法)，搜尋並找到 **`Enable OpenCL/GL Interop`**，改成 **`FALSE`**。
@ja     [内部プリファレンス](#vegas-内部プリファレンスへのアクセス)に移動し、 **`Enable OpenCL/GL Interop`** を検索し、 **`FALSE`** に設定します。
@ko     [내부 환경설정 접근](#vegas-내부-환경설정-접근)으로 이동하여 **`Enable OpenCL/GL Interop`** 를 검색하고 **`FALSE`** 로 설정하십시오.
@de     Gehen Sie zu [Interne Einstellungen](#auf-die-internen-vegas-einstellungen-zugreifen), suchen Sie nach **`Enable OpenCL/GL Interop`**, setzen Sie auf **`FALSE`**.
@fr     Allez dans [Préférences internes](#accéder-aux-préférences-internes-vegas), recherchez **`Enable OpenCL/GL Interop`**, définissez sur **`FALSE`**.
@ru     Перейдите в [Внутренние настройки](#доступ-к-внутренним-настройкам-vegas), найдите **`Enable OpenCL/GL Interop`**, установите в **`FALSE`**.

@en     Alternatively, change settings in the **Nvidia Control Panel**:
@zh     或者也可以在 **N 卡控制面板**中更改相关设置，具体操作如下：
@zh-hant     或者也可以在 **N 卡控制面板**中更改相關設定，具體操作如下：
@ja     または、 **Nvidia コントロールパネル** の設定を変更します：
@ko     또는 **Nvidia 제어판**에서 설정을 변경하십시오:
@de     Alternativ, ändern Sie Einstellungen in der **Nvidia Systemsteuerung**:
@fr     Alternativement, changez les paramètres dans le **Panneau de configuration Nvidia** :
@ru     Или измените настройки в **Панели управления Nvidia**:

@en     Open **NVIDIA Control Panel**, click **`Manage 3D settings`** on the left, switch to the **`Program Settings`** tab on the right. Click `Add`, select the VEGAS executable, and change **`OpenGL GDI compatibility`** from `Use global setting` to **`Prefer compatibility`**. Restart VEGAS. (If you have multiple VEGAS versions, set each separately.)
@zh     打开 **NVIDIA 控制面板**，点击左侧的 **`管理 3D 设置`**，在右侧切换到 **`程序设置`** 选项卡。在 `自定义程序` 那一栏中点击 `添加`，选择 Vegas 主程序并确定，将下方的 **`OpenGL GDI 兼容性`** 功能设置，从 `使用全局设置` 更改到 **`优先兼容性`**，然后重新运行 Vegas 程序，即可解决此问题。（如果电脑里有多个 Vegas 版本，则需要分别设置。）
@zh-hant     開啟 **NVIDIA 控制面板**，點選左側的 **`管理 3D 設定`**，在右側切換到 **`程式設定`** 選項卡。在 `自定義程式` 那一欄中點選 `添加`，選擇 Vegas 主程式並確定，將下方的 **`OpenGL GDI 相容性`** 功能設定，從 `使用全域設定` 更改到 **`優先相容性`**，然後重新執行 Vegas 程式，即可解決此問題。（如果電腦裡有多個 Vegas 版本，則需要分別設定。）
@ja     **NVIDIA コントロールパネル**を開き、左の **`3D 設定の管理`** をクリックし、右側の **`プログラム設定`** タブに切り替えます。 `追加` をクリックし、VEGAS 実行可能ファイルを選択し、 **`OpenGL GDI 互換性`** を `グローバル設定を使用` から **`互換性を優先`** に変更します。VEGAS を再起動します。（複数の VEGAS バージョンがある場合は、それぞれ個別に設定します。）
@ko     **NVIDIA 제어판**을 열고 왼쪽에서 **`3D 설정 관리`** 를 클릭하고 오른쪽에서 **`프로그램 설정`** 탭으로 전환합니다. `추가`를 클릭하고 VEGAS 실행 파일을 선택하고 **`OpenGL GDI 호환성`** 을 `전역 설정 사용`에서 **`호환성 우선`** 으로 변경합니다. VEGAS를 다시 시작합니다. (여러 VEGAS 버전이 있는 경우 각각 별도로 설정하십시오.)
@de     Öffnen Sie **NVIDIA Systemsteuerung**, klicken Sie links auf **`3D-Einstellungen verwalten`**, wechseln Sie rechts zum Tab **`Programmeinstellungen`**. Klicken Sie `Hinzufügen`, wählen Sie die VEGAS ausführbare Datei, und ändern Sie **`OpenGL GDI-Kompatibilität`** von `Globale Einstellung verwenden` zu **`Kompatibilität bevorzugen`**. Starten Sie VEGAS neu. (Wenn Sie mehrere VEGAS-Versionen haben, setzen Sie jede separat.)
@fr     Ouvrez **Panneau de configuration NVIDIA**, cliquez sur **`Gérer les paramètres 3D`** à gauche, passez à l'onglet **`Paramètres du programme`** à droite. Cliquez `Ajouter`, sélectionnez l'exécutable VEGAS, et changez **`Compatibilité OpenGL GDI`** de `Utiliser le paramètre global` à **`Préférer la compatibilité`**. Redémarrez VEGAS. (Si vous avez plusieurs versions VEGAS, définissez chacune séparément.)
@ru     Откройте **Панель управления NVIDIA**, нажмите **`Управление 3D-настройками (Manage 3D settings)`** слева, переключитесь на вкладку **`Настройки программы (Program Settings)`** справа. Нажмите `Добавить (Add)`, выберите исполняемый файл VEGAS и измените **`Совместимость OpenGL GDI (OpenGL GDI compatibility)`** с `Использовать глобальные настройки (Use global setting)` на **`Предпочитать совместимость (Prefer compatibility)`**. Перезапустите VEGAS. (Если у вас несколько версий VEGAS, установите для каждой отдельно.)

<ImageOnDemand src="vegtips/image022_nvidia_opengl.png" />

@en 3. Roll back Nvidia driver to `522.30` or earlier, or update to the latest. When reinstalling, **choose "Custom" installation** and check **`Perform a clean installation`**. This resets all driver settings to default, so **not recommended**.
@zh 3. 将 N 卡驱动的版本回退至 `522.30` 及以前，或更新至最新版。重装驱动时，**必须选择“自定义”安装**，并且勾选 **`执行清洁安装`** 选项。此选项会将 N 卡驱动的所有配置选项全部恢复为默认值，因此**不建议使用此办法**。
@zh-hant 3. 將 N 卡驅動的版本回退至 `522.30` 及以前，或更新至最新版。重裝驅動時，**必須選擇“自訂”安裝**，並且勾選 **`執行清潔安裝`** 選項。此選項會將 N 卡驅動的所有配置選項全部恢復為預設值，因此**不建議使用此辦法**。
@ja 3. Nvidia ドライバーを `522.30` 以前にロールバックするか、最新版に更新します。再インストール時は、 **「カスタム」インストールを選択**し、 **`クリーンインストールを実行する`** をチェックします。これによりすべてのドライバー設定がデフォルトにリセットされるため、**推奨しません**。
@ko 3. Nvidia 드라이버를 `522.30` 이하로 롤백하거나 최신으로 업데이트하십시오. 다시 설치할 때 **"사용자 정의" 설치를 선택**하고 **`깨끗한 설치 수행`** 을 선택하십시오. 이렇게 하면 모든 드라이버 설정이 기본값으로 재설정되므로 **권장되지 않습니다**.
@de 3. Nvidia-Treiber auf `522.30` oder früher zurückrollen, oder auf die neueste aktualisieren. Bei Neuinstallation **wählen Sie "Benutzerdefiniert" Installation** und aktivieren **`Saubere Installation durchführen`**. Dies setzt alle Treibereinstellungen auf Standard zurück, daher **nicht empfohlen**.
@fr 3. Revenir au pilote Nvidia `522.30` ou antérieur, ou mettre à jour vers le plus récent. Lors de la réinstallation, **choisissez l'installation "Personnalisée"** et cochez **`Effectuer une installation propre`**. Cela réinitialise tous les paramètres du pilote par défaut, donc **non recommandé**.
@ru 3. Откатите драйвер Nvidia до `522.30` или ранее или обновите до последнего. При переустановке **выберите «Выборочная» установку** и установите флажок **`Выполнить чистую установку (Perform a clean installation)`**. Это сбрасывает все настройки драйвера к значениям по умолчанию, поэтому **не рекомендуется**.

@en Reference: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/problems-with-nvidia-driver-526-98--138196/
@zh 参见：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/problems-with-nvidia-driver-526-98--138196/
@zh-hant 參見：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/problems-with-nvidia-driver-526-98--138196/
@ja 参照： https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/problems-with-nvidia-driver-526-98--138196/
@ko 참조: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/problems-with-nvidia-driver-526-98--138196/
@de Referenz: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/problems-with-nvidia-driver-526-98--138196/
@fr Référence : https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/problems-with-nvidia-driver-526-98--138196/
@ru Ссылка: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/problems-with-nvidia-driver-526-98--138196/

<br>

@en ## VIII. Rendering Related
@zh ## 八、渲染相关
@zh-hant ## 八、算繪相關
@ja ## 八、レンダリング関連
@ko ## VIII. 렌더링 관련
@de ## VIII. Rendering bezogen
@fr ## VIII. Rendu
@ru ## VIII. Связанное с рендерингом

@en ### Recommended Render Plugin: Voukoder
@zh ### 渲染插件 Voukoder 推荐
@zh-hant ### 算繪外掛程式 Voukoder 推薦
@ja ### 推奨レンダープラグイン：Voukoder
@ko ### 권장 렌더링 플러그인: Voukoder
@de ### Empfohlenes Render-Plugin: Voukoder
@fr ### Plugin de rendu recommandé : Voukoder
@ru ### Рекомендуемый плагин рендеринга: Voukoder

@en When using VEGAS's built-in render templates, we often **need to constantly adjust resolution, frame rate, bitrate, etc.**, to match the project properties and achieve desired quality. However, there's a render plugin that **automatically matches resolution/frame rate to project properties and supports advanced CRF/CQP parameters for bitrate control**, allowing rendering **with less manual parameter tweaking**. This plugin is **Voukoder**.
@zh 在使用 Vegas 自带的渲染模板时，我们**通常需要不断地更改分辨率、帧率、码率等参数**，使得渲染模板匹配原工程的项目属性，并且达到预期的码率效果。但有这么一个渲染插件，可以使渲染模板的分辨率、帧率等参数**自动匹配项目属性，并且支持使用更高级的 CRF、CQP 等参数来控制码率**，在**不需要太操心渲染参数**的前提下完成渲染操作。这个渲染插件就是 **Voukoder**。
@zh-hant 在使用 Vegas 自帶的算繪範本時，我們**通常需要不斷地更改解析度、幀率、位元速率等參數**，使得算繪範本匹配原工程的專案屬性，並且達到預期的位元速率效果。但有這麼一個算繪外掛程式，可以使算繪範本的解析度、幀率等參數**自動匹配專案屬性，並且支援使用更高級的 CRF、CQP 等參數來控制位元速率**，在**不需要太操心算繪參數**的前提下完成算繪操作。這個算繪外掛程式就是 **Voukoder**。
@ja VEGAS の組み込みレンダーテンプレートを使用する場合、**解像度、フレームレート、ビットレートなどを常に調整する必要があり**、プロジェクトプロパティに合わせ、望ましい品質を達成する必要があります。しかし、**解像度/フレームレートを自動的にプロジェクトプロパティに一致させ、高度な CRF/CQP パラメーターによるビットレート制御をサポート**し、**手動パラメータ調整を少なくしてレンダリング**できるレンダープラグインがあります。このプラグインは **Voukoder** です。
@ko VEGAS의 내장 렌더링 템플릿을 사용할 때 **해상도, 프레임 속도, 비트레이트 등을 지속적으로 조정해야 하는 경우가 많습니다**. 프로젝트 속성과 일치시키고 원하는 품질을 얻기 위해서입니다. 그러나 **해상도/프레임 속도를 프로젝트 속성에 자동으로 일치시키고 비트레이트 제어를 위한 고급 CRF/CQP 매개변수를 지원하는** 렌더링 플러그인이 있어 **수동 매개변수 조정을 덜 신경쓰면서** 렌더링할 수 있습니다. 이 플러그인은 **Voukoder**입니다.
@de Bei der Verwendung der eingebauten Render-Vorlagen von VEGAS müssen wir **ständig Auflösung, Framerate, Bitrate usw. anpassen**, um die Projekt-Eigenschaften abzugleichen und die gewünschte Qualität zu erreichen. Es gibt jedoch ein Render-Plugin, das **Auflösung/Framerate automatisch an Projekteigenschaften anpasst und erweiterte CRF/CQP-Parameter für Bitratenkontrolle unterstützt**, was das Rendering **mit weniger manueller Parameteranpassung** ermöglicht. Dieses Plugin ist **Voukoder**.
@fr Lors de l'utilisation des modèles de rendu intégrés de VEGAS, nous **devons souvent constamment ajuster la résolution, le taux de trame, le débit, etc.**, pour correspondre aux propriétés du projet et atteindre la qualité souhaitée. Cependant, il existe un plugin de rendu qui **correspond automatiquement la résolution/taux de trame aux propriétés du projet et supporte les paramètres CRF/CQP avancés pour le contrôle du débit**, permettant le rendu **avec moins d'ajustements manuels de paramètres**. Ce plugin est **Voukoder**.
@ru При использовании встроенных шаблонов рендеринга VEGAS нам часто **нужно постоянно настраивать разрешение, частоту кадров, битрейт и т.д.**, чтобы соответствовать свойствам проекта и достичь желаемого качества. Однако есть плагин рендеринга, который **автоматически сопоставляет разрешение/частоту кадров со свойствами проекта и поддерживает расширенные параметры CRF/CQP для управления битрейтом**, позволяя рендерить **с меньшим количеством ручной настройки параметров**. Этот плагин — **Voukoder**.

<ImageOnDemand src="vegtips/image023_voukoder_classic.png" />

@en Two versions: Voukoder Classic and Voukoder Pro.
@zh Voukoder 一共有两个版本：Voukoder Classic 和 Voukoder Pro。
@zh-hant Voukoder 一共有兩個版本：Voukoder Classic 和 Voukoder Pro。
@ja 2 つのバージョン：Voukoder Classic と Voukoder Pro。
@ko 두 버전: Voukoder Classic 및 Voukoder Pro.
@de Zwei Versionen: Voukoder Classic und Voukoder Pro.
@fr Deux versions : Voukoder Classic et Voukoder Pro.
@ru Две версии: Voukoder Classic и Voukoder Pro.

@en - Voukoder Classic is free, supports VP12-VP22, but was removed by the original author Vouk.
@zh - Voukoder Classic 是免费的，支持 Vegas Pro 12 ~ 22，但是已经被原作者 Vouk 删库了。
@zh-hant - Voukoder Classic 是免費的，支援 Vegas Pro 12 ~ 22，但是已經被原作者 Vouk 刪庫了。
@ja - Voukoder Classic は無料で、VP12-VP22 をサポートしますが、原作者 Vouk によって削除されました。
@ko - Voukoder Classic은 무료이며 VP12-VP22를 지원하지만 원작자 Vouk에 의해 삭제되었습니다.
@de - Voukoder Classic ist kostenlos, unterstützt VP12-VP22, aber wurde vom Originalautor Vouk entfernt.
@fr - Voukoder Classic est gratuit, supporte VP12-VP22, mais a été retiré par l'auteur original Vouk.
@ru - Voukoder Classic бесплатен, поддерживает VP12-VP22, но был удален оригинальным автором Vouk.

@en   User backups on GitHub:
@zh   有其他用户做了 GitHub 仓库备份：
@zh-hant   有其他使用者做了 GitHub 倉庫備份：
@ja   GitHub でのユーザーバックアップ：
@ko   GitHub의 사용자 백업:
@de   Benutzer-Backups auf GitHub:
@fr   Sauvegardes utilisateur sur GitHub :
@ru   Пользовательские резервные копии на GitHub:

@en   - [https://github.com/FORARTfe/voukoderFREE](https://github.com/FORARTfe/voukoderFREE)
@zh   - [https://github.com/FORARTfe/voukoderFREE](https://github.com/FORARTfe/voukoderFREE)
@zh-hant   - [https://github.com/FORARTfe/voukoderFREE](https://github.com/FORARTfe/voukoderFREE)
@ja   - [https://github.com/FORARTfe/voukoderFREE](https://github.com/FORARTfe/voukoderFREE)
@ko   - [https://github.com/FORARTfe/voukoderFREE](https://github.com/FORARTfe/voukoderFREE)
@de   - [https://github.com/FORARTfe/voukoderFREE](https://github.com/FORARTfe/voukoderFREE)
@fr   - [https://github.com/FORARTfe/voukoderFREE](https://github.com/FORARTfe/voukoderFREE)
@ru   - [https://github.com/FORARTfe/voukoderFREE](https://github.com/FORARTfe/voukoderFREE)

@en   - [https://github.com/FORARTfe/voukoder-connectorsFREE](https://github.com/FORARTfe/voukoder-connectorsFREE)
@zh   - [https://github.com/FORARTfe/voukoder-connectorsFREE](https://github.com/FORARTfe/voukoder-connectorsFREE)
@zh-hant   - [https://github.com/FORARTfe/voukoder-connectorsFREE](https://github.com/FORARTfe/voukoder-connectorsFREE)
@ja   - [https://github.com/FORARTfe/voukoder-connectorsFREE](https://github.com/FORARTfe/voukoder-connectorsFREE)
@ko   - [https://github.com/FORARTfe/voukoder-connectorsFREE](https://github.com/FORARTfe/voukoder-connectorsFREE)
@de   - [https://github.com/FORARTfe/voukoder-connectorsFREE](https://github.com/FORARTfe/voukoder-connectorsFREE)
@fr   - [https://github.com/FORARTfe/voukoder-connectorsFREE](https://github.com/FORARTfe/voukoder-connectorsFREE)
@ru   - [https://github.com/FORARTfe/voukoder-connectorsFREE](https://github.com/FORARTfe/voukoder-connectorsFREE)

@en   Requires installing both the Voukoder core (e.g., `Voukoder 13.4.1`) and the connector (e.g., `connector-vegas22-1.0.0.msi`).
@zh   需要同时安装 Voukoder 本体（比如 `Voukoder 13.4.1`）和 Voukoder 连接器（比如 `connector-vegas22-1.0.0.msi`）。
@zh-hant   需要同時安裝 Voukoder 本體（比如 `Voukoder 13.4.1`）和 Voukoder 連接器（比如 `connector-vegas22-1.0.0.msi`）。
@ja   Voukoder コア（例：`Voukoder 13.4.1`）とコネクター（例：`connector-vegas22-1.0.0.msi`）の両方をインストールする必要があります。
@ko   Voukoder 코어(예: `Voukoder 13.4.1`)와 커넥터(예: `connector-vegas22-1.0.0.msi`)를 모두 설치해야 합니다.
@de   Erfordert Installation sowohl des Voukoder-Kerns (z. B. `Voukoder 13.4.1`) als auch des Konnektors (z. B. `connector-vegas22-1.0.0.msi`).
@fr   Nécessite d'installer à la fois le noyau Voukoder (par ex. `Voukoder 13.4.1`) et le connecteur (par ex. `connector-vegas22-1.0.0.msi`).
@ru   Требуется установка как ядра Voukoder (например, `Voukoder 13.4.1`), так и коннектора (например, `connector-vegas22-1.0.0.msi`).

@en - Voukoder Pro is currently paid. Official site: [https://www.voukoder.org/](https://www.voukoder.org/).
@zh - Voukoder Pro 目前是付费的，官网链接为：[https://www.voukoder.org/](https://www.voukoder.org/)。
@zh-hant - Voukoder Pro 目前是付費的，官網連結為：[https://www.voukoder.org/](https://www.voukoder.org/)。
@ja - Voukoder Pro は現在有料です。公式サイト： [https://www.voukoder.org/](https://www.voukoder.org/)。
@ko - Voukoder Pro는 현재 유료입니다. 공식 사이트: [https://www.voukoder.org/](https://www.voukoder.org/).
@de - Voukoder Pro ist derzeit kostenpflichtig. Offizielle Seite: [https://www.voukoder.org/](https://www.voukoder.org/).
@fr - Voukoder Pro est actuellement payant. Site officiel : [https://www.voukoder.org/](https://www.voukoder.org/).
@ru - Voukoder Pro в настоящее время платный. Официальный сайт: [https://www.voukoder.org/](https://www.voukoder.org/).

@en   - Voukoder Pro 1 was once free, but Voukoder Pro 2 became paid, with each major version requiring a separate purchase.
@zh   - Voukoder Pro 1 曾经宣称免费，但自 Voukoder Pro 2 开始转为付费软件，并且每一个大版本都需要额外付钱。
@zh-hant   - Voukoder Pro 1 曾經宣稱免費，但自 Voukoder Pro 2 開始轉為付費軟體，並且每一個大版本都需要額外付錢。
@ja   - Voukoder Pro 1 はかつて無料でしたが、Voukoder Pro 2 は有料になり、各メジャーバージョンで別途購入が必要です。
@ko   - Voukoder Pro 1은 한때 무료였지만 Voukoder Pro 2는 유료가 되었으며 각 메이저 버전마다 별도로 구매해야 합니다.
@de   - Voukoder Pro 1 war einmal kostenlos, aber Voukoder Pro 2 wurde kostenpflichtig, wobei jede Hauptversion einen separaten Kauf erfordert.
@fr   - Voukoder Pro 1 a été gratuit, mais Voukoder Pro 2 est devenu payant, chaque version majeure nécessitant un achat séparé.
@ru   - Voukoder Pro 1 когда-то был бесплатным, но Voukoder Pro 2 стал платным, причем каждая основная версия требует отдельной покупки.

@en Other similar plugins include [DebugMode FrameServer](http://www.debugmode.com/frameserver.html) and [MagicYUV](https://www.magicyuv.com/). I don't use them often; they might suit more advanced users.
@zh 还有其他类似于 Voukoder 的渲染插件，比如 [DebugMode FrameServer](http://www.debugmode.com/frameserver.html) 和 [MagicYUV](https://www.magicyuv.com/)。这两款渲染插件我不太用，可能会适用于更专业的用户。
@zh-hant 還有其他類似於 Voukoder 的算繪外掛程式，比如 [DebugMode FrameServer](http://www.debugmode.com/frameserver.html) 和 [MagicYUV](https://www.magicyuv.com/)。這兩款算繪外掛程式我不太用，可能會適用於更專業的使用者。
@ja その他の類似プラグインには [DebugMode FrameServer](http://www.debugmode.com/frameserver.html) と [MagicYUV](https://www.magicyuv.com/) があります。私はあまり使用しません。より高度なユーザー向けかもしれません。
@ko 다른 유사한 플러그인으로는 [DebugMode FrameServer](http://www.debugmode.com/frameserver.html) 및 [MagicYUV](https://www.magicyuv.com/)가 있습니다. 자주 사용하지 않으며 더 고급 사용자에게 적합할 수 있습니다.
@de Andere ähnliche Plugins sind [DebugMode FrameServer](http://www.debugmode.com/frameserver.html) und [MagicYUV](https://www.magicyuv.com/). Ich verwende sie nicht oft; sie könnten für fortgeschrittene Benutzer geeignet sein.
@fr D'autres plugins similaires incluent [DebugMode FrameServer](http://www.debugmode.com/frameserver.html) et [MagicYUV](https://www.magicyuv.com/). Je ne les utilise pas souvent ; ils pourraient convenir à des utilisateurs plus avancés.
@ru Другие подобные плагины включают [DebugMode FrameServer](http://www.debugmode.com/frameserver.html) и [MagicYUV](https://www.magicyuv.com/). Я не часто ими пользуюсь; они могут подойти более продвинутым пользователям.

<br>

@en ### General Troubleshooting for Render Crashes/Freezes/Errors
@zh ### 渲染时崩溃/假死/渲染错误，无法正常渲染出视频文件，一般的处理思路
@zh-hant ### 算繪時崩潰/假死/算繪錯誤，無法正常算繪出影片檔案，一般的處理思路
@ja ### レンダリング時のクラッシュ/フリーズ/エラーの一般的なトラブルシューティング
@ko ### 렌더링 크래시/정지/오류에 대한 일반적인 문제 해결
@de ### Allgemeine Fehlerbehandlung für Render-Abstürze/Einfrieren/Fehler
@fr ### Dépannage général pour les plantages/blocages/erreurs de rendu
@ru ### Общие методы устранения неполадок: сбои/зависания/ошибки при рендеринге

@en - Render Crash: VEGAS **suddenly goes white and crashes with an error** during rendering.
@zh - 渲染崩溃：渲染途中软件**突然发白，报错崩溃**。
@zh-hant - 算繪崩潰：算繪途中軟體**突然發白，報錯崩潰**。
@ja - レンダリングクラッシュ：レンダリング中に VEGAS が**突然白くなり、エラーでクラッシュ**。
@ko - 렌더링 크래시: 렌더링 중 VEGAS가 **갑자기 하얗게 변하고 오류와 함께 크래시**됩니다.
@de - Render-Absturz: VEGAS **wird plötzlich weiß und stürzt mit einem Fehler ab** während des Renderns.
@fr - Plantage de rendu : VEGAS **devient soudainement blanc et plante avec une erreur** pendant le rendu.
@ru - Сбой рендеринга: VEGAS **внезапно становится белым и аварийно завершает работу с ошибкой** во время рендеринга.

@en - Render Freeze: **Progress bar stops moving**, CPU/GPU usage in Task Manager is low, **clicking "Cancel" doesn't work**, forcing you to kill VEGAS via Task Manager.
@zh - 渲染假死：渲染途中**进度条突然不动**，任务管理器中 CPU 和 GPU 的利用率很低，**点击“取消”后无法正常取消渲染，只能通过任务管理器强行杀除 Vegas 进程**。
@zh-hant - 算繪假死：算繪途中**進度條突然不動**，工作管理員中 CPU 和 GPU 的利用率很低，**點選“取消”後無法正常取消算繪，只能通過工作管理員強行殺除 Vegas 程序**。
@ja - レンダリングフリーズ：**進行バーが動かなくなり**、タスクマネージャーの CPU/GPU 使用率が低く、**「キャンセル」をクリックしても機能せず**、タスクマネージャーで VEGAS を強制終了する必要がある。
@ko - 렌더링 정지: **진행률 표시줄이 멈춤**, 작업 관리자의 CPU/GPU 사용률이 낮음, **"취소" 클릭이 작동하지 않음**, 작업 관리자를 통해 VEGAS를 강제 종료해야 합니다.
@de - Render-Einfrieren: **Fortschrittsbalken bewegt sich nicht**, CPU/GPU-Auslastung im Task-Manager ist niedrig, **Klicken auf "Abbrechen" funktioniert nicht**, zwingt Sie, VEGAS über den Task-Manager zu beenden.
@fr - Blocage de rendu : **La barre de progression s'arrête**, l'utilisation CPU/GPU dans le Gestionnaire des tâches est faible, **cliquer sur "Annuler" ne fonctionne pas**, vous forçant à tuer VEGAS via le Gestionnaire des tâches.
@ru - Зависание рендеринга: **Полоса прогресса перестает двигаться**, использование ЦП/ГП в Диспетчере задач низкое, **нажатие «Отмена (Cancel)» не работает**, вынуждая завершить VEGAS через Диспетчер задач.

@en - Render Error: Rendered video has **flickering frames/green screens**.
@zh - 渲染错误：渲染后有**闪帧、闪绿屏**等情况。
@zh-hant - 算繪錯誤：算繪後有**閃幀、閃綠屏**等情況。
@ja - レンダリングエラー：レンダリングされたビデオに**フレーム点滅/グリーンスクリーン**がある。
@ko - 렌더링 오류: 렌더링된 비디오에 **깜박이는 프레임/녹색 화면**이 있습니다.
@de - Render-Fehler: Gerenderte Videos haben **flackernde Frames/grüne Bildschirme**.
@fr - Erreur de rendu : La vidéo rendue a **des images clignotantes/écrans verts**.
@ru - Ошибка рендеринга: В отрендеренном видео есть **мерцающие кадры/зеленые экраны**.

@en **Before rendering, ensure:**
@zh 渲染前应该做的事：
@zh-hant 算繪前應該做的事：
@ja **レンダリング前の確認：**
@ko **렌더링 전에 다음을 확인하십시오:**
@de **Vor dem Rendern sicherstellen:**
@fr **Avant de rendre, assurez-vous :**
@ru **Перед рендерингом убедитесь:**

@en - Project Properties and Render Template don't have problematic values. E.g., **Field order is progressive**, **width/height divisible by 4** (some encoders use 4x4 blocks), **frame rate is common** (especially strange decimals, aside from standard `23.976`, `29.97`, `59.94`).
@zh - 确保项目属性和渲染模板中没有会导致问题的值。比如**场顺序是否是逐行扫描**、**宽高值是否能被 `4` 整除**（一些编码器的最小单位是 `4*4`）、**帧率是否是常见帧率**（尤其是莫名其妙带小数点的，除了那些常规的 `23.976`、`29.97`、`59.94` 以外）。
@zh-hant - 確保專案屬性和算繪範本中沒有會導致問題的值。比如**場順序是否是逐行掃描**、**寬高值是否能被 `4` 整除**（一些編碼器的最小單位是 `4*4`）、**幀率是否是常見幀率**（尤其是莫名其妙帶小數點的，除了那些常規的 `23.976`、`29.97`、`59.94` 以外）。
@ja - プロジェクトプロパティとレンダーテンプレートに問題のある値がないか。例：**フィールド順序がプログレッシブ**、**幅/高さが 4 で割り切れる**（一部エンコーダーは 4x4 ブロックを使用）、**フレームレートが一般的**（標準的な `23.976`、`29.97`、`59.94` を除く、奇妙な小数点など）。
@ko - 프로젝트 속성 및 렌더링 템플릿에 문제가 있는 값이 없습니다. 예: **필드 순서가 프로그레시브**, **너비/높이가 4로 나누어짐** (일부 인코더는 4x4 블록 사용), **프레임 속도가 일반적** (특히 이상한 소수점, 표준 `23.976`, `29.97`, `59.94` 제외).
@de - Projekteigenschaften und Render-Vorlage haben keine problematischen Werte. Z. B. **Feldreihenfolge ist progressiv**, **Breite/Höhe durch 4 teilbar** (einige Encoder verwenden 4x4-Blöcke), **Framerate ist üblich** (besonders seltsame Dezimalzahlen, abgesehen von Standard `23.976`, `29.97`, `59.94`).
@fr - Les Propriétés du projet et le Modèle de rendu n'ont pas de valeurs problématiques. Par ex. **L'ordre des champs est progressif**, **largeur/hauteur divisible par 4** (certains encodeurs utilisent des blocs 4x4), **taux de trame commun** (surtout les décimaux étranges, à part les standards `23.976`, `29.97`, `59.94`).
@ru - Свойства проекта и шаблон рендеринга не имеют проблемных значений. Например, **порядок полей — чересстрочный (progressive)**, **ширина/высота кратны 4** (некоторые кодировщики используют блоки 4x4), **частота кадров распространенная** (особенно странные десятичные, помимо стандартных `23.976`, `29.97`, `59.94`).

@en - **Render template matches Project Properties exactly**. Mismatch can cause issues like Sapphire plugin position offset.
@zh - **确保渲染模板和项目属性完全一致**，比如渲染模板的宽高不与项目属性一致，会导致蓝宝石插件的位置偏移问题。
@zh-hant - **確保算繪範本和專案屬性完全一致**，比如算繪範本的寬高不與專案屬性一致，會導致藍寶石外掛程式的位置偏移問題。
@ja - **レンダーテンプレートがプロジェクトプロパティと完全に一致**。不一致は Sapphire プラグイン位置オフセットなどの問題を引き起こす可能性があります。
@ko - **렌더링 템플릿이 프로젝트 속성과 정확히 일치합니다**. 불일치는 Sapphire 플러그인 위치 오프셋과 같은 문제를 일으킬 수 있습니다.
@de - **Render-Vorlage stimmt genau mit Projekteigenschaften überein**. Fehlanpassung kann Probleme wie Sapphire-Plugin-Positionsversatz verursachen.
@fr - **Le modèle de rendu correspond exactement aux Propriétés du projet**. Un désaccord peut causer des problèmes comme le décalage de position du plugin Sapphire.
@ru - **Шаблон рендеринга точно соответствует Свойствам проекта**. Несоответствие может вызвать такие проблемы, как смещение позиции плагина Sapphire.

@en - When modifying bitrate in built-in templates, ensure **Maximum bitrate is larger than Average**, not equal.
@zh - 在修改自带渲染模板的码率时，一定要保证**码率最大值比平均值大一些**，不能设置成一样的。
@zh-hant - 在修改自帶算繪範本的位元速率時，一定要保證**位元速率最大值比平均值大一些**，不能設定成一樣的。
@ja - 組み込みテンプレートでビットレートを変更する場合、**最大ビットレートが平均より大きい**ことを確認。等しくしない。
@ko - 내장 템플릿에서 비트레이트를 수정할 때 **최대 비트레이트가 평균보다 큼**, 같지 않음.
@de - Wenn Sie Bitrate in eingebauten Vorlagen ändern, stellen Sie sicher, dass **Maximale Bitrate größer als Durchschnitt** ist, nicht gleich.
@fr - Lors de la modification du débit dans les modèles intégrés, assurez-vous que **le débit maximum est plus grand que la moyenne**, pas égal.
@ru - При изменении битрейта во встроенных шаблонах убедитесь, что **Максимальный битрейт больше Среднего**, а не равен.

@en 1.  If render crashes with an **error pop-up**, see [Disable VEGAS Error Reporting Pop-up](#2-disable-vegas-error-reporting-pop-up).
@zh 1. 渲染崩溃时，如有**报错弹窗**，见上文 [关闭 Vegas 的报错弹窗功能](#2-关闭-vegas-的报错弹窗功能)。
@zh-hant 1. 算繪崩潰時，如有**報錯彈窗**，見上文 [關閉 Vegas 的報錯彈窗功能](#2-關閉-vegas-的報錯彈窗功能)。
@ja 1.  レンダリングクラッシュで**エラーポップアップ**がある場合、[VEGAS エラー報告ポップアップを無効](#2-vegas-エラー報告ポップアップを無効にする)を参照。
@ko 1.  렌더링 크래시 시 **오류 팝업**이 있는 경우 [VEGAS 오류 보고 팝업 비활성화](#2-vegas-오류-보고-팝업-비활성화)를 참조하십시오.
@de 1.  Wenn Render mit einem **Fehler-Pop-up** abstürzt, siehe [VEGAS-Fehlerbericht-Pop-up deaktivieren](#2-vegas-fehlerbericht-pop-up-deaktivieren).
@fr 1.  Si le rendu plante avec une **fenêtre d'erreur**, voir [Désactiver la fenêtre contextuelle de rapport d'erreur VEGAS](#2-désactiver-la-fenêtre-contextuelle-de-rapport-d-erreur-vegas).
@ru 1.  Если рендеринг завершается сбоем с **всплывающим окном ошибки**, см. [Отключить всплывающее окно отчетов об ошибках VEGAS](#2-отключить-всплывающее-окно-отчетов-об-ошибках-vegas).

@en 2.  **[Disable GPU Acceleration](#1-disable-gpu-acceleration).**
@zh 2. **[关闭 GPU 加速](#1-关闭-gpu-加速)。**
@zh-hant 2. **[關閉 GPU 加速](#1-關閉-gpu-加速)。**
@ja 2.  **[GPU アクセラレーションを無効](#1-gpu-アクセラレーションを無効にする)。**
@ko 2.  **[GPU 가속 비활성화](#1-gpu-가속-비활성화).**
@de 2.  **[GPU-Beschleunigung deaktivieren](#1-gpu-beschleunigung-deaktivieren).**
@fr 2.  **[Désactiver l'accélération GPU](#1-désactiver-l-accélération-gpu).**
@ru 2.  **[Отключить ускорение GPU](#1-отключить-аппаратное-ускорение-gpu).**

@en 3.  **Change encoder in render template.**
@zh 3. **渲染模板换编码器。**
@zh-hant 3. **算繪範本換編碼器。**
@ja 3.  **レンダーテンプレートのエンコーダーを変更。**
@ko 3.  **렌더링 템플릿에서 인코더 변경.**
@de 3.  **Encoder in Render-Vorlage ändern.**
@fr 3.  **Changer l'encodeur dans le modèle de rendu.**
@ru 3.  **Изменить кодировщик в шаблоне рендеринга.**

<ImageOnDemand src="vegtips/image024_render_encoder.png" />

@en <p align="center">Available encoders depend on your GPU.</p>
@zh <p align="center">根据电脑的显卡配置，能使用的编码器可能会有所不同。</p>
@zh-hant <p align="center">根據電腦的顯示卡配置，能使用的編碼器可能會有所不同。</p>
@ja <p align="center">利用可能なエンコーダーは GPU に依存します。</p>
@ko <p align="center">사용 가능한 인코더는 GPU에 따라 다릅니다.</p>
@de <p align="center">Verfügbare Encoder hängen von Ihrer GPU ab.</p>
@fr <p align="center">Les encodeurs disponibles dépendent de votre GPU.</p>
@ru <p align="center">Доступные кодировщики зависят от вашего GPU.</p>

@en 4.  Modify the area around the frame where it freezes: delete FX, trim events, etc.
@zh 4. 修改卡住的那一帧附近，比如删减 FX、删减事件等。
@zh-hant 4. 修改卡住的那一幀附近，比如刪減 FX、刪減事件等。
@ja 4.  フリーズしたフレーム周辺を変更：FX 削除、イベントトリミングなど。
@ko 4.  정지 지점 주변의 영역 수정: FX 삭제, 이벤트 트리밍 등.
@de 4.  Den Bereich um den Frame ändern, wo es einfriert: FX löschen, Events trimmen usw.
@fr 4.  Modifier la zone autour de l'image où il se bloque : supprimer des FX, couper des événements, etc.
@ru 4.  Изменить область вокруг кадра, где он зависает: удалить FX, обрезать события и т.д.

@en 5.  Use a different render format (e.g., wmv).
@zh 5. 换其他渲染格式（wmv 格式等）。
@zh-hant 5. 換其他算繪格式（wmv 格式等）。
@ja 5.  別のレンダリング形式（例：wmv）を使用。
@ko 5.  다른 렌더링 형식 사용(예: wmv).
@de 5.  Ein anderes Render-Format verwenden (z. B. wmv).
@fr 5.  Utiliser un format de rendu différent (par ex. wmv).
@ru 5.  Использовать другой формат рендеринга (например, wmv).

@en   - Note: Default wmv template is: **resolution `1440*1080`, Pixel aspect ratio `1.3333`**. Although the final aspect ratio is 16:9, rendering directly with these parameters can cause issues. Manually change to **resolution `1920*1080`, Pixel aspect ratio `1`**.
@zh   - 注意，wmv 格式的默认渲染模板是：**分辨率 `1440*1080`，像素高宽比 `1.3333`**，虽然最后渲染出来的画幅仍为 16:9，但依照此参数直接渲染容易出现问题，应手动改成**分辨率 `1920*1080`，像素高宽比 `1`** 这样的常规参数。
@zh-hant   - 注意，wmv 格式的預設算繪範本是：**解析度 `1440*1080`，像素高寬比 `1.3333`**，雖然最後算繪出來的畫幅仍為 16:9，但依照此參數直接算繪容易出現問題，應手動改成**解析度 `1920*1080`，像素高寬比 `1`** 這樣的常規參數。
@ja   - 注：デフォルト wmv テンプレート：**解像度 `1440*1080`、ピクセルアスペクト比 `1.3333`**。最終アスペクト比は 16:9 ですが、これらのパラメーターで直接レンダリングすると問題が発生する可能性があります。手動で**解像度 `1920*1080`、ピクセルアスペクト比 `1`** に変更します。
@ko   - 참고: 기본 wmv 템플릿: **해상도 `1440*1080`, 픽셀 종횡비 `1.3333`**. 최종 종횡비는 16:9이지만 이러한 매개변수로 직접 렌더링하면 문제가 발생할 수 있습니다. 수동으로 **해상도 `1920*1080`, 픽셀 종횡비 `1`** 로 변경하십시오.
@de   - Hinweis: Standard wmv-Vorlage ist: **Auflösung `1440*1080`, Pixel-Seitenverhältnis `1.3333`**. Obwohl das finale Seitenverhältnis 16:9 ist, kann direktes Rendern mit diesen Parametern Probleme verursachen. Manuell ändern zu **Auflösung `1920*1080`, Pixel-Seitenverhältnis `1`**.
@fr   - Note : Le modèle wmv par défaut est : **résolution `1440*1080`, Ratio d'aspect des pixels `1.3333`**. Bien que le format d'image final soit 16:9, le rendu direct avec ces paramètres peut causer des problèmes. Changer manuellement en **résolution `1920*1080`, Ratio d'aspect des pixels `1`**.
@ru   - Примечание: Шаблон wmv по умолчанию: **разрешение `1440*1080`, соотношение сторон пикселей `1.3333`**. Хотя конечное соотношение сторон 16:9, рендеринг непосредственно с этими параметрами может вызвать проблемы. Вручную измените на **разрешение `1920*1080`, соотношение сторон пикселей `1`**.

@en 6.  **<sup>Recommended</sup> Render using [Voukoder](#recommended-render-plugin-voukoder).**
@zh 6. **<sup>推荐</sup>用 [Voukoder 渲染插件](#渲染插件-voukoder-推荐) 渲染。**
@zh-hant 6. **<sup>推薦</sup>用 [Voukoder 算繪外掛程式](#算繪外掛程式-voukoder-推薦) 算繪。**
@ja 6.  **<sup>推奨</sup> [Voukoder](#推奨レンダープラグイン-voukoder) を使用してレンダリング。**
@ko 6.  **<sup>권장</sup> [Voukoder](#권장-렌더링-플러그인-voukoder) 사용 렌더링.**
@de 6.  **<sup>Empfohlen</sup> Rendern mit [Voukoder](#empfohlenes-render-plugin-voukoder).**
@fr 6.  **<sup>Recommandé</sup> Rendre en utilisant [Voukoder](#plugin-de-rendu-recommandé-voukoder).**
@ru 6.  **<sup>Рекомендуется</sup> Рендерить с использованием [Voukoder](#рекомендуемый-плагин-рендеринга-voukoder).**

@en 7.  **<sup>Recommended</sup> Nest and Render.**
@zh 7. **<sup>推荐</sup>嵌套渲染法。**
@zh-hant 7. **<sup>推薦</sup>巢狀算繪法。**
@ja 7.  **<sup>推奨</sup> ネストしてレンダリング。**
@ko 7.  **<sup>권장</sup> 중첩 및 렌더링.**
@de 7.  **<sup>Empfohlen</sup> Verschachteln und Rendern.**
@fr 7.  **<sup>Recommandé</sup> Imbriquer et Rendre.**
@ru 7.  **<sup>Рекомендуется</sup> Вложенный рендеринг.**

@en   - Create a new project, **drag the original .veg file directly into it**. After proxy creation, render directly. Nested rendering is slower; low-spec PCs may struggle.
@zh   - 开一个新工程，**把原工程 veg 文件直接扔进去，等创建好代理以后直接渲染**。嵌套渲染会比常规渲染慢一些，如果电脑配置不够会很折磨。
@zh-hant   - 開一個新工程，**把原工程 veg 檔案直接扔進去，等建立好代理以後直接算繪**。巢狀算繪會比常規算繪慢一些，如果電腦配置不夠會很折磨。
@ja   - 新しいプロジェクトを作成し、**元の .veg ファイルを直接ドラッグ**。プロキシ作成後、直接レンダリングします。ネストレンダリングは遅いです。低スペック PC では苦戦する可能性があります。
@ko   - 새 프로젝트를 만들고 **원래 .veg 파일을 직접 끌어다 놓습니다**. 프록시 생성 후 직접 렌더링합니다. 중첩 렌더링은 더 느립니다. 저사양 PC는 어려울 수 있습니다.
@de   - Erstellen Sie ein neues Projekt, **ziehen Sie die Original-.veg-Datei direkt hinein**. Nach Proxy-Erstellung direkt rendern. Verschachteltes Rendern ist langsamer; PCs mit niedriger Ausstattung können Probleme haben.
@fr   - Créez un nouveau projet, **glissez directement le fichier .veg original dedans**. Après la création du proxy, rendez directement. Le rendu imbriqué est plus lent ; les PC bas de gamme peuvent avoir du mal.
@ru   - Создайте новый проект, **перетащите исходный файл .veg прямо в него**. После создания прокси рендерите напрямую. Вложенный рендеринг медленнее; компьютеры с низкими характеристиками могут не справиться.

@en 8.  Segment Rendering.
@zh 8. 分段渲染法。
@zh-hant 8. 分段算繪法。
@ja 8.  セグメントレンダリング。
@ko 8.  세그먼트 렌더링.
@de 8.  Segment-Rendering.
@fr 8.  Rendu segmenté.
@ru 8.  Сегментный рендеринг.

@en   - For freezes, **split the project into small segments, render separately**, then create a new project, **combine all segments and render again**.
@zh   - 渲染假死时，可以**将原工程“拆”成一小段一小段分别进行渲染**，再开一个新工程，把所有段落**拼接起来重新渲染一遍**。
@zh-hant   - 算繪假死時，可以**將原工程“拆”成一小段一小段分別進行算繪**，再開一個新工程，把所有段落**拼接起來重新算繪一遍**。
@ja   - フリーズの場合、**プロジェクトを小さなセグメントに分割し、個別にレンダリング**。その後、新しいプロジェクトを作成し、**すべてのセグメントを結合して再度レンダリング**。
@ko   - 정지의 경우 **프로젝트를 작은 세그먼트로 분할하여 별도로 렌더링한** 후 새 프로젝트를 만들어 **모든 세그먼트를 결합하고 다시 렌더링**합니다.
@de   - Für Einfrieren **teilen Sie das Projekt in kleine Segmente, rendern Sie separat**, dann erstellen Sie ein neues Projekt, **kombinieren Sie alle Segmente und rendern Sie erneut**.
@fr   - Pour les blocages, **divisez le projet en petits segments, rendez séparément**, puis créez un nouveau projet, **combinez tous les segments et rendez à nouveau**.
@ru   - При зависаниях **разделите проект на небольшие сегменты, рендерите отдельно**, затем создайте новый проект, **объедините все сегменты и снова отрендерите**.

@en   - For random render errors (e.g., first render has issue in first half, second render has issue in second half), you can combine the good halves from both renders.
@zh   - 如果不是渲染假死，而是随机的渲染错误，比如渲了两次，一次是前一段有问题后一段没有，一次是后一段有问题前一段没有问题，也可以把这两个段落拼起来重新渲染一遍。
@zh-hant   - 如果不是算繪假死，而是隨機的算繪錯誤，比如渲了兩次，一次是前一段有問題後一段沒有，一次是後一段有問題前一段沒有問題，也可以把這兩個段落拼起來重新算繪一遍。
@ja   - ランダムなレンダリングエラーの場合（例：1 回目は前半に問題、2 回目は後半に問題）、両方のレンダリングの良い半分を組み合わせることができます。
@ko   - 무작위 렌더링 오류의 경우(예: 첫 번째 렌더링이 전반부에 문제, 두 번째 렌더링이 후반부에 문제) 두 렌더링에서 좋은 부분을 결합할 수 있습니다.
@de   - Für zufällige Render-Fehler (z. B. erster Render hat Problem in erster Hälfte, zweiter Render hat Problem in zweiter Hälfte), können Sie die guten Hälften von beiden Renders kombinieren.
@fr   - Pour les erreurs de rendu aléatoires (par ex. premier rendu a un problème dans la première moitié, second rendu a un problème dans la seconde moitié), vous pouvez combiner les bonnes moitiés des deux rendus.
@ru   - При случайных ошибках рендеринга (например, первый рендер имеет проблему в первой половине, второй — во второй), вы можете объединить хорошие половины из обоих рендеров.

@en 9.  **Render Image Sequence**. Start rendering from where it froze. **This at least preserves rendered files.** Finally, **import the image sequence back into VEGAS and render it as a video**. After each sequence render, **output to a new folder** to avoid overwriting, as VEGAS always starts numbering from `000000`.
@zh 9. **渲染图像序列**，哪里卡住就从哪里开始重新渲染，**这样至少能保留已渲染文件**，最后再**以图像序列的形式导入进 Vegas 重新渲染一遍**。每渲染完一次图像序列，都记得**输出到新的文件夹**，否则旧的图像序列会被新的覆盖，因为 Vegas 总是从 `000000` 开始编号。
@zh-hant 9. **算繪影像序列**，哪裡卡住就從哪裡開始重新算繪，**這樣至少能保留已算繪檔案**，最後再**以影像序列的形式匯入進 Vegas 重新算繪一遍**。每算繪完一次影像序列，都記得**輸出到新的資料夾**，否則舊的影像序列會被新的覆蓋，因為 Vegas 總是從 `000000` 開始編號。
@ja 9.  **イメージシーケンスレンダリング**。フリーズした場所からレンダリング開始。 **これにより、少なくともレンダリング済みファイルが保持されます。** 最後に、**イメージシーケンスを VEGAS に再インポートし、ビデオとしてレンダリング**。各シーケンスレンダリング後は、**新しいフォルダに出力**し、上書きを避けます。VEGAS は常に `000000` から番号付けを開始するため。
@ko 9.  **이미지 시퀀스 렌더링**. 정지된 지점에서 렌더링을 시작합니다. **이렇게 하면 적어도 렌더링된 파일이 보존됩니다.** 마지막으로 **이미지 시퀀스를 VEGAS로 다시 가져와 비디오로 렌더링**합니다. 각 시퀀스 렌더링 후 **새 폴더에 출력**하여 덮어쓰지 않도록 합니다. VEGAS는 항상 `000000`부터 번호를 매기기 시작합니다.
@de 9.  **Bildsequenz rendern**. Beginnen Sie von dort zu rendern, wo es einfror. **Dies bewahrt zumindest gerenderte Dateien.** Schließlich **importieren Sie die Bildsequenz zurück in VEGAS und rendern sie als Video**. Nach jeder Sequenzrender **ausgeben in einen neuen Ordner**, um Überschreiben zu vermeiden, da VEGAS immer von `000000` beginnt.
@fr 9.  **Rendu séquence d'images**. Commencez le rendu là où il s'est bloqué. **Cela préserve au moins les fichiers rendus.** Finalement, **importez la séquence d'images dans VEGAS et rendez-la en vidéo**. Après chaque rendu de séquence, **sortez vers un nouveau dossier** pour éviter l'écrasement, car VEGAS commence toujours la numérotation à `000000`.
@ru 9.  **Рендеринг последовательности изображений**. Начните рендеринг с того места, где он завис. **Это хотя бы сохраняет отрендеренные файлы.** Наконец, **импортируйте последовательность изображений обратно в VEGAS и отрендерите ее как видео**. После каждого рендеринга последовательности **выводите в новую папку**, чтобы избежать перезаписи, так как VEGAS всегда начинает нумерацию с `000000`.

<ImageOnDemand src="vegtips/image025_import_image_sequence.png" />

@en <p align="center">Importing an image sequence. It behaves like a video file; you can set frame rate.</p>
@zh <p align="center">导入图像序列的方法。导入后相当于一个视频文件，可自行设置帧率等参数。</p>
@zh-hant <p align="center">匯入影像序列的方法。匯入後相當於一個影片檔案，可自行設定幀率等參數。</p>
@ja <p align="center">イメージシーケンスのインポート。ビデオファイルのように動作し、フレームレートを設定できます。</p>
@ko <p align="center">이미지 시퀀스 가져오기. 비디오 파일처럼 작동하며 프레임 속도를 설정할 수 있습니다.</p>
@de <p align="center">Importieren einer Bildsequenz. Verhält sich wie eine Videodatei; Sie können Framerate setzen.</p>
@fr <p align="center">Importation d'une séquence d'images. Elle se comporte comme un fichier vidéo ; vous pouvez définir le taux de trame.</p>
@ru <p align="center">Импорт последовательности изображений. Она ведет себя как видеофайл; можно установить частоту кадров.</p>

@en 10. **Use [Voukoder](#recommended-render-plugin-voukoder), customize template, set output container to mkv**, and render from where it froze.
@zh 10. **用 [Voukoder 渲染插件](#渲染插件-voukoder-推荐)，自定义模板，修改输出的封装格式为 mkv**，哪里卡住就从哪里开始重新渲染。
@zh-hant 10. **用 [Voukoder 算繪外掛程式](#算繪外掛程式-voukoder-推薦)，自定義範本，修改輸出的封裝格式為 mkv**，哪裡卡住就從哪裡開始重新算繪。
@ja 10. ** [Voukoder](#推奨レンダープラグイン-voukoder) を使用し、カスタムテンプレートを作成、出力コンテナを mkv に設定**し、フリーズした場所からレンダリング。
@ko 10. **[Voukoder](#권장-렌더링-플러그인-voukoder) 사용, 템플릿 사용자 정의, 출력 컨테이너를 mkv로 설정**, 정지된 지점에서 렌더링합니다.
@de 10. **Verwenden Sie [Voukoder](#empfohlenes-render-plugin-voukoder), passen Sie Vorlage an, setzen Sie Ausgabe-Container auf mkv**, und rendern Sie von dort, wo es einfror.
@fr 10. **Utilisez [Voukoder](#plugin-de-rendu-recommandé-voukoder), personnalisez le modèle, définissez le conteneur de sortie sur mkv**, et rendez à partir de là où il s'est bloqué.
@ru 10. **Используйте [Voukoder](#рекомендуемый-плагин-рендеринга-voukoder), настройте шаблон, установите выходной контейнер mkv** и рендерите с того места, где он завис.

@en   - Unlike other formats, **mkv files remain playable and importable after a render freeze/crash**. **Note: Lower VEGAS versions cannot import mkv directly.**
@zh   - mkv 不同于其他格式，**在渲染假死/崩溃以后，留下的文件能够正常播放和重新导入**。**注意，低版本 Vegas 无法直接导入 mkv。**
@zh-hant   - mkv 不同於其他格式，**在算繪假死/崩潰以後，留下的檔案能夠正常播放和重新匯入**。**注意，低版本 Vegas 無法直接匯入 mkv。**
@ja   - 他の形式とは異なり、**mkv ファイルはレンダリングフリーズ/クラッシュ後も再生およびインポート可能なままです**。**注：低い VEGAS バージョンは mkv を直接インポートできません。**
@ko   - 다른 형식과 달리 **mkv 파일은 렌더링 정지/크래시 후에도 재생 및 가져오기가 가능하게 유지됩니다**. **참고: 낮은 VEGAS 버전은 mkv를 직접 가져올 수 없습니다.**
@de   - Anders als andere Formate bleiben **mkv-Dateien nach einem Render-Einfrieren/Absturz abspielbar und importierbar**. **Hinweis: Niedrigere VEGAS-Versionen können mkv nicht direkt importieren.**
@fr   - Contrairement à d'autres formats, **les fichiers mkv restent lisibles et importables après un blocage/plantage de rendu**. **Note : Les versions VEGAS inférieures ne peuvent pas importer mkv directement.**
@ru   - В отличие от других форматов, **файлы mkv остаются воспроизводимыми и импортируемыми после зависания/сбоя рендеринга**. **Примечание: Более низкие версии VEGAS не могут напрямую импортировать mkv.**

@en 11. Ask someone else to render.
@zh 11. 找别人代渲染。
@zh-hant 11. 找別人代算繪。
@ja 11. 他の人にレンダリングしてもらう。
@ko 11. 다른 사람에게 렌더링 요청.
@de 11. Jemand anderen rendern lassen.
@fr 11. Demandez à quelqu'un d'autre de rendre.
@ru 11. Попросить кого-нибудь другого отрендерить.

@en   - Use `File -> Export -> .veg` to collect project media into a new folder. Compress and send to another trusted VEGAS user.
@zh   - 可以使用 `文件 -> 导出 -> .veg`，整理当前工程使用的媒体文件到新的文件夹内。之后将其打成压缩包，并发送给你信任的其他 Vegas 用户。
@zh-hant   - 可以使用 `檔案 -> 匯出 -> .veg`，整理當前工程使用的媒體檔案到新的資料夾內。之後將其打成壓縮包，並發送給你信任的其他 Vegas 使用者。
@ja   - `ファイル -> エクスポート -> .veg` を使用して、プロジェクトメディアを新しいフォルダに収集。圧縮し、信頼できる他の VEGAS ユーザーに送信。
@ko   - `파일 -> 내보내기 -> .veg`를 사용하여 프로젝트 미디어를 새 폴더로 수집합니다. 압축하여 신뢰할 수 있는 다른 VEGAS 사용자에게 보냅니다.
@de   - Verwenden Sie `Datei -> Exportieren -> .veg`, um Projektmedien in einen neuen Ordner zu sammeln. Komprimieren und an einen anderen vertrauenswürdigen VEGAS-Benutzer senden.
@fr   - Utilisez `Fichier -> Exporter -> .veg` pour collecter les médias du projet dans un nouveau dossier. Compressez et envoyez à un autre utilisateur VEGAS de confiance.
@ru   - Используйте `Файл -> Экспорт -> .veg (File -> Export -> .veg)`, чтобы собрать медиафайлы проекта в новую папку. Сожмите и отправьте другому доверенному пользователю VEGAS.

@en **Summary:** For render issues, try **methods 1, 2, 3** first. If they fail, prioritize **methods 6 and 7**. Other methods are references. Methods **8, 9, 10, 11** are last resorts.
@zh 总结：遇到渲染问题，先试试看**办法 1、2、3** 能不能解决，无法解决时优先推荐尝试使用**办法 6 和办法 7**，其余的办法可作为参考，万不得已时只能用**办法 8、9、10、11**。
@zh-hant 總結：遇到算繪問題，先試試看**辦法 1、2、3** 能不能解決，無法解決時優先推薦嘗試使用**辦法 6 和辦法 7**，其餘的辦法可作為參考，萬不得已時只能用**辦法 8、9、10、11**。
@ja **まとめ：** レンダリング問題には、まず**方法 1、2、3** を試します。失敗した場合は、**方法 6 と 7** を優先します。他の方法は参考です。方法 **8、9、10、11** は最後の手段です。
@ko **요약:** 렌더링 문제의 경우 먼저 **방법 1, 2, 3**을 시도해 보십시오. 실패하면 **방법 6 및 7**을 우선적으로 시도하십시오. 다른 방법은 참고용입니다. 방법 **8, 9, 10, 11**은 최후의 수단입니다.
@de **Zusammenfassung:** Für Render-Probleme versuchen Sie zuerst **Methoden 1, 2, 3**. Wenn sie scheitern, priorisieren Sie **Methoden 6 und 7**. Andere Methoden sind Referenzen. Methoden **8, 9, 10, 11** sind letzte Auswege.
@fr **Résumé :** Pour les problèmes de rendu, essayez d'abord **les méthodes 1, 2, 3**. Si elles échouent, priorisez **les méthodes 6 et 7**. Les autres méthodes sont des références. Les méthodes **8, 9, 10, 11** sont les derniers recours.
@ru **Резюме:** При проблемах с рендерингом сначала попробуйте **методы 1, 2, 3**. Если они не помогут, отдайте приоритет **методам 6 и 7**. Другие методы — это ссылки. Методы **8, 9, 10, 11** — последнее средство.

<br>

@en #### Repairing Files from Failed Renders
@zh #### 渲染失败时的文件修复
@zh-hant #### 算繪失敗時的檔案修復
@ja #### 失敗したレンダリングからのファイル修復
@ko #### 실패한 렌더링에서 파일 복구
@de #### Reparieren von Dateien aus fehlgeschlagenen Renders
@fr #### Réparation des fichiers de rendus échoués
@ru #### Восстановление файлов после неудачного рендеринга

@en As mentioned, only **image sequences** and **mkv container** preserve rendered progress after a failure. Other formats (mp4, mov, avi, wmv) leave a cache file, but it's not directly playable/importable; playback may show corruption. However, video repair software can sometimes fix these failed cache files using **a reference video sample successfully rendered with the same template**. I've tested [Digital Video Repair](https://risingresearch.com/zh/dvr/) (free) and [Wondershare Repairit](https://repairit.wondershare.com/) (paid, better results). You can try others.
@zh 如前所述，能够在渲染失败（假死/崩溃）后直接保留已渲染进度的格式，只有图像序列和 mkv 封装格式这两种，其余格式（mp4、mov、avi、wmv 等），在渲染失败后，会保留已渲染的缓存文件，但这种缓存文件是无法直接正常播放和重新导入的，即使能够播放，也会出现部分画面损坏的问题。但是，也有这样的视频修复软件，可以将这些渲染失败的缓存文件，通过**另一个同渲染模板的成功正常渲染的视频片段样例**，修复成正常的视频片段。我试过能正常修复的软件有 [Digital Video Repair](https://risingresearch.com/zh/dvr/)（免费）和 [万兴易修](https://repairit.wondershare.com/)（付费，效果更好一些）等。也可自行尝试其他同类型软件。
@zh-hant 如前所述，能夠在算繪失敗（假死/崩潰）後直接保留已算繪進度的格式，只有影像序列和 mkv 封裝格式這兩種，其餘格式（mp4、mov、avi、wmv 等），在算繪失敗後，會保留已算繪的快取檔案，但這種快取檔案是無法直接正常播放和重新匯入的，即使能夠播放，也會出現部分畫面損壞的問題。但是，也有這樣的影片修復軟體，可以將這些算繪失敗的快取檔案，通過**另一個同算繪範本的成功正常算繪的影片片段樣例**，修復成正常的影片片段。我試過能正常修復的軟體有 [Digital Video Repair](https://risingresearch.com/zh/dvr/)（免費）和 [萬興易修](https://repairit.wondershare.com/)（付費，效果更好一些）等。也可自行嘗試其他同類型軟體。
@ja 前述のように、レンダリング失敗（フリーズ/クラッシュ）後も進行状況を直接保持できる形式は、**イメージシーケンス**と**mkv コンテナ**のみです。他の形式（mp4、mov、avi、wmv）はキャッシュファイルを残しますが、直接再生/インポートできず、再生時に破損が表示されることがあります。ただし、ビデオ修復ソフトウェアは、**同じテンプレートで正常にレンダリングされた参照ビデオサンプル**を使用して、これらの失敗したキャッシュファイルを修復できる場合があります。私は [Digital Video Repair](https://risingresearch.com/zh/dvr/)（無料）と [Wondershare Repairit](https://repairit.wondershare.com/)（有料、より良い結果）をテストしました。他のものも試せます。
@ko 앞서 언급했듯이 **이미지 시퀀스** 및 **mkv 컨테이너**만 실패 후 렌더링 진행 상황을 보존합니다. 다른 형식(mp4, mov, avi, wmv)은 캐시 파일을 남기지만 직접 재생/가져오기가 불가능합니다. 재생 시 손상이 표시될 수 있습니다. 그러나 비디오 복구 소프트웨어는 때로 **동일한 템플릿으로 성공적으로 렌더링된 참조 비디오 샘플**을 사용하여 이러한 실패한 캐시 파일을 수정할 수 있습니다. [Digital Video Repair](https://risingresearch.com/ko/dvr/) (무료) 및 [Wondershare Repairit](https://repairit.wondershare.com/) (유료, 더 나은 결과)를 테스트했습니다. 다른 것을 시도해 볼 수 있습니다.
@de Wie erwähnt, bewahren nur **Bildsequenzen** und **mkv-Container** gerenderten Fortschritt nach einem Fehler. Andere Formate (mp4, mov, avi, wmv) hinterlassen eine Cache-Datei, aber sie ist nicht direkt abspielbar/importierbar; Wiedergabe zeigt möglicherweise Beschädigung. Videoreparatur-Software kann jedoch manchmal diese fehlgeschlagenen Cache-Dateien reparieren, indem sie **ein Referenz-Video-Beispiel verwendet, das erfolgreich mit derselben Vorlage gerendert wurde**. Ich habe [Digital Video Repair](https://risingresearch.com/zh/dvr/) (kostenlos) und [Wondershare Repairit](https://repairit.wondershare.com/) (kostenpflichtig, bessere Ergebnisse) getestet. Sie können andere versuchen.
@fr Comme mentionné, seules les **séquences d'images** et le **conteneur mkv** préservent la progression rendue après un échec. Les autres formats (mp4, mov, avi, wmv) laissent un fichier cache, mais il n'est pas directement lisible/importable ; la lecture peut montrer de la corruption. Cependant, les logiciels de réparation vidéo peuvent parfois réparer ces fichiers cache échoués en utilisant **un échantillon vidéo de référence rendu avec succès avec le même modèle**. J'ai testé [Digital Video Repair](https://risingresearch.com/zh/dvr/) (gratuit) et [Wondershare Repairit](https://repairit.wondershare.com/) (payant, meilleurs résultats). Vous pouvez en essayer d'autres.
@ru Как упоминалось, только **последовательности изображений** и **контейнер mkv** сохраняют прогресс рендеринга после сбоя. Другие форматы (mp4, mov, avi, wmv) оставляют кэш-файл, но он не воспроизводится/не импортируется напрямую; воспроизведение может показывать повреждения. Однако программное обеспечение для восстановления видео иногда может исправить эти неудачные кэш-файлы, используя **эталонный видеообразец, успешно отрендеренный с тем же шаблоном**. Я тестировал [Digital Video Repair](https://risingresearch.com/zh/dvr/) (бесплатный) и [Wondershare Repairit](https://repairit.wondershare.com/) (платный, лучшие результаты). Можете попробовать другие.

<br>

@en ### Rendering Q&A
@zh ### 渲染相关的 Q&A
@zh-hant ### 算繪相關的 Q&A
@ja ### レンダリング Q&A
@ko ### 렌더링 Q&A
@de ### Rendering Q&A
@fr ### FAQ sur le rendu
@ru ### Вопросы и ответы по рендерингу

@en Q: Clicking **`Render As`** (called **`Render`** in VP23+) to open the template list causes **error/crash**?
@zh Q：点击**`渲染为`**（23 及以上称为**`渲染`**）后，**打开渲染模板列表窗口时，报错/崩溃**？
@zh-hant Q：點選**`算繪為`**（23 及以上稱為**`算繪`**）後，**開啟算繪範本列表視窗時，報錯/崩潰**？
@ja Q: **`別名でレンダリング`**（VP23+ では **`レンダリング`**）をクリックしてテンプレートリストを開くと、**エラー/クラッシュ**する？
@ko Q: **`다른 이름으로 렌더링`** (VP23+에서 **`렌더링`** 이라고 함)을 클릭하여 템플릿 목록을 열면 **오류/크래시**가 발생합니까?
@de F: Klicken auf **`Rendern als`** (genannt **`Rendern`** in VP23+), um die Vorlagenliste zu öffnen, verursacht **Fehler/Absturz**?
@fr Q : Cliquer sur **`Rendre sous`** (appelé **`Rendre`** dans VP23+) pour ouvrir la liste des modèles provoque **erreur/plantage** ?
@ru В: Нажатие **`Рендерить как (Render As)`** (в VP23+ называется **`Рендерить (Render)`**) для открытия списка шаблонов вызывает **ошибку/сбой**?

@en A: If there's an **error pop-up**, first try **[Disabling Error Reporting](#2-disable-vegas-error-reporting-pop-up)**.
@zh A：有**报错弹窗**时，先试试上文中的**[关闭报错弹窗](#2-关闭-vegas-的报错弹窗功能)**。
@zh-hant A：有**報錯彈窗**時，先試試上文中的**[關閉報錯彈窗](#2-關閉-vegas-的報錯彈窗功能)**。
@ja A: **エラーポップアップ**がある場合、まず [エラー報告を無効](#2-vegas-エラー報告ポップアップを無効にする) を試みます。
@ko A: **오류 팝업**이 있는 경우 먼저 **[오류 보고 비활성화](#2-vegas-오류-보고-팝업-비활성화)** 를 시도해 보십시오.
@de A: Wenn es ein **Fehler-Pop-up** gibt, versuchen Sie zuerst **[Fehlerbericht deaktivieren](#2-vegas-fehlerbericht-pop-up-deaktivieren)**.
@fr R : S'il y a une **fenêtre d'erreur**, essayez d'abord **[Désactiver le rapport d'erreur](#2-désactiver-la-fenêtre-contextuelle-de-rapport-d-erreur-vegas)**.
@ru О: Если есть **всплывающее окно ошибки**, сначала попробуйте **[Отключить отчеты об ошибках](#2-отключить-всплывающее-окно-отчетов-об-ошибках-vegas)**.

@en If that fails, try temporarily moving all folders from the codec path **`...<VEGAS install path>\FileIO Plug-Ins\`**, restart VEGAS, insert a text event, and see if clicking `Render As` still crashes. If not, gradually move codecs back, restarting VEGAS and testing `Render As` after each to **identify the problematic codec**. Once found, avoid using that codec by not placing its folder back. This may prevent VEGAS from importing/rendering certain formats. (Prioritize checking `mxavcaacplug`.)
@zh 若仍然不行，可以尝试暂时移除编解码器路径 **`...<Vegas 安装路径>\FileIO Plug-Ins\`** 里的所有文件夹，再重新运行 Vegas，插入字幕事件，看点击 `渲染为` 时是否崩溃。若此时未崩溃，可以逐步把编解码器移回去，重启 Vegas，插入字幕，点击 `渲染为`，**看移入哪个编解码器后会导致问题**。排查出来后，只能不使用该编解码器，不把该文件夹放进去，但可能会使 Vegas 无法导入或渲染某些格式的文件，这个注意。（可以优先排查 `mxavcaacplug`。）
@zh-hant 若仍然不行，可以嘗試暫時移除編解碼器路徑 **`...<Vegas 安裝路徑>\FileIO Plug-Ins\`** 裡的所有資料夾，再重新執行 Vegas，插入字幕事件，看點選 `算繪為` 時是否崩潰。若此時未崩潰，可以逐步把編解碼器移回去，重啟 Vegas，插入字幕，點選 `算繪為`，**看移入哪個編解碼器後會導致問題**。排查出來後，只能不使用該編解碼器，不把該資料夾放進去，但可能會使 Vegas 無法匯入或算繪某些格式的檔案，這個注意。（可以優先排查 `mxavcaacplug`。）
@ja それでもダメな場合、コーデックパス **`...<VEGAS インストールパス>\FileIO Plug-Ins\`** からすべてのフォルダを一時的に移動し、VEGAS を再起動し、テキストイベントを挿入し、`別名でレンダリング` をクリックしてもクラッシュするか確認します。クラッシュしない場合は、コーデックを徐々に戻し、VEGAS を再起動し、`別名でレンダリング` をテストして、**問題のあるコーデックを特定**します。見つかったら、そのコーデックを使用しないように、フォルダを戻さないようにします。これにより、VEGAS が特定の形式をインポート/レンダリングできなくなる可能性があります。（優先的に `mxavcaacplug` を確認。）
@ko 실패하면 코덱 경로 **`...<VEGAS 설치 경로>\FileIO Plug-Ins\`** 의 모든 폴더를 일시적으로 이동하고 VEGAS를 다시 시작한 후 텍스트 이벤트를 삽입하고 `다른 이름으로 렌더링` 클릭이 여전히 크래시되는지 확인하십시오. 그렇지 않으면 코덱을 점진적으로 다시 이동하고, VEGAS를 다시 시작하고, 각 이동 후 `다른 이름으로 렌더링`을 테스트하여 **문제가 있는 코덱 식별**합니다. 발견되면 해당 폴더를 다시 넣지 않아 해당 코덱 사용을 피하십시오. 이렇게 하면 VEGAS가 특정 형식을 가져오기/렌더링하지 못할 수 있습니다. (`mxavcaacplug`를 우선적으로 확인하십시오.)
@de Wenn das fehlschlägt, versuchen Sie vorübergehend alle Ordner aus dem Codec-Pfad **`...<VEGAS Installationspfad>\FileIO Plug-Ins\`** zu verschieben, starten Sie VEGAS neu, fügen Sie ein Textevent ein, und sehen Sie, ob Klicken auf `Rendern als` immer noch abstürzt. Wenn nicht, bewegen Sie Codecs schrittweise zurück, starten Sie VEGAS neu und testen Sie `Rendern als` nach jedem, um **den problematischen Codec zu identifizieren**. Einmal gefunden, vermeiden Sie die Verwendung dieses Codecs, indem Sie seinen Ordner nicht zurücklegen. Dies kann verhindern, dass VEGAS bestimmte Formate importiert/rendert. (Priorisieren Sie die Überprüfung von `mxavcaacplug`.)
@fr Si cela échoue, essayez de déplacer temporairement tous les dossiers du chemin des codecs **`...<Chemin d'installation VEGAS>\FileIO Plug-Ins\`**, redémarrez VEGAS, insérez un événement texte, et voyez si cliquer sur `Rendre sous` plante toujours. Sinon, déplacez progressivement les codecs, redémarrez VEGAS et testez `Rendre sous` après chaque déplacement pour **identifier le codec problématique**. Une fois trouvé, évitez d'utiliser ce codec en ne le remettant pas. Cela peut empêcher VEGAS d'importer/rendre certains formats. (Priorisez la vérification de `mxavcaacplug`.)
@ru Если это не поможет, попробуйте временно переместить все папки из пути кодеков **`...<путь установки VEGAS>\FileIO Plug-Ins\`**, перезапустите VEGAS, вставьте текстовое событие и посмотрите, вызывает ли нажатие `Рендерить как` по-прежнему сбой. Если нет, постепенно возвращайте кодеки, перезапуская VEGAS и тестируя `Рендерить как` после каждого, чтобы **определить проблемный кодек**. После обнаружения избегайте использования этого кодека, не возвращая его папку. Это может помешать VEGAS импортировать/рендерить определенные форматы. (В первую очередь проверьте `mxavcaacplug`.)

<br>

@en Q: Immediate render error: **`An error occurred while creating media file xxx.mp4. The reason for the error could not be determined.`**
@zh Q：渲染立即报错：**`创建媒体文件 xxx.mp4 时发生错误。无法确定错误的原因。`**
@zh-hant Q：算繪立即報錯：**`建立媒體檔案 xxx.mp4 時發生錯誤。無法確定錯誤的原因。`**
@ja Q: 即時レンダリングエラー：**`メディアファイルxxx.mp4の作成中にエラーが発生しました。エラーの理由を特定できませんでした。`**
@ko Q: 즉시 렌더링 오류: **`미디어 파일 xxx.mp4 생성 중 오류가 발생했습니다. 오류의 원인을 확인할 수 없습니다.`**
@de F: Sofortiger Renderfehler: **`Beim Erstellen der Mediendatei xxx.mp4 ist ein Fehler aufgetreten. Der Grund für den Fehler konnte nicht ermittelt werden.`**
@fr Q : Erreur de rendu immédiat : **`Une erreur s'est produite lors de la création du fichier média xxx.mp4. La raison de l'erreur n'a pas pu être déterminée.`**
@ru В: Немедленная ошибка рендеринга: **`При создании медиафайла xxx.mp4 произошла ошибка. Не удалось определить причину ошибки.`**

@en A: In `Customize Render Template`, **uncheck `Enable progressive download`**. Or try **[Voukoder](#recommended-render-plugin-voukoder)**.
@zh A：`自定义渲染模板`，**取消勾选 `启用渐进式下载` 选项**。或者试试看 **[Voukoder 渲染插件](#渲染插件-voukoder-推荐)**。
@zh-hant A：`自定義算繪範本`，**取消勾選 `啟用漸進式下載` 選項**。或者試試看 **[Voukoder 算繪外掛程式](#算繪外掛程式-voukoder-推薦)**。
@ja A: `カスタマイズレンダーテンプレート`で、**`「プログレッシブダウンロードを有効にする」のチェックを外してください`**。または、**[Voukoder](#推奨レンダープラグイン-voukoder)**をお試しください。
@ko A: `렌더링 템플릿 사용자 지정`에서 **`"점진적 다운로드 활성화"의 선택을 해제하세요`**. 또는 **[Voukoder](#권장-렌더링-플러그인-voukoder)**를 시도해 보십시오.
@de A: Deaktivieren Sie in `Render-Vorlage anpassen` die Option **`"Progressiven Download aktivieren"`**. Oder probieren Sie **[Voukoder](#empfohlenes-render-plugin-voukoder)** aus.
@fr R : Dans `Personnaliser le modèle de rendu`, **décochez `"Activer le téléchargement progressif"`**. Ou essayez **[Voukoder](#plugin-de-rendu-recommandé-voukoder)**.
@ru О: В `Настройке шаблона рендеринга (Customize Render Template)` **снимите флажок `Включить прогрессивную загрузку (Enable progressive download)`**. Или попробуйте **[Voukoder](#рекомендуемый-плагин-рендеринга-voukoder)**.

<br>

@en Q: Immediate render error: **`An error occurred while creating media file xxx.mp4. Error 0x80660008 (Message missing)`**
@zh Q：渲染立即报错：**`创建媒体文件 xxx.mp4 时发生错误。错误 0x80660008 (消息缺失)`**
@zh-hant Q：算繪立即報錯：**`建立媒體檔案 xxx.mp4 時發生錯誤。錯誤 0x80660008 (訊息缺失)`**
@ja Q: 即時レンダリングエラー: **`メディアファイル xxx.mp4 の作成中にエラーが発生しました。エラー 0x80660008 (メッセージ欠落)`**
@ko Q: 즉시 렌더링 오류: **`미디어 파일 xxx.mp4 생성 중 오류 발생. 오류 0x80660008 (메시지 없음)`**
@de F: Sofortiger Renderfehler: **`Beim Erstellen der Mediendatei xxx.mp4 ist ein Fehler aufgetreten. Fehler 0x80660008 (Nachricht fehlt)`**
@fr Q : Erreur de rendu immédiat : **`Une erreur s'est produite lors de la création du fichier média xxx.mp4. Erreur 0x80660008 (message manquant)`**
@ru В: Немедленная ошибка рендеринга: **`При создании медиафайла xxx.mp4 произошла ошибка. Ошибка 0x80660008 (Сообщение отсутствует)`**

@en A: If you are using **NVIDIA NVENC encoder** and your **graphics driver version is > `590`**, then **built-in render templates in VP22 and below cannot call NVENC**. Current solutions:
@zh A：如果你正在使用 **N 卡的 NVENC 编码器**，且你的**显卡驱动版本大于 `590`**，则 **22 及以下版本的 Vegas** 中自带的渲染模板，**无法调用 NVENC 编码器**。解决办法有：
@zh-hant A：如果你正在使用 **N 卡的 NVENC 編碼器**，且你的**顯示卡驅動版本大於 `590`**，則 **22 及以下版本的 Vegas** 中自帶的算繪範本，**無法呼叫 NVENC 編碼器**。目前的解決辦法：
@ja A: **NVIDIA NVENC エンコーダー**を使用していて、**グラフィックスドライバーのバージョンが `590` より新しい**場合、**VP22 以下の組み込みレンダーテンプレートでは NVENC を呼び出せません**。現在の解決策：
@ko A: **NVIDIA NVENC 인코더**를 사용 중이고 **그래픽 드라이버 버전이 `590` 초과**인 경우, **VP22 이하의 내장 렌더 템플릿은 NVENC를 호출할 수 없습니다**. 현재 해결 방법:
@de A: Wenn Sie den **NVIDIA NVENC-Encoder** verwenden und Ihre **Grafiktreiberversion > `590`** ist, dann **können die integrierten Render-Vorlagen in VP22 und darunter NVENC nicht aufrufen**. Aktuelle Lösungen:
@fr R : Si vous utilisez l'**encodeur NVIDIA NVENC** et que **votre version de pilote graphique est > `590`**, alors **les modèles de rendu intégrés dans VP22 et inférieurs ne peuvent pas appeler NVENC**. Solutions actuelles :
@ru О: Если вы используете **кодировщик NVIDIA NVENC** и ваша **версия драйвера видеокарты > `590`**, то **встроенные шаблоны рендеринга в VP22 и ниже не могут вызывать NVENC**. Текущие решения:

@en - **Choose templates with other encoders than `NVENC`**.
@zh - **选择调用除 `NVENC` 的其他编码器的渲染模板进行渲染**。
@zh-hant - **選擇呼叫除 `NVENC` 的其他編碼器的算繪範本進行算繪**。
@ja - **`NVENC` 以外のエンコーダーを使用するテンプレートを選択する**。
@ko - **`NVENC` 이외의 인코더를 사용하는 템플릿을 선택하세요**.
@de - **Wählen Sie Vorlagen mit anderen Encodern als `NVENC`**.
@fr - **Choisissez des modèles avec d'autres encodeurs que `NVENC`**.
@ru - **Выберите шаблоны с другими кодировщиками, кроме `NVENC`**.

@en - **Downgrade NVIDIA driver to `581.57` or below**.
@zh - **降级显卡驱动版本到 `581.57` 及以下**。
@zh-hant - **降級顯示卡驅動版本到 `581.57` 及以下**。
@ja - **NVIDIA ドライバーを `581.57` 以下にダウングレードする**。
@ko - **NVIDIA 드라이버를 `581.57` 이하로 다운그레이드하세요**.
@de - **Stufen Sie den NVIDIA-Treiber auf `581.57` oder darunter zurück**.
@fr - **Rétrogradez le pilote NVIDIA à `581.57` ou inférieur**.
@ru - **Понизьте драйвер NVIDIA до `581.57` или ниже**.

@en - **Upgrade VEGAS to VP23 or above**.
@zh - **升级 Vegas 版本到 23 及以上**。
@zh-hant - **升級 Vegas 版本到 23 及以上**。
@ja - **VEGAS を VP23 以上にアップグレードする**。
@ko - **VEGAS를 VP23 이상으로 업그레이드하세요**.
@de - **Aktualisieren Sie VEGAS auf VP23 oder höher**.
@fr - **Mettez à niveau VEGAS vers VP23 ou supérieur**.
@ru - **Обновите VEGAS до VP23 или выше**.

@en - Use **[Voukoder's](#recommended-render-plugin-voukoder)** NVENC encoder without error.
@zh - 用 **[Voukoder 渲染插件](#渲染插件-voukoder-推荐)** 的 NVENC 编码器进行渲染，不会报错。
@zh-hant - 用 **[Voukoder 算繪外掛程式](#算繪外掛程式-voukoder-推薦)**的 NVENC 編碼器進行算繪，不會報錯。
@ja - エラーなしで **[Voukoder](#推奨レンダープラグイン-voukoder)** の NVENC エンコーダーを使用する。
@ko - 오류 없이 **[Voukoder](#권장-렌더링-플러그인-voukoder)**의 NVENC 인코더를 사용하세요.
@de - Verwenden Sie den NVENC-Encoder von **[Voukoder](#empfohlenes-render-plugin-voukoder)** ohne Fehler.
@fr - Utilisez l'encodeur NVENC de **[Voukoder](#plugin-de-rendu-recommandé-voukoder)** sans erreur.
@ru - Используйте кодировщик NVENC в **[Voukoder](#рекомендуемый-плагин-рендеринга-voukoder)** без ошибки.

@en Reference: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/rendering-issues-after-gpu-replacement-nvenc--150382/
@zh 参见：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/rendering-issues-after-gpu-replacement-nvenc--150382/
@zh-hant 參見：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/rendering-issues-after-gpu-replacement-nvenc--150382/
@ja 参照： https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/rendering-issues-after-gpu-replacement-nvenc--150382/
@ko 참조: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/rendering-issues-after-gpu-replacement-nvenc--150382/
@de Referenz: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/rendering-issues-after-gpu-replacement-nvenc--150382/
@fr Référence : https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/rendering-issues-after-gpu-replacement-nvenc--150382/
@ru Ссылка: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/rendering-issues-after-gpu-replacement-nvenc--150382/

<br>

@en Q: Error when trying to **render m2ts**: **`The COM object could not be initialized.`**
@zh Q：尝试**渲染 m2ts 视频文件**报错：**`COM 对象无法初始化。`(`The COM object could not be initialized.`)**
@zh-hant Q：嘗試**算繪 m2ts 影片檔案**報錯：**`COM 物件無法初始化。`(`The COM object could not be initialized.`)**
@ja Q: **m2ts レンダリング**を試みるとエラー：**`COM オブジェクトを初期化できませんでした。`**
@ko Q: **m2ts 렌더링** 시도 시 오류: **`COM 개체를 초기화할 수 없습니다.`**
@de F: Fehler beim Versuch, **m2ts zu rendern**: **`COM-Objekt konnte nicht initialisiert werden.`**
@fr Q : Erreur lors de la tentative de **rendre m2ts** : **`L'objet COM n'a pas pu être initialisé.`**
@ru В: Ошибка при попытке **рендеринга m2ts**: **`Не удалось инициализировать COM-объект.`**

@en A: Starting with **Win11 24H2**, Microsoft removed the **AC-3 codec** that VEGAS and other software depend on. On a **fresh install of Win11 24H2 or later**, this codec is missing, causing VEGAS to **fail decoding AC-3 audio in m2ts files** and **fail rendering m2ts**. Refer to [**this tutorial**](https://www.elevenforum.com/t/ac-3-dolby-digital-codec-no-longer-included-with-windows-11-version-24h2.25597/post-459390) to add the AC-3 codec back, or **upgrade to VP22 final (`22 build 250`) or above**, which includes a new AC-3 codec.
@zh A：从 **Win11 24H2 版**开始，微软移除了 Vegas 及其他软件所依赖的 **AC-3 编解码器**。如果用户正在**使用全新安装的 Win11 24H2 或更高版本**，则系统中不会包含这个编解码器，导致 Vegas **无法解码 m2ts 视频文件的 AC-3 音频编码音频**，也导致**渲染 m2ts 视频文件时报错**。可以参考 [**这篇英文教程**](https://www.elevenforum.com/t/ac-3-dolby-digital-codec-no-longer-included-with-windows-11-version-24h2.25597/post-459390) 重新添加 AC-3 编解码器，或者也可以**升级到 22 最终版（`22 build 250`）及以上版本**，已包含新的 AC-3 编解码器。
@zh-hant A：從 **Win11 24H2 版**開始，微軟移除了 Vegas 及其他軟體所依賴的 **AC-3 編解碼器**。如果使用者正在**使用全新安裝的 Win11 24H2 或更高版本**，則系統中不會包含這個編解碼器，導致 Vegas **無法解碼 m2ts 影片檔案的 AC-3 音訊編碼音訊**，也導致**算繪 m2ts 影片檔案時報錯**。可以參考 [**這篇英文教學**](https://www.elevenforum.com/t/ac-3-dolby-digital-codec-no-longer-included-with-windows-11-version-24h2.25597/post-459390) 重新添加 AC-3 編解碼器，或者也可以**升級到 22 最終版（`22 build 250`）及以上版本**，已包含新的 AC-3 編解碼器。
@ja A: **Win11 24H2** から、Microsoft は VEGAS や他のソフトウェアが依存する **AC-3 コーデック** を削除しました。**Win11 24H2 以降のクリーンインストール**では、このコーデックが欠けているため、VEGAS は **m2ts ファイルの AC-3 オーディオのデコードに失敗**し、 **m2ts のレンダリングに失敗**します。 [**この英語チュートリアル**](https://www.elevenforum.com/t/ac-3-dolby-digital-codec-no-longer-included-with-windows-11-version-24h2.25597/post-459390) を参照して AC-3 コーデックを再度追加するか、 **VP22 最終版（`22 build 250`）以上にアップグレード**してください。新しい AC-3 コーデックが含まれています。
@ko A: **Win11 24H2**부터 Microsoft는 VEGAS 및 기타 소프트웨어가 의존하는 **AC-3 코덱**을 제거했습니다. **Win11 24H2 이상의 새 설치**에서는 이 코덱이 누락되어 VEGAS가 **m2ts 파일의 AC-3 오디오 디코딩 실패** 및 **m2ts 렌더링 실패**를 초래합니다. [**이 영어 튜토리얼**](https://www.elevenforum.com/t/ac-3-dolby-digital-codec-no-longer-included-with-windows-11-version-24h2.25597/post-459390)을 참조하여 AC-3 코덱을 다시 추가하거나 **VP22 최종(`22 build 250`) 이상으로 업그레이드**하십시오. 여기에는 새로운 AC-3 코덱이 포함되어 있습니다.
@de A: Beginnend mit **Win11 24H2** entfernte Microsoft den **AC-3-Codec**, von dem VEGAS und andere Software abhängen. Bei einer **Neuinstallation von Win11 24H2 oder später** fehlt dieser Codec, was dazu führt, dass VEGAS **AC-3-Audio in m2ts-Dateien nicht decodieren kann** und **m2ts nicht rendern kann**. Siehe [**dieses englische Tutorial**](https://www.elevenforum.com/t/ac-3-dolby-digital-codec-no-longer-included-with-windows-11-version-24h2.25597/post-459390), um den AC-3-Codec wieder hinzuzufügen, oder **upgraden Sie auf VP22 final (`22 Build 250`) oder höher**, das einen neuen AC-3-Codec enthält.
@fr A : À partir de **Win11 24H2**, Microsoft a supprimé le **codec AC-3** dont dépendent VEGAS et d'autres logiciels. Sur une **installation neuve de Win11 24H2 ou plus**, ce codec est manquant, causant l'échec de VEGAS à **décoder l'audio AC-3 dans les fichiers m2ts** et à **rendre m2ts**. Référez-vous à [**ce tutoriel anglais**](https://www.elevenforum.com/t/ac-3-dolby-digital-codec-no-longer-included-with-windows-11-version-24h2.25597/post-459390) pour rajouter le codec AC-3, ou **mettre à niveau vers VP22 final (`22 build 250`) ou plus**, qui inclut un nouveau codec AC-3.
@ru О: Начиная с **Win11 24H2**, Microsoft удалила **кодек AC-3**, от которого зависят VEGAS и другое ПО. При **чистой установке Win11 24H2 или более поздней версии** этот кодек отсутствует, что приводит к **сбою декодирования аудио AC-3 в файлах m2ts** и **сбою рендеринга m2ts** в VEGAS. Обратитесь к [**этому руководству на английском**](https://www.elevenforum.com/t/ac-3-dolby-digital-codec-no-longer-included-with-windows-11-version-24h2.25597/post-459390), чтобы добавить кодек AC-3 обратно, или **обновитесь до финальной версии VP22 (`22 build 250`) или выше**, которая включает новый кодек AC-3.

@en Reference: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/no-audio-and-no-rendering-possible-with-m2ts-files-in-win11-24h2--147963/
@zh 参见：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/no-audio-and-no-rendering-possible-with-m2ts-files-in-win11-24h2--147963/
@zh-hant 參見：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/no-audio-and-no-rendering-possible-with-m2ts-files-in-win11-24h2--147963/
@ja 参照： https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/no-audio-and-no-rendering-possible-with-m2ts-files-in-win11-24h2--147963/
@ko 참조: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/no-audio-and-no-rendering-possible-with-m2ts-files-in-win11-24h2--147963/
@de Referenz: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/no-audio-and-no-rendering-possible-with-m2ts-files-in-win11-24h2--147963/
@fr Référence : https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/no-audio-and-no-rendering-possible-with-m2ts-files-in-win11-24h2--147963/
@ru Ссылка: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/no-audio-and-no-rendering-possible-with-m2ts-files-in-win11-24h2--147963/

<br>

@en Q: Want to **stop rendering midway** but **keep the partially rendered video file**.
@zh Q：渲染到一半**打算停止渲染**，但是**想保留已渲染的视频文件**。
@zh-hant Q：算繪到一半**打算停止算繪**，但是**想保留已算繪的影片檔案**。
@ja Q: レンダリング途中で**停止したい**が、**部分的にレンダリングされたビデオファイルを保持したい**。
@ko Q: 렌더링 중간에 **중지하고 싶지만 부분적으로 렌더링된 비디오 파일을 유지**하고 싶습니다.
@de F: Möchte **Rendering mitten drin stoppen**, aber **teilweise gerenderte Videodatei behalten**.
@fr Q : Veut **arrêter le rendu à mi-chemin** mais **garder la vidéo partiellement rendue**.
@ru В: Хочу **остановить рендеринг на полпути**, но **сохранить частично отрендеренный видеофайл**.

@en A: The **SeMW extension** render progress window has this feature.
@zh A：**SeMW 扩展**的渲染进度窗口中有此功能。
@zh-hant A：**SeMW 擴充**的算繪進度視窗中有此功能。
@ja A: **SeMW 拡張機能**のレンダリング進捗ウィンドウにこの機能があります。
@ko A: **SeMW 확장** 렌더링 진행 창에 이 기능이 있습니다.
@de A: Das **SeMW-Erweiterung** Render-Fortschrittsfenster hat diese Funktion.
@fr R : La fenêtre de progression du rendu de l'**extension SeMW** a cette fonctionnalité.
@ru О: Окно прогресса рендеринга расширения **SeMW** имеет эту функцию.

<ImageOnDemand src="vegtips/image026_render_semw.png" />

@en SeMW Extension official site: https://www.semw-software.com/en/extensions/
@zh SeMW 扩展官网：https://www.semw-software.com/en/extensions/
@zh-hant SeMW 擴充官網：https://www.semw-software.com/en/extensions/
@ja SeMW 拡張機能公式サイト： https://www.semw-software.com/en/extensions/
@ko SeMW 확장 공식 사이트: https://www.semw-software.com/en/extensions/
@de SeMW-Erweiterung offizielle Seite: https://www.semw-software.com/en/extensions/
@fr Site officiel de l'extension SeMW : https://www.semw-software.com/en/extensions/
@ru Официальный сайт расширения SeMW: https://www.semw-software.com/en/extensions/

@en Note: Testing shows this feature **does not solve the "cannot cancel render" issue during a freeze**; you must kill VEGAS via Task Manager in that case.
@zh 注意：经过测试，该功能**不能解决渲染假死时无法取消渲染的问题**，遇到此问题时只能通过任务管理器强行杀除 Vegas 进程。
@zh-hant 注意：經過測試，該功能**不能解決算繪假死時無法取消算繪的問題**，遇到此問題時只能通過工作管理員強行殺除 Vegas 程序。
@ja 注：テストでは、この機能は **「レンダリングがキャンセルできない」フリーズ問題を解決しない**。その場合は、タスクマネージャーで VEGAS を強制終了する必要があります。
@ko 참고: 테스트 결과 이 기능은 **"렌더링 취소 불가" 정지 문제를 해결하지 못합니다**. 그 경우 작업 관리자를 통해 VEGAS를 종료해야 합니다.
@de Hinweis: Tests zeigen, dass diese Funktion **das "kann Render nicht abbrechen" Problem während eines Einfrierens nicht löst**; in diesem Fall müssen Sie VEGAS über den Task-Manager beenden.
@fr Note : Les tests montrent que cette fonctionnalité **ne résout pas le problème "ne peut pas annuler le rendu" lors d'un blocage** ; vous devez tuer VEGAS via le Gestionnaire des tâches dans ce cas.
@ru Примечание: Тестирование показывает, что эта функция **не решает проблему «нельзя отменить рендеринг» при зависании**; в этом случае вы должны завершить VEGAS через Диспетчер задач.

<br>

@en Q: How to render **mov files with alpha channel**?
@zh Q：如何渲染**带 alpha 通道的 mov 文件**？
@zh-hant Q：如何算繪**帶 alpha 通道的 mov 檔案**？
@ja Q: **アルファチャンネル付き mov ファイル**をレンダリングする方法は？
@ko Q: **알파 채널이 있는 mov 파일**을 렌더링하는 방법은 무엇입니까?
@de F: Wie rendere ich **mov-Dateien mit Alphakanal**?
@fr Q : Comment rendre **des fichiers mov avec canal alpha** ?
@ru В: Как отрендерить **файлы mov с альфа-каналом**?

@en A:
@zh A：
@zh-hant A：
@ja A:
@ko A:
@de A:
@fr R :
@ru О:

@en - **QuickTime Plugin <small>(VP22 and below. Good compression for static images, small file size.)</small>**
@zh - **QuickTime 插件 <small>（22 及以下版本通用。画面静态时，压缩效果比其他格式好，文件小。）</small>**
@zh-hant - **QuickTime 外掛程式 <small>（22 及以下版本通用。畫面靜態時，壓縮效果比其他格式好，檔案小。）</small>**
@ja - **QuickTime プラグイン <small>（VP22 以下。静止画の場合、圧縮効率が良く、ファイルサイズが小さい。）</small>**
@ko - **QuickTime 플러그인 <small>(VP22 이하. 정적 이미지에 대한 압축 효과가 좋고 파일 크기가 작습니다.)</small>**
@de - **QuickTime-Plugin <small>(VP22 und darunter. Gute Kompression für statische Bilder, kleine Dateigröße.)</small>**
@fr - **Plugin QuickTime <small>(VP22 et moins. Bonne compression pour les images statiques, petite taille de fichier.)</small>**
@ru - **Плагин QuickTime <small>(VP22 и ниже. Хорошее сжатие для статических изображений, небольшой размер файла.)</small>**

@en   1.  Install QT Lite or QuickTime. **`QT Lite 4.1.0`** is recommended. For newer VP, also **`Preferences -> Deprecated Features -> Enable QuickTime plug-in`**.
@zh   1. 安装 QT Lite 或者 QuickTime。一般推荐安装 **`QT Lite 4.1.0`** 比较方便。高版本 vv 还需要在 `首选项 -> 停止使用的功能` 中 **`启用 QuickTime 插件`**。
@zh-hant   1. 安裝 QT Lite 或者 QuickTime。一般推薦安裝 **`QT Lite 4.1.0`** 比較方便。高版本 vv 還需要在 `首選項 -> 停止使用的功能` 中 **`啟用 QuickTime 外掛程式`**。
@ja   1.  QT Lite または QuickTime をインストールします。 **`QT Lite 4.1.0`** が推奨されます。新しい VP の場合、 **`プリファレンス -> 非推奨機能 -> QuickTime プラグインを有効にする`** も必要です。
@ko   1.  QT Lite 또는 QuickTime을 설치하십시오. **`QT Lite 4.1.0`** 을 권장합니다. 새 VP의 경우 **`환경설정 -> 사용 중단된 기능 -> QuickTime 플러그인 활성화`** 도 필요합니다.
@de   1.  Installieren Sie QT Lite oder QuickTime. **`QT Lite 4.1.0`** wird empfohlen. Für neuere VP auch **`Einstellungen -> Eingestellte Funktionen -> QuickTime-Plugin aktivieren`**.
@fr   1.  Installez QT Lite ou QuickTime. **`QT Lite 4.1.0`** est recommandé. Pour les nouveaux VP, aussi **`Préférences -> Fonctions dépréciées -> Activer le plug-in QuickTime`**.
@ru   1.  Установите QT Lite или QuickTime. Рекомендуется **`QT Lite 4.1.0`**. Для более новых VP также **`Настройки -> Устаревшие функции -> Включить плагин QuickTime (Preferences -> Deprecated Features -> Enable QuickTime plug-in)`**.

@en   2.  In render template list, select `QuickTime` on the left. Choose any template on the right, click `Customize Template`, adjust parameters as shown:
@zh   2. 在选择渲染模板界面的左侧中选择 `QuickTime`，右侧随便找一个模板，自定义模板，更改相关参数，如下图所示：
@zh-hant   2. 在選擇算繪範本介面的左側中選擇 `QuickTime`，右邊隨便找一個範本，自定義範本，更改相關參數，如下圖所示：
@ja   2.  レンダーテンプレートリストで左側の `QuickTime` を選択します。右側で任意のテンプレートを選択し、`テンプレートのカスタマイズ` をクリックし、以下のようにパラメーターを調整します：
@ko   2.  렌더링 템플릿 목록에서 왼쪽에 `QuickTime`을 선택합니다. 오른쪽에서 임의의 템플릿을 선택하고 `템플릿 사용자 정의`를 클릭하고 그림과 같이 매개변수를 조정합니다:
@de   2.  In Render-Vorlagenliste wählen Sie links `QuickTime`. Wählen Sie rechts eine beliebige Vorlage, klicken Sie `Vorlage anpassen`, passen Sie Parameter wie gezeigt an:
@fr   2.  Dans la liste des modèles de rendu, sélectionnez `QuickTime` à gauche. Choisissez n'importe quel modèle à droite, cliquez `Personnaliser le modèle`, ajustez les paramètres comme montré :
@ru   2.  В списке шаблонов рендеринга выберите `QuickTime` слева. Выберите любой шаблон справа, нажмите `Настроить шаблон (Customize Template)`, настройте параметры, как показано:

<ImageOnDemand src="vegtips/image027_render_alpha_quicktime.png" />

@en   3.  Save template and render.
@zh   3. 保存模板。渲染。
@zh-hant   3. 儲存範本。算繪。
@ja   3.  テンプレートを保存し、レンダリングします。
@ko   3.  템플릿 저장 및 렌더링.
@de   3.  Vorlage speichern und rendern.
@fr   3.  Sauvegardez le modèle et rendez.
@ru   3.  Сохраните шаблон и рендерите.

@en   Due to poor compatibility, QuickTime format is listed under `Deprecated Features`. Testing shows importing many QuickTime mov files into VEGAS can cause issues (read failures, lag). Also, alpha channel isn't displayed by default on import; needs manual change. For compatibility, Apple ProRes is recommended.
@zh   因为兼容性比较差，QuickTime 格式已经被列入为 `停止使用的功能`。经测试，Vegas 自身如果导入进超过一百多个 QuickTime 格式的 mov 文件，会出现各种问题，如文件无法读取、界面异常卡顿等情况；且将其导入进 Vegas 时，默认不会显示 alpha 通道，需要手动改。从兼容性的角度来看，建议使用 Apple ProRes 格式。
@zh-hant   因為相容性比較差，QuickTime 格式已經被列入為 `停止使用的功能`。經測試，Vegas 自身如果匯入進超過一百多個 QuickTime 格式的 mov 檔案，會出現各種問題，如檔案無法讀取、介面異常卡頓等情況；且將其匯入進 Vegas 時，預設不會顯示 alpha 通道，需要手動改。從相容性的角度來看，建議使用 Apple ProRes 格式。
@ja   互換性が悪いため、QuickTime 形式は `非推奨機能` にリストされています。テストでは、多くの QuickTime mov ファイルを VEGAS にインポートすると問題（読み取り失敗、ラグ）が発生します。また、インポート時はアルファチャンネルはデフォルトで表示されず、手動で変更が必要です。互換性のため、Apple ProRes が推奨されます。
@ko   호환성이 나쁘기 때문에 QuickTime 형식은 `사용 중단된 기능` 아래에 나열됩니다. 테스트 결과 많은 QuickTime mov 파일을 VEGAS로 가져오면 문제가 발생할 수 있습니다(읽기 실패, 지연). 또한 가져올 때 알파 채널이 기본적으로 표시되지 않습니다. 수동 변경이 필요합니다. 호환성을 위해 Apple ProRes를 권장합니다.
@de   Aufgrund schlechter Kompatibilität ist QuickTime-Format unter `Eingestellte Funktionen` gelistet. Tests zeigen, dass das Importieren vieler QuickTime mov-Dateien in VEGAS Probleme verursachen kann (Lesefehler, Verzögerung). Außerdem wird Alphakanal standardmäßig beim Import nicht angezeigt; muss manuell geändert werden. Für Kompatibilität wird Apple ProRes empfohlen.
@fr   En raison de la mauvaise compatibilité, le format QuickTime est listé sous `Fonctions dépréciées`. Les tests montrent que l'importation de nombreux fichiers mov QuickTime dans VEGAS peut causer des problèmes (échecs de lecture, lenteur). Aussi, le canal alpha n'est pas affiché par défaut à l'importation ; nécessite un changement manuel. Pour la compatibilité, Apple ProRes est recommandé.
@ru   Из-за плохой совместимости формат QuickTime указан в `Устаревшие функции`. Тестирование показывает, что импорт многих файлов mov QuickTime в VEGAS может вызвать проблемы (сбои чтения, задержки). Кроме того, альфа-канал не отображается по умолчанию при импорте; требует ручного изменения. Для совместимости рекомендуется Apple ProRes.

@en   **The VP23 update broke QuickTime compatibility, preventing the import and rendering of QuickTime-encoded MOV files. The 2026 build 143 fixed the inability to import QuickTime-encoded files, but rendering QuickTime MOV files is still not supported.**
@zh   **23 大版本更新破坏了对 QuickTime 的兼容，无法导入和渲染 QuickTime 编码的 MOV 文件。2026 build 143 版本，修复了 QuickTime 编码无法导入的问题，但仍然不支持渲染 QuickTime MOV 文件。**
@zh-hant   **23 大版本更新破壞了對 QuickTime 的相容，無法匯入和算繪 QuickTime 編碼的 MOV 檔案。2026 build 143 版本修復了無法匯入 QuickTime 編碼檔案的問題，但仍然不支援算繪 QuickTime MOV 檔案。**
@ja   **VP23 のメジャーアップデートにより QuickTime 互換性が破壊され、QuickTime エンコードの MOV ファイルのインポートおよびレンダリングができなくなりました。2026 年のビルド 143 では QuickTime エンコードのファイルがインポートできない問題が修正されましたが、QuickTime MOV ファイルのレンダリングは引き続きサポートされていません。**
@ko   **VP23 주요 업데이트로 QuickTime 호환성이 손상되어 QuickTime 인코딩된 MOV 파일을 가져오거나 렌더링할 수 없게 되었습니다. 2026 빌드 143에서 QuickTime 인코딩 파일을 가져올 수 없는 문제가 해결되었지만 QuickTime MOV 파일 렌더링은 여전히 지원되지 않습니다.**
@de   **Das VP23-Update hat die QuickTime-Kompatibilität zerstört, sodass QuickTime-kodierte MOV-Dateien nicht mehr importiert oder gerendert werden können. Mit Build 143 von 2026 wurde das Problem des Imports von QuickTime-kodierten Dateien behoben, das Rendern von QuickTime-MOV-Dateien wird jedoch weiterhin nicht unterstützt.**
@fr   **La mise à jour VP23 a cassé la compatibilité QuickTime, rendant impossible l'importation et le rendu des fichiers MOV encodés en QuickTime. La version build 143 de 2026 a corrigé le problème d'importation des fichiers encodés en QuickTime, mais le rendu des fichiers MOV QuickTime n'est toujours pas pris en charge.**
@ru   **Обновление VP23 нарушило совместимость с QuickTime, из-за чего импорт и рендеринг файлов MOV, закодированных QuickTime, стали невозможны. В сборке 143 2026 года исправлена проблема с невозможностью импорта файлов QuickTime, но рендеринг QuickTime MOV-файлов по-прежнему не поддерживается.**

@en - **Apple ProRes Template <small>(VP18+. If template doesn't exist, this method is unavailable.)</small>**
@zh - **Apple ProRes 模板 <small>（18 及以上版本。若不存在对应模板，则说明无法通过此办法渲染。）</small>**
@zh-hant - **Apple ProRes 範本 <small>（18 及以上版本。若不存在對應範本，則說明無法通過此辦法算繪。）</small>**
@ja - **Apple ProRes テンプレート <small>（VP18+。テンプレートが存在しない場合、この方法は利用不可。）</small>**
@ko - **Apple ProRes 템플릿 <small>(VP18+. 템플릿이 존재하지 않으면 이 방법을 사용할 수 없습니다.)</small>**
@de - **Apple ProRes-Vorlage <small>(VP18+. Wenn Vorlage nicht existiert, ist diese Methode nicht verfügbar.)</small>**
@fr - **Modèle Apple ProRes <small>(VP18+. Si le modèle n'existe pas, cette méthode n'est pas disponible.)</small>**
@ru - **Шаблон Apple ProRes <small>(VP18+. Если шаблон не существует, этот метод недоступен.)</small>**

@en   As shown:
@zh   如下图所示：
@zh-hant   如下圖所示：
@ja   下図の通り：
@ko   그림과 같이:
@de   Wie gezeigt:
@fr   Comme montré :
@ru   Как показано:

<ImageOnDemand src="vegtips/image028_render_alpha_prores.png" />

@en - **[Voukoder](#recommended-render-plugin-voukoder) <small>(VP18+, Voukoder Classic version 12.0+.)</small>**
@zh - **[Voukoder 渲染插件](#渲染插件-voukoder-推荐) <small>（18 及以上版本，且 Voukoder Classic 版本需在 12.0 及以上。）</small>**
@zh-hant - **[Voukoder 算繪外掛程式](#算繪外掛程式-voukoder-推薦) <small>（18 及以上版本，且 Voukoder Classic 版本需在 12.0 及以上。）</small>**
@ja - **[Voukoder](#推奨レンダープラグイン-voukoder) <small>（VP18+、Voukoder Classic バージョン 12.0+。）</small>**
@ko - **[Voukoder](#권장-렌더링-플러그인-voukoder)<small>(VP18+, Voukoder Classic 버전 12.0+.)</small>**
@de - **[Voukoder](#empfohlenes-render-plugin-voukoder) <small>(VP18+, Voukoder Classic Version 12.0+.)</small>**
@fr - **[Voukoder](#plugin-de-rendu-recommandé-voukoder) <small>(VP18+, Voukoder Classic version 12.0+.)</small>**
@ru - **[Voukoder](#рекомендуемый-плагин-рендеринга-voukoder) <small>(VP18+, Voukoder Classic версия 12.0+.)</small>**

@en   In Voukoder templates, find those marked **`4:4:4 10 bit with alpha channel`** and render. Or customize: Output container `QuickTime (.mov)`, Video encoder `ProRes KS` or `QuickTime Animation`.
@zh   在 Voukoder 渲染插件的渲染模板中找到标注 **`4:4:4 10 bit 带 alpha 透明通道`** 的模板，渲染。也可以自定义渲染模板，输出容器选择`QuickTime (.mov)`，视频编码器选择 `ProRes KS` 或者 `QuickTime Animation`。
@zh-hant   在 Voukoder 算繪外掛程式的算繪範本中找到標註 **`4:4:4 10 bit 帶 alpha 透明通道`** 的範本，算繪。也可以自定義算繪範本，輸出容器選擇`QuickTime (.mov)`，影片編碼器選擇 `ProRes KS` 或者 `QuickTime Animation`。
@ja   Voukoder テンプレートで **`4:4:4 10 bit アルファチャンネル付き`** とマークされたものを見つけ、レンダリングします。またはカスタマイズ：出力コンテナ `QuickTime (.mov)`、ビデオエンコーダ `ProRes KS` または `QuickTime Animation`。
@ko   Voukoder 템플릿에서 **`알파 채널이 있는 4:4:4 10비트`** 로 표시된 템플릿을 찾아 렌더링합니다. 또는 사용자 정의: 출력 컨테이너 `QuickTime (.mov)`, 비디오 인코더 `ProRes KS` 또는 `QuickTime Animation`.
@de   In Voukoder-Vorlagen finden Sie die mit **`4:4:4 10 Bit mit Alphakanal`** gekennzeichneten und rendern. Oder anpassen: Ausgabe-Container `QuickTime (.mov)`, Video-Encoder `ProRes KS` oder `QuickTime Animation`.
@fr   Dans les modèles Voukoder, trouvez ceux marqués **`4:4:4 10 bit avec canal alpha`** et rendez. Ou personnalisez : Conteneur de sortie `QuickTime (.mov)`, Encodeur vidéo `ProRes KS` ou `QuickTime Animation`.
@ru   В шаблонах Voukoder найдите те, что отмечены **`4:4:4 10 bit с альфа-каналом`**, и рендерите. Или настройте: Выходной контейнер `QuickTime (.mov)`, Видеокодировщик `ProRes KS` или `QuickTime Animation`.

<br>

@en Q: Preview or rendered file has **color difference/inconsistency** compared to the original media?
@zh Q：预览时画面或者渲染出来的文件，与**原始媒体文件的颜色不一致，有色差**？
@zh-hant Q：預覽時畫面或者算繪出來的檔案，與**原始媒體檔案的顏色不一致，有色差**？
@ja Q: プレビューまたはレンダリングされたファイルが、元のメディアと**色差/不一致**がある？
@ko Q: 미리보기 또는 렌더링된 파일이 원본 미디어와 비교하여 **색상 차이/불일치**가 있습니까?
@de F: Vorschau oder gerenderte Datei hat **Farbunterschied/Inkonsistenz** im Vergleich zum Originalmedium?
@fr Q : L'aperçu ou le fichier rendu a **une différence/incohérence de couleur** par rapport au média original ?
@ru В: Предварительный просмотр или отрендеренный файл имеет **цветовую разницу/несоответствие** по сравнению с исходным медиа?

@en A1: In VP17 and below, **color space** settings in Project Properties and Render Template can cause **color shifts**.
@zh A1：vv17 及以下版本中，由于项目属性和渲染模板的**色彩空间**问题，在预览和渲染时有可能会与原始媒体文件**产生色差**。
@zh-hant A1：vv17 及以下版本中，由於專案屬性和算繪範本的**色彩空間**問題，在預覽和算繪時有可能會與原始媒體檔案**產生色差**。
@ja A1: VP17 以下では、プロジェクトプロパティとレンダーテンプレートの**色空間**設定により、**色ずれ**が発生する可能性があります。
@ko A1: VP17 이하에서는 프로젝트 속성 및 렌더링 템플릿의 **색상 공간** 설정이 **색상 이동**을 유발할 수 있습니다.
@de A1: In VP17 und darunter können **Farbraum**-Einstellungen in Projekteigenschaften und Render-Vorlage **Farbverschiebungen** verursachen.
@fr A1 : Dans VP17 et moins, les paramètres **d'espace colorimétrique** dans Propriétés du projet et Modèle de rendu peuvent causer des **décalages de couleur**.
@ru О1: В VP17 и ниже настройки **цветового пространства** в Свойствах проекта и Шаблоне рендеринга могут вызывать **сдвиги цвета**.

@en Three solutions:
@zh 解决办法有以下三种：
@zh-hant 解決辦法有以下三種：
@ja 3 つの解決策：
@ko 세 가지 해결책:
@de Drei Lösungen:
@fr Trois solutions :
@ru Три решения:

@en 1.  **Use [Voukoder](#recommended-render-plugin-voukoder), create a template with `Filters` to convert color space.**
@zh 1. **使用 [Voukoder 渲染插件](#渲染插件-voukoder-推荐)，用 `滤镜` 制作能够转换色彩空间的模板。**
@zh-hant 1. **使用 [Voukoder 算繪外掛程式](#算繪外掛程式-voukoder-推薦)，用 `濾鏡` 製作能夠轉換色彩空間的範本。**
@ja 1.  **[Voukoder](#推奨レンダープラグイン-voukoder) を使用し、色空間を変換する `フィルター` を持つテンプレートを作成。**
@ko 1.  **[Voukoder](#권장-렌더링-플러그인-voukoder) 사용, 색상 공간을 변환하는 `필터`가 있는 템플릿 생성.**
@de 1.  **Verwenden Sie [Voukoder](#empfohlenes-render-plugin-voukoder), erstellen Sie eine Vorlage mit `Filtern`, um Farbraum zu konvertieren.**
@fr 1.  **Utilisez [Voukoder](#plugin-de-rendu-recommandé-voukoder), créez un modèle avec `Filtres` pour convertir l'espace colorimétrique.**
@ru 1.  **Используйте [Voukoder](#рекомендуемый-плагин-рендеринга-voukoder), создайте шаблон с `Фильтрами (Filters)` для преобразования цветового пространства.**

<ImageOnDemand src="vegtips/image040_voukoder_color_space.png" />

@en 2.  Upgrade to VP18+. When opening an old project in new VP, change `Pixel format` in `File->Properties` from `Legacy 8-bit (video levels)` to **`8-bit (full range)`**, and **don't use render templates created in old VP**.
@zh 2. 升 vv18 及以上版本。旧版的工程在新版 vv 中打开后，需要在左上角 `文件-属性` 中将 `像素格式` 这一栏从 `旧版 8 位(视频级别)` 改成 **`8 位(全范围)`**”，并且渲染时**不要使用旧版 vv 所创建的渲染模板**。
@zh-hant 2. 升 vv18 及以上版本。舊版的工程在新版 vv 中開啟後，需要在左上角 `檔案-內容` 中將 `像素格式` 這一欄從 `舊版 8 位(影片級別)` 改成 **`8 位(全範圍)`**”，並且算繪時**不要使用舊版 vv 所建立的算繪範本**。
@ja 2.  VP18+ にアップグレード。古いプロジェクトを新しい VP で開くとき、 `ファイル->プロパティ` の `ピクセル形式` を `レガシー 8 ビット（ビデオレベル）` から **`8 ビット（フルレンジ）`** に変更し、**古い VP で作成されたレンダーテンプレートを使用しない**。
@ko 2.  VP18+로 업그레이드합니다. 새 VP에서 이전 프로젝트를 열 때 `파일->속성`의 `픽셀 형식`을 `레거시 8비트(비디오 레벨)`에서 **`8비트(전체 범위)`** 로 변경하고 **이전 VP에서 생성된 렌더링 템플릿을 사용하지 마십시오**.
@de 2.  Upgrade auf VP18+. Wenn ein altes Projekt in neuem VP geöffnet wird, ändern Sie `Pixelformat` in `Datei->Eigenschaften` von `Legacy 8-Bit (Videostufen)` zu **`8-Bit (Vollbereich)`**, und **verwenden Sie keine Render-Vorlagen, die in altem VP erstellt wurden**.
@fr 2.  Mettez à niveau vers VP18+. Lors de l'ouverture d'un ancien projet dans le nouveau VP, changez `Format de pixel` dans `Fichier->Propriétés` de `8-bit hérité (niveaux vidéo)` à **`8-bit (gamme complète)`**, et **n'utilisez pas les modèles de rendu créés dans l'ancien VP**.
@ru 2.  Обновитесь до VP18+. При открытии старого проекта в новом VP измените `Формат пикселей (Pixel format)` в `Файл->Свойства (File->Properties)` с `Устаревший 8-битный (видеоуровни) (Legacy 8-bit (video levels))` на **`8-битный (полный диапазон) (8-bit (full range))`**, и **не используйте шаблоны рендеринга, созданные в старом VP**.

@en 3.  Apply the `Levels` FX preset **`Studio RGB to Computer RGB`** to media files.
@zh 3. 给媒体文件套用 `色阶` FX 的 **`演播室级 RGB 到计算机 RGB`** 预设。
@zh-hant 3. 給媒體檔案套用 `色階` FX 的 **`演播室級 RGB 到計算機 RGB`** 預設。
@ja 3.  メディアファイルに `レベル` FX プリセット **`スタジオ RGB からコンピューター RGB`** を適用。
@ko 3.  미디어 파일에 `레벨` FX 프리셋 **`스튜디오 RGB에서 컴퓨터 RGB로`** 를 적용합니다.
@de 3.  Wenden Sie den `Pegel` FX-Voreinstellung **`Studio-RGB zu Computer-RGB`** auf Mediendateien an.
@fr 3.  Appliquez le préréglage FX **`Levels`** **`RGB studio vers RGB ordinateur`** aux fichiers multimédias.
@ru 3.  Примените к медиафайлам предустановку FX **`Уровни (Levels)`** **`Студийный RGB в компьютерный RGB (Studio RGB to Computer RGB)`**.

@en Reference: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/why-magix-avc-mp4-encoder-changes-the-color-of-the-original-video--142942/
@zh 参见：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/why-magix-avc-mp4-encoder-changes-the-color-of-the-original-video--142942/
@zh-hant 參見：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/why-magix-avc-mp4-encoder-changes-the-color-of-the-original-video--142942/
@ja 参照： https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/why-magix-avc-mp4-encoder-changes-the-color-of-the-original-video--142942/
@ko 참조: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/why-magix-avc-mp4-encoder-changes-the-color-of-the-original-video--142942/
@de Referenz: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/why-magix-avc-mp4-encoder-changes-the-color-of-the-original-video--142942/
@fr Référence : https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/why-magix-avc-mp4-encoder-changes-the-color-of-the-original-video--142942/
@ru Ссылка: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/why-magix-avc-mp4-encoder-changes-the-color-of-the-original-video--142942/

<br>

@en A2: If source is **HDR footage**, change the **Project Properties `Color space` <sup>Fig 1</sup>** to match the source <sup>Fig 2</sup>. This switches the entire project to 10-bit color depth, making rendering slower than 8-bit.
@zh A2：若原素材是 **HDR 素材**，请将**项目属性的 `色彩空间` <sup>图 1</sup>** 更改至与原素材 <sup>图 2</sup> 一致。这会将整个项目更改为 10bit 色深，渲染也会比原先的 8bit 色深慢很多。
@zh-hant A2：若原素材是 **HDR 素材**，請將**專案屬性的 `色彩空間` <sup>圖 1</sup>** 更改至與原素材 <sup>圖 2</sup> 一致。這會將整個專案更改為 10bit 色深，算繪也會比原先的 8bit 色深慢很多。
@ja A2: ソースが **HDR 素材**の場合、**プロジェクトプロパティ `色空間` <sup>図 1</sup>** をソース <sup>図 2</sup> に一致するように変更します。これにより、プロジェクト全体が 10 ビット色深度に切り替わり、8 ビットよりレンダリングが遅くなります。
@ko A2: 소스가 **HDR 영상**인 경우 **프로젝트 속성 `색상 공간` <sup>그림 1</sup>** 을 소스 <sup>그림 2</sup>와 일치하도록 변경하십시오. 이렇게 하면 전체 프로젝트가 10비트 색상 깊이로 전환되어 렌더링이 8비트보다 느려집니다.
@de A2: Wenn Quelle **HDR-Material** ist, ändern Sie die **Projekteigenschaften `Farbraum` <sup>Abb. 1</sup>**, um der Quelle <sup>Abb. 2</sup> zu entsprechen. Dies schaltet das gesamte Projekt auf 10-Bit-Farbtiefe um, macht Rendering langsamer als 8-Bit.
@fr A2 : Si la source est une **séquence HDR**, changez **`Espace colorimétrique` des Propriétés du projet <sup>Fig 1</sup>** pour correspondre à la source <sup>Fig 2</sup>. Cela basculera l'ensemble du projet en profondeur de couleur 10 bits, rendant le rendu plus lent que 8 bits.
@ru О2: Если источник — **HDR-материал**, измените **`Цветовое пространство (Color space)` в Свойствах проекта <sup>Рис. 1</sup>**, чтобы оно соответствовало источнику <sup>Рис. 2</sup>. Это переключает весь проект на 10-битную глубину цвета, делая рендеринг медленнее, чем 8-битный.

<ImageOnDemand src="vegtips/image029_color_space_hdr_project.png" />

<ImageOnDemand src="vegtips/image030_color_space_hdr_footage.png" />

@en Alternatively, keep project color space unchanged and apply a color space conversion LUT to the source footage. Use the built-in `LUT Filter` FX or the newer `Color Grading` feature. The key is finding a LUT that converts the source color space to `Rec.709` standard. This loses HDR details, so if you don't plan to output HDR, avoid recording HDR footage initially.
@zh 或者，也可以不改项目的色彩空间，而是给原素材添加转换色彩空间的 LUT。这里用自带的 `LUT 筛选器` FX 或者高版本的 `颜色分级` 功能都可以，重点在于你要找到能将原素材的色彩空间转换成 `Rec.709` 标准的 LUT 文件。这样做会失去原素材的 HDR 细节，所以如果本来就没打算最终输出 HDR 视频，建议在一开始录制素材时就不要录制 HDR 素材。
@zh-hant 或者，也可以不改專案的色彩空間，而是給原素材添加轉換色彩空間的 LUT。這裡用自帶的 `LUT 篩選器` FX 或者高版本的 `顏色分級` 功能都可以，重點在於你要找到能將原素材的色彩空間轉換成 `Rec.709` 標準的 LUT 檔案。這樣做會失去原素材的 HDR 細節，所以如果本來就沒打算最終輸出 HDR 影片，建議在一開始錄製素材時就不要錄製 HDR 素材。
@ja または、プロジェクト色空間を変更せずに、ソース素材に色空間変換 LUT を適用します。組み込みの `LUT フィルター` FX または新しい `カラーグレーディング` 機能を使用します。鍵は、ソース色空間を `Rec.709` 標準に変換する LUT を見つけることです。これにより HDR ディテールが失われるため、HDR を出力する予定がない場合は、最初から HDR 素材を録画しないようにします。
@ko 또는 프로젝트 색상 공간을 변경하지 않고 소스 영상에 색상 공간 변환 LUT를 적용합니다. 내장 `LUT 필터` FX 또는 새로운 `색상 등급` 기능을 사용합니다. 핵심은 소스 색상 공간을 `Rec.709` 표준으로 변환하는 LUT를 찾는 것입니다. 이렇게 하면 HDR 디테일이 손실되므로 HDR 출력을 계획하지 않았다면 처음부터 HDR 영상을 녹화하지 마십시오.
@de Alternativ halten Sie Projektfarbraum unverändert und wenden eine Farbraumkonvertierungs-LUT auf das Quellenmaterial an. Verwenden Sie den eingebauten `LUT-Filter` FX oder die neuere `Farbkorrektur`-Funktion. Der Schlüssel ist, eine LUT zu finden, die den Quellfarbraum in `Rec.709`-Standard konvertiert. Dies verliert HDR-Details, also wenn Sie nicht planen, HDR auszugeben, vermeiden Sie von Anfang an die Aufnahme von HDR-Material.
@fr Alternativement, gardez l'espace colorimétrique du projet inchangé et appliquez une LUT de conversion d'espace colorimétrique à la séquence source. Utilisez le FX intégré `Filtre LUT` ou la fonctionnalité plus récente `Étalonnage couleur`. La clé est de trouver une LUT qui convertit l'espace colorimétrique source en standard `Rec.709`. Cela perd les détails HDR, donc si vous ne prévoyez pas de sortie HDR, évitez d'enregistrer des séquences HDR initialement.
@ru В качестве альтернативы оставьте цветовое пространство проекта неизменным и примените к исходному материалу LUT преобразования цветового пространства. Используйте встроенный FX `Фильтр LUT (LUT Filter)` или новую функцию `Цветокоррекция (Color Grading)`. Ключ — найти LUT, который преобразует цветовое пространство источника в стандарт `Rec.709`. Это приводит к потере деталей HDR, поэтому, если вы не планируете выводить HDR, избегайте записи HDR-материала изначально.

<br>

@en Q: Rendered video has **color shifts (red becomes purple, blue becomes yellow, etc.)**?
@zh Q：渲染出来的视频，**怎么变色了（红的变紫、蓝的变黄等）**？
@zh-hant Q：算繪出來的影片，**怎麼變色了（紅的變紫、藍的變黃等）**？
@ja Q: レンダリングされたビデオに**色ずれ（赤が紫、青が黄など）** がある？
@ko Q: 렌더링된 비디오에 **색상 변화(빨강이 보라, 파랑이 노랑 등)** 가 있습니까?
@de F: Gerenderte Videos haben **Farbverschiebungen (Rot wird Lila, Blau wird Gelb, usw.)**?
@fr Q : La vidéo rendue a **des décalages de couleur (rouge devient violet, bleu devient jaune, etc.)** ?
@ru В: В отрендеренном видео **сдвиги цвета (красный становится фиолетовым, синий становится желтым и т.д.)**?

<ImageOnDemand src="vegtips/image031_bgra_color.png" />

@en A: AMD GPU driver issue. Try:
@zh A：A 卡驱动的问题。可以尝试以下几种方法：
@zh-hant A：A 卡驅動的問題。可以嘗試以下幾種方法：
@ja A: AMD GPU ドライバーの問題です。試します：
@ko A: AMD GPU 드라이버 문제입니다. 시도해 보십시오:
@de A: AMD-GPU-Treiberproblem. Versuchen Sie:
@fr R : Problème de pilote GPU AMD. Essayez :
@ru О: Проблема с драйвером AMD GPU. Попробуйте:

@en - **[Disable GPU Acceleration](#1-disable-gpu-acceleration).**
@zh - **[关闭 GPU 加速](#1-关闭-gpu-加速)**。
@zh-hant - **[關閉 GPU 加速](#1-關閉-gpu-加速)**。
@ja - **[GPU アクセラレーションを無効](#1-gpu-アクセラレーションを無効にする)。**
@ko - **[GPU 가속 비활성화](#1-gpu-가속-비활성화).**
@de - **[GPU-Beschleunigung deaktivieren](#1-gpu-beschleunigung-deaktivieren).**
@fr - **[Désactiver l'accélération GPU](#1-désactiver-l-accélération-gpu).**
@ru - **[Отключить ускорение GPU](#1-отключить-аппаратное-ускорение-gpu).**

@en - Roll back AMD driver to **23.7.2** or earlier, or update to **23.11.1** or later.
@zh - 将 A 卡驱动版本回退至 **23.7.2** 及以前，或者升级到 **23.11.1** 及以后。
@zh-hant - 將 A 卡驅動版本回退至 **23.7.2** 及以前，或者升級到 **23.11.1** 及以後。
@ja - AMD ドライバーを **23.7.2** 以前にロールバック、または **23.11.1** 以降に更新。
@ko - AMD 드라이버를 **23.7.2** 이하로 롤백하거나 **23.11.1** 이상으로 업데이트하십시오.
@de - AMD-Treiber auf **23.7.2** oder früher zurücksetzen, oder auf **23.11.1** oder später aktualisieren.
@fr - Revenir au pilote AMD **23.7.2** ou antérieur, ou mettre à jour vers **23.11.1** ou plus.
@ru - Откатите драйвер AMD до **23.7.2** или ранее или обновите до **23.11.1** или позже.

@en - Upgrading to `21 build 187` or later fixes this.
@zh - 目前 `21 build 187` 及以上版本已修复此问题，因此也可以选择升级 Vegas 版本。
@zh-hant - 目前 `21 build 187` 及以上版本已修復此問題，因此也可以選擇升級 Vegas 版本。
@ja - `21 build 187` 以降へのアップグレードで修正。
@ko - `21 build 187` 이상으로 업그레이드하면 이 문제가 해결됩니다.
@de - Upgrade auf `21 Build 187` oder später behebt dies.
@fr - Mettre à niveau vers `21 build 187` ou plus corrige cela.
@ru - Обновление до `21 build 187` или позже исправляет это.

@en - **Before rendering**, add the built-in **`Channel Blend` FX to the Video Output Bus, select preset `RGBA -> BGRA`**.
@zh - **在渲染前**，给视频输出总线加一个自带的 **`通道混合` FX，预设选 `RGBA -> BGRA`**。
@zh-hant - **在算繪前**，給影片輸出匯流排加一個自帶的 **`通道混合` FX，預設選 `RGBA -> BGRA`**。
@ja - **レンダリング前**、ビデオ出力バスに組み込み **`チャンネルブレンド` FX を追加、プリセット `RGBA -> BGRA` を選択。**
@ko - **렌더링 전**에 내장 **`채널 혼합` FX를 비디오 출력 버스에 추가하고 프리셋 `RGBA -> BGRA` 선택.**
@de - **Vor dem Rendern** fügen Sie den eingebauten **`Kanal-Mischen` FX zum Video-Ausgangs-Bus hinzu, wählen Sie Voreinstellung `RGBA -> BGRA`**.
@fr - **Avant le rendu**, ajoutez le FX intégré **`Mélange de canaux` au bus de sortie vidéo, sélectionnez le préréglage `RGBA -> BGRA`**.
@ru - **Перед рендерингом** добавьте встроенный FX **`Смешивание каналов (Channel Blend)` в Шину видеовыхода (Video Output Bus), выберите предустановку `RGBA -> BGRA`**.

@en Reference: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/problem-with-rendering--142292/
@zh 参见：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/problem-with-rendering--142292/
@zh-hant 參見：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/problem-with-rendering--142292/
@ja 参照： https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/problem-with-rendering--142292/
@ko 참조: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/problem-with-rendering--142292/
@de Referenz: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/problem-with-rendering--142292/
@fr Référence : https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/problem-with-rendering--142292/
@ru Ссылка: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/problem-with-rendering--142292/

<br>

@en Q: **[VP18 and below] Cannot render videos taller than `2304` (e.g., vertical 4K)**?
@zh Q：【**18 及以下**】**无法渲染高度大于 `2304` 的视频（想渲染竖屏 4K）**？
@zh-hant Q：【**18 及以下**】**無法算繪高度大於 `2304` 的影片（想算繪豎屏 4K）**？
@ja Q: **[VP18 以下] 高さ `2304` より大きいビデオ（例：縦向き 4K）をレンダリングできない**？
@ko Q: **[VP18 이하] `2304`보다 높은 비디오(예: 세로 4K)를 렌더링할 수 없음**?
@de F: **[VP18 und darunter] Kann keine Videos mit Höhe über `2304` rendern (z. B. vertikales 4K)**?
@fr Q : **[VP18 et moins] Ne peut pas rendre des vidéos plus hautes que `2304` (par ex. 4K vertical)** ?
@ru В: **[VP18 и ниже] Нельзя отрендерить видео выше `2304` (например, вертикальное 4K)**?

@en A: In older versions, trying to set height above `2304` in a native template's custom dialog automatically reverts to `2304`. The easiest solution is to **use [Voukoder](#recommended-render-plugin-voukoder)** after setting your desired project properties.
@zh A：对于旧版，如果你尝试自定义原生的渲染模板时，将高度更改为 `2304` 以上的值，会自动恢复为 `2304`，不让修改，也就是无法渲染竖屏 4K。最方便的办法还是**将项目属性改为你想要的值以后，使用 [Voukoder 渲染插件](#渲染插件-voukoder-推荐)**，而不是用原生渲染模板。
@zh-hant A：對於舊版，如果你嘗試自定義原生的算繪範本時，將高度更改為 `2304` 以上的值，會自動恢復為 `2304`，不讓修改，也就是無法算繪豎屏 4K。最方便的辦法還是**將專案屬性改為你想要的值以後，使用 [Voukoder 算繪外掛程式](#算繪外掛程式-voukoder-推薦)**，而不是用原生算繪範本。
@ja A: 古いバージョンでは、ネイティブテンプレートのカスタムダイアログで高さを `2304` より上に設定しようとすると、自動的に `2304` に戻ります。最も簡単な解決策は、プロジェクトプロパティを設定した後、 **[Voukoder](#推奨レンダープラグイン-voukoder) を使用**することです。
@ko A: 이전 버전에서는 기본 템플릿의 대화 상자에서 높이를 `2304` 이상으로 설정하려고 하면 자동으로 `2304`로 되돌아갑니다. 가장 쉬운 해결책은 원하는 프로젝트 속성을 설정한 후 **[Voukoder](#권장-렌더링-플러그인-voukoder)** 를 사용하는 것입니다.
@de A: In älteren Versionen versucht, Höhe über `2304` in einer nativen Vorlage im benutzerdefinierten Dialog festzulegen, wird automatisch auf `2304` zurückgesetzt. Die einfachste Lösung ist, nachdem Sie Ihre gewünschten Projekteigenschaften festgelegt haben, **[Voukoder](#empfohlenes-render-plugin-voukoder)** zu verwenden.
@fr R : Dans les anciennes versions, essayer de définir une hauteur supérieure à `2304` dans la boîte de dialogue personnalisée d'un modèle natif la réinitialise automatiquement à `2304`. La solution la plus simple est d'**utiliser [Voukoder](#plugin-de-rendu-recommandé-voukoder)** après avoir défini vos propriétés de projet souhaitées.
@ru О: В старых версиях попытка установить высоту выше `2304` в пользовательском диалоговом окне родного шаблона автоматически возвращает ее к `2304`. Самый простой способ — **использовать [Voukoder](#рекомендуемый-плагин-рендеринга-voukoder)** после установки нужных свойств проекта.

@en Here's a "bug exploit" method using native templates:
@zh 这里再介绍一个使用原生渲染模板的“卡 bug”办法：
@zh-hant 這裡再介紹一個使用原生算繪範本的“卡 bug”辦法：
@ja ネイティブテンプレートを使用した「バグ利用」方法：
@ko 다음은 기본 템플릿을 사용하는 "버그 활용" 방법입니다:
@de Hier ist eine "Bug-Ausnutzungs"-Methode mit nativen Vorlagen:
@fr Voici une méthode "exploitation de bug" utilisant des modèles natifs :
@ru Вот метод «использования ошибки» с родными шаблонами:

@en 1.  In Render As, choose a template allowing custom dimensions, like **`MAGIX AVC` or `MAGIX HEVC`**. On the right, pick a close template, click `Customize Template`.
@zh 1. 在渲染界面的左侧选择能够自定义宽高的渲染模板，比如 **`MAGIX AVC` 或 `MAGIX HEVC`** 这两个格式。在右侧找个你想要的最贴近的模板，点击 `自定义模板`。
@zh-hant 1. 在算繪介面的左側選擇能夠自定義寬高的算繪範本，比如 **`MAGIX AVC` 或 `MAGIX HEVC`** 這兩個格式。在右邊找個你想要的最貼近的範本，點選 `自定義範本`。
@ja 1.  レンダリング画面で、カスタム寸法が可能なテンプレート、例えば **`MAGIX AVC` または `MAGIX HEVC`** を選択。右側で近いテンプレートを選び、`テンプレートのカスタマイズ` をクリック。
@ko 1.  렌더링 대화 상자에서 사용자 정의 치수를 허용하는 템플릿을 선택합니다. 예: **`MAGIX AVC` 또는 `MAGIX HEVC`**. 오른쪽에서 가까운 템플릿을 선택하고 `템플릿 사용자 정의`를 클릭합니다.
@de 1.  In Rendern als wählen Sie eine Vorlage, die benutzerdefinierte Dimensionen erlaubt, wie **`MAGIX AVC` oder `MAGIX HEVC`**. Rechts wählen Sie eine nahe Vorlage, klicken Sie `Vorlage anpassen`.
@fr 1.  Dans Rendre sous, choisissez un modèle permettant des dimensions personnalisées, comme **`MAGIX AVC` ou `MAGIX HEVC`**. À droite, choisissez un modèle proche, cliquez `Personnaliser le modèle`.
@ru 1.  В «Рендерить как» выберите шаблон, позволяющий настраивать размеры, например **`MAGIX AVC` или `MAGIX HEVC`**. Справа выберите близкий шаблон, нажмите `Настроить шаблон (Customize Template)`.

@en 2.  Modify all parameters except height to your desired values, and **change the template name at the top, but DO NOT click the save button yet**.
@zh 2. 先将除了高度值以外的其他所有参数修改为你想要的值，并**修改最上方的模板名称，但不要点击右侧的保存按钮**。
@zh-hant 2. 先將除了高度值以外的其他所有參數修改為你想要的值，並**修改最上方的範本名稱，但不要點選右邊的儲存按鈕**。
@ja 2.  高さ以外のすべてのパラメーターを目的の値に変更し、**上部のテンプレート名を変更しますが、まだ保存ボタンをクリックしないでください**。
@ko 2.  높이를 제외한 모든 매개변수를 원하는 값으로 수정하고 **상단의 템플릿 이름을 변경하지만 아직 저장 버튼을 클릭하지 마십시오**.
@de 2.  Ändern Sie alle Parameter außer Höhe auf Ihre gewünschten Werte, und **ändern Sie den Vorlagennamen oben, aber klicken Sie NOCH NICHT auf die Speichern-Schaltfläche**.
@fr 2.  Modifiez tous les paramètres sauf la hauteur à vos valeurs souhaitées, et **changez le nom du modèle en haut, mais NE CLIQUEZ PAS encore sur le bouton de sauvegarde**.
@ru 2.  Измените все параметры, кроме высоты, на нужные вам значения, и **измените имя шаблона вверху, но НЕ нажимайте кнопку сохранения пока**.

@en 3.  Now, change the height to your desired value > `2304`. After typing, **DO NOT press `Enter` or `Tab`, or click elsewhere. Keep the cursor blinking in the height field, then click the save button next to the template name**.
@zh 3. 这时，修改高度值为所需的大于 `2304` 的值。输入完以后，不要按 `Enter` 或者 `Tab` 键，也不要点击任何其他位置，**保证输入光标在高度值的输入框上闪烁（即仍处于选中状态）时，点击模板名称右侧的保存按钮**。
@zh-hant 3. 這時，修改高度值為所需的大於 `2304` 的值。輸入完以後，不要按 `Enter` 或者 `Tab` 鍵，也不要點選任何其他位置，**保證輸入遊標在高度值的輸入框上閃爍（即仍處於選中狀態）時，點選範本名稱右邊的儲存按鈕**。
@ja 3.  ここで、高さを `2304` より大きい目的の値に変更します。入力後、 **`Enter` や `Tab` を押さず、他の場所をクリックしないでください。カーソルを高さフィールドで点滅させたまま、テンプレート名横の保存ボタンをクリックします**。
@ko 3.  이제 높이를 원하는 > `2304` 값으로 변경합니다. 입력 후 **`Enter` 또는 `Tab`을 누르거나 다른 곳을 클릭하지 마십시오. 커서가 높이 필드에서 깜박이는 상태를 유지한 후 템플릿 이름 옆의 저장 버튼을 클릭합니다**.
@de 3.  Jetzt ändern Sie die Höhe auf Ihren gewünschten Wert > `2304`. Nach der Eingabe **drücken Sie NICHT `Eingabe` oder `Tab`, oder klicken Sie woanders hin. Lassen Sie den Cursor im Höhenfeld blinken, dann klicken Sie auf die Speichern-Schaltfläche neben dem Vorlagennamen**.
@fr 3.  Maintenant, changez la hauteur à votre valeur souhaitée > `2304`. Après avoir tapé, **N'APPUYEZ PAS sur `Entrée` ou `Tab`, ou cliquez ailleurs. Gardez le curseur clignotant dans le champ hauteur, puis cliquez sur le bouton de sauvegarde à côté du nom du modèle**.
@ru 3.  Теперь измените высоту на нужное значение > `2304`. После ввода **НЕ нажимайте `Enter` или `Tab` и не щелкайте в другом месте. Держите курсор мигающим в поле высоты, затем нажмите кнопку сохранения рядом с именем шаблона**.

@en 4.  **After saving, click `Cancel`**. You'll notice it doesn't jump to your saved template, but the template is added to the list.
@zh 4. **保存完以后，点下方的 `取消`**。这样，你会发现它没有自动跳转到你保存的模板，但是模板确实被添加到了模板列表里。
@zh-hant 4. **儲存完以後，點下方的 `取消`**。這樣，你會發現它沒有自動跳轉到你儲存的範本，但是範本確實被添加到了範本列表裡。
@ja 4.  **保存後、 `キャンセル` をクリック**。保存したテンプレートに自動的にジャンプせず、テンプレートがリストに追加されたことがわかります。
@ko 4.  **저장 후 `취소`를 클릭합니다**. 저장한 템플릿으로 자동 이동하지 않지만 템플릿이 목록에 추가된 것을 알 수 있습니다.
@de 4.  **Nach dem Speichern klicken Sie auf `Abbrechen`**. Sie werden feststellen, dass es nicht zu Ihrer gespeicherten Vorlage springt, aber die Vorlage wurde zur Liste hinzugefügt.
@fr 4.  **Après sauvegarde, cliquez `Annuler`**. Vous remarquerez qu'il ne saute pas vers votre modèle sauvegardé, mais le modèle est ajouté à la liste.
@ru 4.  **После сохранения нажмите `Отмена (Cancel)`**. Вы заметите, что он не переходит к вашему сохраненному шаблону, но шаблон добавлен в список.

@en 5.  Use this new template. If you clicked `OK` after saving, it jumps to a template with a `*`, which is wrong. Use the one without `*` from the list.
@zh 5. 使用这个新的模板渲染。如果在保存模板后点了 `确定`，则会自动转到一个额外带 `*` 号的模板，这个模板是错的，不要用，仍需要你在模板列表里找到你保存的不带 `*` 号的模板。
@zh-hant 5. 使用這個新的範本算繪。如果在儲存範本後點了 `確定`，則會自動轉到一個額外帶 `*` 號的範本，這個範本是錯的，不要用，仍需要你在範本列表裡找到你儲存的不帶 `*` 號的範本。
@ja 5.  この新しいテンプレートを使用します。保存後 `OK` をクリックした場合、追加の `*` 付きテンプレートにジャンプしますが、これは間違いです。リストから `*` なしのものを使用します。
@ko 5.  이 새 템플릿을 사용하십시오. 저장 후 `확인`을 클릭하면 `*`가 있는 템플릿으로 이동하는데, 이것은 잘못된 것입니다. 목록에서 `*`가 없는 것을 사용하십시오.
@de 5.  Verwenden Sie diese neue Vorlage. Wenn Sie nach dem Speichern auf `OK` geklickt haben, springt es zu einer Vorlage mit `*`, was falsch ist. Verwenden Sie die ohne `*` aus der Liste.
@fr 5.  Utilisez ce nouveau modèle. Si vous avez cliqué `OK` après sauvegarde, il saute vers un modèle avec un `*`, ce qui est faux. Utilisez celui sans `*` de la liste.
@ru 5.  Используйте этот новый шаблон. Если вы нажали `OK` после сохранения, он переходит к шаблону с `*`, что неправильно. Используйте тот без `*` из списка.

@en - Note: This method cannot exceed the encoder's maximum limit (e.g., `4096*4096` for NVENC).
@zh - 注意：这个办法无法超过编码器的最大限制。比如对于 `NVENC` 编码器来说，最大限制是 `4096*4096`。
@zh-hant - 注意：這個辦法無法超過編碼器的最大限制。比如對於 `NVENC` 編碼器來說，最大限制是 `4096*4096`。
@ja - 注：この方法は、エンコーダーの最大制限（例：NVENC の場合 `4096*4096`）を超えられません。
@ko - 참고: 이 방법은 인코더의 최대 제한(예: NVENC의 경우 `4096*4096`)을 초과할 수 없습니다.
@de - Hinweis: Diese Methode kann die maximale Grenze des Encoders nicht überschreiten (z. B. `4096*4096` für NVENC).
@fr - Note : Cette méthode ne peut pas dépasser la limite maximale de l'encodeur (par ex. `4096*4096` pour NVENC).
@ru - Примечание: Этот метод не может превысить максимальный предел кодировщика (например, `4096*4096` для NVENC).

@en Reference: https://www.reddit.com/r/VegasPro/comments/wo1wpr/solution_to_max_height_reverting_back_to_2304/
@zh 参见：https://www.reddit.com/r/VegasPro/comments/wo1wpr/solution_to_max_height_reverting_back_to_2304/
@zh-hant 參見：https://www.reddit.com/r/VegasPro/comments/wo1wpr/solution_to_max_height_reverting_back_to_2304/
@ja 参照： https://www.reddit.com/r/VegasPro/comments/wo1wpr/solution_to_max_height_reverting_back_to_2304/
@ko 참조: https://www.reddit.com/r/VegasPro/comments/wo1wpr/solution_to_max_height_reverting_back_to_2304/
@de Referenz: https://www.reddit.com/r/VegasPro/comments/wo1wpr/solution_to_max_height_reverting_back_to_2304/
@fr Référence : https://www.reddit.com/r/VegasPro/comments/wo1wpr/solution_to_max_height_reverting_back_to_2304/
@ru Ссылка: https://www.reddit.com/r/VegasPro/comments/wo1wpr/solution_to_max_height_reverting_back_to_2304/

<br>

@en Q: After rendering, trying to play the project gives error: **`An error occurred starting playback. No request is enabled for this device.`**
@zh Q：进行过渲染操作后，尝试播放工程时报错：**`开始播放时发生错误。没有启用对此设备的请求。`**
@zh-hant Q：進行過算繪操作後，嘗試播放工程時報錯：**`開始播放時發生錯誤。沒有啟用對此裝置的請求。`**
@ja Q: レンダリング後、プロジェクトを再生しようとするとエラー：**`再生開始中にエラーが発生しました。このデバイスの要求が有効になっていません。`**
@ko Q: 렌더링 후 프로젝트 재생을 시도하면 오류: **`재생 시작 중 오류 발생. 이 장치에 대해 활성화된 요청이 없습니다.`**
@de F: Nach dem Rendern, Versuch, das Projekt abzuspielen, gibt Fehler: **`Beim Starten der Wiedergabe ist ein Fehler aufgetreten. Für dieses Gerät ist keine Anforderung aktiviert.`**
@fr Q : Après le rendu, essayer de lire le projet donne l'erreur : **`Une erreur s'est produite lors du démarrage de la lecture. Aucune demande n'est activée pour ce périphérique.`**
@ru В: После рендеринга попытка воспроизвести проект выдает ошибку: **`При запуске воспроизведения произошла ошибка. Для этого устройства не включен ни один запрос.`**

@en A: VEGAS requests microphone permission after rendering. If a mic is connected but VEGAS lacks permission, it errors. Fix: **Enable microphone permission for VEGAS in Windows Settings**. Alternatively, try switching audio devices in `Preferences -> Audio Device` or clicking `All Defaults`, then render again to see if it permanently fixes. (Switching once is temporary.) As a last resort, reinstall sound card drivers.
@zh A：Vegas 在渲染完毕后会请求一遍麦克风权限，如果电脑插了麦克风，而 Vegas 没有麦克风权限，则报错。解决办法是**在 Windows 设置中开启麦克风权限**。也可以尝试在 `首选项 -> 音频设备` 中切换其他音频设备，或者点右下角的 `全部默认`，再次渲染后，看能否永久解决。（切换一次可以临时解决，但不是永久的。）实在不行，可以尝试重装声卡驱动。
@zh-hant A：Vegas 在算繪完畢後會請求一遍麥克風許可權，如果電腦插了麥克風，而 Vegas 沒有麥克風許可權，則報錯。解決辦法是**在 Windows 設定中開啟麥克風許可權**。也可以嘗試在 `首選項 -> 音訊裝置` 中切換其他音訊裝置，或者點右下角的 `全部預設`，再次算繪後，看能否永久解決。（切換一次可以臨時解決，但不是永久的。）實在不行，可以嘗試重裝音效卡驅動。
@ja A: VEGAS はレンダリング後にマイクの許可を要求します。マイクが接続されていても VEGAS に許可がないとエラーになります。修正： **Windows 設定で VEGAS のマイク許可を有効にします**。または、 `プリファレンス -> オーディオデバイス` でオーディオデバイスを切り替えるか、`すべてデフォルト` をクリックし、再度レンダリングして恒久的に修正するか確認します。（一度の切り替えは一時的です。）最後の手段として、サウンドカードドライバーを再インストールします。
@ko A: VEGAS는 렌더링 후 마이크 권한을 요청합니다. 마이크가 연결되어 있지만 VEGAS에 권한이 없으면 오류가 발생합니다. 수정: **Windows 설정에서 VEGAS에 대한 마이크 권한 활성화**. 또는 `환경설정 -> 오디오 장치`에서 오디오 장치를 전환하거나 `모두 기본값`을 클릭한 후 다시 렌더링하여 영구적으로 수정되는지 확인합니다. (한 번 전환은 임시적입니다.) 최후의 수단으로 사운드 카드 드라이버를 다시 설치하십시오.
@de A: VEGAS fordert nach dem Rendern Mikrofonberechtigung an. Wenn ein Mikrofon angeschlossen ist, aber VEGAS keine Berechtigung hat, gibt es Fehler. Behebung: **Aktivieren Sie Mikrofonberechtigung für VEGAS in Windows-Einstellungen**. Alternativ versuchen Sie, Audiogeräte in `Einstellungen -> Audiogerät` zu wechseln oder auf `Alle Standard` zu klicken, dann erneut rendern, um zu sehen, ob es dauerhaft behebt. (Wechseln einmal ist vorübergehend.) Als letzten Ausweg Soundkartentreiber neu installieren.
@fr R : VEGAS demande l'autorisation du microphone après le rendu. Si un micro est connecté mais VEGAS n'a pas l'autorisation, il erre. Correction : **Activez l'autorisation du microphone pour VEGAS dans les Paramètres Windows**. Alternativement, essayez de changer de périphérique audio dans `Préférences -> Périphérique audio` ou cliquez `Tous par défaut`, puis rendez à nouveau pour voir si cela corrige définitivement. (Changer une fois est temporaire.) En dernier recours, réinstallez les pilotes de la carte son.
@ru О: VEGAS запрашивает разрешение на использование микрофона после рендеринга. Если микрофон подключен, но у VEGAS нет разрешения, возникает ошибка. Исправление: **Включите разрешение на использование микрофона для VEGAS в настройках Windows**. В качестве альтернативы попробуйте переключить аудиоустройства в `Настройки -> Аудиоустройство (Preferences -> Audio Device)` или нажать `Все по умолчанию (All Defaults)`, затем снова отрендерить, чтобы увидеть, решает ли это навсегда. (Переключение один раз временно.) В крайнем случае переустановите драйверы звуковой карты.

<br>

@en Q: Videos rendered with **[Voukoder](#recommended-render-plugin-voukoder)** (or built-in templates) look fine locally but show **horizontal stripes** when uploaded to YouTube/other sites at full resolution?
@zh Q：**[Voukoder 渲染插件](#渲染插件-voukoder-推荐)**（或自带的渲染模板）渲染出来的视频，在本地播放器上看没问题，上传到哔哩哔哩等视频网站上全分辨率观看，怎么会出现**上下条纹**？
@zh-hant Q：**[Voukoder 算繪外掛程式](#算繪外掛程式-voukoder-推薦)**（或自帶的算繪範本）算繪出來的影片，在本地播放器上看沒問題，上傳到嗶哩嗶哩等影片網站上全解析度觀看，怎麼會出現**上下條紋**？
@ja Q: **[Voukoder](#推奨レンダープラグイン-voukoder)**（または組み込みテンプレート）でレンダリングしたビデオはローカルで問題ないが、YouTube/他のサイトにフル解像度でアップロードすると**水平ストライプ**が表示される？
@ko Q: **[Voukoder](#권장-렌더링-플러그인-voukoder)** (또는 내장 템플릿)으로 렌더링된 비디오는 로컬에서 괜찮지만 YouTube/기타 사이트에 전체 해상도로 업로드하면 **가로 줄무늬**가 표시됩니까?
@de F: Videos, die mit **[Voukoder](#empfohlenes-render-plugin-voukoder)** (oder eingebauten Vorlagen) gerendert wurden, sehen lokal gut aus, zeigen aber **horizontale Streifen**, wenn auf YouTube/andere Seiten in voller Auflösung hochgeladen?
@fr Q : Les vidéos rendues avec **[Voukoder](#plugin-de-rendu-recommandé-voukoder)** (ou modèles intégrés) semblent bien localement mais montrent **des rayures horizontales** lors du téléchargement sur YouTube/d'autres sites en pleine résolution ?
@ru В: Видео, отрендеренные с помощью **[Voukoder](#рекомендуемый-плагин-рендеринга-voukoder)** (или встроенных шаблонов), выглядят нормально локально, но показывают **горизонтальные полосы** при загрузке на YouTube/другие сайты в полном разрешении?

@en A: Voukoder auto-matches project properties. In VP17 and below, the default project template has `Field order` set to `Upper field first` (interlaced). Local players support deinterlacing, so it looks fine. Sites like YouTube may not, showing interlacing stripes. For Voukoder, **change `Field order` in `Project Properties` to `Progressive (no fields)`** before rendering. For built-in templates, **avoid templates with `i` in the name; choose those with `p`**.
@zh A：Voukoder 渲染插件是自动匹配项目属性的。在 vv17 及以下版本中，项目属性的默认模板， `场顺序` 一栏默认为 `上场优先`，属于隔行扫描。本地播放器一般都支持隔行反交错，所以看上去是没问题的。而哔哩哔哩等视频网站则不支持，所以能直接看到明显的隔行交错条纹。如果是用 Voukoder 渲染，需**将 `项目属性` 的 `场顺序` 改为 `逐行扫描`** 后重新渲染。如果是 Vegas 自带的渲染模板，**也不要选择模板名称中带 `i` 的，应选择带 `p` 的**。
@zh-hant A：Voukoder 算繪外掛程式是自動匹配專案屬性的。在 vv17 及以下版本中，專案屬性的預設範本， `場順序` 一欄預設為 `上場優先`，屬於隔行掃描。本地播放器一般都支援隔行反交錯，所以看上去是沒問題的。而嗶哩嗶哩等影片網站則不支援，所以能直接看到明顯的隔行交錯條紋。如果是用 Voukoder 算繪，需**將 `專案內容` 的 `場順序` 改為 `逐行掃描`** 後重新算繪。如果是 Vegas 自帶的算繪範本，**也不要選擇範本名稱中帶 `i` 的，應選擇帶 `p` 的**。
@ja A: Voukoder は自動的にプロジェクトプロパティと一致します。VP17 以下では、デフォルトのプロジェクトテンプレートの `フィールド順序` が `上位フィールド優先`（インターレース）に設定されています。ローカルプレーヤーはデインターレースをサポートするため、問題なく見えます。YouTube などのサイトはサポートせず、インターレースストライプを表示する場合があります。Voukoder の場合、**レンダリング前に `プロジェクトプロパティ` の `フィールド順序` を `プログレッシブ（フィールドなし）` に変更**。組み込みテンプレートの場合、**名前に `i` を含むテンプレートを避け、`p` を含むものを選択**。
@ko A: Voukoder는 프로젝트 속성을 자동으로 일치시킵니다. VP17 이하에서는 기본 프로젝트 템플릿의 `필드 순서`가 `상위 필드 우선`(인터레이스)으로 설정되어 있습니다. 로컬 플레이어는 디인터레이싱을 지원하므로 괜찮아 보입니다. YouTube와 같은 사이트는 지원하지 않을 수 있어 인터레이스 줄무늬를 표시합니다. Voukoder의 경우 렌더링 전 **`프로젝트 속성`에서 `필드 순서`를 `프로그레시브(필드 없음)`으로 변경**하십시오. 내장 템플릿의 경우 **이름에 `i`가 있는 템플릿을 피하고 `p`가 있는 템플릿을 선택**하십시오.
@de A: Voukoder passt automatisch Projekteigenschaften an. In VP17 und darunter hat die Standardprojektvorlage `Feldreihenfolge` auf `Oberes Feld zuerst` (Zeilensprung) gesetzt. Lokale Player unterstützen Deinterlacing, also sieht es gut aus. Seiten wie YouTube möglicherweise nicht, zeigen Zeilensprungstreifen. Für Voukoder **ändern Sie `Feldreihenfolge` in `Projekteigenschaften` zu `Progressiv (keine Felder)`** vor dem Rendern. Für eingebaute Vorlagen **vermeiden Sie Vorlagen mit `i` im Namen; wählen Sie die mit `p`**.
@fr R : Voukoder correspond automatiquement aux propriétés du projet. Dans VP17 et moins, le modèle de projet par défaut a `Ordre des champs` défini sur `Champ supérieur d'abord` (entrelacé). Les lecteurs locaux supportent le désentrelacement, donc ça semble bien. Les sites comme YouTube peuvent ne pas le supporter, montrant des rayures d'entrelacement. Pour Voukoder, **changez `Ordre des champs` dans `Propriétés du projet` en `Progressif (pas de champs)`** avant le rendu. Pour les modèles intégrés, **évitez les modèles avec `i` dans le nom ; choisissez ceux avec `p`**.
@ru О: Voukoder автоматически соответствует свойствам проекта. В VP17 и ниже шаблон проекта по умолчанию имеет `Порядок полей (Field order)`, установленный на `Верхнее поле сначала (Upper field first)` (чересстрочный). Локальные плееры поддерживают деинтерлейсинг, поэтому выглядит нормально. Сайты, такие как YouTube, могут не поддерживать, показывая полосы чересстрочной развертки. Для Voukoder **измените `Порядок полей` в `Свойствах проекта` на `Прогрессивный (без полей) (Progressive (no fields))`** перед рендерингом. Для встроенных шаблонов **избегайте шаблонов с `i` в названии; выбирайте те, что с `p`**.

<br>

@en Q: **Built-in render templates lack image sequence options**?
@zh Q：**自带渲染模板没有图像序列**？
@zh-hant Q：**自帶算繪範本沒有影像序列**？
@ja Q: **組み込みレンダーテンプレートにイメージシーケンスオプションがない**？
@ko Q: **내장 렌더링 템플릿에 이미지 시퀀스 옵션이 없음**?
@de F: **Eingebaute Render-Vorlagen fehlen Bildsequenz-Optionen**?
@fr Q : **Les modèles de rendu intégrés manquent d'options de séquence d'images** ?
@ru В: **Во встроенных шаблонах рендеринга отсутствуют опции последовательности изображений**?

@en A: This bug was fixed in VP19. For older versions, try these (not guaranteed):
@zh A：该 bug 已于 vv19 修复。以下是可供低版本尝试的几种解决办法，不保证一定有效：
@zh-hant A：該 bug 已于 vv19 修復。以下是可供低版本嘗試的幾種解決辦法，不保證一定有效：
@ja A: このバグは VP19 で修正されました。古いバージョンの場合、以下を試します（保証なし）：
@ko A: 이 버그는 VP19에서 수정되었습니다. 이전 버전의 경우 다음을 시도해 보십시오(보장되지 않음):
@de A: Dieser Bug wurde in VP19 behoben. Für ältere Versionen versuchen Sie diese (nicht garantiert):
@fr R : Ce bug a été corrigé dans VP19. Pour les anciennes versions, essayez celles-ci (non garanties) :
@ru О: Эта ошибка была исправлена в VP19. Для старых версий попробуйте эти (не гарантировано):

@en 1.  Install/Reinstall HEIF Image Extensions: [https://apps.microsoft.com/detail/9pmmsr1cgpwg](https://apps.microsoft.com/detail/9pmmsr1cgpwg).
@zh 1. 安装（卸载重装）HEIF 和 JPEG XL 图像扩展：[https://apps.microsoft.com/detail/9pmmsr1cgpwg](https://apps.microsoft.com/detail/9pmmsr1cgpwg)、[https://apps.microsoft.com/detail/9mzprth5c0tb](https://apps.microsoft.com/detail/9mzprth5c0tb)。
@zh-hant 1. 安裝（解除安裝重裝）HEIF 影像擴充：[https://apps.microsoft.com/detail/9pmmsr1cgpwg](https://apps.microsoft.com/detail/9pmmsr1cgpwg)。
@ja 1.  HEIF イメージ拡張機能をインストール/再インストール： [https://apps.microsoft.com/detail/9pmmsr1cgpwg](https://apps.microsoft.com/detail/9pmmsr1cgpwg)。
@ko 1.  HEIF 이미지 확장 설치/재설치: [https://apps.microsoft.com/detail/9pmmsr1cgpwg](https://apps.microsoft.com/detail/9pmmsr1cgpwg).
@de 1.  Installieren/Neuinstallieren HEIF-Bilderweiterungen: [https://apps.microsoft.com/detail/9pmmsr1cgpwg](https://apps.microsoft.com/detail/9pmmsr1cgpwg).
@fr 1.  Installez/Réinstallez HEIF Image Extensions : [https://apps.microsoft.com/detail/9pmmsr1cgpwg](https://apps.microsoft.com/detail/9pmmsr1cgpwg).
@ru 1.  Установите/переустановите HEIF Image Extensions: [https://apps.microsoft.com/detail/9pmmsr1cgpwg](https://apps.microsoft.com/detail/9pmmsr1cgpwg).

@en 2.  Use the image sequence render script.
@zh 2. 使用图像序列渲染脚本。
@zh-hant 2. 使用影像序列算繪腳本。
@ja 2.  イメージシーケンスレンダリングスクリプトを使用。
@ko 2.  이미지 시퀀스 렌더링 스크립트 사용.
@de 2.  Verwenden Sie das Bildsequenz-Render-Skript.
@fr 2.  Utilisez le script de rendu de séquence d'images.
@ru 2.  Используйте скрипт рендеринга последовательности изображений.

@en   - Download link: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/vegas-pro-19-missing-image-sequence-as-a-render-option--133068/?page=3#ca863786
@zh   - 下载链接：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/vegas-pro-19-missing-image-sequence-as-a-render-option--133068/?page=3#ca863786
@zh-hant   - 下載連結：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/vegas-pro-19-missing-image-sequence-as-a-render-option--133068/?page=3#ca863786
@ja   - ダウンロードリンク： https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/vegas-pro-19-missing-image-sequence-as-a-render-option--133068/?page=3#ca863786
@ko   - 다운로드 링크: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/vegas-pro-19-missing-image-sequence-as-a-render-option--133068/?page=3#ca863786
@de   - Download-Link: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/vegas-pro-19-missing-image-sequence-as-a-render-option--133068/?page=3#ca863786
@fr   - Lien de téléchargement : https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/vegas-pro-19-missing-image-sequence-as-a-render-option--133068/?page=3#ca863786
@ru   - Ссылка для скачивания: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/vegas-pro-19-missing-image-sequence-as-a-render-option--133068/?page=3#ca863786

@en 3.  Render to another format (`.mov`), then convert using [FFmpeg](https://ffmpeg.org/).
@zh 3. 先渲染为其他格式（`.mov` 等），再用 [FFmpeg](https://ffmpeg.org/) 进行转换。
@zh-hant 3. 先算繪為其他格式（`.mov` 等），再用 [FFmpeg](https://ffmpeg.org/) 進行轉換。
@ja 3.  別の形式（`.mov`）にレンダリングし、[FFmpeg](https://ffmpeg.org/) を使用して変換。
@ko 3.  다른 형식(`.mov`)으로 렌더링한 후 [FFmpeg](https://ffmpeg.org/)를 사용하여 변환합니다.
@de 3.  In ein anderes Format rendern (`.mov`), dann mit [FFmpeg](https://ffmpeg.org/) konvertieren.
@fr 3.  Rendez dans un autre format (`.mov`), puis convertissez en utilisant [FFmpeg](https://ffmpeg.org/).
@ru 3.  Рендерите в другой формат (`.mov`), затем конвертируйте с помощью [FFmpeg](https://ffmpeg.org/).

@en Reference: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/image-sequence-rendering-option-gone-on-vegas-18--147113/#ca950963
@zh 参见：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/image-sequence-rendering-option-gone-on-vegas-18--147113/#ca950963
@zh-hant 參見：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/image-sequence-rendering-option-gone-on-vegas-18--147113/#ca950963
@ja 参照： https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/image-sequence-rendering-option-gone-on-vegas-18--147113/#ca950963
@ko 참조: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/image-sequence-rendering-option-gone-on-vegas-18--147113/#ca950963
@de Referenz: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/image-sequence-rendering-option-gone-on-vegas-18--147113/#ca950963
@fr Référence : https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/image-sequence-rendering-option-gone-on-vegas-18--147113/#ca950963
@ru Ссылка: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/image-sequence-rendering-option-gone-on-vegas-18--147113/#ca950963

<br>

@en Q: In render templates, **wav and avi template output formats changed to .wdp**?
@zh Q：渲染模板中，**`wav` 和 `avi` 渲染模板的输出格式变成了 `.wdp`**？
@zh-hant Q：算繪範本中，**`wav` 和 `avi` 算繪範本的輸出格式變成了 `.wdp`**？
@ja Q: レンダーテンプレートで、**`wav` と `avi` テンプレートの出力形式が `.wdp` に変更された**？
@ko Q: 렌더링 템플릿에서 **`wav` 및 `avi` 템플릿 출력 형식이 `.wdp` 로 변경됨**?
@de F: In Render-Vorlagen haben **wav- und avi-Vorlage Ausgabeformate zu `.wdp` geändert**?
@fr Q : Dans les modèles de rendu, **les modèles `wav` et `avi` ont changé les formats de sortie en `.wdp`** ?
@ru В: В шаблонах рендеринга **форматы вывода wav и avi изменились на .wdp**?

@en A: The only known effective fix is **reinstalling Windows via the Windows Update Tool**.
@zh A：目前已知的有效解决办法只有**通过 Windows 更新工具重装一遍系统**。
@zh-hant A：目前已知的有效解決辦法只有**通過 Windows 更新工具重裝一遍系統**。
@ja A: 既知の効果的な修正は **Windows アップデートツールによる Windows の再インストール**のみです。
@ko A: 알려진 유일한 효과적인 수정은 **Windows 업데이트 도구를 통해 Windows를 다시 설치**하는 것입니다.
@de A: Die einzige bekannte wirksame Behebung ist **Windows über das Windows-Update-Tool neu zu installieren**.
@fr R : La seule correction connue efficace est **de réinstaller Windows via l'Outil de mise à jour Windows**.
@ru О: Единственное известное эффективное исправление — **переустановка Windows с помощью Инструмента обновления Windows**.

@en - Update Tool: https://www.microsoft.com/software-download
@zh - 更新工具下载链接：https://www.microsoft.com/software-download
@zh-hant - 更新工具下載連結：https://www.microsoft.com/software-download
@ja - アップデートツール： https://www.microsoft.com/software-download
@ko - 업데이트 도구: https://www.microsoft.com/software-download
@de - Update-Tool: https://www.microsoft.com/software-download
@fr - Outil de mise à jour : https://www.microsoft.com/software-download
@ru - Инструмент обновления: https://www.microsoft.com/software-download

@en It updates your system to the latest version, taking hours. This method keeps most installed software, files, and settings.
@zh 会将当前系统更新至最新版。整个下载安装过程需要好几个小时。通过这个办法重装的系统可以保留原先已安装的软件、文件和绝大部分设置等，不用过于担心。
@zh-hant 會將當前系統更新至最新版。整個下載安裝過程需要好幾個小時。通過這個辦法重裝的系統可以保留原先已安裝的軟體、檔案和絕大部分設定等，不用過於擔心。
@ja システムを最新版に更新し、数時間かかります。この方法はインストール済みソフトウェア、ファイル、設定の大部分を保持します。
@ko 시스템을 최신 버전으로 업데이트하며 몇 시간이 걸립니다. 이 방법은 대부분의 설치된 소프트웨어, 파일 및 설정을 유지합니다.
@de Aktualisiert Ihr System auf die neueste Version, dauert Stunden. Diese Methode behält die meisten installierten Software, Dateien und Einstellungen.
@fr Il met à jour votre système vers la dernière version, prenant des heures. Cette méthode garde la plupart des logiciels installés, fichiers et paramètres.
@ru Он обновляет вашу систему до последней версии, занимая часы. Этот метод сохраняет большинство установленного ПО, файлов и настроек.

@en The exact repair principle is unclear.
@zh 暂不清楚具体的修复原理。
@zh-hant 暫不清楚具體的修復原理。
@ja 正確な修復原理は不明です。
@ko 정확한 수리 원리는 불분명합니다.
@de Das genaue Reparaturprinzip ist unklar.
@fr Le principe exact de réparation n'est pas clair.
@ru Точный принцип ремонта неясен.

@en Reference: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/avi-files-rendering-as-wdp-in-vegas-pro-10--83436/
@zh 参见：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/avi-files-rendering-as-wdp-in-vegas-pro-10--83436/
@zh-hant 參見：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/avi-files-rendering-as-wdp-in-vegas-pro-10--83436/
@ja 参照： https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/avi-files-rendering-as-wdp-in-vegas-pro-10--83436/
@ko 참조: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/avi-files-rendering-as-wdp-in-vegas-pro-10--83436/
@de Referenz: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/avi-files-rendering-as-wdp-in-vegas-pro-10--83436/
@fr Référence : https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/avi-files-rendering-as-wdp-in-vegas-pro-10--83436/
@ru Ссылка: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/avi-files-rendering-as-wdp-in-vegas-pro-10--83436/

<br>

@en Q: When the project contains audio bus tracks other than the master audio bus, **I cannot render the project to a WAV file** (the render progress immediately reaches 100%, but **no WAV file is produced**). Also, when rendering to any other format, **all effect parameters on the audio bus tracks have no effect**.
@zh Q：当工程内有除音频主控以外的音频总线轨道时，**无法将工程渲染为 WAV 文件**（渲染进度立即跑满，但是**未渲染出 WAV 文件**）？并且渲染其他所有格式时，**音频总线轨道的各种效果参数均不起作用**？
@zh-hant Q：當工程內有除音訊主控以外的音訊匯流排軌道時，**無法將工程算繪為 WAV 檔案**（算繪進度立即跑滿，但是**未算繪出 WAV 檔案**）？並且算繪其他所有格式時，**音訊匯流排軌道的各種效果參數均不起作用**？
@ja Q: プロジェクトにマスターオーディオバス以外のオーディオバストラックが含まれている場合、**プロジェクトを WAV ファイルにレンダリングできません**（レンダリングの進行状況がすぐに 100% になりますが、**WAV ファイルは出力されません**）。また、他のすべての形式にレンダリングする際、**オーディオバストラックのエフェクトパラメータがすべて機能しません**。
@ko Q: 프로젝트에 마스터 오디오 버스 이외의 오디오 버스 트랙이 있을 때, **프로젝트를 WAV 파일로 렌더링할 수 없습니다**(렌더링 진행률이 즉시 100%에 도달하지만 **WAV 파일이 출력되지 않음**). 또한 다른 모든 형식으로 렌더링할 때 **오디오 버스 트랙의 모든 효과 매개변수가 적용되지 않습니다**.
@de F: Wenn das Projekt Audiobusspuren außer dem Master-Audiobus enthält, **kann ich das Projekt nicht als WAV-Datei rendern** (der Renderfortschritt erreicht sofort 100 %, aber **es wird keine WAV-Datei ausgegeben**). Und beim Rendern in alle anderen Formate **haben alle Effektparameter der Audiobusspuren keine Wirkung**.
@fr Q : Lorsque le projet contient des pistes de bus audio autres que le bus audio maître, **je ne peux pas restituer le projet en fichier WAV** (la progression du rendu atteint immédiatement 100 %, mais **aucun fichier WAV n’est produit**). De plus, lors du rendu vers tous les autres formats, **tous les paramètres d’effet des pistes de bus audio n’ont aucun effet**.
@ru B: Когда в проекте присутствуют аудиошинные дорожки, отличные от мастер-шины, **проект не рендерится в WAV-файл** (прогресс рендеринга сразу достигает 100%, но **WAV-файл не создаётся**). Кроме того, при рендеринге во все другие форматы **все параметры эффектов на аудиошинных дорожках не работают**.

@en A: This is caused by **`Multi Stream Render`**. You need to go to **[Internal Preferences](#accessing-vegas-internal-preferences)**, search for `Enable Multi Stream Render`, and change it from **`TRUE`** to the default **`FALSE`**.
@zh A：这个是 **`多流渲染`** 导致的。进入 **[内部首选项](#vegas-内部首选项的进入方法)**，搜索并找到 `Enable Multi Stream Render`，将其从 **`TRUE`** 修改为默认的 **`FALSE`**。
@zh-hant A：這個是 **`多流算繪`** 導致的。進入 **[內部首選項](#vegas-內部首選項的進入方法)**，搜尋並找到 `Enable Multi Stream Render`，將其從 **`TRUE`** 修改為預設的 **`FALSE`**。
@ja A: これは **`マルチストリームレンダリング`** が原因です。**[内部プリファレンス](#vegas-内部プリファレンスへのアクセス)** に移動し、`Enable Multi Stream Render` を検索して見つけ、**`TRUE`** からデフォルトの **`FALSE`** に変更する必要があります。
@ko A: 이는 **`멀티 스트림 렌더링`** 때문입니다. **[내부 환경설정](#vegas-내부-환경설정-접근)**으로 이동하여 `Enable Multi Stream Render`를 검색하여 찾은 다음, **`TRUE`**에서 기본값인 **`FALSE`**로 변경하십시오.
@de A: Dies wird durch **`Multi Stream Render`** verursacht. Sie müssen zu den **[internen Einstellungen](#auf-die-internen-vegas-einstellungen-zugreifen)** gehen, nach `Enable Multi Stream Render` suchen und es von **`TRUE`** auf den Standardwert **`FALSE`** ändern.
@fr R : Ceci est causé par le **`Multi Stream Render`**. Vous devez accéder aux **[préférences internes](#accéder-aux-préférences-internes-vegas)**, rechercher `Enable Multi Stream Render` et le faire passer de **`TRUE`** à la valeur par défaut **`FALSE`**.
@ru O: Это вызвано **`многопоточным рендерингом`**. Необходимо перейти в **[внутренние настройки](#доступ-к-внутренним-настройкам-vegas)**, найти `Enable Multi Stream Render` и изменить его с **`TRUE`** на значение по умолчанию **`FALSE`**.

<br>

@en Q: **[Win7 VP18+]** **Clicking `Render As` immediately errors**: **`An error occurred creating media file. Error 0x80131501 (Message missing)`**
@zh Q：【**Win7 vv18 及以上**】**一点`渲染为`就报错**：**`创建媒体文件时发生错误。错误 0x80131501 (消息缺失)`**
@zh-hant Q：【**Win7 vv18 及以上**】**一點`算繪為`就報錯**：**`建立媒體檔案時發生錯誤。錯誤 0x80131501 (訊息缺失)`**
@ja Q: **[Win7 VP18+]** **`別名でレンダリング` をクリックすると即時エラー**： **`メディアファイルの作成中にエラーが発生しました。エラー 0x80131501 (メッセージなし)`**
@ko Q: **[Win7 VP18+]** **`다른 이름으로 렌더링` 클릭 즉시 오류**: **`미디어 파일 생성 중 오류 발생. 오류 0x80131501 (메시지 누락)`**
@de F: **[Win7 VP18+]** **Klicken auf `Rendern als` sofort Fehler**: **`Beim Erstellen der Mediendatei ist ein Fehler aufgetreten. Fehler 0x80131501 (Nachricht fehlt)`**
@fr Q : **[Win7 VP18+]** **Cliquer sur `Rendre sous` erreur immédiate** : **`Une erreur s'est produite lors de la création du fichier média. Erreur 0x80131501 (Message manquant)`**
@ru В: **[Win7 VP18+]** **Нажатие `Рендерить как` сразу вызывает ошибку**: **`При создании медиафайла произошла ошибка. Ошибка 0x80131501 (Сообщение отсутствует)`**

<ImageOnDemand src="vegtips/image032_render_win7.png" />

@en A: Normally, Win7 only supports **up to VP17**. VP18+ on Win7 throws this error.
@zh A：正常情况下 Win7 最高**只支持到 vv17**，vv18 以后一点渲染就会弹出此报错弹窗。
@zh-hant A：正常情況下 Win7 最高**只支援到 vv17**，vv18 以後一點算繪就會彈出此報錯彈窗。
@ja A: 通常、Win7 は **VP17 までしかサポートしていません**。Win7 上の VP18+ はこのエラーを投げます。
@ko A: 일반적으로 Win7은 **최대 VP17까지만 지원**합니다. Win7의 VP18+는 이 오류를 발생시킵니다.
@de A: Normalerweise unterstützt Win7 nur **bis VP17**. VP18+ auf Win7 wirft diesen Fehler.
@fr R : Normalement, Win7 ne supporte que **jusqu'à VP17**. VP18+ sur Win7 donne cette erreur.
@ru О: Обычно Win7 поддерживает **только до VP17**. VP18+ на Win7 вызывает эту ошибку.

@en There's a workaround: replace the rendering component DLL in the newer VP install directory with one from an older VP18 build.
@zh 不过也有个偏门的办法，可以将旧版 vv18 的渲染组件 dll **替换到新版 vv 的安装目录内**，这样就可以正常渲染了。
@zh-hant 不過也有個偏門的辦法，可以將舊版 vv18 的算繪元件 dll **替換到新版 vv 的安裝目錄內**，這樣就可以正常算繪了。
@ja 回避策：新しい VP インストールディレクトリのレンダリングコンポーネント DLL を、古い VP18 ビルドのものに置き換えます。
@ko 해결 방법이 있습니다: 새 VP 설치 디렉토리의 렌더링 구성 요소 DLL을 이전 VP18 빌드의 것으로 교체합니다.
@de Es gibt eine Problemumgehung: Ersetzen Sie die Rendering-Komponenten-DLL im neueren VP-Installationsverzeichnis mit einer aus einem älteren VP18-Build.
@fr Il y a un contournement : remplacer le composant DLL de rendu dans le répertoire d'installation VP plus récent par un d'un ancien build VP18.
@ru Есть обходной путь: заменить компонент рендеринга DLL в каталоге установки новой версии VP на тот, что из более старой сборки VP18.

@en This may affect stability, so upgrading to Win10 is advised.
@zh 但这种办法不一定能保证软件本身的稳定性，所以还是建议能升级 win10 的就升级吧。
@zh-hant 但這種辦法不一定能保證軟體本身的穩定性，所以還是建議能升級 win10 的就升級吧。
@ja これは安定性に影響する可能性があるため、Win10 へのアップグレードをお勧めします。
@ko 안정성에 영향을 줄 수 있으므로 Win10으로 업그레이드하는 것이 좋습니다.
@de Dies kann die Stabilität beeinflussen, daher wird ein Upgrade auf Win10 empfohlen.
@fr Cela peut affecter la stabilité, donc passer à Win10 est conseillé.
@ru Это может повлиять на стабильность, поэтому рекомендуется обновление до Win10.

@en Reference: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/win-7-rendering-issue-with-the-magix-vegas-482-version--128221/
@zh 参见：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/win-7-rendering-issue-with-the-magix-vegas-482-version--128221/
@zh-hant 參見：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/win-7-rendering-issue-with-the-magix-vegas-482-version--128221/
@ja 参照： https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/win-7-rendering-issue-with-the-magix-vegas-482-version--128221/
@ko 참조: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/win-7-rendering-issue-with-the-magix-vegas-482-version--128221/
@de Referenz: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/win-7-rendering-issue-with-the-magix-vegas-482-version--128221/
@fr Référence : https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/win-7-rendering-issue-with-the-magix-vegas-482-version--128221/
@ru Ссылка: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/win-7-rendering-issue-with-the-magix-vegas-482-version--128221/

@en Download link for `18 build 284` `RenderAsDialog.dll`: [RenderAsDialog.dll](/downloads/fixes/RenderAsDialog.dll.zip)
@zh `18 build 284` 版 `RenderAsDialog.dll` 下载链接：[RenderAsDialog.dll](/downloads/fixes/RenderAsDialog.dll.zip)
@zh-hant `18 build 284` 版 `RenderAsDialog.dll` 下載連結：[RenderAsDialog.dll](/downloads/fixes/RenderAsDialog.dll.zip)
@ja `18 build 284` 版 `RenderAsDialog.dll` ダウンロードリンク： [RenderAsDialog.dll](/downloads/fixes/RenderAsDialog.dll.zip)
@ko `18 build 284` `RenderAsDialog.dll` 다운로드 링크: [RenderAsDialog.dll](/downloads/fixes/RenderAsDialog.dll.zip)
@de Download-Link für `18 Build 284` `RenderAsDialog.dll`: [RenderAsDialog.dll](/downloads/fixes/RenderAsDialog.dll.zip)
@fr Lien de téléchargement pour `RenderAsDialog.dll` de `18 build 284` : [RenderAsDialog.dll](/downloads/fixes/RenderAsDialog.dll.zip)
@ru Ссылка для скачивания `RenderAsDialog.dll` от `18 build 284`: [RenderAsDialog.dll](/downloads/fixes/RenderAsDialog.dll.zip)

<br>

@en ## IX. Subtitles Q&A
@zh ## 九、字幕相关的 Q&A
@zh-hant ## 九、字幕相關的 Q&A
@ja ## 九、字幕 Q&A
@ko ## IX. 자막 Q&A
@de ## IX. Untertitel Q&A
@fr ## IX. FAQ Sous-titres
@ru ## IX. Вопросы и ответы по субтитрам

@en Q: Subtitle file won't import / imports as **garbled text**?
@zh Q：字幕文件无法正常导入/导入进去是**乱码**？
@zh-hant Q：字幕檔案無法正常匯入/匯入進去是**亂碼**？
@ja Q: 字幕ファイルがインポートできない / **文字化けしてインポートされる**？
@ko Q: 자막 파일이 가져오기되지 않음 / 가져오기 시 **깨진 텍스트**?
@de F: Untertiteldatei wird nicht importiert / importiert als **verzerrter Text**?
@fr Q : Le fichier de sous-titre ne s'importe pas / s'importe en **texte illisible** ?
@ru В: Файл субтитров не импортируется / импортируется как **искаженный текст**?

@en A: Open the subtitle file in Notepad, **Save As with UTF-8 encoding**, then import.
@zh A：将字幕文件用记事本打开，**另存为 UTF-8 编码**，再尝试导入。
@zh-hant A：將字幕檔案用記事本開啟，**另存為 UTF-8 編碼**，再嘗試匯入。
@ja A: 字幕ファイルをメモ帳で開き、 **UTF-8 エンコーディングで名前を付けて保存**し、インポートします。
@ko A: 자막 파일을 메모장으로 열고 **UTF-8 인코딩으로 다른 이름으로 저장**한 후 가져오십시오.
@de A: Öffnen Sie die Untertiteldatei im Editor, **Speichern unter mit UTF-8-Kodierung**, dann importieren.
@fr R : Ouvrez le fichier de sous-titre dans le Bloc-notes, **Enregistrer sous avec encodage UTF-8**, puis importez.
@ru О: Откройте файл субтитров в Блокноте, **Сохранить как в кодировке UTF-8**, затем импортируйте.

<br>

@en Q: Using "**Titles & Text**" to edit text. Selected the correct font, but **font in Preview window doesn't change, cannot switch fonts**?
@zh Q：用“**字幕和文字**”编辑文字时，明明选择了对应的字体，但**预览窗口内的文字字体仍旧毫无变化，无法切换字体**？
@zh-hant Q：用“**字幕和文字**”編輯文字時，明明選擇了對應的字型，但**預覽視窗內的字型仍舊毫無變化，無法切換字型**？
@ja Q: 「**タイトルとテキスト**」を使用してテキストを編集。正しいフォントを選択したが、**プレビューウィンドウ内のフォントが変わらず、フォントを切り替えられない**？
@ko Q: "**타이틀 및 텍스트**"를 사용하여 텍스트 편집. 올바른 글꼴을 선택했지만 **미리보기 창의 글꼴이 변경되지 않고 글꼴을 전환할 수 없음**?
@de F: Verwenden von "**Titel & Text**" zum Bearbeiten von Text. Richtige Schriftart ausgewählt, aber **Schriftart im Vorschaufenster ändert sich nicht, kann Schriftarten nicht wechseln**?
@fr Q : Utilisation de "**Titres et texte**" pour éditer le texte. Police correcte sélectionnée, mais **la police dans la fenêtre Aperçu ne change pas, ne peut pas changer de police** ?
@ru В: Использование "**Титры и текст (Titles & Text)**" для редактирования текста. Выбран правильный шрифт, но **шрифт в окне предпросмотра не меняется, нельзя переключить шрифты**?

@en A: This is a "Titles & Text" issue; its font compatibility is poor.
@zh A：这个是“字幕和文字”的问题，“字幕和文字”对各种字体的支持性不够好，切换字体时可能就会发生这种情况。
@zh-hant A：這個是“字幕和文字”的問題，“字幕和文字”對各種字型的支援性不夠好，切換字型時可能就會發生這種情況。
@ja A: これは「タイトルとテキスト」の問題で、フォントの互換性が低いです。
@ko A: 이는 "타이틀 및 텍스트" 문제입니다. 글꼴 호환성이 좋지 않습니다.
@de A: Dies ist ein "Titel & Text"-Problem; seine Schriftart-Kompatibilität ist schlecht.
@fr R : C'est un problème de "Titres et texte" ; sa compatibilité de police est faible.
@ru О: Это проблема "Титры и текст"; его совместимость с шрифтами плохая.

@en Solutions:
@zh 解决办法：
@zh-hant 解決辦法：
@ja 解決策：
@ko 해결책:
@de Lösungen:
@fr Solutions :
@ru Решения:

@en - **Set the font style in a Word document first, then copy-paste into VEGAS Titles & Text.**
@zh - **先在 Word 文档里把字体样式改好，再复制粘贴到 Vegas 字幕和文字里。**
@zh-hant - **先在 Word 文檔裡把字型樣式改好，再複製貼上到 Vegas 字幕和文字裡。**
@ja - **Word 文書でまずフォントスタイルを設定し、VEGAS タイトルとテキストにコピー＆ペースト。**
@ko - **Word 문서에서 먼저 글꼴 스타일을 설정한 후 VEGAS 타이틀 및 텍스트에 복사하여 붙여넣기.**
@de - **Setzen Sie den Schriftstil zuerst in einem Word-Dokument, dann kopieren-einfügen in VEGAS Titel & Text.**
@fr - **Définissez le style de police dans un document Word d'abord, puis copiez-collez dans VEGAS Titres et texte.**
@ru - **Сначала установите стиль шрифта в документе Word, затем скопируйте и вставьте в VEGAS «Титры и текст».**

@en   - You can use any rich-text editor.
@zh   - 没有 Word 的话，也可以用其他能带富文本格式的编辑工具。
@zh-hant   - 沒有 Word 的話，也可以用其他能帶富文字格式的編輯工具。
@ja   - リッチテキストエディターなら何でも使用可能。
@ko   - 모든 리치 텍스트 편집기를 사용할 수 있습니다.
@de   - Sie können jeden Rich-Text-Editor verwenden.
@fr   - Vous pouvez utiliser n'importe quel éditeur de texte enrichi.
@ru   - Вы можете использовать любой редактор с поддержкой форматированного текста.

@en - Or use **(legacy) Text** or **ProType Titler**; they are less prone to this.
@zh - 或者也可以换用 **(自带)文字** 或者 **PTT 字幕**，这两个文字编辑工具不易发生这样的情况。
@zh-hant - 或者也可以換用 **(自帶)文字** 或者 **PTT 字幕**，這兩個文字編輯工具不易發生這樣的情況。
@ja - または、(レガシー) テキスト または ProType Titler を使用。これらはこの問題が起こりにくいです。
@ko - 또는 **(레거시) 텍스트** 또는 **ProType Titler**를 사용하십시오. 이들은 이 문제가 덜 발생합니다.
@de - Oder verwenden Sie **(Legacy) Text** oder **ProType Titler**; sie sind weniger anfällig dafür.
@fr - Ou utilisez **Texte (hérité)** ou **Titrage ProType** ; ils sont moins sujets à cela.
@ru - Или используйте **(устаревший) Текст ((legacy) Text)** или **ProType Titler**; они менее подвержены этому.

@en   - In newer VP, enable them in `Preferences -> Deprecated Features`.
@zh   - 高版本需在 `首选项 -> 停止使用的功能` 中启用这两个功能。
@zh-hant   - 高版本需在 `首選項 -> 停止使用的功能` 中啟用這兩個功能。
@ja   - 新しい VP では、`プリファレンス -> 非推奨機能` で有効にします。
@ko   - 새 VP에서는 `환경설정 -> 사용 중단된 기능`에서 활성화합니다.
@de   - In neuerem VP aktivieren Sie sie in `Einstellungen -> Eingestellte Funktionen`.
@fr   - Dans les nouveaux VP, activez-les dans `Préférences -> Fonctions dépréciées`.
@ru   - В новых VP включите их в `Настройки -> Устаревшие функции (Preferences -> Deprecated Features)`.

@en - In some cases, Windows Unicode settings might be the cause. Go to **`Control Panel -> Region -> Administrative -> Change system locale`**, ensure **`Beta: Use Unicode UTF-8 for worldwide language support`** is **NOT** checked.
@zh - 在某些情况下，也可能是 Windows Unicode 设置导致的。转到 **`控制面板 -> 区域 -> 管理 -> 更改系统区域设置`**，确保 **`Beta 版: 使用 Unicode UTF-8 提供全球语言支持`** 这个选项保持未勾选状态，如下图所示。
@zh-hant - 在某些情況下，也可能是 Windows Unicode 設定導致的。轉到 **`控制台 -> 區域 -> 管理 -> 變更系統區域設定`**，確保 **`Beta 版: 使用 Unicode UTF-8 提供全球語言支援`** 這個選項保持未勾選狀態，如下圖所示。
@ja - 場合によっては、Windows Unicode 設定が原因の可能性があります。 **`コントロール パネル -> 地域 -> 管理 -> システムロケールの変更`** に移動し、 **`ベータ：Unicode UTF-8 を使用して、世界中の言語サポートを提供する`** が**チェックされていない**ことを確認します。
@ko - 일부 경우 Windows Unicode 설정이 원인일 수 있습니다. **`제어판 -> 지역 -> 관리 -> 시스템 로캘 변경`** 으로 이동하여 **`베타: 전 세계 언어 지원을 위해 Unicode UTF-8 사용`** 이 **선택되지 않았는지** 확인하십시오.
@de - In einigen Fällen könnten Windows Unicode-Einstellungen die Ursache sein. Gehen Sie zu **`Systemsteuerung -> Region -> Verwaltung -> Systemgebietsschema ändern`**, stellen Sie sicher, dass **`Beta: Unicode UTF-8 für weltweite Sprachunterstützung verwenden`** **NICHT** aktiviert ist.
@fr - Dans certains cas, les paramètres Unicode Windows pourraient être la cause. Allez dans **`Panneau de configuration -> Région -> Administration -> Changer les paramètres régionaux du système`**, assurez-vous que **`Bêta : Utiliser Unicode UTF-8 pour la prise en charge linguistique mondiale`** est **NON** coché.
@ru - В некоторых случаях причиной могут быть настройки Юникода Windows. Перейдите в **`Панель управления -> Регион -> Дополнительно -> Изменить язык системы`**, убедитесь, что **`Бета: Использовать Юникод UTF-8 для поддержки языков по всему миру`** **НЕ** отмечена.

<ImageOnDemand src="vegtips/image017_unicode_settings.png" />

@en In VP20, the "Titles & Text" feature "**Transfer Subtitle Attributes**" is also affected, making some fonts unusable with this function.
@zh vv20 里的“字幕和文字”有个新功能是“**一键更改同轨道字幕的属性**”，此新功能也会受到该 bug 的影响，导致部分字体无法正常使用此功能。
@zh-hant vv20 裡的“字幕和文字”有個新功能是“**一鍵更改同軌道字幕的屬性**”，此新功能也會受到該 bug 的影響，導致部分字型無法正常使用此功能。
@ja VP20 では、「タイトルとテキスト」機能の「**字幕属性の転送**」も影響を受け、一部のフォントがこの機能で使用できなくなることがあります。
@ko VP20에서 "타이틀 및 텍스트" 기능 "**자막 속성 전송**"도 영향을 받아 이 기능을 사용할 수 없는 일부 글꼴이 있습니다.
@de In VP20 ist die "Titel & Text"-Funktion "**Untertitelattribute übertragen**" ebenfalls betroffen, macht einige Schriftarten mit dieser Funktion unbrauchbar.
@fr Dans VP20, la fonctionnalité "**Transfert des attributs de sous-titre**" de "Titres et texte" est aussi affectée, rendant certaines polices inutilisables avec cette fonction.
@ru В VP20 функция "**Передача атрибутов субтитров (Transfer Subtitle Attributes)**" в «Титры и текст» также затронута, делая некоторые шрифты непригодными для этой функции.

<br>

@en Q: Clicking menu **`Insert -> Subtitle from File`** **doesn't open the insert window**, no response?
@zh Q：点击菜单栏的 **`插入 -> 从文件插入字幕`**，**不能弹出插入字幕的窗口**，点了没有任何反应？
@zh-hant Q：點選選單列的 **`插入 -> 從檔案插入字幕`**，**不能彈出插入字幕的視窗**，點了沒有任何反應？
@ja Q: メニュー **`挿入 -> ファイルから字幕`** をクリックしても**挿入ウィンドウが開かず**、応答がない？
@ko Q: 메뉴 **`삽입 -> 파일에서 자막 삽입`** **삽입 창이 열리지 않고 응답 없음**?
@de F: Klicken auf Menü **`Einfügen -> Untertitel aus Datei`** **öffnet das Einfügefenster nicht**, keine Reaktion?
@fr Q : Cliquer sur le menu **`Insertion -> Sous-titre depuis un fichier`** **n'ouvre pas la fenêtre d'insertion**, pas de réponse ?
@ru В: Нажатие в меню **`Вставка -> Субтитры из файла (Insert -> Subtitle from File)`** **не открывает окно вставки**, нет ответа?

@en A: A relatively rare bug, seemingly unfixed. It might work one day and stop the next. Currently, the only known fix is **[resetting preferences](#5-reset-preferences)**.
@zh A：这个是比较少见的 bug，并且到目前为止似乎仍未修复。甚至可能之前一直能正常使用这个功能的，突然间就用不了了。目前已知能够解决此问题的办法只有**[重置首选项](#5-重置首选项)**。
@zh-hant A：這個是比較少見的 bug，並且到目前為止似乎仍未修復。甚至可能之前一直能正常使用這個功能的，突然間就用不了了。目前已知能夠解決此問題的辦法只有**[重設首選項](#5-重設首選項)**。
@ja A: 比較的まれなバグで、未修正のようです。ある日は機能し、次の日は機能しないかもしれません。現在、知られている唯一の修正は **[プリファレンスのリセット](#5-プリファレンスをリセットする)** です。
@ko A: 비교적 드문 버그로, 수정되지 않은 것으로 보입니다. 어느 날은 작동하고 다음 날은 멈출 수 있습니다. 현재 알려진 유일한 해결책은 **[환경설정 재설정](#5-환경설정-재설정)** 입니다.
@de A: Ein relativ seltener Bug, scheinbar ungefixt. Es könnte einen Tag funktionieren und am nächsten aufhören. Derzeit ist die einzige bekannte Behebung **[Einstellungen zurücksetzen](#5-einstellungen-zurücksetzen)**.
@fr R : Un bug relativement rare, apparemment non corrigé. Cela pourrait fonctionner un jour et s'arrêter le lendemain. Actuellement, la seule correction connue est **[réinitialiser les préférences](#5-réinitialiser-les-préférences)**.
@ru О: Относительно редкая ошибка, по-видимому, не исправленная. Она может работать в один день и перестать на следующий. В настоящее время единственное известное исправление — **[сброс настроек](#5-сбросить-настройки)**.

@en <small>Reference: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/insert-subtitles-from-file-doesn-t-open-dialog-box-anymore--137861/</small>
@zh <small>参见：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/insert-subtitles-from-file-doesn-t-open-dialog-box-anymore--137861/</small>
@zh-hant <small>參見：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/insert-subtitles-from-file-doesn-t-open-dialog-box-anymore--137861/</small>
@ja <small>参照： https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/insert-subtitles-from-file-doesn-t-open-dialog-box-anymore--137861/</small>
@ko <small>참조: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/insert-subtitles-from-file-doesn-t-open-dialog-box-anymore--137861/</small>
@de <small>Referenz: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/insert-subtitles-from-file-doesn-t-open-dialog-box-anymore--137861/</small>
@fr <small>Référence : https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/insert-subtitles-from-file-doesn-t-open-dialog-box-anymore--137861/</small>
@ru <small>Ссылка: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/insert-subtitles-from-file-doesn-t-open-dialog-box-anymore--137861/</small>

<br>

@en Q: Using "**Credit Roll**", editing text causes **VEGAS freeze/crash**?
@zh Q：使用“**致谢字幕**”时，一编辑文字，**Vegas 就卡死崩溃**？
@zh-hant Q：使用“**致謝字幕**”時，一編輯文字，**Vegas 就卡死崩潰**？
@ja Q: 「**クレジットロール**」を使用し、テキストを編集すると **VEGAS がフリーズ/クラッシュ**する？
@ko Q: "**크레딧 롤**" 사용, 텍스트 편집 시 **VEGAS 정지/크래시**?
@de F: Verwenden von "**Credits rollen**", Text bearbeiten verursacht **VEGAS-Einfrieren/Absturz**?
@fr Q : Utilisation de "**Générique de fin**", l'édition de texte provoque un **blocage/plantage VEGAS** ?
@ru В: Использование "**Бегущая строка (Credit Roll)**", редактирование текста вызывает **зависание/сбой VEGAS**?

@en A: Microsoft Input Method issue. In **Microsoft Pinyin Input Method settings, find `Compatibility`, enable `Use previous version of Microsoft Pinyin Input Method`**.
@zh A：微软输入法的问题。在**微软输入法的设置中找到 `兼容性` 一栏，启用 `使用以前版本的微软拼音输入法` 选项**，即可解决。
@zh-hant A：微軟輸入法的問題。在**微軟輸入法的設定中找到 `相容性` 一欄，啟用 `使用以前版本的微軟拼音輸入法` 選項**，即可解決。
@ja A: Microsoft 入力方式の問題です。**Microsoft 日本語入力の設定で `互換性` を見つけ、 `以前のバージョンの Microsoft 日本語入力を使用する` を有効にします**。
@ko A: Microsoft 입력 방법 문제. **Microsoft 입력 방법 설정에서 `호환성`을 찾아 `이전 버전의 Microsoft 입력 방법 사용` 활성화**.
@de A: Microsoft-Eingabemethodenproblem. In **Microsoft Pinyin-Eingabemethode Einstellungen, finden Sie `Kompatibilität`, aktivieren Sie `Vorherige Version der Microsoft Pinyin-Eingabemethode verwenden`**.
@fr R : Problème de méthode de saisie Microsoft. Dans **les paramètres de la méthode de saisie Microsoft Pinyin, trouvez `Compatibilité`, activez `Utiliser la version précédente de la méthode de saisie Microsoft Pinyin`**.
@ru О: Проблема с Microsoft Input Method. В **настройках метода ввода Microsoft Pinyin найдите `Совместимость (Compatibility)`, включите `Использовать предыдущую версию метода ввода Microsoft Pinyin (Use previous version of Microsoft Pinyin Input Method)`**.

<br>

@en Q: Importing a text file into "**Credit Roll**" displays **garbled text**?
@zh Q：将文本文件导入进“**致谢字幕**”时，**文字内容显示为乱码**？
@zh-hant Q：將文字檔案匯入進“**致謝字幕**”時，**文字內容顯示為亂碼**？
@ja Q: テキストファイルを「**クレジットロール**」にインポートすると**文字化け**する？
@ko Q: 텍스트 파일을 "**크레딧 롤**"로 가져오면 **깨진 텍스트**가 표시됩니까?
@de F: Importieren einer Textdatei in "**Credits rollen**" zeigt **verzerrten Text**?
@fr Q : Importer un fichier texte dans "**Générique de fin**" affiche **texte illisible** ?
@ru В: Импорт текстового файла в "**Бегущая строка (Credit Roll)**" отображает **искаженный текст**?

@en A: Open the text file in Notepad, **Save As with ANSI encoding**, then import.
@zh A：将文本文件用记事本打开，**另存为 ANSI 编码**，再尝试导入。
@zh-hant A：將文字檔案用記事本開啟，**另存為 ANSI 編碼**，再嘗試匯入。
@ja A: テキストファイルをメモ帳で開き、 **ANSI エンコーディングで名前を付けて保存**し、インポートします。
@ko A: 텍스트 파일을 메모장으로 열고 **ANSI 인코딩으로 다른 이름으로 저장**한 후 가져오십시오.
@de A: Öffnen Sie die Textdatei im Editor, **Speichern unter mit ANSI-Kodierung**, dann importieren.
@fr R : Ouvrez le fichier texte dans le Bloc-notes, **Enregistrer sous avec encodage ANSI**, puis importez.
@ru О: Откройте текстовый файл в Блокноте, **Сохранить как в кодировке ANSI**, затем импортируйте.

<br>

@en Q: On high-resolution screens, using "**ProType Titler**" causes **UI glitches/tiny unreadable text**?
@zh Q：如图所示，在高分辨率屏幕上使用“**PTT 字幕**”时，**界面错乱/界面字体小，看不清**？
@zh-hant Q：如圖所示，在高解析度螢幕上使用“**PTT 字幕**”時，**介面錯亂/介面字型小，看不清**？
@ja Q: 高解像度画面で「**ProType Titler**」を使用すると、**UI グリッチ/非常に小さく読めないテキスト**が発生する？
@ko Q: 고해상도 화면에서 "**ProType Titler**" 사용 시 **UI 오류/읽을 수 없을 정도로 작은 텍스트**가 발생합니까?
@de F: Auf hochauflösenden Bildschirmen verursacht die Verwendung von "**ProType Titler**" **UI-Verzerrungen/winziger unlesbarer Text**?
@fr Q : Sur les écrans haute résolution, utiliser "**Titrage ProType**" provoque des **bugs d'interface/texte minuscule illisible** ?
@ru В: На экранах с высоким разрешением использование "**ProType Titler**" вызывает **глюки интерфейса/крошечный нечитаемый текст**?

<ImageOnDemand src="vegtips/image033_protype_titler_ui_issue.png" />

@en A: DPI scaling issue when system scaling >= 150%. Right-click VEGAS executable/shortcut -> `Properties -> Compatibility -> Change high DPI settings`. **Set `Scaling performed by:` to `System (Enhanced)`**.
@zh A：DPI 缩放的问题，当系统缩放 DPI >= 150% 时就会出现。可参考下图，对着 Vegas 主程序或者快捷方式进入 `右键 -> 属性 -> 兼容性 -> 更改高 DPI 设置`，**单独设置 Vegas 的缩放选项，将 `缩放执行` 改为 `系统(增强)`。**
@zh-hant A：DPI 縮放的問題，當系統縮放 DPI >= 150% 時就會出現。可參考下圖，對著 Vegas 主程式或者捷徑進入 `右鍵 -> 內容 -> 相容性 -> 變更高 DPI 設定`，**單獨設定 Vegas 的縮放選項，將 `縮放執行` 改為 `系統(增強)`。**
@ja A: システムスケーリング >= 150% 時の DPI スケーリング問題。VEGAS 実行可能ファイル/ショートカットを右クリック -> `プロパティ -> 互換性 -> 高 DPI 設定の変更`。 **`スケーリングの実行元:` を `システム（拡張）` に設定**。
@ko A: 시스템 확대/축소 >= 150%일 때 DPI 확대/축소 문제. VEGAS 실행 파일/바로가기 마우스 오른쪽 버튼 클릭 -> `속성 -> 호환성 -> 높은 DPI 설정 변경`. **`확대/축소 수행:`을 `시스템(고급)`으로 설정**.
@de A: DPI-Skalierungsproblem, wenn Systemskalierung >= 150%. Rechtsklick auf VEGAS ausführbare Datei/Verknüpfung -> `Eigenschaften -> Kompatibilität -> Hohe DPI-Einstellungen ändern`. **Setzen Sie `Skalierung durch:` auf `System (Erweitert)`**.
@fr R : Problème de mise à l'échelle DPI lorsque la mise à l'échelle système >= 150%. Clic droit sur l'exécutable/raccourci VEGAS -> `Propriétés -> Compatibilité -> Modifier les paramètres DPI élevés`. **Définissez `Mise à l'échelle effectuée par :` sur `Système (Amélioré)`**.
@ru О: Проблема масштабирования DPI при масштабе системы >= 150%. Щелкните правой кнопкой мыши на исполняемом файле/ярлыке VEGAS -> `Свойства -> Совместимость -> Изменить параметры высокого DPI`. **Установите `Выполнение масштабирования: (Scaling performed by:)` на `Система (расширенное) (System (Enhanced))`**.

<ImageOnDemand src="vegtips/image034_high_dpi_system_enhanced.png" />

<br>

@en Q: **[VP20, VP21]** **"Transfer Subtitle Attributes" function in Titles & Text errors (as shown)**?
@zh Q：【**vv20、21**】**字幕和文字“一键更改同轨道字幕的属性”功能报错（如下图）**？
@zh-hant Q：【**vv20、21**】**字幕和文字“一鍵更改同軌道字幕的屬性”功能報錯（如下圖）**？
@ja Q: **[VP20、VP21]** **タイトルとテキストの「字幕属性の転送」機能がエラー（図の通り）**？
@ko Q: **[VP20, VP21]** 타이틀 및 텍스트의 **"자막 속성 전송" 기능 오류(그림과 같이)**?
@de F: **[VP20, VP21]** **"Untertitelattribute übertragen"-Funktion in Titel & Text fehlerhaft (wie gezeigt)**?
@fr Q : **[VP20, VP21]** **La fonction "Transfert des attributs de sous-titre" dans Titres et texte erreur (comme montré)** ?
@ru В: **[VP20, VP21]** **Функция «Передача атрибутов субтитров (Transfer Subtitle Attributes)» в «Титры и текст» выдает ошибку (как показано)**?

<ImageOnDemand src="vegtips/image035_subtitles_transfer.png" />

@en A: The issue occurs when the text box contains **mixed formatting (different fonts, sizes, etc.)** that cannot be transferred. Try **unifying the text format** first before using the function. **VP21 final build 315 fixed this.** Older versions (including pre-VP20) can use a script I wrote with similar functionality, no error, but also doesn't support mixed formatting transfer. Script installation path see [Scripts](#xii-scripts-extensions-related).
@zh A：问题在于当前文本框内的**富文本包含多种文本格式（如字体、字号不同等）**，文本格式无法正常转移。可尝试**先统一文本格式**后再使用该功能。**21 最终版 build 315 已修复此问题。**旧版（包括 20 以下，没有这个功能但是想用的）可以用我写的同类型脚本，没有这个报错，不过也不支持多种文本格式的转移。脚本安装路径见 [脚本](#十二、脚本-扩展相关) 章节。
@zh-hant A：問題在於當前文字框內的**富文字包含多種文字格式（如字型、字型大小不同等）**，文字格式無法正常轉移。可嘗試**先統一文字格式**後再使用該功能。**21 最終版 build 315 已修復此問題。**舊版（包括 20 以下，沒有這個功能但是想用的）可以用我寫的同類型腳本，沒有這個報錯，不過也不支援多種文字格式的轉移。腳本安裝路徑見 [腳本](#十二、腳本-擴充相關) 章節。
@ja A: テキストボックスに**混合フォーマット（異なるフォント、サイズなど）** が含まれている場合に発生し、転送できません。機能を使用する前に、**テキストフォーマットを統一**してみてください。 **VP21 最終版 build 315 で修正**。古いバージョン（VP20 以前を含む）は、私が書いた類似機能のスクリプトを使用できます。エラーは出ませんが、混合フォーマットの転送もサポートしません。スクリプトのインストールパスは [スクリプト](#十二、スクリプト-拡張機能関連) を参照。
@ko A: 이 문제는 텍스트 상자에 **혼합 형식(다른 글꼴, 크기 등)이 포함되어** 전송할 수 없는 경우 발생합니다. **먼저 텍스트 형식을 통일**한 후 기능을 사용해 보십시오. **VP21 최종 빌드 315에서 이 문제가 수정되었습니다.** 이전 버전(VP20 이전 포함)은 유사한 기능을 가진 제가 작성한 스크립트를 사용할 수 있으며 오류가 없지만 혼합 형식 전송도 지원하지 않습니다. 스크립트 설치 경로는 [스크립트](#xii-스크립트-확장-관련)를 참조하십시오.
@de A: Das Problem tritt auf, wenn das Textfeld **gemischte Formatierung (verschiedene Schriftarten, Größen usw.)** enthält, die nicht übertragen werden können. Versuchen Sie **zuerst die Textformatierung zu vereinheitlichen**, bevor Sie die Funktion verwenden. **VP21 final Build 315 hat dies behoben.** Ältere Versionen (einschließlich vor VP20) können ein von mir geschriebenes Skript mit ähnlicher Funktionalität verwenden, kein Fehler, unterstützt aber auch keine gemischte Formatierung Übertragung. Skript-Installationspfad siehe [Skripte](#xii-scripts-erweiterungen-bezogene).
@fr R : Le problème se produit lorsque la zone de texte contient **une mise en forme mixte (polices, tailles différentes, etc.)** qui ne peut pas être transférée. Essayez d'**unifier d'abord le format du texte** avant d'utiliser la fonction. **VP21 final build 315 a corrigé cela.** Les anciennes versions (y compris pré-VP20) peuvent utiliser un script que j'ai écrit avec une fonctionnalité similaire, pas d'erreur, mais ne supporte pas non plus le transfert de mise en forme mixte. Chemin d'installation du script voir [Scripts](#xii-faq-concernant-les-scripts-extensions).
@ru О: Проблема возникает, когда текстовое поле содержит **смешанное форматирование (разные шрифты, размеры и т.д.)**, которое нельзя передать. Попробуйте **сначала унифицировать формат текста**, прежде чем использовать функцию. **Финальная сборка 315 VP21 исправила это.** В старых версиях (включая пред-VP20) можно использовать написанный мной скрипт с аналогичной функциональностью, без ошибки, но также не поддерживающий передачу смешанного форматирования. Путь установки скрипта см. в [Скрипты](#xii-скрипты-расширения-связанные).

@en - [Transfer Subtitle Attributes] Script download: https://github.com/zzzzzz9125/VegasScripts/blob/main/Transfer%20Subtitle%20Attributes.cs
@zh - 【单轨道匹配字幕属性】脚本下载链接：https://github.com/zzzzzz9125/VegasScripts/blob/main/Transfer%20Subtitle%20Attributes.cs
@zh-hant - 【單軌道匹配字幕屬性】腳本下載連結：https://github.com/zzzzzz9125/VegasScripts/blob/main/Transfer%20Subtitle%20Attributes.cs
@ja - [字幕属性の転送] スクリプトダウンロード： https://github.com/zzzzzz9125/VegasScripts/blob/main/Transfer%20Subtitle%20Attributes.cs
@ko - [자막 속성 전송] 스크립트 다운로드: https://github.com/zzzzzz9125/VegasScripts/blob/main/Transfer%20Subtitle%20Attributes.cs
@de - [Untertitelattribute übertragen] Skript-Download: https://github.com/zzzzzz9125/VegasScripts/blob/main/Transfer%20Subtitle%20Attributes.cs
@fr - [Transfert des attributs de sous-titre] Téléchargement du script : https://github.com/zzzzzz9125/VegasScripts/blob/main/Transfer%20Subtitle%20Attributes.cs
@ru - Скачать скрипт [Передача атрибутов субтитров]: https://github.com/zzzzzz9125/VegasScripts/blob/main/Transfer%20Subtitle%20Attributes.cs

@en   - Usage: Select a single "Titles & Text" event on a track, run the script to match other subtitle events on the same track to its attributes.
@zh   - 使用方法：选中轨道上的单个“字幕和文字”事件以后运行脚本，可以自动将该轨道其他字幕事件的属性与该事件匹配。
@zh-hant   - 使用方法：選中軌道上的單個“字幕和文字”事件以後執行腳本，可以自動將該軌道其他字幕事件的屬性與該事件匹配。
@ja   - 使用法：トラック上の単一の「タイトルとテキスト」イベントを選択し、スクリプトを実行すると、同じトラック上の他の字幕イベントがその属性と一致します。
@ko   - 사용법: 트랙에서 단일 "타이틀 및 텍스트" 이벤트를 선택하고 스크립트를 실행하여 동일한 트랙의 다른 자막 이벤트를 해당 속성과 일치시킵니다.
@de   - Verwendung: Wählen Sie ein einzelnes "Titel & Text"-Event auf einer Spur, führen Sie das Skript aus, um andere Untertitel-Events auf derselben Spur an seine Attribute anzupassen.
@fr   - Utilisation : Sélectionnez un seul événement "Titres et texte" sur une piste, exécutez le script pour faire correspondre les autres événements de sous-titre sur la même piste à ses attributs.
@ru   - Использование: Выберите одно событие «Титры и текст» на дорожке, запустите скрипт, чтобы сопоставить атрибуты других событий субтитров на той же дорожке с его атрибутами.

@en <small>Reference: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/bug-while-using-new-update-of-title-text-attribute-paste-function--145461/</small>
@zh <small>参见：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/bug-while-using-new-update-of-title-text-attribute-paste-function--145461/</small>
@zh-hant <small>參見：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/bug-while-using-new-update-of-title-text-attribute-paste-function--145461/</small>
@ja <small>参照： https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/bug-while-using-new-update-of-title-text-attribute-paste-function--145461/</small>
@ko <small>참조: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/bug-while-using-new-update-of-title-text-attribute-paste-function--145461/</small>
@de <small>Referenz: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/bug-while-using-new-update-of-title-text-attribute-paste-function--145461/</small>
@fr <small>Référence : https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/bug-while-using-new-update-of-title-text-attribute-paste-function--145461/</small>
@ru <small>Ссылка: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/bug-while-using-new-update-of-title-text-attribute-paste-function--145461/</small>

<br>

@en **Additional Note:** (VP18+) How to change the default tool for `Insert Text Media`:
@zh 另：（vv18 及以上）将 `插入文本媒体` 功能更换为其他文本工具的方法：
@zh-hant 另：（vv18 及以上）將 `插入文字媒體` 功能更換為其他文字工具的方法：
@ja **追加注記：** (VP18+) `テキストメディアを挿入` のデフォルトツールを変更する方法：
@ko **추가 참고:** (VP18+) `텍스트 미디어 삽입`의 기본 도구를 변경하는 방법:
@de **Zusätzlicher Hinweis:** (VP18+) Wie man das Standard-Tool für `Textmedium einfügen` ändert:
@fr **Note additionnelle :** (VP18+) Comment changer l'outil par défaut pour `Insérer un média texte` :
@ru **Дополнительное примечание:** (VP18+) Как изменить инструмент по умолчанию для `Вставить текстовый медиа (Insert Text Media)`:

@en VEGAS has three main text tools: Titles & Text, (legacy) Text, ProType Titler. `Right-click track -> Insert Text Media` defaults to "Titles & Text". To use the other two, you must drag them from "Media Generators", which can be cumbersome. Here's how to change the default:
@zh 上面已经提到，Vegas 的常规文本工具一共有三种：字幕和文字、(自带)文字和 PTT 字幕。如果你在视频轨道上 `右键 -> 插入文本媒体`，默认生成的是“字幕和文字”事件；如果要使用其他两个文本工具，则必须从“媒体生成器”里拖进时间轴才行，有时会有些麻烦。此处介绍一个将“插入文本媒体”功能更换为其他文本工具的方法。
@zh-hant 上面已經提到，Vegas 的常規文字工具一共有三種：字幕和文字、(自帶)文字和 PTT 字幕。如果你在影片軌道上 `右鍵 -> 插入文字媒體`，預設生成的是“字幕和文字”事件；如果要使用其他兩個文字工具，則必須從“媒體生成器”裡拖進時間軸才行，有時會有些麻煩。此處介紹一個將“插入文字媒體”功能更換為其他文字工具的方法。
@ja VEGAS には 3 つの主要なテキストツール：タイトルとテキスト、(レガシー) テキスト、ProType Titler があります。 `トラックを右クリック -> テキストメディアを挿入` はデフォルトで「タイトルとテキスト」を使用します。他の 2 つを使用するには、「メディアジェネレーター」からドラッグする必要があり、面倒な場合があります。デフォルトを変更する方法：
@ko VEGAS에는 세 가지 주요 텍스트 도구가 있습니다: 타이틀 및 텍스트, (레거시) 텍스트, ProType Titler. `트랙 마우스 오른쪽 버튼 클릭 -> 텍스트 미디어 삽입`은 기본적으로 "타이틀 및 텍스트"를 사용합니다. 다른 두 가지를 사용하려면 "미디어 생성기"에서 드래그해야 하며 번거로울 수 있습니다. 기본값을 변경하는 방법은 다음과 같습니다:
@de VEGAS hat drei Haupttext-Tools: Titel & Text, (Legacy) Text, ProType Titler. `Rechtsklick Spur -> Textmedium einfügen` standardmäßig "Titel & Text". Um die anderen beiden zu verwenden, müssen Sie sie aus "Media Generators" ziehen, was umständlich sein kann. So ändern Sie den Standard:
@fr VEGAS a trois outils texte principaux : Titres et texte, Texte (hérité), Titrage ProType. `Clic droit sur piste -> Insérer un média texte` utilise par défaut "Titres et texte". Pour utiliser les deux autres, vous devez les glisser depuis "Générateurs de média", ce qui peut être fastidieux. Voici comment changer le défaut :
@ru В VEGAS есть три основных текстовых инструмента: Титры и текст, (устаревший) Текст, ProType Titler. `Щелкните правой кнопкой мыши на дорожке -> Вставить текстовый медиа` по умолчанию использует «Титры и текст». Чтобы использовать другие два, вы должны перетащить их из «Медиа генераторов», что может быть громоздко. Вот как это изменить:

@en Access [Internal Preferences](#accessing-vegas-internal-preferences), search for `Text Media Generator GUID`. Change its value to the GUID of your preferred tool (default is Titles & Text).
@zh 进入 [内部首选项](#vegas-内部首选项的进入方法)，搜索并找到 `Text Media Generator GUID` 这一栏，将该值修改为三个文本工具所对应的 GUID 值。（默认为“字幕和文字”的 GUID 值）
@zh-hant 進入 [內部首選項](#vegas-內部首選項的進入方法)，搜尋並找到 `Text Media Generator GUID` 這一欄，將該值修改為三個文字工具所對應的 GUID 值。（預設為“字幕和文字”的 GUID 值）
@ja [内部プリファレンス](#vegas-内部プリファレンスへのアクセス) にアクセスし、 `Text Media Generator GUID` を検索。その値を希望のツールの GUID に変更します（デフォルトはタイトルとテキスト）。
@ko [내부 환경설정 접근](#vegas-내부-환경설정-접근)으로 이동하여 `Text Media Generator GUID`를 검색합니다. 값을 선호하는 도구의 GUID로 변경합니다(기본값은 타이틀 및 텍스트).
@de Greifen Sie auf [Interne Einstellungen](#auf-die-internen-vegas-einstellungen-zugreifen) zu, suchen Sie nach `Text Media Generator GUID`. Ändern Sie seinen Wert auf die GUID Ihres bevorzugten Tools (Standard ist Titel & Text).
@fr Accédez aux [Préférences internes](#accéder-aux-préférences-internes-vegas), recherchez `Text Media Generator GUID`. Changez sa valeur au GUID de votre outil préféré (le défaut est Titres et texte).
@ru Перейдите в [Внутренние настройки](#доступ-к-внутренним-настройкам-vegas), найдите `Text Media Generator GUID`. Измените его значение на GUID предпочитаемого инструмента (по умолчанию — Титры и текст).

@en GUIDs:
@zh 三个文本工具所对应的 GUID 值如下：
@zh-hant 三個文字工具所對應的 GUID 值如下：
@ja GUID：
@ko GUID:
@de GUIDs:
@fr GUIDs :
@ru GUID:

@en - Titles & Text: `{Svfx:com.vegascreativesoftware:titlesandtext}`
@zh - 字幕和文字：`{Svfx:com.vegascreativesoftware:titlesandtext}`
@zh-hant - 字幕和文字：`{Svfx:com.vegascreativesoftware:titlesandtext}`
@ja - タイトルとテキスト： `{Svfx:com.vegascreativesoftware:titlesandtext}`
@ko - 타이틀 및 텍스트: `{Svfx:com.vegascreativesoftware:titlesandtext}`
@de - Titel & Text: `{Svfx:com.vegascreativesoftware:titlesandtext}`
@fr - Titres et texte : `{Svfx:com.vegascreativesoftware:titlesandtext}`
@ru - Титры и текст: `{Svfx:com.vegascreativesoftware:titlesandtext}`

@en - (legacy) Text: `{0FE8789D-0C47-442A-AFB0-0DAF97669317}`
@zh - (自带)文字：`{0FE8789D-0C47-442A-AFB0-0DAF97669317}`
@zh-hant - (自帶)文字：`{0FE8789D-0C47-442A-AFB0-0DAF97669317}`
@ja - (レガシー) テキスト： `{0FE8789D-0C47-442A-AFB0-0DAF97669317}`
@ko - (레거시) 텍스트: `{0FE8789D-0C47-442A-AFB0-0DAF97669317}`
@de - (Legacy) Text: `{0FE8789D-0C47-442A-AFB0-0DAF97669317}`
@fr - Texte (hérité) : `{0FE8789D-0C47-442A-AFB0-0DAF97669317}`
@ru - (устаревший) Текст: `{0FE8789D-0C47-442A-AFB0-0DAF97669317}`

@en - ProType Titler: `{53FC0B44-BD58-4716-A90F-3EB43168DE81}`
@zh - PTT 字幕：`{53FC0B44-BD58-4716-A90F-3EB43168DE81}`
@zh-hant - PTT 字幕：`{53FC0B44-BD58-4716-A90F-3EB43168DE81}`
@ja - ProType Titler： `{53FC0B44-BD58-4716-A90F-3EB43168DE81}`
@ko - ProType Titler: `{53FC0B44-BD58-4716-A90F-3EB43168DE81}`
@de - ProType Titler: `{53FC0B44-BD58-4716-A90F-3EB43168DE81}`
@fr - Titrage ProType : `{53FC0B44-BD58-4716-A90F-3EB43168DE81}`
@ru - ProType Titler: `{53FC0B44-BD58-4716-A90F-3EB43168DE81}`

@en Knowing the GUID, you can set it to any Media Generator FX's GUID, making "Insert Text Media" create that generator directly.
@zh 当然，在已知对应 GUID 的情况下，也可以填写任意一个媒体生成器 FX 的 GUID。这样的话，点击“插入文本媒体”按钮时，就能够直接生成其对应的媒体生成器事件。
@zh-hant 當然，在已知對應 GUID 的情況下，也可以填寫任意一個媒體生成器 FX 的 GUID。這樣的話，點選“插入文字媒體”按鈕時，就能夠直接生成其對應的媒體生成器事件。
@ja GUID を知っていれば、任意のメディアジェネレーター FX の GUID に設定でき、「テキストメディアを挿入」がそのジェネレーターを直接作成します。
@ko GUID를 알면 이를 모든 미디어 생성기 FX의 GUID로 설정하여 "텍스트 미디어 삽입"이 해당 생성기를 직접 생성하도록 만들 수 있습니다.
@de Mit der GUID können Sie sie auf die GUID eines beliebigen Media Generator FX setzen, sodass "Textmedium einfügen" diesen Generator direkt erstellt.
@fr Connaissant le GUID, vous pouvez le définir au GUID de n'importe quel FX Générateur de média, faisant que "Insérer un média texte" crée directement ce générateur.
@ru Зная GUID, вы можете установить его на GUID любого FX медиа-генератора, сделав так, чтобы «Вставить текстовый медиа» создавал этот генератор напрямую.

<br>

@en ## X. Video Plugin Related
@zh ## 十、视频插件相关
@zh-hant ## 十、影片外掛程式相關
@ja ## 十、ビデオプラグイン関連
@ko ## X. 비디오 플러그인 관련
@de ## X. Video-Plugin bezogen
@fr ## X. FAQ concernant les plugins vidéo
@ru ## X. Связанное с видео-плагинами

@en VEGAS video plugins fall into two categories: DirectX Transform (DXT) plugins, developed specifically for VEGAS, and OpenFX (OFX) plugins, a universal standard. Older plugins might be DXT (e.g., NewBlue 2012, Neat Video 3.1.1). Newer plugins are usually OFX. Some legacy VEGAS FX, like Soft Contrast FX, ProType Titler, are also DXT plugins.
@zh Vegas 的视频插件一共分两类。一类是 DirectX Transform（即 DXT）类插件，是专门为 Vegas 开发的插件形式。一类是 OFX 类插件，是通用的插件形式。有些旧插件有可能会采用 DXT 类插件形式，比如 NewBlue 2012 版、Neat Video 3.1.1 版等；而新版插件一般都使用 OFX 插件形式，比如新版 NewBlue 等。某些 Vegas 自带的旧效果，比如软对比 FX、PTT 字幕等，也属于 DXT 类插件。
@zh-hant Vegas 的影片外掛程式一共分兩類。一類是 DirectX Transform（即 DXT）類外掛程式，是專門為 Vegas 開發的外掛程式形式。一類是 OFX 類外掛程式，是通用的外掛程式形式。有些舊外掛程式有可能會採用 DXT 類外掛程式形式，比如 NewBlue 2012 版、Neat Video 3.1.1 版等；而新版外掛程式一般都使用 OFX 外掛程式形式，比如新版 NewBlue 等。某些 Vegas 自帶的舊效果，比如軟對比 FX、PTT 字幕等，也屬於 DXT 類外掛程式。
@ja VEGAS ビデオプラグインは 2 カテゴリ：DirectX Transform (DXT) プラグイン（VEGAS 専用開発）と OpenFX (OFX) プラグイン（ユニバーサル標準）。古いプラグインは DXT（例：NewBlue 2012、Neat Video 3.1.1）かもしれません。新しいプラグインは通常 OFX です。一部のレガシー VEGAS FX、ソフトコントラスト FX、ProType Titler も DXT プラグインです。
@ko VEGAS 비디오 플러그인은 두 가지 범주로 나뉩니다: VEGAS 전용으로 개발된 DirectX Transform(DXT) 플러그인과 범용 표준인 OpenFX(OFX) 플러그인입니다. 이전 플러그인은 DXT일 수 있습니다(예: NewBlue 2012, Neat Video 3.1.1). 새로운 플러그인은 일반적으로 OFX입니다. 일부 레거시 VEGAS FX(예: 소프트 콘트라스트 FX, ProType Titler)도 DXT 플러그인입니다.
@de VEGAS-Video-Plugins fallen in zwei Kategorien: DirectX Transform (DXT) Plugins, speziell für VEGAS entwickelt, und OpenFX (OFX) Plugins, ein universeller Standard. Ältere Plugins könnten DXT sein (z. B. NewBlue 2012, Neat Video 3.1.1). Neuere Plugins sind normalerweise OFX. Einige Legacy VEGAS FX, wie Soft Contrast FX, ProType Titler, sind auch DXT-Plugins.
@fr Les plugins vidéo VEGAS se divisent en deux catégories : les plugins DirectX Transform (DXT), développés spécifiquement pour VEGAS, et les plugins OpenFX (OFX), une norme universelle. Les anciens plugins pourraient être DXT (par ex. NewBlue 2012, Neat Video 3.1.1). Les nouveaux plugins sont généralement OFX. Certains FX VEGAS hérités, comme le FX Contraste doux, Titrage ProType, sont aussi des plugins DXT.
@ru Видео-плагины VEGAS делятся на две категории: плагины DirectX Transform (DXT), разработанные специально для VEGAS, и плагины OpenFX (OFX), универсальный стандарт. Старые плагины могут быть DXT (например, NewBlue 2012, Neat Video 3.1.1). Новые плагины обычно OFX. Некоторые устаревшие FX VEGAS, такие как Soft Contrast FX, ProType Titler, также являются плагинами DXT.

@en The VEGAS Pro Video FX List summarizes all available **`Video FX`** in VEGAS Pro, including their **`Names`**, **`Groups`**, **`UIDs`**, and other information, making it easy to search and browse online. **[Enter here.](./videofxlist)**
@zh VEGAS Pro 视频效果名称速查表归纳整理了 VEGAS Pro 中的所有可用的 **`视频 FX 效果`** 的 **`名称`**、**`分组`** 和 **`UID`** 等信息，便于在线查找阅览。**[点此进入。](./videofxlist)**
@zh-hant VEGAS Pro 影片效果名稱速查表歸納整理了 VEGAS Pro 中的所有可用的 **`影片 FX 效果`** 的 **`名稱`**、**`分組`** 和 **`UID`** 等資訊，便於線上查找閱覽。**[點此進入。](./videofxlist)**
@ja VEGAS Pro ビデオ FX リストは、VEGAS Pro で利用可能なすべての **`ビデオ FX`** を要約し、 **`名前`**、 **`グループ`**、 **`UID`** およびその他の情報を含み、オンラインでの検索や閲覧を容易にします。 **[こちらをクリック](./videofxlist)**
@ko VEGAS Pro 비디오 FX 목록은 VEGAS Pro에서 사용 가능한 모든 **`비디오 FX`** 를 요약하여 **`이름`**, **`그룹`**, **`UID`** 및 기타 정보를 제공하며 온라인에서 쉽게 검색하고 탐색할 수 있습니다. **[여기로 이동하십시오.](./videofxlist)**
@de Die VEGAS Pro Video FX-Liste fasst alle verfügbaren **`Video FX`** in VEGAS Pro zusammen, einschließlich ihrer **`Namen`**, **`Gruppen`**, **`UIDs`** und anderer Informationen, was die Online-Suche und das Durchsuchen erleichtert. **[Hier eingeben.](./videofxlist)**
@fr La Liste des effets vidéo VEGAS Pro résume tous les **`FX Vidéo`** disponibles dans VEGAS Pro, y compris leurs **`Noms`**, **`Groupes`**, **`UIDs`**, et d'autres informations, facilitant la recherche et la consultation en ligne. **[Entrez ici.](./videofxlist)**
@ru Список видеоэффектов VEGAS Pro обобщает все доступные **`Видеоэффекты (Video FX)`** в VEGAS Pro, включая их **`Названия`**, **`Группы`**, **`UID`** и другую информацию, что упрощает поиск и просмотр в Интернете. **[Войдите сюда.](./videofxlist)**

<br>

@en ### VEGAS Plugin Cache Files
@zh ### Vegas 插件缓存文件
@zh-hant ### Vegas 外掛程式快取檔案
@ja ### VEGAS プラグインキャッシュファイル
@ko ### VEGAS 플러그인 캐시 파일
@de ### VEGAS-Plugin-Cache-Dateien
@fr ### Fichiers cache des plugins VEGAS
@ru ### Файлы кэша плагинов VEGAS

@en - Scan Cache: `%localappdata%\VEGAS Pro\23.0\svfx_plugin_cache.bin`
@zh - 扫描缓存：`%localappdata%\VEGAS Pro\23.0\svfx_plugin_cache.bin`
@zh-hant - 掃描快取：`%localappdata%\VEGAS Pro\23.0\svfx_plugin_cache.bin`
@ja - スキャンキャッシュ： `%localappdata%\VEGAS Pro\23.0\svfx_plugin_cache.bin`
@ko - 스캔 캐시: `%localappdata%\VEGAS Pro\23.0\svfx_plugin_cache.bin`
@de - Scan-Cache: `%localappdata%\VEGAS Pro\23.0\svfx_plugin_cache.bin`
@fr - Cache de scan : `%localappdata%\VEGAS Pro\23.0\svfx_plugin_cache.bin`
@ru - Кэш сканирования: `%localappdata%\VEGAS Pro\23.0\svfx_plugin_cache.bin`

@en - Name Cache: `%localappdata%\VEGAS Pro\23.0\plugin_manager_cache.bin`
@zh - 名称缓存：`%localappdata%\VEGAS Pro\23.0\plugin_manager_cache.bin`
@zh-hant - 名稱快取：`%localappdata%\VEGAS Pro\23.0\plugin_manager_cache.bin`
@ja - 名前キャッシュ： `%localappdata%\VEGAS Pro\23.0\plugin_manager_cache.bin`
@ko - 이름 캐시: `%localappdata%\VEGAS Pro\23.0\plugin_manager_cache.bin`
@de - Name-Cache: `%localappdata%\VEGAS Pro\23.0\plugin_manager_cache.bin`
@fr - Cache des noms : `%localappdata%\VEGAS Pro\23.0\plugin_manager_cache.bin`
@ru - Кэш имен: `%localappdata%\VEGAS Pro\23.0\plugin_manager_cache.bin`

@en - Thumbnail Cache: `%localappdata%\VEGAS Pro\23.0\FX Thumbnails\fx_thumbnail_cache.bin`
@zh - 缩略图：`%localappdata%\VEGAS Pro\23.0\FX Thumbnails\fx_thumbnail_cache.bin`
@zh-hant - 縮圖：`%localappdata%\VEGAS Pro\23.0\FX Thumbnails\fx_thumbnail_cache.bin`
@ja - サムネイルキャッシュ： `%localappdata%\VEGAS Pro\23.0\FX Thumbnails\fx_thumbnail_cache.bin`
@ko - 썸네일 캐시: `%localappdata%\VEGAS Pro\23.0\FX Thumbnails\fx_thumbnail_cache.bin`
@de - Miniatur-Cache: `%localappdata%\VEGAS Pro\23.0\FX Thumbnails\fx_thumbnail_cache.bin`
@fr - Cache des miniatures : `%localappdata%\VEGAS Pro\23.0\FX Thumbnails\fx_thumbnail_cache.bin`
@ru - Кэш миниатюр: `%localappdata%\VEGAS Pro\23.0\FX Thumbnails\fx_thumbnail_cache.bin`

@en Where `23.0` is your VEGAS version. Plugin cache stores scanned plugin/FX info. VEGAS stuck at "Creating video plugin factory..." is **regenerating plugin cache**, scanning for new plugins.
@zh 其中 `23.0` 代表当前的 Vegas 版本号。插件缓存是 Vegas 用来存储已扫描的插件和 FX 效果的信息的。Vegas 界面如果卡在 `正在创建视频插件工厂…` 这一步，就表明是在**重新生成插件缓存**，会自动扫描新安装的插件。
@zh-hant 其中 `23.0` 代表當前的 Vegas 版本號。外掛程式快取是 Vegas 用來儲存已掃描的外掛程式和 FX 效果的資訊的。Vegas 介面如果卡在 `正在建立影片外掛程式工廠…` 這一步，就表明是在**重新生成外掛程式快取**，會自動掃描新安裝的外掛程式。
@ja `23.0` は VEGAS バージョンです。プラグインキャッシュはスキャンされたプラグイン/FX 情報を保存します。VEGAS が「ビデオプラグインファクトリーを作成しています...」で停止しているのは、**プラグインキャッシュを再生成**し、新しいプラグインをスキャンしています。
@ko 여기서 `23.0`은 VEGAS 버전입니다. 플러그인 캐시는 스캔된 플러그인/FX 정보를 저장합니다. VEGAS가 "비디오 플러그인 팩토리 생성 중..."에서 멈추는 것은 **플러그인 캐시를 재생성**하고, 새로운 플러그인을 스캔하는 것입니다.
@de Wobei `23.0` Ihre VEGAS-Version ist. Plugin-Cache speichert gescannte Plugin/FX-Informationen. VEGAS steckt bei "Erstelle Video-Plugin-Fabrik..." fest, **regeneriert Plugin-Cache**, scannt nach neuen Plugins.
@fr Où `23.0` est votre version VEGAS. Le cache de plugin stocke les informations des plugins/FX scannés. VEGAS bloqué à "Création de l'usine de plugins vidéo..." **régénère le cache de plugin**, scannant pour de nouveaux plugins.
@ru Где `23.0` — ваша версия VEGAS. Кэш плагинов хранит информацию об отсканированных плагинах/FX. Зависание VEGAS на «Создание фабрики видео-плагинов...» означает **перегенерацию кэша плагинов**, сканирование новых плагинов.

<br>

@en ### OFX Related Paths
@zh ### OFX 相关路径
@zh-hant ### OFX 相關路徑
@ja ### OFX 関連パス
@ko ### OFX 관련 경로
@de ### OFX bezogene Pfade
@fr ### Chemins OFX liés
@ru ### Пути, связанные с OFX

@en - **Common OFX Path**: `C:\Program Files\Common Files\OFX\Plugins\`
@zh - **公共 OFX 路径**：`C:\Program Files\Common Files\OFX\Plugins\`
@zh-hant - **公共 OFX 路徑**：`C:\Program Files\Common Files\OFX\Plugins\`
@ja - **共通 OFX パス**： `C:\Program Files\Common Files\OFX\Plugins\`
@ko - **공통 OFX 경로**: `C:\Program Files\Common Files\OFX\Plugins\`
@de - **Allgemeiner OFX-Pfad**: `C:\Programme\Gemeinsame Dateien\OFX\Plugins\`
@fr - **Chemin OFX commun** : `C:\Program Files\Common Files\OFX\Plugins\`
@ru - **Общий путь OFX**: `C:\Program Files\Common Files\OFX\Plugins\`

@en - **VEGAS-specific OFX Path**: `...<VEGAS install path>\OFX Video Plug-Ins\`
@zh - **独立 OFX 路径**：`...<Vegas 安装路径>\OFX Video Plug-Ins\`
@zh-hant - **獨立 OFX 路徑**：`...<Vegas 安裝路徑>\OFX Video Plug-Ins\`
@ja - **VEGAS 固有 OFX パス**： `...<VEGAS インストールパス>\OFX Video Plug-Ins\`
@ko - **VEGAS 전용 OFX 경로**: `...<VEGAS 설치 경로>\OFX Video Plug-Ins\`
@de - **VEGAS-spezifischer OFX-Pfad**: `...<VEGAS Installationspfad>\OFX Video Plug-Ins\`
@fr - **Chemin OFX spécifique à VEGAS** : `...<Chemin d'installation VEGAS>\OFX Video Plug-Ins\`
@ru - **Специфичный для VEGAS путь OFX**: `...<путь установки VEGAS>\OFX Video Plug-Ins\`

@en Note: An OFX plugin may consist of the plugin core and the OFX interface files. The OFX path is for the interface files. Without them, VEGAS **won't scan** the plugin. Common OFX path plugins are also scanned by other OFX-supporting software (Premiere Pro, DaVinci Resolve). The VEGAS-specific path is scanned only by that VEGAS version.
@zh 注意，OFX 插件本身可能会包括两部分：插件本体与 OFX 接口。OFX 路径指的是 OFX 接口文件所存放的路径。如果里面没有对应文件，Vegas 将**扫描不到**对应的插件。公共 OFX 路径里的 OFX 效果，也会被 PR、达芬奇等其他支持 OFX 的软件扫描到；而 Vegas 的独立 OFX 路径，只会被当前版本的 Vegas 扫描到。
@zh-hant 注意，OFX 外掛程式本身可能會包括兩部分：外掛程式本體與 OFX 介面。OFX 路徑指的是 OFX 介面檔案所存放的路徑。如果裡面沒有對應檔案，Vegas 將**掃描不到**對應的外掛程式。公共 OFX 路徑裡的 OFX 效果，也會被 PR、達芬奇等其他支援 OFX 的軟體掃描到；而 Vegas 的獨立 OFX 路徑，只會被當前版本的 Vegas 掃描到。
@ja 注：OFX プラグインはプラグインコアと OFX インターフェースファイルで構成される場合があります。OFX パスはインターフェースファイル用です。これらがないと、VEGAS はプラグインを**スキャンしません**。共通 OFX パスのプラグインは、他の OFX 対応ソフトウェア（Premiere Pro、DaVinci Resolve）でもスキャンされます。VEGAS 固有パスはその VEGAS バージョンでのみスキャンされます。
@ko 참고: OFX 플러그인은 플러그인 코어와 OFX 인터페이스 파일로 구성될 수 있습니다. OFX 경로는 인터페이스 파일용입니다. 없으면 VEGAS가 플러그인을 **스캔하지 않습니다**. 공통 OFX 경로 플러그인은 다른 OFX 지원 소프트웨어(Premiere Pro, DaVinci Resolve)에서도 스캔됩니다. VEGAS 전용 경로는 해당 VEGAS 버전에서만 스캔됩니다.
@de Hinweis: Ein OFX-Plugin kann aus dem Plugin-Kern und den OFX-Interface-Dateien bestehen. Der OFX-Pfad ist für die Interface-Dateien. Ohne sie scannt VEGAS das Plugin **nicht**. Allgemeiner OFX-Pfad-Plugins werden auch von anderen OFX-unterstützenden Software (Premiere Pro, DaVinci Resolve) gescannt. Der VEGAS-spezifische Pfad wird nur von dieser VEGAS-Version gescannt.
@fr Note : Un plugin OFX peut consister en le noyau du plugin et les fichiers interface OFX. Le chemin OFX est pour les fichiers interface. Sans eux, VEGAS **ne scannera pas** le plugin. Les plugins du chemin OFX commun sont aussi scannés par d'autres logiciels supportant OFX (Premiere Pro, DaVinci Resolve). Le chemin spécifique à VEGAS est scanné seulement par cette version VEGAS.
@ru Примечание: Плагин OFX может состоять из ядра плагина и файлов интерфейса OFX. Путь OFX предназначен для файлов интерфейса. Без них VEGAS **не будет сканировать** плагин. Плагины общего пути OFX также сканируются другим ПО, поддерживающим OFX (Premiere Pro, DaVinci Resolve). Специфичный для VEGAS путь сканируется только этой версией VEGAS.

@en OFX interface file structure:
@zh OFX 接口文件的路径结构如下：
@zh-hant OFX 介面檔案的路徑結構如下：
@ja OFX インターフェースファイル構造：
@ko OFX 인터페이스 파일 구조:
@de OFX-Interface-Dateistruktur:
@fr Structure des fichiers interface OFX :
@ru Структура файла интерфейса OFX:

```
<OFX Path>/
├── xxx.ofx.bundle/
│ └── Contents/
│ ├── Presets/
│ │ ├── PresetPackage.xml
│ │ ├── PresetPackage.zh-CN.xml
│ │ └── ...
│ ├── Resources/
│ │ ├── xxx.xml
│ │ ├── xxx.zh-CN.xml
│ │ └── ...
│ └── Win64/
│ └── xxx.ofx
└── yyy.ofx.bundle/
 └── ...
```

@en `Win64\xxx.ofx` is the OFX interface file. `Presets\PresetPackage.xml` contains built-in presets. `Resources\xxx.xml` is the language translation file.
@zh 其中，`Win64\xxx.ofx` 是 OFX 插件的接口文件。`Presets\PresetPackage.xml` 是插件自带的预设文件，`Resources\xxx.xml` 是语言翻译文件（通常为英语，不过插件汉化者一般会直接编辑这个文件，来达到强制汉化的目的）。两个 `.zh-CN.xml` 是汉化版 Vegas 优先读取的文件。
@zh-hant 其中，`Win64\xxx.ofx` 是 OFX 外掛程式的介面檔案。`Presets\PresetPackage.xml` 是外掛程式自帶的預設檔案，`Resources\xxx.xml` 是語言翻譯檔案（通常為英語，不過外掛程式漢化者一般會直接編輯這個檔案，來達到強制漢化的目的）。兩個 `.zh-CN.xml` 是漢化版 Vegas 優先讀取的檔案。
@ja `Win64\xxx.ofx` は OFX インターフェースファイル。 `Presets\PresetPackage.xml` は組み込みプリセット。 `Resources\xxx.xml` は言語翻訳ファイル。
@ko `Win64\xxx.ofx`는 OFX 인터페이스 파일입니다. `Presets\PresetPackage.xml`에는 내장 프리셋이 포함되어 있습니다. `Resources\xxx.xml`은 언어 번역 파일입니다.
@de `Win64\xxx.ofx` ist die OFX-Interface-Datei. `Presets\PresetPackage.xml` enthält eingebaute Voreinstellungen. `Resources\xxx.xml` ist die Sprachübersetzungsdatei.
@fr `Win64\xxx.ofx` est le fichier interface OFX. `Presets\PresetPackage.xml` contient les préréglages intégrés. `Resources\xxx.xml` est le fichier de traduction linguistique.
@ru `Win64\xxx.ofx` — файл интерфейса OFX. `Presets\PresetPackage.xml` содержит встроенные пресеты. `Resources\xxx.xml` — файл перевода языка.

@en Note: Editing OFX paths often requires administrator privileges. For `xml` files, I recommend `Visual Studio Code`, which prompts for administrator privileges on save.
@zh 注意，OFX 路径一般需要管理员权限才能编辑，所以对于 `xml` 文件，不建议直接使用没有管理员权限的记事本打开。我个人比较推荐用 `Visual Studio Code`，保存时会提醒使用管理员权限保存。
@zh-hant 注意，OFX 路徑一般需要管理員許可權才能編輯，所以對於 `xml` 檔案，不建議直接使用沒有管理員許可權的記事本開啟。我個人比較推薦用 `Visual Studio Code`，儲存時會提醒使用管理員許可權儲存。
@ja 注：OFX パスの編集には管理者権限が必要なことが多いです。 `xml` ファイルには `Visual Studio Code` をお勧めします。保存時に管理者権限を求められます。
@ko 참고: OFX 경로 편집에는 관리자 권한이 필요한 경우가 많습니다. `xml` 파일의 경우 `Visual Studio Code`를 권장하며 저장 시 관리자 권한을 요청합니다.
@de Hinweis: Das Bearbeiten von OFX-Pfaden erfordert oft Administratorrechte. Für `xml`-Dateien empfehle ich `Visual Studio Code`, das beim Speichern nach Administratorrechten fragt.
@fr Note : L'édition des chemins OFX nécessite souvent des privilèges d'administrateur. Pour les fichiers `xml`, je recommande `Visual Studio Code`, qui demande les privilèges d'administrateur lors de la sauvegarde.
@ru Примечание: Редактирование путей OFX часто требует прав администратора. Для файлов `xml` я рекомендую `Visual Studio Code`, который запрашивает права администратора при сохранении.

@en After modifying language files, delete the **plugin name cache** mentioned earlier and restart VEGAS to see changes.
@zh 修改完语言翻译文件后，需要删除之前提到的**插件名称缓存**并重启 Vegas，才能看到修改后的结果。
@zh-hant 修改完語言翻譯檔案後，需要刪除之前提到的**外掛程式名稱快取**並重啟 Vegas，才能看到修改後的結果。
@ja 言語ファイルを変更した後、前述の**プラグイン名キャッシュ**を削除し、VEGAS を再起動して変更を確認します。
@ko 언어 파일 수정 후 위에서 언급한 **플러그인 이름 캐시**를 삭제하고 VEGAS를 다시 시작하여 변경 사항을 확인하십시오.
@de Nach dem Ändern von Sprachdateien löschen Sie den **Plugin-Name-Cache** wie zuvor erwähnt und starten VEGAS neu, um Änderungen zu sehen.
@fr Après modification des fichiers de langue, supprimez le **cache des noms de plugin** mentionné précédemment et redémarrez VEGAS pour voir les changements.
@ru После изменения файлов языка удалите **кэш имен плагинов**, упомянутый ранее, и перезапустите VEGAS, чтобы увидеть изменения.

@en User-saved OFX plugin FX presets: `%userprofile%\Documents\OFX Presets\`
@zh 自己保存的 OFX 插件的 FX 预设：`%userprofile%\Documents\OFX Presets\`
@zh-hant 自己儲存的 OFX 外掛程式的 FX 預設：`%userprofile%\Documents\OFX Presets\`
@ja ユーザー保存の OFX プラグイン FX プリセット： `%userprofile%\Documents\OFX Presets\`
@ko 사용자가 저장한 OFX 플러그인 FX 프리셋: `%userprofile%\Documents\OFX Presets\`
@de Benutzer-gespeicherte OFX-Plugin-FX-Voreinstellungen: `%userprofile%\Documents\OFX Presets\`
@fr Préréglages FX de plugins OFX enregistrés par l'utilisateur : `%userprofile%\Documents\OFX Presets\`
@ru Пользовательские сохраненные пресеты FX для плагинов OFX: `%userprofile%\Documents\OFX Presets\`

<br>

@en ### DXT Related Info
@zh ### DXT 相关信息
@zh-hant ### DXT 相關資訊
@ja ### DXT 関連情報
@ko ### DXT 관련 정보
@de ### DXT bezogene Informationen
@fr ### Infos DXT liées
@ru ### Информация, связанная с DXT

@en - **Built-in DXT Path**: `...<VEGAS install path>\Video Plug-Ins\`
@zh - **自带 DXT 路径**：`...<Vegas 安装路径>\Video Plug-Ins\`
@zh-hant - **自帶 DXT 路徑**：`...<Vegas 安裝路徑>\Video Plug-Ins\`
@ja - **組み込み DXT パス**： `...<VEGAS インストールパス>\Video Plug-Ins\`
@ko - **내장 DXT 경로**: `...<VEGAS 설치 경로>\Video Plug-Ins\`
@de - **Eingebauter DXT-Pfad**: `...<VEGAS Installationspfad>\Video Plug-Ins\`
@fr - **Chemin DXT intégré** : `...<Chemin d'installation VEGAS>\Video Plug-Ins\`
@ru - **Встроенный путь DXT**: `...<путь установки VEGAS>\Video Plug-Ins\`

@en Strictly, DXT plugins don't have a mandated folder like OFX. They are DLL files requiring registration via `regsvr32 xxx.dll`. This allows placing external DXT plugins anywhere and registering them for VEGAS to recognize. Useful for manual registration plugins like [Route Animation](https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/my-vegas-pro-utilities-tools--105615/) (`RouteAnimationX64.dll`).
@zh 准确地说，DXT 插件并没有像 OFX 那样强制规定了存放的文件夹。它们是单独的 dll 文件，需要依赖于 dll 注册。所以，我们可以把其他外置的 DXT 插件存放到任意文件夹，之后运行 `regsvr32 xxx.dll` 注册，这样 Vegas 就能识别到这个 DXT 插件了。这对于一些需要手动注册的 DXT 插件很有用，比如 [Route Animation](https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/my-vegas-pro-utilities-tools--105615/) (`RouteAnimationX64.dll`)。
@zh-hant 準確地說，DXT 外掛程式並沒有像 OFX 那樣強制規定了存放的資料夾。它們是單獨的 dll 檔案，需要依賴於 dll 註冊。所以，我們可以把其他外置的 DXT 外掛程式存放到任意資料夾，之後執行 `regsvr32 xxx.dll` 註冊，這樣 Vegas 就能識別到這個 DXT 外掛程式了。這對於一些需要手動註冊的 DXT 外掛程式很有用，比如 [Route Animation](https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/my-vegas-pro-utilities-tools--105615/) (`RouteAnimationX64.dll`)。
@ja 厳密には、DXT プラグインは OFX のような強制フォルダはありません。これらは `regsvr32 xxx.dll` による登録が必要な DLL ファイルです。これにより、外部 DXT プラグインを任意の場所に配置し、登録して VEGAS に認識させることができます。 [Route Animation](https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/my-vegas-pro-utilities-tools--105615/) (`RouteAnimationX64.dll`) などの手動登録プラグインに有用です。
@ko 엄밀히 말하면, DXT 플러그인은 OFX처럼 강제된 폴더가 없습니다. 이들은 `regsvr32 xxx.dll`을 통해 등록이 필요한 DLL 파일입니다. 이를 통해 외부 DXT 플러그인을 어디에나 배치하고 등록하여 VEGAS가 인식하도록 할 수 있습니다. [Route Animation](https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/my-vegas-pro-utilities-tools--105615/) (`RouteAnimationX64.dll`)과 같은 수동 등록 플러그인에 유용합니다.
@de Streng genommen haben DXT-Plugins keinen vorgeschriebenen Ordner wie OFX. Sie sind DLL-Dateien, die Registrierung via `regsvr32 xxx.dll` benötigen. Dies ermöglicht, externe DXT-Plugins überall zu platzieren und für VEGAS zu registrieren. Nützlich für manuelle Registrierungs-Plugins wie [Route Animation](https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/my-vegas-pro-utilities-tools--105615/) (`RouteAnimationX64.dll`).
@fr Strictement, les plugins DXT n'ont pas de dossier mandaté comme OFX. Ce sont des fichiers DLL nécessitant un enregistrement via `regsvr32 xxx.dll`. Cela permet de placer des plugins DXT externes n'importe où et de les enregistrer pour que VEGAS les reconnaisse. Utile pour les plugins à enregistrement manuel comme [Route Animation](https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/my-vegas-pro-utilities-tools--105615/) (`RouteAnimationX64.dll`).
@ru Строго говоря, у плагинов DXT нет обязательной папки, как у OFX. Это файлы DLL, требующие регистрации через `regsvr32 xxx.dll`. Это позволяет размещать внешние плагины DXT где угодно и регистрировать их для распознавания VEGAS. Полезно для плагинов с ручной регистрацией, таких как [Route Animation](https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/my-vegas-pro-utilities-tools--105615/) (`RouteAnimationX64.dll`).

<br>

@en ### Video Plugin Q&A
@zh ### 视频插件相关的 Q&A
@zh-hant ### 影片外掛程式相關的 Q&A
@ja ### ビデオプラグイン Q&A
@ko ### 비디오 플러그인 Q&A
@de ### Video-Plugin Q&A
@fr ### FAQ sur les plugins vidéo
@ru ### Вопросы и ответы по видео-плагинам

@en Q: Changed VEGAS to other language via registry, but **built-in plugin names are still English**. How to fix?
@zh Q：已经通过注册表将 Vegas 界面的英文改成中文了，但**自带的插件名称仍然是全英文的**，怎么改成中文？
@zh-hant Q：已經通過登錄檔將 Vegas 介面的英文改成中文了，但**自帶的外掛程式名稱仍然是全英文的**，怎麼改成中文？
@ja Q: レジストリ経由で VEGAS を他の言語に変更したが、**組み込みプラグイン名が英語のまま**。修正方法は？
@ko Q: 레지스트리를 통해 VEGAS를 다른 언어로 변경했지만 **내장 플러그인 이름이 여전히 영어**입니다. 수정 방법은 무엇입니까?
@de F: Änderte VEGAS über Registrierung auf andere Sprache, aber **eingebaute Plugin-Namen sind immer noch Englisch**. Wie beheben?
@fr Q : Changé VEGAS en une autre langue via le registre, mais **les noms des plugins intégrés sont toujours en anglais**. Comment réparer ?
@ru В: Изменил язык VEGAS на другой через реестр, но **названия встроенных плагинов все еще на английском**. Как исправить?

@en A: **Delete the plugin name cache** mentioned above, restart VEGAS. Or simply **[reset preferences](#5-reset-preferences)**.
@zh A：**删除上述 Vegas 插件缓存中的名称缓存**，重启 Vegas。偷懒一点的话可以直接 **[重置首选项](#5-重置首选项)**。
@zh-hant A：**刪除上述 Vegas 外掛程式快取中的名稱快取**，重啟 Vegas。偷懶一點的話可以直接**[重設首選項](#5-重設首選項)**。
@ja A: **上記のプラグイン名キャッシュを削除**し、VEGAS を再起動。または単に **[プリファレンスをリセット](#5-プリファレンスをリセットする)**。
@ko A: 위에서 언급한 **플러그인 이름 캐시를 삭제**하고 VEGAS를 다시 시작하십시오. 또는 단순히 **[환경설정 재설정](#5-환경설정-재설정)** 하십시오.
@de A: **Löschen Sie den Plugin-Name-Cache** wie oben erwähnt, starten Sie VEGAS neu. Oder einfach **[Einstellungen zurücksetzen](#5-einstellungen-zurücksetzen)**.
@fr R : **Supprimez le cache des noms de plugin** mentionné ci-dessus, redémarrez VEGAS. Ou simplement **[réinitialisez les préférences](#5-réinitialiser-les-préférences)**.
@ru О: **Удалите кэш имен плагинов**, упомянутый выше, перезапустите VEGAS. Или просто **[сбросьте настройки](#5-сбросить-настройки)**.

<br>

@en Q: **Already uninstalled a plugin**, but it **still appears in VEGAS FX list**, and clicking it crashes?
@zh Q：**已经卸载了某个插件**，但是 Vegas 的 FX 界面里**还显示着存在**这个插件效果，并且一点就崩溃？
@zh-hant Q：**已經解除安裝了某個外掛程式**，但是 Vegas 的 FX 介面裡**還顯示著存在**這個外掛程式效果，並且一點就崩潰？
@ja Q: **プラグインをアンインストール済み**だが、**VEGAS FX リストにまだ表示され**、クリックするとクラッシュする？
@ko Q: **이미 플러그인을 제거했지만** **여전히 VEGAS FX 목록에 나타나고**, 클릭하면 크래시됩니까?
@de F: **Plugin bereits deinstalliert**, aber es **erscheint immer noch in VEGAS FX-Liste**, und Klicken stürzt ab?
@fr Q : **Déjà désinstallé un plugin**, mais il **apparaît toujours dans la liste FX VEGAS**, et cliquer dessus plante ?
@ru В: **Уже удалил плагин**, но он **все еще появляется в списке FX VEGAS**, и нажатие на него вызывает сбой?

@en A: Check if **corresponding files in OFX paths** are cleaned up. If cleaned and still appears, try **deleting the VEGAS plugin cache files**.
@zh A：检查**OFX 路径里的对应文件**有没有清理干净，如果清理了也仍旧存在，可以尝试**删除上述 Vegas 插件缓存文件**。
@zh-hant A：檢查**OFX 路徑裡的對應檔案**有沒有清理乾淨，如果清理了也仍舊存在，可以嘗試**刪除上述 Vegas 外掛程式快取檔案**。
@ja A: **OFX パス内の対応ファイル**がクリーンアップされているか確認。クリーンアップ後も表示される場合、**VEGAS プラグインキャッシュファイルを削除**してみてください。
@ko A: **OFX 경로의 해당 파일**이 정리되었는지 확인하십시오. 정리되었는데도 나타나면 **VEGAS 플러그인 캐시 파일을 삭제**해 보십시오.
@de A: Überprüfen Sie, ob **entsprechende Dateien in OFX-Pfaden** bereinigt wurden. Wenn bereinigt und immer noch erscheint, versuchen Sie **VEGAS-Plugin-Cache-Dateien zu löschen**.
@fr R : Vérifiez si **les fichiers correspondants dans les chemins OFX** sont nettoyés. Si nettoyés et apparaît toujours, essayez **de supprimer les fichiers cache de plugin VEGAS**.
@ru О: Проверьте, очищены ли **соответствующие файлы в путях OFX**. Если очищены и все еще появляется, попробуйте **удалить файлы кэша плагинов VEGAS**.

<br>

@en Q: **Browsing to a specific FX in Video FX/Transition FX/Media Generator FX windows causes immediate crash**?
@zh Q：**在视频 FX/转场 FX/媒体生成器 FX 窗口中，浏览到某个插件效果时，直接崩溃？**
@zh-hant Q：**在影片 FX/轉場 FX/媒體生成器 FX 視窗中，瀏覽到某個外掛程式效果時，直接崩潰？**
@ja Q: **ビデオ FX/トランジション FX/メディアジェネレーター FX ウィンドウで特定の FX を閲覧すると即時クラッシュ**？
@ko Q: **비디오 FX/전환 FX/미디어 생성기 FX 창에서 특정 FX로 이동하면 즉시 크래시**됩니까?
@de F: **Durchsuchen zu einem spezifischen FX in Video-FX/Übergang-FX/Media Generator-FX-Fenstern verursacht sofortigen Absturz**?
@fr Q : **Parcourir vers un FX spécifique dans les fenêtres FX Vidéo/FX Transition/FX Générateur de média provoque un plantage immédiat** ?
@ru В: **Просмотр определенного FX в окнах Видео FX/Переходы FX/Медиа генераторы FX вызывает немедленный сбой**?

@en A: This is usually a **thumbnail loading crash**. No direct fix; you can only avoid it. If you don't need that plugin series, find its OFX files (external in common path, VEGAS-built-in in specific path) and remove them. If you still want the plugin series but not that FX, **try editing the `xml` translation file** to move it to the end, avoiding accidental selection.  
@zh A：这个一般是**加载缩略图**时发生的崩溃。没有直接解决崩溃的办法，只能自己尝试避免崩溃。如果不想用这个插件系列，那就找到其对应的 OFX 文件（外部插件找公共 OFX 路径，Vegas 自带的找独立 OFX 路径），移除。如果仍然想用这个插件系列，但不想使用这个效果，可以**尝试修改 `xml` 翻译文件**，给它排到最后面，避免在浏览效果时点到它。  
@zh-hant A：這個一般是**載入縮圖**時發生的崩潰。沒有直接解決崩潰的辦法，只能自己嘗試避免崩潰。如果不想用這個外掛程式系列，那就找到其對應的 OFX 檔案（外部外掛程式找公共 OFX 路徑，Vegas 自帶的找獨立 OFX 路徑），移除。如果仍然想用這個外掛程式系列，但不想使用這個效果，可以**嘗試修改 `xml` 翻譯檔案**，給它排到最后面，避免在瀏覽效果時點到它。  
@ja A: これは通常、**サムネイル読み込みクラッシュ**です。直接修正はありません。回避するしかありません。そのプラグインシリーズが必要ない場合は、OFX ファイル（外部は共通パス、VEGAS 組み込みは固有パス）を見つけて削除します。プラグインシリーズは必要だがその FX は不要な場合は、 **`xml` 翻訳ファイルを編集**して最後に移動し、誤って選択するのを防ぐことができます。  
@ko A: 이는 일반적으로 **썸네일 로딩 크래시**입니다. 직접적인 해결책은 없으며 피할 수만 있습니다. 해당 플러그인 시리즈가 필요하지 않으면 OFX 파일(공통 경로의 외부, VEGAS 내장의 전용 경로)을 찾아 제거하십시오. 여전히 플러그인 시리즈를 원하지만 해당 FX는 원하지 않으면 **`xml` 번역 파일을 편집**하여 끝으로 이동시켜 실수로 선택하는 것을 피하십시오.
@de A: Dies ist normalerweise ein **Miniaturbild-Lade-Absturz**. Keine direkte Behebung; Sie können es nur vermeiden. Wenn Sie diese Plugin-Serie nicht benötigen, finden Sie ihre OFX-Dateien (extern im allgemeinen Pfad, VEGAS-eingebaut im spezifischen Pfad) und entfernen Sie sie. Wenn Sie die Plugin-Serie immer noch wollen, aber nicht diesen FX, **versuchen Sie, die `xml`-Übersetzungsdatei zu bearbeiten**, um es ans Ende zu verschieben, versehentliche Auswahl vermeiden.  
@fr R : C'est généralement un **plantage de chargement de miniature**. Pas de correction directe ; vous pouvez seulement l'éviter. Si vous n'avez pas besoin de cette série de plugins, trouvez ses fichiers OFX (externes dans le chemin commun, intégrés à VEGAS dans le chemin spécifique) et supprimez-les. Si vous voulez toujours la série de plugins mais pas ce FX, **essayez d'éditer le fichier de traduction `xml`** pour le déplacer à la fin, évitant la sélection accidentelle.  
@ru О: Это обычно **сбой загрузки миниатюры**. Прямого исправления нет; можно только избежать. Если вам не нужна эта серия плагинов, найдите ее файлы OFX (внешние — в общем пути, встроенные в VEGAS — в специфичном) и удалите их. Если вы все еще хотите серию плагинов, но не этот FX, **попробуйте отредактировать файл перевода `xml`**, чтобы переместить его в конец, избегая случайного выбора.

@en <small>Alternatively, use the <b>FX Search extension [VPConsole](https://www.ratinfx.com/vpconsole/)</b> as a replacement.</small>
@zh <small>也可以使用<b>效果搜索插件 [VPConsole](https://www.ratinfx.com/vpconsole/)</b>，作为自带效果搜索功能的平替。</small>
@zh-hant <small>也可以使用<b>效果搜尋外掛程式 [VPConsole](https://www.ratinfx.com/vpconsole/)</b>，作為自帶效果搜尋功能的平替。</small>
@ja <small>または、 <b>FX 検索拡張機能 [VPConsole](https://www.ratinfx.com/vpconsole/)</b> を代替として使用。</small>
@ko <small>또는 <b>FX 검색 확장 [VPConsole](https://www.ratinfx.com/vpconsole/)</b>을 대안으로 사용할 수 있습니다.</small>
@de <small>Alternativ verwenden Sie die <b>FX-Such-Erweiterung [VPConsole](https://www.ratinfx.com/vpconsole/)</b> als Ersatz.</small>
@fr <small>Alternativement, utilisez **l'extension de recherche FX [VPConsole](https://www.ratinfx.com/vpconsole/)** comme remplacement.</small>
@ru <small>В качестве альтернативы используйте <b>расширение поиска FX [VPConsole](https://www.ratinfx.com/vpconsole/)</b> в качестве замены.</small>

<br>

@en Q: **Using the plugin search box causes white screen/freeze**, making it unusable?
@zh Q：**插件搜索框一用就白屏卡死**，根本没法用？
@zh-hant Q：**外掛程式搜尋方塊一用就白屏卡死**，根本沒法用？
@ja Q: **プラグイン検索ボックスを使用すると白画面/フリーズ**し、使用できない？
@ko Q: **플러그인 검색 상자를 사용하면 흰색 화면/정지**가 되어 사용할 수 없습니까?
@de F: **Verwenden des Plugin-Suchfeldes verursacht weißen Bildschirm/Einfrieren**, macht es unbrauchbar?
@fr Q : **Utiliser la boîte de recherche de plugin provoque un écran blanc/blocage**, le rendant inutilisable ?
@ru В: **Использование поля поиска плагинов вызывает белый экран/зависание**, делая его непригодным для использования?

@en A: With many plugins installed, older VEGAS versions often freeze when using search, taking a long time to recover. **VP18 fixed this**, so upgrading to VP18+ is recommended for smooth searching.  
@zh A：当安装的插件过多时，低版本 Vegas 一使用插件搜索框就容易白屏卡死，需要等好久才会恢复正常。**vv18 已修复此问题**，因此建议升级至 vv18 及以上版本，搜索功能流畅可用。  
@zh-hant A：當安裝的外掛程式過多時，低版本 Vegas 一使用外掛程式搜尋方塊就容易白屏卡死，需要等好久才會恢復正常。**vv18 已修復此問題**，因此建議升級至 vv18 及以上版本，搜尋功能流暢可用。  
@ja A: 多くのプラグインをインストールすると、古い VEGAS バージョンは検索使用時に頻繁にフリーズし、回復に長時間かかります。 **VP18 で修正**されたため、スムーズな検索のために VP18+ へのアップグレードをお勧めします。  
@ko A: 많은 플러그인이 설치된 상태에서 이전 VEGAS 버전은 검색 사용 시 종종 정지하며 회복하는 데 시간이 오래 걸립니다. **VP18에서 이 문제가 수정되었으므로** 원활한 검색을 위해 VP18+로 업그레이드하는 것이 좋습니다.
@de A: Mit vielen installierten Plugins frieren ältere VEGAS-Versionen oft beim Verwenden der Suche ein, brauchen lange, um sich zu erholen. **VP18 hat dies behoben**, daher wird ein Upgrade auf VP18+ für flüssiges Suchen empfohlen.  
@fr R : Avec de nombreux plugins installés, les anciennes versions VEGAS se bloquent souvent lors de l'utilisation de la recherche, prenant beaucoup de temps à récupérer. **VP18 a corrigé cela**, donc mettre à niveau vers VP18+ est recommandé pour une recherche fluide.  
@ru О: При установке многих плагинов старые версии VEGAS часто зависают при использовании поиска, требуя много времени на восстановление. **VP18 исправил это**, поэтому для плавного поиска рекомендуется обновление до VP18+.

@en <small>Alternatively, use the <b>FX Search extension [VPConsole](https://www.ratinfx.com/vpconsole/)</b> as a replacement.</small>
@zh <small>也可以使用<b>效果搜索插件 [VPConsole](https://www.ratinfx.com/vpconsole/)</b>，作为自带效果搜索功能的平替。</small>
@zh-hant <small>也可以使用<b>效果搜尋外掛程式 [VPConsole](https://www.ratinfx.com/vpconsole/)</b>，作為自帶效果搜尋功能的平替。</small>
@ja <small>または、 <b>FX 検索拡張機能 [VPConsole](https://www.ratinfx.com/vpconsole/)</b> を代替として使用。</small>
@ko <small>또는 <b>FX 검색 확장 [VPConsole](https://www.ratinfx.com/vpconsole/)</b>을 대안으로 사용할 수 있습니다.</small>
@de <small>Alternativ verwenden Sie die <b>FX-Such-Erweiterung [VPConsole](https://www.ratinfx.com/vpconsole/)</b> als Ersatz.</small>
@fr <small>Alternativement, utilisez **l'extension de recherche FX [VPConsole](https://www.ratinfx.com/vpconsole/)** comme remplacement.</small>
@ru <small>В качестве альтернативы используйте <b>расширение поиска FX [VPConsole](https://www.ratinfx.com/vpconsole/)</b> в качестве замены.</small>

@en <iframe width="560" height="315" src="https://www.youtube.com/embed/4ZZBfTb2Ubg?si=vkKTf8trYe8t6RR5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
@zh <p align="center"><iframe src="//player.bilibili.com/player.html?bvid=BV1U4XhYgEG5&autoplay=false" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe></p>
@zh-hant <p align="center"><iframe src="//player.bilibili.com/player.html?bvid=BV1U4XhYgEG5&autoplay=false" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe></p>

<br>

@en Q: **Using built-in AI FX prompts to install VEGAS Deep Learning Models component**?  
@zh Q：**使用自带的 AI 效果，提示要安装 VEGAS 深度学习模型组件**？  
@zh-hant Q：**使用自帶的 AI 效果，提示要安裝 VEGAS 深度學習模型元件**？  
@ja Q: **組み込み AI FX を使用すると、VEGAS Deep Learning Models コンポーネントのインストールを促される**？  
@ko Q: **내장 AI FX 사용 시 VEGAS 딥 러닝 모델 구성 요소 설치 요청**?
@de F: **Verwenden eingebauter AI-FX fordert Installation von VEGAS Deep Learning Models Komponente**?  
@fr Q : **Utilisation des FX IA intégrés demande d'installer le composant VEGAS Modèles d'Apprentissage Profond** ?  
@ru В: **Использование встроенных AI FX предлагает установить компонент VEGAS Deep Learning Models**?

@en `This plug-in requires additional data. Please log into your Service Center account and download the Deep Learning Models component from the My Products section.`
@zh `此插件需要其他数据。请登录您的服务中心帐户并从“My Products”部分下载深度学习模型组件。`
@zh-hant `此外掛程式需要其他資料。請登入您的服務中心帳戶並從“My Products”部分下載深度學習模型元件。`
@ja `このプラグインには追加データが必要です。[サービスセンター] アカウントにログインし、[マイプロダクト] セクションから [ディープラーニングモデル] コンポーネントをダウンロードしてください。`
@ko `이 플러그인을 사용하시려면 추가 데이터가 필요합니다. 서비스 센터 계정에 로그인하신 뒤 내 제품 섹션에서 딥 러닝 모델 구성 요소를 다운로드하십시오.`
@de `Dieses Plugin benötigt zusätzliche Daten. Bitte installieren Sie die VEGAS Deep Learning-Modelle, die Sie unter www.vegascreativesoftware.com herunterladen können.`
@fr `Ce module externe requiert des données supplémentaires. Veuillez vous connecter à votre compte Service Center et télécharger le composant Modèles d&apos;apprentissage profond dans la section Mes produits.`
@ru `Этот плагин требует дополнительных данных. Войдите в свою учетную запись Центра обслуживания и загрузите компонент Deep Learning Models в разделе Мои продукты.`

@en A: For newer built-in AI FX, **you must install the corresponding version of Deep Learning Models** separately.
@zh A：对于高版本自带的 AI 效果，**需要额外安装对应版本的深度学习模型（Deep Learning Models）**才能使用。
@zh-hant A：對於高版本自帶的 AI 效果，**需要額外安裝對應版本的深度學習模型（Deep Learning Models）**才能使用。
@ja A: 新しい組み込み AI FX には、**対応するバージョンの Deep Learning Models を別途インストールする必要があります**。
@ko A: 새로운 내장 AI FX의 경우 **해당 버전의 딥 러닝 모델을 별도로 설치**해야 합니다.
@de A: Für neuere eingebaute AI-FX **müssen Sie die entsprechende Version von Deep Learning Models** separat installieren.
@fr R : Pour les nouveaux FX IA intégrés, **vous devez installer la version correspondante de Modèles d'Apprentissage Profond** séparément.
@ru О: Для новых встроенных AI FX **вы должны установить соответствующую версию Deep Learning Models** отдельно.

@en <small>Official AI Deep Learning Models download: https://forum.borisfx.com/t/where-can-i-download-vegas-pro-including-old-versions/24247</small>
@zh <small>官方 AI 深度学习模型下载链接：https://forum.borisfx.com/t/where-can-i-download-vegas-pro-including-old-versions/24247</small>
@zh-hant <small>官方 AI 深度學習模型下載連結：https://forum.borisfx.com/t/where-can-i-download-vegas-pro-including-old-versions/24247</small>
@ja <small>公式 AI Deep Learning Models ダウンロード： https://forum.borisfx.com/t/where-can-i-download-vegas-pro-including-old-versions/24247</small>
@ko <small>공식 AI 딥 러닝 모델 다운로드: https://forum.borisfx.com/t/where-can-i-download-vegas-pro-including-old-versions/24247</small>
@de <small>Offizielle AI Deep Learning Models Download: https://forum.borisfx.com/t/where-can-i-download-vegas-pro-including-old-versions/24247</small>
@fr <small>Téléchargement officiel des Modèles d'Apprentissage Profond IA : https://forum.borisfx.com/t/where-can-i-download-vegas-pro-including-old-versions/24247</small>
@ru <small>Официальная загрузка AI Deep Learning Models: https://forum.borisfx.com/t/where-can-i-download-vegas-pro-including-old-versions/24247</small>

<br>

@en Q: Built-in **`LUT Filter` FX cannot recognize selected `.cube` files**?
@zh Q：**自带的 `LUT 筛选器` FX，无法识别到选定的 `.cube` 文件**？
@zh-hant Q：**自帶的 `LUT 篩選器` FX，無法識別到選定的 `.cube` 檔案**？
@ja Q: 組み込み **`LUT フィルター` FX が選択した `.cube` ファイルを認識できない**？
@ko Q: 내장 **`LUT 필터` FX가 선택한 `.cube` 파일을 인식할 수 없음**?
@de F: Eingebauter **`LUT-Filter` FX erkennt ausgewählte `.cube`-Dateien nicht**?
@fr Q : Le FX intégré **`Filtre LUT` ne peut pas reconnaître les fichiers `.cube` sélectionnés** ?
@ru В: Встроенный **FX `Фильтр LUT (LUT Filter)` не может распознать выбранные файлы `.cube`**?

@en A: Check if the **full path to the `.cube` file contains only [half-width English characters]**. If it contains any other characters like Chinese, **move the file to a path with only half-width English characters**, then reselect it.
@zh A：检查该 `.cube` 文件的完整路径中是否**只含有【半角英文字符】**。如果含有任何中文之类的其他字符，请将其**放置到只含半角英文字符的路径**，再重新选中它。
@zh-hant A：檢查該 `.cube` 檔案的完整路徑中是否**只含有【半角英文字元】**。如果含有任何中文之類的其他字元，請將其**放置到只含半角英文字元的路徑**，再重新選中它。
@ja A: `.cube` ファイルの**フルパスが【半角英数字のみ】で構成されているか確認**。中国語などの他の文字が含まれている場合、**ファイルを半角英数字のみのパスに移動**し、再選択します。
@ko A: `.cube` 파일의 **전체 경로가 [반각 영문자]만 포함하는지** 확인하십시오. 중국어와 같은 다른 문자가 포함되어 있으면 **반각 영문자만 포함하는 경로로 파일을 이동**한 후 다시 선택하십시오.
@de A: Überprüfen Sie, ob der **vollständige Pfad zur `.cube`-Datei nur [halbe Breite englische Zeichen] enthält**. Wenn er andere Zeichen wie Deutsch enthält, **bewegen Sie die Datei in einen Pfad mit nur halben Breite englischen Zeichen**, dann wählen Sie sie erneut aus.
@fr R : Vérifiez si le **chemin complet vers le fichier `.cube` contient uniquement [des caractères anglais demi-largeur]**. S'il contient d'autres caractères comme du chinois, **déplacez le fichier vers un chemin avec uniquement des caractères anglais demi-largeur**, puis resélectionnez-le.
@ru О: Проверьте, содержит ли **полный путь к файлу `.cube` только [полуширинные английские символы]**. Если он содержит любые другие символы, такие как китайские, **переместите файл в путь, содержащий только полуширинные английские символы**, затем выберите его заново.

<br>

@en Q: **Some Sapphire plugin FX ignore alpha channel, covering the background underneath**?
@zh Q：**蓝宝石插件的某些效果会忽略 alpha 通道，覆盖掉底下的背景？**
@zh-hant Q：**藍寶石外掛程式的某些效果會忽略 alpha 通道，覆蓋掉底下的背景？**
@ja Q: **一部の Sapphire プラグイン FX がアルファチャンネルを無視し、下の背景を覆い隠す**？
@ko Q: **일부 Sapphire 플러그인 FX가 알파 채널을 무시하고 아래 배경을 덮음**?
@de F: **Einige Sapphire-Plugin-FX ignorieren Alphakanal, bedecken den darunterliegenden Hintergrund**?
@fr Q : **Certains FX de plugin Sapphire ignorent le canal alpha, couvrant l'arrière-plan en dessous** ?
@ru В: **Некоторые FX плагина Sapphire игнорируют альфа-канал, покрывая фон под ним**?

@en A: As shown, enter the FX's `Help` and disable its `GPU` acceleration individually.
@zh A：如图所示，进入该效果的 `帮助`，单独取消掉该效果的 `GPU`。
@zh-hant A：如圖所示，進入該效果的 `幫助`，單獨取消掉該效果的 `GPU`。
@ja A: 図のように、FX の `ヘルプ` に入り、個別にその `GPU` アクセラレーションを無効にします。
@ko A: 그림과 같이 FX의 `도움말`에 들어가 개별적으로 `GPU` 가속을 비활성화하십시오.
@de A: Wie gezeigt, geben Sie das FX `Hilfe` ein und deaktivieren Sie seine `GPU`-Beschleunigung einzeln.
@fr R : Comme montré, entrez dans `Aide` du FX et désactivez son accélération `GPU` individuellement.
@ru О: Как показано, войдите в `Справку (Help)` FX и отключите его ускорение `GPU` отдельно.

<ImageOnDemand src="vegtips/image036_sapphire_alpha.png" />

@en If that doesn't work, **disable VEGAS's own `GPU Acceleration`**.
@zh 如果没有用，那只能**关闭 Vegas 自己的 `GPU 加速`**了。
@zh-hant 如果沒有用，那只能**關閉 Vegas 自己的 `GPU 加速`**了。
@ja それでもダメな場合、**VEGAS 自体の `GPU アクセラレーション` を無効にします**。
@ko 작동하지 않으면 **VEGAS 자체의 `GPU 가속`을 비활성화**하십시오.
@de Wenn das nicht funktioniert, **deaktivieren Sie VEGAS' eigene `GPU-Beschleunigung`**.
@fr Si cela ne fonctionne pas, **désactivez l'`Accélération GPU` propre à VEGAS**.
@ru Если это не поможет, **отключите собственное `Ускорение GPU` VEGAS**.

<br>

@en Q: Standalone Mocha works, but **OFX plugin version Mocha called via VEGAS crashes**?
@zh Q：独立版 Mocha 是能够正常运行的，但 **OFX 插件版 Mocha 无法通过 Vegas 调用，会闪退**？
@zh-hant Q：獨立版 Mocha 是能夠正常執行的，但 **OFX 外掛程式版 Mocha 無法通過 Vegas 呼叫，會閃退**？
@ja Q: スタンドアロン Mocha は動作するが、**VEGAS 経由で呼び出される OFX プラグインバージョンの Mocha がクラッシュする**？
@ko Q: 독립 실행형 Mocha는 작동하지만 **VEGAS를 통해 호출된 OFX 플러그인 버전 Mocha가 크래시됨**?
@de F: Standalone Mocha funktioniert, aber **OFX-Plugin-Version Mocha aufgerufen via VEGAS stürzt ab**?
@fr Q : Mocha autonome fonctionne, mais la **version plugin OFX Mocha appelée via VEGAS plante** ?
@ru В: Автономная Mocha работает, но **OFX-версия плагина Mocha, вызываемая через VEGAS, аварийно завершает работу**?

@en A: Try **rolling back/updating your graphics driver**.
@zh A：可以尝试**回退/更新显卡驱动版本**。
@zh-hant A：可以嘗試**回退/更新顯示卡驅動版本**。
@ja A: **グラフィックスドライバーをロールバック/更新**してみてください。
@ko A: **그래픽 드라이버를 롤백/업데이트**해 보십시오.
@de A: Versuchen Sie **Ihren Grafiktreiber zurückzusetzen/zu aktualisieren**.
@fr R : Essayez de **revenir/mettre à jour votre pilote graphique**.
@ru О: Попробуйте **откатить/обновить драйвер видеокарты**.

<br>

@en Q: **[VP21]** Adding **`3D LUT Creator` plugin** causes **crash/freeze**?
@zh Q：**vv21** 一添加 **`3D LUT Creator` 插件**就**崩溃/闪退**？
@zh-hant Q：**vv21** 一添加 **`3D LUT Creator` 外掛程式**就**崩潰/閃退**？
@ja Q: **[VP21]** **`3D LUT Creator` プラグイン**を追加すると**クラッシュ/フリーズ**する？
@ko Q: **[VP21]** **`3D LUT Creator` 플러그인** 추가 시 **크래시/정지**?
@de F: **[VP21]** Hinzufügen von **`3D LUT Creator`-Plugin** verursacht **Absturz/Einfrieren**?
@fr Q : **[VP21]** Ajouter le plugin **`Créateur de LUT 3D`** provoque un **plantage/blocage** ?
@ru В: **[VP21]** Добавление плагина **`3D LUT Creator`** вызывает **сбой/зависание**?

@en A: You can save this FX as a plugin chain in an older VEGAS version, then apply the chain in VP21. This bug is fixed in VP22.
@zh A：可在旧版中通过插件链保存这个 FX，然后使用时应用该插件链。此 bug 已在 22 中修复。
@zh-hant A：可在舊版中通過外掛程式鏈儲存這個 FX，然後使用時應用該外掛程式鏈。此 bug 已在 22 中修復。
@ja A: 古い VEGAS バージョンでこの FX をプラグインチェーンとして保存し、VP21 でそのチェーンを適用できます。このバグは VP22 で修正されました。
@ko A: 이전 VEGAS 버전에서 이 FX를 플러그인 체인으로 저장한 후 VP21에서 체인을 적용할 수 있습니다. 이 버그는 VP22에서 수정되었습니다.
@de A: Sie können dieses FX als Plugin-Kette in einer älteren VEGAS-Version speichern, dann die Kette in VP21 anwenden. Dieser Bug wurde in VP22 behoben.
@fr R : Vous pouvez sauvegarder ce FX en tant que chaîne de plugin dans une ancienne version VEGAS, puis appliquer la chaîne dans VP21. Ce bug est corrigé dans VP22.
@ru О: Вы можете сохранить этот FX как цепочку плагинов в старой версии VEGAS, затем применить цепочку в VP21. Эта ошибка исправлена в VP22.

@en <small>Reference: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/crash-when-using-plugins-color-match-ofx-3d-lut-creator-ofx-plugin--144354/</small>
@zh <small>参见：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/crash-when-using-plugins-color-match-ofx-3d-lut-creator-ofx-plugin--144354/</small>
@zh-hant <small>參見：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/crash-when-using-plugins-color-match-ofx-3d-lut-creator-ofx-plugin--144354/</small>
@ja <small>参照： https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/crash-when-using-plugins-color-match-ofx-3d-lut-creator-ofx-plugin--144354/</small>
@ko <small>참조: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/crash-when-using-plugins-color-match-ofx-3d-lut-creator-ofx-plugin--144354/</small>
@de <small>Referenz: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/crash-when-using-plugins-color-match-ofx-3d-lut-creator-ofx-plugin--144354/</small>
@fr <small>Référence : https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/crash-when-using-plugins-color-match-ofx-3d-lut-creator-ofx-plugin--144354/</small>
@ru <small>Ссылка: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/crash-when-using-plugins-color-match-ofx-3d-lut-creator-ofx-plugin--144354/</small>

<br>

@en ## XI. Audio Plugin Related
@zh ## 十一、音频插件相关
@zh-hant ## 十一、音訊外掛程式相關
@ja ## 十一、オーディオプラグイン関連
@ko ## XI. 오디오 플러그인 관련
@de ## XI. Audio-Plugin bezogen
@fr ## XI. FAQ concernant les plugins audio
@ru ## XI. Связанное с аудио-плагинами

@en VEGAS audio plugins fall into two categories: DirectX plugins (older) and VST plugins (current standard). Apart from VEGAS's built-in "no prefix" and `ExpressFX` series audio FX (which are DirectX), all other audio plugins are VST. The `eFX` series built into VP16+ are also VST. Older VEGAS supports VST2; VP20+ also supports VST3. No VEGAS version supports VSTi.
@zh Vegas 的音频插件一共分两类。一类是 DirectX 插件，是比较旧的插件形式。一类是 VST 插件，是现在通用的插件形式。除了 Vegas 自带的“不带任何前缀”和 `ExpressFX` 系列的音频 FX 属于 DirectX 插件以外，其余音频插件为 VST 插件。vv16 及以上自带的 `eFX` 系列，也属于 VST 插件。对于 VST 插件，低版本的 Vegas 只支持 VST2 插件，而 vv20 及以上版本可以支持 VST3。所有 Vegas 版本均不支持 VSTi。
@zh-hant Vegas 的音訊外掛程式一共分兩類。一類是 DirectX 外掛程式，是比較舊的外掛程式形式。一類是 VST 外掛程式，是現在通用的外掛程式形式。除了 Vegas 自帶的“不帶任何首碼”和 `ExpressFX` 系列的音訊 FX 屬於 DirectX 外掛程式以外，其餘音訊外掛程式為 VST 外掛程式。vv16 及以上自帶的 `eFX` 系列，也屬於 VST 外掛程式。對於 VST 外掛程式，低版本的 Vegas 只支援 VST2 外掛程式，而 vv20 及以上版本可以支援 VST3。所有 Vegas 版本均不支援 VSTi。
@ja VEGAS オーディオプラグインは 2 カテゴリ：DirectX プラグイン（古い）と VST プラグイン（現在の標準）。VEGAS 組み込みの「接頭辞なし」および `ExpressFX` シリーズオーディオ FX（これらは DirectX）を除き、他のすべてのオーディオプラグインは VST です。VP16+ に組み込みの `eFX` シリーズも VST です。古い VEGAS は VST2 をサポート。VP20+ は VST3 もサポートします。どの VEGAS バージョンも VSTi をサポートしません。
@ko VEGAS 오디오 플러그인은 두 가지 범주로 나뉩니다: DirectX 플러그인(이전) 및 VST 플러그인(현재 표준). VEGAS 내장 "접두사 없음" 및 `ExpressFX` 시리즈 오디오 FX(DirectX임)를 제외한 모든 다른 오디오 플러그인은 VST입니다. VP16+에 내장된 `eFX` 시리즈도 VST입니다. 이전 VEGAS는 VST2를 지원합니다. VP20+는 VST3도 지원합니다. 어떤 VEGAS 버전도 VSTi를 지원하지 않습니다.
@de VEGAS-Audio-Plugins fallen in zwei Kategorien: DirectX-Plugins (älter) und VST-Plugins (aktueller Standard). Abgesehen von VEGAS' eingebauten "ohne Präfix" und `ExpressFX`-Serie Audio-FX (die DirectX sind), sind alle anderen Audio-Plugins VST. Die `eFX`-Serie eingebaut in VP16+ sind auch VST. Ältere VEGAS unterstützt VST2; VP20+ unterstützt auch VST3. Keine VEGAS-Version unterstützt VSTi.
@fr Les plugins audio VEGAS se divisent en deux catégories : les plugins DirectX (anciens) et les plugins VST (norme actuelle). À part les FX audio "sans préfixe" et la série `ExpressFX` intégrés à VEGAS (qui sont DirectX), tous les autres plugins audio sont VST. La série `eFX` intégrée à VP16+ est aussi VST. Les anciennes VEGAS supportent VST2 ; VP20+ supporte aussi VST3. Aucune version VEGAS ne supporte VSTi.
@ru Аудио-плагины VEGAS делятся на две категории: плагины DirectX (старые) и плагины VST (текущий стандарт). Помимо встроенных в VEGAS аудио FX «без префикса» и серии `ExpressFX` (которые являются DirectX), все другие аудио-плагины — VST. Серия `eFX`, встроенная в VP16+, также является VST. Старые VEGAS поддерживают VST2; VP20+ также поддерживает VST3. Ни одна версия VEGAS не поддерживает VSTi.

<br>

@en ### VST Related Paths
@zh ### VST 相关路径
@zh-hant ### VST 相關路徑
@ja ### VST 関連パス
@ko ### VST 관련 경로
@de ### VST bezogene Pfade
@fr ### Chemins VST liés
@ru ### Пути, связанные с VST

@en - **Common VST Path**: `C:\Program Files\VSTPlugins\`
@zh - **公共 VST 路径**：`C:\Program Files\VSTPlugins\`
@zh-hant - **公共 VST 路徑**：`C:\Program Files\VSTPlugins\`
@ja - **共通 VST パス**： `C:\Program Files\VSTPlugins\`
@ko - **공통 VST 경로**: `C:\Program Files\VSTPlugins\`
@de - **Allgemeiner VST-Pfad**: `C:\Programme\VSTPlugins\`
@fr - **Chemin VST commun** : `C:\Program Files\VSTPlugins\`
@ru - **Общий путь VST**: `C:\Program Files\VSTPlugins\`

@en <small>If other software changed the common VST path, VEGAS follows that. You can check the registry key <code>HKEY_LOCAL_MACHINE\SOFTWARE\VST</code>, value <code>VSTPluginsPath</code>.</small>
@zh <small>如果其他软件改了公共 VST 路径，则会按照改过的来。可自行查询注册表项 <code>HKEY_LOCAL_MACHINE\SOFTWARE\VST</code> 的 <code>VSTPluginsPath</code> 值所对应的路径字符串数据。</small>
@zh-hant <small>如果其他軟體改了公共 VST 路徑，則會按照改過的來。可自行查詢登錄檔項 <code>HKEY_LOCAL_MACHINE\SOFTWARE\VST</code> 的 <code>VSTPluginsPath</code> 值所對應的路徑字串資料。</small>
@ja <small>他のソフトウェアが共通 VST パスを変更した場合、VEGAS はそれに従います。レジストリキー <code>HKEY_LOCAL_MACHINE\SOFTWARE\VST</code>、値 <code>VSTPluginsPath</code> を確認できます。</small>
@ko <small>다른 소프트웨어가 공통 VST 경로를 변경한 경우 VEGAS는 이를 따릅니다. 레지스트리 키 <code>HKEY_LOCAL_MACHINE\SOFTWARE\VST</code>, 값 <code>VSTPluginsPath</code>를 확인할 수 있습니다.</small>
@de <small>Wenn andere Software den allgemeinen VST-Pfad geändert hat, folgt VEGAS dem. Sie können den Registrierungsschlüssel <code>HKEY_LOCAL_MACHINE\SOFTWARE\VST</code>, Wert <code>VSTPluginsPath</code> überprüfen.</small>
@fr <small>Si d'autres logiciels ont changé le chemin VST commun, VEGAS le suit. Vous pouvez vérifier la clé de registre <code>HKEY_LOCAL_MACHINE\SOFTWARE\VST</code>, valeur <code>VSTPluginsPath</code>.</small>
@ru <small>Если другое ПО изменило общий путь VST, VEGAS следует этому. Вы можете проверить ключ реестра <code>HKEY_LOCAL_MACHINE\SOFTWARE\VST</code>, значение <code>VSTPluginsPath</code>.</small>

@en - **VEGAS-specific VST Path (VP16+)**: `...<VEGAS install path>\MAGIX Plugins\` <sup>**MAGIX 16 and above**</sup> or `...<VEGAS install path>\Vegas Plugins\` <sup>**Boris FX 2026 and above**</sup>
@zh - **独立 VST 路径**：`...<Vegas 安装路径>\MAGIX Plugins\` <sup>**MAGIX 16 及以上**</sup> 或 `...<Vegas 安装路径>\Vegas Plugins\` <sup>**Boris FX 2026 及以上**</sup>
@zh-hant - **獨立 VST 路徑**：`...<Vegas 安裝路徑>\MAGIX Plugins\` <sup>**MAGIX 16 及以上**</sup> 或 `...<Vegas 安裝路徑>\Vegas Plugins\` <sup>**Boris FX 2026 及以上**</sup>
@ja - **VEGAS 固有 VST パス**： `...<VEGAS インストールパス>\MAGIX Plugins\` <sup>**MAGIX 16 以上**</sup> または `...<VEGAS インストールパス>\Vegas Plugins\` <sup>**Boris FX 2026 以上**</sup>
@ko - **VEGAS 전용 VST 경로**: `...<VEGAS 설치 경로>\MAGIX Plugins\` <sup>**MAGIX 16 이상**</sup> 또는 `...<Vegas 설치 경로>\Vegas Plugins\` <sup>**Boris FX 2026 이상**</sup>
@de - **VEGAS-spezifischer VST-Pfad**: `...<VEGAS Installationspfad>\MAGIX Plugins\` <sup>**MAGIX 16 und höher**</sup> oder `...<Vegas-Installationspfad>\Vegas Plugins\` <sup>**Boris FX 2026 und höher**</sup>
@fr - **Chemin VST spécifique à VEGAS** : `...<Chemin d'installation VEGAS>\MAGIX Plugins\` <sup>**MAGIX 16 et supérieur**</sup> ou `...<Chemin d'installation VEGAS>\Vegas Plugins\` <sup>**Boris FX 2026 et supérieur**</sup>
@ru - **Специфичный для VEGAS путь VST**: `...<путь установки VEGAS>\MAGIX Plugins\` <sup>**MAGIX 16 и выше**</sup> или `...<путь установки VEGAS>\Vegas Plugins\` <sup>**Boris FX 2026 и выше**</sup>

<br>

@en You can also manually set VST paths in `Preferences -> VST Effects`. Older VEGAS limits to 3 paths; VP20+ has no limit.
@zh 也可以在 `首选项 -> VST 效果` 中手动设置 VST 路径。在低版本 Vegas 中，VST 路径最多只能设置 3 个；vv20 及以上的新版则无该限制。
@zh-hant 也可以在 `首選項 -> VST 效果` 中手動設定 VST 路徑。在低版本 Vegas 中，VST 路徑最多只能設定 3 個；vv20 及以上的新版則無該限制。
@ja `プリファレンス -> VST エフェクト` で VST パスを手動設定することもできます。古い VEGAS は 3 パスに制限。VP20+ は制限なし。
@ko `환경설정 -> VST 효과`에서 VST 경로를 수동으로 설정할 수도 있습니다. 이전 VEGAS는 3개 경로로 제한됩니다. VP20+에는 제한이 없습니다.
@de Sie können auch manuell VST-Pfade in `Einstellungen -> VST-Effekte` setzen. Ältere VEGAS limitiert auf 3 Pfade; VP20+ hat keine Grenze.
@fr Vous pouvez aussi définir manuellement les chemins VST dans `Préférences -> Effets VST`. Les anciennes VEGAS limitent à 3 chemins ; VP20+ n'a pas de limite.
@ru Вы также можете вручную установить пути VST в `Настройки -> VST эффекты (Preferences -> VST Effects)`. Старые VEGAS ограничены 3 путями; VP20+ не имеет ограничений.

<br>

@en User-saved VST plugin FX presets:
@zh 自己保存的 VST 插件的 FX 预设：
@zh-hant 自己儲存的 VST 外掛程式的 FX 預設：
@ja ユーザー保存の VST プラグイン FX プリセット：
@ko 사용자가 저장한 VST 플러그인 FX 프리셋:
@de Benutzer-gespeicherte VST-Plugin-FX-Voreinstellungen:
@fr Préréglages FX de plugins VST enregistrés par l'utilisateur :
@ru Пользовательские сохраненные пресеты FX для плагинов VST:

- `%userprofile%\Documents\VST2 Presets\`
- `%userprofile%\Documents\VST3 Presets\`

<br>

@en Q: How to edit VST paths externally, not through VEGAS preferences?
@zh Q：如何不通过 Vegas 首选项，在外部手动编辑 VST 路径？
@zh-hant Q：如何不通過 Vegas 首選項，在外部手動編輯 VST 路徑？
@ja Q: VEGAS プリファレンスを介さず、外部で VST パスを編集する方法は？
@ko Q: VEGAS 환경설정을 통하지 않고 외부에서 VST 경로를 편집하는 방법은 무엇입니까?
@de F: Wie bearbeite ich VST-Pfade extern, nicht durch VEGAS-Einstellungen?
@fr Q : Comment éditer les chemins VST en externe, pas via les préférences VEGAS ?
@ru В: Как редактировать пути VST извне, а не через настройки VEGAS?

@en A: Go to registry key:
@zh A：转到注册表项：
@zh-hant A：轉到登錄檔項：
@ja A: レジストリキーに移動：
@ko A: 레지스트리 키로 이동:
@de A: Gehen Sie zum Registrierungsschlüssel:
@fr R : Allez à la clé de registre :
@ru О: Перейдите к ключу реестра:

- `HKEY_CURRENT_USER\Software\VEGAS Creative Software\VEGAS Pro\23\Metrics\x64\VstCache\SearchPaths` <sup>VP20+</sup>
- `HKEY_CURRENT_USER\Software\Sony Creative Software\VEGAS Pro\19.0\Metrics\VstCache\SearchPaths` <sup>VP19-</sup>

@en - Where `23`/`19.0` is your VEGAS version.
@zh - 其中 `23` 和 `19.0` 均代表当前的 Vegas 版本号。
@zh-hant - 其中 `23` 和 `19.0` 均代表當前的 Vegas 版本號。
@ja - `23`/`19.0` は VEGAS バージョン。
@ko - 여기서 `23`/`19.0`은 VEGAS 버전입니다.
@de - Wobei `23`/`19.0` Ihre VEGAS-Version ist.
@fr - Où `23`/`19.0` est votre version VEGAS.
@ru - Где `23`/`19.0` — ваша версия VEGAS.

@en There are `Path 1`, `Path 2`, etc., corresponding to VST paths in preferences.
@zh 有 `Path 1`、`Path 2`、`Path 3`等项，分别对应 Vegas 首选项中的 VST 路径。
@zh-hant 有 `Path 1`、`Path 2`、`Path 3`等項，分別對應 Vegas 首選項中的 VST 路徑。
@ja `Path 1`、 `Path 2` などがあり、プリファレンス内の VST パスに対応。
@ko `Path 1`, `Path 2` 등이 있으며 환경설정의 VST 경로에 해당합니다.
@de Es gibt `Path 1`, `Path 2`, usw., entsprechend VST-Pfaden in Einstellungen.
@fr Il y a `Path 1`, `Path 2`, etc., correspondant aux chemins VST dans les préférences.
@ru Есть `Path 1`, `Path 2` и т.д., соответствующие путям VST в настройках.

<ImageOnDemand src="vegtips/image037_vst_reg.png" />

@en `CheckSum` is for VEGAS to check if rescan is needed; you can ignore it. Focus on `Path` (absolute path string) and `Flags` (`3` = scan, `0` = don't scan). Modify as needed.
@zh `CheckSum` 这个值是 Vegas 用来检查是否需要重新扫描该路径的校验和值，可以忽略掉。重点关注的是 `Path` 值和 `Flags` 值。`Path` 值是该 VST 路径设置所指向的绝对路径字符串，`Flags` 值则决定了是否扫描该路径，值为 `3` 是扫描，值为 `0` 是不扫描。可自行修改这些值。
@zh-hant `CheckSum` 這個值是 Vegas 用來檢查是否需要重新掃描該路徑的校驗和值，可以忽略掉。重點關注的是 `Path` 值和 `Flags` 值。`Path` 值是該 VST 路徑設定所指向的絕對路徑字串，`Flags` 值則決定了是否掃描該路徑，值為 `3` 是掃描，值為 `0` 是不掃描。可自行修改這些值。
@ja `CheckSum` は VEGAS が再スキャンが必要かチェックするためのものです。無視できます。 `Path`（絶対パス文字列）と `Flags`（`3` = スキャン、`0` = スキャンしない）に注目。必要に応じて変更。
@ko `CheckSum`은 VEGAS가 재스캔이 필요한지 확인하는 용도입니다. 무시해도 됩니다. `Path`(절대 경로 문자열) 및 `Flags`(`3` = 스캔, `0` = 스캔 안 함)에 집중하십시오. 필요에 따라 수정하십시오.
@de `CheckSum` ist für VEGAS zu überprüfen, ob Rescan benötigt wird; Sie können es ignorieren. Konzentrieren Sie sich auf `Path` (absoluter Pfadstring) und `Flags` (`3` = scan, `0` = nicht scan). Ändern Sie nach Bedarf.
@fr `CheckSum` est pour que VEGAS vérifie si un rescan est nécessaire ; vous pouvez l'ignorer. Concentrez-vous sur `Path` (chaîne de chemin absolu) et `Flags` (`3` = scanner, `0` = ne pas scanner). Modifiez selon les besoins.
@ru `CheckSum` — для VEGAS, чтобы проверить, нужно ли повторное сканирование; можно игнорировать. Сосредоточьтесь на `Path` (строка абсолютного пути) и `Flags` (`3` = сканировать, `0` = не сканировать). Измените по мере необходимости.

@en If VST scanning has issues and rescanning via preferences doesn't help, you can delete the `Mappings` subkey under `VstCache`, then restart VEGAS to rescan.
@zh 如果发现你的 VST 扫描出现了潜在的问题，通过 Vegas 首选项内的重新扫描按钮没法解决，你可以删除注册表项 `VstCache` 中的 `Mappings` 项，之后重启 Vegas 重新扫描，看能否解决。
@zh-hant 如果發現你的 VST 掃描出現了潛在的問題，通過 Vegas 首選項內的重新掃描按鈕沒法解決，你可以刪除登錄檔項 `VstCache` 中的 `Mappings` 項，之後重啟 Vegas 重新掃描，看能否解決。
@ja VST スキャンに問題があり、プリファレンス経由の再スキャンが役立たない場合、 `VstCache` 下の `Mappings` サブキーを削除し、VEGAS を再起動して再スキャンできます。
@ko VST 스캔에 문제가 있고 환경설정을 통한 재스캔이 도움이 되지 않으면 `VstCache` 아래의 `Mappings` 하위 키를 삭제한 후 VEGAS를 다시 시작하여 재스캔할 수 있습니다.
@de Wenn VST-Scanning Probleme hat und Rescan über Einstellungen nicht hilft, können Sie den `Mappings`-Unterschlüssel unter `VstCache` löschen, dann VEGAS neu starten, um erneut zu scannen.
@fr Si le scan VST a des problèmes et que le rescan via les préférences n'aide pas, vous pouvez supprimer la sous-clé `Mappings` sous `VstCache`, puis redémarrer VEGAS pour rescanner.
@ru Если сканирование VST имеет проблемы, и повторное сканирование через настройки не помогает, вы можете удалить подраздел `Mappings` под `VstCache`, затем перезапустить VEGAS для повторного сканирования.

<br>

@en ### Audio Plugin Q&A
@zh ### 音频插件相关的 Q&A
@zh-hant ### 音訊外掛程式相關的 Q&A
@ja ### オーディオプラグイン Q&A
@ko ### 오디오 플러그인 Q&A
@de ### Audio-Plugin Q&A
@fr ### FAQ sur les plugins audio
@ru ### Вопросы и ответы по аудио-плагинам

@en Q: Newer versions can't scan **32-bit VST plugins**?
@zh Q：高版本无法扫描 **32 位的 VST 插件**？
@zh-hant Q：高版本無法掃描 **32 位的 VST 外掛程式**？
@ja Q: 新しいバージョンが **32 ビット VST プラグイン**をスキャンできない？
@ko Q: 새 버전에서 **32비트 VST 플러그인**을 스캔할 수 없습니까?
@de F: Neuere Versionen können **32-Bit VST-Plugins** nicht scannen?
@fr Q : Les versions plus récentes ne peuvent pas scanner **les plugins VST 32 bits** ?
@ru В: Новые версии не могут сканировать **32-битные плагины VST**?

@en A: **`Preferences -> Audio -> Enable support for 32-bit VST plug-ins (experimental)`**.
@zh A：**`首选项 -> 音频 -> 启用对 32 位 VST 插件的支持（实验）`**。
@zh-hant A：**`首選項 -> 音訊 -> 啟用對 32 位 VST 外掛程式的支援（實驗）`**。
@ja A: **`プリファレンス -> オーディオ -> 32 ビット VST プラグインのサポートを有効にする（実験的）`**。
@ko A: **`환경설정 -> 오디오 -> 32비트 VST 플러그인 지원 활성화(실험)`**.
@de A: **`Einstellungen -> Audio -> Unterstützung für 32-Bit VST-Plugins aktivieren (experimentell)`**.
@fr R : **`Préférences -> Audio -> Activer la prise en charge des plug-ins VST 32 bits (expérimental)`**.
@ru О: **`Настройки -> Аудио -> Включить поддержку 32-битных плагинов VST (экспериментально) (Preferences -> Audio -> Enable support for 32-bit VST plug-ins (experimental))`**.

<br>

@en Q: In newer versions, some **VST plugin GUIs display incompletely**?
@zh Q：高版本中某些 **VST 插件界面显示不全**？
@zh-hant Q：高版本中某些 **VST 外掛程式介面顯示不全**？
@ja Q: 新しいバージョンで、一部の **VST プラグイン GUI が不完全に表示される**？
@ko Q: 새 버전에서 일부 **VST 플러그인 GUI가 불완전하게 표시됨**?
@de F: In neueren Versionen zeigen einige **VST-Plugin-GUIs unvollständig**?
@fr Q : Dans les versions plus récentes, certaines **interfaces de plugins VST s'affichent incomplètement** ?
@ru В: В новых версиях некоторые **интерфейсы плагинов VST отображаются не полностью**?

@en A: Seems VST2-specific. If the plugin has a VST3 version, **use the VST3 version**.
@zh A：似乎是 VST2 特有的问题，如果该插件有 VST3 版的话，**建议使用 VST3 版**。
@zh-hant A：似乎是 VST2 特有的問題，如果該外掛程式有 VST3 版的話，**建議使用 VST3 版**。
@ja A: VST2 特有のようです。プラグインに VST3 バージョンがある場合、 **VST3 バージョンを使用**。
@ko A: VST2 특정으로 보입니다. 플러그인에 VST3 버전이 있으면 **VST3 버전을 사용**하십시오.
@de A: Scheint VST2-spezifisch. Wenn das Plugin eine VST3-Version hat, **verwenden Sie die VST3-Version**.
@fr R : Semblerait spécifique à VST2. Si le plugin a une version VST3, **utilisez la version VST3**.
@ru О: Кажется, специфично для VST2. Если у плагина есть версия VST3, **используйте версию VST3**.

<br>

@en Q: **DirectX plugins not showing in Audio FX list**/**showing but invalid when added**/**plugin becomes Demo version, adding causes beeping**?
@zh Q：**DirectX 插件没有在音频 FX 列表中显示**/**有但是添加时显示无效**/**插件变成 Demo 版了，添加后有滴滴声**？
@zh-hant Q：**DirectX 外掛程式沒有在音訊 FX 列表中顯示**/**有但是添加時顯示無效**/**外掛程式變成 Demo 版了，添加後有滴滴聲**？
@ja Q: **DirectX プラグインがオーディオ FX リストに表示されない**/**表示されるが追加時に無効**/**プラグインがデモ版になり、追加するとビープ音がする**？
@ko Q: **DirectX 플러그인이 오디오 FX 목록에 표시되지 않음**/**표시되지만 추가 시 무효**/**플러그인이 데모 버전이 되어 추가 시 경고음 발생**?
@de F: **DirectX-Plugins werden in Audio-FX-Liste nicht angezeigt**/**angezeigt aber beim Hinzufügen ungültig**/**Plugin wird Demo-Version, Hinzufügen verursacht Piepton**?
@fr Q : **Les plugins DirectX n'apparaissent pas dans la liste FX Audio**/**apparaissent mais invalides lorsqu'ajoutés**/**le plugin devient version Démo, l'ajout provoque des bips** ?
@ru В: **Плагины DirectX не отображаются в списке Аудио FX**/**отображаются, но недействительны при добавлении**/**плагин становится демо-версией, добавление вызывает звуковой сигнал**?

@en A: First uninstall Vegas. If you have multiple versions of Vegas, you only need to uninstall one; uninstalling in advance is just so that you can install later.
@zh A：先卸载 Vegas。如果有多个版本的 Vegas，只需卸载一个，提前卸载只是为了之后能够安装上。
@zh-hant A：先解除安裝 Vegas。如果有多個版本的 Vegas，只需解除安裝一個，提前解除安裝只是為了之後能夠安裝上。
@ja A：まず Vegas をアンインストールします。複数のバージョンがある場合でも、アンインストールするのは1つだけで構いません。事前にアンインストールするのは、後でインストールできるようにするためです。
@ko A: 먼저 Vegas를 제거합니다. 여러 버전의 Vegas가 있더라도 하나만 제거하면 됩니다. 미리 제거하는 것은 나중에 설치할 수 있도록 하기 위함입니다.
@de A: Deinstallieren Sie zunächst Vegas. Wenn Sie mehrere Vegas-Versionen haben, müssen Sie nur eine deinstallieren. Die vorherige Deinstallation dient nur dazu, später installieren zu können.
@fr R : Désinstallez d'abord Vegas. Si vous avez plusieurs versions de Vegas, il suffit d'en désinstaller une seule ; la désinstallation préalable sert uniquement à pouvoir installer par la suite.
@ru O: Сначала удалите Vegas. Если у вас несколько версий Vegas, достаточно удалить одну; предварительное удаление нужно только для того, чтобы потом можно было установить.

@en Then, depending on the version you intend to use, delete the corresponding folder:
@zh 然后，根据你打算使用的版本，删除对应文件夹：
@zh-hant 然後，根據你打算使用的版本，刪除對應資料夾：
@ja 次に、使用予定のバージョンに応じて、対応するフォルダを削除します。
@ko 그런 다음 사용하려는 버전에 따라 해당 폴더를 삭제합니다.
@de Löschen Sie dann, je nach der von Ihnen beabsichtigten Version, den entsprechenden Ordner:
@fr Ensuite, selon la version que vous comptez utiliser, supprimez le dossier correspondant :
@ru Затем, в зависимости от версии, которую вы собираетесь использовать, удалите соответствующую папку:

- `C:\ProgramData\BorisFX\Vegas\Shared Plug-Ins\Audio_x64\` <sup>**Boris FX 2026+**</sup>
- `C:\Program Files (x86)\VEGAS\Shared Plug-Ins\Audio_x64\` <sup>**MAGIX 14 ~ 23**</sup>
- `C:\Program Files (x86)\Sony\Shared Plug-Ins\Audio_x64\` <sup>**Sony 13-**</sup>

@en Finally, reinstall Vegas.
@zh 最后重装 Vegas。
@zh-hant 最後重裝 Vegas。
@ja 最後に Vegas を再インストールします。
@ko 마지막으로 Vegas를 다시 설치합니다.
@de Installieren Sie Vegas abschließend neu.
@fr Enfin, réinstallez Vegas.
@ru В конце переустановите Vegas.

@en <small>Reference: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/less-audiofx--143986/</small>
@zh <small>参见：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/less-audiofx--143986/</small>
@zh-hant <small>參見：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/less-audiofx--143986/</small>
@ja <small>参照： https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/less-audiofx--143986/</small>
@ko <small>참조: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/less-audiofx--143986/</small>
@de <small>Referenz: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/less-audiofx--143986/</small>
@fr <small>Référence : https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/less-audiofx--143986/</small>
@ru <small>Ссылка: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/less-audiofx--143986/</small>

<br>

@en Q: After adding a **Limiter FX (built-in `eFX_Limiter` or other VST limiter)** to the Master bus, **adding pan envelopes and envelope points** to any audio track causes **crackling/zipper noise**?
@zh Q：在主控添加**限制器 FX（自带的 `eFX_Limiter` 或其他限制器 VST）**后，给任意一个音频轨道**添加声像包络和包络点**，会导致**滋滋声**？
@zh-hant Q：在主控添加**限制器 FX（自帶的 `eFX_Limiter` 或其他限制器 VST）**後，給任意一個音訊軌道**添加聲像包絡和包絡點**，會導致**滋滋聲**？
@ja Q: **リミッター FX（組み込み `eFX_Limiter` または他の VST リミッター）** をマスターバスに追加した後、任意のオーディオトラックに**パンニングエンベロープとエンベロープポイントを追加**すると、**破裂音/ジッパーノイズ**が発生する？
@ko Q: 마스터 버스에 **리미터 FX(내장 `eFX_Limiter` 또는 기타 VST 리미터)** 추가 후 모든 오디오 트랙에 **팬 엔벨로프 및 엔벨로프 포인트** 추가 시 **찰칵거림/지퍼 노이즈** 발생?
@de F: Nach Hinzufügen eines **Limiter-FX (eingebauter `eFX_Limiter` oder anderer VST-Limiter)** zum Master-Bus verursacht **Hinzufügen von Pan-Hüllkurven und Hüllkurvenpunkten** zu einer beliebigen Audiospur **Knacken/Knistern**?
@fr Q : Après avoir ajouté un **FX Limiteur (intégré `eFX_Limiter` ou autre limiteur VST)** au bus Master, **ajouter des enveloppes panoramiques et des points d'enveloppe** à n'importe quelle piste audio provoque des **craquements/bruits de fermeture éclair** ?
@ru В: После добавления **FX ограничителя (встроенного `eFX_Limiter` или другого VST-ограничителя)** на мастер-шину **добавление огибающих панорамирования и точек огибающей** на любой аудиодорожке вызывает **треск/шум**?

@en A: A weird bug occurring when **pan envelope point type is `Smooth` or `Sharp`**. Fix: **Change the envelope point type to another**.
@zh A：这是一个很离谱的 bug，当**声像包络点类型为 `平滑淡化` 或 `急剧` 时就会出现问题**。解决办法是**将包络点类型修改为其他的**。
@zh-hant A：這是一個很離譜的 bug，當**聲像包絡點類型為 `平滑淡化` 或 `急劇` 時就會出現問題**。解決辦法是**將包絡點類型修改為其他的**。
@ja A: **パンニングエンベロープポイントタイプが `スムーズ` または `シャープ`** の場合に発生する奇妙なバグです。修正：**エンベロープポイントタイプを他のものに変更**。
@ko A: **팬 엔벨로프 포인트 유형이 `부드러운` 또는 `날카로운`일 때 발생하는 이상한 버그**입니다. 수정: **엔벨로프 포인트 유형을 다른 것으로 변경**하십시오.
@de A: Ein seltsamer Bug, der auftritt, wenn **Pan-Hüllkurvenpunkttyp `Sanft` oder `Scharf` ist**. Behebung: **Ändern Sie den Hüllkurvenpunkttyp auf einen anderen**.
@fr R : Un bug bizarre se produisant lorsque **le type de point d'enveloppe panoramique est `Lisse` ou `Brut`**. Correction : **Changez le type de point d'enveloppe en un autre**.
@ru О: Странная ошибка, возникающая, когда **тип точки огибающей панорамирования — `Плавный (Smooth)` или `Резкий (Sharp)`**. Исправление: **Измените тип точки огибающей на другой**.

<br>

## 十二、脚本/扩展相关
@en ## XII. Scripts/Extensions Related
@zh ## 十二、脚本/扩展相关
@zh-hant ## 十二、腳本/擴充相關
@ja ## 十二、スクリプト/拡張機能関連
@ko ## XII. 스크립트/확장 관련
@de ## XII. Skripte/Erweiterungen
@fr ## XII. FAQ concernant les scripts/extensions
@ru ## XII. Скрипты/расширения

@en Vegas supports users to write custom scripts in `C#` (or `JScript`, `Visual Basic`) to optimize workflows. `Visual Basic` scripts (`*.vb`) are no longer supported in recent versions.
@zh Vegas 支持用户以 `C#`（或 `JScript`、`Visual Basic`）语言编写自定义脚本，以优化工作流程。`Visual Basic` 脚本（`*.vb`）在最近的版本中已不受支持。
@zh-hant Vegas 支援使用者以 `C#`（或 `JScript`、`Visual Basic`）語言編寫自定義腳本，以優化工作流程。`Visual Basic` 腳本（`*.vb`）在最近的版本中已不受支援。
@ja Vegas は `C#`（または `JScript`、`Visual Basic`）でユーザーがカスタムスクリプトを作成することをサポートし、ワークフローを最適化します。`Visual Basic` スクリプト（`*.vb`）は最近のバージョンではサポートされていません。
@ko Vegas는 `C#`(또는 `JScript`, `Visual Basic`) 언어로 사용자 정의 스크립트를 작성할 수 있도록 지원하여 워크플로를 최적화합니다. `Visual Basic` 스크립트(`*.vb`)는 최근 버전에서 지원되지 않습니다.
@de Vegas unterstützt das Erstellen benutzerdefinierter Skripte in `C#` (oder `JScript`, `Visual Basic`), um Arbeitsabläufe zu optimieren. `Visual Basic`-Skripte (`*.vb`) werden in neueren Versionen nicht mehr unterstützt.
@fr Vegas permet aux utilisateurs d'écrire des scripts personnalisés en `C#` (ou `JScript`, `Visual Basic`) pour optimiser les flux de travail. Les scripts `Visual Basic` (`*.vb`) ne sont plus pris en charge dans les versions récentes.
@ru Vegas поддерживает написание пользовательских скриптов на `C#` (или `JScript`, `Visual Basic`) для оптимизации рабочих процессов. Скрипты `Visual Basic` (`*.vb`) в последних версиях не поддерживаются.

@en - **Script**: Must be run manually by the user; relatively simple functionality.
@zh - **脚本（`Script`）**：只能由用户主动运行，功能较为简单。
@zh-hant - **腳本（`Script`）**：只能由使用者主動執行，功能較為簡單。
@ja - **スクリプト (`Script`)**：ユーザーが手動で実行する必要があります。機能は比較的単純です。
@ko - **스크립트(`Script`)**: 사용자가 수동으로 실행해야 합니다. 기능이 비교적 단순합니다.
@de - **Skript (`Script`)**: Muss manuell vom Benutzer ausgeführt werden; relativ einfache Funktionalität.
@fr - **Script (`Script`)** : Doit être exécuté manuellement par l'utilisateur ; fonctionnalité relativement simple.
@ru - **Скрипт (`Script`)**: Должен запускаться пользователем вручную; относительно простая функциональность.

@en - **Extension**: Can run automatically when Vegas starts. Enables more complex features, such as creating dockable windows within Vegas.
@zh - **扩展（`Extension`）**：可以在 Vegas 程序启动时就一同运行。能实现更复杂的功能，比如在 Vegas 内创建可停靠窗口等。
@zh-hant - **擴充（`Extension`）**：可以在 Vegas 程式啟動時就一同執行。能實現更複雜的功能，比如在 Vegas 內建立可停靠視窗等。
@ja - **拡張機能 (`Extension`)**：Vegas 起動時に自動的に実行できます。より複雑な機能を可能にし、Vegas 内にドッキング可能なウィンドウの作成などが含まれます。
@ko - **확장(`Extension`)**: Vegas 시작 시 자동으로 실행될 수 있습니다. 더 복잡한 기능을 가능하게 하며, Vegas 내에 도킹 가능한 창 생성과 같은 기능을 포함합니다.
@de - **Erweiterung (`Extension`)**: Kann automatisch laufen, wenn Vegas startet. Ermöglicht komplexere Funktionen, wie das Erstellen von andockbaren Fenstern innerhalb von Vegas.
@fr - **Extension (`Extension`)** : Peut s'exécuter automatiquement au démarrage de Vegas. Permet des fonctionnalités plus complexes, comme créer des fenêtres accrochables dans Vegas.
@ru - **Расширение (`Extension`)**: Может запускаться автоматически при старте Vegas. Позволяет реализовать более сложные функции, например, создавать закрепляемые окна внутри Vegas.

@en <small>This article only covers certain issues encountered during script/extension installation. For basic tutorials, see: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/vegas-pro-scripting-faqs-resources--104563/</small>
@zh <small>本文只介绍脚本/扩展安装时遇到的某些问题。如需基础教程，可见：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/vegas-pro-scripting-faqs-resources--104563/</small>
@zh-hant <small>本文只介紹腳本/擴充安裝時遇到的某些問題。如需基礎教學，可見：https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/vegas-pro-scripting-faqs-resources--104563/</small>
@ja <small>この記事はスクリプト/拡張機能のインストール時に発生する特定の問題のみを紹介します。基本的なチュートリアルについては、以下を参照してください： https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/vegas-pro-scripting-faqs-resources--104563/</small>
@ko <small>이 문서는 스크립트/확장 설치 시 발생하는 특정 문제만 다룹니다. 기본 튜토리얼은 다음을 참조하십시오: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/vegas-pro-scripting-faqs-resources--104563/</small>
@de <small>Dieser Artikel behandelt nur bestimmte Probleme bei der Skript-/Erweiterungsinstallation. Für grundlegende Tutorials siehe: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/vegas-pro-scripting-faqs-resources--104563/</small>
@fr <small>Cet article ne couvre que certains problèmes rencontrés lors de l'installation de scripts/extensions. Pour des tutoriels de base, voir : https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/vegas-pro-scripting-faqs-resources--104563/</small>
@ru <small>В этой статье рассматриваются только определенные проблемы, возникающие при установке скриптов/расширений. Для базовых руководств см.: https://web.archive.org/web/https://www.vegascreativesoftware.info/us/forum/vegas-pro-scripting-faqs-resources--104563/</small>

<br>

@en **List of Valid Script Installation Paths:**
@zh **脚本可用安装路径列表：**
@zh-hant **腳本可用安裝路徑列表：**
@ja **有効なスクリプトインストールパスのリスト：**
@ko **유효한 스크립트 설치 경로 목록:**
@de **Liste gültiger Skript-Installationspfade:**
@fr **Liste des chemins d'installation de script valides :**
@ru **Список допустимых путей установки скриптов:**

```text{1}
C:\ProgramData\VEGAS Pro\Script Menu\
C:\ProgramData\VEGAS Pro\23.0\Script Menu\
%userprofile%\Documents\Vegas Script Menu\
%appdata%\VEGAS Pro\Script Menu\
%appdata%\VEGAS Pro\23.0\Script Menu\
%localappdata%\VEGAS Pro\Script Menu\
%localappdata%\VEGAS Pro\23.0\Script Menu\
@en ...<VEGAS install path>\Script Menu\
@zh ...<Vegas 安装路径>\Script Menu\
@zh-hant ...<Vegas 安裝路徑>\Script Menu\
@ja ...<Vegas インストールパス>\Script Menu\
@ko ...<Vegas 설치 경로>\Script Menu\
@de ...<Vegas Installationspfad>\Script Menu\
@fr ...<Chemin d'installation Vegas>\Script Menu\
@ru ...<путь установки Vegas>\Script Menu\
```

<br>

@en **List of Valid Extension Installation Paths:**
@zh **扩展可用安装路径列表：**
@zh-hant **擴充可用安裝路徑列表：**
@ja **有効な拡張機能インストールパスのリスト：**
@ko **유효한 확장 설치 경로 목록:**
@de **Liste gültiger Erweiterungs-Installationspfade:**
@fr **Liste des chemins d'installation d'extension valides :**
@ru **Список допустимых путей установки расширений:**

```text{1}
C:\ProgramData\VEGAS Pro\Application Extensions\
C:\ProgramData\VEGAS Pro\23.0\Application Extensions\
%userprofile%\Documents\Vegas Application Extensions\
%appdata%\VEGAS Pro\Application Extensions\
%appdata%\VEGAS Pro\23.0\Application Extensions\
%localappdata%\VEGAS Pro\Application Extensions\
%localappdata%\VEGAS Pro\23.0\Application Extensions\
@en ...<VEGAS install path>\Application Extensions\
@zh ...<Vegas 安装路径>\Application Extensions\
@zh-hant ...<Vegas 安裝路徑>\Application Extensions\
@ja ...<Vegas インストールパス>\Application Extensions\
@ko ...<Vegas 설치 경로>\Application Extensions\
@de ...<Vegas Installationspfad>\Application Extensions\
@fr ...<Chemin d'installation Vegas>\Application Extensions\
@ru ...<путь установки Vegas>\Application Extensions\
```

<br>

@en Where `23.0` is your Vegas version. The first path (`C:\ProgramData\...`) is my top recommendation. Note: `ProgramData` is a hidden folder by default. For Sony-era (VP13-) paths, add a **`Sony`** folder above `VEGAS Pro`, e.g., `C:\ProgramData\Sony\VEGAS Pro\Script Menu\`.
@zh 其中 `23.0` 指对应 Vegas 版本号。第一个路径是我最推荐的路径，不过 `ProgramData` 文件夹默认是隐藏文件夹，这个注意。Sony 版（13 及以下）的路径需要在 `VEGAS Pro` 文件夹的上一层添加 **`Sony`** 文件夹，比如 `C:\ProgramData\Sony\VEGAS Pro\Script Menu\` 等。
@zh-hant 其中 `23.0` 指對應 Vegas 版本號。第一個路徑是我最推薦的路徑，不過 `ProgramData` 資料夾預設是隱藏資料夾，這個注意。Sony 版（13 及以下）的路徑需要在 `VEGAS Pro` 資料夾的上一層添加 **`Sony`** 資料夾，比如 `C:\ProgramData\Sony\VEGAS Pro\Script Menu\` 等。
@ja ここで `23.0` は Vegas のバージョンを指します。最初のパス (`C:\ProgramData\...`) が最もお勧めです。注: `ProgramData` はデフォルトで隠しフォルダーです。Sony 時代（VP13 以前）のパスでは、`VEGAS Pro` の上の階層に **`Sony`** フォルダを追加します。例: `C:\ProgramData\Sony\VEGAS Pro\Script Menu\` など。
@ko 여기서 `23.0`은 Vegas 버전을 의미합니다. 첫 번째 경로(`C:\ProgramData\...`)가 가장 권장됩니다. 참고: `ProgramData`는 기본적으로 숨겨진 폴더입니다. Sony 시대(VP13 이하) 경로의 경우 `VEGAS Pro` 위에 **`Sony`** 폴더를 추가합니다. 예: `C:\ProgramData\Sony\VEGAS Pro\Script Menu\` 등.
@de Wobei `23.0` Ihre Vegas-Version ist. Der erste Pfad (`C:\ProgramData\...`) ist meine Top-Empfehlung. Hinweis: `ProgramData` ist standardmäßig ein versteckter Ordner. Für Pfade der Sony-Ära (VP13 und älter) fügen Sie einen **`Sony`**-Ordner über `VEGAS Pro` hinzu, z. B. `C:\ProgramData\Sony\VEGAS Pro\Script Menu\` usw.
@fr Où `23.0` correspond à votre version de Vegas. Le premier chemin (`C:\ProgramData\...`) est ma principale recommandation. Remarque : `ProgramData` est un dossier caché par défaut. Pour les chemins de l'ère Sony (VP13 et antérieur), ajoutez un dossier **`Sony`** au-dessus de `VEGAS Pro`, par ex. `C:\ProgramData\Sony\VEGAS Pro\Script Menu\`, etc.
@ru Где `23.0` — ваша версия Vegas. Первый путь (`C:\ProgramData\...`) — моя главная рекомендация. Примечание: `ProgramData` — скрытая папка по умолчанию. Для путей эпохи Sony (VP13 и старше) добавьте папку **`Sony`** над `VEGAS Pro`, например, `C:\ProgramData\Sony\VEGAS Pro\Script Menu\` и т.д.

@en The path `%userprofile%\Documents\Script Menu\` i.e. `<Documents>\Script Menu\`, actually points to `C:\Users\<username>\Documents\Script Menu\`; or if you have OneDrive enabled, it points to `C:\Users\<username>\OneDrive\Documents\Script Menu\`. You can use your Windows File Explorer to navigate to your `Documents` folder, and then create folders and perform other operations.
@zh 路径 `%userprofile%\Documents\Script Menu\` 即 `<文档>\Script Menu\`，它实际指向 `C:\Users\<用户名>\Documents\Script Menu\`；或者如果你启用了 OneDrive 的话，它指向 `C:\Users\<用户名>\OneDrive\Documents\Script Menu\`。你可以通过你的 Windows 文件资源管理器，来跳转到你的 `文档` 文件夹，之后进行创建文件夹等操作。
@zh-hant 路徑 `%userprofile%\Documents\Script Menu\` 即 `<文件>\Script Menu\`，它實際指向 `C:\Users\<使用者名稱>\Documents\Script Menu\`；或者如果你啟用了 OneDrive 的話，它指向 `C:\Users\<使用者名稱>\OneDrive\Documents\Script Menu\`。你可以通過你的 Windows 檔案總管，來跳轉到你的 `文件` 資料夾，之後進行建立資料夾等操作。
@ja パス `%userprofile%\Documents\Script Menu\` は `<ドキュメント>\Script Menu\` を意味し、実際には `C:\Users\<ユーザー名>\Documents\Script Menu\` を指します。OneDrive を有効にしている場合は、`C:\Users\<ユーザー名>\OneDrive\Documents\Script Menu\` を指します。Windows のエクスプローラーを使用して `ドキュメント` フォルダーに移動し、フォルダーの作成などの操作を行うことができます。
@ko 경로 `%userprofile%\Documents\Script Menu\`는 `<문서>\Script Menu\`이며, 실제로는 `C:\Users\<사용자 이름>\Documents\Script Menu\`를 가리킵니다. OneDrive를 활성화한 경우 `C:\Users\<사용자 이름>\OneDrive\Documents\Script Menu\`를 가리킵니다. Windows 파일 탐색기를 사용하여 `문서` 폴더로 이동한 후 폴더 만들기 등의 작업을 수행할 수 있습니다.
@de Der Pfad `%userprofile%\Documents\Script Menu\` d.h. `<Dokumente>\Script Menu\`, zeigt tatsächlich auf `C:\Users\<Benutzername>\Documents\Script Menu\`; oder, wenn Sie OneDrive aktiviert haben, auf `C:\Users\<Benutzername>\OneDrive\Documents\Script Menu\`. Sie können Ihren Windows-Datei-Explorer verwenden, um zu Ihrem `Dokumente`-Ordner zu navigieren und dort Ordner zu erstellen usw.
@fr Le chemin `%userprofile%\Documents\Script Menu\` c'est-à-dire `<Documents>\Script Menu\`, pointe en réalité vers `C:\Users\<nom d'utilisateur>\Documents\Script Menu\` ; ou, si vous avez activé OneDrive, vers `C:\Users\<nom d'utilisateur>\OneDrive\Documents\Script Menu\`. Vous pouvez utiliser l'Explorateur de fichiers Windows pour accéder à votre dossier `Documents`, puis créer des dossiers, etc.
@ru Путь `%userprofile%\Documents\Script Menu\`, т.е. `<Документы>\Script Menu\`, на самом деле указывает на `C:\Users\<имя пользователя>\Documents\Script Menu\`; или, если у вас включен OneDrive, он указывает на `C:\Users\<имя пользователя>\OneDrive\Documents\Script Menu\`. Вы можете использовать Проводник Windows, чтобы перейти к папке `Документы`, а затем создавать папки и выполнять другие операции.

<br>

@en Due to API changes, scripts/extensions for SonicFoundry era, Sony era (VP13 and earlier) and Magix / Boris FX era (VP14 and later) Vegas are not directly compatible. The very ancient SonicFoundry era uses `SonicFoundry.Vegas` namespace; the relatively ancient Sony era uses `Sony.Vegas`; the modern Magix / Boris FX era uses `ScriptPortal.Vegas`. For script source code files (`.cs`, `.js`, `.vb`), you can manually edit the file content using a text editor (like Notepad) to make them compatible. For pre-compiled `.dll` files, you must modify the source project and recompile.
@zh 由于对于脚本 API 的更改，SonicFoundry 版、Sony 版（13 以前）和 Magix / Boris FX 版（14 至今）的脚本和扩展是不直接兼容的。十分远古的 SonicFoundry 版使用 `SonicFoundry.Vegas` 命名空间，比较远古的 Sony 版使用 `Sony.Vegas` 命名空间，现代的 Magix / Boris FX 版使用 `ScriptPortal.Vegas` 命名空间。对于现成的脚本代码文件（`.cs`、`.js` 或 `.vb`），可以手动用记事本编辑其中的文件内容，使其兼容。对于已经编译成 `.dll` 的脚本或扩展文件，只能修改原项目以后重新编译。
@zh-hant 由於對於腳本 API 的更改，SonicFoundry 版、Sony 版（13 以前）和 Magix / Boris FX 版（14 至今）的腳本和擴充是不直接相容的。十分遠古的 SonicFoundry 版使用 `SonicFoundry.Vegas` 命名空間，比較遠古的 Sony 版使用 `Sony.Vegas` 命名空間，現代的 Magix / Boris FX 版使用 `ScriptPortal.Vegas` 命名空間。對於現成的腳本程式碼檔案（`.cs`、`.js` 或 `.vb`），可以手動用記事本編輯其中的檔案內容，使其相容。對於已經編譯成 `.dll` 的腳本或擴充檔案，只能修改原項目以後重新編譯。
@ja API の変更により、SonicFoundry 時代、Sony 時代（VP13 以前）、および Magix / Boris FX 時代（VP14 以降）の Vegas 用スクリプト/拡張機能は直接互換性がありません。非常に古い SonicFoundry 時代は `SonicFoundry.Vegas` 名前空間を使用し、比較的古い Sony 時代は `Sony.Vegas` を、現代の Magix / Boris FX 時代は `ScriptPortal.Vegas` を使用します。スクリプトのソースコードファイル（`.cs`、`.js`、`.vb`）については、テキストエディター（メモ帳など）でファイルの内容を手動編集し、互換性を持たせることができます。事前コンパイルされた `.dll` ファイルについては、ソースプロジェクトを変更して再コンパイルする必要があります。
@ko API 변경으로 인해 SonicFoundry 시대, Sony 시대(VP13 이전) 및 Magix / Boris FX 시대(VP14 이후) Vegas용 스크립트/확장은 직접 호환되지 않습니다. 매우 오래된 SonicFoundry 시대는 `SonicFoundry.Vegas` 네임스페이스를 사용하고, 비교적 오래된 Sony 시대는 `Sony.Vegas`를, 현대 Magix / Boris FX 시대는 `ScriptPortal.Vegas`를 사용합니다. 스크립트 소스 코드 파일(`.cs`, `.js`, `.vb`)은 텍스트 편집기(메모장 등)를 사용하여 파일 내용을 수동으로 편집하여 호환되도록 할 수 있습니다. 사전 컴파일된 `.dll` 파일의 경우 소스 프로젝트를 수정하고 다시 컴파일해야 합니다.
@de Aufgrund von API-Änderungen sind Skripte/Erweiterungen für die SonicFoundry-Ära, Sony-Ära (VP13 und älter) und Magix / Boris FX-Ära (VP14 und neuer) von Vegas nicht direkt kompatibel. Die sehr alte SonicFoundry-Ära verwendet den Namespace `SonicFoundry.Vegas`, die relativ alte Sony-Ära `Sony.Vegas`, die moderne Magix / Boris FX-Ära `ScriptPortal.Vegas`. Für Skript-Quellcodedateien (`.cs`, `.js`, `.vb`) können Sie den Dateiinhalt manuell mit einem Texteditor (z. B. Notepad) bearbeiten, um sie kompatibel zu machen. Für vorkompilierte `.dll`-Dateien müssen Sie das Quellprojekt ändern und neu kompilieren.
@fr En raison des changements d'API, les scripts/extensions pour Vegas des ères SonicFoundry, Sony (VP13 et antérieur) et Magix / Boris FX (VP14 et ultérieur) ne sont pas directement compatibles. L'ère très ancienne SonicFoundry utilise l'espace de noms `SonicFoundry.Vegas` ; l'ère Sony relativement ancienne utilise `Sony.Vegas` ; l'ère moderne Magix / Boris FX utilise `ScriptPortal.Vegas`. Pour les fichiers de code source de script (`.cs`, `.js`, `.vb`), vous pouvez modifier manuellement le contenu du fichier à l'aide d'un éditeur de texte (comme le Bloc-notes) pour les rendre compatibles. Pour les fichiers précompilés `.dll`, vous devez modifier le projet source et recompiler.
@ru Из-за изменений API скрипты/расширения для Vegas эпох SonicFoundry, Sony (VP13 и старше) и Magix / Boris FX (VP14 и новее) не совместимы напрямую. Очень древняя эпоха SonicFoundry использует пространство имен `SonicFoundry.Vegas`, относительно древняя Sony — `Sony.Vegas`, современная Magix / Boris FX — `ScriptPortal.Vegas`. Для файлов исходного кода скриптов (`.cs`, `.js`, `.vb`) вы можете вручную отредактировать содержимое файла с помощью текстового редактора (например, Блокнота), чтобы сделать их совместимыми. Для предварительно скомпилированных `.dll` файлов необходимо изменить исходный проект и перекомпилировать.

<br>

@en ### General Steps to Install a Script or Extension
@zh ### 安装脚本或扩展时的一般步骤
@zh-hant ### 安裝腳本或擴充時的一般步驟
@ja ### スクリプトまたは拡張機能をインストールする一般的な手順
@ko ### 스크립트 또는 확장 설치 일반 단계
@de ### Allgemeine Schritte zur Installation eines Skripts oder einer Erweiterung
@fr ### Étapes générales pour installer un script ou une extension
@ru ### Общие шаги для установки скрипта или расширения

@en Taking extensions as an example, the same applies to scripts. For other installation paths, see the [lists above](#xii-scripts-extensions-related).
@zh 以扩展为例，脚本也同理。其他安装路径见 [上方列表](#十二、脚本-扩展相关)。
@zh-hant 以擴充為例，腳本也同理。其他安裝路徑見 [上方列表](#十二、腳本-擴充相關)。
@ja 拡張機能を例に説明しますが、スクリプトも同様です。他のインストールパスについては [上記のリスト](#十二、スクリプト-拡張機能関連) を参照してください。
@ko 예를 들어 확장을 기준으로 설명하지만 스크립트도 동일합니다. 다른 설치 경로는 [위 목록](#xii-스크립트-확장-관련)을 참조하십시오.
@de Am Beispiel von Erweiterungen; gilt analog für Skripte. Für andere Installationspfade siehe die [Listen oben](#xii-skripte-erweiterungen).
@fr En prenant les extensions comme exemple, même chose pour les scripts. Pour d'autres chemins d'installation, voir les [listes ci-dessus](#xii-faq-concernant-les-scripts-extensions).
@ru На примере расширений; аналогично для скриптов. Другие пути установки см. в [списках выше](#xii-скрипты-расширения-связанные).

@en 1.  Copy `C:\ProgramData\VEGAS Pro\` (or, for Sony editions, `C:\ProgramData\Sony\VEGAS Pro\`) and paste it into File Explorer's address bar to navigate.
@zh 1.  先复制 `C:\ProgramData\VEGAS Pro\`（或者 Sony 版的 `C:\ProgramData\Sony\VEGAS Pro\`）并粘贴到你的文件资源管理器的地址栏中，跳转至该目录。
@zh-hant 1.  先複製 `C:\ProgramData\VEGAS Pro\`（或者 Sony 版的 `C:\ProgramData\Sony\VEGAS Pro\`）並貼上到你的檔案總管的位址列中，跳轉至該目錄。
@ja 1.  最初に `C:\ProgramData\VEGAS Pro\`（Sony 版の場合は `C:\ProgramData\Sony\VEGAS Pro\`）をコピーし、エクスプローラーのアドレスバーに貼り付けて移動します。
@ko 1.  먼저 `C:\ProgramData\VEGAS Pro\`(Sony 버전의 경우 `C:\ProgramData\Sony\VEGAS Pro\`)를 복사하여 파일 탐색기의 주소 표시줄에 붙여넣어 이동합니다.
@de 1.  Kopieren Sie zuerst `C:\ProgramData\VEGAS Pro\` (oder bei Sony-Versionen `C:\ProgramData\Sony\VEGAS Pro\`) und fügen Sie es in die Adressleiste des Datei-Explorers ein, um dorthin zu navigieren.
@fr 1.  Copiez d'abord `C:\ProgramData\VEGAS Pro\` (ou, pour les versions Sony, `C:\ProgramData\Sony\VEGAS Pro\`) et collez-le dans la barre d'adresse de l'Explorateur de fichiers pour y accéder.
@ru 1.  Сначала скопируйте `C:\ProgramData\VEGAS Pro\` (или, для версии Sony, `C:\ProgramData\Sony\VEGAS Pro\`) и вставьте в адресную строку проводника для перехода.

@en 2.  Check if the `Application Extensions` folder exists. If not, create it manually with the exact name. Enter the folder.
@zh 2.  检查 `Application Extensions` 文件夹是否存在。若不存在，手动创建一个，并保证名称完全一致。进入该文件夹。
@zh-hant 2.  檢查 `Application Extensions` 資料夾是否存在。若不存在，手動建立一個，並保證名稱完全一致。進入該資料夾。
@ja 2.  `Application Extensions` フォルダが存在するか確認します。存在しない場合は、正確な名前で手動で作成します。フォルダに入ります。
@ko 2.  `Application Extensions` 폴더가 존재하는지 확인합니다. 없으면 정확한 이름으로 수동 생성합니다. 폴더에 들어갑니다.
@de 2.  Überprüfen Sie, ob der Ordner `Application Extensions` existiert. Wenn nicht, erstellen Sie ihn manuell mit exakt dem Namen. Betreten Sie den Ordner.
@fr 2.  Vérifiez si le dossier `Application Extensions` existe. Sinon, créez-le manuellement avec le nom exact. Entrez dans le dossier.
@ru 2.  Проверьте, существует ли папка `Application Extensions`. Если нет, создайте ее вручную с точным именем. Войдите в папку.

@en     *   If you prefer using the Windows user's `Documents` folder, you can also open your Windows File Explorer and navigate to the `Documents` folder. Then, check if the **`Vegas Application Extensions`** folder exists. If not, create it manually with the exact name. Enter that folder.
@zh     *   如果你更喜欢使用 Windows 用户的 `文档` 文件夹，你也可以打开你的 Windows 文件资源管理器，并跳转到 `文档` 文件夹。之后，检查 **`Vegas Application Extensions`** 文件夹是否存在。若不存在，手动创建一个，并保证名称完全一致。进入该文件夹。
@zh-hant     *   如果你更喜歡使用 Windows 使用者的 `文件` 資料夾，你也可以打開你的 Windows 檔案總管，並跳轉到 `文件` 資料夾。之後，檢查 **`Vegas Application Extensions`** 資料夾是否存在。若不存在，手動建立一個，並保證名稱完全一致。進入該資料夾。
@ja     *   Windows ユーザーの `ドキュメント` フォルダを使用する方が好みの場合は、Windows エクスプローラーを開いて `ドキュメント` フォルダに移動することもできます。次に、**`Vegas Application Extensions`** フォルダが存在するか確認します。存在しない場合は、正確な名前で手動で作成します。そのフォルダに入ります。
@ko     *   Windows 사용자의 `문서` 폴더를 사용하는 것을 선호한다면, Windows 파일 탐색기를 열고 `문서` 폴더로 이동할 수도 있습니다. 그런 다음 **`Vegas Application Extensions`** 폴더가 존재하는지 확인합니다. 없으면 정확한 이름으로 수동 생성합니다. 해당 폴더에 들어갑니다.
@de     *   Wenn Sie lieber den `Dokumente`-Ordner des Windows-Benutzers verwenden, können Sie auch Ihren Windows-Datei-Explorer öffnen und zum `Dokumente`-Ordner navigieren. Überprüfen Sie dann, ob der Ordner **`Vegas Application Extensions`** existiert. Wenn nicht, erstellen Sie ihn manuell mit dem exakten Namen. Betreten Sie diesen Ordner.
@fr     *   Si vous préférez utiliser le dossier `Documents` de l'utilisateur Windows, vous pouvez également ouvrir l'Explorateur de fichiers Windows et accéder au dossier `Documents`. Ensuite, vérifiez si le dossier **`Vegas Application Extensions`** existe. Sinon, créez-le manuellement avec le nom exact. Entrez dans ce dossier.
@ru     *   Если вы предпочитаете использовать папку `Документы` пользователя Windows, вы также можете открыть Проводник Windows и перейти в папку `Документы`. Затем проверьте, существует ли папка **`Vegas Application Extensions`**. Если нет, создайте ее вручную с точным именем. Войдите в эту папку.

@en 3.  Copy all required `.dll` files for the extension and paste them directly here. E.g., `C:\ProgramData\VEGAS Pro\Application Extensions\UltraPaste.dll`.
@zh 3.  复制该扩展所需的所有 `.dll` 文件，直接粘贴到这个文件夹内。比如：`C:\ProgramData\VEGAS Pro\Application Extensions\UltraPaste.dll`。
@zh-hant 3.  複製該擴充所需的所有 `.dll` 檔案，直接貼上到這個資料夾內。比如：`C:\ProgramData\VEGAS Pro\Application Extensions\UltraPaste.dll`。
@ja 3.  拡張機能に必要なすべての `.dll` ファイルをコピーし、このフォルダに直接貼り付けます。例：`C:\ProgramData\VEGAS Pro\Application Extensions\UltraPaste.dll`。
@ko 3.  확장에 필요한 모든 `.dll` 파일을 복사하여 이 폴더에 직접 붙여넣습니다. 예: `C:\ProgramData\VEGAS Pro\Application Extensions\UltraPaste.dll`.
@de 3.  Kopieren Sie alle erforderlichen `.dll`-Dateien für die Erweiterung und fügen Sie sie direkt hier ein. Z. B.: `C:\ProgramData\VEGAS Pro\Application Extensions\UltraPaste.dll`.
@fr 3.  Copiez tous les fichiers `.dll` requis pour l'extension et collez-les directement ici. Par ex. : `C:\ProgramData\VEGAS Pro\Application Extensions\UltraPaste.dll`.
@ru 3.  Скопируйте все необходимые файлы `.dll` для расширения и вставьте их прямо сюда. Например: `C:\ProgramData\VEGAS Pro\Application Extensions\UltraPaste.dll`.

@en     *   Some scripts/extensions may include `16*16` `.png` icon files. Usually you can optionally place them. The icon files can be used to distinguish different scripts and extensions in Vegas menus and toolbars.
@zh     *   有些脚本和扩展也可能有 `16*16` 的 `.png` 图标文件，通常情况下你可以选择是否放入。图标文件可用于在 Vegas 菜单栏和工具栏中区分不同的脚本和扩展。
@zh-hant     *   有些腳本和擴充也可能有 `16*16` 的 `.png` 圖示檔案，通常情況下你可以選擇是否放入。圖示檔案可用於在 Vegas 選單列和工具列中區分不同的腳本和擴充。
@ja     *   一部のスクリプト/拡張機能には `16*16` の `.png` アイコンファイルが含まれる場合があります。通常、配置するかどうかは選択できます。アイコンファイルは、Vegas のメニューやツールバーで異なるスクリプトや拡張機能を区別するために使用できます。
@ko     *   일부 스크립트/확장에는 `16*16` `.png` 아이콘 파일이 포함될 수 있습니다. 일반적으로 배치 여부를 선택할 수 있습니다. 아이콘 파일은 Vegas 메뉴 및 도구 모음에서 다른 스크립트와 확장을 구별하는 데 사용할 수 있습니다.
@de     *   Einige Skripte/Erweiterungen können `16*16` `.png`-Symbol-Dateien enthalten. Normalerweise können Sie wählen, ob Sie diese ablegen. Die Symbol-Dateien können verwendet werden, um verschiedene Skripte und Erweiterungen in Vegas-Menüs und -Symbolleisten zu unterscheiden.
@fr     *   Certains scripts/extensions peuvent inclure des fichiers icône `.png` `16*16`. Normalement, vous pouvez choisir de les placer ou non. Les fichiers icône peuvent être utilisés pour distinguer les différents scripts et extensions dans les menus et barres d'outils de Vegas.
@ru     *   Некоторые скрипты/расширения могут включать файлы значков `.png` размером `16*16`. Обычно вы можете по желанию разместить их. Файлы значков можно использовать для различения разных скриптов и расширений в меню и панелях инструментов Vegas.

@en 4. If some scripts/extensions require additional installers, please follow the installation steps they provide.
@zh 4. 如果某些脚本/扩展需要额外的安装包，请根据他们给出的安装步骤来。
@zh-hant 4. 如果某些腳本/擴充需要額外的安裝包，請根據他們給出的安裝步驟來。
@ja 4. 一部のスクリプト/拡張機能に追加のインストーラーが必要な場合は、提供されるインストール手順に従ってください。
@ko 4. 일부 스크립트/확장에 추가 설치 프로그램이 필요한 경우 제공된 설치 단계를 따르십시오.
@de 4. Wenn einige Skripte/Erweiterungen zusätzliche Installationsprogramme benötigen, folgen Sie bitte den von ihnen bereitgestellten Installationsschritten.
@fr 4. Si certains scripts/extensions nécessitent des programmes d'installation supplémentaires, veuillez suivre les étapes d'installation qu'ils fournissent.
@ru 4. Если некоторые скрипты/расширения требуют дополнительных установщиков, пожалуйста, следуйте предоставленным ими шагам установки.

<br>

@en ## XIII. Project File Backup and Recovery
@zh ## 十三、工程文件的备份和恢复
@zh-hant ## 十三、工程檔案的備份和恢復
@ja ## 十三、プロジェクトファイルのバックアップと回復
@ko ## XIII. 프로젝트 파일 백업 및 복구
@de ## XIII. Projektdatei-Backup und Wiederherstellung
@fr ## XIII. Sauvegarde et récupération de fichiers de projet
@ru ## XIII. Резервное копирование и восстановление файлов проектов

@en **Most important advice upfront:**
@zh **最重要的放在开头：**
@zh-hant **最重要的放在開頭：**
@ja **最も重要なアドバイスを最初に：**
@ko **가장 중요한 조언 먼저:**
@de **Wichtigster Rat vorab:**
@fr **Le conseil le plus important d'abord :**
@ru **Самый важный совет вначале:**

@en <p align="center"><big><b>Develop a good habit of pressing <code>Ctrl + S</code> frequently!</b></big></p>
@zh <p align="center"><big><b>养成良好的随手 <code>Ctrl + S</code> 的习惯！</b></big></p>
@zh-hant <p align="center"><big><b>養成良好的隨手 <code>Ctrl + S</code> 的習慣！</b></big></p>
@ja <p align="center"><big><b>頻繁に <code>Ctrl + S</code> を押す習慣を身につけましょう！</b></big></p>
@ko <p align="center"><big><b>자주 <code>Ctrl + S</code>를 누르는 좋은 습관을 들이십시오!</b></big></p>
@de <p align="center"><big><b>Entwickeln Sie eine gute Gewohnheit, häufig <code>Strg + S</code> zu drücken!</b></big></p>
@fr <p align="center"><big><b>Développez une bonne habitude d'appuyer fréquemment sur <code>Ctrl + S</code> !</b></big></p>
@ru <p align="center"><big><b>Выработайте хорошую привычку часто нажимать <code>Ctrl + S</code>!</b></big></p>

@en This section helps with situations like **saved project file disappearing/corrupt**, **software crash before saving**, etc.
@zh 本段旨在帮助解决 **保存后原工程文件消失了或者无法正常打开**、**软件崩溃但没来得及保存** 等需要恢复工程文件的情况。
@zh-hant 本段旨在幫助解決 **儲存後原工程檔案消失了或者無法正常開啟**、**軟體崩潰但沒來得及儲存** 等需要恢復工程檔案的情況。
@ja このセクションは、**保存したプロジェクトファイルが消失/破損した**、**ソフトウェアがクラッシュし保存できなかった**などの状況を解決するのに役立ちます。
@ko 이 섹션은 **저장 후 프로젝트 파일이 사라지거나 손상된 경우**, **저장 전 소프트웨어 크래시** 등 프로젝트 파일을 복구해야 하는 상황을 돕습니다.
@de Dieser Abschnitt hilft bei Situationen wie **gespeicherte Projektdatei verschwunden/beschädigt**, **Software-Absturz vor dem Speichern**, usw.
@fr Cette section aide dans des situations comme **le fichier de projet enregistré disparaît/est corrompu**, **le logiciel plante avant la sauvegarde**, etc.
@ru Этот раздел помогает в ситуациях, когда **сохраненный файл проекта исчез/поврежден**, **программа аварийно завершила работу до сохранения** и т.д.

<br>

@en ### 1. The `.veg.bak` File Beside Your Project
@zh ### 1. 工程旁边的 `.veg.bak` 文件
@zh-hant ### 1. 工程旁邊的 `.veg.bak` 檔案
@ja ### 1. プロジェクト横の `.veg.bak` ファイル
@ko ### 1. 프로젝트 옆의 `.veg.bak` 파일
@de ### 1. Die `.veg.bak`-Datei neben Ihrem Projekt
@fr ### 1. Le fichier `.veg.bak` à côté de votre projet
@ru ### 1. Файл `.veg.bak` рядом с вашим проектом

@en This is a **backup from the second-to-last save**.
@zh 此文件是**倒数第二次**的工程保存文件，是工程文件的小备份。
@zh-hant 此檔案是**倒數第二次**的工程儲存檔案，是工程檔案的小備份。
@ja これは**最後から 2 番目**のプロジェクト保存ファイルです。
@ko 이것은 **저장 직전**의 프로젝트 저장 파일입니다.
@de Dies ist ein **Backup vom vorletzten Speichern**.
@fr C'est une **sauvegarde de l'avant-dernière sauvegarde**.
@ru Это **резервная копия от предпоследнего сохранения**.

@en To recover, **rename the `.veg.bak` file to `.veg`** and open in VEGAS.
@zh 需要恢复工程时，可以将 `.veg.bak` 文件**重命名**为 `.veg` 文件，然后用 Vegas 打开。
@zh-hant 需要恢復工程時，可以將 `.veg.bak` 檔案**重新命名**為 `.veg` 檔案，然後用 Vegas 開啟。
@ja 回復には、 **`.veg.bak` ファイルを `.veg` に名前変更**し、VEGAS で開きます。
@ko 복구하려면 `.veg.bak` 파일을 `.veg`로 **이름을 바꾸고** VEGAS에서 엽니다.
@de Zur Wiederherstellung **benennen Sie die `.veg.bak`-Datei in `.veg` um** und öffnen Sie sie in VEGAS.
@fr Pour récupérer, **renommez le fichier `.veg.bak` en `.veg`** et ouvrez dans VEGAS.
@ru Для восстановления **переименуйте файл `.veg.bak` в `.veg`** и откройте в VEGAS.

@en If you rarely save manually, this backup could be very old.
@zh 如果没有随手 `Ctrl + S` 的习惯的话，这个备份可能会隔了很久很久。
@zh-hant 如果沒有隨手 `Ctrl + S` 的習慣的話，這個備份可能會隔了很久很久。
@ja 手動保存をほとんど行わない場合、このバックアップは非常に古くなる可能性があります。
@ko 수동으로 거의 저장하지 않는다면 이 백업이 매우 오래되었을 수 있습니다.
@de Wenn Sie selten manuell speichern, könnte dieses Backup sehr alt sein.
@fr Si vous sauvegardez rarement manuellement, cette sauvegarde pourrait être très ancienne.
@ru Если вы редко сохраняете вручную, эта резервная копия может быть очень старой.

<br>

@en ### 2. VEGAS's Default 5-Minute Auto-Save
@zh ### 2. Vegas 默认的 5 分钟自动保存文件
@zh-hant ### 2. Vegas 預設的 5 分鐘自動儲存檔案
@ja ### 2. VEGAS のデフォルト 5 分自動保存
@ko ### 2. VEGAS 기본 5분 자동 저장
@de ### 2. VEGAS' Standard 5-Minuten Auto-Speichern
@fr ### 2. Sauvegarde automatique par défaut de 5 minutes de VEGAS
@ru ### 2. Автосохранение по умолчанию в VEGAS каждые 5 минут

@en VEGAS auto-saves every 5 minutes for crash recovery.
@zh Vegas 会每隔 5 分钟进行一次自动保存，以便于软件崩溃后的工程恢复。
@zh-hant Vegas 會每隔 5 分鐘進行一次自動儲存，以便於軟體崩潰後的工程恢復。
@ja VEGAS は 5 分ごとに自動保存し、クラッシュ後の回復を可能にします。
@ko VEGAS는 크래시 복구를 위해 5분마다 자동 저장합니다.
@de VEGAS speichert alle 5 Minuten automatisch für Absturzwiederherstellung.
@fr VEGAS sauvegarde automatiquement toutes les 5 minutes pour la récupération après plantage.
@ru VEGAS автоматически сохраняется каждые 5 минут для восстановления после сбоя.

@en Standard recovery method: After a crash, **don't open the original project directly**.
@zh 一般情况下直接恢复工程的办法：软件崩溃后**不要直接打开原工程**，
@zh-hant 一般情況下直接恢復工程的辦法：軟體崩潰後**不要直接開啟原工程**，
@ja 標準的な回復方法：クラッシュ後、**元のプロジェクトを直接開かないでください**。
@ko 표준 복구 방법: 크래시 후 **원래 프로젝트를 직접 열지 마십시오**.
@de Standard-Wiederherstellungsmethode: Nach einem Absturz **öffnen Sie das Originalprojekt nicht direkt**.
@fr Méthode de récupération standard : Après un plantage, **n'ouvrez pas directement le projet original**.
@ru Стандартный метод восстановления: После сбоя **не открывайте исходный проект напрямую**.

@en **Run VEGAS, start a new empty project**.
@zh **重新运行 Vegas 开个新的工程**，
@zh-hant **重新執行 Vegas 開個新的工程**，
@ja **VEGAS を実行し、新しい空のプロジェクトを開始**。
@ko **VEGAS를 실행하고 새 빈 프로젝트를 시작합니다**.
@de **Starten Sie VEGAS, beginnen Sie ein neues leeres Projekt**.
@fr **Exécutez VEGAS, démarrez un nouveau projet vide**.
@ru **Запустите VEGAS, начните новый пустой проект**.

@en VEGAS should prompt "**Project recovery available**". Recover from there.
@zh Vegas 加载完后会提示“**有工程可以恢复**”，恢复即可。
@zh-hant Vegas 載入完後會提示“**有工程可以恢復**”，恢復即可。
@ja VEGAS は「**プロジェクト回復が利用可能**」とプロンプトするはずです。そこから回復します。
@ko VEGAS는 "**프로젝트 복구 가능**"을 표시해야 합니다. 거기서 복구하십시오.
@de VEGAS sollte "**Projektwiederherstellung verfügbar**" anzeigen. Stellen Sie von dort wieder her.
@fr VEGAS devrait demander "**Récupération de projet disponible**". Récupérez à partir de là.
@ru VEGAS должен предложить "**Доступно восстановление проекта (Project recovery available)**". Восстановитесь оттуда.

@en This method is somewhat cumbersome. If you open the original project directly, the prompt won't appear.
@zh 不过像上面这样子操作有些麻烦，如果直接打开了原工程，就根本不会弹出这个“恢复工程”的提示，
@zh-hant 不過像上面這樣子操作有些麻煩，如果直接開啟了原工程，就根本不會彈出這個“恢復工程”的提示，
@ja この方法はやや面倒です。元のプロジェクトを直接開くと、プロンプトは表示されません。
@ko 이 방법은 다소 번거롭습니다. 원래 프로젝트를 직접 열면 프롬프트가 나타나지 않습니다.
@de Diese Methode ist etwas umständlich. Wenn Sie das Originalprojekt direkt öffnen, erscheint die Eingabeaufforderung nicht.
@fr Cette méthode est un peu lourde. Si vous ouvrez le projet original directement, l'invite n'apparaîtra pas.
@ru Этот метод несколько громоздкий. Если вы откроете исходный проект напрямую, предложение не появится.

@en If you then modify the original project, it **might overwrite the auto-save file**, making recovery via this method impossible.
@zh 此时若直接在原工程上修改，则**可能会导致自动保存文件被覆盖**，造成无法通过此办法恢复的情况，
@zh-hant 此時若直接在原工程上修改，則**可能會導致自動儲存檔案被覆蓋**，造成無法通過此辦法恢復的情況，
@ja その後元のプロジェクトを変更すると、**自動保存ファイルが上書きされる可能性があり**、この方法での回復が不可能になります。
@ko 그런 다음 원래 프로젝트를 수정하면 **자동 저장 파일을 덮어쓸 수 있어** 이 방법으로 복구가 불가능해질 수 있습니다.
@de Wenn Sie dann das Originalprojekt ändern, **könnte es die Auto-Speicherdatei überschreiben**, was eine Wiederherstellung über diese Methode unmöglich macht.
@fr Si vous modifiez ensuite le projet original, cela **pourrait écraser le fichier de sauvegarde automatique**, rendant la récupération via cette méthode impossible.
@ru Если вы затем измените исходный проект, это **может перезаписать файл автосохранения**, делая восстановление этим методом невозможным.

@en Therefore, I recommend **manually locating the auto-save files**.
@zh 因此我更建议**自己手动去文件夹里找**。
@zh-hant 因此我更建議**自己手動去資料夾裡找**。
@ja したがって、**自動保存ファイルを手動で探すことをお勧めします**。
@ko 따라서 **자동 저장 파일을 수동으로 찾는 것**을 권장합니다.
@de Daher empfehle ich **manuelles Suchen der Auto-Speicherdateien**.
@fr Par conséquent, je recommande **de localiser manuellement les fichiers de sauvegarde automatique**.
@ru Поэтому я рекомендую **вручную найти файлы автосохранения**.

@en Simple method: Go to the **[VEGAS Cache Directory](#vegas-preferences-and-cache-directory)** (**`%localappdata%\VEGAS Pro\`**) <small>(or simply **search `autosave` on `C:`**)</small>, sort by date, find `.veg` or `.veg.bak` files, copy them out, **rename** to `.veg` as in [1](#_1-the-veg-bak-file-beside-your-project), open, verify, then save elsewhere.
@zh 比较简单的办法是，进入【**[Vegas 缓存目录]**(#vegas-首选项和缓存目录)】(**`%localappdata%\VEGAS Pro\`**)<small>（或者实在不想找目录的话就在 **`C 盘` 搜索 `autosave`**）</small>，按时间排序，看到有 `.veg` 文件或者 `.veg.bak` 文件，复制粘贴出来，按照 [1](#_1-工程旁边的-veg-bak-文件) 的办法**重命名**为 `.veg`，打开，确认无误后再另存为到其他地方去。
@zh-hant 比較簡單的辦法是，進入【**[Vegas 快取目錄]**(#vegas-首選項和快取目錄)】(**`%localappdata%\VEGAS Pro\`**)<small>（或者實在不想找目錄的話就在 **`C 盤` 搜尋 `autosave`**）</small>，按時間排序，看到有 `.veg` 檔案或者 `.veg.bak` 檔案，複製貼上出來，按照 [1](#_1-工程旁邊的-veg-bak-檔案) 的辦法**重新命名**為 `.veg`，開啟，確認無誤後再另存為到其他地方去。
@ja 簡単な方法： **[VEGAS キャッシュディレクトリ](#vegas-プリファレンスとキャッシュディレクトリ)** （**`%localappdata%\VEGAS Pro\`**）に移動<small>（または単に **`C:` で `autosave` を検索**）</small>、日付順に並べ替え、 `.veg` または `.veg.bak` ファイルを見つけ、コピーし、[1](#_1-プロジェクト横の-veg-bak-ファイル) のように **`.veg` に名前変更**、開き、確認後、別の場所に保存します。
@ko 간단한 방법: **[VEGAS 캐시 디렉토리](#vegas-환경설정-및-캐시-디렉토리)** (**`%localappdata%\VEGAS Pro\`**)로 이동 <small>(또는 단순히 **`C:`에서 `autosave` 검색**)</small>, 날짜별로 정렬, `.veg` 또는 `.veg.bak` 파일을 찾고, 복사하여 꺼내서, [1](#_1-프로젝트-옆의-veg-bak-파일)과 같이 `.veg`로 **이름을 바꾸고**, 열고, 확인한 후 다른 곳에 저장합니다.
@de Einfache Methode: Gehen Sie zum **[VEGAS-Cache-Verzeichnis](#vegas-einstellungen-und-cache-verzeichnis)** (**`%localappdata%\VEGAS Pro\`**) <small>(oder einfach **suchen Sie nach `autosave` auf `C:`**)</small>, sortieren nach Datum, finden Sie `.veg` oder `.veg.bak`-Dateien, kopieren Sie sie heraus, **benennen Sie um** zu `.veg` wie in [1](#_1-die-veg-bak-datei-neben-ihrem-projekt), öffnen Sie, überprüfen Sie, dann speichern Sie woanders.
@fr Méthode simple : Allez dans le **[Répertoire de cache VEGAS](#répertoire-des-préférences-et-du-cache-vegas)** (**`%localappdata%\VEGAS Pro\`**) <small>(ou simplement **recherchez `autosave` sur `C:`**)</small>, triez par date, trouvez des fichiers `.veg` ou `.veg.bak`, copiez-les, **renommez** en `.veg` comme dans [1](#_1-le-fichier-veg-bak-à-côté-de-votre-projet), ouvrez, vérifiez, puis enregistrez ailleurs.
@ru Простой метод: Перейдите в **[Кэш-директорию VEGAS](#настройки-vegas-и-кэш-директория)** (**`%localappdata%\VEGAS Pro\`**) <small>(или просто **найдите `autosave` на диске `C:`**)</small>, отсортируйте по дате, найдите файлы `.veg` или `.veg.bak`, скопируйте их, **переименуйте** в `.veg`, как в [1](#_1-файл-veg-bak-рядом-с-вашим-проектом), откройте, проверьте, затем сохраните в другом месте.

@en The default auto-save interval is 5 minutes. To change, go to [Internal Preferences](#accessing-vegas-internal-preferences), search for `msAutoSaveInterval`. Default is `300000` milliseconds. Change as desired.
@zh 自动保存间隔默认是 5 分钟，如需更改，可进入 [内部首选项](#vegas-内部首选项的进入方法)，搜索并找到 `msAutoSaveInterval`，该选项的默认值是 `300000` 毫秒，可自行更改至想要的值。
@zh-hant 自動儲存間隔預設是 5 分鐘，如需更改，可進入 [內部首選項](#vegas-內部首選項的進入方法)，搜尋並找到 `msAutoSaveInterval`，該選項的預設值是 `300000` 毫秒，可自行更改至想要的值。
@ja デフォルトの自動保存間隔は 5 分です。変更するには、[内部プリファレンス](#vegas-内部プリファレンスへのアクセス) に移動し、 `msAutoSaveInterval` を検索。デフォルトは `300000` ミリ秒。希望の値に変更。
@ko 기본 자동 저장 간격은 5분입니다. 변경하려면 [내부 환경설정 접근](#vegas-내부-환경설정-접근)으로 이동하여 `msAutoSaveInterval`을 검색하십시오. 기본값은 `300000`밀리초입니다. 원하는 대로 변경하십시오.
@de Das standardmäßige Auto-Speicherintervall ist 5 Minuten. Um zu ändern, gehen Sie zu [Interne Einstellungen](#auf-die-internen-vegas-einstellungen-zugreifen), suchen Sie nach `msAutoSaveInterval`. Standard ist `300000` Millisekunden. Ändern Sie nach Wunsch.
@fr L'intervalle de sauvegarde automatique par défaut est de 5 minutes. Pour changer, allez dans [Préférences internes](#accéder-aux-préférences-internes-vegas), recherchez `msAutoSaveInterval`. La valeur par défaut est `300000` millisecondes. Changez comme souhaité.
@ru Интервал автосохранения по умолчанию — 5 минут. Чтобы изменить, перейдите в [Внутренние настройки](#доступ-к-внутренним-настройкам-vegas), найдите `msAutoSaveInterval`. По умолчанию `300000` миллисекунд. Измените по желанию.

<br>

@en ### 3. Advanced Save (VP16+)
@zh ### 3. 高级保存（vv16 及以上）
@zh-hant ### 3. 高級儲存（vv16 及以上）
@ja ### 3. 高度な保存 (VP16+)
@ko ### 3. 고급 저장 (VP16+)
@de ### 3. Erweitertes Speichern (VP16+)
@fr ### 3. Sauvegarde avancée (VP16+)
@ru ### 3. Расширенное сохранение (VP16+)

@en **My current top recommendation** for project recovery, but requires prior setup.
@zh 我**目前最推荐**的工程恢复办法，但需要提前设置好。
@zh-hant 我**目前最推薦**的工程恢復辦法，但需要提前設定好。
@ja **現在私が最も推奨する**プロジェクト回復方法ですが、事前設定が必要です。
@ko **현재 가장 권장하는** 프로젝트 복구 방법이지만 사전 설정이 필요합니다.
@de **Meine derzeitige Top-Empfehlung** für Projektwiederherstellung, erfordert jedoch vorherige Einrichtung.
@fr **Ma recommandation actuelle principale** pour la récupération de projet, mais nécessite une configuration préalable.
@ru **Моя текущая главная рекомендация** для восстановления проектов, но требует предварительной настройки.

@en Advantages:
@zh 优点：
@zh-hant 優點：
@ja 利点：
@ko 장점:
@de Vorteile:
@fr Avantages :
@ru Преимущества:

@en - Backup files are saved in the **same directory as the project**, no need to search the cache directory.
@zh - 备份恢复文件能直接设置在**工程同目录**下，不需要再手动去 [Vegas 缓存目录](#vegas-首选项和缓存目录)里找。
@zh-hant - 備份恢復檔案能直接設定在**工程同目錄**下，不需要再手動去 [Vegas 快取目錄](#vegas-首選項和快取目錄)裡找。
@ja - バックアップファイルはプロジェクト**と同じディレクトリ**に保存され、キャッシュディレクトリを検索する必要がありません。
@ko - 백업 파일이 **프로젝트와 동일한 디렉토리**에 저장되므로 캐시 디렉토리를 검색할 필요가 없습니다.
@de - Backup-Dateien werden im **selben Verzeichnis wie das Projekt** gespeichert, kein Suchen im Cache-Verzeichnis erforderlich.
@fr - Les fichiers de sauvegarde sont enregistrés dans le **même répertoire que le projet**, pas besoin de chercher dans le répertoire de cache.
@ru - Файлы резервных копий сохраняются в **том же каталоге, что и проект**, не нужно искать в кэш-директории.

@en - Easy adjustment of backup intervals.
@zh - 可以方便快捷地更改备份间隔。
@zh-hant - 可以方便快捷地更改備份間隔。
@ja - バックアップ間隔の調整が容易。
@ko - 백업 간격을 쉽게 조정할 수 있습니다.
@de - Einfache Anpassung der Backup-Intervalle.
@fr - Ajustement facile des intervalles de sauvegarde.
@ru - Легкая регулировка интервалов резервного копирования.

<ImageOnDemand src="vegtips/image038_advanced_save.png" />

@en <p align="center">Menu: <b><code>Tools -> Advanced Save</code></b>.</p>
@zh <p align="center">菜单栏的 <b><code>工具 -> 高级保存</code></b>。</p>
@zh-hant <p align="center">選單列的 <b><code>工具 -> 高級儲存</code></b>。</p>
@ja <p align="center">メニュー： <b><code>ツール -> 高度な保存</code></b>。</p>
@ko <p align="center">메뉴: <b><code>도구 -> 고급 저장</code></b>.</p>
@de <p align="center">Menü: <b><code>Werkzeuge -> Erweitertes Speichern</code></b>.</p>
@fr <p align="center">Menu : <b><code>Outils -> Sauvegarde avancée</code></b>.</p>
@ru <p align="center">Меню: <b><code>Инструменты -> Расширенное сохранение (Tools -> Advanced Save)</code></b>.</p>

@en Two functions: Live Save and Advanced Backup.
@zh 高级保存功能共分为两项功能：实时保存和高级备份。
@zh-hant 高級儲存功能共分為兩項功能：實時儲存和高級備份。
@ja 2 つの機能：ライブ保存と高度なバックアップ。
@ko 두 가지 기능: 실시간 저장 및 고급 백업.
@de Zwei Funktionen: Live-Speichern und Erweitertes Backup.
@fr Deux fonctions : Sauvegarde en direct et Sauvegarde avancée.
@ru Две функции: Live Save (Прямое сохранение) и Advanced Backup (Расширенное резервное копирование).

@en - **`Live Save`**: **Saves after every single operation**, ensuring the project file is **always up-to-date**.
@zh - **`实时保存`**：**做一步操作自动按一步保存**，完全保证工程文件为**实时最新**状态。
@zh-hant - **`實時儲存`**：**做一步操作自動按一步儲存**，完全保證工程檔案為**實時最新**狀態。
@ja - **`ライブ保存`**： **操作ごとに保存**し、プロジェクトファイルが**常に最新**であることを保証します。
@ko - **`실시간 저장`**: **모든 작업 후 저장**하여 프로젝트 파일이 **항상 최신 상태**임을 보장합니다.
@de - **`Live-Speichern`**: **Speichert nach jeder einzelnen Operation**, stellt sicher, dass die Projektdatei **immer auf dem neuesten Stand** ist.
@fr - **`Sauvegarde en direct`** : **Sauvegarde après chaque opération unique**, assurant que le fichier de projet est **toujours à jour**.
@ru - **`Live Save (Прямое сохранение)`**: **Сохраняет после каждой операции**, гарантируя, что файл проекта **всегда актуален**.

@en   - Because it saves after every action, it **can cause significant lag on large projects, so it's NOT recommended**.
@zh   - 因为是做一步就保存一步，在做大工程时用此功能**可能会很卡**，因此**不建议启用**。
@zh-hant   - 因為是做一步就儲存一步，在做大工程時用此功能**可能會很卡**，因此**不建議啟用**。
@ja   - 操作ごとに保存するため、**大規模プロジェクトでは大幅な遅延を引き起こす可能性があり、お勧めしません**。
@ko   - 모든 작업 후 저장하므로 **대규모 프로젝트에서 심각한 지연을 유발할 수 있으므로 권장하지 않습니다**.
@de   - Da es nach jeder Aktion speichert, **kann es bei großen Projekten erhebliche Verzögerungen verursachen, daher wird es NICHT empfohlen**.
@fr   - Parce qu'il sauvegarde après chaque action, il **peut causer des ralentissements significatifs sur les grands projets, donc ce n'est PAS recommandé**.
@ru   - Поскольку сохраняет после каждого действия, **может вызвать значительные задержки в больших проектах, поэтому НЕ рекомендуется**.

@en - **`Advanced Backup`**: Creates additional `.veg` backup files.
@zh - **`高级备份`**：为工程创建额外的 `.veg` 备份文件。
@zh-hant - **`高級備份`**：為工程建立額外的 `.veg` 備份檔案。
@ja - **`高度なバックアップ`**：追加の `.veg` バックアップファイルを作成します。
@ko - **`고급 백업`**: 추가 `.veg` 백업 파일을 생성합니다.
@de - **`Erweitertes Backup`**: Erstellt zusätzliche `.veg`-Backup-Dateien.
@fr - **`Sauvegarde avancée`** : Crée des fichiers de sauvegarde `.veg` supplémentaires.
@ru - **`Advanced Backup (Расширенное резервное копирование)`**: Создает дополнительные файлы резервных копий `.veg`.

@en   Several tiers: **Minute/Hour/Daily/Live**.
@zh   一共分好几档：**按分钟/按小时/每日/实时**。
@zh-hant   一共分好幾檔：**按分鐘/按小時/每日/實時**。
@ja   いくつかの階層：**分単位/時間単位/毎日/ライブ**。
@ko   여러 단계: **분/시간/일별/실시간**.
@de   Mehrere Ebenen: **Minuten/Stündlich/Täglich/Live**.
@fr   Plusieurs niveaux : **Minute/Heure/Quotidien/En direct**.
@ru   Несколько уровней: **По минутам/По часам/Ежедневно/Прямое**.

@en   - `Minute backups`: Saves 1 `.veg` backup **every `x` minutes**, **keeping only backups from the last hour**. Older backups auto-delete.
@zh   - `按分钟备份`：**每隔 `x` 分钟**自动存 1 个 `.veg` 备份，**只保留 1 个小时以内**的备份文件，1 个小时以外的备份文件将自动清理。
@zh-hant   - `按分鐘備份`：**每隔 `x` 分鐘**自動存 1 個 `.veg` 備份，**只保留 1 個小時以內**的備份檔案，1 個小時以外的備份檔案將自動清理。
@ja   - `分単位バックアップ`： **`x` 分ごと**に 1 つの `.veg` バックアップを保存し、**過去 1 時間以内**のバックアップのみ保持。古いバックアップは自動削除。
@ko   - `분 백업`: **`x`분마다** 1개의 `.veg` 백업을 저장하고, **지난 1시간 이내의 백업만 유지**합니다. 오래된 백업은 자동 삭제됩니다.
@de   - `Minuten-Backups`: Speichert 1 `.veg`-Backup **alle `x` Minuten**, **behält nur Backups der letzten Stunde**. Ältere Backups löschen sich automatisch.
@fr   - `Sauvegardes par minute` : Sauvegarde 1 fichier `.veg` **toutes les `x` minutes**, **ne gardant que les sauvegardes de la dernière heure**. Les sauvegardes plus anciennes sont supprimées automatiquement.
@ru   - `Резервные копии по минутам (Minute backups)`: Сохраняет 1 резервную копию `.veg` **каждые `x` минут**, **сохраняя только резервные копии за последний час**. Старые удаляются автоматически.

@en   - `Hour backups`: Saves 1 `.veg` backup **every `x` hours**, **keeping only backups from the last 10 hours**. Older auto-delete.
@zh   - `按小时备份`：**每隔 `x` 小时**自动存 1 个 `.veg` 备份，**只保留 10 个小时以内**的备份文件，10 个小时以外的备份文件将自动清理。
@zh-hant   - `按小時備份`：**每隔 `x` 小時**自動存 1 個 `.veg` 備份，**只保留 10 個小時以內**的備份檔案，10 個小時以外的備份檔案將自動清理。
@ja   - `時間単位バックアップ`： **`x` 時間ごと**に 1 つの `.veg` バックアップを保存し、**過去 10 時間以内**のバックアップのみ保持。古いものは自動削除。
@ko   - `시간 백업`: **`x`시간마다** 1개의 `.veg` 백업을 저장하고, **지난 10시간 이내의 백업만 유지**합니다. 오래된 것은 자동 삭제됩니다.
@de   - `Stündliche Backups`: Speichert 1 `.veg`-Backup **alle `x` Stunden**, **behält nur Backups der letzten 10 Stunden**. Ältere löschen sich automatisch.
@fr   - `Sauvegardes par heure` : Sauvegarde 1 fichier `.veg` **toutes les `x` heures**, **ne gardant que les sauvegardes des dernières 10 heures**. Les sauvegardes plus anciennes sont supprimées automatiquement.
@ru   - `Резервные копии по часам (Hour backups)`: Сохраняет 1 резервную копию `.veg` **каждые `x` часов**, **сохраняя только резервные копии за последние 10 часов**. Старые удаляются автоматически.

@en   - `Daily backups`: Saves 1 `.veg` backup **when opening/closing VEGAS each day**. Keeps a maximum of `x` backups; oldest deleted when exceeded.
@zh   - `每日备份`：**每天打开/关闭 Vegas 时**自动存 1 个 `.veg` 备份，备份最大数量为 `x`，超过此数量时自动清理最旧的文件。
@zh-hant   - `每日備份`：**每天開啟/關閉 Vegas 時**自動存 1 個 `.veg` 備份，備份最大數量為 `x`，超過此數量時自動清理最舊的檔案。
@ja   - `毎日バックアップ`： **毎日 VEGAS を開く/閉じるとき**に 1 つの `.veg` バックアップを保存。最大 `x` バックアップを保持。超過時は最古を削除。
@ko   - `일별 백업`: **매일 VEGAS 열기/닫기 시** 1개의 `.veg` 백업을 저장합니다. 최대 `x`개의 백업을 유지합니다. 초과 시 가장 오래된 것이 삭제됩니다.
@de   - `Tägliche Backups`: Speichert 1 `.veg`-Backup **beim Öffnen/Schließen von VEGAS jeden Tag**. Behält maximal `x` Backups; älteste wird gelöscht, wenn überschritten.
@fr   - `Sauvegardes quotidiennes` : Sauvegarde 1 fichier `.veg` **à l'ouverture/fermeture de VEGAS chaque jour**. Garde un maximum de `x` sauvegardes ; la plus ancienne est supprimée lorsque dépassé.
@ru   - `Ежедневные резервные копии (Daily backups)`: Сохраняет 1 резервную копию `.veg` **при открытии/закрытии VEGAS каждый день**. Сохраняет максимум `x` резервных копий; самая старая удаляется при превышении.

@en   - `Live backups`: **Saves a backup after every operation** as a separate `.veg` file. Keeps a maximum of `x` backups; oldest deleted when exceeded. Like "Live Save", **can cause lag on large projects, NOT recommended**.
@zh   - `实时备份`：**每做一步就备份一步**，备份成单独的 `.veg` 文件，备份最大数量为 `x`，超过此数量时自动清理最旧的文件。跟“实时保存”相同，“实时备份”**可能会导致大工程很卡，不建议启用**。
@zh-hant   - `實時備份`：**每做一步就備份一步**，備份成單獨的 `.veg` 檔案，備份最大數量為 `x`，超過此數量時自動清理最舊的檔案。跟“實時儲存”相同，“實時備份”**可能會導致大工程很卡，不建議啟用**。
@ja   - `ライブバックアップ`： **操作ごとにバックアップ**を別の `.veg` ファイルとして保存。最大 `x` バックアップを保持。超過時は最古を削除。「ライブ保存」と同様、**大規模プロジェクトでは遅延を引き起こす可能性があり、お勧めしません**。
@ko   - `실시간 백업`: **모든 작업 후 별도의 `.veg` 파일로 백업**합니다. 최대 `x`개의 백업을 유지합니다. 초과 시 가장 오래된 것이 삭제됩니다. "실시간 저장"처럼 **대규모 프로젝트에서 지연을 유발할 수 있으므로 권장하지 않습니다**.
@de   - `Live-Backups`: **Speichert ein Backup nach jeder Operation** als separate `.veg`-Datei. Behält maximal `x` Backups; älteste wird gelöscht, wenn überschritten. Wie "Live-Speichern", **kann bei großen Projekten Verzögerungen verursachen, NICHT empfohlen**.
@fr   - `Sauvegardes en direct` : **Sauvegarde après chaque opération** en tant que fichier `.veg` séparé. Garde un maximum de `x` sauvegardes ; la plus ancienne est supprimée lorsque dépassé. Comme la "Sauvegarde en direct", **peut causer des ralentissements sur les grands projets, NON recommandé**.
@ru   - `Прямые резервные копии (Live backups)`: **Сохраняет резервную копию после каждой операции** как отдельный файл `.veg`. Сохраняет максимум `x` резервных копий; самая старая удаляется при превышении. Как и «Прямое сохранение», **может вызвать задержки в больших проектах, НЕ рекомендуется**.

@en Note: These backup tiers are **independent**.
@zh 注意，高级备份的这几个档位的备份文件是**相互独立**的。
@zh-hant 注意，高級備份的這幾個檔位的備份檔案是**相互獨立**的。
@ja 注：これらのバックアップ階層は**独立**しています。
@ko 참고: 이러한 백업 단계는 **독립적**입니다.
@de Hinweis: Diese Backup-Ebenen sind **unabhängig**.
@fr Note : Ces niveaux de sauvegarde sont **indépendants**.
@ru Примечание: Эти уровни резервного копирования **независимы**.

@en - `Minute backups` go to `MinorBackups` folder in the specified directory.
@zh - **`按分钟备份`** 会将文件存储在指定目录的 `MinorBackups` 文件夹。
@zh-hant - **`按分鐘備份`** 會將檔案儲存在指定目錄的 `MinorBackups` 資料夾。
@ja - `分単位バックアップ` は指定ディレクトリの `MinorBackups` フォルダに保存。
@ko - `분 백업`은 지정된 디렉토리의 `MinorBackups` 폴더로 이동합니다.
@de - `Minuten-Backups` gehen in `MinorBackups`-Ordner im angegebenen Verzeichnis.
@fr - `Sauvegardes par minute` vont dans le dossier `MinorBackups` dans le répertoire spécifié.
@ru - `Резервные копии по минутам` идут в папку `MinorBackups` в указанном каталоге.

@en - `Hour backups` go to `MajorBackups`.
@zh - `按小时备份` 会将文件存储在指定目录下的 `MajorBackups` 文件夹。
@zh-hant - `按小時備份` 會將檔案儲存在指定目錄下的 `MajorBackups` 資料夾。
@ja - `時間単位バックアップ` は `MajorBackups` に保存。
@ko - `시간 백업`은 `MajorBackups`로 이동합니다.
@de - `Stündliche Backups` gehen in `MajorBackups`.
@fr - `Sauvegardes par heure` vont dans `MajorBackups`.
@ru - `Резервные копии по часам` идут в `MajorBackups`.

@en - `Daily backups` go to `CriticalBackups`.
@zh - `每日备份` 会将文件存储在指定目录下的 `CriticalBackups` 文件夹。
@zh-hant - `每日備份` 會將檔案儲存在指定目錄下的 `CriticalBackups` 資料夾。
@ja - `毎日バックアップ` は `CriticalBackups` に保存。
@ko - `일별 백업`은 `CriticalBackups`로 이동합니다.
@de - `Tägliche Backups` gehen in `CriticalBackups`.
@fr - `Sauvegardes quotidiennes` vont dans `CriticalBackups`.
@ru - `Ежедневные резервные копии` идут в `CriticalBackups`.

@en - `Live backups` go to `RealtimeBackups`. Enabling `Live backups` disables other tiers.
@zh - `实时备份` 会将文件存储在指定目录下的 `RealtimeBackups` 文件夹。启用 `实时备份` 后无法再启用其他档位的功能。
@zh-hant - `實時備份` 會將檔案儲存在指定目錄下的 `RealtimeBackups` 資料夾。啟用 `實時備份` 後無法再啟用其他檔位的功能。
@ja - `ライブバックアップ` は `RealtimeBackups` に保存。 `ライブバックアップ` を有効にすると他の階層は無効。
@ko - `실시간 백업`은 `RealtimeBackups`로 이동합니다. `실시간 백업` 활성화 시 다른 단계는 비활성화됩니다.
@de - `Live-Backups` gehen in `RealtimeBackups`. Aktivieren von `Live-Backups` deaktiviert andere Ebenen.
@fr - `Sauvegardes en direct` vont dans `RealtimeBackups`. Activer `Sauvegardes en direct` désactive les autres niveaux.
@ru - `Прямые резервные копии` идут в `RealtimeBackups`. Включение `Прямых резервных копий` отключает другие уровни.

@en **Enabling `Advanced Backup` disables the default [5-minute auto-save](#_2-vegas-default-5-minute-auto-save) feature.**
@zh **启用 `高级备份` 后，会关闭 Vegas 默认的 [5min 自动保存](#_2-vegas-默认的-5-分钟自动保存文件)功能。**
@zh-hant **啟用 `高級備份` 後，會關閉 Vegas 預設的 [5min 自動儲存](#_2-vegas-預設的-5-分鐘自動儲存檔案)功能。**
@ja **`高度なバックアップ` を有効にすると、デフォルトの [5 分自動保存](#_2-vegas-のデフォルト-5-分自動保存) 機能が無効になります。**
@ko **`고급 백업` 활성화는 기본 [5분 자동 저장](#_2-vegas-기본-5분-자동-저장) 기능을 비활성화합니다.**
@de **Aktivieren von `Erweitertes Backup` deaktiviert die standardmäßige [5-Minuten Auto-Speicher](#_2-vegas-standard-5-minuten-auto-speichern)-Funktion.**
@fr **Activer `Sauvegarde avancée` désactive la fonctionnalité de [sauvegarde automatique de 5 minutes](#_2-sauvegarde-automatique-par-défaut-de-5-minutes-de-vegas) par défaut.**
@ru **Включение `Расширенного резервного копирования` отключает функцию [автосохранения каждые 5 минут](#_2-автосохранение-по-умолчанию-в-vegas-каждые-5-минут) по умолчанию.**

@en For other questions, click the **question mark in the top-right of the Advanced Save window for help documentation**.
@zh 如有其他问题，可以点击 **`高级保存` 窗口右上角的问号，自己查帮助文档**。
@zh-hant 如有其他問題，可以點選 **`高級儲存` 視窗右上角的問號，自己查幫助文件**。
@ja 他の質問がある場合は、**高度な保存ウィンドウ右上の疑問符をクリックしてヘルプドキュメントを参照**。
@ko 다른 질문이 있으면 **고급 저장 창 오른쪽 상단의 물음표를 클릭하여 도움말 문서를 확인**하십시오.
@de Für andere Fragen klicken Sie auf das **Fragezeichen oben rechts im Erweitertes Speichern-Fenster für Hilfedokumentation**.
@fr Pour d'autres questions, cliquez sur le **point d'interrogation en haut à droite de la fenêtre Sauvegarde avancée pour la documentation d'aide**.
@ru По другим вопросам нажмите **знак вопроса в правом верхнем углу окна «Расширенное сохранение» для справки**.

<br>

@en ### 4. Use Incremental Save (VP18+)
@zh ### 4. 使用增量保存（vv18 及以上）
@zh-hant ### 4. 使用增量儲存（vv18 及以上）
@ja ### 4. インクリメンタル保存を使用 (VP18+)
@ko ### 4. 증분 저장 사용 (VP18+)
@de ### 4. Inkrementelles Speichern verwenden (VP18+)
@fr ### 4. Utiliser la sauvegarde incrémentielle (VP18+)
@ru ### 4. Использовать инкрементное сохранение (VP18+)

@en Incremental Save, available since VP18, shortcut **`Ctrl + Alt + S`**. Similar to "Save As" but more convenient; **automatically saves as a new file with an incremental number**, not overwriting the original. You can remap the shortcut via `Options -> Customize Keyboard`.
@zh 增量保存功能是从 vv18 开始有的，快捷键是**`Ctrl + Alt + S`**。有点类似于另存为，但是比另存为方便，会**自动按照序号另存为新的文件**，而不覆盖掉原始工程文件。快捷键不习惯的话，也可以到上边**选项-自定义键盘**，修改成你想要的快捷键。默认的快捷键和 QQ 自带的录屏冲突。
@zh-hant 增量儲存功能是從 vv18 開始有的，快捷鍵是**`Ctrl + Alt + S`**。有點類似於另存為，但是比另存為方便，會**自動按照序號另存為新的檔案**，而不覆蓋掉原始工程檔案。快捷鍵不習慣的話，也可以到上邊**選項-自定義鍵盤**，修改成你想要的快捷鍵。預設的快捷鍵和 QQ 自帶的錄屏衝突。
@ja インクリメンタル保存は VP18 から利用可能で、ショートカット **`Ctrl + Alt + S`**。「名前を付けて保存」に似ていますが、より便利で、**元を上書きせずにインクリメンタル番号で新しいファイルとして自動保存**。ショートカットは `オプション -> キーボードのカスタマイズ` で再マップできます。
@ko VP18부터 제공되는 증분 저장, 단축키 **`Ctrl + Alt + S`**. 다른 이름으로 저장과 유사하지만 더 편리합니다. **자동으로 증분 번호가 있는 새 파일로 저장**하여 원본을 덮어쓰지 않습니다. `옵션 -> 키보드 사용자 정의`를 통해 단축키를 다시 매핑할 수 있습니다.
@de Inkrementelles Speichern, verfügbar seit VP18, Tastenkombination **`Strg + Alt + S`**. Ähnlich wie "Speichern unter", aber bequemer; **speichert automatisch als neue Datei mit einer Inkrementnummer**, überschreibt das Original nicht. Sie können die Tastenkombination über `Optionen -> Tastatur anpassen` neu zuweisen.
@fr Sauvegarde incrémentielle, disponible depuis VP18, raccourci **`Ctrl + Alt + S`**. Similaire à "Enregistrer sous" mais plus pratique ; **sauvegarde automatiquement en tant que nouveau fichier avec un numéro incrémentiel**, n'écrasant pas l'original. Vous pouvez remapper le raccourci via `Options -> Personnaliser le clavier`.
@ru Инкрементное сохранение доступно с VP18, сочетание клавиш **`Ctrl + Alt + S`**. Похоже на «Сохранить как», но удобнее; **автоматически сохраняет как новый файл с инкрементным номером**, не перезаписывая оригинал. Вы можете переназначить сочетание клавиш через `Опции -> Настроить клавиатуру (Options -> Customize Keyboard)`.

<br>

@en ### ~~5. Manually backup project files periodically~~
@zh ### ~~5. 自己时不时地手动备份工程文件~~
@zh-hant ### ~~5. 自己時不時地手動備份工程檔案~~
@ja ### ~~5. 定期的に手動でプロジェクトファイルをバックアップ~~
@ko ### ~~5. 주기적으로 프로젝트 파일을 수동으로 백업~~ 
@de ### ~~5. Manuelles periodisches Backup von Projektdateien~~
@fr ### ~~5. Sauvegarder manuellement périodiquement les fichiers de projet~~
@ru ### ~~5. Периодически вручную создавать резервные копии файлов проектов~~

<br>

@en ## XIV. Downgrading Project Versions
@zh ## 十四、工程版本的降级
@zh-hant ## 十四、工程版本的降級
@ja ## 十四、プロジェクトバージョンのダウングレード
@ko ## XIV. 프로젝트 버전 다운그레이드
@de ## XIV. Downgraden von Projektversionen
@fr ## XIV. Rétrogradation des versions de projet
@ru ## XIV. Понижение версий проектов

@en Normally, newer VEGAS can open older project files with good compatibility. Older VEGAS cannot open newer project files. This section provides methods to downgrade project versions.
@zh 正常来说，高版本的 Vegas 是能直接打开低版本的工程文件的，并且兼容性很好；而低版本却没法直接打开高版本的工程文件。本章将提供降级工程版本的几种办法。
@zh-hant 正常來說，高版本的 Vegas 是能直接開啟低版本的工程檔案的，並且相容性很好；而低版本卻沒法直接開啟高版本的工程檔案。本章將提供降級工程版本的幾種辦法。
@ja 通常、新しい VEGAS は古いプロジェクトファイルを良好な互換性で開けます。古い VEGAS は新しいプロジェクトファイルを開けません。このセクションはプロジェクトバージョンをダウングレードする方法を提供します。
@ko 일반적으로 새 VEGAS는 이전 프로젝트 파일을 호환성 있게 열 수 있습니다. 이전 VEGAS는 새 프로젝트 파일을 열 수 없습니다. 이 섹션은 프로젝트 버전을 다운그레이드하는 방법을 제공합니다.
@de Normalerweise können neuere VEGAS ältere Projektdateien mit guter Kompatibilität öffnen. Ältere VEGAS können neuere Projektdateien nicht öffnen. Dieser Abschnitt bietet Methoden zum Downgraden von Projektversionen.
@fr Normalement, les nouvelles VEGAS peuvent ouvrir d'anciens fichiers de projet avec une bonne compatibilité. Les anciennes VEGAS ne peuvent pas ouvrir de nouveaux fichiers de projet. Cette section fournit des méthodes pour rétrograder les versions de projet.
@ru Обычно новые VEGAS могут открывать старые файлы проектов с хорошей совместимостью. Старые VEGAS не могут открывать новые файлы проектов. Этот раздел предоставляет методы понижения версий проектов.

<br>

@en ### 1. VEGAS Project File Version Downgrade Tool
@zh ### 1. Vegas 工程文件版本降级工具
@zh-hant ### 1. Vegas 工程檔案版本降級工具
@ja ### 1. VEGAS プロジェクトファイルバージョンダウングレードツール
@ko ### 1. VEGAS 프로젝트 파일 버전 다운그레이드 도구
@de ### 1. VEGAS-Projektdatei-Version-Downgrade-Tool
@fr ### 1. Outil de rétrogradation de version de fichier de projet VEGAS
@ru ### 1. Инструмент понижения версии файлов проектов VEGAS

<ImageOnDemand src="vegtips/image039_msvpvf.png" />

@en Original project link: https://sr.ht/~mrpapersonic/msvpvf/
@zh 该工具原项目链接：https://sr.ht/~mrpapersonic/msvpvf/
@zh-hant 該工具原項目連結：https://sr.ht/~mrpapersonic/msvpvf/
@ja オリジナルプロジェクトリンク： https://sr.ht/~mrpapersonic/msvpvf/
@ko 원본 프로젝트 링크: https://sr.ht/~mrpapersonic/msvpvf/
@de Original-Projektlink: https://sr.ht/~mrpapersonic/msvpvf/
@fr Lien du projet original : https://sr.ht/~mrpapersonic/msvpvf/
@ru Ссылка на исходный проект: https://sr.ht/~mrpapersonic/msvpvf/

@en This tool modifies the version identifier inside the project file to downgrade it. However, it doesn't adjust the project's structure. Therefore, even if the version identifier is lowered, the file will often show as corrupted and fail to open. The author introduces the concept of "generations", suggesting downgrade compatibility only exists within the same generation: VEGAS projects cannot be downgraded across generations, only within the same generation. Based on the author's concept and my testing, generation boundaries are roughly: `8 - 11 | 12 - 14 | 15 - 16 | 17 | 18 | 19 - 21 build 208 | 21 build 300 - 22 | 23`. <small>(Differences between minor build numbers can create further splits, so this is approximate.)</small> The middle range is quite fragmented, making this tool of limited practical use, though it works for specific version pairs.
@zh 通过此工具，可以修改工程文件内的版本标识，来达到降版本的目的。但是，此工具并没有对工程文件的结构做出任何调整更改，因此即使能够把工程文件的版本标识降下来，大多数情况下也会显示文件损坏，无法正常打开。原作者在此处引入一个代的概念，认为只有同代之内的 Vegas 工程文件版本才存在降级兼容性：Vegas 工程文件无法跨代降级，只能在同代版本之间进行降级。根据原作者提供的“代”的概念，结合我测试下来的结果，各代的分界线大概是这样：`8 - 11 | 12 - 14 | 15 - 16 | 17 | 18 | 19 - 21 build 208 | 21 build 300 - 22 | 23`。<small>（由于各版本的不同小版本号仍有差别，甚至会出现断点在某两小版本号之间的情况，因此测试结果不一定准确。）</small>可以看到中间一大段实在是太散了，因此实用性较低，但针对某些特定版本确实能够正常使用。
@zh-hant 通過此工具，可以修改工程檔案內的版本標識，來達到降版本的目的。但是，此工具並沒有對工程檔案的結構做出任何調整更改，因此即使能夠把工程檔案的版本標識降下來，大多數情況下也會顯示檔案損壞，無法正常開啟。原作者在此處引入一個代的概念，認為只有同代之內的 Vegas 工程檔案版本才存在降級相容性：Vegas 工程檔案無法跨代降級，只能在同代版本之間進行降級。根據原作者提供的“代”的概念，結合我測試下來的結果，各代的分界線大概是這樣：`8 - 11 | 12 - 14 | 15 - 16 | 17 | 18 | 19 - 21 build 208 | 21 build 300 - 22 | 23`。<small>（由於各版本的不同小版本號仍有差別，甚至會出現斷點在某兩小版本號之間的情況，因此測試結果不一定準確。）</small>可以看到中間一大段實在是太散了，因此實用性較低，但針對某些特定版本確實能夠正常使用。
@ja このツールはプロジェクトファイル内のバージョン識別子を変更してダウングレードします。しかし、プロジェクト構造を調整しません。そのため、バージョン識別子が下がっても、多くの場合破損として表示され、開けません。作者は「世代」の概念を導入し、ダウングレード互換性は同じ世代内のみ：VEGAS プロジェクトは世代を超えてダウングレードできず、同じ世代内のみ。作者の概念と私のテストに基づき、世代の境界はおおよそ： `8 - 11 | 12 - 14 | 15 - 16 | 17 | 18 | 19 - 21 build 208 | 21 build 300 - 22 | 23`。<small>（マイナービルド番号の違いによりさらに分割されるため、これは近似です。）</small>中間範囲は非常に断片的で、このツールの実用性は限定的ですが、特定のバージョンペアでは機能します。
@ko 이 도구는 프로젝트 파일 내부의 버전 식별자를 수정하여 다운그레이드합니다. 그러나 프로젝트 구조를 조정하지는 않습니다. 따라서 버전 식별자가 낮아져도 파일이 종종 손상된 것으로 표시되어 열리지 않습니다. 저자는 "세대" 개념을 소개하며, 다운그레이드 호환성은 동일 세대 내에만 존재한다고 제안합니다: VEGAS 프로젝트는 세대 간에 다운그레이드될 수 없으며, 동일 세대 내에서만 가능합니다. 저자의 개념과 제 테스트에 따르면, 세대 경계는 대략 다음과 같습니다: `8 - 11 | 12 - 14 | 15 - 16 | 17 | 18 | 19 - 21 build 208 | 21 build 300 - 22 | 23`. <small>(사소한 빌드 번호 차이는 더 많은 분할을 만들 수 있으므로 이는 근사치입니다.)</small> 중간 범위는 상당히 파편화되어 이 도구의 실용성이 제한적이지만, 특정 버전 쌍에 대해서는 작동합니다.
@de Dieses Tool ändert die Versionskennung innerhalb der Projektdatei, um sie zu downgraden. Es passt jedoch die Struktur des Projekts nicht an. Daher wird die Datei oft als beschädigt angezeigt und kann nicht geöffnet werden, selbst wenn die Versionskennung gesenkt wurde. Der Autor führt das Konzept der "Generationen" ein, schlägt vor, dass Downgrade-Kompatibilität nur innerhalb derselben Generation existiert: VEGAS-Projekte können nicht generationsübergreifend downgradet werden, nur innerhalb derselben Generation. Basierend auf dem Konzept des Autors und meinen Tests sind die Generationsgrenzen ungefähr: `8 - 11 | 12 - 14 | 15 - 16 | 17 | 18 | 19 - 21 Build 208 | 21 Build 300 - 22 | 23`. <small>(Unterschiede zwischen kleinen Build-Nummern können weitere Aufspaltungen verursachen, daher ist dies ungefähr.)</small> Der mittlere Bereich ist ziemlich fragmentiert, was den praktischen Nutzen dieses Tools begrenzt, obwohl es für spezifische Versionenpaare funktioniert.
@fr Cet outil modifie l'identifiant de version à l'intérieur du fichier de projet pour le rétrograder. Cependant, il n'ajuste pas la structure du projet. Par conséquent, même si l'identifiant de version est abaissé, le fichier montrera souvent comme corrompu et échouera à l'ouverture. L'auteur introduit le concept de "générations", suggérant que la compatibilité de rétrogradation n'existe qu'au sein de la même génération : les projets VEGAS ne peuvent pas être rétrogradés à travers les générations, seulement au sein de la même génération. Basé sur le concept de l'auteur et mes tests, les limites de génération sont grossièrement : `8 - 11 | 12 - 14 | 15 - 16 | 17 | 18 | 19 - 21 build 208 | 21 build 300 - 22 | 23`. <small>(Les différences entre les numéros de build mineurs peuvent créer d'autres divisions, donc c'est approximatif.)</small> La plage du milieu est assez fragmentée, rendant cet outil d'utilité pratique limitée, bien qu'il fonctionne pour des paires de versions spécifiques.
@ru Этот инструмент изменяет идентификатор версии внутри файла проекта, чтобы понизить ее. Однако он не корректирует структуру проекта. Поэтому даже если идентификатор версии понижен, файл часто будет отображаться как поврежденный и не откроется. Автор вводит концепцию «поколений», предполагая, что совместимость понижения существует только внутри одного поколения: проекты VEGAS не могут быть понижены между поколениями, только внутри одного поколения. Основываясь на концепции автора и моем тестировании, границы поколений примерно: `8 - 11 | 12 - 14 | 15 - 16 | 17 | 18 | 19 - 21 build 208 | 21 build 300 - 22 | 23`. <small>(Различия между номерами минорных сборок могут создавать дальнейшие разрывы, поэтому это приблизительно.)</small> Средний диапазон довольно фрагментирован, что делает этот инструмент ограниченным в практическом применении, хотя он работает для определенных пар версий.

@en **VEGAS Project File Version Downgrade Tool** compiled by me download link: https://github.com/zzzzzz9125/msvpvf/releases/
@zh 我自己汉化、编译的【Vegas 工程文件版本降级工具】下载链接：https://github.com/zzzzzz9125/msvpvf/releases/
@zh-hant 我自己漢化、編譯的【Vegas 工程檔案版本降級工具】下載連結：https://github.com/zzzzzz9125/msvpvf/releases/
@ja 私がローカライズ/コンパイルした **VEGAS プロジェクトファイルバージョンダウングレードツール** ダウンロード： https://github.com/zzzzzz9125/msvpvf/releases/
@ko 제가 컴파일한 **VEGAS 프로젝트 파일 버전 다운그레이드 도구** 다운로드: https://github.com/zzzzzz9125/msvpvf/releases/
@de **VEGAS-Projektdatei-Version-Downgrade-Tool** kompiliert von mir Download-Link: https://github.com/zzzzzz9125/msvpvf/releases/
@fr **Outil de rétrogradation de version de fichier de projet VEGAS** compilé par moi lien de téléchargement : https://github.com/zzzzzz9125/msvpvf/releases/
@ru **Инструмент понижения версии файлов проектов VEGAS**, скомпилированный мной, ссылка для скачивания: https://github.com/zzzzzz9125/msvpvf/releases/

@en The following methods aren't true version downgrades but transfer project content.
@zh 下面两种办法就不是真正意义上的工程版本降级了，而是工程里内容的转移。
@zh-hant 下面兩種辦法就不是真正意義上的工程版本降級了，而是工程裡內容的轉移。
@ja 以下の方法は真のバージョンダウングレードではなく、プロジェクトコンテンツの転送です。
@ko 다음 방법은 진정한 버전 다운그레이드가 아니라 프로젝트 내용 전송입니다.
@de Die folgenden Methoden sind keine echten Versionsdowngrades, sondern übertragen Projektinhalte.
@fr Les méthodes suivantes ne sont pas de vraies rétrogradations de version mais transfèrent le contenu du projet.
@ru Следующие методы не являются истинным понижением версий, а переносом содержимого проекта.

<br>

@en ### 2. Cross-Version Copy-Paste Method
@zh ### 2. 跨版本复制粘贴法
@zh-hant ### 2. 跨版本複製貼上法
@ja ### 2. クロスバージョンコピー＆ペースト法
@ko ### 2. 버전 간 복사-붙여넣기 방법
@de ### 2. Versionsübergreifende Kopieren-Einfügen-Methode
@fr ### 2. Méthode copier-coller inter-versions
@ru ### 2. Метод копирования-вставки между версиями

@en VEGAS supports multiple instances. You can copy-paste events between projects in different instances. This can be used to copy-paste content across VEGAS versions by running multiple versions.
@zh Vegas 本身是支持软件多开的，软件多开以后可以将事件跨工程复制粘贴过去，因此甚至可以借用这个功能，多开几个不同版本的 Vegas，达到跨版本复制粘贴的效果。
@zh-hant Vegas 本身是支援軟體多開的，軟體多開以後可以將事件跨工程複製貼上過去，因此甚至可以借用這個功能，多開幾個不同版本的 Vegas，達到跨版本複製貼上的效果。
@ja VEGAS は複数インスタンスをサポート。異なるインスタンスのプロジェクト間でイベントをコピー＆ペーストできます。これにより、複数のバージョンを実行してクロスバージョンコピー＆ペーストが可能です。
@ko VEGAS는 여러 인스턴스를 지원합니다. 다른 인스턴스의 프로젝트 간에 이벤트를 복사-붙여넣기할 수 있습니다. 여러 버전을 실행하여 VEGAS 버전 간에 내용을 복사-붙여넣기하는 데 사용할 수 있습니다.
@de VEGAS unterstützt mehrere Instanzen. Sie können Events zwischen Projekten in verschiedenen Instanzen kopieren-einfügen. Dies kann verwendet werden, um Inhalte über VEGAS-Versionen hinweg zu kopieren-einfügen, indem mehrere Versionen ausgeführt werden.
@fr VEGAS supporte plusieurs instances. Vous pouvez copier-coller des événements entre projets dans différentes instances. Cela peut être utilisé pour copier-coller du contenu à travers des versions VEGAS en exécutant plusieurs versions.
@ru VEGAS поддерживает несколько экземпляров. Вы можете копировать-вставлять события между проектами в разных экземплярах. Это можно использовать для копирования-вставки содержимого между версиями VEGAS, запуская несколько версий.

@en This method works across a wider range than the tool above but only copies **events**, not entire tracks with their properties.
@zh 该办法的适用版本范围比上面那个更广泛一些，但是只支持事件的复制粘贴，不支持轨道本身的复制粘贴。
@zh-hant 該辦法的適用版本範圍比上面那個更廣泛一些，但是只支援事件的複製貼上，不支援軌道本身的複製貼上。
@ja この方法は上記ツールより広い範囲で機能しますが、**イベント**のみコピーし、トラック全体とそのプロパティはコピーしません。
@ko 이 방법은 위 도구보다 더 넓은 범위에서 작동하지만 **이벤트**만 복사하며 전체 트랙과 해당 속성은 복사하지 않습니다.
@de Diese Methode funktioniert über einen größeren Bereich als das Tool oben, kopiert jedoch nur **Events**, nicht ganze Spuren mit ihren Eigenschaften.
@fr Cette méthode fonctionne sur une plage plus large que l'outil ci-dessus mais ne copie que les **événements**, pas des pistes entières avec leurs propriétés.
@ru Этот метод работает в более широком диапазоне, чем инструмент выше, но копирует только **события**, а не целые дорожки с их свойствами.

<br>

@en ### 3. Cross-Version Plugin Chain Method
@zh ### 3. 跨版本插件链法
@zh-hant ### 3. 跨版本外掛程式鏈法
@ja ### 3. クロスバージョンプラグインチェーン法
@ko ### 3. 버전 간 플러그인 체인 방법
@de ### 3. Versionsübergreifende Plugin-Ketten-Methode
@fr ### 3. Méthode chaîne de plugin inter-versions
@ru ### 3. Метод цепочек плагинов между версиями

@en See [Using, Importing, and Exporting VEGAS Plugin Chain Presets](#using-importing-and-exporting-vegas-plugin-chain-presets) in Chapter II. By saving plugin chains, you can transfer audio/video FX chains from one project/version to another. Plugin chains support FX on various positions but cannot be batch-applied; must be saved/loaded individually per chain. Often used with Method 2: Method 2 transfers events, Method 3 transfers track FX.
@zh 插件链功能介绍见第二章的 [Vegas 插件链预设的使用、导入和导出](#vegas-插件链预设的使用、导入和导出)。我们可以通过保存插件链的形式，实现工程内音视频 FX 的插件链的迁移。插件链支持各种位置的音视频 FX，但无法在工程内批量完成，只能逐条手动保存再读取。一般可以和办法 2 结合着用，办法 2 用于转移事件，办法 3 用于转移轨道 FX。
@zh-hant 外掛程式鏈功能介紹見第二章的 [Vegas 外掛程式鏈預設的使用、匯入和匯出](#vegas-外掛程式鏈預設的使用、匯入和匯出)。我們可以通過儲存外掛程式鏈的形式，實現工程內音影片 FX 的外掛程式鏈的遷移。外掛程式鏈支援各種位置的音影片 FX，但無法在工程內批次完成，只能逐條手動儲存再讀取。一般可以和辦法 2 結合著用，辦法 2 用於轉移事件，辦法 3 用於轉移軌道 FX。
@ja 第二章の [VEGAS プラグインチェーンプリセットの使用、インポート、エクスポート](#vegas-プラグインチェーンプリセットの使用、インポート、エクスポート) 参照。プラグインチェーンを保存することで、あるプロジェクト/バージョンから別のプロジェクト/バージョンにオーディオ/ビデオ FX チェーンを転送できます。プラグインチェーンは様々な位置の FX をサポートしますが、一括適用はできず、チェーンごとに保存/ロードする必要があります。しばしば方法 2 と組み合わせ：方法 2 はイベント転送、方法 3 はトラック FX 転送。
@ko 2장의 [VEGAS 플러그인 체인 프리셋 사용, 가져오기 및 내보내기](#vegas-플러그인-체인-프리셋-사용-가져오기-및-내보내기)를 참조하십시오. 플러그인 체인을 저장하여 한 프로젝트/버전에서 다른 프로젝트/버전으로 오디오/비디오 FX 체인을 전송할 수 있습니다. 플러그인 체인은 다양한 위치의 FX를 지원하지만 일괄 적용할 수 없습니다. 체인마다 개별적으로 저장/로드해야 합니다. 종종 방법 2와 함께 사용됩니다: 방법 2는 이벤트를 전송하고, 방법 3은 트랙 FX를 전송합니다.
@de Siehe [Verwenden, Importieren und Exportieren von VEGAS-Plugin-Ketten-Voreinstellungen](#verwenden-importieren-und-exportieren-von-vegas-plugin-ketten-voreinstellungen) in Kapitel II. Durch Speichern von Plugin-Ketten können Sie Audio/Video-FX-Ketten von einem Projekt/einer Version auf eine andere übertragen. Plugin-Ketten unterstützen FX an verschiedenen Positionen, können jedoch nicht stapelweise angewendet werden; müssen pro Kette einzeln gespeichert/geladen werden. Oft verwendet mit Methode 2: Methode 2 überträgt Events, Methode 3 überträgt Spur-FX.
@fr Voir [Utilisation, importation et exportation des préréglages de chaînes de plugins VEGAS](#utilisation-importation-et-exportation-des-préréglages-de-chaînes-de-plugins-vegas) au chapitre II. En sauvegardant des chaînes de plugins, vous pouvez transférer des chaînes de FX audio/vidéo d'un projet/version à un autre. Les chaînes de plugins supportent des FX sur diverses positions mais ne peuvent pas être appliquées en lot ; doivent être sauvegardées/chargées individuellement par chaîne. Souvent utilisée avec la Méthode 2 : Méthode 2 transfère les événements, Méthode 3 transfère les FX de piste.
@ru См. [Использование, импорт и экспорт пресетов цепочек плагинов VEGAS](#использование-импорт-и-экспорт-пресетов-цепочек-плагинов-vegas) в Главе II. Сохраняя цепочки плагинов, вы можете переносить цепочки аудио/видео FX из одного проекта/версии в другой. Цепочки плагинов поддерживают FX на различных позициях, но не могут применяться пакетно; должны сохраняться/загружаться индивидуально для каждой цепочки. Часто используется с Методом 2: Метод 2 переносит события, Метод 3 переносит FX дорожек.

@en Version downgrading inevitably causes compatibility issues, mainly in two areas:
@zh 版本降级肯定会带来一些不可避免的兼容性问题，一般有这两个方面：
@zh-hant 版本降級肯定會帶來一些不可避免的相容性問題，一般有這兩個方面：
@ja バージョンダウングレードは必然的に互換性問題を引き起こします。主に 2 つの分野：
@ko 버전 다운그레이드는 불가피하게 호환성 문제를 일으키며, 주로 두 가지 영역에서 발생합니다:
@de Versionsdowngrading verursacht unweigerlich Kompatibilitätsprobleme, hauptsächlich in zwei Bereichen:
@fr La rétrogradation de version cause inévitablement des problèmes de compatibilité, principalement dans deux domaines :
@ru Понижение версий неизбежно вызывает проблемы совместимости, в основном в двух областях:

@en - **New features.** For example, VP21's "Adjustment Events" become empty events in older versions; VP20's updated VST engine makes its VST FX unrecognizable in older versions, etc.
@zh - 更新的新功能。比如 21 的调整事件，降级到低版本以后会变成空白事件；20 升级了 VST 引擎，20 及以后的工程内的所有 VST 效果，降级到低版本以后也无法正常识别，等等情况。
@zh-hant - 更新的新功能。比如 21 的調整事件，降級到低版本以後會變成空白事件；20 升級了 VST 引擎，20 及以後的工程內的所有 VST 效果，降級到低版本以後也無法正常識別，等等情況。
@ja - **新機能。** 例：VP21 の「調整イベント」は古いバージョンで空イベントに。VP20 の更新された VST エンジンは、その VST FX が古いバージョンで認識されない、など。
@ko - **새로운 기능.** 예: VP21의 "조정 이벤트"는 이전 버전에서 빈 이벤트가 됩니다. VP20의 업데이트된 VST 엔진은 해당 VST FX를 이전 버전에서 인식할 수 없게 만듭니다.
@de - **Neue Funktionen.** Zum Beispiel werden VP21's "Anpassungs-Events" zu leeren Events in älteren Versionen; VP20's aktualisierte VST-Engine macht seine VST-FX in älteren Versionen unerkennbar, usw.
@fr - **Nouvelles fonctionnalités.** Par exemple, les "Événements d'ajustement" de VP21 deviennent des événements vides dans les anciennes versions ; le moteur VST mis à jour de VP20 rend ses FX VST méconnaissables dans les anciennes versions, etc.
@ru - **Новые функции.** Например, «События регулировки (Adjustment Events)» VP21 становятся пустыми событиями в старых версиях; обновленный движок VST в VP20 делает его VST FX нераспознаваемыми в старых версиях и т.д.

@en - **Internal API or GUID changes.** For example, VP13 (Sony) and VP14 (MAGIX) are a dividing line; they can't cross-copy-paste. VP17 changed the GUID prefix for all built-in OFX from `sonycreativesoftware` to `vegascreativesoftware`, making those FX unrecognizable in older versions.
@zh - 内部 API 或者 GUID 变化。比如 13 和 14 之间就是一个分界线，前者是 Sony 的，后者是 Magix 的，两者无法跨工程复制粘贴。又比如 17 将所有自带的 OFX 效果的 GUID 从 `sonycreativesoftware` 改成了 `vegascreativesoftware`，因此涉及到改动的效果带到低版本中也通通无法正常识别。
@zh-hant - 內部 API 或者 GUID 變化。比如 vv13 和 vv14 之間就是一個分界線，前者是 Sony 的，後者是 Magix 的，兩者無法跨工程複製貼上。又比如 vv17 將所有自帶的 OFX 效果的 GUID 從 `sonycreativesoftware` 改成了 `vegascreativesoftware`，因此涉及到改動的效果帶到低版本中也通通無法正常識別。
@ja - **内部 API または GUID 変更。** 例：VP13（Sony）と VP14（MAGIX）は分岐点。相互コピー＆ペーストできません。VP17 はすべての組み込み OFX の GUID 接頭辞を `sonycreativesoftware` から `vegascreativesoftware` に変更し、それらの FX が古いバージョンで認識されなくなります。
@ko - **내부 API 또는 GUID 변경.** 예: VP13(Sony)과 VP14(MAGIX)는 분기점입니다. 서로 복사-붙여넣기할 수 없습니다. VP17은 모든 내장 OFX의 GUID 접두사를 `sonycreativesoftware`에서 `vegascreativesoftware`로 변경하여 해당 FX를 이전 버전에서 인식할 수 없게 만듭니다.
@de - **Interne API- oder GUID-Änderungen.** Zum Beispiel sind VP13 (Sony) und VP14 (MAGIX) eine Trennlinie; sie können nicht versionsübergreifend kopiert-eingefügt werden. VP17 änderte das GUID-Präfix für alle eingebauten OFX von `sonycreativesoftware` zu `vegascreativesoftware`, macht diese FX in älteren Versionen unerkennbar.
@fr - **Changements d'API interne ou de GUID.** Par exemple, VP13 (Sony) et VP14 (MAGIX) sont une ligne de démarcation ; ils ne peuvent pas copier-coller à travers. VP17 a changé le préfixe GUID pour tous les OFX intégrés de `sonycreativesoftware` à `vegascreativesoftware`, rendant ces FX méconnaissables dans les anciennes versions.
@ru - **Изменения внутреннего API или GUID.** Например, VP13 (Sony) и VP14 (MAGIX) — это разделительная линия; они не могут копировать-вставлять между собой. VP17 изменил префикс GUID для всех встроенных OFX с `sonycreativesoftware` на `vegascreativesoftware`, делая эти FX нераспознаваемыми в старых версиях.

@en Version upgrades generally don't have these issues.
@zh 版本升级则基本不会发生上述情况。
@zh-hant 版本升級則基本不會發生上述情況。
@ja バージョンアップグレードは一般的にこれらの問題はありません。
@ko 버전 업그레이드는 일반적으로 이러한 문제가 없습니다.
@de Versions-Upgrades haben diese Probleme im Allgemeinen nicht.
@fr Les mises à niveau de version n'ont généralement pas ces problèmes.
@ru Обновление версий обычно не имеет этих проблем.

<br>

@en ## XV. Other Q&A
@zh ## 十五、其他 Q&A
@zh-hant ## 十五、其他 Q&A
@ja ## 十五、その他 Q&A
@ko ## XV. 기타 Q&A
@de ## XV. Andere Q&A
@fr ## XV. Autres FAQ
@ru ## XV. Другие вопросы и ответы

@en Q: VEGAS generates a **`.sfk` file** next to imported media. Any way to **hide it**?
@zh Q：Vegas 导入媒体文件后会在旁边生成一个 **`.sfk` 文件**，有没有什么办法**隐藏掉**？
@zh-hant Q：Vegas 匯入媒體檔案後會在旁邊生成一個 **`.sfk` 檔案**，有沒有什麼辦法**隱藏掉**？
@ja Q: VEGAS がインポートしたメディアの横に **`.sfk` ファイル**を生成します。**隠す**方法は？
@ko Q: VEGAS가 가져온 미디어 옆에 **`.sfk` 파일**을 생성합니다. **숨기는** 방법이 있습니까?
@de F: VEGAS erzeugt eine **`.sfk`-Datei** neben importierten Medien. Gibt es eine Möglichkeit, sie **auszublenden**?
@fr Q : VEGAS génère un fichier **`.sfk`** à côté du média importé. Un moyen de **le masquer** ?
@ru В: VEGAS генерирует файл **`.sfk`** рядом с импортированным медиа. Есть ли способ **скрыть его**?

@en A:
@zh A：
@zh-hant A：
@ja A:
@ko A:
@de A:
@fr R :
@ru О:

@en - **Old versions**: No. `.sfk` is the audio peak file. VEGAS has **no setting** to store `.sfk` files elsewhere; they must be beside the media file. Deleting manually causes regeneration when reopening the project.  
@zh - **旧版**：没有。`.sfk` 是音频峰值文件，Vegas 内**没有任何设置**可以使 `.sfk` 文件隐藏到其他地方去，只能放媒体文件旁边。手动删除后，重新打开这个工程时，仍然会重新生成。  
@zh-hant - **舊版**：沒有。`.sfk` 是音訊峰值檔案，Vegas 內**沒有任何設定**可以使 `.sfk` 檔案隱藏到其他地方去，只能放媒體檔案旁邊。手動刪除後，重新開啟這個工程時，仍然會重新生成。  
@ja - **旧バージョン**：なし。 `.sfk` はオーディオピークファイル。VEGAS には `.sfk` ファイルを他の場所に保存する**設定はありません**。メディアファイルの横にある必要があります。手動削除すると、プロジェクトを再度開いたときに再生成されます。  
@ko - **이전 버전**: 없음. `.sfk`는 오디오 피크 파일입니다. VEGAS에는 `.sfk` 파일을 다른 곳에 저장하는 **설정이 없습니다**. 미디어 파일 옆에 있어야 합니다. 수동으로 삭제하면 프로젝트를 다시 열 때 재생성됩니다.  
@de - **Alte Versionen**: Nein. `.sfk` ist die Audio-Peak-Datei. VEGAS hat **keine Einstellung**, `.sfk`-Dateien anderswo zu speichern; sie müssen neben der Mediendatei sein. Manuelles Löschen verursacht Regeneration beim erneuten Öffnen des Projekts.  
@fr - **Anciennes versions** : Non. `.sfk` est le fichier de pic audio. VEGAS n'a **aucun paramètre** pour stocker les fichiers `.sfk` ailleurs ; ils doivent être à côté du fichier média. Supprimer manuellement provoque une régénération à la réouverture du projet.  
@ru - **Старые версии**: Нет. `.sfk` — файл пиковых значений аудио. В VEGAS **нет настройки** для хранения файлов `.sfk` в другом месте; они должны быть рядом с медиафайлом. Удаление вручную вызывает повторную генерацию при повторном открытии проекта.

@en   <small><s>Even Sound Forge can directly hide peak files, but Vegas can't. Isn't this a bit...</s></small>
@zh   <small><s>连自家的 Sound Forge 都能直接隐藏峰值文件，就 Vegas 不能，这是否有点...</s></small>
@zh-hant   <small><s>連自家的 Sound Forge 都能直接隱藏峰值檔案，就 Vegas 不能，這是否有點...</s></small>
@ja   <small><s>Sound Forge でさえピークファイルを直接隠せるのに、Vegas はできない。これはちょっと...</s></small>
@ko   <small><s>심지어 Sound Forge는 직접 피크 파일을 숨길 수 있는데 Vegas는 못합니다. 이건 좀...</s></small>
@de   <small><s>Sogar Sound Forge kann Peak-Dateien direkt ausblenden, aber Vegas kann es nicht. Ist das nicht ein bisschen...</s></small>
@fr   <small><s>Même Sound Forge peut directement masquer les fichiers de pics, mais Vegas ne peut pas. N'est-ce pas un peu...</s></small>
@ru   <small><s>Даже Sound Forge может напрямую скрывать пиковые файлы, а Vegas не может. Не слишком ли это...</s></small>

@en - **New versions (`21 build 300`+)**: `Preferences -> General`, two new options: **`Do not create .sfk files to store peak data`** and `Hide new .sfk files`. Checking only the second hides new `.sfk` files (visible if "Show hidden files" is enabled). Checking the first **prevents `.sfk` generation entirely** (peak data recreated on project open, usually fine), **recommended**.
@zh - **新版（`21 build 300` 及以上）**： `首选项 -> 常规`，新增 **`不要创建.sfk 文件来存储峰值数据`** 和 `隐藏新的 .sfk 文件` 这两个选项。若只勾选第二个选项，则会将新生成的 `.sfk` 文件的属性设为隐藏，电脑启用过“隐藏文件显示”以后仍然可见。若勾选了第一个选项，则不再生成 `.sfk` 文件，但每次重进工程时均需重新创建峰值，不过一般影响不大，因此**建议勾选**。
@zh-hant - **新版（`21 build 300` 及以上）**： `首選項 -> 常規`，新增 **`不要建立.sfk 檔案來儲存峰值資料`** 和 `隱藏新的 .sfk 檔案` 這兩個選項。若只勾選第二個選項，則會將新生成的 `.sfk` 檔案的屬性設為隱藏，電腦啟用過“隱藏檔案顯示”以後仍然可見。若勾選了第一個選項，則不再生成 `.sfk` 檔案，但每次重進工程時均需重新建立峰值，不過一般影響不大，因此**建議勾選**。
@ja - **新バージョン（`21 build 300`+）**： `プリファレンス -> 全般`、2 つの新オプション： **`.sfk ファイルを作成してピークデータを保存しない`** と `新しい .sfk ファイルを隠す`。2 番目のみチェックすると、新しい `.sfk` ファイルが隠されます（「隠しファイルを表示」が有効なら表示）。最初をチェックすると **`.sfk` 生成を完全に防止**（プロジェクトオープン時にピークデータ再作成、通常問題なし）、**推奨**。
@ko - **새 버전(`21 build 300`+)**: `환경설정 -> 일반`, 두 가지 새 옵션: **`.sfk 파일을 생성하지 않아 피크 데이터 저장`** 및 `새 .sfk 파일 숨기기`. 두 번째만 선택하면 새 `.sfk` 파일이 숨겨집니다("숨겨진 파일 표시"가 활성화된 경우 보임). 첫 번째를 선택하면 **`.sfk` 생성이 완전히 방지됩니다** (프로젝트 열 때 피크 데이터 재생성, 일반적으로 괜찮음), **권장**.
@de - **Neue Versionen (`21 Build 300`+)**: `Einstellungen -> Allgemein`, zwei neue Optionen: **`.sfk-Dateien zur Speicherung von Peak-Daten nicht erstellen`** und `Neue .sfk-Dateien ausblenden`. Nur die zweite aktivieren blendet neue `.sfk`-Dateien aus (sichtbar wenn "Ausgeblendete Dateien anzeigen" aktiviert ist). Die erste aktivieren **verhindert `.sfk`-Generierung vollständig** (Peak-Daten beim Projektöffnen neu erstellt, normalerweise in Ordnung), **empfohlen**.
@fr - **Nouvelles versions (`21 build 300`+)** : `Préférences -> Général`, deux nouvelles options : **`Ne pas créer de fichiers .sfk pour stocker les données de pics`** et `Masquer les nouveaux fichiers .sfk`. Cocher seulement le second masque les nouveaux fichiers `.sfk` (visibles si "Afficher les fichiers cachés" est activé). Cocher le premier **empêche la génération de `.sfk` entièrement** (les données de pics recréées à l'ouverture du projet, généralement bien), **recommandé**.
@ru - **Новые версии (`21 build 300`+)**: `Настройки -> Общие (Preferences -> General)`, две новые опции: **`Не создавать .sfk файлы для хранения пиковых данных (Do not create .sfk files to store peak data)`** и `Скрывать новые .sfk файлы (Hide new .sfk files)`. Установка только второго скрывает новые файлы `.sfk` (видны, если включен «Показывать скрытые файлы»). Установка первого **полностью предотвращает генерацию `.sfk`** (пиковые данные воссоздаются при открытии проекта, обычно нормально), **рекомендуется**.

<br>

@en Q: After importing audio/video, **audio waveform is not visible, shows "Peaks unavailable"**, but audio plays?
@zh Q：导入音频/视频文件后，文件音频流上**看不了音频波形，显示“峰值不可用”**，但播放后能听见音频？
@zh-hant Q：匯入音訊/影片檔案後，檔案音訊流上**看不了音訊波形，顯示“峰值不可用”**，但播放後能聽見音訊？
@ja Q: オーディオ/ビデオインポート後、**オーディオ波形が表示されず、「ピーク利用不可」** と表示されるが、オーディオは再生される？
@ko Q: 오디오/비디오 가져온 후 **오디오 파형이 보이지 않고 "피크 사용 불가" 표시**, 하지만 오디오 재생됨?
@de F: Nach dem Import von Audio/Video ist **Audio-Wellenform nicht sichtbar, zeigt "Peaks nicht verfügbar"**, aber Audio spielt?
@fr Q : Après avoir importé de l'audio/vidéo, **la forme d'onde audio n'est pas visible, montre "Pics indisponibles"**, mais l'audio joue ?
@ru В: После импорта аудио/видео **аудиоволна не видна, показывает «Пики недоступны (Peaks unavailable)»**, но аудио воспроизводится?

@en A: If **media files are in a folder requiring administrator permissions**, VEGAS cannot generate `.sfk` files, causing **`Peaks unavailable`**. Solution: **Move media files to a folder not requiring administrator privileges**.
@zh A：如果**媒体文件被放在了需要管理员权限的文件夹**，会导致 Vegas 无法正常生成 `.sfk` 文件，从而造成无法显示音频的波形，出现 **`峰值不可用`** 的情况。解决办法是**把媒体文件移到不需要管理员权限的文件夹内**。
@zh-hant A：如果**媒體檔案被放在了需要管理員許可權的資料夾**，會導致 Vegas 無法正常生成 `.sfk` 檔案，從而造成無法顯示音訊的波形，出現 **`峰值不可用`** 的情況。解決辦法是**把媒體檔案移到不需要管理員許可權的資料夾內**。
@ja A: **メディアファイルが管理者権限を必要とするフォルダ**にある場合、VEGAS は `.sfk` ファイルを生成できず、 **`ピーク利用不可`** を引き起こします。解決策： **メディアファイルを管理者権限を必要としないフォルダに移動**。
@ko A: **미디어 파일이 관리자 권한이 필요한 폴더에 있는 경우**, VEGAS가 `.sfk` 파일을 생성할 수 없어 **`피크 사용 불가`** 가 발생합니다. 해결책: **미디어 파일을 관리자 권한이 필요하지 않은 폴더로 이동**하십시오.
@de A: Wenn **Mediendateien in einem Ordner sind, der Administratorberechtigungen erfordert**, kann VEGAS keine `.sfk`-Dateien generieren, was zu **`Peaks nicht verfügbar`** führt. Lösung: **Verschieben Sie Mediendateien in einen Ordner, der keine Administratorberechtigungen erfordert**.
@fr R : Si **les fichiers multimédias sont dans un dossier nécessitant des autorisations d'administrateur**, VEGAS ne peut pas générer de fichiers `.sfk`, provoquant **`Pics indisponibles`**. Solution : **Déplacez les fichiers multimédias vers un dossier ne nécessitant pas de privilèges d'administrateur**.
@ru О: Если **медиафайлы находятся в папке, требующей разрешений администратора**, VEGAS не может генерировать файлы `.sfk`, вызывая **`Пики недоступны`**. Решение: **Переместите медиафайлы в папку, не требующую привилегий администратора**.

@en <small>Also, for info on <code>.sfk</code>, <code>.sfl</code>, <code>.sfap0</code>, <code>.sfvp0</code> files, see: https://vegasaur.com/sweeper</small>
@zh <small>另：有关 <code>.sfk</code>、<code>.sfl</code>、<code>.sfap0</code>、<code>.sfvp0</code> 等文件的相关介绍，可见：https://vegasaur.com/sweeper</small>
@zh-hant <small>另：有關 <code>.sfk</code>、<code>.sfl</code>、<code>.sfap0</code>、<code>.sfvp0</code> 等檔案的相關介紹，可見：https://vegasaur.com/sweeper</small>
@ja <small>また、 <code>.sfk</code>、<code>.sfl</code>、<code>.sfap0</code>、<code>.sfvp0</code> ファイルに関する情報は： https://vegasaur.com/sweeper</small>
@ko <small>또한 <code>.sfk</code>, <code>.sfl</code>, <code>.sfap0</code>, <code>.sfvp0</code> 파일에 대한 정보는 다음을 참조하십시오: https://vegasaur.com/sweeper</small>
@de <small>Auch, für Info zu <code>.sfk</code>, <code>.sfl</code>, <code>.sfap0</code>, <code>.sfvp0</code> Dateien, siehe: https://vegasaur.com/sweeper</small>
@fr <small>Aussi, pour les infos sur les fichiers <code>.sfk</code>, <code>.sfl</code>, <code>.sfap0</code>, <code>.sfvp0</code>, voir : https://vegasaur.com/sweeper</small>
@ru <small>Также, для информации о файлах <code>.sfk</code>, <code>.sfl</code>, <code>.sfap0</code>, <code>.sfvp0</code> см.: https://vegasaur.com/sweeper</small>

<br>

@en ## XVI. Software Purchase Channels
@zh ## 十六、软件入正渠道
@zh-hant ## 十六、軟體入正渠道
@ja ## 十六、ソフトウェア購入チャネル
@ko ## XVI. 소프트웨어 구매 경로
@de ## XVI. Software-Kaufkanäle
@fr ## XVI. Canaux d'achat du logiciel
@ru ## XVI. Каналы приобретения ПО

@en 1.  VEGAS Official Website: https://www.vegascreativesoftware.com/us/
@zh 1.  Vegas 官网：https://www.vegascreativesoftware.com/us/
@zh-hant 1.  Vegas 官網：https://www.vegascreativesoftware.com/us/
@ja 1.  VEGAS 公式ウェブサイト： https://www.vegascreativesoftware.com/us/
@ko 1.  VEGAS 공식 웹사이트: https://www.vegascreativesoftware.com/us/
@de 1.  VEGAS Offizielle Website: https://www.vegascreativesoftware.com/us/
@fr 1.  Site web officiel VEGAS : https://www.vegascreativesoftware.com/us/
@ru 1.  Официальный сайт VEGAS: https://www.vegascreativesoftware.com/us/

@en   - Vegas Pro is now under Boris FX, developed and managed by Boris FX. The official Boris FX website only sells the latest version of Vegas. In terms of pricing bundles, there are currently three editions: the Standard Edition (`Vegas Pro`), the Plus Edition (`Vegas Pro Plus`), and the Ultimate Edition (`Vegas Pro Ultimate`). The Standard Edition includes the Vegas Pro software itself and a portion of the Boris FX Continuum plugins, while the Plus and Ultimate Editions include more additional software and plugins. On top of this, for the Standard and Plus Editions, there are also perpetual licenses (`Permanent`) and subscription plans (`Subscription`). The versions provided by Boris FX need to be installed via the Boris FX Hub. During installation, the software may not be installed in your desired language, but you can locate the installer program, uninstall it, and then reinstall it. The standalone installer program offers language options.
@zh   - Vegas Pro 现已在 Boris FX 旗下，由 Boris FX 进行开发和管理。Boris FX 官网只售卖最新版本的 Vegas。在定价捆绑包上，目前一共有 3 个版本，即标准版（`Vegas Pro`）、增强版（`Vegas Pro Plus`）和终极版（`Vegas Pro Ultimate`）。其中标准版包含 Vegas Pro 软件本体和 Boris FX Continuum 插件的一部分，增强版和终极版则包含更多的额外软件和插件。在此基础上，对于标准版和增强版，还分永久版（`Permanent`）和订阅版（`Subscription`）。Boris FX 提供的版本需要通过 Boris FX Hub 进行安装。在安装时，可能不会安装成你想要的语言版本，但你可以找到安装包程序，卸载后重新安装一遍，单独的安装包程序提供语言选项，包含中文。
@zh-hant   - Vegas Pro 現已在 Boris FX 旗下，由 Boris FX 進行開發和管理。Boris FX 官網只售賣最新版本的 Vegas。在定價捆綁包上，目前一共有 3 個版本，即標準版（`Vegas Pro`）、增強版（`Vegas Pro Plus`）和終極版（`Vegas Pro Ultimate`）。其中標準版包含 Vegas Pro 軟體本體和 Boris FX Continuum 外掛的一部分，增強版和終極版則包含更多的額外軟體和外掛。在此基礎上，對於標準版和增強版，還分永久版（`Permanent`）和訂閱版（`Subscription`）。Boris FX 提供的版本需要通過 Boris FX Hub 進行安裝。在安裝時，可能不會安裝成你想要的語言版本，但你可以找到安裝包程式，解除安裝後重新安裝一遍，單獨的安裝包程式提供語言選項，包含中文。
@ja   - Vegas Pro は現在 Boris FX の傘下にあり、Boris FX によって開発・管理されています。Boris FX の公式ウェブサイトでは、最新バージョンの Vegas のみを販売しています。価格バンドルには、現在、スタンダード版（`Vegas Pro`）、プラス版（`Vegas Pro Plus`）、アルティメット版（`Vegas Pro Ultimate`）の 3 つのエディションがあります。スタンダード版には Vegas Pro ソフトウェア本体と Boris FX Continuum プラグインの一部が含まれ、プラス版とアルティメット版にはさらに多くの追加ソフトウェアとプラグインが含まれています。これに加えて、スタンダード版とプラス版には、永続版（`Permanent`）とサブスクリプション版（`Subscription`）があります。Boris FX が提供するバージョンは、Boris FX Hub を介してインストールする必要があります。インストール時に希望する言語バージョンにならない場合がありますが、インストーラープログラムを見つけてアンインストールし、再度インストールし直すことができます。単体のインストーラープログラムでは言語オプションが提供されています。
@ko   - Vegas Pro는 현재 Boris FX 산하에 있으며, Boris FX에서 개발 및 관리를 담당합니다. Boris FX 공식 웹사이트에서는 최신 버전의 Vegas만 판매합니다. 가격 번들에는 현재 총 3가지 에디션이 있습니다: 스탠다드 에디션(`Vegas Pro`), 플러스 에디션(`Vegas Pro Plus`), 그리고 얼티밋 에디션(`Vegas Pro Ultimate`). 스탠다드 에디션에는 Vegas Pro 소프트웨어 본체와 Boris FX Continuum 플러그인의 일부가 포함되며, 플러스 에디션과 얼티밋 에디션에는 더 많은 추가 소프트웨어와 플러그인이 포함됩니다. 이와 함께 스탠다드 에디션과 플러스 에디션은 영구 버전(`Permanent`)과 구독 버전(`Subscription`)으로 나뉩니다. Boris FX가 제공하는 버전은 Boris FX Hub를 통해 설치해야 합니다. 설치 시 원하는 언어 버전으로 설치되지 않을 수 있지만, 설치 프로그램을 찾아 제거한 후 다시 설치하면 됩니다. 독립형 설치 프로그램은 언어 옵션을 제공합니다.
@de   - Vegas Pro ist jetzt unter der Flagge von Boris FX und wird von Boris FX entwickelt und verwaltet. Die offizielle Website von Boris FX verkauft nur die neueste Version von Vegas. Bei den Preisbündeln gibt es derzeit drei Editionen: die Standard Edition (`Vegas Pro`), die Plus Edition (`Vegas Pro Plus`) und die Ultimate Edition (`Vegas Pro Ultimate`). Die Standard Edition enthält die Vegas Pro-Software selbst sowie einen Teil der Boris FX Continuum-Plugins, während die Plus- und Ultimate-Editionen zusätzliche Software und Plugins enthalten. Darüber hinaus gibt es für die Standard- und Plus-Editionen auch eine permanente Version (`Permanent`) und eine Abonnement-Version (`Subscription`). Die von Boris FX angebotenen Versionen müssen über den Boris FX Hub installiert werden. Bei der Installation wird möglicherweise nicht die gewünschte Sprachversion installiert, aber Sie können das Installationsprogramm finden, deinstallieren und dann erneut installieren. Das eigenständige Installationsprogramm bietet Sprachoptionen.
@fr   - Vegas Pro est désormais sous la bannière de Boris FX, développé et géré par Boris FX. Le site officiel de Boris FX ne vend que la version la plus récente de Vegas. En ce qui concerne les offres groupées, il existe actuellement trois versions : l'édition Standard (`Vegas Pro`), l'édition Plus (`Vegas Pro Plus`) et l'édition Ultimate (`Vegas Pro Ultimate`). L'édition Standard inclut le logiciel Vegas Pro lui-même et une partie des plugins Boris FX Continuum, tandis que les éditions Plus et Ultimate incluent davantage de logiciels et de plugins supplémentaires. Par ailleurs, les éditions Standard et Plus sont également divisées en version perpétuelle (`Permanent`) et version par abonnement (`Subscription`). Les versions fournies par Boris FX doivent être installées via le Boris FX Hub. Lors de l'installation, il se peut que la version linguistique souhaitée ne soit pas installée, mais vous pouvez trouver le programme d'installation, le désinstaller, puis le réinstaller. Le programme d'installation autonome propose des options de langue, y compris le chinois.
@ru   - Vegas Pro теперь находится под управлением Boris FX, разрабатывается и управляется компанией Boris FX. На официальном сайте Boris FX продаётся только последняя версия Vegas. Что касается пакетов лицензирования, в настоящее время существует три редакции: Стандартная (`Vegas Pro`), Расширенная (`Vegas Pro Plus`) и Максимальная (`Vegas Pro Ultimate`). Стандартная редакция включает в себя само программное обеспечение Vegas Pro и часть плагинов Boris FX Continuum, в то время как Расширенная и Максимальная редакции включают больше дополнительного ПО и плагинов. Кроме того, для Стандартной и Расширенной редакций предлагаются как бессрочная лицензия (`Permanent`), так и подписка (`Subscription`). Версии, предоставляемые Boris FX, необходимо устанавливать через Boris FX Hub. При установке может быть установлена не та языковая версия, которую вы хотите, но вы можете найти установщик, удалить программу и установить заново — отдельный установщик предлагает выбор языка.

@en   - Official Installer Links: https://forum.borisfx.com/t/where-can-i-download-vegas-pro-including-old-versions/24247
@zh   - 各版安装包链接：https://forum.borisfx.com/t/where-can-i-download-vegas-pro-including-old-versions/24247
@zh-hant   - 安裝包連結：https://forum.borisfx.com/t/where-can-i-download-vegas-pro-including-old-versions/24247
@ja   - 公式インストーラリンク： https://forum.borisfx.com/t/where-can-i-download-vegas-pro-including-old-versions/24247
@ko   - 공식 설치 프로그램 링크: https://forum.borisfx.com/t/where-can-i-download-vegas-pro-including-old-versions/24247
@de   - Offizielle Installer-Links: https://forum.borisfx.com/t/where-can-i-download-vegas-pro-including-old-versions/24247
@fr   - Liens des installateurs officiels : https://forum.borisfx.com/t/where-can-i-download-vegas-pro-including-old-versions/24247
@ru   - Ссылки на официальные установщики: https://forum.borisfx.com/t/where-can-i-download-vegas-pro-including-old-versions/24247

@en <!-- -->
@zh 2. 国区代理：https://vegaschina.cn/
@zh-hant 2. 國區代理：https://vegaschina.cn/

@en <!-- -->
@zh   - 注意，国内代理商思杰马克丁有风评问题，建议自行考虑是否通过该渠道入正。
@zh-hant   - 注意，國內代理商思傑馬克丁有風評問題，建議自行考慮是否通過該渠道入正。

@en <!-- -->
@zh   - **国区代理的序列号只能激活国区代理所提供的安装包。激活后可获得能够绑定在 Magix 账号上的 Magix 版序列号。Magix 版序列号支持激活 Magix 版安装包。**
@zh-hant   - **國區代理的序列號只能啟動國區代理所提供的安裝包。啟動後可獲得能夠繫結在 Magix 帳號上的 Magix 版序列號。Magix 版序列號支援啟動 Magix 版安裝包，也支援官網的以舊換新優惠。**

@en 2.  Some Regional Agents, e.g., Japan: https://www.sourcenext.com/product/vegas/video/vegas-edit/
@zh 3. 其他区代理，如日区：https://www.sourcenext.com/product/vegas/video/vegas-edit/
@zh-hant 3. 其他區代理，如日區：https://www.sourcenext.com/product/vegas/video/vegas-edit/
@ja 2.  地域代理店、例：日本： https://www.sourcenext.com/product/vegas/video/vegas-edit/
@ko 3.  일부 지역 대리점, 예: 일본: https://www.sourcenext.com/product/vegas/video/vegas-edit/
@de 2.  Einige regionale Vertreter, z. B. Japan: https://www.sourcenext.com/product/vegas/video/vegas-edit/
@fr 2.  Quelques agents régionaux, par ex. Japon : https://www.sourcenext.com/product/vegas/video/vegas-edit/
@ru 2.  Некоторые региональные агенты, например, Япония: https://www.sourcenext.com/product/vegas/video/vegas-edit/

@en   - Cheaper than official site, but might force you to use Japanese.
@zh   - 不支持国内支付方式。日区代理相较于官网版更便宜，但似乎不支持改注册表来换成中文界面。
@zh-hant   - 不支援國內支付方式。日區代理相較於官網版更便宜，但似乎不支援改登錄檔來換成中文介面。
@ja   - 公式サイトより安価ですが、日本語使用を強制される可能性があります。
@ko   - 공식 사이트보다 저렴하지만 일본어 사용을 강제할 수 있습니다.
@de   - Billiger als offizielle Seite, könnte Sie aber zwingen, Japanisch zu verwenden.
@fr   - Moins cher que le site officiel, mais pourrait vous forcer à utiliser le japonais.
@ru   - Дешевле, чем официальный сайт, но может заставить вас использовать японский язык.

@en 3. Steam Edition: https://store.steampowered.com/app/4006040/
@zh 4. Steam 版：https://store.steampowered.com/app/4006040/
@zh-hant 4. Steam 版：https://store.steampowered.com/app/4006040/
@ja 3.  Steam 版： https://store.steampowered.com/app/4006040/
@ko 4. Steam 에디션: https://store.steampowered.com/app/4006040/
@de 3. Steam-Edition: https://store.steampowered.com/app/4006040/
@fr 3. Édition Steam : https://store.steampowered.com/app/4006040/
@ru 3.  Steam Edition: https://store.steampowered.com/app/4006040/

@en   - VP23 priced at $199 in USA. However, Steam edition **does not allow multiple instances**, doesn't support manual registry changes for language, and lacks cloud services like Text-to-Speech/Speech-to-Text and VEGAS Hub.
@zh   - 23 国区定价￥678，自带官方中文（Steam 商店里的语言列表有误）。但 Steam 版有不允许软件多开的问题，且不支持自行修改注册表，也不支持新版的文字转语音/语音转文字和 Vegas Hub 等云服务功能。
@zh-hant   - vv23 國區定價￥678，自帶官方中文（Steam 商店裡的語言列表有誤）。但 Steam 版有不允許軟體多開的問題，且不支援自行修改登錄檔，也不支援新版的文字轉語音/語音轉文字和 Vegas Hub 等雲服務功能。
@ja   - VP23 は米国で $199。ただし、Steam 版は**複数インスタンスを許可せず**、言語変更のための手動レジストリ変更をサポートせず、Text-to-Speech/Speech-to-Text や VEGAS Hub などのクラウドサービスがありません。
@ko   - VP23 미국에서 $199. 그러나 Steam 에디션은 **여러 인스턴스를 허용하지 않으며**, 언어 변경을 위한 수동 레지스트리 변경을 지원하지 않으며, 텍스트-음성/음성-텍스트 및 VEGAS Hub와 같은 클라우드 서비스가 없습니다.
@de   - VP23 für $199 in USA. Steam-Edition **erlaubt jedoch keine mehreren Instanzen**, unterstützt keine manuellen Registrierungsänderungen für Sprache, und fehlt Cloud-Dienste wie Text-to-Speech/Speech-to-Text und VEGAS Hub.
@fr   - VP23 prix à $199 aux USA. Cependant, l'édition Steam **ne permet pas plusieurs instances**, ne supporte pas les changements manuels de registre pour la langue, et manque de services cloud comme Synthèse vocale/Reconnaissance vocale et VEGAS Hub.
@ru   - VP23 по цене $199 в США. Однако Steam Edition **не позволяет использовать несколько экземпляров**, не поддерживает ручное изменение языка через реестр и не имеет облачных сервисов, таких как Text-to-Speech/Speech-to-Text и VEGAS Hub.

@en 4.  Occasional deep-discount bundles on sites like [Humble Bundle](https://www.humblebundle.com/), [Fanatical](https://www.fanatical.com/).
@zh 5.  [Humble Bundle](https://www.humblebundle.com/)、[Fanatical](https://www.fanatical.com/) 等优惠网站的不定期的骨折优惠捆绑包。
@zh-hant 5.  [Humble Bundle](https://www.humblebundle.com/)、[Fanatical](https://www.fanatical.com/) 等優惠網站的不定期的骨折優惠捆綁包。
@ja 4.  [Humble Bundle](https://www.humblebundle.com/)、 [Fanatical](https://www.fanatical.com/) などのサイトでの時折の大幅割引バンドル。
@ko 5.  [Humble Bundle](https://www.humblebundle.com/), [Fanatical](https://www.fanatical.com/)과 같은 사이트에서 가끔 심할인 번들.
@de 4.  Gelegentliche Deep-Discount-Bundles auf Seiten wie [Humble Bundle](https://www.humblebundle.com/), [Fanatical](https://www.fanatical.com/).
@fr 4.  Bundles à rabais profond occasionnels sur des sites comme [Humble Bundle](https://www.humblebundle.com/), [Fanatical](https://www.fanatical.com/).
@ru 4.  Иногда глубокие скидки в комплектах на сайтах вроде [Humble Bundle](https://www.humblebundle.com/), [Fanatical](https://www.fanatical.com/).

@en   - Priced around $20-30. Typically includes VEGAS Pro version **two versions behind the current latest**, plus bundled content. Also qualifies for official upgrade discounts. For example, when latest is 21, they sell 19. Sales are infrequent and brief, with varying bundle content.
@zh   - 价格在 20-30 美元不等，支持支付宝，可以买到比当前最新 Vegas 版本低两个版本号的软件本体以及捆绑的其他内容，同时也支持官网的以旧换新优惠。比如最新是 21，就会给 19 打骨折，然后在优惠网站上销售。每年只有不定期的几次短暂促销，且每次促销的链接和捆绑包内容也各不相同。
@zh-hant   - 價格在 20-30 美元不等，支援支付寶，可以買到比當前最新 Vegas 版本低兩個版本號的軟體本體以及捆綁的其他內容，同時也支援官網的以舊換新優惠。比如最新是 21，就會給 19 打骨折，然後在優惠網站上銷售。每年只有不定期的幾次短暫促銷，且每次促銷的連結和捆綁包內容也各不相同。
@ja   - 約 $20-30。通常、VEGAS Pro バージョン **現在最新より 2 バージョン遅れ**、およびバンドルコンテンツを含みます。公式アップグレード割引も対象。例：最新が 21 の場合、19 を販売。販売はまれで短期間、バンドル内容は様々。
@ko   - 약 $20-30. 일반적으로 VEGAS Pro 버전 **현재 최신보다 두 버전 뒤**를 포함하며 번들 콘텐츠도 포함합니다. 또한 공식 업그레이드 할인 자격도 있습니다. 예: 최신이 21일 때 19를 판매합니다. 판매는 빈번하지 않고 짧으며, 번들 콘텐츠가 다양합니다.
@de   - Preis um $20-30. Typischerweise enthält VEGAS Pro Version **zwei Versionen hinter der aktuell neuesten**, plus gebündelte Inhalte. Qualifiziert sich auch für offizielle Upgrade-Rabatte. Zum Beispiel, wenn neueste 21 ist, verkaufen sie 19. Verkäufe sind unregelmäßig und kurz, mit variierenden Bundle-Inhalten.
@fr   - Prix autour de $20-30. Inclut typiquement la version VEGAS Pro **deux versions derrière la dernière actuelle**, plus du contenu bundle. Qualifie aussi pour les réductions de mise à niveau officielles. Par exemple, quand la dernière est 21, ils vendent 19. Les ventes sont peu fréquentes et brèves, avec un contenu bundle variable.
@ru   - Цена около $20-30. Обычно включает версию VEGAS Pro **на две версии позади текущей последней**, плюс дополнительный контент. Также дает право на официальные скидки на обновление. Например, когда последняя — 21, они продают 19. Распродажи нечастые и кратковременные, с разным содержимым комплекта.

<br>

@en ## XVII. VEGAS Communities/Forums
@zh ## 十七、Vegas 交流群/交流网站
@zh-hant ## 十七、Vegas 交流群/交流網站
@ja ## 十七、VEGAS コミュニティ/フォーラム
@ko ## XVII. VEGAS 커뮤니티/포럼
@de ## XVII. VEGAS Communities/Foren
@fr ## XVII. Communautés/Forums VEGAS
@ru ## XVII. Сообщества/Форумы VEGAS

@en <!-- -->
@zh 夜__晓的 Vegas Pro 交流 QQ 群：[570497914](https://qm.qq.com/cgi-bin/qm/qr?k=vByv4vz64zLaygZW7AgX8-2QReEXjL0a) / [650370844](http://qm.qq.com/cgi-bin/qm/qr?k=ueSwAdOLZl7EvMaGXJu_U5o59fZQ_afi)
@zh-hant 夜__曉的 Vegas Pro 交流 QQ 群：[570497914](https://qm.qq.com/cgi-bin/qm/qr?k=vByv4vz64zLaygZW7AgX8-2QReEXjL0a) / [650370844](http://qm.qq.com/cgi-bin/qm/qr?k=ueSwAdOLZl7EvMaGXJu_U5o59fZQ_afi)

@en VEGAS Pro Official Forum: [https://forum.borisfx.com/c/vegas-pro/55](https://forum.borisfx.com/c/vegas-pro/55)
@zh Vegas Pro 官方论坛：[https://forum.borisfx.com/c/vegas-pro/55](https://forum.borisfx.com/c/vegas-pro/55)
@zh-hant Vegas Pro 官方論壇：[https://forum.borisfx.com/c/vegas-pro/55](https://forum.borisfx.com/c/vegas-pro/55)
@ja VEGAS Pro 公式フォーラム： [https://forum.borisfx.com/c/vegas-pro/55](https://forum.borisfx.com/c/vegas-pro/55)
@ko VEGAS Pro 공식 포럼: [https://forum.borisfx.com/c/vegas-pro/55](https://forum.borisfx.com/c/vegas-pro/55)
@de VEGAS Pro Offizielles Forum: [https://forum.borisfx.com/c/vegas-pro/55](https://forum.borisfx.com/c/vegas-pro/55)
@fr Forum officiel VEGAS Pro : [https://forum.borisfx.com/c/vegas-pro/55](https://forum.borisfx.com/c/vegas-pro/55)
@ru Официальный форум VEGAS Pro: [https://forum.borisfx.com/c/vegas-pro/55](https://forum.borisfx.com/c/vegas-pro/55)

@en VEGAS Pro Reddit: [https://www.reddit.com/r/VegasPro/](https://www.reddit.com/r/VegasPro/)
@zh Vegas Pro Reddit 讨论区：[https://www.reddit.com/r/VegasPro/](https://www.reddit.com/r/VegasPro/)
@zh-hant Vegas Pro Reddit 討論區：[https://www.reddit.com/r/VegasPro/](https://www.reddit.com/r/VegasPro/)
@ja VEGAS Pro Reddit： [https://www.reddit.com/r/VegasPro/](https://www.reddit.com/r/VegasPro/)
@ko VEGAS Pro Reddit: [https://www.reddit.com/r/VegasPro/](https://www.reddit.com/r/VegasPro/)
@de VEGAS Pro Reddit: [https://www.reddit.com/r/VegasPro/](https://www.reddit.com/r/VegasPro/)
@fr Reddit VEGAS Pro : [https://www.reddit.com/r/VegasPro/](https://www.reddit.com/r/VegasPro/)
@ru Reddit VEGAS Pro: [https://www.reddit.com/r/VegasPro/](https://www.reddit.com/r/VegasPro/)