const input = document.querySelector('#todo-input')
const button = document.querySelector('#todo-button')
const todoList = document.querySelector('#todo-list')

// const todoItems = []

function handleSubmit(e) {
  e.preventDefault()
  let listItem = document.createElement('li')
  // let pTag = document.createElement('p')
  listItem.innerHTML = input.value
  // todoItems.push(input.value)
  // todoItems.forEach((item) =>   pTag.innerHTML = item))
  // listItem.appendChild(pTag)
  listItem.appendChild(createDeleteButton())
  todoList.appendChild(listItem)

  input.value = ''
}

function createDeleteButton() {
  let deleteButton = document.createElement('button')
  deleteButton.innerHTML = 'DELETE'
  deleteButton.addEventListener('click', handleDelete)
  return deleteButton
}

function handleDelete() {
  this.parentNode.remove()
}

button.addEventListener('click', handleSubmit)