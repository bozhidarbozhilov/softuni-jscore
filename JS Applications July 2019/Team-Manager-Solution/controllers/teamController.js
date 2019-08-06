const teamController = (function() {

    const getAllTeams = function(context){
        teamsService.loadTeams()
            .then(responseHandler.handler)
            .then(data=>{
                isLogged.logged(context);
                context.teams = data;
                console.log(JSON.parse(localStorage.getItem('userInfo')).teamId);
                if(!JSON.parse(localStorage.getItem('userInfo')).teamId){
                    context.hasNoTeam = true;
                }
                
                context.loadPartials({
                    header: '../templates/common/header.hbs',
                    footer: '../templates/common/footer.hbs',
                    team: '../templates/catalog/team.hbs'
                }).then(function() {
                    this.partial('../templates/catalog/teamCatalog.hbs');
                })
                
            });
    }

    const getCreatePage = function(context) {
        isLogged.logged(context);
        context.loadPartials({
           
            header: '../templates/common/header.hbs',
            footer: '../templates/common/footer.hbs',
            createForm: '../templates/create/createForm.hbs'
        }).then(function() {
            
            this.partial('../templates/create/createPage.hbs');
        })
    }

    const createTeam = function(context) {

        teamsService.createTeam(context.params.name, context.params.comment)
            .then(responseHandler.handler)
            .then((data) => {
                teamsService.joinTeam(data._id);
                teamController.getAllTeams(context);
            });
    }

    const teamDetails = function(context){
        const teamId = context.params.teamId;
        const userData = JSON.parse(localStorage.getItem('userInfo'));
        teamsService.loadTeamDetails(teamId)
            .then(responseHandler.handler)
            .then(data=>{
                context.isAuthor = data._acl.creator === userData._id;
                context.isOnTeam = teamId === userData.teamId;
                context.name = data.name;
                context.comment = data.comment;
                context.teamId = teamId;
                isLogged.logged(context);
                context.loadPartials({
                    header: '../templates/common/header.hbs',
                    footer: '../templates/common/footer.hbs',
                    teamMember: '../templates/catalog/teamMember.hbs',
                    teamControls: '../templates/catalog/teamControls.hbs'
                }).then(function() {
                    
                    this.partial('../templates/catalog/details.hbs');
                })
            });
    }

    const joinToTeam = function(context) {
        const teamId = context.params.teamId;

        teamsService.joinTeam(teamId)
            .then(responseHandler.handler)
            .then((data) => {
                storage.saveUser(data);
                teamDetails(context);
            })
    }

    const leaveTeam = function(context) {
        teamsService.leaveTeam()
            .then(responseHandler.handler)
            .then((data)=>{
                storage.saveUser(data);
                getAllTeams(context);
            })
    }

    const getEditPage = async function(context) {
        let teamId = context.params.teamId;
        isLogged.logged(context);
        let response = await teamsService.loadTeamDetails(teamId);
        let team = await responseHandler.handler(response);

        context.teamId = teamId;
        context.name = team.name;
        context.comment = team.comment;
        
        context.loadPartials({
            header: '../templates/common/header.hbs',
            footer: '../templates/common/footer.hbs',
            editForm: '../templates/edit/editForm.hbs'
        }).then(function(){
            this.partial('../templates/edit/editPage.hbs');
        });
    }

    const editTeam = function(context){
        let teamId = context.params.teamId;
        let name = context.params.name;
        let comment = context.params.comment;

        teamsService.edit(teamId, name, comment)
        .then(responseHandler.handler)
        .then(data => {
            console.log(data);
            debugger;
            teamDetails(context);
        });

    }

    return {
        getAllTeams,
        getCreatePage,
        createTeam,
        teamDetails,
        joinToTeam,
        leaveTeam,
        getEditPage,
        editTeam,
    } 
})();