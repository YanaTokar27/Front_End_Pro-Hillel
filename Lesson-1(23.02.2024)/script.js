const task1 = () => {
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

const task3 = () => {
    const bigNum = 2323232343424242242883849n;
    const num = 2;

    console.log(bigNum + BigInt(num));
}

const task4 = () => {
    const str = "He said: 'Privet!!!'";
    console.log(str);

}

const task5 = () => {      //обʼєкт
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
    const arr = [1, 2, 3, 'four', {}];
    console.log(arr[3]);
}

const task9 = () => {          //конкатинація
    console.log(1 + '2');
    console.log('4' + 1);

}

const task10 = () => {         //шаблонні строки
    const num = 5;
    const string = 'Number: ' + num + ' is good';
    const string2 = `Number: ${5 + 9} is good`;

    console.log(string);
    console.log(string2);
}

const task11 = () => {
    const a = '9';
    console.log(+a);

}

const task12 = () => {
    let a = 9;
    a++;
    console.log(a);
}

const task13 = () => {
    let a = 6;
    console.log(a++);
    console.log(a);
}

const task14 = () => {           //тернарний оператор
    let status = 2 > 1 ? 'ok' : 'not';
    console.log(status);
}

const task15 = () => {             //if-else
    if (5 > 6) {
        console.log('Yes');
    } else {
        console.log('No')
    }
}

const task16 = () => {           //if - else if
    if (5 > 6) {
        console.log('Yes');
    } else if (6 > 5) {
        console.log('6 > 5')
    } else {
        console.log('Empty');
    }
}


task1();
task2();
task3();
task4();
task5();
task6();
task7();
task8();
task9();
task10();
task11();
task12();
task13();
task14();
task15();
task16();
