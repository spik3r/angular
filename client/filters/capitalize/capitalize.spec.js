'use strict';

describe('capitalize filter', function () {

  beforeEach(module('eiFrontend'));

  var capitalize;

  beforeEach(inject(function ($filter) {
    capitalize = $filter('capitalize');
  }));

  it('should ...', function () {
    var text = 'bangular is awesome';
    expect(capitalize(text)).toBe(text);
  });

});
