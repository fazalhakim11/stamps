const API_KEY = '3ebaab95e69b64b3acd55207c90be669'; 
const CITY = 'Jakarta';
const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}&units=metric`;

async function getWeatherForecast() {
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        const dailyTemperatures = {};
        data.list.forEach(item => {
            const date = item.dt_txt.split(' ')[0]; 
            const dateObj = new Date(date);
            const options = { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' };
            const formattedDate = dateObj.toLocaleDateString('en-GB', options);

            if (!dailyTemperatures[formattedDate]) {
                dailyTemperatures[formattedDate] = item.main.temp; 
            }
        });

        console.log(`5-Day Weather Forecast for ${CITY}:`);
        Object.entries(dailyTemperatures).slice(0, 5).forEach(([formattedDate, temp]) => {
            console.log(`${formattedDate}: ${temp}°C`);
        });
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

getWeatherForecast();
