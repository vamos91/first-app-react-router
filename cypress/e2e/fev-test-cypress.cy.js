import { faker } from '@faker-js/faker'
const email = faker.internet.email()


describe('Should redirect to todo page', () => {
    beforeEach(() => {
        cy.visit('/signup')
    })

    it('Should load app successfully', () => {
        cy.contains('SIGNUP')
    })

    it('Should display alert wrong password', () => {
        cy.get('[data-cy="alert"]').should('not.exist')
        cy.get("input[role='email']").type('tony@stark.fr')
        cy.get("input[role='password']").type('12345678')
        cy.get("input[role='confirm-password']").type('123456789')
        cy.get("[data-cy='signup']").click()
        cy.get('[data-cy="alert"]').should('exist')
    })

     it('Should display alert by email exist', () => {
        cy.get('[data-cy="alert"]').should('not.exist')
        cy.get("input[role='email']").type('thor@free.fr')
        cy.get("input[role='password']").type('12345678')
        cy.get("input[role='confirm-password']").type('12345678')
        cy.get("[data-cy='signup']").click()
        cy.get('[data-cy="alert"]').should('exist')
     })
    
    it('Should display redirect to signin page', () => {
        cy.get('[data-cy="alert"]').should('not.exist')
        cy.get("input[role='email']").type(email)
        cy.get("input[role='password']").type('12345678')
        cy.get("input[role='confirm-password']").type('12345678')
        cy.get("[data-cy='signup']").click()
        cy.url().should('include', '/signin')
    })

    it('Should display alert', () => {
        cy.visit('/signin')
        cy.get('[data-cy="alert"]').should('not.exist')
        cy.get("input[role='email']").type(email)
        cy.get("input[role='password']").type('12345678zrthzrthzth')
        cy.get("[data-cy='signin-button']").click()
        cy.get('[data-cy="alert"]').should('exist')
    })

    it('Should display alert', () => {
        cy.visit('/signin')
        cy.get('[data-cy="alert"]').should('not.exist')
        cy.get("input[role='email']").type('toto@gmail.com')
        cy.get("input[role='password']").type('12345678')
        cy.get("[data-cy='signin-button']").click()
        cy.get('[data-cy="alert"]').should('exist')
    })

     it('Should redirect to todo page', () => {
        cy.visit('/signin')
        cy.get('[data-cy="alert"]').should('not.exist')
        cy.get("input[role='email']").type(email)
        cy.get("input[role='password']").type('12345678')
        cy.get("[data-cy='signin-button']").click()
        cy.url().should('include', '/todo')
    })
})