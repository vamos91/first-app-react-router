import { faker } from '@faker-js/faker';

const email = faker.internet.email()
const password = faker.internet.password({ length: 20 })

describe('Should redirect to todo page after signup', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/signup')
    })

    it('Should display Signup', () => {
        cy.get('[data-cy="heading"]').should('exist')
    })

    it('Should display alert', () => {
        cy.get('[data-cy="alert"]').should('not.exist')

        cy.get('input[role="email"]').type(email)
        cy.get('input[role="password"]').type('12345678')
        cy.get('input[role="confirm-password"]').type('123')
        cy.get('[data-cy="signup"]').click()

        cy.get('[data-cy="alert"]').should('exist')
        cy.get('[data-cy="alert"]').should('have.text', 'Info alert!Something went wrong')

    })

    it('Should redirect to Todo page', () => {
        cy.get('[data-cy="alert"]').should('not.exist')

        cy.get('input[role="email"]').type(email)
        cy.get('input[role="password"]').type(password)
        cy.get('input[role="confirm-password"]').type(password)
        cy.get('[data-cy="signup"]').click()

        cy.url().should('include', '/signin')
    })

    it('Should add 3 todos', () => {
        cy.visit('http://localhost:3000/todo')
        cy.get('[data-button="add-task"]').should('be.disabled')
        cy.get('input[name="todo"]').type('Faire les courses')
        cy.get('[data-button="add-task"]').should('not.be.disabled')
        cy.get('[data-button="add-task"]').click()
        cy.get('input[name="todo"]').type('Faire le controle technique')
        cy.get('[data-button="add-task"]').click()
        cy.get('input[name="todo"]').type("Chercher les gosses à l'école")
        cy.get('[data-button="add-task"]').click()


        
    })


})