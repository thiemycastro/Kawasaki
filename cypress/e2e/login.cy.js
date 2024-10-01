describe("Funcionalidade: Login", () => {
  beforeEach(() => { 
    cy.visit("https://www.kawasakibrasil.com/pt-br/minha-kawasaki/login-registrar?returnurl=%2fpt-br%2fminha-kawasaki")
  })
      
      it("TC002.001 - Login válido com credenciais válidas (Happy Path)", () => {      
            //Dado que eu esteja na página "Minha Kawasaki" (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)            
            //Quando preencho o campo "Endereço de E-mail"
            cy.get("#Email").type("worktest852@gmail.com")
            cy.wait(1000)
            //E preencho o campo "Senha"
            cy.get("#Password").type("Testestrabalho345")
            cy.wait(1000)             
            //E clico no botão "Login"            
            cy.get('#loginForm > .blackBtn').click()
            cy.wait(1000)
            //Então não consigo acessar minha conta (Assertion)
            cy.get('#dropdownMenuLink').should('have.text', '\n            \n                \n                    \n                \n            \n            worktest852@gmail.com\n        ')
      })

      
      it("TC002.002 - Login inválido sem credenciais", () => {      
            //Dado que eu esteja na página "Minha Kawasaki" (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)            
            //Quando não preencho nada no campo "Endereço de Email"
            //E não preencho o campo "Senha"
            //E clico no botão "Login"            
            cy.get('#loginForm > .blackBtn').click()
            cy.wait(1000)
            //Então não consigo acessar minha conta (Assertion)
            cy.get('#Email-error').should('have.text', "Um endereço de e-mail válido é necessário.")
      })

      
      it("TC002.003 - Login inválido com password vazia", () => {      
            //Dado que eu esteja na página "Minha Kawasaki" (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)            
            //Quando preencho o campo "Endereço de E-mail"
            cy.get("#Email").type("worktest345@gmail.com")
            cy.wait(1000)
            //E não preencho o campo "Senha"             
            //E clico no botão "Login"            
            cy.get('#loginForm > .blackBtn').click()
            cy.wait(1000)
            //Então não consigo acessar minha conta (Assertion)
            cy.get('#Password-error').should('have.text', 'O campo "Senha" é obrigatório.\n')         
      })

      
      it("TC002.004 - Login inválido com e-mail vazio", () => {      
             //Dado que eu esteja na página "Minha Kawasaki" (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)            
            //Quando não preencho o campo "Endereço de E-mail"            
            //E preencho o campo "Senha"
            cy.get("#Password").type("Testestrabalho345")
            cy.wait(1000)            
            //E clico no botão "Login"            
            cy.get('#loginForm > .blackBtn').click()
            cy.wait(1000)
            //Então não consigo acessar minha conta (Assertion)
            cy.get('#Email-error').should('have.text', 'Um endereço de e-mail válido é necessário.')
      })

      
      it("TC002.005 - Login inválido com e-mail inválido", () => {      
            //Dado que eu esteja na página "Minha Kawasaki" (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)            
            //Quando preencho o campo "Endereço de E-mail"
            cy.get("#Email").type("worktest82@gmail.com")
            cy.wait(1000)
            //E preencho o campo "Senha"
            cy.get("#Password").type("Testestrabalho345")
            cy.wait(1000)
            //E clico no opção "Mostrar Senha"
            cy.get("#showPass").click()
            cy.wait(1000)    
            //E clico no botão "Login"            
            cy.get('#loginForm > .blackBtn').click()
            cy.wait(1000)
            //Então não consigo acessar minha conta (Assertion)
            cy.get('.validation-summary-errors > ul > li').should('have.text', 'O email ou a senha que você digitou estavam incorretos. Por favor, insira as informações corretas.')            
      })

      
      it("TC002.006 - Login inválido com password inválida (sem Case-sensitive)", () => {      
            //Dado que eu esteja na página "Minha Kawasaki" (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)            
            //Quando preencho o campo "Endereço de E-mail"
            cy.get("#Email").type("worktest345@gmail.com")
            cy.wait(1000)
            //E preencho o campo "Senha"
            cy.get("#Password").type("testestrabalho345")
            cy.wait(1000)
            //E clico no opção "Mostrar Senha"
            cy.get("#showPass").click()
            cy.wait(1000) 
            //E clico no botão "Login"            
            cy.get('#loginForm > .blackBtn').click()
            cy.wait(1000)
            //Então não consigo acessar minha conta (Assertion)
            cy.get('.validation-summary-errors > ul > li').should('have.text', 'O email ou a senha que você digitou estavam incorretos. Por favor, insira as informações corretas.')
      })

      
      it("TC002.007 - Login inválido com credenciais inválidas - Numéricas", () => {      
            //Dado que eu esteja na página "Minha Kawasaki" (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)            
            //Quando preencho o campo "Endereço de E-mail"
            cy.get("#Email").type("517662485")
            cy.wait(1000)
            //E preencho o campo "Senha"
            cy.get("#Password").type("testestrabalho345")
            cy.wait(1000)
            //E clico no opção "Mostrar Senha"
            cy.get("#showPass").click()
            cy.wait(1000)      
            //E clico no botão "Login"            
            cy.get('#loginForm > .blackBtn').click()
            cy.wait(1000)
            //Então não consigo acessar minha conta (Assertion)
            cy.get('.validation-summary-errors > ul > li').should('have.text', 'Endereço de email inválido, tente novamente.')
      })

      
      it("TC002.008 - Login inválido com usuário inválido - Emoji", () => {      
            //Dado que eu esteja na página "Minha Kawasaki" (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)            
            //Quando preencho o campo "Endereço de E-mail"
            cy.get("#Email").type("🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻")
            cy.wait(1000)
            //E preencho o campo "Senha"
            cy.get("#Password").type("Testestrabalho345")
            cy.wait(1000)
            //E clico no opção "Mostrar Senha"
            cy.get("#showPass").click()
            cy.wait(1000)
            //E clico no botão "Login"            
            cy.get('#loginForm > .blackBtn').click()
            cy.wait(1000)
            //Então não consigo acessar minha conta (Assertion)
            cy.get('.validation-summary-errors > ul > li').should('have.text', 'Endereço de email inválido, tente novamente.')
      })

      
      it("TC002.009 - Login inválido com usuário inválido - Caracteres especiais", () => {      
           //Dado que eu esteja na página "Minha Kawasaki" (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)            
            //Quando preencho o campo "Endereço de E-mail"
            cy.get("#Email").type("!!!!!!!!")
            cy.wait(1000)
            //E preencho o campo "Senha"
            cy.get("#Password").type("Testestrabalho345")
            cy.wait(1000)
            //E clico no opção "Mostrar Senha"
            cy.get("#showPass").click()
            cy.wait(1000)
            //E clico no botão "Login"            
            cy.get('#loginForm > .blackBtn').click()
            cy.wait(1000)
            //Então não consigo acessar minha conta (Assertion)
            cy.get('.validation-summary-errors > ul > li').should('have.text', 'Endereço de email inválido, tente novamente.')
      })

      
      it("TC002.010 - Esqueci minha senha", () => {      
            //Dado que eu esteja na página "Minha Kawasaki" (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)            
            //E clico em "Esqueci minha senha"            
            cy.get('#loginForm > .headSix').click()
            cy.wait(1000)
            //Quando acesso a página "Esqueci Minha Senha" (Assertion)
            cy.get('#forgotPasswordForm > :nth-child(1) > .headThree').should('have.text', 'ESQUECI MINHA SENHA')
            //E preencho o campo "Endereço de E-mail"
            cy.get("#Email").type("worktest345@gmail.com")
            cy.wait(1000)
            //E clico no botão "Recuperar"            
            cy.get('#forgotPasswordForm > .blackBtn').click()
            cy.wait(1000)
            //Então acesso a página de confirmação de envio de e-mail (Assertion)
            cy.get(':nth-child(2) > .headThree').should('have.text', 'ESQUECEU SUA SENHA? NÃO SE PREOCUPE.')            
       })

      
      it("TC002.011 - Esqueci minha senha (cancelar)", () => {      
            //Dado que eu esteja na página "Minha Kawasaki" (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)            
            //E clico em "Esqueci minha senha"            
            cy.get('#loginForm > .headSix').click()
            cy.wait(2000)
            //Quando acesso a página "Esqueci Minha Senha" (Assertion)
            cy.get('#forgotPasswordForm > :nth-child(1) > .headThree').should('have.text', 'ESQUECI MINHA SENHA')
            cy.wait(2000)            
            //E clico no botão "Cancelar"            
            cy.get('#forgotPasswordForm > .headSix').click()
            cy.wait(1000)
            //Então retorno para a página de Login (Assertion)
            cy.get('#loginForm > :nth-child(2) > .headThree').should('have.text', 'LOGIN')
      })

      
      it("TC002.012 - Logotipo", () => {      
            //Dado que eu esteja na página "Minha Kawasaki" (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)            
            //Quando clico no Logotipo            
            cy.get('.navbar-brand').click()
            cy.wait(1000)
            //Então retorno para a página inicial (Assertion)
            cy.url().should('eq', 'https://www.kawasakibrasil.com/pt-br/')
      })

})