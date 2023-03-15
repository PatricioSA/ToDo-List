const ul = document.getElementById('ul');

const modal = document.querySelector('dialog')
const buttonCreateNewTask = document.getElementById('btnNewTask')
const buttonCloseModal = document.getElementById('closeModal')
const buttonAddNewTask = document.getElementById('addTask')

buttonCreateNewTask.onclick = () => modal.showModal()

buttonCloseModal.onclick = () => modal.close()

buttonAddNewTask.onclick = adicionarTarefa

function adicionarTarefa() {
    const taskName = document.getElementById('taskName')

    const div = document.createElement('div')
    const h2 = document.createElement('h2')
    const p = document.createElement('p');
    const botaoExcluirTarefa = document.createElement('button');
    
    botaoExcluirTarefa.innerText = 'X';
    p.innerText = taskName.value
    div.append(h2, p, botaoExcluirTarefa)
    ul.appendChild(div)

    taskName.value = '';

    //criando botão para excluir tarefa
    botaoExcluirTarefa.addEventListener('click', deletarTarefa);

    function deletarTarefa() {
        div.remove();
    }

    modal.close()
}

// inputUsuario.addEventListener('keypress', function (event){
//     if(event.key == 'Enter'){
//         adicionarTarefa()
//     }
// });