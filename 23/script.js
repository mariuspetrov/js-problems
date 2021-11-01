const percentage = (arr, val) => {
  let arrReduce = arr.reduce((acc, v) =>
  acc + (v < val ? 1 : 0) + (v === val ? 0.5 : 0), 0);  
  return (100 * arrReduce) / arr.length + ' %';
}

document.getElementById("result").innerHTML = percentage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6);
