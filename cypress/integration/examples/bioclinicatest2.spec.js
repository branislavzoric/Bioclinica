describe('Bioclinica Test 2', function () {

    //Change values and verify changes

it('Editing and Verifying changes of invoices fields', function () {

    //Navigate to invoicely login page

    cy.visit('https://invoicely.com/login')

    //Enter email and password and login

    cy.get('#email_address').type("ma1mddx@yahoo.com")
    cy.get('#password').type("LetMeTestYou123")
    cy.get('button').click()
    cy.get('.business_url').click()

    //Select existing draft invoice

    cy.get('.invoices').click()
    cy.get('[href="/invoices/list/draft/client:/profile:/search:/page:"]').click()
    cy.get(':nth-child(2) > .statement_id > .title').click()

    //Changing the values of the second invoice from the list from the main edit menu

    cy.get('.edit').click()
    cy.wait(2000)
    cy.get('.title > input').clear().type("BZ-test")
    cy.get('.statement_description > textarea').clear().type("Test123")
    cy.get('.max_100').clear().type(1231234)
    cy.get('.language_select > select').select("el")
    cy.wait(2000)
    cy.get('.currency_select > select').select("brl")
    cy.get('#datepicker').clear().type("May 26 2019").should('have.value', 'May 26 2019')
    cy.get('[data-day="26"] > .pika-button').click()
    cy.get('.statement_details > :nth-child(2) > select').select("7")
    cy.wait(1500)
    cy.get('.statement_details > :nth-child(3) > input').clear().type("12345")
    cy.get('.item_textarea').clear().type("description text")
    cy.get('.quantity_input > input').clear().type("11")
    cy.get('[name="statement[item_rate]"]').clear().type("3")
    cy.get('.mt40 > textarea').clear().type("test text")
    cy.get('.permission_edit').click()
    cy.wait(1500)
    cy.get('.alert').should('exist')

    //edit buisness settings

    cy.get('.edit').click()
    cy.get('.address_from > .form_heading > .right').click()
    cy.visit("https://ma1mddx.invoicely.com/settings/business")
    cy.get('.individual > .left > input').clear().type("Branislav")
    cy.get('.individual > .right > input').clear().type("Zoric")
    cy.get(':nth-child(4) > .left > input').clear().type("testmail@mail.com")
    cy.get('.column.left > :nth-child(1) > input').clear().type("Trebevicka 29")
    cy.get('.column.right > :nth-child(1) > .left > input').clear().type("11030")
    cy.get(':nth-child(1) > input.first').clear().type("069255255")
    cy.get('.save-button').click()
    cy.get('.alert').should('exist')

    //edit client settings

    cy.visit("https://ma1mddx.invoicely.com/invoices/d5c1dd8a09dc4cd3b4d2ae45d2aa4e40/edit")
    cy.get('.address_to > .form_heading > .right').click()
    cy.get('#create_edit_connection_popup > .board > .page > :nth-child(7) > .form_row > input').clear().type("test@email.com")
    cy.get(':nth-child(8) > .form_row > input').clear().type("10000000")
    cy.get('[placeholder="Street Line 1"]').clear().type("Ulica300")
    cy.get('[placeholder="Street Line 2"]').clear().type("Ulica100")
    cy.get('.one').clear().type("test1")
    cy.get('.two').clear().type("test2")
    cy.get('.three').clear().type("test3")
    cy.get('select.mt10').select("KH")
    cy.get(':nth-child(12) > .form_row > .save_button').click()
    cy.get('.alert').should('exist')





    })

 })

