describe("Funcionalidade: Menu Motocicletas", () => {
  beforeEach(() => { 
    cy.visit("https://www.kawasakibrasil.com/pt-br/")
  })
   
    it("TC005.001 - Sub-Menu 'Urbano/Pista' - Modelo Ninja", () => {      
        //Dado que eu esteja na página Inicial (Assertion da pág Inicial do site)
        cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
        cy.wait(1000)        
        //Quando clico no Menu "Motocicletas"
        cy.get('#cat-1').click()
        cy.wait(1000)
        //E clico na opção "NINJA" do Sub-Menu "Urbano/Pista"
        cy.get('#nav-tab-1').click()
        cy.wait(1000)        
        //Então abre uma página com sete modelos de moto (Assertion)
        cy.get('#nav-tab-content-1 > .row > :nth-child(1) > .catLine > .headSix').should('have.text', "SUPERSPORT")
        cy.wait(1000)
    })

    
    it("TC005.002 - Sub-Menu 'Urbano/Aventura' - Modelo Z", () => {      
        //Dado que eu esteja na página Inicial (Assertion da pág Inicial do site)
        cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
        cy.wait(1000)        
        //Quando clico no Menu "Motocicletas"
        cy.get('#cat-1').click()
        cy.wait(1000)
        //Quando clico na opção "Z" do Sub-Menu "Urbano/Aventura"
        cy.get('#nav-tab-16').click()
        cy.wait(1000)        
        //Então abre uma página com sete modelos de moto (Assertion)
        cy.get('#nav-tab-content-16 > .row > :nth-child(1) > .catLine > .headSix').should('have.text', "SUPERNAKED")
        cy.wait(1000)
    })


    it("TC005.003	- Sub-Menu 'Urbano/Aventura' - Modelo Versys", () => {      
          //Dado que eu esteja na página Inicial (Assertion da pág Inicial do site)
          cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
          cy.wait(1000)        
          //Quando clico no Menu "Motocicletas"
          cy.get('#cat-1').click()
          cy.wait(1000)
          //Quando clico na opção "VERSYS" do Sub-Menu "Urbano/Aventura"
          cy.get('#nav-tab-4').click()
          cy.wait(1000)          
          //Então abre uma página com sete modelos de moto (Assertion)
          cy.get('#nav-tab-content-4 > .row > .col-lg-3 > .catLine > .headSix').should('have.text', "ADVENTURE/TOURING")
          cy.wait(1000)
    })


    it("TC005.004 - Sub-Menu 'Urbano/Aventura' - Modelo Vulcan", () => {      
          //Dado que eu esteja na página Inicial (Assertion da pág Inicial do site)
          cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
          cy.wait(1000)        
          //Quando clico no Menu "Motocicletas"
          cy.get('#cat-1').click()
          cy.wait(1000)
          //Quando clico na opção "VULCAN" do Sub-Menu "Urbano/Aventura"
          cy.get('#nav-tab-14').click()
          cy.wait(1000)          
          //Então abre uma página com sete modelos de moto (Assertion)
          cy.get('#nav-tab-content-14 > .row > .col-lg-3 > .catLine > .headSix').should('have.text', "SPORT CRUISER")
          cy.wait(1000)
    })


    it("TC005.005	- Sub-Menu 'Urbano' - Modelo Eliminator", () => {      
          //Dado que eu esteja na página Inicial (Assertion da pág Inicial do site)
          cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
          cy.wait(1000)        
          //Quando clico no Menu "Motocicletas"
          cy.get('#cat-1').click()
          cy.wait(1000)
          //Quando clico na opção "ELIMINATOR" do Sub-Menu "Urbano"
          cy.get('#nav-tab-1002').click()
          cy.wait(1000)          
          //Então abre uma página com sete modelos de moto (Assertion)
          cy.get('#nav-tab-content-1002 > .row > .col-lg-3 > .catLine > .headSix').should('have.text', "Street Cruiser")
          cy.wait(1000)
    })


    it("TC005.006	- Sub-Menu 'Enduro/Off-Road' - Modelo KLX", () => {      
          //Dado que eu esteja na página Inicial (Assertion da pág Inicial do site)
          cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
          cy.wait(1000)        
          //Quando clico no Menu "Motocicletas"
          cy.get('#cat-1').click()
          cy.wait(1000)
          //Quando clico na opção "KLX" do Sub-Menu "Enduro/Off-Road"
          cy.get('#nav-tab-22').click()
          cy.wait(1000)          
          //Então abre uma página com sete modelos de moto (Assertion)
          cy.get('#nav-tab-content-22 > .row > .col-lg-3 > .catLine > .headSix').should('have.text', "OFF-ROAD")
          cy.wait(1000)
    })


    it.only("TC005.007	- Sub-Menu 'Competição' - Modelo KLX", () => {      
          //Dado que eu esteja na página Inicial (Assertion da pág Inicial do site)
          cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
          cy.wait(1000)        
          //Quando clico no Menu "Motocicletas"
          cy.get('#cat-1').click()
          cy.wait(1000)
          //Quando clico na opção "KX" do Sub-Menu "Competição"
          cy.get('#nav-tab-23').click()
          cy.wait(1000)          
          //Então abre uma página com sete modelos de moto (Assertion)
          cy.get('#nav-tab-content-23 > .row > :nth-child(1) > .catLine > .headSix').should('have.text', "YOUTH MX")
          cy.wait(1000)
    })
        
})