const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

async function main() {
    const GiveAway = await ethers.getContractFactory("GiveAway");
    // Start deployment, returning a promise that resolves to a contract object
    const give_away = await GiveAway.deploy();   
    console.log("Contract deployed to address:", give_away.address);
}
 
main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});