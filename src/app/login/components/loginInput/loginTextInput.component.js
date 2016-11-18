class Ctrl {
  //constructor() {
  //  this.text = this.value || '';
  //}
  //
  //
  //onEscape() {
  //  this.onSave({
  //    task: this.value
  //  });
  //}
}

export default {
  bindings: {
    placeholder: '@',
    value: '@',
    onSave: '&'
  },
  template: `
      <input class="new-todo" />
 `,
  controller: Ctrl,
  controllerAs: 'vm'
}
