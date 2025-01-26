import { WalletError } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react"

import './Airdrop.css'
export const Airdrop =()=>{

  const wallet = useWallet();
  const {connection } = useConnection();
  // const connection = new Connection("https://api.devnet.solana.com");


  function sendAirdropToUser(){
    let j = document.getElementById("input").value;

    alert("airdrop begin",j);
    console.log("huu",j);
    
    connection.requestAirdrop(wallet.publicKey ,j*1000000000);
    alert("airdrop done");

  }

  return(
    
    <div className="air">
   
    <span>Request Airdrop</span>
    
    <input placeholder=" &nbsp;Enter SOL" id="input" type="text" />
    <button onClick={sendAirdropToUser}>Send Airdrop</button>
    </div>
  )
}