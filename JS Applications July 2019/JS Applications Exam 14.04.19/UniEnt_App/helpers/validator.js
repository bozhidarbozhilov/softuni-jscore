const validator = function() {
    const validateEvent = function (eventData) {
        const isValidEvent = eventData.name.length >= 6 &&
            typeof eventData.dateTime === 'string' &&
            eventData.description.length >= 10 &&
            (eventData.imageURL.startsWith('http://') || eventData.imageURL.startsWith('https://'));
        return isValidEvent;
    }

    return {
        validateEvent,
    }
}();