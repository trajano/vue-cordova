// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits the app root url and goes to about page", () => {
    cy.visit("/");
    cy.contains("h1", "Welcome to Your Vue.js + TypeScript App");
    cy.get('a[href="#/about"]').click();
    cy.contains("div", "This is an about page");
  });
});
