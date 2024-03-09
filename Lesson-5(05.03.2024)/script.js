const task1 = () => {       //оголошення масивів
    const array = ['html', 'css', 'javascript'];
    array[0] // ‘html’;
    array[1] // ‘css’;
    array[2] // ‘javascript’;
    array[3] = 'jquery';

    console.log(array);
}

const task2 = () => {        //довжина масиву
    const array = ['html', 'css', 'javascript'];

    console.log(array.length);
}

const task3 = () => {        //метод pop - забирає останній елемент масиву
    let arr = ['html', 'css', 'javascript'];
    arr.pop(); // ‘javascript’

    console.log(arr);
}

const task4 = () => {       //метод push - додає елемент в кінець масиву
    let arr = ['html', 'css', 'javascript'];
    arr.push('jquery', 'php');

    console.log(arr);
}

const task5 = () => {       //метод shift - забирає перший елемент масиву
    let arr = ['html', 'css', 'javascript', 'jquery', 'php'];
    arr.shift();

    console.log(arr);
}

const task6 = () => {        //метод unshift - додає елемент на початок масиву
    let arr = ['html', 'css', 'javascript', 'jquery', 'php'];
    arr.unshift('bootstrap');

    console.log(arr);
}

const task7 = () => {        //метод unshift + виведення довжини
    let arr = ['html', 'css', 'javascript'];
    const arrLength = arr.unshift('php');

    console.log(arrLength);
}

const task8 = () => {        //багатовимірний масив
    const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    console.log(matrix[1][2]); // 6
}

const task9 = () => {       //практика - 1
    const array = [];
    let element;

    do {
        element = prompt('Введіть значення');
        if (element) {
            array.push(element);
        }
    } while (element)

    console.log(array);
}

const task10 = () => {      //практика - 2
    const matrix = [
        [1, 2, 3],
        [4, 5, 6, 2],
        [7, 8, 9, 0, 7]
    ];

    let sum = 0;

    //на 1 ітерацію зовнішнього циклу - проходить усе з внутрішнього!!!
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            const currentValue = matrix[i][j];
            sum += currentValue;
        }
    }

    console.log(sum)
}

const task11 = () => {       //метод split - перетворення строки в масив
    let names = 'html, css, javascript';
    let arr = names.split(', ');        //в рядку видаляться кома і пробіл

    console.log(arr);
}

const task12 = () => {      //метод join - перетворення масива в строку
    let arr = ['html', 'css', 'javascript'];

    // let str = arr.join(', ').toUpperCase();
    let str = arr.join(', ');      //розділення елементів в строчці, яку отримаємо
    console.log(str); //  'html, css, javascript’
}

const task13 = () => {            //практика - виведення слів довжиною > 5
    const lorem = 'Lorem ipsum dolor sit amet consectetur adipiscing elit';

    const loremArray = lorem.split(' ');

    for (let i = 0; i < loremArray.length; i++) {
        if (loremArray[i].length > 5) {
            console.log(loremArray[i]);
        }
    }
}

const task14 = () => {             //split - розбиття по буквах
    let names = 'html, css, javascript';
    let arr = names.split('');

    console.log(arr);
}

const task15 = () => {            //splice - видалення елементу
    const arr = ['html', 'css', 'javascript', 'jquery'];
    arr.splice(1, 1); // починаючи з індексу 1 видалити 1 елемент (css видалить)

    console.log(arr);
}

const task16 = () => {            //splice - видалення і заміна елементу
    const arr = ['html', 'css', 'javascript', 'jquery', 'php'];
    arr.splice(1, 1, 'scss');

    console.log(arr);  //['html', 'scss', 'javascript', 'jquery', 'php'];
}

const task17 = () => {             //splice - додавання елементу
    const arr = ['html', 'css', 'javascript', 'jquery'];
    arr.splice(1, 0, 'scss');  //починаючи з 1 - видалити 0 елементів і вставити перед ним - scss

    console.log(arr);  //['html', 'scss', 'css', 'javascript', 'jquery', 'php'];
}

const task18 = () => {
    const arr = ['html', 'css', 'javascript', 'jquery'];
    arr.splice(1, 0, 'scss'); // просто вставляє елемент елемент після індекса 0

    console.log(arr); // [‘html’, ‘scss’, ‘css’, ‘javascript’, ‘jquery’];
}

const task19 = () => {
    const arr = ['html', 'css', 'javascript', 'jquery'];
    arr.splice(-1, 0, 'scss');

    console.log(arr); //['html', 'css', 'javascript', 'scss', 'jquery']
}

const task20 = () => {              //практика
    const arr = [1, 9, 22, 7, 6];
    arr.splice(3, 0, 8);

    console.log(arr);

}

const task21 = () => {            //sort - сортування масивів по першому значенню
    const arr = [22, 1, 15, 2, 12];
    arr.sort();
    console.log(arr);  // 1, 12, 15, 2, 22
}

