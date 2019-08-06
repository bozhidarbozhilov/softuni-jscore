const storage = (function(){

    const getData = (key) => {
        return localStorage.getItem(key);
    }

    const saveUser = (userData) => {
        localStorage.setItem('userInfo', JSON.stringify(userData));
        localStorage.setItem('authtoken', JSON.stringify(userData._kmd.authtoken));
    }

    const deleteUser = () => {
        localStorage.removeItem('userInfo');
        localStorage.removeItem('authtoken');
    }

    return {
        getData,
        saveUser,
        deleteUser,
    }
})();