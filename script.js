// const inputUsuario = document.getElementById('newTask');
const ul = document.getElementById('ul');

const modal = document.querySelector('dialog')
const buttonCreateNewTask = document.getElementById('btnNewTask')
const buttonCloseModal = document.getElementById('closeModal')
const buttonAddNewTask = document.getElementById('addTask')

buttonCreateNewTask.onclick = () => modal.showModal()

buttonCloseModal.onclick = () => modal.close()

buttonAddNewTask.onclick = adicionarTarefa

function adicionarTarefa() {
    if(true) {
        const taskTitle = document.getElementById('taskTitle')
        const taskName = document.getElementById('taskName')
    
        const div = document.createElement('div')
        const h2 = document.createElement('h2')
        const li = document.createElement('li');
    
        h2.innerText = taskTitle.value
        li.innerText = taskName.value
        div.append(h2, li)
        ul.appendChild(div)

        taskName.value = '';
    }else {
        
    }
    
    
    //criando botão para excluir tarefa
    const botaoExcluirTarefa = document.createElement('button');
    botaoExcluirTarefa.appendChild(document.createTextNode('X'));
    li.appendChild(botaoExcluirTarefa);
    botaoExcluirTarefa.addEventListener('click', deletarTarefa);
    
    function deletarTarefa() {
        li.remove();
    }
}

// inputUsuario.addEventListener('keypress', function (event){
//     if(event.key == 'Enter'){
//         adicionarTarefa()
//     }
// });