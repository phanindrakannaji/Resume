$(document).ready(function(){
	$('.divExperienceHeading').click(function(){
		$(this).parent().children().last().css("display", "block");
	});
	var span = $(".close")[0];
	$(".close").click(function() {
	    $(this).parent().parent().css("display", "none");
	});
});