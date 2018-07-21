class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}   

class UI {
    addBookToList(book) {
        const list = document.getElementById('book-list');
        // Create table row Element
        const tableRow = document.createElement('tr');
        // Insert columns -> td
        tableRow.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
        `; 
        
        list.appendChild(tableRow);
    }

    showAlert(message, className) {
        // Create div
        const div = document.createElement('div');
        // Add classes
        div.className = `alert ${className}`;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get parent
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        // Insert alert
        container.insertBefore(div, form);

        // Timeout after 3 seconds
        setTimeout(function () {
            document.querySelector('.alert').remove();  
            }, 3000);   
    }

    deleteBook(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();//a->td->tr
        } 
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
 }

 // Local Storage Class
 class Store {
     static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
     }
     static displayBooks() {
        const books = Store.getBooks();

        books.forEach(book => {
            const ui = new UI();

            // Add book to UI
            ui.addBookToList(book);
        });
     }

     static addBook(book) {
        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
     }

     static removeBook(isbn) {
        // console.log(isbn);
        const books = Store.getBooks();

        books.forEach((book, index) => {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
        
     }
 }

 // DOM Load Event
 document.addEventListener('DOMContentLoaded', Store.displayBooks);

 // Event Listener for add book
document.getElementById('book-form').addEventListener('submit', function(event) {

    // Get Form Values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // console.log(title, author, isbn);
    
    const book = new Book(title, author, isbn);

    // console.log(book);

    // Instanciate UI object
    const ui = new UI();

    // Validate
    if (title ==='' || author === '' || isbn === '') {
        // Error alert
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        // Add book to list
        ui.addBookToList(book);
        
        // Add to Local Storage
        Store.addBook(book);

        // Show success
        ui.showAlert('Book added!', 'success');

        // Clear fields
        ui.clearFields();
    }


    event.preventDefault();
});

// Event Listener for delete book
document.getElementById('book-list').addEventListener('click', function(e) {

    // Instantiate UI
    const ui = new UI();

    // Delete Book
    ui.deleteBook(e.target);

    // Remove from Local Storage
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    // Show alert
    ui.showAlert('Book Removed', 'success');
    
    e.preventDefault();
});