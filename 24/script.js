document.getElementById('submit').addEventListener('click', function() {
  const str = document.getElementById('inputString').value;

  function uppercase(str) {
    let array1 = str.split(' ');
    let newarray1 = [];
      
    for(let x = 0; x < array1.length; x++) {
        newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
    }
    return newarray1.join(' ');
  }
  
  document.getElementById('result').innerHTML = uppercase("the quick brown fox");
 
});


document.getElementById('reset').addEventListener('click', function() {
  location.reload();
});