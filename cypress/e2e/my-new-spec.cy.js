describe('Testing my new feature', () => {
    it('load succesfull',  () => {
        cy.visit('http://localhost:3000/burger-shop')
        cy.get('[data-cy="click"]').should('exist').should('have.text', 'Like')
    })
})