// describe('Sauce Demo Test Suite', () => {
//     beforeEach(() => {
//       cy.visit('https://www.saucedemo.com/');
//     });
  
//     // Valid Login Test
//     it('should login successfully with valid credentials', () => {
//       cy.get('#user-name').type('standard_user');
//       cy.get('#password').type('secret_sauce');
//       cy.get('#login-button').click();
      
//       cy.get('.product_label').should('contain', 'Products');
//     });
  
//     // Invalid Login Scenarios
//     it('should show error for invalid username', () => {
//       cy.get('#user-name').type('invalid_user');
//       cy.get('#password').type('secret_sauce');
//       cy.get('#login-button').click();
      
//       cy.get('.error-message-container').should('contain', 'Username and password do not match any user in this service');
//     });
  
//     it('should show error for invalid password', () => {
//       cy.get('#user-name').type('standard_user');
//       cy.get('#password').type('wrong_password');
//       cy.get('#login-button').click();
      
//       cy.get('.error-message-container').should('contain', 'Username and password do not match any user in this service');
//     });
  
//     it('should show error for empty username', () => {
//       cy.get('#password').type('secret_sauce');
//       cy.get('#login-button').click();
      
//       cy.get('.error-message-container').should('contain', 'Username is required');
//     });
  
//     it('should show error for empty password', () => {
//       cy.get('#user-name').type('standard_user');
//       cy.get('#login-button').click();
      
//       cy.get('.error-message-container').should('contain', 'Password is required');
//     });
  
//     it('should show error for empty username and password', () => {
//       cy.get('#login-button').click();
      
//       cy.get('.error-message-container').should('contain', 'Username is required');
//     });
  
//     // Valid Scenario for Adding Product to Cart
//     it('should add product to cart successfully', () => {
//       cy.get('#user-name').type('standard_user');
//       cy.get('#password').type('secret_sauce');
//       cy.get('#login-button').click();
      
//       cy.get('#add-to-cart-sauce-labs-backpack').click();
//       cy.get('.shopping_cart_badge').should('contain', '1');
//     });
  
//     // Invalid Scenario for Adding Product to Cart
//     it('should show error when trying to add product to cart without logging in', () => {
//       cy.get('#add-to-cart-sauce-labs-backpack').click(); // Attempt to add product without login
//       cy.get('.error-message-container').should('contain', 'You must login to perform this action');
//     });
  
//     // Checkout Process - Valid Scenario
//     it('should complete checkout process successfully', () => {
//       // Log in
//       cy.get('#user-name').type('standard_user');
//       cy.get('#password').type('secret_sauce');
//       cy.get('#login-button').click();
      
//       // Add product to cart
//       cy.get('#add-to-cart-sauce-labs-backpack').click();
//       cy.get('.shopping_cart_link').click();
//       cy.get('#checkout').click();
      
//       cy.get('#first-name').type('John');
//       cy.get('#last-name').type('Doe');
//       cy.get('#postal-code').type('12345');
//       cy.get('#continue').click();
      
//       cy.get('.title').should('contain', 'Checkout: Overview');
//     });
  
//     // Invalid Checkout Scenarios
//     it('should show error for missing first name', () => {
//       cy.get('#user-name').type('standard_user');
//       cy.get('#password').type('secret_sauce');
//       cy.get('#login-button').click();
      
//       cy.get('#add-to-cart-sauce-labs-backpack').click();
//       cy.get('.shopping_cart_link').click();
//       cy.get('#checkout').click();
      
//       cy.get('#last-name').type('Doe');
//       cy.get('#postal-code').type('12345');
//       cy.get('#continue').click();
      
//       cy.get('.error-message-container').should('contain', 'First Name is required');
//     });
//     // it('should show error for missing last name', () => {
//     //   cy.get('#user-name').type('standard_user');
//     //   cy.get('#password').type('secret_sauce');
//     //   cy.get('#login').click();
//     // });
// });
// //   Copy
// //   Regenerate

// describe('SauceDemo Automation Tests', () => {
//     beforeEach(() => {
//       cy.visit('https://www.saucedemo.com/');
//     });
  
//     // ===== LOGIN TESTS ===== //
//     describe('Login Tests', () => {
//       it('TC-LOGIN-01: Valid Login (standard_user)', () => {
//         cy.login('standard_user', 'secret_sauce');
//         cy.url().should('include', '/inventory.html');
//       });
  
//       it('TC-LOGIN-02: Invalid Login (wrong password)', () => {
//         cy.login('standard_user', 'wrong_password');
//         cy.get('[data-test="error"]').should('contain', 'Username and password do not match');
//       });
  
//       it('TC-LOGIN-03: Locked User (locked_out_user)', () => {
//         cy.login('locked_out_user', 'secret_sauce');
//         cy.get('[data-test="error"]').should('contain', 'Sorry, this user has been locked out');
//       });
  
//       it('TC-LOGIN-04: Empty Username', () => {
//         cy.login('', 'secret_sauce');
//         cy.get('[data-test="error"]').should('contain', 'Username is required');
//       });
  
