class Ctrl {
    /** @ngInject */
        constructor(Common, Employee) {
        // DI
        this.common = Common;
        this.user = this.common.user
    }

    $onInit() {
    }
}

export default {
    template: require('./userInfo.html'),
    controller: Ctrl,
    controllerAs: 'vm',
    bindings: {
        data: '<'
    }
};
