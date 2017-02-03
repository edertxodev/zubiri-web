var app = angular.module('appZubiri', []);

app.controller('indexController', indexController);

function indexController($scope, $http){
    $scope.hasiera = {
        kaixo: "Ongi etorri Zubiri-Manteo ikastetxera",
        albisteak: "Azken albisteak"
    };
    
    $http.get('./angular/albisteak.json')
        .then(function(res){
            $scope.albisteak = res.data.albisteak;
        });
}