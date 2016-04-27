"use strict";

(function(){
angular
.module("Gentrification", [
"ui.router"
])

.config(Router)
.controller("homeIndexController", homeIndexCtrl)
.controller("stateController", stateIndexCtrl);

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
    .state("filterByState", {
      url:      "/:state",
      templateUrl: "/html/state.html",
      controller: "stateController",
      controllerAs: "stateVM"
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

  stateIndexCtrl.$inject= ["$stateParams"];
  function stateIndexCtrl($stateParams){
      var vm = this;
      vm.states = $stateParams;
      // console.dir($stateParams);
    };
})();
