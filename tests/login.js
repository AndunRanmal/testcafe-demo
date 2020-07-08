import { Selector } from 'testcafe';
import loginPage from '../page-models/loginPage';
require('dotenv').config()

fixture `login scenarios`
    .page `http://automationpractice.com/index.php?id_category=3&controller=category`;

test('login with correct username and password', async t => {
    await t
    .click(loginPage.signIn)
    .typeText(Selector(loginPage.nameInput), "andunranmal@gmail.com")
    .typeText(Selector(loginPage.passwordInput), "123456")
    .click(loginPage.loginButton)
    .wait(10000)
    .expect((loginPage.userRoleBadge).innerText).eql('Andun Ranmal')
})

test('login with correct username and incorrect password', async t => {
    await t
    .click(loginPage.signIn)
    .typeText(Selector(loginPage.nameInput), "andunranmal@gmail.com")
    .typeText(Selector(loginPage.passwordInput), "1234567")
    .click(loginPage.loginButton)
    .expect((loginPage.errorMessage).innerText).eql('Authentication failed.')
})