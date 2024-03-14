const task1 = () => {    //як дістати елемент по індексу
    const ob = {
        name: 'Anna',
        age: 25,
        person: {
            status: 'mother'
        },
    }

    console.log(ob.name);
    console.log(ob.person.status);
    console.log(ob['age']);
}

const task2 = () => {    //доступ до властивості через змінну
    const ob = {
        name: 'Anna',
        age: 25,
        city: 'Lviv',
        person: {
            status: 'mother'
        },
    }

    const key = 'city';

    console.log(ob[key]);
}

const task3 = () => {     //передача по посиланню
    let user = { name: 'Bob' };
    let admin = user;

    admin.age = 30;

    console.log(user);
    console.log(admin);
}

const task4 = () => {    //клонування обʼєкта
    let user = {
        name: "Anna",
        age: 30
    };

    let cloneUser = {};

    // скопіюємо всі властивості user в нього
    for (let key in user) {
        cloneUser[key] = user[key];
    }

    cloneUser.name = "Olena";

    console.log(user);
    console.log(cloneUser);
}

const task5 = () => {   //клонування Варіант-1
    const user = {
        name: "John",
        age: 30
    };

    let user2 = {
        name: "John",
        age: 31
    };

    const clone = Object.assign(user2, user);
    //у змінній clone знаходиться абсолютно незалежний клон об’єкта.
    //однакові ключі будуть перезаписані на той, який в черзі останній

    console.log(clone);
}

const task6 = () => {    //Варіант-2
    const user = {
        name: "John",
        age: 30
    };

    const clone = Object.assign({}, user);
    clone.name = 'Ivan';

    console.log(clone);
}

const task7 = () => {    //клонування JSON
    const b = {
        a: 123,
        b: 456,
        c: 789
    };

    let a = JSON.stringify(b);  //переведення обʼєктів в строку JSON
    console.log(b);

    a = JSON.parse(a);     //зі строки JSON => в обʼєкт
    console.log(a);
}

const task8 = () => {    //spread оператор
    let b = { a: 123 };
    let a = { ...b };

    console.log(a);
}

const task9 = () => {   //клонує усі рівні
    const originalObject = {
        name: 'Alina',
        age: 32,
        address: { city: 'New York', country: 'USA' }
    }

    let cloneObject = JSON.stringify(originalObject);
    cloneObject = JSON.parse(cloneObject);

    cloneObject.address.city = 'Los Angeles';

    console.log(originalObject);
    console.log(cloneObject);
}

const task10 = () => {    //перебір властивостей обʼєкту
    let ob = {
        name: 'Yana',
        age: 29
    }
    for (let key in ob) {
        console.log(`Ключ: ${key}; значення: ${ob[key]}`);
    }
}

const task11 = () => {   //перевірка чи змінна є обʼєктом
    let ob = { name: 'Piter' };

    console.log(typeof ob === 'object' && ob !== null && !Array.isArray(ob)); // true
}

const task12 = () => {    // Array.isArray
    alert(Array.isArray({})); // false
    alert(Array.isArray([])); // true
}

const task13 = () => {        //Function
    const users = [
        { id: 1, name: "Вася" },
        { id: 2, name: "Петя" },
        { id: 3, name: "Маша" }
    ];

    const user = users.find(function (item) { return item.id === 1 });
    console.log(user);
}

const task14 = () => {     //практика
    const products = [
        { id: 0, price: 1000, name: 'laptop' },
        { id: 1, price: 3000, name: 'phone' },
        { id: 2, price: 2560, name: 'PC' },
        { id: 3, price: 3000, name: 'TV' }
    ]

    products.forEach(function (element) {
        console.log(`Price: ${element.price}`);
    });

    const idFromUser = +prompt('Enter ID product');
    if (!idFromUser) {
        console.log('Please, enter valid ID');
    }

    const productFromUser = products.find(function (element) {
        return element.id === idFromUser
    });

    if (!productFromUser) {
        console.log('Product did not find');
    }

    const countProd = +prompt('Enter count product');
    if (!countProd) {
        console.log('Please, enter count product');
    }

    const totalPrice = countProd * productFromUser.price;

    if (totalPrice > 10000) {
        const priceDiscount = totalPrice * 0.8;
        console.log(`Old price: ${totalPrice}; New price: ${priceDiscount}`);
    } else {
        console.log(totalPrice);
    }
}

const task15 = () => {            // оголошення функції
    function showName(age) {
        console.log(`My age: ${age}`);

        return age
    }

    showName(29);
}

const task16 = () => {
    showName();

    function showName() {
        console.log('My name Yana');
    }
}

const task17 = () => {
    let sum = function (a, b) {
        return a + b;
    };

    // стрілочна функція 
    //   let sum = (a, b) => a + b;
}




task1();
task2();
task3();
task4();
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

