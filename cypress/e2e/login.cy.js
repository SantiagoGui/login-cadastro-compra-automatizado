/// <reference types="cypress" /> 

const perfil = require('../fixtures/perfil.json');

context('funcionalidade de login', () => {

    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/signup')
    });

    it('deve fazer login com sucesso', () => {
        cy.login(perfil.usuario, perfil.senha)
        cy.get(':nth-child(10) > a').should('contain', 'Logged in as')
        
    });

    it('deve exibir mensagem de erro de credenciais invalidas', () => {
        cy.login(perfil.usuario, perfil.senhaInvalida)
        cy.get((".login-form > form > p")).should('contain', 'is incorrect' )
        
    });
    
});