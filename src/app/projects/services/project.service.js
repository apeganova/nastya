export default class ProjectsService {
  /** @ngInject */
  constructor($http, Common) {
    // DI
    this.$http = $http;
    this.api_path = Common.api_path;
    this.api_key = Common.api_key;
  }

  getProjectsList() {
    let conf = {
      method: 'GET',
      url: this.api_path + "/projects",
      headers: {
        'api_key': this.api_key
      }
    };

    return this.$http(conf).then(({data}) => data);
  }
}
