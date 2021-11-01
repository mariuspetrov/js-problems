document.getElementById('submit').addEventListener('click', function() {
  const str = document.getElementById('inputString').value;
  const obj = {};

  for (let el of str) {
    obj[el] = obj[el] ? ++obj[el] : 1;
  }
  
  document.getElementById('result').innerHTML = JSON.stringify(obj, undefined, 2);
});


document.getElementById('reset').addEventListener('click', function() {
  location.reload();
});