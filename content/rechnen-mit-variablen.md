+++ 
title = "PHP Rechnen mit Variablen"
date = 2025-01-16
draft = false
description = "Ein umfassender Leitfaden zu Variablen in PHP: Grundlagen, Dekrementieren, Inkrementieren, Kurzschreibweisen und Fließkommazahlen."
image = "https://r72.cooltext.com/rendered/cooltext473991758467426.png"
imageBig = "https://r72.cooltext.com/rendered/cooltext473991758467426.png"
categories = ["PHP"]
authors = ["Cude"]
avatar = "/images/avatar.webp"
+++

# Rechnen mit Variablen

Neben Texten, wie im ersten Teil gezeigt, könnt ihr in Variablen auch Zahlen abspeichern und mit diesen rechnen, diese beispielsweise addieren, subtrahieren oder multiplizieren.

## Inhaltsverzeichnis
1. Grundlagen
2. Dekrementieren und Inkrementieren
3. Kurzschreibweise für Zuweisungen
4. Fließkommazahlen

---

## Grundlagen
Weist man einer Variable eine Zahl zu, so dürfen im Gegensatz zum Text hier keine Anführungszeichen benutzt werden. Ihr schreibt die Zahl also direkt in euren Code.

```php
<?php
$zahl1 = 10;
$zahl2 = 5;
echo "Zahl 1 : $zahl1 <br />";
echo "Zahl 2 : $zahl2 <br />";
?>
```

In diesen Variablen sind jetzt die Zahlen 10 und 5 gespeichert. Das Addieren erfolgt mittels `+`. Im folgenden Script definiert ihr zwei Zahlen und speichert die Summe der beiden Zahlen in der Variable `$ergebnis` ab:

```php
<?php 
$zahl1 = 10;
$zahl2 = 5;
$ergebnis = $zahl1 + $zahl2;
echo "Ergebnis: $ergebnis";
?>
```

Für die Berechnung müssen die Zahlen nicht notwendigerweise in Variablen gespeichert sein. Ihr könnt diese auch direkt in den mathematischen Ausdruck schreiben. Nachfolgend speichern wir eine Zahl in der Variable `$zahl` ab und addieren zu dieser den Wert `5`:

```php
<?php 
$zahl = 1;
$ergebnis = $zahl + 5;
echo $ergebnis;
?>
```

Hier einige weitere Beispiele:

```php
<?php 
$zahl1 = 10;
$zahl2 = 5;

echo $zahl1 + $zahl2; // Addieren
echo "<br />";
echo $zahl1 - $zahl2; // Subtrahieren 
echo "<br />";
echo $zahl1 * $zahl2; // Multiplizieren
echo "<br />";
echo $zahl1 / $zahl2; // Dividieren
echo "<br />";
echo pow($zahl1, $zahl2); // Zahl1 hoch Zahl2 (10^5)
echo "<br />";
echo sqrt(64); // Wurzel von 64 
echo "<br />";
echo 2 * $zahl1 + 5 * $zahl2 - 3; // Berechnet 2*10 + 5*5 - 3
?> 
```

Natürlich können auch diese Ergebnisse wieder in extra Variablen gespeichert werden.

---

## Dekrementieren und Inkrementieren
Um den Wert einer Variable um `1` zu erhöhen bzw. um `1` zu verkleinern, gibt es einen einfachen Trick:

```php
<?php 
$erhoehen = 1;
$erhoehen++;
echo $erhoehen; // 2
?>
```

Ebenfalls lässt sich eine Zahl mittels `--` um den Wert `1` absenken:

```php
<?php
$senken = 2;
$senken--;
echo $senken; // 1
?>
```

Wird an den Variablen-Namen (einer Zahlenvariable) ein doppeltes Pluszeichen in Form von `++` angehängt, so wird der Inhalt dieser Variable, also die Zahl, inkrementiert, das heißt um `1` erhöht. Wird dagegen ein `--` verwendet, wird der Wert dekrementiert, also um `1` gesenkt.

---

## Kurzschreibweise für Zuweisungen
Im folgenden Script wird der Inhalt der Variable um den Wert `10` erhöht:

```php
<?php
$zahl = 1;
$zahl = $zahl + 10;
echo $zahl;
?>
```

Da Programmierer tendenziell faul sind, existiert in PHP noch eine Kurzschreibweise, die exakt das gleiche bewirkt:

```php
<?php
$zahl = 1;
$zahl += 10;
echo $zahl;
?>
```

Durch das `+=` wird der Inhalt der Variable `$zahl` um den Wert `10` erhöht. Natürlich könnt ihr auch `-=`, `*=`, oder `/=` schreiben, um Werte zu subtrahieren, zu multiplizieren oder zu dividieren.

---

## Fließkommazahlen
In PHP könnt ihr auch Kommazahlen definieren. Zu beachten ist, dass hierbei die englische Schreibweise genutzt wird, d.h. statt einem Komma wie im Deutschen wird ein Punkt verwendet. Die mathematischen Operationen bleiben aber die gleichen.

```php
<?php
$zahl1 = 2.5;
$zahl2 = 5.5;
$ergebnis = $zahl1 * $zahl2;
echo "Ergebnis: $ergebnis";
?>
