import { useState, useEffect } from 'react';
import React from 'react';
import "../styles/addProducts.css";
import ProductCard from "../components/ProductCard";
import axios from 'axios';

const Products = () => {
  // const [editMode, setEditMode] = useState(false)
  const [products, setProducts] = useState([])

  // save a product
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productFlavour, setProductFlavour] = useState('');
  const [productCountry, setProductCountry] = useState('');
  const [productWeight, setProductWeight] = useState('');
  const [productSize, setProductSize] = useState('');
  const [productPrice, setProductPrice] = useState('');

  useEffect(() => {
    axios.get('http://localhost:1234/api/products')
    .then((response) => {
        setProducts(response.data)
    })
  }, [])

  const updateProductList = () => {
    // updating the product list
    axios.get('http://localhost:1234/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const addProduct = (e) => {
    e.preventDefault();
    console.log(productName, productDescription)
    const data = {
      "name": productName,
      "desc": productDescription,
      "flavour": productFlavour,
      "country": productCountry,
      "weight": productWeight,
      "size": productSize,
      "price": productPrice
    }

    axios
    .post('http://localhost:1234/api/products', data)
    .then(() => {
      updateProductList();
    })
    .catch((error) => {
      console.log(error)
    })

    // Reset the form fields
    setProductName('');
    setProductDescription('');
    setProductPrice('');
    setProductFlavour('');
    setProductCountry('');
    setProductWeight('');
    setProductSize('');
    setProductPrice('')
  }

  console.log(products.data)
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
                <form onSubmit={addProduct}>
                  <div className="mb-3">
                      <label className="form-label">Media</label>
                      <div className="media-placeholder">
                          <button type="button" className="btn-gray">Add a media</button>
                      </div>
                  </div>

                  <div className="mb-3">
                      <label htmlFor="productTitle" className="form-label">Product Title</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        onChange={(e) => setProductName(e.target.value)}
                        id="productTitle" 
                        placeholder="Add product title here"
                      />
                  </div>

                  <div className='row mb-3'>
                    <div className='col-3'>
                      <label htmlFor="productPrice" className="form-label">Product Price</label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setProductPrice(e.target.value)}
                        id="productPrice"
                        placeholder='Price'
                      />
                    </div>

                    <div className='col-5'>
                      <label htmlFor="productFlavour" className="form-label">Flavour</label>
                      <input 
                        type="text"
                        className="form-control"
                        onChange={(e) => setProductFlavour(e.target.value)}
                        id="productFlavour"
                        placeholder='Product Flavour'
                      />
                    </div>
                    
                    <div className='col-4'>
                      <label htmlFor="productWeight" className="form-label">Weight</label>
                      <input 
                        type="text"
                        className="form-control"
                        onChange={(e) => setProductWeight(e.target.value)}
                        id="productWeight"
                        placeholder="Product Weight"
                      />
                    </div>
                  </div>
                  
                  <div className='row mb-3'>
                    <div className='col-4'>
                      <label htmlFor="productCountry" className="form-label">Country of Origin</label>
                      <input 
                        type="text"
                        className="form-control"
                        onChange={(e) => setProductCountry(e.target.value)}
                        id="productCountry"
                        placeholder="Country of Origin"
                      />
                    </div>

                    <div className='col-3'>
                      <label htmlFor='productSize' className="form-label">Size</label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setProductSize(e.target.value)}
                        id="productSize"
                        placeholder="Product Size"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                      <label htmlFor="productDescription" className="form-label">Product Description</label>
                      <textarea 
                        className="form-control" 
                        onChange={(e) => setProductDescription(e.target.value)}
                        id="productDescription" 
                        rows="3" 
                        placeholder="Add product description here"></textarea>
                  </div>

                  <div className='row mb-3'>
                    <div className='col-3 offset-9 d-flex align-items-end'>
                      <button type="submit" className="btn-orange">Add product</button>
                    </div>
                  </div>
                  
                  {/* <div className="mb-3">
                    <label for="productPrice" className="form-label">Product Price</label>

                    <div className="product-price d-flex align-items-center justify-content-between"> 
                      <input type="number" className="form-control" id="productPrice" placeholder="Add product price here" />
                      <button type="button" className="btn-orange">Add product to list</button>
                    </div>
                  </div> */}
                </form>
              </div>
            </div>
          </div>

          <div className='col-6'>
            <div className='product-box shadow-sm'>
              <div className='orange-header d-flex align-items-center px-4 fw-semibold text-white'>
                CURRENT PROUCT LIST
              </div>

              <div className='product-content w-100 p-4 pt-5'>
                <div className='product-list-wrapper'>
                  {products.map((product, index) => (
                      <ProductCard 
                        key = {product._id}
                        product = {product}
                        // deleteProduct = {() => deleteProduct(product._id)}
                        updateProductList={updateProductList}
                      />
                  ))}
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