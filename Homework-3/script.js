const year = +prompt('Введіть Ваш рік народження');
const city = prompt('В якому місті Ви живете?');
const sport = prompt('Який Ваш улюблений вид спорту?');
const currentYear = new Date().getFullYear();
let finalText = '';


if (year && year < currentYear && year >= 1924) {
    const age = currentYear - year;
    finalText += `Твій вік ${age} роки(ів). `;
}
else {
    finalText += ('Шкода, що Ви не захотіли ввести свій рік народження. ')
}

if (city) {
    if (city === 'Київ' && city) {
        finalText += `Ти живеш у столиці України. `;
    } else if (city === 'Вашингтон' && city) {
        finalText += `Ти живеш у столиці США. `;
    } else if (city === 'Лондон' && city) {
        finalText += `Ти живеш у столиці Англії. `;
    } else {
        finalText += `Ти живеш у місті ${city}. `;
    }
} else {
    finalText += ('Шкода, що Ви не захотіли ввести місто у якому проживаєте. ');
}

if (sport) {
    if (sport === 'теніс') {
        finalText += 'Круто! Хочеш бути як Еліна Світоліна?';
    } else if (sport === 'фігурне катання') {
        finalText += 'Круто! Хочеш бути як Каорі Сакамото?';
    } else if (sport === 'художня гімнастика') {
        finalText += 'Круто! Хочеш бути як Дарʼя Варфоломеєв?';
    } else {
        finalText += `Чим привернув твою увагу ${sport}?`;
    }
} else {
    finalText += ('Шкода, що Ви не захотіли ввести свій улюблений вид спорту.');
}

alert(finalText);


// switch (sport) {
//     case 'Теніс':
//         alert('Круто! Хочеш бути як Еліна Світоліна?');
//         break;
//     case 'Фігурне катання':
//         alert('Круто! Хочеш бути як Еліна Світоліна?');
//         break;
//     case 'Художня гімнастика':
//         alert('Круто! Хочеш бути як Еліна Світоліна?');
//         break;
//     default:
//         alert(`Чим привернув твою увагу ${sport}?`);
// }

