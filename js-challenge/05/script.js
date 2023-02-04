document.getElementById('submit').addEventListener('click', function() {
  const idx = document.getElementById('inputIndex').value;

  function calcFib(idx){
    if (idx < 2) return idx;
    return calcFib(idx-1) + calcFib(idx-2);
  }
  
  document.getElementById('result').innerHTML = calcFib(idx);

});


document.getElementById('reset').addEventListener('click', function() {
  location.reload();
});