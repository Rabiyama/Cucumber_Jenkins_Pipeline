$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Feature",
  "description": "Verify if user is able to Login in to the site",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Login as a authenticated user",
  "description": "",
  "id": "login-feature;login-as-a-authenticated-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is  on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user navigates to Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and Password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "success message is displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});