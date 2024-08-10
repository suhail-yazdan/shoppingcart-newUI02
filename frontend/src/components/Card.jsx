import React from 'react'
import "../styles/cardStyles.css"


const Card = () => {
  return (
    <div className='card-custom row mb-4 mt-2'>
        <div className='col-3'>
            <div className='img-box d-flex align-items-center justify-content-center overflow-hidden'>
                <img src="./images/banana.png" width="220" alt="banana oil" />
            </div>
        </div>

        <div className='col-9'>
            <div className='d-flex flex-column left h-100 justify-content-center '>
                <h4 className='m-0 fw-light'>Natural Organic Banana Juice (500ml)</h4>

                <h4 className='m-0'><strong>Rs. 69/-</strong></h4>

                <div className='card-details'>
                    <div className='row g-0'>
                        <div className='col-6'>
                            <ul className='card-item-list m-0'>
                                <li>Flavour: Banana</li>
                                <li>Weight: 500ml</li>
                                <li>Size: Small</li>
                                <li>Flavour: Banana</li>
                            </ul>
                        </div>

                        <div className='col-6'>
                            <div className='counter d-flex flex-column'>
                                <h6 className='text-center m-0'>ADD TO CART</h6>
                                
                                <div className='counter-qty d-flex justify-content-between align-items-center mx-auto'>
                                    <button className='rm-btn'>-</button>
                                    <div className='item-qty'>00</div>
                                    <button className='ad-btn'>+</button>
                                </div>

                                <button className='buy-now mx-auto'>BUY NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card