let addToDoButton = document.getElementById('addTodo');
let todoContainer = document.getElementById('todoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    let paragraph = document.createElement('p')
    paragraph.innerText = inputField.value;
    todoContainer.appendChild(paragraph)
})