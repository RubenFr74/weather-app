$(document).ready(function () {

    // OpenWeather API
    const apiKey = 'e2a7410d7490dbe73a252ce85b1f3417';

     // Selectors for HTML elements to display weather information
     const cityEl = $('h2#city');
     const dateEl = $('h3#date');
     const weatherIconEl = $('img#weather-icon');
     const temperatureEl = $('span#temperature');
     const humidityEl = $('span#humidity');
     const windEl = $('span#wind');
     const uvIndexEl = $('span#uv-index');
     const cityListEl = $('div.cityList');
     
    // Selectors for form elements
   const cityInput = $('#city-input');

   // Store past searched cities
   let pastCities = [];

   // Helper function to sort cities from https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
   function compare(a, b) {
       // Use toUpperCase() to ignore character casing
       const cityA = a.city.toUpperCase();
       const cityB = b.city.toUpperCase();

       let comparison = 0;
       if (cityA > cityB) {
           comparison = 1;
       } else if (cityA < cityB) {
           comparison = -1;
       }
       return comparison;
   }

   
    // Store searched cities in local storage
    function storeCities() {
        localStorage.setItem('pastCities', JSON.stringify(pastCities));
    }

   // Functions to build the URL for the OpenWeather API call
 
    function buildURLFromInputs(city) {
        if (city) {
            return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        }
    }

    function buildURLFromId(id) {
        return `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}`;
    }

     // Function to display the last 5 searched cities
     function displayCities(pastCities) {
        cityListEl.empty();
        pastCities.splice(5);
        let sortedCities = [...pastCities];
        sortedCities.sort(compare);
        sortedCities.forEach(function (location) {
            let cityDiv = $('<div>').addClass('col-12 city');
            let cityBtn = $('<button>').addClass('btn btn-light city-btn').text(location.city);
            cityDiv.append(cityBtn);
            cityListEl.append(cityDiv);
        });
    }
});