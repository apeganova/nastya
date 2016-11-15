class appHomeController {
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
    <h3>Home</h3>
 `,
    controller: appHomeController,
    controllerAs: 'vm'
}

