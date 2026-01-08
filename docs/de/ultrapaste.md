---
layout: doc
title: UltraPaste!-Erweiterung
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

# UltraPaste!-Erweiterung

<ImageOnDemand alt="Symbol" src="ultrapaste/img001_ultrapaste_icon.png" />

## Übersicht

Diese Erweiterung führt eine **<u>neuartige</u>** Dateiimportmethode für VEGAS Pro ein. Mit nur einer Tastenkombination können Sie fast jeden Dateityp importieren: reguläre Mediendateien, Bilder aus der Zwischenablage, SRT-Untertiteldateien und sogar REAPER-Zwischenablagedaten. Sie müssen lediglich `Strg + C` und dann `Strg + Umschalt + V` drücken, um diese Dateien schnell in die VEGAS-Zeitachse zu importieren.

Beispiel für die Medienimportmethode:

<ImageOnDemand alt="Medienimport" src="ultrapaste/img015_ultrapaste_media_import.gif" />

Interaktion der Funktion `Zwischenablagebild` mit Ihrem Screenshot-Tool:

<ImageOnDemand alt="Screenshot" src="ultrapaste/img016_ultrapaste_screenshot.gif" />

Interaktion der Funktion `Zwischenablagebild` mit PowerPoint:

<ImageOnDemand alt="PowerPoint" src="ultrapaste/img017_ultrapaste_ppt.gif" />

## Installation

Aktuelle Erweiterungsversion: v1.03 Beta

Unterstützte Versionen: Sony Vegas Pro 13 – Magix Vegas Pro 22

