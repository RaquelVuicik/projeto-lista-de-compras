const item = document.querySelector('#input-item');
const botaoSalvarItem = document.querySelector('#adicionar-botao');


botaoSalvarItem.addEventListener('click', adicionarItem);

function adicionarItem(evento) {
    evento.preventDefault()
    console.log('entrei na função');
}