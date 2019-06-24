function lockedProfile() {
    const SELECTORS = {
        PROFILE_ELEMENTS: '.profile',
        RADIO_BUTTONS: 'input[type="radio"]',
        SHOW_BUTTON: 'button',
        HIDDEN_FIELDS: '#user{{index}}HiddenFields'
    }
    const profileElements = document.querySelectorAll(SELECTORS.PROFILE_ELEMENTS);

    const checkForLock = function(radios){
        let checked = Array.from(radios).find(btn=>btn.checked);
        return checked.value === 'lock' ? true : false;
    }

    const toggleHiddenFields = function(element,index){
        let isLocked = checkForLock(element.querySelectorAll(SELECTORS.RADIO_BUTTONS));
        if(!isLocked){
            let hiddenStyleStatus = element.querySelector(SELECTORS.HIDDEN_FIELDS.replace('{{index}}', index+1));
            let showButtonText = element.querySelector(SELECTORS.SHOW_BUTTON);
            if(hiddenStyleStatus.style.display === 'block'){
                hiddenStyleStatus.style.display = 'none';
                showButtonText.textContent = 'Show more';
            }else{
                hiddenStyleStatus.style.display = 'block';
                showButtonText.textContent = 'Hide it';
            }
             
        }
        
    }
    
    Array.from(profileElements)
                            .forEach((profile, index)=>{
                                let showButtonElement = profile.querySelector(SELECTORS.SHOW_BUTTON);
                                showButtonElement.addEventListener('click', ()=>toggleHiddenFields(profile, index));
                            });
}