window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/c27152790c67a785a74c6618e4d4b067/${lat},${long}`;

            // Fetch data, and THEN... ("then" to wait for the fetch to complete first)
            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    // same like data.currently.temperature
                    const {temperature, summary} = data.currently;

                    // Set DOM Elements from the API
                    temperatureDegree.textContent = temperature;
                    temperatureDescription.textContent = summary;
                    locationTimezone.textContent = data.timezone;

                });
        });



    } else {
        h1.textContent = "not workinggggggg";
    }
});
