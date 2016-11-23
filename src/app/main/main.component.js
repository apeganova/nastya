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
        this.common.isAuthorized = true;
        this.isAuthorized = this.common.isAuthorized;
        this.common.user = list;
      //  this.$location.path('/about');
        this.$rootScope.$emit('changeLogin', this.common.user);
      });
    }

    this.$rootScope.$on('changeLogin', ((event, user) => {
      console.log('changeLogin');
      this.isAuthorized = this.common.isAuthorized;
      console.log(this.isAuthorized);

        if (this.common.isAuthorized)  {
            this.common.getUserSkills(user.Id).then(list => {
              this.common.userSkills = list;
              console.log(this.common.userSkills);
            });
        }
        this.$location.path('/');
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
