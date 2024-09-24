


# Verwenden Sie Semantisches  Markup.

## HTML
Verwendung von `<header>`, `<nav>`, `<main>`, `<section>`,`<footer>` um die logische Struktur der Seite zu verdeutlichen.

## Formular
### mat-form (Material)
- `<form>`-Tag, um das gesamte Formular zu umschließen.
- `<mat-form-field>` und `<mat-label>` verknüpfen Labels korrekt mit den Eingabefeldern (for-Attribut verweist auf die ID des Steuerelements)
- `<mat-error>` um Fehlerzustände anzuzeigen. `aria-describedby`-Attribut wird automatisch hinzugefügt, um Fehlermeldungens - `ID` zu verknüpfen. Außerdem wird das Attribut `aria-live="polite"` verwendet, um sicherzustellen, dass Screenreader Benutzer über Fehler informieren, ohne ihre aktuelle Aufgabe zu stark zu unterbrechen.
- `aria-required="true"` automatisch hinzugefügt, `name`-Attribut wird automatisch hinzugefügt
- selbst hinzugefügt: 'autocomplete="PPN"' um die Eingabe zu erleichtern
- type="text", etc. für Eingabefelder

-> Fazit: Aufpassen, dass nicht alles mehrfach ausgezeichnet wird, da Material das bereits macht.

## Tabellen 
### mat-table (Material) 

# Das Projekt ist über die Tastatur bedienbar.
    Die Sprache im Dokument ist angegeben.
    Ein Fokus-ring ist bei jedem Element sichtbar
    Ein Skip-link ist Vorhanden, um Bereiche zu überspringen.   

## Accessability
npm install eslint-plugin-jsx-a11y @angular-eslint/eslint-plugin --save-dev
um die Barrierefreiheit zu verbessern, wurde das Plugin eslint-plugin-jsx-a11y installiert. und eslint angeschaltet

# Sprache 
von englisch auf deutsch
![HTML Code zeigt Language in Head ](image/language2024-07-19.png)
3.1.1 Language of Page




## Navigation
Die Elemente <mat-sidenav> und <mat-sidenav-content> werden jeweils mit einem passenden role-Attribut versehen. Das <mat-sidenav> eher ein Inhaltsverzeichnis ist, wird es mit role="directory" versehen. Das <mat-sidenav-content> wird mit role="main" versehen, da es den Hauptinhalt der Seite darstellt.

### Fokus
Das Sidenav hat die Fähigkeit, den Fokus zu erfassen. Dieses Verhalten ist für die Modi "push" und "over" aktiviert und für den Modus "side" deaktiviert. Sie können das Standardverhalten über das autoFocus-Input ändern.
Standardmäßig wird das erste fokussierbare Element beim Öffnen den Fokus erhalten. Wenn ein anderes Element fokussiert werden soll, können Sie das cdkFocusInitial-Attribut auf dieses setzen.

## Table 
![HTML Code zeigt Role in Table-Tag](image/tableRole.png)
Standardmäßig verwendet MatTable role="table"` für Tabellen, das könnte ich ändern, passt aber hier.
Material CDK (Component Dev Kit) bietet Unterstützung für Barrierefreiheit bei Tabellen. MatTable basiert auf der CDK-Datentabelle
Überschrift zu den Tabellen hinzufügen mit [Caption](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced#adding_a_caption_to_your_table_with_caption)
<thead> element must wrap the part of the table that is the header — this is usually the first row containing the column headings, but this is not necessarily always the case. If you are using <col>/<colgroup> elements, the table header should come just below those.
The <tbody> element needs to wrap the main part of the table content that isn't the table header or footer
name + role="columnheader" für die Tabellenüberschriften
role="row" für die Tabellenzeilen
role="cell" für die Tabellenzellen
caption hinzugefügt für die Tabelle
https://html.spec.whatwg.org/multipage/tables.html#the-caption-element


# Tastaturbedienung
#nav - ListKeyManager

@ViewChildren(MatListItem) is used to get a list of MatListItem elements.
ListKeyManager is initialized in the ngAfterViewInit lifecycle hook to manage the list of items.
ActiveDescendantKeyManager


aria-current="page" -> Reihe verwandter Elemente, die den aktuellen Abschnitt einer Website darstellen.

form: aria-labelledby="formTitle" beim error die id="formTitle" hinzufügen


Technique G202:Ensuring keyboard control for all functionality
About this Technique
This technique relates to 2.1.1: Keyboard (Sufficient). -> auch beim Toggle Menu (extra Klasse hinzugefügt)

2.1.2 No Keyboard Trap
2.1.3 All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes.

tabindex="0"

Skiplink
2.4.1 Bypass Blocks
A mechanism is available to bypass blocks of content that are repeated on multiple Web pages.
 
Fokusstate Button (Outline)
https://stackoverflow.com/questions/67364304/how-do-i-add-outline-on-focus-to-material-button 

Schriftart: https://www.leserlich.info/kapitel/zeichen/schriftart.php#schriftliste, Calibri Regular
![img.png](img.png)

Kontrast:
https://www.leserlich.info/werkzeuge/kontrastrechner/index.php
Der Farbcode `#009FB7` (RGB 0, 159, 183) auf Weiß (`#FFFFFF`) hat ein Kontrastverhältnis von etwa 2.71:1, was bedeutet, dass er nicht den Mindestanforderungen für Barrierefreiheit entspricht. schriftfarbe bei Fokus geändert  in #007F99 Kontrastverhältnis: 4.07:1
v

## 2.4.7 Focus Visible
Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.
(zB Menü)


## 1.1 Text Alternatives (alt-Text bei Bildern und Icons)

## 1.3.4 Orientation
relativen Maßen, Flexbox Design

## 2.4.4 Link Purpose (In Context)
The purpose of each link can be determined from the link text alone or from the link text together with its programmatically determined link context, except where the purpose of the link would be ambiguous to users in general.

## 2.4.6 Headings and Labels
Headings and labels describe topic or purpose.

## 2.4.9 Link Purpose (Link Only)
A mechanism is available to allow the purpose of each link to be identified from link text alone, except where the purpose of the link would be ambiguous to users in general.
![img_1.png](img_1.png)

## 3.3.1 Error Identification
If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text.

erwendete Quellen:
https://blog.angular.dev/improving-angular-components-accessibility-89b8ae904952
https://v5.material.angular.io
https://www.leserlich.info
