const task1 = () => {               //var
    var apples = 5;
    if (true) {
        var apples = 10;

        console.log(apples); // 10 (в середині блока)
    }
    console.log(apples); // 10 (зовні блока значення не змінилось)

    console.log(a); // помилка, немає такої змінної
    var a = 5;
}

const task2 = () => {            //let
    let apples = 5; // (*) 
    if (true) {
        let apples = 10;

        console.log(apples); // 10 (в середині блока)
    }
    console.log(apples); // 5 (зовні блока значення не змінилось)

    console.log(a); // помилка, немає такої змінної
    let a = 5;
}

const task3 = () => {     //Деструктуризація
    let [firstName, lastName] = ["Іван", "Пупкін"];
    console.log(firstName); // Іван
    console.log(lastName);  // Пупкін
}

const task4 = () => {    //spread
    let [firstName, lastName, ...restElements] = ['Іван', 'Пупкін', 'Yana', 'Evgen'];
    console.log(firstName); // Іван
    console.log(lastName);
    console.log(restElements);
}

const task5 = () => {   //перейменування змінних в обʼєкті
    let user = {
        age: 25,
        lastName: 'Ivanov',
        name: "Петро",
    };

    const { name: userName, age: userAge, lastName } = user;

    // const { name, age } = user;
    console.log(userName);  // Петро
    console.log(userAge);  // 25
    console.log(lastName);
}

const task6 = () => {    //звичайний варіант
    const url = 'https://6628f7e654afcabd0737a2a7.mockapi.io/posts/1';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const userName = data.name;
            document.querySelector('.name').textContent = userName;
        })
}

const task7 = () => {  //варіант через диструктиризацію
    const url = 'https://6628f7e654afcabd0737a2a7.mockapi.io/posts/1';

    fetch(url)
        .then(response => response.json())
        .then(({ name: userName }) => {
            document.querySelector('.name').textContent = userName;
        })
}

const task8 = () => {    //оператор Spread
    var log = function (a, b, c) {
        console.log(a, b, c);
    };
    log(...['Spread', 'Rest', 'Operator']); // Spread Rest Operator
}

const task9 = () => {    //копіювання властивостей масивів
    const arr = ['will', 'love'];
    const data = ['You', ...arr, 'spread', 'operator'];
    console.log(data); // ['You', 'will', 'love', 'spread', 'operator']
}

const task10 = () => {   //копіювання всіх властивостей, без посилання на масив
    const arr = [1, 2, 3, 4, 5];
    const data = [...arr];
    const copy = arr;

    arr === data; // false − посилання відрізняються - два різних масиву
    arr === copy; // true − дві змінні посилаються на один масив
}

const task11 = () => {         //оператор rest відловлює усе інше (якщо не знаємо що взагалі є)
    const log = function (a, b, ...rest) {   //а, в - це не rest!!!
        console.log(a, b, rest);
    };
    log('Basic', 'rest', 'operator', 'usage'); // Basic rest ['operator', usage]
}

const task12 = () => {    //параметри по замовчуванню (мають бути в кінці!!!) в функціях 
    function calcPrice(price, sale = 20) {
        return price - price * sale / 100;
    }

    console.log(calcPrice(500, 40)); // 500-500*40/100  -> значення по замовчуванню ігнорується
    console.log(calcPrice(500)); // 500-500*20/100      ->  ділення на параметр по замовчуванню - 20
}

const task13 = () => {     //стрілкові функції (this - це сам обʼєкт)
    const group = {
        title: "Наш курс",
        students: ["Вася", "Петя", "Даша"],

        showList: function () {
            this.students.forEach(
                student => console.log(this.title + ': ' + student)
            )
        }
    }

    group.showList();
}

const task14 = () => {      //arguments в (стрілковій ф-ї) => використовувати не можна
    function doSomething() {
        console.log(arguments);
    }
    doSomething(1, 2, 'apple', 4)
}

const task15 = () => {      //строки
    let [firstName, lastName] = ["Іван", "Пупкін"];
    console.log(`Моє ім’я ${firstName} ${lastName}`);
}

const task16 = () => {      //Map колекція
    let map = new Map();

    map.set('user', 'Yana');
    map.set('name', 'Ilona')
    map.set('23', 'Test');
    //user - ключ, Yana - значення
    console.log(map);
    console.log(map.get('user'));   //дістати значення по ключу
    console.log(map.size); // повертає к-сть елементів - 3 елементи
}

const task17 = () => {             //ключ може бути любим типом
    let map = new Map();

    map.set('name', 'Ilona')
    map.set('23', 'Test');
    map.set(23, 'User')

    console.log(`Ключ - число: ${map.get(23)}`);   //дістати значення по ключу - число
    console.log(`Ключ - строка: ${map.get('23')}`);   //дістати значення по ключу - строка
    console.log(map.has('name'));    //true - бо такий ключ є
}

const task18 = () => {          //запис значень в колекцію
    let recipeMap = new Map([
        ["Огірок", 500],
        ["Помідор", 350],
        ["Цибуля", 50]
    ]);

    // перебір по ключам (овочі)
    for (let vegetable of recipeMap.keys()) {
        console.log(vegetable); // огірок, помідор, цибуля
    }

    // перебір за значеннями (числа)
    for (let amount of recipeMap.values()) {
        console.log(amount); // 500, 350, 50
    }

    // перебір за елементами в форматі [ключ, значення]
    for (let entry of recipeMap) {// те ж саме, що і recipeMap.entries ()
        console.log(entry); // огірок, 500 (і так далі)
    }

}

const task19 = () => {            //Set колекція - при повторі значень вони ігноруються
    let set = new Set(["апельсины", "яблоки", "бананы", "яблоки"]);
    set.add('ананас');
    console.log(set);   // - обʼєкт

    const array = [...set];  // - масив
    console.log(array);

    // то же, что: for(let value of set)
    // set.forEach((value, valueAgain, set) => {
    //     alert(value); // апельсины, затем яблоки, затем бананы и ананас
    // });
}

const task20 = () => {             //BigInt - не можна робити математичні операції з іншим типом чисел
    // інші числа теж треба переводити в bigInt
    const theBiggestInt = 9007199254740991n;
    const alsoHuge = BigInt(9007199254740991);
    const abc = 246n;

    console.log(abc + 1n);      //247n
    console.log(typeof 1n === 'bigint'); // true 
    console.log(typeof BigInt('1') === 'bigint'); // true
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
task19();
task20();
