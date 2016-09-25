$(document).ready(function(){
	$("#commandInput").keypress(function(e){
		keypressInBox(e);
	});
	$("#commandInput").focus();
	$(document).on("click", function() {
		$("#commandInput").focus();
	});
})

function keypressInBox(e) {
	var code = (e.keyCode ? e.keyCode : e.which);
	if (code == 13) { //Enter keycode
		e.preventDefault();
		var command = $('#commandInput').val();
		var url = "pages/";
		command = command.trim().toLowerCase().replace(" ","");
		var page = "blank";
		if (command == "resume" || command == "cv" || command == "resumefile"){
			$('.resumePdf')[0].click();
			postEnter("<script type='text/javascript' src='../resources/scripts/refreshScript.js'></script><br/>", page);
		} else{
			if (command == "" || command == null){
				url += "blank.php";
				page="blank";
			} else if (command == "help" || command == "helpme" || command == "info"){
				url += "help.php";
				page = "help";
			} else if (command == "education" || command == "studies" || command == "academics"){
				url += "education.php";
				page = "education";
			} else if (command == "contact" || command == "contactinfo" || 
					command == "contacts" || command == "phonenumber" || 
					command == "email" || command == "phone" ||
					command == "emailaddress" || command == "mobilenumber" || 
					command == "telephone" || command == "mail" || 
					command == "address" || command == "location"){
				url += "contact.php";
				page = "contact";
			} else if (command == "experience" || command == "workexperience" || 
					command == "jobs" || command == "work" ){
				url += "experience.php";
				page = "experience";
			} else if (command == "projects" || command == "project"  || 
					command == "previousprojects"){
				url += "projects.php";
				page = "projects";
			} else if (command == "skills" || command == "skillset" || 
					command == "expertise" || command == "technicalskills"  ){
				url += "skills.php";
				page = "skills";
			} else{
				url += "unknown.php";
				page = "unknown";
			}
			$.ajax({url: url, success: function(result){
				postEnter(result, page);
			}});
		}
	}
};

function postEnter(result, page){
	var refreshScript = "<script type='text/javascript'>$(document).ready(function(){"
	+ "$('#commandInput').keypress(function(e){"
	+ "keypressInBox(e);"
	+ "});"
	+ "})</script>";
	if (page == "contact"){
		$('#commandInput').prop('disabled', true);
		$('#commandInput').removeAttr('id');
		var newDivText = result;
		var commandDivText = "<label class='askcommand customfont' for='commandinput'> I need to"+
		" know about his </label> <input id='commandInput' type='text'"+
		" autocomplete='off' maxLength='20' class='askcommand customfont' />";
		newDiv = document.createElement("div");
		commandDiv = document.createElement("div");
		$(newDiv).addClass("appendDiv")
		.html(newDivText)
		.hide()
		.appendTo($("#active"))
		.fadeIn(2000, function(){
			$(commandDiv).addClass("appendDiv")
			.html(commandDivText+refreshScript)
			.hide()
			.appendTo($("#active"))
			.fadeIn(500);
			$('#commandInput').focus();
		})
	} else if (page == "experience"){
		$('#commandInput').prop('disabled', true);
		$('#commandInput').removeAttr('id');
		var newDivText = result;
		var commandDivText = "<label class='askcommand customfont' for='commandinput'> I need to"+
		" know about his </label> <input id='commandInput' type='text'"+
		" autocomplete='off' maxLength='20' class='askcommand customfont' />";
		newDiv = document.createElement("div");
		commandDiv = document.createElement("div");
		$(newDiv).addClass("appendDiv")
		.html(newDivText)
		.hide()
		.appendTo($("#active"))
		.fadeIn(2000, function(){
			$(commandDiv).addClass("appendDiv")
			.html(commandDivText+refreshScript)
			.hide()
			.appendTo($("#active"))
			.fadeIn(500);
		})
	} else if (page == "blank"){
		$('#commandInput').prop('disabled', true);
		$('#commandInput').removeAttr('id');
		var commandDivText = result+"<label class='askcommand customfont' for='commandinput'> I need to"+
		" know about his </label> <input id='commandInput' type='text'"+
		" autocomplete='off' maxLength='20' class='askcommand customfont' />";
		commandDiv = document.createElement("div");
		$(commandDiv).addClass("appendDiv")
		.html(commandDivText)
		.hide()
		.appendTo($("#active"))
		.fadeIn(500)
		$('#commandInput').focus();
	} else{
		$('#commandInput').prop('disabled', true);
		$('#commandInput').removeAttr('id');
		var newDivText = result;
		var commandDivText = "<label class='askcommand customfont' for='commandinput'> I need to"+
		" know about his </label> <input id='commandInput' type='text'"+
		" autocomplete='off' maxLength='20' class='askcommand customfont' />";
		newDiv = document.createElement("div");
		commandDiv = document.createElement("div");
		$(newDiv).addClass("appendDiv")
		.html(newDivText)
		.hide()
		.appendTo($("#active"))
		.fadeIn(2000, function(){
			$(commandDiv).addClass("appendDiv")
			.html(commandDivText+refreshScript)
			.hide()
			.appendTo($("#active"))
			.fadeIn(500);
			$('#commandInput').focus();
		})
	}
	$('html, body').scrollTop( $(document).height() );
	$('#commandInput').focus();
}