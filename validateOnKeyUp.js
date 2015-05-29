$(document).ready(function (){

	function checkIsValid() {
		if($("#mail, #firstname, #lastname, #password").hasClass("wrong")) {
			$("#submit").attr("disabled", "true");
		} else {
			$("#submit").removeAttr("disabled");
		}
	}

	checkIsValid();

	$("#mail").keyup(function() {
		$("#mail").validateEmail();
		checkIsValid();
	});

	$("#firstname").keyup(function() {
		$("#firstname").validatePattern({pattern: /^Jan$|^Piotr$|^Alicja$|^Katarzyna$|^Michał$/i });
		checkIsValid();
	});

	$("#lastname").keyup(function() {
		$("#lastname").validatePattern({pattern: /^[A-ZĘÓĄŚŁŻŹĆŃ][a-zęóąśłżźćń]{2,}$/ });
		checkIsValid();
	});

	$("#password").keyup(function() {
		$("#password").validatePassword();
		if($("#password").hasClass("wrong")) {
			$("#pwd_strength").text("Słabe hasło");
		} else {
			$("#pwd_strength").text("Dobre hasło");
		}
		checkIsValid();
	});

});