/// <reference types="cypress" />

describe("Testing of EA App", () => {
  //only run for the next "it"
  before("Call for a particular it block", () => {
    cy.visit("http://executeautomation.com/site");
  });

  /*beforeEach("Call for all it block", () =>{
    cy.visit("http://executeautomation.com/site");
  })*/

  it.only("Testing EA Site for assertion", () => {
    cy.percySnapshot("Before");
    //cy.get("[aria-label='jump to slide 2']", {timeout:60000}).should("have.class", "ls-nav-active");
    cy.get("[aria-label='jump to slide 2']", { timeout: 60000 }).should(
      ($x) => {
        expect($x).to.have.class("ls-nav-active");
      }
    );
    cy.percySnapshot("After");
  });
});
