import Web3 from "web3";

let web3;

//{typeof window} returns an 'object' if control is on the browser and 'undefined' if control is on node server.
if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  //We are in the browser AND metamask is running
  web3 = new Web3(window.web3.currentProvider); //hijack the web3 version provided by metamask with our working version
} else {
  //We are on the server OR user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/3d4d898804a242b98d93b36e000275fd"
  );

  web3 = new Web3(provider);
}

export default web3;
