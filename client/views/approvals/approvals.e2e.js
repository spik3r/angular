'use strict';

describe('approvals route', function () {

  beforeEach(function () {
    browser.get('/approvals');
  });

  it('should have a basic content', function () {
    expect(element.all(by.css('div')).first().getText()).toBe('ApprovalsCtrl');
  });

});
