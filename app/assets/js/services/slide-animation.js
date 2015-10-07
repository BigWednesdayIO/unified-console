function slideAnimation ($q, $timeout, Velocity) {
	return {
		removeClass: function(element, className, done) {
			// Showing
			Velocity(element, 'slideDown', {
				duration: 300,
				easing: 'ease-in-out',
				complete: done
			});
		},
		addClass: function(element, className, done) {
			// Hiding
			Velocity(element, 'slideUp', {
				duration: 300,
				easing: 'ease-in-out',
				complete: done
			});
		}
	};
}

angular
	.module('ucApp')
	.animation('.animate-slide', slideAnimation);
