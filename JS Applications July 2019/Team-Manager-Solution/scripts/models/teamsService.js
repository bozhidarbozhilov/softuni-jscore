let teamsService = (() => {
    function loadTeams() {

        return requester.get('appdata', 'teams', 'kinvey');
        
    }

    function loadTeamDetails(teamId) {

        return requester.get('appdata', `teams/${teamId}`, 'kinvey');
    }

    function edit(teamId, name, comment) {
        const team = {
            name,
            comment
        }
        console.log(team);
        debugger;
        return requester.update('appdata', `teams/${teamId}`, 'kinvey', team);
    }

    function createTeam(name, comment) {
        let team = {
            name,
            comment
        }

        return requester.post('appdata', 'teams', 'kinvey', team);
    }


    function joinTeam(teamId) {
        const user = {
            username: JSON.parse(localStorage.getItem('userInfo')).username,
            teamId
        }
        return requester.update('user', JSON.parse(localStorage.getItem('userInfo'))._id, 'kinvey', user);
    }

    function leaveTeam() {
        const user = {
            username: JSON.parse(localStorage.getItem('userInfo')).username,
            teamId: ''
        }

        return requester.update('user', JSON.parse(localStorage.getItem('userInfo'))._id, 'kinvey', user);
    }


    return {
        loadTeams,
        loadTeamDetails,
        edit,
        createTeam,
        joinTeam,
        leaveTeam
    }
})()