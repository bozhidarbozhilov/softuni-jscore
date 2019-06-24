function encodeAndDecodeMessages() {
    // const divMainElements = document.querySelectorAll('#main div');
    // const encodeAndSendEl = divMainElements[0];
    // const decodeAndReadEl = divMainElements[1];
    // const encodeButton = encodeAndSendEl.querySelector('button');
    // const decodeButton = decodeAndReadEl.querySelector('button');
    // const messageElement = encodeAndSendEl.querySelector('textarea');
    // const decodeElement = decodeAndReadEl.querySelector('textarea');

    const encodeButton = document.getElementsByTagName('button')[0];
    const decodeButton =  document.getElementsByTagName('button')[1];
    const messageElement =  document.getElementsByTagName('textarea')[0];
    const decodeElement = document.getElementsByTagName('textarea')[1];

    const encodeMessage = function(){
        let result='';
        let messageToEncode = messageElement.value;
        Array.from(messageToEncode).forEach(letter=>result += String.fromCharCode(letter.charCodeAt(0)+1));
        decodeElement.value = result;
        messageElement.value = '';
    };
    const decodeMessage = function(){
        let message = decodeElement.value;
        let decodedMessage = '';
        Array.from(message).forEach(let=>decodedMessage += String.fromCharCode(let.charCodeAt(0)-1));
        decodeElement.value = decodedMessage;
    };
    encodeButton.addEventListener('click', encodeMessage);
    decodeButton.addEventListener('click', decodeMessage);
}