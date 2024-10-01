describe("Funcionalidade: Localizar Concessionária", () => {
  beforeEach(() => { 
    cy.visit("https://www.kawasakibrasil.com/pt-br/")
  })
   
    it("TC003.001 - Localizar por Nome válido", () => {      
        //Dado que eu esteja na página Inicial (Assertion da pág Inicial do site)
        cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
        //E clico no link "Localize uma Concessionária"
        cy.get(':nth-child(2) > .nav-link > div.d-none').click()        
        //E abre a página de busca de concessionárias(Assertion)
        cy.get('[role="presentation"] > .headTwo').should('have.text', "LOCALIZADOR DE CONCESSIONÁRIAS")
        //E na barra de pesquisa digite o Nome "Marello Motos - Santos"
        //Quando clico na lupa para realizar a Busca
        cy.get('input#dealerListFilterInput').type('Marello Motos - Santos{enter}')
        //Então aparece abaixo a Concessionária encontrada com Nome, Endereço, Dados de contacto e Site (Assertion)
        cy.get('[data-index="18"] > a > .headFive').should('have.text', "Marello Motos - Santos")
    })

    
    it("TC003.002 - Localizar por CEP válido", () => {      
        //Dado que eu esteja na página Inicial (Assertion da pág Inicial do site)
        cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
        //E clico no link "Localize uma Concessionária"
        cy.get(':nth-child(2) > .nav-link > div.d-none').click()        
        //E abre a página de busca de concessionárias(Assertion)
        cy.get('[role="presentation"] > .headTwo').should('have.text', "LOCALIZADOR DE CONCESSIONÁRIAS")
        //E na barra de pesquisa digite o o CEP "11015-003"
        //Quando clico na lupa para realizar a Busca
        cy.get('input#dealerListFilterInput').type('11015-003{enter}')
        //Então aparece abaixo a Concessionária encontrada com Nome, Endereço, Dados de contacto e Site (Assertion)
        cy.get('[data-index="18"] > a > .headFive').should('have.text', "Marello Motos - Santos")      
    })

    
    it("TC003.003 - Localizar por Nome inválido", () => {      
        //Dado que eu esteja na página Inicial (Assertion da pág Inicial do site)
        cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
        //E clico no link "Localize uma Concessionária"
        cy.get(':nth-child(2) > .nav-link > div.d-none').click()        
        //E abre a página de busca de concessionárias(Assertion)
        cy.get('[role="presentation"] > .headTwo').should('have.text', "LOCALIZADOR DE CONCESSIONÁRIAS")     
        //E na barra de pesquisa digite o Nome "Marcello Motos"
        //Quando clico na lupa para realizar a Busca
        cy.get('input#dealerListFilterInput').type('Marcello Motos{enter}')
        //Então aparece abaixo uma mensagem de erro (Assertion)
        cy.get('#dealerListFilterErr').should('have.text', "Não foi possível localizar nenhuma Concessionária")      
    })

    
    it("TC003.004	- Localizar por CEP inválido", () => {      
      //Dado que eu esteja na página Inicial (Assertion da pág Inicial do site)
        cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
        //E clico no link "Localize uma Concessionária"
        cy.get(':nth-child(2) > .nav-link > div.d-none').click()        
        //E abre a página de busca de concessionárias(Assertion)
        cy.get('[role="presentation"] > .headTwo').should('have.text', "LOCALIZADOR DE CONCESSIONÁRIAS")
        //E na barra de pesquisa digite o o CEP "11015-013"
        //Quando clico na lupa para realizar a Busca
        cy.get('input#dealerListFilterInput').type('11015-013{enter}')
        //Então aparece abaixo uma mensagem de erro (Assertion)
        cy.get('#dealerListFilterErr').should('have.text', "Não foi possível localizar nenhuma Concessionária")      
    })
        
})