describe("Funcionalidade: Busca", () => {
  beforeEach(() => { 
    cy.visit("https://www.kawasakibrasil.com/pt-br/")
  })
   
    it("TC004.001 - Busca por Nome válido", () => {      
        //Dado que eu esteja na página Inicial (Assertion da pág Inicial do site)
        cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")        
        //E digito na Barra de pesquisa o Nome "Ninja"
        //Quando clico na lupa para realizar a Busca
        cy.get('#searchboxheader').type('Ninja{enter}')        
        //Então aparece abaixo vários links de Motos Ninja (Assertion)
        cy.get('#resultsInfo > .headFour').should('have.text', "Resultados da Busca")
    })

    
    it("TC004.002 - Busca por Nome Inválido", () => {      
        //Dado que eu esteja na página Inicial (Assertion da pág Inicial do site)
        cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")        
        //E digito na Barra de pesquisa o Nome "Ninjja"
        //Quando clico na lupa para realizar a Busca
        cy.get('#searchboxheader').type('Ninjja{enter}')        
        //Então aparece abaixo vários links de Motos Ninja (Assertion)
        cy.get('.col-sm-12 > .headTwo').should('have.text', "Nenhum resultado encontrado") 
    })
        
})