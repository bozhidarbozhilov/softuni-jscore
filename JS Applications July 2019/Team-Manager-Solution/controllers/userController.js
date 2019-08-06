const userController = (function(){

    const getRegister = function(context) {
        context.loadPartials({
            header: '../templates/common/header.hbs',
            footer: '../templates/common/footer.hbs',
            registerForm: '../templates/register/registerForm.hbs'
        }).then(function(){
            this.partial('../templates/register/registerPage.hbs');
        });
    }

    const registerUser = function(context) {
        userModel.register(context.params)
            .then(responseHandler.handler)
            .then(data=>{
                homeController.getHome(context);
            });
    }

    const getLogin = function(context) {
        context.loadPartials({
            header: '../templates/common/header.hbs',
            footer: '../templates/common/footer.hbs',
            loginForm: '../templates/login/loginForm.hbs'
        }).then(function(){
            this.partial('../templates/login/loginPage.hbs');
        });
    }

    const loginUser = function(context) {
        userModel.login(context.params)
        .then(responseHandler.handler)
        .then(data=> {
            storage.saveUser(data);
            homeController.getHome(context);
        });

    }

    const logoutUser = function(context){
        userModel.logout()
            .then(responseHandler.handler)
            .then(() => {
                storage.deleteUser();
                homeController.getHome(context);
            })
    }


    return {
        getLogin,
        getRegister,
        registerUser,
        loginUser,
        logoutUser,
    }
})();