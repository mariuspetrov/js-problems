document.getElementById('submit').addEventListener('click', function() {
  const str = document.getElementById('inputString').value;

  function find_FirstNotRepeatedChar(str) {
    let arra1 = str.split('');
    let result = '';
    let ctr = 0;
    
    for (let x = 0; x < arra1.length; x++) {
      ctr = 0;
    
      for (let y = 0; y < arra1.length; y++) 
      {
        if (arra1[x] === arra1[y]) {
          ctr+= 1;
        }
      }
    
      if (ctr < 2) {
        result = arra1[x];
        break;
      }
    }
    return result;
  }
    
  document.getElementById('result').innerHTML = find_FirstNotRepeatedChar(str);

});


document.getElementById('reset').addEventListener('click', function() {
  location.reload();
});
