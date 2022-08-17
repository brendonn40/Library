let myLibrary = []
const library = document.getElementById("library-display")

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
        let card = document.createElement("div")
        card.classList.add("card")
        card.innerText=`Title:${item.title}\nAuthor: ${item.author}\nPages:${item.pages}\nRead:${(item.read === true)? "yes" : "no"}`
        library.appendChild(card)
    }
}
