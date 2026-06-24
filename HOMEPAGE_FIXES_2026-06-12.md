# 🛠️ HOMEPAGE-SANIERUNG — Fix-Dokument für Claude Code
> Repo: `Buergersvend/human-resonanz-web` · Stand der Prüfung: 12.06.2026
> Grundlage: Homepage-Rechtsprüfung (HeilprG/HWG · UWG · DDG · DSGVO · Marke)
> Vokabular-Linie: identisch zur Akademie-Sanierung vom 11.06. (Vertiefungsweg, Teilnahmezertifikat, kein Heil-/Ausbildungs-Framing)

**Vorbereitung (einmalig):**
```powershell
cd C:\Users\Sven
git clone https://github.com/Buergersvend/human-resonanz-web.git
cd human-resonanz-web
```
Kein Build-Schritt nötig (statisches HTML) — nach den Änderungen Sichtprüfung im Browser (Datei öffnen), dann commit + push (Vercel deployt automatisch).

---

## DATEI 1: `index.html`

### Fix 1.1 — Akademie-Bereichsliste entschärfen (🔴 HeilprG/HWG)
Drei Bereichs-Tags ersetzen. **CC-Hinweis:** Vor dem Ersetzen im Akademie-Repo (`resonanz-akademie`, `src/data/bereiche*`) nachsehen, wie die drei Bereiche dort nach der Sanierung vom 11.06. heißen — falls abweichend, die Akademie-Namen 1:1 übernehmen (Konsistenz vor Vorschlag). Falls dort keine Umbenennung existiert, die folgenden Vorschläge verwenden:

**VORHER:**
```html
            <span class="faq-block-tag">Körper &amp; Physische Heilung</span>
```
**NACHHER:**
```html
            <span class="faq-block-tag">Körper &amp; Vitalität</span>
```

**VORHER:**
```html
            <span class="faq-block-tag">Natur &amp; Pflanzenheilkunde</span>
```
**NACHHER:**
```html
            <span class="faq-block-tag">Natur &amp; Pflanzenkunde</span>
```

**VORHER:**
```html
            <span class="faq-block-tag">Systeme &amp; Diagnose</span>
```
**NACHHER:**
```html
            <span class="faq-block-tag">Systeme &amp; Selbsterkenntnis</span>
```

### Fix 1.2 — "Ausbildungen" raus (FAQ-Einleitung) (🔴 UWG / eigener Standard)
**VORHER:**
```html
          <p style="margin: 0 0 8px;">Die Akademie entsteht gerade. Wir entwickeln Kurse und Ausbildungen in diesen Bereichen:</p>
```
**NACHHER:**
```html
          <p style="margin: 0 0 8px;">Die Akademie entsteht gerade. Wir entwickeln Kurse und Vertiefungswege in diesen Bereichen:</p>
```

### Fix 1.3 — Zertifikats-Claim entschärfen (🔴 UWG)
**VORHER:**
```html
          <p style="margin: 0 0 12px;">Von kompakten Einstiegskursen bis zu vollständigen Ausbildungen mit echter Tiefe. Jedes Zertifikat ein Beweis dass du nicht nur weißt — sondern kannst.</p>
```
**NACHHER:**
```html
          <p style="margin: 0 0 12px;">Von kompakten Einstiegskursen bis zu umfassenden Vertiefungswegen mit echter Tiefe. Jedes Teilnahmezertifikat zeigt, womit du dich intensiv auseinandergesetzt hast.</p>
```

### Fix 1.4 — "Experte mit deiner Ausbildung" (🟡 UWG)
**VORHER:**
```html
          <p style="margin: 0 0 4px;"><strong>Was kein anderes System bietet:</strong> Jedes Zertifikat das du in der Akademie erwirbst erscheint automatisch auf deinem Praktiker Profil im HR Netzwerk — sichtbar für alle die gezielt einen Experten mit genau deiner Ausbildung suchen.</p>
```
**NACHHER:**
```html
          <p style="margin: 0 0 4px;"><strong>Was kein anderes System bietet:</strong> Jedes Teilnahmezertifikat das du in der Akademie erwirbst erscheint automatisch auf deinem Praktiker-Profil im HR Netzwerk — sichtbar für alle die gezielt jemanden mit genau deinem Schwerpunkt suchen.</p>
```

