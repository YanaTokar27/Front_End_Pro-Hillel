const task1 = () => {
    const fullName = document.querySelector('.name');
    const phone = document.querySelector('.phone');
    const nameRegex = /[A-Za-z]+/;
    const phoneRegex = /\d+/;

    function validateField(event, regex, errorClass) {
        const isValid = regex.test(event.target.value);

        if (isValid) {
            return null
        }
        document.querySelector(errorClass).style.display = 'block';
    }

    fullName.addEventListener('input', (event) => {
        validateField(event, nameRegex, '.name-error')
    })

    phone.addEventListener('input', (event) => {
        validateField(event, phoneRegex, '.phone-error')
    }
    )
}

const task2 = () => {         //setTimeout
    setTimeout(function () {
        console.log('стоп');
    }, 3000);
}

const task3 = () => {      //TimeoutId - перемінна для можливості використ. clearTimeout
    //id - присвоює рандомний id
    const ourTimeoutId = setTimeout(function () {
        console.log('стоп');
    }, 3000);

    console.log(ourTimeoutId);
}

const task4 = () => {          //clearTimeout - очищення timeOut
    const ourTimeoutId = setTimeout(function () {
        console.log('стоп');
    }, 3000);

    clearTimeout(ourTimeoutId);
}

const task5 = () => {     //setInterval - повторне виконання кожні 2с
    setInterval(function () {
        alert('тик');
    }, 5000);
}

const task6 = () => {            //clearInterval
    const intervalID = setInterval(function () {
        alert('тик');
    }, 5000);

    clearInterval(intervalID);
}

const task7 = () => {            //clearInterval спрацює через 3с
    const intervalID = setInterval(function () {
        alert('тик');
    }, 2000);

    setTimeout(() => clearInterval(intervalID), 3000);
}

const task8 = () => {            //черга роботи ivent loop
    setTimeout(() => console.log('Work'));

    alert("Hi");
}

const task9 = () => {             //1-5-6-4-3-2
    let divEl = document.querySelector('div');
    divEl.addEventListener('click', () => {
        console.log('5');
    });
    async function someAction() {
        await Promise.resolve();
        console.log('4');
    };

    console.log('1')

    setTimeout(() => {                                    //macro task       
        console.log('2')
    });

    someAction()                                          //micro task - 1
    Promise.resolve().then(() => { console.log('3') })    //micro task - 2
    divEl.click();
    console.log('6');
}

const task10 = () => {               //Date
    const result = new Date();
    console.log(result);

    console.log(`Рік - ${result.getFullYear()}`);
    console.log(`Місяць [0-11] - ${result.getMonth()}`);
    console.log(`Поточна дата - ${result.getDate()}`);
    console.log(`День тижня - ${result.getDay()}`);
    console.log(`Поточний час - ${result.getHours()}`);
}

// task1();
// task2();
// task3();
// task4();
// task5();
// task6();
// task7();
// task8();
// task9();
task10();