1.  Gehen Sie zu [Releases](https://github.com/zzzzzz9125/UltraPaste/releases), um die neueste .zip-Datei herunterzuladen und zu entpacken. Wählen Sie `UltraPaste.dll` <small>(oder `UltraPaste_13.dll` für `Sony VEGAS Pro 13`)</small> und `UltraPaste.png` aus, kopieren Sie sie und fügen Sie sie in den Erweiterungsordner ein:
  - `C:\ProgramData\Vegas Pro\Application Extensions\`
  - oder für Sony: `C:\ProgramData\Sony\Vegas Pro\Application Extensions\`
  - Klicken Sie [hier](/de/#allgemeine-schritte-zur-installation-eines-skripts-oder-einer-erweiterung), wenn Sie nicht wissen, wie Erweiterungen installiert werden.

2.  Nach der Installation finden Sie das andockbare Erweiterungsfenster über `Extras -> UltraPaste!`.

<ImageOnDemand alt="Extras-Menü" src="ultrapaste/img002_ultrapaste_tools_menu.png" />

## Verwendung

Zuerst das oberste `UltraPaste!`. Dies ist die Hauptfunktion der Erweiterung; fast alle Operationen können damit durchgeführt werden. Sie können ihr in `Optionen -> Tastatur anpassen` eine Tastenkombination zuweisen:

<ImageOnDemand alt="Tastatur anpassen" src="ultrapaste/img003_ultrapaste_keyboard.png" />

`Strg + Umschalt + V` ist meine persönliche Empfehlung. Sie können auch eine andere bequeme Tastenkombination vergeben. Es wird nicht empfohlen, `Strg + V` zu vergeben, da dies die native VEGAS-Einfügetaste überschreiben würde.

Damit ist die Tastenkombination für unsere UltraPaste-Taste vergeben. Alle Ein-Klick-Operationen, die im Menü erscheinen, können auf dieselbe Weise mit Tastenkombinationen versehen werden.

Die Dateiimportlogik ist einfach: Wählen Sie beispielsweise eine beliebige Mediendatei auf Ihrem Desktop aus, drücken Sie `Strg + C`, führen Sie die `UltraPaste`-Tastenkombination in VEGAS aus, und sie wird auf den aktuell ausgewählten VEGAS-Spur importiert. Wenn Sie in VEGAS einen Loop-Bereich definiert haben, kann die Datei entsprechend der Länge dieses Loop-Bereichs importiert werden.

Neben dem grundlegenden Dateiimport kann die Erweiterung auch diese Zwischenablagedatentypen lesen:
*   Bilder in der Zwischenablage
*   Nur-Text- und Untertiteldateien
*   REAPER-Zwischenablagedaten

Alle diese Daten können korrekt erkannt und verarbeitet werden.

<br>

`UltraPaste! - Fenster` ist das Einstellungsfenster der Erweiterung, in dem Sie das Verhaltenslogik von `UltraPaste` anpassen können.

### Allgemein

<ImageOnDemand alt="Allgemein" src="ultrapaste/img004_ultrapaste_general.png" />

Dateitypen ausschließen: Diese Option bewirkt, dass die Erweiterung Dateien ausschließt, die bestimmten Namensmustern entsprechen. Es werden einfache DOS-Ausdrücke verwendet. Beispielsweise sind `*.sfvp0` und `*.sfap0` im Bild die Video-Proxy-Dateien bzw. Audio-Proxy-Dateien von VEGAS Pro. Diese Proxy-Dateien können tatsächlich direkt in VEGAS importiert werden, sind jedoch standardmäßig ausgeschlossen, um Benutzerfehler zu vermeiden. Wenn Sie bestimmte Dateien nicht importieren müssen, können Sie diese Einstellung selbst anpassen.

<br>

### Zwischenablagebild

<ImageOnDemand alt="Zwischenablagebild" src="ultrapaste/img005_ultrapaste_clipboard_image.png" />

`Startposition`: Die Startposition für den Dateiimport. Unterteilt in drei Kategorien: `Cursor`, `Wiedergabecursor`, `Projektanfang`. Der Unterschied zwischen `Cursor` und `Wiedergabecursor` ist, dass beim Abspielen der Zeitachse der `Cursor` nur der Startpunkt der Wiedergabe ist, während der `Wiedergabecursor` die Echtzeit-Wiedergabeposition der Zeitachse ist.

`Cursor an Ende bewegen`: Imitiert Einfügeverhalten und bewegt den Cursor nach dem Einfügen automatisch an das Ende der neuen Ereignisse.

`Speicherpfad`: VEGAS kann Dateien nicht aus dem Nichts einbetten; alle Mediendateien müssen an einem tatsächlichen Speicherort gesichert werden. Wir müssen den Pfad für Zwischenablagebilder festlegen.

*   Standardwert: `Clipboard\<yyyyMMdd_HHmmss>.png`. Dies entspricht `%PROJECTFOLDER%\Clipboard\<yyyyMMdd_HHmmss>.png`, wobei `%PROJECTFOLDER%` den Ordnerpfad der aktuellen Projektdatei bezeichnet. <small>(Wenn das Projekt noch nicht gespeichert wurde, wird standardmäßig der Desktop-Pfad verwendet.)</small>
*   `<yyyyMMdd_HHmmss>` bezieht sich auf das Zeitstempelformat für die Dateispeicherung. Hier legen wir fest, dass Teile des Pfads, die in Zeitstempel konvertiert werden müssen, in `<>` eingeschlossen sein müssen, andernfalls konvertiert die Erweiterung sie nicht.
    *   Für andere Zeitstempel-Formatierungssyntax siehe: https://learn.microsoft.com/dotnet/api/system.datetime.tostring

<br>

### REAPER-Daten

<ImageOnDemand alt="Reaper-Daten" src="ultrapaste/img006_ultrapaste_reaper_data.png" />

Dies ist eine der Schlüsselfunktionen dieser Erweiterung: Vollständige Implementierung des Imports und Exports von REAPER-Zwischenablagedaten. Sie können verschiedene Elemente oder Spuren in REAPER auswählen, `Strg + C` drücken und dann direkt mit `Strg + Umschalt + V` in die VEGAS-Zeitachse einfügen.

Die Erweiterung passt verschiedene Parameter zwischen den beiden Softwareprogrammen an:
*   `REAPER Elementeigenschaften` → `VEGAS Ereigniseigenschaften`
*   `REAPER Element-/Spuren-Hüllkurven` → `VEGAS Spuren-Hüllkurven`
*   `REAPER Element-Stretch-Marker` → `VEGAS Audio-Ereignis-Stretch / Video-Ereignis-Geschwindigkeits-Hüllkurven`
*   `REAPER Spureneigenschaften` → `VEGAS Spureneigenschaften`
*   ...

Kurz gesagt, alles Anpassbare wurde angepasst. Sie können auch eine REAPER-Projektdatei auswählen, `Strg + C` drücken und sie als mehrere Spuren importieren.

Sie können auch VEGAS-Ereignisse oder Spuren als REAPER-Zwischenablagedaten exportieren und dann in REAPER `Strg + V` drücken, um vollständige Interoperabilität zwischen den Softwareprogrammen zu erreichen.

<ImageOnDemand alt="Reaper-Beispiel 1" src="ultrapaste/img007_ultrapaste_reaper_1.png" />

<ImageOnDemand alt="Reaper-Beispiel 2" src="ultrapaste/img008_ultrapaste_reaper_2.png" />

Hinweis: Aufgrund von Skript-API-Beschränkungen können bei VEGAS-Versionen älter als die Endversion 15, `VP15B416`, alle parameterbezogenen Audio-Ereignis-Tonhöhen nicht in VEGAS übertragen werden und können auch nicht in REAPER-Zwischenablagedaten ausgegeben werden.

`Anfängliche Lücke schließen`: REAPER-Zwischenablagedaten enthalten die absolute Position der ursprünglichen Elemente innerhalb des REAPER-Projekts. Wenn "Anfängliche Lücke schließen" deaktiviert ist, ist die Startposition beim Einfügen = REAPER-Projektstartposition. Wenn "Anfängliche Lücke schließen" aktiviert ist, ist die Startposition beim Einfügen = Startposition des ersten Elements.

`Videostream hinzufügen`: Fügt importierten REAPER-Elementen einen Videostream hinzu.

<br>

### PSD-Bilder

<ImageOnDemand alt="PSD-Bilder" src="ultrapaste/img009_ultrapaste_psd.png" />

`Alle Ebenen entfalten`: Beim Import eines mehrschichtigen PSD-Bildes werden automatisch separate VEGAS-Spuren erstellt.

`Andere Ebenen hinzufügen`: Ergänzt für eine ausgewählte einzelne PSD-Ebene alle anderen Ebenen darüber und darunter.

<br>

### Untertitel

<ImageOnDemand alt="Untertitel" src="ultrapaste/img010_ultrapaste_subtitles.png" />

Untertitel sind eine weitere Schlüsselfunktion dieser Erweiterung. Sie können beliebige `Nur-Text`- / `TXT`-Dateien / `SRT`-Untertiteldateien / `LRC`-Untertiteldateien kopieren und in die VEGAS-Zeitachse einfügen.

`Generatortyp`: Der Typ des Untertitelgenerators.

`Voreinstellungsname`: Der Name der Voreinstellung des Untertitelgenerators, den Sie verwenden möchten. Sie müssen die Voreinstellung vorab im entsprechenden FX anpassen und speichern.

Für die DXT-Typ-Plugins `ProType Titler` und `(Legacy) Text` werden nur benutzerdefinierte Voreinstellungen erkannt; die mit VEGAS gelieferten Voreinstellungen werden nicht unterstützt. <small>(Wenn Sie sie verwenden möchten, benennen Sie sie einfach um und speichern sie erneut.)</small>

`Bereich`: Importiert Untertitel als VEGAS-Bereiche.

`Maximale Zeichen`: Automatischer Zeilenumbruch, wenn die Anzahl der Zeichen in einer Zeile den angegebenen Wert überschreitet. 0 bedeutet keine Zeichenbegrenzung.

`Wort ignorieren`: Wenn nicht aktiviert, optimiert die Erweiterung die Worttrennung durch Leerzeichen, d.h., sie wird ein ganzes Wort nicht gewaltsam trennen und versuchen, bei Leerzeichen umzubrechen. Für Sprachen wie Chinesisch, die normalerweise keine Leerzeichen verwenden, können Sie dieses Kästchen direkt aktivieren, und die Trennung erfolgt streng nach Zeichenanzahl.

`Maximale Zeilen`: Wenn die Anzahl der Zeilen in einem Untertitelblock einen bestimmten Wert überschreitet, wird er automatisch in neue Untertitelblöcke aufgeteilt. Die Aufteilungslänge wird aus dem Originalblock gemittelt.

`Mehrspurig`: Teilt mehrere Zeilen innerhalb eines einzelnen Untertitelblocks in mehrere Spuren auf. Hinweis: Die Erweiterung wendet keine Positionsanpassungen auf diese mehreren Spuren an, sodass solche Untertitel im Vorschaufenster überlappen und manuell angepasst werden müssen.

`Standardlänge`: Die Standardlänge (in Sekunden) beim Import von Nur-Text oder TXT-Dateien ohne Zeitachse aus der Zwischenablage.

<ImageOnDemand alt="Untertitelbereich" src="ultrapaste/img011_ultrapaste_subtitles_region.png" />

<p align="center">Tipp: Es ist bequemer, zuerst einen Bereich auf der Zeitachse zu definieren und dann die Tastenkombination zu drücken.</p>

`Voreinstellung auf ausgewählte Ereignisse anwenden`: Wendet die aktuelle Voreinstellung auf ausgewählte Ereignisse an. Unterstützt nur OFX-Effekte, d.h. nicht `ProType Titler` und `(Legacy) Text`.

`T&T zu ProType Titler`: Konvertiert ausgewählte "Titel & Text"-Ereignisse mit einem Klick in `ProType Titler`-Ereignisse.

<br>

### Medien

<ImageOnDemand alt="Medien" src="ultrapaste/img012_ultrapaste_media.png" />

`Hinzufügemethode`: Unterteilt in drei Typen: `Über Zeit`, `Über Spuren`, `Als Takes`. Vollständig konsistent mit den drei Dateiimportmethoden im nativen Rechtsklick-Zieh-Importmenü von VEGAS.

`Stream-Typ`: Unterteilt in `Alle`, `Nur Video`, `Nur Audio`.

`Ereignislänge`: Unterteilt in `Medienlänge`, `Schleife`, `Schleifendurchschnitt`. `Schleifendurchschnitt` ist nur wirksam, wenn die Hinzufügemethode `Über Zeit` ist.

`Bildsequenzen automatisch importieren`: Wenn die Erweiterung erkennt, dass der Benutzer eine Bildsequenz importiert (z.B. folgen alle ausgewählten Bilddateien einer Namenslogik wie `000000.png - 114514.png` und die Bildabmessungen sind identisch), importiert sie diese automatisch als Bildsequenz.

`Fehlenden Stream hinzufügen`: Fügt ausgewählten Ereignissen fehlende Streams hinzu.

<br>

Medienbenutzerdefinierter Import:

<ImageOnDemand alt="Medienbenutzerdefinierter Import" src="ultrapaste/img013_ultrapaste_media_custom.png" />

<p align="center">Importregeln für bestimmte Medien-Dateinamen festlegen</p>

Die Anpassung ermöglicht es Ihnen, spezielle Importregeln für bestimmte Medien-Dateinamen festzulegen. Nach der Änderung klicken Sie auf `√`, um die Einstellungen zu speichern. Für Einstellungen, die Sie nicht mehr benötigen, drücken Sie `×`, um sie zu löschen.

<small>Die UI-Logik hier ist etwas starr; die Dateiregelzeichenfolge wird als Schlüsselname verwendet. Um einen Dateinamen zu ändern, müssen Sie ihn daher zuerst löschen und dann neu eingeben und ändern, da das Original sonst nicht entfernt wird.</small>

Beispielsweise bezieht sich mein `1_*(*).wav;1_*(*).flac` hier auf die Namenskonvention der Stemdaten-Ausgabe von [UVR5](https://github.com/Anjok07/ultimatevocalremovergui). Wir fordern, dass sie nur als Audio und mit der Methode "Über Spuren" importiert werden. Danach wählen Sie im Ordner die Stemdaten mehrfach aus, drücken `Strg + C` und dann die `UltraPaste!`-Tastenkombination, um die [UVR5](https://github.com/Anjok07/ultimatevocalremovergui)-Stems direkt zu importieren.

<br>

### VEGAS-Daten

<ImageOnDemand alt="VEGAS-Daten" src="ultrapaste/img014_ultrapaste_vegas_data.png" />

`VEG-Importtyp`: Unterteilt in drei Kategorien: `Projektdatei öffnen`, `Als verschachteltes Projekt importieren`, `Medien aus Projekt importieren`.

`Ereignisattribute einfügen`: Wenn Zwischenablagedaten VEGAS-Ereignisse enthalten, führt `Selektives Einfügen von Ereignisattributen` aus.

(Aufgrund von Versionsbeschränkungen können VEGAS Pro 14 und niedriger `Selektives Einfügen von Ereignisattributen` nicht verwenden und können nur `Ereignisattribute einfügen` ausführen.)

`Skript ausführen`: Wenn kopierte Dateien `.cs`- / `.js`- / `.vb`- / `.dll`-Dateien enthalten, wird versucht, sie als Skripte auszuführen. Ausführungsfehler führen direkt zu Fehlermeldungen. Aktivieren Sie diese Option also nicht, wenn Sie nicht zufällig `.dll`-Dateien usw. kopieren und einfügen.

`Gemischte VEGAS-Zwischenablagedaten generieren`: Für allgemeine Benutzer nicht sehr nützlich. Wenn Sie jedoch sowohl die Sony-Version (Sony VEGAS Pro 13 und niedriger) als auch höhere Versionen verwenden, konvertiert dieser Ein-Klick-Vorgang die VEGAS-Ereignisse in den Zwischenablagedaten in eine Version, die sowohl in Sony- als auch in Magix-Versionen eingefügt werden kann. Ein experimentelles Feature, nicht vollständig zuverlässig.
