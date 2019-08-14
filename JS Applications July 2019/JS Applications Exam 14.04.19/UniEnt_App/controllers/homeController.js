const homeController = function() {

    const getIndexPage = function(context) {
        isLoggedIn.loggedIn(context);
        context.loadPartials({
            navbar: '../templates/common/navbar.hbs',
            footer: '../templates/common/footer.hbs'
        }).then(function(){
            
            this.partial('../templates/home/index.hbs');
        });
    }
    const getHomePage = async function(context) {
        isLoggedIn.loggedIn(context);
        context.allEvents = await eventService.getAllEvents();
        context.loadPartials({
            navbar: '../templates/common/navbar.hbs',
            footer: '../templates/common/footer.hbs',
            eventHolder:'../templates/event/event-holder.hbs',
            error: '../templates/error/error.hbs'
        }).then(function(){
            
            this.partial('../templates/home/home.hbs');
        });
    }

    return {
        getIndexPage,
        getHomePage,
    }
}();