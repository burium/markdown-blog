+++  
title = "PHP installieren"  
date = 2025-01-16  
draft = false  
description = "Eine Schritt-für-Schritt-Anleitung zur Installation von PHP mit XAMPP, inklusive Tipps zur Nutzung und Fehlerbehebung."  
image = "https://r72.cooltext.com/rendered/cooltext473991758467426.png"  
imageBig = "https://r72.cooltext.com/rendered/cooltext473991758467426.png"  
categories = ["PHP", "Webentwicklung"]  
authors = ["Cude"]  
avatar = "/images/avatar.webp"  
+++  

PHP ist eine serverseitige Scriptsprache, das heißt, damit man PHP-Programme bzw. PHP-Scripts ausführen kann, benötigt man einen Webserver. Zum Glück ist die Installation einfacher, als sie klingt. Mit [XAMPP](https://www.apachefriends.org/de/index.html) installieren wir einen Apache-Server auf den eigenen Rechner, dazu noch PHP, MySQL und vieles mehr.  

## XAMPP herunterladen und installieren  

1. **XAMPP herunterladen**  
   Besuche die offizielle [XAMPP-Website](https://www.apachefriends.org/de/index.html) und lade die Installer-Version für dein Betriebssystem (Windows, Mac OS oder Linux) herunter.  

2. **Installation starten**  
   Führe den heruntergeladenen Installer aus und folge den Installationsanweisungen. Der Installer fragt, wohin du das Paket installieren möchtest. Ein häufig verwendeter Pfad ist z. B. `D:\xampp`. Du kannst jedoch jeden beliebigen Pfad wählen.  

3. **Ordner für PHP-Scripts**  
   Speichere oder kopiere deine PHP-Scripts in den Ordner `htdocs`, der sich unter `D:\xampp\htdocs` befindet (oder dem von dir gewählten Installationspfad).  

## Webserver starten  

1. **Server starten**  
   - Öffne das XAMPP-Kontrollzentrum, indem du `xampp-control.exe` ausführst.  
   - Klicke beim Apache-Webserver auf „Start“.  

2. **Wichtiger Hinweis für Skype-Nutzer**  
   Beende Skype vor dem Starten des Webservers, da Skype häufig den Apache-Port blockiert. Du kannst Skype nach dem Start des Webservers wieder öffnen.  

3. **PHP-Scripts aufrufen**  
   - Öffne deinen Browser und rufe die Adresse [http://localhost/](http://localhost/) oder [http://127.0.0.1/](http://127.0.0.1/) auf.  
   - Falls deine Scripts in einem Unterordner von `htdocs` gespeichert sind, gib den Pfad zum Ordner in der URL an, z. B. [http://localhost/dein-ordner/seite.php](http://localhost/dein-ordner/seite.php).  

## Tipps zur Fehlerbehebung  

- **Fehlermeldungen bei der URL**  
  Stelle sicher, dass die URL vollständig angegeben ist, z. B. [http://localhost/seite.php](http://localhost/seite.php).  

- **Vorhandene Dateien im Ordner `htdocs` löschen**  
  Um einen besseren Überblick über deine eigenen Scripts zu erhalten, lösche die standardmäßig enthaltenen Dateien im `htdocs`-Ordner.  

## PHP für eine Live-Website  

Um deine Website später online zu stellen, benötigst du einen Webhoster, der PHP unterstützt. Die meisten modernen Hosting-Pakete beinhalten PHP-Unterstützung, sodass es einfach ist, einen geeigneten Anbieter zu finden.  

Mit diesen Schritten hast du PHP erfolgreich installiert und kannst mit der Entwicklung von dynamischen Webanwendungen beginnen. Viel Erfolg!