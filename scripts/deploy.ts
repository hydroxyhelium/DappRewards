import { ethers } from 'ethers';

const API_KEY: string = process.env.API_KEY || '';
const PRIVATE_KEY: string = process.env.PRIVATE_KEY || '';
const CONTRACT_ADDRESS: string = process.env.CONTRACT_ADDRESS || '';

async function main(): Promise<void> {
    const GiveAway = await ethers.getContractFactory('GiveAway');
    // Start deployment, returning a promise that resolves to a contract object
    const give_away = await GiveAway.deploy();   
    console.log('Contract deployed to address:', give_away.address);
}

main()
    .then(() => process.exit(0))
    .catch((error: Error) => {
        console.error(error);
        process.exit(1);
    });