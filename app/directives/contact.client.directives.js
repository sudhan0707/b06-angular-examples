'use strict';

angular.module('contacts')
    .directive('testDirective', function(){
        return {
            restrict: 'EAC',
            template:'<span>Hi {{person.name}}!!!</span>',
            replace: true,
            scope: true
        };
    })