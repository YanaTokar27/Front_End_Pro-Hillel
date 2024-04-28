const queryParams = {
    lat: 48.45,
    lon: 34.9833,
    APIkey: '5d066958a60d315387d9492393935c19',
    units: 'metric'
}

const url = `https://api.openweathermap.org/data/2.5/weather?${new URLSearchParams(queryParams)}`

fetch(url)
    .then(response => response.json())
    .then(data => {
        const city = data.name;
        const temp = data.main.temp;
        const pressure = data.main.pressure;
        const description = data.weather[0].description;
        const humidity = data.main.humidity;
        const speed = data.wind.speed;
        const deg = data.wind.deg;
        const icon = data.weather[0].icon;

        const newIcon = (`http://openweathermap.org/img/w/${icon}.png`);
        document.querySelector('.icon').setAttribute('src', newIcon);


        const labels = ['City', 'Temperature', 'Pressure', 'Description', 'Humidity', 'Speed', 'Degree'];
        const values = [city, temp, pressure, description, humidity, speed, deg];

        labels.forEach(function (label, i) {
            const pElement = document.createElement('p');

            pElement.textContent = `${label}: ${values[i]}`;
            document.querySelector('.weather').appendChild(pElement);
        })
    })








