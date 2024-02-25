const task1 = () => {     //декларуватта та ініціалазація 
    let a;
    let b, c;
    a = 1; b = 2; c = 3;

    console.log(a, b, c);
}

const task2 = () => {
    const bigNum = 2323232343424242242883849n;
    console.log(bigNum);
    console.log(typeof bigNum);
}

const task3 = () => { //розрахунки з BigInt можна робити лише з типом BigInt
    const bigNum = 2323232343424242242883849n;
    const num = 2;    // або const num = 2n;

    console.log(bigNum + BigInt(num));
}

const task4 = () => {        //різні види лапок
    const str = "He said: 'Privet!!!'";
    console.log(str);

}

const task5 = () => {      //обʼєкт - силочний тип
    const person = {
        name: 'Tom',
        age: 27
    }

    console.log(person.name + ' ' + person.age);
}

const task6 = () => {
    const personTom = {
        name: 'Tom',
        age: 27
    }

    const personSam = personTom;
    personSam.name = 'Sam';
    personSam.city = 'Dnipro';

    console.log(personTom);
    console.log(personSam);



}

const task7 = () => {      //обʼєкт та перезаписування
    const obj = {
        password: 1,
        password: 2
    }
    console.log(obj);

}

const task8 = () => {          //масиви та індекс
    const arr = [1, 2, 3, 'four', {}, true];
    console.log(arr[3]);
}

const task9 = () => {          //конкатинація
    console.log(1 + '2');
    console.log('4' + 1);

}

const task10 = () => {         //шаблонні строки - шаблонні рядки
    const num = 5;
    const string = 'Number: ' + num + ' is good';
    const string2 = `Number: ${5 + 9} is good`;

    console.log(string);
    console.log(string2);
}

const task11 = () => {       //перетворення string в число
    const a = '9';
    console.log(+a);

}

const task12 = () => {       //a++ - спершу виводить, а потім додає
    let a = 9;
    console.log(a++);
}

const task13 = () => {        //++a - додає і одразу виводить нове значення
    let a = 9;
    console.log(++a);
}

const task14 = () => {       //a-- - спершу виводить, а потім віднімає
    let a = 9;
    console.log(a--);
}

const task15 = () => {        //--a - віднімає і одразу виводить нове значення
    let a = 9;
    console.log(--a);
}

const task16 = () => {           //тернарний оператор
    let status = 2 > 1 ? 'ok' : 'not';
    console.log(status);
}

const task17 = () => {             //if-else
    if (5 > 6) {
        console.log('Yes');
    } else {
        console.log('No')
    }
}

const task18 = () => {           //if - else if
    if (5 > 6) {
        console.log('Yes');
    } else if (6 > 5) {
        console.log('6 > 5')
    } else {
        console.log('Empty');
    }
}

const task19 = () => {         //остача від ділення
    let a = 9;
    console.log(a % 2);
}

const task20 = () => {      //піднесення в степінь
    console.log(5 ** 3);
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
task18();
// task19();
// task20();
