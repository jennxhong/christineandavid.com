$("#party img").on("click", function() {
  $(this).siblings(".bio").toggle();
});

$("#party .close").on("click", function() {
  $(this).parents(".bio").toggle();
});

$(".carousel").slick({
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
});