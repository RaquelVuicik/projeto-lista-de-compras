import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";


const item = document.querySelector('#input-item');
const listaDeCompras = document.querySelector('#lista-de-compras');

export function adicionarItem(evento) {
    evento.preventDefault()
    // console.log('entrei na função');

    if (item.value === '') {
        alert('Por favor, insira um item!');
        return;
    }

    const itemDaLista = criarItemDaLista(item.value);
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras);
    item.value = '';
}