function solve() {
    let inputElement = document.querySelector('article input');
    const addButton = document.querySelector('article button');
    let listItems = document.querySelectorAll('ol li');

    addButton.addEventListener('click', ()=>{
        let inputName = inputElement.value.charAt(0).toUpperCase() + inputElement.value.slice(1).toLowerCase();
        let letterIndex = inputName.charCodeAt(0) - 65;
        if(listItems[letterIndex].textContent === ''){
            listItems[letterIndex].textContent += inputName;
        }else{
            listItems[letterIndex].textContent += ', '+inputName;
        }
        inputElement.value = '';
    });
}