const aboutController = (function() {

    const getAbout = function(context) {
        isLogged.logged(context);
        context.loadPartials({
            header: '../templates/common/header.hbs',
            footer: '../templates/common/footer.hbs'
        }).then(function(){
            this.partial('../templates/about/about.hbs');
        })
    }

    return {
        getAbout,
    }
})();