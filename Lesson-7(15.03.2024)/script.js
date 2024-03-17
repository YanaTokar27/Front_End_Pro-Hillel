const task1 = () => {
    function adToArray(array, number) {
        const isNumberPresent = array.find(element => element === number);
        // const isNumberPresent = array.find(function (element) {
        //     return element === number;
        // } 

        if (isNumberPresent) {
            return array
        }

        return array.concat(number);
        // return [...array, number]
    };

    const newArray = adToArray([2, 3, 6], 1);
    console.log(newArray);
}

const task2 = () => {           // вкладені функції
    function init() {
        let name = "Test"; // локальна змінна 

        function displayName() { // внутрішня функція
            alert(name); // використовує змінну оголошену в батьківській функції    
        }

        displayName();
    }
    init();
}

const task3 = () => {    //функції вищого порядку
    const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

    function mapArray(arr, fn) {
        const newArray = [];
        for (let i = 0; i < arr.length; i++) {
            newArray.push(
                fn(arr[i])
            );
        }
        return newArray;
    }

    const lenArray = mapArray(strArray, function (item) {
        return item.length;
    });

    console.log(lenArray);
}

const task4 = () => {               //замикання
    function makeWorker() {
        const name = "Pete";

        return function () {
            alert(name);
        };
    }

    let name = "John";

    // create a function
    const work = makeWorker();
    console.log(work);

    work();
}

const task5 = () => {           //замикання - приклад
    function getCounter() {
        let counter = 0;

        return function () {
            return counter++;
        }
    }

    let count = getCounter();

    console.log(count());  // 0
    console.log(count());  // 1
    console.log(count());  // 2    
}

const task6 = () => {            //подібне до 5, але з обнуленням
    function getCounter() {
        let counter = 0;

        return function (shouldBeNull) {
            if (shouldBeNull) {
                counter = 0
            }
            return counter++;
        }
    }

    let count = getCounter();

    console.log(count());
    console.log(count());
    console.log(count(true));
    console.log(count());
}

const task7 = () => {          //рекурсія
    function mul(value) {

        return value > 1 ? value * mul(value - 1) : value

        // if (value > 1) {
        //     return value * mul(value - 1);
        // }

        // return value;
    }

    console.log(mul(10));
}

const task8 = () => {          //практика по рекурсії
    let company = {
        sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
        development: {
            sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
            internals: [{ name: 'Jack', salary: 1300 }]
        }
    };

    // Функція підрахунку зарплати
    function sumSalaries(department) {
        if (Array.isArray(department)) {
            return department.reduce((prev, current) => prev + current.salary, 0); // сума елементів масиву
        } else {
            let sum = 0;
            for (let subdep of Object.values(department)) {
                sum += sumSalaries(subdep); // рекурсивно викликається для підрозділів і сумуються результати
            }
            return sum;
        }
    }

    console.log(sumSalaries(company)); // 6700
}

const task9 = () => {                 // pure function
    const add = (x, y) => x + y;

    add(2, 4); // 6

}

const task10 = () => {               //“нечиста” функція - та, яка міняє початковий стан  (side effects)
    let x = 2;
    const add = (y) => x += y;

    add(4); // x === 6 
}

const task11 = () => {                                     //змінюється вхідний обʼєкт
    const impureAssoc = (key, value, object) => {
        object[key] = value;
    };
    const person = {
        name: 'Bobo'
    };
    const result = impureAssoc('shoeSize', 400, person);     //після виконання ф-ї в person зʼявиться новий ключ і значення

    console.log({
        person,
        result
    });

}

const task12 = () => {                                //чиста ф-я
    const pureAssoc = (key, value, object) => ({
        ...object,           //-- через спред ця ф-я створить новий обʼєкт без зміни початкового
        [key]: value
    });
    const person = {                //після виконання ф-ї сам person залишиться початковим, без змін
        name: 'Bobo'
    };
    const result = pureAssoc('shoeSize', 400, person);
    console.log({
        person,
        result
    });
}

const task13 = () => {                    //область видимості
    const a = 5;

    function foo() {
        console.log(a);
    }

    function bar() {
        const a = 10;

        foo();
    }

    bar();    //5
}

const task14 = () => {             //reduce практика - 1
    const arr = [16, -37, 54, -4, 46, 4, 27, -63, 4, 12, 73, -35, 4, 47];

    const maxValue = arr.reduce((previous, current, index) => {
        if (previous.max < current) {
            return { max: current, maxIndex: index }
        }
        return previous

    }, { max: 0, maxIndex: 0 })

    console.log(maxValue);
}

const task15 = () => {             //reduce практика - 2
    const arr = [16, -37, 54, -4, 46, 4, 27, 53, -63, 4, 12, 71, -35, 4, 47, 61, 28];

    const findNumbers = arr.reduce((previous, current) => {
        if (current > 0 && current % 2 !== 0) {
            previous.sum += current;
            previous.count++;
            return previous
        }
        return previous
    }, { sum: 0, count: 0 })

    console.log(findNumbers);
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
task15();

