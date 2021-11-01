let res = {};

for (i = 1; i <= 100; i++) {
	if ((i % 3 == 0) && (i % 5 == 0)) {
  	res[i] = 'Fizz Buzz';
  } else if (i % 3 == 0) {
    res[i] = 'Fizz';
  } else if (i % 5 == 0) {
    res[i] = 'Buzz';	
  } else {
    res[i] = i;	
  }
}

document.getElementById('result').innerHTML = JSON.stringify(res).replace('{',"").replace('}',"").split(',').join('<br/>');

