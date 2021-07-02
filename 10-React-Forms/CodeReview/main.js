let toDoItems = []

let span = document.querySelector('#createdBy')
span.innerHTML = span.innerHTML + ' AngelARVM'

function ToDo(description){
    this.description = description
    this.complete = false
}

ToDo.prototype.completeToDo = function () {
    this.complete = true
}


function buildToDo (todo, index) {
    //crear elemento div
    let toDoShell = document.createElement('div')
    //agregar clase (html)
    toDoShell.className = 'toDoShell'

    //crear elemento span
    let toDoText = document.createElement('span')

    //asignar todo.description a span
    toDoText.innerHTML = todo.description 

    //agregar id
    toDoText.id = index
    
    if (todo.complete){
        toDoText.className = 'completeText'
    }
    toDoShell.appendChild(toDoText)
    toDoText.addEventListener('click', completeToDo)
    return toDoShell
}


function buildToDos (toDos){
    //devuelve un array que contiene los elementos ToDo
    
    let nuevoToDos = toDos.map(function(elem, index){
        return buildToDo(elem, index)
    })
    
    return nuevoToDos
}


function displayTodos(){
    let toDoContainer = document.getElementById('toDoContainer')
    toDoContainer.innerHTML = ""
    
    let result = buildToDos(toDoItems)

    for (var i = 0; i < result.length; i++){
        toDoContainer.appendChild(result[i])
    }
}


function addToDo(){
    let inputValue = document.getElementById('toDoInput')
    let toDo = new ToDo(inputValue.value)
    toDoItems.push(toDo)
    inputValue.value = ""
    displayTodos()
}

let addBtn = document.getElementById('addButton')
addBtn.addEventListener('click', addToDo)


function completeToDo(event){
    const index = event.target.id
    
    let toDoClickeado = toDoItems[index]
    toDoClickeado.completeToDo()
    displayTodos()
}

displayTodos()