### Fix 1.5 — FAQ-Chain (🟡 UWG)
**VORHER:**
```html
            <div class="faq-chain-step"><span class="faq-dot"></span>Du bildest dich aus</div>
            <div class="faq-chain-step"><span class="faq-arrow">↓</span> Du erhältst dein Zertifikat</div>
            <div class="faq-chain-step"><span class="faq-arrow">↓</span> Dein Profil im HR Netzwerk leuchtet auf</div>
            <div class="faq-chain-step"><span class="faq-arrow">↓</span> <em>Klienten finden dich — weil du bewiesen hast was du kannst</em></div>
```
**NACHHER:**
```html
            <div class="faq-chain-step"><span class="faq-dot"></span>Du vertiefst dein Wissen</div>
            <div class="faq-chain-step"><span class="faq-arrow">↓</span> Du erhältst dein Teilnahmezertifikat</div>
            <div class="faq-chain-step"><span class="faq-arrow">↓</span> Dein Profil im HR Netzwerk leuchtet auf</div>
            <div class="faq-chain-step"><span class="faq-arrow">↓</span> <em>Klienten finden dich — weil dein Profil zeigt, womit du arbeitest</em></div>
```

### Fix 1.6 — "Zertifizierte Ausbildungen" (World-Card Akademie) (🔴 UWG)
**VORHER:**
```html
      <p class="world-desc">Dein Wissen. Dein Weg. Deine Gemeinschaft. Zertifizierte Ausbildungen, strukturierte Lernpfade — ein Ort für alle Praktiker die sich nicht allein auf den Weg machen wollen.</p>
```
**NACHHER:**
```html
      <p class="world-desc">Dein Wissen. Dein Weg. Deine Gemeinschaft. Fundierte Kurse, strukturierte Lernpfade — ein Ort für alle Praktiker die sich nicht allein auf den Weg machen wollen.</p>
```

### Fix 1.7 — "bildet aus und zertifiziert" (🔴 UWG)
**VORHER (Teilstring in Zeile ~594):**
```
Die Akademie bildet aus und zertifiziert.
```
**NACHHER:**
```
Die Akademie vermittelt strukturiertes Wissen.
```

### Fix 1.8 — "heilen" → "arbeiten" (3 Stellen) (🟡 HeilprG-Optik)
**VORHER (Intro, ~Zeile 418):**
```
Human Resonanz ist das digitale Zuhause für Menschen die ganzheitlich heilen, lehren und begleiten —
```
**NACHHER:**
```
Human Resonanz ist das digitale Zuhause für Menschen die ganzheitlich arbeiten, lehren und begleiten —
```

**VORHER (About-Quote, ~Zeile 466):**
```html
    <blockquote class="about-quote reveal">"Das digitale Zuhause für Menschen die ganzheitlich heilen, lehren und begleiten — gebaut von jemandem der selbst einer von ihnen ist."</blockquote>
```
**NACHHER:**
```html
    <blockquote class="about-quote reveal">"Das digitale Zuhause für Menschen die ganzheitlich arbeiten, lehren und begleiten — gebaut von jemandem der selbst einer von ihnen ist."</blockquote>
```

**VORHER (FAQ, ~Zeile 519, Teilstring):**
```
Human Resonanz richtet sich an alle die ganzheitlich heilen, lehren oder begleiten —
```
**NACHHER:**
```
Human Resonanz richtet sich an alle die ganzheitlich arbeiten, lehren oder begleiten —
```
*(Rest des Satzes inkl. „Therapeuten" als Zielgruppen-Nennung bleibt — zulässig, es gibt approbierte/erlaubte Therapeuten.)*

### Fix 1.9 — Impressum: Gesetzesangaben aktualisieren (🟡 DDG)
**VORHER:**
```html
    <span class="modal-sub">Angaben gemäß § 5 TMG</span>
```
**NACHHER:**
```html
    <span class="modal-sub">Angaben gemäß § 5 DDG</span>
```

**VORHER (Teilstring):**
```
Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
```
**NACHHER:**
```
Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:
```

### Fix 1.10 — Datenschutz: eine Quelle statt zwei (🔴 DSGVO)
a) **Footer-Link** vom Modal auf die vollständige Seite umstellen:

