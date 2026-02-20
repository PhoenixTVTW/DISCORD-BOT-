# Discord AI Bot

Ein moderner Discord Bot mit AI-Funktionalität, der Google Gemini nutzt.

## 🚀 Features

- 🤖 AI-gestützte Konversationen mit Google Gemini
- ⚙️ Vollständig konfigurierbar über `.env` Datei
- 📝 Unterstützt Prefix-Befehle oder Bot-Erwähnungen
- 🔒 Sichere Konfiguration mit Umgebungsvariablen
- 💬 Automatische Antworten auf Nachrichten

## 📋 Voraussetzungen

- Node.js (Version 18 oder höher)
- Ein Discord Bot Token
- Ein Google Gemini API Key

## 🛠️ Installation

1. **Dependencies installieren:**
   ```bash
   npm install
   ```

2. **`.env` Datei konfigurieren:**
   - Kopiere `.env.example` zu `.env`
   - Fülle die notwendigen Werte aus:
     - `DISCORD_TOKEN`: Dein Discord Bot Token (von [Discord Developer Portal](https://discord.com/developers/applications))
     - `GEMINI_API_KEY`: Dein Google Gemini API Key (von [Google AI Studio](https://makersuite.google.com/app/apikey))

3. **Bot starten:**
   ```bash
   npm start
   ```

   Oder für Entwicklung mit Auto-Reload:
   ```bash
   npm run dev
   ```

## ⚙️ Konfiguration

### Erforderliche Variablen

- `DISCORD_TOKEN`: Dein Discord Bot Token
- `GEMINI_API_KEY`: Dein Google Gemini API Key

### Optionale Variablen

- `GEMINI_MODEL`: Das zu verwendende Gemini-Modell (Standard: `gemini-pro`)
- `SYSTEM_PROMPT`: System-Prompt für die AI (Standard: Hilfreicher Assistent)
- `MAX_TOKENS`: Maximale Anzahl Tokens pro Antwort (Standard: `500`)
- `TEMPERATURE`: Kreativität der Antworten 0.0-2.0 (Standard: `0.7`)
- `PREFIX`: Prefix für Bot-Befehle (z.B. `!` oder `ai!`)
- `CHANNEL_ID`: Spezifischer Channel, in dem der Bot aktiv sein soll

## 📖 Verwendung

### Bot erwähnen
Erwähne den Bot in einer Nachricht:
```
@BotName Wie funktioniert JavaScript?
```

### Prefix verwenden
Wenn ein Prefix konfiguriert ist (z.B. `!`):
```
!Erkläre mir Python
```

### Ohne Prefix/Erwähnung
Wenn kein Prefix und keine Channel-ID gesetzt ist, antwortet der Bot auf alle Nachrichten.

## 🔧 Discord Bot Setup

1. Gehe zu [Discord Developer Portal](https://discord.com/developers/applications)
2. Erstelle eine neue Application
3. Gehe zu "Bot" und erstelle einen Bot
4. Kopiere den Token und füge ihn in `.env` ein
5. Aktiviere folgende Intents:
   - MESSAGE CONTENT INTENT (wichtig!)
   - SERVER MEMBERS INTENT (optional)
6. Lade den Bot auf deinen Server ein (OAuth2 > URL Generator)

## 📝 Lizenz

MIT
