+++
title = "Text ausgeben per echo"
date = 2025-01-16
draft = false
description = "Einführung in die Ausgabe von Text mit echo in PHP."
image = "https://r72.cooltext.com/rendered/cooltext473991758467426.png"
imageBig = "https://r72.cooltext.com/rendered/cooltext473991758467426.png"
categories = ["PHP", "Web Development"]
authors = ["Cude"]
avatar = "/images/avatar.webp"
+++

Einen Text könnt ihr in PHP mittels dem Sprachkonstrukt *echo* ausgeben.

Erstellt für das erste Beispiel eine neue Datei (z.B. *hallo.php*) und speichert in dieser den folgenden Text:

```php
<?php
echo "Hello World";
?>
```
Wenn ihr die Datei lokal ausführen wollt, so müsst ihr diese im htdocs-Ordner eurer XAMPP-Installation abspeichern. Mehr Informationen hierzu in unserem Artikel [Erste Schritte](https://loquacious-mandazi-92bae5.netlify.app/erste-schritte/).
Wird nun diese Datei mit dem Browser aufgerufen, so erscheint als Ausgabe: Hello World. Der Browser des Besuchers erhält nur das Ergebnis eures Scripts und nicht den PHP-Code. Der PHP-Code wird auf dem Server ausgeführt und ausschließlich das Ergebnis wird an den Benutzer gesendet.
Wie im Artikel Erste Schritte, starten wir einen PHP-Script immer mit der Zeile *<?php* an.
In der nächsten Zeile folgt dann die PHP-Anweisung
```php
echo "Hello World";
```
**echo** ist die Anweisung, einen bestimmten Text auszugeben. Dieser Text steht zwischen den beiden Anführungszeichen. Das Semikolon (;) beendet die Anweisung _echo_. Fast jeder Befehl (bis auf wenige Ausnahmen) endet mit einem Semikolon (;). Mit _?>_ beenden wir das PHP-Script.
Alles zwischen den Anführungszeichen gilt als Text und kann frei definiert werden, auch HTML-Befehle sind möglich z.B.
```php
<?php
echo "<b>Hello World</b>";
?>
```
Damit würde das **Hello World** als **Fett** ausgegeben werden.
Möchte man jetzt _Hello "World"_ ausgeben lassen, dann denkt man zuerst an folgende Schreibweise:
```php
<?php
echo "Hello "World"";
?>
```
Allerdings erhalten wir dann die folgende Fehlermeldung:

**Parse error:** parse error, unexpected T\_STRING, expecting ',' or ';' in **D:\\xampp\\htdocs\\hallo.php** on line **2**

Diese Fehlermeldung ist sehr brauchbar, denn daran ist erkennbar, wo der Fehler begangen wurde und meistens auch welcher._on line 2_ zeigt an, dass der Fehler in Zeile 2 liegt.In dieser Zeile steht diese Anweisung:
```php
echo "Hello "World"";
```
Also muss hier irgendetwas falsch sein! Eigentlich ist es ganz logisch. Der Befehl **echo** startet die Ausgabe immer ab dem 1. Anführungszeichen und gibt alles bis zum 2. Anführungszeichen aus. Da aber in dieser Befehlszeile insgesamt 4 Anführungszeichen zur Textausweisung benutzt werden, ist keine klare Definition gegeben. Deshalb erfolgt diese Fehlermeldung und nicht die gewünschte Ausgabe.
Also müssen wir die Anführungszeichen bei "World" mit einem Maskierungszeichen versehen. Dazu benutzen wir den Backslash (\).
Das Script sieht dann so aus:
```php
<?php
echo "Hello \"World\"";
?>
```
Dieses Maskierungszeichen muss vor jedem Anführungszeichen stehen, das als Text ausgegeben werden soll.
Aber was ist wenn wir jetzt einen Backslash ausgeben möchten? Auch dies geht, allerdings wird dafür wieder ein Maskierungszeichen benötigt. Dazu nehmen wir einfach ein zweiten Backslash.
Dies sieht dann so aus:
```php
<?php
echo "D:\\xampp";
?>
```
Die Ausgabe ist dann: D:\xampp
PHP Seiten können aus PHP Scripts und HTML Befehlen bestehen, z.B. so:
```php
<h2>Herzlich Willkommen</h2>
<?php
echo "Auf meiner Internetseite";
?>
```
Dies war auch schon alles, was man über den Befehl **echo** wissen muss.

**Wie wird der echo Befehl verwendet?**
---------------------------------------

Noch sieht der echo-Befehl nicht sonderlich hilfreich aus. Man könnte doch einen Text ja auch einfach mit HTML ausgeben. Der Nachteil von HTML ist, dass keine dynamischen Texte ausgegeben werden können. Anders bei PHP.

Auch wenn man PHP perfekt beherrscht, alle Texte werden mit **echo** (o.ä.) ausgegeben. Das Besondere daran ist, dass diese Texte dann meistens dynamisch, z.B. aus einer Datenbank, erzeugt werden. Allerdings steuert man dann die Ausgabe, mit Hilfe von bestimmten **Variablen**. Der Besucher bestimmt dann meistens selbst, welchen Text er erhält.

So ist das auch bei einem Forum. In der Titelzeile stehen bei Foren fast immer Werte (z.B. ?id=131&seite=2). Diese Werte bestimmen, welche Ausgabe der Besucher erhält.






