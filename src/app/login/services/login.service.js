export default class LoginService {
    /** @ngInject */
    constructor($http, $cookies, Common, $location) {
        // DI
        this.$http = $http;
        this.api_path = Common.api_path;
        this.api_key = Common.api_key;
        this.$cookies = $cookies;
        this.$location = $location;

    //    this.user = Common.user;
    //    this.authorized = Common.authorized;
     //   this.text = this.value || '';

    }

    login(credential) {
        let conf = {
            method: 'POST',
            url: this.api_path + "/employees/login",
            headers: {
                'api_key': this.api_key
            },
            data: {
                login: credential.login, //"roger.federer@dataart.com",
                password: credential.password //"111111"
            }
        };

        return this.$http(conf).then(({data}) => data);
    }

    setLogin(id) {
        this.$cookies.put('user', id);
        this.$location.path('/about');
    }
}