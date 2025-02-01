import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { useState } from 'react';

import {
    WalletModalProvider,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';

import "./Connectbtn.css";


export const ConnectBtn=()=>{



  return (
    <ConnectionProvider id="d1" endpoint={"https://api.devnet.solana.com"}>
           
            
              <WalletProvider wallets={[]} autoConnect>
                
                  

                 
                    <WalletModalProvider>
                      
                        
                          <WalletMultiButton 
                          style={{
                            color: "transparent",
                            padding: "10px",
                            borderRadius:"7px",

                            backgroundImage: "linear-gradient(to right, #9945FF, #14F195, #14F195)",
                            backgroundClip: "text",
                            backgroundColor: "black",
                            width:"180px",
                            height:"40px"
                            
                          }}

                          onClick={()=>{
                            ss();
                            
                          }}
                          > Connect Wallet</WalletMultiButton>
                        

                        
                    </WalletModalProvider>
                
              </WalletProvider>
            
      </ConnectionProvider>
    
  )
}