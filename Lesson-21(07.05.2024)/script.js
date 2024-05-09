const task1 = () => {    //array.includes(element,fromIndex);
    [1, 2, 3].includes(2); // true
    [1, 2, 3].includes(4); // false
    [1, 2, 3].includes(1, 1); // false
}

const task2 = () => {    //Math.pow
    let result = Math.pow(2, 2);
    console.log(result); // 4

    result = Math.pow(2, 3);
    console.log(result); // 8
}

const task3 = () => {        //padStart
    let str = '1234'.padStart(8, '0');
    console.log(str); // "00001234"

    let str2 = 'abc'.padStart(5);
    console.log(str2); // "  abc" 
}

const task4 = () => {      //padEnd
    let str = 'abc'.padEnd(5);
    console.log(str); // "abc  "

    let str1 = 'abc'.padEnd(5, '*');
    console.log(str1); // "abc**"

}

const task5 = () => {      //for...in loop and Object.hasOwnProperty()
    const person = {
        firstName: 'John',
        lastName: 'Doe',
        age: 25
    };

    for (const key in person) {
        if (person.hasOwnProperty(key)) {
            const value = person[key];
            console.log(value);

        }
    }

    const person2 = {          //Object.values()
        firstName: 'Yana',
        lastName: 'Tokar',
        age: 29
    };

    const profile = Object.values(person2);
    // console.log(profile);
    profile.forEach(value => console.log(value));
}

const task6 = () => {     //object.entries
    const person = {
        firstName: 'John',
        lastName: 'Doe',
        age: 25,
    };

    const profile = Object.entries(person);
    console.log(profile);
}

const task7 = () => {       //callback
    function getUser(userId, callback) {
        console.log('Get user from the database.');
        setTimeout(() => {
            callback({
                userId: userId,
                username: 'john'
            });
        }, 1000);
    }

    function getServices(user, callback) {
        console.log(`Get services of  ${user.username} from the API.`);
        setTimeout(() => {
            callback(['Email', 'VPN', 'CDN']);
        }, 2000);
    }

    function getServiceCost(services, callback) {
        console.log(`Calculate service costs of ${services}.`);
        setTimeout(() => {
            callback(services.length * 100);
        }, 3000);
    }

    getUser(100, (user) => {
        getServices(user, (services) => {
            getServiceCost(services, (cost) => {
                console.log(`The service cost is ${cost}`);
            });
        });
    });
}

const task8 = () => {        //return Promise
    function getUser(userId) {
        return new Promise((resolve, reject) => {
            console.log('Get user from the database.');
            setTimeout(() => {
                resolve({
                    userId: userId,
                    username: 'john'
                });
            }, 1000);
        })
    }

    function getServices(user) {
        return new Promise((resolve, reject) => {
            console.log(`Get services of  ${user.username} from the API.`);
            setTimeout(() => {
                resolve(['Email', 'VPN', 'CDN']);
            }, 2000);
        });
    }

    function getServiceCost(services) {
        return new Promise((resolve, reject) => {
            console.log(`Calculate service costs of ${services}.`);
            setTimeout(() => {
                resolve(services.length * 100);
            }, 3000);
        });
    }

    getUser(100)
        .then((user) => getServices(user))
        .then((services) => getServiceCost(services))
        .then((cost) => console.log(`The service cost is ${cost}`));
}

const task9 = () => {      //async/await
    function getUser(userId) {
        return new Promise((resolve, reject) => {
            console.log('Get user from the database.');
            setTimeout(() => {
                resolve({
                    userId: userId,
                    username: 'john'
                });
            }, 1000);
        })
    }

    function getServices(user) {
        return new Promise((resolve, reject) => {
            console.log(`Get services of  ${user.username} from the API.`);
            setTimeout(() => {
                resolve(['Email', 'VPN', 'CDN']);
            }, 2000);
        });
    }

    function getServiceCost(services) {
        return new Promise((resolve, reject) => {
            console.log(`Calculate service costs of ${services}.`);
            setTimeout(() => {
                resolve(services.length * 100);
            }, 3000);
        });
    }

    async function showServiceCost() {
        let user = await getUser(100);
        let services = await getServices(user);
        let cost = await getServiceCost(services);
        console.log(`The service cost is ${cost}`);
    }

    showServiceCost();
}

