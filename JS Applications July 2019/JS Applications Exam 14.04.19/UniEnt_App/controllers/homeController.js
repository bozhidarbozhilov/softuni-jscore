const homeController = function() {
    const getHomePage = function(context) {
        isLoggedIn.loggedIn(context);
        context.loadPartials({
            navbar: '../templates/common/navbar.hbs',
            footer: '../templates/common/footer.hbs'
        }).then(function(){
            
            this.partial('../templates/home/home.hbs');
        });
    }

    return {
        getHomePage,
    }
}();