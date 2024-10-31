## Projeto: Kawasaki

### Teste Automatizado: Verificação de funcionalidades de Cadastro, Login, Localização da Concessionária, Menu Motocicleta, Caixa de Pesquisa e Banner.

### Objetivo
Cadastro – O objetivo deste teste é verificar se o processo de cadastro de novos usuários no sistema funciona corretamente, de acordo com os requisitos definidos. Este caso de teste visa garantir que todos os campos obrigatórios sejam preenchidos adequadamente e que o sistema responda adequadamente em situações normais e excepcionais.

Login - O objetivo deste teste é verificar se o sistema de autenticação permite que usuários legítimos acessem suas contas de forma segura e eficaz, evitando ao mesmo tempo o acesso não autorizado. Os testes devem garantir que todos os requisitos funcionais e não funcionais do processo de login sejam atendidos, desde a validação de credenciais até a proteção contra tentativas de acesso maliciosas.

Localização da Concessionária - O objetivo deste teste é garantir que o sistema identifique, processe e utilize corretamente a localização de uma(s) entidade(s) específica(s). Isso inclui verificar a precisão dos dados de localização (como nome da entidade e CEP) e a integração correta com APIs. 

Menu Motos – O objetivo deste teste é garantir que o menu apresenta corretamente as promoções disponíveis, permitindo aos utilizadores interagir com o mesmo de forma eficiente e intuitiva.

Caixa de Pesquisa - O objetivo deste teste é garantir que o sistema permite aos usuários encontrar informações de forma rápida, precisa e relevante, de acordo com os critérios de pesquisa definidos. Este teste deve verificar a eficiência do algoritmo de busca, a adequação dos resultados retornados, a usabilidade da interface de busca e o atendimento aos requisitos funcionais e não funcionais.

Banner - O objetivo deste teste é garantir que os banners deslizantes sejam exibidos corretamente na interface do usuário, proporcionando uma experiência visual agradável e interativa. Este teste deve verificar se o carrossel funciona conforme planejado, apresentando os banners em sequência, permitindo navegação manual e automática e atendendo aos requisitos de design, desempenho e acessibilidade.

### Escopo
- Página: https://www.kawasakibrasil.com/pt-br/
- Navegadores: Chrome Versão 125.0.6422.176 (x64 bits)
- Dispositivos: Desktop
- Sistema Operacional: Windows 10
- Ferramenta de Teste: Cypress v13.14.2
- Linguagem: JavaScript

### Pré-condições
1. O ambiente de teste deve estar configurado e acessível.
2. Cypress deve estar instalado e configurado no projeto.

### Para a execução do teste:
Execute o Cypress: npx cypress open

Execute o Cypress para um arquivo individual: npx cypress run --spec "cypress/e2e/nome-do-arquivo.cy.js"

### Notas
- Em caso de falha, adicione comentários detalhados sobre o erro encontrado.
- Anexe capturas de tela, se necessário.

### Status
- **Data do Teste:** 27/08/2024
- **Testador:** Thiemy Castro