**VORHER:**
```html
    <a href="#" onclick="document.getElementById('datenschutz-modal').classList.add('open');return false;">Datenschutz</a>
```
**NACHHER:**
```html
    <a href="datenschutz.html">Datenschutz</a>
```

b) **Den kompletten Block `<div class="modal-overlay" id="datenschutz-modal" ...>...</div>` ersatzlos löschen** (das dünne Modal ohne Rechtsgrundlagen/Beschwerderecht; widerspricht zudem der datenschutz.html beim Hosting-Standort).

### Fix 1.11 — Hash-Handler für Impressum-Direktaufruf (🟡 DDG-Erreichbarkeit)
Am Ende des bestehenden `<script>`-Blocks ergänzen:
```js
  // ─── Direktaufruf Impressum via Hash (z.B. von netzwerk.html) ───
  if (location.hash === '#impressum') {
    document.getElementById('impressum-modal').classList.add('open');
  }
```

---

## DATEI 2: `netzwerk.html`

### Fix 2.1 — "verifizierte" → "aktive" (🟡 UWG)
**VORHER:**
```html
  <p class="hero-sub">Alle Einträge sind verifizierte Lichtkern-Nutzer — Energetiker, Coaches und Therapeuten die mit Struktur und Bewusstsein arbeiten.</p>
```
**NACHHER:**
```html
  <p class="hero-sub">Alle Einträge sind aktive Lichtkern-Nutzer — Energetiker, Coaches und Berater die mit Struktur und Bewusstsein arbeiten.</p>
```

### Fix 2.2 — Filter-Label "Therapie" neutralisieren (🟡 UWG/HeilprG-Optik)
Nur das **sichtbare Label** ändern, `value` bleibt für Firestore-Kompatibilität unverändert:

