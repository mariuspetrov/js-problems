document.getElementById('calculateSubmit').addEventListener('click', function() {
     
  let baseValue = document.getElementById('addBaseValue').value;
  let exponentValue = document.getElementById('addExponentValue').value;

  function exp(b,n) {
    let ans = 1;
    for (let i=1; i <= n; i++) {
      ans = b * ans;        
    }
    return ans;
  }

  document.getElementById('result').innerHTML = exp(baseValue, exponentValue);

});


document.getElementById('reset').addEventListener('click', function() {
  location.reload();
});