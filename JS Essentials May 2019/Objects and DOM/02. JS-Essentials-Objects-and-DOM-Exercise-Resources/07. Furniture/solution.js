function solve() {
  let textAreas = document.getElementsByTagName('textarea');
  let allButtons = document.getElementsByTagName('button');

  let furnitureListArea = textAreas[0];
  let outputArea = textAreas[1];

  let generateBtn = allButtons[0];
  let buyBtn = allButtons[1];

  let tableBody = document.getElementsByTagName('tbody')[0];

  generateBtn.addEventListener('click', ()=>{
    let furnitureList = JSON.parse(furnitureListArea.value);
    for (const furniture of furnitureList) {
      let newRow = document.createElement('tr');
      let currentRow = tableBody.appendChild(newRow);

      let imgTd = document.createElement('td');
      imgTd.innerHTML = `<img src="${furniture.img}">`;
      currentRow.appendChild(imgTd);

      let nameTd = document.createElement('td');
      let nameParagraph = document.createElement('p');
      nameParagraph.textContent = furniture.name.trim();
      nameTd.appendChild(nameParagraph);
      currentRow.appendChild(nameTd);

      let priceTd = document.createElement('td');
      let priceParagraph = document.createElement('p');
      priceParagraph.textContent = furniture.price;
      priceTd.appendChild(priceParagraph);
      currentRow.appendChild(priceTd);

      let decFactorTd = document.createElement('td');
      let decFactorParagraph = document.createElement('p');
      decFactorParagraph.textContent = furniture.decFactor;
      decFactorTd.appendChild(decFactorParagraph);
      currentRow.appendChild(decFactorTd);


      let inputTd = document.createElement('td');
      inputTd.innerHTML = '<input type="checkbox">';
      currentRow.appendChild(inputTd);
    }
  });


  buyBtn.addEventListener('click', ()=>{
      let allFurniture = [];
      let totalPrice = 0;
      let totalDecFactor = 0;
      let furnitureCounter = 0;
      let tableRows = document.querySelectorAll('tbody tr');

      for (const row of tableRows) {
        let checkbox = row.children[4].getElementsByTagName('input')[0];
        if(checkbox.checked){
          let name = row.children[1].textContent.trim();
          let price = row.children[2].textContent;
          let decFactor = row.children[3].textContent;

          allFurniture.push(name);
          totalPrice += Number(price);
          totalDecFactor += Number(decFactor);
          
          furnitureCounter += 1;
        }
        
      }

      outputArea.value = `Bought furniture: ${allFurniture.join(', ')}\n`+
      `Total price: ${totalPrice.toFixed(2)}\n`+
      `Average decoration factor: ${totalDecFactor/furnitureCounter}`
  });

}