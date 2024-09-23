import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';
import Cart from './Cart'

const Header = ({products, totalQuantity, increaseProductQuantity, decreaseProductQuantity, deSelectProduct}) => {
  const [displayCart, setDisplayCart] = useState(false);
  const cartRef = useRef(null)


  useEffect(() => {
    function handleClickOutside(event) {
      if(cartRef.current && !cartRef.current.contains(event.target)) {
        setDisplayCart(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }

  }, [cartRef])


  return (
    <header className='bg-info w-100'>
      <nav className="nav-custom navbar navbar-expand-lg bg-orange">
        <div className="container nav-container">
          <div className='contact-info d-flex'>
            <div className='contact-numbers text-white'>
              Call us: +018970010111 / +918970010222
            </div>

            <div className='mx-2 text-white'>|</div>

            <div className='social-media'>
              <Link to="/">
                <img src="images/fb-icon.png" alt="facebook-icon" className='me-3' width="10" />
              </Link>

              <Link to="/">
                <img src="images/twitter-icon.png" alt="twitter-icon" className='me-3' width="20" />
              </Link>

              <Link to="/">
                <img src="images/insta-icon.png" alt="insta-icon" className='me-3' width="20" />
              </Link>
            </div>
          </div>

          <div className='sociai-media ms-auto position-relative'>
            <Link to="/">
              <img src="images/search.png" alt="serach icon" className='me-auto ' width="20" />
            </Link>

            <a href="#" onClick={() => setDisplayCart(!displayCart)} className='position-relative'>
              <img src="images/cart.png" alt="cart icon" className='me-auto ms-3' width="20" />
              <div className='q-tag position-absolute'>
                {totalQuantity}
              </div>
            </a>
           
            {displayCart && (
              <div ref={cartRef} className='cart-wrapper position-absolute'>
                <Cart 
                  products={products} 
                  increaseProductQuantity={increaseProductQuantity}
                  decreaseProductQuantity={decreaseProductQuantity}
                  deSelectProduct ={deSelectProduct}
                />
              </div>
            )}
              

            <Link to="/my-account">
              <img src="images/Profile-nav.png" alt="serach icon" className='me-auto ms-3' width="20" />
            </Link>
          </div>
        </div>
      </nav>

      <div className='logo-bar'>
        <div className='container h-100'>
          <div className='logo-box d-flex h-100 align-items-center justify-content-start'>
            <Link to="/">
              <img src="images/menu.svg" alt="hamberger-icon" width="40" />
            </Link>

            <Link to="/">
              <img src="images/logo.png" alt="sollylush-logo" />
            </Link>

            <div className='ms-auto'>
              <Link to="/offers" className='link-orange'>Offers</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header