'use strict';

app.factory("brands", function () {
    var brands = {};
    brands = [
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
    return brands;
});
