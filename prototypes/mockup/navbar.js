$(function() {

	var onchange = function(e) {
		var val = $(e.target).val();
		// $(".filter-content").removeClass("in");

		$(".filter-content").html("<h2>" + val + "</h2>");
		// $(".filter-content").addClass("in");
		if (val === "security") {
			$(".filter-content").append("<br>More content<br><h4>Hooooo </h4>");
		}

		// $(".modal-footer").find(".btn .filter")
	};

	var onselect = function(e) {
		alert("option select");
	};

	$s = $("select").on("change", onchange);

});