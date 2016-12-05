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

mainApp.controller('dashboardController', dashboardController);
dashboardController.$inject = ['$scope','UserService'];

function dashboardController($scope,UserService) {
    var dm = this;
    dm.loggedIn = UserService.loggedInMsg;
    console.log(dm.loggedIn);
}


mainApp.controller('acquisitionController', function($scope) {
    Highcharts.chart('container', {
            chart: {
                borderWidth: 1
            },

            title: {
                text: 'US Startups acquisition density'
            },

            legend: {
                layout: 'horizontal',
                borderWidth: 0,
                backgroundColor: 'rgba(255,255,255,0.85)',
                floating: true,
                verticalAlign: 'top',
                y: 25
            },

            mapNavigation: {
                enabled: true
            },

            colorAxis: {
                min: 1,
                type: 'logarithmic',
                minColor: '#EEEEFF',
                maxColor: '#000022',
                stops: [
                    [0, '#EFEFFF'],
                    [0.67, '#4444FF'],
                    [1, '#000022']
                ]
            },

            series: [{
                animation: {
                    duration: 1000
                },
                data: [
    {
        "value": 36,
        "code": "NJ"
    },
    {
        "value": 2,
        "code": "RI"
    },
    {
        "value": 84,
        "code": "MA"
    },
    {
        "value": 19,
        "code": "CT"
    },
    {
        "value": 23,
        "code": "MD"
    },
    {
        "value": 137,
        "code": "NY"
    },
    {
        "value": 3,
        "code": "DE"
    },
    {
        "value": 51,
        "code": "FL"
    },
    {
        "value": 35,
        "code": "OH"
    },
    {
        "value": 62,
        "code": "PA"
    },
    {
        "value": 77,
        "code": "IL"
    },
    {
        "value": 445,
        "code": "CA"
    },
    {
        "value": 1,
        "code": "HI"
    },
    {
        "value": 45,
        "code": "VA"
    },
    {
        "value": 29,
        "code": "MI"
    },
    {
        "value": 20,
        "code": "IN"
    },
    {
        "value": 31,
        "code": "NC"
    },
    {
        "value": 43,
        "code": "GA"
    },
    {
        "value": 18,
        "code": "TN"
    },
    {
        "value": 7,
        "code": "NH"
    },
    {
        "value": 12,
        "code": "SC"
    },
    {
        "value": 5,
        "code": "LA"
    },
    {
        "value": 6,
        "code": "KY"
    },
    {
        "value": 21,
        "code": "WI"
    },
    {
        "value": 40,
        "code": "WA"
    },
    {
        "value": 7,
        "code": "AL"
    },
    {
        "value": 11,
        "code": "MO"
    },
    {
        "value": 83,
        "code": "TX"
    },
    {
        "value": 1,
        "code": "WV"
    },
    {
        "value": 2,
        "code": "VT"
    },
    {
        "value": 29,
        "code": "MN"
    },
    {
        "value": 1,
        "code": "MS"
    },
    {
        "value": 3,
        "code": "IA"
    },
    {
        "value": 4,
        "code": "AR"
    },
    {
        "value": 3,
        "code": "OK"
    },
    {
        "value": 25,
        "code": "AZ"
    },
    {
        "value": 33,
        "code": "CO"
    },
    {
        "value": 3,
        "code": "ME"
    },
    {
        "value": 25,
        "code": "OR"
    },
    {
        "value": 14,
        "code": "KS"
    },
    {
        "value": 18,
        "code": "UT"
    },
    {
        "value": 6,
        "code": "NE"
    },
    {
        "value": 8,
        "code": "NV"
    },
    {
        "value": 3,
        "code": "ID"
    },
    {
        "value": 1,
        "code": "NM"
    },
    {
        "value": 1,
        "code": "SD"
    },
    {
        "value": 1,
        "code": "ND"
    },
    {
        "value": 1,
        "code": "MT"
    },
    {
        "value": 1,
        "code": "WY"
    },
    {
        "value": 1,
        "code": "Ak"
    }
],
                mapData: Highcharts.maps['countries/us/us-all'],
                joinBy: ['postal-code', 'code'],
                dataLabels: {
                    enabled: true,
                    color: '#FFFFFF',
                    format: '{point.code}'
                },
                name: 'Startup density',
                tooltip: {
                    pointFormat: '{point.code}: {point.value}'
                }
            }]
        }

});
