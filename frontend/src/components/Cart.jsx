import React from 'react'
import "../styles/cartStyles.css"
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";

const Cart = ({products}) => {
  return (
    <div className='cart position-absolute shadow p-4'>
      <h6>Shopping Cart</h6>

      <div className='cart-list mb-4 mt-4'>
        {products.map((product)=>(
          <div className='mt-3'>
            <div className='row g-2 '>
              <div className='col-3'>
                <div className='cart-p-image'></div>
              </div>

              <div className='col-9'>
                <div className='cart-info w-100 h-100 position-relative'>
                  <div><strong>{product.name}</strong></div>

                  <div>Weight: {product.weight}</div>

                  <div className='qty-price d-flex align-items-end mt-3'>
                    <div className='me-3'>
                      x {product.quantity}
                    </div>

                    <div>
                      <strong>Rs. {product.price}/-</strong>
                    </div>
                  </div>

                  <div className='cart-buttons-wrap position-absolute'>
                    <button className='me-1'><FaPlus /></button>
                    <div className='mt-1'>3</div>
                    <button className='ms-auto'><MdDelete /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h6>Subtotal: <strong>Rs. 150/-</strong></h6>
      <button className='btn-orange'>Proceed to Checkout</button>
    </div>
  )
}

export default Cart