const task1 = () => {
    const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

    let positiveArr = arr.filter(function (number) {
        return number > 0;
    })

    let result = positiveArr.reduce(function (previous, current) {
        return previous + current;
    }, 0);

    console.log(`${positiveArr.length} - позитивних елементів, їх сума - ${result}`);
}

const task23 = () => {
    const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    const indexMin = arr.findIndex(function (item) {
        return item === min;
    })

    const indexMax = arr.findIndex(function (item) {
        return item === max;
    })

    console.log(`Максимальний елемент ${max}, його порядковий номер ${indexMax}`);
    console.log(`Мінімальний елемент ${min}, його порядковий номер ${indexMin}`);
}

const task4 = () => {
    const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

    const negativeArr = arr.filter(function (item) {
        return item <= 0;
    })

    console.log(`${negativeArr.length} - кількість негативних елементів`);
}

const task58 = () => {
    const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

    const positiveArr = arr.filter(function (number) {
        return number > 0 && number % 2 !== 0;
    })

    const result = positiveArr.reduce(function (previous, current) {
        return previous + current;
    }, 0);

    console.log(`${positiveArr.length} - кількість непарних позитивних елементів, ${result} - сума непарних позитивних елементів`);
}

const task67 = () => {
    const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

    const positiveArr = arr.filter(function (number) {
        return number > 0 && number % 2 === 0;
    })

    const result = positiveArr.reduce(function (previous, current) {
        return previous + current;
    }, 0);

    console.log(`${positiveArr.length} - кількість парних позитивних елементів; ${result} - сума парних позитивних елементів`);
}

const task9 = () => {
    const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

    const positiveArr = arr.filter(function (number) {
        return number > 0;
    })

    const result = positiveArr.reduce(function (previous, current) {
        return previous * current;
    }, 1);

    console.log(`${result} - добуток позитивних елементів`);
}

const task10 = () => {
    const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
    const max = Math.max(...arr);

    arr.forEach(function (item, index) {
        if (item !== max) {
            arr[index] = 0;
        }
    });

    console.log(arr);
}


task1();
// task23();
// task4();
// task58();
// task67();
// task9();
// task10();

