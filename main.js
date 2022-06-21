let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', () =>{
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";

    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through";
    })

    paragraph.addEventListener('dblclick', function() {
        toDoContainer.removeChild(paragraph);
    })
})

let addToDoButton2 = document.getElementById('addToDo2');
let toDoContainer2 = document.getElementById('toDoContainer2');
let inputField2 = document.getElementById('inputField2');

addToDoButton2.addEventListener('click', () => {
    var paragraph1 = document.createElement('p');
    const date1 = new Date();
    
    paragraph1.classList.add('paragraph-styling');
    const formatDate = `${date1.getFullYear()}/${date1.getMonth()+1}/${date1.getDate()}`
    paragraph1.innerText = formatDate + "\n" +inputField2.value + "\n" + "\n";
    toDoContainer2.appendChild(paragraph1);
    inputField2.value = "";

    paragraph1.addEventListener('click', function() {
        paragraph1.style.textDecoration = "line-through";
    })

    paragraph1.addEventListener('dblclick', function() {
        toDoContainer2.removeChild(paragraph1);
    })
})