describe('Login page', function () {
it('visit registration page', function () {
    cy.visit('https://invoicely.com/login')
    cy.get('#email_address').type("ma1mddx@yahoo.com")
    cy.get('#password').type("LetMeTestYou123")
    cy.get('button').click()
    cy.get('.business_url').click()
    })
 })
 describe('Editing clients adress', function () {
 it('select client MDXXX and change adress', function() {
 cy.get('.connections > .sidebar_menu_link_text').click()
 cy.get('form > input').type('MDDX')

 })

 })
