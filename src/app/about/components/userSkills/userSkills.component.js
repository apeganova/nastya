import './userSkills.scss';

class Ctrl {
    /** @ngInject */
        constructor(Common) {
        // DI
        this.common = Common;
        this.user = this.common.user;
        this.skills = this.common.userSkills;
        this.list = this.common.userSkills;
    }

    $onInit() {
    }
}

export default {
    template: require('./userSkills.html'),
    controller: Ctrl,
    controllerAs: 'vm',
    bindings: {
        data: '<'
    }
};

