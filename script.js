// Mostrar mais informações sobre agro sustentável
const saibaMaisBtn = document.getElementById('saibaMaisBtn');
const maisInfo = document.getElementById('maisInfo');

saibaMaisBtn.addEventListener('click', () => {
    if (maisInfo.style.display === 'none') {
        maisInfo.style.display = 'block';
        saibaMaisBtn.textContent = 'Mostrar Menos';
    } else {
        maisInfo.style.display = 'none';
        saibaMaisBtn.textContent = 'Saiba Mais';
    }
});

// Simulação de envio de formulário
const form = document.getElementById('contatoForm');
const mensagemSucesso = document.getElementById('mensagemSucesso');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita recarregar a página
    mensagemSucesso.style.display = 'block';
    form.reset();
});
