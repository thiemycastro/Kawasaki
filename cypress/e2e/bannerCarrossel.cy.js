describe("Funcionalidade: Banner Carrossel", () => {
        beforeEach(() => { 
        cy.visit("https://www.kawasakibrasil.com/pt-br/")
        })
        
        it("TC006.001 - Botão 'Play'", () => {    
                //Dado que eu esteja na página Inicial
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)
                //Quando clico no botão "Play" abaixo do Banner Carrossel
                cy.get('#playButton').click()
                cy.wait(1000)
                //Então o Banner deverá passar as imagens automaticamente (Assertion)
                cy.get('.active > .container').should('be.visible')
                cy.wait(1000)
        })

        
        it("TC006.002 - Botão 'Pause'", () => {  
                //Dado que eu esteja na página Inicial
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)
                //E clico no botão "Play" abaixo do Banner Carrossel
                //E o Banner passar as imagens automaticamente
                cy.get('#playButton').click()
                cy.wait(3000)
                //Quando clico no botão "Pause"
                cy.get('#pauseButton').click()
                cy.wait(1000)
                //Então as imagens param de passar automaticamente (Assertion)
                cy.get('.active > .container').should('be.visible')
                cy.wait(1000) 
        })

        
        it("TC006.003 - Botão Lateral Direito", () => {      
                //Dado que eu esteja na página Inicial
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)
                //Quando clico no botão Lateral Direito do Banner Carrossel
                cy.get('.carousel-control-next').click()
                cy.wait(1000)
                //E clico mais 09 vezes
                cy.get('.carousel-control-next').click()
                cy.wait(1000)
                cy.get('.carousel-control-next').click()
                cy.wait(1000)
                cy.get('.carousel-control-next').click()
                cy.wait(1000)
                cy.get('.carousel-control-next').click()
                cy.wait(1000)
                cy.get('.carousel-control-next').click()
                cy.wait(1000)
                cy.get('.carousel-control-next').click()
                cy.wait(1000)
                cy.get('.carousel-control-next').click()
                cy.wait(1000)
                cy.get('.carousel-control-next').click()
                cy.wait(1000)
                cy.get('.carousel-control-next').click()
                cy.wait(1000)
                //Então as imagens mudam a cada clique
                cy.get('.active > .container').should('be.visible')
                cy.wait(1000) 
        })

        
        it("TC006.004 - Botão Lateral Esquerdo", () => {      
                //Dado que eu esteja na página Inicial
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)
                //Quando clico no botão Lateral Esquerdo do Banner Carrossel
                cy.get('.carousel-control-prev').click()
                cy.wait(1000)
                //E clico mais 09 vezes
                cy.get('.carousel-control-prev').click()
                cy.wait(1000)
                cy.get('.carousel-control-prev').click()
                cy.wait(1000)
                cy.get('.carousel-control-prev').click()
                cy.wait(1000)
                cy.get('.carousel-control-prev').click()
                cy.wait(1000)
                cy.get('.carousel-control-prev').click()
                cy.wait(1000)
                cy.get('.carousel-control-prev').click()
                cy.wait(1000)
                cy.get('.carousel-control-prev').click()
                cy.wait(1000)
                cy.get('.carousel-control-prev').click()
                cy.wait(1000)
                cy.get('.carousel-control-prev').click()
                cy.wait(1000)
                //Então as imagens mudam a cada clique
                cy.get('.active > .container').should('be.visible')
                cy.wait(1000) 
        })
        

        it("TC006.005 - Botão 1 do Banner", () => {      
                //Dado que eu esteja na página Inicial
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)
                //Quando clico no botão 1 de Foto abaixo do Banner
                cy.get("#carouselbtn0 > .offIndicator").click({ force: true })  
                cy.wait(1000)                
                //Então na foto do banner aparece a mensagem 
                cy.get('.active > .container > .carouselText > .hppTable > tbody > tr > .align-middle > .headFour').should('have.text', "Conheça as ofertas Kawasaki!")
                cy.wait(1000)
        })

        
        it("TC006.006 - Botão 2 do Banner", () => {      
                //Dado que eu esteja na página Inicial
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)
                //Quando clico no botão 2 de Foto abaixo do Banner
                cy.get('#carouselbtn1 > .onIndicator').click({ force: true }) 
                cy.wait(1000)                
                //Então na foto do banner aparece a mensagem 
                cy.get('.active > .container > .carouselText > .hppTable > tbody > tr > .align-middle > .headSix').should('have.text', "GET OUT AND PLAY")
                cy.wait(1000)                
        })

        
        it("TC006.007 - Botão 3 do Banner", () => {      
                //Dado que eu esteja na página Inicial
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)
                //Quando clico no botão 3 de Foto abaixo do Banner
                cy.get('#carouselbtn2 > .onIndicator').click({ force: true }) 
                cy.wait(1000)                
                //Então na foto do banner aparece a mensagem 
                cy.get('.active > .container > .carouselText > .hppTable > tbody > tr > .align-middle > .headOne').should('have.text', "Estilo e Atitude com mais performance")
                cy.wait(1000)
        })

        
        it("TC006.008 - Botão 4 do Banner", () => {      
                //Dado que eu esteja na página Inicial
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)
                //Quando clico no botão 4 de Foto abaixo do Banner
                cy.get('#carouselbtn3 > .onIndicator').click({ force: true }) 
                cy.wait(1000)                
                //Então na foto do banner aparece a mensagem 
                cy.get('.active > .container > .carouselText > .hppTable > tbody > tr > .align-middle > .headOne').should('have.text', "Mais potência nas pistas e no seu dia a dia")
                cy.wait(1000)
        })


        it("TC006.009 - Botão 5 do Banner", () => {      
                //Dado que eu esteja na página Inicial
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)
                //Quando clico no botão 5 de Foto abaixo do Banner
                cy.get('#carouselbtn4 > .onIndicator').click({ force: true }) 
                cy.wait(1000)                
                //Então na foto do banner aparece a mensagem 
                cy.get('.active > .container > .carouselText > .hppTable > tbody > tr > .align-middle > .headFour').should('have.text', "TORNE O DIA A DIA EMOCIONANTE")
                cy.wait(1000)
        })


        it("TC006.010 - Botão 6 do Banner", () => {      
                //Dado que eu esteja na página Inicial
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)
                //Quando clico no botão 6 de Foto abaixo do Banner
                cy.get('#carouselbtn5 > .offIndicator').click({ force: true }) 
                cy.wait(1000)                
                //Então na foto do banner aparece a mensagem
                cy.get('.active > .container > .carouselText > .hppTable > tbody > tr > .align-middle > .headOne').should('have.text', "ELIMINATOR 500 SE")
                cy.wait(1000)
        })


        it("TC006.011 - Botão 7 do Banner", () => {      
                //Dado que eu esteja na página Inicial
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)
                //Quando clico no botão 7 de Foto abaixo do Banner
                cy.get('#carouselbtn6 > .offIndicator').click({ force: true }) 
                cy.wait(1000)                
                //Então na foto do banner aparece a mensagem 
                cy.get('.active > .container > .carouselText > .hppTable > tbody > tr > .align-middle > .headOne').should('have.text', "OBSESSÃO POR SUPER ESPORTIVIDADE")
                cy.wait(1000)
        })


        it("TC006.012 - Botão 8 do Banner", () => {      
                //Dado que eu esteja na página Inicial
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)
                //Quando clico no botão 8 de Foto abaixo do Banner
                cy.get('#carouselbtn7 > .offIndicator').click({ force: true }) 
                cy.wait(1000)                
                //Então na foto do banner aparece a mensagem 
                cy.get('.active > .container > .carouselText > .hppTable > tbody > tr > .align-middle > .headFour').should('have.text', "A MOTO QUE CONSTRÓI CAMPEÕES")
                cy.wait(1000)
        })


        it("TC006.013 - Botão 9 do Banner", () => {      
                //Dado que eu esteja na página Inicial
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)
                //Quando clico no botão 9 de Foto abaixo do Banner
                cy.get('#carouselbtn8 > .onIndicator').click({ force: true }) 
                cy.wait(1000)                
                //Então na foto do banner aparece a mensagem 
                cy.get('.active > .container > .carouselText > .hppTable > tbody > tr > .align-middle > .headOne').should('have.text', "DESPERTE SUA SUPER ESPORTIVIDADE")
                cy.wait(1000)
        })


        it("TC006.014 - Botão 10 do Banner", () => {      
                //Dado que eu esteja na página Inicial
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)
                //Quando clico no botão 10 de Foto abaixo do Banner
                cy.get('#carouselbtn9 > .onIndicator').click({ force: true }) 
                cy.wait(1000)                
                //Então na foto do banner aparece a mensagem "A MOTOCICLETA QUE CONSTRÓI CAMPEÕES "
                cy.get('.active > .container > .carouselText > .hppTable > tbody > tr > .align-middle > .headOne').should('have.text', "50 anos dominando na terra")
                cy.wait(1000)
        })

        
        it("TC006.015 - Botão 11 do Banner", () => {      
                //Dado que eu esteja na página Inicial
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)
                //Quando clico no botão 10 de Foto abaixo do Banner
                cy.get('#carouselbtn10 > .onIndicator').click({ force: true }) 
                cy.wait(1000)                
                //Então na foto do banner aparece a mensagem "A MOTOCICLETA QUE CONSTRÓI CAMPEÕES "
                cy.get('.active > .container > .carouselText > .hppTable > tbody > tr > .align-middle > .headOne').should('have.text', "A MOTOCICLETA QUE CONSTRÓI CAMPEÕES ")
                cy.wait(1000)
        })

        
        it("TC006.016 - Botão 'Confira!' do banner 1", () => {      
                //Dado que eu esteja na página Inicial
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)
                //Quando clico no botão "CONFIRA!" no Banner
                cy.get('.active > .container > .carouselText > .hppTable > tbody > tr > .align-middle > .hppButton').click({ force: true }) 
                cy.wait(1000)                
                //Então acesso a página com 03 opções de moto
                cy.get('[role="presentation"] > .headTwo').should('have.text', "CONDIÇÕES ESPECIAIS")
                cy.wait(1000)
        })


        it("TC006.017 - Botão 'Conheça' do banner 2", () => {      
                //Dado que eu esteja na página Inicial
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)
                //E clico no botão 2 de Foto abaixo do Banner
                cy.get('#carouselbtn1 > .onIndicator').click({ force: true }) 
                cy.wait(1000)                
                //Quando clico no botão "CONHEÇA" no Banner
                cy.get('.active > .container > .carouselText > .hppTable > tbody > tr > .align-middle > .hppButton').click({ force: true }) 
                cy.wait(1000)                
                //Então acesso a página "Ninja 500"
                cy.get('.heroCaption > .headFour').should('have.text', "GET OUT AND PLAY")
                cy.wait(1000)
        })


        it("TC006.018 - Botão 'Conheça' do banner 3", () => {      
                //Dado que eu esteja na página Inicial
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)
                //E clico no botão 3 de Foto abaixo do Banner
                cy.get('#carouselbtn2 > .onIndicator').click({ force: true }) 
                cy.wait(1000)                
                //Quando clico no botão "CONHEÇA" no Banner
                cy.get('.active > .container > .carouselText > .hppTable > tbody > tr > .align-middle > .hppButton').click({ force: true }) 
                cy.wait(1000)                
                //Então acesso a página "Ninja 500"
                cy.get('.headOne').should('have.text', "TODOS OS OLHARES EM VOCÊ")
                cy.wait(1000)
        })

        
        it("TC006.019 - Botão 'Conheça a motocicleta!' do banner 4", () => {      
                //Dado que eu esteja na página Inicial
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)
                //E clico no botão 4 de Foto abaixo do Banner
                cy.get('#carouselbtn3 > .onIndicator').click({ force: true }) 
                cy.wait(1000)                
                //Quando clico no botão "CONHEÇA" no Banner
                cy.get('.active > .container > .carouselText > .hppTable > tbody > tr > .align-middle > .hppButton').click({ force: true }) 
                cy.wait(1000)                         
                //Então acesso a página 
                cy.get('.headOne').should('have.text', "FAÇA SUA AFIRMAÇÃO")
                cy.wait(1000)
        })


        it("TC006.020 - Botão 'Conheça a motocicleta' do banner 5", () => {      
                //Dado que eu esteja na página Inicial
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)
                //E clico no botão 5 de Foto abaixo do Banner
                cy.get('#carouselbtn4 > .onIndicator').click({ force: true }) 
                cy.wait(1000)                
                //Quando clico no botão "CONHEÇA A MOTOCICLETA!" no Banner
                cy.get('.active > .container > .carouselText > .hppTable > tbody > tr > .align-middle > .hppButton').click({ force: true }) 
                cy.wait(1000)                         
                //Então acesso a página 
                cy.get('.headOne').should('have.text', "SIMPLESMENTE PASSEAR")
                cy.wait(1000)
        })


        it("TC006.021 - Botão 'Conheça a motocicleta' do banner 6", () => {      
                //Dado que eu esteja na página Inicial
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)
                //E clico no botão 6 de Foto abaixo do Banner
                cy.get('#carouselbtn5 > .onIndicator').click({ force: true })  
                cy.wait(1000)                
                //Quando clico no botão "CONHEÇA A MOTOCICLETA!" no Banner
                cy.get('.active > .container > .carouselText > .hppTable > tbody > tr > .align-middle > .hppButton').click({ force: true }) 
                cy.wait(1000)                                       
                //Então acesso a página "ELIMINATOR 500 SE"
                cy.get('.headOne').should('have.text', "SIMPLESMENTE PASSEAR")
                cy.wait(1000)
        })


        it("TC006.022 - Botão 'Conheça o modelo' do banner 7", () => {      
                //Dado que eu esteja na página Inicial
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)
                //E clico no botão 7 de Foto abaixo do Banner
                cy.get('#carouselbtn6 > .offIndicator').click({ force: true })  
                cy.wait(1000)                
                //Quando clico no botão "CONHEÇA A MOTOCICLETA!" no Banner
                cy.get('.active > .container > .carouselText > .hppTable > tbody > tr > .align-middle > .hppButton').click({ force: true }) 
                cy.wait(1000)                      
                //Então acesso a página
                cy.get('.headOne').should('have.text', "OBSESSÃO POR SUPER ESPORTIVIDADE")
                cy.wait(1000)
        })


        it("TC006.023 - Botão 'Conheça' do banner 8", () => {      
                //Dado que eu esteja na página Inicial
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)
                //E clico no botão 8 de Foto abaixo do Banner
                cy.get('#carouselbtn7 > .offIndicator').click({ force: true })  
                cy.wait(1000)                
                //Quando clico no botão "CONHEÇA A MOTOCICLETA!" no Banner
                cy.get('.active > .container > .carouselText > .hppTable > tbody > tr > .align-middle > .hppButton').click({ force: true }) 
                cy.wait(1000)                       
                //Então acesso a página
                cy.get('.heroCaption > .headFour').should('have.text', "A MOTO QUE CONSTRÓI CAMPEÕES")
                cy.wait(1000)
        })


        it("TC006.024 - Botão 'Conheça' do banner 9", () => {      
                //Dado que eu esteja na página Inicial
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)
                //E clico no botão 9 de Foto abaixo do Banner
                cy.get('#carouselbtn8 > .onIndicator').click({ force: true })  
                cy.wait(1000)                
                //Quando clico no botão "CONHEÇA!" no Banner
                cy.get('.active > .container > .carouselText > .hppTable > tbody > tr > .align-middle > .hppButton').click({ force: true }) 
                cy.wait(1000)                     
                //Então acesso a página 
                cy.get('.heroCaption > .headFour').should('have.text', "DESPERTE SUA SUPER ESPORTIVIDADE")
                cy.wait(1000)
        })


        it("TC006.025 - Botão 'Conheça' do banner 10", () => {      
                //Dado que eu esteja na página Inicial
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)
                //E clico no botão 10 de Foto abaixo do Banner
                cy.get('#carouselbtn9 > .onIndicator').click({ force: true })  
                cy.wait(1000)                
                //Quando clico no botão "CONHEÇA!" no Banner
                cy.get('.active > .container > .carouselText > .hppTable > tbody > tr > .align-middle > .hppButton').click({ force: true }) 
                cy.wait(1000)                           
                //Então acesso a página
                cy.get('.headOne').should('have.text', "A MOTOCICLETA QUE CONSTRÓI CAMPEÕES ")
                cy.wait(1000)
        })


        it("TC006.026 - Botão 'Conheça' do banner 11", () => {      
                //Dado que eu esteja na página Inicial
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)
                //E clico no botão 11 de Foto abaixo do Banner
                cy.get('#carouselbtn10 > .onIndicator').click({ force: true })  
                cy.wait(1000)                
                //Quando clico no botão "CONHEÇA!" no Banner
                cy.get('.active > .container > .carouselText > .hppTable > tbody > tr > .align-middle > .hppButton').click({ force: true }) 
                cy.wait(1000)                           
                //Então acesso a página
                cy.get('.headOne').should('have.text', "A MOTOCICLETA QUE CONSTRÓI CAMPEÕES ")
                cy.wait(1000)
        })

})