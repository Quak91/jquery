(function ($) {

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

	$.fn.validatePattern = function(options) {
		return this.each(function() {
			if(options.pattern.test($(this).val())) {
				$(this).removeClass("wrong");
				$(this).addClass("ok");
			}
			else {
				$(this).removeClass("ok");
				$(this).addClass("wrong");
			}
		});
	};

	$.fn.validatePassword = function() {
		return this.each(function() {
			var password = $(this).val().toLowerCase(); // dla ułatwienia hasło nie zawiera wielkich liter
			var points = 0;

			var numberOfCharacters = 0;
			var lettersAndDigits = 0;
			var symbols = 0;
			var lettersOnly = 0;
			var digitsOnly = 0;
			var symbolsOnly = 0;
			var repeatCharacters = 0;

			// za każdy znak dodaję 5pkt
			numberOfCharacters = password.length * 5;

			// jeżeli hasło zawiera conajmniej 1 literę i 1 cyfrę to dodaję 1 pkt za każdy znak
			if((/[0-9]/).test(password) && (/[a-z]/).test(password)) {
				lettersAndDigits = password.length;
			}

			// jeżeli hasło składa się z samych liter/cyfr/znaków specjalnych to odejmuję 1pkt za każdy znak
			if((/^[0-9]+$/).test(password)) digitsOnly = password.length;
			if((/^[a-z]+$/).test(password)) lettersOnly = password.length;
			if((/^[\W]+$/).test(password)) symbolsOnly = password.length;

			// jeżeli hasło nie składa się z samych znaków specjalnych to za każdy znak specjalny dodaję 2pkt
			if((/\W/).test(password) && symbolsOnly === 0) {
				symbols = password.match(/\W/g).length * 2;
			}

			// odejmuję 2pkt za każdy powtarzający się znak
			var differentSymbols = [];
			var isDiff;
			for(var i=0; i<password.length; i++) {
				isDiff = true;
				for(var j=0; j<=differentSymbols.length; j++) {
					if(password.charAt(i) == differentSymbols[j])
						isDiff = false;
				}
				if(isDiff === true)
					differentSymbols.push(password.charAt(i));
			}
			repeatCharacters = (password.length - differentSymbols.length) * 2;

			points = numberOfCharacters + lettersAndDigits + symbols - repeatCharacters - lettersOnly - digitsOnly - symbolsOnly;
			console.log(points);

			if(points > 50) {
				$(this).removeClass("wrong");
				$(this).addClass("ok");
			} else {
				$(this).removeClass("ok");
				$(this).addClass("wrong");
			}
		});
	};

})(jQuery);