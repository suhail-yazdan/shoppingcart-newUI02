import React from 'react'
import "../styles/addProducts.css"

const Products = () => {
  return (
    <div className='bg-body-tertiary'>
      <div className='container pt-4 pb-5'>
        <div className='row'>
          <div className='col-6'>
            <div className='product-box shadow-sm'>
              <div className='orange-header d-flex align-items-center px-4 fw-semibold text-white'>
                ADD PRODUCTS
              </div>

              <div>Media</div>
              <div className='addMedia'></div>
            </div>
          </div>

          <div className='col-6'>
            <div className='product-box shadow-sm'>
              <div className='orange-header d-flex align-items-center px-4 fw-semibold text-white'>
                CURRENT PROUCT LIST
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products