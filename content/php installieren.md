+++
title = "XAMPP Installation und PHP-Ausführung"
date = "2025-01-16"
draft = false
description = "Eine Schritt-für-Schritt-Anleitung zur Installation von XAMPP und zum Ausführen von PHP-Skripten auf dem eigenen Rechner."
image = "/images/php.jpg"
imageBig = "/images/php.jpg"
categories = ["PHP"]
authors = ["Cude Admin"]
avatar = "/images/avatar.webp"
+++

PHP ist eine serverseitige Scriptsprache, das heißt, damit man PHP Programme bzw. die PHP-Scripts ausführen kann, benötigt man einen Webserver. Zum Glück geht das installieren leichter als es sich anhört. Mit XAMPP installieren wir einen Apache Server auf den eigenen Rechner, dazu noch PHP, MySQL und vieles mehr.

Lade dir auf der angegeben Seite die Installer-Version für dein Betriebssystem (Windows, Mac OS oder Linux) herunter und folge der Installationsanweisung.

Der Installer von XAMPP fragt, wohin man das Packet installiert haben möchte. Ich habe z.B. D:\xampp\ angegeben, andere Pfade sind auch möglich. Möchten wir jetzt unsere PHP-Scripts anschauen, so kopieren/speichern wir sie in den htdocs Ordner unter D:\xampp\htdocs.

Bevor wir PHP-Scripts ausführen, müssen wir den Webserver starten. Falls du Skype installiert hast, solltest du es vor dem Starten des Webservers Skype beenden, denn leider blockiert Skype den Start des Apache-Webservers. Nach dem Start des Webservers kannst du auch Skype wieder starten.

Den Webserver könnt ihr entweder starten indem ihr `xampp_start.exe` aufruft oder indem ihr `xampp-control.exe` ausführt und beim Webserver Apache auf start drückt. Unsere PHP-Scripts die wir im htdocs-Ordner abgespeichert haben sind dann über die Adresse `http://localhost/` bzw. `http://127.0.0.1/` aufrufbar.

**Tipp:** Lösche die vorhandenen Dateien im Ordner `htdocs`, dadurch werden alle PHP-Scripts aufgelistet.

Wenn eine Fehlermeldung erscheint, dann versuche die komplette URL zur Seite anzugeben, also `http://localhost/seitenname.php`. Wenn ihr Unterordner im `htdocs` Ordner habt, dann muss der Name auch in der URL angegeben werden.

Das war schon das ganze Geheimnis der Installation.

Später, um eure Website online zu bekommen, muss euer Webhoster entsprechend PHP unterstützen. Mittlerweile ist in fast jedem Webhosting-Packet PHP mit enthalten, so dass das Finden eines Hosters nicht zu schwierig sein sollte.
