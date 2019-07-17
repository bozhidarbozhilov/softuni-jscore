function solve() {
    const departButton = document.getElementById('depart');
    const arriveButton = document.getElementById('arrive');
    const infoElement = document.querySelector('#info span');
    let isStopped = true;
    let stopName = '';
    let nextId = 'depot';

    const toggleButtons = ()=>{
        if(isStopped){
            departButton.disabled = 'true';
            arriveButton.disabled = '';
            isStopped = false;
        }else{
            departButton.disabled = '';
            arriveButton.disabled = 'true';
            isStopped = true;
        }
    }

    function depart() {
        let url = (`https://judgetests.firebaseio.com/schedule/${nextId}.json`);
        fetch(url)
            .then((response)=>response.json())
            .then((data)=>{
                stopName = data.name;
                nextId = data.next;
                infoElement.textContent = `Next stop ${stopName}`;
                toggleButtons();
            })
            .catch((err)=> {
                infoElement.textContent = 'Error';
                departButton.disabled = 'true';
                arriveButton.disabled = 'true';
            });
    }

    function arrive() {
        infoElement.textContent = `Arriving at ${stopName}`;
        toggleButtons();
    }

    return {
        depart,
        arrive
    };
}

let result = solve();