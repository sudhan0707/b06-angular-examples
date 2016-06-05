/* Copyright (C) - All Rights Reserved
 * Written by sgnaneshwar, 5/15/2016
 */
'use strict';

angular
    .module('contacts')
    .controller('createController', function($scope, contactService){

        $scope.contacts = {
            firstName : ['John', 'text'],
            lastName: ['Smith', 'text'],
            email: ['', 'email'],
            phone: ['','tel'],
            website: ['','url'],
            address:['','text']
        };
        $scope.submit = function(person){
           contactService.save(angular.copy(person));
            $scope.person = {};
        }

    })
    .controller('updateController', function($scope, contactService){

        $scope.$watch('person.name', function(newVal, oldVal){
            $scope.person = contactService.search(newVal);
        })

        $scope.submit = function(person){
            console.log("called within Update controller");
            console.log(person);
        }
    })
    .controller('displayController', function($scope, contactService){
        $scope.contacts = contactService.display();
        $scope.person = {};
        $scope.person.name = "Smith";
    })
    .controller('homeController', function($scope){
        $scope.person = {};
        $scope.person.name = "John";
    })
;