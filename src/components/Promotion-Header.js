import React, { useRef, useEffect, useState } from 'react';
import './Promotion-Header.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Dropdown, Form, Nav, NavDropdown} from 'react-bootstrap';


function App() {
  const [type, setType] = useState("USD");
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
              <a className="header-icon1 js-show-header-dropdown">
                <i className="bi bi-bag"></i>
              </a>
						  <span className="header-icons-noti">0</span>

              <div className='header-cart header-dropdown'>
                <ul className="header-cart-wrapitem">
                  <li className="header-cart-item">
                    <div className="header-cart-item-img">
                      <a className="header-icon1 js-show-header-dropdown">
                        <i className="bi bi-bag"></i>
                      </a>
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
                      <img src="images/item-cart-02.jpg" alt="IMG"/>
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
                      <img src="images/item-cart-03.jpg" alt="IMG"/>
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
              </div>
            </div>
          </div>

                
        </div>
      </div>
    </header>
  );
}

export default App;
