'use strict';

describe('export route', function () {

  beforeEach(function () {
    browser.get('/export');
  });

  it('should have a basic content', function () {
    expect(element.all(by.css('div')).first().getText()).toBe('ExportCtrl');
  });

});
