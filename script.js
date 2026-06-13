// MENSAGEM

function mostrarMensagem() {

    alert(
        "Adotar práticas sustentáveis hoje garante recursos naturais e qualidade de vida para as futuras gerações."
    );

}

// CONTADOR

let numero = document.getElementById("numero");

let valor = 0;

let contador = setInterval(() => {

    valor += 10;

    numero.textContent = valor;

    if(valor >= 1000){
        clearInterval(contador);
    }

}, 20);


// MODO ESCURO

const botao = document.getElementById("darkModeBtn");

botao.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        botao.textContent = "☀️ Modo Claro";
    } else {
        botao.textContent = "🌙 Modo Escuro";
    }

});
