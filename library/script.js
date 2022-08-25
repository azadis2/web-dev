let myLibrary = [];
let add = document.querySelector('p');
const form = document.querySelector('.form-container');
const addbtn = document.getElementById('add');
const submit = document.querySelector('submit');
// don't show the form by default
form.style.display = 'none';

addbtn.addEventListener('click', ()=> {
    form.style.display = 'flex';
})

submit.addEventListener('click', (title, author, pages, read) => {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    display(myLibrary);
}
)

// book function constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// a function that loops through myLibrary and displays each book
function display(myLibrary) {
    myLibrary.forEach(function(book) {
        let newDiv = document.createElement('div');
        newDiv.style.display = 'block';
        newDiv.innerHTML = '<p>${book.title}</p> <p>${book.author}</p> <p>${book.pages}</p> <p>${book.read}</p>'
        newDiv.style.color='#222c3c';
    })
}

