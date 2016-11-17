export default class TechService {
  /** @ngInject */
  constructor($http) {
    // DI
    this.$http = $http;
    this.api_path = '/api/';
    this.api_key = 'Ky4ZdxL%2bt%2fgByyV5p5hH%2fnKNzPhnN8oRxKLQ66Ey%2b%2fA%3d';
  }

  getList() {
  //  return this.$http.get('/app/techs/mockData/techs.json').then(({data}) => data);
  }

  getEmployeesList() {
    this.$http({
      method: 'GET',
      url: this.api_path + '/employees',
      headers: {
        'api_key': this.api_key
      }
    })
    .then(function successCallback(response) {
      console.log(response);
    }, function errorCallback(response) {
      console.log(response);
    });

    this.$http({
      method: 'GET',
      url: this.api_path + "/projects",
      headers: {
        'api_key': this.api_key
      }
    })
    .then(function successCallback(response) {
      console.log(response);
    }, function errorCallback(response) {
      console.log(response);
    });

    this.$http({
      method: 'GET',
      url: this.api_path + "/skills",
      headers: {
        'api_key': this.api_key
      }
    })
    .then(function successCallback(response) {
      console.log(response);
    }, function errorCallback(response) {
      console.log(response);
    });

    this.$http({
      method: 'GET',
      url: this.api_path + "/skills",
      headers: {
        'api_key': this.api_key
      }
    })
    .then(function successCallback(response) {
      console.log(response);
    }, function errorCallback(response) {
      console.log(response);
    });
  //  return this.$http.get('http://aac-vm.universe.dart.spb:8080/api/employees?Ky4ZdxL%2bt%2fgByyV5p5hH%2fnKNzPhnN8oRxKLQ66Ey%2b%2fA%3d').then(({data}) => data);
   // return this.$http.get('/api/employees?api_key=Ky4ZdxL%2bt%2fgByyV5p5hH%2fnKNzPhnN8oRxKLQ66Ey%2b%2fA%3d').then(({data}) => data);
  }
}
