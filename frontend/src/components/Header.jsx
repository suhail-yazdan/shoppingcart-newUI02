import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';
import Cart from './Cart'

const Header = () => {
  const [displayCart, setDisplayCart] = useState(false);

  return (
    <header>
      <nav class="nav-custom navbar navbar-expand-lg bg-orange">
        <div class="container nav-container">
          <div className='contact-info d-flex'>
            <div className='contact-numbers text-white'>
              Call us: +018970010111 / +918970010222
            </div>

            <div className='mx-2 text-white'>|</div>

            <div className='social-media'>
              <a href="#">
                <img src="images/fb-icon.png" alt="facebook icon" className='me-3' width="10" />
              </a>

              <a href="#">
                <img src="images/twitter-icon.png" alt="twitter icon" className='me-3' width="20" />
              </a>

              <a href="#">
                <img src="images/insta-icon.png" alt="insta icon" className='me-3' width="20" />
              </a>
            </div>
          </div>

          <div className='sociai-media ms-auto position-relative'>
            <a href="#">
              <img src="images/search.png" alt="serach icon" className='me-auto ' width="20" />
            </a>

            <a href="#" onClick={() => setDisplayCart(!displayCart)}>
              <img src="images/cart.png" alt="cart icon" className='me-auto ms-3' width="20" />
            </a>
           
            {displayCart && <Cart />}

            <a href="#">
              <img src="images/Profile-nav.png" alt="serach icon" className='me-auto ms-3' width="20" />
            </a>
          </div>
        </div>
      </nav>

      <div className='logo-bar'>
        <div className='container h-100'>
          <div className='logo-box d-flex h-100 align-items-center justify-content-start'>
            <img src="images/menu.svg" width="40" />

            <img src="images/logo.png" />

            <div className='ms-auto'>
              <a href='#' className='link-orange'>Offers</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header