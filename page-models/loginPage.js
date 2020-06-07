import { Selector } from 'testcafe';

class LoginPage {
    constructor () {
        this.nameInput = Selector('input[type=email]');
        this.passwordInput = Selector('input[type=password]');
        this.loginButton = Selector('.login-form__buttons').child(0);
        this.userRoleBadge = Selector('.user-badge__role');
    }
}

export default new LoginPage();