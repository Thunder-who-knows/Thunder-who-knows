const listContainer = document.querySelector('ul')
const userInputElement = document.getElementById('user-input')
const addButtonElement = document.getElementById('add-button')
const noTasksElement = document.getElementById('no-tasks')


function toggleChecked(event) {
    let liElement = event.target.parentElement
    let tickElement = liElement.children[0]
    if (liElement.className === 'checked')
    {
        liElement.className = ''
        tickElement.textContent = ''
    } else {
        liElement.className = 'checked'
        tickElement.textContent = ''
    }
}

function createItemHTML(text) {
    return "<span class=\"tick\"></span>\n<span class=\"text\">"+text+"</span>"
}

function addItem(event){
    let newItemData = userInputElement.value
    if (newItemData.length === 0){
        alert("Enter Something")
        return
    }

    // Hide the No tasks message
    noTasksElement.style.display ='none'

    // Code to Create an Unchecked li element    
    let newItem = document.createElement('li')
    newItem.innerHTML = createItemHTML(newItemData)
    userInputElement.value = ''
    listContainer.append(newItem)
    newItem.addEventListener('click',toggleChecked)

}

addButtonElement.addEventListener('click',addItem)