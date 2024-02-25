const action = prompt('Яку дію Ви хочете зробити + - * / ?');
const firstNum = +prompt('Введіть перше число');
const secondNum = +prompt('Введіть друге число');
const mathAction = `${firstNum} ${action} ${secondNum} = `;


if (!isNaN(firstNum) && !isNaN(secondNum)) {
    if (action === '+') {
        const add = firstNum + secondNum;
        alert(mathAction + add)
    } else if (action === '-') {
        const sub = firstNum - secondNum;
        alert(mathAction + sub)
    } else if (action === '*') {
        const mult = firstNum * secondNum;
        alert(mathAction + mult)
    } else if (action === '/') {
        const div = firstNum / secondNum;
        alert(mathAction + div)
    } else {
        alert(`Дія (${action}) не підтримується`);
    }
} else {
    alert('Для введення можна використовувати тільки цифри');
}
