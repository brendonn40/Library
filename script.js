let myLibrary = []
const library = document.getElementById('library-display')
const addButton = document.getElementById('add-btn')
const submitButton = document.getElementById('submit-btn')
const remove = document.getElementsByClassName('rm-btn')
const changeBtns = document.getElementsByClassName('change-btn')

putBooksOnDisplay()
addClickEvent(addButton, toogleForm)
addClickEvent(submitButton, addNewBook)
addRemoveEvent()
changeReadStatus()

//create event listeners for all change read buttons + call the togogleRead method
function changeReadStatus() {
  for (let index = 0; index < changeBtns.length; index++) {
    changeBtns[index].addEventListener('click', function (e) {
      e.stopPropagation()
      myLibrary[index].toggleRead()
      clearContent()
      putBooksOnDisplay()
      changeReadStatus()
      addRemoveEvent()
    })
  }
}
// create event listeners for all remove buttons + call the removebook function
function addRemoveEvent() {
  for (let index = 0; index < remove.length; index++) {
    remove[index].addEventListener('click', function (e) {
      e.stopPropagation()
      removeBook(remove[index].getAttribute('data'))
      addRemoveEvent()
      changeReadStatus()
    })
  }
}

// add new book from data received through form
function addNewBook() {
  let titleValue = document.getElementById('book-title').value
  let authorValue = document.getElementById('book-author').value
  let pagesValue = document.getElementById('book-pages').value
  let readValue = document.querySelector("input[name='read']").value
  if (readValue === 'true') {
    readValue = true
  } else {
    readValue = false
  }
  if (titleValue === '' || authorValue === '' || pagesValue === '') {
    alert('Fill all the info')
    return
  }
  let newBook = new Book(titleValue, authorValue, pagesValue, readValue)
  myLibrary.push(newBook)
  clearContent()
  putBooksOnDisplay(myLibrary)
  addRemoveEvent()
  changeReadStatus()
  toogleForm()
}
//constructor
function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}
Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages,${
    this.read === true ? 'already read' : 'not read yet'
  }`
}
Book.prototype.toggleRead = function () {
  this.read = !this.read
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read))
}

// put books on display and sets a data attribute for the remove button
function putBooksOnDisplay() {
  for (let i = 0; i < myLibrary.length; i++) {
    item = myLibrary[i]
    bookNumber = i
    let card = document.createElement('div')
    let rmBtn = document.createElement('button')
    let changeRead = document.createElement('button')
    card.classList.add('card')
    card.innerText = `Title:${item.title}\nAuthor: ${item.author}\nPages:${
      item.pages
    }\nRead:${item.read === true ? 'yes' : 'no'}\n`
    library.appendChild(card)
    rmBtn.innerText = 'remove'
    rmBtn.classList.add('rm-btn')
    card.appendChild(rmBtn)
    rmBtn.setAttribute('data', bookNumber)
    changeRead.innerText = 'change read status'
    changeRead.classList.add('change-btn')
    card.appendChild(changeRead)
  }
}

//remove book from array
function removeBook(bookNumber) {
  myLibrary.splice(bookNumber, 1)
  clearContent()
  putBooksOnDisplay(myLibrary)
}
// toogle add new book form
function toogleForm() {
  var element = document.getElementById('form')
  element.classList.toggle('hidden')
}

//clear display books
function clearContent() {
  document.getElementById('library-display').innerHTML = ''
}
// create event and stop propagation
function addClickEvent(element, callback) {
  element.addEventListener('click', function (e) {
    e.stopPropagation()
    callback()
  })
}
