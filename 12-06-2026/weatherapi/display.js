async function fetchWeather() {
        console.log('hi');

        const city = "London";
        console.log(city);

        const res = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=c16e57bc9db043b2a0e104719260803&q=${city}`
        );

        const data = await res.json();

        const cityname = data.location.name;

        console.log(cityname);
        // document.getElementById('cityname').innerText = cityname;
}

fetchWeather();