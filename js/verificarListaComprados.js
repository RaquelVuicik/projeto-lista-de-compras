const tituloComprado = document.querySelector('#lista-comprados-titulo');
const pontilhados = document.querySelector('#lista-comprados-hr');
const listaComprados = document.querySelector('#lista-comprados');

export function verificarListaComprados () {
    if (listaComprados.childElementCount === 0) {
        tituloComprado.style.display = 'none';
        pontilhados.style.display = 'none';
    } else {
        tituloComprado.style.display = 'block';
        pontilhados.style.display = 'block';
    }
}