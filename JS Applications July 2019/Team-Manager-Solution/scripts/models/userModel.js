const userModel = (function() {

    const register = function(params) {
        let username = params.username;
        let password = params.password;
        let confirmPassword = params.repeatPassword;

        if(password === confirmPassword){
            userData = {
                username,
                password
            }
        }else {
            throw new Error('Password and Repeat Password must be equal!!!');
        }

        return requester.post('user', '', 'register', userData);

    }

    const login = function(params) {

        return requester.post('user','login', 'login', params);
    }

    const logout = function() {
        return requester.post('user', '_logout', '');
    }

    return {
        register,
        login,
        logout,
    }
})();