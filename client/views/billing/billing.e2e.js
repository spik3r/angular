'use strict';

describe('billing route', function () {

  beforeEach(function () {
    browser.get('/billing');
  });

  it('should have a basic content', function () {
    expect(element.all(by.css('div')).first().getText()).toBe('BillingCtrl');
  });

});
