function adicionarAvaliacao() {

    const nome =
        document.getElementById("appNome").value;

    const nota =
        Number(document.getElementById("nota").value);

    const comentario =
        document.getElementById("comentario").value;

    if (
        nome === "" ||
        nota === 0 ||
        comentario === ""
    ) {
        alert("Preencha todos os campos!");
        return;
    }

    if (nota < 0 || nota > 5) {
        alert("A nota deve estar entre 0 e 5");
        return;
    }

    avaliacoes[nome].push({
        nota: nota,
        comentario: comentario
    });

mostrarNotificacao(
    "Avaliação enviada com sucesso! 🎉"
);

    document.getElementById("appNome").value = "";
    document.getElementById("nota").value = "";
    document.getElementById("comentario").value = "";
}

function mostrarAba(aba) {
    document.getElementById("home").style.display = "none";
    document.getElementById("form").style.display = "none";
    document.getElementById("detalhesApp").style.display = "none"

    document.getElementById(aba).style.display = "block";
}

const avaliacoes = {
    WhatsApp: [
        {
            nota: 5,
            comentario: "Muito bom para conversar."
        },
        {
            nota: 4,
            comentario: "Funciona bem, mas poderia melhorar."
        }
    ],

    Instagram: [
        {
            nota: 4,
            comentario: "Ótimo para compartilhar fotos."
        },
        {
            nota: 3,
            comentario: "Tem muitos anúncios."
        }
    ],

    Uber: [
        {
            nota: 5,
            comentario: "Motoristas rápidos."
        },
        {
            nota: 2,
            comentario: "Preço aumentou bastante."
        }
    ],

    99: [
        {
            nota: 4,
            comentario: "Ótimo para compartilhar fotos."
        },
        {
            nota: 3,
            comentario: "Tem muitos anúncios."
        }
    ],

    IFood: [
        {
            nota: 5,
            comentario: "Prático e atendimento rápido."
        },
        {
            nota: 3,
            comentario: "Suporte péssimo."
        }
    ],

    X: [
        {
            nota: 5,
            comentario: "Ótimo para fazer amizades."
        },
        {
            nota: 2,
            comentario: "Ambiente online muito tóxico."
        }
    ],

    Facebook: [
        {
            nota: 4,
            comentario: "Muito bom até hoje."
        },
        {
            nota: 3,
            comentario: "Hoje em dia envelheceu mal."
        }
    ],

    TikTok: [
        {
            nota: 4,
            comentario: "Muito bom e divertido."
        },
        {
            nota: 1,
            comentario: "Mal otimizado e muitos bugs."
        }
    ]

};

function abrirApp(nomeApp) {

    document.getElementById("tituloApp").innerText =
        "Avaliações - " + nomeApp;

    const container =
        document.getElementById("avaliacoesApp");

    container.innerHTML = "";

    avaliacoes[nomeApp].forEach(avaliacao => {

        const div =
            document.createElement("div");

        div.classList.add("avaliacao");

        div.innerHTML = `
            <div class="avaliacao">
                <strong>${"★".repeat(avaliacao.nota)}</strong>
                <p>${avaliacao.comentario}</p>
            </div>
        `;

        container.appendChild(div);
    });

    mostrarAba("detalhesApp");
}

function selecionarNota(nota) {

    document.getElementById("nota").value = nota;

    const estrelas =
        document.querySelectorAll(".star");

    estrelas.forEach((estrela, indice) => {

        if (indice < nota) {
            estrela.classList.add("ativa");
        } else {
            estrela.classList.remove("ativa");
        }

    });
}

function mostrarNotificacao(mensagem) {

    const notificacao =
        document.getElementById("notificacao");

    notificacao.textContent = mensagem;

    notificacao.classList.add("mostrar");

    setTimeout(() => {
        notificacao.classList.remove("mostrar");
    }, 3000);

}