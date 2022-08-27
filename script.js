var inputUsuario = document.getElementById('newTask');
var ul = document.getElementById('ul');

function verificarEntradaUsuario() {
    if(inputUsuario.value) {
        adicionarTarefa()
    }
}

function adicionarTarefa() {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(inputUsuario.value));
    ul.appendChild(li);
    inputUsuario.value = '';
    
    //criando botão para excluir tarefa
    var botao = document.createElement('button');
    botao.appendChild(document.createTextNode('X'));
    li.appendChild(botao);
    botao.addEventListener('click', deletarTarefa);
    
    function deletarTarefa() {
        li.classList.add('delete');
    }
}

inputUsuario.addEventListener('keypress', function (event){
    if(event.key == 'Enter'){
        adicionarTarefa()
    }
});