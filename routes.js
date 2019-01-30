const routes = require("next-routes")(); //the require statement here returns a function

// add takes two arguments (address to route to, location of component to load)
routes
  .add("/campaigns/new", "/campaigns/new")
  .add("/campaigns/:address", "/campaigns/show") //text after the colon indicates the wildcard text
  .add("/campaigns/:address/requests", "/campaigns/requests/index")
  .add("/campaigns/:address/requests/new", "/campaigns/requests/new");

module.exports = routes;
