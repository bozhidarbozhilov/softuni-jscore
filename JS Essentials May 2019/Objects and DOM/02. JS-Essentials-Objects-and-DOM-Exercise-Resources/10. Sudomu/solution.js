function solve() {
    const tableElement = document.querySelector('table');
    const commandButtons = document.querySelectorAll('tfoot button');
    const tableRows = document.querySelectorAll('tbody tr');
    const checkResultElement = document.querySelector('#check p')
    
    const checkButton = commandButtons[0];
    const clearButton = commandButtons[1];

    checkButton.addEventListener('click', ()=>{
        if(checkByRows()){
            tableElement.style.border = '2px solid green';
            checkResultElement.textContent = 'You solve it! Congratulations!';
            checkResultElement.style.color = 'green';
        }else{
            tableElement.style.border = '2px solid red';
            checkResultElement.textContent = 'NOP! You are not done yet...';
            checkResultElement.style.color = 'red';
        }
    });
   
    clearButton.addEventListener('click', ()=>{
        Array.from(tableRows).forEach(row=>{
            Array.from(row.children).forEach(col=>{
                col.children[0].value = '';
            });
        });
        tableElement.style.border = '';
        checkResultElement.textContent = '';
    });

    function checkByRows(){
        for(let i = 0; i < tableRows.length; i++){
            let currentRow = tableRows[i].children;
            for(let j=0; j < currentRow.length; j++){
                for(let k = 0; k < currentRow.length; k++){
                    if(j !== k){
                        let firstCellContent = currentRow[j].children[0].value;
                        let secondCellContent = currentRow[k].children[0].value;
                        if(firstCellContent === secondCellContent || 
                            firstCellContent === '' ||
                            secondCellContent ===''){
                            return false;
                        }
                    }

                }
            }
        }
        return true;
    }

}