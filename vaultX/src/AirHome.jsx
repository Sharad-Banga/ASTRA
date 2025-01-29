import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';

import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';


import { Airdrop } from './components/Airdrop';
import { Balance } from './components/Balance';

export const AirHome=()=>{

  return (
    <ConnectionProvider id="d1" endpoint={"https://api.devnet.solana.com"}>
            <div className="d1">
            
              <WalletProvider wallets={[]} autoConnect>
                <div className="d2">
                  <div className="sol">
                    <img src="https://cdn.brandfetch.io/ide0NUuTHO/theme/light/logo.svg?c=1bfwsmEH20zzEfSNTed" alt="" />

                  
                  
                  <h2> Airdrop</h2>

                  </div>
                    <WalletModalProvider>
                      
                        <div className="btn">
                          <WalletMultiButton style={{
                            backgroundColor : "red"
                          }} > Connect</WalletMultiButton>
                          <WalletDisconnectButton></WalletDisconnectButton>
                        </div>

                        <div className="bal">
                        
                          
                          <Balance></Balance>
                        
                        </div>
                      <Airdrop></Airdrop>
                    </WalletModalProvider>
                </div>
              </WalletProvider>
            </div>
      </ConnectionProvider>
    
  )
}
