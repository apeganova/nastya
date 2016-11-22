class mainController {
  /** @ngInject */
      constructor(Login, Common, $location, $rootScope) {
    // DI
    this.common = Common;
    this.$location = $location;
    this.$rootScope = $rootScope;
  }

  $onInit() {
    let authorized = this.common.getAuthorized();
    if (authorized > 0) {
      this.common.getUserById(authorized).then(list => {
        this.common.authorized = true;
        this.common.user = list;
        this.$location.path('/about');
        this.$rootScope.$emit('changeLogin', this.common.user);
      });
    }

    this.$rootScope.$on('changeLogin', ((event, user) => {
      console.log('changeLogin');
        if (this.common.authorized > 0)  {
            this.common.getUserSkills(user.Id).then(list => {
              this.common.userSkills = list;
              console.log(this.common.userSkills);
            });
        }
      })
    )
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
