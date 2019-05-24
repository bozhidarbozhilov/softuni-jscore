function solve() {
   const allCardsElements = document.getElementsByClassName('cards');
   const player1AllCards = document.querySelector('#player1Div').children;
   const player2AllCards = document.querySelector('#player2Div').children;

   const displaySpans = document.getElementById('result').children;
   const player1DisplayCard = displaySpans[0];
   const player2DisplayCard = displaySpans[2];

   let card1 = {};
   let card2 = {};
   let isCard1Selected = false;
   let isCard2Selected = false;
   let counter = 0;


   const historyElement = document.getElementById('history');

   for (let i=0; i<allCardsElements.length;i++) {
      let currentElement = allCardsElements[i];

     currentElement.addEventListener('click', (e)=>{
         if(e.target.parentElement.getAttribute('id') === 'player1Div' && !isCard1Selected){
            card1 = e.target;
            card1.setAttribute('src', 'images/whiteCard.jpg');
            player1DisplayCard.textContent = card1.name;
            isCard1Selected = true;
         }
         if(e.target.parentElement.getAttribute('id') === 'player2Div' && !isCard2Selected){
            card2 = e.target;
            card2.setAttribute('src', 'images/whiteCard.jpg');
            player2DisplayCard.textContent = card2.name;
            isCard2Selected = true;
         }
         if(isCard1Selected && isCard2Selected){
            checkForWinner(card1, card2);
            isCard1Selected = false;
            isCard2Selected = false;
            counter +=1;
            if(counter === 8){
               resetCards();
               counter=0;
            }
         }
        
      });
   }


   function checkForWinner(card1, card2){
      let card1Name = card1.name;
      let card2Name = card2.name;
      let winner;
      let looser;
         
         if(+card1Name > +card2Name){
            winner = card1;
            looser = card2;
         }else{
            winner = card2;
            looser = card1;
         }

         winner.style.border = '2px solid green';
         looser.style.border = '2px solid red';
         historyElement.textContent += `[${card1Name} vs ${card2Name}] `;
         player1DisplayCard.textContent='';
         player2DisplayCard.textContent = '';

      }

      function resetCards(){
         for (const card of player1AllCards) {
            card.setAttribute('src', 'images/card.jpg');
            card.style.border = '';
         }
         for (const card of player2AllCards) {
            card.setAttribute('src', 'images/card.jpg');
            card.style.border = '';
         }
      }
   
 }