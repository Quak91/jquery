$(document).ready(function (){

	$("#form").submit(function() {
		var isValid = true;
		$("#mail").validateEmail();
		$("#firstname").validatePattern({pattern: /^Jan|Piotr|Alicja|Katarzyna|Michał$/i });
		$("#lastname").validatePattern({pattern: /^[A-ZĘÓĄŚŁŻŹĆŃ][a-zęóąśłżźćń]{2,}$/ });
		$("#password").validatePassword();
		
		if($("#mail, #firstname, #lastname, #password").hasClass("wrong")) { isValid = false; }

		if(isValid === false) { return false; }
	});

	$("#password").keyup(function() {
		$("#password").validatePassword();
		if($("#password").hasClass("wrong")) {
			$("#pwd_strength").text("Słabe hasło");
		} else {
			$("#pwd_strength").text("Dobre hasło");
		}
	});

});