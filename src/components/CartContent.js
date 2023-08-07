import React, {useState} from 'react';
import { Button, Col, Container, Row, Table, Form } from 'react-bootstrap';
import './CartContent.css'
import productImage from './images/item-10.jpg';
import './js/functionality.js';

const CartContent = () => {
  const [inputValue, setInputValue] = useState(1)
  const increaseAmount = () => {
    setInputValue(inputValue + 1)
  }

  const decreaseAmount = () => {
    setInputValue(inputValue - 1)
  }
  const handleChangeInput = (e) => {
    setInputValue(e.target.value)
  }
  return (
    <section className='cart bgwhite p-t-70 p-b-100'>
      <div className='container'>
        <div className='container-table-cart pos-relative'>
          <div className='wrap-table-shopping-cart bgwhite'>
            <Table className='table-shopping-cart'>
              <thead>
                <tr className='table-head'>
                  <th className='column-1'></th>
                  <th className='column-2'>Product</th>
                  <th className='column-3'>Price</th>
                  <th className='column-4 p-l-70'>Quantity</th>
                  <th className='column-5'>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className='table-row'>
                  <td className="column-1">
                    <div className="cart-img-product b-rad-4 o-f-hidden">
                      <img src={productImage} alt="IMG-PRODUCT"/>
                    </div>
                  </td>
                  <td className="column-2">Men Tshirt</td>
                  <td className="column-3">$36.00</td>
                  <td className="column-4">
                    <div className="flex-w bo5 of-hidden w-size17">
                      <Button className="btn-num-product-down color1 flex-c-m size7 bg8 eff2" onClick={()=>decreaseAmount()}>
                        <i className="bi-12 bi bi-dash" aria-hidden="true"></i>
                      </Button>

                      <input className="size8 m-text18 t-center num-product" type="number" name="num-product1" value={inputValue} onChange={handleChangeInput}/>

                      <Button className="btn-num-product-up color1 flex-c-m size7 bg8 eff2" onClick={()=>increaseAmount()}>
                        <i className="bi-12 bi bi-plus" aria-hidden="true"></i>
                      </Button>
                    </div>
                  </td>
                  <td className="column-5">$36.00</td>
                </tr>

                <tr className='table-row'>
                  <td className="column-1">
                    <div className="cart-img-product b-rad-4 o-f-hidden">
                      <img src={productImage} alt="IMG-PRODUCT"/>
                    </div>
                  </td>
                  <td className="column-2">Men Tshirt</td>
                  <td className="column-3">$36.00</td>
                  <td className="column-4">
                    <div className="flex-w bo5 of-hidden w-size17">
                      <button className="btn-num-product-down color1 flex-c-m size7 bg8 eff2" onClick={()=>decreaseAmount()}>
                        <i className="bi-12 bi bi-dash" aria-hidden="true"></i>
                      </button>

                      <input className="size8 m-text18 t-center num-product" type="number" name="num-product2" value={inputValue} onChange={handleChangeInput}/>

                      <button className="btn-num-product-up color1 flex-c-m size7 bg8 eff2" onClick={()=>increaseAmount()}>
                        <i className="bi-12 bi bi-plus" aria-hidden="true"></i>
                      </button>
                    </div>
                  </td>
                  <td className="column-5">$36.00</td>
                </tr>

                <tr className='table-row'>
                  <td className="column-1">
                    <div className="cart-img-product b-rad-4 o-f-hidden">
                      <img src={productImage} alt="IMG-PRODUCT"/>
                    </div>
                  </td>
                  <td className="column-2">Men Tshirt</td>
                  <td className="column-3">$36.00</td>
                  <td className="column-4">
                    <div className="flex-w bo5 of-hidden w-size17">
                      <button className="btn-num-product-down color1 flex-c-m size7 bg8 eff2" onClick={()=>decreaseAmount()}>
                        <i className="bi-12 bi bi-dash" aria-hidden="true"></i>
                      </button>

                      <input className="size8 m-text18 t-center num-product" type="number" name="num-product3" value={inputValue} onChange={handleChangeInput}/>

                      <button className="btn-num-product-up color1 flex-c-m size7 bg8 eff2" onClick={()=>increaseAmount()}>
                        <i className="bi-12 bi bi-plus" aria-hidden="true"></i>
                      </button>
                    </div>
                  </td>
                  <td className="column-5">$36.00</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>

        <div className="flex-w flex-sb-m p-t-25 p-b-25 bo8 p-l-35 p-r-60 p-lr-15-sm">
          <div className="flex-w flex-m w-full-sm">
            <div className="size11 bo4 m-r-10">
              <input className="sizefull s-text7 p-l-22 p-r-22" type="text" name="coupon-code" placeholder="Coupon Code"/>
            </div>

            <div className="size12 trans-0-4 m-t-10 m-b-10 m-r-10">
              <button className="flex-c-m sizefull bg1 bo-rad-23 s-text1 trans-0-4">
                Apply coupon
              </button>
            </div>
          </div>

          <div className="size10 trans-0-4 m-t-10 m-b-10">
            <button className="flex-c-m sizefull bg1 bo-rad-23 s-text1 trans-0-4">
              Update Cart
            </button>
          </div>
        </div>
      </div>
      <div className='container'>
        <Row>
          <Col>
            Hello World
          </Col>
          <Col>
            <div className="bo9 w-size18 p-l-40 p-r-40 p-t-30 p-b-38 m-t-30 m-r-0 m-l-auto p-lr-15-sm">
              <h5 className="m-text20 p-b-24">
                Cart Totals
              </h5>

              <div className="flex-w flex-sb-m p-b-12">
                <span className="s-text18 w-size19 w-full-sm">
                  Subtotal:
                </span>

                <span className="m-text21 w-size20 w-full-sm">
                  $39.00
                </span>
              </div>

              <div className="flex-w flex-sb bo10 p-t-15 p-b-20">
                <span className="s-text18 w-size19 w-full-sm">
                  Shipping:
                </span>

                <div className="w-size20 w-full-sm">
                  <p className="s-text8 p-b-23">
                    There are no shipping methods available. Please double check your address, or contact us if you need any help.
                  </p>

                  <span className="s-text19">
                    Calculate Shipping
                  </span>

                  <div className="size13 bo4 m-b-12">
                    <input className="sizefull s-text7 p-l-15 p-r-15" type="text" name="state" placeholder="State /  country"/>
                  </div>

                  <div className="size13 bo4 m-b-12">
                  <input className="sizefull s-text7 p-l-15 p-r-15" type="text" name="state" placeholder="City"/>
                  </div>

                  <div className="size13 bo4 m-b-22">
                    <input className="sizefull s-text7 p-l-15 p-r-15" type="text" name="postcode" placeholder="Postcode / Zip"/>
                  </div>

                  <div className="size14 trans-0-4 m-b-10">
                    <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
                      Update Totals
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex-w flex-sb-m p-t-26 p-b-30">
                <span className="m-text22 w-size19 w-full-sm">
                  Total:
                </span>

                <span className="m-text21 w-size20 w-full-sm">
                  $39.00
                </span>
              </div>

              <div className="size15 trans-0-4">
                <Button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
    
  )
}

export default CartContent