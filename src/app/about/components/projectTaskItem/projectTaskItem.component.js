class Ctrl {
    /** @ngInject */
        constructor(Common) {
        // DI
        this.common = Common;
        this.user = this.common.user;
        this.projects = this.common.user.Projects;
    }

    $onInit() {

    }
}

export default {
    template: require('./projectTaskItem.html'),
    controller: Ctrl,
    controllerAs: "vm",
    bindings: {
        data: '<'
    }
};

