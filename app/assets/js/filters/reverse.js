angular
	.module('ucApp')
	.filter('reverse', function() {
		return function(items) {
			return items.slice().reverse();
		};
	});
