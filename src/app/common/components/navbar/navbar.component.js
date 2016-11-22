class Ctrl {
  /** @ngInject */
      constructor(Common) {
    // DI
    this.common = Common;
    this.user = this.common.user;
    this.authorized = this.common.authorized;
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
