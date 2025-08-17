/// <refrence type="cypress"/>
describe('Check deployed website', () => {
  it(' Verify Product Display', () => {
    cy.visit('https://angular-assignment-gamma-three.vercel.app/');
    cy.get('.card').should('have.length.at.least', 5);
  });
  it('Search Functionality', () => {
    cy.visit('https://angular-assignment-gamma-three.vercel.app/');
    cy.get('.search-box').type('wireless mouse');
    cy.contains('Wireless Mouse').should('be.visible');
  });
  it('Product Details Modal', () => {
    cy.visit('https://angular-assignment-gamma-three.vercel.app/');
    cy.get('.search-box').type('wireless mouse');
    cy.get('.btn').click();
  });
});
