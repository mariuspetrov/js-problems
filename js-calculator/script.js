/*

init()
historyArray = [];
concatString = '0';
result = 0; 
#viewer-result don't has class active;

----------------------------------------------------------

1.1	If (current pressed character is a number)
		1.1.1 If (#viewer-result don't has class active)	
					1.1.1.1 If (concatString === '0')
									-> current pressed character becomes the first item in concatString
									-> display concatString
					1.1.1.2 Else (concatString !== '0')
									-> concat current pressed character to the existing string
		1.1.2 Else (#viewer-result has class active)	
					-> removeClass active
					-> current pressed character becomes the first item in concatString
					-> display concatString


1.2 Else If (current pressed character is a dot)
		1.2.1 If (last character in concatString is a number AND concatString does not include a dot)
					1.2.1.1 If (#viewer-result has class active)	
									-> removeClass active
									-> concat current pressed character to zero (0.)
									-> display concatString (0.)
					1.2.1.2 Else (#viewer-result don't has class active)					
									-> concat current pressed character to concatString
									-> display concatString 
		1.2.2 Else (last character in concatString is a dot OR concatString includes a dot)
					1.2.2.1 If (#viewer-result has class active)	
									-> removeClass active
									-> concat current pressed character to zero (0.)
									-> display concatString (0.)
					1.2.2.2 Else (#viewer-result don't has class active)
									-> do nothing	


1.3	Else If (current pressed character is an operator)
		1.3.1 If (historyArray is empty)
					1.3.1.1	If (#viewer-result don't has class active)	
									1.3.1.1.1 If (last character in concatString is a dot)
														-> remove last character (dot) from the concatString
									-> result = concatString
									-> display result
									-> add concatString as first element in the historyArray
									-> add the operator to the historyArray
									-> display historyArray
									-> #viewer-result add class active
					1.3.1.2	If (#viewer-result has class active)
									-> concatString = result
									-> add the concatString to the historyArray
									-> add the operator to the historyArray
									-> display historyArray

		1.3.2 Else (historyArray is not empty)
					1.3.2.1	If (#viewer-result don't has class active)	
									1.3.2.1.1 If (last character in concatString is a dot)
														-> remove last character (dot) from the concatString	
									-> get last element of historyArray	
									-> result math_it_up between (existing result / operator (which is the last element in historyArray) / the concatString number)
									-> display result
									-> add the concatString to the historyArray
									-> add the operator to the historyArray
									-> display historyArray
									-> #viewer-result add class active
					1.3.2.2	Else (#viewer-result has class active)
									-> get last element of historyArray	
									-> select the last element in the historyArray (which at this point is an operator)
									-> than change historyArrayLastElement with the current element(operator)
									-> display historyArray


1.4 Else If (current pressed character is an action)
		1.4.1 If (current pressed character is 'Enter' or '=')
					1.4.1.1	If (#viewer-result don't has class active)
									1.4.1.1.1 If (historyArray is not empty)
														1.4.1.1.1.1 If (last character in concatString is a dot)
																			-> remove last character (dot) from the concatString
														-> get last element of historyArray		
														-> resultTemp = concatString									
														-> result math_it_up between (existing result / operator (which is the last element in historyArray) / the concatString number)
														-> display result
														-> clear historyArray
														-> #viewer-result add class active
									1.4.1.1.2 Else (historyArray is empty)
													-> do nothing	
					1.4.1.2	Else (#viewer-result has class active)
									1.4.1.2.1 If (historyArray is not empty)
														-> get last element of historyArray			
														-> resultTemp = result						
														-> result math_it_up between (existing result / operator (which is the last element in historyArray) / resultTemp)
														-> display result
														-> clear historyArray
									1.4.1.2.2 Else (historyArray is empty)
														-> result math_it_up between (existing result / operator (which is the last element in historyArray) / resultTemp)
														-> display result

		1.4.2 Else (If current pressed character is 'Esc' or 'c')
					-> reset JS-Calculator

*/	


