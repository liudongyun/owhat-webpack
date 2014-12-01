// styles
require("./css/style.css");

// libs
require("angular-ui-router");

// app
var app = angular.module("app", ["ui.router"]);
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider.state('home', {
        url: '/home',
        template: require("./templates/home.html")
    });
});

module.exports = app;