describe('Testing signup to todo', () => {
  beforeEach(() => {
    cy.visit('/signup')
  });
  
  it('Should display TODOLIST', () => {
    cy.visit('/todo')
    cy.get('[data-testid="heading"]')
      .should('exist')
      .should('have.text', 'TODOLIST')
  })

  it('Should display Alert', () => {
    cy.get('input[name="email"]').type('thor@marvel.com')
    cy.get('input[name="password"]').type('12345678efbebezb')
    cy.get('input[name="confirm-password"]').type('12345678brbehzeergeg')
    cy.get('[data-button="signup"]').click()
    cy.get('[data-cy="alert"]').should('exist')
  })

  it('Testing password and redirection', () => {
    cy.get('input[name="email"]').type('thor@marvel.com')
    cy.get('input[name="password"]').type('12345678')
    cy.get('input[name="confirm-password"]').type('12345678')
    cy.get('[data-button="signup"]').click()
    cy.get('[data-cy="alert"]').should('not.exist')
    cy.url().should('include', '/todo')
  })

  it('Button should be disabled and Adding 2 todos', () => {
    cy.visit('/todo')
    cy.get('[data-button="add-task"]').should('be.disabled')
    cy.get('input[name="todo"]').type('Jouer à la console')
    cy.get('[data-button="add-task"]').should('be.enabled')
    cy.get('[data-button="add-task"]').click()
    cy.get('input[name="todo"]').type('Faire la sieste')
    cy.get('[data-button="add-task"]').click()
    cy.get('input[name="todo"]').type('On fait une tartiflette !!!!')
    cy.get('[data-button="add-task"]').click()

    cy.get('[data-cy="todo-2"]').click()

    cy.get('[data-task="task"]').each((item, index, list) => {
      expect(list).to.have.length(2)
    })
    
  })

 

})