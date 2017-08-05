angular.module('app.routes', ['ui.router'])


.config(function($stateProvider,$urlRouterProvider) {
  $stateProvider

.state('home',{
  name: 'Home Page',
  url: '/homePage',
    templateUrl: 'home.html',
    controller: 'homePageCtrl'
})

.state('add',{
  name: 'Add Page',
  url: '/addPage',
    templateUrl: 'add.html',
    controller: 'addPageCtrl'
})

.state('progress',{
  name: 'Progress Page',
  url: '/progressPage',
    templateUrl: 'progress.html',
    controller: 'progressPageCtrl'
})

.state('recipe',{
  name: 'Recipe Page',
  url: '/recipePage',
    templateUrl: 'recipe.html',
    controller: 'recipePageCtrl'
})

.state('blank', {
  name: 'Blank Page',
  url: '/blankPage',
    templateUrl: 'blank.html',
    controller: 'blankPageCtrl'

});


$urlRouterProvider.otherwise('/homePage');

});
