export const shuffle = function(arr) {
  let newArr = arr.slice();
  for (let i = newArr.length; i; i -= 1) {
    let j = Math.floor(Math.random() * i);
    let middle = newArr[i - 1];
    newArr[i - 1] = newArr[j];
    newArr[j] = middle;
  }
  return newArr;
};