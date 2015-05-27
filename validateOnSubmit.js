$(document).ready(function (){

	$("#form").submit(function() {

		var isValid = true;

		$("#mail").validateEmail();
		$("#firstname").validatePattern({pattern: /^Jan|Piotr|Alicja|Katarzyna|Michał$/i });
		$("#lastname").validatePattern({pattern: /^[A-ZĘÓĄŚŁŻŹĆŃ][a-zęóąśłżźćń]{2,}$/ });
		
		if($("#mail, #firstname, #lastname").hasClass("wrong")) { isValid = false; }

		if(isValid === false) { return false; }

	});

});