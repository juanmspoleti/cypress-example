/// <reference types="cypress" />

describe("Testing of EA App", () => {
  before("Call for a particular it block", () => {
    cy.visit("");
    cy.fixture("eauser").as("user");

    cy.get("@user").then((user) => {
      cy.login(user.UserName, user.Password);
    });
  });

  it("Login application", () => {
    cy.percySnapshot("LoginBefore");
    cy.contains("Employee List").click();

    cy.get(".table")
      .find("tr")
      .contains("Prashanth")
      .parent()
      .contains("Benefits")
      .click();

    cy.get(".table").find("tr").as("rows");
    cy.get("@rows").then(($row) => {
      debugger;
      cy.wrap($row).click({ multiple: true });
    });

    //Verify the value from a property
    cy.wrap({ name: "Karthik" })
      .should("have.property", "name")
      .and("eq", "Karthik");

    cy.percySnapshot("LoginAfter");
  });
});
