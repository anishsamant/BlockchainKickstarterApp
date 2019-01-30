"use strict";

var routes = require("next-routes")(); //the require statement here returns a function

// add takes two arguments (address to route to, location of component to load)
routes.add("/campaigns/new", "/campaigns/new").add("/campaigns/:address", "/campaigns/show") //text after the colon indicates the wildcard text
.add("/campaigns/:address/requests", "/campaigns/requests/index").add("/campaigns/:address/requests/new", "/campaigns/requests/new");

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZixBLDBCQUF5Qzs7QUFFekM7QUFDQSxPQUNHLEFBREgsSUFDTyxBQURQLGtCQUN5QixBQUR6QixrQkFFRyxBQUZILElBRU8sQUFGUCx1QkFFOEIsQUFGOUIsbUJBRWlELEFBRmpEO0NBR0csQUFISCxJQUdPLEFBSFAsZ0NBR3VDLEFBSHZDLDZCQUlHLEFBSkgsSUFJTyxBQUpQLG9DQUkyQyxBQUozQzs7QUFNQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0FOSVNIL0Jsb2NrQ2hhaW5Qcm9qZWN0cy9raWNrc3RhcnRlciJ9