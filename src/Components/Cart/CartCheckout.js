import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const CartCheckout = ({totalPriceCart, itemsNums, totalPriceAfterDiscount, couponNameRes, deleteAllCartHandle, couponName, onChangeCoupon, submitCouponHandel, cartItems}) => {
    const navigate = useNavigate()
    useEffect(() => {
        if(couponNameRes) {
            onChangeCoupon(couponNameRes)
        }
    }, [couponNameRes])

    const checkOutHandle = () => {
        if(cartItems.length >= 1) {
            navigate('/order/paymethoud')
        } else {
            toast.warning('من فضلك اضف منتجات للشراء')
        }
    }

    return (
        <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
            <Col xs="12" className="d-flex flex-column">
                <div className="d-flex">
                    <input
                        value={couponName}
                        onChange={e => onChangeCoupon(e.target.value)}
                        className="copon-input d-inline text-center"
                        placeholder="كود الخصم"
                    />
                    <button onClick={submitCouponHandel} className="copon-btn d-inline ">تطبيق</button>
                </div>
                <div className="product-price d-inline w-100 my-3 border">
                    {
                        totalPriceAfterDiscount >= 1 ?
                        `بعد الخصم ${totalPriceAfterDiscount} جنية`
                        : `${totalPriceCart} جنية`
                    }
                </div>
                <button onClick={checkOutHandle} className="product-cart-add w-100 px-2"> اتمام الشراء</button>
            </Col>
            <Col xs="12" className='mt-4'>
                {
                    itemsNums > 1 ?
                        <button onClick={deleteAllCartHandle} className="product-cart-add w-100 px-2">حذف الكل</button>
                    : null
                }
            </Col>
        </Row>
    )
}

export default CartCheckout
