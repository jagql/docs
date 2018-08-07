
# Configuration

## Setting the configuration

```javascript
jagql.setConfig({
  // (optional): An express Router to bind to instead of building a new Express server
  router: null, // result of `express.Router()`
  // (optional) An alias of the absolute portion of URLs generated in a response file
  // eg http://localhost:16006/some-resource/ -> https://www.example.com/my-api/some-resource/
  urlPrefixAlias: "https://www.example.com/my-api/",
  // (optional) HTTP / HTTPS
  protocol: "http",
  // (optional) The hostname the API will be sat behind, from the customer's perspective
  hostname: "localhost",
  // (required) The port the customer will be using (OPTIONAL)
  port: 16006,
  // (optional) Define a url prefix for the apiConfig
  // eg http://-----/rest/
  base: "rest",
  // (optional) meta block to appear in the root of every response
  meta: {
    copyright: "Blah"
  },
  // Should the interactive GraphQL HTTP interface be served up?
  graphiql: true,
  // (optional) meta can be a function to be invoked at the end of every request
  meta: function(request) {
    return { timestamp: new Date() };
  },
  // (optional) bodyParserJsonOpts allows setting the options passed to the json body parser,
  // such as the maximum allowed body size (default is 100kb). All the options are
  // documented at https://github.com/expressjs/body-parser#bodyparserjsonoptions
  bodyParserJsonOpts: {
    limit: '256kb',
  }
});
```

## Configuring HTTPS

To run over HTTPS, set the protocol to _https_ and configure the appropriate TLS settings

For example:

```javascript
var fs = require("fs");
jagql.setConfig({
  protocol: "https",
  port: 16006,
  tls: {
    cert: fs.readFileSync('server.crt'),
    key: fs.readFileSync('server.key')
    passphrase: 'pass'
  }
});
```
or

```javascript
var fs = require("fs");
jagql.setConfig({
  protocol: "https",
  port: 16006,
  tls: {
    pfx: fs.readFileSync('server.pfx'),
    passphrase: 'pass'
  }
});
```

For a full set of tls options, see https://nodejs.org/api/tls.html#tls_tls_createserver_options_secureconnectionlistener

## Error Handling

```javascript
jagql.onUncaughtException(function(request, error) {
  // log the error somewhere
});
```

## Basic Authentication

```javascript
// This function will be invoked on every request, as soon as the HTTP
// request has been parsed into a "request" object.
jagql.authenticate(function(request, callback) {
  // If you callback with an error, the client will receive a HTTP 401 Unauthorised
  if (request.headers.blockme) return callback("Fail");

  // If you callback with no error, the request will continue onwards
  return callback();
});
```

## Starting @jagql/framework

Note: You should only start the server once you've called `setConfig` as per the example above. Resources can be defined before OR after the server has been started.

```javascript
jagql.start();
```

## Stopping @jagql/framework

To gracefully shutdown the service, you can call `.close()`. This will inform all handlers that the server is shutting down, they'll have an opportunity to close any open files or connections, then the HTTP server will stop listening.

```javascript
jagql.close();
```

## Access internal Express server

Whilst interfering with the routing layer of @jagql/framework is not recommended (any modifications you make will go against the specification) I can appreciate the needs of businesses and the need to get stuff done. There is therefore an accessor to enable a consumer of @jagql/framework to inject their own custom routes / middleware BEFORE the json:api routes and middleware are applied.

```javascript
const app = jagql.getExpressServer();
app.use(someMiddleware);
jagql.start() // this line applies the json:api routing and starts the service
```

You can use the usual Express `listen` method as well

```js
const app = jagql.getExpressServer();
app.use(someMiddleware);
app.listen(PORT, () => console.log('Server started'))
```
