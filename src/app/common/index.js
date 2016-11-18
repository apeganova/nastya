import angular from 'angular';

import footer from './components/footer/footer.component'
import navbar from './components/navbar/navbar.component'

import Common from './services/common.service'

import autofocus from './directives/autofocus.directive';
import onEscape from './directives/escape.directive';

export default angular
  .module('app.common', [])
  .component('myFooter', footer)
  .component('navbar', navbar)
  .service('Common', Common)
  .directive({
    autofocus, onEscape
  });
