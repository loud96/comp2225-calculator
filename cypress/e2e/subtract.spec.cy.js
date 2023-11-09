describe('Calculator subtraction Function', () => {
    beforeEach(() => {
      // Visit the calculator webpage
      cy.visit('/index.html');
    });
  
    it('should subtract two numbers correctly', () => {
      // Enter numbers and perform subtraction
        cy.get('button[value="8"]').click();
        cy.get('button[value="-"]').click();
        cy.get('button[value="2"]').click();
        cy.get('button[value="="]').click();
    
        //Verify that the result is correct
        cy.get('.output').should('have.value', '6');
    });
  
    it('should handle subtraction with negative numbers', () => {
      // Enter negative numbers and perform subtraction
      cy.get('button[value="5"]').click();
      cy.get('button[value="+/-"]').click();
      cy.get('button[value="-"]').click();
      cy.get('button[value="9"]').click();
      cy.get('button[value="="]').click();
  
      //Verify that the result is correct
      cy.get('.output').should('have.value', '-14');
    });
  
    it('should handle decimal numbers in subtraction', () => {
      // Enter decimal numbers and perform subtraction
      cy.get('button[value="5"]').click();
      cy.get('button[value="."]').click();
      cy.get('button[value="5"]').click();
      cy.get('button[value="-"]').click();
      cy.get('button[value="3"]').click();
      cy.get('button[value="="]').click();
  
      //Verify that the result is correct
      cy.get('.output').should('have.value', '2.5');
    });
  
    it('should handle subtraction with zero', () => {
      // subtract a number from zero 
      cy.get('button[value="0"]').click();
      cy.get('button[value="-"]').click();
      cy.get('button[value="9"]').click();
      cy.get('button[value="="]').click();
  
      //Verify that the result is correct
      cy.get('.output').should('have.value', '-9');
    });
  
    it('should clear the display after subtraction', () => {
      // Perform an subtraction and then clear the display
      cy.get('button[value="5"]').click();
      cy.get('button[value="-"]').click();
      cy.get('button[value="9"]').click();
      cy.get('button[value="="]').click();
      cy.get('button[value="C"]').click();
  
      //Verify that the result is correct
      cy.get('.output').should('have.value', '');
    });
  
    it('should handle subtraction of large numbers', () => {
      // subtract very large numbers
      cy.get('button[value="5"]').click();
      cy.get('button[value="8"]').click();
      cy.get('button[value="1"]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="-"]').click();
      cy.get('button[value="9"]').click();
      cy.get('button[value="7"]').click();
      cy.get('button[value="6"]').click();
      cy.get('button[value="="]').click();
  
      //Verify that the result is correct
      cy.get('.output').should('have.value', '4836');

    });
  });
  