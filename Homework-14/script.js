const buy = document.querySelector('.card_buy');
const dataBuyer = document.querySelector('.data_buyer');
const inform_buyer = document.querySelector('.inform_buyer');
const infoOrder = document.querySelector('.infoOrder');

buy.addEventListener('click', function () {
    dataBuyer.classList.remove('hiden');
})

inform_buyer.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const formObject = {};

    formData.forEach(function (value, key) {
        if (!value) {
            formObject[key] = null;
        } else {
            formObject[key] = value;
        }
    })

    if (validateInput(formObject)) {
        infoOrder.classList.remove('hiden')
        printInputs(formObject);
    }
})

function validateInput(object) {
    let result = true;

    for (const [key, value] of Object.entries(object)) {
        const inputElement = document.querySelector(`.${key}`);

        if (!inputElement) {
            continue
        }

        if (!value) {
            inputElement.classList.add('error');
            result = false
        } else {
            inputElement.classList.remove('error');
        }
    }
    return result
}

function printInputs(object) {
    infoOrder.textContent = '';

    addTextToInfoOrder(infoOrder, `ПІБ покупця: ${object.buyer}`);
    addTextToInfoOrder(infoOrder, `Місто: ${object.city}`);
    addTextToInfoOrder(infoOrder, `Склад Нової Пошти: ${object.number_post}`);
    addTextToInfoOrder(infoOrder, `Вид оплати: ${object.payment}`);
    addTextToInfoOrder(infoOrder, `Кількість товару: ${object.quantity}`);

    if (object.comment) {
        addTextToInfoOrder(infoOrder, `Коментар до замовлення: ${object.comment}`);
    }
}

function addTextToInfoOrder(infoOrder, text) {
    const p = document.createElement('p');
    p.textContent = text;
    infoOrder.appendChild(p);
}