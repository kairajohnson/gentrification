"use strict";

(function(){
angular
.module("Gentrification", [
"ui.router"
])

.config(Router)
.controller("homeIndexController", homeIndexCtrl);

  Router.$inject = ["$stateProvider", "$locationProvider",
"$urlRouterProvider"];
  function Router($stateProvider, $locationProvider, $urlRouterProvider){
    $locationProvider.html5Mode(true);
    $stateProvider
    .state("home", {
      url:      "/",
      templateUrl: "/html/home-index.html",
      controller: "homeIndexController",
      controllerAs: "homeVM"
    })
    .state("archive", {
      url:      "/archive",
      templateUrl: "<h1>archive page</h1>"
    });
    $urlRouterProvider.otherwise("/");
  }
  function homeIndexCtrl(){
    var vm = this;
    vm.contributors = [
      {name:"Nikki"},
      {name:"Yasmin"},
      {name:"Wayne"}
    ];
  }
})();
