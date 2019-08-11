$(() => {
    const template = document.getElementById('monkey-template').innerHTML;

    const templateFunc = Handlebars.compile(template);

    document.body.innerHTML = templateFunc({monkeys});

    let monkeysDiv = document.querySelector('.monkeys');

    monkeysDiv.addEventListener('click', toggleMonkeyInfo);

    function toggleMonkeyInfo({ target }) {
        if(target.textContent === "Info") {
            let infoParagraph = target.parentNode.querySelector('p');
            infoParagraph.style.display === 'none' ?
                infoParagraph.style.display = '' :
                infoParagraph.style.display = 'none';   
        }
    }

})