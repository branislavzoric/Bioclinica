describe('Bioclinica Test 1', function () {
    //Change values and verify changes
it('Changing address of client', function () {
    //Navigate to invoicely login page
    cy.visit('https://invoicely.com/login')
    //Enter email and password and login
    cy.get('#email_address').type("ma1mddx@yahoo.com")
    cy.get('#password').type("LetMeTestYou123")
    cy.get('button').click()
    cy.get('.business_url').click()
    //navigate through application and select MDDX client
    cy.get('.connections').click()
    cy.get('form > input').type('mddx')
    cy.get('.connection_name > a').click()
    //navigate to edit page
    cy.visit('https://ma1mddx.invoicely.com/connections/edit/1502864')
    //change the value of address
    cy.get('.column.left > :nth-child(1) > input').clear().type('promenjena adresa')
    cy.get('.right > .permission_edit').click()
    //verify that alert pop up is displayed, had troubles asserting content of the alert
    cy.get('.alert').should('exist')

    })

 })


