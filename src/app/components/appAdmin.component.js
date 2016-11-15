class appAdminController {
    /**
     * @param {TodoList} todoList
     */
        constructor(todoList) {
        "ngInject";
        this.todos = todoList;
    }

    clearCompleted() {
        this.todos.clearCompleted();
    }
}

export default {
    bindings: {},
    transclude: true,
    template: `
    <h3>Admin</h3>
 `,
    controller: appAdminController,
    controllerAs: 'vm'
}

