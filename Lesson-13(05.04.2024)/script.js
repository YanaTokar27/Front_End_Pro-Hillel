const task1 = () => {                //match - виводить перше що підійшло
    const str = "abc...abc...abc";
    const result = str.match(/abc/);

    console.log(result[0]); // abc
    console.log(result.index); // 0
    console.log(result.input); // abc...abc...abc
}

const task2 = () => {          //модифікатор g - вивід усіх результатів
    const str = "abc...abc...abc";
    const result = str.match(/abc/g);

    console.log(result); // [“abc”, “abc”, “abc”]
}

const task3 = () => {            // | - пошук будь-якого значення з представлених
    const str = 'apple, potato, banana, potato, apple, tomato';
    const pattern = /(apple|banana)/g;

    const result = str.match(pattern);
    console.log(result);
}

const task4 = () => {           // [^,] - пошук будь-якого окрім того, що після ^
    const str = 'apple, potato, banana, potato, apple, tomato';
    const pattern = /[^,]/g;

    const result = str.match(pattern);
    console.log(result);
}

const task5 = () => {           // [abt] - пошук будь-якого з дужок
    const str = 'apple, potato, banana, potato, apple, tomato';
    const pattern = /[abt]/g;

    const result = str.match(pattern);
    console.log(result);
}

const task6 = () => {          //набори і діапазони
    const str = "apple, potato, 123 banana";
    const pattern = /[0-9]\s[a-z]/;

    const result = str.match(pattern);
    console.log(result[0]); // 3 b
}

const task7 = () => {            //приклад
    const str = "123 bbb 321 aaa";
    const pattern = /\d\d\d \w\w\w \d\d\d \w\w\w/;

    const result = str.match(pattern);
    console.log(result[0]);
}

const task8 = () => {            //квантифікатори
    const str = "123 bbb 321 aaa";
    const pattern = /\d{3} \w{1,4} \d{3} \w*/;

    const result = str.match(pattern);
    console.log(result[0]);
}

const task9 = () => {
    const str = "^$@& sdfdsfElon Musk28934234 sdfdsf234234";
    const pattern = /[A-Z][a-z]{1,} [A-Z][a-z]{1,}/;

    const result = str.match(pattern);
    console.log(result[0]);
}

const task10 = () => {         //обʼєктна модель регулярних виразів
    const str = "Elon Musk";

    const pattern = /^[A-Z][a-z]{1,} [A-Z][a-z]{1,}$/;
    const patternObj = new RegExp('^[A-Z][a-z]{1,} [A-Z][a-z]{1,}$');

    console.log(pattern);
    console.log(patternObj);
    console.log(pattern === patternObj); // false
}

const task11 = () => {
    const str = "Elon Musk";
    const pattern = /^[A-Z][a-z]{1,} [A-Z][a-z]{1,}$/;
    const patternObj = new RegExp(/^[A-Z][a-z]{1,} [A-Z][a-z]{1,}$/);

    console.log(pattern);
    console.log(patternObj);
    console.log(pattern === patternObj); // false

    const result = str.match(pattern);
    console.log(result[0]);
}

const task12 = () => {
    const str = "Elon Musk";
    const pattern = new RegExp('^[A-Z][a-z]{1,} [A-Z][a-z]{1,}$');

    const result = pattern.test(str);
    console.log(result);
}

const task13 = () => {         //вираз з плаваючою точкою
    const str = '0 1 12.345 7890';
    const result = str.match(/\d+\.\d+/g)

    console.log(result);
}

const task14 = () => {          //відкриваючий або закриваючий HTML-тег, без атрибутів
    const str = '<h1>Привет!</h1>';
    const result = str.match(/<\/?[a-z][a-z0-9]*>/gi)

    console.log(result);
}

const task15 = () => {            //replaceAll - замінить усе
    const search = ' ';
    const replaceWith = '-';
    const result = 'duck duck go'.replaceAll(search, replaceWith);

    console.log(result); // => 'duck-duck-go'
}

const task16 = () => {          //replace - замінить тільки перше
    const search = ' ';
    const replace = '-';
    const result = 'duck duck go'.replace(search, replace);

    console.log(result); // => 'duck-duck go'
}

const task17 = () => {         //практика-1
    const str = '$12,234.03';
    const result = str.replace(/[$,]/g, '');

    console.log(result);
}

const task18 = () => {         //практика-2 валідація паролю 
    // (?=.* [A - Z]) - як мінімум 1 велика літера
    const input = document.querySelector('input');
    const message = document.querySelector('span');
    const pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-ZA-z0-9]{8,}$/;

    input.addEventListener('input', function (event) {
        const password = event.target.value;
        const isPasswordValide = pattern.test(password);

        if (isPasswordValide) {
            message.textContent = 'valid';
        } else {
            message.textContent = 'invalide';
        }
    })
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
// task10();
// task11();
// task12();
// task13();
// task14();
// task15();
// task16();
task17();
task18();

