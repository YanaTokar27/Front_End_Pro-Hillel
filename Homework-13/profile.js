const backButton = document.querySelector('.back');

backButton.addEventListener('click', function () {
    location.href = 'index.html'
})

console.log(screen);

navigator.geolocation.getCurrentPosition(function (position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    const mapIframe = document.getElementById('map');

    mapIframe.src = `https://www.openstreetmap.org/export/embed.html?bbox=${long},${lat}&layer=mapnik`;
    const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${long}&zoom=18&addressdetails=1`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const address = data.address;
            const city = address.city ? address.city : 'Немає даних';
            const street = address.road ? address.road : 'Немає даних';
            const houseNumber = address.house_number ? address.house_number : 'Немає даних';

            console.log('Місто:', city);
            console.log('Вулиця:', street);
            console.log('Номер будинку:', houseNumber);
        })
        .catch(error => console.error('Помилка:', error));
});

