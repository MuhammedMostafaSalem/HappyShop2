import React, { useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import ViewProductsDetalisHook from '../../CustomHook/Products/ViewProductsDetalisHook';
import { useParams } from 'react-router-dom';
import ckeckIcon from '../../images/checkIcon.png';
import AddToCartHook from '../../CustomHook/Cart/AddToCartHook';

const ProductText = () => {
  const {id} = useParams();

  const [item, images, cat, brand] = ViewProductsDetalisHook(id);
  const [indexColor, colorClick, addToCartHandel] = AddToCartHook(id, item)

  return (
    <div>
      <Row className="mt-2">
        <div className="cat-text">{cat.name} :</div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline">
            {item.title}
            <div className="cat-rate d-inline mx-3">{item.ratingsAverage}</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <div className="cat-text d-inline">الماركة :</div>
          <div className="barnd-text d-inline mx-1">{brand.name}</div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">
          {
            item.availableColors ? 
              item.availableColors.map((color, index) => {
                return (
                  <div
                    className="color ms-2 border"
                    style={{ backgroundColor: color }}
                    key={index}
                    onClick={() => colorClick(index, color)}
                    >
                      {indexColor === index ? <img style={{width: '25px', height: '25px'}} src={ckeckIcon} alt=''/> : null}
                  </div>
                )
              })
            : null
          }
        </Col>
      </Row>
      <Row>
      <Col md="8" className="mt-4">
        <div className="cat-text d-inline">الكمية المتاحة :</div>
        <div className="barnd-text d-inline mx-1">{item.quantity}</div>
      </Col>
    </Row>

      <Row className="mt-4">
        <div className="cat-text">المواصفات :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">{item.description}</div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          {
            item.priceAfterDiscount >= 1 ?
              <div className="product-price d-inline px-3 py-3 border">
              <span style={{textDecoration: "line-through", fontSize: '15px'}}>{item.price}</span> {item.priceAfterDiscount} جنية
              </div>
            : item.price
          }
          <div onClick={addToCartHandel} className="product-cart-add px-3 py-3 d-inline mx-3">اضف للعربة</div>
        </Col>
      </Row>
    </div>
  )
}

export default ProductText
