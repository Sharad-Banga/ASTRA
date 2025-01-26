import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { useState } from "react";


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

    return(

      <>
          <h2>Balance : </h2>{balance}
      </>

    )
}