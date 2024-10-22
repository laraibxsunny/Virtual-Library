const { Media } = require("./Media.js");

class Book extends Media {
  constructor(title, year, genre, author, numPages, rating) {
    super(title, year, genre);
    this.author = author;
    this.numPages = numPages;
    this.rating = rating;
  }

  summary() {
    return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`;
  }
  static highestRating(arrOfBooks) {
    let tempBestBook = arrOfBooks[0];
    for (let i = 1; i < arrOfBooks.length; i++) {
      if (arrOfBooks[i].rating > tempBestBook.rating) {
        tempBestBook = arrOfBooks[i];
      }
    }
    return tempBestBook.title;
  }
}

// don't change below
module.exports = { Book };
