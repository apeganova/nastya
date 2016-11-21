import angular from 'angular';

// components
import login from './components/login.component';

// services
import Login from './services/login.service'

export default angular
    .module('app.login', [])
    .component('login', login)
    .service('Login', Login)
;
