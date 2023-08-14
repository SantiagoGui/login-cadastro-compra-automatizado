// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (usuario, senha) => { 
    cy.get('[data-qa="login-email"]').type(usuario)
    cy.get('[data-qa="login-password"]').type(senha)
    cy.get('[data-qa="login-button"]').click()
})

Cypress.Commands.add('loginInvalido', (usuario, senha) => { 
    cy.get('[data-qa="login-email"]').type(usuario)
    cy.get('[data-qa="login-password"]').type(senha)
    cy.get('[data-qa="login-button"]').click()
})

Cypress.Commands.add('preCadastro', (usuario, email) => { 
    cy.get('[data-qa="signup-name"]').type(usuario)
    cy.get('[data-qa="signup-email"]').type(email)
    cy.get('[data-qa="signup-button"]').click()
})

Cypress.Commands.add('cadastro', (senha, name, lastName, ende, state, city, cep, fone ) => { 
    cy.get('[data-qa="password"]').type(senha)
    cy.get('[data-qa="first_name"]').type(name)
    cy.get('[data-qa="last_name"]').type(lastName)
    cy.get('[data-qa="address"]').type(ende)
    cy.get('[data-qa="state"]').type(state)
    cy.get('[data-qa="city"]').type(city)
    cy.get('[data-qa="zipcode"]').type(cep)
    cy.get('[data-qa="mobile_number"]').type(fone)
    cy.get('[data-qa="create-account"]').click()
})

Cypress.Commands.add('addCarrinho', () => { 
    cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get('.modal-body > :nth-child(1)').should('contain', 'added') 
    cy.get('u').click()
    cy.get('.active').should('contain','Shopping Cart')
})


Cypress.Commands.add('goPay', (cardNome, cardNum, cvc, mes, ano) => { 

    cy.addCarrinho()
    cy.get('.col-sm-6 > .btn').click()
    cy.get('.active').should('contain','Checkout')
    cy.get(':nth-child(7) > .btn').click()

    cy.get('[data-qa="name-on-card"]').type(cardNome)
    cy.get('[data-qa="card-number"]').type(cardNum)
    cy.get('[data-qa="cvc"]').type(cvc)
    cy.get('[data-qa="expiry-month"]').type(mes)
    cy.get('[data-qa="expiry-year"]').type(ano)
    cy.get('[data-qa="pay-button"]').click()




})