const task22 = () => {            //сортування чисел з використанням sort() і function
    const arr = [22, 1, 15, 2, 12];
    arr.sort(compareNumeric);

    function compareNumeric(a, b) {  // порівнюється два значення - варіант-1
        if (a > b) return 1;		// якщо перше значення більше другого то ф-я повертає додатнє число
        if (a == b) return 0;	// якщо рівні то ф-я повертає нуль
        if (a < b) return -1;	// якщо перше значення менше другого то ф-я повертає відємне число
    }

    console.log(arr);
}

const task23 = () => {                    //варіант-2
    const arr = [22, 1, 15, 2, 12];
    arr.sort(compareNumeric);

    function compareNumeric(a, b) {
        return a - b;         //від меншого до більшого
        // return b - a;       //від більшого до меншого
    }

    console.log(arr);
}

const task24 = () => {                   //реверс
    let arr = [1, 2, 3];
    arr.reverse();

    console.log(arr); // 3,2,1
}

const task25 = () => {              //spread - обʼєднання масивів
    const arr = [1, 2, 3];
    const arr2 = [21, 78, 93];
    const arrAll = [...arr, ...arr2];

    console.log(arrAll);             // 1 2 3 21 78 93
}

const task26 = () => {                //сортування слів по довжині (коротке - довге)
    const lorem = 'Lorem ipsum dolor sit amet consectetur adipiscing elit'
    const loremArray = lorem.split(' ');

    function compare(word1, word2) {
        return word1.length - word2.length
    }

    loremArray.sort(compare);
    const result = loremArray.join(' ')

    console.log(result);
}

const task27 = () => {     //chaining - поєднання методів //sort - працює на масив чисел!!!
    const str = '2458453';
    const newStr = str.split('').sort().join();

    console.log(newStr);   //2,3,4,4,5,5,8
}

const task28 = () => {            //for...of
    const num = [10, 20, 30];
    for (let value of num) {     //value - це кожне значення масиву
        value += 1;
        // console.log(value);
    }

    console.log(num);
}

const task29 = () => {            //forEach - перебирає весь масив
    const arr = ['html', 'css', 'javascript', 'php'];
    arr.forEach(function (item, i, array) {

        console.log(`${i}: ${item} (масив: ${array})`);
    });
}

const task30 = () => {          //filter - повертає масив з додатніми значеннями
    let arr = [1, -1, 2, -2, 3, -6, 7, 0];

    let positiveArr = arr.filter(function (number) {
        return number > 0;
    });

    console.log(positiveArr); // 1,2,3,7
}

const task31 = () => {                  //map - повертає масив з довжиною улементів
    let names = ['HTML', 'CSS', 'JavaScript', 'php'];

    let nameLengths = names.map(function (name) {
        return name.length;
    });

    console.log(nameLengths); // 4,3,10,3
}

const task32 = () => {                 //find - повертає перший елемент, для якого виконується умова
    let numbers = [10, 5, 1, 8, 7];
    let check = numbers.find(function (item, i, arr) {
        // console.log(item, i, arr);
        return item == 8
    });
    console.log(check); // 8
}

const task33 = () => {              //findIndex - повертає індекс знайденого елементу
    let numbers = [10, 5, 1, 7, 45];
    let index = numbers.findIndex(function (item) {
        return item == 45
    });

    console.log(index); // 4
}

const task34 = () => {              //every - перебирає кожен елемент
    const a1 = [5, 7, 1, 67, 48];
    const isEvery = a1.every(function (number) {
        return typeof number == 'number';
    });
    console.log(isEvery);           // поверне true


    let a2 = [1, '2', 3];
    const isEvery2 = a2.every(function (number) {
        return typeof number == 'number';
    });
    console.log(isEvery2);         // поверне false
}

const task35 = () => {               //some - якщо хоч один true - то поверне його
    const a1 = ['a', 'b', 'c', 'd', 48];
    const isSome = a1.some(function (number) {
        return typeof number == 'number';
    });
    console.log(isSome);
}

const task36 = () => {           //reduce - обробки кожного елемента масиву із збереженням проміжного результату
    let arr = [9, 2, 0, 7, 5];

    let result = arr.reduce(function (previous, current) {
        console.log(`${previous}, ${current}`);
        return previous + current;
    }, 0);

    console.log(`Result - ${result}`);
}

const task37 = () => {
    let arr = [1, 2, 3, 4, 5]
    // для кожного елемента масиву запустити функцію,
    // проміжний результат передавати першим аргументом далі
    let result = arr.reduce(function (previous, current) {
        return previous + current;
    }, 0); // 0 initialValue - початкове значення

    console.log(`Result - ${result}`); // 15
}

const task38 = () => {
    let arr = [9, 2, 0, 7, 5];

    let result = arr.reduce(function (acc, current) {
        console.log(acc);
        return { money: acc.money + current };
    }, { money: 0 });

    console.log('Result', result);
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
// task24();
// task25();
// task26();
// task27();
// task28();
// task29();
task30();
// task31();
// task32();
// task33();
// task34();
// task35();
// task36();
// task37();
// task38();
