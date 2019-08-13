(function application() {
    const app = Sammy('#main', function(){
        this.use('Handlebars', 'hbs');

        this.get('#/home', homeController.getHomePage);

        this.get('#/sign-in', userController.getLoginPage);
        this.get('#/sign-up', userController.getSignUpPage);
        this.get('#/logout', userController.logoutUser);

        this.post('#/sign-up', userController.signUpUser);
        this.post('#/sign-in', userController.signInUser);
    });

    (function() {
        app.run('#/home');
    })();
    
})();