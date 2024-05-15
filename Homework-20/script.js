class SuperMath {
    input() {
        const x = parseInt(prompt('Ведіть перше число'));
        const y = parseInt(prompt('Ведіть друге число'));
        const z = prompt('Ведіть дію');

        this.check({ x: x, y: y, z: z })
    }

    check(obj) {
        const x = obj.x
        const y = obj.y
        const z = obj.z

        const validZnaks = ['+', '-', '*', '/', '%']

        if (!validZnaks.includes(z)) {
            alert('Операція не валідна')
            return;
        }
        if (isNaN(x) || isNaN(y)) {
            alert('Введіть коректні числа');
            return;
        }

        const diya = confirm(`Чи ви хочете зробити дію ${x} ${z} ${y}`)

        if (diya) {

            let result;
            switch (z) {
                case '+':
                    result = x + y;
                    break;
                case '-':
                    result = x - y;
                    break;
                case '*':
                    result = x * y;
                    break;
                case '/':
                    if (y !== 0) {
                        result = x / y;
                    } else {
                        console.log('Ділення на нуль неможливе');
                        return;
                    }
                    break;
                case '%':
                    result = x % y;
                    break;
                default:
                    console.log('Невідома операція');
                    return;
            }
            alert(result);
        } else {
            this.input()
        }
    }
}

const math1 = new SuperMath();
math1.check({ x: 3, y: 2, z: '+' })


