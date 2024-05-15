// function* Foo() {
//     console.log('start')
//     yield 1
//     yield 2
//     yield 3
//     console.log('finish')
// }

// const iterator1 = Foo()
// console.log(iterator1.next().value) // 1
// console.log(iterator1.next().done) // false


function Boo() {
    let index = 0;
    const values = [1, 2, 3];

    console.log('start');
    return {
        next: () => {
            if (index < values.length) {
                return { value: values[index++], done: false };
            } else {
                console.log('finish');
                return ({ values: undefined, done: true });
            }
        }
    };
}

const iterator = Boo();
//Start
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3
//Finish
console.log(iterator.next()); // true

