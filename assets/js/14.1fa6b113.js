(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{159:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"handlers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#handlers","aria-hidden":"true"}},[t._v("#")]),t._v(" Handlers")]),e("h3",{attrs:{id:"creating-custom-handlers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-custom-handlers","aria-hidden":"true"}},[t._v("#")]),t._v(" Creating Custom Handlers")]),e("p",[t._v("Handlers represent the mechanism that backs a resource. Each handler is an object expected to provide:")]),e("ul",[e("li",[t._v("a constructor with an option parameter that can be used to inject any required handler specific configuration.")]),e("li",[t._v("a "),e("code",[t._v("ready")]),t._v(" property indicating the handler is ready to process requests.")]),e("li",[t._v("some of the following methods:")]),e("li",[e("code",[t._v("initialise")]),t._v(" - when @jagql/framework loads, this is invoked once for every resource using this handler. Its an opportunity to allocate memory, connect to databases, etc.")]),e("li",[e("code",[t._v("close")]),t._v(" - for cleaning up upon "),e("code",[t._v("jagql.close()")]),t._v(" (optional)")]),e("li",[e("code",[t._v("search")]),t._v(" - for searching for resources that match some vague parameters.")]),e("li",[e("code",[t._v("find")]),t._v(" - for finding a specific resource by id.")]),e("li",[e("code",[t._v("create")]),t._v(" - for creating a new instance of a resource.")]),e("li",[e("code",[t._v("delete")]),t._v(" - for deleting an existing resource.")]),e("li",[e("code",[t._v("update")]),t._v(" - for updating an existing resource.")])]),e("p",[t._v("Failure to provide the above handler functions will result in "),e("code",[t._v("EFORBIDDEN")]),t._v(" HTTP errors if the corresponding REST routes are requested.")]),e("h4",{attrs:{id:"the-rawresource-format"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-rawresource-format","aria-hidden":"true"}},[t._v("#")]),t._v(" The "),e("code",[t._v("rawResource")]),t._v(" Format")]),e("p",[t._v("All data stored behind handlers should be stored in a developer-friendly format with both attributes and relations mingled together:")]),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  id"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"aab14844-97e7-401c-98c8-0bd5ec922d93"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  type"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"photos"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  title"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Matrix Code"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  url"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"http://www.example.com/foobar"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  photographer"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"people"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"ad3aa89e-9c5b-4ac9-a652-6670f9f27587"')]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("In the above example the "),e("code",[t._v("photographer")]),t._v(" attribute is defined as relation to a resource of type "),e("code",[t._v("people")]),t._v(". @jagql/framework will deal with shuffling around and separating those attributes and relations when it needs to. Keep It Simple.")]),e("h4",{attrs:{id:"the-request-format"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-request-format","aria-hidden":"true"}},[t._v("#")]),t._v(" The "),e("code",[t._v("request")]),t._v(" Format")]),e("p",[t._v("All requests are presented to handlers in the following format:")]),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  params"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token comment"}},[t._v("// All request parameters get combined into this object. Query params, body params, etc.")]),t._v("\n    foo"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"bar"')]),t._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  headers"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token comment"}},[t._v("// All HTTP request headers")]),t._v("\n    host"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"localhost:16006"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    connection"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"keep-alive"')]),t._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  express"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    req"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token comment"}},[t._v("// Express req and res objects")]),t._v("\n    res\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  route"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token comment"}},[t._v("// Routing information")]),t._v("\n    host"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"localhost:16006"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    path"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"/v1/swagger.json"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    query"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"foo=bar&baz=1"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    combined"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"https://localhost:16006/v1/swagger.json"')]),t._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h4",{attrs:{id:"the-error-format"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-error-format","aria-hidden":"true"}},[t._v("#")]),t._v(" The "),e("code",[t._v("error")]),t._v(" Format")]),e("p",[t._v("All errors should be provided in the following format:")]),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{attrs:{class:"token comment"}},[t._v("// The desired HTTP code")]),t._v("\n  status"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"404"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{attrs:{class:"token comment"}},[t._v("// A very short identifier for this error")]),t._v("\n  code"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"ENOTFOUND"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{attrs:{class:"token comment"}},[t._v("// A short human readable description")]),t._v("\n  title"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Requested resource does not exist"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{attrs:{class:"token comment"}},[t._v("// Some detail to assist debugging")]),t._v("\n  detail"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"There is no "')]),e("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("request"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),e("span",{attrs:{class:"token operator"}},[t._v("+")]),e("span",{attrs:{class:"token string"}},[t._v('" with id "')]),e("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("request"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h4",{attrs:{id:"constructor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#constructor","aria-hidden":"true"}},[t._v("#")]),t._v(" constructor")]),e("p",[t._v("The handler object constructor can, depending on the handler's requirements, expect a object parameter which will contain any properties required for configuring the handler. For example if the handler uses a database for persistence the configuration object will contain the properties required to connect to the database.")]),e("h4",{attrs:{id:"ready"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ready","aria-hidden":"true"}},[t._v("#")]),t._v(" ready")]),e("p",[t._v("The "),e("code",[t._v("ready")]),t._v(" property should be set to a "),e("em",[t._v("truthy")]),t._v(" value once the handler is ready to process requests (which will usually happen at the end of "),e("code",[t._v("initialise")]),t._v("). If the handler is temporarily unable to process requests this property should be set to a "),e("em",[t._v("falsy")]),t._v(" value during the down period.")]),e("h4",{attrs:{id:"handles-sort-filter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#handles-sort-filter","aria-hidden":"true"}},[t._v("#")]),t._v(" handles<Sort|Filter>")]),e("p",[t._v("Some post-process steps can be handled within the handler itself.  For instance, some handlers may be capable of\nreturning data that is already sorted in the correct order.  If the "),e("code",[t._v("handlesSort")]),t._v(" or "),e("code",[t._v("handlesFilter")]),t._v(" property is set to\na "),e("em",[t._v("truthy")]),t._v(" value on the custom handler instance, then the corresponding post-processing step will be skipped.")]),e("p",[t._v("The following flags can be set:")]),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  handlesSort"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token boolean"}},[t._v("true")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token comment"}},[t._v("// skips the 'sort' post process step")]),t._v("\n  handlesFilter"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token boolean"}},[t._v("true")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token comment"}},[t._v("// skips the 'filter' post process step")]),t._v("\n  "),e("span",{attrs:{class:"token comment"}},[t._v("// . . .")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h4",{attrs:{id:"initialise"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#initialise","aria-hidden":"true"}},[t._v("#")]),t._v(" initialise")]),e("p",[e("code",[t._v("initialise")]),t._v(" is invoked with the "),e("code",[t._v("resourceConfig")]),t._v(" of each resource using this handler.")]),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("function")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resourceConfig"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[e("code",[t._v("resourceConfig")]),t._v(" is the complete configuration object passed in to "),e("code",[t._v("jagql.define()")]),t._v(".")]),e("h4",{attrs:{id:"close"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#close","aria-hidden":"true"}},[t._v("#")]),t._v(" close")]),e("p",[e("code",[t._v("close")]),t._v(" is invoked without any parameters, when "),e("code",[t._v("jagql.close()")]),t._v(" is called.\nIt should close database connections, file handles, timers, event listeners, etc, as though "),e("code",[t._v("initialise")]),t._v(" were never called.")]),e("h4",{attrs:{id:"search"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#search","aria-hidden":"true"}},[t._v("#")]),t._v(" search")]),e("p",[e("code",[t._v("search")]),t._v(" is invoked with a "),e("code",[t._v("request")]),t._v(" object (see above).")]),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("function")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("the "),e("code",[t._v("callback")]),t._v(" should be invoked with with an "),e("code",[t._v("error")]),t._v(" or "),e("code",[t._v("null, [ rawResource ], count")]),t._v(".")]),e("p",[e("code",[t._v("search")]),t._v(" needs to watch for any "),e("code",[t._v("request.params.relationships")]),t._v(" parameters, they represent foreign key lookups. An example of this:")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('request.params.relationships = {\n  user: "ad3aa89e-9c5b-4ac9-a652-6670f9f27587"\n}\n')])])]),e("p",[t._v('translates to "Find me all of the resources whose user attribute is a link to a resource with id == ad3aa89e-9c5b-4ac9-a652-6670f9f27587".')]),e("h4",{attrs:{id:"find"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#find","aria-hidden":"true"}},[t._v("#")]),t._v(" find")]),e("p",[e("code",[t._v("find")]),t._v(" is invoked with a "),e("code",[t._v("request")]),t._v(" object (see above).")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("function(request, callback) { };\n")])])]),e("p",[t._v("the "),e("code",[t._v("callback")]),t._v(" should be invoked with with an "),e("code",[t._v("error")]),t._v(" or "),e("code",[t._v("null, rawResource")]),t._v(".")]),e("h4",{attrs:{id:"create"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create","aria-hidden":"true"}},[t._v("#")]),t._v(" create")]),e("p",[e("code",[t._v("create")]),t._v(" is invoked with a "),e("code",[t._v("request")]),t._v(" object (see above) AND a "),e("code",[t._v("newResource")]),t._v(" object which is an instance of "),e("code",[t._v("rawResource")]),t._v(" representing a validated instance of type "),e("code",[t._v("request.params.type")]),t._v(". The "),e("code",[t._v("newResource")]),t._v(" will already have an "),e("code",[t._v("id")]),t._v(" and is ready to be stored as per the resource definition.")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("function(request, newResource, callback) { };\n")])])]),e("p",[t._v("the "),e("code",[t._v("callback")]),t._v(" should be invoked with with an "),e("code",[t._v("error")]),t._v(" or "),e("code",[t._v("null, newResource")]),t._v(".")]),e("h4",{attrs:{id:"delete"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#delete","aria-hidden":"true"}},[t._v("#")]),t._v(" delete")]),e("p",[e("code",[t._v("delete")]),t._v(" is invoked with a "),e("code",[t._v("request")]),t._v(" object (see above). It should delete the resource of type "),e("code",[t._v("request.params.type")]),t._v(" and id "),e("code",[t._v("request.params.id")]),t._v(".")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("function(request, callback) { };\n")])])]),e("p",[t._v("the "),e("code",[t._v("callback")]),t._v(" should be invoked with with an "),e("code",[t._v("error")]),t._v(" or "),e("code",[t._v("null")]),t._v(".")]),e("h4",{attrs:{id:"update"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#update","aria-hidden":"true"}},[t._v("#")]),t._v(" update")]),e("p",[e("code",[t._v("update")]),t._v(" is invoked with a "),e("code",[t._v("request")]),t._v(" object (see above) and a "),e("code",[t._v("partialResource")]),t._v(" which represents a partial instance of "),e("code",[t._v("rawResource")]),t._v(" - the properties of "),e("code",[t._v("rawResource")]),t._v(" need to be merged over the original resource and saved.")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("function(request, partialResource, callback) { };\n")])])]),e("p",[t._v("the "),e("code",[t._v("callback")]),t._v(" should be invoked with with an "),e("code",[t._v("error")]),t._v(" or "),e("code",[t._v("null, newUpdatedResource")]),t._v(".")])])}],!1,null,null,null);n.options.__file="handlers.md";a.default=n.exports}}]);