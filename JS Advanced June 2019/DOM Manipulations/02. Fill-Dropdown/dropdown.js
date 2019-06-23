function addItem() {
    const selectElement = document.getElementById('menu');
    const inputText = document.getElementById('newItemText');
    const inputValue = document.getElementById('newItemValue');
    const addButton = document.querySelector('input[type="button"]');

    function createOptionElement(text, value){
        let element = document.createElement('option');
        element.textContent = text;
        element.value = value;

        return element;
    }

    function addOption(){
        let text = inputText.value;
        let value = inputValue.value;
        let createdOption = createOptionElement(text, value);
        selectElement.appendChild(createdOption);

        inputText.value = '';
        inputValue.value = '';
    }
    addButton.addEventListener('click', addOption());

}