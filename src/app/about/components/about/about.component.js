import './about.scss'

class Ctrl {
  /** @ngInject */
    constructor(Employee, Common) {
    // DI
    this.common = Common;
    this.isAuthorized = Common.isAuthorized;
    this.user = this.common.user;
  }

  $onInit() {
  }
}

export default {
  template: require('./about.html'),
  controller: Ctrl,
  controllerAs: 'vm'
};
