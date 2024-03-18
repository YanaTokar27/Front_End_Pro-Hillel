const task1 = () => {
    function pow(num, degree) {

        return degree == 1 ? num * pow(num, degree - 1) : num

        // if (degree == 1) {
        //     return num *= pow(num, degree - 1)
        // }

        // return num
    }

    console.log(pow(8, 2));
}

task1();


