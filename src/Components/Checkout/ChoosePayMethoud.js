import React, { useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import ViewAllAddressesHook from '../../CustomHook/User/ViewAllAddressesHook'
import OrderPayCashHook from '../../CustomHook/CheckOut/OrderPayCashHook';
import { toast } from 'react-toastify';
import OrderPayCardHook from '../../CustomHook/CheckOut/OrderPayCardHook';
import AllUserCartHook from '../../CustomHook/Cart/AllUserCartHook';

const ChoosePayMethoud = () => {
    const [allAddresses] = ViewAllAddressesHook();
    const [addressDetalis, chooseAddressHandle, createOrderCashDandle] = OrderPayCashHook();
    const [itemsNums, cartItems, totalPriceCart, totalPriceAfterDiscount, couponNameRes, cartID] = AllUserCartHook()
    const [createOrderCardDandle] = OrderPayCardHook(addressDetalis)
    console.log(addressDetalis)

    const [type, setType] = useState('')

    const ChangePayMthoud = (e) => {
        setType(e.target.value)
    }

    const payHandle = () => {
        if(type === 'CARD') {
            createOrderCardDandle()
        } else if(type === 'CASH') {
            createOrderCashDandle()
        } else {
            toast.warning('من فضلك اختر طريقة دفع')
        }
    }
    
    return (
        <div>
            <div className="admin-content-text pt-5">اختر طريقة الدفع</div>
            <div className="user-address-card my-3 p-4">
                <Row className="d-flex justify-content-between">
                    <Col>
                        <input
                            onChange={ChangePayMthoud}
                            name="group"
                            id="group1"
                            type="radio"
                            value="CARD"
                            className="mt-2"
                            style={{cursor: 'pointer'}}
                        />
                        <label style={{cursor: 'pointer'}} className="mx-2" htmlFor="group1">
                            الدفع عن طريق البطاقه الائتمانية
                        </label>
                    </Col>
                </Row>

                <Row className="mt-3">
                    <Col className="d-flex">
                        <input
                            onChange={ChangePayMthoud}
                            name="group"
                            id="group2"
                            type="radio"
                            value="CASH"
                            className="mt-2"
                            style={{cursor: 'pointer'}}
                        />
                        <label style={{cursor: 'pointer'}} className="mx-2" htmlFor="group2">
                            الدفع عند الاستلام
                        </label>
                    </Col>
                </Row>

                <Row className="mt-4">
                    <Col className="d-flex">
                        <select name="address" id="address" className="select mt-1 px-2" onChange={chooseAddressHandle}>
                            <option value="0">اختر عنوان للشحن</option>
                            {
                                allAddresses ?
                                    allAddresses.map((item, index) => {
                                        return (
                                            <option key={index} value={item._id}>{item.alias}</option>
                                        )
                                    })
                                : null
                            }
                        </select>
                    </Col>
                </Row>
            </div>

            <Row>
                <Col xs="12" className="d-flex justify-content-end">
                    <div className="product-price d-inline   border">
                        {
                            totalPriceAfterDiscount >= 1 ?
                            `بعد الخصم ${totalPriceAfterDiscount} جنية`
                            : `${totalPriceCart} جنية`
                        } جنية
                    </div>
                    <div onClick={payHandle} className="product-cart-add px-3 pt-2 d-inline me-2"> اتمام الشراء</div>
                </Col>
            </Row>
        </div>
    )
}

export default ChoosePayMethoud
