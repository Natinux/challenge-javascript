'use strict';





app.controller('VehicleController', function($scope, initialData, colors, fuels, brands) {
    $scope.cars = initialData;
    $scope.colors = colors;
    $scope.fuels = fuels;
    $scope.brands = brands;

    $scope.carsModels = {};
    $scope.car = {};
    $scope.currentPage = 0;
    $scope.pageSize = 5;
    $scope.registrationPlateError,
    $scope.brandError,
    $scope.modelError  = false;
    $scope.editBtn = false;

    //change to directive
    $scope.getCars = function () {
        delete $scope.car.model;
        $scope.carsModels = ($scope.car.brand !== null) ? $scope.car.brand.models : '';
        return $scope.carsModels;
    };

    //change to filter
    $scope.getImage = function () {
        return $scope.car.image;
    };

    $scope.deleteCar = function (index) {
        $scope.cars.splice(index, 1);
    }

    $scope.cancel = function () {
        $scope.editBtn = false;
        document.getElementById("vehicle-form").reset();
    }

    $scope.editCar = function (index) {
        $scope.editBtn = true;
        console.log($scope.cars[index]);

        $scope.car.registrationPlate = $scope.cars[index].registrationPlate;
        $scope.car.image = $scope.cars[index].image;
        $scope.car.brand = $scope.cars[index].brand;
        $scope.car.model = $scope.cars[index].model;
        $scope.car.color = $scope.cars[index].color;
        $scope.car.fuel = $scope.cars[index].fuel;
    }

    $scope.add = function() {
        $scope.registrationPlateError = (!$scope.car.registrationPlate) ? true : false ;
        $scope.brandError = (!$scope.car.brand) ? true : false ;
        $scope.modelError = (!$scope.car.brand) ? true : false ;
        if($scope.car.brand) {
            $scope.modelError = (!$scope.car.model) ? true : false ;
        }

        if(!this.brandError && !this.modelError && !this.registrationPlateError){
            $scope.cars.push({
                'fuel': $scope.car.fuel,
                'image': $scope.getImage(),
                'brand': $scope.car.brand.name,
                'model': $scope.car.model,
                'registrationPlate': $scope.car.registrationPlate,
                'color': $scope.car.color
            });

            $scope.car = null;
        }
    };


    $scope.numberOfPages=function(){
        return Math.ceil($scope.cars.length/$scope.pageSize);
    };



    console.log(Math.floor(Math.random(0,100)*1000));
    console.log('-----');
    console.log($scope);
});
