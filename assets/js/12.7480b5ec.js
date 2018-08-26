(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{161:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),a("ul",[a("li",[t._v("You will find "),a("strong",[t._v("Swagger")]),t._v(" docs on "),a("a",{attrs:{href:"http://localhost:1337/swagger.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:1337/swagger.json"),a("OutboundLink")],1)]),a("li",[t._v("You will perform "),a("strong",[t._v("GET")]),t._v(", "),a("strong",[t._v("POST")]),t._v(" etc on "),a("a",{attrs:{href:"http://localhost:1337/photos",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:1337/photos"),a("OutboundLink")],1)]),a("li",[t._v("You will find "),a("strong",[t._v("GraphiQL")]),t._v(" interface on "),a("a",{attrs:{href:"http://localhost:1337",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:1337"),a("OutboundLink")],1)])]),t._m(6),t._m(7),t._m(8),a("p",[t._v("then browse to the JSON:API endpoints:")]),t._m(9),a("p",[t._v("or, for GraphQL:")]),t._m(10),a("p",[t._v("the example implementation can be found "),a("a",{attrs:{href:"https://github.com/jagql/framework/tree/master/example",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[this._v("#")]),this._v(" Getting Started")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"the-tl-dr-edition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-tl-dr-edition","aria-hidden":"true"}},[this._v("#")]),this._v(" The TL;DR; edition")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"install-the-framework"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-the-framework","aria-hidden":"true"}},[this._v("#")]),this._v(" Install the framework")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("npm install @jagql/framework\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"create-the-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-the-server","aria-hidden":"true"}},[this._v("#")]),this._v(" Create the server")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" jagql "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'@jagql/framework'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Create configuration for server")]),t._v("\njagql"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setConfig")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    port"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1337")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    graphiql"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Add a 'photos' model")]),t._v("\njagql"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("define")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// resources are named, json:api requires so")]),t._v("\n    resource"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'photos'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// Handlers can validate, modify and store data")]),t._v("\n    handlers"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("jagql"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MemoryHandler")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// attributes automatically create columns/types")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// these are self-validate-able using joi configs")]),t._v("\n    attributes"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        title"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" jsonApi"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Joi"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        url"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" jsonApi"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Joi"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("uri")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        height"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" jsonApi"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Joi"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("number")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("min")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("max")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("10000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("precision")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        width"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" jsonApi"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Joi"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("number")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("min")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("max")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("10000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("precision")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\njagql"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("start")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"show-me-a-full-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#show-me-a-full-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Show me a full example!")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Fire up an example "),s("code",[this._v("json:api")]),this._v(" server using the resources mentioned in the official spec via:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ git clone https://github.com/jagql/framework.git\n$ npm install\n$ npm start\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("http://localhost:16006/rest/photos\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("http://localhost:16006/rest/\n")])])])}],!1,null,null,null);e.options.__file="getting-started.md";s.default=e.exports}}]);