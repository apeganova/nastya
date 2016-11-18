export default class CommonService {
    /** @ngInject */
    constructor($http) {
        // DI
        this.$http = $http;
        this.api_path = '/api';
        this.api_key = 'Ky4ZdxL%2bt%2fgByyV5p5hH%2fnKNzPhnN8oRxKLQ66Ey%2b%2fA%3d';
     //   this.text = this.value || '';

    }

    login() {
        let conf = {
            method: 'POST',
            url: this.api_path + "/employees/login",
            headers: {
                'api_key': this.api_key
            },
            data: {
                login: "roger.federer@dataart.com",
                password: "111111"
            }
        };

        return this.$http(conf).then(({data}) => data);
    }
}