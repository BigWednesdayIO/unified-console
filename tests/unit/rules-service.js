describe('rulesService', function() {
	var rulesService;

	beforeEach(module('ucApp'));

	describe('rulesService.ruleIsPublished', function() {
		beforeEach(inject(function(_rulesService_) {
			rulesService = _rulesService_;
		}));

		it('is true when updated and published match', function() {
			expect(rulesService.ruleIsPublished(rulesData[0])).toBeTruthy();
		});

		it('is true when published is after updated', function() {
			expect(rulesService.ruleIsPublished(rulesData[1])).toBeTruthy();
		});

		it('is false when updated is after published', function() {
			expect(rulesService.ruleIsPublished(rulesData[2])).toBeFalsy();
		});

		it('is false when never published', function() {
			expect(rulesService.ruleIsPublished(rulesData[3])).toBeFalsy();
		});
	});
});
