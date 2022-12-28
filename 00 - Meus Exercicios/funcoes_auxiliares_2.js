const entradas = [15, 3, 4, 5, 10, 8];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    //valor = entradas;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };
