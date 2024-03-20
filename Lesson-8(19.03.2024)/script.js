const task1 = () => {           //методи обʼєкта
    const user = {
        name: "John",
        age: 30,
        // sayHi: function () {
        //     console.log("Hello!");
        // }

        sayHi() {
            console.log("Hello!");
        }
    };

    user.sayHi();
}

const task2 = () => {            //this
    const person = {
        firstName: "John",
        lastName: "Doe",
        id: 5566,

        fullName: function () {
            return this.firstName + " " + this.lastName;
        }
    };

    console.log(person.fullName()); // - виклик методу
}

const task3 = () => {           //this - практика
    const skill = {
        name: 'html',
        level: 5,
        getString() {
            console.log(`${skill.name} - ${skill.level}`);
        }
    }

    skill.getString();
}

const task4 = () => {           //у стрілочних функцій немає "this"
    const group = {
        title: "Our Group",
        students: ["John", "Pete", "Alice"],

        showList() {
            this.students.forEach(
                student => console.log(this.title + ': ' + student)
            );
        }
    };

    group.showList();
}

const task5 = () => {          //this посилається на window
    const group = {
        title: "Our Group",
        students: ["John", "Pete", "Alice"],

        showList() {
            this.students.forEach(function (student) {
                console.log(this.title + ': ' + student)     //this.title - в window  немає ключа title, a group.title має
            });
        }
    };

    group.showList();
}

const task6 = () => {
    const user = { name: "Антон" };
    const admin = { name: "Ілона" };

    function sayHi() {
        console.log(this.name);
    }

    // додаємо функцію sayHi в обидва об’єкти
    user.getHi = sayHi;
    admin.getHi = sayHi;

    // виклик функції мають різне значення this
    user.getHi(); // Джон  (this == user)
    admin.getHi(); // Админ  (this == admin)
}

const task7 = () => {
    const user = {
        firstName: "Вася",
        sayHi() {
            alert(`Привет, ${this.firstName}!`);
        }
    };

    console.log(user.sayHi());

    // setTimeout(user.sayHi, 1000);
}

const task8 = () => {              //bind - створює нову змінну
    const user = {
        firstName: "Василь",
        sayHi() {
            alert(`Привіт, ${this.firstName}!`);
        }
    };

    const sayHi = user.sayHi.bind(user);

    sayHi(); // Привіт, Василь!

    setTimeout(sayHi, 1000);

}

const task9 = () => {         //bind - привʼязує ф-ю до іншого обʼєкта (не викликаючи її), без зміни початкового обʼєкта
    const user = {
        firstName: "Василь",
        sayHi() {
            alert(`Привіт, ${this.firstName}!`);
        }
    };

    const user2 = {
        firstName: 'Катя'
    }

    const sayHi = user.sayHi.bind(user2);

    sayHi();
    console.log(user2);
}

const task10 = () => {     //call підставляє this, змінює параметри і викликає цю ф-ю
    function promote(newPosition, newSalary) {
        this.salary = newSalary
        this.position = newPosition
        return this.position + ' earns ' + this.salary + ' dollars'
    }

    const junior = {
        name: 'Fritz',
        position: 'junior developer',
        salary: 1000
    }

    const middle = {
        name: 'Max',
        position: 'middle developer',
        salary: 2000
    }

    const senior = {
        name: 'Manu',
        position: 'senior developer',
        salary: 3000
    }

    const result1 = promote.call(junior, 'Super junior developer', 1200)
    const result2 = promote.call(middle, 'Super middle developer', 2200)
    const result3 = promote.call(senior, 'Super senior developer', 3200)

    console.log(result1);
    console.log(result2);
    console.log(result3);

    // console.log(junior);
}

const task11 = () => {            //apply - приймає масив, call - приймає параметри через кому
    function promote(newPosition, newSalary) {
        this.salary = newSalary
        this.position = newPosition
        return this.position + ' earns ' + this.salary + ' dollars'
    }

    const junior = {
        name: 'Fritz',
        position: 'junior developer',
        salary: 1000
    }

    const middle = {
        name: 'Max',
        position: 'middle developer',
        salary: 2000
    }

    // const params = ['Super junior developer', 1200];
    // const result1 = promote.apply(junior, params);

    const result1 = promote.apply(junior, ['Super junior developer', 1200])

    console.log(result1);
}

const task12 = () => {        //ф-я конструктор new - повертає новий екземпляр початкового обʼєкту
    function User(name) {
        this.name = name;
        this.isAdmin = false;
    }

    const user = new User("Вася");
    const user2 = new User("Марина");

    // console.log(user.name);
    // console.log(user.isAdmin);

    console.log(user);
    console.log(user2);
}

const task13 = () => {
    function User(name) {
        this.name = name;

        this.sayHi = function () {
            alert("Меня зовут: " + this.name);
        };
    }

    const vasya = new User("Вася");

    // console.log(vasya);
    vasya.sayHi(); // Меня зовут: Вася
}

const task14 = () => {             //практика
    /* Створіть об'єкт calculator з методами:
    sum () повертає суму цих двох значень
    mul () повертає добуток цих двох значень
    ініціалізувати об’єкт через функцію-конструктор */

    function Calculator(fn) {
        this.sum = function (number1, number2) {
            return number1 + number2;
        };

        this.mul = function (number1, number2) {
            return number1 * number2;
        }

        if (fn) {
            this.divide = fn;
        }
    }

    function divideBy(number1, number2) {
        return number1 / number2;
    }

    const newCalculator = new Calculator();
    const newFullCalculator = new Calculator(divideBy);

    console.log(newCalculator.sum(5, 4));
    console.log(newFullCalculator.divide(14, 2));
}

const task15 = () => {             //практика
    /* Створити та записати сутності Багатоквартирний будинок, квартири
    */

    function Building(name, flatQuantity) {
        this.name = name;
        this.flats = [];

        let i = 0;

        // while (i < flatQuantity) {
        //     i++;
        //     this.flats.push(new Flat(i))
        // }

        for (let i = 1; i <= flatQuantity; i++) {
            this.flats.push(new Flat(i))
        }
    }

    function Flat(number) {
        this.number = number;
        this.rooms = 4;
    }

    const newBulding = new Building('Sun', 20);

    console.log(newBulding);
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
