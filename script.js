let myLibrary = []
const library = document.getElementById("library-display")
const addButton = document.getElementById("add-btn")
const submitButton = document.getElementById("submit-btn")


addBookToLibrary("harry potter","jk rowling","632",true)
addBookToLibrary("harry potter","jk rowling","632",true)
addBookToLibrary("harry potter","jk rowling","632",true)
addBookToLibrary("harry potter","jk rowling","632",true)
addBookToLibrary("harry potter","jk rowling","632",true)
addBookToLibrary("harry potter","jk rowling","632",true)
putBookOnDisplay()

addButton.addEventListener("click", function(e){
    e.stopPropagation()
    toogleForm()
})

submitButton.addEventListener("click", function(e){
    e.stopPropagation()
    addNewBook()
})

function addNewBook(){
    let titleValue = document.getElementById("book-title").value
    let authorValue = document.getElementById("book-author").value
    let pagesValue = document.getElementById("book-pages").value
    let readValue = document.querySelector("input[name='read']:checked").value

    let newBook = new Book(titleValue,authorValue,pagesValue,readValue)
    myLibrary.push(newBook)
    putOnDisplay(newBook)
    toogleForm() 
}

function Book(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    }
Book.prototype.info =  function(){
return `${this.title} by ${this.author}, ${this.pages} pages,${(this.read === true) ? "already read" : "not read yet"}`
}


function addBookToLibrary(title,author,pages,read){
    myLibrary.push(new Book(title,author,pages,read))
}



function putBookOnDisplay(){
    for (let i = 0; i < myLibrary.length; i++) {
        item = myLibrary[i]
        putOnDisplay(item)
    }
}
function putOnDisplay(book){
    let card = document.createElement("div")
    card.classList.add("card")
    card.innerText=`Title:${book.title}\nAuthor: ${book.author}\nPages:${book.pages}\nRead:${(book.read === true)? "yes" : "no"}`
    library.appendChild(card)
}

function toogleForm() {
    var element = document.getElementById("form");
    element.classList.toggle("hidden");
 
}