import {faker} from '@faker-js/faker'
const email = faker.internet.email()
const password = faker.internet.password()
describe('Should redirect to todo\'s page after sigin', () => {

    beforeEach(() => {
        cy.visit('/signup')
    })

    it('Should load signup page', () => {
        cy.contains(/SIGNUP/)
        cy.get('[data-cy="heading"]').should('exist')
    })

    it('Should display Alert', () => {
        cy.get('[data-cy="alert"]').should('not.exist')
        cy.get('input[role="email"]').type('my.email@email.fr')
        cy.get('input[role="password"]').type('123456')
        cy.get('input[role="confirm-password"]').type('1234567')
        cy.get('[data-cy="signup"]').click()
        cy.get('[data-cy="alert"]').should('exist')
    })

    it('Should display Alert', () => {
        cy.get('[data-cy="alert"]').should('not.exist')
        cy.get('input[role="email"]').type('my.email@email.fr')
        cy.get('input[role="password"]').type('1234567')
        cy.get('input[role="confirm-password"]').type('1234567')
        cy.get('[data-cy="signup"]').click()
        cy.get('[data-cy="alert"]').should('exist')
    })

    it('Should redirect to signin page', () => {
        cy.get('[data-cy="alert"]').should('not.exist')
        cy.get('input[role="email"]').type(email)
        cy.get('input[role="password"]').type('12345678')
        cy.get('input[role="confirm-password"]').type('12345678')
        cy.get('[data-cy="signup"]').click()
        //redirect to signin page
        cy.url('include', '/signin')
    })

    it('Should redirect to todo page', () => {
        cy.visit('/signin')
        cy.get('[data-cy="alert"]').should('not.exist')
        cy.get('input[role="email"]').type(email)
        cy.get('input[role="password"]').type('12345678')
        cy.get('[data-cy="signin-button"]').click()
        cy.url('include', '/todo')
    })

    it('Should display 3 todos', () => {
        cy.visit('/todo')
        cy.get('[data-button="add-task"]').should('be.disabled')
        cy.get('input[role="todo"]').type('Faire les courses')
        cy.get('[data-button="add-task"]').click()
        cy.get('input[role="todo"]').type('Aller chercher les gosses a lécole')
        cy.get('[data-button="add-task"]').click()
        cy.get('input[role="todo"]').type('Controle technique de la voiture')
        cy.get('[data-button="add-task"]').click()

        cy.get('[data-task="task"]').each((item, index, list) => {
             expect(list).to.have.length(3)
        })
    })
})