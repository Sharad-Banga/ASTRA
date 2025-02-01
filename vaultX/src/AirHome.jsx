import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';

import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';

import "./App.css"
import { Airdrop } from './components/Airdrop';
import { Balance } from './components/Balance';
import { ConnectBtn } from './components/ConnectBtn';

export const AirHome=()=>{

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
                          {/* <WalletMultiButton style={{
                            backgroundColor : "red"
                          }} > Connect</WalletMultiButton> */}
                          <ConnectBtn style={{
                            Border : "1px solid blue",
                          
                          }}>
                          </ConnectBtn>

                          <WalletDisconnectButton></WalletDisconnectButton>
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
