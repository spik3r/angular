'use strict';

/**
 * Created by Kai on 11/11/2015.
 */
describe('Test Login', function () {

    var userInput = element(by.css('[ng-model="ctrl.login.username"]'));

    beforeEach(function () {
        browser.get('http://localhost:9000/login');
    });

    it('Username box present', function () {
        expect(userInput).not.toBe(undefined);
    });

});
