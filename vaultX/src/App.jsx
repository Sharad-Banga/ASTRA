
import React from 'react';
import {BrowserRouter , Route ,Routes, } from "react-router-dom";

import {Nav} from "./components/Nav";

import '@solana/wallet-adapter-react-ui/styles.css';
import './App.css'
import { Airdrop } from './components/Airdrop';
import { AirHome } from './AirHome';
import { Landing } from './Landing';
import {Footer } from "./components/Footer";
function App() {


  return (
    <div className="body" >
    <BrowserRouter >
    <div >
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
    <div className="footer">
            Developed and Designed By <a className="footer-link" href="https://x.com/sharad_banga" target="_blank" rel="noopener noreferrer">&nbsp;  Sharad Banga</a>
        </div>
    </div>
  )
}

const WalletPage = () => <h2>Wallet Page</h2>;
const TransactionPage = () => <h2>Transaction Page</h2>;
const SignPage = () => <h2>Sign Page</h2>;
const MintPage = () => <h2>Mint Page</h2>;


export default App
