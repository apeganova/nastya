class Ctrl {
  /** @ngInject */
    constructor($scope, User) {
    // DI
    this.user =  User.user;
    this.authorized =  User.authorized;
    console.log(User.user);
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
