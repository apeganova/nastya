class Ctrl {
  constructor() {
    this.text = this.value || '';
  }

    save() {
        this.onSave({
            task: this.text
        });

        this.text = '';
    }

  onEscape() {
    this.onSave({
      task: this.value
    });

  }
}

export default {
  bindings: {
    placeholder: '@',
    value: '@',
    onSave: '&'
  },
  template: `
      <input class="new-todo"autofocus=""
             on-escape="vm.onEscape()"
             ng-model="vm.text"
             placeholder="{{vm.placeholder}}" />
 `,
  controller: Ctrl,
  controllerAs: 'vm'
}
