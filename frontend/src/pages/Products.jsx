import { useState, useEffect } from 'react';
import React from 'react';
import "../styles/addProducts.css";
import ProductCard from "../components/ProductCard";
import { ImCross } from "react-icons/im";
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
  const [productImage, setProductImage] = useState(null); // State to store the selected image
  const [imagePicker, setImagePicker] = useState(false); // State to toggle image picker

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

  // let fileInput = document.getElementById("file-input");
  // let file = fileInput.files[0];

  // let filename = file.name


  const addProduct = (e) => {
    e.preventDefault();
    // console.log(productName, productDescription)
    const data = {
      "name": productName,
      "desc": productDescription,
      "flavour": productFlavour,
      "country": productCountry,
      "weight": productWeight,
      "size": productSize,
      "price": productPrice,
      "url": productImage
    }

    // console.log("data - ", data)

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
    setProductImage(null); // Reset image selection
  }

  const deleteProduct = (id) => {
    console.log(id)
    
    axios
      .delete(`http://localhost:1234/api/products/${id}`)
      .then(() => {
        // updating the product list
        updateProductList();
      })
      .catch((error)=>{
        console.log(error)
      })
  }

  // console.log(products.data)

  // Handle image selection

  const productImages = [
    '/product-images/almond-buttur.jpg',
    '/product-images/herbal-green-tea.jpg',
    '/product-images/multi-flora-honey.jpg',
    '/product-images/natural-coconut-oil.jpg',
    '/product-images/organic-herbal-paste.jpg',
    '/product-images/quinoa-flour.jpg',
    '/product-images/turmeric-honey.jpg',
    '/product-images/apple.jpg',
    '/product-images/natural-honey.jpg',
    '/product-images/natural-soup.jpg',
  ];

  const handleImageSelect = (imageUrl) => {
    setProductImage(imageUrl);  // Set the selected image URL
    console.log('Selected image URL:', imageUrl);
  };


  return (
    <div className='bg-body-tertiary'>
      <div className='container pt-4 pb-5'>
        <div className='row'>
          <div className='col-12 col-sm-12 col-md-8 offset-md-2 col-xl-6 offset-xl-0 mt-xl-0'>
            <div className='product-box shadow-sm'>
              <div className='orange-header d-flex align-items-center px-4 fw-semibold text-white'>
                ADD PRODUCTS
              </div>

              <div className='product-content w-100 p-4'>
                <form onSubmit={addProduct}>
                  <div className="mb-3">
                      <label className="form-label">Media</label>
                      <div className="media-placeholder">
                          {!productImage && (
                            <>
                              <button
                                type="button"
                                className="btn-gray"
                                onClick={() => {
                                  setImagePicker(true)
                                }}
                              >
                                Add a media
                              </button>

                              {imagePicker && (
                                <div id="image-picker" className='image-picker'>
                                  <button 
                                    className='close-btn'
                                    onClick={() => setImagePicker(false)}>
                                    <ImCross />
                                  </button>

                                  <h3>Select a product Image</h3>

                                  <div className="image-grid">
                                    {productImages.map((image, index) => (
                                      <div
                                        key={index}
                                        className="image-item"
                                        onClick={() => handleImageSelect(image)}
                                      >
                                        <img src={image} alt={`product ${image} `} style={{cursor:"pointer"}} />
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </>
                          )}                      

                          {productImage && (
                            <div className="selected-image">
                              <img src={productImage} alt="Selected" />
                             
                              {/* <button className='close-btn'
                                onClick={() => {setProductImage(null)}}
                              > <ImCross /></button> */}

                              <button 
                                className='close-btn'
                                onClick={() => setImagePicker(false)}
                                style={{top: "10px", right: "15px"}}
                                >
                                <ImCross />
                              </button>

                              <button className='close-btn' style={{padding:"6px 25px", bottom: "10px", right: "15px"}}
                                onClick={() => {setProductImage(null)}}
                              >
                                Change Image
                              </button>



                            </div>
                          )}
                      </div>
                  </div>

                  <div className="mb-3">
                      <label htmlFor="productTitle" className="form-label">Product Title</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={productName} 
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
                        value={productPrice}
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
                        value={productFlavour}
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
                        value={productWeight}
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
                        value={productCountry}
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
                        value={productSize}
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
                        value={productDescription} 
                        onChange={(e) => setProductDescription(e.target.value)}
                        id="productDescription" 
                        rows="3" 
                        placeholder="Add product description here"></textarea>
                  </div>

                  <div className='row mb-3'>
                    <div className='col-12 d-flex align-items-end'>
                      <button type="submit" className="btn-orange">Add product</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className='col-12 col-sm-12 col-md-8 offset-md-2 mt-md-5 offset-xl-0 col-xl-6 mt-xl-0'>
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
                        deleteProduct = {() => deleteProduct(product._id)}
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