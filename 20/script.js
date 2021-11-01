document.getElementById('submit').addEventListener('click', function() {
  const n = document.getElementById('inputNumber').value;

  function test_prime(n) {
  
    if (n===1) {
      return 'Number ' + n + ' is not prime.';
    } else if(n === 2) {
      return true;
    } else {
      for(var x = 2; x < n; x++) {
        if(n % x === 0) {
          return 'Number ' + n + ' is not prime.';
        }
      }
      return 'Number ' + n + ' is prime!';  
    }
  }
  
  document.getElementById('result').innerHTML = test_prime(n);

});


document.getElementById('reset').addEventListener('click', function() {
  location.reload();
});
