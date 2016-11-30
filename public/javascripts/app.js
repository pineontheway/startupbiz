var mainApp = angular.module('mainApp', ['ui.router']);

mainApp.controller('baseController', baseController);
baseController.$inject = ['$scope'];

function baseController($scope) {
    this.name = "vijay";
}

mainApp.factory('UserService', UserService);

UserService.$inject = ['$http'];
function UserService($http) {
var lgin;
var service = {};

service.GetAll = GetAll;
service.GetById = GetById;
service.GetByUsername = GetByUsername;
service.Create = Create;
service.Update = Update;
service.Delete = Delete;
service.loggedInMsg ;

return service;

function GetAll() {
    return $http.get('/api/users').then(handleSuccess, handleError('Error getting all users'));
}

function GetById(id) {
    return $http.get('/api/users/' + id).then(handleSuccess, handleError('Error getting user by id'));
}

function GetByUsername(username) {
    return $http.get('/api/users/' + username).then(handleSuccess, handleError('Error getting user by username'));
}

function Create(user) {
    console.log('In Service');
    console.log(user);
    return $http.post('/users', user).then(function (res) {
        if (res.data.loggedIn) {
            service.loggedInMsg=res.data.loggedIn;
        }
        console.log(this.loggedInMsg);
        return res;
    }, handleError('Error creating user'));
}

function Update(user) {
    return $http.put('/api/users/' + user.id, user).then(handleSuccess, handleError('Error updating user'));
}

function Delete(id) {
    return $http.delete('/api/users/' + id).then(handleSuccess, handleError('Error deleting user'));
}

// private functions

function handleSuccess(res) {
    console.log("--------");
    console.log(res);
    return res.data;
}

function handleError(error) {
    return function () {
        return { success: false, message: error };
    };
}
}


mainApp.controller('signupController', signupController);
signupController.$inject = ['$scope','UserService'];

function signupController($scope,UserService) {
    var sm = this;
    sm.login = login;
    sm.errors;
    function login() {
        UserService.Create(sm.user)
            .then(function (res) {
                console.log("------");
                if (res.status===200) {
                    console.log(res.status);
                    console.log(res);
                }
                else {
                    console.log("un successful");
                }
                if (res.data) {
                    sm.errors=res.data;
                }
                if (res.data.redirect && res.data.redirect !== "")
                window.location = res.data.redirect;

            });
    }
}

mainApp.controller('dashboardController', dashboardController);
dashboardController.$inject = ['$scope','UserService'];

function dashboardController($scope,UserService) {
    var dm = this;
    dm.loggedIn = UserService.loggedInMsg;
    console.log(dm.loggedIn);
}
