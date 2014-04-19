'use strict';

app.controller('VehicleController', function($scope) {
    //put all in factories.
    $scope.colors = [
        { 'label': 'Amarelo', 'code': '#f1c40f' },
        { 'label': 'Azul', 'code': '#3498db'},
        { 'label': 'Branco', 'code': '#ecf0f1'},
        { 'label': 'Cinza', 'code': '#95a5a6'},
        { 'label': 'Laranja', 'code': '#e67e22'},
        { 'label': 'Marrom', 'code': '#5c3d3b'},
        { 'label': 'Prata', 'code': '#bdc3c7'},
        { 'label': 'Preto', 'code': '#050505'},
        { 'label': 'Rosa', 'code': '#ff80ab'},
        { 'label': 'Roxo', 'code': '#8e44ad'},
        { 'label': 'Verde', 'code': '#27ae60'},
        { 'label': 'Vermelho', 'code': '#c0392b'}
    ];

    $scope.fuels = [ 'Flex', 'Alcool', 'Gasolina' ];

    $scope.brands = [
        {
            'name': 'Ford',
            'models': [
                'Ecosport',
                'Fiesta',
                'Ranger'
            ],
        },
        {
            'name': 'Chevrolet',
            'models': [
                'Corsa',
                'Prisma',
                'Corsa Classic',
                'S10'
            ],
        },
        {
            'name': 'Honda',
            'models': [
                'Accord',
                'Civic',
                'City',
                'Fit'
            ],
        },
        {
            'name': 'Volkswagen',
            'models': [
                'Fox',
                'Fusca',
                'Gol'
            ],
        }
    ];

    $scope.cars = [ 
        {
            "fuel": "Flex",
            "image": null,
            "brand": "Volkswagen",
            "model": "Gol",
            "registrationPlate": "FFF­-5498",
            "color": "Prata"
        },
        { 
            "fuel": "Gasolina",
            "image": null,
            "brand": "Volkswagen",
            "model": "Fox",
            "registrationPlate": "FOX­-4125",
            "color": "Preto"
        },
        { 
            "fuel": "Alcool",
            "image": "http://www.sindicond.com.br/sindicond/files/noticia/new/volkswagen-fusca-1363209555530_956x500.jpg",
            "brand": "Volkswagen",
            "model": "Fusca",
            "registrationPlate": "PAI­-4121",
            "color": "Azul"
          }
    ];

    //-------
    $scope.carsModels = [];
    $scope.car = [];
    $scope.currentPage = 0;
    $scope.pageSize = 5;

    //change to directive
    $scope.getCars = function () {
        delete $scope.car.model;
        $scope.carsModels = ($scope.car.brand !== null) ? $scope.car.brand.models : '';
        console.log($scope.car);
        return $scope.carsModels;
    }

    //change to filter
    $scope.getImage = function () {
        return $scope.car.image;
    }

    $scope.add = function() {
        $scope.cars.push({
            "fuel": $scope.car.fuel,
            "image": $scope.getImage(),
            "brand": $scope.car.brand.name,
            "model": $scope.car.model,
            "registrationPlate": $scope.car.registrationPlate,
            "color": $scope.car.color.label
        });
        console.log($scope.cars);
   };


    $scope.numberOfPages=function(){
        return Math.ceil($scope.cars.length/$scope.pageSize);
    }



    console.log(Math.floor(Math.random(0,100)*1000));
    console.log($scope);
});


