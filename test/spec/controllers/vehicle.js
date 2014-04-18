'use strict';

describe('Controller: VehicleCtrl', function() {

    beforeEach(module('challengeApp'));

    var VehicleCtrl,
        scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        VehicleCtrl = $controller('VehicleCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of colors', function() {
        expect(scope.colors.length).toBe(12);
    });
});
