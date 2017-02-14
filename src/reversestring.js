'use strict';

module.exports = {
	reverseString: function(str) {
		if (typeof str === 'string') {
			if (str.length === 0) {
				return null;
			}

			var result = str.split("").reverse().join("");

			if (result === str) {
				return true;
			}
		}
	}
}