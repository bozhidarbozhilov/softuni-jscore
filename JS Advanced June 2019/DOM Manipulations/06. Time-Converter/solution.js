function attachEventsListeners() {
    const convertBtns = document.querySelectorAll('input[type="button"]');
    const inputFields = document.querySelectorAll('input[type="text"]');
    const convertions = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    }

    const getButtonId = function(button){
        //returns button id without 'Btn' postfix for further processing
        return (button.id).substr(0, button.id.length-3);
    }

    const calcValue = function(value, from){
        if(from === 'days'){
            for(const time in convertions){
                convertions[time] *=value;
            }
            
        }else if(from === 'hours'){
            convertions.days = value/24;
            convertions.minutes = (value*60);
            convertions.seconds = (value*60*60);
        }else if(from === 'minutes'){
            convertions.days = value/24/60;
            convertions.hours = value/60;
            convertions.seconds = value*60;
        }else if(from === 'seconds'){
            convertions.days = value/24/60/60;
            convertions.hours = value/60/60;
            convertions.minutes = value/60;
        }
        return convertions;
    }
    Array.from(convertBtns).forEach(btn=>{
        btn.addEventListener('click', ()=>{
            let enteredValue = Number(btn.previousElementSibling.value);
            let filledInput = getButtonId(btn);
 
            Array.from(inputFields)
                .filter(input=>input.id !== filledInput)
                .forEach(field=>{
                    field.value = calcValue(enteredValue, filledInput)[field.id];
                });
        });
    })
}