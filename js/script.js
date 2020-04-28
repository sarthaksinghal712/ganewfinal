$(document).ready(function () {
    $(".navbar-toggler").click(function () {
        $(".contentinbstart").slideToggle();
        $(".navbar").toggleClass("bg-dark");
    });

})