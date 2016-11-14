import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Components from './components/components';
import services from './services/services';
import 'normalize.css';

import AppComponent from './app.component';

angular.module('appMy', [
  uiRouter,
  Components.name,
  services.name
])

.component('appMy', AppComponent);
//routerApp.config(function($stateProvider, $urlRouterProvider) {
//  $urlRouterProvider.otherwise('/home');
//  $stateProvider
//    // главная, состояние и вид ========================================
//      .state('home', {
//        url: '/home',
//        template: '<h3>hello world!</h3>'
//
//      })
//    // о нас =================================
//      .state('about', {
//        // we'll get to this in a bit
//        url: '/about',
//        template: '<h3>hello about!</h3>'
//      });
//});

angular.module('appMy').config(function($stateProvider) {
  var helloState;
  helloState = {
    name: 'hello',
    url: '/hello',
    template: '<h3>hello world!</h3>'
  };

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  };

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
});

angular.bootstrap(document.body, ['appMy']);



