import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Promotion-Header.css';
import { Form, Nav } from 'react-bootstrap';
import itemcart01 from './images/itemcart01.jpg';
import itemcart02 from './images/itemcart02.jpg';
import itemcart03 from './images/itemcart03.jpg';
import Hamburger from 'hamburger-react';


function App() {
  const [type, setType] = useState("USD");
  const [isOpen, setOpen] = useState(false);
  const [cartDropdownVisible, setCartDropdownVisible] = useState(false);
  const [mobilecartDropdownVisible, mobilesetCartDropdownVisible] = useState(false);

  const toggleCartDropdown = () => {
    setCartDropdownVisible(!cartDropdownVisible);
  };

  const handleCartClick = (event) => {
    event.stopPropagation();
  };

  const mobileToggleCartDropdown = () => {
    mobilesetCartDropdownVisible(!mobilecartDropdownVisible);
  };

  const mobileHandleCartClick = (event) => {
    event.stopPropagation();
  };

  const [sideMenuVisible, setSideMenuVisible] = useState(false);

  const toggleSideMenu = () => {
    setSideMenuVisible(!sideMenuVisible);
  };
  return (
    <header className='header1'>
      <div className='container-menu-header'>
        <div className='topbar'> 
          <div className='topbar-social'>
            <a href='#' className='topbar-social-item'><i className="bi bi-facebook"></i></a>
            <a href='#' className='topbar-social-item'><i className="bi bi-instagram"></i></a>
            <a href='#' className='topbar-social-item'><i className="bi bi-pinterest"></i></a>
            <a href='#' className='topbar-social-item'><i className="bi bi-snapchat"></i></a>
            <a href='#' className='topbar-social-item'><i className="bi bi-youtube"></i></a>
          </div>

          <span className='promotions'>
            Free shipping for standard order over $100
          </span>

          <div className='topbar-currency'>
            <Form.Group controlId="formBasicSelect">
            
              <Form.Control
                as="select"
                value={type}
                onChange={e => {
                  console.log("e.target.value", e.target.value);
                  setType(e.target.value);
                }}
                
                className='selectpicker currency shadow-none form-select'
              >
                
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="NGN">NGN</option>
                
              </Form.Control>
            </Form.Group>
          </div>
        </div>

        <div className='wrap-header'>
          <a className='logo' href='#'>
            <h2>Esca</h2>
          </a>

          <div className='wrapMenu'>
            <Nav className='menu'>
              <ul className="main_menu">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </Nav>
          </div>

          <div className='header-icons'>
            <a className='header-wrapicon1 dis-block'>
              <i className="bi bi-person-circle header-icon1"></i>
            </a>

            <span className="linedivide1"></span>

            <div className='header-wrapicon2'>
              <a className="header-icon1 js-show-header-dropdown" href='#' onClick={toggleCartDropdown}>
                <i className="bi bi-bag"></i>
                
              </a>
						  <span className="header-icons-noti">0</span>

              {cartDropdownVisible && (  
                <div className='header-cart header-dropdown' onClick={handleCartClick}>
                  <ul className="header-cart-wrapitem">
                    <li className="header-cart-item">
                      <div className="header-cart-item-img">
                        <img src={itemcart01} alt="IMG"/>
                      </div>

                      <div className="header-cart-item-txt">
                        <a href="#" className="header-cart-item-name">
                          White Shirt With Pleat Detail Back
                        </a>

                        <span className="header-cart-item-info">
                          1 x $19.00
                        </span>
                      </div>
                    </li>

                    <li className="header-cart-item">
                      <div className="header-cart-item-img">
                        <img src={itemcart02} alt="IMG"/>
                      </div>

                      <div className="header-cart-item-txt">
                        <a href="#" className="header-cart-item-name">
                          Converse All Star Hi Black Canvas
                        </a>

                        <span className="header-cart-item-info">
                          1 x $39.00
                        </span>
                      </div>
                    </li>

                    <li className="header-cart-item">
                      <div className="header-cart-item-img">
                        <img src={itemcart03} alt="IMG"/>
                      </div>

                      <div className="header-cart-item-txt">
                        <a href="#" className="header-cart-item-name">
                          Nixon Porter Leather Watch In Tan
                        </a>

                        <span className="header-cart-item-info">
                          1 x $17.00
                        </span>
                      </div>
                    </li>
                  </ul>

                  <div className="header-cart-total">
                    Total: $75.00
                  </div>

                  <div className="header-cart-buttons">
                    <div className="header-cart-wrapbtn">
                      <a href="cart.html" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                        View Cart
                      </a>
                    </div>

                    <div className="header-cart-wrapbtn">
                      <a href="#" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                        Check Out
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

                
        </div>
      </div>

      <div className="wrap_header_mobile">
        <a href="index.html" className="logo-mobile">
          <h2>Esca</h2>
        </a>

        <div className="btn-show-menu">
          <div className="header-icons-mobile">
            <a href="#" className="header-wrapicon1 dis-block">
              <i className="bi bi-person-circle header-icon1"></i>
            </a>

            <span className="linedivide2"></span>

            <div className="header-wrapicon2">
              <i className="bi bi-bag header-icon1 js-show-header-dropdown mobileBag" onClick={mobileToggleCartDropdown}></i>
              <span className="header-icons-noti">0</span>

              {mobilecartDropdownVisible && (   
                <div className="header-cart header-dropdown" onClick={mobileHandleCartClick}>
                  <ul className="header-cart-wrapitem">
                    <li className="header-cart-item">
                      <div className="header-cart-item-img">
                        <img src={itemcart01} alt="IMG"/>
                      </div>

                      <div className="header-cart-item-txt">
                        <a href="#" className="header-cart-item-name">
                          White Shirt With Pleat Detail Back
                        </a>

                        <span className="header-cart-item-info">
                          1 x $19.00
                        </span>
                      </div>
                    </li>

                    <li className="header-cart-item">
                      <div className="header-cart-item-img">
                        <img src={itemcart02} alt="IMG"/>
                      </div>

                      <div className="header-cart-item-txt">
                        <a href="#" className="header-cart-item-name">
                          Converse All Star Hi Black Canvas
                        </a>

                        <span className="header-cart-item-info">
                          1 x $39.00
                        </span>
                      </div>
                    </li>

                    <li className="header-cart-item">
                      <div className="header-cart-item-img">
                        <img src={itemcart03} alt="IMG"/>
                      </div>

                      <div className="header-cart-item-txt">
                        <a href="#" className="header-cart-item-name">
                          Nixon Porter Leather Watch In Tan
                        </a>

                        <span className="header-cart-item-info">
                          1 x $17.00
                        </span>
                      </div>
                    </li>
                  </ul>

                  <div className="header-cart-total">
                    Total: $75.00
                  </div>

                  <div className="header-cart-buttons">
                    <div className="header-cart-wrapbtn">
                      <a href="cart.html" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                        View Cart
                      </a>
                    </div>

                    <div className="header-cart-wrapbtn">
                      <a href="#" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                        Check Out
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="btn-show-menu-mobile Hamburger hamburger--squeeze" onClick={toggleSideMenu}>
            <span className="hamburger-box">
              <Hamburger size={25} toggled={isOpen} toggle={setOpen} className="hamburger-inner"></Hamburger>
            </span>
          </div>
        </div>
      </div>

      {sideMenuVisible && ( 

        <div className="wrap-side-menu">
          <nav className="side-menu">
            <ul className="main-menu">
              <li className="item-topbar-mobile p-l-20 p-t-8 p-b-8">
                <span className="topbar-child1">
                  Free shipping for standard order over $100
                </span>
              </li>

              <li className="item-topbar-mobile p-l-20 p-t-8 p-b-8">
                <div className="topbar-child2-mobile">
                  <span className="topbar-email">
                    fashe@example.com
                  </span>

                  <div className="topbar-language rs1-select2">
                    <Form.Group controlId="formBasicSelect">
              
                      <Form.Control
                        as="select"
                        value={type}
                        onChange={e => {
                          console.log("e.target.value", e.target.value);
                          setType(e.target.value);
                        }}
                        
                        className='selectpicker currency shadow-none form-select'
                      >
                        
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="NGN">NGN</option>
                        
                      </Form.Control>
                    </Form.Group>
                  </div>
                </div>
              </li>

              <li className="item-topbar-mobile p-l-10">
                <div className="topbar-social-mobile">
                  <a href="#" className="topbar-social-item fa fa-facebook"></a>
                  <a href="#" className="topbar-social-item fa fa-instagram"></a>
                  <a href="#" className="topbar-social-item fa fa-pinterest-p"></a>
                  <a href="#" className="topbar-social-item fa fa-snapchat-ghost"></a>
                  <a href="#" className="topbar-social-item fa fa-youtube-play"></a>
                </div>
              </li>

              <li className="item-menu-mobile">
                <a href="index.html">Home</a>
                <ul className="sub-menu">
                  <li><a href="index.html">Homepage V1</a></li>
                  <li><a href="home-02.html">Homepage V2</a></li>
                  <li><a href="home-03.html">Homepage V3</a></li>
                </ul>
                <i className="arrow-main-menu fa fa-angle-right" aria-hidden="true"></i>
              </li>

              <li className="item-menu-mobile">
                <a href="product.html">Shop</a>
              </li>

              <li className="item-menu-mobile">
                <a href="product.html">Sale</a>
              </li>

              <li className="item-menu-mobile">
                <a href="cart.html">Features</a>
              </li>

              <li className="item-menu-mobile">
                <a href="blog.html">Blog</a>
              </li>

              <li className="item-menu-mobile">
                <a href="about.html">About</a>
              </li>

              <li className="item-menu-mobile">
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default App;
