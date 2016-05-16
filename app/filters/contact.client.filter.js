/* Copyright (C) - All Rights Reserved
 * Written by sgnaneshwar, 5/15/2016
 */

'use strict';

angular
    .module('contacts')
    .filter('labelCase', function(){
        return function(input){
            input = input.replace(/([A-Z])/g, ' $1');
            return input[0].toUpperCase() + input.slice(1);
        };
    })