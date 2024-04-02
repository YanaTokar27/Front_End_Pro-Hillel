const task1 = () => {         //в консолі
    document.forms
    document.forms[1]
    document.forms[1].elements[0].value
}

const task2 = () => {   //change - показує фінальні зміни в полі
    const changeField = document.querySelector('.changeField');

    changeField.addEventListener('change', handleChange);

    function handleChange(event) {
        console.log(event.target.value);
    }
}

const task3 = () => {         //input - виводить усі зміни в полі
    const inputField = document.querySelector('.inputField');

    inputField.addEventListener('input', handleChange);

    function handleChange(event) {
        console.log(event.target.value);
    }
}

const task4 = () => {       //практика
    document.querySelector('#submit-person').addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(this);
        const formObject = {};

        formData.forEach(function (value, key) {
            if (!formObject[key]) {
                formObject[key] = value
            } else {
                formObject[key] = `${formObject[key]}, ${value}`;
            }
        })
        validate(formObject);
        console.log(formObject);
    })

    function validate(object) {
        if (object.password.length < 4) {
            document.querySelector('span').style.display = 'inline';
        }
    }
}




// task1();
// task2();
// task3();
task4();
