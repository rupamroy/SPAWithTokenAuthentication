angular
  .module('spawithTokenAuthenticationApp').config(AppConfig);

AppConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function AppConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/main');

  $stateProvider.state('register', {
    url: '/register',
    templateUrl: '/views/register.html',
    controller:'RegisterCtrl',
    controllerAs: 'vm'
  }).state('main', {
    url: '/main',
    templateUrl: '/views/main.html'
  })
}
