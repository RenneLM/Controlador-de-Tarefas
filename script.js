/* 01: Script que atende tanto a página de login (index.html) quanto a página de tarefas (tarefas.html) */

/* 02: Seleciona o formulário de login (padrão: existe em index.html) */
const loginForm = document.getElementById("loginForm");
/* 03: Seleciona container de login (em index.html) */
const loginContainer = document.querySelector(".login-card");
/* 04: Seleciona elementos da página de tarefas, se existirem */
const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

/* 05: Credenciais fixas para o login (apenas para ambiente de teste/academia) */
const FIXED_USER = "admin";
const FIXED_PASS = "1234";

/* 06: Se a página atual tiver o formulário de login, adicionamos o evento de login */
if (loginForm) {
  /* 07: Ouvinte do evento submit do formulário de login */
  loginForm.addEventListener("submit", function(e) {
    /* 08: Evita que o formulário recarregue a página */
    e.preventDefault();

    /* 09: Captura os valores digitados pelo usuário */
    const user = document.getElementById("user").value.trim();
    const pass = document.getElementById("pass").value;

    /* 10: Verificação simples das credenciais fixas */
    if (user === FIXED_USER && pass === FIXED_PASS) {
      /* 11: Se estiver correto, redireciona para a página de tarefas */
      window.location.href = "tarefas.html";
    } else {
      /* 12: Se incorreto, informa o usuário */
      alert("Usuário ou senha incorretos. Use admin / 1234");
    }
  });
}

/* 13: Se a página atual tiver o formulário de tarefas, adicionamos a lógica de tarefas */
if (taskForm && taskList) {
  /* 14: Ouvinte de submit para criar nova tarefa */
  taskForm.addEventListener("submit", function(event) {
    /* 15: Evita reload da página */
    event.preventDefault();

    /* 16: Captura valores dos campos do formulário */
    const titulo = document.getElementById("titulo").value.trim();
    const responsavel = document.getElementById("responsavel").value.trim();
    const prazo = document.getElementById("prazo").value;
    const status = document.getElementById("status").value;

    /* 17: Validação extra simples (caso o required seja burlado) */
    if (!titulo || titulo.length < 3) {
      alert("Digite um título válido (mínimo 3 caracteres).");
      return;
    }
    if (!responsavel) {
      alert("Informe o responsável pela tarefa.");
      return;
    }
    if (!prazo) {
      alert("Informe o prazo da tarefa.");
      return;
    }
    if (!status) {
      alert("Selecione o status da tarefa.");
      return;
    }

    /* 18: Cria o elemento li que representa a tarefa na lista */
    const li = document.createElement("li");
    li.classList.add("task-item");

    /* 19: Monta o conteúdo interno da tarefa usando template literals */
    li.innerHTML = `
      <div class="task-info">
        <strong>${escapeHtml(titulo)}</strong>
        <span>Responsável: ${escapeHtml(responsavel)}</span>
        <span>Prazo: ${escapeHtml(prazo)}</span>
        <span>Status: ${escapeHtml(status)}</span>
      </div>
      <button class="remove-btn" aria-label="Remover tarefa">Remover</button>
    `;

    /* 20: Adiciona o evento de remoção ao botão recém-criado */
    const removeBtn = li.querySelector(".remove-btn");
    removeBtn.addEventListener("click", function() {
      li.remove();
    });

    /* 21: Anexa o item na lista de tarefas */
    taskList.appendChild(li);

    /* 22: Reseta o formulário para entrada de nova tarefa */
    taskForm.reset();
  });
}

/* 23: Função utilitária simples para escapar texto inserido pelo usuário e evitar injeção HTML */
function escapeHtml(text) {
  /* 24: Substituições simples para <, >, & e " — suficiente para nosso uso */
  return text.replace(/&/g, "&amp;")
             .replace(/</g, "&lt;")
             .replace(/>/g, "&gt;")
             .replace(/"/g, "&quot;");
}
