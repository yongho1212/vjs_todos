/** 추가하는 버튼*/
let addToDoButton = document.getElementById('addTodo');
/** todo가 추가되는 부분*/
let todoContainer = document.getElementById('todoContainer');
/** 입력칸 */
let inputField = document.getElementById('inputField');
/** 제목 */
let titleText = document.getElementById('titleTodo');
/** 색 변환 버튼 */
let changeBtn = document.getElementById('titleColorChange')

addToDoButton.addEventListener('click', function(){
    let paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = inputField.value;
    todoContainer.appendChild(paragraph);
    inputField.value=''
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through'
    })
    paragraph.addEventListener('dblclick'), function(){
        todoContainer.removeChild(paragraph);
    }
})

changeBtn.addEventListener('click', function(){
    console.log(`${titleText.style.color}`)
    if (titleText.style.color === 'rgb(255, 255, 255)'){
        titleText.style.color = '#000'
        titleText.style.transition = '1s'
    } else {
        titleText.style.color = '#fff'
        titleText.style.transition = '1s'
    }
})