'use strict';

describe('label route', function () {

  beforeEach(function () {
    browser.get('/dashboard/label');
  });

  it('should have a basic content', function () {
    expect(element.all(by.css('div')).first().getText()).toBe('LabelCtrl');
  });

});
