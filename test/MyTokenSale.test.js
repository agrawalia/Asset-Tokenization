const TokenSale = artifacts.require("MyTokenSale");
require("dotenv").config({path : "../.env"});
var chai = require("chai");
const BN = web3.utils.BN;
const chaiBN = require("chai-bn")(BN);
chai.use(chaiBN);
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;

contract ("TokenSale Test", async(accounts) =>{
    const [deployerAccount, recipient, anotherAccount] = accounts;
});