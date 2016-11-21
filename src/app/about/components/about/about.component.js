class Ctrl {
  /** @ngInject */
    constructor(Common) {
    // DI
    this.user = Common.user;
    this.authorized = Common.authorized;
    console.log(Common.api_path);
  }

  $onInit() {
    //  this.Project.getList().then(list => this.list = list);
    //this.Project.getProjectsList().then(list => {
    //  this.list = list;
    //  console.log(list);
    //});
    console.log(this.user);
  }
}

export default {
  template: require('./about.html'),
  controller: Ctrl,
  controllerAs: 'vm'
};
