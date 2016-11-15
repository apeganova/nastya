import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Components from './components/components';
import services from './services/services';
import 'normalize.css';

import AppComponent from './app.component';


var app =
angular.module('appMy', [
  uiRouter,
  Components.name,
  services.name
])
.component('appMy', AppComponent)
.config(function($stateProvider) {
//  $urlRouterProvider.otherwise('/hello');, $urlRouterProvider
  $stateProvider
      .state({
        name: 'admin',
        url: '/admin',
      //  component: 'login'
        template: '<admin></admin>'
      })
      .state({
        name: 'home',
        url: '/home',
        template: '<home></home>'
      })
      .state({
          name: 'login',
          url: '/login',
          template: '<login></login>'
      });
});

console.log(Components);

angular.bootstrap(document.body, ['appMy']);



