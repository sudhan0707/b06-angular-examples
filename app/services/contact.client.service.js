/* Copyright (C) - All Rights Reserved
 * Written by sgnaneshwar, 5/15/2016
 */

angular
    .module('contacts')
    .factory('contactService', function(){
        var _contacts =[{
            firstName: 'John',
            lastName: 'Smith',
            age: 25,
            organisation: 'IS',
            email: "john@gmail.com"
        },
            {
                firsName: 'Jane',
                lastName: 'Doe',
                age: 20,
                organisation: 'IS',
                email: "jane@gmail.com"
            }];

        return {
            contacts: _contacts
        };

    });