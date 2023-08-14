/// <reference types="cypress" /> 


context('funcionalidade de processo de compra', () => {

    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/signup')
    });

    it('deve analizar detalhes do produto antes de adicionar ao carrinho', () => {
        cy.get('[data-qa="login-email"]').type('usu@rio')
        cy.get('[data-qa="login-password"]').type('12345678')
        cy.get('[data-qa="login-button"]').click()

        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()

        cy.get(':nth-child(5) > .btn').click()
        cy.get('.modal-body > :nth-child(1)').should('contain', 'added')

        
    });


    it('adiciona o produto direto ao carrinho', () => {
        cy.get('[data-qa="login-email"]').type('usu@rio')
        cy.get('[data-qa="login-password"]').type('12345678')
        cy.get('[data-qa="login-button"]').click()

        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-body > :nth-child(1)').should('contain', 'added')
        
        
    });


    it('remove produto do carrinho', () => {
        cy.get('[data-qa="login-email"]').type('usu@rio')
        cy.get('[data-qa="login-password"]').type('12345678')
        cy.get('[data-qa="login-button"]').click()

        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()

        cy.get('u').click()
        cy.get('.col-sm-6 > .btn').should('contain', "Proceed")
        cy.get('.cart_quantity_delete').click()
        cy.get('#empty_cart > .text-center').should('contain', "empty")
    });


    it('altera quantiade de produto antes de adicionar ao carrinho', () => {

        cy.get('[data-qa="login-email"]').type('usu@rio')
        cy.get('[data-qa="login-password"]').type('12345678')
        cy.get('[data-qa="login-button"]').click()

        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()

        cy.get('#quantity').type("0")

        cy.get(':nth-child(5) > .btn').click()
        cy.get('u').click()
        cy.get('.disabled').should('contain', '10')
        cy.get('.cart_quantity_delete').click()

        
    });



    it('adiciona comentario ao pedido', () => {
        cy.get('[data-qa="login-email"]').type('usu@rio')
        cy.get('[data-qa="login-password"]').type('12345678')
        cy.get('[data-qa="login-button"]').click()

        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('u').click()
        cy.get('.active').should('contain','Shopping Cart')
        cy.get('.col-sm-6 > .btn').click()
        cy.get('.active').should('contain','Checkout')
        cy.get('.form-control').type('adding coment')
 
    });

    it('adiciona dados do pagamento e confirma pedido', () => {
        cy.get('[data-qa="login-email"]').type('usu@rio')
        cy.get('[data-qa="login-password"]').type('12345678')
        cy.get('[data-qa="login-button"]').click()

        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('u').click()
        cy.get('.active').should('contain','Shopping Cart')
        cy.get('.col-sm-6 > .btn').click()
        cy.get('.active').should('contain','Checkout')
        cy.get(':nth-child(7) > .btn').click()

        cy.get('[data-qa="name-on-card"]').type("nome do cartao")
        cy.get('[data-qa="card-number"]').type("12345678")
        cy.get('[data-qa="cvc"]').type("123")
        cy.get('[data-qa="expiry-month"]').type("12")
        cy.get('[data-qa="expiry-year"]').type("23")
        cy.get('[data-qa="pay-button"]').click()
        cy.get('[data-qa="order-placed"] > b').should('contain', 'ORDER PLACED!')


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

    
   it.only('baixa fatura da compra', () => {

        cy.get('[data-qa="login-email"]').type('usu@rio')
        cy.get('[data-qa="login-password"]').type('12345678')
        cy.get('[data-qa="login-button"]').click()

        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('u').click()
        cy.get('.active').should('contain','Shopping Cart')
        cy.get('.col-sm-6 > .btn').click()
        cy.get('.active').should('contain','Checkout')
        cy.get(':nth-child(7) > .btn').click()

        cy.get('[data-qa="name-on-card"]').type("nome do cartao")
        cy.get('[data-qa="card-number"]').type("12345678")
        cy.get('[data-qa="cvc"]').type("123")
        cy.get('[data-qa="expiry-month"]').type("12")
        cy.get('[data-qa="expiry-year"]').type("23")
        cy.get('[data-qa="pay-button"]').click()
        cy.get('.col-sm-9 > p').should('contain', 'Your order has been confirmed!')

        cy.get('.col-sm-9 > .btn-default').click()


    
   });

});