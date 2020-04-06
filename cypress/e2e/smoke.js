describe('app', () => {
  it('works', () => {
    cy.visit('/');
    cy.wait(500); // wait for rehydration

    cy.get('header').should('exist');
    cy.get('main').should('exist');
    cy.get('footer').should('exist');

    cy.findAllByRole('heading', {name: /About me/i});
    cy.findAllByRole('heading', {name: /Education/i});
    cy.findAllByRole('heading', {name: /Experience/i});
    cy.findAllByRole('heading', {name: /Skills/i});
  });
});
