function swap(arr) {
  [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  return arr;
}

document.getElementById("result").innerHTML = swap([1, 2, 3, 4]);
