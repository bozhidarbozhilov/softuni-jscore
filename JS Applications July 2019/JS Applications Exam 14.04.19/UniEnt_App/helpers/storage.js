(function storage() {
    const saveData = function(key, value) {
        sessionStorage.setItem(key, value);
    }

    const removeData = function(key) {
        sessionStorage.removeItem(key);
    }

    const getData = function(key) {
        return sessionStorage.getItem(key);
    }

    const saveUser = function(userInfo, authtoken){
        saveData('userInfo', userInfo);
        saveData('authtoken', authtoken);
    }

    const updateUserInfo = function(userInfo) {
        saveData('userInfo', userInfo);
    }

    const deleteUser = function() {
        removeData('userInfo');
        removeDate('authtoken');
    }

    return {
        saveUser,
        updateUserInfo,
        deleteUser,
    }
})();