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
});