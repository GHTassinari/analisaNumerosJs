const listaValores = document.getElementById("listaValores");
const resultado = document.getElementById("resultado");
let valores = [];

function ehValido(numero) {
    return numero >= 1 && numero <= 100;
}

function jaAdicionado(numero) {
    return valores.includes(numero);
}

function adicionarValor() {
    const input = document.getElementById("valor");
    const numero = parseInt(input.value);

    if (ehValido(numero) && !jaAdicionado(numero)) {
        valores.push(numero);
        const item = document.createElement("option");
        item.textContent = `Valor ${numero} adicionado.`;
        listaValores.appendChild(item);
    } else {
        alert("Número inválido ou já adicionado à lista.");
    }

    input.value = "";
    input.focus();
}

function finalizarAnalise() {
    if (valores.length === 0) {
        alert("Adicione valores antes de finalizar.");
        return;
    }

    const total = valores.length;
    const maior = Math.max(...valores);
    const menor = Math.min(...valores);
    const soma = valores.reduce((a, b) => a + b, 0);
    const media = soma / total;

    resultado.innerHTML = `
        <p>Total de números: ${total}</p>
        <p>Maior valor: ${maior}</p>
        <p>Menor valor: ${menor}</p>
        <p>Soma dos valores: ${soma}</p>
        <p>Média dos valores: ${media.toFixed(2)}</p>
    `;
}
