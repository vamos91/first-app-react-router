describe('Testing api jsonplaceholder', () => {
    // beforeEach(() => {
    //     cy.request('https://jsonplaceholder.typicode.com/posts').as('post')
    // })

    it('Should have 100 posts', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            expect(response.body).to.have.length(100)
            expect(response.status).to.eq(200)
        })
        // cy.get('@post').should((response) => {
        //     expect(response.body).to.have.length(100)
        // })

    })
})