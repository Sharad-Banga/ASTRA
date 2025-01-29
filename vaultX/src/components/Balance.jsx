import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { useState } from "react";

import "./Balance.css";

export const Balance=()=>{
  
  const wallet = useWallet();
  const {connection } = useConnection();
  const [balance , setBalance] = useState();
  async function getBalance() { 
    if (wallet.publicKey) {

         let x = await connection.getBalance(wallet.publicKey);
         console.log(x);
         
         setBalance(()=>x/1000000000);
        // document.getElementById("balance").innerHTML = balance / LAMPORTS_PER_SOL;
    }
  }

getBalance();
let g = "connect wallet";
    return(

      <>
          <dev className="balOne">
            <h2>💰 Balance:&nbsp;{({balance})?balance:`{g}`} </h2>
          </dev>
      </>

    )
}