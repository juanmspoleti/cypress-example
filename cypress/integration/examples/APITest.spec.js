/// <reference types="cypress" />

context("Test api from fake JSON Server", () => {
  beforeEach("DELETE before creating a new value", () => {
    cy.request({
      method: "DELETE",
      url: "http://localhost:3000/posts/2",
      failOnStatusCode: false,
    }).then((x) => {
      expect(x.body).to.be.empty;
    });
  });

  it("Test GET functionality of JSON Server", () => {
    cy.request("http://localhost:3000/posts/1")
      .its("body")
      .should("have.property", "id");
  });

  it("Test POST functionality of JSON Server", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/posts",
      body: {
        id: 2,
        title: "ExecuteAutomation",
        author: "KarthikKK",
      },
    }).then((res) => {
      expect(res.body).has.property("title", "ExecuteAutomation");
    });
  });
});
