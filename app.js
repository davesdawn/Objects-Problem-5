/*
Problem 5: Write a JavaScript function to sort the following array of objects by title value.
Hint: Read about the JavaScript sort method.
Example array: [ 
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
   ];

*/

let bestBooks = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];

// Write a function to sort tittles in an array of objects
function sortBooks(a, b) {

// using if statement to compare keys    
    if (a.title < b.title) {
        return -1;
    } else if (a.title > b.title) {
        return 1;
    } else {
        return 0; // tittles must be equal
    }
}    

// sort by tittle using the sort method
console.log(bestBooks.sort(sortBooks));