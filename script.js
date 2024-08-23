const item = document.querySelector('#input-item');
const botaoSalvarItem = document.querySelector('#adicionar-botao');
const listaDeCompras = document.querySelector('#lista-de-compras');
const listaComprados = document.querySelector('#lista-comprados');

let contador = 0;

botaoSalvarItem.addEventListener('click', adicionarItem);

function adicionarItem(evento) {
    evento.preventDefault()
    // console.log('entrei na função');

    const itemDaLista = document.createElement('li');
    const containerItemLista = document.createElement('div');
    containerItemLista.classList.add('item-lista-container');

    const containerNomeDoItem = document.createElement('div');

    const containerCheckbox = document.createElement('div');
    containerCheckbox.classList.add('checkbox-container');

    const checkboxInput = document.createElement('input');
    checkboxInput.type = 'checkbox';
    checkboxInput.classList.add('checkbox-input');
    checkboxInput.id = 'checkbox-' + contador++;

    const checkboxLabel = document.createElement('label');
    checkboxLabel.setAttribute('for', checkboxInput.id);

    checkboxLabel.addEventListener('click', function (evento) {
        const checkboxInput = evento.currentTarget.querySelector('.checkbox-input');
        const checkboxCustomizado = evento.currentTarget.querySelector('.checkbox-customizado');
        const itemTitulo = evento.currentTarget.closest('li').querySelector('#item-titulo');

        if (checkboxInput.checked) {
            checkboxCustomizado.classList.add('checked');
            itemTitulo.style.textDecoration = 'line-through';
            listaComprados.appendChild(itemDaLista);
        } else {
            checkboxCustomizado.classList.remove('checked');
            itemTitulo.style.textDecoration = 'none';
            listaDeCompras.appendChild(itemDaLista);
        }
    })

    const checkboxCustomizado = document.createElement('div');
    checkboxCustomizado.classList.add('checkbox-customizado');

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCustomizado);

    containerCheckbox.appendChild(checkboxLabel);
    containerNomeDoItem.appendChild(containerCheckbox);

    const nomeDoItem = document.createElement('p');
    nomeDoItem.id = 'item-titulo';
    nomeDoItem.innerText = item.value;
    containerNomeDoItem.appendChild(nomeDoItem);

    const containerBotoes = document.createElement('div');
    const botaoRemover = document.createElement('button');
    botaoRemover.classList.add('botao-acao');

    const imagemRemover = document.createElement('img');
    imagemRemover.src = 'img/delete.svg';
    imagemRemover.alt = 'Remover';

    botaoRemover.appendChild(imagemRemover);
    containerBotoes.appendChild(botaoRemover);

    const botaoEditar = document.createElement('button');
    botaoEditar.classList.add('botao-acao');

    const imagemEditar = document.createElement('img');
    imagemEditar.src = 'img/edit.svg';
    imagemEditar.alt = 'Editar';

    botaoEditar.appendChild(imagemEditar);
    containerBotoes.appendChild(botaoEditar);

    containerItemLista.appendChild(containerNomeDoItem);
    containerItemLista.appendChild(containerBotoes);
    itemDaLista.appendChild(containerItemLista);
    listaDeCompras.appendChild(itemDaLista);
}