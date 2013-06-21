Paramable
=============

This implements a urlParams javascript object which easily edits the parameters in the current URL. After the URL is modified
the page will reload.


Setting all parameters
----------------------

This will replace all parameters with what is passed in the hash.

``` javascript
urlParams.set({first: "value1", second: [1,4,7], third: 3});
var s = document.location.search; // s = "?first=value1&second%5B0%5D=1&second%5B1%5D=4&second%5B2%5D=7&third=3"
```

Getting all parameters
----------------------

``` javascript
var hash = urlParams.list(); // hash = {first: "value1", second: Array[3], third: "3"}
var secondParameter = hash["second"]; // secondParameter = ["1", "4", "7"]
```

Updating parameters
-------------------

Passing parameters which are already in the url, will be updated. New parameters will be added.

``` javascript
urlParams.update({first: "value2", fourth: "whatever"});
var s = document.location.search; // s = "?first=value2&second%5B0%5D=1&second%5B1%5D=4&second%5B2%5D=7&third=3&fourth=whatever"
var hash = urlParams.list(); // hash = {first: "value2", second: Array[3], third: "3", fourth: "whatever"}
```

Removing parameters
-------------------

Remove multiple parameters by passing in an array of keys.

``` javascript
var hash = urlParams.list(); // hash = {first: "value1", second: Array[3], third: "3"}
urlParams.remove(["first","second"]);
var hash = urlParams.list(); // hash = {third: "3"}
```

Or remove only a single parameter by passing in only a single key.

``` javascript
var hash = urlParams.list(); // hash = {first: "value1", second: Array[3], third: "3"}
urlParams.remove("first");
var hash = urlParams.list(); // hash = {second: Array[3], third: "3"}
```

Dependencies
------------

The only dependency is JQuery.
