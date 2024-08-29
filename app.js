// Initialize the countdown timer to 1 hour (3600 seconds)
let countdown = 3600;

function updateTimer() {
    const timerElement = document.getElementById('timer');
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;

    // Display the countdown in "MM:SS" format
    timerElement.textContent = `Next update in: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (countdown > 0) {
        countdown--;
    } else {
        // Reset the countdown timer and fetch stock data
        countdown = 3600;
        fetchStockData();
    }
}

// Update the timer display every second
setInterval(updateTimer, 1000);


async function fetchStockData() {
    // Using a CORS proxy
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // Example proxy
    const apiUrl = 'https://tradestie.com/api/v1/apps/reddit';

    try {
        const response = await fetch(proxyUrl + apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('API Data:', data); // Debugging: Check the data received from the API

        if (!Array.isArray(data)) {
            console.error('Unexpected API response format:', data);
            return;
        }

        const stocks = data.slice(0, 50); // Get top 50 stocks
        const tbody = document.querySelector('#stocksTable tbody');
        tbody.innerHTML = ''; // Clear existing content

        stocks.forEach((stock, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${stock.ticker}</td>
                <td>${stock.sentiment}</td>
                <td>${stock.no_of_comments}</td>
            `;
            tbody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching stock data:', error);
    }
}

// Fetch data every hour
fetchStockData();
setInterval(fetchStockData, 60 * 60 * 1000); // 1 hour interval
