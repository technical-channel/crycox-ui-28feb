import Web3 from "web3";
// import { RPC } from "../Config/constant";

import { BTCBitcoinToken, EscrowAddress } from "../Config/Contract/Contract";
import { Escrow_ABI } from "../Config/ABI/Escrow_ABI";
import { Token_ABI } from "../Config/ABI/Token_ABI";
import { BUSDBep20 } from "../Config/Contract/Contract";
import { RPC } from "../Config/Constant";

const MAX_INT =
     "115792089237316195423570985008687907853269984665640564039457584007913129639935";

const getContract = (contractAddress, ABI, provider) => {
     const web3_ = new Web3(provider);
     return new web3_.eth.Contract(ABI, contractAddress);
};

// Deposite amount function
export const DepositeAmountToken = (provider, amount, contract) => {
     return getContract(EscrowAddress, Escrow_ABI, provider).methods.deposite(
          contract,
          amount
     );
};

//Approve Function
// approve
export const TokenApprove = (provider, contract) => {
     return getContract(contract, Token_ABI, provider).methods.approve(
          EscrowAddress,
          MAX_INT
     );
};

export const GetAllowance = async (provider, address, TokenContract) => {
     let allowancedata = await getContract(TokenContract, Token_ABI, provider)
          .methods.allowance(address, EscrowAddress)
          .call();
     console.log(allowancedata);
     return allowancedata;
};

export const Balance = async (provider) => {
     let data = await getContract(BUSDBep20, Token_ABI, provider)
          .methods.balanceOf("0x9ba5257DD0B8491b8282ea6a4a13B5188E2f8F00")
          .call();
     console.log(data);
     return data;
};

export const fetchUserDepositeBalance = async (
     provider,
     userAccount,
     tokenContract
) => {
     let data = await getContract(EscrowAddress, Escrow_ABI, provider)
          .methods.userBalance(userAccount, tokenContract)
          .call();
     console.log(data);
     return data;
};
