const similarity = (arr, values) => arr.filter((v) => values.includes(v));

document.getElementById("result").innerHTML =
  "[" + similarity([1, 2, 3], [1, 2, 4]).join(", ") + "]";
