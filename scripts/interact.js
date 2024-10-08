require('dotenv').config();
const { ethers } = require("ethers");


// Need to learn to use .env so that I can hide api key and private key variables 
const ALCHEMY_ID = process.env.ALCHEMY_ID
const provider = new ethers.JsonRpcProvider(process.env.URL_PROVIDER_SEP)

const account1 = process.env.ACCOUNT_1
const account2 = process.env.ACCOUNT_2

const PRIVATE_KEY_1 = process.env.PRIVATE_KEY_1
const wallet = new ethers.Wallet(PRIVATE_KEY_1, provider)

const abi = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",
    "function transfer(address to, uint amount) returns (bool)",
];
const address = process.env.ADDRESS_CONTRACT_SEP
const contract = new ethers.Contract(address, abi, provider)

const main = async () => {
    const name = await contract.name()
    const symbol = await contract.symbol()
    const totalSupply = await contract.totalSupply()
    const balance1 = await contract.balanceOf(account1)
    const balance2 = await contract.balanceOf(account2)
    
    console.log(`Name: ${name}\n`)
    console.log(`Symbol: ${symbol}\n`)
    console.log(`Total Supply: ${ethers.formatEther(totalSupply)}\n`)
    console.log(`Balance1: ${ethers.formatEther(balance1)}\n`)
    console.log(`Balance2: ${ethers.formatEther(balance2)}\n`)

    const contractWallet = contract.connect(wallet)

    const tx =  await contractWallet.transfer(account2, ethers.parseEther("5"))
    await tx.wait()

    console.log(tx)

    const balance1after = await contract.balanceOf(account1)
    const balance2after = await contract.balanceOf(account2)

    console.log(`Balance1: ${ethers.formatEther(balance1after)}\n`)
    console.log(`Balance2: ${ethers.formatEther(balance2after)}\n`)

    

}

main()