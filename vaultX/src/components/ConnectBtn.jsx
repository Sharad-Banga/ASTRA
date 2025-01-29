import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';

import {
    WalletModalProvider
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