const task10 = () => {      //async/await з fetch
    async function showAPI() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const todo = await response.json();
        console.log(todo);
    }

    showAPI();
}

const task11 = () => {    //try-catch ... finally
    async function showServiceCost() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const todo = await response.json();
            console.log(todo);
        } catch (error) {
            console.log("error:", error);
        } finally {
            console.log('finally')
        }
    }

    showServiceCost();
}

const task12 = () => {        //Promise.all
    async function showServiceCost() {
        try {
            const todoRequest = fetch('https://jsonplaceholder.typicode.com/todos/1');
            const postRequest = fetch('https://jsonplaceholder.typicode.com/posts/1');

            const [todoResponse, postResponse] = await Promise.all([todoRequest, postRequest]);

            const todo = await todoResponse.json();
            const post = await postResponse.json();
            console.log(todo, post);
        } catch (error) {
            console.log("error:", error);
        }
    }

    showServiceCost();
}

const task13 = () => {     //spread operator - клонує лише перший рівень
    let rgb = ['red', 'green', 'blue'];
    let cmyk = ['cyan', 'magenta', 'yellow', 'black'];
    let merge = [...rgb, ...cmyk];
    console.log(merge);

    let colors = ['red', 'green', 'blue'];
    let rgb1 = [...colors];
    console.log(rgb1);
}

const task14 = () => {      //Array.flat() - відкриває багатовимірні масиви
    const numbers = [1, 2, [3, 4, 5]];
    const flatNumbers = numbers.flat();

    console.log(flatNumbers);

    const numbers2 = [6, 7, [8, 9, 10, [11, 12]]];
    const flatNumbers2 = numbers2.flat(2);    //(2) - к-сть вкладеності яку слід відкрити

    console.log(flatNumbers2);

    const numbers3 = [1, 2, [3, 4, 5, [6, 7, [8, 9]]]];
    const flatNumbers3 = numbers3.flat(Infinity);     //infinity - якщо не знаємо к-сть вкладеності

    console.log(flatNumbers3);
}

const task15 = () => {       //flatMap
    let sentences = [
        "JavaScript Array flatMap()",
        " ",
        "is",
        " ",
        "Awesome"
    ];

    let words = sentences.flatMap(s => s.split(' '));
    console.log(words);
}

const task16 = () => {      //Object.entries - з масива в обʼєкт
    const boxStyle = {
        color: 'red',
        borderWidth: '1px'
    };

    let arr = Object.entries(boxStyle);
    console.log(Object.fromEntries(arr));
}

const task17 = () => {        //trim.Start() trim.End()
    const str = '   JavaScript   ';
    const result = str.trimStart();
    const result2 = str.trimEnd();


    console.log({ str });
    console.log({ result });
    console.log({ result2 });
}

const task18 = () => {       // дефолтне значення
    const height = 25;
    const maxHeight = height ?? 35;
    console.log(maxHeight);

    const height2 = false;
    const maxHeight2 = height2 ?? 32;
    console.log(maxHeight2);
}

const task19 = () => {    //optional chaining operator
    const response = {
        person: {
            firstName: null,
            lastName: 'Admin'
        }
    };

    console.log(response.person?.firstName);
}

const task20 = () => {      //JavaScript Import з іншого файлу
    const btn = document.querySelector('.btn');

    btn.addEventListener('click', async () => {
        try {
            const greeting = import('./greeting.js')
            greeting.sayHi();
        } catch (error) {
            console.error(error);
        };
    });
}

const task21 = () => {        //replaceAll() - використ. лише зі строками!!!
    let str = 'JS will, JS will, JS will rock you.';
    let newStr = str.replaceAll('JS', 'JavaScript');

    console.log(newStr);
}

const task22 = () => {           //символ _ - в консоль не виводиться
    let amount = 120_201_123.05; // 120201123.05
    let expense = 123_450; // 123450
    let fee = 12345_00; // 1234500

    console.log(amount);
    console.log(expense);
    console.log(fee);
}

const task23 = () => {      // .at() - дістати значення по індексу
    const scores = [5, 6, 7];

    console.log(scores.at(1)); // 6

    console.log(scores.at(-1)); // 7

    console.log(scores.at(-1) === scores[scores.length - 1]); // true
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
task22();
task23();
