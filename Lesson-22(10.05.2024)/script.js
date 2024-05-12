const task1 = () => {       //Symbol
    const symbol = Symbol();

    console.log(symbol); // Symbol()
    console.log(typeof symbol); // symbol
}

const task2 = () => {
    let otherSymbol1 = Symbol(`name`);
    let otherSymbol2 = Symbol(`name`);

    console.log(otherSymbol1); // Symbol(name)
    console.log(otherSymbol2); // Symbol(name)
    console.log(otherSymbol1 === otherSymbol2); // false
}

const task3 = () => {
    let password = Symbol('password');
    let password1 = Symbol('password');


    const user = {
        name: 'Petro',
        password: '1234',
        [password]: 'root-password',
        [password1]: 'root-password'
    }

    console.log(user);
}

const task4 = () => {      //Symbol.for - Глобальний реєстр символів
    let symbol1 = Symbol.for(`name`);
    console.log(symbol1)  //Symbol1(name)
    let symbol2 = Symbol.for(`name`);
    console.log(symbol2)

    console.log(symbol1 === symbol2); // true
    let name = Symbol.keyFor(symbol1)           //витягти значення
    console.log(name); // ‘name’
}

const task5 = () => {     //Object.keys - символів не повертає
    let user = {
        login: `Richard`,
        [Symbol.for(`password`)]: `qwerty`,   //глобальний реєстр символів
        [Symbol.for(`name`)]: `Olena`,
        password: `abcdefg`
    };

    console.log(user.password); // abcdefg
    console.log(Object.keys(user)); // [`login`, `password`]

    let password = user[Symbol.for(`password`)]   //те саме, що і на 46 рядку
    console.log(password); // `qwerty`
    console.log(Object.getOwnPropertySymbols(user)); // [Symbol(`password`)]
}

const task6 = () => {     //Symbol.iterator(next)
    let kings = ['John Snow', 'Cersei Lannister', 'Daenerys Targaryen', `White Walker`];   //лапки без різниці

    for (let king of kings) {        //for...of почерговий перебір масиву
        console.log(king)
    }

    //ключ done - перебір закінчено
    console.log(typeof kings[Symbol.iterator]); // function
    let iterator = kings[Symbol.iterator]();   //записується обʼєкт з методом NEXT
    console.log(iterator.next()); // [value: `John Snow`, done: false]
    console.log(iterator.next()); // [value: `Cersei Lannister`, done: false]
    console.log(iterator.next()); // [value: `Daenerys Targaryen`, done: false]
    console.log(iterator.next()); // [value: `White Walker`, done: false]
    console.log(iterator.next()); // [value: undefined, done: true]
    console.log(iterator.next()); // [value: undefined, done: true]
}

const task7 = () => {       //Генератори
    function* generate() { // mark function as function-generator
        console.log(`generator`)
        yield 1;
        yield 2;
        yield 3;
        console.log(`See you soon`);
    }
    let generator = generate();
    console.log(generator.next()); // [value: 1, done: false]
    console.log(generator.next()); // [value: 2, done: false]
    console.log(generator.next()); // [value: 3, done: false]
    console.log(generator.next()); // [value: undefined, done: true]
}

const task8 = () => {   //Генератор унікальних значень
    function* idCreator() {
        let i = 0;
        while (true) yield i++
    }
    const ids = idCreator();

    console.log(ids.next().value); // 0  (можна без .value)
    console.log(ids.next().value); // 1
    console.log(ids.next().value); // 2      
}

const task9 = () => {    //Безкінечне проходження масиву циклом
    function* makeGenLoop(arr) {
        for (let i = 0; ; i++) {
            if (i === arr.length) i = 0;
            yield arr[i];
        }
    }
    const myGen = makeGenLoop([9, 3, 7, 2, 5]);

    console.log(myGen.next().value);
    console.log(myGen.next());
}

const task10 = () => {     //Ітератор для об’єкту
    const myObj = {
        name: `Stanley`,
        job: `Web Dev`,
        age: 28
    }

    myObj[Symbol.iterator] = function* () {  //самостійно додаємо генератор
        for (const prop in this) {   //перебір обʼєкту робимо з for ... in
            yield { key: prop, value: this[prop] } //повернення ключа і значення
            // yield this[prop]; //повернення значень 
            //yield prop - повернення ключів
        }
    }

    console.log([...myObj]); // [`Stanley`, `Web Dev`, 28]
    for (const val of myObj) {
        console.log(val);
    }
}

const task11 = () => {
    function* fetchUsers() {
        const response = yield fetch(`https://jsonplaceholder.typicode.com/users`);
        const jsonResponse = yield response.json();
    }

    const fetchUsersTask = fetchUsers();
    const fetchUsersPromise = fetchUsersTask.next().value // the first yield will return a promise;

    fetchUsersPromise
        .then(data => {
            // we get the data from the first yield
            // we return to generator to execute the second yield
            // with the data as arguments to the second yield
            return fetchUsersTask.next(data).value;
        })
        .then(response => console.log(`response: `, response));
}

const task12 = () => {
    function* gen() {
        const ask1 = yield '2 + 2?';
        console.log(ask1);

        const ask2 = yield '3 * 3?';
        console.log(ask2);
    }

    const generator = gen();

    console.log(generator.next().value);
    console.log(generator.next(2 + 2));
    console.log(generator.next(3 * 3));
}





// task1();
// task2();
// task3();
// task4();
// task5();
// task6();
// task7();
// task8();
task9();
task10();
task11();
task12();

