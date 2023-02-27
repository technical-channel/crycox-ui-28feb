// import { ethers } from "ethers";

// const provider = new ethers.providers.Web3Provider(window.ethereum);

// // MetaMask requires requesting permission to connect users accounts
// await provider.send("eth_requestAccounts", []);

// // The MetaMask plugin also allows signing transactions to
// // send ether and pay to change state within the blockchain.
// // For this, you need the account signer...
// const signer = provider.getSigner();

// import React from "react";

// const Signer = () => {
//   const [logged, setLogged] = useState(false);
//   const [account, setAccount] = useState(null);
//   const [balance, setBalance] = useState();
//   const { utils } = require("ethers");
//   const handleLogin = () => {
//     if (window.ethereum && window.ethereum.isMetaMask) {
//       window.ethereum
//         .request({ method: "eth_requestAccounts" })
//         .then((result) => {
//           console.log(result);
//           setLogged(true);
//           setAccount(utils.getAddress(result[0]));
//         })
//         .catch((error) => {
//           console.log("Could not detect Account");
//         });
//     }
//   };

//   const hnadleLogout = () => {
//     setLogged(false);
//     setAccount(null);
//   };

//   const handleBalance = () => {
//     window.ethereum
//       .request({ method: "eth_getBalance", params: [account, "latest"] })
//       .then((balance) => {
//         setBalance(ethers.utils.formatEther(balance));
//       })
//       .catch((error) => {
//         console.log("Could not detect the Balance");
//       });
//   };
//   return <div>Signer</div>;
// };

// export default Signer;
