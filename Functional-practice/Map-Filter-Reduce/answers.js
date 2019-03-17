//1 Sum the values of an array
var a = [0, 1, 2, 3];

let sum = a.reduce( (total, number) => {
	return total += number; 
}, 0);

sum;


//2 Sum the values of a nested array
var b = [[1,2], [4,2,1], [9,3], [2]];

let flatten = b.reduce( (total, current) => {
	return total.concat(current);
}, [])

let totalSum = flatten.reduce( (total, number) => {
	return total += number;
}, 0);

totalSum;

//3 Sum the values of an Object with identical keys
var c = [{x: 1}, {x: 2}, {x: 3}]

let total = c.reduce( (accum, object) => {
	return accum += object.x;
}, 0);

total;

//4 Sum the values of an Object with unique keys
var d = [{a: 5}, {b: 8}, {c: 3}]

let total = d.reduce( (total, element) => {
	return total += parseInt(Object.values(element));
}, 0)

/* 
Annotation: Object.values() returns an array of all values, if we then
try to sum all the array values, we create a string. Calling parseInt
on the Object's output array turns every element we work through into an integer before
passing adding it to the total.
*/

//5 Count instances of values in an Object
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

let countedNames = names.reduce( (accum, curr) => {
	if (curr in accum) {
		accum[curr]++
	} else {
		accum[curr] = 1;
	}
	return accum;
}, {})

countedNames;

/*
Annotation: We reduce the array and check if the current element exists on
the accumulator, if it does: ++ the key's value. if it doesnt: create a new 
key and assign it a value of 1;
*/

//6 Grouping objects by property
var people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

function sortBy(objectArray, property) {
	return objectArray.reduce( (total, current) => {
		let key = current[property];
		if (!total[key]) {
			total[key] = [];
		}
		total[key].push(current);
		return total;
	}, {})
}

sortBy(people, 'age');

/*
Annotation: We create a function to provide the parameter object and property,
we can now pass in an object source and what property we want to project by.
Now, we reduce the passed in object and create a key variable that is assigned 
current element's property value. If our accumulator does not have the unique
key, then it will create it and assign it to an empty array. Then we push the
current element into the relevant accumulator array
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

let compiled = friends.reduce( (accum, curr) => {
	return [...accum, ...curr.books]
}, []);

compiled;

/*
Annotation: every element we iterate through, we grab the value of it's book
array (the whole array), and then spread it into an array and return it.
After the initial spread insertion, future book arrays will be concated
to the spread accum array.

// essentially: ['Bible', 'Harry Potter', + 'War and peace', 'Romeo and Juliet']
*/


//8 Remove duplicates in an array. use Set || use reduce
var myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];

function purifyArray(arr) {
	const pureArr = [...new Set(arr)];
	//or const pureArr = Array.from(new Set(arr))
	return pureArr;
}


//9 double each value in an array
var myArr = [1,2,3,4];

function double(value) {
	return value * 2;
}

myArr.map(double);


//10 filter out even numbers
var myArr = [1,2,3,4,5];

function isOdd(v) { return v % 2 == 1;}

function exclude(arr, fn) {
	let list = [];
	for (let i = 0; i < arr.length; i++) {
		if (fn(arr[i])) {
			list.push(arr[i])l
		}
	}
	return list;
}

exclude(myArr, isOdd);

// w filter

myArr.filter(isOdd);



//11 create an acronym of n strings in an array
let words = ['Functional', 'Light', 'JavaScript', 'stuff'];
function acronym(str, word) {
	return str + word.charAt(0)
}

words.reduce(acronym(), '');






