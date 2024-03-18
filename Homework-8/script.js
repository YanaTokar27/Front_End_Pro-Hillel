const task1 = () => {
    function pow(num, degree) {

        return degree === 1 ? num : num * pow(num, degree - 1)

        // if (degree === 1) {
        //     return num
        // }
        // return num *= pow(num, degree - 1)
    }

    console.log(pow(3, 3));
}

task1();


