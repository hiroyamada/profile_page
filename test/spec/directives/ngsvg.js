'use strict';

describe('Directive: ngsvg', function () {

  // load the directive's module
  beforeEach(module('profileAngularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ngsvg></ngsvg>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ngsvg directive');
  }));
});
