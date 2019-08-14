const eventService = function(){
    const organize = function(eventData){
        if(validator.validateEvent(eventData)){
            //TODO add events column at user profile and update it
            //set people interested in to 0
            eventData.peopleInterestedIn = 0;
            eventData.creator = storage.getData('userInfo').username;
 
            return requester.post('appdata', 'events','kinvey', eventData);
        }
    }

    const getAllEvents = async function() {
        const eventsResponse = await requester.get('appdata', 'events', 'kinvey');
        return await responseHandler.handler(eventsResponse);
    }

    const getEventById = async function(id){
        const allEvents = await getAllEvents();
        const event = allEvents.find((event)=>event._id === id);

        return event;
    }
    return {
        organize,
        getAllEvents,
        getEventById,
    }
}();