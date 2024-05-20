const express = require('express');
const app = express()
// визначаємо обробник для маршруту "/"
app.use('/users', function (request, response) {
    // надсилаємо відповідь
    response.send('<h2>Привіт Express!</h2>')
})
app.get('/about', function (request, response) {
    response.send('<h1>О сайте</h1>')
    //response.sendStatus(404); якщо не знайдено сторінки
})
// починаємо прослуховувати підключення на 3000 порту
app.listen(3000)


