/// <reference types="cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("https://fineuploader.com/demos.html");
  });

  it("File upload", () => {
    cy.fixture("random.png", "base64").then((fileContent) => {
      cy.get(
        "#fine-uploader-gallery > div > div.qq-upload-button-selector.qq-upload-button > input[type=file]"
      ).attachFile(
        {
          fileContent,
          fileName: "random.png",
          mimeType: "image/png",
        },
        {
          uploadType: "input",
        }
      );
    });
  });
});
