const form = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const responsavel = document.getElementById("responsavel").value;
    const prazo = document.getElementById("prazo").value;
    const status = document.getElementById("status").value;

    const li = document.createElement("li");
    li.classList.add("task-item");

    li.innerHTML = `
        <div class="task-info">
            <strong>${titulo}</strong>
            <span>Responsável: ${responsavel}</span>
            <span>Prazo: ${prazo}</span>
            <span>Status: ${status}</span>
        </div>
        <button class="remove-btn">X</button>
    `;

    li.querySelector(".remove-btn").addEventListener("click", () => {
        li.remove();
    });

    taskList.appendChild(li);

    form.reset();
});
