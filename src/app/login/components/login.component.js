//import './login.scss'

class Ctrl {
    /** @ngInject */
        constructor(Login, Common, $rootScope) {
        // DI
        this.Login = Login;
        this.common = Common;
        this.credential = true;
        this.$rootScope = $rootScope;
    }

    $onInit() {
    }

    btnLoginClick(credentials) {
        this.Login.login(credentials).then(
        list => {
            this.common.isAuthorized = true;
            this.common.user = list;
            this.Login.setLogin(this.common.user.Id);
            this.$rootScope.$emit('changeLogin', this.common.user);
        },
        () => {
            this.credential = false;
        });

    }
}

export default {
    template: require('./login.html'),
    controller: Ctrl,
    controllerAs: 'vm'
};

