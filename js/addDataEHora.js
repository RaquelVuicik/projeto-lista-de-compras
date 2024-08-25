function addDataEHora() {
    const itemData = document.createElement('p');
    itemData.innerText = obterDataHoraAtualizado();
    itemData.classList.add('item-lista-texto');
    return itemData;
}

function obterDataHoraAtualizado() {
    return `${new Date().toLocaleDateString('pt-BR', {weekday: 'long'})} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString('pt-BR', {hour: 'numeric', minute: 'numeric'})}`;
}

export {addDataEHora, obterDataHoraAtualizado};