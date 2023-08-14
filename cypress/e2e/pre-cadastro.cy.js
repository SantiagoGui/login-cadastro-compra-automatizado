/// <reference types="cypress"/>
const perfil = require('../fixtures/perfil.json');
const {faker} = require('@faker-js/faker');

context('funcionalidade de cadastro', () => {

    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/login')
    });


    it('deve realizar cadastro com suceso', () => {

        cy.preCadastro(perfil.usuarioCadastro, faker.internet.email())
        cy.cadastro(perfil.senha, faker.person.firstName(), perfil.lastName, perfil.endereco, perfil.estado, perfil.cidade, faker.number.int(), faker.number.int())
        cy.get('.col-sm-9 > :nth-child(2)').should('contain', 'created!')
    });

    it('deve excluir conta depois do registro', () => {
        cy.preCadastro(perfil.usuarioCadastro, faker.internet.email())
        cy.cadastro(perfil.senha, faker.person.firstName(), perfil.lastName, perfil.endereco, perfil.estado, perfil.cidade, faker.number.int(), faker.number.int())
        cy.get('.col-sm-9 > :nth-child(2)').should('contain', 'created!')

        cy.get('.nav > :nth-child(1) > a').click()
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
        cy.get('.col-sm-9 > :nth-child(2)').should('contain', 'deleted!')

    });

    it('Deve exibir mensagem de email já existente', () => {
        cy.get('[data-qa="signup-name"]').type('usuario')
        cy.get('[data-qa="signup-email"]').type('usu@rio')
        cy.get('[data-qa="signup-button"]').click()
        cy.get('.signup-form > form > p').should('contain', 'already exist!')
    });

});

