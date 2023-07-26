const hre = require("hardhat");
const NFTJson = require("../artifacts/contracts/NFTCollection1.sol/MyNFT.json")

const NFtAddress ="0xf4cD33cf6031CdC652d3E4e70C38e54d47262dae";
const ContractABI = NFTJson.abi
const walletAddress="0xbeef9793B6e44Cd1f5c85e2579c6Fb0C22004E76";

async function main(){
    const Contract = await hre.ethers.getContractAt(ContractABI,NFtAddress);
    console.log("You have "+await Contract.balanceOf(walletAddress)+" NFTs")
}
main((error)=>{
    console.log(error);
    process.exitCode=1;
})