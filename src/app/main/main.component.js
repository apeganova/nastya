class mainController {
//
//  init($resource) {
//
//    var apiKey = '?api_key=Ky4ZdxL%2bt%2fgByyV5p5hH%2fnKNzPhnN8oRxKLQ66Ey%2b%2fA%3d';
//
//    var apiPath = '/api';
//    var url = apiPath + '/employees' + apiKey;
//    url = 'http://aac-vm.universe.dart.spb:8080/api/employees?api_key=Ky4ZdxL%252bt%252fgByyV5p5hH%252fnKNzPhnN8oRxKLQ66Ey%252b%252fA%253d';
//
//    //this.$http.get('http://aac-vm.universe.dart.spb:8080/api/employees?api_key=Ky4ZdxL%252bt%252fgByyV5p5hH%252fnKNzPhnN8oRxKLQ66Ey%252b%252fA%253d')
//    //    .then(function successCallback(response) {
//    //      console.log(response);
//    //    }, function errorCallback(response) {
//    //      console.log(response);
//    //    });
//
//    var request = $resource(url, {
//      // Let's make the `query()` method cancellable
//      query: {method: 'get', isArray: true, cancellable: true}
//    });
//
//   var employees = request.query();
//   console.log(employees);
//
//  };
//
  btnSuccessClick() {
    console.log("btnSuccessClick");
  }
}
//mainController.$inject = ['$resource'];

export default {
  bindings: {},
  transclude: true,
  template: require('./main.html'),
  controller: mainController,
  controllerAs: 'vm'
};
