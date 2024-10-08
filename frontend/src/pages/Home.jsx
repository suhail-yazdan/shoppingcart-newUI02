import React from 'react';
import Card from '../components/Card';

const Home = ({ products, increaseProductQuantity, decreaseProductQuantity, handleAddToCart, deSelectProduct }) => {

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='offset-1 col-7'>
                        {products.map((prod) => (
                            <Card 
                                prod={prod} 
                                key={prod.pid} 
                                increaseProductQuantity={() => increaseProductQuantity(prod)}
                                decreaseProductQuantity={() => decreaseProductQuantity(prod)} 
                                handleAddToCart={handleAddToCart}
                                deSelectProduct ={deSelectProduct}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
