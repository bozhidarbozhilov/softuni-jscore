(() => {

    renderCatTemplate();


    function renderCatTemplate() {
        const templateString = document.getElementById('cat-template').innerHTML;
        const catsSection = document.getElementById('allCats');
        const cats = window.cats;

        const templateFunc = Handlebars.compile(templateString);

        let html = templateFunc({ cats });

        catsSection.innerHTML = html;

        const handleStatusCode = ({ target })=> {
            if(target.classList.contains('showBtn')){
                const statusDiv = target.parentNode.querySelector('.status');
                if(statusDiv.style.display === 'none') {
                    statusDiv.style.display = '';
                    target.textContent = 'Hide status code';
                }else{
                    statusDiv.style.display = 'none';
                    target.textContent = 'Show status code';
                }
                    
            }
        }
        catsSection.addEventListener('click', handleStatusCode)
    }



})()