//       it('TC-LOGIN-05: Empty Password', () => {
//         cy.login('standard_user', '');
//         cy.get('[data-test="error"]').should('contain', 'Password is required');
//       });
//     });
  
//     // ===== PRODUCT & CHECKOUT TESTS ===== //
//     describe('Product & Checkout Tests', () => {
//       beforeEach(() => {
//         cy.login('standard_user', 'secret_sauce');
//       });
  
//       // === ADD PRODUCT TESTS === //
//       it('TC-ADD-01: Add Single Product to Cart', () => {
//         cy.addToCart('Sauce Labs Backpack');
//         cy.get('.shopping_cart_badge').should('contain', '1');
//       });
  
//       it('TC-ADD-02: Add Multiple Products to Cart', () => {
//         cy.addToCart('Sauce Labs Backpack');
//         cy.addToCart('Sauce Labs Bike Light');
//         cy.get('.shopping_cart_badge').should('contain', '2');
//       });
  
//       it('TC-ADD-NEG-01: Remove Product from Cart', () => {
//         cy.addToCart('Sauce Labs Backpack');
//         cy.removeFromCart('Sauce Labs Backpack');
//         cy.get('.shopping_cart_badge').should('not.exist');
//       });
  
//       // === CHECKOUT TESTS === //
//       it('TC-CHECKOUT-01: Complete Checkout Successfully', () => {
//         cy.addToCart('Sauce Labs Backpack');
//         cy.checkout('John', 'Doe', '12345');
//         cy.url().should('include', '/checkout-complete.html');
//         cy.get('.complete-header').should('contain', 'Thank you for your order!');
//       });
  
//       it('TC-CHECKOUT-NEG-01: Checkout with Empty Cart', () => {
//         cy.get('.shopping_cart_link').click();
//         cy.get('#checkout').should('be.disabled');
//       });
  
//       it('TC-CHECKOUT-NEG-02: Checkout Missing First Name', () => {
//         cy.addToCart('Sauce Labs Backpack');
//         cy.get('.shopping_cart_link').click();
//         cy.get('#checkout').click();
//         cy.get('#first-name').type(' ');
//         cy.get('#last-name').type('Doe');
//         cy.get('#postal-code').type('12345');
//         cy.get('#continue').click();
//         cy.get('[data-test="error"]').should('contain', 'First Name is required');
//       });
  
//       it('TC-CHECKOUT-NEG-03: Checkout Missing Postal Code', () => {
//         cy.addToCart('Sauce Labs Backpack');
//         cy.get('.shopping_cart_link').click();
//         cy.get('#checkout').click();
//         cy.get('#first-name').type('John');
//         cy.get('#last-name').type('Doe');
//         cy.get('#postal-code').type(' ');
//         cy.get('#continue').click();
//         cy.get('[data-test="error"]').should('contain', 'Postal Code is required');
//       });
  
//       it('TC-CHECKOUT-NEG-04: Cancel Checkout Process', () => {
//         cy.addToCart('Sauce Labs Backpack');
//         cy.get('.shopping_cart_link').click();
//         cy.get('#checkout').click();
//         cy.get('#cancel').click();
//         cy.url().should('include', '/cart.html');
//       });
//     });
//   });
  
 

// describe('Sauce Demo Test Suite', () => {
//   beforeEach(() => {
//     cy.visit('/');
//   });

//   // Valid Login Test
//   it('should login successfully with valid credentials', () => {
//     cy.get('#user-name').type('standard_user');
//     cy.get('#password').type('secret_sauce');
//     cy.get('#login-button').click();
    
//     // cy.get('.product_label').should('contain', 'Products');
//     cy.url().should('include', '/inventory.html');
//   });


//   // Invalid Login Scenarios
//   it('should show error for invalid username', () => {
//     cy.get('#user-name').type('invalid_user');
//     cy.get('#password').type('secret_sauce');
//     cy.get('#login-button').click();
    
//     cy.get('.error-message-container').should('contain', 'Username and password do not match any user in this service');
//   });


//   it('should show error for invalid password', () => {
//     cy.get('#user-name').type('standard_user');
//     cy.get('#password').type('wrong_password');
//     cy.get('#login-button').click();
    
//     cy.get('.error-message-container').should('contain', 'Username and password do not match any user in this service');
//   });


//   it('should show error for empty username', () => {
//     cy.get('#password').type('secret_sauce');
//     cy.get('#login-button').click();
    
//     cy.get('.error-message-container').should('contain', 'Username is required');
//   });


//   it('should show error for empty password', () => {
//     cy.get('#user-name').type('standard_user');
//     cy.get('#login-button').click();
    
//     cy.get('.error-message-container').should('contain', 'Password is required');
//   });


//   it('should show error for empty username and password', () => {
//     cy.get('#login-button').click();
    
//     cy.get('.error-message-container').should('contain', 'Username is required');
//   });


// });

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
    