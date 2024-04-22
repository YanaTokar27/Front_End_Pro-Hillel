const task1 = () => {
    console.log($('div').eq(0));
    console.log($('.wrap').eq(1));
    console.log($('#btn').eq(0));
}

const task2 = () => {
    console.log($('.wrap').find('p'));
}

const task3 = () => {       //виводить дітей на одному рівні (буз заглиблення)
    console.log($('body').children());
}

const task4 = () => {     //наступний елемент на тому ж рівні
    console.log($('.wrap').next());
}

const task5 = () => {    //усі наступні елементи після
    console.log($('.wrap').nextAll());
}

const task6 = () => {   //усі елементи після .wrap до script
    console.log($('.wrap').nextUntil('script'));
}

const task7 = () => {      //усі сусіди, що лежать на одному рівні
    console.log($('.wrap').siblings());
}

const task8 = () => {        //послідовність вкладення
    console.log($('.wrap').parent());
    console.log($('.wrap').parents());
}

const task9 = () => {         //додавання класу
    console.log($('div').eq(2).addClass('new'));
}

const task10 = () => {      //керування css
    console.log($('.wrap').css('border', '2px solid red'));
}

const task11 = () => {      //додавання нового блока з контентом
    console.log($('.new').html('<p>New content <em> You best! </em></p>').css('color', 'red'));
    console.log($('.new').html());
}

const task12 = () => {    //вводимо значення в input -> потім команду в devTools
    console.log($('input').val());
}

const task13 = () => {        //додавання елементу в кінець елементу
    console.log($('.animal').append('<p>Horse</p>'));
    // console.log($('<p>Horse</p>').appendTo('.animal'));
}

const task14 = () => {           //додавання елементу одразу після елементу
    console.log($(".animal").after("<p>Pig</p>"));
    // console.log($('<p>Pig</p>').insertAfter('.animal'));
}

const task15 = () => {       //on click
    console.log($("#btn").css('height', '20px').on('click', function () {
        console.log("Click");
    }))
}

const task16 = () => {       //анімація інпута при кліку на кнопку
    $("#btn").click(function () {
        $("input").animate({
            opacity: 0.25,
            left: "+=50",
            height: "toggle"
        }, 5000, function () {
            // Animation complete.
        });
    });
}




// task1();
// task2();
// task3();
// task4();
// task5();
// task6();
// task7();
// task8();
// task9();
// task10();
// task11();
// task12();
// task13();
task14();
task15();
task16();

