Parameterable
=============

This Javascript file includes functions for easily editing the parameters in the URL. After the url is modified
the page will reload.


Setting all parameters
----------------------

``` javascript
setParams({first: "value1", second: [1,4,7], third: 3});
var url = document.location.search; // url = "?first=value1&second%5B0%5D=1&second%5B1%5D=4&second%5B2%5D=7&third=3"
```

Getting all parameters
----------------------

``` javascript
var hash = getParams(); // hash = {first: "value1", second: Array[3], third: "3"}
```

Updating parameters
-------------------

Passing parameters which are already in the url, will be updated. New parameters will be added.

``` javascript
updateParams({first: "value2", fourth: "whatever"});
var url = document.location.search; // url = "?first=value2&second%5B0%5D=1&second%5B1%5D=4&second%5B2%5D=7&third=3&fourth=whatever"
var hash = getParams(); // hash = {first: "value2", second: Array[3], third: "3", fourth: "whatever"}
```

Removing parameters
-------------------

Remove multiple parameters using the removeParams(keys) function.

``` javascript
var hash = getParams(); // hash = {first: "value1", second: Array[3], third: "3"}
removeParams(["first","second"]);
var hash = getParams(); // hash = {third: "3"}
```

You can also choose to remove only a single parameter.

``` javascript
var hash = getParams(); // hash = {first: "value1", second: Array[3], third: "3"}
removeParam("first");
var hash = getParams(); // hash = {second: Array[3], third: "3"}
```
