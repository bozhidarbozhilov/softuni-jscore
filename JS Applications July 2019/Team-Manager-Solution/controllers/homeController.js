const homeController = (function() {

    const getHome = function(context) {
        let userInfo = storage.getData('userInfo');

        if(userInfo){
            context.loggedIn = true;
            context.username = JSON.parse(userInfo).username;
        }

        context.loadPartials({
            header: '../templates/common/header.hbs',
            footer: '../templates/common/footer.hbs'
        }).then(function(){
            this.partial('../templates/home/home.hbs');
        })
    }

    return {
        getHome,
    }
}
)();