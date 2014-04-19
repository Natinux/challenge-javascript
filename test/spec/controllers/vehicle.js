'use strict';

describe('Controller: VehicleController', function() {

    beforeEach(module('challengeApp'));

    var VehicleController,
        scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        VehicleController = $controller('VehicleController', {
            $scope: scope
        });
    }));

    it('should attach a list of colors', function() {
        expect(scope.colors.length).toBe(12);
    });

    it('should attach a list of branch cars', function () {
        expect(scope.brands.length).toBe(4);
    });

    it('should load initial data of cars', function () {
        expect(scope.cars[0]).toEqual({
            "fuel": "Flex",
            "image": null,
            "brand": "Volkswagen",
            "model": "Gol",
            "registrationPlate": "FFF­-5498",
            "color": "Prata"
        });
    });

});
