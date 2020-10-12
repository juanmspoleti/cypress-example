/// <reference types="cypress" />

describe("Testing of EA App", () => {
  beforeEach("Call for a particular it block", () => {
    cy.visit("https://accounts.lambdatest.com/login");
  });

  it("XHR example", () => {
    cy.server();

    cy.route({
      method: "GET",
      url: "/api/user/organization/team",
    }).as("team");

    cy.route({
      method: "GET",
      url: "/api/user/organization/automation-test-summary",
    }).as("apicheck");

    cy.fixture("eauser").as("user");

    cy.get("@user").then((lamdauser) => {
      cy.get("[name='email']").debug().type(lamdauser.UserName);
      cy.get("[name='password']")
        .debug()
        .type(lamdauser.Password, { log: false });
    });
    cy.get("[class='btn btn-dark submit-btn']").debug().click();

    cy.get("team").then((xhr) => {
      expect(xhr.status).to.eq(200);
      expect(xhr.response.body.data[0]).to.have.property("role", "Admin");
    });

    // Explicit Assertion
    cy.get("apicheck").then((xhr) => {
      expect(xhr.status).to.eq(200);
      expect(xhr.response.body.data[0]).to.have.property("maxQueue", 150);
    });

    //Implicit assertion
    cy.get("apicheck")
      .its("response.body")
      .should("have.property", "maxQueue")
      .and("eql", 150);
  });

  it("Verify LambdaTest cookies", () => {
    cy.fixture("eauser").as("user");

    cy.get("@user").then((lamdauser) => {
      cy.get("[name='email']").debug().type(lamdauser.UserName);
      cy.get("[name='password']")
        .debug()
        .type(lamdauser.Password, { log: false });
    });
    cy.get("[class='btn btn-dark submit-btn']").debug().click();

    cy.getCookie("user_id").should("have.property", "value", "41224");
  });
});
