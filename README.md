# WallStreetBets Stock Tracker

A dynamic web application that tracks the top 50 stocks discussed on the Reddit WallStreetBets forum. The site automatically updates every hour, displaying the latest stocks ranked by sentiment and popularity. A countdown timer shows the next scheduled update to keep users informed in real-time.

## Features

- **Top 50 Stocks**: Displays the most discussed stocks on WallStreetBets based on sentiment and number of comments.
- **Hourly Updates**: Automatically fetches new data from the API every hour.
- **Countdown Timer**: A live countdown timer shows the time remaining until the next data refresh.
- **Real-Time Sentiment Analysis**: Shows sentiment trends ("positive", "negative", "neutral") to help users gauge market sentiment.

## How to Use

1. **Clone the repository**:
    ```bash
    git clone https://github.com/TrentPierce/wallstreetbets-stock-tracker.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd wallstreetbets-stock-tracker
    ```

3. **Install dependencies** (if needed for local server setup):
    ```bash
    npm install
    ```

4. **Start the CORS proxy server**:
    ```bash
    node server.js
    ```

5. **Open `index.html`** in your web browser to view the website.

## Prerequisites

- **Node.js** and **npm** installed for running the local CORS proxy server.
- A modern web browser to run the website.

## Project Structure

- `index.html`: The main HTML file for the website.
- `app.js`: JavaScript file containing logic for fetching data, updating the countdown timer, and displaying stock information.
- `server.js`: Node.js server to handle CORS issues when fetching data from the API.

## API Information

This project uses the [Tradestie API](https://tradestie.com/api/v1/apps/reddit) to fetch the latest stock information from the WallStreetBets subreddit.

## Contributing

Feel free to open issues or submit pull requests for any features, bugs, or improvements. Contributions are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Data provided by the [Tradestie API](https://tradestie.com/api/v1/apps/reddit).
- Inspired by the Reddit community of [WallStreetBets](https://www.reddit.com/r/wallstreetbets/).

