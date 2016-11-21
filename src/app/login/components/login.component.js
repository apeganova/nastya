//import './login.scss'

class Ctrl {
    /** @ngInject */
        constructor(Login, Common, $rootScope) {
        // DI
        this.Login = Login;
        this.user = Common.user;
        this.authorized = true;
        $rootScope.user = this.user;
    }

    $onInit() {

    }

    btnLoginClick(credentials) {
        this.Login.login(credentials).then(
        list => {
            this.user = list;
            this.authorized = true;
            console.log(list);
        },
        () => {
            this.authorized = false;
        });

        console.log("login");
        console.log(this.user);
        console.log(credentials);
    }
}

export default {
    template: require('./login.html'),
    controller: Ctrl,
    controllerAs: 'vm'
};

