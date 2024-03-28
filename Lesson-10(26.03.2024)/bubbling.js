const task1 = () => {         //babbling
    const form = document.querySelector('form');
    const div = document.querySelector('div');
    const p = document.querySelector('p');

    form.addEventListener('click', function () {
        console.log('form');
    });

    div.addEventListener('click', function (event) {   //зупинка всплиття на цьому елементі
        event.stopPropagation();
        console.log('div');
    });

    p.addEventListener('click', function () {
        console.log('p');
    });
}

const task2 = () => {           //capturing
    const form = document.querySelector('form');
    const div = document.querySelector('div');
    const p = document.querySelector('p');

    form.addEventListener('click', function () {
        console.log('form');
    }, true);                                  //true - занурення

    div.addEventListener('click', function () {
        console.log('div');
    }, true);

    p.addEventListener('click', function () {
        console.log('p');
    }, true);
}

const task3 = () => {           //практика
    const form = document.querySelector('form');
    const div = document.querySelector('div');
    const p = document.querySelector('p');

    form.addEventListener('click', function () {
        console.log('form');
    });

    div.addEventListener('click', function () {
        console.log('div');
    });

    p.addEventListener('click', function () {  //відпрацює лише один раз
        console.log('p');
    }, {
        capture: true,
        once: true,
    });
}

// task1();
// task2();
task3();