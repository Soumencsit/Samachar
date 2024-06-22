import React, { useState,useContext } from 'react';
import { FcSearch } from "react-icons/fc";
import  './SearchBox.css'
import NewsCard from '../newsCard/NewsCard';
import App from '../../App'
import UserContext from '../../context/UserContext.js'

function SearchBox() {
  const {setUser}=useContext(UserContext)
    const [inputValue, setInputValue] = useState('');
   
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
      // setUser({inputValue})
     
    };
    
    
    const search=(e)=>{
      e.preventDefaul
      setUser({inputValue})
      
    
    }

   
    return (  
        <div className="searchbox">
            <div className="search-input" >
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder='Search......'
         
          />
          <button type='submit' onClick={search}>Search</button>

         </div>



        
      </div>

 
      
      
    
    
    );
  }

export default SearchBox

