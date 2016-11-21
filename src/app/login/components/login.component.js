//import './login.scss'

class Ctrl {
    /** @ngInject */
        constructor(Login) {
        // DI
        this.Login = Login;
    }

    $onInit() {

    }

    btnLoginClick(credentials) {
        console.log(this.Login.api_path);

        this.Login.login(credentials).then(
        list => {
            this.Login.authorized = true;
            this.Login.user = list;
            console.log("login");
            console.log(this.Login.user);
            console.log(credentials);
        },
        () => {
            this.authorized = false;
        });
        console.log(this.Login.user);
    }
}

export default {
    template: require('./login.html'),
    controller: Ctrl,
    controllerAs: 'vm'
};

