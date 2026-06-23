function adicionarAvaliacao() {
    const nome = document.getElementById("appNome").value;
    const nota = document.getElementById("nota").value;
    const comentario = document.getElementById("comentario").value;

    if (nome === "" || nota === "" || comentario === "") {
        alert("Preencha todos os campos!");
        return;
    }

    const lista = document.getElementById("lista");

    const div = document.createElement("div");
    div.classList.add("avaliacao");

    div.innerHTML = `
        <strong>${nome}</strong>
        <p>Nota: ${nota}/5</p>
        <p>${comentario}</p>
    `;

    lista.appendChild(div);

    
    document.getElementById("appNome").value = "";
    document.getElementById("nota").value = "";
    document.getElementById("comentario").value = "";
}