import './styles/appStyles.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import MyAccount from './pages/MyAccount';
import Offers from './pages/Offers';
import Products from './pages/Products';
import BreadCrumbs from './components/BreadCrumbs';

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

    return (
        <div className="App">
            <Header products={products} />
            <BreadCrumbs />
            <Routes>
                <Route path="/" element={
                  <Home 
                    products={products} 
                    increaseProductQuantity={increaseProductQuantity}
                    decreaseProductQuantity={decreaseProductQuantity}
                    handleAddToCart = {handleAddToCart}
                  />} 
                />
                <Route path="/my-account" element={<MyAccount />} />
                <Route path="/offers" element={<Offers />} />
                <Route path="/products" element={<Products />} />
            </Routes>
        </div>
    );
}

export default App;
