fetch('https://api.openweathermap.org/data/2.5/weather?q=DNIPRO&units=metric&APPID=5d066958a60d315387d9492393935c19')
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

        for (let i = 0; i < labels.length; i++) {
            const pElement = document.createElement('p');

            pElement.textContent = `${labels[i]}: ${values[i]}`;
            document.querySelector('.weather').appendChild(pElement);

        }
    })







