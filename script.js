// ====================== SISTEMA DE LOGIN ======================

function fazerLogin() { // Função executada ao clicar no botão "Entrar"

    let user = document.getElementById("user").value; // Pega o usuário digitado
    let senha = document.getElementById("senha").value; // Pega a senha digitada

    if (user === "" || senha === "") { // Se algum campo estiver vazio
        alert("Preencha usuário e senha."); // Mostra alerta
        return; // Para a função
    }

    // LOGIN ACEITA QUALQUER USUÁRIO E QUALQUER SENHA
    document.getElementById("loginArea").style.display = "none"; // Esconde login
    document.getElementById("sistema").style.display = "block"; // Mostra o sistema
}

// ====================== SISTEMA DE TAREFAS ======================

function adicionarTarefa() { // Função chamada ao clicar no botão

    let titulo = document.getElementById("titulo").value; // Valor do título
    let responsavel = document.getElementById("responsavel").value; // Valor responsável
    let prazo = document.getElementById("prazo").value; // Data
    let status = document.getElementById("status").value; // Status

    if (!titulo || !responsavel || !prazo || !status) { // Validação
        alert("Preencha todos os campos antes de continuar!");
        return;
    }

    let lista = document.getElementById("listaTarefas"); // Div da lista

    let bloco = document.createElement("div"); // Cria novo bloco
    bloco.classList.add("tarefa"); // Adiciona estilo

    bloco.innerHTML = ` 
        <p><strong>Tarefa:</strong> ${titulo}</p>
        <p><strong>Responsável:</strong> ${responsavel}</p>
        <p><strong>Prazo:</strong> ${prazo}</p>
        <p><strong>Status:</strong> ${status}</p>
    `;

    lista.appendChild(bloco); // Adiciona ao HTML

    // Limpa os campos
    document.getElementById("titulo").value = "";
    document.getElementById("responsavel").value = "";
    document.getElementById("prazo").value = "";
    document.getElementById("status").value = "";
}
