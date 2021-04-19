class Book{
    constructor(name, genre, author){
        this.name = name;
        this.genre = genre;
        this.author = author;
    }
    bookTakeHome(){
        console.log("Please submit Library card to take the Book home.")
    }
}

var TheTippingPoint = new Book('The Tipping Point', 'sci-fi', 'Malcolm Gladwell')
console.log(TheTippingPoint.name)
TheTippingPoint.bookTakeHome()

class Author{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    authorRecommendation(){
        console.log("Read 1 page of a book per day.")
    }
}

var MalcolmGladwell = new Author('Malcolm Gladwell', 22)
console.log(MalcolmGladwell.name)
MalcolmGladwell.authorRecommendation()

class LibraryBranch{
    constructor(location){
        this.location = location
    }
}
var FrereHall = new LibraryBranch('Frere Hall')
console.log(FrereHall.location)

class Genre {
    constructor(name){
        this.name = name;
    }
}
var scifi = new Genre('sci-fi')
console.log(scifi.name)

class PublicationCompany{
    constructor(name){
        this.name = name;
    }
}
var bookDepot = new PublicationCompany('Book Depot')
console.log(bookDepot.name)