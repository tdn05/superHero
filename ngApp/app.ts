namespace superhero {

    angular.module('superhero', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: superhero.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: superhero.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('heroes', {
                url: '/heroes',
                templateUrl: '/ngApp/views/heroes.html',
                controller: superhero.Controllers.HeroesController,
                controllerAs: 'controller'
            })
            .state('heroeAdd', {
                url: '/save',
                templateUrl: '/ngApp/views/heroeAdd.html',
                controller: superhero.Controllers.AddHeroesController,
                controllerAs: 'controller'
            })

            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });



}
