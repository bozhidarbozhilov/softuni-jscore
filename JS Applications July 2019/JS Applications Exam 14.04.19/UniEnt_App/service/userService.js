const userService = function() {

    const signUpUser = function(userData) {
        const isValid = userData.username.length >= 3 && userData.password.length >=1 && userData.password === userData.rePassword;
        if(isValid){
            let credentials = {
                username: userData.username,
                password: userData.password,
            }
            return requester.post('user', '', 'basic', credentials);
        }
    }

    const signInUser = function(credentials) {
        return requester.post('user', 'login', 'basic', credentials);
    }

    const logout = function() {
        return requester.post('user', '_logout', 'kinvey');
    }

    return {
        signUpUser,
        signInUser,
        logout,
    }
}();