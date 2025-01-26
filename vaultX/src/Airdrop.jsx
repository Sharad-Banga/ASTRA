import { WalletError } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react"


export const Airdrop =()=>{

  const wallet = useWallet();
  const {connection } = useConnection();

  function sendAirdropToUser(){
    alert("airdrop begin");
    connection.requestAirdrop(wallet.publicKey ,2000000000);
    alert("airdrop done");

  }

  return(
    <>
    hi mrs {wallet.publicKey.toString()}
    <br />
    <input type="text" />
    <button onClick={sendAirdropToUser}>Send Airdrop</button>
    </>
  )
}