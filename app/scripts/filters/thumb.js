'use strict';

app.filter('thumb', function() {
    return function(image, brand) {
        if (image) {
            return image;
        }
        switch (brand.brand) {
            case 'Volkswagen':
                return 'http://www.garrabh.com.br/blog/wp-content/uploads/2014/03/volkswagen-logo.jpg';
            case 'Honda':
                return 'http://www.zeroto60times.com/blog/wp-content/uploads/2013/02/honda-cars-logo-emblem.jpg';
            case 'Ford':
                return 'http://img3.wikia.nocookie.net/__cb20100509162540/blurgame/images/1/1c/Ford.png';
            case 'Chevrolet':
                return 'http://mkalty.org/wp-content/uploads/2014/03/Chevrolet-Logo-HD-Wallpaper.jpg';
            default:
                return 'http://www.exchange3d.com/images/uploads/aff1884/Generic_Car_Upper_01.jpg';
        }
    };
});
