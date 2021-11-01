document.getElementById('submit').addEventListener('click', function() {
  const str = document.getElementById('inputString').value.toString();

  const result = [str[0]];
    
  for(let x=1; x < str.length; x++) {
    if((str[x-1]%2 === 0)&&(str[x]%2 === 0)) {
      result.push('-', str[x]);
    } else {
      result.push(str[x]);
    }
  }
  
  document.getElementById('result').innerHTML = result.join('');
 
});


document.getElementById('reset').addEventListener('click', function() {
  location.reload();
});