const {faker} = require('@faker-js/faker')
const email = faker.internet.email()

describe('Should redirect to todo\'s page', () => {
    beforeEach(() => {
        cy.visit('/signup')
    })

    it('Should display content SIGNUP', () => {
        cy.contains("SIGNUP")
    })

    it('Should signup element exist', () => {
        cy.get('[data-cy="heading"]').should('be.visible')
    })

    it('Should display alert', () => {
        cy.get('[data-cy="alert"]').should('not.exist')
        cy.get('input[role="email"]').type('wonderwoman')
        cy.get('input[role="password"]').type('12345678')
        cy.get('input[role="confirm-password"]').type('12345678')
        cy.get('[data-cy="signup"]').click()
        cy.get('[data-cy="alert"]').should('exist')
    })

    it('Should display alert from password trouble', () => {
        cy.get('[data-cy="alert"]').should('not.exist')
        cy.get('input[role="email"]').type(email)
        cy.get('input[role="password"]').type('12345678')
        cy.get('input[role="confirm-password"]').type('123456789')
        cy.get('[data-cy="signup"]').click()

        cy.get('[data-cy="alert"]').should('exist')
    })

    it('Should redirect to signin page', () => {
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
        cy.get('input[role="email"]').type('wonderwoman')
        cy.get('input[role="password"]').type('123456780')
        cy.get('[data-cy="signin-button"]').click()

        cy.get('[data-cy="alert"]').should('exist')
    })

    it('Should display alert', () => {
        cy.visit('/signin')
        cy.get('[data-cy="alert"]').should('not.exist')
        cy.get('input[role="email"]').type(email)
        cy.get('input[role="password"]').type('12345678')
        cy.get('[data-cy="signin-button"]').click()

        cy.get('[data-cy="alert"]').should('exist')
    })

    // it('Should display alert', () => {
    //     cy.visit('/signin')
    //     cy.get('[data-cy="alert"]').should('not.exist')
    //     cy.get('input[role="email"]').type('wonderwoman')
    //     cy.get('input[role="password"]').type('12345678')
    //     cy.get('["signin-button"]').click()

    //     cy.url().should('include', '/todo')
    // })
})