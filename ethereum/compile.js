const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

const buildPath = path.resolve(__dirname, "build"); //get the path to specified(build) directory
fs.removeSync(buildPath); //delete the specified(build) directory

const campaignPath = path.resolve(__dirname, "contracts", "Campaign.sol");
const source = fs.readFileSync(campaignPath, "utf8"); //read the contents of specified path
const output = solc.compile(source, 1).contracts; //compile the specified sol file

fs.ensureDirSync(buildPath); //creates the specified(build) directory if it doesnt exist.

//console.log(output);
for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(":", "") + ".json"),
    output[contract]
  ); //output the content from compiled contract into the specified path
}
