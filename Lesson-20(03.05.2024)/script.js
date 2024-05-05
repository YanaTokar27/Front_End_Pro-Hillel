const task1 = () => {       //обробка помилок при запиті
    fetch(`https://jsonplaceholder.typicode.com/posts/3`)
        .then(response => {
            if (response.ok) {     // .ok (при відповіді 200)
                return response.json()
            }
            throw new Error('Error');
        })
        .then(data => console.log('Data', data))
        .catch(error => console.log('Error', error));
}

const task2 = () => {      //object.freeze - заборона на зміну обʼєкта
    'use strict'
    const obj = {
        prop: 42
    };

    Object.freeze(obj);
    obj.prop = 33; // Кине помилку у ‘strict’ моді
    console.log(obj); // Результат: 42
}

const task3 = () => {        //object.seal - можна тільки редагувати те що є; 
    // не можна додавати нові ключі
    'use strict'
    const obj = {
        a: 999
    };

    Object.seal(obj);

    obj.a = 4;
    console.log(obj);
    // obj.newA = 3; // помилка
}

const task4 = () => {        //Class
    class User {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHi() {
            console.log(`Name: ${this.name}, age: ${this.age}`);
        }
    }
    let user = new User("Вася", 25);  // екземпляр класу
    user.sayHi(); // Вася
    console.log(user);

    //одне і те саме, що і вище
    // function User(name) {
    //     this.name = name;
    // }
    // User.prototype.sayHi = function () {
    //     alert(this.name);
    // };
}

const task5 = () => {    //fet && set
    class User {
        constructor(name) {
            this.name = name;  // викликаєм сеттер
        }
        get name() {
            return `Person: ${this._name}`;
        }
        set name(value) {
            if (value.length < 4) {
                console.log(`${value} - Ім’я коротке`);
                return;
            }
            this._name = value;
        }
    }

    let user = new User("John");
    console.log(user.name); // John

    user = new User("Ann"); // Ім’я коротке
}

const task6 = () => {      //Статичні методи - існують лише в методах базового класу!!!
    class Person {
        constructor(name) {
            this.name = name;
        }
        getName() {
            return this.name;
        }
        static createAnonymous(gender) {
            let name = gender === "male" ? "John Doe" : "Jane Doe";

            return new Person(name);
        }
    }
    const petya = new Person('Petya');
    console.log(petya);
    console.log(petya.getName());
    // console.log(petya.createAnonymous('male')); //в екземплярах методу createAnonymous не буде!!!

    let anonymous = Person.createAnonymous("male");
    console.log(anonymous);
}

const task7 = () => {        //static
    class Article {
        constructor(title, date) {
            this.title = title;
            this.date = date;
        }

        static compare(articleA, articleB) {
            return articleA.date - articleB.date;
        }
    }

    let articles = [
        new Article("HTML", new Date(2019, 1, 1)),
        new Article("CSS", new Date(2019, 0, 1)),
        new Article("JavaScript", new Date(2019, 11, 1))
    ];

    articles.sort(Article.compare);
    console.log(articles);
    // console.log(articles[0].title); // найраніше створена стаття по CSS
}

const task8 = () => {     //Статичні властивості існують лише в базовому класі
    class Item {
        constructor(name, quantity) {
            this.name = name;
            this.quantity = quantity;
            this.constructor.count++;
        }
        static count = 0;
        static getCount() {
            return Item.count++;
        }
    }

    let pen = new Item("Pen", 5);
    let notebook = new Item("notebook", 10);
    console.log(Item.getCount()); // 2
}

const task9 = () => {      //Наслідування
    function Animal(legs) {
        this.legs = legs;
    }

    Animal.prototype.walk = function () {
        console.log('walking on ' + this.legs + ' legs');
    }

    function Bird(legs) {
        Animal.call(this, legs);
    }

    Bird.prototype = Object.create(Animal.prototype);
    Bird.prototype.constructor = Animal;


    Bird.prototype.fly = function () {
        console.log('flying');
    }

    let pigeon = new Bird(2);
    pigeon.walk(); // walking on 2 legs
    pigeon.fly(); // flying

}

const task10 = () => {     //Наслідування через класи
    class Animal {
        constructor(legs) {
            this.legs = legs;
        }
        walk() {
            console.log('walking on ' + this.legs + ' legs');
        }
    }

    class Bird extends Animal {
        constructor(legs) {
            super(legs);
        }
        fly() {
            console.log('flying');
        }
    }

    let bird = new Bird(2);
    console.log(bird);
    bird.walk();
    bird.fly();

}

const task11 = () => {     //# - приватні властивості і методи без можливості перезаписати
    class Circle {
        #radius;        // її оголошуввати не обовʼязково!

        constructor(value) {
            this.#radius = value;
        }

        get area() {
            return Math.PI * Math.pow(this.#radius, 2);
        }
    }

    let circle = new Circle(10);
    console.log(circle);
}

const task12 = () => {     //практика
    /* Створити базовий клас Device і унаслідувати від нього класи Phone, Tablet, Laptop
     */

    class Device {
        static quantity = 0;

        constructor(price) {
            this.price = price;
            this.constructor.quantity++;
        }

        static getQuantity() {
            return this.quantity;
        }

        getPrice() {
            return `Device price: ${this.price}`
        }
    }

    class Phone extends Device {    //практика
        constructor(price, model, color) {
            super(price);
            this.model = model;
            this.color = color;
        }

        getModel() {
            return `Model: ${this.model}`
        }
    }

    class Tablet extends Device {
        constructor(price, model, color, diagonal) {
            super(price);
            this.model = model;
            this.color = color;
            this.diagonal = diagonal;
        }

        getModel() {
            return `Model: ${this.model}`
        }

        getDiagonal() {
            return `Diagonal: ${this.diagonal}`
        }
    }

    const phone = new Phone(123, 'XI', "black")
    const phone2 = new Phone(123, 'XI', "black")
    const tablet = new Tablet(123, 'Samsung', 'white', 10);

    console.log(`Кількість девайсів - ${Phone.getQuantity()}`);
    console.log(tablet.getDiagonal())
    console.log(tablet.getPrice())

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
task11();
task12();
