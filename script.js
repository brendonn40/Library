let myLibrary = []
const library = document.getElementById("library-display")
const addButton = document.getElementById("add-btn")

console.log(addButton)

addButton.addEventListener("click", function(e){
    e.stopPropagation()
    toogleForm()
})

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

addBookToLibrary("harry potter","jk rowling","632",true)
addBookToLibrary("harry potter","jk rowling","632",true)
addBookToLibrary("harry potter","jk rowling","632",true)
addBookToLibrary("harry potter","jk rowling","632",true)
addBookToLibrary("harry potter","jk rowling","632",true)
addBookToLibrary("harry potter","jk rowling","632",true)

console.log(myLibrary)
putBookOnDisplay()
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