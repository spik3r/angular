'use strict';

describe('searchFilter filter', function () {

  beforeEach(module('eiFrontend'));

  var searchFilter;

  beforeEach(inject(function ($filter) {
    searchFilter = $filter('searchFilter');
  }));

  it('should ...', function () {
    var text = 'bangular is awesome';
    expect(searchFilter(text)).toBe(text);
  });

});
