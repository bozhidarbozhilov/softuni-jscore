(function application() {
    const app = Sammy('#main', function(){
        this.use('Handlebars', 'hbs');

        this.get('#/index', homeController.getIndexPage);
        this.get('#/home', homeController.getHomePage);

        this.get('#/signin', userController.getLoginPage);
        this.get('#/signup', userController.getSignUpPage);
        this.get('#/logout', userController.logoutUser);

        this.get('#/organize', eventController.getOrganizePage);
        this.get('#/details/:eventId', eventController.showEventDetails);


        this.post('#/signup', userController.signUpUser);
        this.post('#/signin', userController.signInUser);
        this.post('#/organize', eventController.organizeEvent);



    });

    (function() {
        app.run('#/index');
    })();
    
})();