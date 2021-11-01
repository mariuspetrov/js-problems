const xProd = (a, b) => {
  return a.reduce((acc, x) => acc.concat(b.map((y) => [x, y])), []);
};

document.getElementById("result").innerHTML =
  xProd([1, 2], ["a", "b"]).join("  ") +
  "<br/>" +
  xProd([1, 2], [1, 2]).join("  ") +
  "<br/>" +
  xProd(["a", "b"], ["a", "b"]).join("  ");
