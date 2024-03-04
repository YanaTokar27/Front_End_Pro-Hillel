const task1 = () => {
    const number = +prompt('Please, enter number');

    if (isNaN(number)) {               //якщо замість чисел ввели букви
        console.log('Invalid number');
    }
}

const task2 = () => {
    const str = 'a';

    if (str) {
        console.log('str');
    } else {
        console.log('Empty');
    }
}

const task3 = () => {
    const str = '';

    if (str) {
        console.log('str');
    } else {
        console.log('Empty');
    }
}

const task4 = () => {
    let greeting;
    const hour = 19;

    if (hour < 18) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }

    console.log(greeting);
}

const task5 = () => {
    let greeting;
    const hour = 15;

    if (hour < 18) {
        greeting = "Good day";

        if (hour < 12) {
            greeting = "Good morning";
        }

        console.log(greeting);
    }
}

const task6 = () => {
    let greeting;
    const hour = 19;

    if (hour < 18 && hour > 12) {
        greeting = "Good day";
    }

    if (hour < 18 && hour < 12) {
        greeting = "Good morning";
    }

    console.log(greeting);
}

const task7 = () => {
    let greeting;
    const time = 21;

    if (time < 10) {
        greeting = "Good morning";
    } else if (time < 20) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }

    console.log(greeting);
}

const task8 = () => {            //запис через тернарний оператор
    let access;
    const age = 19;

    if (age > 18) {
        access = 200;
    } else {
        access = 500;
    }

    console.log(access);

    // access = (age > 18) ? 200 : 500;
    access = (age > 18) ? console.log('Доступ') : console.log('Заборона');
}

const task9 = () => {             //практика
    const number = +prompt('Введіть значення');

    if (number > 0) {
        console.log('Більше нуля');
    } else if (number < 0) {
        console.log('Менше нуля');
    } else if (number === 0) {
        console.log('Нуль');
    }
}

const task10 = () => {         //switch case
    let a = 2 + 2;

    switch (a) {
        case 3:
            alert('Малувато');
            break;
        case 4:
            alert('В точку!');
            break;
        case 5:
            alert('Перебір');
            break;
        default:
            alert('Я таких значень не знаю');
    }

}

const task11 = () => {       //switch case групування
    let a = 6;

    switch (a) {
        case 1:
        case 2:
        case 3:
            alert('Малувато');
            break;
        case 4:
            alert('В точку!');
            break;
        case 5:
        case 6:
        case 7:
            alert('Перебір');
            break;
        default:
            alert('Я таких значень не знаю');
    }
}

const task12 = () => {          //калькулятор з діями
    const param = prompt('Введіть дію');
    const a = 6;
    const b = 2;
    const result = `${a} ${param} ${b} = `;

    switch (param) {
        case '+':
            add = a + b;
            alert(result + add);
            break;
        case '-':
            sub = a - b;
            alert(result + sub);
            break;
        case '*':
            mult = a * b;
            alert(result + mult);
        case "/":
            div = a / b;
            alert(result + div);
            break;
        default:
            alert('Я таких значень не знаю');
    }
}

const task13 = () => {             //практика
    const num = +prompt('Введіть число');

    switch (num) {
        case 1:
            console.log('a');
            break;
        case 2:
            console.log('b');
            break;
        case 3:
            console.log('c');
            break;
        default:
            console.log('z');
    }
}

const task14 = () => {
    let a = 4;

    switch (true) {
        case a < 4:
            alert('Малувато');
            break;
        case a < 5:
            alert('В точку!');
            break;
        case a < 6:
            alert('Перебір');
            break;
        default:
            alert('Я таких значень не знаю!');
    }
}

const task15 = () => {           //Тренувальна задача - 1
    const firstNum = +prompt('Enter first number');
    const secondNum = +prompt('Enter second number');

    if (firstNum > secondNum) {
        alert('Перше число більше за друге');
    }
    else {
        alert('Друге число більше за перше');
    }

}

const task16 = () => {           //Тренувальна задача - 2
    const distance = +prompt('Enter km distance');
    const firstDistance = distance * 1000;        //distance -> km
    const secondDistance = distance * 0.305;      //distance -> фути

    if (firstDistance > secondDistance) {
        alert('Відстань у футах менша');
    }
    else {
        alert('Відстань у футах більша');
    }
}

const task17 = () => {           //Тренувальна задача - 3
    const a = +prompt('Введідь дільник');
    const b = +prompt('Введіть ділене');

    if (b % a === 0) {
        alert('Число ' + a + ' є дільником для ' + b);
    } else {
        alert('Число ' + a + ' НЕ є дільником для ' + b);
    }

}

const task18 = () => {            //Тренувальна задача - 4
    const num = +prompt('Введіть число');
    const div = num % 10;

    if (div % 2 === 0) {
        alert('Остання цифра ' + div + ' є парною');
    } else {
        alert('Остання цифра ' + div + ' є НЕпарною');
    }
}

const task19 = () => {           //Тренувальна задача - 5
    const num = +prompt('Введіть число');
    const first = Math.floor(num / 10);
    const second = num % 10;

    if (first > second) {
        alert('Перша цифра БІЛЬША за другу');
    } else {
        alert('Перша цифра МЕНША за другу')
    }

}

const task20 = () => {          //Тренувальна задача - 6
    const num = +prompt('Введіть число');
    const first = Math.floor(num / 100);
    const second = Math.floor((num % 100) / 10);
    const third = num % 10;
    let result = '';

    const sum = first + second + third;
    const mult = first * second * third;

    console.log(first);
    console.log(second);
    console.log(third);

    if (sum % 2 === 0) {
        result += 'Сума цифр парна, ';
    } else {
        result += 'Сума цифр непарна, ';
    }

    if (sum % 5 === 0) {
        result += 'Сума кратна 5, ';
    } else {
        result += 'Сума цифр не кратна 5, ';
    }

    if (mult > 100) {
        result += 'Добуток цифр більший ніж 100.';
    } else {
        result += 'Добуток цифр менший ніж 100.';
    }

    alert(result);

}

const task21 = () => {          //Тренувальна задача - 7
    const num = +prompt('Введіть число');

    if (num >= 0 && num <= 500) {
        alert('Число ' + num + ' входить у діапазон [0 - 500]');
    } else {
        alert('Число ' + num + ' не входить у діапазон [0 - 500]');
    }
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
// task17();
// task18();
// task19();
// task20();
task21();
