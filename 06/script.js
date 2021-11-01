document.getElementById('submit').addEventListener('click', function() {
  const str = document.getElementById('inputString').value;

  function reverseString(str){
    return str.split('').reverse().join('')
  }
  
  document.getElementById('result').innerHTML = reverseString(str);

});


document.getElementById('reset').addEventListener('click', function() {
  location.reload();
});
