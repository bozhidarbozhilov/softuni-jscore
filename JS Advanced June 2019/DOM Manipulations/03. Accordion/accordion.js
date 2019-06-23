function toggle() {
    const toggleBtn = document.getElementsByClassName('button')[0];
    const textArea = document.getElementById('extra');


    let {style} = textArea;
    let {display} = style;
    toggleBtn.textContent === 'More' ? toggleBtn.textContent = 'Less' : toggleBtn.textContent = 'More';
    if(display === 'block'){
        style.display = 'none'
    }else{
        style.display = 'block';
    }
}