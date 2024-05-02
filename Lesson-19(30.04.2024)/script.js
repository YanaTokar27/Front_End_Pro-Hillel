const task1 = () => {     //new Map - не чистить повністю, ключем може бути будь-що
    const collection = new Map();
    let emptyObject = {};
    collection.set(emptyObject, 'value');

    emptyObject = null;
    console.log(collection);
}

const task2 = () => {     //new WeakMap - повністю чистить, ключем може бути тільки обʼєкт
    const collection2 = new WeakMap();
    let emptyObject2 = {};
    collection2.set(emptyObject2, 'value');

    emptyObject2 = null;
    console.log(collection2);
}

const task3 = () => {    //WeakSet - елементами можуть бути лише обʼєкти
    let visitedSet = new WeakSet();

    let john = { name: "Іван" };
    let pete = { name: "Петро" };
    let mary = { name: "Марія" };

    visitedSet.add(john); // Іван відвідав нас
    visitedSet.add(pete); // Потім Петро
    visitedSet.add(john); // Потім Іван

    console.log(`Чи відповідав Іван? - ${visitedSet.has(john)}`); // true

    // перевірте, чи відвідала Марія?
    console.log(`Чи відвідала Марія? - ${visitedSet.has(mary)}`); // false

    // john = null;  // visitedSet буде очищено автоматично
}

const task4 = () => {       //callback
    function greeting(name) {
        console.log('Hello ' + name);
    }

    function processUserInput(callback) {
        let name = prompt('Please enter your name.');
        callback(name);
    }

    processUserInput(greeting);
}

const task5 = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position.coords.latitude, position.coords.longitude);
    });
}

const task6 = () => {          //XMLHttpRequest()
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'google.com');
    xhr.send();

    xhr.onload((event) => {
        if (event.status != 200) {
            console.log('Помилка ' + event.status + ': ' + event.statusText);
        } else {
            console.log(event.responseText);
        }
    });
}

const task7 = () => {         //Promise - resolve
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => resolve("done!"), 1000);
    });

    // resolve запустить першу функцію в .then
    promise.then(
        result => console.log(result), // виведе "done!" через одну секунду
        error => console.log(error) // не буде запущена
    );
}

const task8 = () => {        //Promise - reject
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => reject(new Error("Whoops!")), 1000);
    });

    // reject запустить другу функцію в .then
    promise.then(
        result => console.log(result), // не будет запущена
        error => console.log(error) // виведе "Error: Whoops!" через одну секунду
    );
}

const task9 = () => {
    let a = 3;
    let promise = new Promise(function (resolve, reject) {
        if (a < 4) {
            resolve(true);
        }
        reject(new Error('Whoops!'))
    })

    promise.then(
        result => console.log(result),
        error => console.log(error)
    );
}

const task10 = () => {           //ланцюжок промісів
    new Promise(function (resolve, reject) {
        setTimeout(() => resolve(3), 1000);
    })
        .then(function (result) {
            console.log(result); // 3
            return new Promise((resolve, reject) => {
                setTimeout(() => resolve(result * 2), 1000); //дія множення
            });

        }).then(function (result) {
            console.log(result); // 6
        });
}

const task11 = () => {     //catch - обробка помилок
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => reject(1), 1000);
    })
        .then(function (result) {
            console.log(result);
        })
        .catch(error => console.log(error));
}

const task12 = () => {          //finally - відпрацьовує завжди
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Yes'), 2000)
    })
        .then(result => console.log(result))
        .catch(error => console.log(error))
        .finally(() => console.log("Проміс завершений"))
}

const task13 = () => {       //Promise.all (якщо усі resolve)
    let promise1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(3), 1000)
    })

    let promise2 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 3000)
    })

    Promise.all([promise1, promise2]).then(result => console.log(result));
}

const task14 = () => {    //Promise.all  (якщо хоч щось reject)
    let promise1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(3), 1000)
    })

    let promise2 = new Promise((resolve, reject) => {
        setTimeout(() => reject(1), 3000)
    })

    Promise.all([promise1, promise2]).then(result => console.log(result)).catch(error => console.log("Error"));
}

const task15 = () => {        //Promise.allSettled - повертає результати у вигляді масиву; чекає поки усі проміси будуть завершені
    let promise1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(3), 1000)
    })

    let promise2 = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('Error')), 3000)
    })

    Promise.allSettled([promise1, promise2]).then(result => console.log(result))
}

const task16 = () => {        //Promise.race - його результат це перший виконаний проміс
    let promise1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(3), 1000)
    })

    let promise2 = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('Error')), 3000)
    })

    Promise.race([promise1, promise2]).then(result => console.log(result))
}

const task17 = () => {        //практика
    const currency = fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json').then(response => response.json());

    const paper = fetch('https://bank.gov.ua/depo_securities?json').then(response => response.json());

    Promise.all([currency, paper]).then(data => console.log(data));
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

