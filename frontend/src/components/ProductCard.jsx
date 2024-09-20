import { useState } from "react"
import "../styles/productCard.css"
import axios from 'axios';


const ProductCard = (props) => {
    const [editMode, setEditMode] = useState(false)

    const [productName, setProductName] = useState(props.product.name);
    const [productPrice, setProductPrice] = useState(props.product.price);
    const [productFlavour, setProductFlavour] = useState(props.product.flavour);
    const [productWeight, setProductWeight] = useState(props.product.weight);
    const [productSize, setProductSize] = useState(props.product.size);
    const [productCountry, setProductCountry] = useState(props.product.country);
    const [productDescription, setProductDescription] = useState(props.product.desc);

    const productID = props.product._id

    // const data = {
    //     "name": productName,
    //     "desc": productDescription,
    //     "flavour": productFlavour,
    //     "country": productCountry,
    //     "weight": productWeight,
    //     "size": productSize,
    //     "price": productPrice
    //   }

    const updateProduct = async () => {
        const productData = {
            "name": productName,
            "desc": productDescription,
            "flavour": productFlavour,
            "country": productCountry,
            "weight": productWeight,
            "size": productSize,
            "price": productPrice
        }

        axios
            .put(`http://localhost:1234/api/products/${productID}`, productData)
            .then((response) => {
                console.log("Product updated successfully", response.data)
                props.updateProductList()
                setEditMode(!editMode)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return(
        <>
            <div className='p-card mb-4 p-3 pb-5'>
                {!editMode ? (
                    <>
                        {/* <div className="row">
                            <div className="col-9">
                                <div className="row">
                                    <div className='col-3'>
                                        <div className='p-image d-flex align-items-center justify-content-center overflow-hidden'>
                                            <img src="./images/banana.png" alt="banana oil" />
                                        </div>
                                    </div>

                                    <div className="col-9">
                                        <h6 className='m-0 fw-light'>{productName}</h6>

                                        <h6 className='m-0'><strong>Rs. {productPrice}/-</strong></h6>

                                        <ul className='text-small m-0'>
                                            <li>Flavour: {productFlavour}</li>
                                            <li>Weight: {productWeight}</li>
                                            <li>Size: {productSize}</li>
                                            <li>Country of Origin: {productCountry}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-3">
                                <div className='d-flex flex-column align-items-end justify-content-end h-100'>
                                    <button className='btn-orange-small mb-1' onClick={() => setEditMode(!editMode)}>Edit</button>
                                    <button className='btn-outline-red mt-1'>Delete</button>
                                </div>
                            </div>
                        </div> */}
                        
                        <div className='row'>
                            <div className='col-3'>
                                <div className='p-image d-flex align-items-center justify-content-center overflow-hidden'>
                                    <img src="./images/banana.png" alt="banana oil" />
                                </div>
                            </div>

                            <div className='col-9'>
                                <h6 className='m-0 fw-light'>{productName}</h6>

                                <h6 className='m-0'><strong>Rs. {productPrice}/-</strong></h6>

                                <div className='p-details pb-3'>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <ul className='text-small m-0'>
                                                <li>Flavour: {productFlavour}</li>
                                                <li>Weight: {productWeight}</li>
                                                <li>Size: {productSize}</li>
                                                <li>Country of Origin: {productCountry}</li>
                                            </ul>
                                        </div>

                                        <div className='col-6'>
                                            <div className='d-flex flex-column align-items-end justify-content-end h-100'>
                                                <button className='btn-orange-small mb-1' onClick={() => setEditMode(!editMode)}>Edit</button>
                                                <button className='btn-outline-red mt-1'>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="fw-light">
                                    {productDescription}
                                </div>
                            </div>
                        </div>
                    </>
                    ) : (
                        <>
                        <div className="row">
                            <div className="col-10">
                                <div className='w-100 d-flex flex-column'>
                                    <form className='me-4'>
                                        <input type="text" 
                                            className='form-control py-1 px-2 mb-2' 
                                            value={productName}
                                            placeholder="Add Product Title here"
                                            onChange={(e) => setProductName(e.target.value)}
                                        />

                                        <div className="row mb-2">
                                            <div className="col-4">
                                                <input type="text"
                                                    className='form-control py-1 px-2 mt-2'
                                                    value={productPrice}
                                                    placeholder="Price"
                                                    onChange={(e) => setProductPrice(e.target.value)}
                                                />
                                            </div>

                                            <div className="col-5">
                                                <input type="text" 
                                                    className='form-control py-1 px-2 mt-2' 
                                                    value={productFlavour}
                                                    placeholder="Product Flavour"
                                                    onChange={(e) => setProductFlavour(e.target.value)}
                                                />
                                            </div>

                                            <div className="col-3">
                                                <input type="text" 
                                                    className='form-control py-1 px-2 mt-2' 
                                                    value={productWeight}
                                                    placeholder="Weight"
                                                    onChange={(e) => setProductWeight(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
 

                                            <div className="col-9">
                                                <input type="text" 
                                                    className='form-control py-1 px-2 mt-2' 
                                                    value={productCountry}
                                                    placeholder="Country of Origin"
                                                    onChange={(e) => setProductCountry(e.target.value)}
                                                />
                                            </div>

                                            <div className="col-3">
                                                <input type="text" 
                                                    className='form-control py-1 px-2 mt-2'
                                                    value={productSize}
                                                    placeholder="Size"
                                                    onChange={(e) => setProductSize(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <textarea 
                                            className="form-control mt-2 py-1 px-2" 
                                            rows="3" 
                                            value={productDescription}
                                            placeholder="Add Product Description here"
                                            onChange={(e) => setProductDescription(e.target.value)}
                                        >
                                        </textarea>
                                    </form>
                                </div>
                            </div>

                            <div className="col-2 bg-primary">
                                <div className='d-flex flex-column align-items-end justify-content-end h-100'>
                                    <button className='btn-secondary btn btn-sm px-2 py-1 rounded-2' 
                                        onClick={() =>{updateProduct()}}
                                        >Update</button>

                                    <button className='btn-secondary btn btn-sm px-2 py-1 mt-2 rounded-2' 
                                        // onClick={() => {setEditMode(!editMode); handleOriginalData() }}
                                        onClick={() => setEditMode(!editMode)}
                                        >Cancel</button>
                                </div>
                            </div>
                        </div>
                        </>
                    )
                }
            </div>
        </>
    )
}


export default ProductCard