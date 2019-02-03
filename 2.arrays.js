/* EXERCISE 2 */
// Реализуйте и экспортируйте по умолчанию функцию,
// которая принимает на вход массив и возвращает новый массив,
// полученный из исходного удалением повторяющихся элементов.

const arr = [2, 1, 2, 3];

// indexOf - returns index of the first element occured in the array.
// In filter: current 'element' and 'index' being processed.

const uniq1 = arr =>
  arr.filter((element, index) => arr.indexOf(element) == index);

const uniq2 = arr =>
  arr.reduce(
    (acc, value) => (acc.includes(value) ? acc : acc.concat(value)),
    []
  );

console.log(arr.indexOf(2)); // 0
// console.log(uniq1(arr)); // [2, 1, 3]

// console.log(uniq1(arr)); // [2, 1, 3]

/* THE HINT */
// concat возвращает новый массив, содержащий элементы исходного массива + элементы,
// переданные в качестве аргументов
const colours = ["red", "orange", "yellow"];
const myFavColours = colours.concat("green");

/*
console.log(colours); // colours остался неизменен - [ 'red', 'orange', 'yellow' ]
console.log(myFavColours); // новый массив myFavColours - [ 'red', 'orange', 'yellow', 'green' ]
*/

// аргументом можно передать и массив значений
// console.log(myFavColours.concat(myFavColours));
