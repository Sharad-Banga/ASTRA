import { WalletError } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react"

import loggo from "../assets/solanaLogoMark.png"

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
    <>
    <div className="air">
        <input placeholder="0.00" id="input" type="text" />
          <div className="soll">
              <div className="imgg">
                <img src={loggo}/>
              </div>
            <h3>&nbsp; SOL</h3>
          </div>
    </div>

    <div className="air1">
      <button onClick={sendAirdropToUser}>Request Airdrop</button>
    </div>
    
    </>
  )
}