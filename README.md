# Testcafe - Nodejs Test Automation Framework

## What is Testcafe

Testcafe is a nodeJs tool to automate end to end web testing and execute tests in many popular platforms for both desktop and mobile. To setup testcafe framework you would only take less than 1 minute, only one `npm` command without any kind of webdriver.

This is an open source tool free to use under MIT license. There is a active community to answer your questions and hundreds of plugins developed by the community to integrate with other tools or to generate custom reports.

## How Testcafe works

Most of the legacy automation tools were relied on webdriver, which emulate the user actions outside the browser. This approach had some drawbacks which limits the test automation engineers' capabilities and complexity in building up a automation framework. Some of these are

* Dependency on third party tools
* Limited browser support
* Boilerplate code
* Low automation

Testcafe is different, the idea that defined testcafe was you really don't need an external web driver to run end to end tests in the web browser, instead page can run all the scripts that emulate user actions. This architecture allows to run your end to end test scripts with cross browsers in cross platforms in any device.

## What testcafe offers you

Following features makes Testcafe more special from other end to end test frameworks.

#### 1. Create stable tests

With testcafe there are no manual timeouts, it automatically waits for page loads and XHRs to be executed before each actions to be executed. You can configure this timeout as you required if the elements load faster.

#### 2. Write in latest JS or Typescripts

Testcafe supports latest javascript features, if you prefer more of a typed language you have the capability to use Typescript in writing your tests.

#### 3. Detect Js errors in your code

With this features you can find if any js errors containing in the testing web page. If any errors found your test case will be failed. This feature is enabled in default. So if your test case execution fails without actually running the test script. This could be one of the reason. So if you wants to ignore those errors, you can disable it when running your test scripts.

#### 4. Launch concurrent tests

This is one of my favourite feature in testcafe. You can run your tests parallelly opening multiple instance of the same browser. With this feature you can decrease the test execution time of your test suite.

#### 5. Build readable tests with page objects

Page object modal is a test automation pattern use commonly with node js test frameworks. This allows you to create an abstraction of the tested page and use it in test code to refer the elements. As the testcafe's test API includes high level high level selector libraries, assertions and etc, you can combine them to implement readable tests with Page Objects.

#### 6. Include tests in continuous integration system

With the enability of headless mode you can execute test in a console and its reports can be viewed in a CI's system interface

#### 7. Rapid test development

This is one of the new feature introduced by the tescafe named Live mode. This allows you to edit your testcafe tests on the fly. Changes you made on your tests will immediately restart the test and you will see test results instantly.  

## Create your first test with TestCafe

### Step 1: Installing testcafe

Ensure that Node.js and npm are installed on your computer and run the following command

`npm install -g testcafe`

### Step 2: Create a node project

Create a node project with `npm init` command. And it will create a `package.json` for your project.

You do not need to create a project if you are just trying out a testcafe test. But for the purpose of organizing test and more dependencies like reporter plugins I created the project.

### Step 3: Create `test.js`, your testcafe test script file

Create directory named fixtures/ in your project add create a test.js file inside it.

Testcafe tests are organized in to categories called fixtures. Fixture can contain multiple tests. As per an example in my project I was using one fixture to test all the test scenarios related to login page. In this way you can organize your test cases as your need. And page user should should navigated can be defined with fixture.page() function. All the tests in this fixture begin execution after navigating to this web page

```js
fixture `WileyPlus login page`
    .page(`https://education.wiley.com/`)

test('Instructor login with correct username and password', async t => {
    /* Test 1 Code */
});

test('Student login with correct username and password', async t => {
    /* Test 2 Code */
});
```

`t` is the testcafe object and it contains several functions to emulate user functions such as .typeText(), click(), expect(). All these functions are async functions. Now add some user functions using those provided methods and capturing elements in web page

First we have to import necessary modules from testcafe to capture elements

`import { Selector } from 'testcafe';`

Then we can use different methods to capture the elements, like by element id, class, or by elements' attributes

```js
import { Selector } from 'testcafe';


fixture `WileyPlus login page`
    .page(`https://education.wiley.com/`)

test('login as instructor', async t => {
    await t
    .typeText(Selector('input[type=email]'),"instructor01")
    .typeText(Selector('input[type=password]'), "instructor_123")
    .click(Selector('.login-form__buttons').child(0))
    .expect(Selector('.user-badge__role').innerText).eql('Instructor')
})
```

In the above code snippet i have used input attribute to capture the elements for username and password text boxes and for login button and users' badge using elements' class. Now you can execute the tests.

### Step 3: Execute testcafe tests


