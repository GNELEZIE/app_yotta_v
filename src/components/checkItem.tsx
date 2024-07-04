import diplome from "../assets/diplome.png";
import { useState, useEffect } from "react";
import "../context/constant";
function checkItem(props){
    const {code} = props;
    useEffect(() => {
		if (window.ethereum && window.ethereum.selectedAddress) {
		  // MetaMask is connected
          const ReadContractValue = async () => {
            try {
              if (window.ethereum) {
                const provider = new ethers.BrowserProvider(window.ethereum);
                //const Signer = provider.getSigner();
                // Create a new instance of the Contract class
                const contract = new ethers.Contract(contractAddress, contractABI, provider);
        
                // Call the getValue function from the contract
                const nombre  = await contract.get_docs();
                
        
               // setGetValue(Tx._hex);
        
              } else {
                console.error(
                  "MetaMask introuvable. Veuillez installer MetaMask pour utiliser cette application.",
                );
              }
            } catch (error) {
              console.log(error);
              alert(error);
            }
            
          };
		 
		} else {
		  // MetaMask is not connected
		 
		  console.log("MetaMask n'est pas connecté");
		}
	  }, []);
	  
    return(
        <div className="aximo-all-section bg-light3 pt-5">
          <div className="container">
            <div className="row">
                <div className="col-md-6 offset-3 text-center">
                    <div className="alert alert-success">Ce diplôme est certifié.</div> 
                    <img src={diplome} alt="Diplome" className="diplome" />
                </div>
                
            </div>
          </div>
		</div>

    )
}
export default checkItem;