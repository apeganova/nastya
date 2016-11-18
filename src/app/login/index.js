import angular from 'angular';

// components
import login from './components/login.component';
import loginTextInput from './components/loginInput/loginTextInput';

// services
import Login from './services/login.service'

export default angular
    .module('app.login', [
        loginTextInput.name
    ])
    .component('login', login)
    .component('loginTextInput', loginTextInput)
    .service('Login', Login)
;
