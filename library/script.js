// library array
let myLibrary = [];
// books grid
const booksGrid = document.getElementById('booksGrid');
const buttonRead = document.getElementById('read');
const removeButton = document.getElementById('remove');
const form = document.querySelector('.form-container');
const readCheck = document.querySelector('#read');
form.style.display = 'none';
const submitBtn = document.querySelector('.submit');

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
    readBtn.classList.add('readbtn');
    if (book.read === true) {
        readBtn.textContent = 'Read';readBtn.style.backgroundColor = '#02c39a';
        readBtn.style.border = '2px solid #02c39a';} else {
        readBtn.textContent = 'Not read';
        readBtn.style.backgroundColor = '#ea3546';
            readBtn.style.border = '2px solid #ea3546';
    } 
    // toggle read when button is clicked
    readBtn.addEventListener('click', () => {
        if (book.read === true) {
            book.read = false;
            readBtn.textContent = 'Not read';
            readBtn.style.backgroundColor = '#ea3546';
            readBtn.style.border = '2px solid #ea3546';
        } else {
            book.read = true;
            readBtn.textContent = 'Read';
            readBtn.style.backgroundColor = '#02c39a';
            readBtn.style.border = '2px solid #02c39a';

        }
    })
    removeBtn.classList.add('removebtn');
    // remove book when button is clicked
    removeBtn.addEventListener('click', () => {
        bookCard.innerHTML = '';
        bookCard.outerHTML = '';

    })

   title.textContent = book.title;
   author.textContent = book.author;
   pages.textContent = `${book.pages} pages`;
   removeBtn.textContent = 'Remove';

   bookCard.appendChild(title);
   bookCard.appendChild(author);
   bookCard.appendChild(pages);
   btnGroup.appendChild(readBtn);
   btnGroup.appendChild(removeBtn);
   bookCard.appendChild(btnGroup);
   booksGrid.appendChild(bookCard);
}

const getBookFromInput = () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    let read = document.querySelector('#read').value;
    if (document.querySelector('#read').checked === true) {
        read = true;
    } else {
        read=false;
    }
    return new Book(title, author, pages, read);

}
const addBook = (e) => {
    //e.preventDefault();
    const testBook = getBookFromInput();
    addBooktoLibrary(testBook);
    createBookCard(testBook)
}
const addBtn = document.getElementById('addBookBtn');
addBtn.addEventListener('click', () => {
    form.style.display = 'block';
})
submitBtn.addEventListener('click', () => {
    form.style.display = 'none';
    addBook();
})




/*
let add = document.querySelector('p');
let container = document.querySelector('.container');
let small = document.querySelector('.small-container');
const form = document.querySelector('.form-container');
const addbtn = document.getElementById('add');
const submit = document.querySelector('.submit');
// don't show the form by default
form.style.display = 'none';



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