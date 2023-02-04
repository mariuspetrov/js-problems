document.getElementById('submit').addEventListener('click', function() {
  const str = document.getElementById('inputString').value;
  let obj = {};

  // rfrc = return first recurent character
  function rfrc(str){
    for (let el of str) {
      if (obj[el]){
        return el;
      } else {
        obj[el] = el;
      }    
    }
  }
    
  document.getElementById('result').innerHTML = rfrc(str);

});


document.getElementById('reset').addEventListener('click', function() {
  location.reload();
});
