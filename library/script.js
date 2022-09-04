// library array
let myLibrary = [];
// books grid
const booksGrid = document.getElementById('booksGrid');
// book function constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
// function to add books to library
function addBooktoLibrary(newBook){
    if (myLibrary.length === 0) {
        myLibrary.push(newBook)
    }
    else {
        myLibrary.forEach( book => {
            if (newBook.title !== book.title) {
                myLibrary.push(newBook);
            } else {
                console.log('Book is already available in the library')
            }
        })
    }
    

}
// creating book card for every book that is added to the library
const createBookCard = (book) => {
    const bookCard = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const btnGroup = document.createElement('div');
    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');

    bookCard.classList.add('book-card');
    btnGroup.classList.add('button-group');
    readBtn.classList.add('btn');
    readBtn.id = 'read';
    removeBtn.classList.add('btn');
    /*
    readBtn.onclick = toggleRead; // TODO function
    removeBtn.onclick = removeBook; // TODO function
    */
   title.textContent = book.title;
   author.textContent = book.author;
   pages.textContent = `${book.pages} pages`;
   readBtn.textContent = 'Read';
   removeBtn.textContent = 'Remove';

   bookCard.appendChild(title);
   bookCard.appendChild(author);
   bookCard.appendChild(pages);
   btnGroup.appendChild(readBtn);
   btnGroup.appendChild(removeBtn);
   bookCard.appendChild(btnGroup);
   booksGrid.appendChild(bookCard);
}
let harry = new Book('harry potter', 'jk', 364, true);
let lotr = new Book('LOTR', 'Tolkien', 500, false);
createBookCard(harry);
createBookCard(lotr);
/*
let add = document.querySelector('p');
let container = document.querySelector('.container');
let small = document.querySelector('.small-container');
const form = document.querySelector('.form-container');
const addbtn = document.getElementById('add');
const submit = document.querySelector('.submit');
// don't show the form by default
form.style.display = 'none';

addbtn.addEventListener('click', ()=> {
    form.style.display = 'block';
})

submit.addEventListener('click', (title, author, pages, read) => {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    display(myLibrary);
    // stop page from refreshing when submitting form
    document.getElementById('theForm').addEventListener('submit', handleForm);
    // making form disappear when it was submitted
    form.style.display = 'none';
    
}
)
// function to stop form from refreshing
function handleForm(event) { event.preventDefault(); } 



// a function that loops through myLibrary and displays each book
function display(myLibrary) {
    myLibrary.forEach(book => {
        let newDiv = document.createElement('div');
        let newBtn = document.createElement('button');
        newDiv.textContent = '<p>' + book.title + '</p>' + '<p>'+ book.author + '</p>' + '<p>' + book.pages + '</p>' + '<p>' + book.read + '</p>' ;
        newDiv.style.backgroundColor = '#ECD444';
        newDiv.style.color = 'black'
        newDiv.style.width = '250px';
        newDiv.style.borderRadius = '10px';
        newDiv.style.display = 'flex';
        newDiv.style.flexDirection = 'column';
        newDiv.style.alignItems= 'center';
        newDiv.style.justifyContent = 'space-between';
        newDiv.appendChild(newBtn);
        small.appendChild(newDiv);
    })
    
}
*/