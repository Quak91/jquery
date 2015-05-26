(function ($) {

	/*
		tutaj będą funkcje do walidacji:
		- na podstawie wyrażenia regularnego
		- pola email
		- na podstawie złożoności hasła
	*/

	$.fn.validateEmail = function() {
		return this.each(function() {
			var pattern = /^[0-9a-zA-Z-_\.]+@[0-9a-zA-Z-_\.]+\.[a-zA-Z]{2,}$/;
			if(pattern.test($(this).val())) {
				$(this).removeClass("wrong");
				$(this).addClass("ok");
			}
			else {
				$(this).removeClass("ok");
				$(this).addClass("wrong");
			}
		});
	};

})(jQuery);