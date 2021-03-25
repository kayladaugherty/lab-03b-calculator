const addition1Input = document.getElementById('addition-input1');
const addition2Input = document.getElementById('addition-input2');
const additionButton = document.getElementById('addition-button');
const additionResult = document.getElementById('addition-result');

additionButton.addEventListener('click', () =>{
    const add1Input = Number(addition1Input.value);
    const add2Input = Number(addition2Input.value);
    const addResult = add1Input + add2Input;
    additionResult.textContent = addResult;
    console.log(addResult);
});

const subtraction1Input = document.getElementById('subtraction-input1');
const subtraction2Input = document.getElementById('subtraction-input2');
const subtractionButton = document.getElementById('subtraction-button');
const subtractionResult = document.getElementById('subtraction-result');

subtractionButton.addEventListener('click', () =>{
    const sub1Input = Number(subtraction1Input.value);
    const sub2Input = Number(subtraction2Input.value);
    const subResult = sub1Input - sub2Input;
    subtractionResult.textContent = subResult;
    console.log(subResult);
});

const multiplication1Input = document.getElementById('multiplication-input1');
const multiplication2Input = document.getElementById('multiplication-input2');
const multiplicationButton = document.getElementById('multiplication-button');
const multiplicationResult = document.getElementById('multiplication-result');

multiplicationButton.addEventListener('click', () =>{
    const mult1Input = Number(multiplication1Input.value);
    const mult2Input = Number(multiplication2Input.value);
    const multResult = mult1Input * mult2Input;
    multiplicationResult.textContent = multResult;
    console.log(multResult);
});

const division1Input = document.getElementById('division-input1');
const division2Input = document.getElementById('division-input2');
const divisionButton = document.getElementById('division-button');
const divisionResult = document.getElementById('division-result');

divisionButton.addEventListener('click', () =>{
    const divide1Input = Number(division1Input.value);
    const divide2Input = Number(division2Input.value);
    const divideResult = divide1Input / divide2Input;
    divisionResult.textContent = divideResult;
    console.log(divideResult);
});
