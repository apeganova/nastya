import angular from 'angular';

import todoTextInput from './todoTextInput/todoTextInput';

import todoItemComponent from './todoItem.component';
import todoFooterComponent from './todoFooter.component';
import todoBatchToggle from './todoBatchToggle.component';
import todoListFilter from './todoListFilter.component';
import appNav from './appNav.component';
import appLogin from './appLogin.component';
import appHome from './appHome.component';
import appAdmin from './appAdmin.component';

export default angular
  .module('app.components', [
    todoTextInput.name
  ])
  .component('todoItem', todoItemComponent)
  .component('todoFooter', todoFooterComponent)
  .component('todoBatchToggle', todoBatchToggle)
  .component('todoListFilter', todoListFilter)
  .component('appNav', appNav)
  .component('home', appHome)
  .component('login', appLogin)
  .component('admin', appAdmin)
;
