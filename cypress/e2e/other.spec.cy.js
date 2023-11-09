describe('Others Functions', () => {
  //Visit the calculator before each test
  beforeEach(()=>{
    cy.visit('/index.html');
  });


  it('Clears display', () => {
    //Enter value then clear display
    cy.get('button[value="6"]').click();
    cy.get('button[value="9"]').click();
    cy.get('button[value="C"]').click();

    //Verify that the result is correct
    cy.get('.in').should('have.value', '');
    cy.get('.output').should('have.value', '');

  });

  it('Performs sign change on top display correctly', () => {
    //Enter value then change sign
    cy.get('button[value="2"]').click();
    cy.get('button[value="+/-"]').click();

    //Verify that the result is correct
    cy.get('.in').should('have.value', '-2');
  })

  it('Performs sign change on result display correctly', () => {
    //perform calculation then change sign
    cy.get('button[value="2"]').click();
    cy.get('button[value="-"]').click();
    cy.get('button[value="8"]').click();
    cy.get('button[value="="]').click();
    cy.get('button[value="+/-"]').click();

    //Verify that the result is correct
    cy.get('.output').should('have.value', '6');
  })

  it('Calculates percentage value on input display correctly', () => {
    //Enter value then calculate percentage
    cy.get('button[value="3"]').click();
    cy.get('button[value="0"]').click();
    cy.get('button[value="%"]').click();

    //Verify that the result is correct
    cy.get('.in').should('have.value', '0.3');
  });

  it('Calculates percentage value on result display correctly', () => {
    //Perform calculation then calculate percentage on the reslut
    cy.get('button[value="5"]').click();
    cy.get('button[value="0"]').click();
    cy.get('button[value="+"]').click();
    cy.get('button[value="5"]').click();
    cy.get('button[value="="]').click();
    cy.get('button[value="%"]').click();

    //Verify that the result is correct
    cy.get('.output').should('have.value', '0.55');
  });

  it('Calculates Square root on input display correctly', () => {
    //Enter value then calculate square root
    cy.get('button[value="1"]').click();
    cy.get('button[value="6"]').click();
    cy.get('button[value="√"]').click();

    //Verify that the result is correct
    cy.get('.in').should('have.value', '4.00');
  })

  it('Calculates Square root on result display correctly', () => {
    //Perform calculation then calculate square root on the result
    cy.get('button[value="8"]').click();
    cy.get('button[value="+"]').click();
    cy.get('button[value="8"]').click();
    cy.get('button[value="="]').click();
    cy.get('button[value="√"]').click();

    //Verify that the result is correct
    cy.get('.output').should('have.value', '4.00');
  })

  it('Uses "." appropriately', () => {
    //Enter values with decimal point and perform calculation
    cy.get('button[value="5"]').click();
    cy.get('button[value="."]').click();
    cy.get('button[value="5"]').click();
    cy.get('button[value="*"]').click();
    cy.get('button[value="2"]').click();
    cy.get('button[value="="]').click();

    //Verify that the result is correct
    cy.get('.output').should('have.value', '11');
  })

  it('Uses "←" appropriately', () => {
    //Enter values then remove 2 values and enter another
    cy.get('button[value="5"]').click();
    cy.get('button[value="5"]').click();
    cy.get('button[value="6"]').click();
    cy.get('button[value="←"]').click();
    cy.get('button[value="←"]').click();
    cy.get('button[value="2"]').click();

    //Verify that the result is correct
    cy.get('.in').should('have.value', '52');

  })
  
})