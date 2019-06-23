function notify(message) {
    const btnElement = document.querySelector('button');
    const notificationElement = document.getElementById('notification');

    notificationElement.textContent = message;
    notificationElement.style.display = 'block';
    setTimeout(()=> notificationElement.style.display = 'none', 2000);
    
}