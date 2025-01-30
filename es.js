// This array is meant to find Jack inside variable people, if not, cannot find jack. Open this in life server.

//START
// const people = [{name: 'Max'}, {name: 'Jack'}, {name: 'Marry'}];
// let i = 0;
// while (i < people.length && people[i].name != 'Jack') {
//     i++;
// }
// if (i !== people.length) {
//     alert('Jack is in ' + i);
// } else {
//     alert ('Cannot find Jack')
// }
//END

//START
/* THE BELOW ARRAY FUNCTION IS USED TO THE FIND FUNCTION BOTH IN JAVASCRIPT AND ES6 */

// const people = [{ name: "Max" }, { name: "Jack" }, { name: "Marry" }];
// //JavaScript
// function findPerson(name) {
//   for (let i = 0; i < people.length; i++) {
//     let person = people[i];
//     if (person.name == name) {
//       return person;
//     }
//   }
// }

// //ES6
// function findPerson(name) {
// return people.find(person =>person.name == name)
// }

//END

//START
/* THE BELOW ARRAY FUNCTION IS USED TO TEST THE forEach FUNCTION BOTH IN JAVASCRIPT AND ES6 */

// const people = [{ name: "Max" }, { name: "Jack" }, { name: "Marry" }];
// JavaScript
// function showEachOne(name) {
//   for (let i = 0; i < people.length; i++) {
//     alert(people[i].name);
//   }
// }

// ES6
// const showEachOne = name => people.forEach(person => alert(person.name));

//END

//START
/* THE BELOW ARRAY FUNCTION IS USED TO TEST THE filter FUNCTION BOTH IN JAVASCRIPT AND ES6 */

// const products = [{name: "Milk", price:15}, {name:"Water", price:9}, {name:"Bread", price:5}];
// JavaScript
// function filterProducts() {
//     let cheapProducts = [];
// for (let i = 0; i < products; i++) {

//     if(products[i].price < 10) cheapProducts.push(products[i]);
//     }
//     return cheapProducts;
// }

//ES6
// const filterProducts = () => products.filter(product => product.price < 10);
//END

//START
/* THE BELOW ARRAY FUNCTION IS USED TO TEST THE MAP FUNCTION BOTH IN JAVASCRIPT AND ES6 */
const products = [
  { name: "Milk", price: 15 },
  { name: "Water", price: 9 },
  { name: "Bread", price: 5 },
];

// JavaScript
// function changeProducts () {
//     for(let i = 0; i < products.length; i++) {
//         products[i].price += 2
//     }
//     return products
// }

//ES6
// const changeProducts = () =>
//   products.map((product) => ({ ...product, price: product.price + 2 }));
// console.log(changeProducts());
// console.log(products);
//END

//START
/* THE BELOW ARRAY FUNCTION IS USED TO TEST THE REDUCE FUNCTION AND ES6 */

// const data = [5, 10, 15, 20, 25];
// const res = data.reduce((total, currentValue) => total + currentValue);
// console.log(res);
//END

//START
/* THE BELOW ES6 is an example on Object access chain */

// let student = {address: {city:'New York', country: 'USA'}}

// console.log(student.address.city) // New York
// console.log(student,address,country) // USA

//END

//START
/* THE BELOW ES6 is an example on Problem of copying objects (reference) */

let array1 = [1,2,3];
let array2 = [4,5,6];
// Using ES5
array1 = array1.concat(array2);
console.log (array1)// [1,2,3,4,5,6,4,5,6]
//Using ES6
array1 = [...array1, ...array2];
console.log(array1)// [1,2,3,4,5,6,4,5,6]
