
import React, { FC, } from 'react';
import {BrowserRouter , Route ,Routes, Link} from "react-router-dom";

import {Nav} from "./components/Nav";

import '@solana/wallet-adapter-react-ui/styles.css';
import './App.css'
import { Airdrop } from './components/Airdrop';
import { AirHome } from './AirHome';
import { Landing } from './Landing';

function App() {


  return (
    <div style={{
      background: `linear-gradient(to bottom, #000000c7, #00000000), url("./assets/bg.jpg")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      height: "100vh",
      width: "100vw",
      color: "white",
    }}>
    <BrowserRouter >
    <div className="body">
      <Nav />
      <Routes >
      
      <Route path="/" element={<AirHome />} />
      <Route path="/wallet" element={<WalletPage />} />
      <Route path="/transaction" element={<TransactionPage />} />
      <Route path="/sign" element={<SignPage />} />
      <Route path="/mint" element={<MintPage />} />

      </Routes>
      </div>
    </BrowserRouter>
    </div>
  )
}

const WalletPage = () => <h2>Wallet Page</h2>;
const TransactionPage = () => <h2>Transaction Page</h2>;
const SignPage = () => <h2>Sign Page</h2>;
const MintPage = () => <h2>Mint Page</h2>;


export default App
