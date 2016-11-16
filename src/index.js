// DEPENDENCIES
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import uiResource from 'angular-resource';

// CONFIGS
import routesConfig from './routes';
import httpInterceptorConfig from './configs/httpInterceptor.config';

// CUSTOM MODULES
import commonModule from './app/common';
import aboutModule from './app/about';
import dashboardModule from './app/dashboard';
import techsModule from './app/techs';

// MAIN COMPONENT
import main from './app/main/main.component'

// STYLES
import './index.scss';

angular
  .module('app', [
    // DEPENDENCIES
    uiRouter,
    uiBootstrap,
    uiResource,

    // CUSTOM MODULES
    dashboardModule.name,
    commonModule.name,
    aboutModule.name,
    techsModule.name
  ])
  .config(routesConfig)
  .config(httpInterceptorConfig)
  //.config(['$resourceProvider', function($resourceProvider) {
  //  // Don't strip trailing slashes from calculated URLs
  //  $resourceProvider.defaults.stripTrailingSlashes = false;
  //}])
    .config(['$sceDelegateProvider', function($sceDelegateProvider) {
      // We must whitelist the JSONP endpoint that we are using to show that we trust it
      $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'https://angularjs.org/**'
      ]);
    }])
  .component('main', main)
;
