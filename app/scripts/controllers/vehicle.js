'use strict';

angular.module('challengeApp')
    .controller('VehicleCtrl', function($scope) {

        $scope.colors = [
            {'Amarelo': 'FF00FF'},
            {'Azul': 'FF00FF'},
            {'Branco': 'FF00FF'},
            {'Cinza': 'FF00FF'},
            {'Laranja': 'FF00FF'},
            {'Marrom': 'FF00FF'},
            {'Prata': 'FF00FF'},
            {'Preto': 'FF00FF'},
            {'Rosa': 'FF00FF'},
            {'Roxo': 'FF00FF'},
            {'Verde': 'FF00FF'},
            {'Vermelho': 'FF00FF'}
        ];
    });
