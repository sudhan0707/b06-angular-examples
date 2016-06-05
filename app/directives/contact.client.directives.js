'use strict';

angular.module('contacts')
    .directive('testDirective', function(){
        return {
            restrict: 'E',
            template:'<span>Hi {{person}}!!! {{target}}</span>',
            replace: true,
            scope: {},
            link : function($scope, element, attrs) {
                    $scope.person = "John!!";
            }
        };
    })
    .directive('myField', function(){
        return {
            restrict:'E',
            scope: {
                field: '@',
                type: '@',
                value: '='
            },
            templateUrl: 'field.client.tpl.html',
            link: function(scope, element, attrs) {
                element.find('span').on('click', function(event){
                    $(event.target).parent().parent().remove()
                });
            }
        };
    });