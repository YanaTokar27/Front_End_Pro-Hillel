const task1 = () => { //виклик ф-ї конструктора - створення екземпляру класу
    let Student = function (name) {
        this.name = name;
    }

    const student1 = new Student('Anna');
    console.log(student1);
}

const task2 = () => {     //Інкапсуляція. Приховані "властивості"
    const Student = function (name, age) {
        this.name = name;

        let _age = age;   //прихований параметр, до якого не можна доступитись ззовні

        this.getAge = function () {      //повертає знач-я _age
            return _age;
        };

        this.setAge = function (age) {    //змінює знач-я _age
            _age = age;
        };
    }

    const student = new Student('Ilona', 23);
    console.log(student.getAge());
    student.setAge(24);
    console.log(student.getAge());
}

const task3 = () => {   //Object.defineProperty, дескриптори
    'use strict';

    let person = {}

    Object.defineProperty(person, 'name', {
        value: 'Bill',
        writable: true    //вказує на те, що параметр може бути перезаписаний
    });

    Object.defineProperty(person, 'age', {
        value: 30,
        writable: true
    });

    Object.defineProperty(person, 'gender', {
        value: 'Male',
        writable: false     //без можливості змінювати!
    });

    person.name = 'Kevin';
    // person.gender = '123'; // error
    console.log(person);
}

const task4 = () => {    //Геттери и Сеттери
    let person = {
        firstName: 'Ivan',
        secondName: 'Ivanov',
        age: 19,

        get name() {
            return this.firstName + " " + this.secondName;
        },

        set name(newName) {
            let names = newName.trim().split(" ");
            //trim - обрізає пробіли; split - розбиває строку на масив
            this.firstName = names[0] || '';
            this.secondName = names[1] || '';
        }
    };

    console.log(person.name);          //виклик get name - почаковий обʼєкт
    person.name = 'Donald Trump';      //виклик set name
    console.log(person);               //модифікований обʼєкт
    // console.log(person.firstName);
    // console.log(person.secondName);
}

const task5 = () => {               //практика
    function Human(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;

        this.getInfo = function () {
            console.log("Name:", this.name, "Age:", this.age);
        }
    }

    function Developer(name, age, gender, technicalSkills, area) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.technicalSkills = technicalSkills;
        this.area = area;

        this.getInfo = function () {
            console.log("Name:", this.name, "Age:", this.age);
        };

        this.getProfessionalInfo = function () {
            console.log("Professional Skills: ", this.technicalSkills, "Area: ", this.area);
        };
    }

    const human = new Human('User', 19, 'male');
    const developerJS = new Developer('Bob', 25, 'male', 'JS', 'FrontEnd');

    console.log(developerJS);
    human.getInfo();
}

const task6 = () => {        //попередній приклад за допомогою наслідування
    'use strict';
    function Human() {
        this.getInfo = function () {
            console.log("Name: ", this.name, "Age: ", this.age);
        }
    }
    function Developer(name, age, technicalSkills, area) {
        this.name = name;
        this.age = age;
        this.technicalSkills = technicalSkills;
        this.area = area;
        this.getProfessionalInfo = function () {
            console.log("Professional Skills: ", this.technicalSkills, "Area: ", this.area);
        };
    }

    Developer.prototype = new Human();
    const Max = new Developer('Maxim', 30, 'JS', 'Web');
    Max.getInfo();
    Max.getProfessionalInfo();
    console.log(Max);
}

const task7 = () => {        //метод create
    function Human() {
        this.getInfo = function () {
            console.log("Name:", this.name, "Age:", this.age);
        }
    }

    let generalHumanObj = new Human();
    let man = Object.create(generalHumanObj);
    man.name = 'Ivan';
    man.age = 30;
    man.getInfo();
}

const task8 = () => {       //Присвоєння прототипа об’єкту - setPrototypeOf
    const parent = { inherit: true };
    const childA = Object.create(parent);
    const childB = {};

    Object.setPrototypeOf(childB, parent);
    Object.getPrototypeOf(childB);    //повертає прототип
}

const task9 = () => {       //Object.hasOwnProperty
    function Human() {
        this.getInfo = function () {
            console.log("Name: ", this.name, "Age: ", this.age);
        }
    }
    function Developer(name, age, technicalSkills, area) {
        this.name = name;
        this.age = age;
        this.technicalSkills = technicalSkills;
        this.area = area;
        this.getProfessionalInfo = function () {
            console.log("Professional Skills: ", this.technicalSkills, "Area: ", this.area);
        };
    }

    Developer.prototype = new Human();
    const Max = new Developer('Maxim', 30, 'JS', 'Web');
    console.log(Max.hasOwnProperty('getInfo'));         //false
    console.log(Max.hasOwnProperty('area'));            //true
}

const task10 = () => {     //цикл for...in - повертає усе і унаслідуване від батька
    const parent = { inherit: true };
    const childA = Object.create(parent);
    // const childB = {};

    // Object.setPrototypeOf(childB, parent);

    for (let key in childA) {
        console.log(key);
        console.log(childA[key]);
    }
}

const task11 = () => {      //for...of працює з масивами!!!
    const parent = { inherit: true };
    const childA = Object.create(parent);

    for (let key of Object.keys(childA)) {
        console.log(key);
    }
}

const task12 = () => {       //поліморфізм - перезапис даних
    function Human() {
        this.getInfo = function () {
            console.log("Name: ", this.name, "Age: ", this.age);
        }
    }

    function Developer(name, age, technicalSkills, area) {
        this.name = name;
        this.age = age;
        this.technicalSkills = technicalSkills;
        this.area = area;
        this.getProfessionalInfo = function () {
            console.log("Professional Skills: ", this.technicalSkills, "Area: ", this.area);
        };
    }

    function QA(name, area) {
        this.name = name;
        this.area = area;

        this.getInfo = function () {          // перезаписуємо метод getInfo
            console.log('Name', this.name);
        }
    }

    Developer.prototype = new Human();
    QA.prototype = new Human();
    const maxim = new Developer('Maxim', 30, 'JS', 'Web');
    const oleg = new QA('Oleg', 'Frontend');

    maxim.getInfo();
    maxim.getProfessionalInfo();

    oleg.getInfo();
}

const task13 = () => {       //практика
    function Human(name) {
        this.name = name;
        this.cars = [];

        this.createCar = function (car) {
            if (car instanceof Car) {
                this.cars.push(car);
                return this.cars
            } else {
                return 'Error';
            }
        }

        this.readCar = function (modelName) {
            return this.cars.find(car => car.model === modelName);
        }

        this.updateCar = function (modelName, newName) {
            this.cars.forEach(car => {
                if (car.model === modelName) {
                    car.name = newName;
                }
            });
        }

        this.deletCar = function (modelName) {
            return this.cars.filter(car => car.model !== modelName);
        }

    }

    function Car(model) {
        this.model = model;
        this.name = 'My Car';
    }

    const Oleg = new Human('Oleg');
    const Tesla = new Car('Tesla');
    const BMW = new Car('BMW');

    Oleg.createCar(Tesla);
    Oleg.createCar(BMW);

    Oleg.updateCar('Tesla', 'My new Tesla');
    console.log(Oleg);
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
task13();

