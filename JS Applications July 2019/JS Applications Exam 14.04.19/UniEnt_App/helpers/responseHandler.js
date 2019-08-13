(function responseHandler(){
    const handler= function(response) {
        if(response.status >= 400) {
            throw new Error(response.statusText);
        }

        return response.json();
    }
})()