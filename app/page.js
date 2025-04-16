"use client"

import { createContext } from "react";
import Products  from "./Products";
import Cart from "./Cart";

import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Login from "./Login";


// export const cartContext = createContext()
// export const wishListContext = createContext()


export default function Home() {

  // const

  
  return (
    <div className="bg-amber-50">
      <Login />
      {/* <ProductContext.Provider value={{}}> */}
            {/* <BrowserRouter>
                  <Routes>
                      <Route path='/product' element={<Products/>} />
                      <Route path="/login" element={<Login/>} />
                      <Route path="/cart" element={<Cart/>}/>
                      
                  </Routes>
              </BrowserRouter> */}

              {/* <h1>لعبة جاتا</h1> */}

              {/* <Products/>

        </ProductContext.Provider> */}
    </div>
  )
  ;
}


























