export default class UserService {
    /** @ngInject */
        constructor($http, Common) {
        // DI
        this.$http = $http;
        this.api_path = Common.api_path;
        this.api_key = Common.api_key;
        this.user = Common.user;
        this.isAuthorized = Common.isAuthorized;
        this.skills = Common.userSkills;
    }
    $onInit() {

    }
    getTasks(user) {
        console.log(user);
        let tasks;
        for (var i = 0; i < user.Projects.length; i++ ) {
            console.log(user.Projects[i].Tickets);
        }


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
