'use strict';

describe('profile route', function () {

  beforeEach(function () {
    browser.get('y');
  });

  it('should have a basic content', function () {
    expect(element.all(by.css('div')).first().getText()).toBe('ProfileCtrl');
  });

});
