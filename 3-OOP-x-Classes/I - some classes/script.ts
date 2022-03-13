class Book {
 
    title: string;
    price: number;
    PublishingDate : string;
    author: string;
    theme?: string[];
    private bookID = 7;
 
    constructor(t: string, price: number, PublishingDate: string, author: string, th?: string[]){
        this.title = t;
        this.price = price;
        this.PublishingDate = PublishingDate;
        this.author = author;
        this.theme = th;
    }
 
    promo(){
 
        // const { bookID } = this;
 
        console.log(`ID : ${this.bookID}`);
 
        return (this.price * 0.5);
    }
 
}
 
const BOOK_1 = new Book("The Great Gatsby", 20, "15/03/1920","F. Scott Fitzgerald")
 
console.log(BOOK_1);
console.log(BOOK_1.promo());
 

//* We can now use this class as a type
 
const addToShelter = (obj: Book) => {
    const { title, author, price} = obj;
    console.log(`ADDED TO SHELTER : ${title}`, obj);
};
 
addToShelter(new Book ("Nana", 5, "12/07/1905", "Zola"))
 

// We do not have a theme property as it's optional
 
let onlyBook : Book[] = [];
 
onlyBook.push(new Book ("Nana", 5, "12/07/1905", "Zola"))
 
console.log(onlyBook);
 
 
onlyBook = [...onlyBook, BOOK_1];
 
console.log(onlyBook);