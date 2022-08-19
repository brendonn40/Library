let myLibrary = []
const library = document.getElementById("library-display")
const addButton = document.getElementById("add-btn")
const submitButton = document.getElementById("submit-btn")
const remove = document.getElementsByClassName("rm-btn")

console.log(remove)

addBookToLibrary("harry potter","jk rowling","632",true)
addBookToLibrary("harry potter","jk rowling","632",true)
addBookToLibrary("harry potter","jk rowling","632",true)
addBookToLibrary("harry potter","jk rowling","632",false)
addBookToLibrary("harry potter","jk rowling","632",true)
addBookToLibrary("harry potter","jk rowling","632",true)
putBooksOnDisplay()

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
    if(readValue === "true"){
        readValue = true
    }else{
        readValue = false
    }
    if(titleValue === "" || authorValue === "" || pagesValue === "" ){
        alert("Fill all the info")
        return
    }
    let newBook = new Book(titleValue,authorValue,pagesValue,readValue)
    myLibrary.push(newBook)
    clearContent("library-display")
    putBooksOnDisplay(myLibrary)
    toogleForm()
    
}
//constructor
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


// put books on display and sets a data attribute for the remove button
function putBooksOnDisplay(){
    for (let i = 0; i < myLibrary.length; i++) {
        item = myLibrary[i]
        bookNumber = i
        let card = document.createElement("div")
        let rmBtn = document.createElement("button") 
        card.classList.add("card")
        card.innerText=`Title:${item.title}\nAuthor: ${item.author}\nPages:${item.pages}\nRead:${(item.read === true)? "yes" : "no"}\n`
        library.appendChild(card)
        rmBtn.innerText = "remove"
        rmBtn.classList.add("rm-btn")
        card.appendChild(rmBtn)
        rmBtn.setAttribute("data",bookNumber)
    }
}

// ideia atual eh fazer um event listener pra todos rm-btn e passar o data atribute(index) dele no array de livros
//remove book from array
function removeBook(bookNumber){
    myLibrary.splice(bookNumber,1)
    clearContent("library-display")
    putBooksOnDisplay(myLibrary)
}
// toogle add new book form
function toogleForm() {
    var element = document.getElementById("form");
    element.classList.toggle("hidden");
 
}

//clear display books
function clearContent(elementID) {
    document.getElementById(elementID).innerHTML = "";
}