describe('Testing api jsonplaceholder', () => {
    // beforeEach(() => {
    //     cy.request('https://jsonplaceholder.typicode.com/posts').as('post')
    // })

    it('Should have 100 posts', () => {
        // eslint-disable-next-line no-undef
        cy.request('http://localhost:3001/articles')
        .then((response) => {
            expect(response.body).to.have.length(100)
            expect(response.status).to.eq(200)
        })
        // cy.get('@post').should((response) => {
        //     expect(response.body).to.have.length(100)
        // })

    })
})