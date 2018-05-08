# Getting Started

## The TL;DR; edition

### Install the framework

```
npm install @jagql/framework
```

### Create the server

```javascript
const jagql = require('@jagql/framework')

// Create configuration for server
jagql.setConfig({
    port: 1337,
    graphiql: true
})

// Add a 'photos' model
jagql.define({
    // resources are named, json:api requires so
    resource: 'photos',
    // Handlers can validate, modify and store data
    handlers: new jagql.MemoryHandler(),
    // attributes automatically create columns/types
    // these are self-validate-able using joi configs
    attributes: {
        title: jsonApi.Joi.string(),
        url: jsonApi.Joi.string().uri(),
        height: jsonApi.Joi.number().min(1).max(10000).precision(0),
        width: jsonApi.Joi.number().min(1).max(10000).precision(0)
    }
})

jagql.start()
```

 - You will find **Swagger** docs on <http://localhost:1337/swagger.json>  
 - You will perform **GET**, **POST** etc on <http://localhost:1337/photos>  
 - You will find **GraphiQL** interface on <http://localhost:1337>  



### Show me a full example!

Fire up an example `json:api` server using the resources mentioned in the official spec via:
```
$ git clone https://github.com/jagql/framework.git
$ npm install
$ npm start
```
then browse to the JSON:API endpoints:
```
http://localhost:16006/rest/photos
```
or, for GraphQL:
```
http://localhost:16006/rest/
```
the example implementation can be found [here](https://github.com/jagql/framework/tree/master/example)