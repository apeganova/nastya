import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Components from './components/components';
import services from './services/services';
import 'normalize.css';

import AppComponent from './app.component';

angular.module('app', [
  uiRouter,
  Components.name,
  services.name
])
.component('app', AppComponent);

angular.bootstrap(document.body, ['app'])
