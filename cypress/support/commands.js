// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
 
// ===== CUSTOM COMMANDS (Add to cypress/support/commands.js) ===== //
 Cypress.Commands.add('login', (username, password) => {
    cy.get('#user-name').type(username);
    cy.get('#password').type(password);
    cy.get('#login-button').click();
  });
  
  Cypress.Commands.add('addToCart', (productName) => {
    cy.contains('.inventory_item_name', productName)
      .parents('.inventory_item')
      .find('button').click();
  });
  
  Cypress.Commands.add('removeFromCart', (productName) => {
    cy.contains('.inventory_item_name', productName)
      .parents('.inventory_item')
      .find('button').click();
  });
  
  Cypress.Commands.add('checkout', (firstName, lastName, postalCode) => {
    cy.get('.shopping_cart_link').click();
    cy.get('#checkout').click();
    cy.get('#first-name').type(firstName);
    cy.get('#last-name').type(lastName);
    cy.get('#postal-code').type(postalCode);
    cy.get('#continue').click();
    cy.get('#finish').click();
  });