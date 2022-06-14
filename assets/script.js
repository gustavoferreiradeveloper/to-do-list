var form = document.getElementById('AddTarefa');
var tarefas = document.getElementById('tarefas');

form.onsubmit = function(a){
    a.preventDefault();
    var inputField = document.getElementById('campoAddTarefa');
    addTarefa(inputField.value)
    form.reset();
};

function addTarefa(descricao) {
    var conteudoTarefa = document.createElement('div');
    var novaTarefa = document.createElement('input');
    var tarefaLabel = document.createElement('label');
    var descricaoTarefaNode = document.createTextNode(descricao);

    novaTarefa.setAttribute('type', 'checkbox');
    novaTarefa.setAttribute('name', descricao);
    novaTarefa.setAttribute('id', descricao);

    tarefaLabel.setAttribute('for', descricao);
    tarefaLabel.appendChild(descricaoTarefaNode);

    conteudoTarefa.classList.add('tarefa-item');
    conteudoTarefa.appendChild(novaTarefa);
    conteudoTarefa.appendChild(tarefaLabel);

    tarefas.appendChild(conteudoTarefa);
}