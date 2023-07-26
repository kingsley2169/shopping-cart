import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import './CartContent.css'
import productImage from './images/item-10.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const CartContent = () => {
  return (
    <section className='cart bgwhite p-t-70 p-b-100'>
      <Container>
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
                      <Button className="btn-num-product-down color1 flex-c-m size7 bg8 eff2">
                        <i className="bi-12 bi bi-dash" aria-hidden="true"></i>
                      </Button>

                      <input className="size8 m-text18 t-center num-product" type="number" name="num-product1" />

                      <Button className="btn-num-product-up color1 flex-c-m size7 bg8 eff2">
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
                      <button className="btn-num-product-down color1 flex-c-m size7 bg8 eff2">
                        <i className="bi-12 bi bi-dash" aria-hidden="true"></i>
                      </button>

                      <input className="size8 m-text18 t-center num-product" type="number" name="num-product1" />

                      <button className="btn-num-product-up color1 flex-c-m size7 bg8 eff2">
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
                      <button className="btn-num-product-down color1 flex-c-m size7 bg8 eff2">
                        <i className="bi-12 bi bi-dash" aria-hidden="true"></i>
                      </button>

                      <input className="size8 m-text18 t-center num-product" type="number" name="num-product1" />

                      <button className="btn-num-product-up color1 flex-c-m size7 bg8 eff2">
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
              
              <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
                Apply coupon
              </button>
            </div>
          </div>

          <div className="size10 trans-0-4 m-t-10 m-b-10">
            <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
              Update Cart
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CartContent