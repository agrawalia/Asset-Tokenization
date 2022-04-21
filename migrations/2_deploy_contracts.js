var MyToken = artifacts.require("MyToken");
var MyTokenSale = artifacts.require("MyTokenSale"); 
require("dotenv").config({path : "../.env"});

module.exports = async function (deployer){
    let addr = web3.eth.getAccounts();
    //address add = addr[0];
    await deployer.deploy(MyToken, process.env.INITIAL_TOKENS);
    await deployer.deploy(MyTokenSale, 1,  getAccount(), MyToken.address);
    let instance = await MyToken.deployed();
    await instance.transfer(MyTokenSale.address, process.env.INITIAL_TOKENS);
}
 const getAccount = async () => {
        try {
            const web3 = await getWeb3();
            const accountAddress = await web3.eth.getAccounts()
            return accountAddress[0]
        }
        catch (err) {
            console.log("error", err)
        }
    }