import { Selector } from 'testcafe';
import loginPage from '../page-models/loginPage';
require('dotenv').config()

fixture `login scenarios`
    .page `https://education-qa.wiley.com/`;

test('login as instructor', async t => {
    await t
    .typeText(Selector(loginPage.nameInput), process.env.INSTRUCTOR_EMAIL)
    .typeText(Selector(loginPage.passwordInput), process.env.INSTRUCTOR_PASSWORD)
    .click(loginPage.loginButton)
    .wait(10000)
    .expect((loginPage.userRoleBadge).innerText).eql('Instructor')
})

test('login as student', async t => {
    await t
    .typeText(Selector(loginPage.nameInput), process.env.STUDENT_EMAIL)
    .typeText(Selector(loginPage.passwordInput), process.env.STUDENT_PASSWORD)
    .click(loginPage.loginButton)
    .expect((loginPage.userRoleBadge).innerText).eql('Student')
})