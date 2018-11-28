import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

//get the instance of CampaignFactory deployed at the specified address
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  0x39247314a84984fc940be98c8ef17d3224e8d6b0
);

export default instance;
