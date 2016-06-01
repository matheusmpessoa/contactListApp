var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {
    console.log("Hello World from controller");

    var refresh = function () {
        $http.get('/contactlist').success(function (response) {
            console.log("I got the data I requested");
            $scope.contactlist = response;
            $scope.contact = "";
        });
    };

    refresh();

    $scope.addContact = function () {
        console.log($scope.contact);
        $http.post('/contactlist', $scope.contact).success(function (response) {
            console.log(response);
            console.log("Contato adicionado");
            refresh();
        });
    };

    $scope.remove = function (id) {
        console.log(id);
        $http.delete('/contactlist/' + id).success(function (response) {
            console.log("Contato removido");
            refresh();
        });
    };

    $scope.edit = function (id) {
        console.log(id);
        $http.get('/contactlist/' + id).success(function (response) {
            console.log("Contato editado");
            $scope.contact = response;
        });
    };

    $scope.update = function () {
        console.log($scope.contact._id);
        $http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function (response) {
            console.log("Contato atualizado");
            refresh();
        })
    };

    $scope.deselect = function () {
        $scope.contact = "";
    }

    /* Filter contatos */
    $scope.filterFunction = function (element) {
        return element.name.match(/^Ma/) ? true : false;
    };
}]);

/* Diretiva para habilitar apenas números no input */
myApp.directive('validInput', function () {
    return {
        require: '?ngModel',
        scope: {
            "inputPattern": '@'
        },

        link: function (scope, element, attrs, ngModelCtrl) {
            var regexp = null;

            if (scope.inputPattern !== undefined) {
                regexp = new RegExp(scope.inputPattern, "g");
            }
            if (!ngModelCtrl) {
                return;
            }

            ngModelCtrl.$parsers.push(function (val) {
                if (regexp) {
                    var clean = val.replace(regexp, '');
                    if (val !== clean) {
                        ngModelCtrl.$setViewValue(clean);
                        ngModelCtrl.$render();
                    }
                    return clean;
                } else {
                    return val;
                }
            });

            element.bind('keypress', function (event) {
                if (event.keyCode === 32) {
                    event.preventDefault();
                }
            });
        }
    }
});
