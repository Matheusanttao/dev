$(function () {
    $('.popup-vimeo').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});
function loadVideo() {
    document.querySelector('.thumbnail').style.display = 'none';
    let iframe = document.getElementById('videoFrame');
    iframe.src = "https://www.youtube.com/embed/JxXY34TP8XI";
    iframe.style.display = 'block';
}