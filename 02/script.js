document.getElementById('submit').addEventListener('click', function() {
  const str = document.getElementById('inputString').value;
  let obj = {};
  let maxVal = 0;
  let mostFreqElem;
  let unitMeasure = '';

  function lettersFreq(str){	
    for (let el of str){
      obj[el] = obj[el] ? ++obj[el] : 1;
    }  
    return obj;
  }
  
  function mostFrequent(callback, arg){
    obj = callback.call(this, arg);
    for (let el of Object.entries(obj)) {
      if (el[1] > maxVal) {
        maxVal = el[1]
        mostFreqElem = el;  
      }
    }
    mostFreqElem[1] > 1 ? unitMeasure = 'times' : unitMeasure = 'time';
    document.getElementById('result').innerHTML = "The most frequent character is: " + mostFreqElem[0] + " -> " + mostFreqElem[1] + ' ' + unitMeasure;
  }

  mostFrequent(lettersFreq, str);  
});


document.getElementById('reset').addEventListener('click', function() {
  location.reload();
});