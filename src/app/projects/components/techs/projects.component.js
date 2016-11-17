import './projects.scss'

class Ctrl {
  /** @ngInject */
  constructor(Project) {
    // DI
    this.Project = Project;
  }

  $onInit() {
    this.Project.getList().then(list => this.list = list);

    this.Project.getEmployeesList();
       // .then(list => {console.log(list)});
  }
}

export default {
  template: require('./projects.html'),
  controller: Ctrl
};
