document.getElementById('submit').addEventListener('click', function() {
  const str = document.getElementById('inputString').value;

  function isPal(str){
    let strArr = str.split('');
    if (strArr.join() === strArr.reverse().join()) {
      document.getElementById('result').innerHTML = "Is palindrome.";
    } else {
      document.getElementById('result').innerHTML = "Is not palindrome.";
    }
  }
  
  isPal(str);

});


document.getElementById('reset').addEventListener('click', function() {
  location.reload();
});