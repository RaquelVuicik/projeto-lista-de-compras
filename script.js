import { adicionarItem } from "./js/adicionarItem.js";
import { verificarListaComprados } from "./js/verificarListaComprados.js";

const botaoSalvarItem = document.querySelector('#adicionar-botao');
botaoSalvarItem.addEventListener('click', adicionarItem);

const listaComprados = document.querySelector('#lista-comprados');
verificarListaComprados(listaComprados);