class appNavController {
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

      <nav class="navbar navbar-inverse" role="navigation">
          <ul class="nav navbar-nav">
              <li><a ui-sref="admin" ui-sref-active="active">Admin</a></li>
              <li><a ui-sref="home" ui-sref-active="active">Home</a></li>
              <li><a ui-sref="login" ui-sref-active="active">Login</a></li>
          </ul>
          <div>Hello</div>
          <div>Logout</div>
      </nav>
 `,
    controller: appNavController,
    controllerAs: 'vm'
}
