
import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';

import {
    WalletModalProvider,
    WalletConnectButton,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';


// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import './App.css'


import { Airdrop } from './Airdrop';

function App() {

  return (
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                  <div>
                  <WalletMultiButton/>
                  <WalletDisconnectButton></WalletDisconnectButton>
                  <>
                    hi there
                  </>
                  </div>
                  <Airdrop></Airdrop>
            </WalletModalProvider>
        </WalletProvider>
    </ConnectionProvider>
  )
}

export default App
