/* Copyright (C) - All Rights Reserved
 * Written by sgnaneshwar, 5/15/2016
 */
'use strict';

    angular
        .module('contacts')
           .factory('contactService', function(){
               var _people = [];
               var _save = function(person){
                    _people.push(person);
                };
               var _update = function(){};

               var _display = function(){
                   return _people;
               }

               var _search = function(query){
                  var queryResult  =_people.filter(function(person){
                       return !person.name.search(query);
                   });
                   return queryResult[0];
               }
               return {
                   save: _save,
                   update: _update,
                   display:_display,
                   search:_search
               };
           })