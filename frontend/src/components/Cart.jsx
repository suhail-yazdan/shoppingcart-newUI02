import React from 'react'
import "../styles/cartStyles.css"
import { MdDelete } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Cart = ({products, increaseProductQuantity, decreaseProductQuantity, deSelectProduct}) => {

  const filteredProducts = products.filter(product => product.quantity > 0)

  const totalQuantity = filteredProducts.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className='cart shadow p-4'>
      <h6>Shopping Cart</h6>

      <div className='cart-list mb-4 mt-4'>
        {filteredProducts.map((product)=>(
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

                  <div className='cart-buttons position-absolute'>
                    <button className='me-1' onClick={() => increaseProductQuantity(product)}><FaPlus /></button>
                    <div className='mt-1'>{product.quantity}</div>
                    <button className='ms-1 me-1' onClick={() => decreaseProductQuantity(product)}><FaMinus /></button>
                  </div>

                  <div className='delete-button position-absolute'>
                    <button className='ms-auto' onClick={() => deSelectProduct(product)}><MdDelete /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h6>Subtotal: <strong>{totalQuantity}</strong></h6>
      <button className='btn-orange'>Proceed to Checkout</button>
    </div>
  )
}

export default Cart