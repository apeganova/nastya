import './techs.scss'

class Ctrl {
  /** @ngInject */
  constructor(Tech, $rootScope) {
    // DI
    this.Tech = Tech;
    this.$rootScope = $rootScope;
   }


  $onInit() {
    this.Tech.getList().then(list => {
      this.list = list;
    });
    this.Tech.getEmployeesList();
       // .then(list => {console.log(list)});

    this.$rootScope.$on('child', function (event, data) {
      console.log(data); // 'Some data'
    })
  }
}

export default {
  template: require('./techs.html'),
  controller: Ctrl
};
