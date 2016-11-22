export default class CommonService {
    /** @ngInject */
        constructor($http, $cookies, $location) {
        // DI
        this.$http = $http;
        this.api_path = '/api';
        this.api_key = 'Ky4ZdxL%2bt%2fgByyV5p5hH%2fnKNzPhnN8oRxKLQ66Ey%2b%2fA%3d';
        this.user = {};
        this.authorized = null;
        this.$cookies = $cookies;
        this.$location = $location;
    }
    getAuthorized() {
        //let cookies = this.$cookies.getAll();
        //for (var key in cookies) {
        //    if (key == "user" && parseInt(cookies[key]) > 0) this.authorized = cookies[key];
        //    else {
        //        this.authorized = false;
        //    }
        //}
        let authorized = this.$cookies.get("user");

        if (parseInt(authorized) > 0) {
            this.authorized = parseInt(authorized);
        } else {
            this.authorized = false;
            this.$location.path('/login');
        }
        return authorized;
    }


    getUserById(id) {
        let conf = {
            method: 'GET',
            url: this.api_path + "/employees/" + id,
            headers: {
                'api_key': this.api_key
            }
        };
        return this.$http(conf).then(({data}) => data);
    }

    logout() {
        this.$cookies.remove("user");
    }
}