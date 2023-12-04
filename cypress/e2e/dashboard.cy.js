
describe("Dasbaord cases",()=>{
    it("verify plugin is there or not in dashbaord and click on it",()=>{
        cy.wait(3000);
        cy.login('admin', 'Sandhya@123??');
        cy.url().should('eq', 'http://localhost/wordpress/wp-admin/');
        //plugin exist in dashboard
        cy.get("#menu-plugins > .wp-has-submenu > .wp-menu-name").should("exist");
        cy.get("#menu-plugins > .wp-has-submenu > .wp-menu-name").click();
        //delete hello dolly plugins from plugins
        //cy.get("#delete-hello-dolly").click();
        cy.get("[data-slug='hello-dolly'] > .plugin-title > strong").should("not.exist");
       })
    
    
       it("Verify whether in the installed plugins everest plugin is there or not",()=>{
        cy.wait(3000);
        cy.login('admin', 'Sandhya@123??');
        cy.url().should('eq', 'http://localhost/wordpress/wp-admin/');
       // plugin exist in dashboard
        cy.get("#menu-plugins > .wp-has-submenu > .wp-menu-name").should("exist");
        cy.get("#menu-plugins > .wp-has-submenu > .wp-menu-name").click();
        cy.get("#plugin-search-input").should("exist");
        //while searching evereset it should be exist in the installed plugin list
        cy.get("#plugin-search-input").type("Everest");
        //everest should exist in the list after search
        cy.get(".plugin-title").should("exist");
       })
    
       it("If the plugin is actiavte then deactivate it else activate it",()=>
       {
        cy.wait(3000);
        cy.login('admin', 'Sandhya@123??' );
        cy.url().should('eq', 'http://localhost/wordpress/wp-admin/');
       // plugin exist in dashboard
        cy.get("#menu-plugins > .wp-has-submenu > .wp-menu-name").should("exist");
        cy.get("#menu-plugins > .wp-has-submenu > .wp-menu-name").click();
        cy.get("#plugin-search-input").should("exist");
        //while searching evereset it should be exist in the installed plugin list
        cy.get("#plugin-search-input").type("Everest");
        //everest should exist in the list after search
        cy.get(".plugin-title").should("exist");
        //deactivate or actiavte
         cy.get('span').then(($span) => {
        const spanClass = $span.attr('class'); 
        const linkSelector = $span.find('a').attr('id'); 
      
        if (spanClass.includes('activate')) {
          //  if the span has the 'activate' class
          cy.log("Span has the 'activate' class");
          // Your activation code here
          cy.get("#activate-everest-forms").click();
          cy.log("The plugin is already deactivated or an error occurred.");
        } else if (spanClass.includes('deactivate')) {
          // if the span has the 'deactivate' class
          cy.log("Span has the 'deactivate' class");
          // deactivation code 
          cy.get("#deactivate-everest-forms").click();
          cy.get("#evf-deactivate-feedback-other").click();
          cy.get(":nth-child(7) > .evf-feedback-text").type("my choice");
          // Click submit to deactivate
          cy.get(".evf-deactivate-feedback-popup-form-footer > .submit").click();
          cy.log("The plugin has been deactivated.");
        } else {
          //  other cases if needed
          cy.log("Span class is neither 'activate' nor 'deactivate'.");
        }
      });
      
    });
})
