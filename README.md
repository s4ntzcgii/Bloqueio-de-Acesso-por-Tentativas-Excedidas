🔐 Sistema de Login com Limite de Tentativas
📌 Descrição
Este projeto simula um sistema de autenticação de alta segurança desenvolvido para a empresa Cyber-SENAI.
O sistema limita o número de tentativas de login a 3 chances, bloqueando o acesso caso todas falhem.
A lógica principal utiliza a estrutura do...while, garantindo que o usuário tente acessar o sistema pelo menos uma vez.

🎯 Objetivo
Implementar um sistema de login que:
Valide usuário e senha
Controle tentativas de acesso
Bloqueie o sistema após erros consecutivos
Utilize corretamente o laço do...while

🧠 Lógica do Sistema
O sistema funciona com base em três condições principais:
O login ainda não foi bem-sucedido
O usuário ainda possui tentativas restantes
O usuário não cancelou a operação
Enquanto essas condições forem verdadeiras, o sistema continua rodando:

🔄 Controle de Tentativas
O usuário começa com 3 tentativas
A cada erro, o contador diminui
Quando chega a 0, o sistema é bloqueado
💬 Mensagens do Sistema
✅ Login correto:
"Acesso Liberado"
❌ Login incorreto:
"Login inválido. Tentativas restantes: X"
🚫 Tentativas esgotadas:
"SISTEMA BLOQUEADO - Procure o Suporte"
⚙️ Funcionamento (Resumo Técnico)
O sistema usa do...while
Executa pelo menos uma vez
Verifica credenciais no array
Controla tentativas com uma variável
Encerra quando:
Login é válido
Tentativas acabam
Usuário cancela
