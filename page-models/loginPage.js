import { Selector } from 'testcafe';

class LoginPage {
    constructor () {
        this.signIn = Selector('.login')
        this.nameInput = Selector('#email');
        this.passwordInput = Selector('#passwd');
        this.loginButton = Selector('#SubmitLogin');
        this.userRoleBadge = Selector('.account');
        this.errorMessage = Selector('.alert-danger').child(1).child(0);
    }
}

export default new LoginPage();