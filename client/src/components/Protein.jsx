import React, { useState } from "react";
import {  useSelector } from 'react-redux'
import { useLocalStorage } from "../useLocalStorage";
import '../styles/Bases.css'
import '../styles/Bases.css'

export function Protein () {
    const allProteins= useSelector(state=>state.proteins)
    const [/* proteinas, */ setProteinas] = useLocalStorage('proteinas',[])
    let [form, setForm] = useState({
        proteinas: []
      })
     
   
    
    
      let handleChange = (event) =>
      {
        event.preventDefault()
    
        setForm({
          ...form,
          proteinas: [...form.proteinas, event.target.value],
      
        })
        setProteinas([...form.proteinas,event.target.value])
      
      }
    
    
      const handleDelete = (event) =>
      {
        setForm({
          ...form,
          proteinas: form.proteinas.filter(e => e !== event)
        })
        setProteinas([...form.bases,event.target.value])
      }
    
      return (
    
    <div>
          <div id="checkboxContent" className="contain-bases" >
          
            <h3 id="h3-bases">ELIGE TUS PROTEINAS (2)</h3>
              {
              allProteins?.map(e => (
                <div id="contain-bases-card" key={e._id}>
                  <label class="checkeable">
                    <img id="img-bases" src={e.image} alt={e.name} />
                  </label>
                  <h2 id="h2-bases">{e.name.toUpperCase()}</h2>
                </div>
              ))
            }
              <select onChange={(e) => handleChange(e)} disabled={form.proteinas?.length === 2 && true} class="form-select" aria-label="Default select example">
              <option value="">seleccione</option>
                {
                  allProteins?.map(e => (
                  <option name={e.name} value={e.name}>{e.name}</option>
                ))
                }
              </select>
             
              {form.proteinas?.map(e =>
                <div >
                  <h5 class="badge text-bg-secondary">{e}
                    <button class="btn btn-outline-success" onClick={() => handleDelete(e)} >X</button>
                  </h5>
                </div>
              )} 
    </div>
    </div>
    
      );
};
