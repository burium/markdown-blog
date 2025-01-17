+++
title = "PHP Variablen"
date = 2025-01-16
draft = false
description = "Einführung in Variablen in PHP, ihre Verwendung, Berechnungen und die Übergabe zwischen PHP-Seiten."
image = "https://r72.cooltext.com/rendered/cooltext473991758467426.png"
imageBig = "https://r72.cooltext.com/rendered/cooltext473991758467426.png"
categories = ["PHP", "Web Development"]
authors = ["Cude"]
avatar = "/images/avatar.webp"
+++
Ein fundamentales Konzept jeder Programmiersprache sind Variablen. Variablen können Werte jeder Art enthalten, beispielsweise einfach Zeilen oder Texte, aber auch komplexere Strukturen wie Beispielsweise Listen oder gar Bilder. In diesem Abschnitt lernt ihr die Grundlagen bezüglich Variablen, wie ihr diese verwenden könnt, wie ihr damit rechnen könnt und auch wie ihr Variablen zwischen zwei PHP-Seiten übergeben könnt.

Grundlagen
----------

In PHP werden Texte oder auch Zahlen in sogenannten PHP Variablen bzw. einfach nur Variablen gespeichert, um diese dann später mit Hilfe von **echo** wieder auszugeben.

Variablen in PHP beginnen immer mit einem Dollarzeichen (**$**), direkt gefolgt vom Variablen-Namen, danach ein "Gleichheitszeichen" (**\=**) und anschließend der Text in Anführungszeichen (") eingebunden. Am Ende das Semikolon als Befehlsabschluss(**;**).

Den Variablen kann man einen beliebig passenden Namen geben, allerdings muss auf **Groß- und Kleinschreibung** geachtet werden. Ich würde die Variablen immer klein schreiben, damit kein Durcheinander und damit auch keine Fehlerquellen entstehen können.

Eine Variable in PHP kann z.B. so aussehen:
```php
<?php
$name = "Cude Dev";
echo "Mein Name ist $name";
?>
```

In diesem Beispiel wird die Variable **$name** mit dem Inhalt **Cude Dev** definiert.Zu beachten dabei ist, dass Variablennamen mit einem Buchstaben oder einem Unterstrich beginnen. Zahlen dürfen als Anfangszeichen nicht benutzt werden.Wenn wir eine Variable doppelt "definieren", so überschreiben wir den Inhalt der Variable. Per Echo wird dann nur der aktuelle Inhalt ausgegeben. Natürlich muss der **echo**\-Befehl **nach** der Variable-Definition stehen, da PHP eine Interpreter-Sprache ist und den Code zeilenweise von oben nach unten abarbeitet.Wenn echo **vor** der Variable steht, so versuchen wir eine nicht definierte Variable auszugeben und erhalten eine leere Ausgabe.

Sofern bestimmte Einstellungen gesetzt sind, kann es sogar passieren, dass ein Angreifer beliebigen Text einschleusen kann.

Zur Ausgabe benötigt man natürlich wieder den Befehl **echo**. Das Script für dieses Beispiel sieht dann so aus:
```php
<?php
$name = "Cude Dev";
?>
```  

Als Ausgabe erhalten wir: _Mein Name ist Cude Dev_

Wir können den Inhalt von einer Variable natürlich auch wieder überschreiben, dazu weisen wir der Variable einfach den neuen Wert zu:
```php
<?php
$name = "Paul Meier";
echo "Zuerst heiße ich $name <br />";

$name = "Stefan Müller";
echo "Dann ist mein Name $name";
?>
```   

Die Ausgabe wäre dann:
_Zuerst heiße ich Paul Meier_ 
_Dann ist mein Name Stefan Müller_

Bisher wäre diese Funktion nur bei sehr langen Texten interessant, möchte man z.B. eine Person an 10 verschiedenen Stellen ansprechen.

Wenn wir jedoch mit _echo_ nur eine Variable abrufen (keinen weiteren Text), dann können (müssen aber nicht) wir die Anführungszeichen weglassen.

Der Code:
```php
<?php
$name = "Cude Dev";
echo $name;
?>
```    

Man kann auch an eine bereits vorhandene Variable eine weitere Variable, oder einen Text anhängen.
```php
<?php
$name = "Cude ";
$name .= "Dev";
echo $name;
?>
```   

Ausgabe: _Cude Dev_

Soll eine Variable oder ein Text an eine bereits bestehende Variable "angehängt" werden, geschieht dies mit einem _Punkt_ vor dem Gleichheitszeichen. Dadurch erkennt PHP, dass der nach dem Gleichheitszeichen folgende Text oder die folgende Variable an die bestehende Variable angehängt werden soll. Eine Variable kann theoretisch unendlich oft verlängert werden.

Dies können wir auch direkt in dem echo benutzen:
```php
<?php
$name = "Cude";
echo "Mein Name ist ".$name." Dev";
?>
```   

Hier haben wir eine zusammengesetzte Ausgabe. Zuerst geben wir _Mein Name ist_ aus, nach den Anführungszeichen setzen wir einen Punkt und dann die Variable. Nach der Variable können wir entweder mit Semikolon die Ausgabe beenden, aber hier haben wir noch den _Text Dev_ angehängt.

Dies geht selbstverständlich auch mit Variablen:
```php
<?php
$farbe = "rotes";
$text = "Wir haben ein ".$farbe." Haus";
echo $text;
?>
```    

Diese Methode wird später noch des öfteren benutzt.

Variablentypen
--------------

In Variablen können unterschiedlichste Werte definiert werden. In diesem Artikel wurden Texte (auch Strings genannt) gespeichert, im nächsten Artikel werden [Zahlen](https://loquacious-mandazi-92bae5.netlify.app/rechnen-mit-variablen/) (auch Integer genannt) in Variablen abgespeichert. PHP an sich ist eine typlose Programmiersprache, d.h. PHP ermittelt selbst welchen Typ (Text, Zahl usw.) der Wert hat und legt diesen entsprechend für die Variable fest. Ihr als Programmierer müsst euch darum nicht kümmern.

Dennoch solltet ihr wissen, welche Grundtypen von Werten / Variablen existieren:
**Integer:** Eine Integer-Variable enthält nur Ganzzahlen, d.h. Zahlen **ohne** Komma.
**String:** Dies ist eine Variable, die einen Text/Satz/Wort enthält.
**Float:** Eine Fließkommazahl, d.h. eine Zahl mit Komma. Man verwendet aber die englische Schreibweise und somit einen Punkt statt dem deutschen Komma.
**Double:** In PHP das gleiche wie _float_.
**bool:** Dies sind die Werte true und false

Zum Beispiel:
```php
<?php
$integer = 15; //Eine Integer Variable
$string = "Ganz viel Text"; //Ein String
$float = 15.5; //Eine Zahl mit einem Komma
$bool = true;
?>
```