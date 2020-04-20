var listElement = document.querySelector('#conteiner #app ul'); 
var inputElement = document.querySelector('#conteiner #addtodo input');
var listCounterElement = document.querySelector('#conteiner #totaltodos'); 

var todos = JSON.parse(localStorage.getItem('list_todos')) || [''];

// renderiza a lista de To-Dos na página
function myList() {
    listElement.innerHTML = '';
    var i = 0;
    var max = todos.length;
    for (i; i < max; i++) {
        // cria o To-Do
        var todoElement = document.createElement('li');
        var textElement = document.createTextNode(todos[i]);
        // cria o botão de excluir
        var linkElement = document.createElement('button');
        linkElement.setAttribute('onclick', 'deleteTodo('+ i +')');
        var linkText = document.createTextNode("Excluir");
        // publica o To-Do e o botao de excluir
        linkElement.appendChild(linkText);
        todoElement.appendChild(textElement);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    };
};

// adiciona novo To-Do pela página
function newTodo() {
    window.todos.push(inputElement.value);
    myList();
    countList();
    inputElement.value = null;
};

// deleta To-Dos pela página
function deleteTodo(pos) {
    todos.splice(pos, 1);
    myList();
    countList();
}

// conta To-Dos
function countList() {
    listCounterElement.innerHTML = '';
    var totalElement = '';
    switch (todos.length) {
        case 0:
            totalElement = document.createTextNode('Você não tem nenhuma tarefa. Adicione uma nova tarefa');
            break;
        case 1:
            totalElement = document.createTextNode('Você tem '+ todos.length + ' tarefa.');
            break;
        default:
            totalElement = document.createTextNode('Você tem '+ todos.length + ' tarefas.');
    };
    listCounterElement.appendChild(totalElement);
    saveToStorage();
}

// salva To-Dos no localstorage 
function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

myList();
countList();