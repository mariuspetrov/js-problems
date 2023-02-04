document.getElementById('submit').addEventListener('click', function() {
  const idx = document.getElementById('inputIndex').value;

  const fibonacci = n =>
  Array.from({ length: n }).reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  );
  
  document.getElementById('result').innerHTML = fibonacci(idx);

});


document.getElementById('reset').addEventListener('click', function() {
  location.reload();
});