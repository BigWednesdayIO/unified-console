angular
	.module('ucApp')
	.constant('ruleTypes', [
		{
			display_name: 'Search listing',
			name: 'search-listing'
		}, {
			display_name: 'Search ranking',
			name: 'search-ranking'
		}, {
			display_name: 'Canned search results',
			name: 'canned-listing'
		}, {
			display_name: 'Redirect',
			name: 'redirects'
		}, {
			display_name: 'Content',
			name: 'content-areas'
		}, {
			display_name: 'Related product listing',
			name: 'related-product-listing'
		}
	]);
