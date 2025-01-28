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
/* THE BELOW ARRAY FUNCTION IS USED TO THE THE FIND FUNCTION BOTH IN JAVASCRIPT AND ES6 */

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
const people = [{ name: "Max" }, { name: "Jack" }, { name: "Marry" }];
// JavaScript
function showEachOne(name) {
  for (let i = 0; i < people.length; i++) {
    alert(people[i].name);
  }
}

// ES6
const showEachOne = name => people.forEach(person => alert(person.name));
