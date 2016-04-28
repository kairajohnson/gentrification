"use strict";

(function(){
angular
.module("Gentrification", [
"ui.router",
"ngResource"
])

.config(Router)
.factory("Contributor", contributorFactory)
.controller("homeIndexController", homeIndexCtrl)
.controller("stateController", stateIndexCtrl)
.controller("uploadController", uploadCtrl);

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
    .state("uploadVideo", {
      url:      "/upload",
      templateUrl: "/html/upload.html",
      controller: "uploadController",
      controllerAs: "uploadVM"
    })
    .state("filterByState", {
      url:      "/:state",
      templateUrl: "/html/state.html",
      controller: "stateController",
      controllerAs: "stateVM"
    });

    $urlRouterProvider.otherwise("/");
  }

  contributorFactory.$inject= ["$resource"];
  function contributorFactory($resource){
    var Contributor = $resource("/api/contributors");
    return Contributor;
  }

  homeIndexCtrl.$inject = ["Contributor"];
  function homeIndexCtrl(Contributor){
    var vm = this;
    vm.contributors = Contributor.query();
    }

  stateIndexCtrl.$inject= ["$stateParams"];
  function stateIndexCtrl($stateParams){
      var vm = this;
      vm.states = $stateParams;
    };

    uploadCtrl.$inject = ["Contributor"];
    function uploadCtrl(Contributor){
      var vm = this;
      vm.contributors = Contributor.query();
      vm.create = function(){
        Contributor.save(vm.newContributor, function(response){
        vm.contributors.push(response);
        })
      }
    };
})();
