const buy = document.querySelector('.card_buy');
const dataBuyer = document.querySelector('.data_buyer');
const submit = document.querySelector('.confirm');
const inform_buyer = document.querySelector('.inform_buyer');
const city = document.querySelector('.city');


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
    // console.log(formObject);
    validateInput(formObject);
})

function validateInput(object) {

    for (const [key, value] of Object.entries(object)) {
        console.log(`${key}: ${value}`);
        const inputElement = document.querySelector(`.${key}`);
        if (!inputElement) {
            continue
        }
        if (!value) {
            inputElement.classList.add('error');
        } else {
            inputElement.classList.remove('error');
        }
    }
}







