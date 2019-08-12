(function application() {
    const app = Sammy('#main', function(){
        this.use('Handlebars', 'hbs');

        this.get('#/home', homeController.getHomePage);
    });

    (function() {
        app.run('#/home');
    })();
    
})();