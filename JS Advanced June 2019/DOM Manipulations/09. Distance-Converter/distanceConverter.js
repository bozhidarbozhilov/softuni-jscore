function attachEventsListeners() {
    const inputDistanceElement = document.getElementById('inputDistance');
    const inputUnitsElement = document.getElementById('inputUnits');

    const outputDistanceElement = document.getElementById('outputDistance');
    const outputUnitsElement = document.getElementById('outputUnits');

    const convertBtn = document.getElementById('convert');

    const toMeters = {
        km: 1000,
        m:1,
        cm:0.01,
        mm:0.001,
        mi:1609.34,
        yrd:0.9144,
        ft:0.3048,
        in:0.0254
    }

    const convertInput = ()=>{
        let value = Number(inputDistanceElement.value);
        let inputUnits = inputUnitsElement.value;

        let valueInMeters = value * toMeters[inputUnits];
        
        let outputUnits = outputUnitsElement.value;
        
        outputDistanceElement.value = valueInMeters / toMeters[outputUnits];
    }
    convertBtn.addEventListener('click', convertInput);

}