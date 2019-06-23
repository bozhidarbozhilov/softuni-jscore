function create(words) {
   const contentElement = document.getElementById('content');
   const divTemplate = document.createElement('div');
   const pTemplate = document.createElement('p');
   pTemplate.style.display = 'none';
   divTemplate.appendChild(pTemplate);

   Array.from(words).forEach(word=>{
      let currentDiv = divTemplate.cloneNode(true);
      currentDiv.firstElementChild.textContent = word;
      contentElement.appendChild(currentDiv);
   });

   Array.from(contentElement.childNodes).forEach(child=>{
      child.addEventListener('click', ()=>child.firstElementChild.style.display = 'block');
      
   })
}