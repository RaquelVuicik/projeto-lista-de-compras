const item = document.querySelector('#input-item');
const botaoSalvarItem = document.querySelector('#adicionar-botao');


botaoSalvarItem.addEventListener('click', adicionarItem);

function adicionarItem(evento) {
    evento.preventDefault()
    // console.log('entrei na função');

    const itemDaLista = document.createElement('li');
    const containerItemLista = document.createElement('div');
    containerItemLista.classList.add('item-lista-container');

    const containerNomeDoItem = document.createElement('div');
    const nomeDoItem = document.createElement('p');
    nomeDoItem.innerText = item.value;
    containerNomeDoItem.appendChild(nomeDoItem);

    itemDaLista.appendChild(containerItemLista);
}