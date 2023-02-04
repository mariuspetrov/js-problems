document.getElementById('submit').addEventListener('click', function() {
  const str1 = document.getElementById('inputString').value;

  function unique_char(str1) {
    var str=str1;
    var uniql="";
    for (var x=0;x < str.length;x++) {
      if(uniql.indexOf(str.charAt(x))==-1) {
        uniql += str[x];  
      }
    }
    return uniql;  
  }  
  
  document.getElementById('result').innerHTML = unique_char(str1);
 
});


document.getElementById('reset').addEventListener('click', function() {
  location.reload();
});