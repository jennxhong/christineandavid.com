$("#party img").on("click", function() {
  var _elementClone = $(this).siblings(".bio").clone()
  _elementClone.appendTo('.modal-body');
  $(".modal-body .bio").toggle();
});

$('#myModal').on('hidden.bs.modal', function (e) {
  $(".modal-body")[0].innerHTML = ""
})

$(".carousel").slick({
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
});