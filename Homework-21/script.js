function* Foo() {
    console.log('start')
    yield 1
    yield 2
    yield 3
    console.log('finish')
}

const iterator1 = Foo()
console.log(iterator1.next().value) // 1
console.log(iterator1.next().done) // false


function Boo() {
    let index = 0;
    const values = [1, 2, 3];

    console.log('start');

    return {
        next: function () {
            if (index < values.length) {
                return { value: values[index++], done: false };
            } else {
                console.log('finish');
                return { done: true };
            }
        }
    };
}

const iterator = Boo();

console.log(iterator.next().value); // 1
console.log(iterator.next().done); // false


