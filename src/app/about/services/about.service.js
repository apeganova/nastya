export default class UserService {
    /** @ngInject */
        constructor($http, Common) {
        // DI
        this.$http = $http;
        this.api_path = Common.api_path;
        this.api_key = Common.api_key;
        this.user = Common.user;
        this.authorized = Common.authorized;
    }
    $onInit() {
        console.log(this.user);
    }
    getProjectsList() {
        //let conf = {
        //    method: 'GET',
        //    url: this.api_path + "/projects",
        //    headers: {
        //        'api_key': this.api_key
        //    }
        //};
        //
        //return this.$http(conf).then(({data}) => data);
    }
}
