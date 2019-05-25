function solve() {
  let questionElements = document.getElementsByTagName('ul');
  let questionCounter = 0;
  let rightAnswersCounter = 0;


  for(let i=0;i<questionElements.length; i++){
      let clickElements = questionElements[i].getElementsByTagName('li');
      
      for (const element of clickElements) {
        element.addEventListener('click', ()=>{
          if(i===0 && element.classList.contains('low-value')){
              rightAnswersCounter += 1;
          }
          if(i===1 && element.classList.contains('high-value')){
            rightAnswersCounter += 1;
          }
          if(i===2 && element.classList.contains('low-value')){
            rightAnswersCounter += 1
          }
          questionElements[i].parentNode.style.display='none';
          if(i+1===3){
            if(rightAnswersCounter === 3){
              questionElements[3].querySelector('h1').textContent = 'You are recognized as top JavaScript fan!';
            }else{
              questionElements[3].querySelector('h1').textContent = `You have ${rightAnswersCounter} right answers`;
            }
           questionElements[3].style.display='block';
          }else{
            questionElements[i+1].parentNode.style.display='block';
          }
          
        });
      }
  }
 

}
