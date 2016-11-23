//import './projects.scss'

class Ctrl {
    /** @ngInject */
        constructor(Common, Employee) {
        // DI
        this.common = Common;
        this.projects = this.common.user.Projects;
        this.user = this.common.user;
        this.Employee = Employee;
    }

    $onInit() {
        this.tasks = this.Employee.getTasks(this.user);
    }
}

export default {
    template: require('./userProjects.html'),
    controller: Ctrl,
    controllerAs: "vm"
};

