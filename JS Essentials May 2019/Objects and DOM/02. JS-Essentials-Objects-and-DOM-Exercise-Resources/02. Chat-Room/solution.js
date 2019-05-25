function solve() {
   let sendButton = document.getElementById('send');
   let textAreaElement = document.getElementById('chat_input');
   let allMessageElement = document.getElementById('chat_messages');

   sendButton.addEventListener('click', ()=>{
      let messageToSend = textAreaElement.value;
      let divMessageClass = document.createElement('div');
      divMessageClass.classList.add('message');
      divMessageClass.classList.add('my-message');
      divMessageClass.textContent = messageToSend;
      allMessageElement.appendChild(divMessageClass);
      textAreaElement.value = '';
   });
}


