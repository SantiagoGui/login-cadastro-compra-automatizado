/// <reference types="cypress"/>

const {faker} = require('@faker-js/faker');

context('funcionalidade de cadastro', () => {

    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/login')
    });


    it('deve realizar cadastro com suceso', () => {
        cy.get('[data-qa="signup-name"]').type('usuario')
        cy.get('[data-qa="signup-email"]').type(faker.internet.email())
        cy.get('[data-qa="signup-button"]').click()

        cy.get('[data-qa="password"]').type('12345678')
        cy.get('[data-qa="first_name"]').type('usuario')
        cy.get('[data-qa="last_name"]').type('tester')
        cy.get('[data-qa="address"]').type('rua nova')
        cy.get('[data-qa="state"]').type('PE')
        cy.get('[data-qa="city"]').type('Recife')
        cy.get('[data-qa="zipcode"]').type('50640600')
        cy.get('[data-qa="mobile_number"]').type('5581999999999')
        cy.get('[data-qa="create-account"]').click()
        cy.get('.col-sm-9 > :nth-child(2)').should('contain', 'created!')
    });

    it('deve excluir conta depois do registro', () => {

        cy.get('[data-qa="signup-name"]').type('usuario')
        cy.get('[data-qa="signup-email"]').type(faker.internet.email())
        cy.get('[data-qa="signup-button"]').click()

        cy.get('[data-qa="password"]').type('12345678')
        cy.get('[data-qa="first_name"]').type('usuario')
        cy.get('[data-qa="last_name"]').type('tester')
        cy.get('[data-qa="address"]').type('rua nova')
        cy.get('[data-qa="state"]').type('PE')
        cy.get('[data-qa="city"]').type('Recife')
        cy.get('[data-qa="zipcode"]').type('50640600')
        cy.get('[data-qa="mobile_number"]').type('5581999999999')
        cy.get('[data-qa="create-account"]').click()
        cy.get('.col-sm-9 > :nth-child(2)').should('contain', 'created!')

        cy.get('.nav > :nth-child(1) > a').click()
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
        cy.get('.col-sm-9 > :nth-child(2)').should('contain', 'deleted!')

    });

    it.only('Deve exibir mensagem de email já existente', () => {

        cy.get('[data-qa="signup-name"]').type('usuario')
        cy.get('[data-qa="signup-email"]').type('usu@rio')
        cy.get('[data-qa="signup-button"]').click()
        cy.get('.signup-form > form > p').should('contain', 'already exist!')

        
    });

});