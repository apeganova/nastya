import './app.less';

export class TodoAppController {
  /**
   * @param {TodoList} todoList
   */
  constructor(todoList) {
    "ngInject";
    this.todos = todoList;
  }

  onSave(task) {
    if (!task) return;

    this.todos.add(task);
  }

  onFilter(state) {
    switch (state) {
      case 'all':
        this.todos.showAll();
        break;
      case 'active':
        this.todos.showActive();
        break;
      case 'completed':
        this.todos.showCompleted();
        break;
    }
  }

  onToggleAll() {
    this.todos.toggleAll();
  }
}
/*  <section>

 <nav class="navbar navbar-default">
 <div class="container-fluid">
 <!-- Brand and toggle get grouped for better mobile display -->
 <div class="navbar-header">
 <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
 <span class="sr-only">Toggle navigation</span>
 <span class="icon-bar"></span>
 <span class="icon-bar"></span>
 <span class="icon-bar"></span>
 </button>
 <a class="navbar-brand" href="#">Brand</a>
 </div>

 <!-- Collect the nav links, forms, and other content for toggling -->
 <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
 <ul class="nav navbar-nav">
 <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
 <li><a href="#">Link</a></li>
 <li class="dropdown">
 <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
 <ul class="dropdown-menu">
 <li><a href="#">Action</a></li>
 <li><a href="#">Another action</a></li>
 <li><a href="#">Something else here</a></li>
 <li role="separator" class="divider"></li>
 <li><a href="#">Separated link</a></li>
 <li role="separator" class="divider"></li>
 <li><a href="#">One more separated link</a></li>
 </ul>
 </li>
 </ul>
 <form class="navbar-form navbar-left">
 <div class="form-group">
 <input type="text" class="form-control" placeholder="Search">
 </div>
 <button type="submit" class="btn btn-default">Submit</button>
 </form>
 <ul class="nav navbar-nav navbar-right">
 <li><a href="#">Link</a></li>
 <li class="dropdown">
 <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
 <ul class="dropdown-menu">
 <li><a href="#">Action</a></li>
 <li><a href="#">Another action</a></li>
 <li><a href="#">Something else here</a></li>
 <li role="separator" class="divider"></li>
 <li><a href="#">Separated link</a></li>
 </ul>
 </li>
 </ul>
 </div><!-- /.navbar-collapse -->
 </div><!-- /.container-fluid -->
 </nav>

 </sectoion> */
export default {
  template: `


    <section class="todoapp">
      <section class="header">
        <h1>todos</h1>
        <header class="header-input">
          <todo-text-input
            placeholder="What needs to get done?"
            on-save="$ctrl.onSave(task)">
          </todo-text-input>
        </header>
      </section>
      <section class="main">
        <todo-batch-toggle on-toggle="$ctrl.onToggleAll()" todos="$ctrl.todos.list" ng-if="$ctrl.todos.hasTasks()"></todo-batch-toggle>
        <div class="todo-list">
          <todo-item todo="todo" ng-repeat="todo in $ctrl.todos.filteredList"></todo-item>
        </div>
      </section>
      <todo-footer ng-if="$ctrl.todos.hasTasks()" todos="$ctrl.todos">
        <todo-list-filter on-filter="$ctrl.onFilter(state)" filter-state="$ctrl.todos.filterState"></todo-list-filter>
      </todo-footer>
    </section>
  `,
  controller: TodoAppController
};
