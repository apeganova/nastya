export default class UserService {
    /** @ngInject */
        constructor($http, Common) {
        // DI
        this.$http = $http;
        this.api_path = Common.api_path;
        this.api_key = Common.api_key;
        this.user = Common.user;
        this.authorized = Common.authorized;
        this.skills = Common.userSkills;
    }
    $onInit() {

    }
    getList() {

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
