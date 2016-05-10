"use strict";

(function(){
angular
.module("Gentrification", [
"ui.router",
"ngResource",
"anguvideo"
])

.config(Router)
.factory("Contributor", contributorFactory)
.controller("homeIndexController", homeIndexCtrl)
.controller("stateController", stateIndexCtrl)
.controller("uploadController", uploadCtrl)




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
    .state("upload", {
      url:      "/upload",
      templateUrl: "/html/upload.html",
      controller: "uploadController",
      controllerAs: "uploadVM"
    })

    .state("about", {
      url:      "/about",
      templateUrl: "/html/about.html"
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
    Contributor.query().$promise.then(function(contributors) {
        var index = Math.floor(Math.random()*contributors.length);
        var video_url = contributors[index].video_url;
      vm.youTubeURL= video_url;

      // var video_url   = contributors.video_url
        // vm.contributors = "";
      // vm.contributors = contributors;
      // //  "https://youtu.be/4s_NHllP0n8?list=PLzf7wzT7SlE3UDlqODOQSWLcsfefesq4x"
      // //
      // vm.youTubeShareURL = "";
      // vm.youTubeEmbededURL = "";
      // vm.vimeoURL = "";
    });
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
