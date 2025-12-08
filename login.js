// Seleciona o botão
document.getElementById("btnLogin").addEventListener("click", function () {

    // Pega os valores digitados (mas não valida nada)
    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("senha").value;

    // Redireciona para o controlador de tarefas
    window.location.href = "index.html";
});
