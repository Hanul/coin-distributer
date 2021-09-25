import { ethers } from "ethers";
import secure from "./secure.json";

const provider = new ethers.providers.JsonRpcProvider(`https://polygon-mainnet.infura.io/v3/${secure.infura}`);
const wallet = new ethers.Wallet(secure.key, provider);

(async () => {
    //const addresses: string[] = [];
    //for (const data of target) {
    //    addresses.push(data.address);
    //}
    //console.log(addresses.length);

    const address = "0x67aaB54e9F81d35B2d9Ad7Bc3b6505095618aeB0";
    console.log(`Sending MATIC to ${address} ...`);
    await wallet.sendTransaction({
        to: address,
        value: ethers.utils.parseEther("1"),
    });
})();