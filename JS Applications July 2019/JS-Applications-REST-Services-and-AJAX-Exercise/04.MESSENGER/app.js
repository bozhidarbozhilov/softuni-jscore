function attachEvents() {
    const textArea = document.getElementById('messages');
    const authorInput = document.getElementById('author');
    const contentInput = document.getElementById('content');
    const submitBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');

    const url = 'https://rest-messanger.firebaseio.com/messanger.json';

    const uploadMessage = function() {
        let authorName = authorInput.value;
        let messageContent = contentInput.value;

        let message = {author:authorName, 
            content:messageContent}

        fetch(url, {
            method: 'post',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(message)
        })

        authorInput.value = '';
        contentInput.value= '';
    }

    const loadAllMessages = function() {
        fetch(url)
            .then((response) => response.json())
            .then((data)=>{
                let values = Object.values(data);
                values.forEach((message)=>{
                    textArea.textContent += `${message.author}: ${message.content}\n`
                })
            });
    }
    submitBtn.addEventListener('click', uploadMessage);
    refreshBtn.addEventListener('click', loadAllMessages);
}

attachEvents();