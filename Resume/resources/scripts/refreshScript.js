$(document).ready(function(){
	$("#commandInput").keypress(function(e){
		keypressInBox(e);
	});
	$("#commandInput").focus();
})