const task1 = () => {         //navigator
    navigator.geolocation.getCurrentPosition(function (position) {
        console.log('широта', position.coords.latitude);
        console.log('довгота', position.coords.longitude);
    });
}

const task2 = () => {          //browser
    function fnBrowserDetect() {

        let userAgent = navigator.userAgent;
        let browserName;

        if (userAgent.match(/chrome|chromium|crios/i)) {
            browserName = "chrome";
        } else if (userAgent.match(/firefox|fxios/i)) {
            browserName = "firefox";
        } else if (userAgent.match(/safari/i)) {
            browserName = "safari";
        } else if (userAgent.match(/opr\//i)) {
            browserName = "opera";
        } else if (userAgent.match(/edg/i)) {
            browserName = "edge";
        } else {
            browserName = "No browser detection";
        }

        console.log(browserName);
    }
    fnBrowserDetect();
}

const task3 = () => {         //reload
    const reloadButton = document.querySelector('button');

    reloadButton.addEventListener('click', function () {
        location.reload();
    })
}

const task4 = () => {        //href
    const reloadButton = document.querySelector('button');

    reloadButton.addEventListener('click', function () {
        console.log(location.href);
    })
}

const task5 = () => {       //screen
    const reloadButton = document.querySelector('button');

    reloadButton.addEventListener('click', function () {
        console.log(screen);
    })
}

const task6 = () => {        //clipboard
    const btn = document.getElementById('btn');

    btn.addEventListener('click', function () {
        const copyText = document.getElementById("myInput");

        navigator.clipboard.writeText(copyText.value);

        alert("Copied the text: " + copyText.value);
    })
}

const task7 = () => {       //scroll
    window.addEventListener('scroll', function (e) {
        console.log(this.scrollY);
    });
}

const task8 = () => {       //scroll - up
    document.querySelector('.up').addEventListener('click', function () {
        window.scroll(0, 0)
    })
}





// task1();
// task2();
// task3();
// task4();
task5();
// task6();
// task7();
// task8();
