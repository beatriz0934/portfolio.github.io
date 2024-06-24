const vezJogador = document.querySelector(".vezJogador");
let selecionado;
let jogador = "X";

let posicoes = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];

function iniciar() {
    selecionado = [];

    vezJogador.innerHTML = `JOGADOR DA VEZ: ${jogador}`;

    document.querySelectorAll(".jogo button").forEach((item) => {
        item.innerHTML = "";
        item.addEventListener("click", novaJogada);
    });
}

iniciar();

function novaJogada(e) {
    const index = e.target.getAttribute("data-i");
    e.target.innerHTML = jogador;
    e.target.removeEventListener("click", novaJogada);
    selecionado[index] = jogador;

    setTimeout(() => {
        verificar();
    }, [100]);

    jogador = jogador === "X" ? "O" : "X";
    vezJogador.innerHTML = `JOGADOR DA VEZ: ${jogador}`;
}

function verificar() {
    let jogadorUltimaJogada = jogador === "X" ? "O" : "X";

    const itens = selecionado
        .map((item, i) => [item, i])
        .filter((item) => item[0] === jogadorUltimaJogada)
        .map((item) => item[1]);

    for (pos of posicoes) {
        if (pos.every((item) => itens.includes(item))) {
            alert("O JOGADOR '" + jogadorUltimaJogada + "' GANHOU!");
            iniciar();
            return;
        }
    }

    if (selecionado.filter((item) => item).length === 9) {
        alert("DEU EMPATE!");
        iniciar();
        return;
    }
}
