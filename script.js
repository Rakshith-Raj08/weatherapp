// script.js
document.getElementById('weather-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = 'U7GFLKGSWKKGSKEK4VG26TLSZ';  // Replace with your API key
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('City not found or API request failed.');

        const data = await response.json();
        const { currentConditions } = data;

        document.getElementById('weather-info').innerHTML = `
            <h2>Weather in ${city}</h2>
            <p>Temperature: ${currentConditions.temp}°C</p>
            <p>Condition: ${currentConditions.conditions}</p>
            <p>Feels Like: ${currentConditions.feelslike}°C</p>
            <p>Humidity: ${currentConditions.humidity}%</p>
            <p>Wind Speed: ${currentConditions.windspeed} km/h</p>
        `;
    } catch (error) {
        document.getElementById('weather-info').innerHTML = `
            <p style="color: red;">Error: ${error.message}</p>
        `;
    }
});
