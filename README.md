# Website Praxis für Psychotherapie – Anna Langenau

Statische Website (HTML / CSS / Vanilla-JS). **Keine** Datenbank, **kein** PHP,
**keine** externen Dienste/CDNs → minimale Angriffsfläche, nichts zu patchen.

## Struktur

```
index.html          Startseite (One-Pager: Leistungen, Über mich, Kontakt)
impressum.html      Impressum
datenschutz.html    Datenschutzerklärung
css/style.css       Styles (hell + dunkel, responsiv)
js/main.js          Mobile-Navigation, Footer-Jahr
assets/favicon.svg  Favicon
```

## Lokal ansehen

Doppelklick auf `index.html` genügt. Oder mit lokalem Server:

```bash
python -m http.server 8000      # dann http://localhost:8000
```

## ⚠️ Vor Veröffentlichung ausfüllen (im Code mit TODO / „ergänzen“ markiert)

1. **Impressum** – Pflichtangaben Heilberuf: zuständige Kammer, Approbationsbehörde,
   berufsrechtliche Regelungen (Links), ggf. USt-IdNr.
2. **Zweiter Standort Gronau** – Adresse ergänzen oder den Block in `index.html`
   löschen, falls nicht mehr aktiv.
3. **Datenschutz** – Hosting-Anbieter (STRATO?) bestätigen; bei späterem
   Kontaktformular/Karte/Analytics Text erweitern.
4. **Über mich** – optionaler Zusatztext zu Werdegang/Haltung.

## Deployment

### Variante A – GitHub + Cloudflare Pages (empfohlen)
1. Repo zu GitHub pushen.
2. Cloudflare Pages → „Connect to Git“ → Repo wählen.
3. Build command: *leer*, Output directory: `/` (Root).
4. Domain `langenau-psychotherapie.de` in Cloudflare Pages als Custom Domain
   hinzufügen, DNS entsprechend setzen.

### Variante B – STRATO Webspace (Domain bleibt wie sie ist)
1. Per FTP/SFTP in das Web-Root von STRATO verbinden.
2. Inhalt dieses Ordners hochladen (index.html ins Root).
3. Fertig – kein PHP/WordPress mehr nötig.

> Vor dem Umstellen die alte WordPress-Installation sichern (UpdraftPlus-Backup).
