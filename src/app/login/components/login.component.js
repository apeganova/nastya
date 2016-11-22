//import './login.scss'

class Ctrl {
    /** @ngInject */
        constructor(Login, Common) {
        // DI
        this.Login = Login;
        this.common = Common;
        this.user = this.common.user;
        this.authorized = this.common.authorized;
    }

    $onInit() {
    }

    btnLoginClick(credentials) {
        this.Login.login(credentials).then(
        list => {
            this.common.authorized = true;
            this.common.user = list;
            this.Login.setLogin(this.common.user.Id);
        },
        () => {
            this.common.authorized = false;
            this.common.user = {};
            this.common.logout();
        });
    }
}

export default {
    template: require('./login.html'),
    controller: Ctrl,
    controllerAs: 'vm'
};

