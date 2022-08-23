const botaomobile = document.getElementById('botao-mobile');

function toggleMenu(event) {
    const nav = document.getElementById('navegador');
    nav.classList.toggle('active');
}
botaomobile.addEventListener('click', toggleMenu);