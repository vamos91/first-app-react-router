const { faker } = require('@faker-js/faker')
const email = faker.internet.email()
const password = faker.internet.password()

describe('Should redirect to todo\'s page', () => {
  beforeEach(() => {
      cy.visit('/signup')
    })

  it('Shoule display signup page successfully', () => {
    cy.contains('SIGNUP')
    cy.get('[data-cy="heading"]').should('exist')
  })

  it('Should display alert', () => {
    cy.get('[data-cy="alert"]').should('not.exist')
    cy.get('input[role="email"]').type('tony@stark.fr')
    cy.get('input[role="password"]').type('12345678')
    cy.get('input[role="confirm-password"]').type('12345')
    cy.get('[ data-cy="signup"]').click()
    cy.get('[data-cy="alert"]').should('exist')
  })

  it('Should redirect to signin page', () => {
    cy.get('[data-cy="alert"]').should('not.exist')
    cy.get('input[role="email"]').type(email)
    cy.get('input[role="password"]').type(password)
    cy.get('input[role="confirm-password"]').type(password)
    cy.get('[ data-cy="signup"]').click()
    cy.url().should('include', '/signin')
  })

  it('Should redirect to todo page', () => {
    cy.visit('/signin')
    cy.get('input[role="email"]').type(email)
    cy.get('input[role="password"]').type(password)
    cy.get('[data-cy="signin-button"]').click()
    cy.url().should('include', '/todo')
  })
})