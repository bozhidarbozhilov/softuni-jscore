function solve() {
    let inputElement = document.getElementById('input');
    let selectElementTo = document.getElementById('selectMenuTo');
    let outputElement = document.getElementById('result');
    let convertButton = document.getElementsByTagName('button')[0];

    let binaryOption = document.createElement('option');
    binaryOption.text = "Binary";
    binaryOption.value = 'binary';
    selectElementTo.add(binaryOption);

    let hexOption = document.createElement('option');
    hexOption.text="Hexadecimal";
    hexOption.value = "hexadecimal";
    selectElementTo.add(hexOption);


    convertButton.addEventListener('click', (e)=>{
        let valueForConvert = Number(inputElement.value);
        let convertOption = selectElementTo.value;
        if(convertOption === "binary"){
            outputElement.value = valueForConvert.toString(2);
        }else if(convertOption === "hexadecimal"){
            outputElement.value = valueForConvert.toString(16).toUpperCase();
        }
    });
}