function BasketDrawerController () {
	var vm = this;

	vm.baskets = [
		{
			delivery: {
				date: '2015-02-16T09:00'
			}
		}, {
			delivery: {
				date: '2015-02-23T09:00'
			}
		}, {
			delivery: {
				date: '2015-03-02T09:00'
			}
		}, {
			delivery: {
				date: '2015-03-09T09:00'
			}
		}
	]
}

angular
	.module('ucApp')
	.controller('BasketDrawerController', BasketDrawerController);
