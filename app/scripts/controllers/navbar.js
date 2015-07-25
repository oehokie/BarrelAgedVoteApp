'use strict';

angular.module('angularPassportApp')
  .controller('NavbarCtrl', function ($scope, Auth, $location) {
    $scope.menu = [{
      title: 'About',
      link: 'about'
    }];

    $scope.authMenu = [];

    $scope.logout = function() {
      Auth.logout(function(err) {
        if(!err) {
          $location.path('/');
        }
      });
    };
  });
