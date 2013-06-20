// Parameterable
// Aidan Wolter
// Kalkomey Enterprises, Inc.

(function() {
    var urlParams = {
        set: function(params) {
            if($.isEmptyObject(params)) {
                document.location.href = window.location.href.split('?')[0];
            }
            else {
                document.location.search = $.param(params);
            }
        },

        list: function() {
            var curParams = document.location.search.substr(1).split('&');
            var hash = {};

            for(var i = 0; i < curParams.length; i++) {
                x = curParams[i].split('=');

                //check if key is an array
                var arrayRegex = /%5B\d?%5D/;
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
        },

        update: function(params) {
            var curParams = this.list();
            if(document.location.search.length <= 0) {
                this.set(params);
            }
            else {
                var hash = $.extend(curParams,params);
                this.set(hash);
            }
        },

        remove: function(keys) {
            if(keys instanceof Array) {
                var curParams = this.list();

                for(var i = 0;i < keys.length; i++) {
                    delete curParams[keys[i]];
                }
                this.set(curParams);
            }
            else {
                var hash = this.list();
                delete hash[keys];
                this.set(hash);
            }
        }
    };

    window.urlParams = urlParams;
})();
