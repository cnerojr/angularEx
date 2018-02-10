var myApp= angular.module("myApp", ['ui.router']);
myApp.controller("MainController", MainController);

myApp.config(function ($stateProvider,$urlRouterProvider,$locationProvider){
    $stateProvider
        .state('home',{
            url:'/',
            templateUrl:'/ngapp/views/main.html',
            controller:MainController,
            controllerAS: "con"
        });
    //handle request for non-existent router
    $urlRouterProvider.otherwise('/notFound');
    
    // enables html5 navigation
    $locationProvider.html5Mode(true);
});
