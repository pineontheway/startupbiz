var mainApp = angular.module('mainApp', ['ui.router']);

mainApp.controller('baseController', baseController);
    baseController.$inject = ['$scope'];

    function baseController($scope) {
        this.name = "vijay";
    }


mainApp.controller('signupController',signupController);
    signupController.$inject = ['$scope'];
    function signupController($scope) {
        var sm = this;
        sm.login = login;
        sm.vijay = "vijay"
        console.log(sm.password);
        function login() {
            console.log(sm.user);
        }
    }
