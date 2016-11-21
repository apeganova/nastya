class Ctrl {
    /** @ngInject */
        constructor(Common, User) {
        // DI
        //this.user = Common.user;
        //console.log(this.user);
    }

    $onInit() {
        //  this.Project.getList().then(list => this.list = list);
        //this.Project.getProjectsList().then(list => {
        //    this.list = list;
        //    console.log(this.user);
        //});
    }
}

export default {
    template: require('./userInfo.html'),
    controller: Ctrl,
    controllerAs: 'vm'
};
