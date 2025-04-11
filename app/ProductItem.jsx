

import React, { useReducer } from 'react'
import { FaRegHeart } from "react-icons/fa";


function ProductItem({item}) {
    let isWished = false ; 

    function IncrementQuant(counter){
        counter = min((counter + 1), item.stock); 

    }
    function decrementQuant(counter){
        counter = (counter - 1) && 0 ; 

    }
    function addToChart() {
        // let quantityCounter = 1 ; 
        // document.querySelector('.addtoChart').innerHTML = `
        // <div>
        //         <button onClick = ${IncrementQuant(quantityCounter)}>+</button>
        //         <span>${quantityCounter}</span>
        //         <button onClick=${decrementQuant(quantityCounter)}>-</button>
                
        
        
        // </div>` ;
        console.log('addtochart') ; 
    }

    // const [state , dispatch] = useReducer(reducer , ItemCount) ; 

    // function reducer(state , action ){
    //     if(action.type === 'increment'){

    //     }
    // }

  return (
    <div>
                <div className="group relative block overflow-hidden border border-solid border-black m-8 rounded-2xl">
                    <button onClick={()=> document.querySelector('.wishlist').style.color  = "red"}
                        className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                    >
                        <span className="wishlist sr-only">Wishlist</span>
                        <FaRegHeart />

                    </button>

                    <img
                        src={item.images}
                        alt=""
                        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                    />

                    <div className="relative border border-t-black bg-white p-6">
                        <p className="text-gray-700">
                        ${item.price}  <br />
                        <span className="text-gray-400 line-through">${(item.price / (item.discountPercentage? item.discountPercentage * 0.01: 1 )).toFixed(2)}</span>
                        </p>

                        <h3 className="mt-1.5 text-lg font-medium text-emerald-700">{item.title}</h3>

                        <p className="mt-1.5 line-clamp-3 text-gray-700">{item.description}
                        </p>

                        <div className='addtoChart'>
                            <form className=" mt-4 flex gap-4 ">
                            <button
                                className="block w-full rounded-sm bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105"
                                onClick={addToChart}
                            >
                                Add to Cart
                            </button>

                            <button
                                type="button"
                                className="block w-full rounded-sm bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
                            >
                                Buy Now
                            </button>
                            </form>
                        </div>
                    </div>
                </div>  

      
    </div>
  )
}

export default ProductItem
