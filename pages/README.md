# Introduction

## About

A config driven NodeJS framework implementing [`json:api`](http://jsonapi.org/) and [`GraphQL`](http://graphql.org/). You define the resources, it provides the api.


### Motivation / Justification / Rationale

This framework solves the challenges of json:api and GraphQL without coupling us to any one ORM solution. Every other module out there is either tightly coupled to a database implementation, tracking an old version of the json:api spec, or is merely a helper library for a small feature. If you're building an API and your use case only involves reading and writing to a data store... well count yourself lucky. For everyone else, this framework provides the flexibility to provide a complex API without being confined to any one technology.

A config driven approach to building an API enables:

* Enforced json:api responses
* Automatic GraphQL schema generation
* Request validation
* Payload validation
* Automatic documentation generation
* Automatic inclusions
* Automatic routing
* Automatic handling of relationships

Ultimately, the only things you as a user of this framework need to care about are:

* What are my resources called
* What properties do my resources have
* For each resource, implement a `handler` for:
  * `delete`ing a resource
  * `search`ing for many resources
  * `find`ing a specific resource
  * `create`ing a resource
  * `update`ing a specific resource

We've created `handler`s to automatically map our config over to database solutions help people get off the ground:
 * [jsonapi-store-memoryhandler](https://github.com/holidayextras/jsonapi-server/blob/master/lib/MemoryHandler.js) - an in-memory data store to enable rapid prototyping. This ships as a part of `jsonapi-server` and powers the core test suite.
 * [jsonapi-handler-chain](https://github.com/holidayextras/jsonapi-server/blob/master/lib/ChainHandler.js) - a handler to chain custom behaviour around an existing handler. This ships as a part of `jsonapi-server`. More info can be found [here](https://github.com/holidayextras/jsonapi-server/blob/master/docs/guides/chain-handler.md)
 * [jsonapi-store-relationaldb](https://github.com/holidayextras/jsonapi-store-relationaldb) - using `sequelize` to support PostgreSQL, MySQL, MSSQL, MariaDB and SQLite.
 * [jsonapi-store-mongodb](https://github.com/holidayextras/jsonapi-store-mongodb) - for MongoDB.
 * [jsonapi-store-elasticsearch](https://github.com/holidayextras/jsonapi-store-elasticsearch) - for Elasticsearch.
 * [jsonapi-store-dynamodb](https://github.com/holidayextras/jsonapi-server/compare/dynamodb?expand=1) - *!SIGNIFICANT WIP!* for AWS DynamoDB.

We've also written a library to ease the consumption of a json:api compliant service, if GraphQL isn't your thing:
 * [jsonapi-client](https://github.com/holidayextras/jsonapi-client) - for NodeJS and Browsers

