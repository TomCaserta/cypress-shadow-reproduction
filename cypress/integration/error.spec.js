/// <reference types="cypress" />

describe('Visibility', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should allow me to click this element', () => { 
    cy.get('#element').shadow().find('[data-test-id="my-button"]').click();
  });
})
