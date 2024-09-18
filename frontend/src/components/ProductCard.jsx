import { useState } from "react"
import "../styles/productCard.css"


const ProductCard = ({product}) => {
    const [editMode, setEditMode] = useState(false)

    return(
        <>
            <div className='p-card mb-4 p-3 pb-5'>
                {!editMode ? (
                        <div className='row'>
                            <div className='col-3'>
                                <div className='p-image d-flex align-items-center justify-content-center overflow-hidden'>
                                    <img src="./images/banana.png" alt="banana oil" />
                                </div>
                            </div>

                            <div className='col-9'>
                                <h6 className='m-0 fw-light'>{product.name}</h6>

                                <h6 className='m-0'><strong>Rs. {product.price}/-</strong></h6>

                                <div className='p-details pb-3'>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <ul className='text-small m-0'>
                                                <li>Flavour: {product.flavour}</li>
                                                <li>Weight: {product.weight}</li>
                                                <li>Size: {product.size}</li>
                                                <li>Country of Origin: {product.country}</li>
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
                        </div>
                    ) : (
                        <>
                            <div className="row">
                                <div className="col-9">
                                    <div className='w-100 d-flex flex-column'>
                                        <form className='me-4`'>
                                            <input type="text" 
                                                className='form-control py-1 px-2 w-75' 
                                                // value={productName}
                                                // onChange={handleProductNameChange}
                                                />

                                            <textarea 
                                                className="form-control mt-2 py-1 px-2" 
                                                rows="3" 
                                                // value={productDescription}
                                                // onChange={handleProductDescriptionChange}
                                                >
                                            </textarea>

                                            <input type="text" 
                                                placeholder='Price' 
                                                className='form-control py-1 px-2 w-50 mt-2'
                                                // onChange={handleProductPriceChange}
                                                // value={productPrice}
                                            />
                                        </form>
                                    </div>
                                </div>

                                <div className="col-3">
                                    <div className='d-flex flex-column align-items-end justify-content-end h-100'>
                                        <button className='btn-secondary btn px-3 py-1' 
                                            // onClick={() =>{updateProduct()}}
                                            >Save</button>

                                        <button className='btn-secondary btn px-3 py-1 mt-2' 
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