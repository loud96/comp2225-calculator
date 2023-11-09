describe('Memory Function', () => {
    //Visit the calculator before each test
    beforeEach(()=>{
        cy.visit('/index.html');
    });

    it('Performs memory recall correctly', () => {
        //performs a calculation, saves a result to memory, then uses the saved value
        cy.get('button[value="3"]').click();
        cy.get('button[value="2"]').click();
        cy.get('button[value="*"]').click();
        cy.get('button[value="2"]').click();
        cy.get('button[value="="]').click();
        cy.get('button[value="M+"]').click();
        cy.get('button[value="C"]').click();
        cy.get('button[value="MRC"]').click();
        cy.get('button[value="+"]').click();
        cy.get('button[value="8"]').click();
        cy.get('button[value="="]').click();
        
        //Verify that the result is correct
        cy.get('.output').should('have.value', '72');
    })

    it('Performs memory store at input correctly', () => {
        //Enters value then stores it, clears display and perfomr recall
        cy.get('button[value="3"]').click();
        cy.get('button[value="0"]').click();
        cy.get('button[value="M+"]').click();
        cy.get('button[value="C"]').click();
        cy.get('button[value="MRC"]').click();


        //Verify that the result is correct
        cy.get('.in').should('have.value', '30');
    });

    it('Performs memory store on result correctly', () => {
        //Perform a calculation and add result to memory, clear display and recall the value
        cy.get('button[value="3"]').click();
        cy.get('button[value="+"]').click();
        cy.get('button[value="5"]').click();
        cy.get('button[value="="]').click();
        cy.get('button[value="M+"]').click();
        cy.get('button[value="C"]').click();
        cy.get('button[value="MRC"]').click();

        //Verify that the result is correct
        cy.get('.in').should('have.value', '8');
    });

    it('Performs memory clear correctly', () => {
        //Add values to memory then clear it 
        cy.get('button[value="5"]').click();
        cy.get('button[value="M+"]').click();
        cy.get('button[value="6"]').click();
        cy.get('button[value="M+"]').click();
        cy.get('button[value="C"]').click();
        cy.get('button[value="MRC"]').dblclick();
        cy.get('button[value="MRC"]').click();

        //Verify that the result is correct
        cy.get('.in').should('have.value', 'No data in memory');
    })

    it('Performs memory remove correctly', () => {
        //Add values to memory then removes one 
        cy.get('button[value="5"]').click();
        cy.get('button[value="M+"]').click();
        cy.get('button[value="6"]').click();
        cy.get('button[value="M+"]').click();
        cy.get('button[value="C"]').click();
        cy.get('button[value="5"]').click();
        cy.get('button[value="M-"]').click();
        cy.get('button[value="C"]').click();
        cy.get('button[value="MRC"]').click();

        //Verify that the result is correct
        cy.get('.in').should('have.value', '6');
    })

})