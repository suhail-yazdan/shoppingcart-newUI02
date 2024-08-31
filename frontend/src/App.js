import './styles/appStyles.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import MyAccount from './pages/MyAccount';
import Offers from './pages/Offers';
import Products from './pages/Products';
import BreadCrumbs from './components/BreadCrumbs';
import axios from 'axios';

function App() {
    const [products, setProducts] = useState([
        {
            pid: 1,
            name: "Strawberry Shake",
            desc: "Finest Strawberries, Milk, Sugar",
            price: 149,
            flavour: "strawberry flavour",
            weight: "4.5kg",
            size: "full",
            country: "Japan",
            quantity: 0
        },
        {
            pid: 2,
            name: "Organic Almond Milk",
            desc: "Pure Almonds, Water",
            price: 199,
            flavour: "almond flavour",
            weight: "1L",
            size: "medium",
            country: "USA",
            quantity: 0,
        },
        {
            pid: 3,
            name: "Organic Honey",
            desc: "Raw Honey, Unfiltered",
            price: 249,
            flavour: "natural honey",
            weight: "500g",
            size: "small",
            country: "New Zealand",
            quantity: 0,
        },
        {
            pid: 4,
            name: "Organic Green Tea",
            desc: "Green Tea Leaves",
            price: 99,
            flavour: "classic",
            weight: "200g",
            size: "small",
            country: "China",
            quantity: 0,
        }
    ]);

    useEffect(() => {
        axios.get('http://localhost:1234/api/products')
        .then(response => {
            const updatedProducts = response.data.map(product => ({
                ...product,
                pid: product._id,
            }))

            setProducts(prevProducts =>[...prevProducts, ...updatedProducts])

            console.log("unnndndndn", updatedProducts)
        })
    }, [])

    function increaseProductQuantity(prod) {
        let updatedProducts = products.map(p =>
            p.pid === prod.pid && p.quantity < 10 ? { ...p, quantity: p.quantity + 1 } : p
        );
        setProducts(updatedProducts);
    }

    function decreaseProductQuantity(prod) {
      let updatedProducts = products.map(p =>
          p.pid === prod.pid && p.quantity > 0? { ...p, quantity: p.quantity - 1 } : p
      );
      setProducts(updatedProducts);
    }

    function handleAddToCart(prod) {
      let updatedProducts = products.map(p => 
        p.pid === prod.pid && p.quantity === 0? {...p, quantity:1}:p
      )

      setProducts(updatedProducts)
    }

    function deSelectProduct(prod) {
        let updatedProducts = products.map(p => 
            p.pid === prod.pid && p.quantity > 0? {...p, quantity: 0} : p
        )
        setProducts(updatedProducts)
    }

    const filteredProducts = products.filter(product => product.quantity > 0)

    let totalQuantity = 0;
    filteredProducts.forEach(product => {
        totalQuantity += product.quantity
    })

    return (
        <div className="App">
            <div className="header bg-warning position-fixed w-100">
                <Header 
                    products={products} 
                    totalQuantity={totalQuantity} 
                    increaseProductQuantity={increaseProductQuantity} 
                    deSelectProduct = {deSelectProduct}
                />
            </div>

            <div style={{marginTop: "140px"}}>
                <BreadCrumbs />
                <Routes>
                    <Route path="/" element={
                        <Home 
                            products={products} 
                            increaseProductQuantity={increaseProductQuantity}
                            decreaseProductQuantity={decreaseProductQuantity}
                            handleAddToCart = {handleAddToCart}
                            deSelectProduct = {deSelectProduct}
                        />
                    } />
                    <Route path="/my-account" element={<MyAccount /> } />
                    <Route path="/offers" element={<Offers />} />
                    <Route path="/products" element={
                        <Products 
                            products = {products}
                        />
                    } />
                </Routes>
            </div>
        </div>
    );
}

export default App;
