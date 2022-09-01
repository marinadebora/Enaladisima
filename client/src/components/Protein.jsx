import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { proteins } from "../action";
import '../styles/Bases.css'
import '../styles/Bases.css'

export function Protein () {
    const allProteins= useSelector(state=>state.proteins)
    const dispatch= useDispatch()
        useEffect(() => {
            dispatch(proteins())
        }, [dispatch])
  return (
  <div>
    <h3 id="h3-bases">ELIGE TUS PROTEINAS</h3>
<div className="contain-bases">
            {
             allProteins?.map(e=>(
                <div id="contain-bases-card">
                    <label class="checkeable">
             <input type="checkbox" name="cap1"/>
            <img id="img-bases" src={e.image} alt={e.name}/> 
            </label>
            <h2 id="h2-bases">{e.name.toUpperCase()}</h2> 
            </div>     
             )) 
            }
           
       
        
     </div>
  </div>
  );
};
