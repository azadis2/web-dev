// book function constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
let myLibrary = [];
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
