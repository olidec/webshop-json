# Webshop Miniprojekt

In diesem Projekt möchten wir einen kleinen Webshop Schritt für Schritt
aufbauen. Dabei konzentrieren wir uns auf die Darstellung von einem Datensatz.


## Initialisieren

Laden Sie die Projektdateien via github herunter (`CTRL-SHIFT-P` und dann `Git:Clone`). 
Um das Projekt dann zu starten, öffnen Sie in VSCode ein Terminal
(`CTRL+SHIFT+P` und dann `Terminal: Create new Terminal`). In diesem Terminal
können Sie dann die folgenden Befehle ausführen:

```bash
npm install
npm run dev
```

Das sollte Ihnen alle benötigten Bibliotheken installieren und einen Webserver
(ähnlich wie der LiveServer) starten.

## Verwenden

Wenn Sie gerade den Schritt oben gemacht haben, müssen Sie diesen nicht
unbedingt ausführen. Wenn Sie aber an dem Projekt weiterarbeiten, dann müssen
Sie jeweils den Server zuerst wieder starten. Dafür einfach ein Terminal öffnen
und den folgenden Befehl ausführen:

```bash
npm run dev
```

Dann können Sie einen Webbrowser mit der URL
[`http://localhost:5173`](http://localhost:5173) öffnen.

## Aufgaben

Sie sollen in diesem Projekt einen kleinen Webshop Schritt für Schritt aufbauen.
Dafür können Sie den folgenden Aufgaben folgen. Denken Sie daran rgelmässig und ausführlich commits zu setzen.

### Aufgabe 1

Sie finden die Daten für den Webshop in der Datei `public/level-01.json`.

- Schauen Sie sich die Daten an.
- Was für Felder sind in den Daten vorhanden?
- Ändern Sie den Titel und die Beschreibung von einem Artikel.
- Fügen Sie einen neuen Artikel hinzu.
- Können Sie einen Artikel ohne Beschreibung haben?

### Aufgabe 2

Schauen Sie sich die Datei `index.html` und `src/main.js` an.

- Versuchen Sie für dich Sinn aus dem Code zu machen. Dies soll nur intuitiv
  sein.
- Erklären Sie einer anderen Person was Sie alles verstanden haben.
- Ergänzen Sie die verstandenen Teile mit Kommentaren.

### Aufgabe 3

Schauen Sie sich die Datei `src/main.js` an. Und versuchen Sie
herauszufinden was unbekannte Stellen im Code machen. Formulieren Sie dann
eigene Kommentare.

### Aufgabe 4 (Optional)

Passen Sie den Code so an, dass die Artikel auch Ohne Beschreibung angezeigt
werden. Es soll dann einfach "Keine Beschreibung" angezeigt werden.

### Aufgabe 5

Wechseln Sie auf das Datenset `public/level-02.json`.

- Schauen Sie sich die Daten an.
- Was ist anders als zuvor?
- Fügen Sie den Preis ebenfalls auf der Webseite ein.

### Aufgabe 6

Wechseln Sie auf das Datenset `public/level-03.json`.

- Schauen Sie sich die Daten an.
- Was ist anders als zuvor?
- Wenn ein Artikel einen reduzierten Preis hat, zeigen Sie nur diesen in grün
  an.

### Aufgabe 7

Kopieren Sie die Datei `public/level-03.json` in die Datei
`public/level-04.json`.

- Fügen Sie bei allen Artikeln einen Lagerbestand ein.
- Ist der Lagerbestand unter 5, markieren Sie das Element orange.
- Ist der Lagerbestand unter 2, markieren Sie das Element rot.
- Ist der Lagerbestand 0, zeigen Sie auch dass an. Hier sollen Sie kreativ sein.

### Aufgabe 8

Erstellen Sie die neue Datei `public/level-05.json`. Sie können die Datei
`public/level-04.json` als Vorlage nehmen, oder auch eine vorherige.

- Fügen Sie bei allen Artikeln eine Bewertung ein.
- Fügen Sie auch bei einigen Artikeln Kommentare ein.
- Lassen Sie die Kommentare auf der Webseite anzeigen.

### Aufgabe 9

Erstellen Sie in der Datei `src/main.js` eine globale Variable `const G = {}`.

- Fügen Sie in `G` das Feld `from` mit dem Wert 0 ein.
- Fügen Sie in `G` das Feld `to` mit dem Wert 5 ein.
- Zeigen Sie nur Artikel mit dem index zwischen `G.from` und `G.to` an.

### Aufgabe 10 (Optional)

Erstellen Sie 2 Buttons auf der Webseite mit `weiter` und `zurück`. Die Buttons
sollen jeweils die Variable `G` so verändern, dass die nächste Seite angezeigt
wird.

### Aufgabe 11

Suchen Sie im Internet nach einem weiteren Datensatz im JSON Format. Es müssen
nicht unbedingt Daten für einen Webshop sein.

- Kopieren Sie den Datensatz in `public/level-06.json`.
- Untersuchen Sie den Datensatz.
- Stellen Sie diesen Datensatz auf Ihrer Webseite dar.
