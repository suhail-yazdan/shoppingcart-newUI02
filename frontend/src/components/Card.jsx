import React from 'react'
import { useState } from 'react'
import "../styles/cardStyles.css"

import { IoMdClose } from "react-icons/io";

const Card = ({product, addProduct}) => {
    const [isProductSelected, setIsProductSelected] = useState(false)
  return (
    <div 
        className={`card-custom row mb-4 mt-2 bg-info py-3 px-1 rounded-4 ${isProductSelected? "bg-secondary-subtle" : "bg-white"}`}
        onClick={() => {setIsProductSelected(true)}}
    >
        <div className='col-3'>
            <div className='img-box d-flex align-items-center justify-content-center rounded-3 overflow-hidden'>
                <img src="./images/banana.png" width="220" alt="banana oil" />
            </div>
        </div>

        {/* {console.log(product)} */}

        <div className='col-9'>
            <div className="d-flex flex-column left h-100 justify-content-center">
                <h5 className='m-0 fw-light'>{product.name}</h5>

                <h5 className='m-0'><strong>Rs. {product.price}/-</strong></h5>

                <div className='card-details mt-2'>
                    <div className='row g-0'>
                        <div className='col-6'>
                            <ul className='card-item-list m-0 me-5'>
                                <li>Flavour: {product.flavour}</li>
                                <li>Weight: {product.weight}</li>
                                <li>Size: {product.size}</li>
                            </ul>
                        </div>

                        <div className='col-4'>
                            <div className='counter d-flex flex-column justify-content-center h-100 ms-1'>
                                {
                                    !isProductSelected &&
                                    <button className='btn-orange-pill px-4' onClick={() => {setIsProductSelected(!isProductSelected)}}>
                                        ADD TO CART
                                    </button>
                                }
                                
                                {
                                    isProductSelected &&
                                    (
                                        <>
                                            <div className='counter-qty d-flex align-items-center mx-auto'>
                                                <button className='rm-btn me-2'>-</button>
                                                <div className='item-qty'>1</div>
                                                <button className='ad-btn ms-2' onClick={addProduct}>+</button>
                                            </div>
                                        </>
                                    )
                                }                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>

        
        {
            isProductSelected && 
            <div>
                <button 
                    className='btn-round-orange rounded-3'
                    onClick={(e) => {
                        e.stopPropagation()
                        setIsProductSelected(false)
                    }}>
                        <IoMdClose />
                    </button>
            </div>
        }

        {console.log(isProductSelected)}
        

    </div>
  )
}

export default Card