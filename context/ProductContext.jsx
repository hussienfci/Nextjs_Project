import React, { useState } from 'react'
import { createContext } from 'react'


export const ProductContext = createContext("") ;   

function UserContext({children}) {
    const [cart, setCart] = useState([]); 
    const [wished , setWished] = useState([]) ;


  return (
    
    <ProductContext.Provider value={{cart , setCart , wished , setWished}}>
        {children}        
    </ProductContext.Provider>

)}

export default UserContext
