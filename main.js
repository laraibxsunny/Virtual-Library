const { Media } = require("./classes/Media.js");
const { Book } = require("./classes/Book.js");

const book1 = new Book('To Kill a Mockingbird', 1960, 'Fiction', 'Harper Lee', 281, 4.4);
console.log(Media.totalMediaCount);
const book2 = new Book('The Bluest Eye', 1970, 'Fiction', 'Toni Morrison', 206, 4.6);
console.log(Media.totalMediaCount);

console.log(Book.highestRating([book1, book2]))



