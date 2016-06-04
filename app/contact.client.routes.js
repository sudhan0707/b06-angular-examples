/* Copyright (C) - All Rights Reserved
 * Written by sgnaneshwar, 5/18/2016
 */
'use strict';

angular
    .module('contacts')
    .config(function($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('home',{
                url:'/',
                controller:'homeController',
                templateUrl:'home.client.tpl.html'
            })
            .state('create',{
                url:'/create',
                controller:'createController',
                templateUrl:'contact.client.tpl.html'
            })
            .state('update',{
                url:'/update',
                controller:'updateController',
                templateUrl:'contact.client.tpl.html'
            })
            .state('display',{
                url:'/display',
                templateUrl: 'displayContact.client.tpl.html'
            })
    });