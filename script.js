
let fruits = ['Soursap', 'Guava', 'Ginep', 'StarFruit'];

const shift = fruits.shift();
console.log(fruits);

const unshift = fruits.unshift('Apricot');
console.log(fruits);

const pop = fruits.pop();
console.log(fruits);


const push = fruits.push('Date');
console.log(fruits);

const fig = fruits.splice(1, 1, 'Fig');
const grape = fruits.splice(4, 1, 'Grape');
console.log(fruits);

const books = [
  { title: "Dune", author: "Frank Herbert", year: 1965 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "Animal Farm", author: "George Orwell", year: 1945 },
  { title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  { title: "1984", author: "George Orwell", year: 1949 }
];

console.log("Book Titles");
books.forEach(book => console.log(book.title));

console.log("\nAuthors List");
const authors = books.map(book => book.author);
console.log(authors);

console.log("\nBooks Before 1950");
const oldBooks = books.filter(book => book.year < 1950);
console.log(oldBooks);

console.log("\nFound Book");
const foundBook = books.find(book => book.title === "1984");
console.log(foundBook);



