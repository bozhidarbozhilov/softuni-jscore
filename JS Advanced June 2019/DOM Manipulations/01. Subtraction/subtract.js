function subtract() {
    const firstNumberElement = document.getElementById('firstNumber');
    const secondNumberElement = document.getElementById('secondNumber');
    const resultElement = document.getElementById('result');

    function calcResult(){
        resultElement.textContent = Number(firstNumberElement.value) - Number(secondNumberElement.value);
    }

    calcResult();
    
}