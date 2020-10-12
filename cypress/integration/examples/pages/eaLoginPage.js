/// <reference types="cypress" />

export class EALoginPage {
  performLogin(username, password) {
    cy.get("#UserName").type(username);
    cy.get("#Password").type(password, { log: false });
  }

  clickLoginButton() {
    cy.get(".btn").click();
  }
}

export const loginPage = new EALoginPage();
