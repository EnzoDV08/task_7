   // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
   const apiKey = '1dc50b8b17ea6338fc64d3e9222fb73a';
    
   // Array of city names or IDs for which you want weather information
   const cities = ['Maldives', 'Mozambique', 'Italy'];
   
   // Function to fetch weather data for a specific city
   async function fetchWeather(city) {
       const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
       const response = await fetch(apiUrl);
       const data = await response.json();
       return data;
   }

   // Function to update weather information in a card
   async function updateWeatherInCard(cardId, city) {
       const card = document.querySelector(cardId);
       const weatherData = await fetchWeather(city);
       
       const weatherInfo = `
           <div class="weather-card">
               <h3>${weatherData.name}</h3>
               <img src="http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png" alt="Weather Icon">
               <p>${weatherData.weather[0].description}</p>
               <p>Temperature: ${weatherData.main.temp}°C</p>
               <p>Humidity: ${weatherData.main.humidity}%</p>
           </div>
       `;
       
       card.innerHTML = weatherInfo;
   }

   // Update weather information for each city in corresponding cards
   updateWeatherInCard('.img1', cities[0]);
   updateWeatherInCard('.img2', cities[1]);
   updateWeatherInCard('.img3', cities[2]);