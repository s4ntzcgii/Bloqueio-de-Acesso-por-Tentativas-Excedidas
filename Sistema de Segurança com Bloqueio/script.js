// Lista de usuários
const usuarios = [
    {login: "admin", senha: "cyber123"},
    {login: "seguranca1", senha: "senai2024"},
    {login: "tecnico01", senha: "terminalA1"},
    {login: "supervisor", senha: "cyberSENAI"},
    {login: "operador2", senha: "acessoB2"},
    {login: "adminroot", senha: "rootcyber"},
    {login: "seguranca2", senha: "lock2024"},
    {login: "monitor01", senha: "visao360"},
    {login: "controle3", senha: "ctrlC3"},
    {login: "masterkey", senha: "masterSENAI"}
];

let tentativas = 3;
let acessoOk = false;

const form = document.getElementById('formLogin');
const btnEntrar = document.getElementById('entrar');
const saida = document.getElementById('saida');
const vidasEl = document.getElementById('vidas');
const situacaoEl = document.getElementById('situacao');

btnEntrar.onclick = tentarLogin;
document.getElementById('senha').onkeypress = function(e) {
    if (e.key === 'Enter') tentarLogin();
};

function tentarLogin() {
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;
    
    if (!login || !senha) {
        mostrarSaida('Login e senha obrigatórios');
        return;
    }

    // Procura usuário
    const usuario = usuarios.find(u => u.login === login && u.senha === senha);
    
    if (usuario) {
        sucesso(login);
    } else {
        erro(login);
    }
}

function erro() {
    tentativas--;
    mostrarSaida('Login ou senha incorretos');
    mostrarSaida(`Tentativas restantes: ${tentativas}/3`);
    
    atualizarStatus('erro');
    
    if (tentativas > 0) {
        btnEntrar.textContent = `Tentar (${tentativas})`;
    } else {
        bloqueado();
    }
}

function sucesso(login) {
    acessoOk = true;
    form.classList.add('oculto');
    mostrarSaida('Acesso liberado');
    mostrarSaida(`Bem-vindo, ${login}`);
    atualizarStatus('sucesso');
    btnEntrar.textContent = 'OK';
    btnEntrar.disabled = true;
}

function bloqueado() {
    form.classList.add('oculto');
    mostrarSaida('SISTEMA BLOQUEADO');
    mostrarSaida('Procure o suporte');
    atualizarStatus('bloqueado');
}

function mostrarSaida(texto) {
    const linha = document.createElement('div');
    linha.textContent = texto;
    saida.appendChild(linha);
    saida.scrollTop = saida.scrollHeight;
}

function atualizarStatus(tipo) {
    vidasEl.textContent = `Vidas: ${tentativas}/3`;
    situacaoEl.textContent = acessoOk ? 'Acesso OK' : 
                            tentativas === 0 ? 'Bloqueado' : 'Ativo';
    situacaoEl.className = tipo;
}