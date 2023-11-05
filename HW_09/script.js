const library = [];

let inputDate = prompt('Enter book data separate by ";" ');
// '123456789;Gold Fish;A.S. Pushkin;1820'
//  isbn;title;author;year
// console.log('isbn;title;author;year'.split(';'));

// console.log(inputDate);




while(inputDate) {
    //TODO
    const bookData = inputDate.split(';');
    const [isbn, title, author, year ] = bookData;  // taza funkcia 

    if(
        // proveryayem korektnuyu dlinu vvedyonnix dannix
        bookData.length === 4 && 
        // proveryayem dannie na pustatu
        // bookData[0] && 
        // bookData[1] &&
        // bookData[2] &&
        // bookData[3] &&
        isbn && title && author && year &&
        // proveryayem knigu po isbn na unikalnost v biblyateke library
        findBook(isbn) === -1
        ) {

            library.push({
                // isbn: isbn,
                // title: title,
                // author: author,
                // year: year,

                isbn,
                title,
                author,
                year
            })

    }
    
    inputDate = prompt('Enter book data separate by ";" ');
}






function printLibrary() {
    //TODO
    for (let i = 0; i < library.length; i++) {
       
        console.log(library[i]);
    }
    


}

printLibrary();




function findBook(isbn) { // return index of this book or -1
    //TODO
    for (let i = 0; i < library.length; i++) {
        if(isbn === library[i].isbn) {
            return i;
        }
        
    }
    return -1;
    

         
    }

    
    