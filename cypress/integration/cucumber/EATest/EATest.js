import { Given, When } from "cypress-cucumber-preprocessor/steps";
import { loginPage } from "../../examples/pages/eaLoginPage";

Given("I visit EA Site", () => {
  cy.visit("");
});

When("I click login link", () => {
  cy.contains("Login").click();
});

When("I login as a user with {string} and {string}", (username, password) => {
  loginPage.performLogin(username, password);
  loginPage.clickLoginButton();
});
