// const ids = new Set([1, 2, 3]);

// console.log(ids[1]); // undefinrd

// console.log(ids.has(1));

// ids.add(5);

// console.log(ids);

// ids.delete(3);

// for (const entry of ids.entries()) {
//   console.log(entry);
//   console.log(entry[0]);
// }

// const person1 = { name: 'mehran' };
// const person2 = { name: 'max' };

// const personData = new Map([[person1, [{ date: 'today', price: 1000 }]]]);

// console.log(personData);
// console.log(personData.get(person1));

// personData.set(person2, [{ date: 'two weeks ago', price: 2000 }]);
// console.log(personData);

// for (const [key, value] of personData.entries()) {
//   console.log(key, value);
// }

// console.log(personData.size);

let person = { name: 'mehran', age: 26 };

const persons = new WeakSet();
persons.add(person);
person = null;

console.log(persons);
