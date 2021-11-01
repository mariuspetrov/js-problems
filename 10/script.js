document.getElementById('submit').addEventListener('click', function() {
  const names = document.getElementById('inputString').value;

  function fourletters(names) {
    const arr = names.split(' ');
    let sum = 0;
    arr.map(el => {
      if (el.length === 4) {
        sum++;
      } 
    });
    return sum;
  }
    
  document.getElementById('result').innerHTML = fourletters(names);

});


document.getElementById('reset').addEventListener('click', function() {
  location.reload();
});
