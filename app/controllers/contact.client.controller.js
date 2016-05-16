/* Copyright (C) - All Rights Reserved
 * Written by sgnaneshwar, 5/15/2016
 */
'use strict';

angular
    .module('contacts')
    .controller('contactController', function($scope, contactService){
        var _contactIt = {};
        _contactIt.contacts = contactService.contacts;
        _contactIt.header = Object.keys(contactService.contacts[0]);
        $scope.contactIt = _contactIt;
    });