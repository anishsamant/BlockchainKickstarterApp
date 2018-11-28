const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "fly trust laugh steel real update symbol neither witness add cruise oil",
  "https://rinkeby.infura.io/v3/3d4d898804a242b98d93b36e000275fd"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Attempting to deploy from account ", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: "0x" + compiledFactory.bytecode })
    .send({ from: accounts[0], gas: "1000000" });

  console.log("Contract deployed to ", result.options.address);
  //address stored in the ADDRESS file
};

deploy();
