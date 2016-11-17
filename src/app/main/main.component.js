class mainController {

  btnSuccessClick() {
    console.log("btnSuccessClick");
  }
}

export default {
  bindings: {},
  transclude: true,
  template: require('./main.html'),
  controller: mainController,
  controllerAs: 'vm'
};
