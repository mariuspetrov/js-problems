document.getElementById('submit').addEventListener('click', function() {
  let x = document.getElementById('inputX').value;
  let y = document.getElementById('inputY').value;

  [x, y] = [y, x];
  
  document.getElementById('result').innerHTML = 'Now x is: ' + x + ' and y is: ' + y;

});


document.getElementById('reset').addEventListener('click', function() {
  location.reload();
});
