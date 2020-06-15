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

### 1. Create stable tests

With testcafe there are no manual timeouts, it automatically waits for page loads and XHRs to be executed before each actions to be executed. You can configure this timeout as you required if the elements load faster.

### 2. Write in latest JS or Typescripts

Testcafe supports latest javascript features, if you prefer more of a typed language you have the capability to use Typescript in writing your tests.

### 3. Detect Js errors in your code

With this features you can find if any js errors containing in the testing web page. If any errors found your test case will be failed. This feature is enabled in default. So if your test case execution fails without actually running the test script. This could be one of the reason. So if you wants to ignore those errors, you can disable it when running your test scripts.

### 4. Launch concurrent tests

This is one of my favourite feature in testcafe. You can run your tests parallelly opening multiple instance of the same browser. With this feature you can decrease the test execution time of your test suite.

### 5. Build readable tests with page objects

Page object modal is a test automation pattern use commonly with node js test frameworks. This allows you to create an abstraction of the tested page and use it in test code to refer the elements. As the testcafe's test API includes high level high level selector libraries, assertions and etc, you can combine them to implement readable tests with Page Objects. 

### 6. Include tests in continuous integration system

With the enability of headless mode you can execute test in a console and its reports can be viewed in a CI's system interface

### 7. Rapid test development

This is one of the new feature introduced by the tescafe named Live mode. This allows you to edit your testcafe tests on the fly. Changes you made on your tests will immediately restart the test and you will see test results instantly.  
