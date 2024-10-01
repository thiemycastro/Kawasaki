describe("Funcionalidade: Registro", () => {
  beforeEach(() => { 
    cy.visit("https://www.kawasakibrasil.com/pt-br/minha-kawasaki/login-registrar?returnurl=%2fpt-br%2fminha-kawasaki")
  })
      
      it.only("TC001.001 - Novo Cadastro (Happy Path)", () => {      
            //Dado que eu esteja na página "Minha Kawasaki" (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)            
            //Quando preencho no quadro "Registrar-se", o campo "Endereço de E-mail"
            cy.get("#RegistrationEmail").type("workt21@gmail.com")
            cy.wait(1000)
            //E preencho o campo "Senha"
            cy.get("#RegistrationPassword").type("Testestrabalho345")
            cy.wait(1000)
            //E preencho o campo "Confirme a nova senha"
            cy.get("#ConfirmRegistrationPassword").type("Testestrabalho345")
            cy.wait(1000)
            //E seleciono a opção "*Verifico que tenho 18 anos ou mais e concordo com a política de privacidade e os termos e condições de uso da Kawasaki."
            cy.get('#AgreeToTermsAndConditions').click()
            cy.wait(1000)
            //E clico no botão "Registrar-se"
            cy.get(':nth-child(11) > .blackBtn').click()
            cy.wait(1000)
            //Então acesso a página de "Registro Concluído" (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
      })

      it("TC001.002 - Duplicidade de Conta", () => {      
            //Dado que eu esteja na página "Minha Kawasaki" (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)            
            //Quando preencho no quadro "Registrar-se", o campo "Endereço de E-mail"
            cy.get("#RegistrationEmail").type("workt12@gmail.com")
            cy.wait(1000)
            //E preencho o campo "Senha"
            cy.get("#RegistrationPassword").type("Testestrabalho345")
            cy.wait(1000)
            //E preencho o campo "Confirme a nova senha"
            cy.get("#ConfirmRegistrationPassword").type("Testestrabalho345")
            cy.wait(1000)
            //E seleciono a opção "*Verifico que tenho 18 anos ou mais e concordo com a política de privacidade e os termos e condições de uso da Kawasaki."
            cy.get('#AgreeToTermsAndConditions').click()
            cy.wait(1000)
            //E clico no botão "Registrar-se"
            cy.get(':nth-child(11) > .blackBtn').click()
            cy.wait(1000)
            //Então não acesso a página de "Registro Concluído" e aparece uma mensagem de erro (Assertion)
            cy.get('.field-validation-error').should('have.text', "Endereço de email já está registrado")
      })
  
      it("TC001.003 - Cadastro sem credenciais", () => {      
            //Dado que eu esteja na página "Minha Kawasaki" (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)            
            //Quando não preencho nada no quadro "Registrar-se"
            //E não seleciono nenhum dos quadrados após o campo "Confirme a nova senha"
            //E clico no botão "Registrar-se"
            cy.get(':nth-child(11) > .blackBtn').click()
            cy.wait(1000)
            //Então não acesso a página de "Registro Concluído" e aparece uma mensagem de erro (Assertion)
            cy.get('#validationSummaryReg > .errorMessage > span').should('have.text', "Desculpe, não é possível submeter. Existem campos inválidos no formulário abaixo.")
      })

      
      it("TC001.004 - Cadastro sem e-mail", () => {      
            //Dado que eu esteja na página "Minha Kawasaki" (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)            
            //Quando não preencho no quadro "Registrar-se", o campo "Endereço de E-mail"
            //E preencho o campo "Senha" 
            cy.get("#RegistrationPassword").type("Testestrabalho345")
            cy.wait(1000)
            //E preencho o campo "Confirme a nova senha"
            cy.get("#ConfirmRegistrationPassword").type("Testestrabalho345")
            cy.wait(1000)
            //E seleciono a opção "*Verifico que tenho 18 anos ou mais e concordo com a política de privacidade e os termos e condições de uso da Kawasaki."
            cy.get('#AgreeToTermsAndConditions').click()
            cy.wait(1000)
            //E clico no botão "Registrar-se"
            cy.get(':nth-child(11) > .blackBtn').click()
            cy.wait(1000)
            //Então não acesso a página de "Registro Concluído" e aparece uma mensagem de erro (Assertion)
            cy.get('#validationSummaryReg > .errorMessage > ul > li').should('have.text', "Um endereço de e-mail válido é necessário.")
      })

      
      it("TC001.005 - Cadastro e-mail sem @", () => {      
            //Dado que eu esteja na página "Minha Kawasaki" (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)            
            //Quando preencho no quadro "Registrar-se", o campo "Endereço de E-mail"
            cy.get("#RegistrationEmail").type("worktest345gmail.com")
            cy.wait(1000)
            //E preencho o campo "Senha"
            cy.get("#RegistrationPassword").type("Testestrabalho345")
            cy.wait(1000)
            //E preencho o campo "Confirme a nova senha"
            cy.get("#ConfirmRegistrationPassword").type("Testestrabalho345")
            cy.wait(1000)
            //E seleciono a opção "*Verifico que tenho 18 anos ou mais e concordo com a política de privacidade e os termos e condições de uso da Kawasaki."
            cy.get('#AgreeToTermsAndConditions').click()
            cy.wait(1000)
            //E clico no botão "Registrar-se"
            cy.get(':nth-child(11) > .blackBtn').click()
            cy.wait(1000)
            //Então não acesso a página de "Registro Concluído" e aparece uma mensagem de erro (Assertion)
            cy.get('.validation-summary-errors > ul > li').should('have.text', "Endereço de email inválido, tente novamente.")
      })

      
      it("TC001.006 - Cadastro sem senha", () => {      
            //Dado que eu esteja na página "Minha Kawasaki" (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)            
            //Quando preencho no quadro "Registrar-se", o campo "Endereço de E-mail"
            cy.get("#RegistrationEmail").type("worktest345@gmail.com")
            cy.wait(1000)
            //E não preencho o campo "Senha" 
            //E não preencho o campo "Confirme a nova senha" 
            //E seleciono a opção "*Verifico que tenho 18 anos ou mais e concordo com a política de privacidade e os termos e condições de uso da Kawasaki."
            cy.get('#AgreeToTermsAndConditions').click()
            cy.wait(1000)
            //E clico no botão "Registrar-se"
            cy.get(':nth-child(11) > .blackBtn').click()
            cy.wait(1000)
            //Então não acesso a página de "Registro Concluído" e aparece uma mensagem de erro (Assertion)
            cy.get('#RegistrationPassword-error').should('have.text', 'O campo "Senha" é obrigatório.\n')
      })

      
      it("TC001.007 - Cadastro sem Confirmação de senha", () => {      
            //Dado que eu esteja na página "Minha Kawasaki" (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)            
            //Quando preencho no quadro "Registrar-se", o campo "Endereço de E-mail"
            cy.get("#RegistrationEmail").type("worktest345@gmail.com")
            cy.wait(1000)
            //E preencho o campo "Senha"
            cy.get("#RegistrationPassword").type("Testestrabalho345")
            cy.wait(1000) 
            //E não preencho o campo "Confirme a nova senha"
            //E seleciono a opção "*Verifico que tenho 18 anos ou mais e concordo com a política de privacidade e os termos e condições de uso da Kawasaki."
            cy.get('#AgreeToTermsAndConditions').click()
            cy.wait(1000)
            //E clico no botão "Registrar-se"
            cy.get(':nth-child(11) > .blackBtn').click()
            cy.wait(1000)
            //Então não acesso a página de "Registro Concluído" e aparece uma mensagem de erro (Assertion)
            cy.get('#ConfirmRegistrationPassword-error').should('have.text', 'A senha e a senha de confirmação não coincidem. Por favor, tente novamente.')
      })

      
      it("TC001.008 - Cadastro senha com 7 caracteres", () => {      
            //Dado que eu esteja na página "Minha Kawasaki" (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)            
            //Quando preencho no quadro "Registrar-se", o campo "Endereço de E-mail"
            cy.get("#RegistrationEmail").type("worktest5@gmail.com")
            cy.wait(1000)
            //E preencho o campo "Senha"
            cy.get("#RegistrationPassword").type("Testest")
            cy.wait(1000) 
            //E preencho o campo "Confirme a nova senha"
            cy.get("#ConfirmRegistrationPassword").type("Testest")
            cy.wait(1000) 
            //E seleciono a opção "Verifico que tenho 18 anos ou mais e concordo com a política de privacidade e os termos e condições de uso da Kawasaki."
            cy.get('#AgreeToTermsAndConditions').click()
            cy.wait(1000)
            //E clico no botão "Registrar-se"
            cy.get(':nth-child(11) > .blackBtn').click()
            cy.wait(1000)
            //Então não acesso a página de "Registro Concluído" e aparece uma mensagem de erro (Assertion)
            cy.get('#RegistrationPassword-error').should('have.text', 'A senha deve ter pelo menos 8 caracteres')
      })


      it("TC001.009 - Cadastro senha somente com números", () => {      
            //Dado que eu esteja na página "Minha Kawasaki" (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)            
            //Quando preencho no quadro "Registrar-se", o campo "Endereço de E-mail"
            cy.get("#RegistrationEmail").type("work13@gmail.com")
            cy.wait(1000)
            //E preencho o campo "Senha"
            cy.get("#RegistrationPassword").type("12345678")
            cy.wait(1000)  
            //E preencho o campo "Confirme a nova senha"
            cy.get("#ConfirmRegistrationPassword").type("12345678")
            cy.wait(1000)
            //E clico no botão "Mostrar senha"
            cy.get("#showRegPass").click()
            cy.wait(1000)
            //E seleciono a opção "*Verifico que tenho 18 anos ou mais e concordo com a política de privacidade e os termos e condições de uso da Kawasaki."
            cy.get('#AgreeToTermsAndConditions').click()
            cy.wait(1000)
            //E clico no botão "Registrar-se"
            cy.get(':nth-child(11) > .blackBtn').click()
            cy.wait(1000)
            //Então não acesso a página de "Registro Concluído" (Assertion)
            cy.get('#RegistrationPassword-error').should('have.text', 'A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial.')
      })


      it("TC001.010 - Cadastro senha somente com Emoji", () => {      
            //Dado que eu esteja na página "Minha Kawasaki" (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)            
            //Quando preencho no quadro "Registrar-se", o campo "Endereço de E-mail"
            cy.get("#RegistrationEmail").type("work14@gmail.com")
            cy.wait(1000)
            //E preencho o campo "Senha"
            cy.get("#RegistrationPassword").type("🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻")
            cy.wait(1000)
            //E preencho o campo "Confirme a nova senha"
            cy.get("#ConfirmRegistrationPassword").type("🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻")
            cy.wait(1000)
            //E clico no botão "Mostrar senha"
            cy.get("#showRegPass").click()
            cy.wait(1000)
            //E seleciono a opção "*Verifico que tenho 18 anos ou mais e concordo com a política de privacidade e os termos e condições de uso da Kawasaki."
            cy.get('#AgreeToTermsAndConditions').click()
            cy.wait(1000)
            //E clico no botão "Registrar-se"
            cy.get(':nth-child(11) > .blackBtn').click()
            cy.wait(1000)
            //Então não acesso a página de "Registro Concluído" (Assertion)
            cy.get('#RegistrationPassword-error').should('have.text', 'A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial.')
      })


      it("TC001.011 - Cadastro senha somente com Caracteres Especiais", () => {      
            //Dado que eu esteja na página "Minha Kawasaki" (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)            
            //Quando preencho no quadro "Registrar-se", o campo "Endereço de E-mail"
            cy.get("#RegistrationEmail").type("work15@gmail.com")
            cy.wait(1000)
            //E preencho o campo "Senha"
            cy.get("#RegistrationPassword").type("!!!!!!!!!!")
            cy.wait(1000)
            //E preencho o campo "Confirme a nova senha"
            cy.get("#ConfirmRegistrationPassword").type("!!!!!!!!!!")
            cy.wait(1000)
            //E clico no botão "Mostrar senha"
            cy.get("#showRegPass").click()
            cy.wait(1000)
            //E seleciono a opção "*Verifico que tenho 18 anos ou mais e concordo com a política de privacidade e os termos e condições de uso da Kawasaki."
            cy.get('#AgreeToTermsAndConditions').click()
            cy.wait(1000)
            //E clico no botão "Registrar-se"
            cy.get(':nth-child(11) > .blackBtn').click()
            cy.wait(1000)
            //Então não acesso a página de "Registro Concluído" (Assertion)
            cy.get('#RegistrationPassword-error').should('have.text', 'A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial.')
       })

       it("TC001.012 - Cadastro senha com espaço", () => {      
            //Dado que eu esteja na página "Minha Kawasaki" (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)            
            //Quando preencho no quadro "Registrar-se", o campo "Endereço de E-mail"
            cy.get("#RegistrationEmail").type("work16@gmail.com")
            cy.wait(1000)
            //E preencho o campo "Senha"
            cy.get("#RegistrationPassword").type("Test trabalho345")
            cy.wait(1000)
            //E preencho o campo "Confirme a nova senha"
            cy.get("#ConfirmRegistrationPassword").type("Test trabalho345")
            cy.wait(1000)
            //E clico no botão "Mostrar senha"
            cy.get("#showRegPass").click()
            cy.wait(1000)
            //E seleciono a opção "*Verifico que tenho 18 anos ou mais e concordo com a política de privacidade e os termos e condições de uso da Kawasaki."
            cy.get('#AgreeToTermsAndConditions').click()
            cy.wait(1000)
            //E clico no botão "Registrar-se"
            cy.get(':nth-child(11) > .blackBtn').click()
            cy.wait(1000)
            //Então não acesso a página de "Registro Concluído" (Assertion)
            cy.get('#RegistrationPassword-error').should('have.text', 'A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial.')
       })
})