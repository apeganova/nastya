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
          <div class="navbar-header">
              <a class="navbar-brand" ui-sref="#">AngularUI Router</a>
          </div>
          <ul class="nav navbar-nav">
              <li><a ui-sref="hello" ui-sref-active="active">Hello</a></li>
              <li><a ui-sref="about" ui-sref-active="active">About</a></li>
          </ul>
      </nav>
 `,
    controller: appNavController,
    controllerAs: 'vm'
}
