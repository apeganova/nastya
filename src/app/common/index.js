import angular from 'angular';

import footer from './components/footer/footer.component'
import navbar from './components/navbar/navbar.component'
import textInput from './components/textInput/textInput.component'

import Common from './services/common.service'

import autofocus from './directives/autofocus.directive';
import onEscape from './directives/escape.directive';

export default angular
  .module('app.common', [])
  .component('myFooter', footer)
  .component('navbar', navbar)
  .component('textInput', textInput)
  .service('Common', Common)
  .directive({
    autofocus, onEscape
  });
