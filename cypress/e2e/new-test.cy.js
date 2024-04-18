describe('signup and redirect to todo page', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/signup')
    })

    it('load successful', () => {
        cy.visit('http://localhost:3000/signup')
    })

    it('Should not redirect to todo and display Alert', () => {
        cy.get('input[name="email"]').type('tony@stark.fr')
        cy.get('input[name="password"]').type('1234567')
        cy.get('input[name="confirm-password"]').type('12345678')

        cy.get('[data-cy="signup"]').click()
        cy.get('[data-cy="alert"]').should('exist')
    })

    it('Should redirect to todo', () => {
        cy.get('input[name="email"]').type('tony@stark.fr')
        cy.get('input[name="password"]').type('12345678')
        cy.get('input[name="confirm-password"]').type('12345678')

        cy.get('[data-cy="signup"]').click()
        cy.get('[data-cy="alert"]').should('not.exist')
        cy.url().should('include', '/todo')
    })

    it('Should have 3 todos', () => {
        cy.visit('http://localhost:3000/todo')
        cy.url().should('include', '/todo')
        cy.contains(/TODOLIST/)
        cy.get('[data-button="add-task"]').should('be.disabled')
        cy.get('input[name="todo"]').type('Faire les courses')
        cy.get('[data-button="add-task"]').should('not.be.disabled')
        cy.get('[data-button="add-task"]').click()
        cy.get('input[name="todo"]').type('Aller chercher les gosses à l\'école')
        cy.get('[data-button="add-task"]').click()
        cy.get('input[name="todo"]').type('Faire une sieste !')
        cy.get('[data-button="add-task"]').click()

        cy.get('[data-testid="todo-3"]').should('exist')

        cy.get('[data-cy="todo-2"]').click()

        cy.contains('Faire les courses')
        cy.contains('Faire une sieste !')
        cy.contains('Aller chercher les gosses à l\'école').should('not.exist')
        //each
        //expect(true).to.be(array.length == 3)
    })

})