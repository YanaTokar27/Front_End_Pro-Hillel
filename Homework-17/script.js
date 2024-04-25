const modal = $('.modal');
const closeBtn = $('.close');

$('.button').on('click', function () {
    modal.fadeIn('slow').css('display', 'flex')
    closeBtn.fadeIn('slow').css('display', 'flex')
}
)
closeBtn.on('click', function () {
    modal.fadeOut('slow')
    closeBtn.fadeOut('slow')
})