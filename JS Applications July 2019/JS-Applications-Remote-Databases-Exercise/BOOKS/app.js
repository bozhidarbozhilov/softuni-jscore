const appId = 'kid_HJ17TbiGB';
const appSecret = 'ad619019cdc84e6ab60d0434c3b617ba';
const username = 'guest';
const password = 'guest';
const baseCrudUrl = `https://baas.kinvey.com/appdata/${appId}/`;
const userOpsUrl = `https://baas.kinvey.com/user/${appId}/`;

const elements = {
    loadBooks: document.getElementById('loadBooks'),
    submitFormBtn: document.querySelector('form button'),
    bookTitle: document.getElementById('title'),
    bookAuthor: document.getElementById('author'),
    bookIsbn: document.getElementById('isbn'),
    tableBody: document.querySelector('table tbody'),
    tableRow: document.querySelector('table tbody tr'),
    formTitle: document.querySelector('form h3'),
}

const base64encrypted = this.btoa(`${username}:${password}`);

function responseHander(response) {
    if (response.status >= 400) {
        throw new Error(response.statusText);
    }
    return response.json();
}


const getAllBooks = async function () {
    let response = await fetch(baseCrudUrl + 'books', {
        method: 'GET',
        headers: {
            'Authorization': `Basic ${base64encrypted}`
        }
    });

    return responseHander(response);
}

function addBook(ev) {
    let book = {};
    book.title = elements.bookTitle.value;
    book.author = elements.bookAuthor.value;
    book.isbn = elements.bookIsbn.value;

    fetch(baseCrudUrl + 'books', {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${base64encrypted}`,
            'Content-type': 'application/json'
        },
        body: JSON.stringify(book)
    }).then(response => {
        elements.bookTitle.value = '';
        elements.bookAuthor.value = '';
        elements.bookIsbn.value = '';
    })


    ev.stopPropagation();
    ev.preventDefault();
}

const uploadEditedBook = async function(bookId) {
    let book = {};
    book.title = elements.bookTitle.value;
    book.author = elements.bookAuthor.value;
    book.isbn = elements.bookIsbn.value;

    await fetch(baseCrudUrl + `books/${bookId}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Basic ${base64encrypted}`,
            'Content-type': 'application/json'
        },
        body: JSON.stringify(book)
    }).then(response => {
        elements.bookTitle.value = '';
        elements.bookAuthor.value = '';
        elements.bookIsbn.value = '';
        elements.formTitle.textContent = 'FORM';
        elements.submitFormBtn.textContent = 'Submit';
        elements.submitFormBtn.removeEventListener('click', uploadEditedBook)
        elements.submitFormBtn.addEventListener('click', addBook);
        loadAllBooks();
    })
    
};

const editBook = async function(ev) {
    let bookId = ev.target.getAttribute('book-id');
    elements.formTitle.textContent = 'EDIT BOOK';
    elements.submitFormBtn.textContent = 'EDIT';
    elements.submitFormBtn.removeEventListener('click', addBook);

    let response = await fetch(baseCrudUrl + `books/${bookId}`, {
        method: 'GET',
        headers: {
            'Authorization': `Basic ${base64encrypted}`
        }
    });

   await responseHander(response)
        .then(data=>{
            elements.bookTitle.value = data.title;
            elements.bookAuthor.value = data.author;
            elements.bookIsbn.value = data.isbn;
        });

    elements.submitFormBtn.addEventListener('click', function(ev) {
        uploadEditedBook(bookId);
        ev.stopPropagation();
        ev.preventDefault();
    });
    ev.stopPropagation();
    ev.preventDefault();
}

const deleteBook = async function(ev) {
    let bookId = ev.target.getAttribute('book-id');
    elements.formTitle.textContent = 'DELETE BOOK';
    elements.submitFormBtn.textContent = 'DELETE';
    elements.submitFormBtn.removeEventListener('click', addBook);

    let response = await fetch(baseCrudUrl + `books/${bookId}`, {
        method: 'GET',
        headers: {
            'Authorization': `Basic ${base64encrypted}`
        }
    });

   await responseHander(response)
        .then(data=>{
            elements.bookTitle.value = data.title;
            elements.bookAuthor.value = data.author;
            elements.bookIsbn.value = data.isbn;
        });

    elements.submitFormBtn.addEventListener('click', function(ev) {
        deleteSelectedBook(bookId);
        ev.stopPropagation();
        ev.preventDefault();
    });
    ev.stopPropagation();
    ev.preventDefault();
}

const deleteSelectedBook = async function(bookId){
    await fetch(baseCrudUrl + `books/${bookId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Basic ${base64encrypted}`,
            'Content-type': 'application/json'
        }
    }).then(response => {
        elements.bookTitle.value = '';
        elements.bookAuthor.value = '';
        elements.bookIsbn.value = '';
        elements.formTitle.textContent = 'FORM';
        elements.submitFormBtn.textContent = 'Submit';
        elements.submitFormBtn.removeEventListener('click', deleteSelectedBook)
        elements.submitFormBtn.addEventListener('click', addBook);
        
    })
    loadAllBooks();
}

const loadAllBooks = function () {
    elements.tableBody.innerHTML = "Loading...";
    getAllBooks().then(books=>{
        elements.tableBody.innerHTML = "";
        Object.values(books)
            .forEach(book=>{
                
                let currentRow = elements.tableRow.cloneNode(true);
                let buttons = currentRow.querySelectorAll('button');
                currentRow.children[0].textContent = book.title;
                currentRow.children[1].textContent = book.author;
                currentRow.children[2].textContent = book.isbn;
                buttons[0].setAttribute('book-id', book._id);
                buttons[0].addEventListener('click', editBook);
                buttons[1].setAttribute('book-id', book._id);
                buttons[1].addEventListener('click', deleteBook);
                elements.tableBody.appendChild(currentRow);
            });
    });
    
}

elements.loadBooks.addEventListener('click', loadAllBooks);
elements.submitFormBtn.addEventListener('click', addBook);


