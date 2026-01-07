# Discord Gemini Bot

This project is a Discord bot that interacts with the Google Gemini API. It is designed to provide various functionalities within a Discord server by leveraging the capabilities of the Gemini API.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/discord-gemini-bot.git
   ```

2. Navigate to the project directory:
   ```
   cd discord-gemini-bot
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your Discord bot token and Google Gemini API key:
   ```
   DISCORD_TOKEN=your_discord_bot_token
   GEMINI_API_KEY=your_google_gemini_api_key
   ```

## Usage

To start the bot, run the following command:
```
node src/bot.js
```

Make sure your bot is invited to a server and has the necessary permissions to operate.

## Features

- Responds to commands issued in Discord channels.
- Interacts with the Google Gemini API to fetch and process data.
- Configurable settings through environment variables.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.