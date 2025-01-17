+++
title = "PHP Kommentare"
date = 2025-01-16
draft = false
description = "Einführung in PHP-Kommentare und deren Verwendung im Code."
image = "https://r72.cooltext.com/rendered/cooltext473991758467426.png"
imageBig = "https://r72.cooltext.com/rendered/cooltext473991758467426.png"
categories = ["PHP", "Web Development"]
authors = ["Cude"]
avatar = "/images/avatar.webp"
+++
Kommentare in PHP werden nicht vom PHP Interpreter ausgeführt, sondern werden stattdessen von diesem übersprungen. Sie dienen euch als Programmierer, um euren Programmcode übersichtlicher zu gestalten. Ihr könnt so, wie der Name sagt, euren Programmcode kommentieren, sprich, erläutern welche Funktionen einzelne Programmabschnitte haben.

Inhaltsverzeichnis:

[1 Kommentare in PHP Definieren](#kommentare-in-php-definieren)
[2 Mehrzeilige Kommentare](#mehrzeilige-kommentare)    
[3 Was und wie sollte man kommentieren?](#was-und-wie-sollte-man-kommentieren)
    





Kommentare in PHP Definieren
----------------------------

Um in einem PHP-Script einen Kommentar einzufügen, könnt ihr entweder zwei Slashs _//_  oder eine Raute #  nutzen. Sofern eins von diesen beiden Zeichen in eurem Programmcode auftaucht, so wird der restliche Inhalt der Zeile übersprungen und der PHP Interpreter geht zur nächsten Zeile.

```php
<?php
echo "Hallo Welt! <br>";
//Dies ist ein Kommentar

#Ein weiterer Kommentar - Ausgabe des Text
echo "Wie ihr feststellt, sind die Kommentare bei der Ausgabe nicht sichtbar.";
?>
```
    

Alles was dem doppeltem Slashs oder nach der Raute steht wird ignoriert. Der Zeilenumbruch beendet dann den Kommentar und der Code in der nächsten Zeile wird wieder ausgeführt.

Mehrzeilige Kommentare
----------------------

Manchmal ist es auch sinnvoll ein Kommentar über mehrere Zeilen zu haben, wenn man z.B. einen Programmabschnitt auskommentieren möchte.Solch ein Kommentar startet mit **/\*** und endet mit **\*/**:


```php
<?php
/* Die erste Zeile des Kommentars
Zweite Zeile des Kommentars
Die letzte Zeile des Kommentars */
echo "Hallo Welt. Wie ihr feststellt, wird nur dieser Text angezeigt. Die Kommentare vor sind nicht sichtbar.";
?>
```
    

Was und wie sollte man kommentieren?
------------------------------------

Kommentare geben euch als Programmierer die Möglichkeit, die Funktionalität eurer Scripts zu kommentieren. Im Grunde seid ihr nicht verpflichtet diese zu verwenden, aber sie können euch enorm helfen euren Programmcode übersichtlicher und besser nachvollziehbar zu gestalten.

Tendenziell solltet ihr stets kommentieren, was euer Script macht, weniger wie dieser es macht. Ihr kommentiert also tendenziell die Funktionalität, so dass bei einem erneuten studieren des Programmcodes schnell klar wird, was genau einzelne Codeabschnitte machen. Gerade wenn ihr [eigene Funktionen](https://loquacious-mandazi-92bae5.netlify.app/php-eigene-funktionen/) definiert, solltet ihr zu Beginn der Funktion kurz kommentieren, was diese Funktion macht.
