const task1 = () => {
    let string = '';

    for (let i = 20; i < 30; i += 0.5) {
        string += i < 29.5 ? `${i}, ` : `${i}`;
    }
    console.log(string);
}

const task2v1 = () => {                  //варіант-1
    let table = {};

    for (let i = 10; i <= 100; i += 10) {
        for (let k = 27; k <= 100; k += 27) {
            if (!table[i]) {
                table[i] = [];
                table[i].push(i * k);
            }
        }
    }
    console.log(table);
}

const task2v2 = () => {                  //варіант-2
    const oneUSD = 27;
    let doll = 10;

    do {
        const cost = oneUSD * doll;
        console.log(doll + ' USD = ' + cost + ' грн');
        doll += 10;
    } while (doll <= 100)
}

const task3 = () => {
    const number = +prompt('Введіть число 1-100');

    if (number && number <= 100) {
        for (let i = 1; i * i <= number; i++) {
            console.log(i);
        }
    } else {
        alert('Значення введене некоректно');
    }
}

const task4 = () => {
    const a = +prompt('Введіть число');
    let isPrime = true;

    for (let i = 2; i < a; i++) {
        if (a % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(a + ' просте число');
    } else {
        console.log(a + ' непросте число');
    }
}

const task5 = () => {
    const a = +prompt('Введіть число');
    let isSquar = true;
    let curr = a;

    // for (let i = 3; i < a; i++) {
    //     if (a / 3 === 0) {
    //         isSquar = false;
    //         break;
    //     }
    // }

    if (a) {
        while (curr > 1) {
            if (curr % 3 !== 0) {
                isSquar = false;
                break;
            }
            curr /= 3;
        }

        if (isSquar) {
            console.log(a + ' - є результатом зведення числа 3 у степінь');
        } else {
            console.log(a + ' - не є результатом зведення числа 3 у степінь');
        }
    } else {
        console.log('Введіть коректне число');
    }

}

// Дане деяке число
let targetNumber = +prompt('enter number');

// Починаємо з базового числа (3 в нульовій ступені)
let currentNumber = 3;

// Цикл для підняття числа 3 до ступеня, поки воно не перевищить задане число
while (currentNumber < targetNumber) {
    currentNumber *= 3; // Піднімаємо число 3 до наступного ступеня
}

// Перевірка, чи задане число можна отримати
if (currentNumber === targetNumber) {
    console.log(targetNumber + ' можна отримати, зведене до числа 3 у деякий ступінь.');
} else {
    console.log(targetNumber + ' не можна отримати, зведене до числа 3 у деякий ступінь.');
}



// task1();
// task2v1();
// task2v2();
// task3();
// task4();
// task5();

