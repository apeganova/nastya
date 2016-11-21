export default class CommonService {
    /** @ngInject */
        constructor($http) {
        // DI
        this.$http = $http;
        this.api_path = '/api';
        this.api_key = 'Ky4ZdxL%2bt%2fgByyV5p5hH%2fnKNzPhnN8oRxKLQ66Ey%2b%2fA%3d';
        this.user = {};
        this.authorized = null;
    }
    getAuthorized() {
     //  this.user.Id > 0 ? return true || false
    }
}