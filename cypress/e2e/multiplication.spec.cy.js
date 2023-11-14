describe('Calculator multiplication Function', () => {
    beforeEach(() => {
      //Visit the calculator page on each test
      cy.visit('/index.html');
    });
  
    it('should multiply two numbers correctly', () => {
      //Enter numbers and perform multiplication
        cy.get('button[value="8"]').click();
        cy.get('button[value="*"]').click();
        cy.get('button[value="2"]').click();
        cy.get('button[value="="]').click();
    
        //Verify that the result is correct
        cy.get('.output').should('have.value', '16');
    });
  
    it('should handle multiplication with negative numbers', () => {
      //Enter negative numbers and perform multiplication
      cy.get('button[value="6"]').click();
      cy.get('button[value="+/-"]').click();
      cy.get('button[value="*"]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="="]').click();
  
      //Verify that the result is correct
      cy.get('.output').should('have.value', '-12');
    });
  
    it('should handle decimal numbers in multiplication', () => {
      //Enter decimal numbers and perform multiplication
      cy.get('button[value="6"]').click();
      cy.get('button[value="."]').click();
      cy.get('button[value="5"]').click();
      cy.get('button[value="*"]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="="]').click();
  
      //Verify that the result is correct
      cy.get('.output').should('have.value', '13');
    });

    it('should handle multiple decimal numbers in multiplication', () => {
      // Enter decimal numbers and perform multiplication
      cy.get('button[value="2"]').click();
      cy.get('button[value="."]').click();
      cy.get('button[value="5"]').click();
      cy.get('button[value="*"]').click();
      cy.get('button[value="0"]').click();
      cy.get('button[value="."]').click();
      cy.get('button[value="5"]').click();

      cy.get('button[value="="]').click();

      //Verify that the result is correct
      cy.get('.output').should('have.value', '8.5');
    });
  
    it('should handle multiplication with zero', () => {
      //multiply a number by zero 
      cy.get('button[value="8"]').click();
      cy.get('button[value="*"]').click();
      cy.get('button[value="0"]').click();
      cy.get('button[value="="]').click();
  
      //Verify that the result is correct
      cy.get('.output').should('have.value', '0');
    });
  
    it('should clear the display after multiplication', () => {
      //Perform an multiplication and then clear the display
      cy.get('button[value="5"]').click();
      cy.get('button[value="*"]').click();
      cy.get('button[value="1"]').click();
      cy.get('button[value="="]').click();
      cy.get('button[value="C"]').click();
  
      //Verify that the result is correct
      cy.get('.output').should('have.value', '');
    });
  
    it('should handle multiplication of large numbers', () => {
      //multiply large numbers
      cy.get('button[value="5"]').click();
      cy.get('button[value="8"]').click();
      cy.get('button[value="0"]').click();
      cy.get('button[value="0"]').click();
      cy.get('button[value="*"]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="0"]').click();
      cy.get('button[value="0"]').click();
      cy.get('button[value="="]').click();
  
      //Verify that the result is correct
      cy.get('.output').should('have.value', '1160000');

    });
  });
  