//import './login.scss'

class Ctrl {
    /** @ngInject */
        constructor(Login, Common) {
        // DI
        this.Login = Login;
        this.user = Common.user;
     //   this.login = this.login.value || '';
    //    this.password = this.password.value || '';
    }

    $onInit() {
        //  this.Project.getList().then(list => this.list = list);

    }
    btnLoginClick() {
        console.log("btnLoginClick");

        this.Login.login().then(list => {
            this.user = list;
            console.log(list);
            console.log(this.value);
        });
    }
    //save() {
    //    this.onSave({
    //        task: this.text
    //    });
    //
    //    this.text = '';
    //}

    //onSave(task) {
    //    if (!task) return;
    //}
    ////save() {
    //    this.onSave({
    //        task: this.text
    //    });
    //
    //    this.text = '';
    //}
    //
//    onEscape() {
        //this.onSave({
        //    task: this.value
        //});
 //   }
}

export default {
    template: require('./login.html'),
    controller: Ctrl,
    controllerAs: 'vm'
};

