// Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI constructor
function UI() {

}
// UI prototype function
UI.prototype.addBookToList = function(book) {
    console.log(book);
    
    const list = document.getElementById('book-list');

    // Create table row Element
    const tableRow = document.createElement('tr');
    // Insert columns -> td
    tableRow.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `
    ; 
    
    list.appendChild(tableRow);
};

// Clear Fields
UI.prototype.clearFields = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
};

// Event Listeners
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

    // Add book to list
    ui.addBookToList(book);    

    // Clear fields
    ui.clearFields();

    event.preventDefault();
});