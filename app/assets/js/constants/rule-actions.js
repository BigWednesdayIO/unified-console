angular
	.module('ucApp')
	.constant('ruleActions', {
		'search-listing': [
			{
				title: 'How does this rule add and re-order search results?',
				component: 'tier-listing',
				label: 'Edit result tiers'
			}, {
				title: 'Which results should be removed?',
				component: 'remove-from-listing',
				label: 'Edit removed results'
			}
		],
		'search-ranking': [
			{
				title: 'How will results be ranked?',
				component: 'ranking',
				label: 'Edit ranking'
			}
		],
		'canned-listing': [
			{
				title: 'Replace natural results',
				component: 'canned-listing',
				label: 'Edit canned listing'
			}
		],
		'redirects': [
			{
				title: 'Where does the rule redirect users to?',
				component: 'redirect',
				label: 'Edit redirect'
			}
		],
		'content-areas': [
			{
				title: 'What content does this rule display?',
				component: 'content',
				label: 'Edit page content'
			}
		],
		'related-product-listing': [
			{
				title: 'How does this rule add and re-order related products?',
				component: 'tier-listing',
				label: 'Edit product tiers'
			}, {
				title: 'Which related products should be removed?',
				component: 'remove-from-listing',
				label: 'Edit removed products'
			}
		],
		'canned-related-products': [
			{
				title: 'Replace related products',
				component: 'canned-listing',
				label: 'Edit canned products'
			}
		]
	});
