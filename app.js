window.addEventListener('load', () => {
    let long;
    let lat;

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
                    console.log(data);
                });
        });



    } else {
        h1.textContent = "not workinggggggg";
    }
});
