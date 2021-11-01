document.getElementById('submit').addEventListener('click', function() {
  const n = document.getElementById('inputIndex').value;

  // recursively
  function factorialR(n){
    if (n === 1) return 1;  
    return n * factorialR(n-1);
  }

  document.getElementById('result').innerHTML = factorialR(n);

});


document.getElementById('reset').addEventListener('click', function() {
  location.reload();
});