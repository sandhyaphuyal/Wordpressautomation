Cypress.Commands.add('login', (username, password) => {
    cy.visit('http://localhost/wordpress/wp-login.php');
    cy.wait(3000);
    cy.get("#user_login").type(username);
    cy.wait(3000);
    cy.get("#user_pass").type(password);
    cy.get("#wp-submit").click();
  });