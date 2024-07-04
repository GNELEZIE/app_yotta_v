import CheckItem from "../components/checkItem"
import React from 'react';
import { useLocation } from 'react-router-dom';
function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
function Ckeck(props){
    const query = useQuery();
    const paramValue = query.get('code');
    return(
        <div className="aximo-all-section bg-light3">
         <CheckItem code={paramValue}/>
		</div>

    )
}
export default Ckeck;