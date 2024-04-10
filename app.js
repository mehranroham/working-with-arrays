// // // // const numbers = [1, 2, 3];
// // // // console.log(numbers);

// // // // // const newNumber = new Array(4, 'hi');
// // // // // console.log(newNumber);

// // // // // const yetMoreNumbers = Array.of(1, 2);
// // // // // console.log(yetMoreNumbers);

// // // // const numbers2 = Array.from('hi mehran');
// // // // console.log(numbers2);

// // // // const listItems = document.querySelectorAll('li');
// // // // console.log(listItems);

// // // // const array = [
// // // //   [1, 2, 3],
// // // //   [-5.6, -1, 1000, 22],
// // // // ];

// // // // for (const data of array) {
// // // //   for (const cl of data) {
// // // //     console.log(cl);
// // // //   }
// // // // }

// // // const hobbies = ['sport', 'tv'];

// // // hobbies.push('coding');
// // // hobbies.unshift('1');
// // // hobbies.pop(); // pop from the end
// // // hobbies.shift(); // remove from the beggining

// // // console.log(hobbies);

// // // hobbies[10] = 'test'; // we will get empty places

// // // console.log(hobbies);

// // // const array = [1, 2, 3, 4];
// // // array.splice(1, 1, 'hi', 'good'); // starting element , delete as many we want , insert elements
// // // console.log(array);

// // // // array.splice(2); // delete all from the starting element
// // // // console.log(array);

// // // array.splice(-1, 1);
// // // console.log(array);

// // const newArray = [1.2, 4.75, -5.5, 7, 100];

// // const copyArray = newArray.slice();

// // newArray.push(10);

// // console.log(newArray, copyArray);

// // console.log(newArray.slice(0, 3));
// // console.log(newArray.slice(-3, -1));
// // console.log(newArray.slice(-3));

// // const array1 = [1, 2, 3, 4, 3, 5];
// // const array2 = array1.concat([3.4, 2]);
// // console.log(array1, array2);

// // console.log(array1.indexOf(3));
// // console.log(array1.lastIndexOf(3));

// // const data = [{ name: 'mehran' }, { name: 'mohammad' }];

// // const result = data.find((item) => {
// //   return item.name === 'mehran';
// // });

// // console.log(result);

// // const indexResult = data.findIndex((item) => {
// //   return item.name === 'mehran';
// // });

// // console.log(indexResult);

// // const arr = [1, 3, 4, 5.6, 18];

// // console.log(arr.includes(5.6));
// // console.log(arr.indexOf(5.6) != -1);

// const prices = [300, 50.67, 44, 33.5];
// const tax = 0.19;
// const taxAdjust = [];

// console.log(prices);

// prices.forEach((price) => {
//   taxAdjust.push(price * (tax + 1));
// });

// console.log(taxAdjust);

// // first way:

// // console.log(
// //   prices.sort((a, b) => {
// //     return a - b;
// //   })
// // );

// // second way:

// console.log(
//   prices.sort((a, b) => {
//     if (a > b) {
//       return 1;
//     } else if (a === b) {
//       return 0;
//     } else {
//       return -1;
//     }
//   })
// );

// console.log(prices.reverse());

// // let sum = 0;

// // prices.forEach((price) => {
// //   sum += price;
// // });

// // console.log(sum);

// const sum = prices.reduce((prevValue, curValue) => {
//   return prevValue + curValue;
// }, 10);

// // 10 is the starting value

// console.log(sum);

const data = 'new york;10.55;2000';

const splitedData = data.split(';');

console.log(splitedData);
console.log(splitedData.join('_'));
