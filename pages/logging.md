# Application Logs

Debug output is provided by the [debug](https://www.npmjs.com/package/debug) module.

The supported namespaces are:

 - jagql:handler:search
 - jagql:handler:find
 - jagql:handler:create
 - jagql:handler:delete
 - jagql:handler:update
 - jagql:validation:input
 - jagql:validation:output
 - jagql:include
 - jagql:filter
 - jagql:errors
 - jagql:requestCounter


To view the debugging output, provide a comma separated list (or wildcarded via `*`) of namespaces in the `DEBUG` environment variable, for example:
```
$ DEBUG=jagql:handler:find npm test
```
```
$ DEBUG=jagql:handler:* npm test
```

## Integration with application logging

If you wish to integrate `@jagql/framework` debug output with your application's logging solution, you can override the functions that are invoked for outputting the messages for the supported namespaces by invoking the package's `debugging.__overrideDebugOutput(outputFnFactory)` function where the `outputFnFactory` parameter is a function that expects a namespace string parameter and returns an output function for the namespace.

A simple example of this functionality in action would be:

```javascript
var debugging = require("@jagql/framework/lib/debugging");

var outputFnfactory = function(namespace) {
  return function(message) {
    console.log(namespace + ">>>", message);
  }
}

debugging.__overrideDebugOutput(outputFnfactory);
```
