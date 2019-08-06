let requester = (() => {
    const kinveyBaseUrl = "https://baas.kinvey.com/";
    const kinveyAppKey = "kid_ryuDaBHmB";
    const kinveyAppSecret = "486d384cfb5148d6a18794a1f5d315ea";

    const auth = (type, credentials) => {
        if(type === 'register'){
            return 'Basic ' + btoa(kinveyAppKey+':'+kinveyAppSecret);
        }else if(type==='login'){
            return 'Basic ' + btoa(credentials.username+':'+credentials.password);
        }

        return 'Kinvey ' + JSON.parse(storage.getData('authtoken'));
    }

    const makeRequest = (method, startPath, endPath, authType, data) =>{
        const url = `${kinveyBaseUrl}${startPath}/${kinveyAppKey}/${endPath}`;
    
        let reqData = {};
        reqData.method = method;
        reqData.headers = {
            "Authorization": auth(authType, data),
        }
        if(data){
            reqData.body = JSON.stringify(data);
            reqData.headers["Content-Type"] = "application/json";
        }
 
        return fetch(url, reqData);
    }

    const get = function(startPath, endPath, authType, data) {
        return makeRequest('GET', startPath, endPath, authType, data);
    }
        
    const post = function(startPath, endPath, authType, data) {
        return makeRequest('POST', startPath, endPath, authType, data);
    }
    
    const update = function(startPath, endPath, authType, data){
        return makeRequest('PUT', startPath, endPath, authType, data);
    }

    const deleteItem = function(startPath, endPath, authType, data){
        return makeRequest('DELETE', startPath, endPath, authType, data);
    }

    return {
        get,
        post,
        update,
        deleteItem
    }
})()