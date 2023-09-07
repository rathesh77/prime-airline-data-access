const BookRequest = require("../dto/BookRequest");
const fs = require('fs');

class BookService {

    static createBook(bookRequest) {
        console.log(bookRequest);
        const book = new BookRequest(bookRequest.flightId, bookRequest.userId);

        const bookFile = fs.readFileSync('../books.json');
        const parsedBookFile = JSON.parse(bookFile);

        parsedBookFile.push(book);
        console.log(parsedBookFile);
        return parsedBookFile;
    }
}

module.exports = BookService;