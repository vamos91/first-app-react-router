describe('Testing signup feature', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/signup')
    })

    it('Should redirect to todo page', () => {
        cy.get('input[name="email"]').type('tony@stark.fr')
        cy.get('input[name="password"]').type('1234')
        cy.get('input[name="confirm-password"]').type('12345')
        cy.get('[data-cy="signup"]').click()
        cy.contains('type same password').should('exist')
    })

    it('Should redirect to todo page', () => {
        cy.get('input[name="email"]').type('tony@stark.fr')
        cy.get('input[name="password"]').type('12345678')
        cy.get('input[name="confirm-password"]').type('12345678')
        cy.get('[data-cy="signup"]').click()
        cy.contains('type same password').should('not.exist')
        cy.url().should('include', '/todo')  

        cy.get('input[name="todo"]').type('Faire les courses')
        cy.get('[data-button="add-task"]').click()
        cy.get('input[name="todo"]').type('Aller chercher les gosses')
        cy.get('[data-button="add-task"]').click()
        cy.get('input[name="todo"]').type('Controle technique de la voiture')
        cy.get('[data-button="add-task"]').click()

        cy.get('[data-testid="todo-1"]').should('exist')
        cy.get('[data-testid="todo-2"]').should('exist')
        cy.get('[data-testid="todo-3"]').should('exist')

        cy.get('[data-cy="todo-3"]').click()

        cy.get('[data-testid="todo-3"]').should('not.exist')

    })
})
