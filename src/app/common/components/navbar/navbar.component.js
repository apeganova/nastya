class Ctrl {
  /** @ngInject */
      constructor(Common, $rootScope) {
    // DI
    this.common = Common;
    this.user = this.common.user;
    this.isAuthorized = this.common.isAuthorized;
    this.$rootScope = $rootScope;
  }
  onLogoutClick() {
    this.common.logout();
    this.$rootScope.$emit('changeLogin', this.common.user);
  }
}
  export default {
  template: require('./navbar.html'),
  controller: Ctrl,
  controllerAs: 'vm',
  bindings: {
      data: '<'
  }
};
