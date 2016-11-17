import './techs.scss'

class Ctrl {
  /** @ngInject */
  constructor(Tech) {
    // DI
    this.Tech = Tech;
  }

  $onInit() {
    this.Tech.getList().then(list => this.list = list);

    this.Tech.getEmployeesList();
       // .then(list => {console.log(list)});
  }
}

export default {
  template: require('./techs.html'),
  controller: Ctrl
};
