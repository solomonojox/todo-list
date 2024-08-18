const inputElement = document.querySelector('.input-todo')
const addButton = document.querySelector('.add-todo')
const display = document.querySelector('.display')
const dateElement = document.querySelector('.input-date')
const timeElement = document.querySelector('.input-time')

let toDoList = [{name: 'Input a task', date: '2024-08-06', time: '08:00pm'}]

inputElement.addEventListener('keydown', (event) => {
  if(event.key === 'Enter'){
    let name = inputElement.value
    let date = dateElement.value
    let time = timeElement.value
    toDoList.push({name, date, time})

    displayTodoList()
    console.log(toDoList)
    inputElement.value = ''
  }
})

addButton.addEventListener('click', function addTodoItem(){
  let name = inputElement.value
  let date = dateElement.value
  let time = timeElement.value
  toDoList.push({name, date, time})

  displayTodoList()
  console.log(toDoList)
  inputElement.value = ''
  dateElement.value = ''
  timeElement.value = ''
})

function displayTodoList(){
  let displayList = ''
  for(let i = 0; i < toDoList.length; i++){
    let value = toDoList[i]
    const {name, date, time} = value
    const formattedDate = formatDate(date)
    htmlDisplay = `
      <div class="html-display">
        <div class="name">${name}</div>
        <div class="date">${formattedDate}</div>
        <div class="time">${time}</div>
        <button class="delete" onclick="
          toDoList.splice(${i}, 1);
          displayTodoList()
        ">Delete</button>
      </div>
    `
    displayList += htmlDisplay
  }
  
  display.innerHTML = displayList
}

function formatDate(dateString) {
  const date = new Date(dateString)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  return `${day}-${month}-${year}`
}

displayTodoList()