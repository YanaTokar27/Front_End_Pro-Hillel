const prev = document.getElementById('prev');
const next = document.getElementById('next');
const images = document.querySelectorAll('.img')
let activeIndex = 0;

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

function nextSlide() {
    activeIndex++;
    showSlide(activeIndex);
}

function prevSlide() {
    activeIndex--;
    showSlide(activeIndex);
}

function showSlide(activeIndex) {
    images.forEach(function (image, index) {
        if (index === activeIndex) {
            image.classList.remove('hidden');
        } else {
            image.classList.add('hidden');
        }
    });

    if (activeIndex === images.length - 1) {
        showButton(next);
    } else {
        hideButton(next);
    }

    if (activeIndex === 0) {
        showButton(prev);
    } else {
        hideButton(prev);
    }
};

function showButton(button) {
    button.classList.add('trans');
    button.disabled = true;
}

function hideButton(button) {
    button.classList.remove('trans');
    button.disabled = false;
}



