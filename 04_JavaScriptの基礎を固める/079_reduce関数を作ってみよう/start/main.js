const str = "animation";
const strArry = str.split("");

function tag(accu, curr) {
  return `${accu}<${curr}>`;
}

// const result = strArry.reduce(tag, "");
// console.log(result);

function reduce(array, callback, defaultValue) {
  let accu = defaultValue;
  array.forEach((element) => {
    let curr = element;
    accu = callback(accu, curr);
  });
  return accu;
}

const result = reduce(strArry, tag, "");
console.log(result);
