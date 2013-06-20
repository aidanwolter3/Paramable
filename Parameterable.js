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

    //get all the current parameter objects and store in array
	// curParams = document.location.search.substr(1).split('&');
 //    hash = {};
	
 //    for(int i = 0; i < curParams.length; i++) {
 //        x = curParams[i].split('=');
 //        hash[x[0]] = x[1];
 //    }

    path = document.location.origin + document.location.pathname + '?';
    var first = true;
    for(var key in params) {
        if(!first) {
            path = path + '&';
        }
        path = path + key + '=' + params[key];
        first = false;
    }
}