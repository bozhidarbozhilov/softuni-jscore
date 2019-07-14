function getInfo() {
    const busStopId = document.getElementById('stopId');
    const stopNameElement = document.getElementById('stopName');
    const busesListElement = document.getElementById('buses');

    const parseData = ({name, buses}) => {
        return {name: name, buses: buses}
    };
    const addToDom = ({name, buses}) => {
        stopNameElement.textContent = name;
        for(const bus in buses) {
            const liElement = document.createElement('li');
            liElement.textContent = `Bus ${bus} arrives in ${buses[bus]} minutes`;
            busesListElement.appendChild(liElement);
        }

    };
    const loadData = function(data) {
        busesListElement.innerHTML = '';
        let parsedData = parseData(data);
        addToDom(parsedData);
        busStopId.value = '';
    }

    const displayError = function() {
        stopNameElement.textContent = 'Error';
    }

    fetch(`https://judgetests.firebaseio.com/businfo/${busStopId.value}.json `)
        .then((response)=> {
            if(response.ok){
                return response.json();
            }else{
                displayError();
                return;
            }
            
        })
        .then((data)=>loadData(data))
        .catch(()=>displayError());
}