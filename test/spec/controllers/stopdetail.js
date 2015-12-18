'use strict';

describe('Controller: StopdetailCtrl', function () {

  // load the controller's module
  beforeEach(module('profileAngularApp'));

  var StopdetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StopdetailCtrl = $controller('StopdetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StopdetailCtrl.awesomeThings.length).toBe(3);
  });
});
