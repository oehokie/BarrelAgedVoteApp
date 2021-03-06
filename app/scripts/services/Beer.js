'use strict';

angular.module('barrelAgedApp')
    .factory('Beer', function ($resource) {
        return {
            getBeers: $resource('/auth/beers'),
            addBeer: $resource('/auth/beers/add/'),
            updateBeer: $resource('/auth/beers/update/'),
            removeBeer: $resource('/auth/beers/remove/:beerId/')
        };
    });