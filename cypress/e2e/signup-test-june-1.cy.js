const {faker} = require('@faker-js/faker')
const email = faker.internet.email()
const password = faker.internet.password()

describe('Should redirect to todo page', () => {

  beforeEach(() => {
    cy.visit('/signup')
  })

  it('Should load successfully', () => {
    cy.contains('SIGNUP')
  })

  it('Should contains Signup', () => {
    cy.get('[data-cy="heading"]').should('exist')
  })

  it('Should display Alert()', () => {
    cy.get('[data-cy="alert"]').should('not.exist')
    cy.get('input[role="email"]').type(email)
    cy.get('input[role="password"]').type('12345678')
    cy.get('input[role="confirm-password"]').type('123456789')

    cy.get('[data-cy="signup"]').click()
    cy.get('[data-cy="alert"]').should('exist')
  })

  it('Should navigate to signin page', () => {
    cy.get('[data-cy="alert"]').should('not.exist')
    cy.get('input[role="email"]').type(email)
    cy.get('input[role="password"]').type(password)
    cy.get('input[role="confirm-password"]').type(password)

    cy.get('[data-cy="signup"]').click()
    cy.url().should('include', '/signin')
  })

  it('Should display alert', () => {
    cy.visit('/signin')
    cy.get('[data-cy="alert"]').should('not.exist')
    cy.get('input[role="email"]').type(email)
    cy.get('input[role="password"]').type('123345')
    cy.get('[cy-data="signin-button"]').click()
    cy.get('[data-cy="alert"]').should('exist')

  })

  it('Should navigate to todo page', () => {
    cy.visit('/signin')
    cy.get('[data-cy="alert"]').should('not.exist')
    cy.get('input[role="email"]').type(email)
    cy.get('input[role="password"]').type(password)
    cy.get('[cy-data="signin-button"]').click()
    cy.url().should('include', '/todo')
  })

  it('Should add 3 todos', () => {
    cy.visit('/todo')
    cy.get('[data-button="add-task"]').should('be.disabled')
    cy.get('input[role="todo"]').type('Faire les courses')
    cy.get('[data-button="add-task"]').click()
    cy.get('[data-button="add-task"]').should('not.be.disabled')
    cy.get('input[role="todo"]').type('Aller chercher les gosses à l\'école')
    cy.get('[data-button="add-task"]').click()
    cy.get('input[role="todo"]').type('Faire une bonne sieste')
    cy.get('[data-button="add-task"]').click()

    cy.get('[data-testid="todo-1"]').should('exist')
    cy.get('[data-testid="todo-2"]').should('exist')
    cy.get('[data-testid="todo-3"]').should('exist')

    cy.get('[data-task="task"]').each((item, index, list) => {
      expect(list).to.have.length(3)
    })   
  })

})