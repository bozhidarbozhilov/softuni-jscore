(function requester() {
    const kinveyBaseURL = 'https://baas.kinvey.com/';
    const appKey = 'kid_rJInGnJNH';
    const appSecret = '98602f5571a04ed29a3ebf99275697aa';
    const basicAuthString = btoa(appKey + ':' + appSecret);

    const auth = function (authType) {
        if (authType === 'basic') {
            return `Basic ${basicAuthString}`;
        }
        return `Kinvey ${sessionStorage.getItem('authtoken')}`;
    }

    const makeRequest = function(method, startPath, endPath, authType, data) {
        const url = `${kinveyBaseURL}${startPath}/${appKey}/${endPath}`;

        let reqData = {};
        reqData.mehtod = method;

        reqData.headers = {
            'Autorization': auth(authType)
        }

        if(data){
            reqData.body = JSON.stringify(data);
            reqData.headers['Content-Type'] = 'application/json';
        }

        return fetch(url, reqData);
    }

    const get = function(startPath, endPath, authType, data) {
        return makeRequest('GET', startPath, endPath, authType, data);
    }

    const post = function(startPath, endPath, authType, data) {
        return makeRequest('POST', startPath, endPath, authType, data);
    }

    const update = function(startPath, endPath, authType, data) {
        return makeRequest('PUT', startPath, endPath, authType, data);
    }

    const del = function(startPath, endPath, authType, data) {
        return makeRequest('DELETE', startPath, endPath, authType, data);
    }

    return {
        get,
        post,
        update,
        del,
    }
})();