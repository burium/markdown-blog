+++
title = "PHP Erste Schritte"
date = 2025-01-16
draft = false
description = "Eine Schritt-für-Schritt-Anleitung, um zu überprüfen, ob PHP auf einem Server installiert ist, einschließlich der Erstellung einer phpinfo.php-Datei."
image = "https://r72.cooltext.com/rendered/cooltext473991758467426.png"
imageBig = "https://r72.cooltext.com/rendered/cooltext473991758467426.png"
categories = ["PHP", "Web Development"]
authors = ["Cude"]
avatar = "/images/avatar.webp"
+++




Um zu sehen, ob auf einem Server überhaupt PHP installiert ist, benötigt man eine PHP-Datei (z.B. `phpinfo.php`) mit folgendem Inhalt:
{{< highlight go "linenos=inline, hl_Lines=3 6-8, style=monokai" >}}
<?php
phpinfo();
?>
{{< /highlight >}}
Diesen Code kannst du einfach in einem Texteditor, z.B. Notepad einfügen. Danach klickst du auf speichern, und gibst als Dateinamen _phpinfo.php_ an. Bitte achte darauf, dass Notepad diese Datei **nicht** als .txt-Textdatei speichert, sondern sie wirklich die Dateiendung _.php_ hat. Dann kopierst du die Datei in den Ordner **htdocs** deiner xampp-Installation (z.B. D:\\xampp\\htdocs).
Statt Notepad kannst du auch jeden anderen Editor verwenden. Für den Anfang empfehle ich das kostenlose Notepad++.
Ruft man diese Seite jetzt auf ([http://localhost/phpinfo.php](http://localhost/phpinfo.php)), wird angezeigt, ob auf diesem Server PHP installiert ist oder nicht. Ist PHP installiert, werden mehrere Tabellen angezeigt, in welchen aufgelistet wird, was installiert ist und was nicht, unter anderem welche PHP-Version auf dem Server installiert ist (steht ganz oben). Ist kein PHP Installiert, wird entweder nichts angezeigt oder eine Fehlermeldung wird ausgegeben, evt. wird uns die Datei auch zum Download angeboten. Wie du PHP installierst stand im ersten Teil des Tutorials: [PHP installieren](https://www.php-einfach.de/php-tutorial/php-installation/).

## PHP Code Einbinden
------------------

In einer PHP-Datei können sowohl HTML-Befehle als auch PHP-Befehle enthalten sein. Die HTML-Befehle schreibt ihr wie gewohnt in die .php-Datei, so wie ihr es aus HTML-Dateien kennt.

Möchte man in die Datei  PHP-Befehle einbinden, so muss zuerst eine Script-Umgebung gestartet. Dies geht mittels _Danach kommt euer PHP-Code. Diese Script-Umgebung wird beendet mittels_ ?>.
{{< highlight go "linenos=inline, hl_Lines=3 6-8, style=monokai" >}}
<!DOCTYPE html>
<html> 
<head>
	<meta charset="UTF-8" />
	<title>Eure erster PHP-Script</title> 
</head>
 
<body>
<h1>Herzlich Willkommen</h1>

<p>Dies ist eure erste PHP-Datei. Eine Scriptumgebung könnt ihr wie folgt starten: 
<?php
echo "Mittels echo können Daten ausgegeben werden";
?></p>

<p>Später könnt ihr in PHP dynamische Inhalte erzeugen. Ein einfaches Beispiel ist das aktuelle Datum auszugeben: 
<?php
echo date("d.m.Y H:i:s");
?></p>
 
</body>
</html>
{{< /highlight >}}
Im obigen Script habt ihr ein gewöhnliches HTML5-Grundgerüst. Zwischen den HTML-Befehlen finden sich immer wieder PHP-Abschnitte. Der erste Abschnitt gibt nur einen Text aus. Der zweite Abschnitt gibt das aktuelle Datum und die aktuelle Uhrzeit aus.

Wenn ein Benutzer diese Datei über euren Webserver aufruft (z.B. http://localhost/ersteseite.php), so wird der PHP-Interpreter aktiv und wertet alle PHP-Scriptumgebungen aus. Das Ergebnis des PHP-Codes wird dann in die Seite eingefügt. Auf den eigentlichen PHP-Code hat der Besucher keinen Zugriff.
