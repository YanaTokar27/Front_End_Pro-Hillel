const hourString = +prompt('Скільки зараз годин?');
const hour = +hourString;


if (hourString !== '' && !isNaN(hour) && hour >= 0) {
    // if (hourString !== 'Nan') {
    const seconds = hour * 3600;
    alert(seconds + ' секунд');
} else {
    alert('Для введення можна використовувати тільки цифри');
}
