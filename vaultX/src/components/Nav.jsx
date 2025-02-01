// import { AirHome } from '../AirHome';
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import '../App.css'


export const Nav=()=>{

  return (
                      <div className="nav">
                        <h1><span>⚝</span> Astra</h1>
                        <div className="midnav-o">
                          <NavLink to="/wallet" className={({ isActive }) => isActive ? "midnav-on" : "midnav"}>Wallet</NavLink>
                          <NavLink to="/transaction" className={({ isActive }) => isActive ? "midnav-on" : "midnav"}>Transaction</NavLink>
                          <NavLink to="/" className={({ isActive }) => isActive ? "midnav-on" : "midnav"}>Airdrop</NavLink>
                          <NavLink to="/sign" className={({ isActive }) => isActive ? "midnav-on" : "midnav"}>Sign</NavLink>
                          <NavLink to="/mint" className={({ isActive }) => isActive ? "midnav-on" : "midnav"}>Mint</NavLink>
                        </div>
                        {/* <a href="/">Home</a> */}


                        <div className="home" 

                        style={{
                          marginRight:"5%"
                        }}
                        
                        ><a href="/">Home</a></div>
                      </div>
      
  )
}