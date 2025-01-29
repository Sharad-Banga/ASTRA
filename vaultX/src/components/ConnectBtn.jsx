import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';

import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';

import './ConnectBtn.css';

import { Airdrop } from './Airdrop';
import { Balance } from './Balance';

export const ConnectBtn=()=>{

  return (
    <ConnectionProvider id="d1" endpoint={"https://api.devnet.solana.com"}>
           
            
              <WalletProvider wallets={[]} autoConnect>
                
                  

                 
                    <WalletModalProvider>
                      
                        
                          <WalletMultiButton 
                          style={{
                            color: "transparent",
                            height: "35px",
                            padding: "10px",
                            border: "1px solid",

                            backgroundImage: "linear-gradient(to right, #9945FF, #14F195, #14F195)",
                            backgroundClip: "text",
                            backgroundColor: "black",
                            width:"180px"

                          }}
                          > Connect Wallet</WalletMultiButton>
                        

                        
                    </WalletModalProvider>
                
              </WalletProvider>
            
      </ConnectionProvider>
    
  )
}