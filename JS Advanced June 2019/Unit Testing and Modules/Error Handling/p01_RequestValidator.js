function validateHttp(request){
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const uriRegExp = RegExp('^[\\w\\.*]+$');
    const messageRegExp = RegExp('^[^<>\\\\&\'\"]*$');
    const validVersions = ['HTTP/0.9','HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    //"Invalid request header: Invalid {Method/URI/Version/Message}". 

    if(!validMethods.includes(request.method) || request.method == undefined){
        throw new Error('Invalid request header: Invalid Method');
    }
    if(!uriRegExp.test(request.uri) || request.uri == undefined){
        throw new Error('Invalid request header: Invalid URI');
    }
    if(!validVersions.includes(request.version) || request.version == undefined){
        throw new Error('Invalid request header: Invalid Version')
    }
    if(!messageRegExp.test(request.message) || request.message == undefined){
        throw new Error('Invalid request header: Invalid Message');
    }

    return request;
}

console.log(validateHttp({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.0',
    message: ''
}
  ));