// CALCULATIONS CONTROLLER
let CalculationsController = (() => {

	const numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	const operatorsArr = ["/", "*", "-", "+"];
	const dotArr = ["."];
	const actionsArr = ["=", "Enter", "c", "Escape"];
	let historyArrayLastElement;
	let historyArrayLastElementIndex;
	let resultTemp;

	//converts a string into a math operator
	let math_it_up = {
		'+': (x,y) => Math.round((Number(x) + Number(y)) * 1e12) / 1e12,
		'-': (x,y) => Math.round((Number(x) - Number(y)) * 1e12) / 1e12,
		'*': (x,y) => Math.round((Number(x) * Number(y)) * 1e12) / 1e12,
		'/': (x,y) => Number(x) / Number(y)
	};

	//function hasClass
	function hasClass(element, className) {
	  return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
	}

	return {

		calculations: (el) =>  {			
			//1.1	If (current pressed character is a number)
			if (numbersArr.includes(el)) {
				//1.1.1 If (#viewer-result don't has class active)	
				if(!hasClass(document.getElementById('viewer-result'), 'active')) {
					//1.1.1.1 If (concatString === '0')	
					if(concatString === '0') {
						//-> current pressed character becomes the first item in concatString
						concatString = el;
						//-> display concatString
						UIController.concatStringDisplay(concatString);
					}
					//1.1.1.2 Else (concatString !== '0')
					else {
						//-> concat current pressed character to the existing string
						concatString += el;
						//-> display concatString
						UIController.concatStringDisplay(concatString);
					}
				}
				//1.1.2 Else (#viewer-result has class active)	
				else {
					//-> removeClass active 
					document.getElementById('viewer-result').classList.remove('active');
					//-> current pressed character becomes the first item in concatString
					concatString = el;
					//-> display concatString
					UIController.concatStringDisplay(concatString);
				}
			}
		
			//1.2 Else If (current pressed character is a dot)
			else if (dotArr.includes(el)) {
				//1.2.1 If (last character in concatString is a number AND concatString does not include a dot)
				if(numbersArr.includes(concatString.slice(-1)) && !concatString.includes('.')) {
					//1.2.1.1 If (#viewer-result has class active)	
					if(hasClass(document.getElementById('viewer-result'), 'active')) {
						//-> removeClass active
						document.getElementById('viewer-result').classList.remove('active');
						//-> concat current pressed character to zero (0.)
						concatString = '0' + el;
						//-> display concatString (0.)	
						UIController.concatStringDisplay(concatString);
					}
					//1.2.1.2 Else (#viewer-result don't has class active)
					else {
						//-> concat current pressed character to concatString
						concatString += el;
						//-> display concatString
						UIController.concatStringDisplay(concatString);
					}												 
				}
				//1.2.2 Else (last character in concatString is a dot OR concatString includes a dot)
				else{
					//1.2.2.1 If (#viewer-result has class active)	
					if(hasClass(document.getElementById('viewer-result'), 'active')) {
						//-> removeClass active
						document.getElementById('viewer-result').classList.remove('active');
						//-> concat current pressed character to zero (0.)
						concatString = '0' + el;
						//-> display concatString (0.)	
						UIController.concatStringDisplay(concatString);
					}
					//1.2.2.2 Else (#viewer-result don't has class active)
					else{
						//-> do nothing
					}
				}					
			}

			//1.3	Else If (current pressed character is an operator)
			else if (operatorsArr.includes(el)) {					
				//1.3.1 If (historyArray is empty)
				if(historyArray.length === 0) {
					//1.3.1.1	If (#viewer-result don't has class active)
					if(!hasClass(document.getElementById('viewer-result'), 'active')) {
						//1.3.1.1.1 If (last character in concatString is a dot)
						if(dotArr.includes(concatString.slice(-1))) {
							//-> remove last character (dot) from the concatString
							concatString = concatString.slice(0, - 1);	
						}
						//-> result = concatString
						result = concatString;
						//-> display result
						UIController.resultDisplay(result);
						//-> add concatString as first element in the historyArray 
						historyArray.push(concatString);
						//-> add the operator to the historyArray
						historyArray.push(el);
						//-> display historyArray
						document.getElementById('viewer-history').innerHTML = historyArray.join(' ');	
						//-> #viewer-result add class active
						document.getElementById('viewer-result').classList.add('active');
					}
					//1.3.1.2	If (#viewer-result has class active)
					else {
						//-> concatString = result
						concatString = result;						
						//-> add the concatString to the historyArray
						historyArray.push(concatString);
						//-> add the operator to the historyArray
						historyArray.push(el);
						//-> display historyArray
						document.getElementById('viewer-history').innerHTML = historyArray.join(' ');
					}
				}	
				//1.3.2 Else (historyArray is not empty)
				else {
					//1.3.2.1	If (#viewer-result don't has class active)	
					if(!hasClass(document.getElementById('viewer-result'), 'active')) {
						//1.3.2.1.1 If (last character in concatString is a dot)
						if(dotArr.includes(concatString.slice(-1))) {
							//-> remove last character (dot) from the concatString	
							concatString = concatString.slice(0, - 1);
						}
						//-> get last element of historyArray	
						historyArrayLastElement = historyArray.slice(historyArray.length - 1);
						//-> result math_it_up between (existing result / operator (which is the last element in historyArray) / the concatString number)	
						result = math_it_up[historyArrayLastElement[0]](result, concatString);
						//-> display result
						UIController.resultDisplay(result);
						//-> add the concatString to the historyArray
						historyArray.push(concatString);
						//-> add the operator to the historyArray
						historyArray.push(el);
						//-> display historyArray
						document.getElementById('viewer-history').innerHTML = historyArray.join(' ');
						//-> #viewer-result add class active
						document.getElementById('viewer-result').classList.add('active');
					}
					//1.3.2.2	Else (#viewer-result has class active)
					else {
						//-> get last element of historyArray	
						historyArrayLastElement = historyArray.slice(historyArray.length - 1);
						//-> select the last element in the historyArray (which at this point is an operator)
						historyArrayLastElementIndex = historyArray.indexOf(historyArrayLastElement[0]);
						//-> than change historyArrayLastElement with the current element(operator)
						historyArray[historyArrayLastElementIndex] = el;
						//-> display historyArray
						document.getElementById('viewer-history').innerHTML = historyArray.join(' ');
					}									
				}
			}		

			//1.4 Else If (current pressed character is an action)
			if (actionsArr.includes(el)){
				//1.4.1 If (current pressed character is 'Enter' or '=')
				if (el === 'Enter' || el === '=') {
					//1.4.1.1	If (#viewer-result don't has class active)
					if(!hasClass(document.getElementById('viewer-result'), 'active')) {
						//1.4.1.1.1 If (historyArray is not empty)
						if(!historyArray.length == 0) {
							//1.4.1.1.1.1 If (last character in concatString is a dot)
							if(dotArr.includes(concatString.slice(-1))) {
								//-> remove last character (dot) from the concatString	
								concatString = concatString.slice(0, - 1);
							}
							//-> get last element of historyArray	
							historyArrayLastElement = historyArray.slice(historyArray.length - 1);
							//-> resultTemp = concatString					
							resultTemp = concatString;	
							//-> result math_it_up between (existing result / operator (which is the last element in historyArray) / the concatString number)								
							result = math_it_up[historyArrayLastElement[0]](result, concatString);
							//-> display result
							UIController.resultDisplay(result);
							//-> clear historyArray
							historyArray = [];
							document.getElementById('viewer-history').innerHTML = '';	
							//-> #viewer-result add class active
							document.getElementById('viewer-result').classList.add('active');
						}
						//1.4.1.1.2 Else (historyArray is empty)
						else {
							//-> do nothing	
						}
					}
					//1.4.1.2	If (#viewer-result has class active)
					else {
						//1.4.1.2.1 If (historyArray is not empty)
						if(!historyArray.length == 0) {
							//-> get last element of historyArray		
							historyArrayLastElement = historyArray.slice(historyArray.length - 1);
							//-> resultTemp = result					
							resultTemp = result;	
							//-> result math_it_up between (existing result / operator (which is the last element in historyArray) / resultTemp)
							result = math_it_up[historyArrayLastElement[0]](result, resultTemp);
							//-> display result
							UIController.resultDisplay(result);
							//-> clear historyArray
							historyArray = [];
							document.getElementById('viewer-history').innerHTML = '';	
						}					
						//1.4.1.2.2 Else (historyArray is empty)
						else {
							//-> result math_it_up between (existing result / operator (which is the last element in historyArray) / resultTemp)
							result = math_it_up[historyArrayLastElement[0]](result, resultTemp);
							//-> display result
							UIController.resultDisplay(result);
						}
					}
				}
				//1.4.2 Else (If current pressed character is 'Esc' or 'c')
				else {
					//-> reset JS-Calculator
					historyArray = [];
					document.getElementById('viewer-history').innerHTML = '';	
					concatString = '0';
					UIController.concatStringDisplay(0);
					result = 0;					
				}
			}
		}
		
	}

})();


// UI CONTROLLER
let UIController = (() => {

	return {
		concatStringDisplay: (el) => {
			document.getElementById('viewer-result').innerHTML = (`${el}`);
		},

		resultDisplay: (result) => {
			document.getElementById('viewer-result').innerHTML = (`${+parseFloat(result).toFixed(6)}`);
			// Note the plus sign that drops any "extra" zeroes at the end.
			// It changes the result (which is a string) into a number again (think "0 + foo"),
			// which means that it uses only as many digits as necessary.
		}
	}

})();


// GLOBAL APP CONTROLLER
let controller = (() => {

	let setupEventListeners = () => {
		//Note that keypress don't detect "Escape"
		document.addEventListener('keydown', (event) => {  
		  CalculationsController.calculations(event.key);
		});

		document.addEventListener('click', (event) => {
			CalculationsController.calculations(event.target.dataset.el);
		});
	}

	return {
    init: () => {
      console.log('The application has started.');  
      historyArray = [];
			concatString = '0';
			result = 0;     
      setupEventListeners();
      UIController.concatStringDisplay(0);
    }
  }

})(CalculationsController,UIController);

controller.init();