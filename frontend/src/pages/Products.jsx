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

              <div className='product-content w-100 p-4'>
                <form>
                  <div className="mb-3">
                      <label class="form-label">Media</label>
                      <div className="media-placeholder">
                          <button type="button" className="btn-gray">Add a media</button>
                      </div>
                  </div>

                  <div className="mb-3">
                      <label for="productTitle" className="form-label">Product Title</label>
                      <input type="text" className="form-control" id="productTitle" placeholder="Add product title here" />
                  </div>

                  <div class="mb-3">
                      <label for="productDescription" className="form-label">Product Description</label>
                      <textarea className="form-control" id="productDescription" rows="3" placeholder="Add product description here"></textarea>
                  </div>
                  
                  <div className="mb-3">
                    <label for="productPrice" class="form-label">Product Price</label>

                    <div class="product-price d-flex align-items-center justify-content-between"> 
                      <input type="number" className="form-control" id="productPrice" placeholder="Add product price here" />
                      <button type="button" className="btn-orange">Add product to list</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className='col-6'>
            <div className='product-box shadow-sm'>
              <div className='orange-header d-flex align-items-center px-4 fw-semibold text-white'>
                CURRENT PROUCT LIST
              </div>

              <div className='product-content w-100 p-4'>
                <div className='p-card mb-4'>
                  <div className='row'>
                    <div className='col-3'>
                      <div className='p-image d-flex align-items-center justify-content-center overflow-hidden'>
                        <img src="./images/banana.png" alt="banana oil" />
                      </div>
                    </div>

                    <div className='col-8'>
                      <h6 className='m-0 fw-light'>Natural Organic Banana Juice (500ml)</h6>

                      <h6 className='m-0'><strong>Rs. 69/-</strong></h6>

                      <div className='p-details'>
                        <div className='row'>
                          <div className='col-6'>
                            <ul className='text-small'>
                              <li>Flavour: Banana</li>
                              <li>Weight: 500ml</li>
                              <li>Size: Small</li>
                              <li>Country of Origin: India</li>
                            </ul>
                          </div>

                          <div className='col-6'>
                            <div className='d-flex flex-column align-items-center justify-content-center h-100'>
                              <button className='btn-orange-small mb-1'>Edit</button>
                              <button className='btn-outline-red mt-1'>Delete</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='p-card mb-4'>
                  <div className='row'>
                    <div className='col-3'>
                      <div className='p-image d-flex align-items-center justify-content-center overflow-hidden'>
                        <img src="./images/banana.png" alt="banana oil" />
                      </div>
                    </div>

                    <div className='col-8'>
                      <h6 className='m-0 fw-light'>Natural Organic Banana Juice (500ml)</h6>

                      <h6 className='m-0'><strong>Rs. 69/-</strong></h6>

                      <div className='p-details'>
                        <div className='row'>
                          <div className='col-6'>
                            <ul className='text-small'>
                              <li>Flavour: Banana</li>
                              <li>Weight: 500ml</li>
                              <li>Size: Small</li>
                              <li>Country of Origin: India</li>
                            </ul>
                          </div>

                          <div className='col-6'>
                            <div className='d-flex flex-column align-items-center justify-content-center h-100'>
                              <button className='btn-orange-small mb-1'>Edit</button>
                              <button className='btn-outline-red mt-1'>Delete</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className='p-card mb-4'>
                  <div className='row'>
                    <div className='col-3'>
                      <div className='p-image d-flex align-items-center justify-content-center overflow-hidden'>
                        <img src="./images/banana.png" alt="banana oil" />
                      </div>
                    </div>

                    <div className='col-8'>
                      <h6 className='m-0 fw-light'>Natural Organic Banana Juice (500ml)</h6>

                      <h6 className='m-0'><strong>Rs. 69/-</strong></h6>

                      <div className='p-details'>
                        <div className='row'>
                          <div className='col-6'>
                            <ul className='text-small'>
                              <li>Flavour: Banana</li>
                              <li>Weight: 500ml</li>
                              <li>Size: Small</li>
                              <li>Country of Origin: India</li>
                            </ul>
                          </div>

                          <div className='col-6'>
                            <div className='d-flex flex-column align-items-center justify-content-center h-100'>
                              <button className='btn-orange-small mb-1'>Edit</button>
                              <button className='btn-outline-red mt-1'>Delete</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



              </div>
            </div>
            






            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products