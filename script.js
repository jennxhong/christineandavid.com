$("#party img").on("click", function() {
  var _elementClone = $(this).siblings(".bio").clone()
  _elementClone.appendTo('.modal-body');
  $(".modal-body .bio").toggle();
});

$('#myModal').on('hidden.bs.modal', function (e) {
  $(".modal-body")[0].innerHTML = ""
})

$(".carousel").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
});