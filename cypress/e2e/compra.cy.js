/// <reference types="cypress" /> 
const perfil = require('../fixtures/perfil.json');
const {faker} = require('@faker-js/faker');


context('funcionalidade de processo de compra', () => {

    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/signup')
    });

    it('deve analizar detalhes do produto antes de adicionar ao carrinho', () => {
        cy.login(perfil.usuario, perfil.senha)
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
        cy.get(':nth-child(5) > .btn').click()
        cy.get('.modal-body > :nth-child(1)').should('contain', 'added')    
    });

    it('adiciona o produto direto ao carrinho', () => {
        cy.login(perfil.usuario, perfil.senha)
        cy.addCarrinho()   
    });


    it('remove produto do carrinho', () => {
        cy.login(perfil.usuario, perfil.senha)
        cy.addCarrinho()
        cy.get('.cart_quantity_delete').click()
        cy.get('#empty_cart > .text-center').should('contain', "empty")
    });

    it('altera quantiade de produto antes de adicionar ao carrinho', () => {
        cy.login(perfil.usuario, perfil.senha)

        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
        cy.get('#quantity').type("0")

        cy.get(':nth-child(5) > .btn').click()
        cy.get('u').click()
        cy.get('.disabled').should('contain', '10')
        cy.get('.cart_quantity_delete').click()     
    });

    it('adiciona comentario ao pedido', () => {
        cy.login(perfil.usuario, perfil.senha)
        cy.addCarrinho()
        cy.get('.col-sm-6 > .btn').click()
        cy.get('.active').should('contain','Checkout')
        cy.get('.form-control').type('adding coment')

    });

    it('adiciona dados do pagamento e confirma pedido', () => {
        cy.login(perfil.usuario, perfil.senha)
        cy.goPay(faker.person.fullName(), faker.number.int(),faker.number.int(100), faker.number.int(10), faker.number.int(100) )
        cy.get('.col-sm-9 > p').should('contain', 'order has been confirmed!')
    });



   it('logar durante o proceso de compra', () => {

        cy.get('.nav > :nth-child(2) > a').click()

        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('u').click()
        cy.get('.active').should('contain','Shopping Cart')

        cy.get('.col-sm-6 > .btn').click()
        cy.get('.modal-body > :nth-child(1)').should('contain', 'Register / Login account')
        cy.get('.modal-body > :nth-child(2) > a > u').click()

        cy.get('.login-form > h2').should('contain', 'Login to your account')
    
   });

    
   it('baixa fatura da compra', () => {
        cy.login(perfil.usuario, perfil.senha)
        cy.goPay(faker.person.fullName(), faker.number.int(),faker.number.int(100), faker.number.int(10), faker.number.int(100) )
        cy.get('.col-sm-9 > p').should('contain', 'order has been confirmed!')
        cy.get('.col-sm-9 > .btn-default').click()

   });

});