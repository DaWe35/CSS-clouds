
/*
The next line returns the number of CPU cores. In 2020, there is no other way to detect the user computer performance :(
let cores = window.navigator.hardwareConcurrency;
*/

$(window).scroll(function() {
    if ($(window).scrollTop() < 100) {
        $("#cloud-back").css('box-shadow', '100vw 110vh 30px 0px #fff')
    } else {
        $("#cloud-back").css('box-shadow', '100vw 110vh 200px -100px #fff')
    }
});