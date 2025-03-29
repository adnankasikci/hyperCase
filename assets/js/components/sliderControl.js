function Anasayfa() {
    var splide = document.getElementsByClassName('splide');

    new Splide(splide[0], {
        autoplay: true,
        type: "loop",
        perPage: 1,
        perMove: 1,
        type: 'slide',
        rewind: true,
        speed: 1500,
        arrows:false,
        breakpoints: {
        },
    }).mount();
}