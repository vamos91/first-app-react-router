import { faker } from '@faker-js/faker';

const email = faker.internet.email()
const password = faker.internet.password({ length: 20 })

describe('Should redirect to todo Page after signin', () => {
  beforeEach(() => {
    cy.visit('/signup')
  })

  it('Should load app successfully', () => {
    cy.visit('/signup')
  })

  it('Should display SIGNUP', () => {
    cy.contains('SIGNUP')
  })

  it('Should display SIGNUP', () => {
    cy.get('[data-cy="heading"]').should('exist')
  })

  it('Should display alert', () => {
    cy.get('[data-cy="alert"]').should('not.exist')
    cy.get('input[role="email"]').type(email)
    cy.get('input[role="password"]').type('1234')
    cy.get('input[role="confirm-password"]').type('12345')

    cy.get('[data-cy="signup"]').click()
    cy.get('[data-cy="alert"]').should('exist')
  })

  it('Should navigate to signin page', () => {
    cy.get('input[role="email"]').type(email)
    cy.get('input[role="password"]').type(password)
    cy.get('input[role="confirm-password"]').type(password)
    cy.get('[data-cy="alert"]').should('not.exist')
    cy.get('[data-cy="signup"]').click()

    cy.url('include', '/signin')
  })

  it('Shouldn\'t navigate to todo page and display alert' , () => {
    cy.visit('/signin')
    cy.get('input[role="email"]').type(email)
    cy.get('input[role="password"]').type('EHEEthehee4535453')
    cy.get('[cy-data="signin-button"]').click()
    cy.get('[data-cy="alert"]').should('exist')
  })

  it('Should navigate to todo page' , () => {
    cy.visit('/signin')
    cy.get('input[role="email"]').type(email)
    cy.get('input[role="password"]').type(password)
    cy.get('[cy-data="signin-button"]').click()
    cy.get('[data-cy="alert"]').should('not.exist')
    cy.url('include', '/todo')
  })

  it('Should add 2 todos', () => {
    cy.visit('/todo')
    cy.get('[data-button="add-task"]').should('be.disabled')
    cy.get('input[name="todo"]').type('Faire les courses')
    cy.get('[data-button="add-task"]').should('not.be.disabled')
    cy.get('[data-button="add-task"]').click()
    cy.get('input[name="todo"]').type('Faire le controle technique de la voiture')
    cy.get('[data-button="add-task"]').click()
    cy.get('input[name="todo"]').type('Faire le repas de ce soir')
    cy.get('[data-button="add-task"]').click()

    cy.get('[data-testid="todo-1"]').should('exist')
    cy.get('[data-testid="todo-2"]').should('exist')
    cy.get('[data-testid="todo-3"]').should('exist')

    cy.get('[data-task="task"]').each((item, index, list) => {
      expect(list).to.have.length(3)
    })

    cy.get('[data-cy="todo-2"]').click()
    
    cy.get('[data-task="task"]').each((item, index, list) => {
      expect(list).to.have.length(2)
    })
  })

})