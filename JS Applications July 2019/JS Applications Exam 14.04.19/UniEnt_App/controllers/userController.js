const userController = function() {

    const getLoginPage = function(context) {
        context.loadPartials({
            navbar: '../templates/common/navbar.hbs',
            footer: '../templates/common/footer.hbs',
        }).then(function() {
            this.partial('../templates/login/signin.hbs');
        })
    }

    const getSignUpPage = function(context) {
        context.loadPartials({
            navbar: '../templates/common/navbar.hbs',
            footer: '../templates/common/footer.hbs'
        }).then(function() {
            this.partial('../templates/login/signup.hbs')
        })
    }

    const signUpUser = function(context) {
        userService.signUpUser(context.params)
            .then(responseHandler.handler)
            .then((data)=>{
                getLoginPage(context);
            })
    }

    const signInUser = function(context) {
        userService.signInUser(context.params)
            .then(responseHandler.handler)
            .then((data)=>{
                storage.saveUser(data);
                homeController.getHomePage(context);
            })
    }

    const logoutUser = function(context) {
        userService.logout()
            .then(responseHandler.handler)
            .then(()=>{
                storage.deleteUser();
                debugger;
                homeController.getHomePage(context);
            })
    }

    return {
        getLoginPage,
        getSignUpPage,
        signUpUser,
        signInUser,
        logoutUser,
    }
}();
