const task1 = () => {
    const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

    const result = arr.reduce(function (previous, current) {
        if (current > 0) {
            previous.sum += current;
            previous.length++;
        }
        return previous;
    }, { sum: 0, length: 0 });

    console.log(`${result.length} - позитивних елементів, їх сума - ${result.sum}`);
}

const task2_3 = () => {              //варіант-1
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

const task2_3V2 = () => {           //варіант-2
    const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
    let max = arr[0];
    let indexMax = 0;
    let min = arr[0];
    let indexMin = 0;

    arr.forEach(function (element, index) {
        if (element > max) {
            max = element
            indexMax = index
        }

        if (element < min) {
            min = element
            indexMin = index
        }
    })

    console.log(`Максимальний елемент ${max}, його порядковий номер ${indexMax}`);
    console.log(`Мінімальний елемент ${min}, його порядковий номер ${indexMin}`);
}

const task4 = () => {
    const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

    const negativeArr = arr.filter(function (item) {
        return item < 0;
    })

    console.log(`${negativeArr.length} - кількість негативних елементів`);
}

const task5_8 = () => {
    const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

    const result = arr.reduce(function (previous, current) {
        if (current > 0 && current % 2 !== 0) {
            previous.sum += current;
            previous.length++;
        } return previous;
    }, { sum: 0, length: 0 });

    console.log(`${result.length} - кількість непарних позитивних елементів, ${result.sum} - сума непарних позитивних елементів`);
}

const task6_7 = () => {
    const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

    const result = arr.reduce(function (previous, current) {
        if (current > 0 && current % 2 === 0) {
            previous.sum += current;
            previous.length++;
        } return previous;
    }, { sum: 0, length: 0 });

    console.log(`${result.length} - кількість парних позитивних елементів; ${result.sum} - сума парних позитивних елементів`);
}

const task9 = () => {
    const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

    const result = arr.reduce(function (previous, current) {
        if (current > 0) {
            previous *= current;
        } return previous;
    }, 1);

    console.log(`${result} - добуток позитивних елементів`);
}

const task10 = () => {
    const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
    const max = Math.max(...arr);

    const newArr = arr.map(function (item) {
        if (item !== max) {
            return 0
        }
        return item
    });

    console.log(newArr);
}






// task1();
task2_3();
task2_3V2();
// task4();
// task5_8();
// task6_7();
// task9();
// task10();


