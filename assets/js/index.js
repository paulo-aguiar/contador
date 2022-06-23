let currentNumberWrapper = document.getElementById('currentNumber');

let currentNumber = 0;

function increment() {
  if( currentNumber < 10) {
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;
  } else {
    alert("Só é possível contar até 10.")
  }
}

function decrement() {
  if( currentNumber > 0){
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;
  }
}
