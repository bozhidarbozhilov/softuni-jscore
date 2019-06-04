function solve() {
    const expressionArea = document.getElementById('expressionOutput');
    const resultArea = document.getElementById('resultOutput');
    const buttons = document.getElementsByTagName('button');

    let operators = ['+', '-', '*', '/'];
    let operatorSelected = false;
    let firstOperand = '';
    let operator = '';
    let secondOperand='';

    Array.from(buttons).forEach(button=>{
        button.addEventListener('click', ()=>{
            let buttonValue = button.value;
            if(buttonValue === '='){
                if(firstOperand ==='' || secondOperand ===''){
                    resultArea.textContent = 'NaN';
                }else{
                    let result = doCalc(firstOperand, secondOperand, operator);
                    resultArea.textContent = result;
                }
                firstOperand = '';
                operator = '';
                secondOperand='';
            }else if(buttonValue === 'Clear'){
                expressionArea.textContent = '';
                resultArea.textContent = '';
            }else{
                if(!operators.includes(buttonValue) && !operatorSelected){
                    firstOperand += buttonValue;
                    expressionArea.textContent += buttonValue;
                }else if(operators.includes(buttonValue)){
                    expressionArea.textContent += ' ';
                    expressionArea.textContent += buttonValue;
                    expressionArea.textContent += ' ';
                    operator = buttonValue;
                    operatorSelected = true;
                }else if(!operators.includes(buttonValue) && operatorSelected){
                    expressionArea.textContent += buttonValue;
                    secondOperand += buttonValue;
                }
                
            }
            
        });
    });
    
    function doCalc(firstOperand, secondOperand, operator){
        firstOperand = Number(firstOperand.trim());
        secondOperand = Number(secondOperand.trim());
        if(typeof(firstOperand)==='number' && typeof(secondOperand) ==='number'){
            if(operator === "+"){
                return firstOperand + secondOperand;
            }else if(operator === '-'){
                return firstOperand - secondOperand;
            }else if(operator === '*'){
                return firstOperand * secondOperand;
            }else if(operator === '/'){
                return firstOperand / secondOperand;
            }
        }else{
            return NaN;
        }

    };
}