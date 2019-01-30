const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());

const compiledFactory = require("../ethereum/build/CampaignFactory.json");
const compiledCampaign = require("../ethereum/build/Campaign.json");

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  //to deploy the contract
  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: "0x" + compiledFactory.bytecode })
    .send({ from: accounts[0], gas: "1000000" });

  await factory.methods.createCampaign("100").send({
    from: accounts[0],
    gas: "1000000"
  });

  //takes first element of the returned array and stores it in the variable campaignAddress
  [campaignAddress] = await factory.methods.getDeployedCampaigns().call();

  //to load a contract at a specific address it was earlier deployed to
  campaign = await new web3.eth.Contract(
    JSON.parse(compiledCampaign.interface),
    campaignAddress
  );
});

describe("Campaigns", () => {
  it("deploys a factory and a campaign", () => {
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
  });

  it("campaign is created by the manager", async () => {
    const manager = await campaign.methods.manager().call();
    assert.equal(accounts[0], manager);
  });

  it("allows people to contribute money and marks them as contributers", async () => {
    await campaign.methods.contribute().send({
      value: "200",
      from: accounts[1]
    });
    const isContributer = campaign.methods.contributers(accounts[1]).call();
    assert(isContributer);
  });

  it("requires a minimum contribution", async () => {
    let executed;
    try {
      await campaign.methods.contribute().send({
        value: "5",
        from: accounts[1]
      });
      executed = "success";
    } catch (err) {
      executed = "fail";
    }
    assert.equal("fail", executed);
  });

  it("allows a manager to make a payment request", async () => {
    await campaign.methods
      .createRequest("Test purpose", "100", accounts[2])
      .send({
        from: accounts[0],
        gas: "1000000"
      });
    const request = await campaign.methods.requests(0).call();
    assert.equal("Test purpose", request.description);
  });

  //complete test
  //accounts[0] => manager
  //accounts[1] => contributer
  //accounts[2] => recipient
  it("complete test", async () => {
    await campaign.methods.contribute().send({
      from: accounts[1],
      value: web3.utils.toWei("10", "ether")
    });

    await campaign.methods
      .createRequest(
        "Test request",
        web3.utils.toWei("5", "ether"),
        accounts[2]
      )
      .send({
        from: accounts[0],
        gas: "1000000"
      });

    await campaign.methods.approveRequest(0).send({
      from: accounts[1],
      gas: "1000000"
    });

    await campaign.methods.finalizeRequest(0).send({
      from: accounts[0],
      gas: "1000000"
    });

    let balance = await web3.eth.getBalance(accounts[2]); //to get current balance from specified account
    balance = web3.utils.fromWei(balance, "ether");
    balance = parseFloat(balance); //converts string to float
    console.log(balance);
    assert(balance > 103);
  });
});
