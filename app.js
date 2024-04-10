// const numbers = [1, 2, 3];
// console.log(numbers);

// // const newNumber = new Array(4, 'hi');
// // console.log(newNumber);

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const numbers2 = Array.from('hi mehran');
// console.log(numbers2);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const array = [
//   [1, 2, 3],
//   [-5.6, -1, 1000, 22],
// ];

// for (const data of array) {
//   for (const cl of data) {
//     console.log(cl);
//   }
// }

const hobbies = ['sport', 'tv'];

hobbies.push('coding');
hobbies.unshift('1');
hobbies.pop(); // pop from the end
hobbies.shift(); // remove from the beggining

console.log(hobbies);

hobbies[10] = 'test'; // we will get empty places

console.log(hobbies);

const array = [1, 2, 3, 4];
array.splice(1, 1, 'hi', 'good'); // starting element , delete as many we want , insert elements
console.log(array);

// array.splice(2); // delete all from the starting element
// console.log(array);

array.splice(-1, 1);
console.log(array);
