// function insertParam(key, value)
// {
//     key = escape(key); value = escape(value);

//     var kvp = document.location.search.substr(1).split('&');

//     var i=kvp.length; var x; while(i--) 
//     {
//     	x = kvp[i].split('=');

//     	if (x[0]==key)
//     	{
//     		x[1] = value;
//     		kvp[i] = x.join('=');
//     		break;
//     	}
//     }

//     if(i<0) {kvp[kvp.length] = [key,value].join('=');}

//     //this will reload the page, it's likely better to store this until finished
//     document.location.search = kvp.join('&'); 
// }



function setParams(params) {
    var path = document.location.origin + document.location.pathname + '?';
    var first = true;

    for(var key in params) {
        if(!first) {
            path = path + '&';
        }
        path = path + key + '=' + params[key];
        first = false;
    }

    document.location = path;
}

function getParams() {
    var curParams = document.location.search.substr(1).split('&');
    var hash = {};

    for(var i = 0; i < curParams.length; i++) {
        x = curParams[i].split('=');
        hash[x[0]] = x[1];
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