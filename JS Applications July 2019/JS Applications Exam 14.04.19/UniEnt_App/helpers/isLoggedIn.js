const isLoggedIn = function() {

    const loggedIn = function(context) {
        let loggedIn = storage.getData('userInfo');

        if(loggedIn) {
            context.loggedIn = true;
            context.username = loggedIn.username;
        }else{
            context.loggedIn = false;
        }
    }

    return {
        loggedIn,
    }
}();