const isLogged = (function() {

    logged = function(context) {
        if(localStorage.getItem('authtoken')){
            context.loggedIn = true;
            context.username = JSON.parse(localStorage.getItem('userInfo')).username;
        }
    }

    return {
        logged,
    }

})();