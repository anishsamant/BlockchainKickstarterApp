"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

//{typeof window} returns an 'object' if control is on the browser and 'undefined' if control is on node server.
if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  //We are in the browser AND metamask is running
  web3 = new _web2.default(window.web3.currentProvider); //hijack the web3 version provided by metamask with our working version
} else {
  //We are on the server OR user is not running metamask
  var provider = new _web2.default.providers.HttpProvider("https://rinkeby.infura.io/v3/3d4d898804a242b98d93b36e000275fd");

  web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7OztBQUVQLElBQUksWUFBSjs7QUFFQTtBQUNBLElBQUksT0FBQSxBQUFPLFdBQVAsQUFBa0IsZUFBZSxPQUFPLE9BQVAsQUFBYyxTQUFuRCxBQUE0RDtBQUUxRDtTQUFPLEFBQUksa0JBQUssT0FBQSxBQUFPLEtBRmdELEFBRXZFLEFBQU8sQUFBcUIsaUJBRjJDLEFBQ3ZFLENBQzhDLEFBQy9DO0FBSEQsT0FHTyxBQUNMO0FBQ0E7TUFBTSxXQUFXLElBQUksY0FBQSxBQUFLLFVBQVQsQUFBbUIsYUFBcEMsQUFBaUIsQUFDZixBQUdGOztTQUFPLEFBQUksa0JBQVgsQUFBTyxBQUFTLEFBQ2pCO0FBRUQ7O2tCQUFBLEFBQWUiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9BTklTSC9CbG9ja0NoYWluUHJvamVjdHMva2lja3N0YXJ0ZXIifQ==