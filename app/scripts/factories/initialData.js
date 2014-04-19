'use strict';

app.factory("initialData", function () {
    var initialData = {};
    initialData = [
        {
            'fuel': 'Flex',
            'image': null,
            'brand': 'Volkswagen',
            'model': 'Gol',
            'registrationPlate': 'FFF­-5498',
            'color': 'Prata'
        },
        {
            'fuel': 'Gasolina',
            'image': null,
            'brand': 'Volkswagen',
            'model': 'Fox',
            'registrationPlate': 'FOX­-4125',
            'color': 'Preto'
        },
        { 
            'fuel': 'Alcool',
            'image': 'http://www.sindicond.com.br/sindicond/files/noticia/new/volkswagen-fusca-1363209555530_956x500.jpg',
            'brand': 'Volkswagen',
            'model': 'Fusca',
            'registrationPlate': 'PAI­-4121',
            'color': 'Azul'
        }
    ];

    return initialData;
});
