const html = document.documentElement;
const botaoTema = document.querySelector('#botao-tema');
const textoTema = document.querySelector('#texto-tema');

function aplicarTema(tema) {
    if (tema === 'escuro') {
        html.setAttribute('data-tema', 'escuro');
        textoTema.textContent = 'CLARO';
        botaoTema.setAttribute('aria-label', 'Mudar para o tema claro');
    } else {
        html.removeAttribute('data-tema');
        textoTema.textContent = ('ESCURO');
        botaoTema.setAttribute('aria-label', 'Mudar para o tema escuro');
    }
}

botaoTema.addEventListener('click', function () {
    const temaAtual = html.getAttribute('data-tema');
    const novoTema = temaAtual === 'escuro' ? 'claro' : 'escuro';

    aplicarTema(novoTema);
    localStorage.setItem('tema', novoTema);
});

const temaSalvo = localStorage.getItem('tema');
aplicarTema(temaSalvo);