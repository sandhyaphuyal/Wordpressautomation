describe('Everest wordpress', () => {
    beforeEach(() => {
        cy.visit('http://localhost/wordpress/login');
      });
      it('should verify navigation to WordPress login page and proper login page form', () => {
        cy.url().should('eq', 'http://localhost/wordpress/wp-login.php');
        cy.get('#loginform').should('exist');
      });
    
      it('should verify giving valid credentials allows the user to login', () => {
        // Use the custom login command
        cy.wait(1000);
        cy.login('admin', 'Sandhya@123??');
        cy.url().should('eq', 'http://localhost/wordpress/wp-admin/');
      });
    
      it('should show error for login with invalid username', () => {
        cy.wait(1000);
        cy.login('invalid_username', 'Sandhya@123??');
        cy.get("#login_error > p").should('exist');
      });
    
      it('should show error for login with invalid password', () => {
        cy.wait(1000);
        cy.login('admin', 'invalid_password');
        cy.get("#login_error").should('exist');
      });
    
      it('should show error for login with both invalid username and password', () => {
        cy.wait(1000);
        cy.login('invalid_username', 'invalid_password');
        cy.get("#login_error > p").should('exist');
      });

     it("verify user able to logout or not",()=>{
    cy.wait(1000);
    cy.login('admin', 'Sandhya@123??');
    cy.url().should('eq', 'http://localhost/wordpress/wp-admin/');
    cy.get('#wp-admin-bar-my-account > a').invoke('mouseover');
    cy.get("li[id='wp-admin-bar-logout'] a[class='ab-item']").click({force:true});
    cy.url().should('eq', 'http://localhost/wordpress/wp-login.php?loggedout=true&wp_lang=en_US');
     cy.get('#loginform').should('exist');
     });

});