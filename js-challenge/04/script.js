let arr = ['a', 'b', 'c', 'd'];

document.getElementById('addAtTheStartSubmit').addEventListener('click', function() {
     
  let inputStart = document.getElementById('inputAtTheStartId').value;

  function addAtTheBegining(arr) {
    // es5
    // arr.unshift(inputStart);
    
    //es6
    arr = [inputStart, ...arr];    
    document.getElementById('result').innerHTML = arr;
  }

  addAtTheBegining(arr);
});


document.getElementById('addAtTheEndSubmit').addEventListener('click', function() {

  let inputEnd = document.getElementById('inputAtTheEndId').value;

  function addAtTheEnd(arr) {
    // es5
    // arr.push(inputEnd);
    
    //es6
    arr = [...arr, inputEnd];    
    document.getElementById('result').innerHTML = arr;
  }

  addAtTheEnd(arr);
});


document.getElementById('reset').addEventListener('click', function() {
  location.reload();
});