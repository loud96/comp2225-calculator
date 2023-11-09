describe('Calculator division Function', () => {
    beforeEach(() => {
      //Visit the calculator page on each test
      cy.visit('/index.html');
    });
  
    it('should divide two numbers correctly', () => {
      //Enter numbers and perform division
        cy.get('button[value="8"]').click();
        cy.get('button[value="/"]').click();
        cy.get('button[value="2"]').click();
        cy.get('button[value="="]').click();
    
        //Verify that the result is correct
        cy.get('.output').should('have.value', '4');
    });
  
    it('should handle division with negative numbers', () => {
      //Enter negative numbers and perform division
      cy.get('button[value="6"]').click();
      cy.get('button[value="+/-"]').click();
      cy.get('button[value="/"]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="="]').click();
  
      //Verify that the result is correct
      cy.get('.output').should('have.value', '-3');
    });
  
    it('should handle decimal numbers in division', () => {
      //Enter decimal numbers and perform division
      cy.get('button[value="6"]').click();
      cy.get('button[value="."]').click();
      cy.get('button[value="5"]').click();
      cy.get('button[value="/"]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="="]').click();
  
      //Verify that the result is correct
      cy.get('.output').should('have.value', '3.25');
    });
  
    it('should handle division with zero', () => {
      //divide a number by zero 
      cy.get('button[value="8"]').click();
      cy.get('button[value="/"]').click();
      cy.get('button[value="0"]').click();
      cy.get('button[value="="]').click();
  
      //Verify that the result is correct
      cy.get('.output').should('have.value', 'Infinity');
    });
  
    it('should clear the display after division', () => {
      //Perform an division and then clear the display
      cy.get('button[value="5"]').click();
      cy.get('button[value="/"]').click();
      cy.get('button[value="1"]').click();
      cy.get('button[value="="]').click();
      cy.get('button[value="C"]').click();
  
      //Verify that the result is correct
      cy.get('.output').should('have.value', '');
    });
  
    it('should handle division of large numbers', () => {
      //divide large numbers
      cy.get('button[value="5"]').click();
      cy.get('button[value="8"]').click();
      cy.get('button[value="0"]').click();
      cy.get('button[value="0"]').click();
      cy.get('button[value="/"]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="0"]').click();
      cy.get('button[value="0"]').click();
      cy.get('button[value="="]').click();
  
      //Verify that the result is correct
      cy.get('.output').should('have.value', '29');

    });
  });
  