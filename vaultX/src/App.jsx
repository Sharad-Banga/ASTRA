
import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';

import {
    WalletModalProvider
} from '@solana/wallet-adapter-react-ui';


// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import './App.css'

function App() {

  return (
    <ConnectionProvider endpoint={"endpoint"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                  <>
                    hi there
                  </>
            </WalletModalProvider>
        </WalletProvider>
    </ConnectionProvider>
  )
}

export default App
