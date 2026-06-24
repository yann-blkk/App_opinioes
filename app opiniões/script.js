function adicionarAvaliacao() {
    const nome = document.getElementById("appNome").value.trim();
    const nota = parseFloat(document.getElementById("nota").value);
    const comentario = document.getElementById("comentario").value.trim();

    if (nome === "" || isNaN(nota) || comentario === "") {
        alert("Preencha todos os campos corretamente!");
        return;
    }

    if (nota < 0 || nota > 5) {
        alert("A nota deve ser entre 0 e 5");
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

    // Atualiza médias (se for app conhecido)
    if (dados[nome]) {
        dados[nome].push(nota);
        atualizarMedias();
    }

    // limpar campos
    document.getElementById("appNome").value = "";
    document.getElementById("nota").value = "";
    document.getElementById("comentario").value = "";
}

function mostrarAba(aba) {
    document.getElementById("home").style.display = "none";
    document.getElementById("form").style.display = "none";

    document.getElementById(aba).style.display = "block";
}