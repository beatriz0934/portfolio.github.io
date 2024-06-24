const grid = document.querySelector('.grid');

const planetas = [
    'um',
    'dois',
    'tres',
    'quatro',
    'cinco',
    'seis',
    'sete',
    'oito',
    'nove',
];

const criarElemento = (tag, className) => {
    const elemento = document.createElement(tag);
    elemento.className = className;
    return elemento;
};

let primeiroCard = '';
let segundoCard = '';

const checkCards = () => {
    const primeiroPlaneta = primeiroCard.getAttribute('data-umPlaneta');
    const segundoPlaneta = segundoCard.getAttribute('data-umPlaneta');

    if (primeiroPlaneta === segundoPlaneta) {
        primeiroCard.firstChild.classList.add('desabilitado-Card');
        segundoCard.firstChild.classList.add('desabilitado-Card');
        primeiroCard = '';
        segundoCard = '';

        document.getElementById('match-sound').play();
    } else {
        setTimeout(() => {
            primeiroCard.classList.remove('reveal-card');
            segundoCard.classList.remove('reveal-card');
            primeiroCard = '';
            segundoCard = '';

            document.getElementById('mismatch-sound').play();
        }, 500);
    }
};

const revelarCard = ({ target }) => {
    if (target.parentNode.classList.contains('reveal-card')) {
        return;
    }

    if (primeiroCard === '') {
        target.parentNode.classList.add('reveal-card');
        primeiroCard = target.parentNode;
    } else if (segundoCard === '') {
        target.parentNode.classList.add('reveal-card');
        segundoCard = target.parentNode;
        checkCards();
    }
};

const criarCard = (umPlaneta) => {
    const card = criarElemento('div', 'card');
    const front = criarElemento('div', 'face front');
    const back = criarElemento('div', 'face back');

    front.style.backgroundImage = `url('${umPlaneta}.png')`;

    card.appendChild(front);
    card.appendChild(back);
    card.setAttribute('data-umPlaneta', umPlaneta);

    card.addEventListener('click', revelarCard);

    return card;
};

const carregarJogo = () => {
    const duplicarPlanetas = [...planetas, ...planetas];
    const embaralharArray = duplicarPlanetas.sort(() => Math.random() - 0.5);

    embaralharArray.forEach((umPlaneta) => {
        const carta = criarCard(umPlaneta);
        grid.appendChild(carta);
    });
};

carregarJogo();
