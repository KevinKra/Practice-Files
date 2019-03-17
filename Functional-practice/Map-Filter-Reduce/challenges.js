//1 Sum the values of an array
var a = [0, 1, 2, 3];



//2 Sum the values of a nested array
var b = [[1,2], [4,2,1], [9,3], [2]];




//3 Sum the values of an Object with identical keys
var c = [{x: 1}, {x: 2}, {x: 3}]




//4 Sum the values of an Object with unique keys
var d = [{a: 5}, {b: 8}, {c: 3}]


/* 
Annotation: 
*/

//5 Count instances of values in an Array
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];



/*
Annotation: 
*/

//6 Grouping objects by property
var people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

/*
 {
  20: [
        { name: 'Max', age: 20 }, 
        { name: 'Jane', age: 20 }
      ],
  21: [
        { name: 'Alice', age: 21 }
      ]
 }
*/



/*
Annotation: 
*/


//7 Bond nested arrays of objects using spread operator (and initial value);
var friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
}];



/*
Annotation: e
*/


//8 Remove duplicates in an array. use Set || use reduce
var myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];


	//or const pureArr = Array.from(new Set(arr))



//9 double each value in an array
var myArr = [1,2,3,4];





//10 filter out even numbers
var myArr = [1,2,3,4,5];



// w filter

myArr.filter(isOdd);



//11 create an acronym of n strings in an array
let words = ['Functional', 'Light', 'JavaScript', 'stuff'];







