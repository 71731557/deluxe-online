$(document).on('click', '.s-btn', function () {
    $('.sign-in').addClass('active-sign-in').siblings('.sign-in').removeClass('active-sign-up')
});

$(document).on('click', '.new-btn', function () {
    $('.sign-in').addClass('active-sign-up').siblings('.sign-in').removeClass('active-sign-in')
});

$(document).ready(function () {
    $('.cancel a').click(function () {
        $('.sign-in').removeClass('active-sign-in , active-sign-up')
    })
});