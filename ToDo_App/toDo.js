const listContainer = document.querySelector('ul')
const userInputElement = document.getElementById('user-input')
const addButtonElement = document.getElementById('add-button')


function toggleChecked(event) {
    let liElement = event.target
    console.dir(liElement)
    let tickElement = event.target.children[0]
    if (liElement.class === 'checked')
    {
        liElement.class = ''
        tickElement.textContent = ''
    } else {
        liElement.class = 'checked'
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

        // Code to Create an Unchecked li element    
    }
    let newItem = document.createElement('li')
    newItem.innerHTML = createItemHTML(newItemData)

    listContainer.append(newItem)
    newItem.addEventListener('click',toggleChecked)
}

addButtonElement.addEventListener('click',addItem)