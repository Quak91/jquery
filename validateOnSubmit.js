$(document).ready(function (){

	$("#form").submit(function() {

		var isValid = true;

		$("#mail").validateEmail();
		
		if($("#mail").hasClass("wrong")) { isValid = false; }

		if(isValid === false) { return false; }

	});

});