function setParams(params) {
    document.location.search = $.param(params);
}

function getParams() {
    var curParams = document.location.search.substr(1).split('&');
    var hash = {};

    for(var i = 0; i < curParams.length; i++) {
        x = curParams[i].split('=');

        //check if key is an array
        var arrayRegex = /%5B\d%5D/;
        if(x[0].match(arrayRegex)) {

            //remove the bracket encoding from the key
            x[0] = x[0].replace(arrayRegex, '');

            //put the value into an array if it is the first object for the array
            if(!hash[x[0]]) {
                x[1] = [x[1]];
            }
        }

        //if key already exists in hash add value into array
        if(hash[x[0]]) {
            hash[x[0]].push(x[1]);
        }
        else {
            hash[x[0]] = x[1];
        }
    }

    return hash;
}

function updateParams(params) {
    var curParams = getParams();

    hash = $.extend(curParams,params);
    setParams(hash);
}

function removeParams(keys) {
    var curParams = getParams();

    for(var i = 0;i < keys.length; i++) {
        delete curParams[keys[i]];
    }
    setParams(curParams);
}

function removeParam(key) {
    setParams(delete getParams()[key]);
}