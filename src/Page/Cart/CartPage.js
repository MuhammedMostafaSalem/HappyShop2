import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CartCheckout from '../../Components/Cart/CartCheckout'
import CartItem from '../../Components/Cart/CartItem'
import AllUserCartHook from '../../CustomHook/Cart/AllUserCartHook'
import DeleteCartHook from './../../CustomHook/Cart/DeleteCartHook';
import ApplayCouponHook from './../../CustomHook/Cart/ApplayCouponHook';

const CartPage = () => {
    const [itemsNums, cartItems, totalPriceCart, totalPriceAfterDiscount, couponNameRes, cartID] = AllUserCartHook();
    const [deleteAllCartHandle] = DeleteCartHook();
    const [couponName, onChangeCoupon, submitCouponHandel] = ApplayCouponHook();

    return (
        <Container style={{ minHeight: '670px' }}>
            <Row>
                <div className='cart-title mt-4'>عربة التسوق</div>
            </Row>
            <Row className='d-flex justify-content-center'>
                <Col xs="12" md="9">
                    {
                        cartItems ?
                            cartItems.map((item, index) => {
                                return (
                                    <CartItem key={index} item={item} />
                                )
                            })
                        : <div className='text-center'>لا يوجد منتجات هنا</div>
                    }
                </Col>

                <Col xs="6" md="3">
                    <CartCheckout cartItems={cartItems} totalPriceCart={totalPriceCart} itemsNums={itemsNums} totalPriceAfterDiscount={totalPriceAfterDiscount}  couponNameRes={couponNameRes} deleteAllCartHandle={deleteAllCartHandle} couponName={couponName} onChangeCoupon={onChangeCoupon} submitCouponHandel={submitCouponHandel} />
                </Col>
            </Row>
        </Container>
    )
}

export default CartPage
