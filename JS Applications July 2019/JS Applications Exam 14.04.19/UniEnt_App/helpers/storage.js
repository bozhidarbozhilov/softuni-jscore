const storage = function () {
    const saveData = function (key, value) {
        sessionStorage.setItem(key, value);
    }

    const removeData = function (key) {
        sessionStorage.removeItem(key);
    }

    const getData = function (key) {

        return JSON.parse(sessionStorage.getItem(key));

    }

    const saveUser = function (userInfo) {
        saveData('userInfo', JSON.stringify(userInfo));
        saveData('authtoken', JSON.stringify(userInfo._kmd.authtoken));
    }

    const updateUserInfo = function (userInfo) {
        saveData('userInfo', userInfo);
    }

    const deleteUser = function () {
        removeData('userInfo');
        removeData('authtoken');
    }

    return {
        saveUser,
        updateUserInfo,
        deleteUser,
        getData,
    }
}();