const eventController = function() {

    const getOrganizePage = function(context) {
        isLoggedIn.loggedIn(context);
        context.loadPartials({
            navbar: '../templates/common/navbar.hbs',
            footer: '../templates/common/footer.hbs',
        }).then(function() {
            this.partial('../templates/event/organize-event.hbs')
        })
    }

    const organizeEvent = function(context) {
        eventService.organize(context.params)
            .then(responseHandler.handler)
            .then((data)=>{
                this.redirect('#/home');
            })
    }

    const showEventDetails = async function(context) {
        const event = await eventService.getEventById(context.params.eventId);
        console.log(event);
        debugger;
        isLoggedIn.loggedIn(context);
        context.loadPartials({
            navbar: '../templates/common/navbar.hbs',
            footer: '../templates/common/footer.hbs'
        }).then(function(){
            this.partial('../templates/event-details.hbs');
        })
    }

    return {
        getOrganizePage,
        organizeEvent,
        showEventDetails,
    }
}();