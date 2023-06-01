describe('Automation Test Suite', () => {
    beforeEach(() => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    })
  
    it('should validate radio buttons', () => {
      // Click on radio button 3 and validate that only 1 radio button is checked
      cy.get('[value="radio3"]').check().should('be.checked')
      cy.get('[value="radio1"]').should('not.be.checked')
      cy.get('[value="radio2"]').should('not.be.checked')
  
      // Click on radio button 2 and validate that button 2 is the only checked button
      cy.get('[value="radio2"]').check().should('be.checked')
      cy.get('[value="radio1"]').should('not.be.checked')
      cy.get('[value="radio3"]').should('not.be.checked')
    })
  
    it('should perform suggestion actions', () => {
      // Type in the field 'South' and select 'South Africa' from the list of options
      cy.get('#autocomplete').type('South')
      cy.get('.ui-menu-item div').each((element) => {
        if (element.text() === 'South Africa') {
          element.click()
        }
      })
      cy.get('#autocomplete').should('have.value', 'South Africa')
  
      // Clear the field and type 'Republic' and select the first option listed
      cy.get('#autocomplete').clear().type('Republic')
      cy.get('.ui-menu-item div').first().click()
      cy.get('#autocomplete').should('have.value', 'United States (USA), Republic')
    })
  
    it('should validate checkboxes', () => {
      // Check all the checkboxes and validate that they are all checked
      cy.get('input[type="checkbox"]').check().should('be.checked')
  
      // Uncheck the first checkbox and validate that the other two remain checked
      cy.get('input[type="checkbox"]').first().uncheck()
      cy.get('input[type="checkbox"]').eq(1).should('be.checked')
      cy.get('input[type="checkbox"]').eq(2).should('be.checked')
    })
  
    it('should show/hide elements', () => {
      // Click on the hide button and validate that the element is hidden
      cy.get('#hide-textbox').click()
      cy.get('#displayed-text').should('not.be.visible')
  
      // Click on the show button and validate that the hidden element is shown
      cy.get('#show-textbox').click()
      cy.get('#displayed-text').should('be.visible')
    })
  
    it('should validate web table', () => {
      // Validate that the Amount for 'Joe Postman' from 'Chennai' has an amount of 46
      cy.get('table#product tr td:nth-child(2)').each((element, index) => {
        if (element.text() === 'Joe Postman') {
          cy.get('table#product tr td:nth-child(3)').eq(index).should('contain', '46')
        }
      })
  
      // Validate that the total amount collected is 296
      let totalAmount = 0
      cy.get('table#product tr td:nth-child(3)').each((element) => {
        const amount = parseInt(element.text())
        if (!isNaN(amount)) {
          totalAmount += amount
        }
      })
      cy.get('table#product tfoot td:nth-child(3)').should('contain', totalAmount.toString())
    })
  
    it('should interact with iframe', () => {
      // Validate that the page has an iframe
      cy.get('iframe').should('exist')
  
      // Interact with any element within the iframe
      cy.get('iframe')
        .its('0.contentDocument.body')
        .should('not.be.empty')
        .then(cy.wrap)
        .find('#sampleHeading')
        .should('contain', 'This is a sample page')
    })
  })
  