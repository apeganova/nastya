class appLoginController {
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
    <h3>Login</h3>
 `,
    controller: appLoginController,
    controllerAs: 'vm'
}

