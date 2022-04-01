import { ethers } from "ethers";
import secure from "./secure.json";
import target from "./target.json";

const provider = new ethers.providers.JsonRpcProvider(`https://polygon-mainnet.infura.io/v3/${secure.infura}`);
const wallet = new ethers.Wallet(secure.key, provider);

(async () => {
    let on = false;
    for (const data of target) {
        if (data.address === "0xc05c126b633a4ef7f4be82bf39ac52078f9eb7ec") {
            on = true;
        } else if (on === true) {
            console.log(`Sending MATIC to ${data.address} ...`);
            const run = async () => {
                try {
                    await wallet.sendTransaction({
                        to: data.address,
                        value: ethers.utils.parseEther("1"),
                    });
                } catch (error) {
                    console.log(error, "Retry");
                    await run();
                }
            };
            await run();
            console.log(`Sended MATIC to ${data.address}`);
        }
    }
})();