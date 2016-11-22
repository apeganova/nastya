import './about.scss'

class Ctrl {
  /** @ngInject */
    constructor(Employee, Common) {
    // DI
    //this.Employee = Employee;
    //this.user = this.Employee.user;
    //this.authorized =  this.Employee.authorized;
    this.common = Common;
    this.authorized = Common.authorized;
    this.user = this.common.user;
  }

  $onInit() {
    console.log(this.common);
    //this.Project.getProjectsList().then(list => {
    //  this.list = list;
    //  console.log(list);
    //});
  }
}

export default {
  template: require('./about.html'),
  controller: Ctrl,
  controllerAs: 'vm'
};
