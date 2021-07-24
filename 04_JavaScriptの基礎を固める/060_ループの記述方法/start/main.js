const array = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < 8; i++) {
//   console.log(array[i]);
// }

// for (let i in array) {
//   console.log(array[i]);
// }

for (let i of array) {
  console.log("i: ", i);
  console.log(array[i]);
}
