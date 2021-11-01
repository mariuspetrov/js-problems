let resultDiv = document.getElementById('result');

let createElements = () => {
  for (let i=1; i<= 50; i++){
    if( i % 6 === 0){
      //console.log(`Multiple of 6: ${i}`);  
      let input = document.createElement('input');
      input.setAttribute('value',i);
      resultDiv.appendChild(input);
    } else if ( i % 3 === 0){
      //console.log(`Multiple of 3: ${i}`);
      let ul = document.createElement('ul');
      resultDiv.appendChild(ul);
      for (let j=1; j<= i; j++){
        let li = document.createElement('li');
        li.innerHTML = j;
        ul.appendChild(li); 
      }
    } else if ( i % 2 === 0){
      //console.log(`Even: ${i}`);
      let div = document.createElement('div');
      div.classList.add('item-even');
      resultDiv.appendChild(div);
    } else if ( i % 2 !== 0){
      //console.log(`Odd: ${i}`);
      let div = document.createElement('div');
      div.classList.add('item-odd');
      resultDiv.appendChild(div);
    }
  }
}
createElements();