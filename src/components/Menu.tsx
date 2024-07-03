import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../assets/images/logo/yoc.png";
export default function Menu(){
    const [login, setLogin] = useState();
    const [address, setAddress] = useState(null);
    useEffect(() => {
		if (window.ethereum && window.ethereum.selectedAddress) {
		  // MetaMask is connected
		  const selectedAddress = window.ethereum.selectedAddress;
          setLogin(true)
		  console.log(`Connecté à MetaMask avec adresse: ${selectedAddress}`);
		} else {
		  // MetaMask is not connected
		  setLogin(false); 
		  console.log("MetaMask n'est pas connecté");
		}
	  }, []);
	  
	  async function connectToMetaMask() {
		try {
		  // Check if MetaMask is installed
		  if (window.ethereum) {
			// Request account access
			const Accounts = await window.ethereum.request({
			  method: 'eth_requestAccounts',
			});
	
			setAddress(Accounts[0]);
			setLogin(true)
			console.log('Connecté à MetaMask !', Accounts);
		  } else {
			setLogin(false)
			console.error(
			  "MetaMask introuvable. Veuillez installer MetaMask pour utiliser cette application.",
			);
		  }
		} catch (error) {
		  console.error(error);
		}
	  };
      async function disconnectFromMetaMask() {
        try {
          // Check if MetaMask is installed
          if (window.ethereum) {
            // Disconnect from MetaMask
            await window.ethereum.request({
              method: 'wallet_requestPermissions',
              params: [{ eth_accounts: {} }],
            });
            setLogin(false)
            console.log('Disconnected from MetaMask!');
          } else {
            setLogin(true)
            console.error(
              "MetaMask introuvable. Veuillez installer MetaMask pour utiliser cette application.",
            );
          }
        } catch (error) {
          console.error(error);
        }
      }
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
            <a className="navbar-brand" href="#">
                <img src={Logo} alt="Logo" className="logo" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <NavLink to="/" className={({isActive}) =>(isActive ? "activelink" : undefined)}>Home</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/a-propos" className={({isActive}) =>(isActive ? "activelink" : undefined)}>A propos</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/nos-services" className={({isActive}) =>(isActive ? "activelink" : undefined)}>Nos services</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/faq" className={({isActive}) =>(isActive ? "activelink" : undefined)}>Faq</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/contacts" className={({isActive}) =>(isActive ? "activelink" : undefined)}>Contact</NavLink>
            </li>
            </ul>
            {!login && (
                <button className="btn btn-success" onClick={connectToMetaMask}>Se connecter</button>
            )}
            {login && (
              <button className="btn btn-danger" onClick={disconnectFromMetaMask}>Déconnecter</button>
            )}
           
    
            </div>
            </div>
            </nav>
        </>
    )
}