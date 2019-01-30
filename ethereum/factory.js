import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

//get the instance of CampaignFactory deployed at the specified address
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "enter the address of CampaignFactory deployed contract here"
);

export default instance;
