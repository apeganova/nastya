export default class TechService {
  /** @ngInject */
  constructor($http) {
    // DI
    this.$http = $http;
  }

  getList() {
    return this.$http.get('src/app/techs/mockData/techs.json').then(({data}) => data);
  }
}
