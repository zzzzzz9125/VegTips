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

# VEGAS Pro Fehlerbehebungsleitfaden: Häufige Probleme und Lösungen
<p align="right"><strong>Version: 2026.01&ensp;&ensp;Autor: <a href="https://github.com/zzzzzz9125">zzzzzz9125</a></strong></p>

::: warning
Diese Seite wurde automatisch aus dem [chinesischen Original](/zh/) übersetzt und noch nicht vollständig von Menschen überprüft. Wenn etwas unklar erscheint, können Sie dies auf der [Issues](https://github.com/zzzzzz9125/VegTips/issues)-Seite des Projekts melden oder Korrekturen vornehmen und mir einen Pull Request senden.

Vorübergehend nehme ich keine direkten privaten Anfragen zu spezifischen Problemen mit VEGAS Pro entgegen. Wenn Sie Fragen haben, posten Sie diese bitte in [anderen öffentlichen Foren](#xvii-vegas-communities-foren), um Hilfe zu erhalten. Ich sammle möglicherweise gute Lösungen aus anderen Foren und fasse sie hier zusammen.
:::

## 0. Vorwort

- Dieser Artikel ist kein Basistutorial für Anfänger. Es ist ein Leitfaden zur Fehlerbehebung bei verschiedenen Problemen in VEGAS Pro und behandelt daher nicht ausführlich die Grundfunktionen der Software. Dieser Artikel unterstützt die Nutzung lizenzierter Software. Informationen zum Kauf einer legalen Lizenz finden Sie im Abschnitt [Software-Kaufkanäle](#xvi-software-kaufkanäle) am Ende.

- Dieser Artikel umfasst über 10.000 Wörter und behandelt häufige Probleme und Lösungen für VEGAS Pro. Er wurde zuerst auf der chinesischen Website Bilibili veröffentlicht und später zu diesem Dokument zusammengefasst und übersetzt, um online betrachtet zu werden. Wenn Sie Fehler oder Auslassungen finden, können Sie diese [in diesem Beitrag](https://www.vegascreativesoftware.info/us/forum/posts--150586/) melden.

- Bei der Nutzung dieses Leitfadens wird empfohlen, das Inhaltsverzeichnis zu verwenden, um Ihre Problemkategorie zu finden, und die **`Strg + F`**-Suchfunktion zu nutzen, um nach Schlüsselwörtern oder Fehlercodes zu suchen, um Probleme schneller zu lösen. In diesem Artikel erwähnte Pfade werden im Allgemeinen mit Umgebungsvariablen ausgedrückt, z. B. **`%localappdata%\VEGAS Pro\`**. **Sie können den Pfadtext in die Adressleiste des Windows-Explorers kopieren, einfügen und `Enter` drücken, um schnell dorthin zu navigieren.** Dieser Artikel erwähnt manchmal bestimmte Build-Nummern für bestimmte Versionen, z. B. `23 Build 302`, wobei `302` die Build-Nummer ist. Die aktuelle Build-Nummer können Sie auf dem Ladebildschirm sehen, wenn VEGAS startet. Inhalte, die mit **<u>Unterstreichung</u>** markiert sind, enthalten Hyperlinks.

- Dieser Artikel ist unter der **CC BY-NC-SA 4.0**-Lizenz lizenziert. Wenn Sie diesen Inhalt in irgendeiner Form reproduzieren, anpassen oder verwenden, beachten Sie bitte die Grundsätze **Namensnennung, Nicht kommerziell, Weitergabe unter gleichen Bedingungen**. Details finden Sie im [vollen Lizenztext](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de).

<br>

## I. Über die Optimierung der VEGAS-Einstellungen

**"Optimierungsleitfäden" werden hier nicht mehr aufgelistet, da nicht garantiert werden kann, dass sie eine positive Optimierung für VEGAS Pro bieten, und einige Informationen möglicherweise veraltet und irreführend sind.**

**Laut MAGIX ist es am besten, die Standardeinstellungen beizubehalten, da diese für den durchschnittlichen Benutzer als optimal angesehen werden.**

**Es gibt keine Einstellung, die für alle passt. Selbst wenn Sie anderswo sogenannte "Optimierungsleitfäden" finden, passen Sie diese an Ihre spezifische Situation an.**

**Außerdem empfehle ich nicht, direkt Registrierungsdateien oder Einstellungsdateien von anderen zu verwenden, die als "optimierte Einstellungen" bezeichnet werden.**

<br>

## II. Über VEGAS-Einstellungen, Cache-Verzeichnis, Voreinstellungen usw.

### VEGAS-Einstellungen und Cache-Verzeichnis

Hinweis: Die folgenden Pfade verwenden **die Umgebungsvariablen-Schreibweise `% %`**. Sie können den Pfadtext in die Adressleiste des Windows-Explorers kopieren, einfügen und `Enter` drücken, um schnell dorthin zu navigieren. Tatsächliche Pfade werden ebenfalls als Referenz angegeben.

- Haupt-Cache-Verzeichnis von VEGAS: **`%localappdata%\VEGAS Pro\`**
  - D. h. `C:\Users\<Benutzername>\AppData\Local\VEGAS Pro\`
  - Unterschiedliche Versionen werden in separaten Ordnern für Unabhängigkeit gespeichert, z. B. **`%localappdata%\VEGAS Pro\23.0\`**.

<br>

Für VEGAS-Einstellungen:
- Ältere Versionen (VP18 und früher) werden im Registrierungspfad **`HKEY_CURRENT_USER\Software\Sony Creative Software\VEGAS Pro\<Version>\Metrics\Application\`** gespeichert, was manuell schwer zu bearbeiten ist. Für ein Backup können Sie den Registrierungs-Editor (`regedit`) verwenden, um alle Inhalte unter diesem Registrierungspfad manuell zu sichern.

- Neuere Versionen (VP19 und später) werden in der Cache-Verzeichnisdatei **`%localappdata%\VEGAS Pro\<Version>\persist.prefs`** gespeichert. Der Dateiinhalt ist im `XML`-Format, was die manuelle Bearbeitung erleichtert. Sie können diese Datei zur Sicherung kopieren.

<br>

Andere Verzeichnisse mit VEGAS-bezogenen Einstellungen und Voreinstellungsdateien für manuelle Sicherungen:

- Gespeicherte FX-Voreinstellungen, Plugin-Ketten-Voreinstellungen, FX-Favoriten, Rendervorlagen usw.: `%appdata%\VEGAS\`  
  D. h. `C:\Users\<Benutzername>\AppData\Roaming\VEGAS\`

- VEGAS-Fensterlayouts, Tastatureinstellungen usw.: `%appdata%\VEGAS Pro\`  
  D. h. `C:\Users\<Benutzername>\AppData\Roaming\VEGAS Pro\`

- Gespeicherte OFX-Plugin-FX-Voreinstellungen: `%userprofile%\Documents\OFX Presets\`  
  D. h. `C:\Users\<Benutzername>\Documents\OFX Presets\`  
  oder OneDrive-Pfad: `C:\Users\<Benutzername>\OneDrive\Documents\OFX Presets\`

VP13 und frühere Versionen haben Cache-Verzeichnisse innerhalb eines Sony-Ordners, z. B. **`%localappdata%\Sony\VEGAS Pro\`**, usw.

**Für andere wichtige Pfade siehe: [https://www.vegascreativesoftware.info/us/tutorials/posts--139290/](https://www.vegascreativesoftware.info/us/tutorials/posts--139290/)**

<br>

### Verwenden, Importieren und Exportieren von VEGAS-Plugin-Ketten-Voreinstellungen

Installieren und verwenden Sie den `Sony Preset Manager`.

  - Download-Link: https://web.archive.org/web/20160826164938/http://dspcdn.sonycreativesoftware.com/current/extras/presetmngr20k.exe

<!-- 2. Wie im Diagramm gezeigt:

<ImageOnDemand alt="Plugin-Kette" src="vegtips/image001_plugin_chain.png" />

<p align="center">Illustration zur Verwendung des VEGAS Preset Manager v0.2</p> -->

<br>

### Auf die internen VEGAS-Einstellungen zugreifen

- VP18+: Halten Sie **`Umschalt`** gedrückt, dann gehen Sie zum oberen Menü **`Optionen -> Intern`**.

- VP17-: Halten Sie **`Umschalt`** gedrückt, dann gehen Sie zum oberen Menü **`Optionen -> Einstellungen`**, wechseln Sie zum Tab **`Intern`**.

<br>

## III. Lösungen für Abstürze, Einfrieren, Fehlermeldungen durch Bugs

(Die hier bereitgestellten Lösungen sind allgemeine Fehlerbehandlungsschritte. Sie lösen möglicherweise nicht jedes Problem.)

### 1. GPU-Beschleunigung deaktivieren

**`Einstellungen -> Video`**, unter **`GPU-Beschleunigung der Videoverarbeitung`** wählen Sie **`Aus`**. Diese Option verwaltet hauptsächlich, ob Video-FX GPU-Beschleunigung verwenden. Während GPU-Beschleunigung die FX-Vorschau und das Rendern flüssiger machen kann, hat sie **mehr Bugs in niedrigeren VEGAS-Versionen und verursacht häufiger Abstürze**. Bei der Fehlerbehebung sollten Sie zuerst versuchen, **die GPU-Beschleunigung zu deaktivieren**. Für neuere VEGAS-Versionen (z. B. `22 Build 250`) wird sie dennoch empfohlen, wenn Ihre GPU-Leistung gut ist und keine anderen Probleme auftreten.

<br>

### 2. VEGAS-Fehlerbericht-Pop-up deaktivieren

Ein häufiges Szenario: Beim Ausführen von VEGAS / **Klicken auf `Datei -> Rendern als`** erscheint sofort ein Fehler-Pop-up.

<ImageOnDemand alt="Problembericht" src="vegtips/image002_problem_report.png" />

**Überprüfen Sie in diesem Fall immer zuerst das Kontrollkästchen für `Problemdetails anzeigen`, um den Fehlerinhalt zu erhalten.**

Manchmal kann die Fehlerberichterstattungsfunktion selbst das Problem sein. Das vollständige Deaktivieren kann helfen.

Zwei Wege, um Fehlerbericht-Pop-ups zu deaktivieren:

- **Suchen Sie die Datei `ErrorReportClient.exe` im VEGAS-Installationsverzeichnis und benennen Sie sie um.**

- Suchen Sie und führen Sie **`PRSConfig.exe`** im VEGAS-Installationsverzeichnis aus, wählen Sie **`Deaktiviert`**.

Jede der Methoden deaktiviert VEGAS-Fehlerbericht-Pop-ups.

Manchmal kann das Problem bestehen bleiben. Wenn ja, aktivieren Sie es wieder und konzentrieren Sie sich auf die Analyse des Fehlerinhalts. **Der Fehlerinhalt kann manchmal nützliche Hinweise liefern. Siehe [Fehlerbehandlungs-Ideen für spezifische Fehler](#8-fehlerbehandlungs-ideen-für-spezifische-fehler).**

<br>

### 3. VEGAS neu installieren

Das Neuinstallieren von VEGAS behebt nur Probleme, bei denen die Software selbst nicht vollständig installiert wurde oder Programmdateien beschädigt sind, daher wird es selten benötigt. Das Neuinstallieren allein setzt die Einstellungen nicht zurück.

<br>

### 4. Hardware-Treiber neu installieren

Softwareprobleme können manchmal durch Hardwaretreiber verursacht werden. Bei Audio-Problemen versuchen Sie, Ihre Soundkartentreiber neu zu installieren. Bei Video-Problemen versuchen Sie, Ihre Grafikkartentreiber neu zu installieren.

<br>

### 5. Einstellungen zurücksetzen

Wenn Sie auf unerklärliche Probleme stoßen, wie **importierten Audio, der komplett verrauscht ist**, kann dies manchmal durch **Zurücksetzen der Einstellungen** gelöst werden.

**Das Zurücksetzen wird löschen: [Alle Einstellungen und den Cache für die aktuelle VEGAS-Version].**

Die Standardmethode: Halten Sie `Strg + Umschalt` gedrückt und führen Sie VEGAS aus. Eine "Zurücksetzen?"-Eingabeaufforderung erscheint. Aktivieren Sie `Alle zwischengespeicherten Anwendungsdaten löschen` und klicken Sie auf `Ja`.

<ImageOnDemand alt="Zurücksetzen" src="vegtips/image003_reset.png" />

<p align="center">Zurücksetzen? (J/N)</p>

Allerdings erstellt das Zurücksetzen auf diese Weise kein Backup Ihrer vorherigen Einstellungen. Die ursprünglichen Einstellungen werden vollständig gelöscht, was ein gewisses Risiko birgt. Daher empfehle ich, vor dem Zurücksetzen Ihre Einstellungen zu sichern. Siehe [VEGAS-Einstellungen und Cache-Verzeichnis](#vegas-einstellungen-und-cache-verzeichnis).

<br>

### 6. Microsoft Visual C++ und .NET Framework Laufzeiten installieren

Microsoft Visual C++ Redistributables: https://learn.microsoft.com/cpp/windows/latest-supported-vc-redist

.NET Framework-Reparatur-Tool: https://support.microsoft.com/topic/942a01e3-5b8b-7abb-c166-c34a2f4b612a

<br>

### 7. Eine andere Version ausprobieren

**Ob eine VEGAS-Version für Ihren PC geeignet ist, ist etwas zufällig.**

Die stabilste Version wird allgemein als VP13 angesehen. Für einen Ausgleich zwischen Stabilität und Funktionen wird **VP18** empfohlen. Neuere Versionen sind nicht garantiert stabil. Seit dem Video-Engine-Update in `21 Build 300` werden VEGAS' Probleme mit langsamer Videodekodierung und -wiedergabe schrittweise behoben. Diese Verbesserung setzt sich bis zur endgültigen Version von VP22 fort. **Derzeit empfehle ich am meisten die VP22-Endversion (`22 Build 250`), da sie erhebliche Verbesserungen aufweist.** Die neueste VP23 ist immer noch nicht sehr stabil.

VEGAS Pro / VEGAS Post Veröffentlichungsgeschichte: https://www.vegascreativesoftware.info/us/forum/posts--104998/

<br>

### 8. Fehlerbehandlungs-Ideen für spezifische Fehler

Wenn Sie fast alle Methoden in diesem Artikel (insbesondere die im Kapitel [VEGAS Software-Betrieb Q&A](#iv-vegas-software-betrieb-q-a)) ausprobiert haben und der Fehler bestehen bleibt, versuchen Sie den Ansatz in diesem Abschnitt. Einige Fehler, wie `0xC0000005`, haben keine feste, eindeutige Ursache. Auf solche Fehler zu stoßen und festzustellen, dass die meisten Lösungen hier nicht funktionieren, ist völlig normal. Die Online-Suche nach dem Fehlercode liefert viele Lösungen, aber eine tatsächlich funktionierende zu finden, kann wie die Suche nach einer Nadel im Heuhaufen sein. Dieser Abschnitt bietet eine allgemeine Fehlerbehandlungs-Idee:

1.  **Finden Sie die Fehlerdetails.** Wenn die Fehlerberichterstattung [aktiviert](#2-vegas-fehlerbericht-pop-up-deaktivieren) ist, aktivieren Sie das Kontrollkästchen `Problemdetails anzeigen` im Pop-up. Selbst wenn die Fehlerberichterstattung deaktiviert ist, erhalten Sie manchmal Fehlerdetails. Diese beiden Quellen können unterschiedliche oder zusätzliche Informationen liefern; es ist ratsam, beide zu überprüfen.

2.  **Analysieren Sie die Fehlerdetails.** Suchen Sie nach zwei Hauptpunkten: das Fehlermodul und der Fehlercode. Das Fehlermodul steht in der Zeile `Fehlermodul` (`Fault Module`).

    - Wenn das Fehlermodul auf eine Komponente einer anderen Software hinweist, versuchen Sie, diese Software zu deinstallieren.
    - Wenn es auf eine VEGAS-Komponente hinweist, versuchen Sie, VEGAS neu zu installieren oder die Version zu wechseln.
    - Wenn es auf eine Systemkomponente hinweist, ist es weniger sicher.

    Der Fehlercode ist das `0x` gefolgt von einer 8-stelligen Hexadezimalzahl. Zum Beispiel:

    - `0xC06D007F`: Betrachten Sie Video-Plugin-Probleme. Entfernen Sie OFX-Plugins aus dem OFX-Ordner.
    - `0xE0434352`: Betrachten Sie .NET-Komponentenprobleme. Versuchen Sie, .NET Framework zu reparieren, oder Erweiterungsladeprobleme. Entfernen Sie Erweiterungen aus dem Erweiterungsordner.

    Andere Hinweise: Wenn der Fehlerinhalt ausdrücklich ein bestimmtes Plugin oder das Schlüsselwort `OFX` erwähnt, betrachten Sie ebenfalls Video-Plugin-Probleme.  

    Wenn nichts davon funktioniert, müssen Sie online nach dem Fehlercode für verschiedene Lösungen suchen. Einige Probleme erfordern möglicherweise sogar eine Systemneuinstallation, um sie zu lösen.

<br>

## IV. VEGAS Software-Betrieb Q&A

F: Wie **lokalisieren** Sie die VEGAS-Softwareoberfläche (zum Beispiel auf Deutsch)?

A: Das VEGAS-Programm enthält intern 9 Sprachen: `Englisch, Deutsch, Französisch, Portugiesisch, Spanisch, Polnisch, Chinesisch, Japanisch, Koreanisch`. Das auf der offiziellen Website bereitgestellte Installationsprogramm ist jedoch die internationale Sprachversion, die nur die ersten 5 aufgeführten Sprachen enthält, **Chinesisch ausgeschlossen**. Es gibt drei Lokalisierungswege:

1.  **Verwenden Sie ein chinesisches Installationsprogramm.** Vor dem [Kauf](#xvi-software-kaufkanäle) überprüfen Sie die Sprachunterstützungsliste, um zu sehen, ob Chinesisch enthalten ist. Zum Beispiel enthält die Version auf der offiziellen Website derzeit kein Chinesisch, während Versionen, die von chinesischen Vertretern bereitgestellt werden, und die Steam-Edition Chinesisch enthalten. Andernfalls müssen Sie die letzteren zwei Methoden versuchen.

2.  **Verwenden Sie ein von anderen Benutzern erstelltes Lokalisierungspaket.**

3.  **Ändern Sie die Registrierung.** Das Ändern der Registrierung kann die in VEGAS eingebaute deutsche Sprache aktivieren, aber im Vergleich zu den ersten beiden Methoden könnte diese eingebaute deutsche Sprache unvollständig oder ungenau sein.

**Manuelle Registrierungsänderungsschritte:**

**Nachdem VEGAS bereits installiert ist**, drücken Sie `Win + R`, geben Sie `regedit` ein, um den Registrierungs-Editor zu öffnen. VEGAS-Spracheinstellungen befinden sich im `ULangID`-Wert der folgenden Registrierungsschlüssel:

- VP20 und höher:

```text
HKEY_LOCAL_MACHINE\SOFTWARE\VEGAS Creative Software\VEGAS Pro\23.0\Lang
HKEY_LOCAL_MACHINE\SOFTWARE\VEGAS Creative Software\VEGAS Creative Software Video Plug-In Pack\1.0\Lang
HKEY_LOCAL_MACHINE\SOFTWARE\VEGAS Creative Software\VEGAS Creative Software OFX GPU Video Plug-in Pack\1.0\Lang
HKEY_LOCAL_MACHINE\SOFTWARE\VEGAS Creative Software\Error Reporting Client\1.0\Lang
```

- VP19 und niedriger:
```text
HKEY_LOCAL_MACHINE\SOFTWARE\Sony Creative Software\VEGAS Pro\19.0\Lang
HKEY_LOCAL_MACHINE\SOFTWARE\Sony Creative Software\Sony Vegas Video Plug-In Pack\1.0\Lang
HKEY_LOCAL_MACHINE\SOFTWARE\Sony Creative Software\Sony Vegas OFX GPU Video Plug-in Pack\1.0\Lang
HKEY_LOCAL_MACHINE\SOFTWARE\Sony Creative Software\Error Reporting Client\1.0\Lang
```

Hier repräsentieren `23.0` und `19.0` die aktuelle VEGAS-Hauptversion. Die erste Zeile ist die Haupteinstellung für die Oberflächensprache, aber es wird empfohlen, alle vier zu ändern.

<ImageOnDemand alt="Sprachregistrierung" src="vegtips/image004_language_reg.png" />

Wenn Sie die englische Version installiert haben, ist der Standardwert für `ULangID` wahrscheinlich der hexadezimale Wert `409` (dezimal `1033`). Ändern Sie ihn zu **`407` (dezimal `1031`) für Deutsch**.

<small>
Für andere Sprach-IDs siehe die Microsoft-Dokumentation: <a href="https://learn.microsoft.com/openspecs/windows_protocols/ms-lcid">https://learn.microsoft.com/openspecs/windows_protocols/ms-lcid</a><br>
</small>

Wenn **nach dem Ändern der Registrierung VEGAS mit `Fehlercode: -1` nicht startet**, navigieren Sie zum `language`-Ordner im VEGAS-Installationsverzeichnis (Standard: `C:\Programme\VEGAS\VEGAS Pro 23.0\language\`, wobei `23.0` die Version ist). **Benennen Sie jede `local_xx_XX.cfg`-Datei** (z. B. `local_en_US.cfg` für US-Englisch) **in `local_de_DE.cfg` um**.

<small>
Ein weiteres nützliches Tool: <code>Vegas Language Changer</code>: <a href="https://github.com/IZH318/Vegas-Language-Changer">https://github.com/IZH318/Vegas-Language-Changer</a>
</small>

Das gleiche Prinzip gilt für andere MAGIX-Software wie ACID Pro.

Nachdem VEGAS erfolgreich gestartet wurde, wenn die Namen der eingebauten Video-FX immer noch auf Englisch sind, können Sie versuchen, den [Plugin-Cache zu löschen](#video-plugin-q-a).

<br>

F: Fehler während der Installation: **PC muss neu starten, um die Installation fortzusetzen**?  
`Setup hat festgestellt, dass das System derzeit auf einen Neustart wartet, um eine vorherige Installation oder ein vorheriges Update abzuschließen. Um Probleme zu vermeiden, starten Sie Ihr System bitte neu, bevor Sie installieren.`

<ImageOnDemand alt="Installationsneustart-Problem" src="vegtips/image005_install_reboot.png" />

A: Versuchen Sie zuerst, Ihren PC neu zu starten. Wenn das nicht funktioniert, müssen Sie die Registrierung ändern. Öffnen Sie den Registrierungs-Editor, navigieren Sie zu **`HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session Manager`**, **löschen Sie den Wert `PendingFileRenameOperations`**, dann starten Sie Ihren PC neu.

<small>
Siehe: <a href="https://tieba.baidu.com/p/4339996851">https://tieba.baidu.com/p/4339996851</a><br>
</small>

<br>

F: Fehler: **`Während der Installation ist ein Fehler aufgetreten -2147163964. Modul xxxxx.dll konnte nicht registriert werden`**.

<ImageOnDemand alt="Installations-DLL-Registrierungsproblem" src="vegtips/image006_install_dll.png" />

A: **Neustarten Ihres PCs und Neuinstallation** behebt dies normalerweise. Wenn es bestehen bleibt, versuchen Sie **eine andere Version zu installieren**.

<br>

F: VEGAS startet überhaupt nicht, **zeigt nicht einmal das Ladefenster**?

A: Dies ist ein altes Problem: **VEGAS-Prozesse stecken im Hintergrund fest**. **Öffnen Sie den Task-Manager, finden und beenden Sie alle VEGAS-bezogenen Prozesse, dann versuchen Sie, VEGAS erneut auszuführen.**

<br>

F: VEGAS **stürzt ab/friert ein** beim Schritt "**GPU-beschleunigte Videoverarbeitung wird initialisiert...**" während des Starts?

A: Versuchen Sie zuerst, Ihre Grafikkartentreiber neu zu installieren. Wenn das nicht funktioniert, versuchen Sie diese Registrierungsänderung. Öffnen Sie den Registrierungs-Editor, finden Sie den Wert:**`IntelOpenCL64.dll`** unter **`HKEY_LOCAL_MACHINE\SOFTWARE\Khronos\OpenCL\Vendors`** und den Wert **`IntelOpenCL32.dll`** unter **`HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Khronos\OpenCL\Vendors`**. Ändern Sie die Daten für beide Werte **von `0` auf `1`**, dann starten Sie VEGAS neu.

<small>
Siehe: <a href="https://www.bilibili.com/video/BV11z411i74a/">https://www.bilibili.com/video/BV11z411i74a/</a><br>
</small>

<br>

F: VEGAS **stürzt ab/friert ein (Fehlercode `0xC06D007F`)** beim Schritt "**Video-Plugin-Fabrik...**" während des Starts?

A: Dieser Schritt lädt Video-Plugins. Es ist oft ein Problem mit dem OFX-Video-Plugin-Scan. Gehen Sie zum OFX-Pfad: **`C:\Programme\Gemeinsame Dateien\OFX\Plugins\`**, **entfernen Sie potenziell problematische Plugins aus diesem Ordner**, dann versuchen Sie, VEGAS zu starten. Sobald es normal startet, können Sie versuchen, die Dateien zurückzubewegen oder das Plugin neu zu installieren. Wenn Sie spezifische Fehlerdetails haben, versuchen Sie, Schlüsselwörter im Zusammenhang mit dem Plugin-Namen zu finden.  
**<small>(Überprüfen Sie zuerst Red Giant Universe-Plugins, da sie bei vielen Benutzern Startabstürze verursachen.)</small>**

<br>

F: VEGAS **hängt/ stürzt ab/ friert ein** beim Schritt "**VST-Plugins werden gescannt...**" während des Starts?

A: Versuchen Sie, **das VST-Scannen beim Start zu deaktivieren**. Klicken Sie mit der rechten Maustaste auf die VEGAS-**Verknüpfung -> Eigenschaften**. Im Feld **`Ziel`** fügen Sie am Ende **` /NOVSTGROVEL`** hinzu (**beachten Sie das Leerzeichen vor dem Schrägstrich**). Führen Sie dann VEGAS über diese Verknüpfung aus. Sobald es normal startet, können Sie problematische Plugins von den [VST-Pfaden](#xi-audio-plugin-bezogene) entfernen, separat speichern usw.

<ImageOnDemand alt="NOVSTGROVEL" src="vegtips/image007_novstgrovel.png" />

<br>

F: VEGAS **hängt/ stürzt ab/ friert ein** beim Schritt "**DirectX-Plugins werden initialisiert...**" während des Starts?

A: Ähnlich, versuchen Sie, **das DirectX-Plugin-Scannen beim Start zu deaktivieren**, mit dem Befehl **` /NODXGROVEL`**.

<br>

F: VEGAS **stürzt ab/friert ein (Fehlercode `0xE0434352`)** beim Schritt "**UI wird initialisiert...**" während des Starts, oder **sofort nachdem das Hauptfenster erscheint**?

A: Möglicherweise ein Erweiterungsproblem. Versuchen Sie, **Dateien aus `C:\ProgramData\VEGAS Pro\Application Extensions\`** und anderen [Erweiterungsordnern](#xii-scripts-erweiterungen-bezogene) zu löschen. Sie können alle löschen oder versuchen, zu isolieren, welche Erweiterung problematisch ist.

<br>

F: VEGAS-Startfehler: **`Skripthost kann nicht initialisiert werden`** / andere **.NET Framework** häufige Fehler (z. B. **`0xE0434352`**)?

A: VEGAS-Skripte basieren auf .NET Framework. Versuchen Sie, das .NET Framework-Reparatur-Tool auszuführen: https://support.microsoft.com/topic/942a01e3-5b8b-7abb-c166-c34a2f4b612a

<br>

F: VEGAS **stürzt ab/friert ein (Fehlercode `0xC0000005`, Fehlermodul `C:\WINDOWS\SYSTEM32\ntdll.dll`)** beim Schritt "**Fenster werden erstellt...**" während des Starts?

A: Gehen Sie zu **`Systemsteuerung -> Programme -> Programme und Funktionen`** und überprüfen Sie, ob **MSVC 1450 Laufzeitbibliotheken** installiert sind, d. h. die **14.50 Version von `Microsoft Visual C++ 2015-2022 Redistributable` für sowohl x86 als auch x64**. Microsoft hat eine Version dieser Laufzeitbibliotheken verteilt, die VEGAS zum Absturz bringt. Diese Version wird automatisch mit **Visual Studio 2026** installiert und kann aus anderen Gründen installiert werden. Dies ist ein Microsoft-Problem, auf eine vollständige Lösung von ihnen wartend. Einige betroffene Benutzer fanden heraus, dass das Deinstallieren der Laufzeitbibliotheken allein möglicherweise nicht funktioniert. Hier ist eine vorübergehende Problemumgehung (**wenn Sie sich nicht mit DLLs befassen möchten, springen Sie zum letzten Schritt und verwenden Sie die von mir bereitgestellte `x64` `vcomp140.dll`**):

1. Gehen Sie zur Visual Studio Download-Seite: [https://visualstudio.microsoft.com/downloads/](https://visualstudio.microsoft.com/downloads/), finden und laden Sie die Visual Studio 2022 Build Tools herunter (Dateiname `vs_BuildTools.exe`).

2. Während der Installation, wenn Sie nach zusätzlichen Komponenten gefragt werden, gehen Sie zu `Einzelne Komponenten`, suchen Sie nach `MSVC`, aktivieren Sie **`MSVC v143 - VS 2022 C++ x64/x86 Build-Tools (neueste)`**, und setzen Sie die Installation fort.

<ImageOnDemand alt="MSVC 143 Installieren" src="vegtips/image008_msvc143.png" />

3. Nach der Installation gehen Sie zum MSVC-Installationspfad: `C:\Programme\Microsoft Visual Studio\2022\Community\VC\Redist\MSVC\`. Es werden Ordner wie `v143` und `14.44.35112` (abhängig von der installierten Version) vorhanden sein. Derjenige, der `14.44.35112` ähnelt, ist das Ziel.

4. Navigieren Sie zu `14.44.35112\onecore\x64\Microsoft.VC143.OpenMP`, finden Sie **`vcomp140.dll`**, kopieren Sie es und fügen Sie es in Ihr VEGAS-Installationsverzeichnis ein. Starten Sie VEGAS neu.

<small>
Download-Link für <code>x64</code> <code>vcomp140.dll</code>: <a href="/downloads/fixes/vcomp140.dll">vcomp140.dll</a><br>
Wenn Sie <code>ARM</code> Windows verwenden, wählen Sie den <code>ARM</code>-Ordner, nicht <code>x64</code>. Wenn Sie nicht wissen, was <code>ARM</code> ist, sind Sie wahrscheinlich ein <code>x64</code>-Benutzer; verwenden Sie die <code>x64</code>-Version.<br>
Referenz: <a href="https://www.vegascreativesoftware.info/us/forum/posts--149890/#ca943290">https://www.vegascreativesoftware.info/us/forum/posts--149890/#ca943290</a><br>
</small>

<br>

F: Nach dem Öffnen von VEGAS gibt es **Rauschen/kein Audio/...**?

A: **Gehen Sie zu `Systemsteuerung -> Hardware und Sound -> Sound`, öffnen Sie `Eigenschaften` für Ihr aktuelles Wiedergabegerät. Auf der Registerkarte `Erweitert`, unter `Exklusivmodus`, deaktivieren Sie `Anwendungen erlauben, exklusive Kontrolle über dieses Gerät zu übernehmen`, ODER ändern Sie das `Standardformat` zu `2 Kanal, 24 Bit, 44100 Hz`.** Wenn das nicht funktioniert, versuchen Sie **Ihre Soundkartentreiber neu zu installieren**.

<ImageOnDemand alt="Audiogerät" src="vegtips/image009_sound_device.png" />

<br>

F: **Eine spezifische Projektdatei stürzt ab/hat Fehler beim Öffnen**?

A: Versuchen Sie, **eine beliebige im Projekt verwendete Mediendatei umzubenennen**, damit das Projekt sie nicht finden kann. Wenn Sie sie erneut öffnen, **ignorieren Sie die "Medien offline" Eingabeaufforderungen**. Nachdem Sie erfolgreich geöffnet haben, **benennen Sie die Datei zurück oder ersetzen Sie sie**.

<small>
Siehe: <a href="https://tieba.baidu.com/p/7511708251">https://tieba.baidu.com/p/7511708251</a><br>
</small>

<br>

F: **Das Öffnen mehrerer VEGAS-Instanzen verursacht Abstürze**?

A: Dies kann in allen VEGAS-Versionen aufgrund eines spezifischen Fensterlayouts auftreten. Es ist wahrscheinlicher, wenn das Vorschaufenster **ausgekoppelt (schwebend)** ist. Eine vorübergehende Lösung: **Bevor Sie eine neue VEGAS-Instanz öffnen, schließen oder docken Sie das Vorschaufenster der alten Instanz an**, um potenzielle Abstürze zu vermeiden.

<small>
Referenz: <a href="https://www.vegascreativesoftware.info/us/forum/posts--148817/">https://www.vegascreativesoftware.info/us/forum/posts--148817/</a><br>
</small>

<br>

F: **Nachdem VEGAS startet, gibt es einen WebView-Fehler (`msedgewebview2.exe`, oder `WebView2-Initialisierung fehlgeschlagen`, usw.)**?

A: Die VEGAS Hub-Funktion verwendet Microsoft Edge WebView. Wenn Sie **den Hub nicht benötigen, schließen Sie einfach sein Fenster über das Menü `Ansicht -> Fenster`**. Sie können auch versuchen, den `WebView2`-Ordner im [VEGAS-Cache-Verzeichnis](#vegas-einstellungen-und-cache-verzeichnis) zu löschen: **`%localappdata%\VEGAS Pro\23.0\WebView2`** (wobei `23.0` Ihre VEGAS-Version ist).

<br>

F: **[VP19]** Nachdem eine Weile gearbeitet wurde, wird das VEGAS-Fenster plötzlich **grafisch beschädigt, UI verzerrt, wird langsam, kann nicht fortgesetzt werden**, erfordert einen Neustart?

A: Dies ist ein **VP19-spezifisches Problem in älteren Builds (z. B. `19 Build 341`)**. **Aktualisieren Sie auf `19 Build 651`**, um es zu beheben.

<small>
Referenz: <a href="https://www.vegascreativesoftware.info/us/forum/posts--131391/">https://www.vegascreativesoftware.info/us/forum/posts--131391/</a><br>
</small>

<br>

F: **[VP19, VP20]** VEGAS stürzt sofort nach dem Ladebildschirm ab, **ohne Fehlermeldungs-Pop-up**?

A: Überprüfen Sie Ihre VEGAS-Build-Nummer. Ist es `19 Build 648` oder früher, oder `20 Build 402` oder früher?

Versionen in diesem Bereich haben einen kritischen Bug, der einen **direkten Absturz nach dem Laden** verursacht, und können **nur durch Trennen vom Internet oder Ändern des Systemdatums geöffnet werden**.

Die Lösung ist, **VP19 auf `19 Build 651` oder höher, und VP20 auf `20 Build 403` oder höher zu aktualisieren**. (Hinweis: VP19 final ist `19 Build 651`, VP20 final ist `20 Build 411`.)

<br>

F: **[`22 Build 122` und höher]** VEGAS läuft nicht, kein Ladebildschirm?

A: Ein Windows-Update-Problem. Laden Sie und führen Sie vc_redist.x86.exe und vc_redist.x64.exe aus, um C++-Laufzeitbibliotheken zu reparieren: https://learn.microsoft.com/cpp/windows/latest-supported-vc-redist

Feedback deutet darauf hin, dass möglicherweise auch andere Software (wie OBS) aktualisiert werden muss.

<small>
Referenz: <a href="https://www.vegascreativesoftware.info/us/forum/posts--147255/">https://www.vegascreativesoftware.info/us/forum/posts--147255/</a><br>
</small>

<br>

F: <sup>**Französische Version**</sup> Die französische Version von VEGAS Pro stürzt beim Start ab?

A: Dies ist ein Problem, **spezifisch für die französische Version**. Die einzige Lösung ist **Deinstallation und Neuinstallation der englischen Version**. MAGIX beabsichtigte, es zu beheben, hat aber keine klare Lösung. Benutzer, die dieses Problem reproduzieren können, werden ermutigt, den MAGIX-Support zu kontaktieren.

<small>
Referenz: <a href="https://www.vegascreativesoftware.info/us/forum/posts--147150/#ca926950">https://www.vegascreativesoftware.info/us/forum/posts--147150/#ca926950</a><br>
</small>

<br>

## V. Dateiimport bezogen

### Allgemeine Fehlerbehandlung für Dateien, die nicht importiert werden/importiert werden mit Störungen/grüne Blitze:

#### 1. Legacy AVC und HEVC Decodierung aktivieren/deaktivieren

- VP18 und höher: **`Einstellungen -> Datei-E/A`, aktivieren/deaktivieren Sie `Legacy AVC-Decodierung` und `Legacy HEVC-Decodierung`**.

- VP15-17: Greifen Sie auf [Interne Einstellungen](#auf-die-internen-vegas-einstellungen-zugreifen) zu, suchen Sie nach `Reader`, finden Sie:
  - `Use So4 Audio Reader for Intermediate/HEVC`
  - `Enable So4 Compound Reader for AVC/M2TS`
  - `Enable Mx Compound Reader for HEVC/ProRes` <sup>nur VP17</sup>

  `TRUE` = `Neuen Decoder verwenden`, `FALSE` = `Alten Decoder verwenden`. Standard ist `TRUE`. Versuchen Sie, diese zu ändern.

- VP14 und darunter verwenden nur den alten Decoder; können nicht wechseln.

Seit `21 Build 300` haben sich die Bedeutungen von "Legacy" und "neu" Decodern vertauscht. Die ursprünglichen "Legacy AVC/HEVC-Decoder" sind jetzt die standardmäßigen neuen Decoder. Der ursprüngliche "neue AVC-Decoder" wurde zum "Legacy AVC-Decoder", und der ursprüngliche "neue HEVC-Decoder" wurde zum "experimentellen HEVC-Decoder".

Bei Decodierungsproblemen (z. B. Medien werden **komplett grün oder schwarz**, **kein Videostream**, oder sogar **Audio-Decodierungsprobleme**) versuchen Sie, **diese beiden Legacy-Decoder zu aktivieren oder zu deaktivieren**.

Wenn das nicht funktioniert, versuchen Sie, die **`Hardware-Decoder`**-Option darunter umzuschalten (erfordert möglicherweise das Deaktivieren der Legacy-Decodierung).

<br>

#### 2. Resample deaktivieren

`Datei -> Eigenschaften`, unter `Resample`, wählen Sie **`Resample deaktivieren`**.

Das Deaktivieren von Resample behandelt **rahmenbezogene Probleme**. Wenn Resample aktiviert ist (z. B. 30fps-Material in einem 60fps-Projekt), **erzeugt VEGAS Frame-Blending zwischen Originalrahmen** (sichtbar als **Überblendung zwischen zwei Frames** beim Frame-für-Frame-Scrolling). **Dies kann zu Frame-Generierungsfehlern führen, die zu Flackern (grüne/schwarze Blitze) führen. Es wird im Allgemeinen empfohlen, es zu deaktivieren.**

In VP13 und früher können Sie **die Resample-Einstellung des Projekts nicht direkt in `Projekteigenschaften` ändern**. Wählen Sie stattdessen ein Event auf der Timeline, **`Rechtsklick -> Schalter -> Resample deaktivieren`**.

<br>

#### 3. Entsprechende Codecs installieren

Zum Beispiel erfordern QuickTime-Formate die Installation von QuickTime 7.7.9 mit ausgewähltem QuickTime-Plugin während der Installation.

Die Frage der Installation des K-Lite Codec Pack wird immer noch diskutiert. Einige Benutzer im offiziellen Forum sagen, dass es "mit VEGAS' eingebauten Codecs kollidieren könnte" und raten davon ab.

<br>

#### 4. Mediendateien neu enkodieren

Wenn die oben genannten Methoden **Importfehler/Decodierungsprobleme/ schwere Verzögerung nach dem Import** nicht lösen, versuchen Sie, die Datei neu zu enkodieren. Empfohlene Einstellungen: Video-Codec AVC, Audio-Codec AAC, Container mp4, konstante Framerate. Wenn nur Audio Probleme hat, können Sie **das Audio als WAV-Datei extrahieren** und separat importieren, gruppieren Sie es (G) mit dem Originalvideo.

<br>

#### 5. Einstellungen zurücksetzen

Ein häufiges Szenario: **Importierter Audio ist komplett verrauscht**. In diesem Fall versuchen Sie **[Einstellungen zurücksetzen](#5-einstellungen-zurücksetzen)**.

<br>

### Dateiimport Q&A

F: Kann nicht **Dateien aus Ordnern per Drag & Drop** in VEGAS importieren, nur die `Öffnen`-Schaltfläche verwenden?

A: Wenn VEGAS **mit Administratorrechten** ausgeführt wird, ist Drag & Drop deaktiviert. Die Lösung ist, **VEGAS ohne Administratorrechte auszuführen**.

Hinweis: Wenn Sie eine **portable Version von VEGAS (markiert mit `Portable`)** verwenden, muss sie möglicherweise mit Administratorrechten starten, was Drag & Drop verhindert. Einige "Lösungen" beinhalten das Deaktivieren von UAC über die Registrierung, was **nicht empfohlen** wird. **Es ist besser, auf eine reguläre Version umzusteigen, nicht die portable.**

**Probleme mit portabler VEGAS: Erfordert Administratorrechte; kann nicht mehrere Instanzen ausführen; erkennt System-Umgebungsvariablen nicht; einige Plugins (z. B. [Voukoder](#empfohlenes-render-plugin-voukoder)) benötigen manuelle Platzierung des Konnektors. Vermeiden Sie es, wenn möglich.**

<br>

F: Fehler beim Versuch zu importieren: **`Warnung: Beim Öffnen einer oder mehrerer Dateien ist ein Fehler aufgetreten. Die Dateien konnten nicht geöffnet werden. Stellen Sie sicher, dass die Dateien existieren und Sie Zugriffsberechtigungen für die Datei/den Ordner haben.`**

A: Überprüfen Sie, ob der **Installationspfad** von VEGAS **nur [halbe Breite englische Zeichen (einschließlich halbbreiter Leerzeichen)]** enthält. Wenn er andere Zeichen wie Chinesisch enthält, **deinstallieren und neu installieren Sie VEGAS in einen Pfad, der nur halbbreite englische Zeichen enthält**.

<br>

F: Möchte **mkv-Dateien importieren**, kann aber nicht.

A: In VP17 und höher können Sie **`Einstellungen -> Datei-E/A`, `MKV-Reader aktivieren`**, VEGAS neu starten und erneut versuchen.

Diese Funktion hat viele Bugs, daher könnte der Import immer noch fehlschlagen. Wenn ja, vorher mit anderer Software konvertieren.

Hinweis: `21 Build 187` und höher unterstützen mkv-Import standardmäßig; keine manuelle Aktivierung erforderlich.

Auch: Über das Konvertieren von mkv-Dateien

Eine Videodatei hat zwei Schichten: den inneren Enkodierungsstrom und den äußeren Container. Importfehler können entweder durch nicht unterstützten Strom oder Container verursacht werden.

Für eine Datei mit **AVC (H.264)**-Strom und **mkv**-Container kann VEGAS sie nicht importieren aufgrund von **nicht unterstütztem Container**, aber der **innere AVC-Strom wird unterstützt**. Beim Konvertieren können Sie nur den Container ändern, nicht den Strom. Mit [FFmpeg](https://ffmpeg.org/) macht der Befehl `ffmpeg -i input.mkv -c:v copy output.mp4` dies. In GUI-Konvertern (wie [`HandBrake`](https://handbrake.fr/)) wird dies oft `Kopieren` oder `Remuxen` genannt. Es ist schnell und empfohlen.

Für eine Datei mit **VP9**-Strom und **mkv**-Container sind sowohl Strom als auch Container nicht unterstützt (VEGAS unterstützt VP9 nicht). Selbst das Konvertieren des Containers zu mp4 wird nicht funktionieren. Sie müssen **sowohl Strom als auch Container neu enkodieren**. Zum Beispiel könnten von YouTube heruntergeladene mkv-Dateien VP9-Video haben. Verwenden Sie ein Tool wie [MediaInfo](https://mediaarea.net/en/MediaInfo), um den Codec zu überprüfen.

<br>

F: Von **OBS** aufgenommenes Video wird in VEGAS importiert mit **falscher, sehr kurzer Länge**?

A: Dies passiert, wenn OBS fragmentiertes MP4 für die Aufnahme verwendet, das VEGAS nicht richtig decodieren kann. **Ändern Sie das Ausgabeformat in den OBS-Einstellungen**. Für bestehendes Material verwenden Sie die Kopierstrommethode, z. B. `ffmpeg -i input.mp4 -c copy output.mp4`.

<small>
Referenz: <a href="https://www.vegascreativesoftware.info/us/forum/posts--144992/">https://www.vegascreativesoftware.info/us/forum/posts--144992/</a><br>
</small>

<br>

F: **Kann einige mov-Dateien mit bestimmten Codecs nicht importieren**?

A: Stellen Sie zuerst sicher, dass QT Lite oder QuickTime installiert ist. **QT Lite 4.1.0** wird im Allgemeinen empfohlen. Für VP17 und höher unterstützt der neue Decoder ProRes mov-Dateien, aber andere QuickTime-Codecs werden standardmäßig nicht mehr unterstützt. Sie müssen **`Einstellungen -> Eingestellte Funktionen`, `QuickTime-Plugin aktivieren`**, um andere QuickTime mov-Dateien zu importieren.

Hinweis: Wenn Sie Apples `QuickTime 7.7.9` installieren, stellen Sie sicher, dass `QuickTime-Plugin` während der Installation ausgewählt ist.

**Seit VP23 hat VEGAS die QuickTime-Kompatibilität effektiv aufgegeben und kann keine QuickTime-enkodierten mov-Dateien mehr importieren oder rendern.**

<br>

F: Nach dem Import von Mediendateien, die ursprünglich **mit Alphakanal (mov oder png)** waren, wird der **Alpha-Transparenzkanal in VEGAS nicht korrekt angezeigt**?

A: In VEGAS, **Rechtsklick auf die Mediendatei oder das Event -> Eigenschaften**, wechseln Sie zur Registerkarte `Medien`, finden Sie `Alpha-Kanal`, ändern Sie ihn zu **`Direkt (ohne Mattierung)`**.  
<small>
(Hinweis: Für <code>Alpha-Kanal</code>, <b>solange Sie nicht <code>Undefiniert</code> oder <code>Kein</code> wählen</b>, sollte der Alphakanal angezeigt werden.)
</small>

Sie können diese Eigenschaft auch für mehrere Dateien im **`Projektmedien`**-Fenster ändern.

<br>

F: Direkt von **Webplattformen wie TikTok** mit Tools wie IDM heruntergeladene Videos (**Audio-Codec `AAC LC SBR (HE-AAC)`**), wenn in VEGAS importiert, haben **zufällige Audio-Störungen, Rauschen**, oder werden **falsch als Mono erkannt**?

A: Dies ist **vollständig ein VEGAS-Software-Bug**, und bis zur neuesten Version (`23 Build 302`) nicht behoben. **Tests zeigen, dass alle vorherigen Methoden scheitern. Die einzige Lösung ist, das Audio zu extrahieren/neu zu enkodieren und separat zu importieren.** Über die TikTok-App heruntergeladene Videos sind nicht betroffen.

<small>
Referenz: <a href="https://www.vegascreativesoftware.info/us/forum/posts--140457/#ca884682">https://www.vegascreativesoftware.info/us/forum/posts--140457/#ca884682</a><br>
</small>

<br>

F: 4:3 Videos/Bilder werden importiert und **horizontal gestreckt** auf 16:9. Wie zu beheben?

A: Dies passiert, wenn `4:3`-Medien in ein `16:9`-Projekt mit bestimmter Autokonfiguration importiert werden. Behebung: **Rechtsklick auf das Medium -> Eigenschaften -> Medien-Tab**, finden Sie `Pixel-Seitenverhältnis`, ändern Sie von `1.3333` zu `1`, dann klicken Sie auf die Speichern-Schaltfläche neben dem `Stream`-Abschnitt<sup>(`Einstellungen im Videoprofil für zukünftige automatische Erkennung speichern`)</sup>. Dies stellt sicher, dass zukünftige `4:3`-Importe nicht automatisch gestreckt werden. Dies kann auch für mehrere Dateien im **`Projektmedien`**-Fenster durchgeführt werden.

<ImageOnDemand alt="Video-Profil-Schaltfläche" src="vegtips/image010_profile_button.png" />



Wenn Sie "**Unbekannter Fehler beim Versuch, Videoprofil zu speichern**" erhalten:

1. Drücken Sie **`Win + R`** für `Ausführen`.

2. Geben Sie ein (wobei `23.0` Ihre VEGAS-Version ist; schließen Sie den Pfad in englische Anführungszeichen `""` ein):
  - **`notepad "C:\ProgramData\VEGAS Pro\23.0\Vegas profiles.ini"`** <sup>VP17+</sup>
  - **`notepad "C:\ProgramData\VEGAS\VEGAS Pro\16.0\Vegas profiles.ini"`** <sup>VP14+</sup>
  - **`notepad "C:\ProgramData\Sony\Vegas Pro\13.0\Vegas profiles.ini"`** <sup>VP13-</sup>

3. Anstatt auf `OK` zu klicken, drücken Sie **`Strg + Umschalt + Eingabe`**, um die Datei mit Administratorrechten zu öffnen. Bearbeiten Sie manuell das Standardimportprofil für `4:3`, ändern Sie alle `1.3333333333`-Werte zu `1`, dann speichern.
  - Hinweis: Das Öffnen ohne Administratorrechte führt dazu, dass Notepad `Speichern unter` anzeigt, anstatt in die Originaldatei zu schreiben.

<ImageOnDemand alt="Video-Profil-Bearbeitung 1" src="vegtips/image011_profile_edit_1.png" />

<ImageOnDemand alt="Video-Profil-Bearbeitung 2" src="vegtips/image012_profile_edit_2.png" />

<small>
Referenz: <a href="https://www.vegascreativesoftware.info/us/forum/posts--128760/">https://www.vegascreativesoftware.info/us/forum/posts--128760/</a><br>
</small>

<br>

## VI. Software-Betrieb und Anzeige Q&A

F: **Video-Vorschaufenster zeigt nichts**?

<ImageOnDemand alt="Trimmer oder Vorschau?" src="vegtips/image013_trimmer_or_preview.png" />

A: Überprüfen Sie, ob Sie zum **`Trimmer`**-Fenster gewechselt haben. Wenn ja, **wechseln Sie zurück zum `Video-Vorschau`-Fenster**. Wenn Sie das getrennte `Trimmer`- und `Vorschau`-Fensterlayout von älteren Versionen (VP14 und darunter) bevorzugen, gehen Sie zum Menü **`Ansicht -> Fensterlayout`** und wählen Sie **`Quellfensterlayout`**.

<br>

F: Aus Versehen **xxxx-Fenster geschlossen/herausgezogen**. Wie **bekomme ich es zurück/docke es an**?

A: Gehen Sie zum Menü **`Ansicht -> Fenster`** und aktivieren Sie das Fenster, das Sie benötigen. Das VEGAS-Fensterlayout ist hochgradig anpassbar. Angedockte Fenster können herausgezogen werden; nicht angedockte Fenster können angedockt werden, indem Sie beim Ziehen **`Strg`** gedrückt halten. Seit VP23 können Fenster über, unter, links oder rechts der Timeline angedockt werden. Ältere Versionen unterstützen nur das Andocken über der Timeline.

<br>

F: Klicken auf die **Pan/Crop-Schaltfläche/FX-Schaltfläche/xxxx-Schaltfläche** **öffnet das Fenster nicht**?/**xxxx-Fenster verschwunden**?

A: Normalerweise wurde das Fenster versehentlich unter die Windows-Taskleiste gezogen und kann nicht hochgezogen werden.

Einfache Lösung: **Klicken Sie auf die entsprechende Schaltfläche, dann sofort `Alt + Leertaste` drücken, wählen Sie `Verschieben`**, und ziehen Sie das Fenster hoch. Alternativ verstecken Sie vorübergehend die Windows-Taskleiste, dann ziehen. Als letzten Ausweg versuchen Sie `Ansicht -> Standardlayout wiederherstellen`.

<ImageOnDemand alt="Fenster verschieben" src="vegtips/image014_window_move.gif" />

<br>

F: FX hinzugefügt, aber im Vorschaufenster wird das **FX nicht vollständig angezeigt, erscheint links/rechts geteilt**?

<ImageOnDemand alt="Geteilte Bildschirmansicht" src="vegtips/image015_split_screen.png" />

A: Wie gezeigt, überprüfen Sie, ob **`Geteilte Bildschirmansicht`** aktiviert ist.

<br>

F: Etwas angeklickt, und eine einzelne Videospur **teilt sich in A/B-Spuren**. Wie rückgängig machen?

<ImageOnDemand alt="AB-Spur" src="vegtips/image016_ab_track.png" />

A: Normalerweise passiert dies durch Doppelklicken auf den Rand eines Events. **Doppelklicken Sie erneut auf den Event-Rand**, um es zu beheben.

Wenn das nicht funktioniert, in der Spurüberschrift (linke Seite mit `Pegel` und Schaltflächen), **Rechtsklick -> Spurebenen erweitern**, und deaktivieren Sie diese Option.

Um versehentliches Auslösen in VP18+ zu verhindern, gehen Sie zu **`Einstellungen -> Allgemein`**, scrollen Sie nach unten und **deaktivieren Sie `Doppelklick auf Event-Rand um erweiterten Bearbeitungsmodus umzuschalten`**.

<br>

F: Drücken von **Rückgängig (`Strg + Z`)** während das **Media Generator**-Fenster geöffnet ist, lässt den Media Generator-Effekt **aus der Vorschau verschwinden**?

A: Wenn der Fokus auf dem **Bearbeitungsfenster des Media Generators** liegt, kann das Drücken von **Rückgängig (`Strg + Z`)** dazu führen, dass die **`Bildgröße`** und **`Dauer`**-Parameter des Media Generators auf abnormale Werte ändern. Wiederholtes Drücken von `Strg + Z` hilft in diesem Fall wahrscheinlich nicht.

Beide Parameter befinden sich in der oberen linken Ecke des Media Generator-Fensters. Sie müssen manuell **die `Bildgröße` und `Dauer` des Media Generators auf ihre ursprünglichen Werte zurücksetzen**. Standardmäßig entspricht `Bildgröße` den Projektabmessungen (z. B. `1920*1080`), und `Dauer` ist standardmäßig 5 Sekunden (oder `00:00:05.00` auf dem `Zeit & Frames`-Lineal).

- Ein weiterer verwandter kleiner Bug: Nachdem Sie die `Bildgröße` und `Dauer` eines Media Generators geändert haben, wenn Sie sofort das Bearbeitungsfenster eines zweiten Media Generators auf der Timeline öffnen, kann der zweite Generator die `Bildgröße` und `Dauer`-Parameter vom ersten übernehmen.

<br>

F: **Einige FX-Fenster** (z. B. (Legacy) Text, TV Simulator FX, andere DXT-Plugins) **werden unvollständig angezeigt**?

A:

1. Installieren Sie die **sserife.fon**-Schriftart.
    - Download-Link: https://github.com/taveevut/Windows-10-Fonts-Default/blob/master/sserife.fon

2. Wenn das Installieren der Schriftart nicht hilft, gehen Sie zu **`Systemsteuerung -> Region -> Verwaltung -> Systemgebietsschema ändern`**. Stellen Sie sicher, dass **`Beta: Unicode UTF-8 für weltweite Sprachunterstützung verwenden`** **NICHT** aktiviert ist, wie unten gezeigt.

<ImageOnDemand alt="Windows Unicode-Einstellungen" src="vegtips/image017_unicode_settings.png" />

<small>
Referenz: <a href="https://www.vegascreativesoftware.info/us/forum/posts--138828/">https://www.vegascreativesoftware.info/us/forum/posts--138828/</a><br>
</small>

<br>

F: Projekteigenschaften / Benutzerdefinierte Render-Vorlage / Einstellungsfenster sind **zu groß, können nicht vollständig angezeigt werden, OK kann nicht geklickt werden**?

<ImageOnDemand alt="Fenster zu groß" src="vegtips/image018_window_too_large.png" />

A: VEGAS-Fenstergröße skaliert mit Windows-Anzeigeeinstellungen. Hohe DPI-Skalierung kann VEGAS-Fenster sehr groß machen, was bei extremen Skalierungen zu abgeschnittenen Anzeigen führt. Um "OK" zu klicken, können Sie die **`Eingabe`-Taste** drücken. Wenn Sie das vollständige Fenster angezeigt benötigen, müssen Sie **die Bildschirm-DPI-Skalierung in Windows-Einstellungen auf 100% ändern**, bevor Sie das Fenster öffnen, dann wieder zurückändern. Alternativ **setzen Sie die DPI-Skalierung von VEGAS einzeln auf 100%**: Rechtsklick auf die VEGAS ausführbare Datei oder Verknüpfung -> `Eigenschaften -> Kompatibilität -> Hohe DPI-Einstellungen ändern`. **Setzen Sie `Skalierung durch:` auf `Anwendung`**.

<ImageOnDemand alt="Hohe DPI - Anwendung" src="vegtips/image019_high_dpi_application.png" />

<br>

F: Nach dem **Zurückwechseln zu VEGAS** von einer anderen Software, **dauert es lange zu puffern**, bevor es normal zurückkehrt?

A: **`Einstellungen -> Allgemein`**, deaktivieren Sie `Mediendateien schließen, wenn Anwendung inaktiv ist`. Hinweis: Wenn diese Option deaktiviert ist, **hält VEGAS Mediendateien in Verwendung, was Sie daran hindert, die Originaldateien außerhalb von VEGAS zu ändern/löschen**. (Beeinflusst nicht Ersetzen/Löschen innerhalb VEGAS.)

<br>

F: Versucht, **ein Video aus dem `Projektmedien`-Fenster** auf die Timeline zu ziehen, aber es **beginnt versehentlich "Trimming"**?

A: Ein altes, ärgerliches Problem: Ziehen auf dem Videobild löst "Trimming" aus.

Standardlösung: **Drücken Sie `Strg + Z`, um rückgängig zu machen, dann ziehen Sie am Dateinamen unter dem Video-Miniaturbild, nicht auf dem Bild selbst.**

VP21 fügte eine **`Hover-Scrub umgehen`**-Schaltfläche hinzu. Aktivieren verhindert Fehlbedienung, aber Sie verlieren die Fähigkeit, Video durch Schweben zu vorschauen (nur Miniaturbild sehen).

<ImageOnDemand alt="Hover-Scrub umgehen" src="vegtips/image020_bypass_hover_scrub.png" />

<p align="center">Eigentlich wurde diese Schaltfläche in VP20 hinzugefügt, aber in VP20 hatte sie keine Wirkung.</p>

<br>

F: **Wenn in VEGAS abgespielt wird, bringt die Leertaste den Cursor zum Start zurück. Ich möchte, dass die Leertaste an der aktuellen Position pausiert.**

A: In VEGAS bedeutet "Pause" "Wiedergabe stoppen, Cursor bleibt", während "Stopp" "Wiedergabe stoppen, Cursor kehrt zum Start zurück".

In VP22 und darunter ist standardmäßig **`Eingabe` "Pause", `Leertaste` "Stopp"**. In `21 Build 108` und früher konnten Sie sie über **`Einstellungen -> Allgemein -> Leertaste und F12 für Wiedergabe/Pause anstelle von Wiedergabe/Stopp verwenden`** tauschen.

Seit `21 Build 187` wurde diese Option zur **Transportleiste unter dem Vorschaufenster** verschoben, neben Wiedergabe/Pause/Stopp-Schaltflächen. Wenn nicht sichtbar, erweitern Sie die drei Punkte rechts.

<ImageOnDemand alt="Cursor-Transport" src="vegtips/image021_cursor_transport.png" />

Nach dem VP23-Update änderte sich das Standardverhalten: **`Eingabe` ist "Stopp", `Leertaste` ist "Pause"**. Die Option wurde zu `Leertaste und F12 für Wiedergabe/Stopp anstelle von Wiedergabe/Pause verwenden`, verfügbar in beiden `Einstellungen -> Allgemein` und der Transportleiste.

<br>

F: **Absturz beim Kopieren von Pan/Crop-Keyframes**?

A: Ein Windows 11-Update-Problem. **Upgrade auf `22 Build 250`** behebt es.

- Vorübergehende Lösung für älteres VEGAS: **Rechtsklick auf VEGAS ausführbare Datei/Verknüpfung -> `Eigenschaften -> Kompatibilität`, unter `Kompatibilitätsmodus` wählen Sie `Windows 8`**.

<small>
Referenz: <a href="https://www.vegascreativesoftware.info/us/forum/posts--148746/">https://www.vegascreativesoftware.info/us/forum/posts--148746/</a><br>
</small>

<br>

F: <sup>VP22+</sup> **Linksziehen auf der Timeline wählt jetzt Events aus, kann keinen Zeitbereich mehr auswählen**?

A: Nach VP22 wählt Linksziehen auf der Timeline Events aus, während Rechtsziehen einen Zeitbereich auswählt. Wenn Sie an die alte Logik gewöhnt sind, können Sie **`Einstellungen -> Bearbeitung -> Rechte Maustaste zum Wechseln zum Auswahlbearbeitungswerkzeug verwenden`** aktivieren, um Links-/Rechtsfunktionen zu tauschen, ähnlich der Reaper-Standardlogik.  
<small>
Wenn dies in älteren Versionen passiert, bestätigen Sie zuerst, dass Ihr Bearbeitungswerkzeug korrekt ausgewählt ist (drücken Sie <code>D</code>-Taste zweimal).
</small>

Dieses Update führte auch ein kleines Problem ein: Der tatsächliche Event-Auswahlbereich ist aufgrund eines neuen Versatzwertes etwas kleiner als der mit der Maus gezeichnete Bereich. Gehen Sie zu [Interne Einstellungen](#auf-die-internen-vegas-einstellungen-zugreifen), suchen Sie nach **`Default SelectionMode Offset`**, ändern Sie es zu **`0`**.

<br>

## VII. Vorschau bezogen

### Allgemeine Fehlerbehandlung für Vorschau-Flackern Grün/Schwarz, Materialstörungen usw.

1. Zuerst versuchen **[GPU-Beschleunigung deaktivieren](#1-gpu-beschleunigung-deaktivieren)**, **[Resample deaktivieren](#2-resample-deaktivieren)**, **[Legacy-Decoder aktivieren/deaktivieren](#1-legacy-avc-und-hevc-decodierung-aktivierendekativieren)**.

2. Wechseln Sie die Vorschaugualität oben links im Vorschaufenster (z. B. `Beste (Voll)`), um zu sehen, ob es normalisiert.

3. **Spezifischer Plugin-Bug**: Versuchen Sie, Video-FX zu entfernen, die das Problem verursachen könnten.

4. Alle originalen Mediendateien neu enkodieren und ersetzen.

5. Unerklärliches Vorschau-Flackern/Störungen sind frustrierend. Wenn die obigen Methoden scheitern, haben Sie möglicherweise Pech.

<br>

### Vorschau Q&A

F: Nach **Hinzufügen von FX / Ändern von Untertiteltext / Bearbeiten von FX** aktualisiert sich das **Vorschaufenster nicht**. Änderungen erscheinen nur **nach Schließen des FX-Fensters**?

A: Dieses Problem erscheint mit **bestimmten Nvidia-Treiberversionen**. Hier sind Lösungen:

1. **[GPU-Beschleunigung deaktivieren](#1-gpu-beschleunigung-deaktivieren)**. Einfach und effektiv. **(Verwendung von integrierter GPU-Beschleunigung funktioniert auch.)**

2. Um **mit aktivierter GPU-Beschleunigung** zu lösen, OpenGL-Einstellungen ändern.

    Gehen Sie zu [Interne Einstellungen](#auf-die-internen-vegas-einstellungen-zugreifen), suchen Sie nach **`Enable OpenCL/GL Interop`**, setzen Sie auf **`FALSE`**.

    Alternativ, ändern Sie Einstellungen in der **Nvidia Systemsteuerung**:

    Öffnen Sie **NVIDIA Systemsteuerung**, klicken Sie links auf **`3D-Einstellungen verwalten`**, wechseln Sie rechts zum Tab **`Programmeinstellungen`**. Klicken Sie `Hinzufügen`, wählen Sie die VEGAS ausführbare Datei, und ändern Sie **`OpenGL GDI-Kompatibilität`** von `Globale Einstellung verwenden` zu **`Kompatibilität bevorzugen`**. Starten Sie VEGAS neu. (Wenn Sie mehrere VEGAS-Versionen haben, setzen Sie jede separat.)

<ImageOnDemand alt="NVIDIA OpenGL GDI-Kompatibilität" src="vegtips/image022_nvidia_opengl.png" />

3. Nvidia-Treiber auf `522.30` oder früher zurückrollen, oder auf die neueste aktualisieren. Bei Neuinstallation **wählen Sie "Benutzerdefiniert" Installation** und aktivieren **`Saubere Installation durchführen`**. Dies setzt alle Treibereinstellungen auf Standard zurück, daher **nicht empfohlen**.

<small>
Referenz: <a href="https://www.vegascreativesoftware.info/us/forum/posts--138196/">https://www.vegascreativesoftware.info/us/forum/posts--138196/</a><br>
</small>

<br>

## VIII. Rendering bezogen

### Empfohlenes Render-Plugin: Voukoder

Bei der Verwendung der eingebauten Render-Vorlagen von VEGAS müssen wir **ständig Auflösung, Framerate, Bitrate usw. anpassen**, um die Projekt-Eigenschaften abzugleichen und die gewünschte Qualität zu erreichen. Es gibt jedoch ein Render-Plugin, das **Auflösung/Framerate automatisch an Projekteigenschaften anpasst und erweiterte CRF/CQP-Parameter für Bitratenkontrolle unterstützt**, was das Rendering **mit weniger manueller Parameteranpassung** ermöglicht. Dieses Plugin ist **Voukoder**.

<ImageOnDemand alt="Voukoder Classic" src="vegtips/image023_voukoder_classic.png" />

Zwei Versionen: Voukoder Classic und Voukoder Pro.

- Voukoder Classic ist kostenlos, unterstützt VP12-VP22, aber wurde vom Originalautor Vouk entfernt.

  Benutzer-Backups auf GitHub:
  - [https://github.com/FORARTfe/voukoderFREE](https://github.com/FORARTfe/voukoderFREE)
  - [https://github.com/FORARTfe/voukoder-connectorsFREE](https://github.com/FORARTfe/voukoder-connectorsFREE)  
  Erfordert Installation sowohl des Voukoder-Kerns (z. B. `Voukoder 13.4.1`) als auch des Konnektors (z. B. `connector-vegas22-1.0.0.msi`).
- Voukoder Pro ist derzeit kostenpflichtig. Offizielle Seite: [https://www.voukoder.org/](https://www.voukoder.org/).
  - Voukoder Pro 1 war einmal kostenlos, aber Voukoder Pro 2 wurde kostenpflichtig, wobei jede Hauptversion einen separaten Kauf erfordert.

Andere ähnliche Plugins sind [DebugMode FrameServer](http://www.debugmode.com/frameserver.html) und [MagicYUV](https://www.magicyuv.com/). Ich verwende sie nicht oft; sie könnten für fortgeschrittene Benutzer geeignet sein.

<br>

### Allgemeine Fehlerbehandlung für Render-Abstürze/Einfrieren/Fehler

- Render-Absturz: VEGAS **wird plötzlich weiß und stürzt mit einem Fehler ab** während des Renderns.

- Render-Einfrieren: **Fortschrittsbalken bewegt sich nicht**, CPU/GPU-Auslastung im Task-Manager ist niedrig, **Klicken auf "Abbrechen" funktioniert nicht**, zwingt Sie, VEGAS über den Task-Manager zu beenden.

- Render-Fehler: Gerenderte Videos haben **flackernde Frames/grüne Bildschirme**.

**Vor dem Rendern sicherstellen:**

- Projekteigenschaften und Render-Vorlage haben keine problematischen Werte. Z. B. **Feldreihenfolge ist progressiv**, **Breite/Höhe durch 4 teilbar** (einige Encoder verwenden 4x4-Blöcke), **Framerate ist üblich** (besonders seltsame Dezimalzahlen, abgesehen von Standard `23.976`, `29.97`, `59.94`).

- **Render-Vorlage stimmt genau mit Projekteigenschaften überein**. Fehlanpassung kann Probleme wie Sapphire-Plugin-Positionsversatz verursachen.

- Wenn Sie Bitrate in eingebauten Vorlagen ändern, stellen Sie sicher, dass **Maximale Bitrate größer als Durchschnitt** ist, nicht gleich.

1.  Wenn Render mit einem **Fehler-Pop-up** abstürzt, siehe [VEGAS-Fehlerbericht-Pop-up deaktivieren](#2-vegas-fehlerbericht-pop-up-deaktivieren).

2.  **[GPU-Beschleunigung deaktivieren](#1-gpu-beschleunigung-deaktivieren).**

3.  **Encoder in Render-Vorlage ändern.**

<ImageOnDemand alt="Render-Encoder" src="vegtips/image024_render_encoder.png" />

<p align="center">Verfügbare Encoder hängen von Ihrer GPU ab.</p>

4.  Den Bereich um den Frame ändern, wo es einfriert: FX löschen, Events trimmen usw.

5.  Ein anderes Render-Format verwenden (z. B. wmv).
  - Hinweis: Standard wmv-Vorlage ist: **Auflösung `1440*1080`, Pixel-Seitenverhältnis `1.3333`**. Obwohl das finale Seitenverhältnis 16:9 ist, kann direktes Rendern mit diesen Parametern Probleme verursachen. Manuell ändern zu **Auflösung `1920*1080`, Pixel-Seitenverhältnis `1`**.

6.  **<sup>Empfohlen</sup> Rendern mit [Voukoder](#empfohlenes-render-plugin-voukoder).**

7.  **<sup>Empfohlen</sup> Verschachteln und Rendern.**
  - Erstellen Sie ein neues Projekt, **ziehen Sie die Original-.veg-Datei direkt hinein**. Nach Proxy-Erstellung direkt rendern. Verschachteltes Rendern ist langsamer; PCs mit niedriger Ausstattung können Probleme haben.

8.  Segment-Rendering.
  - Für Einfrieren **teilen Sie das Projekt in kleine Segmente, rendern Sie separat**, dann erstellen Sie ein neues Projekt, **kombinieren Sie alle Segmente und rendern Sie erneut**.
  - Für zufällige Render-Fehler (z. B. erster Render hat Problem in erster Hälfte, zweiter Render hat Problem in zweiter Hälfte), können Sie die guten Hälften von beiden Renders kombinieren.

9.  **Bildsequenz rendern**. Beginnen Sie von dort zu rendern, wo es einfror. **Dies bewahrt zumindest gerenderte Dateien.** Schließlich **importieren Sie die Bildsequenz zurück in VEGAS und rendern sie als Video**. Nach jeder Sequenzrender **ausgeben in einen neuen Ordner**, um Überschreiben zu vermeiden, da VEGAS immer von `000000` beginnt.

<ImageOnDemand alt="Bildsequenz importieren" src="vegtips/image025_import_image_sequence.png" />

<p align="center">Importieren einer Bildsequenz. Verhält sich wie eine Videodatei; Sie können Framerate setzen.</p>

10. **Verwenden Sie [Voukoder](#empfohlenes-render-plugin-voukoder), passen Sie Vorlage an, setzen Sie Ausgabe-Container auf mkv**, und rendern Sie von dort, wo es einfror.
  - Anders als andere Formate bleiben **mkv-Dateien nach einem Render-Einfrieren/Absturz abspielbar und importierbar**. **Hinweis: Niedrigere VEGAS-Versionen können mkv nicht direkt importieren.**

11. Jemand anderen rendern lassen.
  - Verwenden Sie `Datei -> Exportieren -> .veg`, um Projektmedien in einen neuen Ordner zu sammeln. Komprimieren und an einen anderen vertrauenswürdigen VEGAS-Benutzer senden.

**Zusammenfassung:** Für Render-Probleme versuchen Sie zuerst **Methoden 1, 2, 3**. Wenn sie scheitern, priorisieren Sie **Methoden 6 und 7**. Andere Methoden sind Referenzen. Methoden **8, 9, 10, 11** sind letzte Auswege.

<br>

#### Reparieren von Dateien aus fehlgeschlagenen Renders

Wie erwähnt, bewahren nur **Bildsequenzen** und **mkv-Container** gerenderten Fortschritt nach einem Fehler. Andere Formate (mp4, mov, avi, wmv) hinterlassen eine Cache-Datei, aber sie ist nicht direkt abspielbar/importierbar; Wiedergabe zeigt möglicherweise Beschädigung. Videoreparatur-Software kann jedoch manchmal diese fehlgeschlagenen Cache-Dateien reparieren, indem sie **ein Referenz-Video-Beispiel verwendet, das erfolgreich mit derselben Vorlage gerendert wurde**. Ich habe [Digital Video Repair](https://risingresearch.com/zh/dvr/) (kostenlos) und [Wondershare Repairit](https://repairit.wondershare.com/) (kostenpflichtig, bessere Ergebnisse) getestet. Sie können andere versuchen.

<br>

### Rendering Q&A

F: Klicken auf **`Rendern als`** (genannt **`Rendern`** in VP23+), um die Vorlagenliste zu öffnen, verursacht **Fehler/Absturz**?

A: Wenn es ein **Fehler-Pop-up** gibt, versuchen Sie zuerst **[Fehlerbericht deaktivieren](#2-vegas-fehlerbericht-pop-up-deaktivieren)**.

Wenn das fehlschlägt, versuchen Sie vorübergehend alle Ordner aus dem Codec-Pfad **`...<VEGAS Installationspfad>\FileIO Plug-Ins\`** zu verschieben, starten Sie VEGAS neu, fügen Sie ein Textevent ein, und sehen Sie, ob Klicken auf `Rendern als` immer noch abstürzt. Wenn nicht, bewegen Sie Codecs schrittweise zurück, starten Sie VEGAS neu und testen Sie `Rendern als` nach jedem, um **den problematischen Codec zu identifizieren**. Einmal gefunden, vermeiden Sie die Verwendung dieses Codecs, indem Sie seinen Ordner nicht zurücklegen. Dies kann verhindern, dass VEGAS bestimmte Formate importiert/rendert. (Priorisieren Sie die Überprüfung von `mxavcaacplug`.)

<br>

F: Sofortiger Render-Fehler: **`Beim Erstellen der Mediendatei xxx.mp4 ist ein Fehler aufgetreten. Die Ursache des Fehlers konnte nicht ermittelt werden.`**

A: In benutzerdefinierter Render-Vorlage, **deaktivieren Sie `Progressiven Download aktivieren`**. Oder versuchen Sie **[Voukoder](#empfohlenes-render-plugin-voukoder)**.

<br>

F: Sofortiger Render-Fehler: **`Beim Erstellen der Mediendatei xxx.mp4 ist ein Fehler aufgetreten. Fehler 0x80660008 (Nachricht fehlt)`**

A: Wenn Sie **NVIDIA NVENC-Encoder** verwenden und Ihre **Grafiktreiberversion > `590`** ist, dann können **eingebaute Render-Vorlagen in VP22 und darunter NVENC nicht aufrufen**, **zwingen Sie, Vorlagen mit anderen Encodern zu wählen**. Aktuelle Lösungen: **Treiber auf `581.57` oder darunter downgraden**, oder **VEGAS auf VP23 oder höher upgraden**. Sie können auch **[Voukoder's](#empfohlenes-render-plugin-voukoder)** NVENC-Encoder ohne Fehler verwenden.

<small>
Referenz: <a href="https://www.vegascreativesoftware.info/us/forum/posts--150382/">https://www.vegascreativesoftware.info/us/forum/posts--150382/</a><br>
</small>

<br>

F: Fehler beim Versuch, **m2ts zu rendern**: **`COM-Objekt konnte nicht initialisiert werden.`**

A: Beginnend mit **Win11 24H2** entfernte Microsoft den **AC-3-Codec**, von dem VEGAS und andere Software abhängen. Bei einer **Neuinstallation von Win11 24H2 oder später** fehlt dieser Codec, was dazu führt, dass VEGAS **AC-3-Audio in m2ts-Dateien nicht decodieren kann** und **m2ts nicht rendern kann**. Siehe [**dieses englische Tutorial**](https://www.elevenforum.com/t/ac-3-dolby-digital-codec-no-longer-included-with-windows-11-version-24h2.25597/post-459390), um den AC-3-Codec wieder hinzuzufügen, oder **upgraden Sie auf VP22 final (`22 Build 250`) oder höher**, das einen neuen AC-3-Codec enthält.

<small>
Referenz: <a href="https://www.vegascreativesoftware.info/us/forum/posts--147963/">https://www.vegascreativesoftware.info/us/forum/posts--147963/</a><br>
</small>

<br>

F: Möchte **Rendering mitten drin stoppen**, aber **teilweise gerenderte Videodatei behalten**.

A: Das **SeMW-Erweiterung** Render-Anzeigefenster hat diese Funktion.

<ImageOnDemand alt="SeMW Render-Eingabeaufforderung" src="vegtips/image026_render_semw.png" />

SeMW-Erweiterung offizielle Seite: https://www.semw-software.com/en/extensions/

Hinweis: Tests zeigen, dass diese Funktion **das "kann Render nicht abbrechen" Problem während eines Einfrierens nicht löst**; in diesem Fall müssen Sie VEGAS über den Task-Manager beenden.

<br>

F: Wie rendere ich **mov-Dateien mit Alphakanal**?

A:

- **QuickTime-Plugin <small>(VP22 und darunter. Gute Kompression für statische Bilder, kleine Dateigröße.)</small>**

  1.  Installieren Sie QT Lite oder QuickTime. **`QT Lite 4.1.0`** wird empfohlen. Für neuere VP auch **`Einstellungen -> Eingestellte Funktionen -> QuickTime-Plugin aktivieren`**.

  2.  In Render-Vorlagenliste wählen Sie links `QuickTime`. Wählen Sie rechts eine beliebige Vorlage, klicken Sie `Vorlage anpassen`, passen Sie Parameter wie gezeigt an:

<ImageOnDemand alt="Render-Alpha QuickTime" src="vegtips/image027_render_alpha_quicktime.png" />

  3.  Vorlage speichern und rendern.

  Aufgrund schlechter Kompatibilität ist QuickTime-Format unter `Eingestellte Funktionen` gelistet. Tests zeigen, dass das Importieren vieler QuickTime mov-Dateien in VEGAS Probleme verursachen kann (Lesefehler, Verzögerung). Außerdem wird Alphakanal standardmäßig beim Import nicht angezeigt; muss manuell geändert werden. Für Kompatibilität wird Apple ProRes empfohlen.

  **Seit VP23 hat VEGAS die QuickTime-Kompatibilität effektiv aufgegeben und kann keine QuickTime-enkodierten mov-Dateien mehr importieren oder rendern.**

- **Apple ProRes-Vorlage <small>(VP18+. Wenn Vorlage nicht existiert, ist diese Methode nicht verfügbar.)</small>**

  Wie gezeigt:

<ImageOnDemand alt="Render-Alpha ProRes" src="vegtips/image028_render_alpha_prores.png" />

- **[Voukoder](#empfohlenes-render-plugin-voukoder) <small>(VP18+, Voukoder Classic Version 12.0+.)</small>**

  In Voukoder-Vorlagen finden Sie die mit **`4:4:4 10 Bit mit Alphakanal`** gekennzeichneten und rendern. Oder anpassen: Ausgabe-Container `QuickTime (.mov)`, Video-Encoder `ProRes KS` oder `QuickTime Animation`.

<br>

F: Vorschau oder gerenderte Datei hat **Farbunterschied/Inkonsistenz** im Vergleich zum Originalmedium?

A1: In VP17 und darunter können **Farbraum**-Einstellungen in Projekteigenschaften und Render-Vorlage **Farbverschiebungen** verursachen.

Drei Lösungen:

1.  **Verwenden Sie [Voukoder](#empfohlenes-render-plugin-voukoder), erstellen Sie eine Vorlage mit `Filtern`, um Farbraum zu konvertieren.**

<ImageOnDemand alt="Voukoder Farbraum" src="vegtips/image040_voukoder_color_space.png" />

2.  Upgrade auf VP18+. Wenn ein altes Projekt in neuem VP geöffnet wird, ändern Sie `Pixelformat` in `Datei->Eigenschaften` von `Legacy 8-Bit (Videostufen)` zu **`8-Bit (Vollbereich)`**, und **verwenden Sie keine Render-Vorlagen, die in altem VP erstellt wurden**.

3.  Wenden Sie den `Pegel` FX-Voreinstellung **`Computer-RGB zu Studio-RGB`** auf Mediendateien an.

<small>
Referenz: <a href="https://www.vegascreativesoftware.info/us/forum/posts--142942/">https://www.vegascreativesoftware.info/us/forum/posts--142942/</a><br>
</small>

<br>

A2: Wenn Quelle **HDR-Material** ist, ändern Sie die **Projekteigenschaften `Farbraum` <sup>Abb. 1</sup>**, um der Quelle <sup>Abb. 2</sup> zu entsprechen. Dies schaltet das gesamte Projekt auf 10-Bit-Farbtiefe um, macht Rendering langsamer als 8-Bit.

<ImageOnDemand alt="Projekt HDR-Farbraum" src="vegtips/image029_color_space_hdr_project.png" />

<ImageOnDemand alt="Material HDR-Farbraum" src="vegtips/image030_color_space_hdr_footage.png" />

Alternativ halten Sie Projektfarbraum unverändert und wenden eine Farbraumkonvertierungs-LUT auf das Quellenmaterial an. Verwenden Sie den eingebauten `LUT-Filter` FX oder die neuere `Farbkorrektur`-Funktion. Der Schlüssel ist, eine LUT zu finden, die den Quellfarbraum in `Rec.709`-Standard konvertiert. Dies verliert HDR-Details, also wenn Sie nicht planen, HDR auszugeben, vermeiden Sie von Anfang an die Aufnahme von HDR-Material.

<br>

F: Gerenderte Videos haben **Farbverschiebungen (Rot wird Lila, Blau wird Gelb, usw.)**?

<ImageOnDemand alt="BGRA Farbe" src="vegtips/image031_bgra_color.png" />

A: AMD-GPU-Treiberproblem. Versuchen Sie:

- **[GPU-Beschleunigung deaktivieren](#1-gpu-beschleunigung-deaktivieren).**
- AMD-Treiber auf **23.7.2** oder früher zurücksetzen, oder auf **23.11.1** oder später aktualisieren.
- Upgrade auf `21 Build 187` oder später behebt dies.
- **Vor dem Rendern** fügen Sie den eingebauten **`Kanal-Mischen` FX zum Video-Ausgangs-Bus hinzu, wählen Sie Voreinstellung `RGBA -> BGRA`**.

<small>
Referenz: <a href="https://www.vegascreativesoftware.info/us/forum/posts--142292/">https://www.vegascreativesoftware.info/us/forum/posts--142292/</a><br>
</small>

<br>

F: **[VP18 und darunter] Kann keine Videos mit Höhe über `2304` rendern (z. B. vertikales 4K)**?

A: In älteren Versionen versucht, Höhe über `2304` in einer nativen Vorlage im benutzerdefinierten Dialog festzulegen, wird automatisch auf `2304` zurückgesetzt. Die einfachste Lösung ist, nachdem Sie Ihre gewünschten Projekteigenschaften festgelegt haben, **[Voukoder](#empfohlenes-render-plugin-voukoder)** zu verwenden.

Hier ist eine "Bug-Ausnutzungs"-Methode mit nativen Vorlagen:

1.  In Rendern als wählen Sie eine Vorlage, die benutzerdefinierte Dimensionen erlaubt, wie **`MAGIX AVC` oder `MAGIX HEVC`**. Rechts wählen Sie eine nahe Vorlage, klicken Sie `Vorlage anpassen`.

2.  Ändern Sie alle Parameter außer Höhe auf Ihre gewünschten Werte, und **ändern Sie den Vorlagennamen oben, aber klicken Sie NOCH NICHT auf die Speichern-Schaltfläche**.

3.  Jetzt ändern Sie die Höhe auf Ihren gewünschten Wert > `2304`. Nach der Eingabe **drücken Sie NICHT `Eingabe` oder `Tab`, oder klicken Sie woanders hin. Lassen Sie den Cursor im Höhenfeld blinken, dann klicken Sie auf die Speichern-Schaltfläche neben dem Vorlagennamen**.

4.  **Nach dem Speichern klicken Sie auf `Abbrechen`**. Sie werden feststellen, dass es nicht zu Ihrer gespeicherten Vorlage springt, aber die Vorlage wurde zur Liste hinzugefügt.

5.  Verwenden Sie diese neue Vorlage. Wenn Sie nach dem Speichern auf `OK` geklickt haben, springt es zu einer Vorlage mit `*`, was falsch ist. Verwenden Sie die ohne `*` aus der Liste.

- Hinweis: Diese Methode kann die maximale Grenze des Encoders nicht überschreiten (z. B. `4096*4096` für NVENC).

<small>
Referenz: <a href="https://www.vegascreativesoftware.info/us/forum/posts--149413/#ca939692">https://www.vegascreativesoftware.info/us/forum/posts--149413/#ca939692</a><br>
</small>

<br>

F: Nach dem Rendern, Versuch, das Projekt abzuspielen, gibt Fehler: **`Beim Starten der Wiedergabe ist ein Fehler aufgetreten. Für dieses Gerät ist keine Anforderung aktiviert.`**

A: VEGAS fordert nach dem Rendern Mikrofonberechtigung an. Wenn ein Mikrofon angeschlossen ist, aber VEGAS keine Berechtigung hat, gibt es Fehler. Behebung: **Aktivieren Sie Mikrofonberechtigung für VEGAS in Windows-Einstellungen**. Alternativ versuchen Sie, Audiogeräte in `Einstellungen -> Audiogerät` zu wechseln oder auf `Alle Standard` zu klicken, dann erneut rendern, um zu sehen, ob es dauerhaft behebt. (Wechseln einmal ist vorübergehend.) Als letzten Ausweg Soundkartentreiber neu installieren.

<br>

F: Videos, die mit **[Voukoder](#empfohlenes-render-plugin-voukoder)** (oder eingebauten Vorlagen) gerendert wurden, sehen lokal gut aus, zeigen aber **horizontale Streifen**, wenn auf YouTube/andere Seiten in voller Auflösung hochgeladen?

A: Voukoder passt automatisch Projekteigenschaften an. In VP17 und darunter hat die Standardprojektvorlage `Feldreihenfolge` auf `Oberes Feld zuerst` (Zeilensprung) gesetzt. Lokale Player unterstützen Deinterlacing, also sieht es gut aus. Seiten wie YouTube möglicherweise nicht, zeigen Zeilensprungstreifen. Für Voukoder **ändern Sie `Feldreihenfolge` in `Projekteigenschaften` zu `Progressiv (keine Felder)`** vor dem Rendern. Für eingebaute Vorlagen **vermeiden Sie Vorlagen mit `i` im Namen; wählen Sie die mit `p`**.

<br>

F: **Eingebaute Render-Vorlagen fehlen Bildsequenz-Optionen**?

A: Dieser Bug wurde in VP19 behoben. Für ältere Versionen versuchen Sie diese (nicht garantiert):

1.  Installieren/Neuinstallieren HEIF-Bilderweiterungen: [https://apps.microsoft.com/detail/9pmmsr1cgpwg](https://apps.microsoft.com/detail/9pmmsr1cgpwg).

2.  Verwenden Sie das Bildsequenz-Render-Skript.
  - Download-Link: https://www.vegascreativesoftware.info/us/forum/posts--133068/?page=3#ca863786

3.  In ein anderes Format rendern (`.mov`), dann mit [FFmpeg](https://ffmpeg.org/) konvertieren.

<small>
Referenz: <a href="https://www.vegascreativesoftware.info/us/forum/posts--133068/">https://www.vegascreativesoftware.info/us/forum/posts--133068/</a><br>
</small>

<br>

F: In Render-Vorlagen haben **wav- und avi-Vorlage Ausgabeformate zu `.wdp` geändert**?

A: Die einzige bekannte wirksame Behebung ist **Windows über das Windows-Update-Tool neu zu installieren**.

- Update-Tool: https://www.microsoft.com/software-download

Aktualisiert Ihr System auf die neueste Version, dauert Stunden. Diese Methode behält die meisten installierten Software, Dateien und Einstellungen.

Das genaue Reparaturprinzip ist unklar.

<small>
Referenz: <a href="https://www.vegascreativesoftware.info/us/forum/posts--83436/">https://www.vegascreativesoftware.info/us/forum/posts--83436/</a><br>
</small>

<br>

F: **[Win7 VP18+]** **Klicken auf `Rendern als` sofort Fehler**: **`Beim Erstellen der Mediendatei ist ein Fehler aufgetreten. Fehler 0x80131501 (Nachricht fehlt)`**

<ImageOnDemand alt="Win7 Render" src="vegtips/image032_render_win7.png" />

A: Normalerweise unterstützt Win7 nur **bis VP17**. VP18+ auf Win7 wirft diesen Fehler.

Es gibt eine Problemumgehung: Ersetzen Sie die Rendering-Komponenten-DLL im neueren VP-Installationsverzeichnis mit einer aus einem älteren VP18-Build.

Dies kann die Stabilität beeinflussen, daher wird ein Upgrade auf Win10 empfohlen.

<small>
Referenz: <a href="https://www.vegascreativesoftware.info/us/forum/posts--128221/">https://www.vegascreativesoftware.info/us/forum/posts--128221/</a><br>
</small>

Download-Link für `18 Build 284` `RenderAsDialog.dll`: [RenderAsDialog.dll](/downloads/fixes/RenderAsDialog.dll)

<br>

## IX. Untertitel Q&A

F: Untertiteldatei wird nicht importiert / importiert als **verzerrter Text**?

A: Öffnen Sie die Untertiteldatei im Editor, **Speichern unter mit UTF-8-Kodierung**, dann importieren.

<br>

F: Verwenden von "**Titel & Text**" zum Bearbeiten von Text. Richtige Schriftart ausgewählt, aber **Schriftart im Vorschaufenster ändert sich nicht, kann Schriftarten nicht wechseln**?

A: Dies ist ein "Titel & Text"-Problem; seine Schriftart-Kompatibilität ist schlecht.

Lösungen:
- **Setzen Sie den Schriftstil zuerst in einem Word-Dokument, dann kopieren-einfügen in VEGAS Titel & Text.**
  - Sie können jeden Rich-Text-Editor verwenden.

- Oder verwenden Sie **(Legacy) Text** oder **ProType Titler**; sie sind weniger anfällig dafür.
  - In neuerem VP aktivieren Sie sie in `Einstellungen -> Eingestellte Funktionen`.

- In einigen Fällen könnten Windows Unicode-Einstellungen die Ursache sein. Gehen Sie zu **`Systemsteuerung -> Region -> Verwaltung -> Systemgebietsschema ändern`**, stellen Sie sicher, dass **`Beta: Unicode UTF-8 für weltweite Sprachunterstützung verwenden`** **NICHT** aktiviert ist.

<ImageOnDemand alt="Windows Unicode-Einstellungen" src="vegtips/image017_unicode_settings.png" />

In VP20 ist die "Titel & Text"-Funktion "**Untertitelattribute übertragen**" ebenfalls betroffen, macht einige Schriftarten mit dieser Funktion unbrauchbar.

<br>

F: Klicken auf Menü **`Einfügen -> Untertitel aus Datei`** **öffnet das Einfügefenster nicht**, keine Reaktion?

A: Ein relativ seltener Bug, scheinbar ungefixt. Es könnte einen Tag funktionieren und am nächsten aufhören. Derzeit ist die einzige bekannte Behebung **[Einstellungen zurücksetzen](#5-einstellungen-zurücksetzen)**.

<small>
Referenz: <a href="https://www.vegascreativesoftware.info/us/forum/posts--137861/">https://www.vegascreativesoftware.info/us/forum/posts--137861/</a><br>
</small>

<br>

F: Verwenden von "**Credits rollen**", Text bearbeiten verursacht **VEGAS-Einfrieren/Absturz**?

A: Microsoft-Eingabemethodenproblem. In **Microsoft Pinyin-Eingabemethode Einstellungen, finden Sie `Kompatibilität`, aktivieren Sie `Vorherige Version der Microsoft Pinyin-Eingabemethode verwenden`**.

<br>

F: Importieren einer Textdatei in "**Credits rollen**" zeigt **verzerrten Text**?

A: Öffnen Sie die Textdatei im Editor, **Speichern unter mit ANSI-Kodierung**, dann importieren.

<br>

F: Auf hochauflösenden Bildschirmen verursacht die Verwendung von "**ProType Titler**" **UI-Verzerrungen/winziger unlesbarer Text**?

<ImageOnDemand alt="PPT Titler UI-Problem" src="vegtips/image033_protype_titler_ui_issue.png" />

A: DPI-Skalierungsproblem, wenn Systemskalierung >= 150%. Rechtsklick auf VEGAS ausführbare Datei/Verknüpfung -> `Eigenschaften -> Kompatibilität -> Hohe DPI-Einstellungen ändern`. **Setzen Sie `Skalierung durch:` auf `System (Erweitert)`**.

<ImageOnDemand alt="Hohe DPI - System erweitert" src="vegtips/image034_high_dpi_system_enhanced.png" />

<br>

F: **[VP20, VP21]** **"Untertitelattribute übertragen"-Funktion in Titel & Text fehlerhaft (wie gezeigt)**?

<ImageOnDemand alt="Untertitelattribute Übertragung" src="vegtips/image035_subtitles_transfer.png" />

A: Das Problem tritt auf, wenn das Textfeld **gemischte Formatierung (verschiedene Schriftarten, Größen usw.)** enthält, die nicht übertragen werden können. Versuchen Sie **zuerst die Textformatierung zu vereinheitlichen**, bevor Sie die Funktion verwenden. **VP21 final Build 315 hat dies behoben.** Ältere Versionen (einschließlich vor VP20) können ein von mir geschriebenes Skript mit ähnlicher Funktionalität verwenden, kein Fehler, unterstützt aber auch keine gemischte Formatierung Übertragung. Skript-Installationspfad siehe [Skripte](#xii-scripts-erweiterungen-bezogene).

- [Untertitelattribute übertragen] Skript-Download: https://github.com/zzzzzz9125/VegasScripts/blob/main/Transfer%20Subtitle%20Attributes.cs

  - Verwendung: Wählen Sie ein einzelnes "Titel & Text"-Event auf einer Spur, führen Sie das Skript aus, um andere Untertitel-Events auf derselben Spur an seine Attribute anzupassen.

<small>
Referenz: <a href="https://www.vegascreativesoftware.info/us/forum/posts--145461/">https://www.vegascreativesoftware.info/us/forum/posts--145461/</a><br>
</small>

<br>

**Zusätzlicher Hinweis:** (VP18+) Wie man das Standard-Tool für `Textmedium einfügen` ändert:

VEGAS hat drei Haupttext-Tools: Titel & Text, (Legacy) Text, ProType Titler. `Rechtsklick Spur -> Textmedium einfügen` standardmäßig "Titel & Text". Um die anderen beiden zu verwenden, müssen Sie sie aus "Media Generators" ziehen, was umständlich sein kann. So ändern Sie den Standard:

Greifen Sie auf [Interne Einstellungen](#auf-die-internen-vegas-einstellungen-zugreifen) zu, suchen Sie nach `Text Media Generator GUID`. Ändern Sie seinen Wert auf die GUID Ihres bevorzugten Tools (Standard ist Titel & Text).

GUIDs:
- Titel & Text: `{Svfx:com.vegascreativesoftware:titlesandtext}`
- (Legacy) Text: `{0FE8789D-0C47-442A-AFB0-0DAF97669317}`
- ProType Titler: `{53FC0B44-BD58-4716-A90F-3EB43168DE81}`

Mit der GUID können Sie sie auf die GUID eines beliebigen Media Generator FX setzen, sodass "Textmedium einfügen" diesen Generator direkt erstellt.

<br>

## X. Video-Plugin bezogen

VEGAS-Video-Plugins fallen in zwei Kategorien: DirectX Transform (DXT) Plugins, speziell für VEGAS entwickelt, und OpenFX (OFX) Plugins, ein universeller Standard. Ältere Plugins könnten DXT sein (z. B. NewBlue 2012, Neat Video 3.1.1). Neuere Plugins sind normalerweise OFX. Einige Legacy VEGAS FX, wie Soft Contrast FX, ProType Titler, sind auch DXT-Plugins.

Die VEGAS Pro Video FX-Liste fasst alle verfügbaren **`Video FX`** in VEGAS Pro zusammen, einschließlich ihrer **`Namen`**, **`Gruppen`**, **`UIDs`** und anderer Informationen, was die Online-Suche und das Durchsuchen erleichtert. **[Hier eingeben.](./videofxlist)**

<br>

### VEGAS-Plugin-Cache-Dateien

- Scan-Cache: `%localappdata%\VEGAS Pro\23.0\svfx_plugin_cache.bin`
- Name-Cache: `%localappdata%\VEGAS Pro\23.0\plugin_manager_cache.bin`
- Miniatur-Cache: `%localappdata%\VEGAS Pro\23.0\FX Thumbnails\fx_thumbnail_cache.bin`

Wobei `23.0` Ihre VEGAS-Version ist. Plugin-Cache speichert gescannte Plugin/FX-Informationen. VEGAS steckt bei "Erstelle Video-Plugin-Fabrik..." fest, **regeneriert Plugin-Cache**, scannt nach neuen Plugins.

<br>

### OFX bezogene Pfade

- **Allgemeiner OFX-Pfad**: `C:\Programme\Gemeinsame Dateien\OFX\Plugins\`
- **VEGAS-spezifischer OFX-Pfad**: `...<VEGAS Installationspfad>\OFX Video Plug-Ins\`

Hinweis: Ein OFX-Plugin kann aus dem Plugin-Kern und den OFX-Interface-Dateien bestehen. Der OFX-Pfad ist für die Interface-Dateien. Ohne sie scannt VEGAS das Plugin **nicht**. Allgemeiner OFX-Pfad-Plugins werden auch von anderen OFX-unterstützenden Software (Premiere Pro, DaVinci Resolve) gescannt. Der VEGAS-spezifische Pfad wird nur von dieser VEGAS-Version gescannt.

OFX-Interface-Dateistruktur:
```
<OFX-Pfad>/
├── xxx.ofx.bundle/
│ └── Contents/
│ ├── Presets/
│ │ ├── PresetPackage.xml
│ │ ├── PresetPackage.de-DE.xml
│ │ └── ...
│ ├── Resources/
│ │ ├── xxx.xml
│ │ ├── xxx.de-DE.xml
│ │ └── ...
│ └── Win64/
│ └── xxx.ofx
└── yyy.ofx.bundle/
 └── ...
```

`Win64\xxx.ofx` ist die OFX-Interface-Datei. `Presets\PresetPackage.xml` enthält eingebaute Voreinstellungen. `Resources\xxx.xml` ist die Sprachübersetzungsdatei.

Hinweis: Das Bearbeiten von OFX-Pfaden erfordert oft Administratorrechte. Für `xml`-Dateien empfehle ich `Visual Studio Code`, das beim Speichern nach Administratorrechten fragt.

Nach dem Ändern von Sprachdateien löschen Sie den **Plugin-Name-Cache** wie zuvor erwähnt und starten VEGAS neu, um Änderungen zu sehen.

Benutzer-gespeicherte OFX-Plugin-FX-Voreinstellungen: `%userprofile%\Documents\OFX Presets\`

<br>

### DXT bezogene Informationen

- **Eingebauter DXT-Pfad**: `...<VEGAS Installationspfad>\Video Plug-Ins\`

Streng genommen haben DXT-Plugins keinen vorgeschriebenen Ordner wie OFX. Sie sind DLL-Dateien, die Registrierung via `regsvr32 xxx.dll` benötigen. Dies ermöglicht, externe DXT-Plugins überall zu platzieren und für VEGAS zu registrieren. Nützlich für manuelle Registrierungs-Plugins wie [Route Animation](https://www.vegascreativesoftware.info/us/forum/posts--105615/) (`RouteAnimationX64.dll`).

<br>

### Video-Plugin Q&A

F: Änderte VEGAS über Registrierung auf andere Sprache, aber **eingebaute Plugin-Namen sind immer noch Englisch**. Wie beheben?

A: **Löschen Sie den Plugin-Name-Cache** wie oben erwähnt, starten Sie VEGAS neu. Oder einfach **[Einstellungen zurücksetzen](#5-einstellungen-zurücksetzen)**.

<br>

F: **Plugin bereits deinstalliert**, aber es **erscheint immer noch in VEGAS FX-Liste**, und Klicken stürzt ab?

A: Überprüfen Sie, ob **entsprechende Dateien in OFX-Pfaden** bereinigt wurden. Wenn bereinigt und immer noch erscheint, versuchen Sie **VEGAS-Plugin-Cache-Dateien zu löschen**.

<br>

F: **Durchsuchen zu einem spezifischen FX in Video-FX/Übergang-FX/Media Generator-FX-Fenstern verursacht sofortigen Absturz**?

A: Dies ist normalerweise ein **Miniaturbild-Lade-Absturz**. Keine direkte Behebung; Sie können es nur vermeiden. Wenn Sie diese Plugin-Serie nicht benötigen, finden Sie ihre OFX-Dateien (extern im allgemeinen Pfad, VEGAS-eingebaut im spezifischen Pfad) und entfernen Sie sie. Wenn Sie die Plugin-Serie immer noch wollen, aber nicht diesen FX, **versuchen Sie, die `xml`-Übersetzungsdatei zu bearbeiten**, um es ans Ende zu verschieben, versehentliche Auswahl vermeiden.  
<small>Alternativ verwenden Sie die <b>FX-Such-Erweiterung [VPConsole](https://www.ratinfx.com/vpconsole/)</b> als Ersatz.</small>

<br>

F: **Verwenden des Plugin-Suchfeldes verursacht weißen Bildschirm/Einfrieren**, macht es unbrauchbar?

A: Mit vielen installierten Plugins frieren ältere VEGAS-Versionen oft beim Verwenden der Suche ein, brauchen lange, um sich zu erholen. **VP18 hat dies behoben**, daher wird ein Upgrade auf VP18+ für flüssiges Suchen empfohlen.  
<small>Alternativ verwenden Sie die <b>FX-Such-Erweiterung [VPConsole](https://www.ratinfx.com/vpconsole/)</b> als Ersatz.</small>

<iframe width="560" height="315" src="https://www.youtube.com/embed/4ZZBfTb2Ubg?si=vkKTf8trYe8t6RR5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br>

F: **Verwenden eingebauter AI-FX fordert Installation von VEGAS Deep Learning Models Komponente**?  
`Dieses Plugin benötigt zusätzliche Daten. Bitte installieren Sie die VEGAS Deep Learning-Modelle, die Sie unter www.vegascreativesoftware.com herunterladen können.`

A: Für neuere eingebaute AI-FX **müssen Sie die entsprechende Version von Deep Learning Models** separat installieren.

<small>
Offizielle AI Deep Learning Models Download: <a href="https://www.vegascreativesoftware.info/us/forum/posts--104782/">https://www.vegascreativesoftware.info/us/forum/posts--104782/<br></a>
</small>

<br>

F: Eingebauter **`LUT-Filter` FX erkennt ausgewählte `.cube`-Dateien nicht**?

A: Überprüfen Sie, ob der **vollständige Pfad zur `.cube`-Datei nur [halbe Breite englische Zeichen] enthält**. Wenn er andere Zeichen wie Deutsch enthält, **bewegen Sie die Datei in einen Pfad mit nur halben Breite englischen Zeichen**, dann wählen Sie sie erneut aus.

<br>

F: **Einige Sapphire-Plugin-FX ignorieren Alphakanal, bedecken den darunterliegenden Hintergrund**?

A: Wie gezeigt, geben Sie das FX `Hilfe` ein und deaktivieren Sie seine `GPU`-Beschleunigung einzeln.

<ImageOnDemand alt="Sapphire Alpha-Problem" src="vegtips/image036_sapphire_alpha.png" />

Wenn das nicht funktioniert, **deaktivieren Sie VEGAS' eigene `GPU-Beschleunigung`**.

<br>

F: Standalone Mocha funktioniert, aber **OFX-Plugin-Version Mocha aufgerufen via VEGAS stürzt ab**?

A: Versuchen Sie **Ihren Grafiktreiber zurückzusetzen/zu aktualisieren**.

<br>

F: **[VP21]** Hinzufügen von **`3D LUT Creator`-Plugin** verursacht **Absturz/Einfrieren**?

A: Sie können dieses FX als Plugin-Kette in einer älteren VEGAS-Version speichern, dann die Kette in VP21 anwenden. Dieser Bug wurde in VP22 behoben.

<small>
Referenz: <a href="https://www.vegascreativesoftware.info/us/forum/posts--144354/">https://www.vegascreativesoftware.info/us/forum/posts--144354/</a><br>
</small>

<br>

## XI. Audio-Plugin bezogen

VEGAS-Audio-Plugins fallen in zwei Kategorien: DirectX-Plugins (älter) und VST-Plugins (aktueller Standard). Abgesehen von VEGAS' eingebauten "ohne Präfix" und `ExpressFX`-Serie Audio-FX (die DirectX sind), sind alle anderen Audio-Plugins VST. Die `eFX`-Serie eingebaut in VP16+ sind auch VST. Ältere VEGAS unterstützt VST2; VP20+ unterstützt auch VST3. Keine VEGAS-Version unterstützt VSTi.

<br>

### VST bezogene Pfade

- **Allgemeiner VST-Pfad**: `C:\Programme\VSTPlugins\`

<small>
Wenn andere Software den allgemeinen VST-Pfad geändert hat, folgt VEGAS dem. Sie können den Registrierungsschlüssel <code>HKEY_LOCAL_MACHINE\SOFTWARE\VST</code>, Wert <code>VSTPluginsPath</code> überprüfen.
</small>

- **VEGAS-spezifischer VST-Pfad (VP16+)**: `...<VEGAS Installationspfad>\MAGIX Plugins\`

<br>

Sie können auch manuell VST-Pfade in `Einstellungen -> VST-Effekte` setzen. Ältere VEGAS limitiert auf 3 Pfade; VP20+ hat keine Grenze.

<br>

Benutzer-gespeicherte VST-Plugin-FX-Voreinstellungen:
- `%userprofile%\Documents\VST2 Presets\`
- `%userprofile%\Documents\VST3 Presets\`

<br>

F: Wie bearbeite ich VST-Pfade extern, nicht durch VEGAS-Einstellungen?

A: Gehen Sie zum Registrierungsschlüssel:
- `HKEY_CURRENT_USER\Software\VEGAS Creative Software\VEGAS Pro\23\Metrics\x64\VstCache\SearchPaths` <sup>VP20+</sup>
- `HKEY_CURRENT_USER\Software\Sony Creative Software\VEGAS Pro\19.0\Metrics\VstCache\SearchPaths` <sup>VP19-</sup>
- Wobei `23`/`19.0` Ihre VEGAS-Version ist.

Es gibt `Path 1`, `Path 2`, usw., entsprechend VST-Pfaden in Einstellungen.

<ImageOnDemand alt="VST-Registrierung" src="vegtips/image037_vst_reg.png" />

`CheckSum` ist für VEGAS zu überprüfen, ob Rescan benötigt wird; Sie können es ignorieren. Konzentrieren Sie sich auf `Path` (absoluter Pfadstring) und `Flags` (`3` = scan, `0` = nicht scan). Ändern Sie nach Bedarf.

Wenn VST-Scanning Probleme hat und Rescan über Einstellungen nicht hilft, können Sie den `Mappings`-Unterschlüssel unter `VstCache` löschen, dann VEGAS neu starten, um erneut zu scannen.

<br>

### Audio-Plugin Q&A

F: Neuere Versionen können **32-Bit VST-Plugins** nicht scannen?

A: **`Einstellungen -> Audio -> Unterstützung für 32-Bit VST-Plugins aktivieren (experimentell)`**.

<br>

F: In neueren Versionen zeigen einige **VST-Plugin-GUIs unvollständig**?

A: Scheint VST2-spezifisch. Wenn das Plugin eine VST3-Version hat, **verwenden Sie die VST3-Version**.

<br>

F: **DirectX-Plugins werden in Audio-FX-Liste nicht angezeigt**/**angezeigt aber beim Hinzufügen ungültig**/**Plugin wird Demo-Version, Hinzufügen verursacht Piepton**?

A: **Deinstallieren Sie VEGAS**, dann löschen Sie alle Dateien in **`C:\Programme (x86)\VEGAS\Shared Plug-Ins\Audio_x64\`** (für VP13-: `C:\Programme (x86)\Sony\Shared Plug-Ins\Audio_x64\`), dann **neuinstallieren Sie VEGAS**. (Wenn mehrere VEGAS-Versionen, Deinstallation einer reicht; die Deinstallation ist nur, um Neuinstallation später zu ermöglichen.)

<small>
Referenz: <a href="https://www.vegascreativesoftware.info/us/forum/posts--143986/">https://www.vegascreativesoftware.info/us/forum/posts--143986/</a><br>
</small>

<br>

F: Nach Hinzufügen eines **Limiter-FX (eingebauter `eFX_Limiter` oder anderer VST-Limiter)** zum Master-Bus verursacht **Hinzufügen von Pan-Hüllkurven und Hüllkurvenpunkten** zu einer beliebigen Audiospur **Knacken/Knistern**?

A: Ein seltsamer Bug, der auftritt, wenn **Pan-Hüllkurvenpunkttyp `Sanft` oder `Scharf` ist**. Behebung: **Ändern Sie den Hüllkurvenpunkttyp auf einen anderen**.

<br>

## XII. Skripte/Erweiterungen bezogen

VEGAS unterstützt benutzerdefinierte Skripte in `C#` (oder `JScript`, `Visual Basic`), um Arbeitsabläufe zu optimieren.

- **Skript**: Muss manuell vom Benutzer ausgeführt werden; relativ einfache Funktionalität.

- **Erweiterung**: Kann automatisch laufen, wenn VEGAS startet. Ermöglicht komplexere Funktionen, wie das Erstellen von andockbaren Fenstern innerhalb VEGAS.

<small>
Dieser Abschnitt behandelt nur Installationsprobleme. Für Tutorials siehe: <a href="https://www.vegascreativesoftware.info/us/forum/posts--104563/">https://www.vegascreativesoftware.info/us/forum/posts--104563/</a><br>
</small>

<br>

**Gültige Skript-Installationspfade:**

```text{1}
C:\ProgramData\VEGAS Pro\Script Menu\
C:\ProgramData\VEGAS Pro\23.0\Script Menu\
%userprofile%\Documents\Vegas Script Menu\
%appdata%\VEGAS Pro\Script Menu\
%appdata%\VEGAS Pro\23.0\Script Menu\
%localappdata%\VEGAS Pro\Script Menu\
%localappdata%\VEGAS Pro\23.0\Script Menu\
...<VEGAS Installationspfad>\Script Menu\
```

<br>

**Gültige Erweiterungs-Installationspfade:**

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

Wobei `23.0` Ihre VEGAS-Version ist. Der erste Pfad (`C:\ProgramData\...`) ist meine Top-Empfehlung. Hinweis: `ProgramData` ist standardmäßig ein versteckter Ordner. Für Sony-Ära (VP13-) Pfade fügen Sie einen **`Sony`**-Ordner über `VEGAS Pro` hinzu, z. B. `C:\ProgramData\Sony\VEGAS Pro\Script Menu\`.

<br>

Aufgrund von API-Änderungen in der Geschichte sind Skripte/Erweiterungen für SonicFoundry-Ära, Sony-Ära (VP13-) und MAGIX-Ära (VP14+) VEGAS nicht direkt kompatibel. Sehr alte SonicFoundry-Ära verwendet `SonicFoundry.Vegas`-Namespace; relativ alte Sony-Ära verwendet `Sony.Vegas`; moderne MAGIX-Ära verwendet `ScriptPortal.Vegas`. Für Quellcodedateien (`.cs`, `.js`, `.vb`) können Sie den Namespace manuell in einem Texteditor bearbeiten. Für vorkompilierte `.dll`-Dateien müssen Sie das Quellprojekt modifizieren und neu kompilieren.

<br>

### Allgemeine Schritte zur Installation eines Skripts oder einer Erweiterung

Verwenden von Erweiterungen als Beispiel; ähnlich für Skripte. Für andere Pfade siehe die [Listen oben](#xii-scripts-erweiterungen-bezogene).

1.  Kopieren Sie `C:\ProgramData\VEGAS Pro\` und fügen Sie in die Adressleiste des Datei-Explorers ein, um dorthin zu navigieren.

2.  Überprüfen Sie, ob der Ordner `Application Extensions` existiert. Wenn nicht, erstellen Sie ihn mit exakt dem Namen. Betreten Sie den Ordner.

3.  Kopieren Sie alle erforderlichen `.dll`-Dateien für die Erweiterung und fügen Sie sie direkt hier ein. Z. B.: `C:\ProgramData\VEGAS Pro\Application Extensions\UltraPaste.dll`.
    *   Einige Skripte/Erweiterungen können `16*16` `.png`-Symbol-Dateien enthalten. Sie können diese optional platzieren. Symbole erscheinen in VEGAS-Menüs/Symbolleisten zur Identifikation.

4. Wenn einige Skripte/Erweiterungen zusätzliche Installer benötigen, folgen Sie bitte den von ihnen bereitgestellten Installationsschritten.

<br>

## XIII. Projektdatei-Backup und Wiederherstellung

**Wichtigster Rat vorab:**

<p align="center"><big><b>Entwickeln Sie eine gute Gewohnheit, häufig <code>Strg + S</code> zu drücken!</b></big></p>

Dieser Abschnitt hilft bei Situationen wie **gespeicherte Projektdatei verschwunden/beschädigt**, **Software-Absturz vor dem Speichern**, usw.

<br>

### 1. Die `.veg.bak`-Datei neben Ihrem Projekt

Dies ist ein **Backup vom vorletzten Speichern**. Zur Wiederherstellung **benennen Sie die `.veg.bak`-Datei in `.veg` um** und öffnen Sie sie in VEGAS. Wenn Sie selten manuell speichern, könnte dieses Backup sehr alt sein.

<br>

### 2. VEGAS' Standard 5-Minuten Auto-Speichern

VEGAS speichert alle 5 Minuten automatisch für Absturzwiederherstellung.

Standard-Wiederherstellungsmethode: Nach einem Absturz **öffnen Sie das Originalprojekt nicht direkt**. **Starten Sie VEGAS, beginnen Sie ein neues leeres Projekt**. VEGAS sollte "**Projektwiederherstellung verfügbar**" anzeigen. Stellen Sie von dort wieder her.

Diese Methode ist etwas umständlich. Wenn Sie das Originalprojekt direkt öffnen, erscheint die Eingabeaufforderung nicht. Wenn Sie dann das Originalprojekt ändern, **könnte es die Auto-Speicherdatei überschreiben**, was eine Wiederherstellung über diese Methode unmöglich macht. Daher empfehle ich **manuelles Suchen der Auto-Speicherdateien**.

Einfache Methode: Gehen Sie zum **[VEGAS-Cache-Verzeichnis](#vegas-einstellungen-und-cache-verzeichnis)** (**`%localappdata%\VEGAS Pro\`**) <small>(oder einfach **suchen Sie nach `autosave` auf `C:`**)</small>, sortieren nach Datum, finden Sie `.veg` oder `.veg.bak`-Dateien, kopieren Sie sie heraus, **benennen Sie um** zu `.veg` wie in [1](#_1-die-veg-bak-datei-neben-ihrem-projekt), öffnen Sie, überprüfen Sie, dann speichern Sie woanders.

Das standardmäßige Auto-Speicherintervall ist 5 Minuten. Um zu ändern, gehen Sie zu [Interne Einstellungen](#auf-die-internen-vegas-einstellungen-zugreifen), suchen Sie nach `msAutoSaveInterval`. Standard ist `300000` Millisekunden. Ändern Sie nach Wunsch.

<br>

### 3. Erweitertes Speichern (VP16+)

**Meine derzeitige Top-Empfehlung** für Projektwiederherstellung, erfordert jedoch vorherige Einrichtung.

Vorteile:

- Backup-Dateien werden im **selben Verzeichnis wie das Projekt** gespeichert, kein Suchen im Cache-Verzeichnis erforderlich.

- Einfache Anpassung der Backup-Intervalle.

<ImageOnDemand alt="Erweitertes Speichern" src="vegtips/image038_advanced_save.png" />

<p align="center">Menü: <b><code>Werkzeuge -> Erweitertes Speichern</code></b>.</p>

Zwei Funktionen: Live-Speichern und Erweitertes Backup.

- **`Live-Speichern`**: **Speichert nach jeder einzelnen Operation**, stellt sicher, dass die Projektdatei **immer auf dem neuesten Stand** ist.
  - Da es nach jeder Aktion speichert, **kann es bei großen Projekten erhebliche Verzögerungen verursachen, daher wird es NICHT empfohlen**.

- **`Erweitertes Backup`**: Erstellt zusätzliche `.veg`-Backup-Dateien.

  Mehrere Ebenen: **Minuten/Stündlich/Täglich/Live**.

  - `Minuten-Backups`: Speichert 1 `.veg`-Backup **alle `x` Minuten**, **behält nur Backups der letzten Stunde**. Ältere Backups löschen sich automatisch.

  - `Stündliche Backups`: Speichert 1 `.veg`-Backup **alle `x` Stunden**, **behält nur Backups der letzten 10 Stunden**. Ältere löschen sich automatisch.

  - `Tägliche Backups`: Speichert 1 `.veg`-Backup **beim Öffnen/Schließen von VEGAS jeden Tag**. Behält maximal `x` Backups; älteste wird gelöscht, wenn überschritten.

  - `Live-Backups`: **Speichert ein Backup nach jeder Operation** als separate `.veg`-Datei. Behält maximal `x` Backups; älteste wird gelöscht, wenn überschritten. Wie "Live-Speichern", **kann bei großen Projekten Verzögerungen verursachen, NICHT empfohlen**.

Hinweis: Diese Backup-Ebenen sind **unabhängig**.

- `Minuten-Backups` gehen in `MinorBackups`-Ordner im angegebenen Verzeichnis.

- `Stündliche Backups` gehen in `MajorBackups`.

- `Tägliche Backups` gehen in `CriticalBackups`.

- `Live-Backups` gehen in `RealtimeBackups`. Aktivieren von `Live-Backups` deaktiviert andere Ebenen.

**Aktivieren von `Erweitertes Backup` deaktiviert die standardmäßige [5-Minuten Auto-Speicher](#_2-vegas-standard-5-minuten-auto-speichern)-Funktion.**

Für andere Fragen klicken Sie auf das **Fragezeichen oben rechts im Erweitertes Speichern-Fenster für Hilfedokumentation**.

<br>

### 4. Inkrementelles Speichern verwenden (VP18+)

Inkrementelles Speichern, verfügbar seit VP18, Tastenkombination **`Strg + Alt + S`**. Ähnlich wie "Speichern unter", aber bequemer; **speichert automatisch als neue Datei mit einer Inkrementnummer**, überschreibt das Original nicht. Sie können die Tastenkombination über `Optionen -> Tastatur anpassen` neu zuweisen.

<br>

### ~~5. Manuelles periodisches Backup von Projektdateien~~

<br>

## XIV. Downgraden von Projektversionen

Normalerweise können neuere VEGAS ältere Projektdateien mit guter Kompatibilität öffnen. Ältere VEGAS können neuere Projektdateien nicht öffnen. Dieser Abschnitt bietet Methoden zum Downgraden von Projektversionen.

<br>

### 1. VEGAS-Projektdatei-Version-Downgrade-Tool

<ImageOnDemand alt="MSVPVF" src="vegtips/image039_msvpvf.png" />

Original-Projektlink: https://sr.ht/~mrpapersonic/msvpvf/

Dieses Tool ändert die Versionskennung innerhalb der Projektdatei, um sie zu downgraden. Es passt jedoch die Struktur des Projekts nicht an. Daher wird die Datei oft als beschädigt angezeigt und kann nicht geöffnet werden, selbst wenn die Versionskennung gesenkt wurde. Der Autor führt das Konzept der "Generationen" ein, schlägt vor, dass Downgrade-Kompatibilität nur innerhalb derselben Generation existiert: VEGAS-Projekte können nicht generationsübergreifend downgradet werden, nur innerhalb derselben Generation. Basierend auf dem Konzept des Autors und meinen Tests sind die Generationsgrenzen ungefähr: `8 - 11 | 12 - 14 | 15 - 16 | 17 | 18 | 19 - 21 Build 208 | 21 Build 300 - 22 | 23`. <small>(Unterschiede zwischen kleinen Build-Nummern können weitere Aufspaltungen verursachen, daher ist dies ungefähr.)</small> Der mittlere Bereich ist ziemlich fragmentiert, was den praktischen Nutzen dieses Tools begrenzt, obwohl es für spezifische Versionenpaare funktioniert.

**VEGAS-Projektdatei-Version-Downgrade-Tool** kompiliert von mir Download-Link: https://github.com/zzzzzz9125/msvpvf/releases/

Die folgenden Methoden sind keine echten Versionsdowngrades, sondern übertragen Projektinhalte.

<br>

### 2. Versionsübergreifende Kopieren-Einfügen-Methode

VEGAS unterstützt mehrere Instanzen. Sie können Events zwischen Projekten in verschiedenen Instanzen kopieren-einfügen. Dies kann verwendet werden, um Inhalte über VEGAS-Versionen hinweg zu kopieren-einfügen, indem mehrere Versionen ausgeführt werden.

Diese Methode funktioniert über einen größeren Bereich als das Tool oben, kopiert jedoch nur **Events**, nicht ganze Spuren mit ihren Eigenschaften.

<br>

### 3. Versionsübergreifende Plugin-Ketten-Methode

Siehe [Verwenden, Importieren und Exportieren von VEGAS-Plugin-Ketten-Voreinstellungen](#verwenden-importieren-und-exportieren-von-vegas-plugin-ketten-voreinstellungen) in Kapitel II. Durch Speichern von Plugin-Ketten können Sie Audio/Video-FX-Ketten von einem Projekt/einer Version auf eine andere übertragen. Plugin-Ketten unterstützen FX an verschiedenen Positionen, können jedoch nicht stapelweise angewendet werden; müssen pro Kette einzeln gespeichert/geladen werden. Oft verwendet mit Methode 2: Methode 2 überträgt Events, Methode 3 überträgt Spur-FX.

Versionsdowngrading verursacht unweigerlich Kompatibilitätsprobleme, hauptsächlich in zwei Bereichen:

- **Neue Funktionen.** Zum Beispiel werden VP21's "Anpassungs-Events" zu leeren Events in älteren Versionen; VP20's aktualisierte VST-Engine macht seine VST-FX in älteren Versionen unerkennbar, usw.

- **Interne API- oder GUID-Änderungen.** Zum Beispiel sind VP13 (Sony) und VP14 (MAGIX) eine Trennlinie; sie können nicht versionsübergreifend kopiert-eingefügt werden. VP17 änderte das GUID-Präfix für alle eingebauten OFX von `sonycreativesoftware` zu `vegascreativesoftware`, macht diese FX in älteren Versionen unerkennbar.

Versions-Upgrades haben diese Probleme im Allgemeinen nicht.

<br>

## XV. Andere Q&A

F: VEGAS erzeugt eine **`.sfk`-Datei** neben importierten Medien. Gibt es eine Möglichkeit, sie **auszublenden**?

A:

- **Alte Versionen**: Nein. `.sfk` ist die Audio-Peak-Datei. VEGAS hat **keine Einstellung**, `.sfk`-Dateien anderswo zu speichern; sie müssen neben der Mediendatei sein. Manuelles Löschen verursacht Regeneration beim erneuten Öffnen des Projekts.  
  <small><s>Sogar Sound Forge kann Peak-Dateien direkt ausblenden, aber Vegas kann es nicht. Ist das nicht ein bisschen...</s></small>

- **Neue Versionen (`21 Build 300`+)**: `Einstellungen -> Allgemein`, zwei neue Optionen: **`.sfk-Dateien zur Speicherung von Peak-Daten nicht erstellen`** und `Neue .sfk-Dateien ausblenden`. Nur die zweite aktivieren blendet neue `.sfk`-Dateien aus (sichtbar wenn "Ausgeblendete Dateien anzeigen" aktiviert ist). Die erste aktivieren **verhindert `.sfk`-Generierung vollständig** (Peak-Daten beim Projektöffnen neu erstellt, normalerweise in Ordnung), **empfohlen**.

<br>

F: Nach dem Import von Audio/Video ist **Audio-Wellenform nicht sichtbar, zeigt "Peaks nicht verfügbar"**, aber Audio spielt?

A: Wenn **Mediendateien in einem Ordner sind, der Administratorberechtigungen erfordert**, kann VEGAS keine `.sfk`-Dateien generieren, was zu **`Peaks nicht verfügbar`** führt. Lösung: **Verschieben Sie Mediendateien in einen Ordner, der keine Administratorberechtigungen erfordert**.

<small>
Auch, für Info zu <code>.sfk</code>, <code>.sfl</code>, <code>.sfap0</code>, <code>.sfvp0</code> Dateien, siehe: <a href="https://vegasaur.com/sweeper">https://vegasaur.com/sweeper</a><br>
</small>

<br>

## XVI. Software-Kaufkanäle

1.  VEGAS Offizielle Website: https://www.vegascreativesoftware.com/us/

  - Verkauft nur die neueste Version. Zwei Haupteditionen: Standard (kein Suffix, früher `Edit`) und `Suite` (enthält zusätzliche Software/Plugins). Verfügbar als Dauerlizenz (Einmalkauf) oder Abonnement (365 Tage). Unterstützt auch Upgrade-Rabatte, wenn Sie eine ältere Lizenz besitzen. Eine Lizenz aktiviert zwei Geräte; Sie können Geräte in Ihrem MAGIX-Konto deaktivieren (mit Abkühlzeit).

  - Offizielle Installer-Links: https://www.vegascreativesoftware.info/us/forum/posts--104782/





2.  Einige regionale Vertreter, z. B. Japan: https://www.sourcenext.com/product/vegas/video/vegas-edit/
  - Billiger als offizielle Seite, könnte Sie aber zwingen, Japanisch zu verwenden.

3. Steam-Edition: https://store.steampowered.com/app/4006040/
  - VP23 für $199 in USA. Steam-Edition **erlaubt jedoch keine mehreren Instanzen**, unterstützt keine manuellen Registrierungsänderungen für Sprache, und fehlt Cloud-Dienste wie Text-to-Speech/Speech-to-Text und VEGAS Hub.

4.  Gelegentliche Deep-Discount-Bundles auf Seiten wie [Humble Bundle](https://www.humblebundle.com/), [Fanatical](https://www.fanatical.com/).

  - Preis um $20-30. Typischerweise enthält VEGAS Pro Version **zwei Versionen hinter der aktuell neuesten**, plus gebündelte Inhalte. Qualifiziert sich auch für offizielle Upgrade-Rabatte. Zum Beispiel, wenn neueste 21 ist, verkaufen sie 19. Verkäufe sind unregelmäßig und kurz, mit variierenden Bundle-Inhalten.

Alle Kanäle haben zufällige Rabatte. Für aktuelle Angebote folgen Sie diesem Thread: https://www.vegascreativesoftware.info/us/forum/posts--109642/

<br>

## XVII. VEGAS Communities/Foren



VEGAS Pro Offizielles Forum: [https://www.vegascreativesoftware.info/us/vegas-pro-forum/](https://www.vegascreativesoftware.info/us/vegas-pro-forum/)

VEGAS Pro Reddit: [https://www.reddit.com/r/VegasPro/](https://www.reddit.com/r/VegasPro/)
