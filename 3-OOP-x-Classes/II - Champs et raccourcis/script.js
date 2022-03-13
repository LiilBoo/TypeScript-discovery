"use strict";
//Test 3
//* ----- Shorthand Syntax -----
class Book {
    constructor(title, price, PublishingDate, author, theme) {
        this.title = title;
        this.price = price;
        this.PublishingDate = PublishingDate;
        this.author = author;
        this.theme = theme;
        // title: string;
        // price: number;
        // PublishingDate: string;
        // author: string;
        // theme?: string[];
        this.bookID = 7;
        this.libraryName = "The book Shelf";
        // this.title = t;
        // this.price = price;
        // this.PublishingDate = PublishingDate;
        // this.author = author;
        // this.theme = th;
    }
    promo() {
        const { price, bookID } = this;
        return console.log(`ID : ${bookID}, promotion : ${price * 0.5}`);
    }
}
const BOOK_1 = new Book("The Great Gatsby", 20, "15/03/1920", "F. Scott Fitzgerald");
console.log(BOOK_1);
console.log(BOOK_1.promo());
//* We can now use this class as a type
const addToShelter = (obj) => {
    const { title, author, price } = obj;
    console.log(`ADDED TO SHELTER : ${title}`, obj);
};
addToShelter(new Book("Nana", 5, "12/07/1905", "Zola"));
// We do not have the theme property because it's optional
let onlyBook = [];
onlyBook.push(new Book("Nana", 5, "12/07/1905", "Zola"));
console.log(onlyBook);
onlyBook = [...onlyBook, BOOK_1];
console.log(onlyBook);