**VORHER:**
```html
      <option value="Therapie">Therapie</option>
```
**NACHHER:**
```html
      <option value="Therapie">Begleitung &amp; Beratung</option>
```
*(„Heilpraktiker" bleibt als Option — geschützter, realer Beruf. Follow-up: Methodenliste in Lichtkern-Einstellungen mittelfristig angleichen, siehe Offene Punkte.)*

### Fix 2.3 — Selbstdarstellungs-Disclaimer ergänzen (🟡 Plattformhaftung)
Direkt **unter** dem `hero-sub`-Absatz einfügen:
```html
  <p class="hero-sub" style="font-size:12px;opacity:0.55;margin-top:8px;">Alle Profile sind Selbstdarstellungen der jeweiligen Praktiker. Human Resonanz prüft keine Qualifikationen oder Berufsbezeichnungen und vermittelt keine heilkundlichen Leistungen.</p>
```

### Fix 2.4 — CTA-Zeile (🟡)
**VORHER:**
```html
  <p>Du bist Energetiker, Coach oder Therapeut und nutzt Lichtkern? Aktiviere dein öffentliches Profil direkt in der App.</p>
```
**NACHHER:**
```html
  <p>Du arbeitest ganzheitlich und nutzt Lichtkern? Aktiviere dein öffentliches Profil direkt in der App.</p>
```

### Fix 2.5 — Footer-Links reparieren (🟡 DDG-Erreichbarkeit)
**VORHER:**
```html
  <a href="index.html#impressum" onclick="window.location='index.html';return false;">Impressum</a>
  <a href="index.html#datenschutz" onclick="window.location='index.html';return false;">Datenschutz</a>
```
**NACHHER:**
```html
  <a href="index.html#impressum">Impressum</a>
  <a href="datenschutz.html">Datenschutz</a>
```
*(Funktioniert zusammen mit Fix 1.11.)*

---

## DATEI 3: `datenschutz.html`

### Fix 3.1 — Geltungsbereich klarstellen (⚪)
**VORHER (Untertitel):**
```
Stand: April 2026 · Human Resonanz Akademie
```
**NACHHER:**
```
Stand: Juni 2026 · human-resonanz.de · Lichtkern · HR Netzwerk
```

### Fix 3.2 — Europa-Aussage korrigieren (🔴 DSGVO/UWG)
**VORHER:**
```
Deine Daten werden ausschließlich in Europa gespeichert:
```
**NACHHER:**
```
Deine Konto- und Anwendungsdaten werden in Europa gespeichert:
```

### Fix 3.3 — Neuer Abschnitt "Kontaktformular" (🔴 Art. 13 DSGVO)
Als neuen Abschnitt **nach „5. HR Netzwerk — Öffentliche Sichtbarkeit"** einfügen (Folgeabschnitte umnummerieren: Deine Rechte → 7, Löschung → 8, Cookies → 9, Beschwerderecht → 10). Im Stil/Markup der bestehenden Abschnitte (h2 + Card):

```
6. Kontaktformular (HR Netzwerk)

Wenn du über das Kontaktformular im HR Netzwerk eine Anfrage an einen Praktiker sendest, verarbeiten wir die von dir angegebenen Daten (Name, E-Mail-Adresse, Nachricht) ausschließlich zur Weiterleitung deiner Anfrage an den gewählten Praktiker. Deine Anfrage wird nicht dauerhaft auf unseren Servern gespeichert, sondern unmittelbar per E-Mail zugestellt.

Für den E-Mail-Versand setzen wir den Dienstleister Resend (Resend, Inc., USA) als Auftragsverarbeiter ein. Die Übermittlung in die USA erfolgt auf Grundlage geeigneter Garantien gemäß Art. 46 DSGVO (EU-Standardvertragsklauseln).

Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher Maßnahmen auf deine Anfrage).
```

**⚠️ Vor Commit von Sven zu prüfen:** Resend-DPA/Status im EU-U.S. Data Privacy Framework verifizieren (resend.com → DPA). Falls Resend DPF-zertifiziert ist, Formulierung anpassen auf „EU-U.S. Data Privacy Framework". Die SCC-Formulierung oben ist die konservative Variante.

---

## ✅ Abschluss-Checkliste für CC

1. Alle Fixes umgesetzt (`grep -i "TMG\|RStV\|zertifizierte Ausbildung\|bildet aus\|Physische Heilung\|Pflanzenheilkunde\|& Diagnose\|verifizierte" index.html netzwerk.html` → muss leer sein; „heilen" nur noch im Zitat „bereits heil ist" zulässig)
2. Sichtprüfung im Browser: Impressum-Modal öffnet, `netzwerk.html` → Impressum-Link öffnet Modal auf index, Datenschutz-Links führen auf `datenschutz.html`
3. Commit (deutsch, beschreibend), z. B.:
   `Homepage rechtlich saniert: DDG/MStV-Impressum, Datenschutz konsolidiert + Kontaktformular-Abschnitt, Heil-/Ausbildungs-Framing entfernt, Netzwerk-Disclaimer`
4. Push → Vercel-Deploy abwarten → Live-Sichtprüfung auf human-resonanz.de

## 📌 Offene Folgepunkte (nicht Teil dieser Session)

- **Dubiel-Memo ergänzen:** Mitstörerhaftung HR Netzwerk (Kategorie-Taxonomie, Disclaimer ausreichend?) — gehört zur Grundsatzfrage Berufsbild (Paket-Punkt 4)
- **Lichtkern:** Methodenliste in den Profil-Einstellungen angleichen („Therapie" → „Begleitung & Beratung") + Selbstverantwortungs-Checkbox beim Aktivieren des Netzwerk-Profils
- **Sipgate-Nummer** nach Einrichtung ins Impressum eintragen
- **Resend-DPA/DPF-Status** prüfen (siehe Fix 3.3)
- Optional: Supernova-Auto-Zündung auch auf der Homepage (Einklang mit Akademie)
