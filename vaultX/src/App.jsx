
import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';

import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';


// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import './App.css'

import { Airdrop } from './components/Airdrop';
import { Balance } from './components/Balance';
function App() {
  // const endpoint = import.meta.env.VITE_ENDPOINT;

  return (
    <div className="body">
      <div className="nav">
        <h1>vaultX</h1>
        <a href="/">Home</a>
      </div>
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
                          <WalletMultiButton/>
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
    </div>
  )
}

export default App
