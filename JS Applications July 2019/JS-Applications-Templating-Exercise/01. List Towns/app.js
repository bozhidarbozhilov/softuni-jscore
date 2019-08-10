const loadBtn = document.getElementById('btnLoadTowns');
const townsInput = document.getElementById('towns');
const listDiv = document.getElementById('root');

const createTemplate = async (towns) => {
    const getHtml = await fetch('./cities-list.hbs', {'Content-Type': 'text/html'});
    const templateString = await getHtml.text();
    const templateFunc = Handlebars.compile(templateString);
    
    listDiv.innerHTML = templateFunc({towns});
}

const renderCities = () => {
    const towns = townsInput.value.split(', ');
    createTemplate(towns);
    townsInput.value= '';
}


loadBtn.addEventListener('click', renderCities)