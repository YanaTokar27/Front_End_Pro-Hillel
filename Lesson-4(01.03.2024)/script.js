const task1 = () => {        //Math.floor
    const a = 3.1;
    const b = 3.9;
    console.log(Math.floor(a));
    console.log(Math.floor(b));
}

const task2 = () => {       //Math.ceil
    const a = 4.1;
    const b = 4.9;
    console.log(Math.ceil(a));
    console.log(Math.ceil(b));
}

const task3 = () => {       //Math.round
    const a = 2.1;         //до 2
    const b = 2.9;         //до 3
    console.log(Math.round(a));
    console.log(Math.round(b));
}

const task4 = () => {      //Math.trunc
    const a = 7.1;
    const b = 5.9;
    console.log(Math.trunc(a));
    console.log(Math.trunc(b));
}

const task5 = () => {      //заокруглює певну кількість знаків після коми
    const a = 3.567;
    const b = 5.94434;
    console.log(a.toFixed(1));
    console.log(b.toFixed(2));
}

const task6 = () => {              //length
    let str = 'I am Yanochka';
    console.log(str[5]);
    console.log(str.length);
    console.log(str[str.length - 2]); //передостання буква
}

const task7 = () => {          //includes - повертає boolean
    const str = 'Can I offer some advise?';
    const pos = str.includes('advise');

    console.log(pos);
}

const task8 = () => {         //search - повертає індекс позиції де знайшло слово/букву
    const str = 'Can I offer some advise?';
    const pos = str.search('offer');
    // const pos = str.indexOf('offer');

    console.log(pos);      //якщо не знаходить - то повертає '-1'
}

const task9 = () => {       // slice        [start -> end), при цьому end не включає 
    let str = "пралісок";

    console.log(str.slice(3, 6));       // ліс
    console.log(str.slice(3, -1));     //лісо
}

const task10 = () => {         //substring     повертає усе між start та end
    let str = "пралісок";

    console.log(str.substring(6, 3));       // ліс
    console.log(str.substring(6, -3));     //праліс
}

const task11 = () => {        //replace - підміна елементу строки
    const str = "Please visit Microsoft!";
    const n = str.replace("Microsoft", "Hillel"); // Please visit Hillel!

    console.log(n);
}

const task12 = () => {
    const string = "please visit Microsoft!";

    // console.log(string.replace(string[0], 'P'));
    console.log(`${string[0].toUpperCase()}${string.slice(1)}`);
}

const task13 = () => {          //цикли
    for (let i = 0; i < 3; i++) {
        alert(i);
    }
}

const task14 = () => {         //while
    let i = 0;

    while (i < 3) {
        alert(i);
        i++;
    }
}

const task15 = () => {         //do ... while
    let i = 0;

    do {
        alert(i);
        i++;
    } while (i < 4)
}


const task16 = () => {           //виводити, доки користувач не введе значення
    let str = prompt('Please, enter value');

    while (!str) {
        str = prompt('Please, enter value');
        console.log(str);
    }
}

const task17 = () => {            //варіант-1
    for (i = 1; i < 9; i++) {
        console.log(i ** 2);
    }
}

const task18 = () => {            //варіант-2
    let i = 1;

    while (i < 9) {
        console.log(i ** 2);
        i++;
    }
}

const task19 = () => {             //break
    for (let i = 0; i < 10; i++) {
        if (i === 3) break;
        console.log(i);
    }
}

const task20 = () => {             //continue
    for (let i = 0; i <= 10; i++) {
        if (i === 4) continue;
        console.log(i);
    }
}

const task21 = () => {                //цикл у циклі
    for (let i = 0; i < 3; i++) {     //на кожну ітерацію i - запускають усі ітератори k
        for (let k = 0; k < 5; k++) {
            console.log(i, k);
        }
    }
}

const task22 = () => {                 //варіант-1
    let str = '';

    for (i = 10; i <= 20; i++) {
        if (i < 20) {
            str += i + ', '
        } else {
            str += i
        }

    }
    console.log(str);
}

const task23 = () => {                 //варіант-2
    let str = '';

    for (i = 10; i <= 20; i++) {
        str += i < 20 ? `${i}, ` : `${i}`;
    }

    console.log(str);
}

const task24 = () => {                //таблиця множення
    const table = {};

    for (i = 1; i <= 9; i++) {
        for (k = 1; k <= 9; k++) {
            // console.log(table);
            if (!table[i]) {
                table[i] = [];
                // console.log(table);
            }
            table[i].push(i * k);
            // console.log(table);
        }
    }

    console.log(table);
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
// task21();
// task22();
// task23();
task24();