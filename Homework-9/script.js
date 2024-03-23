const task1 = () => {
    function getSum() {
        let count = 0;

        return function (num) {
            return count += num;
        }
    }

    let sum = getSum();
    console.log(sum(3));
    console.log(sum(5));
    console.log(sum(20));
}


task1();
