/// <reference types="cypress" /> 

context('funcionalidade de login', () => {

    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/signup')
    });

    it('deve fazer login com sucesso', () => {
        cy.get('[data-qa="login-email"]').type('usu@rio')
        cy.get('[data-qa="login-password"]').type('12345678')
        cy.get('[data-qa="login-button"]').click()
        cy.get(':nth-child(10) > a').should('contain', 'Logged in as')
        
    });

    it('deve exibir mensagem de erro de credenciais invalidas', () => {
        cy.get('[data-qa="login-email"]').type('usu@rio')
        cy.get('[data-qa="login-password"]').type('senhainvalida')
        cy.get('[data-qa="login-button"]').click()
        cy.get((".login-form > form > p")).should('contain', 'is incorrect' )
        
    });
    
});

