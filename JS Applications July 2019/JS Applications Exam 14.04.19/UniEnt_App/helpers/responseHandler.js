const responseHandler = function(){
    const handler= function(response) {
        if(response.status >= 400) {
            throw new Error(response.statusText);
        }else if(response.status === 204){
            return response;
        }

        return response.json();
    }

    return {
        handler,
    }
}();