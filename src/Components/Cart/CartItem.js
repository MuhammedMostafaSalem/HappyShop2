import React from 'react'
import { Col,Row } from 'react-bootstrap'
import mobile from '../../images/mobile.png'
import deleteicon from '../../images/delete.png'
import DeleteItemCartHook from '../../CustomHook/Cart/DeleteItemCartHook'
import EditQuantityCartHook from '../../CustomHook/Cart/EditQuantityCartHook'

const CartItem = ({item}) => {
  const [deleteItemCartHandle] = DeleteItemCartHook(item)
  const [itemCount, onChangeCount, editQuantityCartHandele] = EditQuantityCartHook(item)
  
  return (
    <Col xs="12" className="cart-item-body my-2 d-flex px-2">
      <img width="160px" height="197px" src={item.product.imageCover || mobile} alt="" />
      <div className="w-100">
        <Row className="justify-content-between">
          <Col sm="12" className=" d-flex flex-row justify-content-between">
            <div className="d-inline pt-2 cat-text">{item.product.category.name || ''}</div>
            <div className="d-flex pt-2 " style={{ cursor: "pointer" }}>
              <img src={deleteicon} alt="" width="20px" height="24px" />
              <div onClick={deleteItemCartHandle} className="cat-text d-inline me-2">ازاله</div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-2">
          <Col sm="12" className=" d-flex flex-row justify-content-start">
            <div className="d-inline pt-2 cat-title">
              {item.product.title || ''}
            </div>
            <div className="d-inline pt-2 cat-rate me-2">{item.product.ratingsAverage || 0}</div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="mt-1">
            <div className="cat-text d-inline">{item.product.brand.name || ''} :</div>
            <div className="barnd-text d-inline mx-1">ابل </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="mt-1 d-flex">
            {
              item.color === '' ? null
              : <div
                className="color ms-2 border"
                style={{ backgroundColor: `${item.color}` }}>
              </div>
            }
          </Col>
        </Row>

        <Row className="justify-content-between">
          <Col sm="12" className=" d-flex flex-row justify-content-between">
            <div className="d-inline pt-2 d-flex">
              <div className="cat-text  d-inline">الكميه</div>
              <input
                value={itemCount}
                onChange={onChangeCount}
                className="mx-2 "
                type="number"
                style={{ width: "40px", height: "25px" }}
              />
              <div onClick={editQuantityCartHandele} style={{padding: "0.2px 5px"}} className='btn btn-dark'>تطبيق</div>
            </div>
            <div className="d-inline pt-2 barnd-text">{item.price || 0} جنية</div>
          </Col>
        </Row>
      </div>
    </Col>
  )
}

export default CartItem
