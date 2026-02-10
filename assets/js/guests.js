const counterInput = document.getElementById('counter');
const decrementBtn = document.getElementById('decrement');
const incrementBtn = document.getElementById('increment');

decrementBtn.addEventListener('click', () => {
let value = parseInt(counterInput.value);
if (value > 0) counterInput.value = value - 1;
});

incrementBtn.addEventListener('click', () => {
let value = parseInt(counterInput.value);
counterInput.value = value + 1;
});