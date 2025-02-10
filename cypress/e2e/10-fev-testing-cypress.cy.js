import {faker} from '@faker-js/faker'
const email = faker.internet.email()

describe('Should redirect to todo page and display 3 todos', () => {
    beforeEach(() => {
        cy.visit('/signup')
    })

    it('Should load app', () => { 
        cy.get("[data-cy='heading']").should('exist')
    })

    it('Should display alert', () => {
        cy.get("[data-cy='alert']").should('not.exist')
        cy.get("input[role='email']").type('catwoman@gmail.com')
        cy.get("input[role='password']").type('1234567')
        cy.get("input[role='confirm-password']").type('12345678')
        cy.get("[data-cy='signup']").click()
        cy.get("[data-cy='alert']").should('exist')
        cy.url().should('include', '/signup')
    })

    it('Should display alert', () => {
        cy.get("[data-cy='alert']").should('not.exist')
        cy.get("input[role='email']").type('batman@free.fr')
        cy.get("input[role='password']").type('12345678')
        cy.get("input[role='confirm-password']").type('12345678')
        cy.get("[data-cy='signup']").click()
        cy.get("[data-cy='alert']").should('exist')
        cy.url().should('include', '/signup')
    })

    it('Should redirect to signin page', () => {
        cy.get("[data-cy='alert']").should('not.exist')
        cy.get("input[role='email']").type(email)
        cy.get("input[role='password']").type('12345678')
        cy.get("input[role='confirm-password']").type('12345678')
        cy.get("[data-cy='signup']").click()
        cy.url().should('include', '/signin')
    })

    it('Should display alert', () => {
        //visit signin page
        //testing signin
    })

})