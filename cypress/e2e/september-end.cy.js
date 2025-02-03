const { faker } = require('@faker-js/faker')
const email = faker.internet.email()

describe('Should redirect to todo page', () => {

  beforeEach(() => {
    cy.visit('/signup')
  })

  it('Should load successfully', () => {
    cy.contains('SIGNUP')
  })

  it('Should display SIGNUP', () => {
    cy.get('[data-cy="heading"]').should('exist')
  })

  it('Should display Alert', () => {
    cy.get('[data-cy="alert"]').should('not.exist')
    cy.get('input[name="email"]').type('mail@mail.fr')
    cy.get('input[name="password"]').type('123456')
    cy.get('input[role="confirm-password"]').type('12345678')
    cy.get('[data-cy="signup"]').click()
  })

  it('Should display Alert', () => {
    cy.get('[data-cy="alert"]').should('not.exist')
    cy.get('input[name="email"]').type('tony@stark.fr')
    cy.get('input[name="password"]').type('12345678')
    cy.get('input[role="confirm-password"]').type('12345678')
    cy.get('[data-cy="signup"]').click()
  })

  it('Should navigate to signin page', () => {
    cy.get('[data-cy="alert"]').should('not.exist')
    cy.get('input[role="email"]').type(email)
    cy.get('input[role="password"]').type('12345678')
    cy.get('input[role="confirm-password"]').type('12345678')
    cy.get('[data-cy="signup"]').click()
    cy.url().should('include', '/signin')
  })

  it('Should display alert', () => {
    cy.visit('/signin')
    cy.get('[data-cy="alert"]').should('not.exist')
    cy.get('input[role="email"]').type(email)
    cy.get('input[role="password"]').type('123456789')
    cy.get('[data-cy="signin-button"]').click()
    cy.get('[data-cy="alert"]').should('exist')
  })

  it('Should display alert', () => {
    cy.visit('/signin')
    cy.get('[data-cy="alert"]').should('not.exist')
    cy.get('input[role="email"]').type('mail@gmail.comp')
    cy.get('input[role="password"]').type('123456789')
    cy.get('[data-cy="signin-button"]').click()
    cy.get('[data-cy="alert"]').should('exist')
  })

  it('Should navigate to todo page', () => {
    cy.visit('/signin')
    cy.get('[data-cy="alert"]').should('not.exist')
    cy.get('input[role="email"]').type(email)
    cy.get('input[role="password"]').type('12345678')
    cy.get('[data-cy="signin-button"]').click()
    cy.url().should('include', '/todo')
  })

  it('Should add 3 tasks', () => {
    cy.visit('/todo')
    cy.get('[data-button="add-task"]').should('be.disabled')
    cy.get('input[role="todo"]').type('Faire les courses')
    cy.get('[data-button="add-task"]').should('not.be.disabled')
    cy.get('[data-button="add-task"]').click()
    cy.get('input[role="todo"]').type('Faire le controle technique de la voiture')
    cy.get('[data-button="add-task"]').click()
    cy.get('input[role="todo"]').type('Faire la soupe')
    cy.get('[data-button="add-task"]').click()

    cy.get('[data-list="todos"]').find('[data-task="task"]').should('have.length', 3)
    // cy.get('[data-task="task"]').each((item, index, list) => {
    //   //expect to 3 records
    //   expect(list).to.have.length(3)
    // })

    // count number of task
  })
  
})