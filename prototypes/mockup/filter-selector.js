$(function() {

	var onchange = function(e) {
		var val = $(e.target).val();
		// $(".filter-content").removeClass("in");
		$(".filter-content").html("<h2>" + val + "</h2>");
		// $(".filter-content").addClass("in");
	};

	$s = $("select").on("change", onchange);

});