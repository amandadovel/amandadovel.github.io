$(document).ready(function () {
    $('.carousel').carousel();
    $('input#input_text, textarea#textarea2').characterCounter();
});

// sticky header 

// var header = document.getElementById("stickyheader");
// var sticky = header.offsetTop;

// function stickyHeader() {
//     if (window.pageYOffset > sticky) {
//         header.classList.add("sticky");
//     } else {
//         header.classList.remove("sticky");
//     }
// }

// window.onscroll = function () {
//     stickyHeader();
// }