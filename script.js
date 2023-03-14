const inputUsuario = document.getElementById('newTask');
const ul = document.getElementById('ul');

function adicionarTarefa() {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(inputUsuario.value));
    ul.appendChild(li);
    
    inputUsuario.value = '';
    
    //criando botão para excluir tarefa
    const botaoExcluirTarefa = document.createElement('button');
    botaoExcluirTarefa.appendChild(document.createTextNode('X'));
    li.appendChild(botaoExcluirTarefa);
    botaoExcluirTarefa.addEventListener('click', deletarTarefa);
    
    function deletarTarefa() {
        li.remove();
    }
}

inputUsuario.addEventListener('keypress', function (event){
    if(event.key == 'Enter'){
        adicionarTarefa()
    }
});