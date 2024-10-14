import React, { useState } from 'react';
import "../styles/cardStyles.css";
import { IoMdClose } from "react-icons/io";

const Card = ({ prod, increaseProductQuantity, decreaseProductQuantity, handleAddToCart, deSelectProduct }) => {
    const [isProductSelected, setIsProductSelected] = useState(false);

    return (
        <div className={`card-custom mb-4 mt-2 bg-info p-3 rounded-4 ${isProductSelected ? "bg-secondary-subtle" : "bg-white"}`}
            onClick={() => { setIsProductSelected(true) }}>

            {isProductSelected &&
                <div>
                    <button
                        className='btn-round-orange rounded-3'
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsProductSelected(false);
                            deSelectProduct(prod)
                        }}>
                        <IoMdClose />
                    </button>
                </div>
            }

            <div className="row">
                <div className='col-3'>
                    <div className='img-box d-flex align-items-center justify-content-center rounded-3 overflow-hidden'>
                        <img src={prod.url} alt={prod.name} />
                    </div>
                </div>

                <div className='col-9'>
                    <div className="d-flex flex-column left h-100 justify-content-center">
                        <h5 className='m-0 fw-light'>{prod.name}</h5>
                        <h5 className='m-0'><strong>Rs. {prod.price}/-</strong></h5>

                        <div className='card-details mt-2'>
                            <div className='row g-0'>
                                <div className='col-6'>
                                    <ul className='card-item-list m-0 me-5'>
                                        <li>Flavour: {prod.flavour}</li>
                                        <li>Weight: {prod.weight}</li>
                                        <li>Size: {prod.size}</li>
                                    </ul>
                                </div>

                                <div className='col-4'>
                                    <div className='counter d-flex flex-column justify-content-center h-100 ms-1'>
                                        {!isProductSelected && 
                                            <button className='btn-orange-pill px-4' onClick={() => { setIsProductSelected(true); handleAddToCart(prod) }}>
                                                ADD TO CART
                                            </button>
                                        }

                                        {isProductSelected && 
                                            <>
                                                <div className='counter-qty d-flex align-items-center mx-auto'>
                                                    <button className='rm-btn me-2' onClick ={() => decreaseProductQuantity(prod)}>-</button>
                                                    <div className='item-qty'>{prod.quantity}</div>
                                                    <button className='ad-btn ms-2' onClick={() => increaseProductQuantity(prod)}>+</button>
                                                </div>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* {console.log(isProductSelected)} */}
        </div>
    );
}

export default Card;
