'use strict';

describe('Directive: place', function () {

  // load the directive's module
  beforeEach(module('leaderboardApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<place></place>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('');
  }));
});
