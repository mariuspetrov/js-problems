document.getElementById('submit').addEventListener('click', function() {
  const str = document.getElementById('inputString').value;

  const isUpperCase = str => str === str.toUpperCase();
  
  document.getElementById('result').innerHTML = isUpperCase(str);
 
});


document.getElementById('reset').addEventListener('click', function() {
  location.reload();
});