/*
create a class library and implement the following: 
1. constructor must take the book list as an argument 
2. method getBookList()
3. method issueBook(bookName, user)
4. method returnBook(bookName)
 */

class Library{
    constructor(givenBookList){
        this.bookList = givenBookList;
        this.issuedBook = {};
    }

    getBookList(){
        this.bookList.forEach(function(element){
            console.log(element);
        });
    }

    issueBook(bookName, user){
        if(this.issuedBook[bookName] == undefined){
            this.issuedBook[bookName] = user;
            console.log(this.issuedBook);
        }
        else{
            console.log('This book is already issued');
        }
    }

    returnBook(bookName){
        // deleting data from object
        delete this.issuedBook[bookName];
        // console.log(this.issuedBook);
    }
}

let harryLib = new Library(['Bangla', 'English', 'Math']);
console.log(harryLib.getBookList());

// to issue a book
harryLib.issueBook('Bangla', 'harry');
// Rohan can't issue it again
harryLib.issueBook('Bangla', 'Rohan');
// But Rohan can issue another book
harryLib.issueBook('English', 'ronhan');
// But again the book which is issued by rohan can't again issued by other one.
harryLib.issueBook('English', 'karim');

// to return a book
harryLib.returnBook('Bangla');
// harry can again issue this book
harryLib.issueBook('Bangla', 'harry');

// But Rohan can't issue it again
harryLib.issueBook('Bangla', 'Rohan');