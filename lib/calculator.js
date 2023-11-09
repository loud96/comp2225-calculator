// select all the buttons
const buttons = document.querySelectorAll('button');
// select the < input type="text" class="display" disabled> element
const display = document.querySelector('.in');
const output = document.querySelector('.display .output');

//creates array to stores memory values and set current value to the first item
let memoryRegister = []
let current = 0;

//function to cycle through memory values or display error if empty
function cycleMemory() {
  if (memoryRegister.length > 0) {
    current = (current + 1) % memoryRegister.length;
    display.value = memoryRegister[current];
  } else {
    display.value = ("No data in memory");
  }
}
//function to clear memory or display error message if empty
function clearMemory() {
  if (memoryRegister.length > 0) {
    memoryRegister = [];
    display.value = '';
    current = 0;
  } else {
    display.value = ("No data to delete");
  }
}

//add eventListener to MRC button to clear memory on double click
document.querySelector('button[value="MRC"]').addEventListener('dblclick', clearMemory);

// add eventListener to each button
function startUpCalculator(){
	buttons.forEach(function(button) {
	  button.addEventListener('click', calculate);
	});
}

// calculate function
function calculate(event) {
  // current clicked buttons value
  const clickedButtonValue = event.target.value;

  if (clickedButtonValue === '=') {
    // check if the display is not empty then only do the calculation
    if (display.value !== '') {
      // calculate and show the answer to display
      output.value = eval(display.value);
      display.value = '';
    }
  } else if (clickedButtonValue === 'C') {
    // clear everything on display
    display.value = '';
    output.value = '';
  } else if (clickedButtonValue === '+/-') {
    if (display.value !== '') {
      // change sign
      display.value = -1 * (display.value);
    } else if (output.value !== '') {
      output.value = -1 * output.value;
    }
  } else if (clickedButtonValue === '√') {
    if (display.value !== '') {
      // square root of number
      display.value = Math.sqrt(display.value).toFixed(2);
    } else if (output.value !== '') {
      output.value = Math.sqrt(output.value).toFixed(2);
    }
  } else if (clickedButtonValue === '%') {
    if (display.value !== '') {
      // percentage calculation
      display.value = (parseFloat(display.value)/100);
    } else if (output.value !== '') {
      output.value = (parseFloat(output.value)/100);
    }

  } else if (clickedButtonValue === 'MRC') {
    //memory recall
      cycleMemory();
  } else if (clickedButtonValue === 'M-') {
    if (display.value !== '') {
      //memory value remove
      memoryRegister.splice(memoryRegister.indexOf(display.value),1);
      display.value = '';
    } else if (output.value !== '') {
      memoryRegister.splice(memoryRegister.indexOf(output.value),1);
    }
  } else if (clickedButtonValue === 'M+') {
    if (display.value !== '') {
      //memory value add
      memoryRegister.push(display.value);
      display.value = '';
    } else if (output.value !== '') {
      memoryRegister.push(output.value);
    }
  } else if (clickedButtonValue === '←') {
    if (display.value !== '') {
      //backspace (removes last item)
      display.value = (display.value).slice(0, -1);
    }
  } else if (clickedButtonValue === '.') {
    if (display.value !== '') {
      //add decimal point 
      display.value += '.';
    }
  } else if ((clickedButtonValue === '+' || '-' || '/' || '*') && (output.value !== '')) {
      display.value = output.value + clickedButtonValue;
      output.value = ''; 
  } else {
    // otherwise concatenate it to the display
    display.value += clickedButtonValue;
  }
}

startUpCalculator();