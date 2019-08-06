$(function() {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');

        this.get('#/home', homeController.getHome);

        this.get('#/login', userController.getLogin);
        this.get('#/register', userController.getRegister);

        this.post('#/register', userController.registerUser);
        this.post('#/login', userController.loginUser);

        this.get('#/catalog', teamController.getAllTeams);
        this.get('#/create', teamController.getCreatePage);
        this.post('#/create', teamController.createTeam);
        this.get('#/catalog/:teamId', teamController.teamDetails);
        this.get('#/join/:teamId', teamController.joinToTeam);
        this.get('#/edit/:teamId', teamController.getEditPage);
        this.post('#/edit/:teamId', teamController.editTeam);

        this.get('#/leave', teamController.leaveTeam);

        this.get('#/about', aboutController.getAbout)

        this.get('#/logout', userController.logoutUser);
    });

    app.run();
});