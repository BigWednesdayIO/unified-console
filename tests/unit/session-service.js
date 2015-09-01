describe('SessionService', function() {
	var session,
		browserStorage;

	beforeEach(module('ucApp'));

	beforeEach(inject(function(_session_, _browserStorage_) {
		// The injector unwraps the underscores (_) from around the parameter names when matching
		browserStorage = _browserStorage_;
		session = _session_;
	}));

	describe('a valid session', function() {
		beforeEach(function() {
			browserStorage.setItem('session_token', ':token');
			browserStorage.setItem('user_id', ':id');
		});

		it('should exist', function() {
			expect(session.exists()).toBeTruthy();
		});

		it('should return info', function() {
			var info = session.getInfo();
			expect(info.token).toEqual(':token');
			expect(info.user_id).toEqual(':id');
		});

		it('should be destroyable', function() {
			session.destroy();
			expect(session.exists()).toBeFalsy();
		});
	});

	describe('an invalid session', function() {
		it('should not exist', function() {
			expect(session.exists()).toBeFalsy();
		});

		it('should not return info', function() {
			var info = session.getInfo();
			expect(info.token).toBeFalsy();
			expect(info.user_id).toBeFalsy();
		});
	});

	describe('creating a new session', function() {
		it('should not exist to begin with', function() {
			expect(session.exists()).toBeFalsy();
		});

		it('should accept credentials', function() {
			session.storeInfo({
				token: 'my token',
				user: {
					id: 'my id'
				}
			});
		});

		it('should subsequently exist', function() {
			expect(session.exists()).toBeTruthy();
		});
	});
});
