function TimelineController () {
	var vm = this;

	vm.timeline = [
		{
			name: 'Today',
			events: [
				{
					time: '2015-10-05T10:30:00',
					outlet: 'Red Lion',
					location: 'Holywell',
					value: 2113.68,
					difference: 138.45
				}, {
					time: '2015-10-05T10:14:00',
					outlet: 'Old Plough',
					location: 'Norwich',
					value: 1456.45,
					difference: 287.75
				}, {
					time: '2015-10-05T10:00:00',
					outlet: 'Queens Arms',
					location: 'Daventry',
					value: 3211.83,
					difference: 26.10
				}, {
					time: '2015-10-05T09:48:00',
					outlet: 'The Masons Arms',
					location: 'Battersea',
					value: 977.35,
					difference: -88.67
				}, {
					time: '2015-10-05T09:33:00',
					outlet: 'The Mucky Duck',
					location: 'Horsham',
					value: 3444.20,
					difference: 411.56
				}, {
					time: '2015-10-05T09:22:00',
					outlet: 'The Advocate',
					location: 'Edinburgh',
					value: 2883.66,
					difference: 333.45
				}
			]
		}, {
			name: 'Yesterday',
			events: [
				{
					time: '2015-10-05T10:00:00',
					outlet: 'Queens Arms',
					location: 'Daventry',
					value: 3211.83,
					difference: 26.10
				}, {
					time: '2015-10-05T09:48:00',
					outlet: 'The Masons Arms',
					location: 'Battersea',
					value: 977.35,
					difference: -88.67
				}, {
					time: '2015-10-05T09:33:00',
					outlet: 'The Mucky Duck',
					location: 'Horsham',
					value: 3444.20,
					difference: 411.56
				}, {
					time: '2015-10-05T09:22:00',
					outlet: 'The Advocate',
					location: 'Edinburgh',
					value: 2883.66,
					difference: 333.45
				}
			]
		}
	];
}

angular
	.module('ucApp')
	.controller('TimelineController', TimelineController);
