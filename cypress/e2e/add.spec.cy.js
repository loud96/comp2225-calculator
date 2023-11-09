describe('Calculator Addition Function', () => {
    beforeEach(() => {
      // Visit the calculator webpage
      cy.visit('/index.html');
    });
  
    it('should add two numbers correctly', () => {
      // Enter numbers and perform addition
        cy.get('button[value="5"]').click();
        cy.get('button[value="+"]').click();
        cy.get('button[value="9"]').click();
        cy.get('button[value="="]').click();
    
        //Verify that the result is correct
        cy.get('.output').should('have.value', '14');
    });
  
    it('should handle addition with negative numbers', () => {
      // Enter negative numbers and perform addition
      cy.get('button[value="5"]').click();
      cy.get('button[value="+/-"]').click();
      cy.get('button[value="+"]').click();
      cy.get('button[value="9"]').click();
      cy.get('button[value="="]').click();
  
      //Verify that the result is correct
      cy.get('.output').should('have.value', '4');
    });
  
    it('should handle decimal numbers in addition', () => {
      // Enter decimal numbers and perform addition
      cy.get('button[value="5"]').click();
      cy.get('button[value="."]').click();
      cy.get('button[value="5"]').click();
      cy.get('button[value="+"]').click();
      cy.get('button[value="3"]').click();
      cy.get('button[value="="]').click();
  
      //Verify that the result is correct
      cy.get('.output').should('have.value', '8.5');
    });
  
    it('should handle addition with zero', () => {
      // Add zero to a number
      cy.get('button[value="0"]').click();
      cy.get('button[value="+"]').click();
      cy.get('button[value="9"]').click();
      cy.get('button[value="="]').click();
  
      //Verify that the result is correct
      cy.get('.output').should('have.value', '9');
    });
  
    it('should clear the display after addition', () => {
      // Perform an addition and then clear the display
      cy.get('button[value="5"]').click();
      cy.get('button[value="+"]').click();
      cy.get('button[value="9"]').click();
      cy.get('button[value="="]').click();
      cy.get('button[value="C"]').click();
  
      //Verify that the result is correct
      cy.get('.output').should('have.value', '');
    });
  
    it('should handle addition of large numbers', () => {
      // Add very large numbers
      cy.get('button[value="5"]').click();
      cy.get('button[value="8"]').click();
      cy.get('button[value="1"]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="+"]').click();
      cy.get('button[value="9"]').click();
      cy.get('button[value="7"]').click();
      cy.get('button[value="6"]').click();
      cy.get('button[value="="]').click();
  
      //Verify that the result is correct
      cy.get('.output').should('have.value', '6788');

    });
  });
  