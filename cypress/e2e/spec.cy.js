describe('Testing todo app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Signup', () => {
    cy.visit('http://localhost:3000/signup')
    cy.get('input[name="email"]').type('tony@stark.fr')
    cy.get('input[name="password"]').type('12345678')
    cy.get('input[name="confirm-password"]').type('12345678')
    cy.get('[data-button="signup"]').click()
    cy.get('[data-cy="alert"]').should('not.exist')

    cy.url().should('contain', '/todo')
  })

  it('Should have heading', () => {
    cy.visit('http://localhost:3000/todo')
    cy.get('[data-testid="heading"]')
      .should("exist")
      .should('have.text', 'TODOLIST')
  })

  it('Should have 2 todo', () => {
    cy.visit('http://localhost:3000/todo')
    cy.get('[data-button="add-task"]').should('be.disabled')
    cy.get('input[name="todo"]').type('Faire les courses')
    cy.get('[data-button="add-task"]').click()
    cy.get('input[name="todo"]').type('Faire le controle technique de la voiture')
    cy.get('[data-button="add-task"]').click()
    cy.get('input[name="todo"]').type("Aller cherches les gosses à l'école")
    cy.get('[data-button="add-task"]').click()
    
    cy.get('[data-testid="todo-3"]').should('exist')

    cy.get('[data-cy="todo-3"]').click()

    cy.get('[data-task="task"]').each((item, index, list) => {
      expect(list).to.have.length(2)
    })
  })

})