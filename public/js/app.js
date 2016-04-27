"use strict";

(function(){
angular
.module("Gentrification", [
"ui.router"
])

.config(Router);

  Router.$inject = ["$stateProvider", "$locationProvider",
"$urlRouterProvider"];
  function Router($stateProvider, $locationProvider, $urlRouterProvider){
    $locationProvider.html5Mode(true);
    $stateProvider
    .state("home", {
      url:      "/home",
      template: "<h1> homepage </h1>"
    })
    .state("archive", {
      url:      "/archive",
      template: "<h1>archive page</h1>"
    });
    $urlRouterProvider.otherwise("/");
  }
})();
