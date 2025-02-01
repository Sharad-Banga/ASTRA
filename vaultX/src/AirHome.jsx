import { ConnectionProvider, WalletProvider  } from '@solana/wallet-adapter-react';

import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';

import "./App.css"
import { Airdrop } from './components/Airdrop';
import { Balance } from './components/Balance';

export const AirHome=()=>{


  const  handleDisconnect =  () => {
    setTimeout(()=>{
    window.location.reload();
      
    },10)
  };

  return (
    <ConnectionProvider id="d1" endpoint={"https://api.devnet.solana.com"}>

            <div className="d1">
            

             
              <WalletProvider wallets={[]} autoConnect>
              <Balance></Balance>
                <div className="d2">
                  <div className="sol">
                  
                  <h2> ✈︎ &nbsp; Get your Airdrop</h2>

                  </div>
                  <Airdrop></Airdrop>
                    <WalletModalProvider>
                        <div className="btn">
                          <WalletMultiButton
                          
                          
                          
                          style={{
                            backgroundColor : "black",
                            color:"white",
                            width:"170px",
                            height:"51px",
                            border:"1px solid black",
                            boxShadow:"0 0 4px #1c1d1d",
                            display : "flex",
                            justifyContent:"center"
                          }} > Connect</WalletMultiButton>
                          {/* <ConnectBtn style={{
                            Border : "1px solid blue",
                          
                          }}>
                          </ConnectBtn > */}

                          <WalletDisconnectButton style={{
                            backgroundColor:"black",
                            height:"51px",
                            
                            border:"2px solid  black",
                            boxShadow:"0 0 4px #1c1d1d",
                          
                          }}
                          onClick={handleDisconnect}
                          ></WalletDisconnectButton>
                        </div>
                          <div className="bal">
                        </div>
                        
                    </WalletModalProvider>
                  </div>


              </WalletProvider>
              </div>

            
      </ConnectionProvider>
    
  )
}
