
    var app = angular.module("chessGame", ["ngRoute"]);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "../views/startPage.html",
                controller: "homeCtrl"
            })
            .when("/chess", {
                templateUrl: "../views/chessGame.html",
                controller: "chessCtrl"
            });
    });
