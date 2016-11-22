class mainController {
  /** @ngInject */
      constructor(Login, Common, $location) {
    // DI
    this.common = Common;
    this.$location = $location;
  }

  $onInit() {
    let authorized = this.common.getAuthorized();
    if (authorized > 0) {
      this.common.getUserById(authorized).then(list => {
        this.common.authorized = true;
        this.common.user = list;
        this.$location.path('/about');
      });
    }
  }

  btnSuccessClick() {
    console.log("btnSuccessClick");
  }
}

export default {
  bindings: {},
  transclude: true,
  template: require('./main.html'),
  controller: mainController,
  controllerAs: 'vm'
};
