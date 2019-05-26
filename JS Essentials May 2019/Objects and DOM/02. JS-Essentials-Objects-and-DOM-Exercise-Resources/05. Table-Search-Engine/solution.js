function solve() {
   let searchField = document.getElementById('searchField');
   let searchBtn = document.getElementById('searchBtn');
   let tableBody = document.getElementsByTagName('tbody')[0];
   let tableRows = tableBody.getElementsByTagName('tr');

   searchBtn.addEventListener('click', ()=>{
      clearSelected();
      let searchStr = searchField.value.toUpperCase();
      
      for (const row of tableRows) {
         let rowCells = row.getElementsByTagName('td');
         for (const cell of rowCells) {
            if(cell.textContent.toUpperCase().indexOf(searchStr)>-1){
               row.className='select';
            }
         }
      }
      searchField.value='';
   });

   function clearSelected(){
      for(const row of tableRows){
         if(row.classList.contains('select')){
            row.classList.remove('select');
         }
      }
   }
}