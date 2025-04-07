
describe('SauceDemo Automation Tests', () => {
    beforeEach(() => {
      cy.visit('/');
    });
    
    // ===== LOGIN TESTS ===== //
    describe('Login Tests', () => {
      it('TC-LOGIN-01: Valid Login (standard_user)', () => {
        cy.login('standard_user', 'secret_sauce');
        cy.url().should('include', '/inventory.html');
      });
      
      it('TC-LOGIN-02: Invalid Login (wrong password)', () => {
        cy.login('standard_user', 'wrong_password');
        cy.get('[data-test="error"]').should('contain', 'Username and password do not match');
      });
      
      it('TC-LOGIN-03: Locked User (locked_out_user)', () => {
        cy.login('locked_out_user', 'secret_sauce');
        cy.get('[data-test="error"]').should('contain', 'Sorry, this user has been locked out');
      });
      
      it('TC-LOGIN-04: Empty Username', () => {
        cy.login('', 'secret_sauce');
        cy.get('[data-test="error"]').should('contain', 'Username is required');
      });
      
      it('TC-LOGIN-05: Empty Password', () => {
        cy.login('standard_user', '');
        cy.get('[data-test="error"]').should('contain', 'Password is required');
      });
    });
    
    // ===== PRODUCT & CHECKOUT TESTS ===== //
    describe('Product & Checkout Tests', () => {
      beforeEach(() => {
        cy.login('standard_user', 'secret_sauce');
    });
    
    // === ADD PRODUCT TESTS === //
    it('TC-ADD-01: Add Single Product to Cart', () => {
      cy.addToCart('Sauce Labs Backpack');
      cy.get('.shopping_cart_badge').should('contain', '1');
    });
    
    it('TC-ADD-02: Add Multiple Products to Cart', () => {
      cy.addToCart('Sauce Labs Backpack');
      cy.addToCart('Sauce Labs Bike Light');
      cy.get('.shopping_cart_badge').should('contain', '2');
    });
    
    it('TC-ADD-NEG-01: Remove Product from Cart', () => {
      cy.addToCart('Sauce Labs Backpack');
      cy.removeFromCart('Sauce Labs Backpack');
      cy.get('.shopping_cart_badge').should('not.exist');
    });
    
    // === CHECKOUT TESTS === //
    it('TC-CHECKOUT-01: Complete Checkout Successfully', () => {
      cy.addToCart('Sauce Labs Backpack');
      cy.checkout('John', 'Doe', '12345');
      cy.url().should('include', '/checkout-complete.html');
      cy.get('.complete-header').should('contain', 'Thank you for your order!');
    });
    
    it('TC-CHECKOUT-NEG-01: Checkout with Empty Cart', () => {
      cy.get('.shopping_cart_link').click();
      cy.get('#checkout').should('be.disabled');
    });
    
    it('TC-CHECKOUT-NEG-02: Checkout Missing First Name', () => {
      cy.addToCart('Sauce Labs Backpack');
      cy.get('.shopping_cart_link').click();
      cy.get('#checkout').click();
      cy.get('#first-name').type(' ');
      cy.get('#last-name').type('Doe');
      cy.get('#postal-code').type('12345');
      cy.get('#continue').click();
      cy.get('[data-test="error"]').should('contain', 'First Name is required');
    });
      
    it('TC-CHECKOUT-NEG-03: Checkout Missing Postal Code', () => {
      cy.addToCart('Sauce Labs Backpack');
      cy.get('.shopping_cart_link').click();
      cy.get('#checkout').click();
      cy.get('#first-name').type('John');
      cy.get('#last-name').type('Doe');
      cy.get('#postal-code').type(' ');
      cy.get('#continue').click();
      cy.get('[data-test="error"]').should('contain', 'Postal Code is required');
    });
    
    it('TC-CHECKOUT-NEG-04: Cancel Checkout Process', () => {
      cy.addToCart('Sauce Labs Backpack');
      cy.get('.shopping_cart_link').click();
      cy.get('#checkout').click();
      cy.get('#cancel').click();
      cy.url().should('include', '/cart.html');
    });
    });
  });
    