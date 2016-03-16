$("#party button").on("click", function() {
  $(this).siblings(".bio").toggle();
});

$("#party .close").on("click", function() {
  $(this).parents(".bio").toggle();
});

// $("#party img").hover(
// 	function() {
//   		$(this).siblings("button").show();
//   		$(this).hide();
// 	}
// );